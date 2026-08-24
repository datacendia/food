import type { District, VenueType } from "@/lib/venues";

/**
 * Lima districts we cater to, with round-trip drive time from the kitchen.
 *
 * The kitchen is assumed to be in Magdalena del Mar - close to Surquillo N.1
 * and a reasonable run to the Terminal Pesquero. Change KITCHEN_DISTRICT in
 * lib/venues.ts if that moves and every figure below re-bases.
 *
 * driveMinutes is ONE WAY and off-peak. peakExtra is what Lima traffic adds
 * to that one-way leg between about 17:00 and 20:00 - which is exactly when
 * an evening event loads in. Ignoring it is how a transport line ends up
 * half what it should be.
 *
 * UNVERIFIED. These are map estimates, not timed runs. Drive each of the
 * districts you actually work in once and replace the numbers.
 */
export const DISTRICTS: District[] = [
  { id: "magdalena",    name: "Magdalena del Mar", driveMinutes: 5,  peakExtra: 5,  km: 2 },
  { id: "san-isidro",   name: "San Isidro",        driveMinutes: 15, peakExtra: 20, km: 7 },
  { id: "miraflores",   name: "Miraflores",        driveMinutes: 18, peakExtra: 22, km: 9 },
  { id: "barranco",     name: "Barranco",          driveMinutes: 25, peakExtra: 25, km: 13 },
  { id: "surco",        name: "Santiago de Surco", driveMinutes: 28, peakExtra: 30, km: 15 },
  { id: "la-molina",    name: "La Molina",         driveMinutes: 40, peakExtra: 40, km: 22 },
  { id: "san-borja",    name: "San Borja",         driveMinutes: 22, peakExtra: 25, km: 11 },
  { id: "lima-centro",  name: "Cercado de Lima",   driveMinutes: 25, peakExtra: 35, km: 12 },
  { id: "callao",       name: "Callao",            driveMinutes: 35, peakExtra: 35, km: 18 },
  { id: "chorrillos",   name: "Chorrillos",        driveMinutes: 30, peakExtra: 28, km: 16 },
  { id: "pachacamac",   name: "Pachacamac",        driveMinutes: 55, peakExtra: 30, km: 34 },
  { id: "asia",         name: "Asia (km 97)",      driveMinutes: 95, peakExtra: 45, km: 97 }
];

/**
 * What the venue itself does to a load-in, independent of how far away it is.
 *
 * crewMinutes is the extra crew time each way. A third-floor apartment with no
 * lift is not the same job as a hotel with a goods entrance, and pretending
 * otherwise is unpaid labour.
 */
export const VENUE_TYPES: VenueType[] = [
  {
    id: "hotel",
    name: "Hotel or event venue",
    crewMinutes: 0,
    hasKitchen: true,
    hasPower: true,
    note: "Goods entrance, working kitchen, power on tap. The easy case."
  },
  {
    id: "restaurant",
    name: "Restaurant taken over",
    crewMinutes: 10,
    hasKitchen: true,
    hasPower: true,
    note: "Kitchen exists but is not yours. Agree hob and oven access in writing."
  },
  {
    id: "office",
    name: "Corporate office",
    crewMinutes: 25,
    hasKitchen: false,
    hasPower: true,
    note: "Lifts, security sign-in and a booking slot. Power is fine; there is no kitchen."
  },
  {
    id: "house",
    name: "Private house",
    crewMinutes: 20,
    hasKitchen: true,
    hasPower: true,
    note: "Domestic kitchen only — one oven, four rings. Plan around it, not with it."
  },
  {
    id: "apartment",
    name: "Apartment, no goods lift",
    crewMinutes: 45,
    hasKitchen: true,
    hasPower: true,
    note: "Everything goes up in a passenger lift or on stairs. The most under-quoted venue there is."
  },
  {
    id: "garden",
    name: "Garden or terrace",
    crewMinutes: 35,
    hasKitchen: false,
    hasPower: false,
    note: "No kitchen and often no power. Live stations need a generator hired in."
  },
  {
    id: "beach",
    name: "Beach or field",
    crewMinutes: 60,
    hasKitchen: false,
    hasPower: false,
    note: "Nothing is there. Water, power, shade and waste all arrive on the van."
  }
];
