import type { Price } from "@/lib/costing";

/**
 * Lima buying prices, per unit, for every ingredient the recipes name.
 *
 * ═══ EVERY FIGURE HERE IS AN UNVERIFIED ESTIMATE. ═══
 *
 * They are ballpark wholesale prices for Surquillo N.1, Makro and the
 * Terminal Pesquero, good enough to see whether a dish's costed figure is
 * roughly right and nowhere near good enough to quote from. Replace them
 * with real invoice prices after a buying run; __tests__/costing.test.ts
 * asserts they stay flagged unverified until someone does.
 *
 * `per` is the unit the price is quoted in:
 *   kg    - sold by weight
 *   L     - sold by volume
 *   each  - sold as a unit (an egg, a roll, a cob)
 *   bunch - sold as a bunch (soft herbs)
 *
 * Recipe quantities in grams and millilitres convert into kg and L; spoons
 * convert as 15 ml and 5 ml. A line whose ingredient is not in this table is
 * reported as unpriced rather than costed at zero - see lib/costing.ts.
 */
export const PRICES: Record<string, Price> = {
  // ---- dairy, eggs, fat ----
  "butter": { per: "kg", soles: 32 },
  "cold butter": { per: "kg", soles: 32 },
  "egg": { per: "each", soles: 0.5 },
  "egg yolk": { per: "each", soles: 0.5 },
  "egg white": { per: "each", soles: 0.5 , unitGrams: 33 },
  "quail egg": { per: "each", soles: 0.6 },
  "milk": { per: "L", soles: 5 },
  "whole milk": { per: "L", soles: 5 },
  "warm milk": { per: "L", soles: 5 },
  "double cream": { per: "L", soles: 22 },
  "cream": { per: "L", soles: 22 },
  "soured cream": { per: "kg", soles: 18 },
  "creme fraiche": { per: "kg", soles: 26 },
  "thick yoghurt": { per: "kg", soles: 12 },
  "greek-style yoghurt": { per: "kg", soles: 15 },
  "buttermilk": { per: "L", soles: 8 },
  "evaporated milk": { per: "L", soles: 9 },
  "condensed milk": { per: "L", soles: 12 , unitGrams: 397 },
  "manjar blanco": { per: "kg", soles: 16 },
  "cream cheese": { per: "kg", soles: 26 },
  "queso paria": { per: "kg", soles: 34 },
  "queso fresco": { per: "kg", soles: 22 },
  "mature cheddar": { per: "kg", soles: 48, note: "imported; the priciest cheese on the sheet" },
  "lard": { per: "kg", soles: 12 },
  "beef dripping": { per: "kg", soles: 12 },
  "suet": { per: "kg", soles: 16 },
  "olive oil": { per: "L", soles: 32 },
  "good olive oil": { per: "L", soles: 45 },
  "vegetable oil": { per: "L", soles: 9 },
  "sunflower oil": { per: "L", soles: 9 },
  "frying oil": { per: "L", soles: 9 },

  // ---- added with the 2026 matrix extension (dishes 192-223) ----
  // Alpaca is the Peruvian stand-in for Highland venison: comparably lean,
  // widely farmed, and roughly the price of a good beef cut rather than game.
  "alpaca": { per: "kg", soles: 42, note: "lomo or shoulder; Magdalena and the Andean butchers, not Makro" },
  "beef topside": { per: "kg", soles: 28, note: "asked for in slices and beaten thin, for beef olives" },
  "haggis": { per: "kg", soles: 26, note: "made to brief by the butcher; dearer than building it in-house" },
  "whole salmon": { per: "kg", soles: 46, note: "imported Chilean; the single dearest line on the sheet" },
  "concha de abanico": { per: "kg", soles: 38, note: "roe on; carries a veda - check the month before ordering" },
  "crab meat": { per: "kg", soles: 55, note: "picked. Buying whole crab is cheaper per kilo and much dearer in labour" },
  "crab shell": { per: "kg", soles: 4, note: "the stall will usually give these away with a picked order" },
  "pearl barley": { per: "kg", soles: 7 },
  "barley flour": { per: "kg", soles: 9 },
  "brown lentil": { per: "kg", soles: 7 },
  "juniper berry": { per: "kg", soles: 90, note: "imported and used by the spoon; the per-kilo figure looks alarming and costs pennies" },
  "achiote": { per: "kg", soles: 24 },
  "vegetable stock": { per: "L", soles: 3 },

  "panko": { per: "kg", soles: 12 },
  "cumin": { per: "kg", soles: 45 },
  "ginger": { per: "kg", soles: 8 },
  "ground cardamom": { per: "kg", soles: 180 },
  "turmeric": { per: "kg", soles: 40 },
  "caper": { per: "kg", soles: 45 },
  "head garlic": { per: "each", soles: 1.2, unitGrams: 55 },
  "clove": { per: "kg", soles: 90, unitGrams: 0.06 },
  "radishe": { per: "kg", soles: 6, unitGrams: 15 },
  "vinegar": { per: "L", soles: 8 },
  "oil": { per: "L", soles: 9 },
  "wonton wrapper": { per: "each", soles: 0.06 },
  "scotch ale": { per: "L", soles: 26 },
  "avocado": { per: "kg", soles: 7, unitGrams: 220 },
  "strong coffee": { per: "L", soles: 6 },
  "cocoa powder": { per: "kg", soles: 38 },
  "very ripe banana": { per: "kg", soles: 3.5, unitGrams: 120 },
  "coconut oil": { per: "L", soles: 26 },
  "coconut milk": { per: "L", soles: 14 },

  // ---- flour, grain, bakery dry goods ----
  "plain flour": { per: "kg", soles: 4.5 },
  "flour": { per: "kg", soles: 4.5 },
  "strong white flour": { per: "kg", soles: 5 },
  "self-raising flour": { per: "kg", soles: 5.5 },
  "wholemeal flour": { per: "kg", soles: 6 },
  "rye flour": { per: "kg", soles: 9 },
  "rice flour": { per: "kg", soles: 8 },
  "quinoa flour": { per: "kg", soles: 18 },
  "cornflour": { per: "kg", soles: 7 },
  "fine semolina": { per: "kg", soles: 8 },
  "pinhead oat": { per: "kg", soles: 8 },
  "pinhead oatmeal": { per: "kg", soles: 8 },
  "rolled oat": { per: "kg", soles: 7 },
  "medium oatmeal": { per: "kg", soles: 8 },
  "oatmeal": { per: "kg", soles: 8 },
  "oat": { per: "kg", soles: 7 },
  "extra oat": { per: "kg", soles: 7 },
  "toasted oat": { per: "kg", soles: 7 },
  "quinoa": { per: "kg", soles: 14 },
  "tri-colour quinoa": { per: "kg", soles: 17 },
  "kiwicha": { per: "kg", soles: 15 },
  "long-grain rice": { per: "kg", soles: 5 },
  "breadcrumb": { per: "kg", soles: 7 },
  "fine rusk": { per: "kg", soles: 9 },
  "soda cracker": { per: "kg", soles: 12 },
  "mixed seed": { per: "kg", soles: 22 },
  "dried yeast": { per: "kg", soles: 45 },
  "fresh yeast": { per: "kg", soles: 18 },
  "baking powder": { per: "kg", soles: 25 },
  "bicarbonate of soda": { per: "kg", soles: 12 },
  "gelatine": { per: "kg", soles: 90 },
  "gelatine leaf": { per: "each", soles: 0.5 , unitGrams: 2 },
  // Sets about eight times harder than gelatine by weight, so the quantities in
  // the recipes are not a like-for-like swap - they were recalculated. Dearer
  // per kilo and much cheaper per batch. Estimate, like every price here.
  "agar agar": { per: "kg", soles: 220 },

  // ---- sugar and sweet ----
  "sugar": { per: "kg", soles: 4.2 },
  "caster sugar": { per: "kg", soles: 4.5 },
  "granulated sugar": { per: "kg", soles: 4.2 },
  "icing sugar": { per: "kg", soles: 8 },
  "soft brown sugar": { per: "kg", soles: 7 },
  "demerara": { per: "kg", soles: 7.5 },
  "demerara sugar": { per: "kg", soles: 7.5 },
  "chancaca": { per: "kg", soles: 9 },
  "algarrobina": { per: "L", soles: 40 },
  "honey": { per: "kg", soles: 32 },
  "golden syrup": { per: "kg", soles: 22 },
  "orange marmalade": { per: "kg", soles: 18 },
  "bitter orange marmalade": { per: "kg", soles: 20 },
  "lucuma marmalade": { per: "kg", soles: 22 },
  "70% peruvian dark chocolate": { per: "kg", soles: 55 },
  "peruvian dark chocolate": { per: "kg", soles: 55 },
  "70% dark chocolate": { per: "kg", soles: 55 },
  "cacao nib": { per: "kg", soles: 45 },
  "vanilla": { per: "L", soles: 320 },
  "vanilla pod": { per: "each", soles: 9 , unitGrams: 3 },
  "glace cherry": { per: "kg", soles: 26 , unitGrams: 6 },
  "mixed peel": { per: "kg", soles: 20 },
  "desiccated coconut": { per: "kg", soles: 18 },
  "freeze-dried strawberry powder": { per: "kg", soles: 320, note: "imported; use sparingly" },
  "maca powder": { per: "kg", soles: 45 },

  // ---- fruit ----
  "lemon": { per: "each", soles: 0.5 , unitGrams: 90 },
  "lime": { per: "each", soles: 0.4 , unitGrams: 45 },
  "lime juice": { per: "L", soles: 14 },
  "orange": { per: "each", soles: 0.8 , unitGrams: 180 },
  "naranja agria": { per: "each", soles: 1.2 , unitGrams: 140 },
  "apple": { per: "kg", soles: 6 , unitGrams: 170 },
  "manzana israel": { per: "kg", soles: 7 , unitGrams: 170 },
  "lucuma pulp": { per: "kg", soles: 18 },
  "aguaymanto": { per: "kg", soles: 14 },
  "dried aguaymanto": { per: "kg", soles: 38 },
  "aguaymanto preserve": { per: "kg", soles: 22 },
  "chirimoya": { per: "kg", soles: 12 , unitGrams: 450 },
  "maracuya juice": { per: "L", soles: 16 },
  "maracuya curd": { per: "kg", soles: 28 },
  "pineapple": { per: "each", soles: 6 },
  "quince": { per: "kg", soles: 9 , unitGrams: 180 },
  "raisin": { per: "kg", soles: 16 },
  "currant": { per: "kg", soles: 18 },
  "sultana": { per: "kg", soles: 16 },
  "prune": { per: "kg", soles: 20 , unitGrams: 9 },
  "date": { per: "kg", soles: 24 },
  "dried fig": { per: "kg", soles: 30 , unitGrams: 18 },
  "raspberrie": { per: "kg", soles: 45 },
  "green plantain": { per: "kg", soles: 4 , unitGrams: 200 },
  "maiz morado": { per: "kg", soles: 12 },

  // ---- nuts ----
  "pecan": { per: "kg", soles: 60 },
  "almond": { per: "kg", soles: 48 },
  "ground almond": { per: "kg", soles: 52 },
  "toasted almond": { per: "kg", soles: 50 },
  "toasted flaked almond": { per: "kg", soles: 55 },

  // ---- vegetables ----
  "onion": { per: "kg", soles: 3.5 , unitGrams: 150 },
  "red onion": { per: "kg", soles: 3.8 , unitGrams: 140 },
  "spring onion": { per: "kg", soles: 9, unitGrams: 25 },
  "shallot": { per: "kg", soles: 9 , unitGrams: 40 },
  "garlic clove": { per: "each", soles: 0.15 , unitGrams: 4 },
  "leek": { per: "kg", soles: 5 , unitGrams: 200 },
  "carrot": { per: "kg", soles: 3 , unitGrams: 90 },
  "turnip": { per: "kg", soles: 4, unitGrams: 200 },
  "tomato": { per: "kg", soles: 4 , unitGrams: 120 },
  "ripe tomato": { per: "kg", soles: 4.5 , unitGrams: 130 },
  "tomato paste": { per: "kg", soles: 12 },
  "tomato ketchup": { per: "kg", soles: 10 },
  "cucumber": { per: "kg", soles: 3.5 , unitGrams: 300 },
  "papa amarilla": { per: "kg", soles: 5 , unitGrams: 90 },
  "papa nativa": { per: "kg", soles: 6 , unitGrams: 60 },
  "papa blanca": { per: "kg", soles: 3 , unitGrams: 150 },
  "camote": { per: "kg", soles: 3 },
  "yuca": { per: "kg", soles: 3.5 },
  "zapallo macre": { per: "kg", soles: 4 },
  "choclo cob": { per: "each", soles: 1.5 },
  "choclo kernel": { per: "kg", soles: 7 },
  "beetroot": { per: "kg", soles: 4 , unitGrams: 140 },
  "kale": { per: "kg", soles: 8 },
  "spinach": { per: "kg", soles: 7 },
  "large chard leaf": { per: "each", soles: 0.3 },
  "red cabbage": { per: "kg", soles: 4 , unitGrams: 900 },
  "large white cabbage": { per: "each", soles: 5 , unitGrams: 1000 },
  "mushroom": { per: "kg", soles: 14 },
  "aubergine": { per: "kg", soles: 5 , unitGrams: 250 },
  "red pepper": { per: "kg", soles: 8 , unitGrams: 160 },
  "little gem lettuce": { per: "each", soles: 2.5 , unitGrams: 110 },
  "berro": { per: "bunch", soles: 2 , unitGrams: 100 },
  "ica asparagus": { per: "kg", soles: 14 },
  "bean": { per: "kg", soles: 9 },
  "tacna olive": { per: "kg", soles: 18, unitGrams: 5 },
  "dried split pea": { per: "kg", soles: 8 },
  "wild garlic leaf": { per: "kg", soles: 30 },

  // ---- chillies and pastes ----
  "aji amarillo": { per: "kg", soles: 10 , unitGrams: 45 },
  "extra aji amarillo": { per: "kg", soles: 10 },
  "aji amarillo paste": { per: "kg", soles: 16 },
  "aji panca paste": { per: "kg", soles: 15 },
  "aji limo": { per: "kg", soles: 12 , unitGrams: 12 },
  "pickled aji limo": { per: "kg", soles: 18 , unitGrams: 8 },
  "rocoto": { per: "kg", soles: 10 , unitGrams: 45 },
  "large rocoto": { per: "each", soles: 1.2 , unitGrams: 60 },
  "choricero": { per: "kg", soles: 15 },

  // ---- herbs and spices ----
  "dill": { per: "bunch", soles: 3 , unitGrams: 30 },
  "parsley": { per: "bunch", soles: 2 , unitGrams: 30 },
  "flat parsley": { per: "bunch", soles: 2 , unitGrams: 30 },
  "coriander": { per: "bunch", soles: 2 , unitGrams: 30 },
  "culantro": { per: "bunch", soles: 2 , unitGrams: 30 },
  "chive": { per: "bunch", soles: 3 , unitGrams: 25 },
  "huacatay": { per: "bunch", soles: 2.5 , unitGrams: 30 },
  "muna": { per: "kg", soles: 90 },
  "hierbabuena": { per: "bunch", soles: 2 , unitGrams: 30 },
  "rosemary": { per: "kg", soles: 60, unitGrams: 30 },
  "bay leaf": { per: "each", soles: 0.1 , unitGrams: 0.2 },
  "dried oregano": { per: "kg", soles: 60 },
  "salt": { per: "kg", soles: 2 },
  "fine salt": { per: "kg", soles: 2 },
  "coarse salt": { per: "kg", soles: 2 },
  "flaked salt": { per: "kg", soles: 28 },
  "mara salt": { per: "kg", soles: 30 },
  "mara pink salt": { per: "kg", soles: 30 },
  "black pepper": { per: "kg", soles: 70 },
  "black peppercorn": { per: "kg", soles: 70 },
  "white pepper": { per: "kg", soles: 60 },
  "ground white pepper": { per: "kg", soles: 60 },
  "white peppercorn": { per: "kg", soles: 65 },
  "cayenne": { per: "kg", soles: 60 },
  "ground cumin": { per: "kg", soles: 45 },
  "ground coriander": { per: "kg", soles: 45 },
  "ground cinnamon": { per: "kg", soles: 70 },
  "cinnamon": { per: "kg", soles: 70 },
  "cinnamon stick": { per: "each", soles: 0.5 , unitGrams: 3 },
  "mace": { per: "kg", soles: 180 },
  "ground mace": { per: "kg", soles: 180 },
  "nutmeg": { per: "kg", soles: 200 },
  "ground ginger": { per: "kg", soles: 55 },
  "ground allspice": { per: "kg", soles: 70 },
  "whole clove": { per: "kg", soles: 90 , unitGrams: 0.06 },
  "star anise": { per: "kg", soles: 85 , unitGrams: 2 },
  "anise seed": { per: "kg", soles: 50 },
  "smoked paprika": { per: "kg", soles: 65 },
  "mixed spice": { per: "kg", soles: 70 },
  "garam masala": { per: "kg", soles: 70 },
  "mild curry powder": { per: "kg", soles: 55 },

  // ---- condiments and liquids ----
  "water": { per: "L", soles: 0.01 },
  "boiling water": { per: "L", soles: 0.01 },
  "warm water": { per: "L", soles: 0.01 },
  "cold water": { per: "L", soles: 0.01 },
  "red wine vinegar": { per: "L", soles: 12 },
  "white wine vinegar": { per: "L", soles: 12 },
  "cider vinegar": { per: "L", soles: 12 },
  "white vinegar": { per: "L", soles: 6 },
  "sherry": { per: "L", soles: 45 },
  "wholegrain mustard": { per: "kg", soles: 28 },
  "dijon mustard": { per: "kg", soles: 30 },
  "mayonnaise": { per: "kg", soles: 14 },
  "sillao": { per: "L", soles: 10 },
  "soy sauce": { per: "L", soles: 10 },
  "worcestershire sauce": { per: "L", soles: 38 },
  "brown sauce": { per: "kg", soles: 16 },
  "mango chutney": { per: "kg", soles: 22 },
  "good anchovy fillet in oil": { per: "kg", soles: 90 , unitGrams: 4 },
  "hot strong black tea": { per: "L", soles: 1 },
  "beef stock": { per: "L", soles: 6 },
  "chicken stock": { per: "L", soles: 5 },
  "lamb stock": { per: "L", soles: 7 },
  "fish stock": { per: "L", soles: 6 },
  "stock": { per: "L", soles: 5 },
  "gravy": { per: "L", soles: 8, unitGrams: 600 },

  // ---- alcohol ----
  "whisky": { per: "L", soles: 120 },
  "single malt whisky": { per: "L", soles: 260 },
  "pisco": { per: "L", soles: 60 },
  "brandy": { per: "L", soles: 70 },
  "red wine": { per: "L", soles: 28 },
  "stout": { per: "L", soles: 18 },
  "cerveza negra": { per: "L", soles: 14 },
  "very cold beer": { per: "L", soles: 12 },
  "chicha de jora": { per: "L", soles: 10 },
  "chicha morada": { per: "L", soles: 8 },
  "irn bru": { per: "L", soles: 22, note: "imported, and there is no substitute that tastes like it" },

  // ---- meat ----
  "lamb": { per: "kg", soles: 30 },
  "lamb leg": { per: "kg", soles: 34 , unitGrams: 2200 },
  "lamb shoulder": { per: "kg", soles: 32 },
  "lamb neck": { per: "kg", soles: 24 },
  "lamb mince": { per: "kg", soles: 28 },
  "lamb offal": { per: "kg", soles: 9 },
  "beef": { per: "kg", soles: 26 },
  "beef mince": { per: "kg", soles: 22 },
  "beef shin": { per: "kg", soles: 18 },
  "asado de tira": { per: "kg", soles: 28 },
  "beef sirloin": { per: "kg", soles: 42 },
  "lomo fino": { per: "kg", soles: 48 },
  "beef tenderloin": { per: "kg", soles: 55 },
  "beef heart": { per: "kg", soles: 14 },
  "cooked beef": { per: "kg", soles: 26 },
  "pork belly": { per: "kg", soles: 20 },
  "pork leg": { per: "kg", soles: 18 },
  "pork shoulder": { per: "kg", soles: 18 },
  "pork mince": { per: "kg", soles: 18 },
  "sausage meat": { per: "kg", soles: 16 },
  "artisanal pork sausage": { per: "kg", soles: 26 , unitGrams: 70 },
  "artisanal chorizo-style sausage": { per: "kg", soles: 30 },
  "lorne sausage square": { per: "each", soles: 2 },
  "morcilla": { per: "kg", soles: 22 },
  "artisanal morcilla": { per: "kg", soles: 26 },
  "streaky bacon": { per: "kg", soles: 28 },
  "bacon": { per: "kg", soles: 28 },
  "artisanal ham": { per: "kg", soles: 38 },
  "haggis mix": { per: "kg", soles: 18 },
  "whole chicken": { per: "each", soles: 32 },
  "chicken": { per: "kg", soles: 12 },
  "chicken thigh": { per: "kg", soles: 13 },
  "chicken breast": { per: "kg", soles: 20 , unitGrams: 220 },
  "duck breast": { per: "kg", soles: 55 , unitGrams: 320 },
  "whole duck": { per: "each", soles: 75 },

  // ---- fish and shellfish ----
  "trout fillet": { per: "kg", soles: 42 },
  "whole trout": { per: "each", soles: 24 },
  // The big farmed trout above is a 1 kg fish. The Terminal also sells a
  // 300 g one, which is the size you butterfly and kipper whole.
  "small whole trout": { per: "each", soles: 8, unitGrams: 300 },
  "hot-smoked trout": { per: "kg", soles: 65 },
  "hot-smoked andean trout": { per: "kg", soles: 65 },
  "cured": { per: "kg", soles: 60 },
  "paiche": { per: "kg", soles: 48 },
  "smoked paiche": { per: "kg", soles: 60 },
  "hot-smoked paiche": { per: "kg", soles: 60 },
  "corvina": { per: "kg", soles: 38 },
  "corvina fillet": { per: "kg", soles: 42 , unitGrams: 800 },
  "smoked corvina": { per: "kg", soles: 52 },
  "chita": { per: "kg", soles: 34 , unitGrams: 600 },
  "bonito loin": { per: "kg", soles: 22 },
  "baby squid": { per: "kg", soles: 26 },
  "langostino": { per: "kg", soles: 45, note: "veda applies - check before selling anything built on it" },
  "fish": { per: "kg", soles: 36 },
  "extra smoked fish": { per: "kg", soles: 60 },

  // ---- bought-in bakery ----
  "morning roll": { per: "each", soles: 0.8 },
  "small soft roll": { per: "each", soles: 0.7 },
  "crusty roll": { per: "each", soles: 1 },
  "baguette": { per: "each", soles: 4 },
  "sourdough": { per: "each", soles: 12 },
  "dense rye bread": { per: "each", soles: 14 },
  "rye bread": { per: "each", soles: 12 },
  "brioche loaf": { per: "each", soles: 14 },
  "small brioche": { per: "each", soles: 1.5 },
  "stale bread": { per: "kg", soles: 3 },
  "stale white bread": { per: "kg", soles: 3 },
  "day-old butterie": { per: "each", soles: 1.2 },
  "flatbread": { per: "each", soles: 1.2 },
  "plain sponge": { per: "each", soles: 14 },
  "oatcake": { per: "each", soles: 0.6 },
  "tattie scone": { per: "each", soles: 1 },
  "rye and kiwicha crispbread": { per: "each", soles: 0.7 },
  "puff pastry": { per: "kg", soles: 16 },
  "puff": { per: "kg", soles: 16 },
  "shortcrust pastry": { per: "kg", soles: 14 },
  "sweet shortcrust pastry": { per: "kg", soles: 15 },
  "cacao shortcrust pastry": { per: "kg", soles: 18 },
  "filo pastry": { per: "kg", soles: 30, note: "imported - the cost variable in the baklava" , unitGrams: 450 },
  "empanada dough": { per: "kg", soles: 9 },
  "thin crepe": { per: "each", soles: 0.8 , unitGrams: 45 }
};

