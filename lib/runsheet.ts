/**
 * Service run-sheet — the Rituals port.
 *
 * The remedies site had timed, guided sequences. In a kitchen the equivalent
 * is T-minus choreography: what goes in the oven at 14:00 so the main lands
 * at 19:45. Derived from what each dish occupies during service, because a
 * cold-set dessert and a fried canape have opposite timelines.
 */

import type { Dish } from "./dishes";

export interface Task {
  /** Minutes before service starts. Positive = before. */
  offset: number;
  label: string;
  dishes: string[];
  /** Where the work happens, so tasks can be read per station. */
  station: string;
}

export interface RunSheetStep extends Task {
  /** Clock time, derived from the service time. */
  clock: string;
}

/**
 * How far ahead each kind of work starts. Cold work is done the day before;
 * anything fried is cooked into service and cannot be brought forward.
 */
const LEAD_MINUTES: Record<string, number> = {
  cold: 24 * 60,
  oven: 240,
  hob: 180,
  griddle: 30,
  fryer: 15
};

const STATION_LABEL: Record<string, string> = {
  cold: "Cold section",
  oven: "Oven",
  hob: "Stove",
  griddle: "Plancha",
  fryer: "Fryer"
};

/** The station a dish is timed against: whichever needs starting earliest. */
export function leadStation(dish: Dish): string {
  let best = "cold";
  let bestLead = -1;
  for (const e of dish.equipment) {
    const lead = LEAD_MINUTES[e];
    if (lead !== undefined && lead > bestLead) {
      bestLead = lead;
      best = e;
    }
  }
  return best;
}

function addMinutes(hhmm: string, minutes: number): string {
  const [h, m] = hhmm.split(":").map(Number);
  if (!Number.isFinite(h) || !Number.isFinite(m)) throw new Error(`Bad time: ${hhmm}`);
  // Wrap into a 24h clock; a -24h offset legitimately lands on the day before.
  const total = ((h * 60 + m + minutes) % 1440 + 1440) % 1440;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

/**
 * Build the sheet for a selection, working backwards from service time.
 * Dishes sharing a station and a lead time collapse into one line, because
 * that is how a kitchen actually works — you do all the pastry at once.
 */
export function buildRunSheet(dishes: Dish[], serviceTime = "19:30"): RunSheetStep[] {
  if (dishes.length === 0) return [];

  const groups = new Map<string, Dish[]>();
  for (const d of dishes) {
    const station = leadStation(d);
    const list = groups.get(station) ?? [];
    list.push(d);
    groups.set(station, list);
  }

  const steps: RunSheetStep[] = [];
  for (const [station, list] of groups) {
    const offset = LEAD_MINUTES[station] ?? 60;
    steps.push({
      offset,
      station: STATION_LABEL[station] ?? station,
      label:
        station === "cold"
          ? "Prep and set — done the day before"
          : station === "fryer"
            ? "Fry to order, into service"
            : `Start ${STATION_LABEL[station]?.toLowerCase() ?? station} work`,
      dishes: list.map((d) => d.name),
      clock: addMinutes(serviceTime, -offset)
    });
  }

  // Service itself always closes the sheet.
  steps.push({
    offset: 0,
    station: "Pass",
    label: "Service",
    dishes: [],
    clock: serviceTime
  });

  return steps.sort((a, b) => b.offset - a.offset);
}
