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

Before you start work: `npm run validate`. It should say 426 passing.

## Where things stand

- 223 dishes, ids 1-223, all in the spreadsheet
- 223 recipes, one per dish — complete, 1,729 ingredient lines, all priced
- 426 tests passing
- Spanish is 100% of every pane, recipes included
- **Every cost is an unverified estimate.** Nothing is quotable until a
  market run replaces them. The tests assert they stay flagged.
- **The veda dates are estimates too.** They move every year by resolución
  ministerial. Check gob.pe/produce before selling crab, scallop, corvina,
  chita, bonito or anchoveta.

## What's here

| Route | Purpose |
|---|---|
| `/` | Landing — the name, the three tiers, the signature dishes |
| `/menu` | All 223 dishes with cost, menu value and food-cost % |
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

## What a recipe actually costs

`lib/costing.ts` prices every one of the 1,729 ingredient lines from
`data/prices.ts`, multiplies the batch out and divides by the yield, then
compares the answer with the cost the matrix claims. It never overwrites
either figure — which of the two is wrong is a question for a market run.

The gap is large and it runs mostly one way. Hand-checked example: 103
Highland Toffee is 1.5 kg sugar, 400 g butter and 400 ml condensed milk —
S/24.80 for 120 shards, so **S/0.21 a shard against a claimed S/1.20.** The
bakery is systematically over-costed, because sugar and flour are cheap and
the estimates assumed otherwise.

Prices in `data/prices.ts` are Lima estimates and are flagged unverified,
exactly like the dish costs. The point is not that the numbers are now right;
it is that they are now *checkable*, and the report says which to check first.

## Scaling to a real event

`lib/scaling.ts` takes a menu, a head count and a tier, and scales each recipe
to what the event needs — whole batches only, because half a batch of
shortbread is a different biscuit. `shoppingList()` then adds the scaled lines
together across the menu, so butter appears once with a total and a price, and
every row names the dishes that want it.

Canapés scale by bites per guest using the same rule `lib/pricing.ts` prices
by, so the shopping list and the quote cannot disagree about how much food is
being made.

## The kitchen book

```
npm run book
```

Writes `kitchen-book.html` — all 223 recipes, indexed by course, with page
breaks set so a recipe never splits across a page. Print to PDF from a
browser. Generated from the same data as the app, so it cannot drift.

`npm run book:es` writes `kitchen-book-es.html`: the same book with the market
names a Lima stallholder actually uses, so it can be handed to a cook or taken
shopping. `beef shin` is *osobuco*, `spring onion` is *cebolla china*, `ginger`
is *kion*.

## Spanish

The buyers are Peruvian, so **Spanish is the default** and English is the
toggle, not the other way round. The choice is remembered per browser.

`data/i18n.ts` holds the dictionary. Strings the app composes at render time —
"Staff — 2 waiters, 1 chef" is a different string every time — are matched by
shape in `ES_PATTERNS` instead, with the numbers carried through untouched.

Two things stay in English on purpose, and the coverage figure knows it:
**dish names**, because "Haggis Bonbons" is the product and translating it
sells a different thing; and **supplier names**, because Surquillo N.1 is
Surquillo N.1.

Four files carry it: `data/i18n.ts` (interface and dish descriptions),
`data/i18n-ingredients.ts` (what to ask for at the stall),
`data/i18n-recipes.ts` (every method step, yield, make-ahead note and hold
time — 2,079 strings), and `data/i18n-prep.ts`, which is the half of an
ingredient line that comes after the comma. That last one exists because
"300 g butter, softened" is an ingredient *and* an instruction, and
translating only the first half produced "mantequilla, softened", which is
worse than either language on its own.

`npm run verify:standalone` reports coverage per pane. **Every pane reads
100%**, recipes included.

