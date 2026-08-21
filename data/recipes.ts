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
  },
  {
    dishId: 31,
    yields: "20 portions",
    prepMin: 70,
    cookMin: 60,
    ingredients: [
      { qty: "2.5 kg", item: "lamb shoulder, coarse minced" },
      { qty: "300 g", item: "pinhead oats, toasted" },
      { qty: "3", item: "onions, fine dice" },
      { qty: "3", item: "carrots, fine dice" },
      { qty: "2 tbsp", item: "white pepper" },
      { qty: "1 tbsp", item: "ground mace" },
      { qty: "800 ml", item: "lamb stock" },
      { qty: "3 kg", item: "papa amarilla, boiled" },
      { qty: "250 g", item: "butter and 200 ml milk", note: "for the mash" }
    ],
    method: [
      "Brown the lamb hard in batches. Grey mince makes grey pie.",
      "Sweat onion and carrot in the fat, then return the lamb with the toasted oats, spices and stock.",
      "Simmer 40 minutes until the oats swell and the mix thickens to a spoonable ragù. It should not be soupy — a wet base floods the mash.",
      "Rice the papa amarilla while hot, beat in butter and warm milk, and season hard. Papa amarilla takes more salt than a white potato.",
      "Spread the lamb in a deep tray, cool slightly so it skins over, then pipe or fork the mash on top.",
      "Bake at 190 °C for 25 minutes until the ridges catch."
    ],
    makeAhead: "Assemble a day ahead, unbaked. From cold it needs 40 minutes.",
    holds: "Very well — an hour in a warm cabinet without damage. One of the safest buffet mains on the list.",
    scaling: "Bake in trays of 8 portions rather than one large one, or the centre is cold when the edges are done."
  },
  {
    dishId: 32,
    yields: "20 portions",
    prepMin: 40,
    cookMin: 50,
    ingredients: [
      { qty: "2.5 kg", item: "beef mince", note: "coarse; ask for falda rather than a fine mince" },
      { qty: "3", item: "onions, diced" },
      { qty: "40 g", item: "ají panca paste" },
      { qty: "2 tbsp", item: "Worcestershire sauce" },
      { qty: "1 litre", item: "beef stock" },
      { qty: "40 g", item: "cornflour, slaked", note: "only if it needs tightening" },
      { qty: "3 kg", item: "papa amarilla" },
      { qty: "250 g", item: "butter, 200 ml milk" }
    ],
    method: [
      "Brown the mince in batches until genuinely dark. This dish has nowhere to hide, so the colour is the flavour.",
      "Add onion and cook until soft, then the ají panca, and cook it out 3 minutes.",
      "Add stock and Worcestershire, and simmer uncovered 35 minutes.",
      "Judge the consistency: it should coat a spoon and sit on mash without running. Slake cornflour only if it will not reduce in time.",
      "Mash the papa amarilla with butter and milk. Season both components separately and hard.",
      "Serve the mince beside the mash, not on it, so the mash keeps its shape on a buffet."
    ],
    makeAhead: "Better on day two. Keeps 3 days.",
    holds: "Indefinitely hot. Mash tightens as it sits — hold it separately and loosen with hot milk before service."
  },
  {
    dishId: 33,
    yields: "20 portions",
    prepMin: 35,
    cookMin: 75,
    ingredients: [
      { qty: "3 kg", item: "papa blanca, thickly sliced" },
      { qty: "4", item: "onions, sliced" },
      { qty: "1 kg", item: "cooked beef or lamb, torn", note: "traditionally leftover roast; this is a use-up dish" },
      { qty: "150 g", item: "beef dripping or butter" },
      { qty: "800 ml", item: "beef stock" },
      { qty: "2", item: "bay leaves" },
      { qty: "1 bunch", item: "huacatay, chopped" }
    ],
    method: [
      "Melt the dripping in a wide heavy pan and sweat the onion until soft and sweet, 15 minutes.",
      "Layer potato over the onion, season each layer, and tuck in the bay.",
      "Add stock to come halfway up the potato — no further. Stovies steam as much as they braise.",
      "Cover and cook very low for an hour. Do not stir; you want the base to catch slightly and the top layer to stay intact.",
      "Fold the meat through in the last 15 minutes, just to heat.",
      "Crush lightly with a spoon, finish with huacatay, and check the salt."
    ],
    makeAhead: "Keeps 3 days and reheats well. Genuinely improved by a night in the fridge.",
    holds: "Excellent hot-hold. Add a splash of stock when reheating or it dries out.",
    scaling: "Wide and shallow beats deep. A deep pot steams the top layer to mush before the bottom is done."
  },
  {
    dishId: 34,
    yields: "20 portions",
    prepMin: 40,
    cookMin: 120,
    ingredients: [
      { qty: "2 kg", item: "lamb neck or shoulder, on the bone" },
      { qty: "300 g", item: "quinoa, rinsed until the water runs clear", note: "replaces pearl barley; rinse or it is bitter" },
      { qty: "4", item: "carrots, 3 turnips, 3 leeks, all diced small" },
      { qty: "2", item: "onions" },
      { qty: "4 litres", item: "water" },
      { qty: "200 g", item: "dried split peas, soaked" },
      { qty: "1 bunch", item: "parsley, chopped" }
    ],
    method: [
      "Cover the lamb with cold water, bring slowly to a simmer, and skim thoroughly for the first 20 minutes. Skimming is what separates broth from stew.",
      "Add the soaked peas and simmer 1 hour until the lamb is tender.",
      "Lift the meat out, pull it from the bone, and return the meat to the pot.",
      "Add the diced vegetables and simmer 20 minutes — they should keep their edges.",
      "Add the rinsed quinoa for the last 12 minutes only. Longer and it bursts and clouds the broth.",
      "Finish with a lot of parsley and check the salt at the end, not the start."
    ],
    makeAhead: "Make the broth and lamb 2 days ahead; add quinoa and vegetables on the day so they stay distinct.",
    holds: "Holds hot for hours, but the quinoa keeps swelling. Add it at the venue if you can.",
    scaling: "Scales cleanly. The only limit is the size of pot you can safely transport."
  },
  {
    dishId: 35,
    yields: "20 portions",
    prepMin: 40,
    cookMin: 90,
    ingredients: [
      { qty: "2", item: "whole chickens, or 2.5 kg thighs" },
      { qty: "6", item: "leeks, thickly sliced, whites and pale greens" },
      { qty: "400 g", item: "choclo kernels" },
      { qty: "3 litres", item: "chicken stock" },
      { qty: "16", item: "prunes, halved" },
      { qty: "2", item: "bay leaves, 1 tbsp black peppercorns" },
      { qty: "1 bunch", item: "parsley" }
    ],
    method: [
      "Poach the chicken in the stock with bay and peppercorns until it falls from the bone, about 1 hour. Skim as it goes.",
      "Lift out, cool enough to handle, and shred the meat. Return the bones to the pot and simmer another 30 minutes for depth, then strain.",
      "Add half the leeks and cook 20 minutes until they surrender into the broth — these are for body.",
      "Add the remaining leeks and the choclo and cook 8 minutes only, so there is something to bite.",
      "Return the chicken and add the prunes in the last 5 minutes. Any earlier and they dissolve.",
      "Season hard and finish with parsley. The prune sweetness against the pepper is the whole dish."
    ],
    makeAhead: "Broth and chicken 2 days ahead. Leeks, choclo and prunes on the day.",
    holds: "Good for hours. The prunes darken the broth over time, which is cosmetic rather than a fault."
  },
  {
    dishId: 36,
    yields: "20 portions",
    prepMin: 50,
    cookMin: 45,
    ingredients: [
      { qty: "3 kg", item: "chicken thigh, boneless, in large pieces" },
      { qty: "500 g", item: "thick yoghurt", note: "for the marinade" },
      { qty: "60 g", item: "ají amarillo paste and 40 g ají panca paste" },
      { qty: "2 tbsp", item: "garam masala, 1 tbsp turmeric, 1 tbsp cumin" },
      { qty: "6", item: "garlic cloves, 50 g ginger, both grated" },
      { qty: "1.5 kg", item: "tomatoes, or 2 tins" },
      { qty: "600 ml", item: "double cream" },
      { qty: "150 g", item: "butter" },
      { qty: "1 bunch", item: "coriander" }
    ],
    method: [
      "Marinate the chicken in yoghurt, half the spices, garlic and ginger for at least 4 hours.",
      "Grill or roast the chicken hot and fast until charred at the edges. The char is not optional — it is the difference between this and a curry.",
      "Sweat the remaining garlic and ginger in butter, add the ají pastes and remaining spices, and cook out until the fat separates.",
      "Add tomatoes and simmer 25 minutes until thick and jammy, then blend smooth.",
      "Add cream and warm through without boiling.",
      "Fold in the charred chicken and any resting juices. Finish with coriander.",
      "The ají amarillo does the work Kashmiri chilli does in Glasgow — colour and fruit rather than heat."
    ],
    makeAhead: "Sauce keeps 3 days and freezes. Char the chicken on the day; reheated char goes soft.",
    holds: "Holds hot very well. Cream sauces split if boiled, so hold below a simmer.",
    scaling: "Char in batches under a hot grill. A crowded tray steams the chicken and you lose the whole point."
  },
  {
    dishId: 37,
    yields: "20 portions",
    prepMin: 40,
    cookMin: 45,
    ingredients: [
      { qty: "40", item: "artisanal pork sausages", note: "ask a butcher for a coarse, high-meat sausage" },
      { qty: "6", item: "onions, sliced thin" },
      { qty: "500 ml", item: "chicha de jora" },
      { qty: "500 ml", item: "beef stock" },
      { qty: "50 g", item: "butter and 2 tbsp flour", note: "to thicken the gravy" },
      { qty: "3 kg", item: "papa amarilla" },
      { qty: "250 g", item: "butter, 200 ml milk", note: "for the mash" },
      { qty: "2 tsp", item: "wholegrain mustard" }
    ],
    method: [
      "Brown the sausages slowly all over and set aside. Slow is the point; fast splits the skins.",
      "In the same pan, cook the onions down for 25 minutes until genuinely caramelised, not just soft.",
      "Dust with flour, cook out 2 minutes, then deglaze with the chicha de jora and scrape the base.",
      "Add stock and reduce to a gravy that coats a spoon. The chicha brings a sourness that wants a knob of butter at the end to round it.",
      "Return the sausages and simmer 15 minutes to finish cooking through.",
      "Mash the papa amarilla with butter, milk and mustard."
    ],
    makeAhead: "Gravy and onions 2 days ahead. Sausages on the day.",
    holds: "Holds well for an hour. Beyond that the sausages tighten."
  },
  {
    dishId: 38,
    yields: "20 portions",
    prepMin: 45,
    cookMin: 25,
    ingredients: [
      { qty: "20", item: "chita or cabrilla fillets, 180 g each", note: "Terminal Pesquero; any firm white fish works" },
      { qty: "500 g", item: "flour and 100 g cornflour" },
      { qty: "700 ml", item: "very cold beer" },
      { qty: "2 tsp", item: "baking powder" },
      { qty: "3 kg", item: "yuca, peeled and cut into chips" },
      { qty: "400 g", item: "mayonnaise, 2 tbsp capers, 1 ají limo, 1 lemon", note: "ají tartare" },
      { qty: "4 litres", item: "frying oil" }
    ],
    method: [
      "Boil the yuca in salted water until a knife just slides in, then drain and steam-dry. Yuca must be boiled first — it will never cook through in the fryer.",
      "Cool the yuca completely, then fry once at 140 °C to set the crust. Hold. Fry again at 190 °C to order.",
      "Batter: whisk flour, cornflour and baking powder into cold beer at the last possible moment. Lumps are fine; a rested batter is not.",
      "Dredge the fish in dry flour, then through the batter, then straight into 180 °C oil.",
      "Fry 4–5 minutes until the batter is rigid and pale gold. Drain on a rack.",
      "Tartare: mayonnaise, chopped capers, minced ají limo, lemon and plenty of pepper."
    ],
    makeAhead: "Yuca can be boiled and first-fried a day ahead — that is the whole trick to serving this at volume.",
    holds: "Five minutes. This is a live-station dish and nothing will make it otherwise.",
    scaling: "Two fryers or you have a queue: one holding yuca at 190 °C, one at 180 °C for fish."
  },
  {
    dishId: 39,
    yields: "20 portions",
    prepMin: 45,
    cookMin: 90,
    ingredients: [
      { qty: "3", item: "lamb legs or 4 racks, Andean lamb", note: "Minka; ask for young lamb, it is milder" },
      { qty: "200 g", item: "pinhead oats, toasted" },
      { qty: "1 bunch", item: "huacatay, blitzed to a paste" },
      { qty: "6", item: "garlic cloves" },
      { qty: "100 g", item: "butter, softened" },
      { qty: "3 tbsp", item: "Dijon mustard" },
      { qty: "500 ml", item: "lamb stock, reduced to 200 ml" },
      { qty: "100 ml", item: "red wine" }
    ],
    method: [
      "Blitz the toasted oats with huacatay, garlic, butter and salt to a coarse green crust. It should clump, not flow.",
      "Sear the lamb hard on all sides and rest 10 minutes.",
      "Brush with mustard, then press the crust on firmly. The mustard is glue, not flavour.",
      "Roast at 200 °C for 15 minutes, then 170 °C until the core reads 54 °C for pink, about 25 minutes for a leg.",
      "Rest 20 minutes — a long rest, because the crust insulates and the meat keeps climbing.",
      "Sauce: deglaze with wine, add reduced stock, and mount with cold butter off the heat."
    ],
    makeAhead: "Crust keeps 3 days. Sear and crust the lamb a day ahead, then roast on site.",
    holds: "The crust softens after 30 minutes. Carve to order.",
    scaling: "Roast in relays so each joint gets its full rest. Resting is where the doneness actually settles."
  },
  {
    dishId: 40,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 210,
    ingredients: [
      { qty: "3 kg", item: "pork belly, skin on, one piece" },
      { qty: "2 tbsp", item: "salt, for the skin" },
      { qty: "150 g", item: "chancaca, grated" },
      { qty: "150 ml", item: "whisky" },
      { qty: "3 tbsp", item: "soy sauce" },
      { qty: "2", item: "star anise, 1 cinnamon stick" },
      { qty: "500 ml", item: "chicken stock" }
    ],
    method: [
      "Score the skin finely and salt it heavily. Leave uncovered in the fridge overnight — dry skin is the only route to crackling.",
      "Wipe off the salt. Roast at 150 °C for 3 hours on a rack over the stock and aromatics.",
      "Melt the chancaca into the whisky and soy to a loose glaze.",
      "Raise the oven to 230 °C for 20 minutes to blister the skin. Do not glaze yet — sugar burns at this temperature.",
      "Rest 20 minutes, then brush the glaze over the flesh side and the cut faces only, keeping it off the crackling.",
      "Portion with a serrated knife, cutting through the crackling first."
    ],
    makeAhead: "Roast a day ahead, portion cold, and re-crisp under a hot grill. Glaze after reheating.",
    holds: "The pork holds well; the crackling does not. If it must travel, send crackling separately in a paper bag, never sealed plastic.",
    scaling: "One belly per 10 portions. Cooking two side by side needs a fan oven or the inner faces steam."
  },
  {
    dishId: 41,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 180,
    ingredients: [
      { qty: "4 kg", item: "pork leg, cured", note: "ask the butcher for a lightly cured, unsmoked gammon" },
      { qty: "2", item: "onions, 2 carrots, 2 bay leaves" },
      { qty: "1.5 litres", item: "Irn Bru", note: "specialist UK importer; roughly S/ 8-12 a can wholesale and unverified" },
      { qty: "40", item: "whole cloves" },
      { qty: "3 tbsp", item: "wholegrain mustard" },
      { qty: "80 g", item: "demerara or chancaca" }
    ],
    method: [
      "Soak the gammon in cold water for 4 hours, changing once, to draw out excess salt.",
      "Simmer in Irn Bru topped up with water, with the onion, carrot and bay, for 2.5 hours. Barely a bubble.",
      "Lift out and cool enough to handle. Reserve 400 ml of the cooking liquor.",
      "Cut the skin away leaving an even fat layer, then score the fat into diamonds and stud each with a clove.",
      "Reduce the reserved liquor with mustard and sugar to a sticky glaze.",
      "Glaze and roast at 200 °C for 25 minutes, basting twice, until lacquered.",
      "Using Irn Bru as a glaze rather than selling it by the can is by far the better return on an expensive import."
    ],
    makeAhead: "Boil and glaze a day ahead. Excellent cold, which is how most of it will be eaten.",
    holds: "Superb. Carves cold, travels whole, and needs no equipment at the venue."
  },
  {
    dishId: 42,
    yields: "20 portions",
    prepMin: 45,
    cookMin: 20,
    ingredients: [
      { qty: "3 kg", item: "lamb shoulder, in 3 cm cubes" },
      { qty: "150 ml", item: "olive oil" },
      { qty: "3 tbsp", item: "dried oregano" },
      { qty: "1 bunch", item: "huacatay, chopped", note: "the Peruvian half; it sits where mint would" },
      { qty: "4", item: "lemons, juice and zest" },
      { qty: "8", item: "garlic cloves, crushed" },
      { qty: "500 g", item: "thick yoghurt, 1 cucumber, grated and squeezed", note: "tzatziki" },
      { qty: "20", item: "flatbreads or pita" }
    ],
    method: [
      "Marinate the lamb in oil, oregano, huacatay, lemon and garlic for at least 6 hours, preferably overnight.",
      "Salt only 30 minutes before cooking. Salting into an acidic marinade overnight cures the surface and it goes firm.",
      "Thread onto skewers, leaving a little space between cubes so they colour rather than steam.",
      "Grill over high heat, 3–4 minutes a side, turning once only.",
      "Rest 5 minutes off the heat before serving.",
      "Tzatziki: squeeze the cucumber hard, then fold into yoghurt with garlic, lemon and salt."
    ],
    makeAhead: "Marinate and skewer a day ahead. Tzatziki is better made 2 hours ahead than 2 days.",
    holds: "Ten minutes. A live-station dish; grilled lamb waiting in a tray is a wasted ingredient."
  },
  {
    dishId: 43,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 15,
    ingredients: [
      { qty: "20", item: "corvina fillets, 160 g each, skin on" },
      { qty: "500 ml", item: "good olive oil" },
      { qty: "10", item: "garlic cloves, sliced thin" },
      { qty: "2", item: "ají limo, sliced into rings" },
      { qty: "2", item: "lemons" },
      { qty: "1 bunch", item: "parsley, chopped fine" }
    ],
    method: [
      "Warm the oil gently with garlic and ají limo until the garlic just turns pale gold. Do not let it brown or the whole emulsion turns bitter.",
      "Lift out the garlic and chilli and reserve. Cool the oil to warm.",
      "Season the fish and cook it skin-down in the oil at a bare 65–70 °C for 8 minutes. This is a confit, not a fry.",
      "Lift the fish out. Pour the gelatinous cooking juices into a wide pan.",
      "Off the heat, swirl the pan continuously while trickling the warm oil back in. The gelatin emulsifies it into a pale, glossy pil-pil.",
      "If it splits, add a spoon of cold water and keep swirling. Spoon over the fish with the reserved garlic and parsley."
    ],
    makeAhead: "Nothing. The emulsion is made to order and does not reheat.",
    holds: "Minutes. Plated tier only, and it needs a cook standing over it.",
    scaling: "Emulsify in batches of 5 portions. A large pan does not swirl and the sauce will not come together."
  },
  {
    dishId: 44,
    yields: "20 portions",
    prepMin: 40,
    cookMin: 0,
    ingredients: [
      { qty: "3 kg", item: "paiche or trout fillet, skin on, pin-boned" },
      { qty: "400 g", item: "coarse salt and 300 g sugar" },
      { qty: "3 bunches", item: "dill, chopped" },
      { qty: "3 tbsp", item: "crushed white peppercorns" },
      { qty: "100 ml", item: "algarrobina", note: "replaces the usual aquavit or gin" },
      { qty: "200 g", item: "wholegrain mustard, 80 g sugar, 50 ml vinegar, 150 ml oil", note: "hovmästarsås" },
      { qty: "1 loaf", item: "rye bread" }
    ],
    method: [
      "Mix salt, sugar, pepper and dill. Lay half in a tray, fish skin-down, remaining cure on top, then drizzle over the algarrobina.",
      "Cover, weight lightly, and cure 36 hours refrigerated, turning once and pouring off liquid.",
      "Rinse briefly, pat very dry, and let it air-dry uncovered in the fridge for 2 hours — this firms the surface for slicing.",
      "Slice thin on a long bias, leaving the skin behind.",
      "Sauce: whisk mustard, sugar and vinegar, then trickle in the oil until thick. Stir through chopped dill.",
      "Plate with rye and the sauce."
    ],
    makeAhead: "Cure up to 4 days ahead; it improves to about day three.",
    holds: "Excellent. Slice cold, plate, and it sits happily for an hour. The strongest cold main on the list for drop-off."
  },
  {
    dishId: 45,
    yields: "20 portions",
    prepMin: 100,
    cookMin: 50,
    ingredients: [
      { qty: "2 kg", item: "turnip and zapallo loche, in large batons" },
      { qty: "1.5 kg", item: "mushrooms, blitzed coarse" },
      { qty: "3", item: "shallots, fine dice" },
      { qty: "1 kg", item: "papa amarilla, boiled and riced dry" },
      { qty: "300 g", item: "thin crêpes", note: "the moisture barrier; this dish needs it more than the beef version does" },
      { qty: "1.5 kg", item: "puff pastry" },
      { qty: "3 tbsp", item: "Dijon mustard" },
      { qty: "4", item: "egg yolks, for wash" }
    ],
    method: [
      "Roast the turnip and zapallo batons at 200 °C until caramelised and dry at the edges, 30 minutes. Wet vegetables are the enemy here.",
      "Cook the mushroom duxelles until completely dry, 30 minutes, then add shallot and season hard.",
      "Beat the riced potato with salt and pepper. It binds the log.",
      "On cling film, lay crêpes, then duxelles, then a layer of potato, then the roasted batons packed tight along the centre.",
      "Roll into a firm cylinder and chill 2 hours until solid.",
      "Wrap in pastry, egg wash twice, and bake at 200 °C for 20 minutes then 180 °C for 25.",
      "Rest 15 minutes before slicing."
    ],
    makeAhead: "Assemble to the pastry stage a day ahead.",
    holds: "20 minutes, same as the beef. Slice to order.",
    scaling: "Vegetables release more water than beef. Cylinders of 5 portions maximum, and chill them properly or the log slumps."
  },
  {
    dishId: 46,
    yields: "20 portions",
    prepMin: 35,
    cookMin: 35,
    ingredients: [
      { qty: "2.5 kg", item: "papa nativa, boiled and roughly crushed" },
      { qty: "1", item: "large white cabbage or col, shredded" },
      { qty: "4", item: "spring onions, sliced" },
      { qty: "200 g", item: "butter" },
      { qty: "400 g", item: "queso paria, grated", note: "sharper than cheddar and it melts better than queso fresco" },
      { qty: "1 tsp", item: "grated nutmeg" }
    ],
    method: [
      "Boil the cabbage 4 minutes only, then drain and squeeze out every drop of water.",
      "Crush the potato coarse — lumps are correct, this is not a purée.",
      "Fold potato, cabbage, spring onion and half the butter together with nutmeg and plenty of salt.",
      "Spread into a buttered dish and dot with the remaining butter.",
      "Cover with the grated paria and bake at 200 °C for 30 minutes until browned and bubbling at the edges."
    ],
    makeAhead: "Assemble 2 days ahead unbaked. From cold, 45 minutes.",
    holds: "Holds hot for an hour and reheats without complaint. A reliable vegetarian buffet side."
  },
  {
    dishId: 47,
    yields: "20 portions",
    prepMin: 25,
    cookMin: 35,
    ingredients: [
      { qty: "2 kg", item: "papa amarilla" },
      { qty: "1.5 kg", item: "turnip and zapallo loche, in chunks" },
      { qty: "200 g", item: "butter" },
      { qty: "150 ml", item: "milk or cream" },
      { qty: "4", item: "spring onions, sliced" },
      { qty: "1 tsp", item: "white pepper" }
    ],
    method: [
      "Boil the turnip and zapallo separately from the potato — they take longer and hold more water.",
      "Drain both very well and let them steam dry in the colander for 5 minutes.",
      "Mash together with butter and milk. Clapshot should be coarse, not silky.",
      "Fold through the spring onion raw, so it keeps its bite.",
      "Season with plenty of white pepper. The zapallo loche brings a sweetness that needs the pepper against it."
    ],
    makeAhead: "Make a day ahead and reheat covered with a splash of milk.",
    holds: "Holds hot for hours. Tightens as it sits; loosen with hot milk rather than more butter."
  },
  {
    dishId: 48,
    yields: "20 portions",
    prepMin: 50,
    cookMin: 25,
    ingredients: [
      { qty: "2.5 kg", item: "papa amarilla, boiled and riced" },
      { qty: "100 ml", item: "lime juice" },
      { qty: "60 g", item: "ají amarillo paste" },
      { qty: "120 ml", item: "vegetable oil" },
      { qty: "800 g", item: "turnip and carrot, boiled and mashed" },
      { qty: "100 g", item: "butter" },
      { qty: "200 g", item: "mayonnaise", note: "optional, for the layer" },
      { qty: "1", item: "lime, to finish" }
    ],
    method: [
      "Rice the potato while hot and let it steam dry, then cool to room temperature before seasoning.",
      "Work in the lime, ají amarillo, oil and salt. The causa base should be smooth, bright yellow and distinctly acidic — it will taste flat when warm and correct when cold.",
      "Mash the turnip and carrot with butter and season hard. Cool completely.",
      "Line a tray with cling film. Layer half the causa, then all the turnip mash, then the remaining causa. Press firmly at each stage.",
      "Chill 4 hours minimum before cutting. It must be cold to hold a clean edge.",
      "Cut into squares with a hot wet knife."
    ],
    makeAhead: "Better made a day ahead. Keeps 3 days.",
    holds: "Cold dish, so it holds as long as the fridge chain does. Excellent for drop-off; it is one of the few sides that looks better cold."
  },
  {
    dishId: 49,
    yields: "20 portions",
    prepMin: 20,
    cookMin: 25,
    ingredients: [
      { qty: "400 g", item: "quinoa, rinsed thoroughly" },
      { qty: "300 g", item: "pinhead oats" },
      { qty: "200 g", item: "beef dripping", note: "traditional; butter if the dish must go vegetarian" },
      { qty: "4", item: "onions, fine dice" },
      { qty: "1 tbsp", item: "white pepper" },
      { qty: "1 bunch", item: "chives" }
    ],
    method: [
      "Toast the quinoa dry in a wide pan until it pops and smells nutty. Set aside.",
      "Toast the oats the same way, separately — they colour at a different rate.",
      "Melt the dripping and cook the onion slowly until deep gold, 20 minutes. This is where the flavour comes from.",
      "Return both grains to the pan and stir until every grain is coated and glossy.",
      "Season heavily with salt and white pepper. Skirlie is meant to be assertive.",
      "Finish with chives off the heat."
    ],
    makeAhead: "Keeps 3 days. Refresh in a hot dry pan rather than a microwave.",
    holds: "Very well. Loses its crunch after an hour in a covered tray, so hold it uncovered if you can."
  },
  {
    dishId: 50,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 30,
    ingredients: [
      { qty: "2.5 kg", item: "papa nativa" },
      { qty: "600 g", item: "kale, stalks removed, shredded" },
      { qty: "6", item: "spring onions, sliced" },
      { qty: "300 ml", item: "milk" },
      { qty: "200 g", item: "butter" },
      { qty: "1 tsp", item: "nutmeg" }
    ],
    method: [
      "Boil the potato in its skins, then peel while hot. Skin-on boiling keeps it from waterlogging.",
      "Blanch the kale 3 minutes, refresh in cold water, and squeeze dry.",
      "Warm the milk with the spring onion and let it infuse 10 minutes off the heat.",
      "Mash the potato with butter and the infused milk. Keep it coarse.",
      "Fold in the kale and nutmeg, and season hard.",
      "Serve with a well of melted butter in the centre, which is the traditional way and worth doing."
    ],
    makeAhead: "A day ahead. Reheat covered with extra milk.",
    holds: "Holds hot well. The kale dulls in colour after an hour but the flavour is unaffected."
  },
  {
    dishId: 51,
    yields: "50 scones",
    prepMin: 40,
    cookMin: 25,
    ingredients: [
      { qty: "2 kg", item: "papa amarilla, boiled and riced dry" },
      { qty: "300 g", item: "plain flour" },
      { qty: "100 g", item: "butter, melted" },
      { qty: "2 tsp", item: "salt" },
      { qty: "1 tsp", item: "baking powder" }
    ],
    method: [
      "Rice the potato while hot and spread it on a tray to steam dry for 10 minutes. Wet potato needs more flour and more flour makes them tough.",
      "Work in the melted butter, salt, baking powder and just enough flour to make a soft dough. Handle it as little as you can.",
      "Roll 5 mm on a floured bench and cut into triangles or 6 cm rounds.",
      "Prick each one twice with a fork so they do not dome.",
      "Griddle dry on a medium-hot plate, 3 minutes a side, until blistered and dry to the touch.",
      "Stack under a cloth as they come off so they stay pliable."
    ],
    makeAhead: "Keep 3 days wrapped, or freeze with paper between. Best refreshed on a hot griddle.",
    holds: "Soft and good for hours. They go leathery if sealed in plastic while warm — cool fully first.",
    scaling: "Griddle capacity is the limit. Two plates for anything over 100."
  },
  {
    dishId: 52,
    yields: "60 oatcakes",
    prepMin: 45,
    cookMin: 20,
    ingredients: [
      { qty: "800 g", item: "oatmeal", note: "buy fine, medium and pinhead so you can cut all three thicknesses" },
      { qty: "150 g", item: "plain flour" },
      { qty: "2 tsp", item: "salt" },
      { qty: "1 tsp", item: "bicarbonate of soda" },
      { qty: "160 g", item: "lard or butter, melted" },
      { qty: "350 ml", item: "boiling water" }
    ],
    method: [
      "Make three separate batches, one per grade of oatmeal, so each keeps its own texture.",
      "Mix the dry ingredients, stir in melted fat, then boiling water. The dough must be worked hot and fast.",
      "Fine oatmeal: roll 2 mm for a thin cracker. Medium: 4 mm. Pinhead: 6 mm for a rough farmhouse oatcake.",
      "Cut rounds and transfer carefully — the thin ones tear.",
      "Bake at 170 °C: thin for 12 minutes, medium 16, thick 20. All should be pale and dry, not browned.",
      "Cool on a rack. They crisp as they cool, so judge them cold, not hot."
    ],
    makeAhead: "Two weeks in a sealed tin, and genuinely better after a day.",
    holds: "Indefinitely during service if kept dry. Lima humidity softens them within a few hours if left uncovered.",
    scaling: "One dough per thickness. Do not try to roll one batch to three depths — the bake times will not reconcile."
  },
  {
    dishId: 53,
    yields: "50 puddings",
    prepMin: 20,
    cookMin: 25,
    ingredients: [
      { qty: "500 g", item: "plain flour" },
      { qty: "8", item: "eggs" },
      { qty: "600 ml", item: "milk" },
      { qty: "2 tsp", item: "salt" },
      { qty: "1 tbsp", item: "chopped rosemary" },
      { qty: "300 ml", item: "sunflower oil", note: "beef dripping is traditional and better, but the matrix sells this dish as vegetarian — using it changes that flag" }
    ],
    method: [
      "Whisk flour, eggs, milk and salt to a smooth batter the consistency of single cream.",
      "Rest the batter at least 1 hour, ideally overnight. Resting is what gives the rise.",
      "Put a teaspoon of dripping in each hole of the tin and heat at 220 °C until it is genuinely smoking. Not hot — smoking.",
      "Pour the cold batter into the hot fat, filling halfway. It should hiss immediately.",
      "Bake 20–25 minutes without opening the oven once. Opening it collapses them and there is no recovery.",
      "Scatter with rosemary as they come out."
    ],
    makeAhead: "Batter improves overnight. Baked puddings can be frozen and refreshed 4 minutes at 200 °C.",
    holds: "Ten minutes at full height, then they sag. Bake to order, which is why this sits as a live-station side.",
    scaling: "Oven capacity is the whole constraint. Two tins in at once drops the temperature and neither rises properly."
  },
  {
    dishId: 54,
    yields: "20 portions",
    prepMin: 20,
    cookMin: 15,
    ingredients: [
      { qty: "2 kg", item: "choclo kernels", note: "fresh off the cob; frozen works for this dish though not for the scones" },
      { qty: "800 g", item: "kale, shredded" },
      { qty: "200 g", item: "butter" },
      { qty: "4", item: "garlic cloves, sliced" },
      { qty: "2", item: "limes" },
      { qty: "1 tsp", item: "ají limo, minced", note: "optional" }
    ],
    method: [
      "Blanch the choclo 5 minutes in salted water and drain. Giant corn stays chewy however long you cook it, which is the point.",
      "Blanch the kale 2 minutes, refresh, and squeeze dry.",
      "Foam the butter with the garlic until it just turns nutty.",
      "Toss in the choclo and kale and cook hard for 3 minutes so the edges catch.",
      "Finish with lime juice off the heat and salt generously."
    ],
    makeAhead: "Blanch both a day ahead. The final toss takes 5 minutes.",
    holds: "45 minutes. The kale dulls and the lime fades, so squeeze the lime at the venue."
  },
  {
    dishId: 55,
    yields: "20 portions",
    prepMin: 25,
    cookMin: 35,
    ingredients: [
      { qty: "2 kg", item: "camote, peeled and chunked" },
      { qty: "2 kg", item: "papa amarilla" },
      { qty: "250 g", item: "butter", note: "European butter if the budget allows; it is the whole flavour" },
      { qty: "150 ml", item: "cream" },
      { qty: "1 tsp", item: "nutmeg" },
      { qty: "1 tsp", item: "white pepper" }
    ],
    method: [
      "Roast the camote rather than boiling it — 200 °C for 30 minutes. Boiled camote is watery and sweet in the wrong way.",
      "Boil the papa amarilla separately and steam-dry it.",
      "Rice both while hot into the same bowl.",
      "Beat in butter first, then cream, then season with nutmeg, white pepper and a lot of salt.",
      "Taste it at serving temperature. Warm mash always needs more salt than it seems to when hot."
    ],
    makeAhead: "A day ahead. Reheat covered with a splash of cream.",
    holds: "Holds hot for hours. Skins over if uncovered; keep a lid on and stir before service."
  },
  {
    dishId: 56,
    yields: "20 portions",
    prepMin: 25,
    cookMin: 75,
    ingredients: [
      { qty: "3", item: "red cabbages, shredded" },
      { qty: "1 litre", item: "chicha morada" },
      { qty: "200 ml", item: "red wine vinegar" },
      { qty: "150 g", item: "chancaca or brown sugar" },
      { qty: "2", item: "cinnamon sticks, 6 cloves, 3 star anise" },
      { qty: "3", item: "apples, grated" },
      { qty: "100 g", item: "butter" }
    ],
    method: [
      "Melt the butter in a wide heavy pan and add the cabbage in batches, letting each wilt before adding more.",
      "Add chicha morada, vinegar, chancaca and the whole spices tied in muslin.",
      "Cover and cook very low for an hour, stirring occasionally, until the cabbage is tender and deep purple.",
      "Add the grated apple in the last 20 minutes so it melts in rather than staying in pieces.",
      "Uncover and reduce until nothing pools in the base of the pan.",
      "Balance at the end with more vinegar or sugar. It should be sweet and sharp in equal measure."
    ],
    makeAhead: "Better made 3 days ahead. It keeps a week and freezes.",
    holds: "Indefinitely. This is the most forgiving side on the list and worth having on any winter menu."
  },
  {
    dishId: 57,
    yields: "20 portions",
    prepMin: 15,
    cookMin: 12,
    ingredients: [
      { qty: "3 kg", item: "Ica asparagus, trimmed", note: "two harvests a year; check the Season page before promising it" },
      { qty: "100 ml", item: "olive oil" },
      { qty: "120 ml", item: "algarrobina" },
      { qty: "2 tbsp", item: "sherry or red wine vinegar" },
      { qty: "1 tbsp", item: "Maras salt, crushed" },
      { qty: "80 g", item: "toasted almonds or pecans, chopped" }
    ],
    method: [
      "Snap rather than cut the woody ends — the spear breaks where it stops being tender.",
      "Toss in olive oil and salt and roast at 220 °C for 8–10 minutes. It should blister, not soften.",
      "Loosen the algarrobina with the vinegar to a pourable dressing. Neat algarrobina is too heavy and too sweet.",
      "Dress the asparagus while it is still hot so it drinks the dressing.",
      "Finish with Maras salt and toasted nuts."
    ],
    makeAhead: "Dressing keeps a week. Roast to order.",
    holds: "20 minutes before it goes limp and army green. One of the least forgiving sides here."
  },
  {
    dishId: 58,
    yields: "20 portions",
    prepMin: 60,
    cookMin: 30,
    ingredients: [
      { qty: "40", item: "eggs" },
      { qty: "1.5 kg", item: "bacon", note: "Peruvian bacon is streaky, not back; say so on the menu rather than pretending" },
      { qty: "1 kg", item: "morcilla, sliced" },
      { qty: "20", item: "Lorne sausage squares", note: "as dish 8" },
      { qty: "1 batch", item: "tattie scones", note: "as dish 51" },
      { qty: "1.5 kg", item: "beans, cooked with chancaca and tomato", note: "house version; imported baked beans are an unnecessary import cost" },
      { qty: "20", item: "morning rolls, buttered" }
    ],
    method: [
      "House beans first, and they can be made days ahead: cook white beans with tomato, a little chancaca, mustard and smoked paprika until thick.",
      "Set the plancha in zones — bacon and sausage on the hottest, morcilla and tattie scones on the medium, eggs on the coolest.",
      "Start the bacon and Lorne first; they take longest and hold best.",
      "Griddle the morcilla and tattie scones next, 2 minutes a side.",
      "Fry eggs to order, last, and plate immediately.",
      "Everything must land together, which is the entire difficulty of this dish and the reason it cannot be a drop-off."
    ],
    makeAhead: "Beans, Lorne and tattie scones all days ahead. Nothing else.",
    holds:
      "Nothing here survives a van. Fried eggs weep, bacon goes limp, toast turns to leather. Sell it as a live station or not at all.",
    scaling: "One plancha serves about 20 guests at brunch pace. Beyond that you need a second cook and a second surface."
  },
  {
    dishId: 59,
    yields: "20 rolls",
    prepMin: 40,
    cookMin: 20,
    ingredients: [
      { qty: "20", item: "morning rolls", note: "order standing from a local bakery" },
      { qty: "20", item: "Lorne sausage squares", note: "as dish 8" },
      { qty: "20", item: "tattie scones", note: "as dish 51" },
      { qty: "20", item: "eggs" },
      { qty: "200 g", item: "butter, softened" },
      { qty: "200 ml", item: "brown sauce" }
    ],
    method: [
      "Griddle the Lorne squares hard, 2 minutes a side, until properly caught at the edges.",
      "Griddle the tattie scones alongside.",
      "Fry the eggs with a firm yolk — a runny yolk in a takeaway roll is a mess in a bag.",
      "Butter the rolls right to the edge, which keeps them from going soggy.",
      "Build: tattie scone, Lorne, egg, brown sauce.",
      "Wrap in paper, not foil. Foil steams it."
    ],
    makeAhead: "All components hold a day. Griddle and build to order.",
    holds:
      "Fifteen minutes wrapped in paper, which is exactly long enough for an office delivery and no longer. This is the scalable half of the Full Scottish and the one worth selling."
  },
  {
    dishId: 60,
    yields: "30 butteries",
    prepMin: 150,
    cookMin: 20,
    ingredients: [
      { qty: "1 kg", item: "strong white flour" },
      { qty: "20 g", item: "fresh yeast or 10 g dried" },
      { qty: "20 g", item: "salt", note: "butteries are meant to be salty; do not reduce it" },
      { qty: "600 ml", item: "warm water" },
      { qty: "350 g", item: "lard, softened" },
      { qty: "350 g", item: "butter, softened" }
    ],
    method: [
      "Make a slack dough with flour, yeast, salt and water. Knead 8 minutes and prove until doubled, about 1 hour.",
      "Beat the lard and butter together to a soft paste and divide into three.",
      "Roll the dough to a rectangle, dot with one third of the fat, and fold in three like a letter. Rest 30 minutes chilled.",
      "Repeat twice more with the remaining fat, resting between each fold.",
      "Cut into rough squares, flatten by hand — butteries are meant to look misshapen, not laminated neatly — and prove 45 minutes.",
      "Bake at 200 °C for 18–20 minutes until deep gold and the fat has bubbled out around them."
    ],
    makeAhead: "Freeze after shaping, before the final prove. Prove from frozen for 2 hours, then bake.",
    holds: "A day, and they are traditionally eaten reheated. Refresh 4 minutes at 190 °C.",
    scaling: "The folding is the bottleneck, not the baking. Budget 2.5 hours regardless of batch size, and make it worth doing by making a lot."
  },
  {
    dishId: 61,
    yields: "20 portions",
    prepMin: 15,
    cookMin: 25,
    ingredients: [
      { qty: "1.2 kg", item: "pinhead oats" },
      { qty: "300 g", item: "kiwicha" },
      { qty: "4 litres", item: "water and milk, half and half" },
      { qty: "2 tsp", item: "salt", note: "not optional; unsalted porridge tastes of nothing" },
      { qty: "500 g", item: "aguaymanto, halved" },
      { qty: "150 ml", item: "algarrobina" },
      { qty: "300 ml", item: "cream, to serve" }
    ],
    method: [
      "Toast the oats and kiwicha separately in a dry pan until they smell nutty. This one step is most of the flavour.",
      "Bring the liquid to a simmer with the salt.",
      "Rain in the oats while stirring, then the kiwicha. Kiwicha cooks faster and will clump if added first.",
      "Cook 20–25 minutes at a bare simmer, stirring with a spurtle or wooden spoon in one direction.",
      "It should fall from the spoon in a sheet, not a lump. Loosen with hot milk if it tightens.",
      "Serve with raw aguaymanto, a thread of algarrobina and cold cream poured around, not stirred in."
    ],
    makeAhead: "Cook a day ahead, chill in a tray, then cut and reheat with milk — this is how it was traditionally done.",
    holds: "Holds hot for an hour with a lid and a stir. It sets solid as it cools, so keep milk to hand."
  },
  {
    dishId: 62,
    yields: "60 drop scones",
    prepMin: 25,
    cookMin: 20,
    ingredients: [
      { qty: "600 g", item: "self-raising flour" },
      { qty: "4", item: "eggs" },
      { qty: "600 ml", item: "milk" },
      { qty: "300 g", item: "lúcuma pulp", note: "frozen pulp is fine and more consistent than fresh" },
      { qty: "80 g", item: "sugar" },
      { qty: "1 tsp", item: "salt" },
      { qty: "100 g", item: "butter, melted, plus more for the griddle" }
    ],
    method: [
      "Whisk the lúcuma pulp with milk and eggs until completely smooth — lúcuma is fibrous and will streak otherwise.",
      "Fold into the flour, sugar and salt. Do not beat; a few lumps are better than a developed batter.",
      "Stir in the melted butter and rest 20 minutes.",
      "Drop tablespoons onto a medium griddle. Wait for bubbles to form and burst across the whole surface before turning.",
      "One minute on the second side only.",
      "Stack under a cloth as they come off."
    ],
    makeAhead: "Batter holds overnight and thickens; loosen with milk. Cooked scones freeze well.",
    holds: "Soft and good for 3 hours in a covered box. One of the better breakfast drop-off items."
  },
  {
    dishId: 63,
    yields: "20 butties",
    prepMin: 25,
    cookMin: 20,
    ingredients: [
      { qty: "2 kg", item: "streaky bacon", note: "Peruvian bacon is streaky, not back — say so rather than implying otherwise" },
      { qty: "20", item: "morning rolls or pan francés" },
      { qty: "250 g", item: "butter, softened" },
      { qty: "3", item: "red onions, sliced paper-thin" },
      { qty: "4", item: "limes" },
      { qty: "1", item: "ají limo, minced" },
      { qty: "1 bunch", item: "coriander" }
    ],
    method: [
      "Salsa criolla: soak the sliced onion in cold water 10 minutes to take the raw edge off, then drain hard.",
      "Dress with lime, ají limo, coriander and salt no more than 15 minutes before service. Dressed early, it goes grey and limp.",
      "Griddle or roast the bacon until crisp at the edges but still yielding in the middle.",
      "Butter the rolls to the very edge — the butter is a moisture barrier.",
      "Build: bacon, then salsa criolla on top so the acid runs down through the fat.",
      "Wrap in paper. Never foil."
    ],
    makeAhead: "Bacon can be part-cooked and re-crisped. Salsa criolla components prepped, dressed late.",
    holds: "20 minutes. Beyond that the salsa wets the roll."
  },
  {
    dishId: 64,
    yields: "20 portions",
    prepMin: 40,
    cookMin: 20,
    ingredients: [
      { qty: "40", item: "tattie scones", note: "as dish 51" },
      { qty: "40", item: "eggs, for poaching" },
      { qty: "8", item: "egg yolks" },
      { qty: "400 g", item: "butter, clarified and warm" },
      { qty: "40 g", item: "ají amarillo paste" },
      { qty: "2 tbsp", item: "white wine vinegar, plus more for the poaching water" },
      { qty: "1 kg", item: "bacon or hot-smoked trout" }
    ],
    method: [
      "Hollandaise: whisk the yolks with vinegar and a splash of water over a bain-marie until they ribbon and hold a figure of eight.",
      "Trickle in the warm clarified butter, whisking constantly. If it tightens, a teaspoon of warm water brings it back.",
      "Whisk in the ají amarillo at the end, off the heat. Adding it early can split the emulsion.",
      "Hold the sauce at 55–60 °C in a warm bain-marie. Above 65 °C it scrambles, below 50 °C it sets.",
      "Poach the eggs in barely trembling vinegared water, 3 minutes for a soft yolk.",
      "Griddle the tattie scones. Build scone, bacon, egg, sauce, and go straight out."
    ],
    makeAhead: "Tattie scones days ahead. Eggs can be poached ahead and refreshed 30 seconds in hot water — a standard service trick.",
    holds:
      "Hollandaise holds 90 minutes at temperature, the assembled dish about 4 minutes. A live-station dish and unavoidably so.",
    scaling: "Two people minimum: one on eggs, one on the pass. Hollandaise in batches of no more than 8 yolks."
  },
  {
    dishId: 65,
    yields: "6 × 400 ml jars, plus 20 brioche portions",
    prepMin: 40,
    cookMin: 120,
    ingredients: [
      { qty: "1.5 kg", item: "naranja agria or Seville-type bitter oranges", note: "if unavailable, sweet orange plus 2 lemons" },
      { qty: "1.5 kg", item: "sugar" },
      { qty: "400 g", item: "lúcuma pulp" },
      { qty: "2 litres", item: "water" },
      { qty: "1", item: "brioche loaf, thickly sliced" },
      { qty: "150 g", item: "butter" }
    ],
    method: [
      "Halve and juice the oranges. Tie the pips and membranes in muslin — that bag is your entire pectin supply.",
      "Shred the peel as thick or thin as you want the finished marmalade; it will not change in the pan.",
      "Simmer peel, juice, water and the muslin bag for 90 minutes until the peel is completely soft. Test one: it should disintegrate between your fingers.",
      "Squeeze and discard the bag. Add the sugar and stir until fully dissolved before raising the heat.",
      "Boil hard to 104.5 °C, or until a spoonful wrinkles on a cold plate.",
      "Take off the heat, stir in the lúcuma, and rest 10 minutes before jarring so the peel does not float to the top.",
      "Serve on thick brioche, griddled in butter. The Dundee lineage is what gives this a date rather than just a flavour."
    ],
    makeAhead: "Marmalade keeps a year sealed. Make it in citrus season and use it all year.",
    holds: "Indefinite. Griddle the brioche to order — it goes leathery within 20 minutes."
  },
  {
    dishId: 66,
    yields: "40 crumpets",
    prepMin: 90,
    cookMin: 30,
    ingredients: [
      { qty: "700 g", item: "strong white flour" },
      { qty: "400 g", item: "camote, roasted and puréed" },
      { qty: "14 g", item: "dried yeast" },
      { qty: "700 ml", item: "warm milk and water, half and half" },
      { qty: "2 tsp", item: "salt" },
      { qty: "1 tsp", item: "bicarbonate of soda, slaked in 50 ml warm water" },
      { qty: "100 g", item: "butter, for the rings and griddle" }
    ],
    method: [
      "Roast the camote rather than boiling it, then purée and cool. Boiled camote makes the batter too wet to hole.",
      "Whisk flour, yeast, camote purée and the warm liquid to a thick batter. Cover and prove 1 hour until domed and actively bubbling.",
      "Stir in the salt, then the slaked bicarbonate. Rest 20 minutes — this second rise is what creates the holes.",
      "Butter crumpet rings well and set on a medium griddle.",
      "Pour batter 1.5 cm deep into each ring. Holes should appear across the surface within 4 minutes; if they do not, the batter is too thick — loosen it.",
      "Cook 8 minutes until the top is set and dry, then lift the ring and give the top 1 minute only."
    ],
    makeAhead: "Cook a day ahead. Crumpets are meant to be toasted, so this is normal rather than a compromise.",
    holds: "Days, wrapped. Toast to order.",
    scaling: "Ring count is the limit. Twelve rings on two griddles is about 90 crumpets an hour."
  },
  {
    dishId: 67,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 40,
    ingredients: [
      { qty: "3 kg", item: "papa nativa, boiled the day before and chilled" },
      { qty: "1.2 kg", item: "morcilla, crumbled" },
      { qty: "4", item: "onions, diced" },
      { qty: "20", item: "eggs" },
      { qty: "150 g", item: "beef dripping or butter" },
      { qty: "1 bunch", item: "parsley" },
      { qty: "1", item: "ají amarillo, sliced" }
    ],
    method: [
      "Use yesterday's boiled potato. Freshly boiled potato steams instead of frying and you will never get a crust.",
      "Crush the cold potato into rough chunks rather than dicing it neatly — the ragged edges are what crisp.",
      "Get the fat properly hot in a wide pan and add the potato in one layer. Leave it alone for 5 minutes before touching it.",
      "Add onion and continue until deeply browned in patches, 20 minutes total, turning only a few times.",
      "Fold the morcilla through in the last 5 minutes so it warms without disintegrating.",
      "Fry the eggs separately and set them on top. Finish with parsley and sliced ají amarillo."
    ],
    makeAhead: "Boil the potato 2 days ahead — that is the required step, not an optional one.",
    holds: "40 minutes hot, though the crust softens. Eggs to order."
  },
  {
    dishId: 68,
    yields: "20 bowls",
    prepMin: 45,
    cookMin: 30,
    ingredients: [
      { qty: "2 kg", item: "hot-smoked trout" },
      { qty: "2.5 kg", item: "papa nativa, mixed colours, roasted" },
      { qty: "600 g", item: "berros", note: "watercress; wants cool water, so check the Season page" },
      { qty: "2", item: "ají limo, minced" },
      { qty: "200 ml", item: "olive oil, 80 ml lime juice, 1 tbsp honey", note: "vinaigrette" },
      { qty: "400 g", item: "crème fraîche" },
      { qty: "1 bunch", item: "dill" }
    ],
    method: [
      "Roast the papa nativa in their skins at 200 °C until the edges catch, 30 minutes. Cool to room temperature.",
      "Whisk the vinaigrette with the ají limo and a good pinch of salt.",
      "Dress the potatoes while still slightly warm so they absorb it, then cool completely.",
      "Flake the trout in large pieces. Small flakes disappear into a bowl.",
      "Assemble cold: potato base, trout, berros on top, crème fraîche and dill.",
      "Send the vinaigrette separately for anything travelling more than 20 minutes — dressed watercress collapses."
    ],
    makeAhead: "Potatoes and dressing a day ahead. Assemble within 2 hours of service.",
    holds:
      "2 hours boxed if the leaves are undressed. This is the highest food-cost dish in the matrix at 30.4%, so watch the trout weight."
  },
  {
    dishId: 69,
    yields: "20 bowls",
    prepMin: 40,
    cookMin: 25,
    ingredients: [
      { qty: "2.5 kg", item: "lomo fino, in strips" },
      { qty: "600 g", item: "pinhead oats", note: "replaces the rice; toast them first" },
      { qty: "1.5 kg", item: "papa amarilla, cut for chips and fried" },
      { qty: "4", item: "red onions, in thick wedges" },
      { qty: "6", item: "tomatoes, in wedges" },
      { qty: "150 ml", item: "sillao and 80 ml red wine vinegar" },
      { qty: "2", item: "ají amarillo, sliced" },
      { qty: "1 bunch", item: "coriander" }
    ],
    method: [
      "Toast the oats, then simmer in salted water 15 minutes until tender but distinct. Drain and spread to cool.",
      "Fry the potato chips and hold them separately. They must stay out of the sauce until the last second.",
      "Get a wok or wide pan genuinely smoking. Sear the beef in two batches — crowding it steams the meat and you lose the wok hei that defines saltado.",
      "Add onion and ají amarillo for 1 minute only, then tomato for 30 seconds.",
      "Deglaze with sillao and vinegar, letting it hiss and reduce to almost nothing.",
      "Fold through coriander. Build the bowl: oats, saltado, chips on top so they stay crisp."
    ],
    makeAhead: "Oats a day ahead. The saltado itself must be cooked à la minute or it is not saltado.",
    holds:
      "Boxed, 45 minutes, and the chips will soften — that is the accepted compromise of a saltado bowl. Box the chips separately if the client will tolerate it."
  },
  {
    dishId: 70,
    yields: "20 bowls",
    prepMin: 40,
    cookMin: 30,
    ingredients: [
      { qty: "2.5 kg", item: "chicken thigh, poached and shredded" },
      { qty: "800 g", item: "tri-colour quinoa, rinsed" },
      { qty: "600 g", item: "mayonnaise" },
      { qty: "200 g", item: "thick yoghurt" },
      { qty: "3 tbsp", item: "mild curry powder" },
      { qty: "3 tbsp", item: "mango chutney or aguaymanto preserve" },
      { qty: "200 g", item: "raisins, soaked in warm tea" },
      { qty: "100 g", item: "toasted almonds" },
      { qty: "1 bunch", item: "coriander" }
    ],
    method: [
      "Rinse the quinoa until the water runs clear, then cook 12 minutes, drain, and spread on a tray to cool fast and stay separate.",
      "Toast the curry powder in a dry pan for 40 seconds until fragrant. Raw curry powder in a cold sauce tastes dusty.",
      "Whisk it into the mayonnaise, yoghurt and chutney. Let the sauce sit 30 minutes for the spice to bloom.",
      "Fold the shredded chicken into the sauce, not the other way round, so it coats evenly.",
      "Drain the raisins and fold in with the coriander.",
      "Layer quinoa then chicken, and scatter the almonds at the last minute so they stay crunchy."
    ],
    makeAhead: "Everything except the almonds can be done a day ahead, and the sauce improves.",
    holds: "4 hours chilled. One of the strongest and most reliable corporate box items."
  },
  {
    dishId: 71,
    yields: "20 boxes",
    prepMin: 45,
    cookMin: 0,
    ingredients: [
      { qty: "1.5 kg", item: "mature cheddar", note: "imported; the single most expensive line in this box" },
      { qty: "800 g", item: "queso paria", note: "local, sharp, and cuts the import cost considerably" },
      { qty: "1.5 kg", item: "artisanal ham" },
      { qty: "20", item: "crusty rolls or sourdough portions" },
      { qty: "600 g", item: "aguaymanto preserve", note: "as dish 122" },
      { qty: "400 g", item: "rocoto piccalilli or pickles" },
      { qty: "20", item: "apples, 40 radishes, celery" }
    ],
    method: [
      "This is an assembly job, and the discipline is in the cutting rather than the cooking.",
      "Cut the cheese in generous wedges, not slices. A ploughman's should look like a wedge of cheese, not a sandwich filling.",
      "Fold the ham rather than laying it flat — height reads as generosity in a box.",
      "Portion the preserve and piccalilli into small pots so they do not wet the bread.",
      "Cut the apple last and toss in lemon water, or it browns before the box is closed.",
      "Pack the bread on top so it is not compressed under the cheese."
    ],
    makeAhead: "Cut cheese and ham the morning of. Preserves keep months.",
    holds: "4 hours at cool room temperature. Zero cooking on the day makes this the easiest thing in the matrix to scale."
  },
  {
    dishId: 72,
    yields: "20 bowls",
    prepMin: 30,
    cookMin: 40,
    ingredients: [
      { qty: "1 batch", item: "cullen skink chupe", note: "as dish 28, made slightly thicker" },
      { qty: "1 kg", item: "papa nativa, roasted in cubes", note: "for texture in the bowl" },
      { qty: "400 g", item: "extra smoked fish, flaked" },
      { qty: "1 bunch", item: "chives" },
      { qty: "20", item: "oatcakes", note: "as dish 52, packed separately" }
    ],
    method: [
      "Make the chupe as dish 28 but reduce it further — a bowl version needs to be thick enough not to slop in transit.",
      "Roast the extra potato cubes so there is something with an edge in a soup that is otherwise soft.",
      "Cool the soup fast in a shallow tray before boxing. Hot soup in a sealed container steams and thins.",
      "Box the soup, then the roast potato and extra fish on top.",
      "Send the oatcakes in a separate bag. In the same box they are soft within the hour."
    ],
    makeAhead: "Soup 3 days ahead, and it improves.",
    holds: "Reheats well and travels well, provided the oatcakes stay separate. A rare hot drop-off that genuinely works."
  },
  {
    dishId: 73,
    yields: "20 boxes",
    prepMin: 90,
    cookMin: 40,
    ingredients: [
      { qty: "1 batch", item: "keftedes", note: "as dish 23" },
      { qty: "800 g", item: "queso paria, cubed", note: "standing in for feta" },
      { qty: "600 g", item: "Tacna olives" },
      { qty: "1 batch", item: "tzatziki con rocoto", note: "as dish 109" },
      { qty: "1 batch", item: "melitzanosalata", note: "as dish 111" },
      { qty: "600 g", item: "dolmades", note: "as dish 110" },
      { qty: "20", item: "flatbreads" },
      { qty: "1 kg", item: "cucumber and tomato, for a quick horiatiki" }
    ],
    method: [
      "This box is an assembly of five component recipes, which is what makes it efficient: nothing here is made only for this dish.",
      "Portion the wet dips into pots first and set them in the box before anything else.",
      "Keftedes go in cold — they are as good cold as warm, which is why they belong in a box.",
      "Cut the salad components chunky and undressed, with the dressing in a pot.",
      "Flatbread on top, folded rather than flat.",
      "Check the total weight per box. Mezze boxes drift heavier than costed because everything is scooped rather than counted."
    ],
    makeAhead: "Every component holds 2–3 days. Assemble the morning of.",
    holds: "4 hours cold. The highest-margin box in the matrix if the portioning is disciplined."
  },
  {
    dishId: 74,
    yields: "20 boxes",
    prepMin: 60,
    cookMin: 0,
    ingredients: [
      { qty: "1 batch", item: "paiche gravlax", note: "as dish 44" },
      { qty: "1 batch", item: "rye and kiwicha crispbread", note: "as dish 120" },
      { qty: "1 batch", item: "dill and papa nativa salad", note: "as dish 121" },
      { qty: "600 g", item: "rocoto and betarraga pickles", note: "as dish 117" },
      { qty: "400 g", item: "hovmästarsås", note: "the mustard-dill sauce from dish 44" },
      { qty: "200 g", item: "crème fraîche" }
    ],
    method: [
      "Slice the gravlax cold and lay it on paper, not directly on other components — it weeps.",
      "Pack the potato salad in its own pot; the dressing will grey the crispbread on contact.",
      "Pickles in a pot, sauce in a pot. This box lives or dies on compartmentalisation.",
      "Crispbread goes in last, on top, and only if the box seals well.",
      "Everything is cured, pickled or cold-set, which makes this the most transport-stable box on the list."
    ],
    makeAhead: "Cure 3 days ahead, crispbread a week, pickles a month. Almost nothing happens on the day.",
    holds: "5 hours cold without deterioration."
  },
  {
    dishId: 75,
    yields: "20 pies",
    prepMin: 70,
    cookMin: 45,
    ingredients: [
      { qty: "1.2 kg", item: "shortcrust pastry" },
      { qty: "2.5 kg", item: "chicken thigh, in large pieces" },
      { qty: "60 g", item: "ají amarillo paste" },
      { qty: "1 bunch", item: "huacatay" },
      { qty: "2 tbsp", item: "sillao, 1 tbsp cumin, 1 tbsp smoked paprika", note: "the brasa marinade" },
      { qty: "600 ml", item: "chicken stock" },
      { qty: "60 g", item: "butter and 60 g flour", note: "roux" },
      { qty: "200 ml", item: "cream" }
    ],
    method: [
      "Marinate the chicken in sillao, cumin, paprika, huacatay and half the ají amarillo for 4 hours.",
      "Roast hard at 220 °C for 25 minutes until charred at the edges. The char is the pollo a la brasa flavour; without it this is just a chicken pie.",
      "Shred the meat and reserve every scrap of resting juice.",
      "Make a roux, add stock and the resting juices, and simmer to a thick velouté. Add cream and the remaining ají amarillo.",
      "Fold in the chicken. Cool completely before filling — warm filling melts shortcrust.",
      "Fill, lid, crimp, vent and bake at 190 °C for 35 minutes."
    ],
    makeAhead: "Filling 2 days ahead. Assemble and freeze raw if needed.",
    holds: "Good warm for an hour, fine at room temperature. A dependable box pie."
  },
  {
    dishId: 76,
    yields: "60 wedges",
    prepMin: 30,
    cookMin: 45,
    ingredients: [
      { qty: "1 kg", item: "butter, softened", note: "the whole flavour; use the best you can afford" },
      { qty: "500 g", item: "caster sugar" },
      { qty: "1.2 kg", item: "plain flour" },
      { qty: "300 g", item: "rice flour or cornflour", note: "this is what gives shortbread its sandy snap" },
      { qty: "2 tsp", item: "salt" },
      { qty: "150 g", item: "cacao nibs" },
      { qty: "50 g", item: "demerara, for the tops" }
    ],
    method: [
      "Beat butter and sugar until just combined. Do not cream it pale — air makes shortbread cakey.",
      "Fold in both flours and the salt, then the cacao nibs, and stop the moment it comes together.",
      "Press into round tins about 1 cm deep. Press, do not roll.",
      "Crimp the edges, prick all over with a fork, and score into wedges before baking. Scoring after baking shatters it.",
      "Chill 30 minutes, then bake at 150 °C for 40–45 minutes until pale gold at the very edge only.",
      "Cut through the scores while hot, sprinkle with demerara, and cool in the tin."
    ],
    makeAhead: "Two weeks in a tin. The dough freezes a month.",
    holds:
      "Indefinite in a sealed tin, and the wedge shape is visually distinctive enough to carry a gift box. One of the strongest retail candidates in the matrix."
  },
  {
    dishId: 77,
    yields: "48 squares",
    prepMin: 60,
    cookMin: 45,
    ingredients: [
      { qty: "1 batch", item: "shortbread base", note: "as dish 76 without the nibs, pressed into a lined tray" },
      { qty: "1.5 kg", item: "manjar blanco" },
      { qty: "400 g", item: "lúcuma pulp" },
      { qty: "100 g", item: "butter" },
      { qty: "800 g", item: "70% Peruvian dark chocolate, tempered" },
      { qty: "1 tbsp", item: "Maras salt, crushed" }
    ],
    method: [
      "Bake the shortbread base at 150 °C for 35 minutes until pale gold. Cool completely in the tin.",
      "Cook the manjar blanco with the lúcuma and butter over low heat for 10 minutes, stirring constantly, until it thickens and pulls from the pan.",
      "Pour over the cooled base and level. Chill 2 hours until firm.",
      "Temper the chocolate properly: melt to 45 °C, cool to 27 °C, bring back to 31 °C. Untempered chocolate blooms grey within a day and looks like a fault.",
      "Pour over, spread thin, and scatter Maras salt before it sets.",
      "Cut with a hot dry knife once set but not fridge-cold, or the chocolate cracks."
    ],
    makeAhead: "Assemble 3 days ahead. Do not refrigerate once finished — condensation dulls the chocolate.",
    holds: "Days at cool room temperature. In Lima's summer heat the caramel softens; keep it below 22 °C.",
    scaling: "Tempering is the bottleneck. Temper in 2 kg batches or the chocolate falls out of temper before you finish pouring."
  },
  {
    dishId: 78,
    yields: "50 alfajores",
    prepMin: 70,
    cookMin: 15,
    ingredients: [
      { qty: "600 g", item: "cornflour" },
      { qty: "400 g", item: "plain flour" },
      { qty: "60 g", item: "maca powder" },
      { qty: "500 g", item: "butter, softened" },
      { qty: "250 g", item: "icing sugar" },
      { qty: "4", item: "egg yolks" },
      { qty: "1 kg", item: "manjar blanco" },
      { qty: "80 ml", item: "single malt whisky" },
      { qty: "200 g", item: "desiccated coconut or icing sugar, to finish" }
    ],
    method: [
      "Beat butter and icing sugar, then the yolks.",
      "Fold in both flours and the maca. The dough will be very short and crumbly — that is correct.",
      "Chill 1 hour, then roll 5 mm between sheets of paper, which is the only way to handle a dough this short.",
      "Cut 4 cm rounds and bake at 170 °C for 12 minutes. They should not colour at all.",
      "Cool completely on the tray. Warm alfajor biscuits break if you lift them.",
      "Beat the whisky into the manjar blanco. Pipe, sandwich, and roll the edges in coconut.",
      "The maca is earthy and slightly bitter, which is what stops the whole thing being cloying."
    ],
    makeAhead: "Biscuits keep a week unfilled. Filled, they soften after 2 days — which some people prefer.",
    holds: "Excellent. Boxes and travels perfectly. Needs the liquor licence flag only because of the whisky in the filling."
  },
  {
    dishId: 79,
    yields: "50 macaroons",
    prepMin: 45,
    cookMin: 0,
    ingredients: [
      { qty: "500 g", item: "papa amarilla, boiled, riced and completely cooled" },
      { qty: "1.6 kg", item: "icing sugar", note: "roughly; add until it stops absorbing" },
      { qty: "1 tsp", item: "vanilla" },
      { qty: "800 g", item: "70% Peruvian dark chocolate, tempered" },
      { qty: "300 g", item: "desiccated coconut, lightly toasted" }
    ],
    method: [
      "Rice the potato and let it cool completely and dry out. Warm potato will turn the sugar to syrup and the mixture will never set.",
      "Beat in the icing sugar a large spoonful at a time. It will look like nothing is happening, then it suddenly seizes into a stiff fondant.",
      "Keep adding sugar until it is firm enough to roll and no longer sticky. The exact amount depends on how wet the potato is.",
      "Roll into 20 g logs and chill 1 hour until hard.",
      "Dip in tempered chocolate, then straight into the toasted coconut.",
      "Set on paper at cool room temperature.",
      "One potato and a bag of sugar becomes a confection — a Scottish sweet built on the crop Peru domesticated. This is the best story in the matrix and it costs almost nothing to make."
    ],
    makeAhead: "The fondant keeps a week chilled. Dipped, they keep 2 weeks.",
    holds: "Very stable. Survives a hot van better than anything else in the bakery section.",
    scaling: "Trivially scalable, which combined with the story makes this the obvious retail product."
  },
  {
    dishId: 80,
    yields: "60 pieces",
    prepMin: 20,
    cookMin: 30,
    ingredients: [
      { qty: "1.5 kg", item: "granulated sugar" },
      { qty: "400 ml", item: "whole milk" },
      { qty: "1 tin", item: "condensed milk, 397 g" },
      { qty: "150 g", item: "butter" },
      { qty: "300 g", item: "lúcuma pulp" },
      { qty: "1 tsp", item: "salt" }
    ],
    method: [
      "Warm the milk, sugar and butter in a heavy, deep pan until the sugar dissolves completely. Undissolved sugar means grainy tablet.",
      "Add the condensed milk and bring to a steady boil, stirring constantly. It will climb, so use a pan twice the size you think you need.",
      "Boil to 118 °C, about 20 minutes. This is soft-ball stage and there is no substitute for a thermometer.",
      "Take off the heat, add the lúcuma and salt, and beat hard for 5–8 minutes as it cools.",
      "You are looking for the moment it loses its gloss and thickens — that is crystallisation starting, and it is the difference between tablet and fudge.",
      "Pour into a lined tray immediately and mark into squares while still warm."
    ],
    makeAhead: "Keeps a month in a tin.",
    holds: "Indefinite. Dry, sweet and stable — ideal for boxes and gifts.",
    scaling: "Do not double beyond 3 kg of sugar in one pan. Larger batches will not reach temperature evenly and you get a soft centre."
  },
  {
    dishId: 81,
    yields: "60 pieces",
    prepMin: 20,
    cookMin: 30,
    ingredients: [
      { qty: "1.5 kg", item: "granulated sugar" },
      { qty: "400 ml", item: "whole milk" },
      { qty: "1 tin", item: "condensed milk, 397 g" },
      { qty: "150 g", item: "butter" },
      { qty: "200 g", item: "70% dark chocolate, chopped" },
      { qty: "60 g", item: "cacao nibs" },
      { qty: "2 tbsp", item: "Maras salt, crushed" }
    ],
    method: [
      "Follow the tablet method exactly as dish 80 up to 118 °C.",
      "Off the heat, stir in the chopped chocolate until it melts completely.",
      "Beat until it loses its gloss and thickens.",
      "Pour into a lined tray, scatter with cacao nibs and Maras salt, and press them in lightly.",
      "Mark into squares while warm.",
      "The salt is the point: dark chocolate tablet without it is one-dimensional."
    ],
    makeAhead: "A month in a tin.",
    holds: "Indefinite and travels perfectly."
  },
  {
    dishId: 82,
    yields: "40 biscuits",
    prepMin: 60,
    cookMin: 15,
    ingredients: [
      { qty: "900 g", item: "plain flour" },
      { qty: "600 g", item: "butter" },
      { qty: "300 g", item: "caster sugar" },
      { qty: "2", item: "eggs" },
      { qty: "400 g", item: "maracuyá curd or thick passionfruit jam" },
      { qty: "600 g", item: "icing sugar and 80 ml maracuyá juice", note: "for the icing" },
      { qty: "40", item: "glacé cherries" }
    ],
    method: [
      "Rub the butter into the flour, then add sugar and egg to make a firm dough. Chill 1 hour.",
      "Roll 4 mm and cut 6 cm rounds. You need an even number; every biscuit is half a sandwich.",
      "Bake at 175 °C for 12–14 minutes until barely coloured at the edges.",
      "Cool completely, then sandwich in pairs with the curd. Do not overfill — it will squeeze out under the icing.",
      "Beat the icing sugar with maracuyá juice to a thick, just-pourable glacé icing.",
      "Spoon onto each top and place a cherry in the centre before it sets.",
      "Note the provenance: Empire biscuits are strongly associated with Scotland but may not have originated there. Do not overclaim on the card."
    ],
    makeAhead: "Biscuits keep a week unfilled. Assembled, eat within 3 days before the icing weeps into the biscuit.",
    holds: "A day boxed. The icing marks if stacked, so single layers with paper between."
  },
  {
    dishId: 83,
    yields: "2 cakes, 24 slices",
    prepMin: 45,
    cookMin: 120,
    ingredients: [
      { qty: "500 g", item: "butter, 500 g caster sugar" },
      { qty: "8", item: "eggs" },
      { qty: "700 g", item: "plain flour and 2 tsp baking powder" },
      { qty: "400 g", item: "raisins and 300 g dried aguaymanto" },
      { qty: "200 g", item: "mixed peel" },
      { qty: "150 ml", item: "whisky, plus more for feeding" },
      { qty: "200 g", item: "pecans, whole", note: "for the traditional concentric top" },
      { qty: "2", item: "oranges, zest" }
    ],
    method: [
      "Soak the dried fruit in whisky overnight. Under-soaked fruit steals moisture from the crumb.",
      "Cream butter and sugar properly pale, 6–8 minutes. This cake has no chemical lift to fall back on.",
      "Add the eggs one at a time, with a spoon of flour if it looks like splitting.",
      "Fold in the flour, then the soaked fruit and orange zest.",
      "Fill lined tins two-thirds full, level, and arrange the pecans in concentric rings on top. Do not press them in; they should sit proud.",
      "Bake at 150 °C for 1 hour 45 to 2 hours. Cover with paper if the top colours before the centre sets.",
      "Feed with a tablespoon of whisky a week while it matures."
    ],
    makeAhead: "Make 3–6 weeks ahead and feed weekly. This cake genuinely needs the time.",
    holds: "Months. Slices cleanly cold and travels whole.",
    scaling: "Oven time does not scale with tin count, but it does with tin size. Keep to 20 cm tins."
  },
  {
    dishId: 84,
    yields: "40 tarts",
    prepMin: 60,
    cookMin: 30,
    ingredients: [
      { qty: "1 kg", item: "sweet shortcrust pastry" },
      { qty: "400 g", item: "butter, melted" },
      { qty: "500 g", item: "chancaca, grated" },
      { qty: "4", item: "eggs" },
      { qty: "3 tbsp", item: "cider vinegar", note: "the traditional sharpener; it stops the tart being sickly" },
      { qty: "500 g", item: "raisins and currants" },
      { qty: "150 g", item: "chopped pecans" }
    ],
    method: [
      "Line 7 cm tartlet tins and chill 30 minutes. No need to blind bake — the filling is wet enough to set the base as it cooks.",
      "Melt the chancaca into the warm butter until fully dissolved.",
      "Whisk in the eggs and vinegar off the heat. If the butter is too hot the eggs will scramble.",
      "Stir in the fruit and nuts.",
      "Fill the cases three-quarters full and bake at 180 °C for 25–30 minutes until set with a slight wobble.",
      "Cool in the tins — they are fragile hot and firm as they cool."
    ],
    makeAhead: "Bake a day ahead. Chancaca keeps them moist for 4 days.",
    holds: "Excellent. Sturdy, sweet and stable at room temperature."
  },
  {
    dishId: 85,
    yields: "40 tarts",
    prepMin: 55,
    cookMin: 30,
    ingredients: [
      { qty: "1 kg", item: "sweet shortcrust pastry" },
      { qty: "400 g", item: "butter, softened" },
      { qty: "400 g", item: "soft brown sugar" },
      { qty: "4", item: "eggs" },
      { qty: "300 g", item: "dried figs, chopped" },
      { qty: "250 g", item: "pecans, chopped" },
      { qty: "2", item: "lemons, zest and juice" },
      { qty: "150 g", item: "ground almonds" }
    ],
    method: [
      "Line and chill the tartlet cases.",
      "Cream the butter and sugar, add eggs one at a time, then fold in the ground almonds.",
      "Fold through the figs, pecans, lemon zest and juice. The lemon is what distinguishes a Border tart from an Ecclefechan.",
      "Fill the cases and bake at 180 °C for 25 minutes until golden and just set.",
      "Cool in the tins.",
      "Optionally glaze with warmed apricot jam or a thin lemon icing."
    ],
    makeAhead: "Bake up to 3 days ahead; the filling improves as the lemon settles into the figs.",
    holds: "Very stable at room temperature all day. Good for boxes and gifting."
  },
  {
    dishId: 86,
    yields: "2 loaves, 24 slices",
    prepMin: 70,
    cookMin: 150,
    ingredients: [
      { qty: "700 g", item: "plain flour and 150 g butter", note: "for the plain pastry casing" },
      { qty: "1 kg", item: "raisins and 500 g currants" },
      { qty: "200 g", item: "mixed peel and 150 g chopped almonds" },
      { qty: "300 g", item: "plain flour, for the filling" },
      { qty: "2 tsp", item: "ground allspice, 2 tsp cinnamon, 1 tsp ginger, 1 tsp black pepper" },
      { qty: "1 tsp", item: "bicarbonate of soda" },
      { qty: "200 ml", item: "pisco or whisky" },
      { qty: "300 ml", item: "milk" },
      { qty: "1", item: "egg, for wash" }
    ],
    method: [
      "Make a firm pastry and rest it. This is a casing, not a pleasure — it is meant to be plain.",
      "Mix all the fruit, nuts, flour, spices and bicarbonate. The black pepper is traditional and worth keeping.",
      "Bind with the pisco and milk to a stiff mixture.",
      "Line loaf tins with pastry, leaving an overhang. Pack the filling in tightly — air pockets collapse.",
      "Fold the pastry over, seal, and prick right through to the base several times with a skewer.",
      "Bake at 150 °C for 2.5 hours. Cover if the pastry darkens.",
      "Traditionally cut at Hogmanay, which makes it the anchor of a New Year product."
    ],
    makeAhead: "Make at least 2 weeks ahead, ideally a month. It is inedible fresh and excellent matured.",
    holds: "Months in a tin. The longest shelf life in the matrix.",
    scaling: "The pricking matters more at scale — without it the pastry lifts off the filling in a dome."
  },
  {
    dishId: 87,
    yields: "20 portions",
    prepMin: 45,
    cookMin: 180,
    ingredients: [
      { qty: "500 g", item: "plain flour" },
      { qty: "300 g", item: "shredded suet or cold grated butter" },
      { qty: "300 g", item: "pinhead oats" },
      { qty: "600 g", item: "raisins and currants" },
      { qty: "200 g", item: "chancaca or dark sugar" },
      { qty: "2 tsp", item: "cinnamon, 2 tsp mixed spice, 1 tsp ginger" },
      { qty: "2", item: "eggs and 300 ml milk" },
      { qty: "150 ml", item: "algarrobina" },
      { qty: "1", item: "large cloth and flour for dusting", note: "the cloot" }
    ],
    method: [
      "Scald the cloth in boiling water, wring it out, and spread it flat. Dust generously with flour — this forms the characteristic skin.",
      "Mix all dry ingredients, then bind with egg, milk and algarrobina to a soft dropping consistency.",
      "Heap the mixture in the centre of the cloth, gather the edges, and tie with string leaving room to expand.",
      "Lower onto an upturned plate in a large pan of boiling water and simmer 3 hours, topping up with boiling water.",
      "Lift out, dip briefly in cold water to loosen, then unwrap onto a plate.",
      "Dry the skin in a low oven for 15 minutes — that leathery skin is the whole point of a clootie."
    ],
    makeAhead: "Better made 2 days ahead. Keeps a week and slices for frying, which is how leftovers are traditionally eaten.",
    holds: "Excellent. Steams to reheat and is arguably better on day two.",
    scaling: "One dumpling per 10 portions. Larger and the centre will not cook through in 3 hours."
  },
  {
    dishId: 88,
    yields: "40 slices",
    prepMin: 45,
    cookMin: 35,
    ingredients: [
      { qty: "1.2 kg", item: "puff or flaky pastry" },
      { qty: "1 kg", item: "raisins and currants" },
      { qty: "150 g", item: "chancaca" },
      { qty: "100 g", item: "butter" },
      { qty: "2 tsp", item: "mixed spice" },
      { qty: "1", item: "lemon, zest and juice" },
      { qty: "3 tbsp", item: "pisco" },
      { qty: "1", item: "egg and caster sugar, to finish" }
    ],
    method: [
      "Warm the fruit with chancaca, butter, spice, lemon and pisco until the fruit plumps and the mixture is thick, 10 minutes. Cool completely.",
      "Roll two pastry sheets to fit a tray. Lay one down, spread the fruit right to the edges — a bare margin makes the slice look mean.",
      "Top with the second sheet, press the edges, and score the top into portions.",
      "Egg wash and sprinkle heavily with caster sugar.",
      "Bake at 200 °C for 30–35 minutes until deep gold and the base is cooked through. Lift a corner to check.",
      "Cool before cutting through the scores.",
      "Its name is a Scottish joke about the appearance. Whether you use it on the menu is a judgement call."
    ],
    makeAhead: "Bake a day ahead.",
    holds: "2 days. Stable, sturdy and cheap — a strong tea-tray item."
  },
  {
    dishId: 89,
    yields: "2 loaves, 24 slices",
    prepMin: 150,
    cookMin: 40,
    ingredients: [
      { qty: "1 kg", item: "strong white flour" },
      { qty: "20 g", item: "dried yeast" },
      { qty: "150 g", item: "sugar" },
      { qty: "250 g", item: "butter, softened" },
      { qty: "400 ml", item: "warm milk" },
      { qty: "600 g", item: "sultanas" },
      { qty: "200 g", item: "lúcuma pulp" },
      { qty: "2 tsp", item: "salt" }
    ],
    method: [
      "Warm the milk with the lúcuma and whisk smooth, then add the yeast and a spoon of the sugar. Leave 10 minutes until foaming.",
      "Mix into flour, remaining sugar and salt to a soft dough. Knead 10 minutes.",
      "Work in the softened butter a little at a time. It will look broken before it comes together — persevere.",
      "Prove 1 hour until doubled, then knock back and fold in the sultanas. Adding fruit before the first prove slows the yeast.",
      "Shape into rounds, place on trays, and prove 45 minutes.",
      "Bake at 190 °C for 35–40 minutes. It should sound hollow underneath.",
      "Glaze with warm milk and sugar as it comes out."
    ],
    makeAhead: "Freezes well baked. Best on day one or two, then toasted.",
    holds: "3 days wrapped. Toasted with butter thereafter, which is traditional anyway."
  },
  {
    dishId: 90,
    yields: "2 loaves, 24 slices",
    prepMin: 30,
    cookMin: 60,
    ingredients: [
      { qty: "800 g", item: "sultanas" },
      { qty: "500 ml", item: "hot strong black tea" },
      { qty: "100 ml", item: "pisco" },
      { qty: "400 g", item: "soft brown sugar" },
      { qty: "700 g", item: "self-raising flour" },
      { qty: "2", item: "eggs" },
      { qty: "2 tsp", item: "mixed spice" }
    ],
    method: [
      "Soak the sultanas in hot tea, pisco and sugar overnight. This is the entire technique and it cannot be shortened.",
      "The next day, beat in the eggs.",
      "Fold in the flour and spice until just combined. Overmixing makes it tough.",
      "Divide between two lined loaf tins.",
      "Bake at 170 °C for 55–60 minutes until a skewer comes out clean.",
      "Cool in the tin. Serve sliced and buttered — it is meant to be eaten with butter, not on its own."
    ],
    makeAhead: "Keeps a week wrapped and improves for the first three days.",
    holds: "Excellent. No fat in the batter means it stays moist for days rather than staling.",
    scaling: "Scales perfectly and is one of the cheapest items in the matrix to produce."
  },
  {
    dishId: 91,
    yields: "40 bars",
    prepMin: 25,
    cookMin: 30,
    ingredients: [
      { qty: "800 g", item: "rolled oats" },
      { qty: "200 g", item: "quinoa, toasted" },
      { qty: "500 g", item: "butter" },
      { qty: "400 g", item: "chancaca, grated" },
      { qty: "200 g", item: "golden syrup or honey" },
      { qty: "150 g", item: "cacao nibs" },
      { qty: "1 tsp", item: "salt" }
    ],
    method: [
      "Toast the quinoa until it pops. Untoasted quinoa in a flapjack is unpleasantly raw.",
      "Melt the butter, chancaca, syrup and salt together until smooth. Do not let it boil or the bars set rock hard.",
      "Stir in the oats, toasted quinoa and cacao nibs until every grain is coated.",
      "Press very firmly into a lined tray. Loose packing is why flapjacks crumble.",
      "Bake at 170 °C for 25–30 minutes until golden at the edges but still soft in the middle — they firm as they cool.",
      "Mark into bars while hot, cool completely in the tin, then cut."
    ],
    makeAhead: "A week in a tin.",
    holds: "Extremely stable. Travels, boxes and survives heat. An obvious tasting-box filler."
  },
  {
    dishId: 92,
    yields: "20 cups",
    prepMin: 35,
    cookMin: 10,
    ingredients: [
      { qty: "300 g", item: "pinhead oats" },
      { qty: "80 g", item: "chancaca or demerara" },
      { qty: "1.2 litres", item: "double cream" },
      { qty: "150 ml", item: "whisky or pisco" },
      { qty: "150 ml", item: "algarrobina" },
      { qty: "6", item: "chirimoya, flesh only, seeds removed", note: "short season; check the Season page before promising it" }
    ],
    method: [
      "Toast the oats with the sugar under a grill until they caramelise into crunchy clusters. Watch them — they go from toasted to burnt in seconds.",
      "Cool completely. They must be cold and crisp or they dissolve into the cream.",
      "Whip the cream to soft peaks only. Over-whipped cranachan is grainy.",
      "Fold in the whisky and half the algarrobina.",
      "Scoop the chirimoya flesh, removing every seed, and crush it lightly.",
      "Layer in glasses: oats, cream, chirimoya, repeating, finishing with oats so they stay crisp on top.",
      "Thread the remaining algarrobina over at the last moment."
    ],
    makeAhead: "Oats a week ahead. Assemble no more than 2 hours before service.",
    holds: "2 hours. The oats soften after that, which is the whole texture gone.",
    scaling: "Chirimoya browns on contact with air. Scoop it in batches as you assemble, not all at once."
  },
  {
    dishId: 93,
    yields: "20 portions",
    prepMin: 60,
    cookMin: 30,
    ingredients: [
      { qty: "1", item: "plain sponge, 30 cm, cubed", note: "day-old is better; fresh sponge turns to paste" },
      { qty: "200 ml", item: "whisky" },
      { qty: "800 g", item: "raspberries or local berries" },
      { qty: "1.5 litres", item: "milk, 12 egg yolks, 200 g sugar, 60 g cornflour", note: "custard" },
      { qty: "1 litre", item: "double cream" },
      { qty: "100 g", item: "toasted flaked almonds" }
    ],
    method: [
      "Make a proper custard: heat the milk, whisk into the yolks, sugar and cornflour, then return to the pan and cook out until thick. Cover with cling film touching the surface and cool completely.",
      "Layer the sponge in a glass bowl and douse with whisky. Let it soak 20 minutes.",
      "Crush half the berries with a little sugar and spoon over; scatter the rest whole.",
      "Pour over the cold custard. Warm custard will melt the whole thing into soup.",
      "Chill 4 hours until set.",
      "Whip the cream to soft peaks, spoon on top, and finish with toasted almonds just before serving.",
      "The whisky is the only thing separating this from an English trifle, and it is worth being generous with it."
    ],
    makeAhead: "Assemble to the custard layer a day ahead. Cream on the day.",
    holds: "Holds 4 hours cold. A glass bowl travels badly — assemble on site if you can.",
    scaling: "Individual glasses scale better than one bowl and portion themselves, which matters on a buffet."
  },
  {
    dishId: 94,
    yields: "20 pots",
    prepMin: 25,
    cookMin: 0,
    ingredients: [
      { qty: "1.5 litres", item: "double cream" },
      { qty: "400 g", item: "lúcuma pulp" },
      { qty: "300 g", item: "orange marmalade", note: "the Dundee-lineage marmalade from dish 65" },
      { qty: "150 ml", item: "whisky" },
      { qty: "2", item: "lemons, juice" },
      { qty: "100 g", item: "icing sugar" },
      { qty: "100 g", item: "toasted oats, to finish" }
    ],
    method: [
      "Whip the cream with the icing sugar to soft peaks. Stop early; it will firm as you fold.",
      "Loosen the marmalade with the whisky and lemon juice so it ripples rather than clumps.",
      "Fold the lúcuma through the cream first, evenly.",
      "Ripple the marmalade mixture through with two or three folds only. Overmixing gives you a uniform beige, which is not the dish.",
      "Spoon into pots and chill 2 hours.",
      "Top with toasted oats at service.",
      "No cooking at all, which makes it one of the highest-margin desserts here."
    ],
    makeAhead: "Assemble a day ahead. The oats go on last.",
    holds: "4 hours chilled. Lidded pots travel well."
  },
  {
    dishId: 95,
    yields: "20 portions",
    prepMin: 35,
    cookMin: 40,
    ingredients: [
      { qty: "700 g", item: "dates, stoned and chopped" },
      { qty: "500 ml", item: "boiling water" },
      { qty: "2 tsp", item: "bicarbonate of soda" },
      { qty: "250 g", item: "butter and 400 g soft brown sugar" },
      { qty: "4", item: "eggs" },
      { qty: "500 g", item: "self-raising flour" },
      { qty: "600 g", item: "chancaca and 600 ml double cream", note: "for the sauce" },
      { qty: "200 g", item: "butter, for the sauce" }
    ],
    method: [
      "Pour the boiling water over the dates and bicarbonate and leave 20 minutes. The bicarbonate breaks the dates down and darkens the sponge.",
      "Cream butter and sugar, add eggs, then fold in flour.",
      "Fold in the date mixture including all its liquid. The batter will look alarmingly loose — that is correct.",
      "Bake at 180 °C for 35–40 minutes in a lined tray.",
      "Sauce: melt the chancaca with butter and cream and simmer 5 minutes until glossy.",
      "Pour a third of the sauce over the hot sponge and let it soak in. Serve with the rest hot.",
      "Note for the provenance card: sticky toffee pudding's origin is genuinely disputed — Lake District and Scotland both claim it. The matrix flags it as contested."
    ],
    makeAhead: "Sponge and sauce 3 days ahead, both freeze.",
    holds: "Reheats perfectly, which is unusual for a sponge. A dependable buffet dessert."
  },
  {
    dishId: 96,
    yields: "50 teacakes",
    prepMin: 120,
    cookMin: 15,
    ingredients: [
      { qty: "1 batch", item: "wholemeal shortbread base", note: "as dish 76, wholemeal flour, cut in 4 cm rounds" },
      { qty: "400 g", item: "caster sugar and 120 ml water", note: "for the Italian meringue" },
      { qty: "160 g", item: "egg whites" },
      { qty: "20 g", item: "freeze-dried strawberry powder", note: "powder, not purée; purée will collapse the meringue" },
      { qty: "8 g", item: "gelatine, bloomed", note: "stabiliser" },
      { qty: "900 g", item: "70% Peruvian dark chocolate, tempered" }
    ],
    method: [
      "Bake the wholemeal shortbread rounds and cool completely. They must be bone dry.",
      "Boil the sugar and water to 118 °C.",
      "Meanwhile whisk the whites to soft peaks. Trickle the syrup down the side of the bowl while whisking.",
      "Add the bloomed gelatine and whisk until the bowl is barely warm and the meringue holds a stiff peak, about 8 minutes.",
      "Fold in the strawberry powder at the very end — it is what gives colour and a real tartness rather than a sweetness.",
      "Pipe domes onto the biscuits and leave to skin over for 30 minutes.",
      "Enrobe in tempered chocolate. Work fast; the meringue softens if the chocolate is above 32 °C."
    ],
    makeAhead: "Biscuits a week ahead. Assembled, they are best within 3 days.",
    holds:
      "Room temperature only. Refrigeration causes condensation which dulls the chocolate and weeps the meringue. In Lima's summer keep below 22 °C.",
    scaling:
      "The flagship product, and the hardest thing in the bakery section to make well. Pipe in batches of 25 so the meringue does not set in the bag."
  },
  {
    dishId: 97,
    yields: "40 scones",
    prepMin: 30,
    cookMin: 20,
    ingredients: [
      { qty: "1 kg", item: "self-raising flour" },
      { qty: "250 g", item: "cold butter, cubed" },
      { qty: "400 g", item: "choclo kernels", note: "fresh, not frozen — frozen releases water into the dough" },
      { qty: "300 g", item: "queso paria, grated" },
      { qty: "2 tsp", item: "salt and 1 tsp cayenne" },
      { qty: "500 ml", item: "buttermilk or milk soured with lemon" },
      { qty: "1", item: "egg, for wash" }
    ],
    method: [
      "Rub the cold butter into the flour to coarse crumbs. Stop while you can still see flecks of butter.",
      "Stir in the choclo, most of the cheese, salt and cayenne.",
      "Add the buttermilk and bring together with as few strokes as possible. Overworked scone dough is tough scone dough.",
      "Pat out 3 cm thick — thick, not thin, or they will not rise.",
      "Cut straight down with a sharp cutter and do not twist. Twisting seals the edge and stops the rise.",
      "Egg wash, top with remaining cheese, and bake at 210 °C for 16–18 minutes."
    ],
    makeAhead: "Best on the day. The dough can be cut and frozen raw, then baked from frozen with 5 extra minutes.",
    holds: "3 hours. Reheat 4 minutes at 180 °C to revive."
  },
  {
    dishId: 98,
    yields: "20 portions, about 120 pieces",
    prepMin: 90,
    cookMin: 25,
    ingredients: [
      { qty: "700 g", item: "plain flour and 150 g quinoa flour" },
      { qty: "14 g", item: "dried yeast" },
      { qty: "700 ml", item: "warm water" },
      { qty: "2 tsp", item: "salt" },
      { qty: "400 ml", item: "algarrobina" },
      { qty: "100 ml", item: "honey" },
      { qty: "150 g", item: "toasted quinoa and chopped walnuts, to finish" },
      { qty: "3 litres", item: "frying oil" }
    ],
    method: [
      "Whisk both flours, yeast, salt and water to a very loose, sticky batter — closer to a thick pancake batter than a dough.",
      "Prove 90 minutes until bubbling and doubled.",
      "Heat the oil to 175 °C.",
      "Drop rounded teaspoons of batter into the oil, using two wetted spoons. Wet spoons are the trick; dry ones drag.",
      "Fry 3 minutes, turning, until deep gold and puffed. They should be hollow inside.",
      "Drain briefly, then toss immediately in warm algarrobina loosened with honey.",
      "Scatter with toasted quinoa and walnuts and serve within a minute."
    ],
    makeAhead: "Batter can prove in the morning for an evening service, and is better for the longer ferment.",
    holds: "Ninety seconds. There is no version of this that is not made in front of the guest.",
    scaling: "One fryer serves about 30 guests. The batter is the easy part; the frying rate is the constraint."
  },
  {
    dishId: 99,
    yields: "20 portions",
    prepMin: 50,
    cookMin: 50,
    ingredients: [
      { qty: "1 pack", item: "filo pastry", note: "imported; price it before committing — an unverified cost" },
      { qty: "300 g", item: "butter, melted" },
      { qty: "2 litres", item: "whole milk" },
      { qty: "300 g", item: "fine semolina" },
      { qty: "250 g", item: "sugar" },
      { qty: "6", item: "eggs" },
      { qty: "400 g", item: "lúcuma pulp" },
      { qty: "400 g", item: "sugar and 300 ml water and 1 lemon", note: "for the syrup" }
    ],
    method: [
      "Make the syrup first and cool it completely. Cold syrup onto hot pastry is the rule — reverse it and the filo goes soggy.",
      "Bring the milk to a simmer, rain in the semolina, and cook 8 minutes until thick, stirring constantly.",
      "Off the heat, beat in the sugar, then the eggs one at a time, then the lúcuma.",
      "Line a tray with buttered filo, 6 sheets, letting them overhang.",
      "Pour in the custard, fold the overhang over, and top with 6 more buttered sheets.",
      "Score the top layers into portions before baking or you will shatter it afterwards.",
      "Bake at 180 °C for 45–50 minutes until golden and set. Pour the cold syrup over the moment it leaves the oven."
    ],
    makeAhead: "Best made the day of service. It stays good 2 days but the filo softens.",
    holds: "4 hours. Cut portions travel reasonably if kept flat and uncovered."
  },
  {
    dishId: 100,
    yields: "30 buns",
    prepMin: 150,
    cookMin: 20,
    ingredients: [
      { qty: "1 kg", item: "strong white flour" },
      { qty: "14 g", item: "dried yeast" },
      { qty: "120 g", item: "sugar and 2 tsp salt" },
      { qty: "500 ml", item: "warm milk" },
      { qty: "150 g", item: "butter, softened, for the dough" },
      { qty: "250 g", item: "butter, 200 g sugar, 3 tbsp ground cardamom", note: "the filling paste" },
      { qty: "120 g", item: "cacao nibs" },
      { qty: "1", item: "egg and pearl sugar, to finish" }
    ],
    method: [
      "Grind the cardamom fresh from pods. Pre-ground cardamom is the difference between a good bun and a dull one.",
      "Make an enriched dough with flour, yeast, sugar, salt, milk and softened butter. Knead 10 minutes until smooth and elastic.",
      "Prove 1 hour until doubled.",
      "Beat the filling butter with sugar and cardamom to a spreadable paste.",
      "Roll the dough to a large rectangle, spread the paste, scatter the nibs, and fold in three.",
      "Cut into strips, twist each one and knot it. The knot is what gives the layered look; a rolled spiral will not.",
      "Prove 45 minutes, egg wash, top with pearl sugar, and bake at 200 °C for 15–18 minutes."
    ],
    makeAhead: "Shape and freeze after knotting. Prove from frozen 3 hours, then bake.",
    holds: "Best within 6 hours. Refresh 3 minutes at 180 °C.",
    scaling: "Knotting is slow — about 45 seconds a bun. Budget an hour of labour per 80."
  },
  {
    dishId: 101,
    yields: "40 pots",
    prepMin: 45,
    cookMin: 10,
    ingredients: [
      { qty: "500 g", item: "pinhead oatmeal" },
      { qty: "3 L", item: "double cream" },
      { qty: "400 ml", item: "algarrobina" },
      { qty: "300 ml", item: "whisky" },
      { qty: "8", item: "gelatine leaves" },
      { qty: "1", item: "lemon, zest only" }
    ],
    method: [
      "Toast the oatmeal dry in a wide pan until it smells of biscuit, then cool it completely on a tray.",
      "Warm a third of the cream with the algarrobina and the lemon zest; do not let it boil or it will split.",
      "Soften the gelatine in cold water, squeeze it out and dissolve it into the warm cream.",
      "Stir in the whisky off the heat — added hot, the alcohol cooks off and you lose the point of the dish.",
      "Fold in the remaining cold cream and two-thirds of the oatmeal, keeping the rest back for the top.",
      "Pour into pots, chill at least 4 hours, and scatter the reserved oatmeal on only at the venue so it stays crisp."
    ],
    makeAhead: "Set the pots up to 2 days ahead; the whisky mellows and the oat flavour deepens overnight.",
    holds: "Needs refrigeration. Two hours out of the fridge at a Lima event before the set softens.",
    scaling: "Gelatine does not scale linearly upward — above 8 litres of cream, drop to 2.2 leaves per litre."
  },
  {
    dishId: 102,
    yields: "48 bars",
    prepMin: 50,
    cookMin: 25,
    ingredients: [
      { qty: "800 g", item: "rolled oats" },
      { qty: "500 g", item: "butter" },
      { qty: "350 g", item: "soft brown sugar" },
      { qty: "1.2 kg", item: "aguaymanto" },
      { qty: "200 g", item: "caster sugar, for the fruit layer" },
      { qty: "700 g", item: "Peruvian dark chocolate, 70%" },
      { qty: "150 g", item: "plain flour" }
    ],
    method: [
      "Rub the butter into the oats, flour and brown sugar until it clumps when squeezed in the hand.",
      "Press two-thirds of the mixture hard into lined trays and bake at 170 °C for 15 minutes until pale gold.",
      "Cook the aguaymanto with the caster sugar until it collapses to a thick jam that holds a line on the spoon.",
      "Spread the fruit over the warm base, scatter the reserved crumble over it and bake a further 10 minutes.",
      "Cool completely in the tray — cutting warm tears the fruit layer straight out.",
      "Melt the chocolate, spread it thin over the top, and cut into bars once it has set to a matt finish."
    ],
    makeAhead: "Bake up to 4 days ahead. Cut on the day of service so the edges stay sharp in the box.",
    holds: "Very stable at room temperature. Above 26 °C the chocolate blooms — keep boxes out of the sun."
  },
  {
    dishId: 103,
    yields: "120 shards",
    prepMin: 15,
    cookMin: 25,
    ingredients: [
      { qty: "1.5 kg", item: "granulated sugar" },
      { qty: "400 g", item: "butter" },
      { qty: "400 ml", item: "condensed milk" },
      { qty: "150 ml", item: "water" },
      { qty: "30 g", item: "Maras pink salt, coarse" }
    ],
    method: [
      "Melt the butter, sugar, water and condensed milk together over a low heat, stirring until no grain remains.",
      "Raise the heat and boil to 138 °C on a probe — this is a hard-crack sweet and a guessed temperature ruins the batch.",
      "Pour immediately onto oiled trays; the mixture keeps cooking in the pan and will darken if you hesitate.",
      "Scatter the Maras salt over the surface while it is still glossy so the crystals set into the toffee.",
      "Leave to set hard for an hour, then crack into shards with the back of a heavy spoon.",
      "Wrap in cellophane or interleave with parchment — bare shards weld to each other within a day."
    ],
    makeAhead: "Make up to 2 weeks ahead if wrapped; this is the longest-keeping item on the whole sheet.",
    holds: "Room temperature indefinitely when dry. Lima humidity makes it tacky — keep it sealed until service."
  },
  {
    dishId: 104,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 45,
    ingredients: [
      { qty: "20", item: "day-old butteries or bread rolls" },
      { qty: "400 g", item: "lucuma marmalade" },
      { qty: "12", item: "eggs" },
      { qty: "2 L", item: "whole milk" },
      { qty: "400 ml", item: "double cream" },
      { qty: "250 g", item: "caster sugar" },
      { qty: "2", item: "vanilla pods or 2 tsp extract" }
    ],
    method: [
      "Split the stale butteries, spread each face with lucuma marmalade and layer them overlapping in deep trays.",
      "Whisk the eggs and sugar, then pour on the warmed milk, cream and vanilla and strain the custard.",
      "Ladle the custard over the bread and press it down; leave it to soak a full 30 minutes before it goes near the oven.",
      "Bake at 160 °C in a water bath for 40 to 45 minutes until it wobbles as one piece rather than sloshing.",
      "Rest 15 minutes before cutting so the custard finishes setting in the residual heat.",
      "Glaze the top with warmed marmalade thinned with a spoonful of water just before it leaves the kitchen."
    ],
    makeAhead: "Assemble and soak the day before, refrigerated, and bake on the morning of the event.",
    holds: "Two hours hot in a chafing dish. Also serves well at room temperature, which is the safer plan."
  },
  {
    dishId: 105,
    yields: "3 tarts, 36 slices",
    prepMin: 60,
    cookMin: 35,
    ingredients: [
      { qty: "900 g", item: "cacao shortcrust pastry" },
      { qty: "600 g", item: "chancaca" },
      { qty: "500 ml", item: "double cream" },
      { qty: "250 g", item: "butter" },
      { qty: "150 ml", item: "whisky" },
      { qty: "15 g", item: "Maras pink salt, flaked" },
      { qty: "6", item: "egg yolks" }
    ],
    method: [
      "Line the tart rings with the cacao pastry, chill 30 minutes, then blind bake at 175 °C until dry to the touch.",
      "Melt the chancaca with the butter and a splash of water until it runs clear with no grit left.",
      "Add the cream off the heat, whisking steadily — the caramel will seize and spit if the cream goes in cold and fast.",
      "Temper the yolks with a ladle of the hot caramel, return it all to the pan and stir until it coats a spoon.",
      "Stir the whisky in at the end so the spirit reads on the palate rather than boiling away in the pan.",
      "Fill the cases, bake 12 minutes at 150 °C to set, then chill and finish with Maras salt at the venue."
    ],
    makeAhead: "Bake the cases 3 days ahead and fill the day before. Salt only at service or it dissolves.",
    holds: "Four hours at room temperature, which is how it should be eaten. Chilled, the caramel goes dense."
  },
  {
    dishId: 106,
    yields: "20 portions",
    prepMin: 35,
    cookMin: 40,
    ingredients: [
      { qty: "3 kg", item: "aguaymanto" },
      { qty: "400 g", item: "caster sugar" },
      { qty: "700 g", item: "rolled oats" },
      { qty: "500 g", item: "plain flour" },
      { qty: "450 g", item: "butter, cold and diced" },
      { qty: "300 g", item: "demerara sugar" },
      { qty: "2 tsp", item: "ground cinnamon" }
    ],
    method: [
      "Halve the aguaymanto, toss with the caster sugar and leave 20 minutes to draw out the juice.",
      "Rub the cold butter into the flour, then stir through the oats, demerara and cinnamon until it is loose and rubbly.",
      "Drain off half the fruit juice and reserve it — an undrained crumble goes to soup under the topping.",
      "Fill the trays with fruit and cover with a thick, unpressed layer of crumble right to the edges.",
      "Bake at 180 °C for 35 to 40 minutes until the juice bubbles up dark at the corners.",
      "Reduce the reserved juice to a syrup and serve it alongside rather than pouring it over."
    ],
    makeAhead: "Freeze the crumble topping in bags up to a month ahead; assemble and bake on the day.",
    holds: "Two hours in a chafing dish before the topping softens. Rebake 8 minutes at 200 °C to crisp it."
  },
  {
    dishId: 107,
    yields: "80 fingers",
    prepMin: 30,
    cookMin: 40,
    ingredients: [
      { qty: "1.2 kg", item: "butter, at room temperature" },
      { qty: "600 g", item: "caster sugar" },
      { qty: "1.5 kg", item: "plain flour" },
      { qty: "300 g", item: "rice flour" },
      { qty: "10 g", item: "fine salt" }
    ],
    method: [
      "Beat the butter and sugar only until combined — creaming air into shortbread makes it rise and then crumble.",
      "Sift the two flours with the salt and work them in by hand until the dough just comes together.",
      "Press into lined trays to an even 12 mm, prick all over with a fork and chill for a full hour.",
      "Bake at 150 °C for 35 to 40 minutes until pale straw — colour on shortbread is a fault, not a finish.",
      "Cut into fingers within 5 minutes of leaving the oven, while the slab is still soft enough to score.",
      "Dust with caster sugar and leave in the tin until stone cold before lifting the pieces out."
    ],
    makeAhead: "Bake up to a week ahead in sealed tins. The flavour is better on day two than on day one.",
    holds: "Room temperature for a week if kept dry. This is the most box-friendly product on the sheet.",
    scaling: "Butter quality is the whole product here — do not substitute margarine to protect the margin."
  },
  {
    dishId: 108,
    yields: "90 biscuits",
    prepMin: 40,
    cookMin: 18,
    ingredients: [
      { qty: "900 g", item: "wholemeal flour" },
      { qty: "600 g", item: "medium oatmeal" },
      { qty: "600 g", item: "butter" },
      { qty: "350 g", item: "soft brown sugar" },
      { qty: "20 g", item: "baking powder" },
      { qty: "300 ml", item: "milk" },
      { qty: "800 g", item: "Peruvian dark chocolate, 70%" }
    ],
    method: [
      "Blitz the oatmeal briefly so half stays coarse — this is what gives a digestive its sandy bite.",
      "Rub the butter through the dry ingredients, then bring the dough together with the milk a little at a time.",
      "Roll to 4 mm between sheets of parchment and cut discs; rest them 20 minutes in the fridge before baking.",
      "Bake at 180 °C for 16 to 18 minutes until evenly browned and firm at the centre.",
      "Cool completely on racks — a warm biscuit will steam and soften the chocolate coating.",
      "Temper the chocolate, dip each biscuit halfway and set them on parchment to firm up."
    ],
    makeAhead: "Bake up to 5 days ahead undipped. Dip within 48 hours of service for the best snap.",
    holds: "A week sealed and dry. Undipped they keep longer, so dip only what the event needs."
  },
  {
    dishId: 109,
    yields: "2.4 kg, about 60 servings",
    prepMin: 30,
    cookMin: 0,
    ingredients: [
      { qty: "2 kg", item: "Greek-style yoghurt" },
      { qty: "1.5 kg", item: "cucumber" },
      { qty: "6", item: "garlic cloves" },
      { qty: "2", item: "rocoto, deseeded" },
      { qty: "100 ml", item: "olive oil" },
      { qty: "2", item: "limes, juice only" },
      { qty: "20 g", item: "fine salt" }
    ],
    method: [
      "Hang the yoghurt in muslin for at least 4 hours; unstrained yoghurt turns the dip to liquid by service.",
      "Grate the cucumber coarsely, salt it, leave 20 minutes and then wring it out hard in a cloth.",
      "Pound the garlic to a paste with a pinch of salt so it disperses instead of ambushing one guest.",
      "Deseed the rocoto and mince it finely — the seeds and membrane carry heat far beyond a Greek palate.",
      "Fold everything together with the olive oil and lime, then taste and correct the salt last.",
      "Chill at least 2 hours before service so the garlic and rocoto settle into the yoghurt."
    ],
    makeAhead: "Best made the day before. Beyond 48 hours the cucumber weeps however hard it was wrung.",
    holds: "Two hours out of the fridge on a mezze table. Serve in shallow bowls set over ice."
  },
  {
    dishId: 110,
    yields: "60 dolmades",
    prepMin: 90,
    cookMin: 45,
    ingredients: [
      { qty: "60", item: "large chard leaves" },
      { qty: "700 g", item: "quinoa" },
      { qty: "500 g", item: "onion, finely diced" },
      { qty: "150 ml", item: "olive oil" },
      { qty: "1 bunch", item: "hierbabuena (spearmint)" },
      { qty: "3", item: "lemons" },
      { qty: "1 bunch", item: "dill" }
    ],
    method: [
      "Blanch the chard leaves 20 seconds, refresh in iced water and lay them flat on cloths to dry.",
      "Cut out the thick central rib of each leaf — leave it in and the parcel will not roll tight.",
      "Cook the quinoa until just short of done; it will finish steaming inside the parcels.",
      "Sweat the onion slowly in the oil until sweet, then fold it through the quinoa with the herbs and lemon zest.",
      "Roll each parcel tight, tucking the sides in, and pack them seam-down in a single close layer.",
      "Add lemon juice, oil and water to come halfway up, weight with a plate and simmer 40 minutes."
    ],
    makeAhead: "Roll and cook 2 days ahead; they improve as the lemon works through the quinoa.",
    holds: "All day at room temperature — one of the few canapes that genuinely does not need a fridge.",
    scaling: "Rolling is the cost. Budget 90 minutes of labour per 100 parcels and two pairs of hands."
  },
  {
    dishId: 111,
    yields: "2 kg, about 60 servings",
    prepMin: 25,
    cookMin: 50,
    ingredients: [
      { qty: "4 kg", item: "aubergine" },
      { qty: "3 tbsp", item: "aji panca paste" },
      { qty: "200 ml", item: "olive oil" },
      { qty: "4", item: "garlic cloves" },
      { qty: "2", item: "lemons, juice only" },
      { qty: "1 bunch", item: "flat parsley" },
      { qty: "15 g", item: "fine salt" }
    ],
    method: [
      "Char the aubergines whole directly over a flame until the skins blister black and the flesh collapses.",
      "Rest them in a covered bowl 15 minutes; the trapped steam lifts the skin away cleanly.",
      "Scrape out the flesh and drain it in a colander for 20 minutes — the bitter liquor is what makes a watery dip.",
      "Chop rather than blend, so the texture stays like a dip and not like a puree.",
      "Beat in the aji panca, garlic, lemon and oil, adding the oil slowly so the paste takes it up.",
      "Finish with parsley and salt, and let it sit an hour before tasting again."
    ],
    makeAhead: "Char and drain the aubergine a day ahead. Dress and season on the day of service.",
    holds: "Three hours at room temperature and it is better warm-ish than fridge-cold."
  },
  {
    dishId: 112,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 0,
    ingredients: [
      { qty: "3 kg", item: "ripe tomato" },
      { qty: "1.5 kg", item: "cucumber" },
      { qty: "800 g", item: "queso paria" },
      { qty: "500 g", item: "Tacna olives" },
      { qty: "600 g", item: "red onion" },
      { qty: "200 ml", item: "olive oil" },
      { qty: "3 tbsp", item: "dried oregano" }
    ],
    method: [
      "Cut the tomato into thick wedges rather than slices so it holds its juice on the table.",
      "Peel the cucumber in stripes and cut it into half-moons a good centimetre thick.",
      "Slice the onion thin and rinse it under cold water for a minute to take the raw edge off.",
      "Dress the vegetables with oil, oregano and salt no more than 20 minutes before service.",
      "Lay slabs of queso paria on top whole — crumbling it Greek-feta style loses the texture you paid for.",
      "Scatter the olives over and give it a final grind of oregano between the palms as it goes out."
    ],
    makeAhead: "Cut the vegetables the morning of and keep them separate and cold. Dress only at the venue.",
    holds: "One hour dressed. Beyond that the salt draws water and the bowl floods."
  },
  {
    dishId: 113,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 60,
    ingredients: [
      { qty: "2", item: "whole chickens, for stock and meat" },
      { qty: "6 L", item: "water" },
      { qty: "10", item: "eggs" },
      { qty: "6", item: "lemons, juice only" },
      { qty: "6", item: "choclo cobs, kernels stripped" },
      { qty: "2", item: "onions" },
      { qty: "1 bunch", item: "dill" }
    ],
    method: [
      "Simmer the chickens with the onion for 50 minutes, skimming, then lift them out and strip the meat.",
      "Strain the stock and return it to a bare simmer; a rolling boil at this point will scramble the egg later.",
      "Cook the choclo kernels separately in salted water — Peruvian choclo is starchier than orzo and clouds the broth.",
      "Whisk the eggs with the lemon juice until frothy, then temper with ladle after ladle of hot stock.",
      "Pour the tempered mixture back into the pot off the heat and stir until it thickens to a light cream.",
      "Add the chicken, choclo and dill, and hold the pot below 75 °C from that point until it is served."
    ],
    makeAhead: "Make the stock and strip the meat the day before. The avgolemono itself is a last-hour job.",
    holds: "One hour at most, and it must never boil. This is the least travel-friendly dish on the sheet.",
    scaling: "Above 40 portions, split into two pots — a single large pot cannot be tempered evenly."
  },
  {
    dishId: 114,
    yields: "40 portions",
    prepMin: 60,
    cookMin: 90,
    ingredients: [
      { qty: "8 kg", item: "pork shoulder, sliced thin" },
      { qty: "100 g", item: "dried oregano" },
      { qty: "500 ml", item: "red wine vinegar" },
      { qty: "40", item: "flatbreads" },
      { qty: "2 kg", item: "tzatziki" },
      { qty: "1.5 kg", item: "red onion, for salsa criolla" },
      { qty: "6", item: "limes" }
    ],
    method: [
      "Marinate the sliced pork overnight with oregano, vinegar, garlic and oil so the acid opens the meat up.",
      "Stack the slices on the spit alternating fat and lean, and cap the top with a block of fat to baste it.",
      "Bring the cone up to temperature slowly for the first 40 minutes before turning the outer burners up.",
      "Cut the salsa criolla fresh on site — onion sliced more than an hour ahead goes limp and sulphurous.",
      "Carve only what the queue needs, in thin sheets down the face of the cone, and let the next layer colour.",
      "Warm the flatbreads 20 seconds a side on the plancha and build tzatziki first, then meat, then criolla."
    ],
    makeAhead: "Marinate and stack the spit the day before. Everything after that happens at the venue.",
    holds: "Carved to order only. Carved meat left in a tray goes grey and dry within 20 minutes.",
    scaling: "One carver serves about 60 guests an hour. Above that, a second cone beats a faster carver."
  },
  {
    dishId: 115,
    yields: "50 pieces",
    prepMin: 25,
    cookMin: 20,
    ingredients: [
      { qty: "3 kg", item: "queso paria, in 1.5 cm slabs" },
      { qty: "300 g", item: "plain flour" },
      { qty: "400 ml", item: "pisco" },
      { qty: "200 ml", item: "olive oil" },
      { qty: "6", item: "limes" }
    ],
    method: [
      "Cut the paria into even slabs and pat every face dry; wet cheese steams instead of crusting.",
      "Dust in flour and shake the excess off hard — loose flour burns in the pan and tastes of it.",
      "Heat the pan until the oil shimmers, then lay the slabs down and leave them alone for 90 seconds.",
      "Turn once, add a measured shot of pisco to the pan and stand back as you tip it to the flame.",
      "Squeeze lime over the moment the flame dies, while the surface is still bubbling.",
      "Serve straight from the pan; paria seizes into rubber within two minutes of leaving the heat."
    ],
    makeAhead: "Slice and portion the cheese the morning of. Nothing else can be prepared in advance.",
    holds: "Does not hold — plate to guest immediately. Fire this in rounds as the queue forms.",
    scaling: "Two pans and one cook manage about 80 pieces an hour, which is the realistic ceiling."
  },
  {
    dishId: 116,
    yields: "60 pieces",
    prepMin: 70,
    cookMin: 45,
    ingredients: [
      { qty: "1 kg", item: "filo pastry" },
      { qty: "1.2 kg", item: "pecans, chopped" },
      { qty: "600 g", item: "butter, clarified" },
      { qty: "500 ml", item: "algarrobina" },
      { qty: "400 g", item: "caster sugar" },
      { qty: "2", item: "cinnamon sticks" },
      { qty: "2", item: "lemons" }
    ],
    method: [
      "Clarify the butter first — the milk solids in whole butter scorch between the filo layers.",
      "Lay eight buttered sheets, spread a third of the pecans, and repeat twice, finishing with eight sheets on top.",
      "Score all the way through to the base before baking; cutting after baking shatters the layers.",
      "Bake at 165 °C for 45 minutes until deep gold throughout, not just at the surface.",
      "Boil the algarrobina, sugar, lemon and cinnamon to a syrup and cool it completely while the tray bakes.",
      "Pour cold syrup over hot pastry — hot on hot gives you a sponge, and cold on cold never soaks in."
    ],
    makeAhead: "Bake and syrup 3 days ahead. It needs at least 8 hours for the syrup to reach the base.",
    holds: "Room temperature for days, uncovered. Never refrigerate it — the filo goes leathery.",
    scaling: "Filo is the cost variable and it is imported. Price the sheet before quoting this dish."
  },
  {
    dishId: 117,
    yields: "6 kg, about 60 servings",
    prepMin: 40,
    cookMin: 15,
    ingredients: [
      { qty: "4 kg", item: "beetroot" },
      { qty: "6", item: "rocoto, sliced into rings" },
      { qty: "2 L", item: "white vinegar" },
      { qty: "1 kg", item: "granulated sugar" },
      { qty: "60 g", item: "salt" },
      { qty: "30 g", item: "black peppercorns" },
      { qty: "2 L", item: "water" }
    ],
    method: [
      "Boil the beetroot whole and unpeeled until a knife slides in, then peel them under cold running water.",
      "Slice into coins about 4 mm thick — thinner and they go slack, thicker and they never take the brine.",
      "Bring the vinegar, water, sugar, salt and peppercorns to a boil and hold it there two minutes.",
      "Pack the jars with alternating beetroot and rocoto rings so the heat distributes through the jar.",
      "Pour the boiling brine over to cover completely and seal while everything is still hot.",
      "Leave a full week before opening; before that the rocoto heat sits on top rather than through it."
    ],
    makeAhead: "Make weeks ahead — this is a store-cupboard item, not an event-week job.",
    holds: "Sealed jars keep for months in a cool store. Opened and refrigerated, three weeks.",
    scaling: "Make in one large batch across events. The margin here comes from never making it small."
  },
  {
    dishId: 118,
    yields: "24 portions",
    prepMin: 45,
    cookMin: 0,
    ingredients: [
      { qty: "3", item: "whole trout, filleted, skin on" },
      { qty: "1.2 kg", item: "beetroot, grated" },
      { qty: "600 g", item: "coarse salt" },
      { qty: "400 g", item: "caster sugar" },
      { qty: "2 bunches", item: "dill" },
      { qty: "30 g", item: "black pepper, cracked" },
      { qty: "100 ml", item: "pisco" }
    ],
    method: [
      "Pin-bone the fillets and run a finger along the flesh both ways to catch what the tweezers missed.",
      "Mix the salt, sugar, grated beetroot, pepper and chopped dill into a wet, magenta cure.",
      "Pack the cure over the flesh side, sandwich the fillets, wrap tight and weight them in a tray.",
      "Cure 36 hours in the fridge, turning and draining the liquor twice a day so it does not sit in brine.",
      "Scrape the cure off, rinse briefly with the pisco rather than water, and pat completely dry.",
      "Slice on the bias down to the skin, thin enough to see the board through, and fan onto the plate."
    ],
    makeAhead: "Start the cure 2 days before the event. Sliced fish is best cut on the morning of service.",
    holds: "Whole and wrapped, a week refrigerated. Once sliced, two hours on ice and no longer."
  },
  {
    dishId: 119,
    yields: "20 portions",
    prepMin: 60,
    cookMin: 40,
    ingredients: [
      { qty: "3 kg", item: "minced beef and pork, mixed" },
      { qty: "400 g", item: "breadcrumbs" },
      { qty: "500 ml", item: "milk" },
      { qty: "600 g", item: "onion, grated" },
      { qty: "1 L", item: "double cream" },
      { qty: "600 g", item: "aguaymanto" },
      { qty: "200 g", item: "sugar, for the fruit" }
    ],
    method: [
      "Soak the breadcrumbs in the milk for 10 minutes — this panade is what keeps the balls tender at scale.",
      "Mix the meat, panade, grated onion, allspice and plenty of salt, then fry a teaspoon to check the seasoning.",
      "Roll to 25 g each and chill the trays 30 minutes so they hold their shape when they hit the pan.",
      "Brown in batches in a wide pan, never crowding, and set them aside before they cook through.",
      "Cook the aguaymanto with the sugar to a loose compote, then build the cream sauce in the browning pan.",
      "Return the meatballs to the sauce and finish them through gently, serving the compote alongside."
    ],
    makeAhead: "Roll and brown the day before; finish in the sauce on site. The compote keeps a fortnight.",
    holds: "Two hours in a chafing dish and it improves in the first hour as the sauce reduces slightly."
  },
  {
    dishId: 120,
    yields: "80 crispbreads",
    prepMin: 40,
    cookMin: 25,
    ingredients: [
      { qty: "1.2 kg", item: "rye flour" },
      { qty: "400 g", item: "kiwicha" },
      { qty: "300 g", item: "plain flour" },
      { qty: "900 ml", item: "warm water" },
      { qty: "20 g", item: "dried yeast" },
      { qty: "30 g", item: "salt" },
      { qty: "150 g", item: "mixed seeds" }
    ],
    method: [
      "Toast the kiwicha in a dry pan until it pops and smells nutty, then let it cool before mixing.",
      "Mix everything to a stiff dough and let it prove just 45 minutes — a long prove makes it bready, not crisp.",
      "Roll each piece as thin as the pin will take it, straight onto the parchment it will bake on.",
      "Dock the sheets all over with a fork or a spiked roller so they stay flat instead of blistering.",
      "Bake at 200 °C for 12 minutes, then drop to 140 °C for another 12 to dry them right through.",
      "Cool on racks and snap into irregular pieces — a uniform crispbread looks industrial."
    ],
    makeAhead: "Bake up to a week ahead. Refresh 5 minutes at 150 °C if Lima humidity has softened them.",
    holds: "Sealed and dry, a week. Left open on a buffet table they go limp within about two hours."
  },
  {
    dishId: 121,
    yields: "20 portions",
    prepMin: 35,
    cookMin: 25,
    ingredients: [
      { qty: "4 kg", item: "papa nativa" },
      { qty: "700 ml", item: "soured cream" },
      { qty: "150 g", item: "wholegrain mustard" },
      { qty: "3 bunches", item: "dill" },
      { qty: "400 g", item: "shallot, finely sliced" },
      { qty: "100 ml", item: "white wine vinegar" },
      { qty: "20 g", item: "salt" }
    ],
    method: [
      "Boil the potatoes whole in heavily salted water so they season through rather than only on the cut face.",
      "Drain and, while they are still steaming, split them and douse them with the vinegar.",
      "Let them cool to just-warm before the cream goes anywhere near them, or the dressing will split.",
      "Fold through the soured cream, mustard, shallot and most of the dill with a spatula, not a spoon.",
      "Taste for salt once cold — cold food needs noticeably more seasoning than warm food.",
      "Finish with the reserved dill at the venue so the green still reads on the plate."
    ],
    makeAhead: "Boil and dress the day before; the potato takes up the dressing overnight and improves.",
    holds: "Three hours out of the fridge. It is a cold dish and travels better than almost anything else here."
  },
  {
    dishId: 122,
    yields: "8 jars, about 3 kg",
    prepMin: 20,
    cookMin: 50,
    ingredients: [
      { qty: "3 kg", item: "aguaymanto" },
      { qty: "1.8 kg", item: "granulated sugar" },
      { qty: "4", item: "lemons, juice and pips" },
      { qty: "200 ml", item: "water" }
    ],
    method: [
      "Halve about a third of the fruit and leave the rest whole so the finished preserve has texture.",
      "Tie the lemon pips in muslin and drop them in — aguaymanto is low in pectin and needs the help.",
      "Macerate the fruit with the sugar and lemon juice for an hour before any heat goes under the pan.",
      "Bring slowly to a boil, skimming the scum off, then hold at a hard boil until it reaches 104 °C.",
      "Test on a chilled saucer: the surface should wrinkle when pushed rather than run back together.",
      "Jar hot into sterilised jars, seal immediately and leave upright to cool undisturbed."
    ],
    makeAhead: "Make in season and in bulk. Sealed jars are shelf-stable for a year in a dark store.",
    holds: "Unopened, a year. Once opened, refrigerate and use within a month.",
    scaling: "Do not boil more than 6 kg of fruit in one pan — the centre never reaches setting point."
  },
  {
    dishId: 123,
    yields: "80 slices",
    prepMin: 40,
    cookMin: 20,
    ingredients: [
      { qty: "6", item: "duck breasts, skin on" },
      { qty: "500 g", item: "coarse salt" },
      { qty: "250 g", item: "caster sugar" },
      { qty: "40 g", item: "muna, dried" },
      { qty: "30 g", item: "black peppercorns, cracked" },
      { qty: "80", item: "rye and kiwicha crispbreads" }
    ],
    method: [
      "Score the duck skin in a fine diamond without cutting into the flesh beneath it.",
      "Crush the muna and peppercorns and mix them into the salt and sugar cure.",
      "Bury the breasts in the cure for 24 hours, then rinse them thoroughly and pat them bone dry.",
      "Hang them in muslin in the coldest part of the fridge for 6 days until firm to the thumb.",
      "Render the skin down in a cold pan brought slowly up to heat, purely for the crackling to crumble over.",
      "Slice paper-thin against the grain and lay each slice on a crispbread only as the tray goes out."
    ],
    makeAhead: "Start the cure a week before the event. The hanging time is not negotiable or compressible.",
    holds: "Sliced, one hour before the fat softens. Build the trays in rounds rather than all at once."
  },
  {
    dishId: 124,
    yields: "60 pintxos",
    prepMin: 45,
    cookMin: 30,
    ingredients: [
      { qty: "2.5 kg", item: "artisanal chorizo-style sausage" },
      { qty: "3 kg", item: "papa nativa" },
      { qty: "150 ml", item: "olive oil" },
      { qty: "2 tbsp", item: "smoked paprika" },
      { qty: "60", item: "wooden skewers" },
      { qty: "20 g", item: "salt" }
    ],
    method: [
      "Boil the potatoes whole in salted water until just done, then cool and slice into 1 cm coins.",
      "Fry the potato coins in olive oil on both sides until the edges catch and go crisp.",
      "Cut the sausage into 3 cm lengths and colour them hard in the same pan so the fat renders into it.",
      "Spoon a little of the paprika-red pan fat back over the potato coins while they are still warm.",
      "Skewer one sausage on one coin, pushing the skewer down through both so the pintxo stands up.",
      "Season at the last moment and serve at room temperature, which is how a pintxo is meant to be eaten."
    ],
    makeAhead: "Boil the potatoes the day before. Fry and assemble on the morning of the event.",
    holds: "Four hours at room temperature — genuinely designed to sit on a bar rather than be plated hot."
  },
  {
    dishId: 125,
    yields: "80 croquetas",
    prepMin: 90,
    cookMin: 30,
    ingredients: [
      { qty: "1.5 kg", item: "corvina, salt-cured" },
      { qty: "2 L", item: "whole milk" },
      { qty: "400 g", item: "plain flour" },
      { qty: "350 g", item: "butter" },
      { qty: "500 g", item: "breadcrumbs" },
      { qty: "6", item: "eggs" },
      { qty: "1", item: "onion, studded with cloves" }
    ],
    method: [
      "Soak the salt-cured corvina in three changes of cold water over 12 hours, tasting a flake before you stop.",
      "Poach it gently in the milk with the studded onion, then lift it out, flake it and keep the milk.",
      "Make a very thick bechamel with the butter, flour and infused milk, cooking the flour out for a full 5 minutes.",
      "Fold the fish through, spread the mix in a shallow tray and chill it hard for at least 4 hours.",
      "Shape into barrels, then flour, egg and crumb them twice — a single coat splits in the fryer.",
      "Fry at 180 °C for 3 minutes until deep gold, and drain them standing up rather than lying down."
    ],
    makeAhead: "Shape and crumb 2 days ahead, or freeze crumbed and fry straight from frozen at 170 °C.",
    holds: "Twenty minutes from the fryer. Fry in rounds through service rather than all at once."
  },
  {
    dishId: 126,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 60,
    ingredients: [
      { qty: "4 kg", item: "red and green peppers" },
      { qty: "2 kg", item: "onion" },
      { qty: "1.5 kg", item: "tomato" },
      { qty: "4 tbsp", item: "aji amarillo paste" },
      { qty: "250 ml", item: "olive oil" },
      { qty: "8", item: "garlic cloves" },
      { qty: "20 g", item: "salt" }
    ],
    method: [
      "Slice the peppers and onions the same width so they finish cooking at the same moment.",
      "Sweat them in the oil over a low heat for a full 40 minutes, covered, without letting them colour.",
      "Add the garlic only in the last 10 minutes of the sweat or it turns bitter under that much time.",
      "Stir in the aji amarillo and cook it out for 5 minutes so the raw paste flavour disappears.",
      "Add the chopped tomato and cook uncovered until the mixture is glossy and no water pools at the edge.",
      "Season and let it sit an hour before service; piperrada is better at the second reheating than the first."
    ],
    makeAhead: "Make 2 days ahead. It genuinely improves and it frees the hob on the day of the event.",
    holds: "Three hours in a chafing dish without deteriorating. Also serves well at room temperature."
  },
  {
    dishId: 127,
    yields: "20 portions",
    prepMin: 40,
    cookMin: 50,
    ingredients: [
      { qty: "3 kg", item: "bonito loin, in 4 cm chunks" },
      { qty: "4 kg", item: "papa nativa" },
      { qty: "1.5 kg", item: "onion" },
      { qty: "6", item: "red peppers" },
      { qty: "3 tbsp", item: "choricero or aji panca paste" },
      { qty: "2 L", item: "fish stock" },
      { qty: "200 ml", item: "olive oil" }
    ],
    method: [
      "Break the potatoes rather than cutting them through — the torn face releases starch and thickens the stew.",
      "Sweat the onion and pepper slowly in oil for 25 minutes until they are sweet and completely soft.",
      "Add the pepper paste, cook it out, then add the potatoes and turn them in the fat to coat.",
      "Pour in stock barely to cover and simmer 25 minutes until the potatoes are done and the broth has body.",
      "Take the pot off the heat entirely, then add the bonito and put the lid on.",
      "Leave it 8 minutes — the residual heat cooks the fish through, and any direct heat makes it dry and chalky."
    ],
    makeAhead: "Make the potato base the day before. The fish goes in only in the last ten minutes, on site.",
    holds: "Ninety minutes held gently. Beyond that the bonito tightens and the point of the dish is lost."
  },
  {
    dishId: 128,
    yields: "30 portions",
    prepMin: 50,
    cookMin: 15,
    ingredients: [
      { qty: "4 kg", item: "baby squid, cleaned" },
      { qty: "8", item: "aji limo, finely sliced" },
      { qty: "3 bunches", item: "flat parsley" },
      { qty: "200 ml", item: "olive oil" },
      { qty: "8", item: "limes" },
      { qty: "10", item: "garlic cloves" },
      { qty: "20 g", item: "flaked salt" }
    ],
    method: [
      "Clean the squid, keep the tentacles whole and score the bodies lightly on the inside face.",
      "Dry every piece on cloths and keep them dry on ice — wet squid steams on the plancha and never colours.",
      "Get the plancha genuinely hot, well past the point where oil shimmers, before anything touches it.",
      "Lay the squid in a single layer and leave it 45 seconds, then turn and give it 45 seconds more.",
      "Throw the garlic, aji limo and parsley on in the last 15 seconds so they toast without burning.",
      "Lime and flaked salt straight onto the plate, and away — past 2 minutes total this is rubber."
    ],
    makeAhead: "Clean and portion the squid the morning of. The cooking cannot be brought forward at all.",
    holds: "Serve within a minute of leaving the plancha. Cook to order in small batches only.",
    scaling: "A 1 m plancha does about 60 portions an hour. More guests means a second plancha, not fuller pans."
  },
  {
    dishId: 129,
    yields: "20 portions",
    prepMin: 25,
    cookMin: 40,
    ingredients: [
      { qty: "2.5 kg", item: "queso paria, smoked" },
      { qty: "2 kg", item: "aguaymanto" },
      { qty: "1.2 kg", item: "caster sugar" },
      { qty: "2", item: "lemons, juice only" },
      { qty: "300 g", item: "pecans, toasted" }
    ],
    method: [
      "Cook the aguaymanto with the lemon juice and a splash of water until it collapses completely.",
      "Push it through a sieve, weigh the pulp, and add three-quarters of that weight in sugar.",
      "Cook the paste back down, stirring constantly, until it pulls away cleanly from the base of the pan.",
      "Pour into a lined tray to a depth of 2 cm and leave it uncovered overnight to firm up.",
      "Cut the paste into batons and the smoked paria into slabs of roughly the same thickness.",
      "Board them together with the toasted pecans, and take the cheese out of the fridge an hour before service."
    ],
    makeAhead: "The paste keeps for months made in season. Board it up on the morning of the event.",
    holds: "Three hours on a board at room temperature, which is exactly how the cheese should be eaten."
  },
  {
    dishId: 130,
    yields: "3 cakes, 36 portions",
    prepMin: 30,
    cookMin: 55,
    ingredients: [
      { qty: "3 kg", item: "cream cheese" },
      { qty: "900 g", item: "caster sugar" },
      { qty: "18", item: "eggs" },
      { qty: "1.2 L", item: "double cream" },
      { qty: "800 g", item: "lucuma pulp" },
      { qty: "120 g", item: "plain flour" },
      { qty: "10 g", item: "fine salt" }
    ],
    method: [
      "Line the tins with baking parchment crumpled first, pushed in so it pleats well above the rim.",
      "Beat the cream cheese and sugar smooth before adding anything else, scraping the bowl twice.",
      "Add the eggs two at a time on a low speed — beating air in now gives you a souffle that collapses.",
      "Fold in the cream, the lucuma pulp, the sifted flour and the salt until it is just uniform.",
      "Bake at 210 °C for 50 to 55 minutes until the top is genuinely dark and the centre still moves as one.",
      "Cool completely in the tin and do not refrigerate — chilling is what turns a Basque cheesecake dense."
    ],
    makeAhead: "Bake the day before and leave it out overnight. It is a better cake on day two.",
    holds: "All day at room temperature and it cuts to any headcount, which is what makes it good value.",
    scaling: "One oven takes three tins. Above 100 guests, bake across two days rather than crowding the shelves."
  },
  {
    dishId: 131,
    yields: "60 pieces",
    prepMin: 60,
    cookMin: 30,
    ingredients: [
      { qty: "5 kg", item: "papa amarilla" },
      { qty: "6 tbsp", item: "aji amarillo paste" },
      { qty: "8", item: "limes, juice only" },
      { qty: "200 ml", item: "vegetable oil" },
      { qty: "1.5 kg", item: "hot-smoked trout" },
      { qty: "400 ml", item: "soured cream" },
      { qty: "3 bunches", item: "dill" }
    ],
    method: [
      "Boil the papa amarilla whole in salted water, then peel and pass it through a ricer while still hot.",
      "Work in the aji amarillo, lime juice, oil and salt while the potato is warm — cold potato will not take it up.",
      "Cool the mass completely before shaping, or the layers slump and the terrine loses its edges.",
      "Flake the smoked trout and bind it with the soured cream and most of the dill, keeping the flakes visible.",
      "Layer potato, trout, potato in a lined tray, pressing each layer flat with an offset palette knife.",
      "Chill 3 hours, cut into squares with a hot wet knife, and finish each with a dill frond at the venue."
    ],
    makeAhead: "Build the terrine the day before and cut on the morning of service for the cleanest edges.",
    holds: "Two hours out of the fridge. Set the tray over ice on a warm Lima afternoon."
  },
  {
    dishId: 132,
    yields: "60 pieces",
    prepMin: 70,
    cookMin: 60,
    ingredients: [
      { qty: "5 kg", item: "papa amarilla" },
      { qty: "6 tbsp", item: "aji amarillo paste" },
      { qty: "8", item: "limes, juice only" },
      { qty: "2 kg", item: "haggis mix, cooked" },
      { qty: "200 ml", item: "vegetable oil" },
      { qty: "3 tbsp", item: "wholegrain mustard" },
      { qty: "100 ml", item: "whisky" }
    ],
    method: [
      "Make the causa base exactly as for the trout version — riced hot potato, aji, lime, oil, seasoned hard.",
      "Cook the haggis mix through, then loosen it with the whisky and mustard until it is spreadable, not crumbly.",
      "Let the haggis cool to room temperature; spread it hot and it melts the causa layer beneath it.",
      "Layer causa, haggis, causa, pressing firmly so the finished slab holds together under the knife.",
      "Chill at least 3 hours, then cut into squares with a hot wet knife wiped between every cut.",
      "Serve at cool room temperature — fridge-cold, the aji amarillo goes flat and reads as nothing."
    ],
    makeAhead: "Build the day before. The whisky settles into the haggis and stops shouting overnight.",
    holds: "Two hours out of the fridge. This is the dish that explains the whole business in one bite."
  },
  {
    dishId: 133,
    yields: "40 portions",
    prepMin: 60,
    cookMin: 25,
    ingredients: [
      { qty: "6 kg", item: "lamb leg, in 3 cm cubes" },
      { qty: "6 tbsp", item: "aji panca paste" },
      { qty: "60 g", item: "muna, dried" },
      { qty: "300 ml", item: "red wine vinegar" },
      { qty: "10", item: "garlic cloves" },
      { qty: "3 kg", item: "papa nativa" },
      { qty: "80", item: "wooden skewers, soaked" }
    ],
    method: [
      "Blitz the aji panca, muna, garlic, vinegar, cumin and oil into a marinade thick enough to cling.",
      "Marinate the lamb at least 8 hours — muna is a slower aromatic than rosemary and needs the time.",
      "Thread three cubes per skewer with the grain running the same way, so they cook at the same rate.",
      "Boil the papa nativa whole, then halve them and hold them warm to go alongside off the plancha.",
      "Grill hard on a very hot plancha, 3 minutes a side, basting with the leftover marinade as you turn.",
      "Rest the skewers 2 minutes on a warm tray before they go out, or the juice ends up on the guest."
    ],
    makeAhead: "Marinate and skewer the day before. The potatoes can be boiled in the morning and reheated.",
    holds: "Grill to order. Skewers held more than 10 minutes go dry and there is no recovering them.",
    scaling: "A 1 m plancha turns out about 70 skewers an hour. Beyond that, add a grill, not a cook."
  },
  {
    dishId: 134,
    yields: "20 portions",
    prepMin: 45,
    cookMin: 0,
    ingredients: [
      { qty: "3 kg", item: "corvina fillet, skinned" },
      { qty: "30", item: "limes" },
      { qty: "4", item: "aji limo" },
      { qty: "1.5 kg", item: "cucumber" },
      { qty: "3 bunches", item: "dill" },
      { qty: "800 g", item: "red onion" },
      { qty: "40 g", item: "salt" }
    ],
    method: [
      "Check the veda calendar before you buy — a closed season on corvina is law, and this dish has no substitute plan.",
      "Cut the fish into 2 cm cubes and keep it on ice; warm fish cures unevenly and goes chalky at the edges.",
      "Squeeze the limes by hand and stop before the pith — a machine juicer makes the leche de tigre bitter.",
      "Blitz a handful of the fish with lime, aji limo, cucumber, dill stalks and salt to build the leche de tigre.",
      "Pass it through a sieve, taste for salt and acid, and keep it ice-cold until the moment of service.",
      "Dress the fish 4 minutes before it leaves the kitchen, add the sliced onion and dill fronds, and plate."
    ],
    makeAhead: "Cut the fish and make the leche de tigre the morning of. The two meet minutes before service.",
    holds: "Four minutes. This is a plated dish for a reason and it cannot be put on a buffet."
  },
  {
    dishId: 135,
    yields: "50 pieces",
    prepMin: 40,
    cookMin: 0,
    ingredients: [
      { qty: "2 kg", item: "trout fillet, skinned" },
      { qty: "150 ml", item: "whisky" },
      { qty: "4 tbsp", item: "aji amarillo paste" },
      { qty: "300 ml", item: "double cream" },
      { qty: "10", item: "limes" },
      { qty: "20 g", item: "flaked salt" },
      { qty: "1 bunch", item: "chives" }
    ],
    method: [
      "Freeze the fillets for 40 minutes before slicing — firm fish gives you thin slices, soft fish gives you shreds.",
      "Slice on the bias at about 3 mm and lay the slices flat and overlapping on chilled plates.",
      "Warm the whisky briefly to take the raw spirit edge off, then cool it before it goes near the cream.",
      "Whisk the aji amarillo into the cream with the whisky and lime juice until it just coats a spoon.",
      "Spoon the sauce in a line across the fish rather than over it, so the guest sees both.",
      "Finish with flaked salt and chives and send it out immediately — the lime keeps curing the fish on the plate."
    ],
    makeAhead: "Make the sauce a day ahead. Slice the fish no more than an hour before service, kept on ice.",
    holds: "Ten minutes plated. Slice and dress in rounds as the plates go out."
  },
  {
    dishId: 136,
    yields: "40 portions",
    prepMin: 50,
    cookMin: 40,
    ingredients: [
      { qty: "6 kg", item: "beef sirloin, in thick strips" },
      { qty: "6 kg", item: "papa nativa, cut into thick chips" },
      { qty: "1.5 kg", item: "beef dripping" },
      { qty: "2 kg", item: "red onion, in wedges" },
      { qty: "1.5 kg", item: "tomato, in wedges" },
      { qty: "300 ml", item: "sillao (soy sauce)" },
      { qty: "200 ml", item: "red wine vinegar" }
    ],
    method: [
      "Blanch the chips in dripping at 140 °C until soft but pale, then drain and cool them completely on racks.",
      "Season the beef and get the wok or plancha ferociously hot — a lukewarm pan stews the meat and floods it.",
      "Sear the beef in small batches for barely a minute and pull it out while it is still rare in the middle.",
      "Fry the onion hard for 30 seconds, add tomato, then deglaze with sillao and vinegar so it flames up.",
      "Fry the chips a second time at 185 °C until crisp and deep gold — the dripping is what makes them taste Scottish.",
      "Return the beef to the pan, toss with the chips off the heat, and serve within a minute of the toss."
    ],
    makeAhead: "First-fry the chips and cut everything the day before. The wok work happens only at the venue.",
    holds: "Serve straight from the pan. Held ten minutes, the chips go soft and the dish is pointless.",
    scaling: "One wok station does about 60 portions an hour. Two smaller pans beat one large one every time."
  },
  {
    dishId: 137,
    yields: "20 portions",
    prepMin: 45,
    cookMin: 55,
    ingredients: [
      { qty: "3", item: "whole chickens, poached and shredded" },
      { qty: "8 tbsp", item: "aji amarillo paste" },
      { qty: "600 g", item: "stale white bread" },
      { qty: "1.5 L", item: "evaporated milk" },
      { qty: "300 g", item: "pecans" },
      { qty: "400 g", item: "rolled oats" },
      { qty: "400 g", item: "mature cheddar, grated" }
    ],
    method: [
      "Poach the chickens with onion and bay, then shred the meat and keep 1.5 litres of the stock.",
      "Soak the bread in the evaporated milk for 15 minutes and blend it smooth with the pecans.",
      "Fry the aji amarillo paste in oil for a good 5 minutes until it darkens and loses its raw edge.",
      "Combine the paste, the bread cream and the stock, and cook it out until it holds a line on the spoon.",
      "Fold the chicken through, season hard, and spread it into gastronorm trays no deeper than 5 cm.",
      "Rub the oats and cheddar into a crumb, scatter it over and bake at 190 °C for 25 minutes until dark gold."
    ],
    makeAhead: "Make the sauce and shred the meat 2 days ahead. Crumb and bake on the day of the event.",
    holds: "Three hours in a chafing dish, which is the whole reason for the crumb — it stops a skin forming."
  },
  {
    dishId: 138,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 30,
    ingredients: [
      { qty: "4 kg", item: "papa amarilla" },
      { qty: "1.2 kg", item: "queso paria, smoked" },
      { qty: "6 tbsp", item: "aji amarillo paste" },
      { qty: "500 ml", item: "evaporated milk" },
      { qty: "200 g", item: "soda crackers" },
      { qty: "20 g", item: "black pepper, cracked" },
      { qty: "200 g", item: "Tacna olives" }
    ],
    method: [
      "Boil the potatoes whole and unpeeled, then peel and slice them into thick rounds while warm.",
      "Fry the aji amarillo in oil until it darkens, and let it cool before it goes into the blender.",
      "Blend the smoked paria, crackers, evaporated milk and cooled aji into a sauce that pours slowly.",
      "Crack the black pepper coarsely and stir it in at the end so the heat sits alongside the aji rather than under it.",
      "Nap the potato rounds with the sauce rather than drowning them; the potato has to still read as potato.",
      "Finish with olives and serve at cool room temperature, not fridge-cold."
    ],
    makeAhead: "Make the sauce 2 days ahead — it thickens, so slacken it with a little milk before serving.",
    holds: "Three hours at room temperature. The sauce forms a skin, so cover it until the moment it goes out."
  },
  {
    dishId: 139,
    yields: "20 portions",
    prepMin: 60,
    cookMin: 70,
    ingredients: [
      { qty: "20", item: "large rocoto" },
      { qty: "1.5 kg", item: "minced beef" },
      { qty: "1 kg", item: "morcilla, crumbled" },
      { qty: "300 g", item: "rolled oats" },
      { qty: "800 g", item: "onion, finely diced" },
      { qty: "600 g", item: "queso paria" },
      { qty: "500 ml", item: "evaporated milk" }
    ],
    method: [
      "Cut the tops off the rocoto, hollow them out and keep the lids — they go back on for the bake.",
      "Boil the shells three times in fresh water with sugar and vinegar, discarding the water each time.",
      "Taste a scrap of shell after the third boil; if it still takes your breath away, boil them once more.",
      "Brown the beef, add the onion and aji panca, then fold the crumbled morcilla and the oats through off the heat.",
      "Fill the shells, cap each with a slice of paria and its own lid, and sit them upright in a deep tray.",
      "Pour the evaporated milk around the base and bake at 180 °C for 40 minutes until the cheese is blistered."
    ],
    makeAhead: "Boil and stuff the shells the day before. Bake on site so they arrive at the table hot.",
    holds: "Two hours in a chafing dish. The shells soften but the filling holds, which is the right trade."
  },
  {
    dishId: 140,
    yields: "20 portions",
    prepMin: 30,
    cookMin: 30,
    ingredients: [
      { qty: "4 kg", item: "papa nativa" },
      { qty: "2 bunches", item: "huacatay" },
      { qty: "300 g", item: "wild garlic leaf, or extra huacatay out of season" },
      { qty: "400 g", item: "pecans" },
      { qty: "800 g", item: "queso fresco" },
      { qty: "400 ml", item: "evaporated milk" },
      { qty: "200 g", item: "soda crackers" }
    ],
    method: [
      "Boil the potatoes whole in well-salted water, then peel and slice them thick while they are still warm.",
      "Toast the pecans in a dry pan until they smell nutty — untoasted, they make the sauce taste of nothing.",
      "Blanch the wild garlic leaf for 10 seconds and refresh it in ice water so the sauce stays green.",
      "Blend the huacatay, wild garlic, pecans, queso fresco, crackers and milk until completely smooth.",
      "Season with salt and a squeeze of lime and check the consistency — it should coat, not flood.",
      "Nap the potatoes and serve at room temperature, dressing the trays only just before they go out."
    ],
    makeAhead: "The sauce keeps 3 days but loses colour after one. Blend fresh on the morning of the event.",
    holds: "Three hours at room temperature. Cover it, or the surface darkens within twenty minutes."
  },
  {
    dishId: 141,
    yields: "20 portions",
    prepMin: 55,
    cookMin: 60,
    ingredients: [
      { qty: "3 kg", item: "minced lamb" },
      { qty: "1.5 kg", item: "onion, finely diced" },
      { qty: "400 g", item: "rolled oats" },
      { qty: "12", item: "choclo cobs, kernels stripped" },
      { qty: "500 ml", item: "evaporated milk" },
      { qty: "300 g", item: "Tacna olives" },
      { qty: "6", item: "eggs, hard-boiled and sliced" }
    ],
    method: [
      "Brown the lamb hard in batches so it colours rather than steams, and drain off the excess fat.",
      "Sweat the onion with cumin and aji panca until sweet, then return the meat and stir the oats through.",
      "Add stock a ladle at a time until the oats swell and the mixture holds its shape on a spoon.",
      "Blitz the choclo kernels coarsely with the evaporated milk and a little butter into a rough, sweet paste.",
      "Layer the meat into trays, lay the olives and egg over it, and spread the choclo paste right to the edges.",
      "Dust with sugar and bake at 190 °C for 35 minutes until the top blisters and browns in patches."
    ],
    makeAhead: "Build the trays the day before and bake on site. It reheats better than almost anything here.",
    holds: "Three hours in a chafing dish. The choclo lid stops it drying out the way mashed potato would."
  },
  {
    dishId: 142,
    yields: "60 empanadas",
    prepMin: 90,
    cookMin: 25,
    ingredients: [
      { qty: "2 kg", item: "plain flour" },
      { qty: "700 g", item: "lard or butter" },
      { qty: "1.5 kg", item: "chicken thigh, poached and shredded" },
      { qty: "1.5 kg", item: "leek, finely sliced" },
      { qty: "6 tbsp", item: "aji amarillo paste" },
      { qty: "400 g", item: "stale bread, soaked in milk" },
      { qty: "3", item: "eggs, for glazing" }
    ],
    method: [
      "Make the dough, rest it an hour in the fridge, and roll it to 3 mm — thicker and the filling ratio goes wrong.",
      "Sweat the leek in butter over a low heat for 20 minutes until it collapses and sweetens completely.",
      "Fry the aji amarillo paste out properly, then add the soaked bread and cook to a thick, glossy base.",
      "Fold the chicken and leek through and chill the filling hard — warm filling tears wet dough every time.",
      "Fill, fold and crimp with a repulgue, then chill the trays 20 minutes before they go in the oven.",
      "Egg-wash and bake at 200 °C for 22 minutes until deep gold, turning the trays once halfway."
    ],
    makeAhead: "Freeze filled and crimped, then bake from frozen at 190 °C for 28 minutes. Better than fresh-chilled.",
    holds: "Two hours warm, four at room temperature. They are designed to be eaten off a napkin."
  },
  {
    dishId: 143,
    yields: "20 portions",
    prepMin: 40,
    cookMin: 50,
    ingredients: [
      { qty: "3 kg", item: "smoked corvina" },
      { qty: "3 kg", item: "papa nativa" },
      { qty: "8", item: "choclo cobs, in rounds" },
      { qty: "2 L", item: "whole milk" },
      { qty: "1.5 L", item: "fish stock" },
      { qty: "4 tbsp", item: "aji panca paste" },
      { qty: "1 bunch", item: "huacatay" }
    ],
    method: [
      "Smoke or buy the corvina smoked, then flake it and pick it over carefully for pin bones.",
      "Build the base by frying onion, garlic and aji panca until dark, which is the aderezo everything sits on.",
      "Add the stock and the potatoes and simmer until the potatoes are done and starting to break at the edges.",
      "Add the choclo rounds for the last 8 minutes only, or they go tough and stringy in the bowl.",
      "Pour in the milk and bring it to a bare simmer — boiled milk splits and there is no fixing it in the pot.",
      "Fold the smoked fish and the huacatay in off the heat and let it sit five minutes before serving."
    ],
    makeAhead: "Make the base and cook the potatoes a day ahead. Milk and fish go in during the last ten minutes.",
    holds: "Ninety minutes held below a simmer. Prawns have a legal closed season; this version does not."
  },
  {
    dishId: 144,
    yields: "20 portions",
    prepMin: 50,
    cookMin: 90,
    ingredients: [
      { qty: "4", item: "whole ducks, jointed" },
      { qty: "2.5 kg", item: "long-grain rice" },
      { qty: "1 L", item: "stout" },
      { qty: "4 bunches", item: "culantro" },
      { qty: "1 kg", item: "onion" },
      { qty: "8", item: "choclo cobs, kernels stripped" },
      { qty: "4 tbsp", item: "aji amarillo paste" }
    ],
    method: [
      "Render the duck skin down in a dry pan and brown the joints hard in their own fat, then set them aside.",
      "Build the aderezo in the duck fat with onion, garlic and aji amarillo, cooking it until it is almost jammy.",
      "Blitz the culantro with a little stock to a bright green liquor and hold it back until the very end.",
      "Braise the duck in the stout and stock for an hour until the meat pulls easily from the bone.",
      "Lift the duck out, measure the liquor, and cook the rice in it with the choclo, covered and undisturbed.",
      "Fork the culantro liquor through the finished rice off the heat so it stays green, and sit the duck back on top."
    ],
    makeAhead: "Braise the duck the day before. The rice must be cooked within an hour of service, not reheated.",
    holds: "One hour in a covered tray. Rice held longer goes claggy and the culantro browns off."
  },
  {
    dishId: 145,
    yields: "60 rolls",
    prepMin: 45,
    cookMin: 180,
    ingredients: [
      { qty: "4 kg", item: "pork leg, for jamon del pais" },
      { qty: "6 tbsp", item: "aji panca paste" },
      { qty: "60", item: "morning rolls" },
      { qty: "2 kg", item: "red onion" },
      { qty: "8", item: "limes" },
      { qty: "3", item: "aji limo" },
      { qty: "200 g", item: "wholegrain mustard" }
    ],
    method: [
      "Rub the pork leg with aji panca, garlic, cumin and salt and leave it overnight in the fridge.",
      "Roast at 150 °C for three hours until a skewer meets no resistance, then cool it completely before slicing.",
      "Slice it thin on a machine — hand-cut jamon del pais is too thick and the roll will not close.",
      "Cut the salsa criolla no more than an hour before service and dress it with lime and salt only.",
      "Split the morning rolls, scrape a little mustard on the base, and lay the pork in loose folds.",
      "Top with drained salsa criolla and close; wet criolla will turn the roll to paste within twenty minutes."
    ],
    makeAhead: "Roast and slice the pork the day before. Build the rolls no more than an hour before service.",
    holds: "One hour built. Beyond that the roll goes soggy, so build in rounds as trays go out."
  },
  {
    dishId: 146,
    yields: "40 glasses",
    prepMin: 30,
    cookMin: 45,
    ingredients: [
      { qty: "3 L", item: "evaporated milk" },
      { qty: "2 L", item: "condensed milk" },
      { qty: "12", item: "egg yolks" },
      { qty: "8", item: "egg whites" },
      { qty: "600 g", item: "caster sugar" },
      { qty: "150 ml", item: "whisky" },
      { qty: "2 tsp", item: "ground cinnamon" }
    ],
    method: [
      "Cook the two milks together over a low heat, stirring constantly, until the manjar blanco pulls from the pan.",
      "Take it off the heat and beat the yolks in one at a time so they thicken it without scrambling.",
      "Cool the manjar completely and spoon it into glasses to just under half full.",
      "Boil the sugar with a little water to 118 °C, then pour it onto the whipping whites in a thin steady thread.",
      "Beat the meringue to stiff and glossy, then fold the whisky in at the very end — heat would cook it off.",
      "Pipe the meringue over the manjar, dust with cinnamon, and keep the glasses cool until service."
    ],
    makeAhead: "Make the manjar 3 days ahead. Whip the meringue on the day; it weeps by the second morning.",
    holds: "Four hours at cool room temperature. Direct sun on a Lima terrace collapses the meringue fast."
  },
  {
    dishId: 147,
    yields: "40 portions",
    prepMin: 60,
    cookMin: 40,
    ingredients: [
      { qty: "3 kg", item: "camote" },
      { qty: "2 kg", item: "zapallo macre" },
      { qty: "1.5 kg", item: "plain flour" },
      { qty: "30 g", item: "dried yeast" },
      { qty: "1.2 kg", item: "chancaca" },
      { qty: "600 g", item: "bitter orange marmalade" },
      { qty: "3 L", item: "frying oil" }
    ],
    method: [
      "Boil the camote and zapallo separately until soft, then pass both and weigh the puree before mixing.",
      "Mix the puree with the flour and activated yeast to a wet, sticky batter and prove it 90 minutes.",
      "Melt the chancaca with the marmalade, orange peel, fig leaf and anise into a syrup and pass it through a sieve.",
      "Get the oil to 180 °C and check it with a scrap of batter before the first real ring goes in.",
      "Shape each ring with a wet hand and a thumb through the middle, dropping it straight into the oil.",
      "Fry 90 seconds a side, drain briefly, and pour the warm syrup over as it goes to the guest."
    ],
    makeAhead: "The syrup keeps for weeks. The batter must be proved on the day and used within four hours.",
    holds: "Fry to order. A picaron that has sat five minutes is a doughnut, and not a good one.",
    scaling: "One fryer does about 90 rings an hour. This is a queue-forming station, so staff it accordingly."
  },
  {
    dishId: 148,
    yields: "80 alfajores",
    prepMin: 60,
    cookMin: 15,
    ingredients: [
      { qty: "1.2 kg", item: "plain flour" },
      { qty: "600 g", item: "cornflour" },
      { qty: "1.1 kg", item: "butter" },
      { qty: "500 g", item: "icing sugar" },
      { qty: "1.5 kg", item: "manjar blanco" },
      { qty: "500 g", item: "lucuma pulp" },
      { qty: "200 g", item: "icing sugar, to finish" }
    ],
    method: [
      "Beat the butter and icing sugar only until smooth — creaming air in gives you a biscuit that spreads.",
      "Work in both flours by hand to shortbread proportions, which is what makes this version hold its snap.",
      "Roll to 5 mm between parchment, cut discs, and chill them a full 30 minutes before baking.",
      "Bake at 160 °C for 13 to 15 minutes until barely coloured; browning kills the texture you are after.",
      "Beat the lucuma pulp into the manjar blanco, which cuts the sweetness and stiffens it for piping.",
      "Sandwich the cooled discs, roll the edges in more lucuma manjar if you like, and dust with icing sugar."
    ],
    makeAhead: "Bake the discs up to a week ahead and sandwich within 24 hours of service.",
    holds: "Two days sandwiched before the biscuit softens. Undipped discs keep a week in a sealed tin."
  },
  {
    dishId: 149,
    yields: "60 pieces",
    prepMin: 70,
    cookMin: 40,
    ingredients: [
      { qty: "1.5 kg", item: "plain flour" },
      { qty: "500 g", item: "medium oatmeal" },
      { qty: "700 g", item: "butter" },
      { qty: "8", item: "egg yolks" },
      { qty: "1.5 kg", item: "chancaca" },
      { qty: "40 g", item: "ground ginger" },
      { qty: "20 g", item: "anise seed" }
    ],
    method: [
      "Rub the butter into the flour and oatmeal, then bring it together with the yolks and a little anise water.",
      "Roll the dough into finger-thick sticks and lay them in tight rows so they bake into a slab.",
      "Bake at 170 °C for 25 minutes until dry and firm all the way through, then cool completely.",
      "Simmer the chancaca with ginger, cloves, orange peel, quince and fig leaf to a syrup that threads off a spoon.",
      "Layer the sticks in a tray, pouring syrup over each layer and crossing the direction as you build.",
      "Leave overnight for the syrup to soak in, then cut into squares with a heavy oiled knife."
    ],
    makeAhead: "Bake the sticks a week ahead. Assemble and syrup two days before service so it sets properly.",
    holds: "A week at room temperature, wrapped. This is an October product and it keeps like one."
  },
  {
    dishId: 150,
    yields: "20 portions",
    prepMin: 50,
    cookMin: 45,
    ingredients: [
      { qty: "2 kg", item: "maiz morado" },
      { qty: "1", item: "pineapple, with skin" },
      { qty: "3", item: "quinces" },
      { qty: "24", item: "gelatine leaves" },
      { qty: "1", item: "plain sponge, cut into fingers" },
      { qty: "2 L", item: "double cream" },
      { qty: "300 g", item: "oatmeal, toasted" }
    ],
    method: [
      "Boil the maiz morado with pineapple skin, quince, cinnamon and clove for 40 minutes to make the chicha.",
      "Strain it, sweeten to taste and sharpen it with lime — under-acidic chicha sets into a bland jelly.",
      "Soften the gelatine, dissolve it into a portion of the warm chicha, then combine and cool to room temperature.",
      "Line the trifle bowls with sponge fingers and pour the cooled chicha over, filling to two-thirds.",
      "Set for at least 4 hours before the cream goes on; a warm jelly and whipped cream make a pink mess.",
      "Whip the cream to soft peaks, spoon it over the set jelly and top with toasted oatmeal at the venue."
    ],
    makeAhead: "Make the chicha and set the jellies 2 days ahead. Cream and oatmeal go on at the venue.",
    holds: "Two hours out of the fridge before the jelly softens. The oatmeal goes on last or it goes soft."
  }
];
