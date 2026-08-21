# Aye Si Cena

Scottish-Peruvian catering in Lima. Next.js 14 (App Router), TypeScript, Tailwind.

## What's here

| Route | Purpose |
|---|---|
| `/` | Landing — the name, the three tiers, the signature dishes |
| `/menu` | All 100 dishes with cost, menu value and food-cost % |
| `/packages` | The three service tiers and the rates behind the quote maths |
| `/builder` | Pick a tier, head count and dishes; live quote including IGV |

## The pricing rules

`lib/pricing.ts` is the only place money is calculated, and it exists to enforce
three rules that are easy to get wrong and expensive to get wrong:

1. **IGV (18%) is explicit.** Quotes are stated net; IGV is added on top.
   Quoting gross while budgeting as if it were net loses ~S/ 61 per guest at a
   S/ 400 head price.
2. **Canapés are priced per guest as a bite count**, never per piece. The
   per-piece figure in the data is a costing device only.
3. **Per-event costs come off before anything is called profit.** Menaje, staff,
   transport and packaging are deducted, so `contribution` is the real number.

`__tests__/pricing.test.ts` locks all three down, plus the shape of the matrix
(100 dishes, the category split, and the 30% food-cost ceiling).

## Data

`data/dishes.ts` holds all 100 dishes. Every soles figure is a **planning
estimate** modelled to a 25-30% food cost — none are verified Lima supplier
prices. Replace them with real quotes after a buying run; the tests will tell
you immediately if a change pushes a dish over the ceiling.

## Commands

```
npm install
npm run dev        # local dev
npm run test       # pricing + data integrity
npm run typecheck
npm run validate   # typecheck + test
npm run build
```
