import type { IngredientAttrs } from "@/lib/dietary";

/**
 * What each ingredient declares.
 *
 * Every key a recipe uses appears here or in PLANT_PLAIN below - nothing is
 * defaulted silently, and __tests__/dietary.test.ts fails if a new ingredient
 * arrives unclassified. That is the whole point: an unclassified ingredient
 * must be an error, never an assumption of "probably fine".
 *
 * UNVERIFIED against actual products. Brands vary: some stocks carry celery,
 * some chocolate carries soya lecithin, some oats are certified gluten-free
 * and most are not. Check the labels of what you actually buy.
 */
export const INGREDIENT_ATTRS: Record<string, IngredientAttrs> = {
  // ---- cereals containing gluten ----
  "plain flour": { allergens: ["gluten"] },
  "flour": { allergens: ["gluten"] },
  "strong white flour": { allergens: ["gluten"] },
  "self-raising flour": { allergens: ["gluten"] },
  "wholemeal flour": { allergens: ["gluten"] },
  "rye flour": { allergens: ["gluten"] },
  "fine semolina": { allergens: ["gluten"] },
  "panko": { allergens: ["gluten"], hardTexture: true },
  "breadcrumb": { allergens: ["gluten"], hardTexture: true },
  "fine rusk": { allergens: ["gluten"], hardTexture: true },
  "soda cracker": { allergens: ["gluten"], hardTexture: true },
  // Oats are excluded from a coeliac menu unless certified: almost all Peruvian
  // oats are milled on wheat lines.
  "pinhead oat": { allergens: ["gluten"], hardTexture: true },
  "pinhead oatmeal": { allergens: ["gluten"] },
  "rolled oat": { allergens: ["gluten"] },
  "medium oatmeal": { allergens: ["gluten"] },
  "oatmeal": { allergens: ["gluten"] },
  "oat": { allergens: ["gluten"] },
  "extra oat": { allergens: ["gluten"] },
  "toasted oat": { allergens: ["gluten"], hardTexture: true },
  "dried yeast": {},
  "fresh yeast": {},

  // ---- bought-in bakery, all wheat ----
  "morning roll": { allergens: ["gluten"] },
  "small soft roll": { allergens: ["gluten"] },
  "crusty roll": { allergens: ["gluten"], hardTexture: true },
  "baguette": { allergens: ["gluten"], hardTexture: true },
  "sourdough": { allergens: ["gluten"], hardTexture: true },
  "dense rye bread": { allergens: ["gluten"], hardTexture: true },
  "rye bread": { allergens: ["gluten"], hardTexture: true },
  "stale bread": { allergens: ["gluten"] },
  "stale white bread": { allergens: ["gluten"] },
  "flatbread": { allergens: ["gluten"] },
  "brioche loaf": { allergens: ["gluten", "eggs", "milk"], vegan: false },
  "small brioche": { allergens: ["gluten", "eggs", "milk"], vegan: false },
  "day-old butterie": { allergens: ["gluten", "milk"], vegan: false },
  "plain sponge": { allergens: ["gluten", "eggs", "milk"], vegan: false, sugary: true },
  "oatcake": { allergens: ["gluten"], hardTexture: true },
  "tattie scone": { allergens: ["gluten", "milk"], vegan: false },
  "rye and kiwicha crispbread": { allergens: ["gluten"], hardTexture: true },
  "thin crepe": { allergens: ["gluten", "eggs", "milk"], vegan: false },
  "filo pastry": { allergens: ["gluten"], hardTexture: true },
  "puff pastry": { allergens: ["gluten", "milk"], vegan: false },
  "puff": { allergens: ["gluten", "milk"], vegan: false },
  "shortcrust pastry": { allergens: ["gluten", "milk"], vegan: false },
  "sweet shortcrust pastry": { allergens: ["gluten", "milk"], vegan: false, sugary: true },
  "cacao shortcrust pastry": { allergens: ["gluten", "milk"], vegan: false, sugary: true },
  "empanada dough": { allergens: ["gluten"], vegan: false },
  "shortbread base": { allergens: ["gluten", "milk"], vegan: false, sugary: true, hardTexture: true },
  "wholemeal shortbread base": { allergens: ["gluten", "milk"], vegan: false, sugary: true, hardTexture: true },

  // ---- dairy ----
  "butter": { allergens: ["milk"], vegan: false },
  "cold butter": { allergens: ["milk"], vegan: false },
  "milk": { allergens: ["milk"], vegan: false },
  "whole milk": { allergens: ["milk"], vegan: false },
  "warm milk": { allergens: ["milk"], vegan: false },
  "cream": { allergens: ["milk"], vegan: false },
  "double cream": { allergens: ["milk"], vegan: false },
  "soured cream": { allergens: ["milk"], vegan: false },
  "creme fraiche": { allergens: ["milk"], vegan: false },
  "thick yoghurt": { allergens: ["milk"], vegan: false },
  "greek-style yoghurt": { allergens: ["milk"], vegan: false },
  "buttermilk": { allergens: ["milk"], vegan: false },
  "evaporated milk": { allergens: ["milk"], vegan: false },
  "condensed milk": { allergens: ["milk"], vegan: false, sugary: true },
  "manjar blanco": { allergens: ["milk"], vegan: false, sugary: true },
  "cream cheese": { allergens: ["milk"], vegan: false },
  "queso paria": { allergens: ["milk"], vegan: false },
  "queso fresco": { allergens: ["milk"], vegan: false },
  "mature cheddar": { allergens: ["milk"], vegan: false },
  "warm milk and water": { allergens: ["milk"], vegan: false },
  "water and milk": { allergens: ["milk"], vegan: false },
  "breadcrumb in 150 ml milk": { allergens: ["gluten", "milk"], vegan: false },

  // ---- eggs ----
  "egg": { allergens: ["eggs"], vegan: false },
  "egg yolk": { allergens: ["eggs"], vegan: false },
  "egg white": { allergens: ["eggs"], vegan: false },
  "quail egg": { allergens: ["eggs"], vegan: false },
  "egg and caster sugar": { allergens: ["eggs"], vegan: false, sugary: true },
  "egg and pearl sugar": { allergens: ["eggs"], vegan: false, sugary: true },
  "mayonnaise": { allergens: ["eggs", "mustard"], vegan: false },
  "huacatay aioli": { allergens: ["eggs", "mustard"], vegan: false },

  // ---- meat ----
  "lamb": { vegetarian: false }, "lamb leg": { vegetarian: false },
  "lamb shoulder": { vegetarian: false }, "lamb neck": { vegetarian: false },
  "lamb mince": { vegetarian: false }, "lamb offal": { vegetarian: false },
  "beef": { vegetarian: false }, "beef mince": { vegetarian: false },
  "beef shin": { vegetarian: false }, "beef sirloin": { vegetarian: false },
  "beef tenderloin": { vegetarian: false }, "beef heart": { vegetarian: false },
  "lomo fino": { vegetarian: false }, "asado de tira": { vegetarian: false },
  "cooked beef": { vegetarian: false }, "beef and pork": { vegetarian: false, allergens: ["pork"] },
  "whole chicken": { vegetarian: false }, "chicken breast": { vegetarian: false },
  "chicken thigh": { vegetarian: false }, "duck breast": { vegetarian: false },
  "whole duck": { vegetarian: false }, "sausage meat": { vegetarian: false, allergens: ["pork"] },
  "haggis mix": { vegetarian: false, allergens: ["gluten"] },
  "leftover stovie": { vegetarian: false },
  "beef stock": { vegetarian: false, allergens: ["celery"] },
  "chicken stock": { vegetarian: false, allergens: ["celery"] },
  "lamb stock": { vegetarian: false, allergens: ["celery"] },
  "stock": { vegetarian: false, allergens: ["celery"] },
  "gravy": { vegetarian: false, allergens: ["gluten", "celery"] },
  "beef dripping": { vegetarian: false }, "suet": { vegetarian: false },
  "lard": { vegetarian: false, allergens: ["pork"] },

  // ---- pork ----
  "pork belly": { vegetarian: false, allergens: ["pork"] },
  "pork leg": { vegetarian: false, allergens: ["pork"] },
  "pork shoulder": { vegetarian: false, allergens: ["pork"] },
  "pork mince": { vegetarian: false, allergens: ["pork"] },
  "bacon": { vegetarian: false, allergens: ["pork"] },
  "streaky bacon": { vegetarian: false, allergens: ["pork"] },
  "artisanal ham": { vegetarian: false, allergens: ["pork"] },
  "morcilla": { vegetarian: false, allergens: ["pork"] },
  "artisanal morcilla": { vegetarian: false, allergens: ["pork"] },
  "artisanal pork sausage": { vegetarian: false, allergens: ["pork"] },
  "artisanal chorizo-style sausage": { vegetarian: false, allergens: ["pork"] },
  "lorne sausage square": { vegetarian: false, allergens: ["pork", "gluten"] },

  // ---- fish and shellfish ----
  "trout fillet": { vegetarian: false, allergens: ["fish"] },
  "whole trout": { vegetarian: false, allergens: ["fish"] },
  "hot-smoked trout": { vegetarian: false, allergens: ["fish"] },
  "hot-smoked andean trout": { vegetarian: false, allergens: ["fish"] },
  "cured": { vegetarian: false, allergens: ["fish"] },
  "paiche": { vegetarian: false, allergens: ["fish"] },
  "smoked paiche": { vegetarian: false, allergens: ["fish"] },
  "hot-smoked paiche": { vegetarian: false, allergens: ["fish"] },
  "corvina": { vegetarian: false, allergens: ["fish"] },
  "corvina fillet": { vegetarian: false, allergens: ["fish"] },
  "smoked corvina": { vegetarian: false, allergens: ["fish"] },
  "chita": { vegetarian: false, allergens: ["fish"] },
  "bonito loin": { vegetarian: false, allergens: ["fish"] },
  "fish": { vegetarian: false, allergens: ["fish"] },
  "extra smoked fish": { vegetarian: false, allergens: ["fish"] },
  "fish stock": { vegetarian: false, allergens: ["fish", "celery"] },
  "good anchovy fillet in oil": { vegetarian: false, allergens: ["fish"] },
  "paiche gravlax": { vegetarian: false, allergens: ["fish"] },
  "cullen skink chupe": { vegetarian: false, allergens: ["fish", "milk"] },
  "langostino": { vegetarian: false, allergens: ["crustaceans"] },
  "baby squid": { vegetarian: false, allergens: ["molluscs"] },
  "hovmastarsa": { allergens: ["mustard", "eggs"], vegan: false },

  // ---- nuts and seeds ----
  "pecan": { allergens: ["nuts"], hardTexture: true },
  "almond": { allergens: ["nuts"], hardTexture: true },
  "ground almond": { allergens: ["nuts"] },
  "toasted almond": { allergens: ["nuts"], hardTexture: true },
  "toasted flaked almond": { allergens: ["nuts"], hardTexture: true },
  "toasted quinoa and walnut": { allergens: ["nuts"], hardTexture: true },
  "mixed seed": { allergens: ["sesame"], hardTexture: true },
  "desiccated coconut": {},

  // ---- mustard, soya, sulphites, alcohol ----
  "wholegrain mustard": { allergens: ["mustard"] },
  "dijon mustard": { allergens: ["mustard"] },
  "mango chutney": { allergens: ["mustard", "sulphites"], sugary: true },
  "rocoto piccalilli": { allergens: ["mustard", "sulphites"], hot: true },
  "brown sauce": { allergens: ["gluten", "sulphites"], sugary: true },
  "worcestershire sauce": { allergens: ["fish", "sulphites"], vegetarian: false },
  "tomato ketchup": { sugary: true },
  "sillao": { allergens: ["soya", "gluten"] },
  "soy sauce": { allergens: ["soya", "gluten"] },
  "raisin": { allergens: ["sulphites"], sugary: true },
  "sultana": { allergens: ["sulphites"], sugary: true },
  "currant": { allergens: ["sulphites"], sugary: true },
  "raisin and currant": { allergens: ["sulphites"], sugary: true },
  "prune": { allergens: ["sulphites"], sugary: true },
  "dried fig": { allergens: ["sulphites"], sugary: true, hardTexture: true },
  "dried aguaymanto": { allergens: ["sulphites"], sugary: true },
  "glace cherry": { allergens: ["sulphites"], sugary: true },
  "mixed peel": { allergens: ["sulphites"], sugary: true },
  "date": { sugary: true },
  "whisky": { allergens: ["alcohol", "gluten"] },
  "single malt whisky": { allergens: ["alcohol", "gluten"] },
  "pisco": { allergens: ["alcohol", "sulphites"] },
  "brandy": { allergens: ["alcohol", "sulphites"] },
  "red wine": { allergens: ["alcohol", "sulphites"] },
  "sherry": { allergens: ["alcohol", "sulphites"] },
  "stout": { allergens: ["alcohol", "gluten"] },
  "cerveza negra": { allergens: ["alcohol", "gluten"] },
  "very cold beer": { allergens: ["alcohol", "gluten"] },
  "chicha de jora": { allergens: ["alcohol"] },
  "red wine vinegar": { allergens: ["sulphites"] },
  "white wine vinegar": { allergens: ["sulphites"] },
  "cider vinegar": { allergens: ["sulphites"] },
  "white vinegar": { allergens: ["sulphites"] },
  "vinegar": { allergens: ["sulphites"] },
  "gelatine": { vegetarian: false },
  "gelatine leaf": { vegetarian: false },
  "honey": { vegan: false, sugary: true },
  "irn bru": { sugary: true },

  // Cocoa powder is plain cacao; the chocolate bars carry the lecithin.
  "wonton wrapper": { allergens: ["gluten", "eggs"], vegan: false },
  "scotch ale": { allergens: ["alcohol", "gluten"] },
  "cocoa powder": {},
  "coconut oil": {},
  "coconut milk": {},

  // ---- chocolate and confection (soya lecithin is near-universal) ----
  "70% dark chocolate": { allergens: ["soya", "milk"], sugary: true },
  "70% peruvian dark chocolate": { allergens: ["soya", "milk"], sugary: true },
  "peruvian dark chocolate": { allergens: ["soya", "milk"], sugary: true },
  "cacao nib": { hardTexture: true },
  "freeze-dried strawberry powder": { sugary: true },
  "vanilla": { allergens: ["alcohol"] },

  // ---- sugars and syrups ----
  "sugar": { sugary: true }, "caster sugar": { sugary: true },
  "granulated sugar": { sugary: true }, "icing sugar": { sugary: true },
  "soft brown sugar": { sugary: true }, "demerara": { sugary: true },
  "demerara sugar": { sugary: true }, "chancaca": { sugary: true },
  "algarrobina": { sugary: true }, "golden syrup": { sugary: true },
  "orange marmalade": { sugary: true }, "bitter orange marmalade": { sugary: true },
  "lucuma marmalade": { sugary: true }, "aguaymanto preserve": { sugary: true },
  "maracuya curd": { allergens: ["eggs", "milk"], vegan: false, sugary: true },

  // ---- chilli heat ----
  "aji amarillo": { hot: true }, "extra aji amarillo": { hot: true },
  "aji amarillo paste": { hot: true }, "aji panca paste": { hot: true },
  "aji limo": { hot: true }, "pickled aji limo": { allergens: ["sulphites"], hot: true },
  "rocoto": { hot: true }, "large rocoto": { hot: true },
  "choricero": { hot: true }, "cayenne": { hot: true },
  "smoked paprika": {}, "garam masala": {}, "mild curry powder": {},
  "salsa criolla": { hot: true },
  "tzatziki": { allergens: ["milk"], vegan: false },
  "tzatziki con rocoto": { allergens: ["milk"], vegan: false, hot: true },
  "rocoto and betarraga pickle": { allergens: ["sulphites"], hot: true },
  "melitzanosalata": { hot: true },
  "dolmade": {},
  "keftede": { vegetarian: false },
  "dill and papa nativa salad": { allergens: ["milk", "mustard"], vegan: false },

  // ---- hard or crisp textures ----
  "green plantain": { hardTexture: true },
  "tacna olive": { hardTexture: true },
  "wooden skewer": { hardTexture: true },
  "bamboo skewer": { hardTexture: true },
  "cocktail stick": { hardTexture: true },
  "choclo cob": { hardTexture: true },
  "kiwicha": { hardTexture: true },
  "quinoa": {}, "tri-colour quinoa": {}, "quinoa flour": {},
  "long-grain rice": {}, "rice flour": {}, "cornflour": {},
  "dried split pea": {}, "bean": {},
  "large cloth and flour for dusting": { allergens: ["gluten"] }
};

