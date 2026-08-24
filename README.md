# Aye Si Cena

Scottish-Peruvian catering in Lima. Next.js 14 (App Router), TypeScript, Tailwind.

The name always leads. "Aye, Si, Cena" is the business; *dinner* is the
explanation, not the title.

## Picking this up on another machine

```
git clone https://github.com/datacendia/food.git ayesicena
cd ayesicena
npm install
npm run dev          # http://localhost:3000
```

Needs Node 20 or newer (built on 22). The spreadsheet importer additionally
needs Python 3 with `openpyxl` — `pip install openpyxl` — but only if you are
re-importing the matrix. Everything else runs on Node alone.

Before you start work: `npm run validate`. It should say 239 passing.

## Where things stand

- 150 dishes, ids 1-150, all in the spreadsheet
- 150 recipes, one per dish — complete
- 239 tests passing
- **Every cost is an unverified estimate.** Nothing is quotable until a
  market run replaces them. The tests assert they stay flagged.

## What's here

| Route | Purpose |
|---|---|
| `/` | Landing — the name, the three tiers, the signature dishes |
| `/menu` | All 150 dishes with cost, menu value and food-cost % |
| `/packages` | The three service tiers and the rates behind the quote maths |
| `/builder` | Pick a tier, head count and dishes; live quote, conflicts, run sheet |
| `/find` | Filter by event type, flavour axis and service format |
| `/moments` | The evening as a sequence — arrival, sit-down, late |
| `/compare` | The same menu costed across all three tiers side by side |
| `/recipes` | Ingredients and method for every dish |
| `/seasonal` | What comes off the menu each month, and why |
| `/graph` | Which dishes share ingredients, and which stand alone |

## The spreadsheet is the master

`data/ayesicena-matrix.xlsx` is the source of truth for dishes, costs and
sourcing. Edit it, then regenerate:

```
npm run import-matrix
```

That rewrites `data/dishes.ts`, `data/flavours.ts` and `data/sourcing.ts`. Do
not hand-edit those three — they carry a GENERATED header and your changes
will be overwritten on the next import.

After a market run, the loop is: update the cost column, flip "Cost verified?"
to Yes, re-import, run the tests. Anything the new price pushes over the
food-cost ceiling fails immediately and by name.

## Where the event is

`lib/venues.ts` costs transport against the actual venue: drive time from the
kitchen, what Lima rush hour adds to it, fuel, load-in crew, and a generator
when a live station has no mains power. `data/venues.ts` holds twelve districts
and seven venue types.

The tiers used to carry a flat transport figure — S/60 for boxes, S/300 for
plated — the same whether the van went ten minutes down the road or ninety-five
minutes south to Asia. At the far end that understated the line by S/818 on one
event. It also over-charged every near job, which loses work.

Pass `district` and `venue` to `buildQuote` and it costs the real run. Omit them
and it falls back to the flat figure and labels itself an estimate on the line,
so an unset venue is visible rather than silently wrong.

Every rate in that module is UNVERIFIED. Drive the districts you actually work
in and replace the numbers.

## The pricing rules

`lib/pricing.ts` is the only place money is calculated, and it exists to
enforce three rules that are easy to get wrong and expensive to get wrong:

1. **IGV (18%) is explicit.** Quotes are stated net; IGV is added on top.
   Quoting gross while budgeting as if it were net loses about S/ 61 per guest
   at a S/ 400 head price.
2. **Canapes are priced per guest as a bite count**, never per piece. The
   per-piece figure in the data is a costing device only.
3. **Per-event costs come off before anything is called profit.** Menaje,
   staff, transport and packaging are deducted, so `contribution` is the real
   number.

`__tests__/pricing.test.ts` locks all three down.

## Fusion runs both ways

The matrix started as one move only: a British or European dish rebuilt with
Peruvian produce. Dishes 131-150 run it the other way — a Peruvian dish as the
base, with the Scottish or European swap made on top of it. Causa with haggis
in it, ceviche with a dill leche de tigre, lomo saltado with chips fried in
dripping.

`__tests__/matrix.test.ts` holds that block to at least twenty dishes across
four categories, and requires every entry to actually name its European move.
Scottish stays the spine at 77 of 150.

## The standalone build

`npm run standalone` writes a single self-contained `standalone.html` — the
whole thing, no server, openable from a USB stick or emailed to a client.

It re-implements the quote maths in vanilla JS, which is a real risk of drift,
so `npm run verify:standalone` drives it in a headless browser and checks its
rendered figures against `lib/pricing.ts`. Run that after any pricing change.
It needs Playwright's Chromium available locally.

Verified against the 150-dish data, recipes pane included.

## Commands

```
npm install
npm run dev                # local dev
npm run test               # pricing, matrix, recipes, seasonal, graph, conflicts
npm run typecheck
npm run validate           # typecheck + test — run this before committing
npm run build
npm run import-matrix      # regenerate data files from the spreadsheet
npm run standalone         # build the single-file HTML
npm run verify:standalone  # build it, then check it in a real browser
```

## Still to do

- Verify all 150 costs against real Lima suppliers
- Time the drive to the districts you actually work in, and replace the
  estimates in `data/venues.ts`
- Confirm the 19 seasonal windows against the market, and the *vedas* against
  the legal calendar
- A real allergen audit — the current allergens are derived from dish text and
  are a starting point, not a legal one
- Spanish translation
- WhatsApp quote export
- Netlify is not yet connected to this repo — deploys are still manual
