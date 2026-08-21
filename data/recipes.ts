import type { Recipe } from "@/lib/dishes";

/**
 * Working recipes for the matrix.
 *
 * Written for a catering kitchen, so every one carries a batch yield, a
 * make-ahead window and a hold note. Quantities are metric; where a Peruvian
 * market sells by the unit rather than the kilo the note says so.
 *
 * These are cook-from recipes, not costed ones. The cost figures in
 * data/dishes.ts are separate estimates and still unverified — a recipe telling
 * you to use 200g of butter does not mean anyone has priced that butter.
 *
 * Written in tranches. RECIPES is keyed by dish id; __tests__/recipes.test.ts
 * reports coverage against the 130 dishes rather than requiring completeness,
 * so a partial set is a legitimate state rather than a failing build.
 */
export const RECIPES: Recipe[] = [
  {
    dishId: 1,
    yields: "50 bonbons",
    prepMin: 60,
    cookMin: 20,
    ingredients: [
      { qty: "700 g", item: "lamb offal", note: "heart and liver; ask the butcher to trim and mince coarse" },
      { qty: "250 g", item: "lamb shoulder, minced" },
      { qty: "200 g", item: "pinhead oats", note: "avena entera, not instant" },
      { qty: "2", item: "onions, fine dice" },
      { qty: "30 g", item: "ají panca paste" },
      { qty: "1 tbsp", item: "ground white pepper" },
      { qty: "2 tsp", item: "ground mace", note: "the flavour that reads as Scottish; do not skip" },
      { qty: "500 ml", item: "lamb or beef stock" },
      { qty: "200 g", item: "flour, 4 eggs, 300 g panko", note: "for the crumbing station" },
      { qty: "300 ml", item: "huacatay aioli", note: "mayonnaise, huacatay paste, lime, garlic" }
    ],
    method: [
      "Toast the oats dry in a wide pan until they smell nutty, 4–5 minutes. Set aside.",
      "Sweat the onion in fat until soft and sweet, no colour. Add ají panca and cook out 2 minutes.",
      "Add both minces, break up hard, and cook until no pink remains and the pan is dry.",
      "Add the oats, spices and stock. Simmer 20 minutes until the oats swell and the mix holds a spoon.",
      "Spread on a tray, cool fast, then chill 4 hours or overnight until firm enough to roll.",
      "Roll 30 g balls. Flour, egg, panko — twice through egg and panko if you want them armoured for transport.",
      "Fry at 175 °C for 3 minutes until deep gold. Drain on a rack, never on paper."
    ],
    makeAhead:
      "The mix keeps 3 days chilled. Crumbed and uncooked they freeze a month — fry from frozen, add 90 seconds.",
    holds:
      "Crisp for about 40 minutes on a rack. In a closed box they go soft in 15, so transport them uncovered and box at the venue.",
    scaling:
      "Above 200 pieces the oats hydrate unevenly in one pot. Cook the base in batches of 2 kg or it catches."
  },
  {
    dishId: 2,
    yields: "50 empanadas",
    prepMin: 75,
    cookMin: 20,
    ingredients: [
      { qty: "1.2 kg", item: "empanada dough", note: "buy from a local bakery; cheaper and better than making it" },
      { qty: "800 g", item: "artisanal morcilla", note: "ask for it made with extra oats and white pepper" },
      { qty: "150 g", item: "pinhead oats, toasted" },
      { qty: "3", item: "onions, fine dice" },
      { qty: "2 tsp", item: "ground mace" },
      { qty: "1 tbsp", item: "white pepper" },
      { qty: "4", item: "manzana israel, peeled and diced", note: "firm apple that holds its shape" },
      { qty: "2", item: "rocoto, deseeded, fine dice" },
      { qty: "100 ml", item: "cider vinegar and 80 g sugar", note: "for the chutney" },
      { qty: "2", item: "eggs, beaten", note: "egg wash" }
    ],
    method: [
      "Chutney first: simmer apple, rocoto, vinegar and sugar 25 minutes until jammy. Cool. It keeps a month.",
      "Sweat the onion soft. Crumble in the morcilla and cook until it breaks down and darkens.",
      "Stir through the toasted oats, mace and white pepper. Taste for salt — morcilla varies wildly between butchers.",
      "Cool completely. A warm filling tears the dough.",
      "Fill 25 g per disc, fold, and repulgue the edge. Chill 30 minutes before baking so they hold their shape.",
      "Egg wash and bake at 190 °C for 18–20 minutes until deep gold."
    ],
    makeAhead:
      "Assemble and freeze raw on trays, then bag. Bake from frozen at 180 °C, 25 minutes.",
    holds:
      "Good warm or at room temperature, which is what makes them a drop-off staple. Two hours in a box without suffering."
  },
  {
    dishId: 3,
    yields: "50 oatcakes",
    prepMin: 45,
    cookMin: 18,
    ingredients: [
      { qty: "400 g", item: "medium oatmeal", note: "avena molida, not flour-fine" },
      { qty: "100 g", item: "wholemeal flour" },
      { qty: "1 tsp", item: "salt" },
      { qty: "80 g", item: "lard or beef dripping, melted" },
      { qty: "180 ml", item: "boiling water" },
      { qty: "600 g", item: "hot-smoked Andean trout", note: "Terminal Pesquero; smoke it yourself over tea and sugar if you can" },
      { qty: "400 g", item: "queso fresco, beaten smooth with 100 ml cream" },
      { qty: "1", item: "lemon, zest and juice" },
      { qty: "1 bunch", item: "dill or chives" }
    ],
    method: [
      "Mix oatmeal, flour and salt. Stir in the melted fat, then the boiling water, working fast — the dough must be handled warm.",
      "Roll 3 mm thin on an oatmeal-dusted bench. Cut 4 cm rounds.",
      "Bake at 170 °C for 16–18 minutes until dry and pale. They crisp as they cool, so do not chase colour.",
      "Beat the queso fresco with cream, lemon zest and a little juice until spreadable.",
      "Flake the trout, keeping the pieces visible — this should not look like a mousse.",
      "Assemble to order: cheese, trout, dill, a turn of pepper."
    ],
    makeAhead:
      "Oatcakes keep two weeks in a sealed tin and are better on day two. Cheese base holds 3 days.",
    holds:
      "Assemble within 30 minutes of service. The oatcake goes soft under the cheese faster than you expect.",
    scaling: "Roll and cut in batches — the dough stiffens as it cools and cracks rather than rolls."
  },
  {
    dishId: 4,
    yields: "50 mini bridies",
    prepMin: 70,
    cookMin: 25,
    ingredients: [
      { qty: "1.2 kg", item: "puff or rough-puff pastry" },
      { qty: "900 g", item: "beef mince", note: "ask for a coarse mince from falda; fine mince goes pasty" },
      { qty: "3", item: "red onions, fine dice" },
      { qty: "40 g", item: "ají amarillo paste" },
      { qty: "1 tbsp", item: "white pepper" },
      { qty: "200 ml", item: "beef stock" },
      { qty: "30 g", item: "butter" },
      { qty: "2", item: "eggs, beaten" }
    ],
    method: [
      "Do not pre-cook the beef. A bridie is filled raw, which is what keeps it juicy.",
      "Mix the mince with raw onion, ají amarillo, plenty of white pepper and salt. Add stock a splash at a time until the mix is loose but not wet.",
      "Cut 10 cm pastry rounds. Place 30 g of filling off-centre with a knob of butter on top.",
      "Fold to a half-moon, crimp firmly, and cut a small steam vent in the top. The vent is not optional — without it they burst.",
      "Chill 30 minutes. Egg wash.",
      "Bake at 200 °C for 12 minutes, then 180 °C for 12 more until deep gold and the vent stops steaming."
    ],
    makeAhead: "Freeze raw. Bake from frozen at 190 °C, 30 minutes.",
    holds: "Best within the hour. They stay good warm for 90 minutes in a covered box with a cloth under the lid to catch steam."
  },
  {
    dishId: 5,
    yields: "50 mini pies",
    prepMin: 90,
    cookMin: 30,
    ingredients: [
      { qty: "700 g", item: "flour, 300 g lard, 300 ml boiling water, 2 tsp salt", note: "hot water crust" },
      { qty: "1 kg", item: "lamb, coarse minced", note: "shoulder, some fat left in" },
      { qty: "30 g", item: "ají panca paste" },
      { qty: "2 tsp", item: "ground cumin" },
      { qty: "1 tbsp", item: "white pepper" },
      { qty: "2 tsp", item: "ground mace" },
      { qty: "150 ml", item: "lamb stock" }
    ],
    method: [
      "Hot water crust: bring lard and water to a boil, pour into the flour and salt, and mix to a dough. Work it while hot.",
      "Reserve a third for lids under a cloth. Mould the rest into 5 cm rings or a mini muffin tray while still warm and pliable.",
      "Let the cases cool and set — this is what gives the pie its straight sides.",
      "Mix the lamb raw with ají panca, cumin, mace, white pepper, salt and just enough stock to loosen.",
      "Fill to the brim, top with a lid, seal, and cut a vent.",
      "Bake at 190 °C for 30 minutes. The traditional shape sits the lid below the rim so the top holds gravy."
    ],
    makeAhead: "Bake a day ahead and reheat at 170 °C for 10 minutes. They are arguably better reheated.",
    holds: "Excellent. The hot water crust is engineered to travel — this is one of the most transport-proof things on the list.",
    scaling: "The crust must be moulded warm. Work in batches of 20 cases or the dough sets in the bowl."
  },
  {
    dishId: 6,
    yields: "50 rolls",
    prepMin: 50,
    cookMin: 25,
    ingredients: [
      { qty: "1.2 kg", item: "puff pastry" },
      { qty: "800 g", item: "lamb mince" },
      { qty: "200 g", item: "pinhead oats, toasted" },
      { qty: "2", item: "onions, grated" },
      { qty: "40 g", item: "chancaca, grated", note: "the sweetness that stops it tasting like a plain sausage roll" },
      { qty: "1 tbsp", item: "white pepper" },
      { qty: "2 tsp", item: "mace" },
      { qty: "150 ml", item: "stock" },
      { qty: "2", item: "eggs, beaten" },
      { qty: "50 g", item: "extra oats", note: "for the top" }
    ],
    method: [
      "Toast the oats until nutty. Cool.",
      "Mix lamb, oats, grated onion, chancaca, spices and stock. The mix should be tacky, not wet.",
      "Pipe or roll into 3 cm logs along the length of pastry strips.",
      "Roll, seal underneath, and chill 30 minutes before cutting — cold pastry cuts clean.",
      "Cut into 5 cm lengths. Egg wash and scatter with oats.",
      "Bake at 200 °C, 22–25 minutes, until the pastry is cooked underneath as well as on top."
    ],
    makeAhead: "Freeze raw in logs, cut from frozen, bake from frozen at 190 °C for 30 minutes.",
    holds: "90 minutes warm, indefinitely at room temperature. A reliable drop-off item."
  },
  {
    dishId: 7,
    yields: "50 croquettes",
    prepMin: 70,
    cookMin: 15,
    ingredients: [
      { qty: "600 g", item: "smoked paiche or trout", note: "Terminal Pesquero; smoked in-house if you have the means" },
      { qty: "800 g", item: "papa amarilla, boiled and riced" },
      { qty: "1", item: "leek, fine dice, sweated in butter" },
      { qty: "500 ml", item: "milk" },
      { qty: "60 g", item: "butter and 60 g flour", note: "for a tight béchamel" },
      { qty: "1", item: "bay leaf" },
      { qty: "200 g", item: "flour, 4 eggs, 300 g panko", note: "crumbing" }
    ],
    method: [
      "Warm the milk with the bay and the fish trimmings. Infuse 15 minutes, then strain.",
      "Make a tight béchamel with the butter, flour and infused milk. Cook it out properly — 5 minutes minimum or it tastes of raw flour.",
      "Fold in the riced potato, sweated leek and flaked fish. Season hard; potato flattens smoke.",
      "Spread 3 cm deep on a tray. Chill at least 6 hours. This mix must be properly cold or it will not roll.",
      "Roll 30 g barrels, then flour, egg and panko.",
      "Fry at 180 °C for 2–3 minutes. Deep colour, quick — you are heating through, not cooking."
    ],
    makeAhead: "Roll and freeze. Fry from frozen at 170 °C for 5 minutes so the centre catches up.",
    holds: "20 minutes and no more. This is a fry-to-order item, which is why it wants a live station.",
    scaling: "Do not exceed 12 in the fryer at once — the oil drops and they absorb it."
  },
  {
    dishId: 8,
    yields: "50 sliders",
    prepMin: 60,
    cookMin: 20,
    ingredients: [
      { qty: "1 kg", item: "beef mince" },
      { qty: "500 g", item: "pork mince", note: "the pork is what makes it Lorne rather than a burger" },
      { qty: "200 g", item: "fine rusk or dried breadcrumb" },
      { qty: "300 ml", item: "cold water" },
      { qty: "2 tbsp", item: "salt" },
      { qty: "1 tbsp", item: "white pepper" },
      { qty: "2 tsp", item: "ground coriander" },
      { qty: "2 tsp", item: "nutmeg" },
      { qty: "50", item: "small soft rolls" },
      { qty: "1 quantity", item: "salsa criolla", note: "red onion, lime, ají limo, coriander" }
    ],
    method: [
      "Mix the rusk with cold water and let it hydrate 10 minutes.",
      "Combine both minces with the rusk and every spice. Work it hard with your hands for 3–4 minutes — Lorne needs the protein to bind or it crumbles when sliced.",
      "Press into a lined loaf tin, 4 cm deep, flat and even. Chill overnight. This is not optional; it must be set to slice square.",
      "Turn out and cut 1 cm slices, then cut those into squares to fit the rolls.",
      "Griddle hard, 2 minutes a side. It should catch and colour.",
      "Build with salsa criolla and a little brown sauce."
    ],
    makeAhead: "The loaf keeps 3 days chilled or freezes sliced with paper between.",
    holds: "Griddle to order. Once built it is good for 20 minutes before the roll goes damp.",
    scaling: "One loaf tin per 25 sliders. Do not build a deeper block — the centre stays raw when you slice it."
  },
  {
    dishId: 9,
    yields: "50 bites",
    prepMin: 50,
    cookMin: 20,
    ingredients: [
      { qty: "1 kg", item: "papa amarilla, boiled and riced dry" },
      { qty: "150 g", item: "flour" },
      { qty: "50 g", item: "butter, melted" },
      { qty: "1 tsp", item: "salt" },
      { qty: "500 g", item: "morcilla, in 1 cm slices" },
      { qty: "50", item: "quail eggs" },
      { qty: "1", item: "ají amarillo, for a quick hollandaise or aioli" }
    ],
    method: [
      "Rice the potato while hot and let the steam escape — wet potato makes glue.",
      "Work in the flour, butter and salt to a soft dough. Handle it as little as possible.",
      "Roll 5 mm and cut 4 cm rounds. Griddle dry, 2 minutes a side, until blistered.",
      "Griddle the morcilla slices hard so the outside crisps and the inside stays soft.",
      "Fry the quail eggs to order in a blini pan, or soft-boil at 2 minutes 20 and halve.",
      "Stack: scone, morcilla, egg, a dot of ají aioli."
    ],
    makeAhead: "Scones hold 2 days and reheat on the griddle. Morcilla can be sliced ahead.",
    holds:
      "This is a live-station dish and only works as one. Assembled it survives about 10 minutes before the egg weeps into the scone."
  },
  {
    dishId: 10,
    yields: "50 toasts",
    prepMin: 40,
    cookMin: 240,
    ingredients: [
      { qty: "1.5 kg", item: "beef shin or osobuco, on the bone" },
      { qty: "2", item: "onions, 2 carrots, 1 head garlic" },
      { qty: "2", item: "bay leaves, 1 tbsp black peppercorns" },
      { qty: "1", item: "ají limo, whole" },
      { qty: "2 litres", item: "water" },
      { qty: "1 bunch", item: "parsley, chopped" },
      { qty: "1", item: "baguette or pan francés, sliced thin and toasted" }
    ],
    method: [
      "Cover the shin with water and aromatics. Barely simmer 4 hours until the meat surrenders and the liquid is gelatinous.",
      "Lift the meat, strain the stock, and reduce it hard to about 500 ml. It should set firm when a spoonful is chilled — test it before you go further.",
      "Shred the meat, discarding gristle but keeping fat.",
      "Season the meat hard with salt, pepper, parsley and finely minced ají limo. Cold food needs more salt than you think.",
      "Pack into terrines with the reduced stock, pressing out air. Chill overnight to set.",
      "Turn out, slice, and serve on toast with a sharp pickle."
    ],
    makeAhead: "Sets better on day two and keeps five days. This is a make-ahead dish by nature.",
    holds: "Slice cold, serve within the hour. In Lima heat it softens fast — keep the terrine in the fridge and slice in batches.",
    scaling: "The set depends on collagen, not gelatine. If you scale up, keep the bone-to-water ratio or it will not hold."
  },
  {
    dishId: 11,
    yields: "50 blinis",
    prepMin: 40,
    cookMin: 20,
    ingredients: [
      { qty: "800 g", item: "trout fillet, skin on, pin-boned" },
      { qty: "200 g", item: "coarse salt and 150 g sugar", note: "the cure" },
      { qty: "100 ml", item: "whisky" },
      { qty: "1 bunch", item: "dill, chopped" },
      { qty: "200 g", item: "aguaymanto, halved" },
      { qty: "250 g", item: "flour, 2 eggs, 300 ml milk, 1 tsp baking powder", note: "blini batter" },
      { qty: "300 ml", item: "crème fraîche or thick yoghurt" }
    ],
    method: [
      "Mix salt, sugar and dill. Lay half on a tray, place the trout skin-down, cover with the rest and pour over the whisky.",
      "Cure 12 hours refrigerated under a light weight. Longer than 18 and it turns to leather.",
      "Rinse, pat dry, and slice thin on the bias. It slices best straight from the fridge.",
      "Blinis: whisk the batter to double cream consistency and rest 30 minutes. Cook 3 cm rounds on a dry griddle, 1 minute a side.",
      "Top with crème fraîche, a fold of trout, half an aguaymanto and a frond of dill."
    ],
    makeAhead: "Cure up to 3 days ahead. Blinis keep a day and revive in a low oven for 3 minutes.",
    holds: "Assembled, 30 minutes. The blini softens under the cream, so build at the venue.",
    scaling: "Cure in single layers. Stacked fillets cure unevenly and the middle stays raw."
  },
  {
    dishId: 12,
    yields: "50 oatcakes",
    prepMin: 35,
    cookMin: 18,
    ingredients: [
      { qty: "1 batch", item: "oatcakes", note: "as dish 3" },
      { qty: "800 g", item: "queso fresco" },
      { qty: "200 ml", item: "double cream" },
      { qty: "1", item: "lemon, zest" },
      { qty: "400 g", item: "aguaymanto" },
      { qty: "80 g", item: "sugar" },
      { qty: "1 tbsp", item: "cider vinegar" }
    ],
    method: [
      "Crowdie substitute: warm the queso fresco with cream over low heat, then beat until smooth and thick. Season with salt and lemon zest.",
      "Hang it in muslin for 2 hours if it is loose — it must sit on an oatcake without sliding.",
      "Compote: simmer half the aguaymanto with sugar and vinegar 10 minutes until it breaks down. Fold in the rest raw for texture.",
      "Cool both fully.",
      "Assemble: a quenelle of crowdie, a spoon of compote, cracked pepper."
    ],
    makeAhead: "Both components keep 4 days. The compote is better made a day ahead.",
    holds: "Assemble within 30 minutes. Vegetarian, and one of the few canapés on the list that is."
  },
  {
    dishId: 13,
    yields: "50 toasts, about 1.2 kg of pâté",
    prepMin: 30,
    cookMin: 0,
    ingredients: [
      { qty: "800 g", item: "hot-smoked paiche or trout" },
      { qty: "400 g", item: "butter, softened", note: "plus 150 g clarified for the seal" },
      { qty: "2", item: "lemons, juice and zest" },
      { qty: "2 tsp", item: "ground mace" },
      { qty: "1 tsp", item: "cayenne or ground ají limo" },
      { qty: "1", item: "sourdough or rye loaf, for toast" }
    ],
    method: [
      "Flake the fish, checking for bones. Keep a third in visible flakes and reserve.",
      "Beat the softened butter with lemon zest, mace and cayenne until pale.",
      "Blitz two-thirds of the fish into the butter until smooth, then fold the reserved flakes through by hand.",
      "Season with lemon juice and salt. Taste cold — chilled fat mutes seasoning badly.",
      "Pack into pots or a terrine, smooth the top, and pour over clarified butter to seal 3 mm deep.",
      "Chill 4 hours until the seal sets."
    ],
    makeAhead: "Sealed pots keep 10 days. Once broken, 3 days.",
    holds: "The butter seal is the point — this travels better than almost anything else on the list. Serve at cool room temperature, not fridge-cold."
  },
  {
    dishId: 14,
    yields: "50 croquettes",
    prepMin: 60,
    cookMin: 15,
    ingredients: [
      { qty: "1.2 kg", item: "leftover stovies or braised beef and potato", note: "this dish exists to use yesterday's service" },
      { qty: "2", item: "onions, sweated soft" },
      { qty: "1 bunch", item: "huacatay, chopped" },
      { qty: "100 g", item: "flour, for binding if loose" },
      { qty: "200 g", item: "flour, 4 eggs, 300 g panko", note: "crumbing" }
    ],
    method: [
      "Mash the stovies coarse — texture is the point, this is not a purée.",
      "Fold in the sweated onion and huacatay. Season aggressively.",
      "If the mix will not hold a shape, work in flour a spoon at a time. Too much and they go pasty.",
      "Chill 4 hours minimum.",
      "Roll 30 g balls, crumb, and fry at 180 °C for 3 minutes."
    ],
    makeAhead: "Crumb and freeze. Fry from frozen at 170 °C for 5 minutes.",
    holds: "30 minutes crisp. Fry-to-order for anything better.",
    scaling: "Costed as a use-up dish. If you make the stovies specially the food cost roughly doubles."
  },
  {
    dishId: 15,
    yields: "50 tartlets",
    prepMin: 70,
    cookMin: 25,
    ingredients: [
      { qty: "800 g", item: "shortcrust pastry" },
      { qty: "600 g", item: "chicken thigh, poached and shredded" },
      { qty: "3", item: "leeks, sliced and sweated slowly in butter" },
      { qty: "300 g", item: "choclo kernels, blanched" },
      { qty: "400 ml", item: "chicken stock, reduced to 150 ml" },
      { qty: "200 ml", item: "double cream" },
      { qty: "12", item: "prunes, chopped small", note: "the traditional sweet note; keep them fine or they dominate" }
    ],
    method: [
      "Line 5 cm tartlet moulds, dock the bases, and blind bake at 180 °C for 12 minutes until dry.",
      "Sweat the leeks in butter over low heat for 20 minutes. They should collapse without colouring.",
      "Fold in the shredded chicken, choclo, prunes, reduced stock and cream. The mix should be thick enough to mound.",
      "Season well. Cock-a-leekie wants more pepper than seems reasonable.",
      "Fill the cases and bake 10 minutes at 180 °C to set."
    ],
    makeAhead: "Cases keep 3 days in a tin. Filling holds 2 days. Assemble and bake on the day.",
    holds: "Good warm or at room temperature for 2 hours. A dependable drop-off item."
  },
  {
    dishId: 16,
    yields: "50 skewers",
    prepMin: 45,
    cookMin: 12,
    ingredients: [
      { qty: "1.5 kg", item: "beef heart, trimmed of all silverskin and cubed" },
      { qty: "80 g", item: "ají panca paste" },
      { qty: "6", item: "garlic cloves, crushed" },
      { qty: "2 tbsp", item: "ground cumin" },
      { qty: "150 ml", item: "red wine vinegar" },
      { qty: "100 ml", item: "whisky" },
      { qty: "60 g", item: "chancaca, melted with the whisky", note: "the glaze" },
      { qty: "50", item: "bamboo skewers, soaked" }
    ],
    method: [
      "Trim the heart properly. Every piece of silverskin left on will be rubbery — this is most of the work.",
      "Marinate the cubes in ají panca, garlic, cumin, vinegar and salt for at least 4 hours, ideally overnight.",
      "Melt the chancaca into the whisky and reduce to a loose syrup. Keep warm.",
      "Thread 3 cubes per skewer.",
      "Grill over the hottest heat you have, 2 minutes a side. Beef heart is lean and goes to leather if you take it past medium.",
      "Brush with the whisky glaze as they come off, not before — the sugar burns."
    ],
    makeAhead: "Marinate and skewer a day ahead. Glaze keeps a week.",
    holds: "Serve within 10 minutes of the grill. This is a live-station dish and does not survive a box.",
    scaling: "Grill in relays of 15. Crowding the grill drops the heat and they stew."
  },
  {
    dishId: 17,
    yields: "50 buns",
    prepMin: 60,
    cookMin: 180,
    ingredients: [
      { qty: "2 kg", item: "pork belly, skin on" },
      { qty: "2 tbsp", item: "salt, 1 tbsp cumin, 6 garlic cloves" },
      { qty: "500 g", item: "morcilla, sliced" },
      { qty: "50", item: "small brioche or pan francés rolls" },
      { qty: "1 quantity", item: "salsa criolla", note: "red onion, lime, ají limo, coriander — dressed at the last minute" }
    ],
    method: [
      "Score the skin. Rub salt, cumin and garlic into the flesh side only; keep the skin dry.",
      "Roast at 160 °C for 2.5 hours, then 220 °C for 20 minutes to blister the crackling.",
      "Rest 30 minutes, then slice thick.",
      "Griddle the morcilla until crisp at the edges.",
      "Build: pork, a slice of morcilla, salsa criolla on top so the acid cuts down through the fat.",
      "Dress the salsa criolla no more than 15 minutes before service or the onion goes limp and grey."
    ],
    makeAhead: "Roast the belly a day ahead and reheat in slices. Crackling will not survive — re-crisp it separately under a grill.",
    holds: "45 minutes assembled before the bun goes greasy. Send components separately for drop-off."
  },
  {
    dishId: 18,
    yields: "50 pieces",
    prepMin: 45,
    cookMin: 10,
    ingredients: [
      { qty: "1 kg", item: "langostinos, peeled and deveined" },
      { qty: "3", item: "green plantains, for chifles" },
      { qty: "400 g", item: "mayonnaise" },
      { qty: "80 g", item: "tomato ketchup" },
      { qty: "2 tbsp", item: "brandy or pisco" },
      { qty: "1 tsp", item: "smoked paprika" },
      { qty: "2", item: "limes" },
      { qty: "1", item: "little gem lettuce, shredded fine" }
    ],
    method: [
      "Slice the plantain paper-thin on a mandoline and fry at 170 °C until rigid and pale gold. Salt immediately.",
      "Poach the langostinos 90 seconds in salted water, then plunge into iced water. Overcooked prawn is the usual failure here.",
      "Chop them coarse — a prawn cocktail should have bite.",
      "Marie Rose: mayonnaise, ketchup, pisco, paprika, lime juice and a good hit of salt.",
      "Dress the prawns just before service.",
      "Top each chifle with a pinch of lettuce and a spoon of prawns."
    ],
    makeAhead: "Chifles keep 3 days in a sealed tin. Sauce keeps 5 days. Prawns poach a day ahead.",
    holds: "Ten minutes. The chifle goes soft on contact, so assemble in front of the guest or send as a component box."
  },
  {
    dishId: 19,
    yields: "50 pieces",
    prepMin: 30,
    cookMin: 15,
    ingredients: [
      { qty: "50", item: "dried figs or large prunes" },
      { qty: "150 g", item: "pecans, toasted" },
      { qty: "500 g", item: "streaky bacon, halved lengthways" },
      { qty: "100 ml", item: "pisco, for soaking" },
      { qty: "50 g", item: "chancaca, melted", note: "optional glaze" }
    ],
    method: [
      "Soak the figs in warm pisco for an hour until plump. Drain and reserve the liquor.",
      "Push a toasted pecan into each fig.",
      "Wrap in bacon, overlapping, and secure with a cocktail stick.",
      "Roast at 200 °C for 12–15 minutes, turning once, until the bacon is crisp all over.",
      "Brush with chancaca melted into the reserved pisco as they come out."
    ],
    makeAhead: "Wrap a day ahead and hold raw in the fridge. They roast from cold in 18 minutes.",
    holds: "Good for an hour and reheatable, which makes them one of the more forgiving hot canapés.",
    scaling: "Roast on racks, not flat trays — sitting in rendered fat makes the bacon flabby."
  },
  {
    dishId: 20,
    yields: "50 pintxos",
    prepMin: 45,
    cookMin: 35,
    ingredients: [
      { qty: "1.2 kg", item: "papa amarilla, sliced 3 mm" },
      { qty: "12", item: "eggs" },
      { qty: "2", item: "onions, sliced thin" },
      { qty: "400 g", item: "morcilla, crumbled" },
      { qty: "300 ml", item: "olive oil, for confiting the potato" },
      { qty: "1", item: "baguette, sliced", note: "optional base" }
    ],
    method: [
      "Confit the potato and onion gently in oil at 140 °C until tender but intact, about 20 minutes. Do not fry them.",
      "Drain well, reserving the oil.",
      "Fry the morcilla crumb separately until crisp.",
      "Beat the eggs, season hard, and fold in the potato, onion and most of the morcilla. Let it sit 10 minutes — this is what makes a tortilla rather than an omelette.",
      "Cook in a wide pan over low heat until the base sets, then finish in a 170 °C oven for 12 minutes. The centre should still wobble.",
      "Cool completely before cutting into 3 cm squares. Top with the reserved morcilla."
    ],
    makeAhead: "Best made the morning of service. It suffers in the fridge overnight.",
    holds: "Excellent at room temperature for 3 hours. One of the strongest drop-off canapés on the list."
  },
  {
    dishId: 21,
    yields: "50 skewers",
    prepMin: 30,
    cookMin: 0,
    ingredients: [
      { qty: "50", item: "Tacna olives, pitted", note: "meaty and salty; the whole point of this pintxo" },
      { qty: "50", item: "good anchovy fillets in oil" },
      { qty: "50", item: "pickled ají limo or guindilla" },
      { qty: "100 ml", item: "olive oil" },
      { qty: "50", item: "cocktail sticks" }
    ],
    method: [
      "If pickling your own ají limo: split, deseed, and steep in warm 2:1 vinegar-to-water with a little sugar for 24 hours.",
      "Thread olive, a folded anchovy, then the chilli.",
      "Lay on a tray and spoon over olive oil.",
      "Serve cold. Three ingredients, no cooking — the discipline is entirely in sourcing.",
      "Taste an anchovy before you commit to a brand. A cheap one ruins this."
    ],
    makeAhead: "Assemble a day ahead and keep covered in oil.",
    holds: "Indefinitely at room temperature during service. Zero risk, zero labour on the day — useful ballast on a heavy menu."
  },
  {
    dishId: 22,
    yields: "50 cigars",
    prepMin: 60,
    cookMin: 20,
    ingredients: [
      { qty: "1 kg", item: "spinach or acelga, blanched and squeezed bone dry" },
      { qty: "500 g", item: "queso paria, crumbled", note: "standing in for feta" },
      { qty: "200 g", item: "queso fresco" },
      { qty: "4", item: "spring onions, fine" },
      { qty: "3", item: "eggs" },
      { qty: "1 tsp", item: "nutmeg" },
      { qty: "1 pack", item: "filo pastry", note: "imported; price it before you commit — this is an unverified cost" },
      { qty: "200 g", item: "butter, melted" }
    ],
    method: [
      "Squeeze the greens harder than you think necessary. Wet filling is the only way this dish fails.",
      "Mix greens, both cheeses, spring onion, egg, nutmeg and plenty of pepper.",
      "Cut filo into 10 cm strips, brush with butter, and layer two deep.",
      "Pipe filling along one end, fold the sides in, and roll into a cigar.",
      "Brush the outside with butter and bake at 190 °C for 18–20 minutes until uniformly gold.",
      "Work with the filo under a damp cloth or it shatters."
    ],
    makeAhead: "Roll and freeze raw. Bake from frozen at 180 °C, 25 minutes.",
    holds: "Crisp for 45 minutes. They soften in a closed box, so transport in a perforated tray.",
    scaling: "Filo dries out fast in Lima's coastal air. Roll in batches of 20 with the rest covered."
  },
  {
    dishId: 23,
    yields: "50 meatballs",
    prepMin: 45,
    cookMin: 20,
    ingredients: [
      { qty: "1.2 kg", item: "lamb mince" },
      { qty: "150 g", item: "breadcrumbs soaked in 150 ml milk" },
      { qty: "1", item: "onion, grated" },
      { qty: "1 bunch", item: "huacatay, chopped fine", note: "replaces mint; earthier, and it works" },
      { qty: "1 bunch", item: "flat parsley" },
      { qty: "2 tsp", item: "dried oregano" },
      { qty: "2", item: "eggs" },
      { qty: "400 g", item: "thick yoghurt, 1 lemon, 1 garlic clove", note: "for the dip" }
    ],
    method: [
      "Squeeze the soaked bread lightly — damp, not dripping.",
      "Mix lamb, bread, grated onion, herbs, oregano and egg. Season hard.",
      "Fry a teaspoon of the mix and taste it. Always taste before you roll 50 of anything.",
      "Roll 30 g balls and chill 30 minutes to firm.",
      "Fry in a little oil until browned all over, then finish in a 180 °C oven for 8 minutes.",
      "Serve with yoghurt whipped with lemon, garlic and salt."
    ],
    makeAhead: "Roll and refrigerate a day ahead, or freeze raw.",
    holds: "An hour warm; also good at room temperature, which most hot canapés are not."
  },
  {
    dishId: 24,
    yields: "50 bites",
    prepMin: 40,
    cookMin: 0,
    ingredients: [
      { qty: "1 loaf", item: "dense rye bread", note: "bake it or buy from a European bakery; standard pan francés will not hold" },
      { qty: "800 g", item: "cured or hot-smoked trout" },
      { qty: "300 g", item: "crème fraîche" },
      { qty: "2", item: "red onions, sliced paper-thin and quick-pickled" },
      { qty: "1 bunch", item: "dill" },
      { qty: "150 g", item: "butter, softened" },
      { qty: "1", item: "lemon" }
    ],
    method: [
      "Quick-pickle the onion: 20 minutes in warm vinegar with a pinch of sugar and salt. It should turn bright pink.",
      "Cut the rye into 4 cm squares. Butter them right to the edge — the butter is a moisture barrier, not a flavouring.",
      "Fold the trout on top rather than laying it flat. Smørrebrød is built for height.",
      "Add crème fraîche, pickled onion and dill.",
      "Finish with lemon zest and cracked pepper."
    ],
    makeAhead: "Components all hold 3 days. The bread is better on day two.",
    holds: "45 minutes assembled, thanks to the butter barrier. Better than most open sandwiches."
  },
  {
    dishId: 25,
    yields: "50 halves",
    prepMin: 90,
    cookMin: 15,
    ingredients: [
      { qty: "30", item: "quail eggs", note: "allow breakages; buy 36" },
      { qty: "700 g", item: "sausage meat" },
      { qty: "300 g", item: "morcilla, crumbled" },
      { qty: "100 g", item: "pinhead oats, toasted" },
      { qty: "1 tsp", item: "mace, 1 tbsp white pepper" },
      { qty: "150 g", item: "flour, 3 eggs, 250 g panko", note: "crumbing" }
    ],
    method: [
      "Boil the quail eggs exactly 2 minutes 20 seconds, then straight into iced water.",
      "Peel under water — quail shells are stubborn and the membrane tears the white if you rush.",
      "Mix sausage meat, morcilla, oats and spices.",
      "Flatten 25 g of mix in your palm, wrap around each egg, and seal completely. Any gap opens in the fryer.",
      "Flour, egg, panko. Chill 30 minutes.",
      "Fry at 170 °C for 4 minutes. Rest 5 minutes, then halve with a very sharp knife."
    ],
    makeAhead: "Fry a day ahead and serve at room temperature, which is traditional and easier.",
    holds: "Whole, several hours. Once halved the yolk dries within 30 minutes, so cut close to service.",
    scaling: "Peeling is the bottleneck: budget an hour per 50 eggs and do it the day before."
  },
  {
    dishId: 26,
    yields: "20 portions",
    prepMin: 120,
    cookMin: 45,
    ingredients: [
      { qty: "2.5 kg", item: "beef tenderloin, centre cut, trimmed", note: "Oregon Foods; this single line drives the whole plated tier's cost" },
      { qty: "1.5 kg", item: "mushrooms, blitzed to a coarse paste" },
      { qty: "3", item: "shallots, fine dice" },
      { qty: "60 g", item: "ají amarillo paste" },
      { qty: "300 g", item: "thin crêpes or prosciutto", note: "the moisture barrier" },
      { qty: "1.5 kg", item: "puff pastry" },
      { qty: "4", item: "egg yolks, for wash" },
      { qty: "1 litre", item: "beef stock, reduced to 300 ml", note: "demi-glace base" },
      { qty: "40 g", item: "extra ají amarillo", note: "finishing the sauce" }
    ],
    method: [
      "Duxelles: cook the mushroom paste in a dry wide pan until every drop of water has gone, 25–35 minutes. This is the step people rush and it is why Wellingtons go soggy.",
      "Add shallot and ají amarillo, cook out 5 minutes, season hard. Cool completely.",
      "Sear the tenderloin hard on every surface, 60 seconds a side. Cool, then brush with mustard.",
      "Lay crêpes or prosciutto on cling film, spread the duxelles, roll the beef inside tightly, and chill 1 hour to set the cylinder.",
      "Wrap in puff pastry, seal, chill another 30 minutes. Egg wash twice, scoring between.",
      "Bake at 200 °C for 20 minutes, then 180 °C until the core reads 52 °C for medium rare, about 15 minutes more.",
      "Rest 15 minutes before slicing. Sauce: whisk the ají amarillo into the reduced stock off the heat, with a little butter."
    ],
    makeAhead:
      "Assemble to the pastry stage a day ahead. Do not bake ahead — a reheated Wellington is a different, worse dish.",
    holds:
      "Slice to order. It holds 20 minutes at most before the pastry base goes. This is why it is plated-tier only.",
    scaling:
      "Make cylinders of 5 portions, not one long one. A 20-portion log cooks unevenly and you lose the ends."
  },
  {
    dishId: 27,
    yields: "20 portions",
    prepMin: 60,
    cookMin: 35,
    ingredients: [
      { qty: "20", item: "chicken breasts, skinless, trimmed" },
      { qty: "800 g", item: "morcilla, spiced up with oats and mace", note: "standing in for haggis" },
      { qty: "600 g", item: "streaky bacon" },
      { qty: "200 ml", item: "whisky" },
      { qty: "500 ml", item: "double cream" },
      { qty: "300 ml", item: "chicken stock" },
      { qty: "2 tbsp", item: "wholegrain mustard" }
    ],
    method: [
      "Butterfly each breast and open it out between cling film. Do not pound it thin — you need enough thickness to hold a filling.",
      "Roll 40 g of morcilla into a log and place along the centre.",
      "Close the breast around it, then wrap in overlapping bacon, which is what holds the whole thing together.",
      "Sear seam-side down first to set the bacon, then all over.",
      "Roast at 180 °C for 20–25 minutes until the core reads 68 °C.",
      "Sauce: deglaze the pan with whisky, flame or reduce by half, add stock, reduce, then cream and mustard. Reduce to coating consistency.",
      "Rest 10 minutes before slicing on the bias so the spiral shows."
    ],
    makeAhead: "Wrap raw a day ahead. The sauce holds 3 days.",
    holds: "Better than the Wellington — 40 minutes in a warm holding cabinet without real damage. A sensible plated main when the kitchen is remote."
  },
  {
    dishId: 28,
    yields: "20 portions",
    prepMin: 40,
    cookMin: 45,
    ingredients: [
      { qty: "1.5 kg", item: "smoked paiche or trout" },
      { qty: "1.5 kg", item: "papa nativa, mixed varieties, in chunks" },
      { qty: "4", item: "leeks, sliced" },
      { qty: "2", item: "onions, diced" },
      { qty: "2 litres", item: "whole milk" },
      { qty: "500 ml", item: "fish or light chicken stock" },
      { qty: "150 g", item: "butter" },
      { qty: "2", item: "bay leaves" },
      { qty: "1 bunch", item: "chives" }
    ],
    method: [
      "Poach the smoked fish in the milk with bay for 8 minutes. Lift out, flake, and keep the milk — it is now the base of the soup.",
      "Sweat the leek and onion in butter, low and slow, 15 minutes with no colour.",
      "Add the potato and the infused milk. Simmer until the potato is soft, 20 minutes.",
      "Crush about a third of the potato against the side of the pan. Do not blend it — chupe and cullen skink are both textured soups.",
      "Return the flaked fish, add stock to loosen, and warm through without boiling.",
      "Season carefully: smoked fish is already salty. Finish with chives and a lot of black pepper."
    ],
    makeAhead: "Better on day two. Keeps 3 days chilled.",
    holds: "Excellent. Holds hot for hours and reheats without splitting, provided you never let it boil.",
    scaling: "Scales cleanly to any volume — one of the few dishes here that does."
  },
  {
    dishId: 29,
    yields: "20 pies",
    prepMin: 90,
    cookMin: 35,
    ingredients: [
      { qty: "1 kg", item: "flour, 400 g lard, 400 ml boiling water, 1 tbsp salt", note: "hot water crust" },
      { qty: "2 kg", item: "lamb shoulder, coarse minced" },
      { qty: "50 g", item: "ají panca paste" },
      { qty: "1 tbsp", item: "ground cumin" },
      { qty: "2 tbsp", item: "white pepper" },
      { qty: "1 tbsp", item: "mace" },
      { qty: "300 ml", item: "lamb stock" },
      { qty: "1 quantity", item: "gravy, to serve" }
    ],
    method: [
      "Make the hot water crust and mould 9 cm cases while warm, leaving the traditional collar standing proud of the filling.",
      "Let the cases cool and firm before filling.",
      "Mix the lamb raw with the spices and just enough stock to loosen. Never pre-cook the filling.",
      "Fill to just below the collar. Cap with a pastry lid set low, so the rim forms a well for gravy.",
      "Cut a steam vent in the lid, or the filling will lift it off during baking.",
      "Bake at 190 °C for 35 minutes. Serve with gravy poured into the well."
    ],
    makeAhead: "Bake a day ahead. Reheat 12 minutes at 175 °C.",
    holds: "Very well. The straight-sided crust is structural and this travels intact.",
    scaling: "Mould in batches of 10 — the dough sets hard once it drops below hand-warm."
  },
  {
    dishId: 30,
    yields: "20 portions",
    prepMin: 60,
    cookMin: 180,
    ingredients: [
      { qty: "3 kg", item: "asado de tira or beef shin, in large cubes" },
      { qty: "750 ml", item: "cerveza negra", note: "Cusqueña Negra; the malt does the same job as stout" },
      { qty: "300 ml", item: "chicha de jora", note: "sour and malty — this is the Peruvian half of the dish" },
      { qty: "3", item: "onions, sliced" },
      { qty: "3", item: "carrots" },
      { qty: "2 tbsp", item: "tomato paste" },
      { qty: "1 litre", item: "beef stock" },
      { qty: "1 kg", item: "puff pastry" },
      { qty: "2", item: "eggs, for wash" }
    ],
    method: [
      "Brown the beef hard in batches. Crowding the pan is the difference between a braise and a stew.",
      "Sweat the onion and carrot in the same pan, add tomato paste and cook it out until it darkens.",
      "Deglaze with the beer and chicha de jora, scraping the base.",
      "Return the beef, add stock to barely cover, and braise at 150 °C for 3 hours until it yields to a spoon.",
      "Cool completely and skim the fat. Reduce the liquor if it is thin — a wet filling lifts the pastry off.",
      "Fill a deep dish, top with puff pastry, egg wash, and bake at 200 °C for 30 minutes."
    ],
    makeAhead:
      "The braise is better made 2 days ahead. Top and bake on the day. Traditionally a Hogmanay dish, which makes it the anchor of a New Year menu.",
    holds: "The braise holds indefinitely; the pastry does not. Bake on site if you can.",
    scaling: "Braise scales well. Bake in dishes of 6–8 portions rather than one large tray so the pastry cooks through."
  }
];