/**
 * Made in-house from another recipe on this sheet. Costing these from a
 * supplier price would double-count, so they are resolved through their own
 * recipe or reported, never guessed at.
 */
/**
 * Made in-house from another recipe on this sheet. Costing these against a
 * supplier price would either double-count or, worse, cost them at nothing -
 * which is what happened before this map existed: the Nordic Cure Box is four
 * sub-preparations and a spoon of creme fraiche, and it priced out at S/0.30.
 *
 * Where the sub-preparation is itself a dish, cost it through that recipe.
 */
export const SUB_RECIPE_OF: Record<string, number> = {
  "tzatziki": 109,
  "tzatziki con rocoto": 109,
  "melitzanosalata": 111,
  "dolmade": 110,
  "keftede": 23,
  "paiche gravlax": 44,
  "cullen skink chupe": 28,
  "leftover stovie": 33,
  "dill and papa nativa salad": 121,
  "rocoto and betarraga pickle": 117
};

/**
 * In-house preparations with no dish of their own. Priced per kg as made,
 * estimated like everything else here.
 */
export const SUB_PREP_PRICES: Record<string, Price> = {
  "salsa criolla": { per: "kg", soles: 6, unitGrams: 800 },
  "huacatay aioli": { per: "kg", soles: 22, unitGrams: 500 },
  "aji amarillo mayonnaise": { per: "kg", soles: 20, unitGrams: 500 },
  "hot water crust pastry": { per: "kg", soles: 9, unitGrams: 1000 },
  "hovmastarsa": { per: "kg", soles: 20, unitGrams: 500 },
  "rocoto piccalilli": { per: "kg", soles: 14, unitGrams: 800 },
  "shortbread base": { per: "kg", soles: 18, unitGrams: 1200 },
  "wholemeal shortbread base": { per: "kg", soles: 18, unitGrams: 1200 }
};

