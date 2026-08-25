/**
 * What to ask for at the market.
 *
 * This is not a dictionary translation. It is what a Lima stallholder
 * actually calls the thing, which is a different question and occasionally a
 * different answer:
 *
 *   "turnip" is nabo, but what you will be handed for a clapshot is closer to
 *   zapallo loche or nabo criollo depending on the stall.
 *   "spring onion" is cebolla china, never "cebolla de primavera".
 *   "swede" does not exist here at all, which is why the matrix does not use it.
 *   "caster sugar" is azúcar blanca fina — asking for "caster" gets a blank look.
 *
 * Where a cut of meat is involved the Peruvian butcher's name is given, not a
 * literal one: asking for "beef shin" gets you nowhere; asking for osobuco
 * gets you the right thing.
 *
 * UNVERIFIED at the stall. Walk Surquillo N.1 once with this list and correct
 * whatever gets you the wrong item.
 */
export const ES_INGREDIENTS: Record<string, string> = {
  // ---- dairy, eggs, fat ----
  "butter": "mantequilla", "cold butter": "mantequilla fría",
  "milk": "leche", "whole milk": "leche entera", "warm milk": "leche tibia",
  "cream": "crema de leche", "double cream": "crema de leche espesa",
  "soured cream": "crema agria", "creme fraiche": "crema fresca",
  "thick yoghurt": "yogur griego", "greek-style yoghurt": "yogur griego",
  "buttermilk": "suero de leche", "evaporated milk": "leche evaporada",
  "condensed milk": "leche condensada", "manjar blanco": "manjar blanco",
  "cream cheese": "queso crema", "queso paria": "queso paria",
  "queso fresco": "queso fresco", "mature cheddar": "queso cheddar maduro",
  "egg": "huevos", "egg yolk": "yemas de huevo", "egg white": "claras de huevo",
  "quail egg": "huevos de codorniz",
  "lard": "manteca de cerdo", "beef dripping": "grasa de res", "suet": "sebo de res",
  "olive oil": "aceite de oliva", "good olive oil": "aceite de oliva extra virgen",
  "vegetable oil": "aceite vegetal", "sunflower oil": "aceite de girasol",
  "frying oil": "aceite para freír", "oil": "aceite",
  "coconut oil": "aceite de coco", "coconut milk": "leche de coco",

  // ---- flour and grain ----
  "plain flour": "harina sin preparar", "flour": "harina",
  "strong white flour": "harina de fuerza", "self-raising flour": "harina preparada",
  "wholemeal flour": "harina integral", "rye flour": "harina de centeno",
  "rice flour": "harina de arroz", "quinoa flour": "harina de quinua",
  "cornflour": "chuño / maicena", "fine semolina": "sémola fina",
  "pinhead oat": "avena entera cortada", "pinhead oatmeal": "avena entera cortada",
  "rolled oat": "avena en hojuelas", "medium oatmeal": "avena molida media",
  "oatmeal": "avena molida", "oat": "avena", "extra oat": "avena adicional",
  "toasted oat": "avena tostada", "quinoa": "quinua",
  "tri-colour quinoa": "quinua tricolor", "kiwicha": "kiwicha",
  "long-grain rice": "arroz de grano largo", "breadcrumb": "pan molido",
  "panko": "panko", "fine rusk": "pan rallado fino", "soda cracker": "galleta de soda",
  "mixed seed": "semillas mixtas", "dried yeast": "levadura seca",
  "fresh yeast": "levadura fresca", "baking powder": "polvo de hornear",
  "bicarbonate of soda": "bicarbonato de sodio", "gelatine": "gelatina sin sabor",
  "gelatine leaf": "láminas de gelatina", "maiz morado": "maíz morado",

  // ---- sugar and sweet ----
  "sugar": "azúcar", "caster sugar": "azúcar blanca fina",
  "granulated sugar": "azúcar granulada", "icing sugar": "azúcar impalpable",
  "soft brown sugar": "azúcar rubia", "demerara": "azúcar demerara",
  "demerara sugar": "azúcar demerara", "chancaca": "chancaca",
  "algarrobina": "algarrobina", "honey": "miel de abeja",
  "golden syrup": "jarabe dorado", "orange marmalade": "mermelada de naranja",
  "bitter orange marmalade": "mermelada de naranja amarga",
  "lucuma marmalade": "mermelada de lúcuma", "aguaymanto preserve": "mermelada de aguaymanto",
  "maracuya curd": "crema de maracuyá", "cocoa powder": "cacao en polvo",
  "70% dark chocolate": "chocolate amargo 70%",
  "70% peruvian dark chocolate": "chocolate peruano amargo 70%",
  "peruvian dark chocolate": "chocolate peruano amargo",
  "cacao nib": "nibs de cacao", "vanilla": "esencia de vainilla",
  "vanilla pod": "vainas de vainilla", "glace cherry": "guindas confitadas",
  "mixed peel": "cáscara confitada", "desiccated coconut": "coco rallado",
  "freeze-dried strawberry powder": "fresa liofilizada en polvo",
  "maca powder": "maca en polvo",

  // ---- fruit ----
  "lemon": "limón (o limón sutil)", "lime": "limón",
  "lime juice": "jugo de limón", "orange": "naranja",
  "naranja agria": "naranja agria", "apple": "manzana",
  "manzana israel": "manzana israel", "lucuma pulp": "pulpa de lúcuma",
  "aguaymanto": "aguaymanto", "dried aguaymanto": "aguaymanto deshidratado",
  "chirimoya": "chirimoya", "maracuya juice": "jugo de maracuyá",
  "pineapple": "piña", "quince": "membrillo", "raisin": "pasas",
  "currant": "pasas de corinto", "sultana": "pasas rubias",
  "raisin and currant": "pasas surtidas", "prune": "ciruelas secas",
  "date": "dátiles", "dried fig": "higos secos", "raspberrie": "frambuesas",
  "green plantain": "plátano verde", "very ripe banana": "plátano de seda muy maduro",

  // ---- nuts ----
  "pecan": "pecanas", "almond": "almendras", "ground almond": "almendra molida",
  "toasted almond": "almendras tostadas", "toasted flaked almond": "almendras laminadas tostadas",
  "toasted quinoa and walnut": "quinua tostada y nueces",

  // ---- vegetables ----
  "onion": "cebolla roja", "red onion": "cebolla roja",
  "spring onion": "cebolla china", "shallot": "echalote",
  "garlic clove": "dientes de ajo", "head garlic": "cabeza de ajo",
  "leek": "poro", "carrot": "zanahoria", "turnip": "nabo",
  "tomato": "tomate", "ripe tomato": "tomate maduro",
  "tomato paste": "pasta de tomate", "tomato ketchup": "kétchup",
  "cucumber": "pepino", "papa amarilla": "papa amarilla",
  "papa nativa": "papa nativa", "papa blanca": "papa blanca",
  "camote": "camote", "yuca": "yuca", "zapallo macre": "zapallo macre",
  "choclo cob": "choclo en mazorca", "choclo kernel": "granos de choclo",
  "beetroot": "betarraga", "kale": "kale", "spinach": "espinaca",
  "large chard leaf": "hojas grandes de acelga", "red cabbage": "col morada",
  "large white cabbage": "col blanca grande", "mushroom": "champiñones",
  "aubergine": "berenjena", "red pepper": "pimiento rojo",
  "red and green pepper": "pimiento rojo y verde",
  "little gem lettuce": "lechuga baby", "berro": "berros",
  "ica asparagus": "espárrago de Ica", "bean": "frejoles",
  "dried split pea": "arvejas partidas", "wild garlic leaf": "hoja de ajo silvestre",
  "radishe": "rabanitos", "cucumber and tomato": "pepino y tomate",
  "turnip and carrot": "nabo y zanahoria",
  "turnip and zapallo loche": "nabo y zapallo loche",

  // ---- chillies and pastes ----
  "aji amarillo": "ají amarillo", "extra aji amarillo": "ají amarillo adicional",
  "aji amarillo paste": "pasta de ají amarillo", "aji panca paste": "pasta de ají panca",
  "aji limo": "ají limo", "pickled aji limo": "ají limo encurtido",
  "rocoto": "rocoto", "large rocoto": "rocotos grandes",
  "choricero": "ají choricero", "cayenne": "cayena",

  // ---- herbs and spices ----
  "dill": "eneldo", "parsley": "perejil", "flat parsley": "perejil liso",
  "coriander": "culantro", "culantro": "culantro", "chive": "cebollín",
  "huacatay": "huacatay", "muna": "muña", "hierbabuena": "hierbabuena",
  "rosemary": "romero", "bay leaf": "hojas de laurel",
  "dried oregano": "orégano seco", "salt": "sal", "fine salt": "sal fina",
  "coarse salt": "sal gruesa", "flaked salt": "sal en escamas",
  "mara salt": "sal de Maras", "mara pink salt": "sal rosada de Maras",
  "black pepper": "pimienta negra", "black peppercorn": "pimienta negra en grano",
  "white pepper": "pimienta blanca", "ground white pepper": "pimienta blanca molida",
  "white peppercorn": "pimienta blanca en grano", "cumin": "comino",
  "ground cumin": "comino molido", "ground coriander": "culantro molido",
  "cinnamon": "canela", "ground cinnamon": "canela molida",
  "cinnamon stick": "canela en rama", "mace": "macis", "ground mace": "macis molido",
  "nutmeg": "nuez moscada", "ginger": "kion", "ground ginger": "kion molido",
  "ground allspice": "pimienta de Jamaica", "ground cardamom": "cardamomo molido",
  "clove": "clavo de olor", "whole clove": "clavo de olor entero",
  "star anise": "anís estrella", "anise seed": "anís en grano",
  "smoked paprika": "pimentón ahumado", "mixed spice": "mezcla de especias dulces",
  "garam masala": "garam masala", "mild curry powder": "curry suave",
  "turmeric": "cúrcuma", "caper": "alcaparras",

  // ---- liquids and condiments ----
  "water": "agua", "boiling water": "agua hirviendo",
  "warm water": "agua tibia", "cold water": "agua fría",
  "water and milk": "agua y leche", "warm milk and water": "leche y agua tibias",
  "red wine vinegar": "vinagre de vino tinto", "white wine vinegar": "vinagre de vino blanco",
  "cider vinegar": "vinagre de manzana", "white vinegar": "vinagre blanco",
  "vinegar": "vinagre", "sherry": "jerez",
  "wholegrain mustard": "mostaza en grano", "dijon mustard": "mostaza Dijon",
  "mayonnaise": "mayonesa", "sillao": "sillao", "soy sauce": "sillao",
  "worcestershire sauce": "salsa inglesa", "brown sauce": "salsa HP / salsa marrón",
  "mango chutney": "chutney de mango",
  "good anchovy fillet in oil": "filetes de anchoa en aceite",
  "hot strong black tea": "té negro cargado", "strong coffee": "café cargado",
  "beef stock": "caldo de res", "chicken stock": "caldo de pollo",
  "lamb stock": "caldo de cordero", "fish stock": "caldo de pescado",
  "stock": "caldo", "gravy": "salsa de asado",
  "chicha morada": "chicha morada", "chicha de jora": "chicha de jora",

  // ---- alcohol ----
  "whisky": "whisky", "single malt whisky": "whisky de malta",
  "pisco": "pisco", "brandy": "brandy", "red wine": "vino tinto",
  "stout": "cerveza negra", "cerveza negra": "cerveza negra",
  "very cold beer": "cerveza bien fría", "irn bru": "Irn Bru (importado)",

  // ---- meat, with the butcher's name ----
  "lamb": "cordero", "lamb leg": "pierna de cordero",
  "lamb shoulder": "paleta de cordero", "lamb neck": "cuello de cordero",
  "lamb mince": "cordero molido", "lamb offal": "menudencia de cordero",
  "beef": "carne de res", "beef mince": "carne molida de res",
  "beef shin": "osobuco", "asado de tira": "asado de tira",
  "beef sirloin": "bistec de cadera", "lomo fino": "lomo fino",
  "beef tenderloin": "lomo fino", "beef heart": "corazón de res",
  "cooked beef": "carne de res cocida", "beef and pork": "res y cerdo molidos",
  "pork belly": "panceta de cerdo", "pork leg": "pierna de cerdo",
  "pork shoulder": "paleta de cerdo", "pork mince": "cerdo molido",
  "bacon": "tocino", "streaky bacon": "tocino entreverado",
  "artisanal ham": "jamón del país", "morcilla": "morcilla",
  "artisanal morcilla": "morcilla artesanal",
  "artisanal pork sausage": "chorizo artesanal de cerdo",
  "artisanal chorizo-style sausage": "chorizo artesanal",
  "sausage meat": "carne para embutido",
  "lorne sausage square": "salchicha Lorne (cuadrada)",
  "haggis mix": "mezcla de haggis",
  "whole chicken": "pollo entero", "chicken breast": "pechuga de pollo",
  "chicken thigh": "pierna y encuentro de pollo",
  "duck breast": "pechuga de pato", "whole duck": "pato entero",

  // ---- fish, with the market's name ----
  "trout fillet": "filete de trucha", "whole trout": "trucha entera",
  "hot-smoked trout": "trucha ahumada en caliente",
  "hot-smoked andean trout": "trucha andina ahumada en caliente",
  "cured": "pescado curado", "paiche": "paiche",
  "smoked paiche": "paiche ahumado", "hot-smoked paiche": "paiche ahumado en caliente",
  "corvina": "corvina", "corvina fillet": "filete de corvina",
  "smoked corvina": "corvina ahumada", "chita": "chita",
  "bonito loin": "lomo de bonito", "baby squid": "calamarcitos",
  "langostino": "langostinos", "fish": "pescado",
  "extra smoked fish": "pescado ahumado adicional",

  // ---- bought-in bakery ----
  "morning roll": "pan francés / pan de yema",
  "small soft roll": "pan de molde pequeño", "crusty roll": "pan crocante",
  "baguette": "baguette", "sourdough": "pan de masa madre",
  "dense rye bread": "pan de centeno denso", "rye bread": "pan de centeno",
  "brioche loaf": "pan brioche", "small brioche": "brioche pequeño",
  "stale bread": "pan del día anterior", "stale white bread": "pan blanco del día anterior",
  "day-old butterie": "buttery del día anterior", "flatbread": "pan pita / pan plano",
  "plain sponge": "bizcocho simple", "oatcake": "galleta de avena",
  "tattie scone": "scone de papa", "rye and kiwicha crispbread": "pan crocante de centeno y kiwicha",
  "thin crepe": "crepes finos", "puff pastry": "masa de hojaldre", "puff": "hojaldre",
  "shortcrust pastry": "masa quebrada", "sweet shortcrust pastry": "masa quebrada dulce",
  "cacao shortcrust pastry": "masa quebrada de cacao",
  "filo pastry": "masa filo", "empanada dough": "masa para empanadas",
  "tacna olive": "aceitunas de Tacna",

  // ---- in-house preparations ----
  "salsa criolla": "salsa criolla", "huacatay aioli": "alioli de huacatay",
  "tzatziki": "tzatziki", "tzatziki con rocoto": "tzatziki con rocoto",
  "melitzanosalata": "melitzanosalata", "dolmade": "dolmades",
  "keftede": "keftedes", "paiche gravlax": "gravlax de paiche",
  "hovmastarsa": "salsa hovmästarsås", "cullen skink chupe": "chupe Cullen skink",
  "dill and papa nativa salad": "ensalada de papa nativa con eneldo",
  "rocoto piccalilli": "piccalilli de rocoto",
  "rocoto and betarraga pickle": "encurtido de rocoto y betarraga",
  "shortbread base": "base de shortbread",
  "wholemeal shortbread base": "base de shortbread integral",
  "leftover stovie": "stovies del día anterior",
  "breadcrumb in 150 ml milk": "pan molido remojado en leche",
  "egg and caster sugar": "huevo y azúcar fina",
  "egg and pearl sugar": "huevo y azúcar perlada",

  // ---- not food ----
  "wooden skewer": "palitos de brocheta", "bamboo skewer": "palitos de bambú",
  "cocktail stick": "palitos de cóctel",
  "large cloth and flour for dusting": "paño grande y harina para espolvorear"
};
