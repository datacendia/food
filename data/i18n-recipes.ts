/**
 * The recipes, in the language the kitchen speaks.
 *
 * Keyed on the English source line, exactly like the dish descriptions, so no
 * ids are needed and a line that is not yet translated renders in English and
 * is visibly untranslated. verify-standalone reports the coverage per pane, so
 * the number is measured rather than claimed.
 *
 * Written for a Peruvian cook, not for a dictionary. Temperatures stay in
 * Celsius, weights stay metric, and the ingredient names come from
 * data/i18n-ingredients.ts - the ones a market actually uses.
 *
 * This file is filled in tranches. It is not finished, and the app says so.
 */
export const ES_RECIPES: Record<string, string> = {
  // ---- 1 Haggis Bonbons ----
  "Toast the oats dry in a wide pan until they smell nutty, 4–5 minutes. Set aside.":
    "Tueste la avena en seco en una sartén amplia hasta que huela a nuez, 4–5 minutos. Reserve.",
  "Sweat the onion in fat until soft and sweet, no colour. Add ají panca and cook out 2 minutes.":
    "Sude la cebolla en grasa hasta que esté suave y dulce, sin dorar. Agregue el ají panca y cocine 2 minutos.",
  "Add both minces, break up hard, and cook until no pink remains and the pan is dry.":
    "Agregue las dos carnes molidas, desmenuce bien y cocine hasta que no quede nada rosado y la sartén esté seca.",
  "Add the oats, spices and stock. Simmer 20 minutes until the oats swell and the mix holds a spoon.":
    "Agregue la avena, las especias y el caldo. Cocine a fuego lento 20 minutos hasta que la avena hinche y la mezcla sostenga la cuchara.",
  "Spread on a tray, cool fast, then chill 4 hours or overnight until firm enough to roll.":
    "Extienda en una bandeja, enfríe rápido y refrigere 4 horas o toda la noche hasta que esté firme para bolear.",
  "Roll 30 g balls. Flour, egg, panko — twice through egg and panko if you want them armoured for transport.":
    "Bolee de 30 g. Harina, huevo, panko — dos pasadas de huevo y panko si los quiere blindados para el transporte.",
  "Fry at 175 °C for 3 minutes until deep gold. Drain on a rack, never on paper.":
    "Fría a 175 °C por 3 minutos hasta dorado profundo. Escurra sobre rejilla, nunca sobre papel.",

  // ---- 2 Morcilla & Apple Empanadas ----
  "Chutney first: simmer apple, rocoto, vinegar and sugar 25 minutes until jammy. Cool. It keeps a month.":
    "Primero el chutney: cocine manzana, rocoto, vinagre y azúcar 25 minutos hasta que espese como mermelada. Enfríe. Dura un mes.",
  "Sweat the onion soft. Crumble in the morcilla and cook until it breaks down and darkens.":
    "Sude la cebolla hasta ablandar. Desmenuce la morcilla encima y cocine hasta que se deshaga y oscurezca.",
  "Stir through the toasted oats, mace and white pepper. Taste for salt — morcilla varies wildly between butchers.":
    "Integre la avena tostada, el macis y la pimienta blanca. Pruebe la sal — la morcilla varía muchísimo entre carnicerías.",
  "Cool completely. A warm filling tears the dough.":
    "Enfríe por completo. Un relleno tibio rompe la masa.",
  "Fill 25 g per disc, fold, and repulgue the edge. Chill 30 minutes before baking so they hold their shape.":
    "Rellene 25 g por disco, doble y haga el repulgue. Refrigere 30 minutos antes de hornear para que mantengan la forma.",
  "Egg wash and bake at 190 °C for 18–20 minutes until deep gold.":
    "Pincele con huevo y hornee a 190 °C por 18–20 minutos hasta dorado profundo.",

  // ---- 3 Smoked Trout Oatcakes ----
  "Mix oatmeal, flour and salt. Stir in the melted fat, then the boiling water, working fast — the dough must be handled warm.":
    "Mezcle avena molida, harina y sal. Integre la grasa derretida y luego el agua hirviendo, trabajando rápido — la masa se maneja tibia.",
  "Roll 3 mm thin on an oatmeal-dusted bench. Cut 4 cm rounds.":
    "Estire a 3 mm sobre mesa espolvoreada con avena. Corte discos de 4 cm.",
  "Bake at 170 °C for 16–18 minutes until dry and pale. They crisp as they cool, so do not chase colour.":
    "Hornee a 170 °C por 16–18 minutos hasta que estén secas y pálidas. Se ponen crocantes al enfriar, así que no busque color.",
  "Beat the queso fresco with cream, lemon zest and a little juice until spreadable.":
    "Bata el queso fresco con crema, ralladura de limón y un poco de jugo hasta que se pueda untar.",
  "Flake the trout, keeping the pieces visible — this should not look like a mousse.":
    "Desmenuce la trucha dejando los trozos visibles — esto no debe parecer una mousse.",
  "Assemble to order: cheese, trout, dill, a turn of pepper.":
    "Arme al momento: queso, trucha, eneldo y una vuelta de pimienta.",

  // ---- 4 Mini Forfar Bridies ----
  "Do not pre-cook the beef. A bridie is filled raw, which is what keeps it juicy.":
    "No precocine la carne. El bridie se rellena crudo, y eso es lo que lo mantiene jugoso.",
  "Mix the mince with raw onion, ají amarillo, plenty of white pepper and salt. Add stock a splash at a time until the mix is loose but not wet.":
    "Mezcle la carne molida con cebolla cruda, ají amarillo, bastante pimienta blanca y sal. Agregue caldo de a chorritos hasta que la mezcla esté suelta pero no aguada.",
  "Cut 10 cm pastry rounds. Place 30 g of filling off-centre with a knob of butter on top.":
    "Corte discos de masa de 10 cm. Coloque 30 g de relleno descentrado con un trozo de mantequilla encima.",
  "Fold to a half-moon, crimp firmly, and cut a small steam vent in the top. The vent is not optional — without it they burst.":
    "Doble en media luna, selle firme y haga un pequeño corte de salida de vapor arriba. El corte no es opcional — sin él revientan.",
  "Chill 30 minutes. Egg wash.": "Refrigere 30 minutos. Pincele con huevo.",
  "Bake at 200 °C for 12 minutes, then 180 °C for 12 more until deep gold and the vent stops steaming.":
    "Hornee a 200 °C por 12 minutos, luego a 180 °C otros 12 hasta dorado profundo y que deje de salir vapor.",
  "Freeze raw. Bake from frozen at 190 °C, 30 minutes.":
    "Congele crudos. Hornee de congelado a 190 °C, 30 minutos.",
  "Best within the hour. They stay good warm for 90 minutes in a covered box with a cloth under the lid to catch steam.":
    "Mejor dentro de la hora. Se mantienen bien tibios 90 minutos en caja tapada con un paño bajo la tapa para atrapar el vapor.",

  // ---- 5 Scotch Pie Minis ----
  "Hot water crust: bring lard and water to a boil, pour into the flour and salt, and mix to a dough. Work it while hot.":
    "Masa de agua caliente: hierva la manteca con el agua, viértala sobre la harina y la sal y forme una masa. Trabájela caliente.",
  "Reserve a third for lids under a cloth. Mould the rest into 5 cm rings or a mini muffin tray while still warm and pliable.":
    "Reserve un tercio para las tapas bajo un paño. Moldee el resto en aros de 5 cm o molde de muffins mientras siga tibia y maleable.",
  "Let the cases cool and set — this is what gives the pie its straight sides.":
    "Deje que las bases enfríen y cuajen — eso es lo que le da al pie sus paredes rectas.",
  "Mix the lamb raw with ají panca, cumin, mace, white pepper, salt and just enough stock to loosen.":
    "Mezcle el cordero crudo con ají panca, comino, macis, pimienta blanca, sal y el caldo justo para soltarlo.",
  "Fill to the brim, top with a lid, seal, and cut a vent.":
    "Rellene hasta el borde, ponga la tapa, selle y haga un corte de vapor.",
  "Bake at 190 °C for 30 minutes. The traditional shape sits the lid below the rim so the top holds gravy.":
    "Hornee a 190 °C por 30 minutos. La forma tradicional deja la tapa bajo el borde para que arriba se sostenga la salsa.",
  "Bake a day ahead and reheat at 170 °C for 10 minutes. They are arguably better reheated.":
    "Hornee un día antes y recaliente a 170 °C por 10 minutos. Se puede decir que quedan mejor recalentados.",
  "Excellent. The hot water crust is engineered to travel — this is one of the most transport-proof things on the list.":
    "Excelente. La masa de agua caliente está diseñada para viajar — es de lo más resistente al transporte en esta carta.",

  // ---- 6 Haggis Sausage Rolls ----
  "Toast the oats until nutty. Cool.": "Tueste la avena hasta que huela a nuez. Enfríe.",
  "Mix lamb, oats, grated onion, chancaca, spices and stock. The mix should be tacky, not wet.":
    "Mezcle cordero, avena, cebolla rallada, chancaca, especias y caldo. La mezcla debe quedar pegajosa, no aguada.",
  "Pipe or roll into 3 cm logs along the length of pastry strips.":
    "Con manga o a mano, forme cilindros de 3 cm a lo largo de las tiras de masa.",
  "Roll, seal underneath, and chill 30 minutes before cutting — cold pastry cuts clean.":
    "Enrolle, selle por debajo y refrigere 30 minutos antes de cortar — la masa fría corta limpio.",
  "Cut into 5 cm lengths. Egg wash and scatter with oats.":
    "Corte en trozos de 5 cm. Pincele con huevo y espolvoree avena.",
  "Bake at 200 °C, 22–25 minutes, until the pastry is cooked underneath as well as on top.":
    "Hornee a 200 °C, 22–25 minutos, hasta que la masa esté cocida por debajo tanto como por arriba.",
  "Freeze raw in logs, cut from frozen, bake from frozen at 190 °C for 30 minutes.":
    "Congele crudos en cilindros, corte congelados y hornee de congelado a 190 °C por 30 minutos.",
  "90 minutes warm, indefinitely at room temperature. A reliable drop-off item.":
    "90 minutos tibios, indefinidamente a temperatura ambiente. Un producto confiable para entrega.",

  // ---- 7 Cullen Skink Croquettes ----
  "Warm the milk with the bay and the fish trimmings. Infuse 15 minutes, then strain.":
    "Caliente la leche con el laurel y los recortes de pescado. Infusione 15 minutos y cuele.",
  "Make a tight béchamel with the butter, flour and infused milk. Cook it out properly — 5 minutes minimum or it tastes of raw flour.":
    "Haga una bechamel espesa con la mantequilla, la harina y la leche infusionada. Cocínela bien — 5 minutos mínimo o sabrá a harina cruda.",
  "Fold in the riced potato, sweated leek and flaked fish. Season hard; potato flattens smoke.":
    "Integre la papa prensada, el poro sudado y el pescado desmenuzado. Sazone fuerte; la papa apaga el ahumado.",
  "Spread 3 cm deep on a tray. Chill at least 6 hours. This mix must be properly cold or it will not roll.":
    "Extienda 3 cm de alto en una bandeja. Refrigere al menos 6 horas. Esta mezcla debe estar bien fría o no se podrá bolear.",
  "Roll 30 g barrels, then flour, egg and panko.":
    "Forme barriles de 30 g y pase por harina, huevo y panko.",
  "Fry at 180 °C for 2–3 minutes. Deep colour, quick — you are heating through, not cooking.":
    "Fría a 180 °C por 2–3 minutos. Color profundo y rápido — está calentando por dentro, no cocinando.",
  "Roll and freeze. Fry from frozen at 170 °C for 5 minutes so the centre catches up.":
    "Bolee y congele. Fría de congelado a 170 °C por 5 minutos para que el centro alcance.",
  "20 minutes and no more. This is a fry-to-order item, which is why it wants a live station.":
    "20 minutos y no más. Es un producto para freír al momento, por eso pide estación en vivo.",

  // ---- 8 Lorne Sausage Sliders ----
  "Mix the rusk with cold water and let it hydrate 10 minutes.":
    "Mezcle el pan rallado con agua fría y déjelo hidratar 10 minutos.",
  "Combine both minces with the rusk and every spice. Work it hard with your hands for 3–4 minutes — Lorne needs the protein to bind or it crumbles when sliced.":
    "Combine las dos carnes molidas con el pan rallado y todas las especias. Trabaje fuerte con las manos 3–4 minutos — el Lorne necesita que la proteína ligue o se desmorona al cortar.",
  "Press into a lined loaf tin, 4 cm deep, flat and even. Chill overnight. This is not optional; it must be set to slice square.":
    "Presione en un molde forrado, 4 cm de alto, plano y parejo. Refrigere toda la noche. No es opcional; debe cuajar para cortarse cuadrado.",
  "Turn out and cut 1 cm slices, then cut those into squares to fit the rolls.":
    "Desmolde y corte rebanadas de 1 cm, luego córtelas en cuadrados del tamaño del pan.",
  "Griddle hard, 2 minutes a side. It should catch and colour.":
    "A la plancha fuerte, 2 minutos por lado. Debe agarrar color.",
  "Build with salsa criolla and a little brown sauce.":
    "Arme con salsa criolla y un poco de salsa marrón.",
  "The loaf keeps 3 days chilled or freezes sliced with paper between.":
    "El bloque dura 3 días refrigerado, o se congela en rebanadas con papel entre ellas.",
  "Griddle to order. Once built it is good for 20 minutes before the roll goes damp.":
    "A la plancha al momento. Ya armado aguanta 20 minutos antes de que el pan se humedezca.",

  // ---- 9 Tattie Scone & Black Pudding Bites ----
  "Rice the potato while hot and let the steam escape — wet potato makes glue.":
    "Prense la papa en caliente y deje escapar el vapor — la papa húmeda hace engrudo.",
  "Work in the flour, butter and salt to a soft dough. Handle it as little as possible.":
    "Integre la harina, la mantequilla y la sal hasta una masa suave. Manipúlela lo menos posible.",
  "Roll 5 mm and cut 4 cm rounds. Griddle dry, 2 minutes a side, until blistered.":
    "Estire a 5 mm y corte discos de 4 cm. A la plancha en seco, 2 minutos por lado, hasta que ampollen.",
  "Griddle the morcilla slices hard so the outside crisps and the inside stays soft.":
    "Pase las rodajas de morcilla por plancha fuerte para que afuera quede crocante y adentro suave.",
  "Fry the quail eggs to order in a blini pan, or soft-boil at 2 minutes 20 and halve.":
    "Fría los huevos de codorniz al momento en sartén pequeña, o cocínelos 2 minutos 20 y párta­los por la mitad.",
  "Stack: scone, morcilla, egg, a dot of ají aioli.":
    "Arme: scone, morcilla, huevo y un punto de alioli de ají.",
  "Scones hold 2 days and reheat on the griddle. Morcilla can be sliced ahead.":
    "Los scones aguantan 2 días y se recalientan en la plancha. La morcilla se puede cortar con anticipación.",

  // ---- 10 Potted Hough Toasts ----
  "Cover the shin with water and aromatics. Barely simmer 4 hours until the meat surrenders and the liquid is gelatinous.":
    "Cubra el osobuco con agua y aromáticos. Cocine a fuego muy bajo 4 horas hasta que la carne ceda y el líquido esté gelatinoso.",
  "Lift the meat, strain the stock, and reduce it hard to about 500 ml. It should set firm when a spoonful is chilled — test it before you go further.":
    "Retire la carne, cuele el caldo y redúzcalo fuerte hasta unos 500 ml. Debe cuajar firme al enfriar una cucharada — pruébelo antes de seguir.",
  "Shred the meat, discarding gristle but keeping fat.":
    "Deshilache la carne, descartando los cartílagos pero conservando la grasa.",
  "Season the meat hard with salt, pepper, parsley and finely minced ají limo. Cold food needs more salt than you think.":
    "Sazone la carne con fuerza: sal, pimienta, perejil y ají limo picado fino. La comida fría necesita más sal de lo que uno cree.",
  "Pack into terrines with the reduced stock, pressing out air. Chill overnight to set.":
    "Rellene las terrinas con el caldo reducido, sacando el aire. Refrigere toda la noche para que cuaje.",
  "Turn out, slice, and serve on toast with a sharp pickle.":
    "Desmolde, corte y sirva sobre tostada con un encurtido ácido.",
  "Sets better on day two and keeps five days. This is a make-ahead dish by nature.":
    "Cuaja mejor al segundo día y dura cinco. Es un plato para adelantar por naturaleza.",
  "Slice cold, serve within the hour. In Lima heat it softens fast — keep the terrine in the fridge and slice in batches.":
    "Corte en frío y sirva dentro de la hora. Con el calor de Lima se ablanda rápido — mantenga la terrina en refrigeración y corte por tandas.",

  // ---- 11 Whisky-Cured Trout Blinis ----
  "Mix salt, sugar and dill. Lay half on a tray, place the trout skin-down, cover with the rest and pour over the whisky.":
    "Mezcle sal, azúcar y eneldo. Ponga la mitad en una bandeja, coloque la trucha con la piel abajo, cubra con el resto y vierta el whisky.",
  "Cure 12 hours refrigerated under a light weight. Longer than 18 and it turns to leather.":
    "Cure 12 horas en refrigeración con un peso ligero. Más de 18 y se vuelve cuero.",
  "Rinse, pat dry, and slice thin on the bias. It slices best straight from the fridge.":
    "Enjuague, seque y corte fino al sesgo. Corta mejor recién sacada del frío.",
  "Blinis: whisk the batter to double cream consistency and rest 30 minutes. Cook 3 cm rounds on a dry griddle, 1 minute a side.":
    "Blinis: bata la masa hasta consistencia de crema espesa y deje reposar 30 minutos. Cocine discos de 3 cm en plancha seca, 1 minuto por lado.",
  "Top with crème fraîche, a fold of trout, half an aguaymanto and a frond of dill.":
    "Termine con crema fresca, un pliegue de trucha, medio aguaymanto y una ramita de eneldo.",
  "Cure up to 3 days ahead. Blinis keep a day and revive in a low oven for 3 minutes.":
    "Cure hasta 3 días antes. Los blinis duran un día y reviven en horno bajo por 3 minutos.",
  "Assembled, 30 minutes. The blini softens under the cream, so build at the venue.":
    "Ya armados, 30 minutos. El blini se ablanda bajo la crema, así que ármelos en el local.",

  // ---- 12 Crowdie & Aguaymanto Oatcakes ----
  "Crowdie substitute: warm the queso fresco with cream over low heat, then beat until smooth and thick. Season with salt and lemon zest.":
    "Sustituto del crowdie: caliente el queso fresco con crema a fuego bajo y bata hasta que quede liso y espeso. Sazone con sal y ralladura de limón.",
  "Hang it in muslin for 2 hours if it is loose — it must sit on an oatcake without sliding.":
    "Cuélguelo en tela por 2 horas si queda suelto — debe sostenerse sobre la galleta sin resbalar.",
  "Compote: simmer half the aguaymanto with sugar and vinegar 10 minutes until it breaks down. Fold in the rest raw for texture.":
    "Compota: cocine la mitad del aguaymanto con azúcar y vinagre 10 minutos hasta que se deshaga. Integre el resto crudo para dar textura.",
  "Cool both fully.": "Enfríe ambos por completo.",
  "Assemble: a quenelle of crowdie, a spoon of compote, cracked pepper.":
    "Arme: una quenelle de crowdie, una cucharada de compota y pimienta recién molida.",
  "Both components keep 4 days. The compote is better made a day ahead.":
    "Ambos componentes duran 4 días. La compota queda mejor hecha un día antes.",
  "Assemble within 30 minutes. Vegetarian, and one of the few canapés on the list that is.":
    "Arme dentro de 30 minutos. Vegetariano, y de los pocos canapés de la carta que lo son.",

  // ---- 3 Smoked Trout Oatcakes ----
  "50 oatcakes": "50 oatcakes",
  "avena molida, not flour-fine": "avena molida, no tan fina como harina",
  "Terminal Pesquero; smoke it yourself over tea and sugar if you can":
    "Terminal Pesquero; ahúmelo usted mismo con té y azúcar si puede",
  "Oatcakes keep two weeks in a sealed tin and are better on day two. Cheese base holds 3 days.":
    "Los oatcakes duran dos semanas en un tarro hermético y están mejor al segundo día. La base de queso aguanta 3 días.",
  "Assemble within 30 minutes of service. The oatcake goes soft under the cheese faster than you expect.":
    "Arme dentro de los 30 minutos previos al servicio. El oatcake se ablanda bajo el queso más rápido de lo que uno cree.",
  "Roll and cut in batches — the dough stiffens as it cools and cracks rather than rolls.":
    "Estire y corte por tandas — la masa se endurece al enfriar y se quiebra en lugar de estirarse.",

  // ---- 4 Mini Forfar Bridies ----
  "50 mini bridies": "50 mini bridies",
  "ask for a coarse mince from falda; fine mince goes pasty":
    "pida molida gruesa de falda; la molida fina queda pastosa",

  // ---- 5 Scotch Pie Minis ----
  "50 mini pies": "50 mini pies",
  "hot water crust": "masa de agua caliente",
  "shoulder, some fat left in": "bondiola, dejando algo de grasa",
  "The crust must be moulded warm. Work in batches of 20 cases or the dough sets in the bowl.":
    "La masa se moldea tibia. Trabaje en tandas de 20 moldes o la masa se cuaja en el bol.",

  // ---- 6 Haggis Sausage Rolls ----
  "50 rolls": "50 rolls",
  "the sweetness that stops it tasting like a plain sausage roll":
    "el dulzor que evita que sepa a un sausage roll cualquiera",
  "for the top": "para la superficie",

  // ---- 7 Cullen Skink Croquettes ----
  "50 croquettes": "50 croquetas",
  "Terminal Pesquero; smoked in-house if you have the means":
    "Terminal Pesquero; ahumado en casa si tiene con qué",
  "for a tight béchamel": "para una bechamel firme",
  "crumbing": "para apanar",
  "Do not exceed 12 in the fryer at once — the oil drops and they absorb it.":
    "No pase de 12 en la freidora a la vez — el aceite baja de temperatura y las croquetas lo absorben.",

  // ---- 8 Lorne Sausage Sliders ----
  "50 sliders": "50 sliders",
  "the pork is what makes it Lorne rather than a burger":
    "el cerdo es lo que lo hace Lorne y no una hamburguesa",
  "red onion, lime, ají limo, coriander": "cebolla roja, limón, ají limo, culantro",
  "One loaf tin per 25 sliders. Do not build a deeper block — the centre stays raw when you slice it.":
    "Un molde de keke por cada 25 sliders. No arme un bloque más alto — el centro queda crudo al cortarlo.",

  // ---- 9 Tattie Scone & Black Pudding Bites ----
  "50 bites": "50 bocaditos",
  "This is a live-station dish and only works as one. Assembled it survives about 10 minutes before the egg weeps into the scone.":
    "Este es un plato de estación en vivo y solo funciona así. Armado sobrevive unos 10 minutos antes de que el huevo humedezca el scone.",

  // ---- 10 Potted Hough Toasts ----
  "50 toasts": "50 tostadas",
  "The set depends on collagen, not gelatine. If you scale up, keep the bone-to-water ratio or it will not hold.":
    "El cuajado depende del colágeno, no de la gelatina. Si escala la receta, mantenga la proporción de hueso a agua o no cuaja.",

  // ---- 11 Whisky-Cured Trout Blinis ----
  "50 blinis": "50 blinis",
  "the cure": "para la curación",
  "blini batter": "para la masa de los blinis",
  "Cure in single layers. Stacked fillets cure unevenly and the middle stays raw.":
    "Cure en una sola capa. Los filetes apilados se curan disparejo y el centro queda crudo.",

  // ---- 12 Crowdie & Aguaymanto Oatcakes ----
  "as dish 3": "igual que el plato 3",

  // ---- 13 Smoked Paiche Pate ----
  "50 toasts, about 1.2 kg of pâté": "50 tostadas, unos 1,2 kg de paté",
  "plus 150 g clarified for the seal": "más 150 g clarificada para el sello",
  "Flake the fish, checking for bones. Keep a third in visible flakes and reserve.":
    "Desmenuce el pescado revisando que no queden espinas. Reserve un tercio en láminas visibles.",
  "Beat the softened butter with lemon zest, mace and cayenne until pale.":
    "Bata la mantequilla pomada con ralladura de limón, macis y cayena hasta que palidezca.",
  "Blitz two-thirds of the fish into the butter until smooth, then fold the reserved flakes through by hand.":
    "Licúe dos tercios del pescado con la mantequilla hasta que quede liso, luego integre a mano las láminas reservadas.",
  "Season with lemon juice and salt. Taste cold — chilled fat mutes seasoning badly.":
    "Sazone con jugo de limón y sal. Pruebe frío — la grasa fría apaga muchísimo la sazón.",
  "Pack into pots or a terrine, smooth the top, and pour over clarified butter to seal 3 mm deep.":
    "Llene potes o una terrina, alise la superficie y cubra con mantequilla clarificada sellando 3 mm de espesor.",
  "Chill 4 hours until the seal sets.": "Refrigere 4 horas hasta que el sello cuaje.",
  "Sealed pots keep 10 days. Once broken, 3 days.":
    "Los potes sellados duran 10 días. Una vez abiertos, 3 días.",
  "The butter seal is the point — this travels better than almost anything else on the list. Serve at cool room temperature, not fridge-cold.":
    "El sello de mantequilla es todo el punto — esto viaja mejor que casi cualquier otra cosa de la carta. Sirva a temperatura ambiente fresca, no helado de refrigeradora.",

  // ---- 14 Stovie Croquettes ----
  "this dish exists to use yesterday's service": "este plato existe para aprovechar el servicio de ayer",
  "Mash the stovies coarse — texture is the point, this is not a purée.":
    "Aplaste los stovies grueso — la textura es el punto, esto no es un puré.",
  "Fold in the sweated onion and huacatay. Season aggressively.":
    "Integre la cebolla sudada y el huacatay. Sazone con fuerza.",
  "If the mix will not hold a shape, work in flour a spoon at a time. Too much and they go pasty.":
    "Si la mezcla no toma forma, agregue harina de a una cuchara. Demasiada y quedan pastosas.",
  "Chill 4 hours minimum.": "Refrigere 4 horas como mínimo.",
  "Roll 30 g balls, crumb, and fry at 180 °C for 3 minutes.":
    "Bolee de 30 g, apane y fría a 180 °C por 3 minutos.",
  "Crumb and freeze. Fry from frozen at 170 °C for 5 minutes.":
    "Apane y congele. Fría desde congelado a 170 °C por 5 minutos.",
  "30 minutes crisp. Fry-to-order for anything better.":
    "30 minutos crocantes. Para algo mejor, fría al momento.",
  "Costed as a use-up dish. If you make the stovies specially the food cost roughly doubles.":
    "Costeado como plato de aprovechamiento. Si hace los stovies a propósito, el costo de insumos se duplica más o menos.",

  // ---- 15 Cock-a-Leekie Tartlets ----
  "50 tartlets": "50 tartaletas",
  "the traditional sweet note; keep them fine or they dominate":
    "la nota dulce tradicional; píquelas finas o dominan todo",
  "Line 5 cm tartlet moulds, dock the bases, and blind bake at 180 °C for 12 minutes until dry.":
    "Forre moldes de tartaleta de 5 cm, pinche las bases y hornee en blanco a 180 °C por 12 minutos hasta que estén secas.",
  "Sweat the leeks in butter over low heat for 20 minutes. They should collapse without colouring.":
    "Sude el poro en mantequilla a fuego bajo por 20 minutos. Debe deshacerse sin tomar color.",
  "Fold in the shredded chicken, choclo, prunes, reduced stock and cream. The mix should be thick enough to mound.":
    "Integre el pollo deshilachado, el choclo, las ciruelas, el caldo reducido y la crema. La mezcla debe quedar lo bastante espesa para montar.",
  "Season well. Cock-a-leekie wants more pepper than seems reasonable.":
    "Sazone bien. El cock-a-leekie pide más pimienta de la que parece razonable.",
  "Fill the cases and bake 10 minutes at 180 °C to set.":
    "Rellene las bases y hornee 10 minutos a 180 °C para que cuaje.",
  "Cases keep 3 days in a tin. Filling holds 2 days. Assemble and bake on the day.":
    "Las bases duran 3 días en un tarro. El relleno aguanta 2 días. Arme y hornee el mismo día.",
  "Good warm or at room temperature for 2 hours. A dependable drop-off item.":
    "Bueno tibio o a temperatura ambiente por 2 horas. Un producto confiable para entrega.",

  // ---- 16 Anticucho, Whisky Glaze ----
  "50 skewers": "50 brochetas",
  "the glaze": "para el glaseado",
  "Trim the heart properly. Every piece of silverskin left on will be rubbery — this is most of the work.":
    "Limpie bien el corazón. Cada telilla que quede se pone chiclosa — en esto se va la mayor parte del trabajo.",
  "Marinate the cubes in ají panca, garlic, cumin, vinegar and salt for at least 4 hours, ideally overnight.":
    "Macere los cubos en ají panca, ajo, comino, vinagre y sal por lo menos 4 horas, idealmente toda la noche.",
  "Melt the chancaca into the whisky and reduce to a loose syrup. Keep warm.":
    "Derrita la chancaca en el whisky y reduzca a un almíbar ligero. Manténgalo tibio.",
  "Thread 3 cubes per skewer.": "Ensarte 3 cubos por brocheta.",
  "Grill over the hottest heat you have, 2 minutes a side. Beef heart is lean and goes to leather if you take it past medium.":
    "Ase al fuego más fuerte que tenga, 2 minutos por lado. El corazón es magro y se vuelve cuero si lo pasa del término medio.",
  "Brush with the whisky glaze as they come off, not before — the sugar burns.":
    "Pincele con el glaseado de whisky al sacarlas, no antes — el azúcar se quema.",
  "Marinate and skewer a day ahead. Glaze keeps a week.":
    "Macere y ensarte un día antes. El glaseado dura una semana.",
  "Serve within 10 minutes of the grill. This is a live-station dish and does not survive a box.":
    "Sirva dentro de los 10 minutos de salir de la parrilla. Es un plato de estación en vivo y no sobrevive una caja.",
  "Grill in relays of 15. Crowding the grill drops the heat and they stew.":
    "Ase en tandas de 15. Saturar la parrilla baja el calor y las brochetas se guisan.",

  // ---- 17 Chicharron & Black Pudding Buns ----
  "50 buns": "50 panes",
  "red onion, lime, ají limo, coriander — dressed at the last minute":
    "cebolla roja, limón, ají limo, culantro — aderezada al último minuto",
  "Score the skin. Rub salt, cumin and garlic into the flesh side only; keep the skin dry.":
    "Marque la piel. Frote sal, comino y ajo solo por el lado de la carne; mantenga la piel seca.",
  "Roast at 160 °C for 2.5 hours, then 220 °C for 20 minutes to blister the crackling.":
    "Hornee a 160 °C por 2,5 horas, luego a 220 °C por 20 minutos para reventar el cuero.",
  "Rest 30 minutes, then slice thick.": "Deje reposar 30 minutos y corte grueso.",
  "Griddle the morcilla until crisp at the edges.":
    "Haga la morcilla a la plancha hasta que quede crocante en los bordes.",
  "Build: pork, a slice of morcilla, salsa criolla on top so the acid cuts down through the fat.":
    "Arme: cerdo, una rodaja de morcilla y salsa criolla encima, para que la acidez corte la grasa de arriba hacia abajo.",
  "Dress the salsa criolla no more than 15 minutes before service or the onion goes limp and grey.":
    "Adere la salsa criolla no más de 15 minutos antes del servicio o la cebolla se aguada y se pone gris.",
  "Roast the belly a day ahead and reheat in slices. Crackling will not survive — re-crisp it separately under a grill.":
    "Hornee la panceta un día antes y recaliéntela en rodajas. El cuero no sobrevive — vuélvalo a tostar aparte bajo el grill.",
  "45 minutes assembled before the bun goes greasy. Send components separately for drop-off.":
    "45 minutos armado antes de que el pan se engrase. Para entrega, mande los componentes por separado.",

  // ---- 18 Prawn Cocktail Chifles ----
  "50 pieces": "50 piezas",
  "Slice the plantain paper-thin on a mandoline and fry at 170 °C until rigid and pale gold. Salt immediately.":
    "Corte el plátano finísimo en mandolina y fría a 170 °C hasta que quede rígido y dorado claro. Sale de inmediato.",
  "Poach the langostinos 90 seconds in salted water, then plunge into iced water. Overcooked prawn is the usual failure here.":
    "Escalfe los langostinos 90 segundos en agua con sal y páselos a agua con hielo. El langostino pasado de cocción es la falla habitual.",
  "Chop them coarse — a prawn cocktail should have bite.":
    "Píquelos grueso — un cóctel de langostinos debe tener mordida.",
  "Marie Rose: mayonnaise, ketchup, pisco, paprika, lime juice and a good hit of salt.":
    "Salsa Marie Rose: mayonesa, kétchup, pisco, páprika, jugo de limón y una buena carga de sal.",
  "Dress the prawns just before service.": "Adere los langostinos justo antes del servicio.",
  "Top each chifle with a pinch of lettuce and a spoon of prawns.":
    "Corone cada chifle con una pizca de lechuga y una cucharada de langostinos.",
  "Chifles keep 3 days in a sealed tin. Sauce keeps 5 days. Prawns poach a day ahead.":
    "Los chifles duran 3 días en un tarro hermético. La salsa dura 5 días. Los langostinos se escalfan un día antes.",
  "Ten minutes. The chifle goes soft on contact, so assemble in front of the guest or send as a component box.":
    "Diez minutos. El chifle se ablanda al contacto, así que arme delante del invitado o mándelo como caja de componentes.",

  // ---- 19 Devils on Horseback ----
  "optional glaze": "glaseado opcional",
  "Soak the figs in warm pisco for an hour until plump. Drain and reserve the liquor.":
    "Remoje los higos en pisco tibio por una hora hasta que se hinchen. Escurra y reserve el licor.",
  "Push a toasted pecan into each fig.": "Meta una pecana tostada dentro de cada higo.",
  "Wrap in bacon, overlapping, and secure with a cocktail stick.":
    "Envuelva en tocino, montando los bordes, y asegure con un palito de cóctel.",
  "Roast at 200 °C for 12–15 minutes, turning once, until the bacon is crisp all over.":
    "Hornee a 200 °C por 12–15 minutos, volteando una vez, hasta que el tocino esté crocante por todos lados.",
  "Brush with chancaca melted into the reserved pisco as they come out.":
    "Al salir, pincele con chancaca derretida en el pisco reservado.",
  "Wrap a day ahead and hold raw in the fridge. They roast from cold in 18 minutes.":
    "Envuelva un día antes y guarde crudos en la refrigeradora. Se hornean desde frío en 18 minutos.",
  "Good for an hour and reheatable, which makes them one of the more forgiving hot canapés.":
    "Aguantan una hora y se recalientan, lo que los hace de los bocaditos calientes más indulgentes.",
  "Roast on racks, not flat trays — sitting in rendered fat makes the bacon flabby.":
    "Hornee sobre rejillas, no sobre bandejas planas — sentados en su propia grasa el tocino queda blandengue.",

  // ---- 20 Tortilla & Morcilla Pintxo ----
  "50 pintxos": "50 pintxos",
  "optional base": "base opcional",
  "Confit the potato and onion gently in oil at 140 °C until tender but intact, about 20 minutes. Do not fry them.":
    "Confite la papa y la cebolla suavemente en aceite a 140 °C hasta que estén tiernas pero enteras, unos 20 minutos. No las fría.",
  "Drain well, reserving the oil.": "Escurra bien, reservando el aceite.",
  "Fry the morcilla crumb separately until crisp.":
    "Fría aparte la morcilla desmenuzada hasta que esté crocante.",
  "Beat the eggs, season hard, and fold in the potato, onion and most of the morcilla. Let it sit 10 minutes — this is what makes a tortilla rather than an omelette.":
    "Bata los huevos, sazone con fuerza e integre la papa, la cebolla y casi toda la morcilla. Deje reposar 10 minutos — eso es lo que la hace tortilla y no omelette.",
  "Cook in a wide pan over low heat until the base sets, then finish in a 170 °C oven for 12 minutes. The centre should still wobble.":
    "Cocine en una sartén amplia a fuego bajo hasta que cuaje la base, luego termine en horno a 170 °C por 12 minutos. El centro debe seguir temblando.",
  "Cool completely before cutting into 3 cm squares. Top with the reserved morcilla.":
    "Enfríe por completo antes de cortar en cuadrados de 3 cm. Corone con la morcilla reservada.",
  "Best made the morning of service. It suffers in the fridge overnight.":
    "Mejor hecha la mañana del servicio. Sufre si pasa la noche en la refrigeradora.",
  "Excellent at room temperature for 3 hours. One of the strongest drop-off canapés on the list.":
    "Excelente a temperatura ambiente por 3 horas. Uno de los bocaditos de entrega más sólidos de la carta.",

  // ---- 21 Gilda Pintxo, Aji Limo ----
  "meaty and salty; the whole point of this pintxo":
    "carnosas y saladas; en eso consiste todo el pintxo",
  "If pickling your own ají limo: split, deseed, and steep in warm 2:1 vinegar-to-water with a little sugar for 24 hours.":
    "Si encurte su propio ají limo: ábralo, despepítelo y déjelo 24 horas en vinagre y agua tibios 2:1 con un poco de azúcar.",
  "Thread olive, a folded anchovy, then the chilli.":
    "Ensarte aceituna, una anchoa doblada y luego el ají.",
  "Lay on a tray and spoon over olive oil.":
    "Acomode en una bandeja y rocíe con aceite de oliva.",
  "Serve cold. Three ingredients, no cooking — the discipline is entirely in sourcing.":
    "Sirva frío. Tres ingredientes, sin cocción — toda la disciplina está en la compra.",
  "Taste an anchovy before you commit to a brand. A cheap one ruins this.":
    "Pruebe una anchoa antes de casarse con una marca. Una barata arruina el plato.",
  "Assemble a day ahead and keep covered in oil.":
    "Arme un día antes y guarde cubierto en aceite.",
  "Indefinitely at room temperature during service. Zero risk, zero labour on the day — useful ballast on a heavy menu.":
    "Indefinidamente a temperatura ambiente durante el servicio. Cero riesgo, cero trabajo el día del evento — buen lastre en una carta pesada.",

  // ---- 22 Spanakopita Cigars ----
  "50 cigars": "50 cigarros",
  "standing in for feta": "en reemplazo del feta",
  "imported; price it before you commit — this is an unverified cost":
    "importado; cotícelo antes de comprometerse — este costo no está verificado",
  "Squeeze the greens harder than you think necessary. Wet filling is the only way this dish fails.":
    "Exprima las hojas más de lo que le parezca necesario. Un relleno húmedo es la única forma en que este plato falla.",
  "Mix greens, both cheeses, spring onion, egg, nutmeg and plenty of pepper.":
    "Mezcle las hojas, los dos quesos, la cebolla china, el huevo, la nuez moscada y bastante pimienta.",
  "Cut filo into 10 cm strips, brush with butter, and layer two deep.":
    "Corte la masa filo en tiras de 10 cm, pincele con mantequilla y superponga de dos en dos.",
  "Pipe filling along one end, fold the sides in, and roll into a cigar.":
    "Ponga el relleno con manga a lo largo de un extremo, doble los lados hacia adentro y enrolle como cigarro.",
  "Brush the outside with butter and bake at 190 °C for 18–20 minutes until uniformly gold.":
    "Pincele por fuera con mantequilla y hornee a 190 °C por 18–20 minutos hasta que dore parejo.",
  "Work with the filo under a damp cloth or it shatters.":
    "Trabaje la masa filo bajo un paño húmedo o se quiebra.",
  "Roll and freeze raw. Bake from frozen at 180 °C, 25 minutes.":
    "Enrolle y congele crudos. Hornee desde congelado a 180 °C, 25 minutos.",
  "Crisp for 45 minutes. They soften in a closed box, so transport in a perforated tray.":
    "Crocantes 45 minutos. Se ablandan en caja cerrada, así que transpórtelos en bandeja perforada.",
  "Filo dries out fast in Lima's coastal air. Roll in batches of 20 with the rest covered.":
    "La masa filo se seca rápido con el aire de la costa limeña. Enrolle en tandas de 20 y mantenga el resto tapado.",

  // ---- 23 Keftedes with Huacatay ----
  "50 meatballs": "50 albóndigas",
  "replaces mint; earthier, and it works": "reemplaza a la menta; más terroso, y funciona",
  "for the dip": "para la salsa de acompañamiento",
  "Squeeze the soaked bread lightly — damp, not dripping.":
    "Exprima el pan remojado ligeramente — húmedo, no chorreando.",
  "Mix lamb, bread, grated onion, herbs, oregano and egg. Season hard.":
    "Mezcle el cordero, el pan, la cebolla rallada, las hierbas, el orégano y el huevo. Sazone con fuerza.",
  "Fry a teaspoon of the mix and taste it. Always taste before you roll 50 of anything.":
    "Fría una cucharadita de la mezcla y pruébela. Siempre pruebe antes de bolear 50 de lo que sea.",
  "Roll 30 g balls and chill 30 minutes to firm.":
    "Bolee de 30 g y refrigere 30 minutos para que tomen firmeza.",
  "Fry in a little oil until browned all over, then finish in a 180 °C oven for 8 minutes.":
    "Fría en poco aceite hasta dorar por todos lados y termine en horno a 180 °C por 8 minutos.",
  "Serve with yoghurt whipped with lemon, garlic and salt.":
    "Sirva con yogur batido con limón, ajo y sal.",
  "Roll and refrigerate a day ahead, or freeze raw.":
    "Bolee y refrigere un día antes, o congele crudas.",
  "An hour warm; also good at room temperature, which most hot canapés are not.":
    "Una hora tibias; también buenas a temperatura ambiente, cosa que la mayoría de bocaditos calientes no logra.",

  // ---- 24 Rye & Trout Smorrebrod Bites ----
  "bake it or buy from a European bakery; standard pan francés will not hold":
    "hornéelo o cómprelo en una panadería europea; el pan francés común no aguanta",
  "Quick-pickle the onion: 20 minutes in warm vinegar with a pinch of sugar and salt. It should turn bright pink.":
    "Encurta la cebolla rápido: 20 minutos en vinagre tibio con una pizca de azúcar y sal. Debe quedar rosada intensa.",
  "Cut the rye into 4 cm squares. Butter them right to the edge — the butter is a moisture barrier, not a flavouring.":
    "Corte el pan de centeno en cuadrados de 4 cm. Enmantequíllelos hasta el borde — la mantequilla es una barrera contra la humedad, no un saborizante.",
  "Fold the trout on top rather than laying it flat. Smørrebrød is built for height.":
    "Coloque la trucha doblada encima en vez de plana. El smørrebrød se arma con altura.",
  "Add crème fraîche, pickled onion and dill.":
    "Agregue crema fresca, cebolla encurtida y eneldo.",
  "Finish with lemon zest and cracked pepper.":
    "Termine con ralladura de limón y pimienta molida gruesa.",
  "Components all hold 3 days. The bread is better on day two.":
    "Todos los componentes aguantan 3 días. El pan está mejor al segundo día.",
  "45 minutes assembled, thanks to the butter barrier. Better than most open sandwiches.":
    "45 minutos armado, gracias a la barrera de mantequilla. Mejor que la mayoría de sándwiches abiertos.",

  // ---- 25 Quail Scotch Eggs ----
  "50 halves": "50 mitades",
  "allow breakages; buy 36": "cuente con roturas; compre 36",
  "Boil the quail eggs exactly 2 minutes 20 seconds, then straight into iced water.":
    "Hierva los huevos de codorniz exactamente 2 minutos 20 segundos y páselos directo a agua con hielo.",
  "Peel under water — quail shells are stubborn and the membrane tears the white if you rush.":
    "Pele bajo el agua — la cáscara de codorniz es terca y la membrana rompe la clara si uno se apura.",
  "Mix sausage meat, morcilla, oats and spices.":
    "Mezcle la carne de salchicha, la morcilla, la avena y las especias.",
  "Flatten 25 g of mix in your palm, wrap around each egg, and seal completely. Any gap opens in the fryer.":
    "Aplaste 25 g de mezcla en la palma, envuelva cada huevo y selle por completo. Cualquier abertura se abre en la freidora.",
  "Flour, egg, panko. Chill 30 minutes.": "Harina, huevo, panko. Refrigere 30 minutos.",
  "Fry at 170 °C for 4 minutes. Rest 5 minutes, then halve with a very sharp knife.":
    "Fría a 170 °C por 4 minutos. Repose 5 minutos y parta por la mitad con un cuchillo bien filoso.",
  "Fry a day ahead and serve at room temperature, which is traditional and easier.":
    "Fría un día antes y sirva a temperatura ambiente, que es lo tradicional y lo más fácil.",
  "Whole, several hours. Once halved the yolk dries within 30 minutes, so cut close to service.":
    "Enteros, varias horas. Partidos, la yema se seca en 30 minutos, así que corte cerca del servicio.",
  "Peeling is the bottleneck: budget an hour per 50 eggs and do it the day before.":
    "Pelar es el cuello de botella: calcule una hora por cada 50 huevos y hágalo el día anterior.",

  // ---- 26 Lomo Wellington ----
  "20 portions": "20 porciones",
  "Oregon Foods; this single line drives the whole plated tier's cost":
    "Oregon Foods; esta sola línea determina el costo de todo el nivel emplatado",
  "the moisture barrier": "la barrera contra la humedad",
  "demi-glace base": "base de demi-glace",
  "finishing the sauce": "para terminar la salsa",
  "Duxelles: cook the mushroom paste in a dry wide pan until every drop of water has gone, 25–35 minutes. This is the step people rush and it is why Wellingtons go soggy.":
    "Duxelles: cocine la pasta de champiñones en una sartén amplia y seca hasta que se evapore hasta la última gota de agua, 25–35 minutos. Este es el paso que la gente apura, y por eso los Wellington quedan aguados.",
  "Add shallot and ají amarillo, cook out 5 minutes, season hard. Cool completely.":
    "Agregue el chalote y el ají amarillo, cocine 5 minutos, sazone con fuerza. Enfríe por completo.",
  "Sear the tenderloin hard on every surface, 60 seconds a side. Cool, then brush with mustard.":
    "Selle el lomo fino con fuerza por todas sus caras, 60 segundos por lado. Enfríe y pincele con mostaza.",
  "Lay crêpes or prosciutto on cling film, spread the duxelles, roll the beef inside tightly, and chill 1 hour to set the cylinder.":
    "Extienda crepes o prosciutto sobre film, unte la duxelles, enrolle la carne bien apretada dentro y refrigere 1 hora para que el cilindro tome forma.",
  "Wrap in puff pastry, seal, chill another 30 minutes. Egg wash twice, scoring between.":
    "Envuelva en hojaldre, selle y refrigere otros 30 minutos. Pincele con huevo dos veces, marcando entre una y otra.",
  "Bake at 200 °C for 20 minutes, then 180 °C until the core reads 52 °C for medium rare, about 15 minutes more.":
    "Hornee a 200 °C por 20 minutos, luego a 180 °C hasta que el centro marque 52 °C para término medio rojo, unos 15 minutos más.",
  "Rest 15 minutes before slicing. Sauce: whisk the ají amarillo into the reduced stock off the heat, with a little butter.":
    "Repose 15 minutos antes de cortar. Salsa: integre el ají amarillo al caldo reducido fuera del fuego, con un poco de mantequilla.",
  "Assemble to the pastry stage a day ahead. Do not bake ahead — a reheated Wellington is a different, worse dish.":
    "Arme hasta la etapa del hojaldre un día antes. No lo hornee con anticipación — un Wellington recalentado es otro plato, y peor.",
  "Slice to order. It holds 20 minutes at most before the pastry base goes. This is why it is plated-tier only.":
    "Corte al momento. Aguanta 20 minutos como máximo antes de que ceda la base de hojaldre. Por eso es solo del nivel emplatado.",
  "Make cylinders of 5 portions, not one long one. A 20-portion log cooks unevenly and you lose the ends.":
    "Haga cilindros de 5 porciones, no uno solo largo. Un rollo de 20 porciones se cocina disparejo y se pierden los extremos.",

  // ---- 27 Chicken Balmoral ----
  "standing in for haggis": "en reemplazo del haggis",
  "Butterfly each breast and open it out between cling film. Do not pound it thin — you need enough thickness to hold a filling.":
    "Abra cada pechuga en mariposa y extiéndala entre dos films. No la aplaste demasiado — necesita grosor para sostener el relleno.",
  "Roll 40 g of morcilla into a log and place along the centre.":
    "Forme un cilindro con 40 g de morcilla y colóquelo a lo largo del centro.",
  "Close the breast around it, then wrap in overlapping bacon, which is what holds the whole thing together.":
    "Cierre la pechuga alrededor y envuelva con tocino montado, que es lo que mantiene todo unido.",
  "Sear seam-side down first to set the bacon, then all over.":
    "Selle primero con la unión hacia abajo para fijar el tocino, y luego por todos lados.",
  "Roast at 180 °C for 20–25 minutes until the core reads 68 °C.":
    "Hornee a 180 °C por 20–25 minutos hasta que el centro marque 68 °C.",
  "Sauce: deglaze the pan with whisky, flame or reduce by half, add stock, reduce, then cream and mustard. Reduce to coating consistency.":
    "Salsa: desglase la sartén con whisky, flambee o reduzca a la mitad, agregue caldo, reduzca, y luego crema y mostaza. Reduzca hasta que nape la cuchara.",
  "Rest 10 minutes before slicing on the bias so the spiral shows.":
    "Repose 10 minutos antes de cortar en diagonal para que se vea la espiral.",
  "Wrap raw a day ahead. The sauce holds 3 days.":
    "Envuelva crudo un día antes. La salsa aguanta 3 días.",
  "Better than the Wellington — 40 minutes in a warm holding cabinet without real damage. A sensible plated main when the kitchen is remote.":
    "Mejor que el Wellington — 40 minutos en gabinete caliente sin daño real. Un fondo emplatado sensato cuando la cocina está lejos.",

  // ---- 28 Cullen Skink Chupe ----
  "Poach the smoked fish in the milk with bay for 8 minutes. Lift out, flake, and keep the milk — it is now the base of the soup.":
    "Escalfe el pescado ahumado en la leche con laurel por 8 minutos. Retire, desmenuce y guarde la leche — ahora es la base de la sopa.",
  "Sweat the leek and onion in butter, low and slow, 15 minutes with no colour.":
    "Sude el poro y la cebolla en mantequilla, a fuego bajo y despacio, 15 minutos sin tomar color.",
  "Add the potato and the infused milk. Simmer until the potato is soft, 20 minutes.":
    "Agregue la papa y la leche infusionada. Cocine a fuego lento hasta que la papa esté suave, 20 minutos.",
  "Crush about a third of the potato against the side of the pan. Do not blend it — chupe and cullen skink are both textured soups.":
    "Aplaste alrededor de un tercio de la papa contra la pared de la olla. No lo licúe — tanto el chupe como el cullen skink son sopas con textura.",
  "Return the flaked fish, add stock to loosen, and warm through without boiling.":
    "Devuelva el pescado desmenuzado, agregue caldo para aligerar y caliente sin que hierva.",
  "Season carefully: smoked fish is already salty. Finish with chives and a lot of black pepper.":
    "Sazone con cuidado: el pescado ahumado ya es salado. Termine con cebollín y bastante pimienta negra.",
  "Better on day two. Keeps 3 days chilled.":
    "Mejor al segundo día. Dura 3 días refrigerado.",
  "Excellent. Holds hot for hours and reheats without splitting, provided you never let it boil.":
    "Excelente. Aguanta caliente por horas y se recalienta sin cortarse, siempre que nunca lo deje hervir.",
  "Scales cleanly to any volume — one of the few dishes here that does.":
    "Escala sin problemas a cualquier volumen — de los pocos platos de esta carta que lo hacen.",

  // ---- 29 Scotch Pie ----
  "20 pies": "20 pies",
  "Make the hot water crust and mould 9 cm cases while warm, leaving the traditional collar standing proud of the filling.":
    "Prepare la masa de agua caliente y moldee bases de 9 cm en tibio, dejando el cuello tradicional sobresaliendo del relleno.",
  "Let the cases cool and firm before filling.":
    "Deje que las bases enfríen y tomen firmeza antes de rellenar.",
  "Mix the lamb raw with the spices and just enough stock to loosen. Never pre-cook the filling.":
    "Mezcle el cordero crudo con las especias y el caldo justo para aligerar. Nunca precocine el relleno.",
  "Fill to just below the collar. Cap with a pastry lid set low, so the rim forms a well for gravy.":
    "Rellene hasta justo debajo del cuello. Tape con una tapa de masa hundida, de modo que el borde forme un pocito para la salsa.",
  "Cut a steam vent in the lid, or the filling will lift it off during baking.":
    "Haga un respiradero en la tapa, o el relleno la levantará durante el horneado.",
  "Bake at 190 °C for 35 minutes. Serve with gravy poured into the well.":
    "Hornee a 190 °C por 35 minutos. Sirva con la salsa vertida en el pocito.",
  "Bake a day ahead. Reheat 12 minutes at 175 °C.":
    "Hornee un día antes. Recaliente 12 minutos a 175 °C.",
  "Very well. The straight-sided crust is structural and this travels intact.":
    "Muy bien. La masa de paredes rectas es estructural y esto viaja intacto.",
  "Mould in batches of 10 — the dough sets hard once it drops below hand-warm.":
    "Moldee en tandas de 10 — la masa se endurece apenas baja de la temperatura de la mano.",

  // ---- 30 Hogmanay Steak Pie ----
  "Cusqueña Negra; the malt does the same job as stout":
    "Cusqueña Negra; la malta hace el mismo trabajo que la stout",
  "sour and malty — this is the Peruvian half of the dish":
    "ácida y maltosa — esta es la mitad peruana del plato",
  "Brown the beef hard in batches. Crowding the pan is the difference between a braise and a stew.":
    "Dore la carne con fuerza por tandas. Saturar la olla es la diferencia entre un braseado y un guiso.",
  "Sweat the onion and carrot in the same pan, add tomato paste and cook it out until it darkens.":
    "Sude la cebolla y la zanahoria en la misma olla, agregue la pasta de tomate y cocínela hasta que oscurezca.",
  "Deglaze with the beer and chicha de jora, scraping the base.":
    "Desglase con la cerveza y la chicha de jora, raspando el fondo.",
  "Return the beef, add stock to barely cover, and braise at 150 °C for 3 hours until it yields to a spoon.":
    "Devuelva la carne, agregue caldo apenas hasta cubrir y brasee a 150 °C por 3 horas hasta que ceda a la cuchara.",
  "Cool completely and skim the fat. Reduce the liquor if it is thin — a wet filling lifts the pastry off.":
    "Enfríe por completo y desgrase. Reduzca el líquido si está aguado — un relleno húmedo despega la masa.",
  "Fill a deep dish, top with puff pastry, egg wash, and bake at 200 °C for 30 minutes.":
    "Llene una fuente honda, cubra con hojaldre, pincele con huevo y hornee a 200 °C por 30 minutos.",
  "The braise is better made 2 days ahead. Top and bake on the day. Traditionally a Hogmanay dish, which makes it the anchor of a New Year menu.":
    "El braseado queda mejor hecho 2 días antes. Tape y hornee el mismo día. Es un plato tradicional de Hogmanay, lo que lo vuelve el ancla de una carta de Año Nuevo.",
  "The braise holds indefinitely; the pastry does not. Bake on site if you can.":
    "El braseado aguanta indefinidamente; la masa no. Hornee en el local si puede.",
  "Braise scales well. Bake in dishes of 6–8 portions rather than one large tray so the pastry cooks through.":
    "El braseado escala bien. Hornee en fuentes de 6–8 porciones en lugar de una bandeja grande, para que la masa se cocine por completo.",

  // ---- 31 Haggis Shepherd's Pie ----
  "for the mash": "para el puré",
  "Brown the lamb hard in batches. Grey mince makes grey pie.":
    "Dore el cordero con fuerza por tandas. Carne molida gris hace un pie gris.",
  "Sweat onion and carrot in the fat, then return the lamb with the toasted oats, spices and stock.":
    "Sude la cebolla y la zanahoria en la grasa, luego devuelva el cordero con la avena tostada, las especias y el caldo.",
  "Simmer 40 minutes until the oats swell and the mix thickens to a spoonable ragù. It should not be soupy — a wet base floods the mash.":
    "Cocine a fuego lento 40 minutos hasta que la avena hinche y la mezcla espese como un ragú de cuchara. No debe quedar caldoso — una base húmeda inunda el puré.",
  "Rice the papa amarilla while hot, beat in butter and warm milk, and season hard. Papa amarilla takes more salt than a white potato.":
    "Pase la papa amarilla por prensapuré en caliente, incorpore mantequilla y leche tibia, y sazone con fuerza. La papa amarilla pide más sal que la papa blanca.",
  "Spread the lamb in a deep tray, cool slightly so it skins over, then pipe or fork the mash on top.":
    "Extienda el cordero en una bandeja honda, enfríe un poco para que forme una película y ponga el puré encima con manga o tenedor.",
  "Bake at 190 °C for 25 minutes until the ridges catch.":
    "Hornee a 190 °C por 25 minutos hasta que las crestas se doren.",
  "Assemble a day ahead, unbaked. From cold it needs 40 minutes.":
    "Arme un día antes, sin hornear. Desde frío necesita 40 minutos.",
  "Very well — an hour in a warm cabinet without damage. One of the safest buffet mains on the list.":
    "Muy bien — una hora en gabinete caliente sin daño. Uno de los fondos de buffet más seguros de la carta.",
  "Bake in trays of 8 portions rather than one large one, or the centre is cold when the edges are done.":
    "Hornee en bandejas de 8 porciones en vez de una sola grande, o el centro queda frío cuando los bordes ya están listos.",

  // ---- 32 Mince & Tatties ----
  "coarse; ask for falda rather than a fine mince":
    "gruesa; pida falda en lugar de molida fina",
  "only if it needs tightening": "solo si hay que espesar",
  "Brown the mince in batches until genuinely dark. This dish has nowhere to hide, so the colour is the flavour.":
    "Dore la carne molida por tandas hasta que quede realmente oscura. Este plato no tiene dónde esconderse: el color es el sabor.",
  "Add onion and cook until soft, then the ají panca, and cook it out 3 minutes.":
    "Agregue la cebolla y cocine hasta ablandar, luego el ají panca, y cocínelo 3 minutos.",
  "Add stock and Worcestershire, and simmer uncovered 35 minutes.":
    "Agregue caldo y salsa inglesa, y cocine destapado 35 minutos.",
  "Judge the consistency: it should coat a spoon and sit on mash without running. Slake cornflour only if it will not reduce in time.":
    "Juzgue la consistencia: debe napar la cuchara y quedarse sobre el puré sin correrse. Disuelva chuño solo si no alcanza a reducir a tiempo.",
  "Mash the papa amarilla with butter and milk. Season both components separately and hard.":
    "Haga puré la papa amarilla con mantequilla y leche. Sazone cada componente por separado y con fuerza.",
  "Serve the mince beside the mash, not on it, so the mash keeps its shape on a buffet.":
    "Sirva la carne al lado del puré, no encima, para que el puré mantenga su forma en el buffet.",
  "Better on day two. Keeps 3 days.": "Mejor al segundo día. Dura 3 días.",
  "Indefinitely hot. Mash tightens as it sits — hold it separately and loosen with hot milk before service.":
    "Indefinidamente caliente. El puré se aprieta al reposar — guárdelo aparte y aflójelo con leche caliente antes del servicio.",

  // ---- 33 Stovies ----
  "traditionally leftover roast; this is a use-up dish":
    "tradicionalmente sobras de asado; este es un plato de aprovechamiento",
  "Melt the dripping in a wide heavy pan and sweat the onion until soft and sweet, 15 minutes.":
    "Derrita la grasa en una olla ancha y pesada y sude la cebolla hasta que esté suave y dulce, 15 minutos.",
  "Layer potato over the onion, season each layer, and tuck in the bay.":
    "Acomode la papa en capas sobre la cebolla, sazone cada capa y meta el laurel entre ellas.",
  "Add stock to come halfway up the potato — no further. Stovies steam as much as they braise.":
    "Agregue caldo hasta la mitad de la altura de la papa — no más. Los stovies se cocinan al vapor tanto como al braseado.",
  "Cover and cook very low for an hour. Do not stir; you want the base to catch slightly and the top layer to stay intact.":
    "Tape y cocine muy suave por una hora. No revuelva; conviene que el fondo se pegue un poco y que la capa de arriba quede entera.",
  "Fold the meat through in the last 15 minutes, just to heat.":
    "Integre la carne en los últimos 15 minutos, solo para calentarla.",
  "Crush lightly with a spoon, finish with huacatay, and check the salt.":
    "Aplaste ligeramente con la cuchara, termine con huacatay y revise la sal.",
  "Keeps 3 days and reheats well. Genuinely improved by a night in the fridge.":
    "Dura 3 días y se recalienta bien. Mejora de verdad con una noche en la refrigeradora.",
  "Excellent hot-hold. Add a splash of stock when reheating or it dries out.":
    "Excelente para mantener caliente. Agregue un chorro de caldo al recalentar o se seca.",
  "Wide and shallow beats deep. A deep pot steams the top layer to mush before the bottom is done.":
    "Ancho y bajo gana a hondo. Una olla honda cocina al vapor la capa de arriba hasta deshacerla antes de que el fondo esté listo.",

  // ---- 34 Scotch Broth with Quinoa ----
  "replaces pearl barley; rinse or it is bitter":
    "reemplaza a la cebada perlada; lávela o amarga",
  "Cover the lamb with cold water, bring slowly to a simmer, and skim thoroughly for the first 20 minutes. Skimming is what separates broth from stew.":
    "Cubra el cordero con agua fría, lleve despacio a hervor suave y espume a conciencia los primeros 20 minutos. Espumar es lo que separa un caldo de un guiso.",
  "Add the soaked peas and simmer 1 hour until the lamb is tender.":
    "Agregue las arvejas remojadas y cocine 1 hora hasta que el cordero esté tierno.",
  "Lift the meat out, pull it from the bone, and return the meat to the pot.":
    "Retire la carne, sepárela del hueso y devuélvala a la olla.",
  "Add the diced vegetables and simmer 20 minutes — they should keep their edges.":
    "Agregue las verduras en cubos y cocine 20 minutos — deben conservar sus aristas.",
  "Add the rinsed quinoa for the last 12 minutes only. Longer and it bursts and clouds the broth.":
    "Agregue la quinua lavada solo en los últimos 12 minutos. Más tiempo y revienta y enturbia el caldo.",
  "Finish with a lot of parsley and check the salt at the end, not the start.":
    "Termine con bastante perejil y revise la sal al final, no al principio.",
  "Make the broth and lamb 2 days ahead; add quinoa and vegetables on the day so they stay distinct.":
    "Haga el caldo y el cordero 2 días antes; agregue quinua y verduras el mismo día para que se mantengan definidas.",
  "Holds hot for hours, but the quinoa keeps swelling. Add it at the venue if you can.":
    "Aguanta caliente por horas, pero la quinua sigue hinchando. Agréguela en el local si puede.",
  "Scales cleanly. The only limit is the size of pot you can safely transport.":
    "Escala sin problemas. El único límite es el tamaño de olla que pueda transportar con seguridad.",

  // ---- 35 Cock-a-Leekie ----
  "Poach the chicken in the stock with bay and peppercorns until it falls from the bone, about 1 hour. Skim as it goes.":
    "Escalfe el pollo en el caldo con laurel y granos de pimienta hasta que se desprenda del hueso, alrededor de 1 hora. Espume mientras cocina.",
  "Lift out, cool enough to handle, and shred the meat. Return the bones to the pot and simmer another 30 minutes for depth, then strain.":
    "Retire, enfríe lo suficiente para manipular y deshilache la carne. Devuelva los huesos a la olla y cocine otros 30 minutos para dar profundidad, luego cuele.",
  "Add half the leeks and cook 20 minutes until they surrender into the broth — these are for body.":
    "Agregue la mitad del poro y cocine 20 minutos hasta que se rinda en el caldo — este va por cuerpo.",
  "Add the remaining leeks and the choclo and cook 8 minutes only, so there is something to bite.":
    "Agregue el resto del poro y el choclo y cocine solo 8 minutos, para que quede algo que morder.",
  "Return the chicken and add the prunes in the last 5 minutes. Any earlier and they dissolve.":
    "Devuelva el pollo y agregue las ciruelas en los últimos 5 minutos. Antes de eso se deshacen.",
  "Season hard and finish with parsley. The prune sweetness against the pepper is the whole dish.":
    "Sazone con fuerza y termine con perejil. El dulzor de la ciruela contra la pimienta es todo el plato.",
  "Broth and chicken 2 days ahead. Leeks, choclo and prunes on the day.":
    "Caldo y pollo 2 días antes. Poro, choclo y ciruelas el mismo día.",
  "Good for hours. The prunes darken the broth over time, which is cosmetic rather than a fault.":
    "Bueno por horas. Las ciruelas oscurecen el caldo con el tiempo, lo cual es estético y no una falla.",

  // ---- 36 Glasgow Tikka Masala ----
  "for the marinade": "para la marinada",
  "Marinate the chicken in yoghurt, half the spices, garlic and ginger for at least 4 hours.":
    "Macere el pollo en yogur, la mitad de las especias, ajo y kion por lo menos 4 horas.",
  "Grill or roast the chicken hot and fast until charred at the edges. The char is not optional — it is the difference between this and a curry.":
    "Ase el pollo a la parrilla o al horno, fuerte y rápido, hasta que se queme en los bordes. Ese tostado no es opcional — es la diferencia entre esto y un curry.",
  "Sweat the remaining garlic and ginger in butter, add the ají pastes and remaining spices, and cook out until the fat separates.":
    "Sude el resto del ajo y el kion en mantequilla, agregue las pastas de ají y las especias restantes, y cocine hasta que la grasa se separe.",
  "Add tomatoes and simmer 25 minutes until thick and jammy, then blend smooth.":
    "Agregue los tomates y cocine 25 minutos hasta que espese como mermelada, luego licúe hasta que quede liso.",
  "Add cream and warm through without boiling.":
    "Agregue la crema y caliente sin que hierva.",
  "Fold in the charred chicken and any resting juices. Finish with coriander.":
    "Integre el pollo tostado y los jugos del reposo. Termine con culantro.",
  "The ají amarillo does the work Kashmiri chilli does in Glasgow — colour and fruit rather than heat.":
    "El ají amarillo hace lo que el chile de Cachemira hace en Glasgow — color y fruta más que picante.",
  "Sauce keeps 3 days and freezes. Char the chicken on the day; reheated char goes soft.":
    "La salsa dura 3 días y se congela. Tueste el pollo el mismo día; el tostado recalentado se ablanda.",
  "Holds hot very well. Cream sauces split if boiled, so hold below a simmer.":
    "Se mantiene caliente muy bien. Las salsas con crema se cortan si hierven, así que manténgala por debajo del hervor.",
  "Char in batches under a hot grill. A crowded tray steams the chicken and you lose the whole point.":
    "Tueste por tandas bajo un grill caliente. Una bandeja saturada cocina el pollo al vapor y se pierde todo el sentido.",

  // ---- 37 Bangers & Chicha Mash ----
  "ask a butcher for a coarse, high-meat sausage":
    "pida al carnicero una salchicha gruesa y con alto contenido de carne",
  "to thicken the gravy": "para espesar la salsa",
  "Brown the sausages slowly all over and set aside. Slow is the point; fast splits the skins.":
    "Dore las salchichas despacio por todos lados y reserve. La lentitud es el punto; el apuro revienta las tripas.",
  "In the same pan, cook the onions down for 25 minutes until genuinely caramelised, not just soft.":
    "En la misma sartén, cocine las cebollas 25 minutos hasta que estén realmente caramelizadas, no solo blandas.",
  "Dust with flour, cook out 2 minutes, then deglaze with the chicha de jora and scrape the base.":
    "Espolvoree harina, cocine 2 minutos y desglase con la chicha de jora raspando el fondo.",
  "Add stock and reduce to a gravy that coats a spoon. The chicha brings a sourness that wants a knob of butter at the end to round it.":
    "Agregue caldo y reduzca hasta una salsa que nape la cuchara. La chicha aporta una acidez que pide un trozo de mantequilla al final para redondearla.",
  "Return the sausages and simmer 15 minutes to finish cooking through.":
    "Devuelva las salchichas y cocine a fuego lento 15 minutos para terminar de cocerlas.",
  "Mash the papa amarilla with butter, milk and mustard.":
    "Haga puré la papa amarilla con mantequilla, leche y mostaza.",
  "Gravy and onions 2 days ahead. Sausages on the day.":
    "Salsa y cebollas 2 días antes. Las salchichas, el mismo día.",
  "Holds well for an hour. Beyond that the sausages tighten.":
    "Aguanta bien una hora. Más allá, las salchichas se endurecen.",

  // ---- 38 Fish Supper, Yuca Chips ----
  "180 g each; Terminal Pesquero, any firm white fish works":
    "180 g cada uno; Terminal Pesquero, sirve cualquier pescado blanco firme",
  "ají tartare": "salsa tártara de ají",
  "Boil the yuca in salted water until a knife just slides in, then drain and steam-dry. Yuca must be boiled first — it will never cook through in the fryer.":
    "Hierva la yuca en agua con sal hasta que el cuchillo entre apenas, escurra y deje secar al vapor. La yuca debe hervirse primero — nunca se cocina por dentro en la freidora.",
  "Cool the yuca completely, then fry once at 140 °C to set the crust. Hold. Fry again at 190 °C to order.":
    "Enfríe la yuca por completo y fría una vez a 140 °C para fijar la costra. Reserve. Vuelva a freír a 190 °C al momento del pedido.",
  "Batter: whisk flour, cornflour and baking powder into cold beer at the last possible moment. Lumps are fine; a rested batter is not.":
    "Masa: bata harina, chuño y polvo de hornear con cerveza fría en el último momento posible. Los grumos están bien; una masa reposada no.",
  "Dredge the fish in dry flour, then through the batter, then straight into 180 °C oil.":
    "Pase el pescado por harina seca, luego por la masa y directo al aceite a 180 °C.",
  "Fry 4–5 minutes until the batter is rigid and pale gold. Drain on a rack.":
    "Fría 4–5 minutos hasta que la masa esté rígida y dorada clara. Escurra sobre rejilla.",
  "Tartare: mayonnaise, chopped capers, minced ají limo, lemon and plenty of pepper.":
    "Tártara: mayonesa, alcaparras picadas, ají limo picado fino, limón y bastante pimienta.",
  "Yuca can be boiled and first-fried a day ahead — that is the whole trick to serving this at volume.":
    "La yuca se puede hervir y darle la primera fritura un día antes — ese es todo el truco para servir esto en volumen.",
  "Five minutes. This is a live-station dish and nothing will make it otherwise.":
    "Cinco minutos. Es un plato de estación en vivo y nada lo va a cambiar.",
  "Two fryers or you have a queue: one holding yuca at 190 °C, one at 180 °C for fish.":
    "Dos freidoras o habrá cola: una con yuca a 190 °C y otra a 180 °C para el pescado.",

  // ---- 39 Roast Lamb, Huacatay Crust ----
  "Minka; ask for young lamb, it is milder":
    "Minka; pida cordero joven, es más suave",
  "Blitz the toasted oats with huacatay, garlic, butter and salt to a coarse green crust. It should clump, not flow.":
    "Procese la avena tostada con huacatay, ajo, mantequilla y sal hasta una costra verde gruesa. Debe apelmazarse, no correrse.",
  "Sear the lamb hard on all sides and rest 10 minutes.":
    "Selle el cordero con fuerza por todos lados y repose 10 minutos.",
  "Brush with mustard, then press the crust on firmly. The mustard is glue, not flavour.":
    "Pincele con mostaza y presione la costra con firmeza. La mostaza es pegamento, no sabor.",
  "Roast at 200 °C for 15 minutes, then 170 °C until the core reads 54 °C for pink, about 25 minutes for a leg.":
    "Hornee a 200 °C por 15 minutos, luego a 170 °C hasta que el centro marque 54 °C para término rosado, unos 25 minutos si es pierna.",
  "Rest 20 minutes — a long rest, because the crust insulates and the meat keeps climbing.":
    "Repose 20 minutos — un reposo largo, porque la costra aísla y la carne sigue subiendo de temperatura.",
  "Sauce: deglaze with wine, add reduced stock, and mount with cold butter off the heat.":
    "Salsa: desglase con vino, agregue caldo reducido y monte con mantequilla fría fuera del fuego.",
  "Crust keeps 3 days. Sear and crust the lamb a day ahead, then roast on site.":
    "La costra dura 3 días. Selle y cubra el cordero un día antes, y hornee en el local.",
  "The crust softens after 30 minutes. Carve to order.":
    "La costra se ablanda después de 30 minutos. Trinche al momento.",
  "Roast in relays so each joint gets its full rest. Resting is where the doneness actually settles.":
    "Hornee por tandas para que cada pieza tenga su reposo completo. El reposo es donde el término realmente se define.",

  // ---- 40 Whisky & Chancaca Pork Belly ----
  "Score the skin finely and salt it heavily. Leave uncovered in the fridge overnight — dry skin is the only route to crackling.":
    "Marque la piel finamente y sálela con generosidad. Déjela destapada en la refrigeradora toda la noche — la piel seca es el único camino al cuero crocante.",
  "Wipe off the salt. Roast at 150 °C for 3 hours on a rack over the stock and aromatics.":
    "Limpie la sal. Hornee a 150 °C por 3 horas sobre una rejilla, encima del caldo y los aromáticos.",
  "Melt the chancaca into the whisky and soy to a loose glaze.":
    "Derrita la chancaca en el whisky y el sillao hasta un glaseado ligero.",
  "Raise the oven to 230 °C for 20 minutes to blister the skin. Do not glaze yet — sugar burns at this temperature.":
    "Suba el horno a 230 °C por 20 minutos para reventar la piel. Todavía no glasee — a esa temperatura el azúcar se quema.",
  "Rest 20 minutes, then brush the glaze over the flesh side and the cut faces only, keeping it off the crackling.":
    "Repose 20 minutos y pincele el glaseado solo por el lado de la carne y las caras cortadas, sin tocar el cuero.",
  "Portion with a serrated knife, cutting through the crackling first.":
    "Porcione con cuchillo de sierra, cortando primero a través del cuero.",
  "Roast a day ahead, portion cold, and re-crisp under a hot grill. Glaze after reheating.":
    "Hornee un día antes, porcione en frío y vuelva a tostar bajo un grill caliente. Glasee después de recalentar.",
  "The pork holds well; the crackling does not. If it must travel, send crackling separately in a paper bag, never sealed plastic.":
    "El cerdo aguanta bien; el cuero no. Si tiene que viajar, mándelo aparte en bolsa de papel, nunca en plástico sellado.",
  "One belly per 10 portions. Cooking two side by side needs a fan oven or the inner faces steam.":
    "Una panceta por cada 10 porciones. Cocinar dos lado a lado exige horno con ventilador o las caras internas se cocinan al vapor.",

  // ---- 41 Irn Bru Glazed Ham ----
  "ask the butcher for a lightly cured, unsmoked gammon":
    "pida al carnicero un jamón crudo poco curado y sin ahumar",
  "specialist UK importer; roughly S/ 8-12 a can wholesale and unverified":
    "importador especializado del Reino Unido; alrededor de S/ 8-12 la lata al por mayor, sin verificar",
  "Soak the gammon in cold water for 4 hours, changing once, to draw out excess salt.":
    "Remoje el jamón en agua fría 4 horas, cambiándola una vez, para sacarle el exceso de sal.",
  "Simmer in Irn Bru topped up with water, with the onion, carrot and bay, for 2.5 hours. Barely a bubble.":
    "Cocine a fuego lento en Irn Bru completado con agua, junto con la cebolla, la zanahoria y el laurel, por 2,5 horas. Apenas una burbuja.",
  "Lift out and cool enough to handle. Reserve 400 ml of the cooking liquor.":
    "Retire y enfríe lo suficiente para manipular. Reserve 400 ml del líquido de cocción.",
  "Cut the skin away leaving an even fat layer, then score the fat into diamonds and stud each with a clove.":
    "Retire la piel dejando una capa pareja de grasa, marque rombos en la grasa y clave un clavo de olor en cada uno.",
  "Reduce the reserved liquor with mustard and sugar to a sticky glaze.":
    "Reduzca el líquido reservado con mostaza y azúcar hasta un glaseado pegajoso.",
  "Glaze and roast at 200 °C for 25 minutes, basting twice, until lacquered.":
    "Glasee y hornee a 200 °C por 25 minutos, bañándolo dos veces, hasta que quede lacado.",
  "Using Irn Bru as a glaze rather than selling it by the can is by far the better return on an expensive import.":
    "Usar Irn Bru como glaseado en lugar de venderla por lata es, de lejos, el mejor rendimiento para una importación cara.",
  "Boil and glaze a day ahead. Excellent cold, which is how most of it will be eaten.":
    "Hierva y glasee un día antes. Excelente frío, que es como se comerá la mayor parte.",
  "Superb. Carves cold, travels whole, and needs no equipment at the venue.":
    "Excelente. Se trincha frío, viaja entero y no necesita equipo en el local.",

  // ---- 42 Souvlaki de Cordero ----
  "the Peruvian half; it sits where mint would":
    "la mitad peruana; ocupa el lugar de la menta",
  "tzatziki": "tzatziki",
  "Marinate the lamb in oil, oregano, huacatay, lemon and garlic for at least 6 hours, preferably overnight.":
    "Macere el cordero en aceite, orégano, huacatay, limón y ajo por lo menos 6 horas, de preferencia toda la noche.",
  "Salt only 30 minutes before cooking. Salting into an acidic marinade overnight cures the surface and it goes firm.":
    "Sale recién 30 minutos antes de cocinar. Salar dentro de una marinada ácida toda la noche cura la superficie y la endurece.",
  "Thread onto skewers, leaving a little space between cubes so they colour rather than steam.":
    "Ensarte en brochetas dejando algo de espacio entre los cubos para que doren en vez de cocinarse al vapor.",
  "Grill over high heat, 3–4 minutes a side, turning once only.":
    "Ase a fuego alto, 3–4 minutos por lado, volteando una sola vez.",
  "Rest 5 minutes off the heat before serving.":
    "Repose 5 minutos fuera del fuego antes de servir.",
  "Tzatziki: squeeze the cucumber hard, then fold into yoghurt with garlic, lemon and salt.":
    "Tzatziki: exprima bien el pepino e intégrelo al yogur con ajo, limón y sal.",
  "Marinate and skewer a day ahead. Tzatziki is better made 2 hours ahead than 2 days.":
    "Macere y ensarte un día antes. El tzatziki queda mejor hecho 2 horas antes que 2 días antes.",
  "Ten minutes. A live-station dish; grilled lamb waiting in a tray is a wasted ingredient.":
    "Diez minutos. Plato de estación en vivo; cordero a la parrilla esperando en una bandeja es un insumo desperdiciado.",

  // ---- 43 Corvina al Pil-Pil ----
  "160 g each, skin on": "160 g cada uno, con piel",
  "Warm the oil gently with garlic and ají limo until the garlic just turns pale gold. Do not let it brown or the whole emulsion turns bitter.":
    "Caliente el aceite suavemente con ajo y ají limo hasta que el ajo apenas tome color dorado claro. No lo deje dorar o toda la emulsión amarga.",
  "Lift out the garlic and chilli and reserve. Cool the oil to warm.":
    "Retire el ajo y el ají y reserve. Deje que el aceite baje a tibio.",
  "Season the fish and cook it skin-down in the oil at a bare 65–70 °C for 8 minutes. This is a confit, not a fry.":
    "Sazone el pescado y cocínelo con la piel hacia abajo en el aceite a apenas 65–70 °C por 8 minutos. Esto es un confitado, no una fritura.",
  "Lift the fish out. Pour the gelatinous cooking juices into a wide pan.":
    "Retire el pescado. Vierta los jugos gelatinosos de la cocción en una sartén amplia.",
  "Off the heat, swirl the pan continuously while trickling the warm oil back in. The gelatin emulsifies it into a pale, glossy pil-pil.":
    "Fuera del fuego, mueva la sartén en círculos sin parar mientras devuelve el aceite tibio en hilo. La gelatina lo emulsiona en un pil-pil pálido y brillante.",
  "If it splits, add a spoon of cold water and keep swirling. Spoon over the fish with the reserved garlic and parsley.":
    "Si se corta, agregue una cucharada de agua fría y siga moviendo. Sirva sobre el pescado con el ajo reservado y perejil.",
  "Nothing. The emulsion is made to order and does not reheat.":
    "Nada. La emulsión se hace al momento y no se recalienta.",
  "Minutes. Plated tier only, and it needs a cook standing over it.":
    "Minutos. Solo para el nivel emplatado, y necesita un cocinero encima.",
  "Emulsify in batches of 5 portions. A large pan does not swirl and the sauce will not come together.":
    "Emulsione en tandas de 5 porciones. Una sartén grande no se puede mover en círculos y la salsa no liga.",

  // ---- 44 Paiche Gravlax Plate ----
  "replaces the usual aquavit or gin": "reemplaza al aquavit o al gin habituales",
  "hovmästarsås": "salsa hovmästarsås",
  "Mix salt, sugar, pepper and dill. Lay half in a tray, fish skin-down, remaining cure on top, then drizzle over the algarrobina.":
    "Mezcle sal, azúcar, pimienta y eneldo. Ponga la mitad en una bandeja, el pescado con la piel hacia abajo, el resto de la curación encima, y rocíe con la algarrobina.",
  "Cover, weight lightly, and cure 36 hours refrigerated, turning once and pouring off liquid.":
    "Tape, ponga un peso ligero y cure 36 horas en refrigeración, volteando una vez y botando el líquido.",
  "Rinse briefly, pat very dry, and let it air-dry uncovered in the fridge for 2 hours — this firms the surface for slicing.":
    "Enjuague rápido, seque muy bien y déjelo orear destapado en la refrigeradora por 2 horas — eso firma la superficie para cortar.",
  "Slice thin on a long bias, leaving the skin behind.":
    "Corte fino en diagonal larga, dejando la piel atrás.",
  "Sauce: whisk mustard, sugar and vinegar, then trickle in the oil until thick. Stir through chopped dill.":
    "Salsa: bata mostaza, azúcar y vinagre, y agregue el aceite en hilo hasta que espese. Integre el eneldo picado.",
  "Plate with rye and the sauce.": "Sirva con pan de centeno y la salsa.",
  "Cure up to 4 days ahead; it improves to about day three.":
    "Cure hasta con 4 días de anticipación; mejora hasta más o menos el tercer día.",
  "Excellent. Slice cold, plate, and it sits happily for an hour. The strongest cold main on the list for drop-off.":
    "Excelente. Se corta frío, se emplata y aguanta tranquilo una hora. El fondo frío más sólido de la carta para entrega.",

  // ---- 45 Neeps & Tatties Wellington ----
  "the moisture barrier; this dish needs it more than the beef version does":
    "la barrera contra la humedad; este plato la necesita más que la versión de carne",
  "Roast the turnip and zapallo batons at 200 °C until caramelised and dry at the edges, 30 minutes. Wet vegetables are the enemy here.":
    "Hornee los bastones de nabo y zapallo a 200 °C hasta que caramelicen y sequen en los bordes, 30 minutos. Aquí las verduras húmedas son el enemigo.",
  "Cook the mushroom duxelles until completely dry, 30 minutes, then add shallot and season hard.":
    "Cocine la duxelles de champiñones hasta que esté completamente seca, 30 minutos, agregue el chalote y sazone con fuerza.",
  "Beat the riced potato with salt and pepper. It binds the log.":
    "Bata la papa prensada con sal y pimienta. Es lo que liga el rollo.",
  "On cling film, lay crêpes, then duxelles, then a layer of potato, then the roasted batons packed tight along the centre.":
    "Sobre film, extienda crepes, luego la duxelles, luego una capa de papa, y los bastones asados bien apretados a lo largo del centro.",
  "Roll into a firm cylinder and chill 2 hours until solid.":
    "Enrolle formando un cilindro firme y refrigere 2 horas hasta que esté sólido.",
  "Wrap in pastry, egg wash twice, and bake at 200 °C for 20 minutes then 180 °C for 25.":
    "Envuelva en hojaldre, pincele con huevo dos veces y hornee a 200 °C por 20 minutos y luego a 180 °C por 25.",
  "Rest 15 minutes before slicing.": "Repose 15 minutos antes de cortar.",
  "Assemble to the pastry stage a day ahead.":
    "Arme hasta la etapa del hojaldre un día antes.",
  "20 minutes, same as the beef. Slice to order.":
    "20 minutos, igual que el de carne. Corte al momento.",
  "Vegetables release more water than beef. Cylinders of 5 portions maximum, and chill them properly or the log slumps.":
    "Las verduras sueltan más agua que la carne. Cilindros de 5 porciones como máximo, y refrigérelos bien o el rollo se desploma.",

  // ---- 46 Rumbledethumps ----
  "sharper than cheddar and it melts better than queso fresco":
    "más punzante que el cheddar y funde mejor que el queso fresco",
  "Boil the cabbage 4 minutes only, then drain and squeeze out every drop of water.":
    "Hierva el repollo solo 4 minutos, escurra y exprima hasta la última gota de agua.",
  "Crush the potato coarse — lumps are correct, this is not a purée.":
    "Aplaste la papa grueso — los grumos son correctos, esto no es un puré.",
  "Fold potato, cabbage, spring onion and half the butter together with nutmeg and plenty of salt.":
    "Integre papa, repollo, cebolla china y la mitad de la mantequilla con nuez moscada y bastante sal.",
  "Spread into a buttered dish and dot with the remaining butter.":
    "Extienda en una fuente enmantequillada y salpique con el resto de la mantequilla.",
  "Cover with the grated paria and bake at 200 °C for 30 minutes until browned and bubbling at the edges.":
    "Cubra con el queso paria rallado y hornee a 200 °C por 30 minutos hasta que dore y burbujee en los bordes.",
  "Assemble 2 days ahead unbaked. From cold, 45 minutes.":
    "Arme 2 días antes sin hornear. Desde frío, 45 minutos.",
  "Holds hot for an hour and reheats without complaint. A reliable vegetarian buffet side.":
    "Aguanta caliente una hora y se recalienta sin queja. Una guarnición vegetariana confiable para buffet.",

  // ---- 47 Clapshot ----
  "Boil the turnip and zapallo separately from the potato — they take longer and hold more water.":
    "Hierva el nabo y el zapallo aparte de la papa — demoran más y retienen más agua.",
  "Drain both very well and let them steam dry in the colander for 5 minutes.":
    "Escurra bien ambos y déjelos secar al vapor en el colador por 5 minutos.",
  "Mash together with butter and milk. Clapshot should be coarse, not silky.":
    "Haga puré todo junto con mantequilla y leche. El clapshot debe quedar grueso, no sedoso.",
  "Fold through the spring onion raw, so it keeps its bite.":
    "Integre la cebolla china cruda, para que conserve su mordida.",
  "Season with plenty of white pepper. The zapallo loche brings a sweetness that needs the pepper against it.":
    "Sazone con bastante pimienta blanca. El zapallo loche aporta un dulzor que necesita la pimienta en contra.",
  "Make a day ahead and reheat covered with a splash of milk.":
    "Hágalo un día antes y recaliente tapado con un chorro de leche.",
  "Holds hot for hours. Tightens as it sits; loosen with hot milk rather than more butter.":
    "Aguanta caliente por horas. Se aprieta al reposar; aflójelo con leche caliente en lugar de más mantequilla.",

  // ---- 48 Neeps & Tatties Causa ----
  "optional, for the layer": "opcional, para la capa",
  "Rice the potato while hot and let it steam dry, then cool to room temperature before seasoning.":
    "Prense la papa en caliente y déjela secar al vapor, luego enfríe a temperatura ambiente antes de sazonar.",
  "Work in the lime, ají amarillo, oil and salt. The causa base should be smooth, bright yellow and distinctly acidic — it will taste flat when warm and correct when cold.":
    "Trabaje el limón, el ají amarillo, el aceite y la sal. La masa de causa debe quedar lisa, amarilla intensa y claramente ácida — sabrá plana en tibio y correcta en frío.",
  "Mash the turnip and carrot with butter and season hard. Cool completely.":
    "Haga puré el nabo y la zanahoria con mantequilla y sazone con fuerza. Enfríe por completo.",
  "Line a tray with cling film. Layer half the causa, then all the turnip mash, then the remaining causa. Press firmly at each stage.":
    "Forre una bandeja con film. Ponga la mitad de la causa, luego todo el puré de nabo y encima el resto de la causa. Presione bien en cada etapa.",
  "Chill 4 hours minimum before cutting. It must be cold to hold a clean edge.":
    "Refrigere 4 horas como mínimo antes de cortar. Tiene que estar fría para dar un corte limpio.",
  "Cut into squares with a hot wet knife.":
    "Corte en cuadrados con un cuchillo caliente y mojado.",
  "Better made a day ahead. Keeps 3 days.":
    "Queda mejor hecha un día antes. Dura 3 días.",
  "Cold dish, so it holds as long as the fridge chain does. Excellent for drop-off; it is one of the few sides that looks better cold.":
    "Es un plato frío, así que aguanta lo que aguante la cadena de frío. Excelente para entrega; es de las pocas guarniciones que se ve mejor fría.",

  // ---- 49 Quinoa Skirlie ----
  "traditional; butter if the dish must go vegetarian":
    "lo tradicional; use mantequilla si el plato debe ser vegetariano",
  "Toast the quinoa dry in a wide pan until it pops and smells nutty. Set aside.":
    "Tueste la quinua en seco en una sartén amplia hasta que reviente y huela a nuez. Reserve.",
  "Toast the oats the same way, separately — they colour at a different rate.":
    "Tueste la avena igual, pero aparte — toma color a otro ritmo.",
  "Melt the dripping and cook the onion slowly until deep gold, 20 minutes. This is where the flavour comes from.":
    "Derrita la grasa y cocine la cebolla despacio hasta que quede dorada oscura, 20 minutos. De ahí sale todo el sabor.",
  "Return both grains to the pan and stir until every grain is coated and glossy.":
    "Devuelva ambos granos a la sartén y revuelva hasta que cada grano quede cubierto y brillante.",
  "Season heavily with salt and white pepper. Skirlie is meant to be assertive.":
    "Sazone fuerte con sal y pimienta blanca. El skirlie debe ser contundente.",
  "Finish with chives off the heat.": "Termine con cebollín fuera del fuego.",
  "Keeps 3 days. Refresh in a hot dry pan rather than a microwave.":
    "Dura 3 días. Refrésquelo en una sartén caliente y seca, no en microondas.",
  "Very well. Loses its crunch after an hour in a covered tray, so hold it uncovered if you can.":
    "Muy bien. Pierde el crocante tras una hora en bandeja tapada, así que manténgalo destapado si puede.",

  // ---- 50 Colcannon with Kale ----
  "Boil the potato in its skins, then peel while hot. Skin-on boiling keeps it from waterlogging.":
    "Hierva la papa con cáscara y pélela en caliente. Hervirla con cáscara evita que se llene de agua.",
  "Blanch the kale 3 minutes, refresh in cold water, and squeeze dry.":
    "Blanquee el kale 3 minutos, refresque en agua fría y exprima hasta secar.",
  "Warm the milk with the spring onion and let it infuse 10 minutes off the heat.":
    "Caliente la leche con la cebolla china y déjela infusionar 10 minutos fuera del fuego.",
  "Mash the potato with butter and the infused milk. Keep it coarse.":
    "Haga puré la papa con mantequilla y la leche infusionada. Déjelo grueso.",
  "Fold in the kale and nutmeg, and season hard.":
    "Integre el kale y la nuez moscada, y sazone con fuerza.",
  "Serve with a well of melted butter in the centre, which is the traditional way and worth doing.":
    "Sirva con un pocito de mantequilla derretida en el centro, que es lo tradicional y vale la pena.",
  "A day ahead. Reheat covered with extra milk.":
    "Un día antes. Recaliente tapado con leche adicional.",
  "Holds hot well. The kale dulls in colour after an hour but the flavour is unaffected.":
    "Se mantiene caliente bien. El kale pierde color tras una hora, pero el sabor no se ve afectado.",

  // ---- 51 Tattie Scones ----
  "50 scones": "50 scones",
  "Rice the potato while hot and spread it on a tray to steam dry for 10 minutes. Wet potato needs more flour and more flour makes them tough.":
    "Prense la papa en caliente y extiéndala en una bandeja para que seque al vapor 10 minutos. La papa húmeda pide más harina, y más harina los pone duros.",
  "Work in the melted butter, salt, baking powder and just enough flour to make a soft dough. Handle it as little as you can.":
    "Incorpore la mantequilla derretida, la sal, el polvo de hornear y la harina justa para una masa suave. Manipúlela lo menos posible.",
  "Roll 5 mm on a floured bench and cut into triangles or 6 cm rounds.":
    "Estire a 5 mm sobre mesa enharinada y corte en triángulos o discos de 6 cm.",
  "Prick each one twice with a fork so they do not dome.":
    "Pinche cada uno dos veces con tenedor para que no se abomben.",
  "Griddle dry on a medium-hot plate, 3 minutes a side, until blistered and dry to the touch.":
    "Hágalos a la plancha seca a temperatura media-alta, 3 minutos por lado, hasta que ampollen y estén secos al tacto.",
  "Stack under a cloth as they come off so they stay pliable.":
    "Apílelos bajo un paño a medida que salen para que se mantengan flexibles.",
  "Keep 3 days wrapped, or freeze with paper between. Best refreshed on a hot griddle.":
    "Duran 3 días envueltos, o congélelos con papel entre uno y otro. Se refrescan mejor en plancha caliente.",
  "Soft and good for hours. They go leathery if sealed in plastic while warm — cool fully first.":
    "Suaves y buenos por horas. Se ponen correosos si se sellan en plástico tibios — enfríelos del todo primero.",
  "Griddle capacity is the limit. Two plates for anything over 100.":
    "La capacidad de la plancha es el límite. Dos planchas para más de 100.",

  // ---- 52 Oatcakes (three thicknesses) ----
  "60 oatcakes": "60 oatcakes",
  "buy fine, medium and pinhead so you can cut all three thicknesses":
    "compre avena fina, media y entera para poder cortar los tres grosores",
  "Make three separate batches, one per grade of oatmeal, so each keeps its own texture.":
    "Haga tres tandas separadas, una por cada grosor de avena, para que cada una conserve su textura.",
  "Mix the dry ingredients, stir in melted fat, then boiling water. The dough must be worked hot and fast.":
    "Mezcle los secos, integre la grasa derretida y luego el agua hirviendo. La masa se trabaja caliente y rápido.",
  "Fine oatmeal: roll 2 mm for a thin cracker. Medium: 4 mm. Pinhead: 6 mm for a rough farmhouse oatcake.":
    "Avena fina: estire a 2 mm para una galleta delgada. Media: 4 mm. Entera: 6 mm para un oatcake rústico de campo.",
  "Cut rounds and transfer carefully — the thin ones tear.":
    "Corte discos y trasládelos con cuidado — los delgados se rompen.",
  "Bake at 170 °C: thin for 12 minutes, medium 16, thick 20. All should be pale and dry, not browned.":
    "Hornee a 170 °C: los delgados 12 minutos, los medios 16, los gruesos 20. Todos deben quedar pálidos y secos, no dorados.",
  "Cool on a rack. They crisp as they cool, so judge them cold, not hot.":
    "Enfríe sobre rejilla. Se ponen crocantes al enfriar, así que júzguelos fríos, no calientes.",
  "Two weeks in a sealed tin, and genuinely better after a day.":
    "Dos semanas en tarro hermético, y de verdad mejores al día siguiente.",
  "Indefinitely during service if kept dry. Lima humidity softens them within a few hours if left uncovered.":
    "Indefinidamente durante el servicio si se mantienen secos. La humedad de Lima los ablanda en pocas horas si quedan destapados.",
  "One dough per thickness. Do not try to roll one batch to three depths — the bake times will not reconcile.":
    "Una masa por grosor. No intente estirar una sola tanda a tres espesores — los tiempos de horneado no cuadran.",

  // ---- 53 Yorkshire Puddings ----
  "50 puddings": "50 puddings",
  "beef dripping is traditional and better, but the matrix sells this dish as vegetarian — using it changes that flag":
    "la grasa de res es lo tradicional y queda mejor, pero la matriz vende este plato como vegetariano — usarla cambia esa marca",
  "Whisk flour, eggs, milk and salt to a smooth batter the consistency of single cream.":
    "Bata harina, huevos, leche y sal hasta una masa lisa con la consistencia de crema líquida.",
  "Rest the batter at least 1 hour, ideally overnight. Resting is what gives the rise.":
    "Deje reposar la masa al menos 1 hora, idealmente toda la noche. El reposo es lo que da el levantado.",
  "Put a teaspoon of dripping in each hole of the tin and heat at 220 °C until it is genuinely smoking. Not hot — smoking.":
    "Ponga una cucharadita de grasa en cada hueco del molde y caliente a 220 °C hasta que humee de verdad. No caliente — humeando.",
  "Pour the cold batter into the hot fat, filling halfway. It should hiss immediately.":
    "Vierta la masa fría en la grasa caliente, llenando hasta la mitad. Debe chisporrotear de inmediato.",
  "Bake 20–25 minutes without opening the oven once. Opening it collapses them and there is no recovery.":
    "Hornee 20–25 minutos sin abrir el horno ni una vez. Abrirlo los desinfla y no hay vuelta atrás.",
  "Scatter with rosemary as they come out.":
    "Espolvoree romero al sacarlos.",
  "Batter improves overnight. Baked puddings can be frozen and refreshed 4 minutes at 200 °C.":
    "La masa mejora de un día para otro. Los puddings horneados se congelan y se refrescan 4 minutos a 200 °C.",
  "Ten minutes at full height, then they sag. Bake to order, which is why this sits as a live-station side.":
    "Diez minutos en su altura máxima y luego se hunden. Hornee al momento, y por eso figura como guarnición de estación en vivo.",
  "Oven capacity is the whole constraint. Two tins in at once drops the temperature and neither rises properly.":
    "La capacidad del horno es toda la restricción. Dos moldes a la vez bajan la temperatura y ninguno levanta bien.",

  // ---- 54 Buttered Choclo & Kale ----
  "fresh off the cob; frozen works for this dish though not for the scones":
    "recién desgranado; el congelado sirve para este plato aunque no para los scones",
  "optional": "opcional",
  "Blanch the choclo 5 minutes in salted water and drain. Giant corn stays chewy however long you cook it, which is the point.":
    "Blanquee el choclo 5 minutos en agua con sal y escurra. El maíz gigante queda mordiente por más que lo cocine, y ese es el punto.",
  "Blanch the kale 2 minutes, refresh, and squeeze dry.":
    "Blanquee el kale 2 minutos, refresque y exprima hasta secar.",
  "Foam the butter with the garlic until it just turns nutty.":
    "Espume la mantequilla con el ajo hasta que apenas tome aroma a nuez.",
  "Toss in the choclo and kale and cook hard for 3 minutes so the edges catch.":
    "Eche el choclo y el kale y cocine fuerte 3 minutos para que los bordes se doren.",
  "Finish with lime juice off the heat and salt generously.":
    "Termine con jugo de limón fuera del fuego y sale con generosidad.",
  "Blanch both a day ahead. The final toss takes 5 minutes.":
    "Blanquee ambos un día antes. El salteado final toma 5 minutos.",
  "45 minutes. The kale dulls and the lime fades, so squeeze the lime at the venue.":
    "45 minutos. El kale pierde color y el limón se apaga, así que exprima el limón en el local.",

  // ---- 55 Andean Root Mash ----
  "European butter if the budget allows; it is the whole flavour":
    "mantequilla europea si el presupuesto alcanza; en ella está todo el sabor",
  "Roast the camote rather than boiling it — 200 °C for 30 minutes. Boiled camote is watery and sweet in the wrong way.":
    "Hornee el camote en vez de hervirlo — 200 °C por 30 minutos. El camote hervido queda aguado y dulce de la manera equivocada.",
  "Boil the papa amarilla separately and steam-dry it.":
    "Hierva la papa amarilla aparte y séquela al vapor.",
  "Rice both while hot into the same bowl.":
    "Prense ambos en caliente en el mismo bol.",
  "Beat in butter first, then cream, then season with nutmeg, white pepper and a lot of salt.":
    "Incorpore primero la mantequilla, luego la crema, y sazone con nuez moscada, pimienta blanca y bastante sal.",
  "Taste it at serving temperature. Warm mash always needs more salt than it seems to when hot.":
    "Pruébelo a temperatura de servicio. Un puré tibio siempre necesita más sal de la que parece cuando está caliente.",
  "A day ahead. Reheat covered with a splash of cream.":
    "Un día antes. Recaliente tapado con un chorro de crema.",
  "Holds hot for hours. Skins over if uncovered; keep a lid on and stir before service.":
    "Aguanta caliente por horas. Forma película si se destapa; manténgalo con tapa y revuelva antes del servicio.",

  // ---- 56 Chicha-Braised Red Cabbage ----
  "Melt the butter in a wide heavy pan and add the cabbage in batches, letting each wilt before adding more.":
    "Derrita la mantequilla en una olla ancha y pesada y agregue el repollo por tandas, dejando que cada una se marchite antes de sumar más.",
  "Add chicha morada, vinegar, chancaca and the whole spices tied in muslin.":
    "Agregue chicha morada, vinagre, chancaca y las especias enteras atadas en una gasa.",
  "Cover and cook very low for an hour, stirring occasionally, until the cabbage is tender and deep purple.":
    "Tape y cocine muy suave por una hora, revolviendo de vez en cuando, hasta que el repollo esté tierno y morado intenso.",
  "Add the grated apple in the last 20 minutes so it melts in rather than staying in pieces.":
    "Agregue la manzana rallada en los últimos 20 minutos para que se deshaga en vez de quedar en trozos.",
  "Uncover and reduce until nothing pools in the base of the pan.":
    "Destape y reduzca hasta que no quede líquido acumulado en el fondo de la olla.",
  "Balance at the end with more vinegar or sugar. It should be sweet and sharp in equal measure.":
    "Equilibre al final con más vinagre o azúcar. Debe quedar dulce y ácido en igual medida.",
  "Better made 3 days ahead. It keeps a week and freezes.":
    "Queda mejor hecho 3 días antes. Dura una semana y se congela.",
  "Indefinitely. This is the most forgiving side on the list and worth having on any winter menu.":
    "Indefinidamente. Es la guarnición más indulgente de la carta y vale tenerla en cualquier menú de invierno.",

  // ---- 57 Ica Asparagus, Algarrobina ----
  "two harvests a year; check the Season page before promising it":
    "dos cosechas al año; revise la página de Temporada antes de prometerlo",
  "Snap rather than cut the woody ends — the spear breaks where it stops being tender.":
    "Quiebre en vez de cortar los extremos leñosos — el espárrago se rompe justo donde deja de ser tierno.",
  "Toss in olive oil and salt and roast at 220 °C for 8–10 minutes. It should blister, not soften.":
    "Mezcle con aceite de oliva y sal y hornee a 220 °C por 8–10 minutos. Debe ampollarse, no ablandarse.",
  "Loosen the algarrobina with the vinegar to a pourable dressing. Neat algarrobina is too heavy and too sweet.":
    "Afloje la algarrobina con el vinagre hasta un aderezo que se pueda verter. La algarrobina pura es demasiado pesada y dulce.",
  "Dress the asparagus while it is still hot so it drinks the dressing.":
    "Adere los espárragos aún calientes para que absorban el aderezo.",
  "Finish with Maras salt and toasted nuts.":
    "Termine con sal de Maras y frutos secos tostados.",
  "Dressing keeps a week. Roast to order.":
    "El aderezo dura una semana. Hornee al momento.",
  "20 minutes before it goes limp and army green. One of the least forgiving sides here.":
    "20 minutos antes de que se aguade y se ponga verde militar. De las guarniciones menos indulgentes de esta carta.",

  // ---- 58 Full Scottish Brunch (station) ----
  "Peruvian bacon is streaky, not back; say so on the menu rather than pretending":
    "el tocino peruano es entreverado, no de lomo; dígalo en la carta en vez de disimularlo",
  "as dish 8": "igual que el plato 8",
  "as dish 51": "igual que el plato 51",
  "house version; imported baked beans are an unnecessary import cost":
    "versión de la casa; los frijoles en lata importados son un costo de importación innecesario",
  "House beans first, and they can be made days ahead: cook white beans with tomato, a little chancaca, mustard and smoked paprika until thick.":
    "Primero los frijoles de la casa, que se pueden hacer con días de anticipación: cocine frijoles blancos con tomate, un poco de chancaca, mostaza y páprika ahumada hasta que espesen.",
  "Set the plancha in zones — bacon and sausage on the hottest, morcilla and tattie scones on the medium, eggs on the coolest.":
    "Divida la plancha en zonas — tocino y salchicha en la más caliente, morcilla y tattie scones en la media, huevos en la más fría.",
  "Start the bacon and Lorne first; they take longest and hold best.":
    "Empiece por el tocino y el Lorne; son los que más demoran y los que mejor aguantan.",
  "Griddle the morcilla and tattie scones next, 2 minutes a side.":
    "Siga con la morcilla y los tattie scones a la plancha, 2 minutos por lado.",
  "Fry eggs to order, last, and plate immediately.":
    "Fría los huevos al momento, al final, y sirva de inmediato.",
  "Everything must land together, which is the entire difficulty of this dish and the reason it cannot be a drop-off.":
    "Todo tiene que salir junto, y en eso consiste toda la dificultad del plato y la razón por la que no puede ser de entrega.",
  "Beans, Lorne and tattie scones all days ahead. Nothing else.":
    "Frijoles, Lorne y tattie scones se hacen con días de anticipación. Nada más.",
  "Nothing here survives a van. Fried eggs weep, bacon goes limp, toast turns to leather. Sell it as a live station or not at all.":
    "Nada de esto sobrevive una camioneta. Los huevos fritos sueltan agua, el tocino se aguada, el pan tostado se vuelve cuero. Véndalo como estación en vivo o no lo venda.",
  "One plancha serves about 20 guests at brunch pace. Beyond that you need a second cook and a second surface.":
    "Una plancha atiende a unos 20 invitados al ritmo de un brunch. Más allá de eso necesita un segundo cocinero y una segunda superficie.",

  // ---- 59 The Glasgow Roll ----
  "20 rolls": "20 panes",
  "order standing from a local bakery": "pedido fijo a una panadería del barrio",
  "Griddle the Lorne squares hard, 2 minutes a side, until properly caught at the edges.":
    "Haga los cuadrados de Lorne a la plancha bien fuerte, 2 minutos por lado, hasta que se doren de verdad en los bordes.",
  "Griddle the tattie scones alongside.":
    "Haga los tattie scones a la plancha al mismo tiempo.",
  "Fry the eggs with a firm yolk — a runny yolk in a takeaway roll is a mess in a bag.":
    "Fría los huevos con la yema firme — una yema líquida en un pan para llevar es un desastre dentro de la bolsa.",
  "Butter the rolls right to the edge, which keeps them from going soggy.":
    "Enmantequille los panes hasta el borde, que es lo que evita que se aguaden.",
  "Build: tattie scone, Lorne, egg, brown sauce.":
    "Arme: tattie scone, Lorne, huevo, salsa brown.",
  "Wrap in paper, not foil. Foil steams it.":
    "Envuelva en papel, no en papel aluminio. El aluminio lo cocina al vapor.",
  "All components hold a day. Griddle and build to order.":
    "Todos los componentes aguantan un día. Planche y arme al momento.",
  "Fifteen minutes wrapped in paper, which is exactly long enough for an office delivery and no longer. This is the scalable half of the Full Scottish and the one worth selling.":
    "Quince minutos envuelto en papel, justo lo que dura un reparto a oficina y nada más. Esta es la mitad escalable del Full Scottish y la que vale la pena vender.",

  // ---- 60 Butteries (Aberdeen rowies) ----
  "30 butteries": "30 butteries",
  "butteries are meant to be salty; do not reduce it":
    "los butteries deben ser salados; no reduzca la sal",
  "Make a slack dough with flour, yeast, salt and water. Knead 8 minutes and prove until doubled, about 1 hour.":
    "Haga una masa floja con harina, levadura, sal y agua. Amase 8 minutos y deje leudar hasta que doble, alrededor de 1 hora.",
  "Beat the lard and butter together to a soft paste and divide into three.":
    "Bata la manteca y la mantequilla hasta una pasta blanda y divídala en tres.",
  "Roll the dough to a rectangle, dot with one third of the fat, and fold in three like a letter. Rest 30 minutes chilled.":
    "Estire la masa en un rectángulo, distribuya un tercio de la grasa y doble en tres como una carta. Repose 30 minutos en frío.",
  "Repeat twice more with the remaining fat, resting between each fold.":
    "Repita dos veces más con el resto de la grasa, dejando reposar entre cada doblez.",
  "Cut into rough squares, flatten by hand — butteries are meant to look misshapen, not laminated neatly — and prove 45 minutes.":
    "Corte en cuadrados irregulares, aplaste con la mano — los butteries deben verse deformes, no laminados con prolijidad — y deje leudar 45 minutos.",
  "Bake at 200 °C for 18–20 minutes until deep gold and the fat has bubbled out around them.":
    "Hornee a 200 °C por 18–20 minutos hasta que estén dorados oscuros y la grasa haya burbujeado alrededor.",
  "Freeze after shaping, before the final prove. Prove from frozen for 2 hours, then bake.":
    "Congele después de formarlos, antes del leudado final. Leude desde congelado 2 horas y hornee.",
  "A day, and they are traditionally eaten reheated. Refresh 4 minutes at 190 °C.":
    "Un día, y tradicionalmente se comen recalentados. Refresque 4 minutos a 190 °C.",
  "The folding is the bottleneck, not the baking. Budget 2.5 hours regardless of batch size, and make it worth doing by making a lot.":
    "El doblado es el cuello de botella, no el horneado. Calcule 2,5 horas sin importar el tamaño de la tanda, y haga que valga la pena haciendo muchos.",

  // ---- 61 Porridge with Kiwicha ----
  "not optional; unsalted porridge tastes of nothing":
    "no es opcional; el porridge sin sal no sabe a nada",
  "Toast the oats and kiwicha separately in a dry pan until they smell nutty. This one step is most of the flavour.":
    "Tueste la avena y la kiwicha por separado en sartén seca hasta que huelan a nuez. Ese único paso aporta casi todo el sabor.",
  "Bring the liquid to a simmer with the salt.":
    "Lleve el líquido a hervor suave con la sal.",
  "Rain in the oats while stirring, then the kiwicha. Kiwicha cooks faster and will clump if added first.":
    "Eche la avena en lluvia mientras revuelve, y luego la kiwicha. La kiwicha se cocina más rápido y se apelmaza si va primero.",
  "Cook 20–25 minutes at a bare simmer, stirring with a spurtle or wooden spoon in one direction.":
    "Cocine 20–25 minutos a fuego apenas suave, revolviendo con un spurtle o cuchara de palo en una sola dirección.",
  "It should fall from the spoon in a sheet, not a lump. Loosen with hot milk if it tightens.":
    "Debe caer de la cuchara como una lámina, no como un grumo. Afloje con leche caliente si se aprieta.",
  "Serve with raw aguaymanto, a thread of algarrobina and cold cream poured around, not stirred in.":
    "Sirva con aguaymanto crudo, un hilo de algarrobina y crema fría vertida alrededor, sin mezclar.",
  "Cook a day ahead, chill in a tray, then cut and reheat with milk — this is how it was traditionally done.":
    "Cocine un día antes, enfríe en una bandeja, y luego corte y recaliente con leche — así se hacía tradicionalmente.",
  "Holds hot for an hour with a lid and a stir. It sets solid as it cools, so keep milk to hand.":
    "Aguanta caliente una hora con tapa y algún revuelto. Cuaja sólido al enfriar, así que tenga leche a mano.",

  // ---- 62 Lucuma Drop Scones ----
  "60 drop scones": "60 drop scones",
  "frozen pulp is fine and more consistent than fresh":
    "la pulpa congelada sirve y es más constante que la fresca",
  "Whisk the lúcuma pulp with milk and eggs until completely smooth — lúcuma is fibrous and will streak otherwise.":
    "Bata la pulpa de lúcuma con leche y huevos hasta que quede completamente lisa — la lúcuma es fibrosa y si no deja vetas.",
  "Fold into the flour, sugar and salt. Do not beat; a few lumps are better than a developed batter.":
    "Integre a la harina, el azúcar y la sal. No bata; unos grumos son mejores que una masa desarrollada.",
  "Stir in the melted butter and rest 20 minutes.":
    "Incorpore la mantequilla derretida y repose 20 minutos.",
  "Drop tablespoons onto a medium griddle. Wait for bubbles to form and burst across the whole surface before turning.":
    "Ponga cucharadas sobre una plancha a temperatura media. Espere a que se formen y revienten burbujas en toda la superficie antes de voltear.",
  "One minute on the second side only.":
    "Solo un minuto por el segundo lado.",
  "Stack under a cloth as they come off.":
    "Apílelos bajo un paño a medida que salen.",
  "Batter holds overnight and thickens; loosen with milk. Cooked scones freeze well.":
    "La masa aguanta la noche y espesa; aflójela con leche. Los scones cocidos se congelan bien.",
  "Soft and good for 3 hours in a covered box. One of the better breakfast drop-off items.":
    "Suaves y buenos por 3 horas en caja tapada. Uno de los mejores productos de desayuno para entrega.",

  // ---- 63 Bacon Butty, Salsa Criolla ----
  "20 butties": "20 butties",
  "Peruvian bacon is streaky, not back — say so rather than implying otherwise":
    "el tocino peruano es entreverado, no de lomo — dígalo en vez de dar a entender otra cosa",
  "Salsa criolla: soak the sliced onion in cold water 10 minutes to take the raw edge off, then drain hard.":
    "Salsa criolla: remoje la cebolla cortada en agua fría 10 minutos para quitarle el filo crudo y escurra bien.",
  "Dress with lime, ají limo, coriander and salt no more than 15 minutes before service. Dressed early, it goes grey and limp.":
    "Adere con limón, ají limo, culantro y sal no más de 15 minutos antes del servicio. Aderezada antes, se pone gris y aguada.",
  "Griddle or roast the bacon until crisp at the edges but still yielding in the middle.":
    "Haga el tocino a la plancha o al horno hasta que esté crocante en los bordes pero aún tierno al centro.",
  "Butter the rolls to the very edge — the butter is a moisture barrier.":
    "Enmantequille los panes hasta el mismo borde — la mantequilla es una barrera contra la humedad.",
  "Build: bacon, then salsa criolla on top so the acid runs down through the fat.":
    "Arme: tocino y encima la salsa criolla, para que la acidez baje a través de la grasa.",
  "Wrap in paper. Never foil.": "Envuelva en papel. Nunca en papel aluminio.",
  "Bacon can be part-cooked and re-crisped. Salsa criolla components prepped, dressed late.":
    "El tocino se puede precocinar y volver a tostar. Los componentes de la salsa criolla se alistan antes y se aderezan tarde.",
  "20 minutes. Beyond that the salsa wets the roll.":
    "20 minutos. Más allá de eso la salsa moja el pan.",

  // ---- 64 Tattie Scone Benedict ----
  "Hollandaise: whisk the yolks with vinegar and a splash of water over a bain-marie until they ribbon and hold a figure of eight.":
    "Holandesa: bata las yemas con vinagre y un chorro de agua a baño maría hasta que formen cinta y sostengan un ocho.",
  "Trickle in the warm clarified butter, whisking constantly. If it tightens, a teaspoon of warm water brings it back.":
    "Agregue en hilo la mantequilla clarificada tibia, batiendo sin parar. Si se aprieta, una cucharadita de agua tibia la recupera.",
  "Whisk in the ají amarillo at the end, off the heat. Adding it early can split the emulsion.":
    "Integre el ají amarillo al final, fuera del fuego. Agregarlo antes puede cortar la emulsión.",
  "Hold the sauce at 55–60 °C in a warm bain-marie. Above 65 °C it scrambles, below 50 °C it sets.":
    "Mantenga la salsa a 55–60 °C en baño maría tibio. Por encima de 65 °C se corta como huevo revuelto, por debajo de 50 °C se cuaja.",
  "Poach the eggs in barely trembling vinegared water, 3 minutes for a soft yolk.":
    "Escalfe los huevos en agua avinagrada apenas temblando, 3 minutos para yema suave.",
  "Griddle the tattie scones. Build scone, bacon, egg, sauce, and go straight out.":
    "Planche los tattie scones. Arme scone, tocino, huevo, salsa, y salga de inmediato.",
  "Tattie scones days ahead. Eggs can be poached ahead and refreshed 30 seconds in hot water — a standard service trick.":
    "Los tattie scones con días de anticipación. Los huevos se pueden escalfar antes y refrescar 30 segundos en agua caliente — un truco de servicio habitual.",
  "Hollandaise holds 90 minutes at temperature, the assembled dish about 4 minutes. A live-station dish and unavoidably so.":
    "La holandesa aguanta 90 minutos a temperatura; el plato armado, unos 4 minutos. Es un plato de estación en vivo y no hay forma de evitarlo.",
  "Two people minimum: one on eggs, one on the pass. Hollandaise in batches of no more than 8 yolks.":
    "Dos personas como mínimo: una en los huevos, otra en el pase. Holandesa en tandas de no más de 8 yemas.",

  // ---- 65 Lucuma-Dundee Marmalade & Brioche ----
  "6 × 400 ml jars, plus 20 brioche portions":
    "6 frascos de 400 ml, más 20 porciones de brioche",
  "if unavailable, sweet orange plus 2 lemons":
    "si no la consigue, naranja dulce más 2 limones",
  "Halve and juice the oranges. Tie the pips and membranes in muslin — that bag is your entire pectin supply.":
    "Parta y exprima las naranjas. Ate las pepas y las membranas en una gasa — esa bolsita es toda su pectina.",
  "Shred the peel as thick or thin as you want the finished marmalade; it will not change in the pan.":
    "Corte la cáscara tan gruesa o fina como quiera la mermelada final; no cambiará en la olla.",
  "Simmer peel, juice, water and the muslin bag for 90 minutes until the peel is completely soft. Test one: it should disintegrate between your fingers.":
    "Cocine a fuego lento la cáscara, el jugo, el agua y la bolsita de gasa por 90 minutos hasta que la cáscara esté completamente blanda. Pruebe una: debe deshacerse entre los dedos.",
  "Squeeze and discard the bag. Add the sugar and stir until fully dissolved before raising the heat.":
    "Exprima y descarte la bolsita. Agregue el azúcar y revuelva hasta disolverla del todo antes de subir el fuego.",
  "Boil hard to 104.5 °C, or until a spoonful wrinkles on a cold plate.":
    "Hierva fuerte hasta 104,5 °C, o hasta que una cucharada se arrugue sobre un plato frío.",
  "Take off the heat, stir in the lúcuma, and rest 10 minutes before jarring so the peel does not float to the top.":
    "Retire del fuego, incorpore la lúcuma y repose 10 minutos antes de envasar para que la cáscara no flote hacia arriba.",
  "Serve on thick brioche, griddled in butter. The Dundee lineage is what gives this a date rather than just a flavour.":
    "Sirva sobre brioche grueso, dorado a la plancha en mantequilla. El linaje Dundee es lo que le da una fecha y no solo un sabor.",
  "Marmalade keeps a year sealed. Make it in citrus season and use it all year.":
    "La mermelada dura un año sellada. Hágala en temporada de cítricos y úsela todo el año.",
  "Indefinite. Griddle the brioche to order — it goes leathery within 20 minutes.":
    "Indefinida. Dore el brioche al momento — se pone correoso en 20 minutos.",

  // ---- 66 Camote Crumpets ----
  "40 crumpets": "40 crumpets",
  "Roast the camote rather than boiling it, then purée and cool. Boiled camote makes the batter too wet to hole.":
    "Hornee el camote en vez de hervirlo, luego hágalo puré y enfríe. El camote hervido deja la masa demasiado húmeda para que se formen los huecos.",
  "Whisk flour, yeast, camote purée and the warm liquid to a thick batter. Cover and prove 1 hour until domed and actively bubbling.":
    "Bata harina, levadura, puré de camote y el líquido tibio hasta una masa espesa. Tape y leude 1 hora hasta que se abombe y burbujee con fuerza.",
  "Stir in the salt, then the slaked bicarbonate. Rest 20 minutes — this second rise is what creates the holes.":
    "Incorpore la sal y luego el bicarbonato disuelto. Repose 20 minutos — este segundo levantado es lo que crea los huecos.",
  "Butter crumpet rings well and set on a medium griddle.":
    "Enmantequille bien los aros de crumpet y colóquelos en una plancha a temperatura media.",
  "Pour batter 1.5 cm deep into each ring. Holes should appear across the surface within 4 minutes; if they do not, the batter is too thick — loosen it.":
    "Vierta masa hasta 1,5 cm de altura en cada aro. Deben aparecer huecos en toda la superficie en 4 minutos; si no, la masa está muy espesa — aflójela.",
  "Cook 8 minutes until the top is set and dry, then lift the ring and give the top 1 minute only.":
    "Cocine 8 minutos hasta que la superficie esté cuajada y seca, luego retire el aro y dele solo 1 minuto por arriba.",
  "Cook a day ahead. Crumpets are meant to be toasted, so this is normal rather than a compromise.":
    "Cocine un día antes. Los crumpets están hechos para tostarse, así que esto es lo normal y no una concesión.",
  "Days, wrapped. Toast to order.": "Días, envueltos. Tueste al momento.",
  "Ring count is the limit. Twelve rings on two griddles is about 90 crumpets an hour.":
    "La cantidad de aros es el límite. Doce aros en dos planchas dan unos 90 crumpets por hora.",

  // ---- 67 Black Pudding Hash ----
  "Use yesterday's boiled potato. Freshly boiled potato steams instead of frying and you will never get a crust.":
    "Use la papa sancochada de ayer. La papa recién hervida se cocina al vapor en vez de freírse y nunca conseguirá costra.",
  "Crush the cold potato into rough chunks rather than dicing it neatly — the ragged edges are what crisp.":
    "Aplaste la papa fría en trozos irregulares en lugar de cortarla en cubos prolijos — los bordes rotos son los que se doran.",
  "Get the fat properly hot in a wide pan and add the potato in one layer. Leave it alone for 5 minutes before touching it.":
    "Caliente bien la grasa en una sartén amplia y agregue la papa en una sola capa. Déjela quieta 5 minutos antes de tocarla.",
  "Add onion and continue until deeply browned in patches, 20 minutes total, turning only a few times.":
    "Agregue la cebolla y continúe hasta que dore en manchas oscuras, 20 minutos en total, volteando solo unas pocas veces.",
  "Fold the morcilla through in the last 5 minutes so it warms without disintegrating.":
    "Integre la morcilla en los últimos 5 minutos para que se caliente sin deshacerse.",
  "Fry the eggs separately and set them on top. Finish with parsley and sliced ají amarillo.":
    "Fría los huevos aparte y colóquelos encima. Termine con perejil y ají amarillo en tiras.",
  "Boil the potato 2 days ahead — that is the required step, not an optional one.":
    "Sancoche la papa 2 días antes — ese es el paso obligatorio, no uno opcional.",
  "40 minutes hot, though the crust softens. Eggs to order.":
    "40 minutos caliente, aunque la costra se ablanda. Los huevos, al momento.",

  // ---- 68 The Edinburgh Bowl ----
  "20 bowls": "20 bowls",
  "watercress; wants cool water, so check the Season page":
    "berros; piden agua fría, así que revise la página de Temporada",
  "vinaigrette": "vinagreta",
  "Roast the papa nativa in their skins at 200 °C until the edges catch, 30 minutes. Cool to room temperature.":
    "Hornee la papa nativa con cáscara a 200 °C hasta que los bordes se doren, 30 minutos. Enfríe a temperatura ambiente.",
  "Whisk the vinaigrette with the ají limo and a good pinch of salt.":
    "Bata la vinagreta con el ají limo y una buena pizca de sal.",
  "Dress the potatoes while still slightly warm so they absorb it, then cool completely.":
    "Adere las papas aún tibias para que absorban, y luego enfríe por completo.",
  "Flake the trout in large pieces. Small flakes disappear into a bowl.":
    "Desmenuce la trucha en trozos grandes. Las láminas chicas desaparecen dentro del bowl.",
  "Assemble cold: potato base, trout, berros on top, crème fraîche and dill.":
    "Arme en frío: base de papa, trucha, berros encima, crema fresca y eneldo.",
  "Send the vinaigrette separately for anything travelling more than 20 minutes — dressed watercress collapses.":
    "Mande la vinagreta aparte si el viaje pasa de 20 minutos — los berros aderezados se desploman.",
  "Potatoes and dressing a day ahead. Assemble within 2 hours of service.":
    "Papas y aderezo un día antes. Arme dentro de las 2 horas previas al servicio.",
  "2 hours boxed if the leaves are undressed. This is the highest food-cost dish in the matrix at 30.4%, so watch the trout weight.":
    "2 horas en caja si las hojas van sin aderezar. Es el plato de mayor costo de insumos de la matriz, con 30,4 %, así que vigile el peso de la trucha.",

  // ---- 69 Lomo Saltado Oat Bowl ----
  "replaces the rice; toast them first": "reemplaza al arroz; tuéstela primero",
  "Toast the oats, then simmer in salted water 15 minutes until tender but distinct. Drain and spread to cool.":
    "Tueste la avena y cocínela en agua con sal 15 minutos hasta que esté tierna pero suelta. Escurra y extienda para enfriar.",
  "Fry the potato chips and hold them separately. They must stay out of the sauce until the last second.":
    "Fría las papas fritas y guárdelas aparte. Deben mantenerse fuera de la salsa hasta el último segundo.",
  "Get a wok or wide pan genuinely smoking. Sear the beef in two batches — crowding it steams the meat and you lose the wok hei that defines saltado.":
    "Ponga un wok o sartén amplia realmente humeante. Selle la carne en dos tandas — amontonarla la cocina al vapor y se pierde el wok hei que define al saltado.",
  "Add onion and ají amarillo for 1 minute only, then tomato for 30 seconds.":
    "Agregue cebolla y ají amarillo por 1 minuto solamente, y luego tomate por 30 segundos.",
  "Deglaze with sillao and vinegar, letting it hiss and reduce to almost nothing.":
    "Desglase con sillao y vinagre, dejando que chisporrotee y se reduzca hasta casi nada.",
  "Fold through coriander. Build the bowl: oats, saltado, chips on top so they stay crisp.":
    "Integre el culantro. Arme el bowl: avena, saltado y papas encima para que sigan crocantes.",
  "Oats a day ahead. The saltado itself must be cooked à la minute or it is not saltado.":
    "La avena un día antes. El saltado mismo se cocina al momento o no es saltado.",
  "Boxed, 45 minutes, and the chips will soften — that is the accepted compromise of a saltado bowl. Box the chips separately if the client will tolerate it.":
    "En caja, 45 minutos, y las papas se ablandarán — esa es la concesión aceptada de un bowl de saltado. Empaque las papas aparte si el cliente lo tolera.",

  // ---- 70 Coronation Chicken Quinoa ----
  "Rinse the quinoa until the water runs clear, then cook 12 minutes, drain, and spread on a tray to cool fast and stay separate.":
    "Lave la quinua hasta que el agua salga clara, cocine 12 minutos, escurra y extienda en una bandeja para que enfríe rápido y quede suelta.",
  "Toast the curry powder in a dry pan for 40 seconds until fragrant. Raw curry powder in a cold sauce tastes dusty.":
    "Tueste el curry en polvo en sartén seca por 40 segundos hasta que perfume. El curry crudo en una salsa fría sabe a polvo.",
  "Whisk it into the mayonnaise, yoghurt and chutney. Let the sauce sit 30 minutes for the spice to bloom.":
    "Intégrelo a la mayonesa, el yogur y el chutney. Deje reposar la salsa 30 minutos para que la especia se abra.",
  "Fold the shredded chicken into the sauce, not the other way round, so it coats evenly.":
    "Integre el pollo deshilachado a la salsa, no al revés, para que se cubra parejo.",
  "Drain the raisins and fold in with the coriander.":
    "Escurra las pasas e intégrelas junto con el culantro.",
  "Layer quinoa then chicken, and scatter the almonds at the last minute so they stay crunchy.":
    "Ponga una capa de quinua y luego el pollo, y esparza las almendras al último minuto para que sigan crocantes.",
  "Everything except the almonds can be done a day ahead, and the sauce improves.":
    "Todo salvo las almendras se puede hacer un día antes, y la salsa mejora.",
  "4 hours chilled. One of the strongest and most reliable corporate box items.":
    "4 horas refrigerado. Uno de los productos de caja corporativa más sólidos y confiables.",
};