/**
 * Residue from splitting compound ingredient lines. Each is costed as the
 * component that carries the money, which is honest to within pennies and
 * far better than the zero they cost while they sat in the sub-prep list.
 */
export const COMPOUND_ALIAS: Record<string, string> = {
  "cucumber and tomato": "cucumber",
  "turnip and carrot": "turnip",
  "turnip and zapallo loche": "turnip",
  "raisin and currant": "raisin",
  "beef and pork": "beef mince",
  "red and green pepper": "red pepper",
  "toasted quinoa and walnut": "quinoa",
  "water and milk": "milk",
  "warm milk and water": "milk",
  "egg and caster sugar": "egg",
  "egg and pearl sugar": "egg",
  "breadcrumb in 150 ml milk": "breadcrumb"
};

/** On the invoice, but not food. Costed, but never counted as food cost. */
export const NON_FOOD = [
  "wooden skewer", "bamboo skewer", "cocktail stick",
  "large cloth and flour for dusting", "banana leaf"
] as const;

/** Sundry prices for the non-food lines above. */
export const NON_FOOD_PRICES: Record<string, Price> = {
  "wooden skewer": { per: "each", soles: 0.03 },
  "bamboo skewer": { per: "each", soles: 0.03 },
  "cocktail stick": { per: "each", soles: 0.02 },
  "large cloth and flour for dusting": { per: "each", soles: 2 },
  "banana leaf": { per: "each", soles: 0.3, note: "sold by the leaf at Surquillo; a wrapper, not an ingredient" }
};
