/**
 * Can you actually take this booking?
 *
 * conflicts.ts asks whether one menu can be cooked. This asks whether a DAY
 * can be delivered: two events on the same Saturday, one plancha, one van,
 * and a crew who cannot be in San Isidro and Asia at the same time.
 *
 * Everything here is a hard constraint of physical kit and hours, so it says
 * no rather than warning. A caterer who takes a second Saturday booking they
 * cannot staff loses both jobs, not one.
 */
import type { Dish, ServiceTier } from "./dishes";
import { TIERS } from "./pricing";
import { transportCost, LOAD_CREW, type District, type VenueType } from "./venues";

/** What the business physically owns. Change these and the answers change. */
export interface Kit {
  planchas: number;
  fryers: number;
  ovens: number;
  vans: number;
  /** People who can be on a job, including you. */
  crew: number;
  /** Longest shift anyone works, in minutes. */
  maxShiftMinutes: number;
}

export const DEFAULT_KIT: Kit = {
  planchas: 1,
  fryers: 1,
  ovens: 1,
  vans: 1,
  crew: 4,
  maxShiftMinutes: 12 * 60
};

export interface Booking {
  id: string;
  /** Minutes from midnight when food must be on the table. */
  serviceMinutes: number;
  /** How long service itself runs. */
  durationMinutes: number;
  guests: number;
  tier: ServiceTier;
  dishes: Dish[];
  district: District;
  venue: VenueType;
}

export type ClashKind = "equipment" | "crew" | "van" | "travel" | "shift";

export interface Clash {
  kind: ClashKind;
  /** Bookings involved, by id. */
  bookings: string[];
  detail: string;
}

/** When the crew must leave the kitchen, and when they get back. */
export function windowFor(b: Booking): { out: number; back: number } {
  const t = transportCost({ tier: b.tier, district: b.district, venue: b.venue, peak: true });
  const oneWayDrive = t.driveMinutes / 2;
  const setup = 60 + b.venue.crewMinutes;
  return {
    out: b.serviceMinutes - oneWayDrive - setup,
    back: b.serviceMinutes + b.durationMinutes + 45 + oneWayDrive
  };
}

function overlaps(a: { out: number; back: number }, b: { out: number; back: number }): boolean {
  return a.out < b.back && b.out < a.back;
}

/** Live-station kit a booking ties up for its whole window. */
function kitNeeded(b: Booking): { planchas: number; fryers: number } {
  const live = b.dishes.filter((d) => d.format === "live-station");
  return {
    planchas: live.filter((d) => d.equipment.includes("griddle")).length > 0 ? 1 : 0,
    fryers: live.filter((d) => d.equipment.includes("fryer")).length > 0 ? 1 : 0
  };
}

function crewNeeded(b: Booking): number {
  const tier = TIERS[b.tier];
  const waiters = tier.guestsPerWaiter > 0 ? Math.ceil(b.guests / tier.guestsPerWaiter) : 0;
  return waiters + tier.chefs + LOAD_CREW[b.tier];
}

/**
 * Everything that stops this day happening. An empty list means the day is
 * deliverable with the kit you own.
 */
export function clashesForDay(bookings: Booking[], kit: Kit = DEFAULT_KIT): Clash[] {
  const clashes: Clash[] = [];
  const windows = new Map(bookings.map((b) => [b.id, windowFor(b)]));

  // A shift nobody can work is a clash with the day itself.
  for (const b of bookings) {
    const w = windows.get(b.id)!;
    const length = w.back - w.out;
    if (length > kit.maxShiftMinutes) {
      clashes.push({
        kind: "shift",
        bookings: [b.id],
        detail:
          `${b.id} runs ${Math.round(length / 60)} hours door to door, past the ` +
          `${kit.maxShiftMinutes / 60}-hour shift limit. ${b.district.name} at peak is most of it.`
      });
    }
  }

  for (let i = 0; i < bookings.length; i++) {
    for (let j = i + 1; j < bookings.length; j++) {
      const a = bookings[i];
      const b = bookings[j];
      const wa = windows.get(a.id)!;
      const wb = windows.get(b.id)!;
      if (!overlaps(wa, wb)) continue;

      const ka = kitNeeded(a);
      const kb = kitNeeded(b);
      if (ka.planchas + kb.planchas > kit.planchas) {
        clashes.push({
          kind: "equipment",
          bookings: [a.id, b.id],
          detail: `Both need the plancha and you own ${kit.planchas}. Their windows overlap.`
        });
      }
      if (ka.fryers + kb.fryers > kit.fryers) {
        clashes.push({
          kind: "equipment",
          bookings: [a.id, b.id],
          detail: `Both need the fryer and you own ${kit.fryers}.`
        });
      }

      const need = crewNeeded(a) + crewNeeded(b);
      if (need > kit.crew) {
        clashes.push({
          kind: "crew",
          bookings: [a.id, b.id],
          detail:
            `${need} people needed across both at once; you have ${kit.crew}. ` +
            `Hire ${need - kit.crew} more or move one booking.`
        });
      }

      if (kit.vans < 2) {
        clashes.push({
          kind: "van",
          bookings: [a.id, b.id],
          detail: `One van cannot load in at ${a.district.name} and ${b.district.name} in the same window.`
        });
      }
    }
  }

  return clashes;
}

/** True when the day can be delivered with the kit you own. */
export function canTakeBooking(
  existing: Booking[],
  candidate: Booking,
  kit: Kit = DEFAULT_KIT
): { ok: boolean; clashes: Clash[] } {
  const clashes = clashesForDay([...existing, candidate], kit).filter((c) =>
    c.bookings.includes(candidate.id)
  );
  return { ok: clashes.length === 0, clashes };
}