/**
 * Everything else: plants, water, salt, spices and oils that declare nothing
 * and are fine on every diet here.
 *
 * It exists so that no ingredient is unclassified. A new one that lands in
 * neither list fails the tests rather than being quietly assumed safe.
 */
export const PLANT_PLAIN = [
  "aguaymanto", "apple", "aubergine", "beetroot", "berro", "boiling water",
  "camote", "caper", "carrot", "chirimoya", "chive", "choclo kernel", "cinnamon",
  "cinnamon stick", "clove", "coarse salt", "cold water", "coriander", "cucumber",
  "cucumber and tomato", "culantro", "cumin", "dill", "dried oregano", "fine salt",
  "flaked salt", "flat parsley", "frying oil", "garlic clove", "ginger",
  "good olive oil", "ground allspice", "ground cardamom", "ground cinnamon",
  "ground coriander", "ground cumin", "ground ginger", "ground mace",
  "ground white pepper", "head garlic", "hierbabuena", "hot strong black tea",
  "huacatay", "ica asparagus", "kale", "large chard leaf", "large white cabbage",
  "leek", "lemon", "lime", "lime juice", "little gem lettuce", "lucuma pulp",
  "maca powder", "mace", "maiz morado", "manzana israel", "mara pink salt",
  "mara salt", "maracuya juice", "mixed spice", "muna", "mushroom",
  "naranja agria", "nutmeg", "oil", "olive oil", "onion", "orange",
  "papa amarilla", "papa blanca", "papa nativa", "parsley", "pineapple",
  "quince", "radishe", "raspberrie", "red and green pepper", "red cabbage",
  "red onion", "red pepper", "ripe tomato", "rosemary", "salt", "shallot",
  "spinach", "spring onion", "star anise", "sunflower oil", "tomato",
  "tomato paste", "turmeric", "turnip", "turnip and carrot",
  "turnip and zapallo loche", "vanilla pod", "vegetable oil", "warm water",
  "water", "white pepper", "white peppercorn", "whole clove", "wild garlic leaf",
  "yuca", "zapallo macre", "anise seed", "baking powder", "bay leaf",
  "bicarbonate of soda", "black pepper", "black peppercorn", "chicha morada", "strong coffee", "very ripe banana", "avocado"
] as const;

