/**
 * Spanish.
 *
 * The buyers are Peruvian, so Spanish is the default and English is the
 * toggle - not the other way round. Written in Peruvian Spanish (ustedes is
 * wrong here; so is vosotros), and priced in soles throughout.
 *
 * Two things are deliberately NOT translated:
 *
 *   Dish names. "Haggis Bonbons" is the product. Translating it to
 *   "Bombones de Haggis" would sell a different thing, and the whole pitch
 *   rests on the Scottish name landing first. Where a dish already carries a
 *   Spanish name it keeps it.
 *
 *   Supplier names. Surquillo N.1 is Surquillo N.1.
 *
 * Anything absent from this table renders in English and is visible as such,
 * which is how the coverage figure in the app is honest rather than assumed.
 */
export const ES: Record<string, string> = {
  // ---- navigation and chrome ----
  "Home": "Inicio",
  "The evening": "La noche",
  "Find dishes": "Buscar platos",
  "The matrix": "La matriz",
  "Season": "Temporada",
  "Compare": "Comparar",
  "Ingredients": "Insumos",
  "Recipes": "Recetas",
  "Packages": "Paquetes",
  "Build a menu": "Armar el menú",
  "Scottish-Peruvian catering · Lima": "Catering escocés-peruano · Lima",
  "Aye Si Cena · Lima · Scottish-Peruvian catering":
    "Aye Si Cena · Lima · catering escocés-peruano",

  // ---- home ----
  "is Scottish for yes.": "significa sí en escocés.",
  "is Spanish for yes. Say it aloud and it means something else again. The full matrix, taking Glasgow technique through the Lima pantry.":
    "significa sí en español. Dígalo en voz alta y significa otra cosa más. La matriz completa: técnica de Glasgow con despensa limeña.",
  "Build a menu & see the price": "Armar un menú y ver el precio",
  "Browse the whole matrix": "Ver la matriz completa",
  "Three ways to book": "Tres formas de contratar",
  "Same kitchen, three levels of service. The box tier needs no staff, no hired china and no liquor licence — which is why it is the fastest to sell.":
    "La misma cocina, tres niveles de servicio. El nivel de cajas no necesita personal, ni vajilla alquilada, ni licencia de licores — por eso es el más rápido de vender.",
  "The signatures": "Los emblemáticos",
  "The dishes that explain the whole idea in one bite.":
    "Los platos que explican toda la idea en un bocado.",
  "All prices in soles, exclusive of IGV. Costs are planning estimates modelled to a 25–30% food cost, not verified supplier quotes.":
    "Todos los precios en soles, sin IGV. Los costos son estimados de planificación calculados a 25–30% de costo de insumos, no cotizaciones verificadas de proveedores.",

  // ---- tiers ----
  "Scran Boxes": "Cajas Scran",
  "Two Shores Buffet": "Bufé Dos Orillas",
  "The Aye Si Plated Experience": "La Experiencia Aye Si en Mesa",
  "Menaje": "Menaje",
  "not required": "no se requiere",
  "Floor staff": "Personal de salón",
  "none": "ninguno",
  "Transport": "Transporte",
  "Minimum 8 guests · 8 bites per guest": "Mínimo 8 invitados · 8 bocados por invitado",
  "Minimum 20 guests · 6 bites per guest": "Mínimo 20 invitados · 6 bocados por invitado",

  // ---- categories ----
  "Canapés & bites": "Canapés y bocados",
  "Mains": "Fondos",
  "Bowls": "Bowls",
  "Sides & breads": "Guarniciones y panes",
  "Breakfast": "Desayuno",
  "Bakery": "Panadería y pastelería",
  "Desserts": "Postres",

  // ---- formats ----
  "Drop-off": "Entrega",
  "Buffet": "Bufé",
  "Plated": "En mesa",
  "Live station": "Estación en vivo",

  // ---- the evening ----
  "Point at the part of the night you are trying to fill. The bar under each moment shows how much of the matrix serves it — which is also where the gaps are.":
    "Señale la parte de la noche que quiere llenar. La barra bajo cada momento muestra cuánto de la matriz le sirve — que es también donde están los vacíos.",
  "First fifteen minutes. One hand holds a drink, so everything here is one-bite and needs no cutlery.":
    "Los primeros quince minutos. Una mano sostiene la copa, así que todo aquí es de un bocado y no necesita cubiertos.",

  // ---- find ----
  "Start from the event or start from the palate. Pick what you are planning and the matrix narrows to what actually works for it — then filter by flavour to land on a shortlist.":
    "Empiece por el evento o por el paladar. Elija lo que está planificando y la matriz se reduce a lo que realmente funciona — después filtre por sabor para llegar a una lista corta.",
  "What are you planning?": "¿Qué está planificando?",
  "The palate compass": "La brújula de sabores",
  "Each wedge is a flavour the matrix carries, and its depth is how much of it. Tap to steer.":
    "Cada gajo es un sabor que la matriz tiene, y su profundidad es cuánto. Toque para orientarse.",
  "Service format": "Formato de servicio",
  "no flavour selected — showing everything": "ningún sabor elegido — mostrando todo",
  "one flavour selected": "un sabor elegido",
  "clear filters": "limpiar filtros",
  "Corporate lunch": "Almuerzo corporativo",
  "Drop-off boxes for an office. No staff, no hired china, no licence — the fastest thing you can sell.":
    "Cajas para oficina. Sin personal, sin vajilla alquilada, sin licencia — lo más rápido de vender.",
  "Cocktail hour": "Hora del cóctel",
  "Passed bites, priced per guest at 6–8 pieces, never per piece.":
    "Bocados pasados, cobrados por invitado a 6–8 piezas, nunca por pieza.",
  "Needs a chef on site": "Requiere chef en el lugar",
  "Plated and live-station dishes — the ones that cannot be dropped off. This is what makes an event feel catered rather than delivered.":
    "Platos en mesa y de estación en vivo — los que no se pueden solo entregar. Esto es lo que hace que un evento se sienta atendido y no repartido.",
  "Afternoon tea": "Té de la tarde",
  "The Scottish bakery window, rebuilt on Peruvian fruit. No licence needed.":
    "La vitrina de pastelería escocesa, rehecha con fruta peruana. No necesita licencia.",
  "Breakfast & morning": "Desayuno y mañana",
  "Early starts for conferences and shoots. Rolls, scones, porridge, butteries.":
    "Arranques temprano para conferencias y rodajes. Panes, scones, avena, butteries.",
  "Tasting box": "Caja de degustación",
  "The lead-generation product. Bakery that travels, boxes, and survives a hot van.":
    "El producto que genera clientes. Pastelería que viaja, se encaja y sobrevive una van caliente.",
  "Cooked in front of the guest. The theatre tier — griddles, plancha, fried-to-order. Price the show, not the ingredients.":
    "Cocinado frente al invitado. El nivel espectáculo — planchas, freidora al momento. Cobre el show, no los insumos.",
  "No liquor licence yet": "Aún sin licencia de licores",
  "Everything sellable before the giro especial clears. Cooking with alcohol is fine; selling drinks is not.":
    "Todo lo vendible antes de que salga el giro especial. Cocinar con alcohol está bien; vender tragos no.",
  "Vegetarian menu": "Menú vegetariano",
  "A full spread without meat or fish, not an afterthought side.":
    "Una carta completa sin carne ni pescado, no una guarnición de último momento.",
  "Scottish heritage": "Herencia escocesa",
  "The Glasgow core of the matrix — the dishes the brand thesis rests on.":
    "El núcleo glasgowense de la matriz — los platos sobre los que descansa la marca.",
  "Beyond Britain": "Más allá de Gran Bretaña",
  "Greek, Nordic and Basque lines. Where the menu widens past the Scottish spine.":
    "Líneas griega, nórdica y vasca. Donde la carta se abre más allá de la columna escocesa.",

  // ---- matrix ----
  "Every dish with its lineage, its food cost and its menu value. The":
    "Cada plato con su linaje, su costo de insumos y su valor de carta. La mitad",
  "half is the British original; the": "morada es el original británico; la mitad",
  "half is what Peru does to it.": "dorada es lo que el Perú le hace.",
  "FC% is food cost as a share of menu value. Above 30% is flagged — it is eating margin.":
    "CI% es el costo de insumos como porcentaje del valor de carta. Sobre 30% se marca — se está comiendo el margen.",
  "From recipe": "Según receta",
  "Est. cost": "Costo est.",
  "Menu value": "Valor de carta",
  "Source": "Proveedor",
  "Dish": "Plato",
  "Cost": "Costo",
  "Ingredient": "Insumo",
  "Buy": "Comprar",
  "For": "Para",
  "is what the dish prices out at when every ingredient line is costed and divided by the yield. Where that disagrees with the estimate by more than 40% the cell is flagged. The bakery is where it disagrees most: sugar and flour are cheap and the estimates assumed otherwise. Both figures are unverified until a market run.":
    "es lo que cuesta el plato cuando cada línea de insumos se cotiza y se divide entre el rendimiento. Donde eso difiere del estimado en más de 40%, la celda se marca. La pastelería es donde más difiere: el azúcar y la harina son baratos y los estimados supusieron lo contrario. Ambas cifras están sin verificar hasta hacer una compra de mercado.",

  // ---- recipes ----
  "How each dish is actually made, at catering scale. Every one carries a make-ahead plan and an honest hold time — what a dish will and will not survive is a scheduling fact, not a detail.":
    "Cómo se hace realmente cada plato, a escala de catering. Cada uno lleva un plan de preparación anticipada y un tiempo de espera honesto — lo que un plato aguanta y lo que no es un hecho de programación, no un detalle.",
  "Course": "Tiempo",
  "Search": "Buscar",
  "dish, ingredient or technique": "plato, insumo o técnica",
  "Method": "Preparación",
  "Make ahead": "Se adelanta",
  "Holds": "Aguanta",
  "At scale": "A escala",

  // ---- season ----
  "What the market has": "Lo que hay en el mercado",
  "You buy all year, so the menu moves with the market. Pick a month to see what is worth buying, what is out of window, and which dishes you cannot properly build until it comes back.":
    "Usted compra todo el año, así que la carta se mueve con el mercado. Elija un mes para ver qué conviene comprar, qué está fuera de temporada y qué platos no se pueden armar bien hasta que vuelva.",
  "Month": "Mes",

  // ---- compare ----
  "What the money buys": "Qué compra el dinero",
  "The same event at all three tiers, side by side. Set the head count and the difference between a boxed lunch and a plated dinner becomes a number.":
    "El mismo evento en los tres niveles, lado a lado. Fije el número de invitados y la diferencia entre un almuerzo en caja y una cena en mesa se vuelve un número.",
  "Guests": "Invitados",

  // ---- graph ----
  "What unlocks what": "Qué desbloquea qué",
  "Every ingredient sized by how much menu it opens up. What belongs on a standing order, and which dishes carry an ingredient nothing else uses.":
    "Cada insumo dimensionado por cuánta carta abre. Qué va en un pedido fijo, y qué platos cargan un insumo que nada más usa.",
  "drag to move · scroll to zoom · click a node for its dishes":
    "arrastre para mover · scroll para acercar · clic en un nodo para ver sus platos",
  "seasonal": "de temporada",
  "year-round": "todo el año",
  "Travels with": "Va con",
  "Used in": "Se usa en",
  "Buy these first": "Compre esto primero",

  // ---- packages ----
  "Three tiers, and exactly what each carries in per-event cost. These figures drive the builder.":
    "Tres niveles, y exactamente qué carga cada uno en costo por evento. Estas cifras alimentan el armador.",
  "Rates behind the maths": "Tarifas detrás del cálculo",

  // ---- builder ----
  "Choose a tier, set the head count, pick dishes. The price updates as you go — including menaje, staff, transport and IGV, so the number at the bottom is what the client actually pays.":
    "Elija un nivel, fije el número de invitados, escoja platos. El precio se actualiza sobre la marcha — incluyendo menaje, personal, transporte e IGV, así que el número final es lo que el cliente paga.",
  "Service tier": "Nivel de servicio",
  "Where is it?": "¿Dónde es?",
  "District": "Distrito",
  "Venue": "Local",
  "Loading in at rush hour": "Carga en hora punta",
  "Your quote": "Su cotización",
  "Menu, per guest": "Carta, por invitado",
  "Net, per guest": "Neto, por invitado",
  "IGV at 18%": "IGV 18%",
  "Client pays": "El cliente paga",
  "What you keep": "Lo que usted se queda",
  "Run sheet": "Cronograma",
  "service": "servicio",
  "Menaje hire": "Alquiler de menaje",
  "Packaging": "Empaque",
  "The shop": "La compra",
  "Every recipe scaled to this head count and added up. Whole batches only — half a batch of shortbread is a different biscuit — so some dishes make more than the event needs.":
    "Cada receta escalada a este número de invitados y sumada. Solo tandas completas — media tanda de shortbread es otra galleta — así que algunos platos rinden más de lo que el evento necesita.",
  "Total ingredients": "Total de insumos",
  "Batches to cook": "Tandas a cocinar",
  "Needed": "Se necesita",
  "Batches": "Tandas",
  "Makes": "Rinde",
  "Blocker": "Bloqueo",
  "Warning": "Advertencia",
  "minimum": "mínimo",
  "for this tier": "para este nivel",
  "Pick at least one dish to see the price.": "Elija al menos un plato para ver el precio.",

  // ---- dish descriptions ----
  // Keyed on the English source so the dictionary needs no dish ids and
  // stays a straight lookup. Dish NAMES are absent on purpose: "Haggis
  // Bonbons" is the product, and translating it sells a different thing.
  "Crumbed and fried; aji panca in the breadcrumb, huacatay aioli. Offal is familiar to Peruvian palates - this is the least intimidating way in.":
    "Apanado y frito; ají panca en el pan molido, alioli de huacatay. Las vísceras le son familiares al paladar peruano — esta es la entrada menos intimidante.",
  "Peruvian empanada dough around morcilla reworked with oats, mace and white pepper; rocoto-apple chutney.":
    "Masa de empanada peruana rellena de morcilla rehecha con avena, macis y pimienta blanca; chutney de rocoto y manzana.",
  "Highland oatcake topped with Andean smoked trout and a crowdie-style fresh cheese.":
    "Galleta de avena de las Highlands con trucha andina ahumada y un queso fresco al estilo crowdie.",
  "Shortcrust hand pie; local beef mince lifted with aji amarillo and native onion.":
    "Empanada de masa quebrada; carne molida local levantada con ají amarillo y cebolla criolla.",
  "Hot-water crust filled with spiced cordero and aji panca instead of mace-only mutton.":
    "Masa de agua caliente rellena de cordero especiado con ají panca, en vez del carnero solo con macis.",
  "Puff pastry, haggis-spiced filling, glazed with a chancaca brown sauce.":
    "Hojaldre, relleno con especias de haggis, glaseado con una salsa marrón de chancaca.",
  "The No.1-ranked Scottish dish as a bite: smoked paiche and native yellow potato, crumbed.":
    "El plato escocés N.º1 hecho bocado: paiche ahumado y papa amarilla, apanados.",
  "Square sausage in a mini pan francés with salsa criolla in place of brown sauce.":
    "Salchicha cuadrada en pan francés con salsa criolla en lugar de brown sauce.",
  "Griddled native-yellow-potato scone as the base, morcilla and a quail egg on top.":
    "Scone de papa amarilla a la plancha como base, morcilla y huevo de codorniz encima.",
  "Cold-set beef shin terrine on toast with aji limo pickle. Cheap cut, zero service risk.":
    "Terrina fría de osobuco sobre tostada con encurtido de ají limo. Corte barato, riesgo cero en servicio.",
  "Trout cured in whisky, sugar and dill; aguaymanto compote to cut the fat.":
    "Trucha curada en whisky, azúcar y eneldo; compota de aguaymanto para cortar la grasa.",
  "Scotland's fresh cheese made locally from queso fresco curd; aguaymanto chutney.":
    "El queso fresco de Escocia hecho aquí con cuajada de queso fresco; chutney de aguaymanto.",
  "Hot-smoked Amazonian paiche whipped with butter and lemon, served with oatcakes.":
    "Paiche amazónico ahumado en caliente, batido con mantequilla y limón, con galletas de avena.",
  "Slow-stewed potato and beef rolled, crumbed and fried; huacatay cream.":
    "Guiso lento de papa y carne, enrollado, apanado y frito; crema de huacatay.",
  "Chicken and leek in a savoury shell; choclo replaces the traditional prunes for sweetness.":
    "Pollo y puerro en masa salada; el choclo reemplaza a las ciruelas tradicionales.",
  "Peruvian base, Scottish move: beef heart skewer glazed with whisky and chancaca instead of the usual panca-vinegar. The offal is the part Lima already knows.":
    "Base peruana, giro escocés: anticucho de corazón glaseado con whisky y chancaca en vez del panca-vinagre de siempre. La víscera es la parte que Lima ya conoce.",
  "Peruvian base, Scottish move: mini bun with slow-roast pork, but black pudding replaces the camote slice.":
    "Base peruana, giro escocés: pan con chicharrón, pero la morcilla reemplaza la rodaja de camote.",
  "Marie Rose prawns on a crisp plantain chifle instead of a lettuce cup.":
    "Langostinos en salsa Marie Rose sobre chifle crocante en vez de hoja de lechuga.",
  "Bacon-wrapped date; local higo and a pecan replace the almond stuffing.":
    "Dátil envuelto en tocino; higo local y pecana reemplazan el relleno de almendra.",
  "Potato tortilla square topped with morcilla and piquillo; native potato base.":
    "Cuadrado de tortilla de papa con morcilla y piquillo; base de papa nativa.",
  "The classic olive-anchovy-guindilla skewer with Tacna olive and aji limo.":
    "El pincho clásico de aceituna, anchoa y guindilla, con aceituna de Tacna y ají limo.",
  "Filo cigars of spinach with queso paria standing in for feta.":
    "Cigarros de masa filo con espinaca y queso paria en lugar de feta.",
  "Lamb meatballs where huacatay does the work of mint; yoghurt-rocoto dip.":
    "Albóndigas de cordero donde el huacatay hace el trabajo de la menta; dip de yogur y rocoto.",
  "Dark rye squares, cured trout, pickled red onion, dill. Holds cold for hours.":
    "Cuadrados de centeno oscuro, trucha curada, cebolla encurtida, eneldo. Aguanta frío por horas.",
  "Quail egg wrapped in morcilla-spiked sausage meat, crumbed and fried.":
    "Huevo de codorniz envuelto en carne con morcilla, apanado y frito.",
  "Peruvian tenderloin, mushroom duxelles, aji amarillo demi-glace. Showpiece only - do not put on the standing menu.":
    "Lomo fino peruano, duxelles de hongos, demi-glace de ají amarillo. Solo para lucirse — no va en la carta fija.",
  "Breast stuffed with haggis-spiced morcilla, wrapped in local bacon, whisky cream sauce.":
    "Pechuga rellena de morcilla con especias de haggis, envuelta en tocino local, salsa de whisky y crema.",
  "Smoked paiche or trout replaces haddock; native potatoes stay. Your signature soup.":
    "Paiche o trucha ahumada reemplazan al eglefino; las papas nativas se quedan. Su sopa emblemática.",
  "Full-size hot-water crust pie, cordero and aji panca, served with beans or clapshot.":
    "Empanada grande de masa de agua caliente, cordero y ají panca, con frejoles o clapshot.",
  "New Year tradition; beef braised in dark beer with a chicha de jora note, puff lid.":
    "Tradición de Año Nuevo; carne braseada en cerveza negra con un dejo de chicha de jora, tapa de hojaldre.",
  "Haggis-spiced lamb base under a buttery native yellow potato mash.":
    "Base de cordero con especias de haggis bajo un puré mantecoso de papa amarilla.",
  "Beef mince in an aji panca gravy over yellow potato mash. Cheapest main on the matrix.":
    "Carne molida en salsa de ají panca sobre puré de papa amarilla. El fondo más barato de la matriz.",
  "Slow-stewed potato, onion and leftover roast; served with oatcakes to scoop.":
    "Guiso lento de papa, cebolla y asado del día anterior; se sirve con galletas de avena para recoger.",
  "Quinoa carries the barley role alongside lamb and root vegetables.":
    "La quinua cumple el papel de la cebada junto al cordero y las verduras de raíz.",
  "Chicken and leek broth; choclo replaces prunes, thickened with rice as tradition allows.":
    "Caldo de pollo y puerro; el choclo reemplaza a las ciruelas, espesado con arroz como manda la tradición.",
  "Glasgow's own claim to the dish, rebuilt on an aji amarillo and panca base. The crowd-pleaser that needs no explaining.":
    "El reclamo propio de Glasgow sobre el plato, rehecho sobre base de ají amarillo y panca. El que gusta a todos y no necesita explicación.",
  "Local butcher sausage with an onion gravy built on chicha de jora.":
    "Salchicha de carnicería local con salsa de cebolla montada sobre chicha de jora.",
  "Chita or cabrilla in beer batter, thick yuca chips, chicha-vinegar and chippy-sauce riff.":
    "Chita o cabrilla en masa de cerveza, papas de yuca gruesas, vinagre de chicha y una versión de la chippy sauce.",
  "Andean lamb with a huacatay and oat crust in place of wild garlic and breadcrumb.":
    "Cordero andino con costra de huacatay y avena en lugar de ajo silvestre y pan molido.",
  "Slow pork belly lacquered with whisky and chancaca; crackling finished to order.":
    "Panza de cerdo lenta laqueada con whisky y chancaca; el chicharrón se termina al momento.",
  "Whole gammon glazed with reduced Irn Bru - a far better use of an expensive imported can than pouring it.":
    "Pierna entera glaseada con Irn Bru reducido — mucho mejor uso de una lata importada cara que servirla.",
  "Skewered lamb, oregano and huacatay, with a pita or pan chuta option.":
    "Cordero al palo con orégano y huacatay, con opción de pita o pan chuta.",
  "Local corvina emulsified in olive oil and garlic; Tacna olive and aji limo finish.":
    "Corvina local emulsionada en aceite de oliva y ajo; aceituna de Tacna y ají limo al final.",
  "Cured paiche or trout, mustard-algarrobina sauce, rye and pickles. Zero cooking on site.":
    "Paiche o trucha curada, salsa de mostaza y algarrobina, centeno y encurtidos. Cero cocción en el local.",
  "Vegetarian centrepiece: root purees and mushroom in puff pastry, aji amarillo jus.":
    "Plato central vegetariano: purés de raíces y hongos en hojaldre, jugo de ají amarillo.",
  "Potato and cabbage bake using native potatoes and queso paria on top.":
    "Gratín de papa y col con papas nativas y queso paria encima.",
  "Orkney mash of potato and swede; zapallo loche adds depth the swede alone cannot.":
    "Puré de las Orcadas con papa y nabo; el zapallo loche da una profundidad que el nabo solo no alcanza.",
  "Served as a cold causa: layered yellow potato with a swede and carrot puree.":
    "Servido como causa fría: papa amarilla en capas con puré de nabo y zanahoria.",
  "Toasted quinoa and oats fried with onion in dripping - a direct one-for-one swap.":
    "Quinua y avena tostadas, salteadas con cebolla en grasa de res — un cambio uno a uno.",
  "Mash through kale and spring onion; native potato changes the texture for the better.":
    "Puré con kale y cebolla china; la papa nativa mejora la textura.",
  "Griddled potato flatbread. Cheapest, most useful item you own - base for a dozen others.":
    "Pan plano de papa a la plancha. Lo más barato y más útil que tiene — base de una docena de cosas más.",
  "Platform product: thin for canapes, thick for cheese, fine for pate.":
    "Producto plataforma: delgada para canapés, gruesa para queso, fina para paté.",
  "Classic batter with a rosemary note; must be baked on site or served within the hour.":
    "Masa clásica con un toque de romero; hay que hornearla en el local o servirla dentro de la hora.",
  "Giant Andean corn and kale in brown butter.":
    "Choclo andino y kale en mantequilla noisette.",
  "Camote and papa amarilla whipped with European butter.":
    "Camote y papa amarilla batidos con mantequilla europea.",
  "Chicha morada replaces the red wine and spice in the braise.":
    "La chicha morada reemplaza al vino tinto y las especias en el braseado.",
  "Roasted Ica asparagus finished with algarrobina instead of heather honey.":
    "Espárragos de Ica al horno terminados con algarrobina en vez de miel de brezo.",
  "Live plancha service: eggs, bacon, Lorne, black pudding, tattie scone, house beans with chancaca-tomato base.":
    "Servicio en plancha en vivo: huevos, tocino, Lorne, morcilla, scone de papa y frejoles de la casa con base de chancaca y tomate.",
  "Morning roll, Lorne sausage, tattie scone, fried egg, brown sauce. Your corporate breakfast workhorse.":
    "Pan del día, salchicha Lorne, scone de papa, huevo frito, brown sauce. Su caballo de batalla para desayunos corporativos.",
  "Laminated, salty, nothing like it in Lima. Sell alongside lucuma marmalade.":
    "Laminada, salada, no hay nada igual en Lima. Véndala junto a la mermelada de lúcuma.",
  "Steel-cut oats blended with kiwicha, topped with local berries and algarrobina.":
    "Avena cortada mezclada con kiwicha, con berries locales y algarrobina.",
  "Griddle pancakes with lucuma in the batter and manjar blanco to serve.":
    "Panqueques a la plancha con lúcuma en la masa y manjar blanco para servir.",
  "Buttered roll, bacon, and salsa criolla instead of ketchup.":
    "Pan con mantequilla, tocino y salsa criolla en vez de kétchup.",
  "Potato scone base, poached egg, aji amarillo hollandaise, black pudding.":
    "Base de scone de papa, huevo poché, holandesa de ají amarillo y morcilla.",
  "Dundee's thick-cut bitter marmalade method applied to lucuma and Peruvian orange.":
    "El método de mermelada amarga de corte grueso de Dundee, aplicado a la lúcuma y la naranja peruana.",
  "Crumpet batter enriched with sweet potato puree; salted butter to serve.":
    "Masa de crumpet enriquecida con puré de camote; mantequilla con sal para servir.",
  "Native potato hash with morcilla and a soft egg. Holds better than a full fry-up.":
    "Salteado de papa nativa con morcilla y huevo blando. Aguanta mejor que un desayuno frito completo.",
  "Smoked trout, roasted native potato, watercress, aji limo vinaigrette.":
    "Trucha ahumada, papa nativa al horno, berros, vinagreta de ají limo.",
  "Lomo saltado over toasted highland oats instead of rice, with hand-cut chips.":
    "Lomo saltado sobre avena tostada de las Highlands en vez de arroz, con papas cortadas a mano.",
  "Curried mayo chicken over chilled tricolour quinoa.":
    "Pollo en mayonesa al curry sobre quinua tricolor fría.",
  "Mature cheddar, local ham, sourdough, aguaymanto chutney, oatcakes.":
    "Queso cheddar maduro, jamón local, masa madre, chutney de aguaymanto, galletas de avena.",
  "Thermos-served chowder with an oatcake pack. Winter corporate staple.":
    "Chowder servido en termo con un paquete de galletas de avena. Básico corporativo de invierno.",
  "Mezze is piqueo. Keftedes, spanakopita, tzatziki with rocoto, Tacna olives, pita.":
    "El mezze es piqueo. Keftedes, spanakopita, tzatziki con rocoto, aceitunas de Tacna, pita.",
  "Cured trout, pickles, rye, mustard-algarrobina. Entirely cold, zero service risk.":
    "Trucha curada, encurtidos, centeno, mostaza con algarrobina. Todo frío, riesgo cero en servicio.",
  "Rotisserie chicken flavours baked into a shortcrust pie with aji verde on the side.":
    "Los sabores del pollo a la brasa horneados en una empanada de masa quebrada, con ají verde al lado.",
  "The wedge-cut shortbread, studded with Peruvian cacao nibs. Gift-box ready.":
    "El shortbread cortado en gajos, con nibs de cacao peruano. Listo para caja de regalo.",
  "Shortbread base, lucuma manjar blanco caramel, 70% Peruvian dark chocolate top.":
    "Base de shortbread, caramelo de manjar blanco con lúcuma, tapa de chocolate peruano al 70%.",
  "Maca-spiked shortbread around single-malt manjar blanco.":
    "Shortbread con maca alrededor de manjar blanco con whisky de malta.",
  "The flagship. A Scottish sweet whose secret ingredient is mashed potato, made in the country that domesticated it - native potato fondant, Peruvian cacao, coconut.":
    "El buque insignia. Un dulce escocés cuyo ingrediente secreto es puré de papa, hecho en el país que la domesticó — fondant de papa nativa, cacao peruano y coco.",
  "Crumbly Scottish fudge with lucuma pulp folded through. Shelf-stable, ships anywhere.":
    "Fudge escocés desmenuzable con pulpa de lúcuma incorporada. Estable en anaquel, se envía a cualquier parte.",
  "Same base, Peruvian cacao and Maras salt. Two SKUs from one technique.":
    "La misma base, cacao peruano y sal de Maras. Dos productos de una sola técnica.",
  "Shortbread sandwich with maracuya jam and glace icing. Origin contested - tag honestly.":
    "Galleta sándwich de shortbread con mermelada de maracuyá y glaseado. Origen disputado — decláralo con honestidad.",
  "Almonds become pecans, candied peel becomes candied aguaymanto, whisky optional.":
    "Las almendras se vuelven pecanas, la cáscara confitada se vuelve aguaymanto confitado, el whisky es opcional.",
  "Dried fruit and butter tart with chancaca replacing golden syrup.":
    "Tarta de fruta seca y mantequilla con chancaca en lugar de golden syrup.",
  "Almond and dried fruit tart; pecan and higo swap, lemon glaze.":
    "Tarta de almendra y fruta seca; cambio a pecana e higo, glaseado de limón.",
  "Pastry-wrapped fruitcake for Hogmanay. A dated, bookable product, not a menu item.":
    "Queque de frutas envuelto en masa para Hogmanay. Un producto con fecha, por encargo, no de carta.",
  "Steamed spiced fruit pudding - reads Peruvian-adjacent because it is steamed. Serve with algarrobina custard.":
    "Pudín de frutas especiado al vapor — se siente cercano a lo peruano justamente porque va al vapor. Sírvalo con crema inglesa de algarrobina.",
  "Shortcrust sandwich of currants and raisins; a splash of whisky in the filling.":
    "Sándwich de masa quebrada con pasas y currants; un chorro de whisky en el relleno.",
  "Enriched fruited bread; sultanas plus candied lucuma.":
    "Pan dulce enriquecido con fruta; pasas rubias más lúcuma confitada.",
  "Simple tea loaf soaked in black tea and pisco. Afternoon-tea backbone.":
    "Queque sencillo remojado en té negro y pisco. La columna del té de la tarde.",
  "Oat and quinoa flapjack bound with chancaca, dark chocolate base.":
    "Barra de avena y quinua ligada con chancaca, base de chocolate amargo.",
  "Toasted oats, pisco-or-whisky cream, chirimoya puree, algarrobina instead of honey.":
    "Avena tostada, crema con pisco o whisky, puré de chirimoya, algarrobina en vez de miel.",
  "Whisky where the English trifle uses sherry. No-bake, assembles ahead, scales to any headcount - your best catering dessert.":
    "Whisky donde el trifle inglés usa jerez. Sin horno, se arma con anticipación, escala a cualquier número — su mejor postre de catering.",
  "Whipped cream, whisky, marmalade and citrus zest - here with the lucuma-Dundee marmalade.":
    "Crema batida, whisky, mermelada y ralladura de cítricos — aquí con la mermelada de lúcuma estilo Dundee.",
  "Date sponge with chancaca toffee. Flag the contested origin on the dish card.":
    "Bizcocho de dátil con toffee de chancaca. Declare el origen disputado en la ficha del plato.",
  "Wholewheat shortbread dome, freeze-dried strawberry mallow, 70% Peruvian chocolate.":
    "Domo de shortbread integral, malvavisco de fresa liofilizada, chocolate peruano al 70%.",
  "Savoury scone with giant Andean corn and queso paria.":
    "Scone salado con choclo andino y queso paria.",
  "Honey doughnuts finished with algarrobina and toasted quinoa.":
    "Picarones de miel terminados con algarrobina y quinua tostada.",
  "Semolina custard in filo, lucuma in the custard. Check filo cost before you commit.":
    "Crema de sémola en masa filo, con lúcuma en la crema. Revise el costo del filo antes de comprometerse.",
  "Laminated cardamom buns with a cacao-nib sugar. Pairs with the buttery on a breakfast board.":
    "Bollos laminados de cardamomo con azúcar de nibs de cacao. Van bien con la buttery en una tabla de desayuno.",
  "Oatmeal, honey, cream and whisky set in pots; algarrobina for the honey.":
    "Avena, miel, crema y whisky cuajados en pote; algarrobina en lugar de la miel.",
  "Cranachan rebuilt as a tray bake for boxes - oat base, berry layer, cacao top.":
    "El cranachan rehecho como barra para cajas — base de avena, capa de berries, tapa de cacao.",
  "Hard toffee cut into shards with Maras pink salt.":
    "Toffee duro partido en astillas con sal rosada de Maras.",
  "Uses day-old butteries and the lucuma marmalade - the waste-recovery dessert.":
    "Usa las butteries del día anterior y la mermelada de lúcuma — el postre que recupera merma.",
  "Set caramel tart with whisky and Maras salt on a cacao shortcrust.":
    "Tarta de caramelo cuajado con whisky y sal de Maras sobre masa quebrada de cacao.",
  "Oat crumble; aguaymanto carries the sourness where rhubarb is scarce and costly here.":
    "Crumble de avena; el aguaymanto aporta la acidez donde el ruibarbo es escaso y caro acá.",
  "The control product. Nothing swapped. Proves the butter and the technique.":
    "El producto de control. Nada cambiado. Demuestra la mantequilla y la técnica.",
  "Wholemeal oat biscuit half-dipped in Peruvian dark chocolate.":
    "Galleta integral de avena bañada a medias en chocolate peruano.",
  "Strained yoghurt, cucumber and garlic with rocoto for heat. Anchors the mezze box.":
    "Yogur colado, pepino y ajo con rocoto para el picante. Ancla la caja de mezze.",
  "Chard leaves replace imported vine leaves; quinoa replaces rice. Cheaper and better.":
    "Las hojas de acelga reemplazan a las hojas de parra importadas; la quinua reemplaza al arroz. Más barato y mejor.",
  "Charred aubergine dip with aji panca smoking the paste.":
    "Dip de berenjena quemada con ají panca ahumando la pasta.",
  "Queso paria for feta, Tacna olives, and local tomato. A one-for-one swap that costs less than the original.":
    "Queso paria por feta, aceitunas de Tacna y tomate local. Un cambio uno a uno que cuesta menos que el original.",
  "Egg-lemon chicken broth; choclo replaces the rice or orzo. Holds badly - serve within the hour.":
    "Caldo de pollo con huevo y limón; el choclo reemplaza al arroz o al orzo. Aguanta mal — sírvalo dentro de la hora.",
  "Pork gyros carved to order; tzatziki and salsa criolla side by side in the wrap.":
    "Gyros de cerdo cortado al momento; tzatziki y salsa criolla lado a lado en el wrap.",
  "Pan-fried queso paria flamed with pisco instead of brandy. Pure theatre, cooked to order.":
    "Queso paria a la sartén flambeado con pisco en vez de brandy. Puro espectáculo, hecho al momento.",
  "Pecans for pistachios, algarrobina for the honey syrup. Filo is the cost variable - price it first.":
    "Pecanas por pistachos, algarrobina por el almíbar de miel. El filo es la variable de costo — cotícelo primero.",
  "Beetroot and rocoto in a sweet-sour brine. Keeps for weeks, cuts every rich dish on the menu.":
    "Betarraga y rocoto en salmuera agridulce. Dura semanas y corta todo plato graso de la carta.",
  "Trout cured in beetroot, salt and dill - stains it magenta, needs no cooking, plates cold.":
    "Trucha curada en betarraga, sal y eneldo — la tiñe de magenta, no necesita cocción y se sirve fría.",
  "Aguaymanto replaces lingonberry in the cream sauce - same acidity, local supply.":
    "El aguaymanto reemplaza al arándano rojo en la salsa de crema — misma acidez, oferta local.",
  "Seeded rye crispbread with kiwicha. Second platform product alongside the oatcake.":
    "Pan crocante de centeno con semillas y kiwicha. Segundo producto plataforma junto a la galleta de avena.",
  "Cold native potatoes, dill, mustard, soured cream. Travels perfectly.":
    "Papas nativas frías, eneldo, mostaza, crema agria. Viaja perfecto.",
  "The lingonberry substitute, made once and used across meatballs, cured fish and cheese boards.":
    "El sustituto del arándano rojo, hecho una vez y usado en albóndigas, pescado curado y tablas de queso.",
  "Muna stands in for juniper in the cure. Sliced thin, served cold on crispbread.":
    "La muña reemplaza al enebro en el curado. Cortado fino, servido frío sobre pan crocante.",
  "Fast-cured chorizo-style sausage on a native potato coin. Skewered, room temperature.":
    "Chorizo de curado rápido sobre una moneda de papa nativa. En palito, a temperatura ambiente.",
  "Salt cod is imported and dear; salt-cured local corvina does the same job for a third of the price.":
    "El bacalao salado es importado y caro; la corvina local curada en sal hace lo mismo por un tercio del precio.",
  "Slow-cooked peppers and onion with aji amarillo folded through. Vegetarian, holds for hours.":
    "Pimientos y cebolla a fuego lento con ají amarillo integrado. Vegetariano, aguanta horas.",
  "Basque tuna and potato stew built on bonito and native potatoes - already halfway Peruvian.":
    "Guiso vasco de atún y papa hecho con bonito y papas nativas — ya está medio peruano.",
  "Baby squid seared hard, aji limo and parsley. Ninety seconds on the plancha or it is rubber.":
    "Calamarcitos sellados fuerte, ají limo y perejil. Noventa segundos en la plancha o queda como jebe.",
  "Smoked queso paria for Idiazabal, aguaymanto paste for membrillo. Cheese course, no import cost.":
    "Queso paria ahumado por Idiazabal, pasta de aguaymanto por membrillo. Tabla de quesos, sin costo de importación.",
  "La Vina-style burnt cheesecake with lucuma. Bakes ahead, travels whole, cuts to any headcount - the best-value dessert on this sheet.":
    "Cheesecake quemado estilo La Viña con lúcuma. Se hornea con anticipación, viaja entero, se corta para cualquier número — el postre de mejor rendimiento de esta carta.",
  "Peruvian base, Scottish move: the yellow potato terrine stands, but hot-smoked trout and dill replace the chicken mayo. Reads as causa to a Lima guest and as gravlax to a Scottish one.":
    "Base peruana, giro escocés: la causa de papa amarilla se mantiene, pero trucha ahumada y eneldo reemplazan al pollo con mayonesa. Al invitado limeño le sabe a causa; al escocés, a gravlax.",
  "Peruvian base, Scottish move: haggis replaces the filling entirely. The aji amarillo in the potato does what the pepper in the haggis does, from the other side.":
    "Base peruana, giro escocés: el haggis reemplaza el relleno por completo. El ají amarillo de la papa hace lo que hace la pimienta del haggis, desde el otro lado.",
  "Peruvian base, Scottish move: lamb rather than beef heart, with muna standing in for rosemary in the marinade. Grilled to order on the plancha.":
    "Base peruana, giro escocés: cordero en vez de corazón, con muña en lugar de romero en el adobo. A la plancha, al momento.",
  "Peruvian base, Nordic move: dill and cucumber go into the leche de tigre. The cure is Peruvian, the aromatics are Scandinavian, and the fish is local either way.":
    "Base peruana, giro nórdico: eneldo y pepino entran a la leche de tigre. El curado es peruano, los aromáticos escandinavos, y el pescado es local de todos modos.",
  "Peruvian base, Scottish move: trout sliced tiradito-style, brushed with a whisky and aji amarillo cream. The peat and the aji sit together better than either does alone.":
    "Base peruana, giro escocés: trucha cortada estilo tiradito, pincelada con una crema de whisky y ají amarillo. La turba y el ají se llevan mejor juntos que por separado.",
  "Peruvian base, Scottish move: the chips are cut thick and fried in beef dripping like a chip shop, then tossed through the wok at the last second.":
    "Base peruana, giro escocés: las papas se cortan gruesas y se fríen en grasa de res como en una chippy, y se saltean en el wok al último segundo.",
  "Peruvian base, Scottish move: the classic sauce goes into a dish and is finished under an oat and mature cheddar crumb. Bakes ahead and holds where the original does not.":
    "Base peruana, giro escocés: la salsa clásica va a una fuente y se termina bajo una costra de avena y cheddar maduro. Se hornea antes y aguanta donde el original no.",
  "Peruvian base, Basque move: smoked queso paria replaces the queso fresco and the sauce gets cracked black pepper. Same plate, deeper flavour, no import cost.":
    "Base peruana, giro vasco: el queso paria ahumado reemplaza al queso fresco y la salsa lleva pimienta negra recién molida. El mismo plato, más profundo, sin costo de importación.",
  "Peruvian base, Scottish move: black pudding goes into the stuffing with the beef, and oats bind it. Arequipa and Stornoway turn out to want the same things.":
    "Base peruana, giro escocés: la morcilla entra al relleno junto con la carne, y la avena lo liga. Resulta que Arequipa y Stornoway quieren lo mismo.",
  "Peruvian base, Scottish move: wild garlic leaf in place of some of the huacatay when it is in season. Nuttier, greener, and it cuts the cost of the sauce.":
    "Base peruana, giro escocés: hoja de ajo silvestre en lugar de parte del huacatay cuando está en temporada. Más a nuez, más verde, y abarata la salsa.",
  "Peruvian base, Scottish move: the mince beneath the choclo is built like a shepherds pie, oats and all. The sweet corn lid does the job mashed potato does at home.":
    "Base peruana, giro escocés: la carne debajo del choclo se arma como un shepherd's pie, con avena y todo. La tapa de choclo hace lo que allá hace el puré de papa.",
  "Peruvian base, Scottish move: leeks go into the aji de gallina filling. Cheap, sweet, and it stretches the chicken by a third.":
    "Base peruana, giro escocés: el puerro entra al relleno del ají de gallina. Barato, dulce, y rinde el pollo un tercio más.",
  "Peruvian base, Scottish move: built as a Cullen skink - smoked corvina instead of langostinos, so it can be sold through the veda when prawns are illegal.":
    "Base peruana, giro escocés: armado como un Cullen skink — corvina ahumada en vez de langostinos, para poder venderlo durante la veda.",
  "Peruvian base, Scottish move: stout replaces the chicha de jora in the rice. Darker, maltier, and available in any Lima supermarket year round.":
    "Base peruana, giro escocés: la cerveza negra reemplaza a la chicha de jora en el arroz. Más oscura, más maltosa, y se consigue todo el año en cualquier supermercado de Lima.",
  "Peruvian base, Scottish move: the jamon del pais goes into a morning roll instead of a pan frances, with salsa criolla and a scrape of mustard.":
    "Base peruana, giro escocés: el jamón del país va en un pan escocés en vez de pan francés, con salsa criolla y un raspado de mostaza.",
  "Peruvian base, Scottish move: whisky in the meringue rather than port. The manjar blanco underneath is untouched - it does not need help.":
    "Base peruana, giro escocés: whisky en el merengue en vez de oporto. El manjar blanco de abajo no se toca — no necesita ayuda.",
  "Peruvian base, Scottish move: Seville-style bitter marmalade cut into the chancaca syrup. The bitterness is what the original syrup is missing.":
    "Base peruana, giro escocés: mermelada amarga estilo Sevilla cortada en la miel de chancaca. El amargor es lo que le falta a la miel original.",
  "Peruvian base, Scottish move: the biscuit is made to shortbread proportions and the manjar is cut with lucuma. Firmer, less sweet, better in a box.":
    "Base peruana, giro escocés: la galleta se hace con proporciones de shortbread y el manjar se corta con lúcuma. Más firme, menos dulce, mejor en caja.",
  "Peruvian base, Scottish move: oats in the dough sticks and the chancaca syrup spiced like parkin. An October product that sells to both calendars at once.":
    "Base peruana, giro escocés: avena en los palitos de masa y la miel de chancaca especiada como un parkin. Un producto de octubre que vende a los dos calendarios a la vez.",
  "Peruvian base, English move: chicha morada set as a jelly over sponge, under cream and toasted oatmeal. Purple the whole way down.":
    "Base peruana, giro inglés: chicha morada cuajada en gelatina sobre bizcocho, bajo crema y avena tostada. Morado hasta el fondo.",

  "Disputed (Lake District / Scotland)": "Disputado (Lake District / Escocia)",
  "Disputed": "Disputado",

  // ---- compare / packages ----
  "What lands on the table": "Lo que llega a la mesa",
  "Boxed, no china. No staff on site.": "En caja, sin vajilla. Sin personal en el local.",
  "Hired china and glassware. Waiting staff, 1 per 25.":
    "Vajilla y cristalería alquiladas. Personal de salón, 1 por cada 25.",
  "Hired china and glassware. Waiting staff, 1 per 12.":
    "Vajilla y cristalería alquiladas. Personal de salón, 1 por cada 12.",
  "per guest, net of IGV": "por invitado, sin IGV",
  "Client pays inc. IGV": "El cliente paga con IGV",
  "Waiter / prep shift": "Turno de mozo / preparación",
  "On-site chef": "Chef en el local",
  "Minimum guests": "Mínimo de invitados",
  "Bites per guest": "Bocados por invitado",
  "Menaje per guest": "Menaje por invitado",
  "Packaging per guest": "Empaque por invitado",
  "On-site chefs": "Chefs en el local",
  "Every quote is stated net, with IGV added on top. Quoting a gross figure while budgeting as if it were net loses about":
    "Toda cotización se expresa en neto, con IGV encima. Cotizar en bruto y presupuestar como si fuera neto pierde cerca de",
  "per guest at a S/ 400 head price.": "por invitado a un precio de S/ 400 por cabeza.",

  // ---- venues ----
  "Hotel or event venue": "Hotel o local de eventos",
  "Restaurant taken over": "Restaurante tomado",
  "Corporate office": "Oficina corporativa",
  "Private house": "Casa particular",
  "Apartment, no goods lift": "Departamento sin ascensor de carga",
  "Garden or terrace": "Jardín o terraza",
  "Beach or field": "Playa o campo",
  "Goods entrance, working kitchen, power on tap. The easy case.":
    "Entrada de servicio, cocina operativa, corriente disponible. El caso fácil.",
  "Kitchen exists but is not yours. Agree hob and oven access in writing.":
    "Hay cocina pero no es suya. Acuerde por escrito el acceso a hornillas y horno.",
  "Lifts, security sign-in and a booking slot. Power is fine; there is no kitchen.":
    "Ascensores, registro de seguridad y una hora reservada. La corriente está bien; cocina no hay.",
  "Domestic kitchen only — one oven, four rings. Plan around it, not with it.":
    "Solo cocina doméstica — un horno, cuatro hornillas. Planifique alrededor, no con ella.",
  "Everything goes up in a passenger lift or on stairs. The most under-quoted venue there is.":
    "Todo sube por ascensor de pasajeros o por escalera. El local más subcotizado que existe.",
  "No kitchen and often no power. Live stations need a generator hired in.":
    "Sin cocina y muchas veces sin corriente. Las estaciones en vivo necesitan generador alquilado.",
  "Nothing is there. Water, power, shade and waste all arrive on the van.":
    "No hay nada. Agua, corriente, sombra y residuos llegan todos en la van.",

  // ---- builder detail ----
  "Kitchen rent, insurance and your own wage come out of this figure. Estimates only — not a binding quote.":
    "El alquiler de cocina, los seguros y su propio sueldo salen de esta cifra. Solo estimados — no es una cotización vinculante.",
  "Prep and set — done the day before": "Preparación y armado — hecho el día anterior",
  "Cold section": "Sección fría",
  "day before": "día anterior",
  "Oven": "Horno", "Hob": "Hornillas", "Griddle": "Plancha", "Fryer": "Freidora",
  "not offered at this tier — still saved if you switch back.":
    "no se ofrece en este nivel — se guarda si vuelve a cambiar.",
  "Nothing matches that combination. Switch the match mode to":
    "Nada coincide con esa combinación. Cambie el modo a",
  "or drop a flavour.": "o quite un sabor.",
  "Nothing matches that. Try an ingredient rather than a dish name.":
    "Nada coincide. Pruebe con un insumo en vez del nombre de un plato.",
  "Shares no dish with another top ingredient.":
    "No comparte ningún plato con otro insumo principal.",
  "Ranked by how much of the menu each one unlocks. The top is your standing order; the bottom is what you buy for a specific booking.":
    "Ordenado por cuánta carta desbloquea cada uno. Lo de arriba es su pedido fijo; lo de abajo es lo que compra para un evento puntual.",


  "Peruvian base, Scottish move: whisky in the three-milk soak and a burnt-sugar top. Assembles a day ahead and cuts to any headcount.":
    "Base peruana, giro escocés: whisky en el remojo de tres leches y azúcar quemada encima. Se arma con un día de anticipación y se corta para cualquier número.",
  "The English tea cake with lucuma curd and cream in the middle instead of raspberry jam.":
    "El queque inglés del té de la tarde con crema de lúcuma en el medio en vez de mermelada de frambuesa.",
  "Four layers of Peruvian 70% cacao sponge with chancaca buttercream. The birthday and wedding product.":
    "Cuatro capas de bizcocho de cacao peruano al 70% con buttercream de chancaca. El producto para cumpleaños y bodas.",
  "Kiwicha in the batter for texture, queso fresco frosting in place of the usual cream cheese.":
    "Kiwicha en la masa para dar textura, y frosting de queso fresco en lugar del queso crema de siempre.",
  "Chanchamayo coffee and pecans for walnuts. The cake that sells itself at an afternoon booking.":
    "Café de Chanchamayo y pecanas en vez de nueces. El queque que se vende solo en un evento de tarde.",
  "Peruvian base, Scottish move: the Lima jelly cake rebuilt on aguaymanto with an oat sponge under it.":
    "Base peruana, giro escocés: la torta helada limeña rehecha con aguaymanto y un bizcocho de avena debajo.",
  "No dairy, no egg, no compromise: olive oil, cacao and chicha morada make a darker cake than butter does.":
    "Sin lácteos, sin huevo, sin concesiones: aceite de oliva, cacao y chicha morada dan un queque más oscuro que la mantequilla.",
  "Quinoa flour and ground almond, no wheat at all. The coeliac answer that is not an apology.":
    "Harina de quinua y almendra molida, nada de trigo. La respuesta para celíacos que no pide disculpas.",
  "Meringue, cream and chirimoya. Naturally wheat-free, and the fruit does the work.":
    "Merengue, crema y chirimoya. Sin trigo por naturaleza, y la fruta hace el trabajo.",
  "Chancaca instead of brown sugar, and a chancaca glaze while warm.":
    "Chancaca en vez de azúcar rubia, y un glaseado de chancaca en caliente.",
  "Maracuya where a Scottish bakery would use lemon. Sharper, and it holds colour in the box.":
    "Maracuyá donde una pastelería escocesa usaría limón. Más ácido, y mantiene el color en la caja.",
  "The Yorkshire oat-and-treacle cake, chancaca for the treacle. Improves for a week in the tin.":
    "El queque de avena y melaza de Yorkshire, con chancaca por la melaza. Mejora una semana entera en la lata.",
  "Oil-based sponge, aguaymanto layer, oat crumble on top. Vegan and nobody has to be told.":
    "Bizcocho a base de aceite, capa de aguaymanto, crumble de avena encima. Vegano y nadie tiene que enterarse.",
  "Muna in the syrup alongside the lemon - the Andean mint reads as something between mint and thyme.":
    "Muña en el almíbar junto al limón — la menta andina se lee entre menta y tomillo.",
  "Yellow potato in the crumb, no wheat. The same trick as the Scottish macaroon, made into a cake.":
    "Papa amarilla en la miga, sin trigo. El mismo truco del macaroon escocés, convertido en queque.",
  "Chirimoya folded through set cream on a cacao base. Cold set, no oven on the day.":
    "Chirimoya integrada en crema cuajada sobre base de cacao. Cuajado en frío, sin horno el día del evento.",
  "Coconut oil and coconut milk carry the lucuma. Vegan, dairy-free and it travels better than butter does.":
    "Aceite y leche de coco cargan la lúcuma. Vegano, sin lácteos, y viaja mejor que la mantequilla.",
  "Flourless: Peruvian cacao, butter, egg and whisky. Coeliac-safe and the richest thing on the sheet.":
    "Sin harina: cacao peruano, mantequilla, huevo y whisky. Apto para celíacos y lo más untuoso de la carta.",
  "Lime curd with pisco and a torched meringue - the cocktail as a tart, and the licence covers both.":
    "Crema de limón con pisco y merengue quemado — el cóctel hecho tarta, y la licencia cubre los dos.",
  "Layers of kiwicha sponge with algarrobina cream. The Nordic honey cake, built on Andean grain.":
    "Capas de bizcocho de kiwicha con crema de algarrobina. El queque de miel nórdico, sobre grano andino.",
  "Steamed in a cloth like the original; chancaca for the treacle and aguaymanto for the currants. Keeps a fortnight and slices cold.":
    "Al vapor en un paño como el original; chancaca por la melaza y aguaymanto por las pasas. Dura quince días y se corta frío.",

  "Peruvian base, Scottish move: haggis inside the potato instead of the usual beef picadillo. Fried to order, and the shell is the same.":
    "Base peruana, giro escocés: haggis dentro de la papa en vez del picadillo de carne de siempre. Frita al momento, y la cáscara es la misma.",
  "Peruvian base, Scottish move: queso paria in the wonton with a whisky and chancaca dip rather than guacamole.":
    "Base peruana, giro escocés: queso paria en la masa wantán con un dip de whisky y chancaca en lugar de guacamole.",
  "Peruvian base, Scottish move: the street-corner choclo with a wholegrain mustard butter melted over it.":
    "Base peruana, giro escocés: el choclo de esquina con una mantequilla de mostaza en grano derretida encima.",
  "Peruvian base, Scottish move: watercress carries the Arequipa salad where the habas run out. Vegan as built.":
    "Base peruana, giro escocés: los berros sostienen la ensalada arequipeña donde se acaban las habas. Vegano tal como está.",
  "Peruvian base, Scottish move: mushrooms instead of tripe, oats to thicken instead of potato alone. Vegan, and it does not read as a compromise.":
    "Base peruana, giro escocés: hongos en vez de mondongo, y avena para espesar en lugar de solo papa. Vegano, y no se siente como una concesión.",
  "Peruvian base, Scottish move: stout in the braise where chicha de jora usually goes. Culantro stays; it is the whole dish.":
    "Base peruana, giro escocés: cerveza negra en el guiso donde normalmente va la chicha de jora. El culantro se queda; es el plato entero.",
  "Peruvian base, Scottish move: Scotch ale in place of the chicha. A Sunday-morning dish sold as a Sunday-lunch centrepiece.":
    "Base peruana, giro escocés: cerveza ale escocesa en lugar de la chicha. Un plato de domingo por la mañana vendido como el fondo de un almuerzo dominical.",
  "Peruvian base, Scottish move: morcilla folded through the rice and bean cake and crisped in the same pan.":
    "Base peruana, giro escocés: morcilla integrada al tacu tacu y dorada en la misma sartén.",
  "Peruvian base, Scottish move: pinhead oats carry the body where the noodles usually do. Faster and it holds far better.":
    "Base peruana, giro escocés: la avena entera da el cuerpo que normalmente dan los fideos. Más rápida y aguanta mucho mejor.",
  "Peruvian base, Scottish move: squash chupe finished with toasted oatmeal instead of cheese and egg. Vegan and it still eats rich.":
    "Base peruana, giro escocés: chupe de zapallo terminado con avena tostada en vez de queso y huevo. Vegano y sigue comiéndose untuoso.",
  "Peruvian base, Scottish move: watercress and a mustard-lime dressing under the avocado. Vegan, and the cheapest green on the sheet.":
    "Base peruana, giro escocés: berros y una vinagreta de mostaza y limón bajo la palta. Vegano, y el verde más barato de la carta.",
  "Peruvian base, Scottish move: mature cheddar carries the sauce alongside the queso fresco. Sharper, and it sets firmer for a buffet.":
    "Base peruana, giro escocés: el cheddar maduro sostiene la salsa junto al queso fresco. Más punzante, y cuaja más firme para un bufé.",
  "Peruvian base, Scottish move: muna in the huancaina, which pushes it towards a herb sauce rather than a cheese one.":
    "Base peruana, giro escocés: muña en la huancaína, lo que la empuja hacia una salsa de hierbas más que de queso.",
  "Peruvian base, Scottish move: field mushrooms in the panca marinade with muna. Vegan, and it outsells the beef heart with a mixed table.":
    "Base peruana, giro escocés: hongos en el adobo de panca con muña. Vegano, y en una mesa mixta vende más que el de corazón.",
  "Peruvian base, Scottish move: the saltado goes into a bridie-style shortcrust rather than the usual empanada dough.":
    "Base peruana, giro escocés: el saltado va en una masa quebrada estilo bridie en vez de la masa de empanada de siempre.",
  "Peruvian base, Scottish move: the Cusco bread served the way a Scottish table serves a bannock, with a whipped herb butter.":
    "Base peruana, giro escocés: el pan cusqueño servido como una mesa escocesa sirve un bannock, con mantequilla batida de hierbas.",
  "Peruvian base, Scottish move: an oat crumble scattered over at the last second. Vegan, and the crumble is what stops it being one texture.":
    "Base peruana, giro escocés: un crumble de avena esparcido al último segundo. Vegano, y el crumble es lo que evita que sea una sola textura.",
  "Peruvian base, Scottish move: whisky and a burnt-sugar top. Served cold in pots, it is the easiest dessert here to scale.":
    "Base peruana, giro escocés: whisky y azúcar quemada encima. Servido frío en potes, es el postre más fácil de escalar de esta carta.",
  "Peruvian base, Scottish move: shortbread-proportion biscuit layers with lucuma manjar. Firmer than the Lambayeque original and it boxes.":
    "Base peruana, giro escocés: capas de galleta con proporciones de shortbread y manjar de lúcuma. Más firme que el original lambayecano y se encaja bien.",
  "Peruvian base, Scottish move: oats in the champus alongside the maiz morado. Vegan, served warm, and it is a winter product.":
    "Base peruana, giro escocés: avena en el champús junto al maíz morado. Vegano, servido tibio, y es un producto de invierno.",
  "Quantities are batch quantities, not domestic ones. Cross-check them against the run sheet in Build a menu before a real service.":
    "Las cantidades son de tanda, no domésticas. Contrástelas con la hoja de servicio en Armar el menú antes de un servicio real.",

  // ---- allergen names, as the kitchen book and the diet panel print them ----
  "gluten": "gluten",
  "crustaceans": "crustáceos",
  "eggs": "huevo",
  "fish": "pescado",
  "peanuts": "maní",
  "soya": "soya",
  "milk": "leche",
  "nuts": "frutos secos",
  "celery": "apio",
  "mustard": "mostaza",
  "sesame": "ajonjolí",
  "sulphites": "sulfitos",
  "lupin": "altramuz",
  "molluscs": "moluscos",
  "pork": "cerdo",
  "alcohol": "alcohol",
  "Allergens:": "Alérgenos:",
  "vegetarian": "vegetariano",
  "needs the licence": "requiere licencia de licores",
  // ---- composed lines, split into their own nodes so they translate ----
  "Derived from every ingredient in the recipe, including sub-preparations — not from the dish description. Still not a legal allergen audit: confirm against the products you actually buy.":
    "Derivado de cada ingrediente de la receta, incluidas las subpreparaciones — no de la descripción del plato. Aun así no es una auditoría legal de alérgenos: confirme contra los productos que realmente compra.",
  "dish out of window in":
    "plato fuera de temporada en",
  "dishes out of window in":
    "platos fuera de temporada en",
  "Buyable, but poor and dear — see Season for what to swap in.":
    "Se consiguen, pero de mala calidad y caros — vea Temporada para saber qué poner en su lugar.",
  "Stove":
    "Cocina",
  "Plancha":
    "Plancha",
  // ---- the fifteen dietary filters ----
  "Vegetarian":
    "Vegetariano",
  "No meat, fish or shellfish. Dairy and eggs are fine.":
    "Sin carne, pescado ni mariscos. Los lácteos y los huevos están permitidos.",
  "Vegan":
    "Vegano",
  "No animal product at all, including honey, gelatine and dairy.":
    "Ningún producto de origen animal, incluidos la miel, la gelatina y los lácteos.",
  "Pescatarian":
    "Pescetariano",
  "Fish and shellfish are fine; no meat.":
    "Pescado y mariscos sí; carne no.",
  "Coeliac / gluten-free":
    "Celíaco / sin gluten",
  "For coeliac disease, not a preference. Oats are excluded unless certified.":
    "Para la enfermedad celíaca, no una preferencia. La avena queda excluida salvo que esté certificada.",
  "Lactose / dairy-free":
    "Sin lactosa / sin lácteos",
  "Covers lactose intolerance and milk allergy.":
    "Cubre la intolerancia a la lactosa y la alergia a la leche.",
  "Nut-free":
    "Sin frutos secos",
  "Tree nuts and peanuts.":
    "Frutos secos de árbol y maní.",
  "No pork":
    "Sin cerdo",
  "Pork, bacon, morcilla, lard.":
    "Cerdo, tocino, morcilla, manteca.",
  "No alcohol":
    "Sin alcohol",
  "Cooking burns off less than people think.":
    "La cocción evapora menos alcohol de lo que la gente cree.",
  "Halal — ingredients only":
    "Halal — solo ingredientes",
  "No pork and no alcohol — the half of halal that is about ingredients. It says NOTHING about whether the meat was slaughtered halal, which is the part that actually matters. Do not describe a dish as halal on this basis alone.":
    "Sin cerdo y sin alcohol — la mitad del halal que trata de los ingredientes. No dice NADA sobre si la carne fue sacrificada según el rito halal, que es la parte que de verdad importa. No describa un plato como halal solo por esto.",
  "Kosher — ingredients only":
    "Kosher — solo ingredientes",
  "No pork, no shellfish, no meat and dairy in one dish. Kosher also needs certified supply and a supervised kitchen, neither of which this app can see.":
    "Sin cerdo, sin mariscos y sin carne y lácteos en un mismo plato. El kosher también exige proveedores certificados y una cocina supervisada, y esta aplicación no ve ninguna de las dos cosas.",
  "Low FODMAP":
    "Bajo en FODMAP",
  "No onion, garlic, wheat or legumes. The list is short because the aderezo under half the Peruvian dishes is onion and garlic. Portion size matters and this cannot model it.":
    "Sin cebolla, ajo, trigo ni legumbres. La lista es corta porque el aderezo que sostiene la mitad de los platos peruanos es cebolla y ajo. El tamaño de la porción importa y esto no lo puede modelar.",
  "Lower carb / keto-leaning":
    "Bajo en carbohidratos / tendencia keto",
  "Not built on flour, sugar, rice, potato or oats. A filter, not a nutrition panel — it does not count grams.":
    "No construido sobre harina, azúcar, arroz, papa ni avena. Es un filtro, no una tabla nutricional — no cuenta gramos.",
  "Lower sugar":
    "Bajo en azúcar",
  "A guide for guests managing blood sugar, not a medical claim.":
    "Una guía para invitados que controlan su glucosa, no una afirmación médica.",
  "Children":
    "Niños",
  "Nothing hot, boozy, skewered or on the bone.":
    "Nada picante, con alcohol, en brocheta ni con hueso.",
  "Soft texture":
    "Textura suave",
  "For guests who cannot chew easily. Not an IDDSI assessment.":
    "Para invitados que no pueden masticar con facilidad. No es una evaluación IDDSI.",
  // ---- dish descriptions added with dishes 192-223 ----
  "Hot-smoked Andean trout stands in for the Arbroath smokie - the same hard smoke, from a fish that reaches Lima fresh. Rocoto in the butter is the heat the original never had.":
    "La trucha andina ahumada en caliente reemplaza al Arbroath smokie: el mismo ahumado fuerte, con un pescado que llega fresco a Lima. El rocoto en la mantequilla es el picante que el original nunca tuvo.",
  "The Aberdeenshire crab soup poured into shot glasses, thickened with rice as the original is, and finished with choclo instead of croutons.":
    "La sopa de cangrejo de Aberdeenshire servida en vasitos, espesada con arroz como manda el original, y terminada con choclo en lugar de crutones.",
  "Quinoa skirlie packed into field mushrooms with aji amarillo. Vegetarian, and the toasted oats do the work the sausage meat would.":
    "Skirlie de quinua rellenando champiñones con ají amarillo. Vegetariano, y la avena tostada hace el trabajo que haría la carne de chorizo.",
  "Alpaca replaces the Highland venison - lean, dark, and the closest thing Peru raises to it. Juniper and a little pork fat keep it from drying out in the oven.":
    "La alpaca reemplaza al venado de las Highlands: magra, oscura, y lo más parecido que cría el Perú. El enebro y algo de grasa de cerdo evitan que se seque en el horno.",
  "Steak and oyster in a raised crust; conchas de abanico take the oyster's place. The scallop veda closes it for part of the year, which the planner flags before it is quoted.":
    "Carne y ostras en masa levantada; las conchas de abanico ocupan el lugar de la ostra. La veda de la concha lo cierra parte del año, y el planificador lo advierte antes de cotizar.",
  "The oat pudding with no blood in it, rolled small and fried, with an aji amarillo dip. Cheapest piece on the canape list by a distance.":
    "El pudding de avena sin sangre, formado pequeño y frito, con una salsa de ají amarillo. La pieza más barata de toda la lista de bocaditos, por lejos.",
  "The plate itself, unaltered in shape. Papa amarilla goes into the tatties and the whisky sauce carries chancaca, so the sweetness is Peruvian and the structure is not.":
    "El plato mismo, sin alterar su forma. La papa amarilla entra en el puré y la salsa de whisky lleva chancaca, así que el dulzor es peruano y la estructura no.",
  "Quinoa, kiwicha, lentils and oats built to the same spice line as the meat haggis. It sells to more of the room than the original and costs half as much to make.":
    "Quinua, kiwicha, lentejas y avena armados con la misma línea de especias que el haggis de carne. Le vende a más gente en la sala que el original y cuesta la mitad hacerlo.",
  "Thin beef rolled round an oat and onion stuffing and braised long. Aji panca in the braise turns the gravy a colour a Scottish butcher would recognise anyway.":
    "Bistec fino enrollado sobre un relleno de avena y cebolla, y braseado largo. El ají panca en el braseado le da a la salsa un color que un carnicero escocés reconocería igual.",
  "Cold-smoked haddock has no Lima equivalent, so corvina is smoked to order. Mustard cream and a wholegrain crust; the corvina veda closes it two months a year.":
    "El abadejo ahumado en frío no tiene equivalente en Lima, así que la corvina se ahúma por encargo. Crema de mostaza y costra de mostaza en grano; la veda de la corvina lo cierra dos meses al año.",
  "The centrepiece a Scottish wedding expects, poached in a court-bouillon with muna in place of dill and served cold with a huacatay mayonnaise.":
    "La pieza central que espera una boda escocesa, pochada en court-bouillon con muña en lugar de eneldo y servida fría con mayonesa de huacatay.",
  "Alpaca braised in stout with juniper under a suet crust - the leanest red meat in the country doing the job Highland venison does at home.":
    "Alpaca braseada en cerveza negra con enebro bajo una costra de sebo: la carne roja más magra del país haciendo el trabajo que el venado hace en casa.",
  "Smoked trout and potato bound tight, crumbed in panko cut with choclo meal. The choclo makes the crust sweeter and coarser than a Scottish chip shop would.":
    "Trucha ahumada y papa bien ligadas, apanadas en panko mezclado con harina de choclo. El choclo hace la costra más dulce y más gruesa de lo que la haría una freiduría escocesa.",
  "Turnip mashed hard with a chancaca butter stirred through at the end. The molasses note is what Scottish cooks reach for sugar and white pepper to get.":
    "Nabo bien machacado con una mantequilla de chancaca incorporada al final. Esa nota de melaza es lo que los cocineros escoceses buscan con azúcar y pimienta blanca.",
  "Kale under an oat and paria crumb, baked hard. It travels better than any creamed green and reheats without collapsing into water.":
    "Kale bajo un crumble de avena y queso paria, horneado fuerte. Viaja mejor que cualquier verdura en crema y se recalienta sin deshacerse en agua.",
  "Small waxy potatoes boiled in their skins and rolled in huacatay butter. Papa nativa gives them colours an Ayrshire crop never had.":
    "Papas chicas y firmes hervidas con cáscara y rodadas en mantequilla de huacatay. La papa nativa les da colores que una cosecha de Ayrshire nunca tuvo.",
  "Griddled barley bannocks - the bread that predates the oven in Scotland - with a whipped muna butter. Warm they are a side; cold they are a canape base.":
    "Bannocks de cebada a la plancha - el pan que en Escocia es anterior al horno - con mantequilla batida de muña. Tibios son guarnición; fríos son base de bocadito.",
  "The crab soup at bowl size with the rice cooked into it, choclo and a rocoto oil. Rich enough to be lunch, and only sellable in a month the crab veda is open.":
    "La sopa de cangrejo en tamaño bowl con el arroz cocido dentro, choclo y un aceite de rocoto. Lo bastante contundente para ser almuerzo, y solo vendible en un mes con la veda del cangrejo abierta.",
  "Pearl barley, kale and roast squash under an aji verde dressing. Vegan, cheap to build, and the barley is what keeps it eating like a Scottish bowl rather than a salad.":
    "Cebada perlada, kale y zapallo asado bajo un aderezo de ají verde. Vegano, barato de armar, y la cebada es lo que hace que se coma como un bowl escocés y no como una ensalada.",
  "A whole trout butterflied and hard-smoked the way a herring is kippered, then grilled to order under muna butter. The Lima fish that gets closest to a Loch Fyne kipper.":
    "Una trucha entera abierta en mariposa y ahumada fuerte como se hace un kipper de arenque, luego a la plancha al momento bajo mantequilla de muña. El pescado limeño que más se acerca a un kipper de Loch Fyne.",
  "Oatmeal soaked raw overnight rather than cooked - the older, plainer cousin of porridge - with aguaymanto and honey. Ready in the box, no heat needed at the venue.":
    "Avena remojada cruda toda la noche en lugar de cocida - la prima más vieja y más simple del porridge - con aguaymanto y miel. Lista en la caja, sin necesidad de calor en el local.",
  "Cranachan taken off the dessert list and sold as breakfast: oats, cream, honey and chirimoya, with the whisky left out. Same build, different hour.":
    "El cranachan sacado de la lista de postres y vendido como desayuno: avena, crema, miel y chirimoya, sin el whisky. El mismo armado, a otra hora.",
  "A custard ice cream with single malt folded in late so it stays soft, over a warm chancaca sauce. The only frozen product on the list, and the one that needs a freezer plan.":
    "Un helado de crema inglesa con single malt incorporado al final para que quede suave, sobre una salsa tibia de chancaca. El único producto congelado de la carta, y el que exige un plan de congelación.",
  "A steamed sponge with Dundee marmalade in the base, the marmalade cut with naranja agria. It steams ahead and reheats better than any plated dessert here.":
    "Un bizcocho al vapor con mermelada de Dundee en la base, cortada con naranja agria. Se cocina con anticipación y se recalienta mejor que cualquier postre emplatado de esta carta.",
  "The plain caraway biscuit from Abernethy, rebuilt with anise - the seed a Peruvian bakery actually stocks, and the one already in pan chuta.":
    "La galleta simple de alcaravea de Abernethy, rehecha con anís: la semilla que una panadería peruana sí tiene, y la que ya está en el pan chuta.",
  "The flat sugared bun from every Scottish baker's window, topped with chancaca sugar instead of nibbed white. Cheap, sweet, and it sells to children first.":
    "El bollo plano azucarado de la vitrina de toda panadería escocesa, cubierto con azúcar de chancaca en vez de azúcar perlada blanca. Barato, dulce, y le vende primero a los niños.",
  "Peruvian base, Scottish move: pearl barley in place of the fideo, which turns Lima's fastest soup into something much closer to a Scotch broth.":
    "Base peruana, giro escocés: cebada perlada en lugar del fideo, lo que convierte a la sopa más rápida de Lima en algo mucho más cercano a un Scotch broth.",
  "Peruvian base, Scottish move: oats thicken the chupe instead of rice, the way a partan bree is thickened. Crab is veda-bound, so the planner blocks it outright in closed months.":
    "Base peruana, giro escocés: la avena espesa el chupe en lugar del arroz, como se espesa un partan bree. El cangrejo está sujeto a veda, así que el planificador lo bloquea de plano en los meses cerrados.",
  "Peruvian base, Scottish move: the green tamalito served the way a Scottish table serves a bannock - warm, with a whipped herb butter rather than salsa criolla.":
    "Base peruana, giro escocés: el tamalito verde servido como una mesa escocesa sirve un bannock - tibio, con mantequilla batida de hierbas en vez de salsa criolla.",
  "Peruvian base, Scottish move: alpaca in a panca marinade cut with juniper, skewered and grilled. The Highland game plate written as street food.":
    "Base peruana, giro escocés: alpaca en un adobo de panca cortado con enebro, en brocheta y a la parrilla. El plato de caza de las Highlands escrito como comida de calle.",
  "Peruvian base, Scottish move: the Huacho sausage bound with oats the way a Lorne square is, then cut in squares and griddled rather than crumbled.":
    "Base peruana, giro escocés: la salchicha huachana ligada con avena como se liga un Lorne square, luego cortada en cuadrados y hecha a la plancha en vez de desmenuzada.",
  "Peruvian base, Scottish move: a quinoa-flour sponge built to the density of a Scottish tea loaf, with lucuma buttercream. It slices for a stand rather than a plate.":
    "Base peruana, giro escocés: un bizcocho de harina de quinua armado con la densidad de un tea loaf escocés, con buttercream de lúcuma. Se corta para una mesa de pie, no para un plato.",

  // ---- flavour axes ----
  "sweet": "dulce", "savoury": "salado", "rich": "untuoso",
  "tart": "ácido", "smoky": "ahumado", "spiced": "picante", "fresh": "fresco"
};

