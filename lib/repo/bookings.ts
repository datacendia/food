/**
 * The calendar, and the question it exists to answer.
 *
 * lib/capacity.ts already knows whether two jobs can be delivered by one
 * kitchen, one van and one crew - it just had nothing real to ask about. Until
 * now the day page compared examples typed into a form. These are the bookings
 * you have actually taken, so "can I take this one?" is answered against the
 * Saturday you already sold.
 */
import { and, asc, eq, gte, lt } from "drizzle-orm";
import { db, bookings, clients, quotes } from "@/db";
import { CAN, assertCan } from "@/lib/permissions";
import type { Viewer } from "@/lib/session";
import { DISHES } from "@/data/dishes";
import { DISTRICTS, VENUE_TYPES } from "@/data/venues";
import {
  canTakeBooking, clashesForDay, DEFAULT_KIT,
  type Booking as CapacityBooking, type Clash, type Kit
} from "@/lib/capacity";
import type { ServiceTier } from "@/lib/dishes";

export interface BookingRow {
  id: string;
  quoteId: string | null;
  clientId: string | null;
  clientName: string | null;
  quoteName: string | null;
  eventDate: Date;
  serviceMinutes: number;
  durationMinutes: number;
  guests: number;
  tier: string;
  district: string | null;
  venue: string | null;
  dishIds: number[];
  confirmed: boolean;
  notes: string | null;
}

/**
 * Translate a stored booking into the shape lib/capacity.ts reasons about.
 *
 * Returns null when the district or venue is missing, because the travel and
 * van maths cannot run without them. A booking that quietly defaults to San
 * Isidro would produce a confident answer about the wrong journey.
 */
export function toCapacity(b: BookingRow): CapacityBooking | null {
  const district = DISTRICTS.find((d) => d.id === b.district);
  const venue = VENUE_TYPES.find((v) => v.id === b.venue);
  if (!district || !venue) return null;

  return {
    id: b.id,
    serviceMinutes: b.serviceMinutes,
    durationMinutes: b.durationMinutes,
    guests: b.guests,
    tier: b.tier as ServiceTier,
    dishes: DISHES.filter((d) => b.dishIds.includes(d.id)),
    district,
    venue
  };
}

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const nextDay = (d: Date) => new Date(startOfDay(d).getTime() + 86_400_000);

async function rows(where?: Parameters<typeof db.select>[0] extends never ? never : any) {
  const q = db
    .select({ b: bookings, clientName: clients.name, quoteName: quotes.name })
    .from(bookings)
    .leftJoin(clients, eq(clients.id, bookings.clientId))
    .leftJoin(quotes, eq(quotes.id, bookings.quoteId))
    .orderBy(asc(bookings.eventDate), asc(bookings.serviceMinutes));
  const out = where ? await q.where(where) : await q;
  return out.map((r) => ({ ...r.b, clientName: r.clientName, quoteName: r.quoteName }));
}

/** Everything on the books, soonest first. */
export async function listBookings(me: Viewer): Promise<BookingRow[]> {
  assertCan(CAN.seeKitchen, me.role, "see the bookings");
  return rows();
}

/** Everything happening on one day - the set capacity actually reasons about. */
export async function bookingsOn(me: Viewer, day: Date): Promise<BookingRow[]> {
  assertCan(CAN.seeKitchen, me.role, "see the bookings");
  return rows(and(gte(bookings.eventDate, startOfDay(day)), lt(bookings.eventDate, nextDay(day))));
}

export interface BookingInput {
  eventDate: Date;
  serviceMinutes: number;
  durationMinutes?: number;
  guests: number;
  tier: ServiceTier;
  district?: string | null;
  venue?: string | null;
  dishIds?: number[];
  quoteId?: string | null;
  clientId?: string | null;
  notes?: string | null;
}

export async function createBooking(me: Viewer, input: BookingInput): Promise<string> {
  assertCan(CAN.writeBookings, me.role, "add a booking");
  const [row] = await db.insert(bookings).values({
    eventDate: input.eventDate,
    serviceMinutes: input.serviceMinutes,
    durationMinutes: input.durationMinutes ?? 180,
    guests: input.guests,
    tier: input.tier,
    district: input.district ?? null,
    venue: input.venue ?? null,
    dishIds: input.dishIds ?? [],
    quoteId: input.quoteId ?? null,
    clientId: input.clientId ?? null,
    notes: input.notes ?? null
  }).returning({ id: bookings.id });
  return row.id;
}

export async function deleteBooking(me: Viewer, id: string): Promise<void> {
  assertCan(CAN.writeBookings, me.role, "remove a booking");
  await db.delete(bookings).where(eq(bookings.id, id));
}

export async function confirmBooking(me: Viewer, id: string, confirmed: boolean): Promise<void> {
  assertCan(CAN.writeBookings, me.role, "confirm a booking");
  await db.update(bookings).set({ confirmed }).where(eq(bookings.id, id));
}

/** What is already clashing on a day you have sold. */
export interface DayVerdict {
  day: Date;
  bookings: BookingRow[];
  /** Bookings the capacity engine cannot judge, and why. */
  unjudgeable: { id: string; reason: string }[];
  clashes: Clash[];
}

export async function dayVerdict(me: Viewer, day: Date, kit: Kit = DEFAULT_KIT): Promise<DayVerdict> {
  const onDay = await bookingsOn(me, day);
  const judgeable: CapacityBooking[] = [];
  const unjudgeable: { id: string; reason: string }[] = [];

  for (const b of onDay) {
    const c = toCapacity(b);
    if (c) judgeable.push(c);
    else unjudgeable.push({
      id: b.id,
      reason: !b.district ? "no district, so the travel time is unknown" : "no venue type"
    });
  }
  return { day, bookings: onDay, unjudgeable, clashes: clashesForDay(judgeable, kit) };
}

/** Whether a proposed job fits beside what is already sold that day. */
export async function couldTake(
  me: Viewer, candidate: BookingInput & { id?: string }, kit: Kit = DEFAULT_KIT
): Promise<{ ok: boolean; clashes: Clash[]; against: number } | { ok: null; why: string }> {
  assertCan(CAN.seeKitchen, me.role, "check whether a day can take another job");

  const district = DISTRICTS.find((d) => d.id === candidate.district);
  const venue = VENUE_TYPES.find((v) => v.id === candidate.venue);
  if (!district || !venue) {
    return { ok: null, why: "Pick a district and a venue — the travel maths needs both." };
  }

  const existing = (await bookingsOn(me, candidate.eventDate))
    .filter((b) => b.id !== candidate.id)
    .map(toCapacity)
    .filter((b): b is CapacityBooking => b !== null);

  const result = canTakeBooking(existing, {
    id: candidate.id ?? "candidate",
    serviceMinutes: candidate.serviceMinutes,
    durationMinutes: candidate.durationMinutes ?? 180,
    guests: candidate.guests,
    tier: candidate.tier,
    dishes: DISHES.filter((d) => (candidate.dishIds ?? []).includes(d.id)),
    district,
    venue
  }, kit);

  return { ...result, against: existing.length };
}