/**
 * Texture is a property of the finished dish, not only of what goes into it.
 * An oatcake is hard; oatmeal is not. Deriving it from the ingredient list
 * alone said a shortbread finger was suitable for someone who cannot chew.
 *
 * These are the dishes that come out of the kitchen hard, crisp, chewy or on
 * a stick. A judgement call per dish, listed so it can be argued with.
 */
export const HARD_TEXTURE_DISHES: number[] = [
  1, 3, 7, 12, 13, 14, 16, 18, 20, 21, 22, 25, 33, 38, 40, 42, 49, 52, 53,
  59, 62, 66, 67, 69, 71, 72, 76, 77, 78, 79, 80, 81, 82, 95, 96, 99, 103,
  105, 107, 108, 115, 116, 120, 123, 124, 125, 136, 148
];

/**
 * Dishes a child will not eat or should not be handed, beyond what heat and
 * alcohol already rule out: anything on a skewer or stick, anything with a
 * bone, and offal, which is a hard sell at eight years old.
 */
export const NOT_FOR_CHILDREN: number[] = [
  1, 13, 16, 21, 26, 41, 42, 43, 44, 74, 118, 123, 124, 128, 133, 135
];

/**
 * FODMAPs: short-chain carbohydrates that a sensitive gut cannot absorb.
 *
 * This is a real ingredient-level fact, unlike most of what people call an
 * intolerance. The big offenders in this matrix are onion and garlic, which
 * are in the aderezo under half the Peruvian dishes - so the low-FODMAP list
 * is short by construction, and that is the honest answer rather than a
 * flattering one.
 *
 * Portion matters and this cannot model it: a low-FODMAP diet allows small
 * amounts of many of these. Treat it as a shortlist to discuss with the
 * guest, not as a clinical instrument.
 */