/** Language codes the app offers. */
export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/**
 * Strings the app builds at render time, with numbers and names spliced in.
 * A lookup table cannot reach these - "Staff — 2 waiters, 1 chef" is a
 * different string every time - so they are matched by shape instead, with
 * $1, $2 carrying the parts through untouched.
 */
export const ES_PATTERNS: [string, string][] = [
  ["^(\\d+) dishes available at this tier$", "$1 platos disponibles en este nivel"],
  ["^You keep (S/ [\\d,.]+) \\((\\d+)%\\)$", "Usted se queda con $1 ($2%)"],
  ["^Staff — (\\d+) waiters?, (\\d+) chefs?$", "Personal — $1 mozos, $2 chef"],
  ["^Staff — (\\d+) chefs?$", "Personal — $1 chef"],
  ["^Net · (\\d+) guests$", "Neto · $1 invitados"],
  ["^minimum (\\d+) for this tier$", "mínimo $1 para este nivel"],
  ["^(.+) · (\\d+) guests · (\\d+) dishes$", "$1 · $2 invitados · $3 platos"],
  ["^(S/ [\\d,.]+) per guest · (\\d+)% of net\\. Food and service costs are already out\\.$",
   "$1 por invitado · $2% del neto. Los costos de insumos y servicio ya están descontados."],
  ["^(S/ [\\d,.]+) per guest$", "$1 por invitado"],
  ["^(\\d+) dishe?s? overproduce because a batch cannot be split\\. Sell the surplus, or put it in the tasting boxes\\.$",
   "$1 platos rinden de más porque una tanda no se puede partir. Venda el excedente o póngalo en las cajas de degustación."],
  ["^Transport & load-in — (.+)$", "Transporte y carga — $1"],
  ["^Transport & load-in \\(flat estimate — no venue set\\)$",
   "Transporte y carga (estimado plano — sin local definido)"],
  ["^No (.+) option in (.+)$", "Sin opción $1 en $2"],
  ["^All (\\d+) dishes in this course contain (.+)\\. A guest avoiding it has nothing to eat at this course\\.$",
   "Los $1 platos de este tiempo contienen $2. Un invitado que lo evita no tiene qué comer en este tiempo."],
  ["^(\\d+) selected dish(?:es)? not offered at this tier — still saved if you switch back\\.$",
   "$1 plato(s) elegido(s) no se ofrecen en este nivel — se guardan si vuelve a cambiar."],
  ["^(.+) has a (\\d+)-guest minimum; this quote is for (\\d+)\\.$",
   "$1 tiene un mínimo de $2 invitados; esta cotización es para $3."],
  ["^(\\d+) of (\\d+) recipes$", "$1 de $2 recetas"],
  ["^(\\d+) of (\\d+) dishes$", "$1 de $2 platos"],
  ["^Off the menu in (.+)$", "Fuera de carta en $1"],
  ["^(S/ [\\d,.]+)/guest$", "$1/invitado"],
  ["^1 per (\\d+)$", "1 por cada $1"],
  ["^(\\d+) bites per guest$", "$1 bocados por invitado"],
  // Place names need no translation, and "min" reads the same in both. The
  // identity rule records that this shape was reviewed rather than missed.
  // The recipe card's header is split into one span per label so the walker
  // can see each one. These are the two fragments that are not labels.
  ["^prep (\\d+) min$", "preparación $1 min"],
  ["^cook (\\d+) min$", "cocción $1 min"],
  ["^(.+) · (\\d+) min$", "$1 · $2 min"]
];