The translator works on whole text nodes, so a label the renderer glues into
a longer string is invisible to it. Where that happens the fix is structural —
give the label its own `<span>` — not another dictionary entry. There is a
test holding the standalone's copy of the category labels to `lib/dishes.ts`,
because those were once stored pre-escaped for innerHTML ("Canapés &amp;
bites") and two of the seven categories silently stayed English for months.

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
Peruvian produce. Fifty dishes now run it the other way — a Peruvian dish as
the base, with the Scottish or European swap made on top of it. Causa with
haggis in it, ceviche with a dill leche de tigre, lomo saltado with chips
fried in dripping, a chupe de cangrejo thickened with oats the way a partan
bree is.

`__tests__/matrix.test.ts` holds that block to at least twenty dishes across
four categories, and requires every entry to actually name its European move.

**Scottish stays above half.** The rule was relaxed once, to "Scottish is the
largest line", on the grounds that Scottish-above-half and a real
Peruvian-base block were incompatible. They were only incompatible on a
191-dish menu. Growing the matrix was the honest fix rather than moving the
line: **Scottish 112 of 223 (50.2%), Peruvian 50 (22.4%).** If this test ever
fails, the answer is to cook more Scottish dishes.

## The standalone build

`npm run standalone` writes a single self-contained `standalone.html` — the
whole thing, no server, openable from a USB stick or emailed to a client.

It re-implements the quote maths in vanilla JS, which is a real risk of drift,
so `npm run verify:standalone` drives it in a headless browser and checks its
rendered figures against `lib/pricing.ts`. Run that after any pricing change.
It needs Playwright's Chromium available locally.

The verifier also holds the browser ports of the canonicaliser, the costing,
the dietary rules, the vedas and the substitution planner to their TypeScript
originals. They drifted once and the shopping list asked a butcher for two
litres of lamb.

The builder writes the quote as a WhatsApp message — head count, the menu by
name, per guest, IGV, and what the client pays — with a copy button and a
`wa.me` link. The verifier checks the total in the message is the same number
the panel shows.

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
npm run book               # the kitchen book, English
npm run book:es            # the kitchen book, Spanish market names
```

## Allergies and diets

`lib/dietary.ts` answers fifteen questions a real guest asks — the fourteen EU
declarable allergens plus pork and alcohol, and diets from vegan through
coeliac, low-FODMAP, lower-carb, halal and kosher on ingredients, children and
soft texture.

It reads the **recipe**, not the marketing copy, and it walks into
sub-preparations. Every ingredient the recipes use is explicitly classified in
`data/ingredient-attributes.ts`; an unclassified one fails the build rather
than being assumed safe, and voids the dish's answers rather than guessing.

Two of these are deliberately cautious about what they are not: halal here is
ingredients only and says nothing about slaughter, and lower-carb is a filter
rather than a nutrition panel. Read the notes before repeating either to a
guest.

## Vedas

`data/vedas.ts` holds Peru's legal closed seasons for the six species the
matrix uses. A veda is not a seasonality note: selling inside one is an
offence, so the planner blocks the dish outright rather than warning about it.

The dates encoded are the usual shape of the year and nothing more. They move
by resolución ministerial, sometimes twice in a year, and scallop vedas are
set bank by bank. `verified: false` on every row means nobody has checked.

## Still to do

Everything left needs somebody in Lima. None of it can be done from a laptop.

- Verify all 223 costs against real Lima suppliers — start with the dishes
  `costVariance()` puts furthest from their claimed figure. It reports 152 of
  223 more than 40% out, and the gap runs mostly one way.
- Replace the estimates in `data/prices.ts` with real invoice prices
- Time the drive to the districts you actually work in, and replace the
  estimates in `data/venues.ts`
- Confirm the 19 seasonal windows against the market, and the eight *vedas*
  against the current resolución ministerial at gob.pe/produce
- A real allergen audit. What `lib/dietary.ts` reports is read off the recipe,
  which is a far better starting point than dish text was, but it is still not
  a legal audit and the ingredient table is unverified against actual products
- Netlify is not connected to this repo — deploys are still manual. There is a
  `netlify.toml` ready for it; connecting it needs the account.

The React app under `app/` and the single-file `standalone.html` are two
implementations of the same data. The standalone is what gets sent to a
client; the React app is the development surface. `/find`, `/graph` and
`/builder` have drifted — the standalone has the diet chips, a real force
simulation and the shopping list, and the React pages do not. Reconciling
them means either porting three pages or retiring them, and that is a
decision about which surface is the product.