export const HIGH_FODMAP = [
  "onion", "red onion", "spring onion", "shallot", "garlic clove", "head garlic",
  "leek", "wild garlic leaf", "plain flour", "flour", "strong white flour",
  "self-raising flour", "wholemeal flour", "rye flour", "breadcrumb", "panko",
  "fine rusk", "morning roll", "small soft roll", "crusty roll", "baguette",
  "sourdough", "dense rye bread", "rye bread", "stale bread", "stale white bread",
  "flatbread", "brioche loaf", "small brioche", "day-old butterie", "plain sponge",
  "milk", "whole milk", "warm milk", "evaporated milk", "condensed milk",
  "manjar blanco", "queso fresco", "cream cheese", "buttermilk",
  "bean", "dried split pea", "apple", "manzana israel", "pineapple", "prune",
  "dried fig", "raisin", "sultana", "currant", "raisin and currant", "date",
  "mushroom", "cauliflower", "honey", "golden syrup", "chirimoya", "quince",
  "aguaymanto", "dried aguaymanto", "camote", "yuca", "choclo cob", "choclo kernel",
  "mango chutney", "tomato ketchup", "beetroot"
];

/**
 * Carbohydrate-dense ingredients, for the keto and low-carb question.
 *
 * A caterer cannot count net carbs off a recipe - portion sizes and
 * substitutions move it too far - so this flags the dishes BUILT on carbs
 * rather than claiming a gram figure. It is a filter, not a nutrition panel.
 */
export const HIGH_CARB = [
  "plain flour", "flour", "strong white flour", "self-raising flour",
  "wholemeal flour", "rye flour", "rice flour", "quinoa flour", "cornflour",
  "fine semolina", "panko", "breadcrumb", "fine rusk", "soda cracker",
  "pinhead oat", "pinhead oatmeal", "rolled oat", "medium oatmeal", "oatmeal",
  "oat", "extra oat", "toasted oat", "quinoa", "tri-colour quinoa", "kiwicha",
  "long-grain rice", "maiz morado", "papa amarilla", "papa nativa", "papa blanca",
  "camote", "yuca", "choclo cob", "choclo kernel", "green plantain",
  "sugar", "caster sugar", "granulated sugar", "icing sugar", "soft brown sugar",
  "demerara", "demerara sugar", "chancaca", "algarrobina", "honey", "golden syrup",
  "condensed milk", "manjar blanco", "orange marmalade", "bitter orange marmalade",
  "lucuma marmalade", "lucuma pulp", "aguaymanto preserve", "maracuya curd",
  "morning roll", "small soft roll", "crusty roll", "baguette", "sourdough",
  "dense rye bread", "rye bread", "stale bread", "stale white bread", "flatbread",
  "brioche loaf", "small brioche", "day-old butterie", "plain sponge", "oatcake",
  "tattie scone", "rye and kiwicha crispbread", "thin crepe", "puff pastry", "puff",
  "shortcrust pastry", "sweet shortcrust pastry", "cacao shortcrust pastry",
  "filo pastry", "empanada dough", "shortbread base", "wholemeal shortbread base",
  "wonton wrapper", "bean", "dried split pea", "raisin", "sultana", "currant",
  "raisin and currant", "date", "dried fig", "prune", "glace cherry", "mixed peel",
  "70% dark chocolate", "70% peruvian dark chocolate", "peruvian dark chocolate",
  "irn bru", "chicha morada", "chicha de jora", "very ripe banana"
];
