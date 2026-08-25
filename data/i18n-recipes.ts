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

  // ---- 71 Ploughman's Box ----
  "20 boxes": "20 cajas",
  "imported; the single most expensive line in this box":
    "importado; la línea más cara de toda esta caja",
  "local, sharp, and cuts the import cost considerably":
    "local, de sabor marcado, y reduce bastante el costo de importación",
  "as dish 122": "igual que el plato 122",
  "This is an assembly job, and the discipline is in the cutting rather than the cooking.":
    "Este es un trabajo de armado, y la disciplina está en el corte más que en la cocción.",
  "Cut the cheese in generous wedges, not slices. A ploughman's should look like a wedge of cheese, not a sandwich filling.":
    "Corte el queso en cuñas generosas, no en láminas. Un ploughman's debe verse como una cuña de queso, no como relleno de sándwich.",
  "Fold the ham rather than laying it flat — height reads as generosity in a box.":
    "Doble el jamón en vez de acostarlo plano — en una caja, la altura se lee como generosidad.",
  "Portion the preserve and piccalilli into small pots so they do not wet the bread.":
    "Porcione la mermelada y el piccalilli en potes chicos para que no mojen el pan.",
  "Cut the apple last and toss in lemon water, or it browns before the box is closed.":
    "Corte la manzana al final y páselas por agua con limón, o se oxida antes de cerrar la caja.",
  "Pack the bread on top so it is not compressed under the cheese.":
    "Ponga el pan encima para que no quede aplastado bajo el queso.",
  "Cut cheese and ham the morning of. Preserves keep months.":
    "Corte el queso y el jamón la misma mañana. Las conservas duran meses.",
  "4 hours at cool room temperature. Zero cooking on the day makes this the easiest thing in the matrix to scale.":
    "4 horas a temperatura ambiente fresca. Cero cocción el día del evento la vuelve la cosa más fácil de escalar de toda la matriz.",

  // ---- 72 Cullen Skink Bowl ----
  "as dish 28, made slightly thicker": "igual que el plato 28, algo más espeso",
  "for texture in the bowl": "para dar textura al bowl",
  "as dish 52, packed separately": "igual que el plato 52, empacados aparte",
  "Make the chupe as dish 28 but reduce it further — a bowl version needs to be thick enough not to slop in transit.":
    "Haga el chupe como en el plato 28 pero redúzcalo más — la versión en bowl debe quedar lo bastante espesa para no chapotear en el traslado.",
  "Roast the extra potato cubes so there is something with an edge in a soup that is otherwise soft.":
    "Hornee los cubos de papa adicionales para que haya algo con arista en una sopa que por lo demás es blanda.",
  "Cool the soup fast in a shallow tray before boxing. Hot soup in a sealed container steams and thins.":
    "Enfríe la sopa rápido en una bandeja baja antes de empacarla. La sopa caliente en un envase sellado se cocina al vapor y se aguada.",
  "Box the soup, then the roast potato and extra fish on top.":
    "Empaque la sopa y encima la papa asada y el pescado adicional.",
  "Send the oatcakes in a separate bag. In the same box they are soft within the hour.":
    "Mande los oatcakes en bolsa aparte. En la misma caja se ablandan en una hora.",
  "Soup 3 days ahead, and it improves.": "La sopa 3 días antes, y mejora.",
  "Reheats well and travels well, provided the oatcakes stay separate. A rare hot drop-off that genuinely works.":
    "Se recalienta bien y viaja bien, siempre que los oatcakes vayan aparte. Una de las pocas entregas calientes que de verdad funciona.",

  // ---- 73 Greek Mezze Box ----
  "as dish 23": "igual que el plato 23",
  "as dish 109": "igual que el plato 109",
  "as dish 111": "igual que el plato 111",
  "as dish 110": "igual que el plato 110",
  "This box is an assembly of five component recipes, which is what makes it efficient: nothing here is made only for this dish.":
    "Esta caja es el armado de cinco recetas componentes, y eso es lo que la hace eficiente: nada aquí se prepara solo para este plato.",
  "Portion the wet dips into pots first and set them in the box before anything else.":
    "Porcione primero las salsas húmedas en potes y colóquelas en la caja antes que nada.",
  "Keftedes go in cold — they are as good cold as warm, which is why they belong in a box.":
    "Los keftedes van fríos — están tan buenos fríos como tibios, y por eso pertenecen a una caja.",
  "Cut the salad components chunky and undressed, with the dressing in a pot.":
    "Corte los componentes de la ensalada en trozos grandes y sin aderezar, con el aderezo en un pote.",
  "Flatbread on top, folded rather than flat.":
    "El pan plano encima, doblado y no extendido.",
  "Check the total weight per box. Mezze boxes drift heavier than costed because everything is scooped rather than counted.":
    "Controle el peso total por caja. Las cajas de mezze se van por encima del costeo porque todo se sirve con cuchara en vez de contarse.",
  "Every component holds 2–3 days. Assemble the morning of.":
    "Cada componente aguanta 2–3 días. Arme la misma mañana.",
  "4 hours cold. The highest-margin box in the matrix if the portioning is disciplined.":
    "4 horas en frío. La caja de mayor margen de la matriz si el porcionado es disciplinado.",

  // ---- 74 Nordic Cure Box ----
  "as dish 44": "igual que el plato 44",
  "as dish 120": "igual que el plato 120",
  "as dish 121": "igual que el plato 121",
  "as dish 117": "igual que el plato 117",
  "the mustard-dill sauce from dish 44": "la salsa de mostaza y eneldo del plato 44",
  "Slice the gravlax cold and lay it on paper, not directly on other components — it weeps.":
    "Corte el gravlax en frío y colóquelo sobre papel, no directamente sobre otros componentes — suelta líquido.",
  "Pack the potato salad in its own pot; the dressing will grey the crispbread on contact.":
    "Empaque la ensalada de papa en su propio pote; el aderezo pone gris el crispbread al contacto.",
  "Pickles in a pot, sauce in a pot. This box lives or dies on compartmentalisation.":
    "Los encurtidos en un pote, la salsa en otro. Esta caja vive o muere por su compartimentación.",
  "Crispbread goes in last, on top, and only if the box seals well.":
    "El crispbread va al final, encima, y solo si la caja sella bien.",
  "Everything is cured, pickled or cold-set, which makes this the most transport-stable box on the list.":
    "Todo está curado, encurtido o cuajado en frío, lo que la vuelve la caja más estable para transportar de toda la carta.",
  "Cure 3 days ahead, crispbread a week, pickles a month. Almost nothing happens on the day.":
    "Cure 3 días antes, el crispbread una semana antes, los encurtidos un mes antes. Casi nada ocurre el día del evento.",
  "5 hours cold without deterioration.": "5 horas en frío sin deterioro.",

  // ---- 75 Pollo a la Brasa Pie ----
  "the brasa marinade": "el adobo a la brasa",
  "roux": "para el roux",
  "Marinate the chicken in sillao, cumin, paprika, huacatay and half the ají amarillo for 4 hours.":
    "Macere el pollo en sillao, comino, páprika, huacatay y la mitad del ají amarillo por 4 horas.",
  "Roast hard at 220 °C for 25 minutes until charred at the edges. The char is the pollo a la brasa flavour; without it this is just a chicken pie.":
    "Hornee fuerte a 220 °C por 25 minutos hasta que se queme en los bordes. Ese tostado es el sabor a pollo a la brasa; sin él esto es solo un pie de pollo.",
  "Shred the meat and reserve every scrap of resting juice.":
    "Deshilache la carne y reserve hasta la última gota del jugo del reposo.",
  "Make a roux, add stock and the resting juices, and simmer to a thick velouté. Add cream and the remaining ají amarillo.":
    "Haga un roux, agregue caldo y los jugos del reposo, y cocine hasta una velouté espesa. Agregue crema y el resto del ají amarillo.",
  "Fold in the chicken. Cool completely before filling — warm filling melts shortcrust.":
    "Integre el pollo. Enfríe por completo antes de rellenar — un relleno tibio derrite la masa quebrada.",
  "Fill, lid, crimp, vent and bake at 190 °C for 35 minutes.":
    "Rellene, tape, repulgue, haga un respiradero y hornee a 190 °C por 35 minutos.",
  "Filling 2 days ahead. Assemble and freeze raw if needed.":
    "El relleno 2 días antes. Arme y congele crudo si hace falta.",
  "Good warm for an hour, fine at room temperature. A dependable box pie.":
    "Bueno tibio por una hora, correcto a temperatura ambiente. Un pie de caja confiable.",

  // ---- 76 Petticoat Tails, Cacao Nib ----
  "60 wedges": "60 cuñas",
  "the whole flavour; use the best you can afford":
    "todo el sabor está aquí; use el mejor que su presupuesto permita",
  "this is what gives shortbread its sandy snap":
    "esto es lo que le da al shortbread su quiebre arenoso",
  "Beat butter and sugar until just combined. Do not cream it pale — air makes shortbread cakey.":
    "Bata mantequilla y azúcar solo hasta unir. No la cremee hasta que palidezca — el aire vuelve el shortbread esponjoso.",
  "Fold in both flours and the salt, then the cacao nibs, and stop the moment it comes together.":
    "Integre las dos harinas y la sal, luego los nibs de cacao, y pare en el momento en que la masa se une.",
  "Press into round tins about 1 cm deep. Press, do not roll.":
    "Presione en moldes redondos de aproximadamente 1 cm de alto. Presione, no estire con rodillo.",
  "Crimp the edges, prick all over with a fork, and score into wedges before baking. Scoring after baking shatters it.":
    "Repulgue los bordes, pinche toda la superficie con tenedor y marque las cuñas antes de hornear. Marcarlas después del horneado lo hace añicos.",
  "Chill 30 minutes, then bake at 150 °C for 40–45 minutes until pale gold at the very edge only.":
    "Refrigere 30 minutos y hornee a 150 °C por 40–45 minutos hasta que esté dorado claro solo en el borde.",
  "Cut through the scores while hot, sprinkle with demerara, and cool in the tin.":
    "Corte por las marcas en caliente, espolvoree azúcar demerara y enfríe en el molde.",
  "Two weeks in a tin. The dough freezes a month.":
    "Dos semanas en un tarro. La masa se congela un mes.",
  "Indefinite in a sealed tin, and the wedge shape is visually distinctive enough to carry a gift box. One of the strongest retail candidates in the matrix.":
    "Indefinido en tarro hermético, y la forma de cuña es lo bastante distintiva como para sostener una caja de regalo. Uno de los mejores candidatos a producto de venta al público de toda la matriz.",

  // ---- 77 Lucuma Millionaire's Shortbread ----
  "48 squares": "48 cuadrados",
  "as dish 76 without the nibs, pressed into a lined tray":
    "igual que el plato 76 pero sin los nibs, presionado en una bandeja forrada",
  "Bake the shortbread base at 150 °C for 35 minutes until pale gold. Cool completely in the tin.":
    "Hornee la base de shortbread a 150 °C por 35 minutos hasta que quede dorada clara. Enfríe por completo en el molde.",
  "Cook the manjar blanco with the lúcuma and butter over low heat for 10 minutes, stirring constantly, until it thickens and pulls from the pan.":
    "Cocine el manjar blanco con la lúcuma y la mantequilla a fuego bajo por 10 minutos, revolviendo sin parar, hasta que espese y se despegue de la olla.",
  "Pour over the cooled base and level. Chill 2 hours until firm.":
    "Vierta sobre la base fría y empareje. Refrigere 2 horas hasta que esté firme.",
  "Temper the chocolate properly: melt to 45 °C, cool to 27 °C, bring back to 31 °C. Untempered chocolate blooms grey within a day and looks like a fault.":
    "Temple bien el chocolate: derrita a 45 °C, baje a 27 °C y vuelva a 31 °C. El chocolate sin templar florece gris en un día y parece un defecto.",
  "Pour over, spread thin, and scatter Maras salt before it sets.":
    "Vierta encima, extienda delgado y esparza sal de Maras antes de que cuaje.",
  "Cut with a hot dry knife once set but not fridge-cold, or the chocolate cracks.":
    "Corte con un cuchillo caliente y seco cuando esté cuajado pero no helado, o el chocolate se quiebra.",
  "Assemble 3 days ahead. Do not refrigerate once finished — condensation dulls the chocolate.":
    "Arme 3 días antes. No lo refrigere una vez terminado — la condensación opaca el chocolate.",
  "Days at cool room temperature. In Lima's summer heat the caramel softens; keep it below 22 °C.":
    "Días a temperatura ambiente fresca. Con el calor del verano limeño el caramelo se ablanda; manténgalo por debajo de 22 °C.",
  "Tempering is the bottleneck. Temper in 2 kg batches or the chocolate falls out of temper before you finish pouring.":
    "El templado es el cuello de botella. Temple en tandas de 2 kg o el chocolate se sale de temple antes de que termine de verter.",

  // ---- 78 Whisky & Maca Alfajores ----
  "50 alfajores": "50 alfajores",
  "Beat butter and icing sugar, then the yolks.":
    "Bata la mantequilla con el azúcar en polvo y luego las yemas.",
  "Fold in both flours and the maca. The dough will be very short and crumbly — that is correct.":
    "Integre las dos harinas y la maca. La masa quedará muy quebradiza y desmoronable — eso es lo correcto.",
  "Chill 1 hour, then roll 5 mm between sheets of paper, which is the only way to handle a dough this short.":
    "Refrigere 1 hora y estire a 5 mm entre hojas de papel, que es la única forma de manejar una masa tan quebradiza.",
  "Cut 4 cm rounds and bake at 170 °C for 12 minutes. They should not colour at all.":
    "Corte discos de 4 cm y hornee a 170 °C por 12 minutos. No deben tomar nada de color.",
  "Cool completely on the tray. Warm alfajor biscuits break if you lift them.":
    "Enfríe por completo sobre la bandeja. Las tapas de alfajor tibias se rompen al levantarlas.",
  "Beat the whisky into the manjar blanco. Pipe, sandwich, and roll the edges in coconut.":
    "Integre el whisky al manjar blanco. Rellene con manga, arme el sándwich y pase los bordes por coco.",
  "The maca is earthy and slightly bitter, which is what stops the whole thing being cloying.":
    "La maca es terrosa y ligeramente amarga, y eso es lo que evita que todo resulte empalagoso.",
  "Biscuits keep a week unfilled. Filled, they soften after 2 days — which some people prefer.":
    "Las tapas duran una semana sin rellenar. Rellenos, se ablandan a los 2 días — cosa que a algunos les gusta más.",
  "Excellent. Boxes and travels perfectly. Needs the liquor licence flag only because of the whisky in the filling.":
    "Excelente. Se encaja y viaja a la perfección. Lleva la marca de licencia de licor únicamente por el whisky del relleno.",

  // ---- 79 Scottish Macaroon (Papa Amarilla) ----
  "50 macaroons": "50 macaroons",
  "roughly; add until it stops absorbing": "aproximado; agregue hasta que deje de absorber",
  "Rice the potato and let it cool completely and dry out. Warm potato will turn the sugar to syrup and the mixture will never set.":
    "Prense la papa y déjela enfriar por completo y secarse. La papa tibia convierte el azúcar en almíbar y la mezcla nunca cuaja.",
  "Beat in the icing sugar a large spoonful at a time. It will look like nothing is happening, then it suddenly seizes into a stiff fondant.":
    "Incorpore el azúcar en polvo de a una cucharada grande. Parecerá que no pasa nada, y de pronto agarra y se vuelve un fondant firme.",
  "Keep adding sugar until it is firm enough to roll and no longer sticky. The exact amount depends on how wet the potato is.":
    "Siga agregando azúcar hasta que esté firme para bolear y deje de pegarse. La cantidad exacta depende de qué tan húmeda esté la papa.",
  "Roll into 20 g logs and chill 1 hour until hard.":
    "Forme cilindros de 20 g y refrigere 1 hora hasta que endurezcan.",
  "Dip in tempered chocolate, then straight into the toasted coconut.":
    "Bañe en chocolate templado y pase de inmediato por el coco tostado.",
  "Set on paper at cool room temperature.":
    "Deje cuajar sobre papel a temperatura ambiente fresca.",
  "One potato and a bag of sugar becomes a confection — a Scottish sweet built on the crop Peru domesticated. This is the best story in the matrix and it costs almost nothing to make.":
    "Una papa y una bolsa de azúcar se convierten en un dulce — un dulce escocés construido sobre el cultivo que el Perú domesticó. Es la mejor historia de la matriz y hacerla no cuesta casi nada.",
  "The fondant keeps a week chilled. Dipped, they keep 2 weeks.":
    "El fondant dura una semana refrigerado. Bañados, duran 2 semanas.",
  "Very stable. Survives a hot van better than anything else in the bakery section.":
    "Muy estables. Sobreviven una camioneta caliente mejor que cualquier otra cosa de la sección de panadería.",
  "Trivially scalable, which combined with the story makes this the obvious retail product.":
    "Escalable sin esfuerzo, lo que sumado a la historia lo vuelve el producto obvio para venta al público.",

  // ---- 80 Lucuma Tablet ----
  "60 pieces": "60 piezas",
  "397 g tin": "lata de 397 g",
  "Warm the milk, sugar and butter in a heavy, deep pan until the sugar dissolves completely. Undissolved sugar means grainy tablet.":
    "Caliente la leche, el azúcar y la mantequilla en una olla pesada y honda hasta que el azúcar se disuelva por completo. Azúcar sin disolver significa tablet arenoso.",
  "Add the condensed milk and bring to a steady boil, stirring constantly. It will climb, so use a pan twice the size you think you need.":
    "Agregue la leche condensada y lleve a hervor constante, revolviendo sin parar. Va a subir, así que use una olla del doble del tamaño que cree necesitar.",
  "Boil to 118 °C, about 20 minutes. This is soft-ball stage and there is no substitute for a thermometer.":
    "Hierva hasta 118 °C, unos 20 minutos. Es el punto de bola blanda y no hay sustituto para un termómetro.",
  "Take off the heat, add the lúcuma and salt, and beat hard for 5–8 minutes as it cools.":
    "Retire del fuego, agregue la lúcuma y la sal, y bata con fuerza 5–8 minutos mientras enfría.",
  "You are looking for the moment it loses its gloss and thickens — that is crystallisation starting, and it is the difference between tablet and fudge.":
    "Busque el momento en que pierde el brillo y espesa — ahí empieza la cristalización, y es la diferencia entre tablet y fudge.",
  "Pour into a lined tray immediately and mark into squares while still warm.":
    "Vierta de inmediato en una bandeja forrada y marque los cuadrados mientras aún está tibio.",
  "Keeps a month in a tin.": "Dura un mes en un tarro.",
  "Indefinite. Dry, sweet and stable — ideal for boxes and gifts.":
    "Indefinido. Seco, dulce y estable — ideal para cajas y regalos.",
  "Do not double beyond 3 kg of sugar in one pan. Larger batches will not reach temperature evenly and you get a soft centre.":
    "No pase de 3 kg de azúcar en una sola olla. Las tandas más grandes no alcanzan temperatura pareja y queda un centro blando.",

  // ---- 81 Cacao & Sea Salt Tablet ----
  "Follow the tablet method exactly as dish 80 up to 118 °C.":
    "Siga el método del tablet exactamente como en el plato 80 hasta los 118 °C.",
  "Off the heat, stir in the chopped chocolate until it melts completely.":
    "Fuera del fuego, integre el chocolate picado hasta que se derrita por completo.",
  "Beat until it loses its gloss and thickens.":
    "Bata hasta que pierda el brillo y espese.",
  "Pour into a lined tray, scatter with cacao nibs and Maras salt, and press them in lightly.":
    "Vierta en una bandeja forrada, esparza nibs de cacao y sal de Maras, y presiónelos ligeramente.",
  "Mark into squares while warm.": "Marque los cuadrados en tibio.",
  "The salt is the point: dark chocolate tablet without it is one-dimensional.":
    "La sal es el punto: un tablet de chocolate amargo sin ella es de una sola dimensión.",
  "A month in a tin.": "Un mes en un tarro.",
  "Indefinite and travels perfectly.": "Indefinido y viaja a la perfección.",

  // ---- 82 Maracuya Empire Biscuits ----
  "40 biscuits": "40 galletas",
  "for the icing": "para el glaseado",
  "Rub the butter into the flour, then add sugar and egg to make a firm dough. Chill 1 hour.":
    "Arene la mantequilla con la harina, luego agregue azúcar y huevo para formar una masa firme. Refrigere 1 hora.",
  "Roll 4 mm and cut 6 cm rounds. You need an even number; every biscuit is half a sandwich.":
    "Estire a 4 mm y corte discos de 6 cm. Necesita un número par; cada galleta es la mitad de un sándwich.",
  "Bake at 175 °C for 12–14 minutes until barely coloured at the edges.":
    "Hornee a 175 °C por 12–14 minutos hasta que apenas tomen color en los bordes.",
  "Cool completely, then sandwich in pairs with the curd. Do not overfill — it will squeeze out under the icing.":
    "Enfríe por completo y arme en pares con la crema. No rellene de más — se sale por debajo del glaseado.",
  "Beat the icing sugar with maracuyá juice to a thick, just-pourable glacé icing.":
    "Bata el azúcar en polvo con jugo de maracuyá hasta un glaseado espeso que apenas se pueda verter.",
  "Spoon onto each top and place a cherry in the centre before it sets.":
    "Ponga una cucharada sobre cada tapa y coloque una cereza en el centro antes de que cuaje.",
  "Note the provenance: Empire biscuits are strongly associated with Scotland but may not have originated there. Do not overclaim on the card.":
    "Ojo con la procedencia: las Empire biscuits se asocian fuertemente con Escocia pero puede que no hayan nacido ahí. No exagere en la ficha.",
  "Biscuits keep a week unfilled. Assembled, eat within 3 days before the icing weeps into the biscuit.":
    "Las galletas duran una semana sin rellenar. Armadas, cómalas dentro de 3 días antes de que el glaseado se filtre en la galleta.",
  "A day boxed. The icing marks if stacked, so single layers with paper between.":
    "Un día en caja. El glaseado se marca si se apilan, así que una sola capa con papel entre medio.",

  // ---- 83 Dundee Cake, Pecan & Aguaymanto ----
  "2 cakes, 24 slices": "2 tortas, 24 porciones",
  "for the traditional concentric top": "para la superficie concéntrica tradicional",
  "Soak the dried fruit in whisky overnight. Under-soaked fruit steals moisture from the crumb.":
    "Remoje la fruta seca en whisky toda la noche. La fruta poco remojada le roba humedad a la miga.",
  "Cream butter and sugar properly pale, 6–8 minutes. This cake has no chemical lift to fall back on.":
    "Cremee mantequilla y azúcar hasta que queden bien pálidas, 6–8 minutos. Esta torta no tiene leudante químico al cual recurrir.",
  "Add the eggs one at a time, with a spoon of flour if it looks like splitting.":
    "Agregue los huevos de a uno, con una cucharada de harina si parece que se corta.",
  "Fold in the flour, then the soaked fruit and orange zest.":
    "Integre la harina, luego la fruta remojada y la ralladura de naranja.",
  "Fill lined tins two-thirds full, level, and arrange the pecans in concentric rings on top. Do not press them in; they should sit proud.":
    "Llene los moldes forrados hasta dos tercios, empareje y disponga las pecanas en anillos concéntricos encima. No las hunda; deben quedar sobresaliendo.",
  "Bake at 150 °C for 1 hour 45 to 2 hours. Cover with paper if the top colours before the centre sets.":
    "Hornee a 150 °C entre 1 hora 45 y 2 horas. Cubra con papel si la superficie toma color antes de que cuaje el centro.",
  "Feed with a tablespoon of whisky a week while it matures.":
    "Aliméntela con una cucharada de whisky por semana mientras madura.",
  "Make 3–6 weeks ahead and feed weekly. This cake genuinely needs the time.":
    "Hágala con 3–6 semanas de anticipación y aliméntela cada semana. Esta torta de verdad necesita ese tiempo.",
  "Months. Slices cleanly cold and travels whole.":
    "Meses. Se corta limpio en frío y viaja entera.",
  "Oven time does not scale with tin count, but it does with tin size. Keep to 20 cm tins.":
    "El tiempo de horno no escala con la cantidad de moldes, pero sí con su tamaño. Manténgase en moldes de 20 cm.",

  // ---- 84 Ecclefechan Tart, Chancaca ----
  "40 tarts": "40 tartaletas",
  "the traditional sharpener; it stops the tart being sickly":
    "el toque ácido tradicional; evita que la tarta resulte empalagosa",
  "Line 7 cm tartlet tins and chill 30 minutes. No need to blind bake — the filling is wet enough to set the base as it cooks.":
    "Forre moldes de tartaleta de 7 cm y refrigere 30 minutos. No hace falta hornear en blanco — el relleno es lo bastante húmedo para cuajar la base durante la cocción.",
  "Melt the chancaca into the warm butter until fully dissolved.":
    "Derrita la chancaca en la mantequilla tibia hasta disolverla del todo.",
  "Whisk in the eggs and vinegar off the heat. If the butter is too hot the eggs will scramble.":
    "Integre los huevos y el vinagre fuera del fuego. Si la mantequilla está muy caliente los huevos se cuajan.",
  "Stir in the fruit and nuts.": "Incorpore la fruta y los frutos secos.",
  "Fill the cases three-quarters full and bake at 180 °C for 25–30 minutes until set with a slight wobble.":
    "Llene las bases hasta tres cuartos y hornee a 180 °C por 25–30 minutos hasta que cuajen con un ligero temblor.",
  "Cool in the tins — they are fragile hot and firm as they cool.":
    "Enfríe en los moldes — están frágiles en caliente y toman firmeza al enfriar.",
  "Bake a day ahead. Chancaca keeps them moist for 4 days.":
    "Hornee un día antes. La chancaca las mantiene húmedas por 4 días.",
  "Excellent. Sturdy, sweet and stable at room temperature.":
    "Excelente. Resistentes, dulces y estables a temperatura ambiente.",

  // ---- 85 Border Tart ----
  "Line and chill the tartlet cases.": "Forre los moldes de tartaleta y refrigérelos.",
  "Cream the butter and sugar, add eggs one at a time, then fold in the ground almonds.":
    "Cremee la mantequilla con el azúcar, agregue los huevos de a uno e integre la almendra molida.",
  "Fold through the figs, pecans, lemon zest and juice. The lemon is what distinguishes a Border tart from an Ecclefechan.":
    "Integre los higos, las pecanas, la ralladura y el jugo de limón. El limón es lo que distingue a una Border tart de una Ecclefechan.",
  "Fill the cases and bake at 180 °C for 25 minutes until golden and just set.":
    "Rellene las bases y hornee a 180 °C por 25 minutos hasta que doren y apenas cuajen.",
  "Cool in the tins.": "Enfríe en los moldes.",
  "Optionally glaze with warmed apricot jam or a thin lemon icing.":
    "Opcionalmente glasee con mermelada de durazno tibia o un glaseado ligero de limón.",
  "Bake up to 3 days ahead; the filling improves as the lemon settles into the figs.":
    "Hornee hasta 3 días antes; el relleno mejora a medida que el limón se asienta en los higos.",
  "Very stable at room temperature all day. Good for boxes and gifting.":
    "Muy estables a temperatura ambiente todo el día. Buenas para cajas y regalos.",

  // ---- 86 Black Bun ----
  "2 loaves, 24 slices": "2 panes, 24 porciones",
  "for the plain pastry casing": "para la envoltura de masa simple",
  "Make a firm pastry and rest it. This is a casing, not a pleasure — it is meant to be plain.":
    "Haga una masa firme y déjela reposar. Esto es una envoltura, no un placer — debe ser sosa a propósito.",
  "Mix all the fruit, nuts, flour, spices and bicarbonate. The black pepper is traditional and worth keeping.":
    "Mezcle toda la fruta, los frutos secos, la harina, las especias y el bicarbonato. La pimienta negra es tradicional y vale la pena mantenerla.",
  "Bind with the pisco and milk to a stiff mixture.":
    "Ligue con el pisco y la leche hasta obtener una mezcla dura.",
  "Line loaf tins with pastry, leaving an overhang. Pack the filling in tightly — air pockets collapse.":
    "Forre moldes de pan con la masa dejando que sobresalga. Compacte bien el relleno — las bolsas de aire se colapsan.",
  "Fold the pastry over, seal, and prick right through to the base several times with a skewer.":
    "Doble la masa por encima, selle y pinche varias veces con una brocheta hasta el fondo.",
  "Bake at 150 °C for 2.5 hours. Cover if the pastry darkens.":
    "Hornee a 150 °C por 2,5 horas. Cubra si la masa se oscurece.",
  "Traditionally cut at Hogmanay, which makes it the anchor of a New Year product.":
    "Tradicionalmente se corta en Hogmanay, lo que lo vuelve el eje de un producto de Año Nuevo.",
  "Make at least 2 weeks ahead, ideally a month. It is inedible fresh and excellent matured.":
    "Hágalo con al menos 2 semanas de anticipación, idealmente un mes. Recién hecho es incomible y madurado es excelente.",
  "Months in a tin. The longest shelf life in the matrix.":
    "Meses en un tarro. La vida útil más larga de toda la matriz.",
  "The pricking matters more at scale — without it the pastry lifts off the filling in a dome.":
    "El pinchado importa más a gran escala — sin él la masa se levanta del relleno formando una cúpula.",

  // ---- 87 Clootie Dumpling ----
  "the cloot": "el paño (cloot)",
  "Scald the cloth in boiling water, wring it out, and spread it flat. Dust generously with flour — this forms the characteristic skin.":
    "Escalde el paño en agua hirviendo, escúrralo y extiéndalo plano. Enharínelo con generosidad — eso forma la piel característica.",
  "Mix all dry ingredients, then bind with egg, milk and algarrobina to a soft dropping consistency.":
    "Mezcle todos los secos y ligue con huevo, leche y algarrobina hasta una consistencia blanda que caiga de la cuchara.",
  "Heap the mixture in the centre of the cloth, gather the edges, and tie with string leaving room to expand.":
    "Amontone la mezcla en el centro del paño, junte los bordes y ate con pabilo dejando espacio para que expanda.",
  "Lower onto an upturned plate in a large pan of boiling water and simmer 3 hours, topping up with boiling water.":
    "Baje sobre un plato invertido dentro de una olla grande con agua hirviendo y cocine 3 horas, reponiendo con agua hirviendo.",
  "Lift out, dip briefly in cold water to loosen, then unwrap onto a plate.":
    "Retire, sumerja brevemente en agua fría para despegar y desenvuelva sobre un plato.",
  "Dry the skin in a low oven for 15 minutes — that leathery skin is the whole point of a clootie.":
    "Seque la piel en horno bajo por 15 minutos — esa piel correosa es todo el sentido de un clootie.",
  "Better made 2 days ahead. Keeps a week and slices for frying, which is how leftovers are traditionally eaten.":
    "Queda mejor hecho 2 días antes. Dura una semana y se corta en rodajas para freír, que es como se comen tradicionalmente las sobras.",
  "Excellent. Steams to reheat and is arguably better on day two.":
    "Excelente. Se recalienta al vapor y probablemente esté mejor al segundo día.",
  "One dumpling per 10 portions. Larger and the centre will not cook through in 3 hours.":
    "Un dumpling por cada 10 porciones. Más grande y el centro no se cocina en 3 horas.",

  // ---- 88 Fly Cemetery Slice ----
  "40 slices": "40 porciones",
  "Warm the fruit with chancaca, butter, spice, lemon and pisco until the fruit plumps and the mixture is thick, 10 minutes. Cool completely.":
    "Caliente la fruta con chancaca, mantequilla, especias, limón y pisco hasta que la fruta se hinche y la mezcla espese, 10 minutos. Enfríe por completo.",
  "Roll two pastry sheets to fit a tray. Lay one down, spread the fruit right to the edges — a bare margin makes the slice look mean.":
    "Estire dos láminas de masa al tamaño de la bandeja. Coloque una, extienda la fruta hasta los bordes — un margen vacío hace que la porción se vea mezquina.",
  "Top with the second sheet, press the edges, and score the top into portions.":
    "Cubra con la segunda lámina, presione los bordes y marque las porciones en la superficie.",
  "Egg wash and sprinkle heavily with caster sugar.":
    "Pincele con huevo y espolvoree generosamente con azúcar fina.",
  "Bake at 200 °C for 30–35 minutes until deep gold and the base is cooked through. Lift a corner to check.":
    "Hornee a 200 °C por 30–35 minutos hasta que esté dorado oscuro y la base cocida. Levante una esquina para comprobar.",
  "Cool before cutting through the scores.":
    "Enfríe antes de cortar por las marcas.",
  "Its name is a Scottish joke about the appearance. Whether you use it on the menu is a judgement call.":
    "Su nombre es una broma escocesa sobre su aspecto. Usarlo o no en la carta queda a criterio suyo.",
  "Bake a day ahead.": "Hornee un día antes.",
  "2 days. Stable, sturdy and cheap — a strong tea-tray item.":
    "2 días. Estable, resistente y barato — un buen producto para la mesa de té.",

  // ---- 89 Selkirk Bannock ----
  "Warm the milk with the lúcuma and whisk smooth, then add the yeast and a spoon of the sugar. Leave 10 minutes until foaming.":
    "Caliente la leche con la lúcuma y bata hasta que quede lisa, luego agregue la levadura y una cucharada del azúcar. Deje 10 minutos hasta que espume.",
  "Mix into flour, remaining sugar and salt to a soft dough. Knead 10 minutes.":
    "Mezcle con la harina, el resto del azúcar y la sal hasta una masa suave. Amase 10 minutos.",
  "Work in the softened butter a little at a time. It will look broken before it comes together — persevere.":
    "Incorpore la mantequilla pomada de a poco. Se verá cortada antes de unirse — persevere.",
  "Prove 1 hour until doubled, then knock back and fold in the sultanas. Adding fruit before the first prove slows the yeast.":
    "Leude 1 hora hasta que doble, desgasifique e integre las pasas. Agregar la fruta antes del primer leudado frena la levadura.",
  "Shape into rounds, place on trays, and prove 45 minutes.":
    "Forme discos, colóquelos en bandejas y deje leudar 45 minutos.",
  "Bake at 190 °C for 35–40 minutes. It should sound hollow underneath.":
    "Hornee a 190 °C por 35–40 minutos. Debe sonar hueco por debajo.",
  "Glaze with warm milk and sugar as it comes out.":
    "Glasee con leche tibia y azúcar al sacarlo.",
  "Freezes well baked. Best on day one or two, then toasted.":
    "Se congela bien ya horneado. Mejor el primer o segundo día, y después tostado.",
  "3 days wrapped. Toasted with butter thereafter, which is traditional anyway.":
    "3 días envuelto. Después, tostado con mantequilla, que de todos modos es lo tradicional.",

  // ---- 90 Sultana Tea Loaf ----
  "Soak the sultanas in hot tea, pisco and sugar overnight. This is the entire technique and it cannot be shortened.":
    "Remoje las pasas en té caliente, pisco y azúcar toda la noche. Esa es toda la técnica y no se puede acortar.",
  "The next day, beat in the eggs.": "Al día siguiente, integre los huevos batiendo.",
  "Fold in the flour and spice until just combined. Overmixing makes it tough.":
    "Integre la harina y las especias solo hasta unir. Batir de más lo pone duro.",
  "Divide between two lined loaf tins.": "Reparta en dos moldes de pan forrados.",
  "Bake at 170 °C for 55–60 minutes until a skewer comes out clean.":
    "Hornee a 170 °C por 55–60 minutos hasta que un palito salga limpio.",
  "Cool in the tin. Serve sliced and buttered — it is meant to be eaten with butter, not on its own.":
    "Enfríe en el molde. Sirva en rodajas con mantequilla — está pensado para comerse con mantequilla, no solo.",
  "Keeps a week wrapped and improves for the first three days.":
    "Dura una semana envuelto y mejora durante los primeros tres días.",
  "Excellent. No fat in the batter means it stays moist for days rather than staling.":
    "Excelente. Al no llevar grasa en la masa se mantiene húmedo por días en vez de secarse.",
  "Scales perfectly and is one of the cheapest items in the matrix to produce.":
    "Escala a la perfección y es uno de los productos más baratos de producir de toda la matriz.",

  // ---- 91 Quinoa & Cacao Flapjacks ----
  "40 bars": "40 barras",
  "Toast the quinoa until it pops. Untoasted quinoa in a flapjack is unpleasantly raw.":
    "Tueste la quinua hasta que reviente. La quinua sin tostar en un flapjack sabe desagradablemente cruda.",
  "Melt the butter, chancaca, syrup and salt together until smooth. Do not let it boil or the bars set rock hard.":
    "Derrita la mantequilla, la chancaca, el sirope y la sal hasta que quede liso. No lo deje hervir o las barras quedan durísimas.",
  "Stir in the oats, toasted quinoa and cacao nibs until every grain is coated.":
    "Integre la avena, la quinua tostada y los nibs de cacao hasta que cada grano quede cubierto.",
  "Press very firmly into a lined tray. Loose packing is why flapjacks crumble.":
    "Presione con mucha firmeza en una bandeja forrada. El compactado flojo es la razón por la que los flapjacks se desmoronan.",
  "Bake at 170 °C for 25–30 minutes until golden at the edges but still soft in the middle — they firm as they cool.":
    "Hornee a 170 °C por 25–30 minutos hasta que doren en los bordes pero sigan blandos al centro — firman al enfriar.",
  "Mark into bars while hot, cool completely in the tin, then cut.":
    "Marque las barras en caliente, enfríe por completo en la bandeja y luego corte.",
  "A week in a tin.": "Una semana en un tarro.",
  "Extremely stable. Travels, boxes and survives heat. An obvious tasting-box filler.":
    "Extremadamente estables. Viajan, se encajan y aguantan el calor. Un relleno obvio para caja de degustación.",

  // ---- 92 Chirimoya Cranachan Cups ----
  "20 cups": "20 copas",
  "short season; check the Season page before promising it":
    "temporada corta; revise la página de Temporada antes de prometerla",
  "Toast the oats with the sugar under a grill until they caramelise into crunchy clusters. Watch them — they go from toasted to burnt in seconds.":
    "Tueste la avena con el azúcar bajo el grill hasta que caramelice en grumos crocantes. No los pierda de vista — pasan de tostados a quemados en segundos.",
  "Cool completely. They must be cold and crisp or they dissolve into the cream.":
    "Enfríe por completo. Deben estar fríos y crocantes o se disuelven en la crema.",
  "Whip the cream to soft peaks only. Over-whipped cranachan is grainy.":
    "Bata la crema solo a punto de picos suaves. Un cranachan sobrebatido queda granuloso.",
  "Fold in the whisky and half the algarrobina.":
    "Integre el whisky y la mitad de la algarrobina.",
  "Scoop the chirimoya flesh, removing every seed, and crush it lightly.":
    "Saque la pulpa de la chirimoya retirando todas las pepas y aplástela ligeramente.",
  "Layer in glasses: oats, cream, chirimoya, repeating, finishing with oats so they stay crisp on top.":
    "Arme en copas por capas: avena, crema, chirimoya, y repita, terminando con avena para que quede crocante encima.",
  "Thread the remaining algarrobina over at the last moment.":
    "Haga un hilo con el resto de la algarrobina al último momento.",
  "Oats a week ahead. Assemble no more than 2 hours before service.":
    "La avena una semana antes. Arme no más de 2 horas antes del servicio.",
  "2 hours. The oats soften after that, which is the whole texture gone.":
    "2 horas. Después de eso la avena se ablanda, y con ella se va toda la textura.",
  "Chirimoya browns on contact with air. Scoop it in batches as you assemble, not all at once.":
    "La chirimoya se oxida al contacto con el aire. Sáquela por tandas mientras arma, no toda de golpe.",

  // ---- 93 Tipsy Laird ----
  "a 30 cm sponge, cubed; day-old is better, fresh turns to paste":
    "un bizcocho de 30 cm en cubos; mejor del día anterior, el fresco se vuelve pasta",
  "custard": "para la crema inglesa",
  "Make a proper custard: heat the milk, whisk into the yolks, sugar and cornflour, then return to the pan and cook out until thick. Cover with cling film touching the surface and cool completely.":
    "Haga una crema inglesa de verdad: caliente la leche, intégrela batiendo a las yemas, el azúcar y el chuño, devuelva a la olla y cocine hasta que espese. Cubra con film tocando la superficie y enfríe por completo.",
  "Layer the sponge in a glass bowl and douse with whisky. Let it soak 20 minutes.":
    "Ponga el bizcocho en capas en un bol de vidrio y empápelo con whisky. Deje absorber 20 minutos.",
  "Crush half the berries with a little sugar and spoon over; scatter the rest whole.":
    "Aplaste la mitad de las frutas con un poco de azúcar y repártalas encima; esparza el resto enteras.",
  "Pour over the cold custard. Warm custard will melt the whole thing into soup.":
    "Vierta la crema inglesa fría encima. La crema tibia derrite todo y lo convierte en sopa.",
  "Chill 4 hours until set.": "Refrigere 4 horas hasta que cuaje.",
  "Whip the cream to soft peaks, spoon on top, and finish with toasted almonds just before serving.":
    "Bata la crema a picos suaves, póngala encima y termine con almendras tostadas justo antes de servir.",
  "The whisky is the only thing separating this from an English trifle, and it is worth being generous with it.":
    "El whisky es lo único que separa esto de un trifle inglés, y vale la pena ser generoso con él.",
  "Assemble to the custard layer a day ahead. Cream on the day.":
    "Arme hasta la capa de crema inglesa un día antes. La crema batida, el mismo día.",
  "Holds 4 hours cold. A glass bowl travels badly — assemble on site if you can.":
    "Aguanta 4 horas en frío. Un bol de vidrio viaja mal — arme en el local si puede.",
  "Individual glasses scale better than one bowl and portion themselves, which matters on a buffet.":
    "Las copas individuales escalan mejor que un solo bol y se porcionan solas, lo cual importa en un buffet.",

  // ---- 94 Caledonian Cream ----
  "20 pots": "20 potes",
  "the Dundee-lineage marmalade from dish 65":
    "la mermelada de linaje Dundee del plato 65",
  "Whip the cream with the icing sugar to soft peaks. Stop early; it will firm as you fold.":
    "Bata la crema con el azúcar en polvo a picos suaves. Pare antes de tiempo; firmará al integrar.",
  "Loosen the marmalade with the whisky and lemon juice so it ripples rather than clumps.":
    "Afloje la mermelada con el whisky y el jugo de limón para que se marmolee en lugar de apelmazarse.",
  "Fold the lúcuma through the cream first, evenly.":
    "Integre primero la lúcuma a la crema, de forma pareja.",
  "Ripple the marmalade mixture through with two or three folds only. Overmixing gives you a uniform beige, which is not the dish.":
    "Marmolee la mezcla de mermelada con solo dos o tres movimientos. Mezclar de más da un beige uniforme, que no es el plato.",
  "Spoon into pots and chill 2 hours.":
    "Reparta en potes y refrigere 2 horas.",
  "Top with toasted oats at service.":
    "Corone con avena tostada al momento del servicio.",
  "No cooking at all, which makes it one of the highest-margin desserts here.":
    "Sin nada de cocción, lo que lo vuelve uno de los postres de mayor margen de esta carta.",
  "Assemble a day ahead. The oats go on last.":
    "Arme un día antes. La avena va al final.",
  "4 hours chilled. Lidded pots travel well.":
    "4 horas refrigerado. Los potes con tapa viajan bien.",

  // ---- 95 Chancaca Sticky Toffee ----
  "for the sauce": "para la salsa",
  "Pour the boiling water over the dates and bicarbonate and leave 20 minutes. The bicarbonate breaks the dates down and darkens the sponge.":
    "Vierta el agua hirviendo sobre los dátiles y el bicarbonato y deje 20 minutos. El bicarbonato deshace los dátiles y oscurece el bizcocho.",
  "Cream butter and sugar, add eggs, then fold in flour.":
    "Cremee mantequilla y azúcar, agregue los huevos e integre la harina.",
  "Fold in the date mixture including all its liquid. The batter will look alarmingly loose — that is correct.":
    "Integre la mezcla de dátiles con todo su líquido. La masa se verá alarmantemente floja — eso es lo correcto.",
  "Bake at 180 °C for 35–40 minutes in a lined tray.":
    "Hornee a 180 °C por 35–40 minutos en una bandeja forrada.",
  "Sauce: melt the chancaca with butter and cream and simmer 5 minutes until glossy.":
    "Salsa: derrita la chancaca con mantequilla y crema y cocine 5 minutos hasta que brille.",
  "Pour a third of the sauce over the hot sponge and let it soak in. Serve with the rest hot.":
    "Vierta un tercio de la salsa sobre el bizcocho caliente y deje que absorba. Sirva con el resto caliente.",
  "Note for the provenance card: sticky toffee pudding's origin is genuinely disputed — Lake District and Scotland both claim it. The matrix flags it as contested.":
    "Nota para la ficha de procedencia: el origen del sticky toffee pudding está genuinamente en disputa — el Lake District y Escocia lo reclaman. La matriz lo marca como disputado.",
  "Sponge and sauce 3 days ahead, both freeze.":
    "Bizcocho y salsa 3 días antes; ambos se congelan.",
  "Reheats perfectly, which is unusual for a sponge. A dependable buffet dessert.":
    "Se recalienta a la perfección, cosa rara en un bizcocho. Un postre de buffet confiable.",

  // ---- 96 The Fresa Teacake ----
  "50 teacakes": "50 teacakes",
  "as dish 76, wholemeal flour, cut in 4 cm rounds":
    "igual que el plato 76, con harina integral, cortado en discos de 4 cm",
  "for the Italian meringue": "para el merengue italiano",
  "powder, not purée; purée will collapse the meringue":
    "en polvo, no en pulpa; la pulpa baja el merengue",
  "stabiliser": "estabilizante",
  "Bake the wholemeal shortbread rounds and cool completely. They must be bone dry.":
    "Hornee los discos de shortbread integral y enfríe por completo. Deben quedar completamente secos.",
  "Boil the sugar and water to 118 °C.": "Hierva el azúcar y el agua hasta 118 °C.",
  "Meanwhile whisk the whites to soft peaks. Trickle the syrup down the side of the bowl while whisking.":
    "Mientras tanto bata las claras a picos suaves. Vierta el almíbar en hilo por la pared del bol mientras bate.",
  "Add the bloomed gelatine and whisk until the bowl is barely warm and the meringue holds a stiff peak, about 8 minutes.":
    "Agregue la gelatina hidratada y bata hasta que el bol esté apenas tibio y el merengue sostenga un pico firme, unos 8 minutos.",
  "Fold in the strawberry powder at the very end — it is what gives colour and a real tartness rather than a sweetness.":
    "Integre el polvo de fresa al final — es lo que da color y una acidez real en lugar de dulzor.",
  "Pipe domes onto the biscuits and leave to skin over for 30 minutes.":
    "Haga cúpulas con manga sobre las galletas y deje formar película por 30 minutos.",
  "Enrobe in tempered chocolate. Work fast; the meringue softens if the chocolate is above 32 °C.":
    "Bañe en chocolate templado. Trabaje rápido; el merengue se ablanda si el chocolate pasa de 32 °C.",
  "Biscuits a week ahead. Assembled, they are best within 3 days.":
    "Las galletas una semana antes. Armados, están mejor dentro de 3 días.",
  "Room temperature only. Refrigeration causes condensation which dulls the chocolate and weeps the meringue. In Lima's summer keep below 22 °C.":
    "Solo a temperatura ambiente. La refrigeración genera condensación, que opaca el chocolate y hace llorar al merengue. En el verano limeño manténgalos por debajo de 22 °C.",
  "The flagship product, and the hardest thing in the bakery section to make well. Pipe in batches of 25 so the meringue does not set in the bag.":
    "El producto insignia, y lo más difícil de hacer bien de toda la sección de panadería. Trabaje con manga en tandas de 25 para que el merengue no cuaje dentro de la bolsa.",

  // ---- 97 Choclo & Paria Scones ----
  "40 scones": "40 scones",
  "fresh, not frozen — frozen releases water into the dough":
    "fresco, no congelado — el congelado suelta agua en la masa",
  "Rub the cold butter into the flour to coarse crumbs. Stop while you can still see flecks of butter.":
    "Arene la mantequilla fría con la harina hasta obtener migas gruesas. Pare mientras todavía se vean trocitos de mantequilla.",
  "Stir in the choclo, most of the cheese, salt and cayenne.":
    "Incorpore el choclo, casi todo el queso, la sal y la cayena.",
  "Add the buttermilk and bring together with as few strokes as possible. Overworked scone dough is tough scone dough.":
    "Agregue el suero de leche y una la masa con la menor cantidad de movimientos posible. Masa de scone sobretrabajada es masa de scone dura.",
  "Pat out 3 cm thick — thick, not thin, or they will not rise.":
    "Aplaste a 3 cm de grosor — grueso, no delgado, o no levantan.",
  "Cut straight down with a sharp cutter and do not twist. Twisting seals the edge and stops the rise.":
    "Corte hacia abajo en línea recta con un cortador filoso y no gire. Girar sella el borde e impide el levantado.",
  "Egg wash, top with remaining cheese, and bake at 210 °C for 16–18 minutes.":
    "Pincele con huevo, cubra con el queso restante y hornee a 210 °C por 16–18 minutos.",
  "Best on the day. The dough can be cut and frozen raw, then baked from frozen with 5 extra minutes.":
    "Mejores el mismo día. La masa se puede cortar y congelar cruda, y hornearse desde congelado con 5 minutos extra.",
  "3 hours. Reheat 4 minutes at 180 °C to revive.":
    "3 horas. Recaliente 4 minutos a 180 °C para revivirlos.",

  // ---- 98 Loukoumades, Algarrobina ----
  "20 portions, about 120 pieces": "20 porciones, unas 120 piezas",
  "Whisk both flours, yeast, salt and water to a very loose, sticky batter — closer to a thick pancake batter than a dough.":
    "Bata las dos harinas, la levadura, la sal y el agua hasta una masa muy floja y pegajosa — más parecida a una mezcla espesa de panqueques que a una masa.",
  "Prove 90 minutes until bubbling and doubled.":
    "Leude 90 minutos hasta que burbujee y doble.",
  "Heat the oil to 175 °C.": "Caliente el aceite a 175 °C.",
  "Drop rounded teaspoons of batter into the oil, using two wetted spoons. Wet spoons are the trick; dry ones drag.":
    "Eche cucharaditas colmadas de masa al aceite, usando dos cucharas mojadas. Las cucharas mojadas son el truco; las secas se pegan.",
  "Fry 3 minutes, turning, until deep gold and puffed. They should be hollow inside.":
    "Fría 3 minutos, volteando, hasta que estén dorados oscuros e inflados. Deben quedar huecos por dentro.",
  "Drain briefly, then toss immediately in warm algarrobina loosened with honey.":
    "Escurra brevemente y báñelos de inmediato en algarrobina tibia aflojada con miel.",
  "Scatter with toasted quinoa and walnuts and serve within a minute.":
    "Esparza quinua tostada y nueces y sirva dentro del minuto.",
  "Batter can prove in the morning for an evening service, and is better for the longer ferment.":
    "La masa puede leudar en la mañana para un servicio de noche, y mejora con la fermentación más larga.",
  "Ninety seconds. There is no version of this that is not made in front of the guest.":
    "Noventa segundos. No existe una versión de esto que no se haga delante del invitado.",
  "One fryer serves about 30 guests. The batter is the easy part; the frying rate is the constraint.":
    "Una freidora atiende a unos 30 invitados. La masa es lo fácil; el ritmo de fritura es la restricción.",

  // ---- 99 Galaktoboureko, Lucuma ----
  "imported; price it before committing — an unverified cost":
    "importado; cotícelo antes de comprometerse — es un costo sin verificar",
  "for the syrup": "para el almíbar",
  "Make the syrup first and cool it completely. Cold syrup onto hot pastry is the rule — reverse it and the filo goes soggy.":
    "Haga primero el almíbar y enfríelo por completo. La regla es almíbar frío sobre masa caliente — al revés, la filo se aguada.",
  "Bring the milk to a simmer, rain in the semolina, and cook 8 minutes until thick, stirring constantly.":
    "Lleve la leche a hervor suave, eche la sémola en lluvia y cocine 8 minutos hasta que espese, revolviendo sin parar.",
  "Off the heat, beat in the sugar, then the eggs one at a time, then the lúcuma.":
    "Fuera del fuego, integre el azúcar batiendo, luego los huevos de a uno y después la lúcuma.",
  "Line a tray with buttered filo, 6 sheets, letting them overhang.":
    "Forre una bandeja con 6 láminas de filo enmantequilladas, dejándolas sobresalir por los bordes.",
  "Pour in the custard, fold the overhang over, and top with 6 more buttered sheets.":
    "Vierta la crema, doble los bordes sobrantes hacia adentro y cubra con 6 láminas más enmantequilladas.",
  "Score the top layers into portions before baking or you will shatter it afterwards.":
    "Marque las porciones en las capas superiores antes de hornear o después lo hará añicos.",
  "Bake at 180 °C for 45–50 minutes until golden and set. Pour the cold syrup over the moment it leaves the oven.":
    "Hornee a 180 °C por 45–50 minutos hasta que dore y cuaje. Vierta el almíbar frío encima en el momento en que salga del horno.",
  "Best made the day of service. It stays good 2 days but the filo softens.":
    "Mejor hecho el día del servicio. Se mantiene bien 2 días, pero la filo se ablanda.",
  "4 hours. Cut portions travel reasonably if kept flat and uncovered.":
    "4 horas. Las porciones cortadas viajan razonablemente si van planas y destapadas.",

  // ---- 100 Cardamom & Cacao Buns ----
  "30 buns": "30 bollos",
  "the filling paste": "la pasta de relleno",
  "Grind the cardamom fresh from pods. Pre-ground cardamom is the difference between a good bun and a dull one.":
    "Muela el cardamomo fresco a partir de las vainas. El cardamomo ya molido es la diferencia entre un buen bollo y uno anodino.",
  "Make an enriched dough with flour, yeast, sugar, salt, milk and softened butter. Knead 10 minutes until smooth and elastic.":
    "Haga una masa enriquecida con harina, levadura, azúcar, sal, leche y mantequilla pomada. Amase 10 minutos hasta que quede lisa y elástica.",
  "Prove 1 hour until doubled.": "Leude 1 hora hasta que doble.",
  "Beat the filling butter with sugar and cardamom to a spreadable paste.":
    "Bata la mantequilla del relleno con azúcar y cardamomo hasta una pasta untable.",
  "Roll the dough to a large rectangle, spread the paste, scatter the nibs, and fold in three.":
    "Estire la masa en un rectángulo grande, unte la pasta, esparza los nibs y doble en tres.",
  "Cut into strips, twist each one and knot it. The knot is what gives the layered look; a rolled spiral will not.":
    "Corte en tiras, tuerza cada una y anúdela. El nudo es lo que da el aspecto de capas; una espiral enrollada no lo logra.",
  "Prove 45 minutes, egg wash, top with pearl sugar, and bake at 200 °C for 15–18 minutes.":
    "Leude 45 minutos, pincele con huevo, cubra con azúcar perlada y hornee a 200 °C por 15–18 minutos.",
  "Shape and freeze after knotting. Prove from frozen 3 hours, then bake.":
    "Forme y congele después de anudar. Leude desde congelado 3 horas y hornee.",
  "Best within 6 hours. Refresh 3 minutes at 180 °C.":
    "Mejores dentro de 6 horas. Refresque 3 minutos a 180 °C.",
  "Knotting is slow — about 45 seconds a bun. Budget an hour of labour per 80.":
    "Anudar es lento — unos 45 segundos por bollo. Calcule una hora de trabajo por cada 80.",

  // ---- 101 Atholl Brose Cream Pots ----
  "40 pots": "40 potes",
  "Toast the oatmeal dry in a wide pan until it smells of biscuit, then cool it completely on a tray.":
    "Tueste la avena en seco en una sartén amplia hasta que huela a galleta y enfríela por completo en una bandeja.",
  "Warm a third of the cream with the algarrobina and the lemon zest; do not let it boil or it will split.":
    "Caliente un tercio de la crema con la algarrobina y la ralladura de limón; no la deje hervir o se corta.",
  "Soften the gelatine in cold water, squeeze it out and dissolve it into the warm cream.":
    "Hidrate la gelatina en agua fría, escúrrala y disuélvala en la crema tibia.",
  "Stir in the whisky off the heat — added hot, the alcohol cooks off and you lose the point of the dish.":
    "Incorpore el whisky fuera del fuego — agregado en caliente, el alcohol se evapora y se pierde el sentido del plato.",
  "Fold in the remaining cold cream and two-thirds of the oatmeal, keeping the rest back for the top.":
    "Integre el resto de la crema fría y dos tercios de la avena, guardando el resto para la superficie.",
  "Pour into pots, chill at least 4 hours, and scatter the reserved oatmeal on only at the venue so it stays crisp.":
    "Vierta en potes, refrigere al menos 4 horas y esparza la avena reservada recién en el local para que siga crocante.",
  "Set the pots up to 2 days ahead; the whisky mellows and the oat flavour deepens overnight.":
    "Cuaje los potes hasta con 2 días de anticipación; el whisky se suaviza y el sabor de la avena se profundiza durante la noche.",
  "Needs refrigeration. Two hours out of the fridge at a Lima event before the set softens.":
    "Necesita refrigeración. Dos horas fuera de la refrigeradora en un evento limeño antes de que el cuajado se ablande.",
  "Gelatine does not scale linearly upward — above 8 litres of cream, drop to 2.2 leaves per litre.":
    "La gelatina no escala de forma lineal hacia arriba — por encima de 8 litros de crema, baje a 2,2 láminas por litro.",

  // ---- 102 Cacao Cranachan Bars ----
  "48 bars": "48 barras",
  "Rub the butter into the oats, flour and brown sugar until it clumps when squeezed in the hand.":
    "Arene la mantequilla con la avena, la harina y el azúcar rubia hasta que se apelmace al apretarla en la mano.",
  "Press two-thirds of the mixture hard into lined trays and bake at 170 °C for 15 minutes until pale gold.":
    "Presione con fuerza dos tercios de la mezcla en bandejas forradas y hornee a 170 °C por 15 minutos hasta que dore claro.",
  "Cook the aguaymanto with the caster sugar until it collapses to a thick jam that holds a line on the spoon.":
    "Cocine el aguaymanto con el azúcar fina hasta que se deshaga en una mermelada espesa que sostenga una línea en la cuchara.",
  "Spread the fruit over the warm base, scatter the reserved crumble over it and bake a further 10 minutes.":
    "Extienda la fruta sobre la base tibia, esparza el crumble reservado encima y hornee 10 minutos más.",
  "Cool completely in the tray — cutting warm tears the fruit layer straight out.":
    "Enfríe por completo en la bandeja — cortarlas tibias arranca la capa de fruta de raíz.",
  "Melt the chocolate, spread it thin over the top, and cut into bars once it has set to a matt finish.":
    "Derrita el chocolate, extiéndalo delgado por encima y corte en barras cuando haya cuajado con acabado mate.",
  "Bake up to 4 days ahead. Cut on the day of service so the edges stay sharp in the box.":
    "Hornee hasta 4 días antes. Corte el día del servicio para que los bordes queden nítidos en la caja.",
  "Very stable at room temperature. Above 26 °C the chocolate blooms — keep boxes out of the sun.":
    "Muy estables a temperatura ambiente. Por encima de 26 °C el chocolate florece — mantenga las cajas fuera del sol.",

  // ---- 103 Highland Toffee & Maras Salt ----
  "120 shards": "120 trozos",
  "Melt the butter, sugar, water and condensed milk together over a low heat, stirring until no grain remains.":
    "Derrita la mantequilla, el azúcar, el agua y la leche condensada a fuego bajo, revolviendo hasta que no quede ni un grano.",
  "Raise the heat and boil to 138 °C on a probe — this is a hard-crack sweet and a guessed temperature ruins the batch.":
    "Suba el fuego y hierva hasta 138 °C con termómetro — es un dulce de punto de caramelo duro y adivinar la temperatura arruina la tanda.",
  "Pour immediately onto oiled trays; the mixture keeps cooking in the pan and will darken if you hesitate.":
    "Vierta de inmediato en bandejas aceitadas; la mezcla sigue cocinándose en la olla y se oscurece si uno duda.",
  "Scatter the Maras salt over the surface while it is still glossy so the crystals set into the toffee.":
    "Esparza la sal de Maras sobre la superficie mientras aún brilla, para que los cristales queden fijados en el toffee.",
  "Leave to set hard for an hour, then crack into shards with the back of a heavy spoon.":
    "Deje endurecer una hora y rompa en trozos con el dorso de una cuchara pesada.",
  "Wrap in cellophane or interleave with parchment — bare shards weld to each other within a day.":
    "Envuelva en celofán o intercale con papel manteca — los trozos desnudos se sueldan entre sí en un día.",
  "Make up to 2 weeks ahead if wrapped; this is the longest-keeping item on the whole sheet.":
    "Prepárelo hasta 2 semanas antes si va envuelto; es el producto de mayor duración de toda la hoja.",
  "Room temperature indefinitely when dry. Lima humidity makes it tacky — keep it sealed until service.":
    "A temperatura ambiente indefinidamente si se mantiene seco. La humedad de Lima lo pone pegajoso — manténgalo sellado hasta el servicio.",

  // ---- 104 Marmalade Bread Pudding ----
  "Split the stale butteries, spread each face with lucuma marmalade and layer them overlapping in deep trays.":
    "Parta los butteries del día anterior, unte cada cara con mermelada de lúcuma y acomódelos montados en bandejas hondas.",
  "Whisk the eggs and sugar, then pour on the warmed milk, cream and vanilla and strain the custard.":
    "Bata los huevos con el azúcar, vierta encima la leche tibia, la crema y la vainilla, y cuele la mezcla.",
  "Ladle the custard over the bread and press it down; leave it to soak a full 30 minutes before it goes near the oven.":
    "Reparta la crema sobre el pan con cucharón y presione; deje remojar 30 minutos completos antes de acercarlo al horno.",
  "Bake at 160 °C in a water bath for 40 to 45 minutes until it wobbles as one piece rather than sloshing.":
    "Hornee a 160 °C a baño maría por 40 a 45 minutos hasta que tiemble como una sola pieza y no chapotee.",
  "Rest 15 minutes before cutting so the custard finishes setting in the residual heat.":
    "Repose 15 minutos antes de cortar para que la crema termine de cuajar con el calor residual.",
  "Glaze the top with warmed marmalade thinned with a spoonful of water just before it leaves the kitchen.":
    "Glasee la superficie con mermelada tibia aligerada con una cucharada de agua justo antes de que salga de la cocina.",
  "Assemble and soak the day before, refrigerated, and bake on the morning of the event.":
    "Arme y deje remojar el día anterior, refrigerado, y hornee la mañana del evento.",
  "Two hours hot in a chafing dish. Also serves well at room temperature, which is the safer plan.":
    "Dos horas caliente en un chafing dish. También funciona bien a temperatura ambiente, que es el plan más seguro.",

  // ---- 105 Whisky Toffee Tart ----
  "3 tarts, 36 slices": "3 tartas, 36 porciones",
  "Line the tart rings with the cacao pastry, chill 30 minutes, then blind bake at 175 °C until dry to the touch.":
    "Forre los aros de tarta con la masa de cacao, refrigere 30 minutos y hornee en blanco a 175 °C hasta que esté seca al tacto.",
  "Melt the chancaca with the butter and a splash of water until it runs clear with no grit left.":
    "Derrita la chancaca con la mantequilla y un chorro de agua hasta que corra transparente y sin granos.",
  "Add the cream off the heat, whisking steadily — the caramel will seize and spit if the cream goes in cold and fast.":
    "Agregue la crema fuera del fuego, batiendo con constancia — el caramelo se agarrota y salpica si la crema entra fría y de golpe.",
  "Temper the yolks with a ladle of the hot caramel, return it all to the pan and stir until it coats a spoon.":
    "Atempere las yemas con un cucharón del caramelo caliente, devuelva todo a la olla y revuelva hasta que nape la cuchara.",
  "Stir the whisky in at the end so the spirit reads on the palate rather than boiling away in the pan.":
    "Incorpore el whisky al final para que el destilado se sienta en el paladar en vez de evaporarse en la olla.",
  "Fill the cases, bake 12 minutes at 150 °C to set, then chill and finish with Maras salt at the venue.":
    "Rellene las bases, hornee 12 minutos a 150 °C para cuajar, refrigere y termine con sal de Maras en el local.",
  "Bake the cases 3 days ahead and fill the day before. Salt only at service or it dissolves.":
    "Hornee las bases 3 días antes y rellene el día anterior. Sale solo al servir o la sal se disuelve.",
  "Four hours at room temperature, which is how it should be eaten. Chilled, the caramel goes dense.":
    "Cuatro horas a temperatura ambiente, que es como debe comerse. Frío, el caramelo se vuelve denso.",

  // ---- 106 Rhubarb & Aguaymanto Crumble ----
  "Halve the aguaymanto, toss with the caster sugar and leave 20 minutes to draw out the juice.":
    "Parta el aguaymanto por la mitad, mézclelo con el azúcar fina y deje 20 minutos para que suelte su jugo.",
  "Rub the cold butter into the flour, then stir through the oats, demerara and cinnamon until it is loose and rubbly.":
    "Arene la mantequilla fría con la harina, luego integre la avena, el azúcar demerara y la canela hasta que quede suelto y grumoso.",
  "Drain off half the fruit juice and reserve it — an undrained crumble goes to soup under the topping.":
    "Escurra la mitad del jugo de la fruta y resérvelo — un crumble sin escurrir se vuelve sopa bajo la cubierta.",
  "Fill the trays with fruit and cover with a thick, unpressed layer of crumble right to the edges.":
    "Llene las bandejas con fruta y cubra con una capa gruesa y sin presionar de crumble hasta los bordes.",
  "Bake at 180 °C for 35 to 40 minutes until the juice bubbles up dark at the corners.":
    "Hornee a 180 °C por 35 a 40 minutos hasta que el jugo burbujee oscuro en las esquinas.",
  "Reduce the reserved juice to a syrup and serve it alongside rather than pouring it over.":
    "Reduzca el jugo reservado hasta un almíbar y sírvalo aparte en vez de verterlo encima.",
  "Freeze the crumble topping in bags up to a month ahead; assemble and bake on the day.":
    "Congele la cubierta de crumble en bolsas hasta un mes antes; arme y hornee el mismo día.",
  "Two hours in a chafing dish before the topping softens. Rebake 8 minutes at 200 °C to crisp it.":
    "Dos horas en chafing dish antes de que la cubierta se ablande. Vuelva a hornear 8 minutos a 200 °C para recuperar el crocante.",

  // ---- 107 Shortbread Fingers (plain) ----
  "80 fingers": "80 barritas",
  "Beat the butter and sugar only until combined — creaming air into shortbread makes it rise and then crumble.":
    "Bata la mantequilla y el azúcar solo hasta unir — incorporar aire al shortbread lo hace levantar y luego desmoronarse.",
  "Sift the two flours with the salt and work them in by hand until the dough just comes together.":
    "Tamice las dos harinas con la sal e incorpórelas a mano hasta que la masa apenas se una.",
  "Press into lined trays to an even 12 mm, prick all over with a fork and chill for a full hour.":
    "Presione en bandejas forradas a un grosor parejo de 12 mm, pinche toda la superficie con tenedor y refrigere una hora completa.",
  "Bake at 150 °C for 35 to 40 minutes until pale straw — colour on shortbread is a fault, not a finish.":
    "Hornee a 150 °C por 35 a 40 minutos hasta un tono paja claro — el color en el shortbread es un defecto, no un acabado.",
  "Cut into fingers within 5 minutes of leaving the oven, while the slab is still soft enough to score.":
    "Corte en barritas dentro de los 5 minutos de salir del horno, mientras la placa sigue lo bastante blanda para marcarse.",
  "Dust with caster sugar and leave in the tin until stone cold before lifting the pieces out.":
    "Espolvoree azúcar fina y deje en el molde hasta que esté completamente frío antes de sacar las piezas.",
  "Bake up to a week ahead in sealed tins. The flavour is better on day two than on day one.":
    "Hornee hasta una semana antes y guarde en tarros herméticos. El sabor es mejor al segundo día que al primero.",
  "Room temperature for a week if kept dry. This is the most box-friendly product on the sheet.":
    "A temperatura ambiente por una semana si se mantiene seco. Es el producto más apto para caja de toda la hoja.",
  "Butter quality is the whole product here — do not substitute margarine to protect the margin.":
    "Aquí la calidad de la mantequilla es todo el producto — no la sustituya por margarina para proteger el margen.",

  // ---- 108 Oat & Cacao Digestives ----
  "90 biscuits": "90 galletas",
  "Blitz the oatmeal briefly so half stays coarse — this is what gives a digestive its sandy bite.":
    "Procese la avena brevemente para que la mitad quede gruesa — eso es lo que le da a una digestive su mordida arenosa.",
  "Rub the butter through the dry ingredients, then bring the dough together with the milk a little at a time.":
    "Arene la mantequilla con los ingredientes secos y una la masa con la leche de a poco.",
  "Roll to 4 mm between sheets of parchment and cut discs; rest them 20 minutes in the fridge before baking.":
    "Estire a 4 mm entre hojas de papel manteca y corte discos; déjelos reposar 20 minutos en la refrigeradora antes de hornear.",
  "Bake at 180 °C for 16 to 18 minutes until evenly browned and firm at the centre.":
    "Hornee a 180 °C por 16 a 18 minutos hasta que doren parejo y estén firmes al centro.",
  "Cool completely on racks — a warm biscuit will steam and soften the chocolate coating.":
    "Enfríe por completo sobre rejillas — una galleta tibia genera vapor y ablanda la capa de chocolate.",
  "Temper the chocolate, dip each biscuit halfway and set them on parchment to firm up.":
    "Temple el chocolate, bañe cada galleta hasta la mitad y colóquelas sobre papel manteca para que endurezcan.",
  "Bake up to 5 days ahead undipped. Dip within 48 hours of service for the best snap.":
    "Hornee hasta 5 días antes sin bañar. Bañe dentro de las 48 horas previas al servicio para el mejor quiebre.",
  "A week sealed and dry. Undipped they keep longer, so dip only what the event needs.":
    "Una semana selladas y secas. Sin bañar duran más, así que bañe solo lo que el evento necesita.",

  // ---- 109 Tzatziki con Rocoto ----
  "2.4 kg, about 60 servings": "2,4 kg, unas 60 porciones",
  "Hang the yoghurt in muslin for at least 4 hours; unstrained yoghurt turns the dip to liquid by service.":
    "Cuelgue el yogur en una gasa por lo menos 4 horas; el yogur sin colar convierte la salsa en líquido para la hora del servicio.",
  "Grate the cucumber coarsely, salt it, leave 20 minutes and then wring it out hard in a cloth.":
    "Ralle el pepino grueso, sálelo, deje 20 minutos y exprímalo con fuerza en un paño.",
  "Pound the garlic to a paste with a pinch of salt so it disperses instead of ambushing one guest.":
    "Machaque el ajo hasta hacer una pasta con una pizca de sal, para que se reparta en vez de emboscar a un solo invitado.",
  "Deseed the rocoto and mince it finely — the seeds and membrane carry heat far beyond a Greek palate.":
    "Despepite el rocoto y píquelo muy fino — las pepas y la vena llevan un picor muy por encima de un paladar griego.",
  "Fold everything together with the olive oil and lime, then taste and correct the salt last.":
    "Integre todo con el aceite de oliva y el limón, pruebe y corrija la sal al final.",
  "Chill at least 2 hours before service so the garlic and rocoto settle into the yoghurt.":
    "Refrigere al menos 2 horas antes del servicio para que el ajo y el rocoto se asienten en el yogur.",
  "Best made the day before. Beyond 48 hours the cucumber weeps however hard it was wrung.":
    "Mejor hecho el día anterior. Pasadas las 48 horas el pepino suelta agua por más que se haya exprimido.",
  "Two hours out of the fridge on a mezze table. Serve in shallow bowls set over ice.":
    "Dos horas fuera de la refrigeradora en una mesa de mezze. Sirva en boles bajos apoyados sobre hielo.",

  // ---- 110 Dolmades de Acelga y Quinua ----
  "60 dolmades": "60 dolmades",
  "Blanch the chard leaves 20 seconds, refresh in iced water and lay them flat on cloths to dry.":
    "Blanquee las hojas de acelga 20 segundos, refresque en agua con hielo y extiéndalas planas sobre paños para secar.",
  "Cut out the thick central rib of each leaf — leave it in and the parcel will not roll tight.":
    "Retire la nervadura central gruesa de cada hoja — si la deja, el paquetito no enrolla apretado.",
  "Cook the quinoa until just short of done; it will finish steaming inside the parcels.":
    "Cocine la quinua hasta justo antes del punto; termina de cocinarse al vapor dentro de los paquetitos.",
  "Sweat the onion slowly in the oil until sweet, then fold it through the quinoa with the herbs and lemon zest.":
    "Sude la cebolla despacio en el aceite hasta que esté dulce e intégrela a la quinua con las hierbas y la ralladura de limón.",
  "Roll each parcel tight, tucking the sides in, and pack them seam-down in a single close layer.":
    "Enrolle cada paquetito bien apretado metiendo los lados hacia adentro y acomódelos con la unión hacia abajo en una sola capa junta.",
  "Add lemon juice, oil and water to come halfway up, weight with a plate and simmer 40 minutes.":
    "Agregue jugo de limón, aceite y agua hasta la mitad de la altura, ponga un plato como peso y cocine a fuego lento 40 minutos.",
  "Roll and cook 2 days ahead; they improve as the lemon works through the quinoa.":
    "Enrolle y cocine 2 días antes; mejoran a medida que el limón penetra la quinua.",
  "All day at room temperature — one of the few canapes that genuinely does not need a fridge.":
    "Todo el día a temperatura ambiente — uno de los pocos bocaditos que de verdad no necesita refrigeradora.",
  "Rolling is the cost. Budget 90 minutes of labour per 100 parcels and two pairs of hands.":
    "El costo está en enrollar. Calcule 90 minutos de trabajo por cada 100 paquetitos y dos pares de manos.",

  // ---- 111 Melitzanosalata, Aji Panca ----
  "2 kg, about 60 servings": "2 kg, unas 60 porciones",
  "Char the aubergines whole directly over a flame until the skins blister black and the flesh collapses.":
    "Queme las berenjenas enteras directamente sobre la llama hasta que la piel ampolle negra y la pulpa se deshaga.",
  "Rest them in a covered bowl 15 minutes; the trapped steam lifts the skin away cleanly.":
    "Déjelas reposar en un bol tapado 15 minutos; el vapor atrapado despega la piel limpiamente.",
  "Scrape out the flesh and drain it in a colander for 20 minutes — the bitter liquor is what makes a watery dip.":
    "Raspe la pulpa y escúrrala en un colador por 20 minutos — ese líquido amargo es lo que vuelve aguada la salsa.",
  "Chop rather than blend, so the texture stays like a dip and not like a puree.":
    "Pique en vez de licuar, para que la textura siga siendo de salsa y no de puré.",
  "Beat in the aji panca, garlic, lemon and oil, adding the oil slowly so the paste takes it up.":
    "Integre el ají panca, el ajo, el limón y el aceite, agregando el aceite despacio para que la pasta lo absorba.",
  "Finish with parsley and salt, and let it sit an hour before tasting again.":
    "Termine con perejil y sal, y déjelo reposar una hora antes de volver a probar.",
  "Char and drain the aubergine a day ahead. Dress and season on the day of service.":
    "Queme y escurra la berenjena un día antes. Adere y sazone el día del servicio.",
  "Three hours at room temperature and it is better warm-ish than fridge-cold.":
    "Tres horas a temperatura ambiente, y es mejor tibia que helada de refrigeradora.",

  // ---- 112 Horiatiki, Tacna & Paria ----
  "Cut the tomato into thick wedges rather than slices so it holds its juice on the table.":
    "Corte el tomate en gajos gruesos en lugar de rodajas para que retenga su jugo en la mesa.",
  "Peel the cucumber in stripes and cut it into half-moons a good centimetre thick.":
    "Pele el pepino a rayas y córtelo en medias lunas de un buen centímetro de grosor.",
  "Slice the onion thin and rinse it under cold water for a minute to take the raw edge off.":
    "Corte la cebolla fina y enjuáguela bajo agua fría por un minuto para quitarle el filo crudo.",
  "Dress the vegetables with oil, oregano and salt no more than 20 minutes before service.":
    "Adere las verduras con aceite, orégano y sal no más de 20 minutos antes del servicio.",
  "Lay slabs of queso paria on top whole — crumbling it Greek-feta style loses the texture you paid for.":
    "Ponga encima lonjas enteras de queso paria — desmenuzarlo al estilo del feta griego pierde la textura por la que pagó.",
  "Scatter the olives over and give it a final grind of oregano between the palms as it goes out.":
    "Esparza las aceitunas y frote un último orégano entre las palmas justo cuando sale.",
  "Cut the vegetables the morning of and keep them separate and cold. Dress only at the venue.":
    "Corte las verduras la misma mañana y manténgalas separadas y frías. Adere solo en el local.",
  "One hour dressed. Beyond that the salt draws water and the bowl floods.":
    "Una hora una vez aderezada. Más allá de eso la sal saca el agua y el bol se inunda.",

  // ---- 113 Avgolemono con Choclo ----
  "Simmer the chickens with the onion for 50 minutes, skimming, then lift them out and strip the meat.":
    "Cocine los pollos a fuego lento con la cebolla por 50 minutos, espumando, luego retírelos y saque la carne.",
  "Strain the stock and return it to a bare simmer; a rolling boil at this point will scramble the egg later.":
    "Cuele el caldo y devuélvalo a un hervor apenas perceptible; un hervor fuerte en este punto cuajará el huevo más adelante.",
  "Cook the choclo kernels separately in salted water — Peruvian choclo is starchier than orzo and clouds the broth.":
    "Cocine los granos de choclo aparte en agua con sal — el choclo peruano tiene más almidón que el orzo y enturbia el caldo.",
  "Whisk the eggs with the lemon juice until frothy, then temper with ladle after ladle of hot stock.":
    "Bata los huevos con el jugo de limón hasta que espumen y atempere agregando cucharón tras cucharón de caldo caliente.",
  "Pour the tempered mixture back into the pot off the heat and stir until it thickens to a light cream.":
    "Vierta la mezcla atemperada de vuelta en la olla fuera del fuego y revuelva hasta que espese como una crema ligera.",
  "Add the chicken, choclo and dill, and hold the pot below 75 °C from that point until it is served.":
    "Agregue el pollo, el choclo y el eneldo, y mantenga la olla por debajo de 75 °C desde ese momento hasta servir.",
  "Make the stock and strip the meat the day before. The avgolemono itself is a last-hour job.":
    "Haga el caldo y deshuese el pollo el día anterior. El avgolemono en sí es trabajo de la última hora.",
  "One hour at most, and it must never boil. This is the least travel-friendly dish on the sheet.":
    "Una hora como máximo, y nunca debe hervir. Es el plato menos apto para viajar de toda la hoja.",
  "Above 40 portions, split into two pots — a single large pot cannot be tempered evenly.":
    "Por encima de 40 porciones, divida en dos ollas — una sola olla grande no se puede atemperar de forma pareja.",

  // ---- 114 Gyros de Cerdo ----
  "40 portions": "40 porciones",
  "Marinate the sliced pork overnight with oregano, vinegar, garlic and oil so the acid opens the meat up.":
    "Macere el cerdo en láminas toda la noche con orégano, vinagre, ajo y aceite para que la acidez abra la carne.",
  "Stack the slices on the spit alternating fat and lean, and cap the top with a block of fat to baste it.":
    "Apile las láminas en el asador alternando grasa y magro, y corone con un bloque de grasa para que lo bañe.",
  "Bring the cone up to temperature slowly for the first 40 minutes before turning the outer burners up.":
    "Suba el cono de temperatura lentamente durante los primeros 40 minutos antes de subir los quemadores exteriores.",
  "Cut the salsa criolla fresh on site — onion sliced more than an hour ahead goes limp and sulphurous.":
    "Corte la salsa criolla fresca en el local — la cebolla cortada con más de una hora de anticipación se aguada y toma olor a azufre.",
  "Carve only what the queue needs, in thin sheets down the face of the cone, and let the next layer colour.":
    "Corte solo lo que la cola necesita, en láminas finas por la cara del cono, y deje que la siguiente capa tome color.",
  "Warm the flatbreads 20 seconds a side on the plancha and build tzatziki first, then meat, then criolla.":
    "Caliente los panes planos 20 segundos por lado en la plancha y arme primero el tzatziki, luego la carne y encima la criolla.",
  "Marinate and stack the spit the day before. Everything after that happens at the venue.":
    "Macere y arme el asador el día anterior. Todo lo demás ocurre en el local.",
  "Carved to order only. Carved meat left in a tray goes grey and dry within 20 minutes.":
    "Solo cortado al momento. La carne cortada que queda en una bandeja se pone gris y seca en 20 minutos.",
  "One carver serves about 60 guests an hour. Above that, a second cone beats a faster carver.":
    "Un cortador atiende a unos 60 invitados por hora. Por encima de eso, un segundo cono rinde más que un cortador más rápido.",

  // ---- 115 Saganaki de Paria ----
  "Cut the paria into even slabs and pat every face dry; wet cheese steams instead of crusting.":
    "Corte el queso paria en lonjas parejas y seque todas sus caras; el queso húmedo se cocina al vapor en vez de formar costra.",
  "Dust in flour and shake the excess off hard — loose flour burns in the pan and tastes of it.":
    "Enharine y sacuda bien el exceso — la harina suelta se quema en la sartén y se nota en el sabor.",
  "Heat the pan until the oil shimmers, then lay the slabs down and leave them alone for 90 seconds.":
    "Caliente la sartén hasta que el aceite tiemble, coloque las lonjas y déjelas quietas 90 segundos.",
  "Turn once, add a measured shot of pisco to the pan and stand back as you tip it to the flame.":
    "Voltee una vez, agregue una medida justa de pisco a la sartén y hágase atrás al inclinarla hacia la llama.",
  "Squeeze lime over the moment the flame dies, while the surface is still bubbling.":
    "Exprima limón encima en el momento en que se apaga la llama, mientras la superficie todavía burbujea.",
  "Serve straight from the pan; paria seizes into rubber within two minutes of leaving the heat.":
    "Sirva directo de la sartén; el paria se vuelve goma a los dos minutos de salir del fuego.",
  "Slice and portion the cheese the morning of. Nothing else can be prepared in advance.":
    "Corte y porcione el queso la misma mañana. Nada más se puede adelantar.",
  "Does not hold — plate to guest immediately. Fire this in rounds as the queue forms.":
    "No aguanta — del plato al invitado de inmediato. Prepárelo por tandas a medida que se forma la cola.",
  "Two pans and one cook manage about 80 pieces an hour, which is the realistic ceiling.":
    "Dos sartenes y un cocinero manejan unas 80 piezas por hora, que es el techo realista.",

  // ---- 116 Baklava de Pecana y Algarrobina ----
  "Clarify the butter first — the milk solids in whole butter scorch between the filo layers.":
    "Clarifique primero la mantequilla — los sólidos lácteos de la mantequilla entera se queman entre las capas de filo.",
  "Lay eight buttered sheets, spread a third of the pecans, and repeat twice, finishing with eight sheets on top.":
    "Coloque ocho láminas enmantequilladas, esparza un tercio de las pecanas y repita dos veces, terminando con ocho láminas encima.",
  "Score all the way through to the base before baking; cutting after baking shatters the layers.":
    "Marque hasta el fondo antes de hornear; cortar después del horneado destroza las capas.",
  "Bake at 165 °C for 45 minutes until deep gold throughout, not just at the surface.":
    "Hornee a 165 °C por 45 minutos hasta que esté dorado oscuro en todo su espesor, no solo en la superficie.",
  "Boil the algarrobina, sugar, lemon and cinnamon to a syrup and cool it completely while the tray bakes.":
    "Hierva la algarrobina, el azúcar, el limón y la canela hasta hacer un almíbar y enfríelo por completo mientras la bandeja hornea.",
  "Pour cold syrup over hot pastry — hot on hot gives you a sponge, and cold on cold never soaks in.":
    "Vierta almíbar frío sobre masa caliente — caliente sobre caliente da una esponja, y frío sobre frío nunca penetra.",
  "Bake and syrup 3 days ahead. It needs at least 8 hours for the syrup to reach the base.":
    "Hornee y almibare 3 días antes. Necesita al menos 8 horas para que el almíbar llegue a la base.",
  "Room temperature for days, uncovered. Never refrigerate it — the filo goes leathery.":
    "A temperatura ambiente por días, destapada. Nunca la refrigere — la filo se vuelve correosa.",
  "Filo is the cost variable and it is imported. Price the sheet before quoting this dish.":
    "La filo es la variable de costo y es importada. Cotice la lámina antes de cotizar este plato.",

  // ---- 117 Rocoto & Betarraga Pickles ----
  "6 kg, about 60 servings": "6 kg, unas 60 porciones",
  "Boil the beetroot whole and unpeeled until a knife slides in, then peel them under cold running water.":
    "Hierva la betarraga entera y con cáscara hasta que el cuchillo entre solo, y pélela bajo agua fría corriente.",
  "Slice into coins about 4 mm thick — thinner and they go slack, thicker and they never take the brine.":
    "Corte en rodajas de unos 4 mm — más delgadas se aguadan, más gruesas nunca toman la salmuera.",
  "Bring the vinegar, water, sugar, salt and peppercorns to a boil and hold it there two minutes.":
    "Lleve el vinagre, el agua, el azúcar, la sal y los granos de pimienta a hervor y manténgalo dos minutos.",
  "Pack the jars with alternating beetroot and rocoto rings so the heat distributes through the jar.":
    "Llene los frascos alternando betarraga y aros de rocoto para que el picante se reparta por todo el frasco.",
  "Pour the boiling brine over to cover completely and seal while everything is still hot.":
    "Vierta la salmuera hirviendo hasta cubrir por completo y selle mientras todo sigue caliente.",
  "Leave a full week before opening; before that the rocoto heat sits on top rather than through it.":
    "Deje una semana completa antes de abrir; antes de eso el picor del rocoto queda encima en vez de repartido.",
  "Make weeks ahead — this is a store-cupboard item, not an event-week job.":
    "Hágalos con semanas de anticipación — es un producto de despensa, no trabajo de la semana del evento.",
  "Sealed jars keep for months in a cool store. Opened and refrigerated, three weeks.":
    "Los frascos sellados duran meses en un almacén fresco. Abiertos y refrigerados, tres semanas.",
  "Make in one large batch across events. The margin here comes from never making it small.":
    "Haga una sola tanda grande para varios eventos. Aquí el margen viene de no hacerlo nunca en poca cantidad.",

  // ---- 118 Beetroot-Cured Trout ----
  "24 portions": "24 porciones",
  "Pin-bone the fillets and run a finger along the flesh both ways to catch what the tweezers missed.":
    "Retire las espinas de los filetes y pase un dedo por la carne en ambos sentidos para encontrar las que se le escaparon a la pinza.",
  "Mix the salt, sugar, grated beetroot, pepper and chopped dill into a wet, magenta cure.":
    "Mezcle la sal, el azúcar, la betarraga rallada, la pimienta y el eneldo picado hasta una curación húmeda y magenta.",
  "Pack the cure over the flesh side, sandwich the fillets, wrap tight and weight them in a tray.":
    "Cubra el lado de la carne con la curación, junte los filetes, envuelva apretado y póngales peso en una bandeja.",
  "Cure 36 hours in the fridge, turning and draining the liquor twice a day so it does not sit in brine.":
    "Cure 36 horas en la refrigeradora, volteando y botando el líquido dos veces al día para que no se quede en salmuera.",
  "Scrape the cure off, rinse briefly with the pisco rather than water, and pat completely dry.":
    "Raspe la curación, enjuague brevemente con el pisco en vez de agua y seque por completo.",
  "Slice on the bias down to the skin, thin enough to see the board through, and fan onto the plate.":
    "Corte en diagonal hasta la piel, tan fino que se vea la tabla a través, y despliegue en abanico sobre el plato.",
  "Start the cure 2 days before the event. Sliced fish is best cut on the morning of service.":
    "Empiece la curación 2 días antes del evento. El pescado se corta mejor la misma mañana del servicio.",
  "Whole and wrapped, a week refrigerated. Once sliced, two hours on ice and no longer.":
    "Entero y envuelto, una semana refrigerado. Una vez cortado, dos horas sobre hielo y ni un minuto más.",

  // ---- 119 Kottbullar, Aguaymanto Cream ----
  "Soak the breadcrumbs in the milk for 10 minutes — this panade is what keeps the balls tender at scale.":
    "Remoje el pan molido en la leche por 10 minutos — esa panada es lo que mantiene tiernas las albóndigas a gran escala.",
  "Mix the meat, panade, grated onion, allspice and plenty of salt, then fry a teaspoon to check the seasoning.":
    "Mezcle la carne, la panada, la cebolla rallada, la pimienta de Jamaica y bastante sal, y fría una cucharadita para probar la sazón.",
  "Roll to 25 g each and chill the trays 30 minutes so they hold their shape when they hit the pan.":
    "Bolee de 25 g cada una y refrigere las bandejas 30 minutos para que mantengan la forma al llegar a la sartén.",
  "Brown in batches in a wide pan, never crowding, and set them aside before they cook through.":
    "Dore por tandas en una sartén amplia, sin amontonar nunca, y retírelas antes de que se cocinen del todo.",
  "Cook the aguaymanto with the sugar to a loose compote, then build the cream sauce in the browning pan.":
    "Cocine el aguaymanto con el azúcar hasta una compota ligera y arme la salsa de crema en la misma sartén del dorado.",
  "Return the meatballs to the sauce and finish them through gently, serving the compote alongside.":
    "Devuelva las albóndigas a la salsa y termine de cocinarlas suavemente, sirviendo la compota al lado.",
  "Roll and brown the day before; finish in the sauce on site. The compote keeps a fortnight.":
    "Bolee y dore el día anterior; termine en la salsa en el local. La compota dura quince días.",
  "Two hours in a chafing dish and it improves in the first hour as the sauce reduces slightly.":
    "Dos horas en chafing dish, y mejora en la primera hora a medida que la salsa reduce un poco.",

  // ---- 120 Rye & Kiwicha Crispbread ----
  "80 crispbreads": "80 crispbreads",
  "Toast the kiwicha in a dry pan until it pops and smells nutty, then let it cool before mixing.":
    "Tueste la kiwicha en sartén seca hasta que reviente y huela a nuez, y déjela enfriar antes de mezclar.",
  "Mix everything to a stiff dough and let it prove just 45 minutes — a long prove makes it bready, not crisp.":
    "Mezcle todo hasta una masa dura y déjela leudar solo 45 minutos — un leudado largo la vuelve pan, no galleta.",
  "Roll each piece as thin as the pin will take it, straight onto the parchment it will bake on.":
    "Estire cada pieza tan fina como el rodillo lo permita, directamente sobre el papel manteca en el que se horneará.",
  "Dock the sheets all over with a fork or a spiked roller so they stay flat instead of blistering.":
    "Pinche las láminas por todos lados con tenedor o rodillo de púas para que queden planas en vez de ampollarse.",
  "Bake at 200 °C for 12 minutes, then drop to 140 °C for another 12 to dry them right through.":
    "Hornee a 200 °C por 12 minutos y baje a 140 °C otros 12 para secarlas de lado a lado.",
  "Cool on racks and snap into irregular pieces — a uniform crispbread looks industrial.":
    "Enfríe sobre rejillas y quiebre en trozos irregulares — un crispbread uniforme se ve industrial.",
  "Bake up to a week ahead. Refresh 5 minutes at 150 °C if Lima humidity has softened them.":
    "Hornee hasta una semana antes. Refresque 5 minutos a 150 °C si la humedad de Lima los ha ablandado.",
  "Sealed and dry, a week. Left open on a buffet table they go limp within about two hours.":
    "Sellados y secos, una semana. Abiertos en una mesa de buffet se aguadan en unas dos horas.",

  // ---- 121 Dill & Papa Nativa Salad ----
  "Boil the potatoes whole in heavily salted water so they season through rather than only on the cut face.":
    "Hierva las papas enteras en agua bien salada para que se sazonen por dentro y no solo en la cara cortada.",
  "Drain and, while they are still steaming, split them and douse them with the vinegar.":
    "Escurra y, mientras aún humean, pártalas y báñelas con el vinagre.",
  "Let them cool to just-warm before the cream goes anywhere near them, or the dressing will split.":
    "Déjelas enfriar hasta apenas tibias antes de acercarles la crema, o el aderezo se corta.",
  "Fold through the soured cream, mustard, shallot and most of the dill with a spatula, not a spoon.":
    "Integre la crema agria, la mostaza, el chalote y casi todo el eneldo con espátula, no con cuchara.",
  "Taste for salt once cold — cold food needs noticeably more seasoning than warm food.":
    "Pruebe la sal en frío — la comida fría necesita bastante más sazón que la tibia.",
  "Finish with the reserved dill at the venue so the green still reads on the plate.":
    "Termine con el eneldo reservado en el local para que el verde se siga leyendo en el plato.",
  "Boil and dress the day before; the potato takes up the dressing overnight and improves.":
    "Hierva y adere el día anterior; la papa absorbe el aderezo durante la noche y mejora.",
  "Three hours out of the fridge. It is a cold dish and travels better than almost anything else here.":
    "Tres horas fuera de la refrigeradora. Es un plato frío y viaja mejor que casi cualquier otra cosa de esta carta.",

  // ---- 122 Aguaymanto Preserve ----
  "8 jars, about 3 kg": "8 frascos, unos 3 kg",
  "Halve about a third of the fruit and leave the rest whole so the finished preserve has texture.":
    "Parta por la mitad alrededor de un tercio de la fruta y deje el resto entera para que la conserva final tenga textura.",
  "Tie the lemon pips in muslin and drop them in — aguaymanto is low in pectin and needs the help.":
    "Ate las pepas de limón en una gasa y échelas dentro — el aguaymanto tiene poca pectina y necesita la ayuda.",
  "Macerate the fruit with the sugar and lemon juice for an hour before any heat goes under the pan.":
    "Macere la fruta con el azúcar y el jugo de limón por una hora antes de poner nada de fuego bajo la olla.",
  "Bring slowly to a boil, skimming the scum off, then hold at a hard boil until it reaches 104 °C.":
    "Lleve lentamente a hervor, espumando, y mantenga a hervor fuerte hasta que llegue a 104 °C.",
  "Test on a chilled saucer: the surface should wrinkle when pushed rather than run back together.":
    "Pruebe en un platillo frío: la superficie debe arrugarse al empujarla en vez de volver a juntarse.",
  "Jar hot into sterilised jars, seal immediately and leave upright to cool undisturbed.":
    "Envase caliente en frascos esterilizados, selle de inmediato y deje enfriar de pie sin moverlos.",
  "Make in season and in bulk. Sealed jars are shelf-stable for a year in a dark store.":
    "Hágala en temporada y en volumen. Los frascos sellados se conservan un año en un almacén oscuro.",
  "Unopened, a year. Once opened, refrigerate and use within a month.":
    "Sin abrir, un año. Una vez abierto, refrigere y consuma dentro de un mes.",
  "Do not boil more than 6 kg of fruit in one pan — the centre never reaches setting point.":
    "No hierva más de 6 kg de fruta en una sola olla — el centro nunca alcanza el punto de cuajado.",

  // ---- 123 Cured Duck, Muna & Pepper ----
  "80 slices": "80 láminas",
  "Score the duck skin in a fine diamond without cutting into the flesh beneath it.":
    "Marque la piel del pato en rombos finos sin cortar la carne que hay debajo.",
  "Crush the muna and peppercorns and mix them into the salt and sugar cure.":
    "Machaque la muña y los granos de pimienta e intégrelos a la curación de sal y azúcar.",
  "Bury the breasts in the cure for 24 hours, then rinse them thoroughly and pat them bone dry.":
    "Entierre las pechugas en la curación por 24 horas, enjuáguelas a fondo y séquelas por completo.",
  "Hang them in muslin in the coldest part of the fridge for 6 days until firm to the thumb.":
    "Cuélguelas en gasa en la parte más fría de la refrigeradora por 6 días, hasta que estén firmes al pulgar.",
  "Render the skin down in a cold pan brought slowly up to heat, purely for the crackling to crumble over.":
    "Derrita la piel en una sartén fría que suba de temperatura lentamente, solo para desmenuzar el crocante encima.",
  "Slice paper-thin against the grain and lay each slice on a crispbread only as the tray goes out.":
    "Corte finísimo a contrafibra y coloque cada lámina sobre un crispbread recién cuando la bandeja salga.",
  "Start the cure a week before the event. The hanging time is not negotiable or compressible.":
    "Empiece la curación una semana antes del evento. El tiempo de colgado no es negociable ni comprimible.",
  "Sliced, one hour before the fat softens. Build the trays in rounds rather than all at once.":
    "Cortado, una hora antes de que la grasa se ablande. Arme las bandejas por tandas y no todas de golpe.",

  // ---- 124 Txistorra & Papa Nativa Pintxo ----
  "60 pintxos": "60 pintxos",
  "Boil the potatoes whole in salted water until just done, then cool and slice into 1 cm coins.":
    "Hierva las papas enteras en agua con sal hasta el punto justo, enfríe y corte en rodajas de 1 cm.",
  "Fry the potato coins in olive oil on both sides until the edges catch and go crisp.":
    "Fría las rodajas de papa en aceite de oliva por ambos lados hasta que los bordes se doren y queden crocantes.",
  "Cut the sausage into 3 cm lengths and colour them hard in the same pan so the fat renders into it.":
    "Corte la salchicha en trozos de 3 cm y dórelos con fuerza en la misma sartén para que suelten su grasa ahí.",
  "Spoon a little of the paprika-red pan fat back over the potato coins while they are still warm.":
    "Reparta un poco de esa grasa roja de páprika sobre las rodajas de papa mientras siguen tibias.",
  "Skewer one sausage on one coin, pushing the skewer down through both so the pintxo stands up.":
    "Ensarte una salchicha sobre una rodaja, atravesando ambas con el palito para que el pintxo se sostenga de pie.",
  "Season at the last moment and serve at room temperature, which is how a pintxo is meant to be eaten.":
    "Sazone al último momento y sirva a temperatura ambiente, que es como se debe comer un pintxo.",
  "Boil the potatoes the day before. Fry and assemble on the morning of the event.":
    "Hierva las papas el día anterior. Fría y arme la mañana del evento.",
  "Four hours at room temperature — genuinely designed to sit on a bar rather than be plated hot.":
    "Cuatro horas a temperatura ambiente — está pensado de verdad para estar sobre una barra y no para emplatarse caliente.",

  // ---- 125 Croquetas de Corvina Salada ----
  "80 croquetas": "80 croquetas",
  "Soak the salt-cured corvina in three changes of cold water over 12 hours, tasting a flake before you stop.":
    "Remoje la corvina salada en tres cambios de agua fría a lo largo de 12 horas, probando una lámina antes de parar.",
  "Poach it gently in the milk with the studded onion, then lift it out, flake it and keep the milk.":
    "Escálfela suavemente en la leche con la cebolla claveteada, retírela, desmenúcela y guarde la leche.",
  "Make a very thick bechamel with the butter, flour and infused milk, cooking the flour out for a full 5 minutes.":
    "Haga una bechamel muy espesa con la mantequilla, la harina y la leche infusionada, cocinando la harina 5 minutos completos.",
  "Fold the fish through, spread the mix in a shallow tray and chill it hard for at least 4 hours.":
    "Integre el pescado, extienda la mezcla en una bandeja baja y refrigere bien por lo menos 4 horas.",
  "Shape into barrels, then flour, egg and crumb them twice — a single coat splits in the fryer.":
    "Forme barriles, luego harina, huevo y apane dos veces — una sola capa se abre en la freidora.",
  "Fry at 180 °C for 3 minutes until deep gold, and drain them standing up rather than lying down.":
    "Fría a 180 °C por 3 minutos hasta dorado oscuro, y escúrralas de pie en vez de acostadas.",
  "Shape and crumb 2 days ahead, or freeze crumbed and fry straight from frozen at 170 °C.":
    "Forme y apane 2 días antes, o congele apanadas y fría directo desde congelado a 170 °C.",
  "Twenty minutes from the fryer. Fry in rounds through service rather than all at once.":
    "Veinte minutos desde la freidora. Fría por tandas a lo largo del servicio y no todas de golpe.",

  // ---- 126 Piperrada con Aji Amarillo ----
  "Slice the peppers and onions the same width so they finish cooking at the same moment.":
    "Corte los pimientos y las cebollas del mismo ancho para que terminen de cocinarse al mismo tiempo.",
  "Sweat them in the oil over a low heat for a full 40 minutes, covered, without letting them colour.":
    "Súdelos en el aceite a fuego bajo por 40 minutos completos, tapados, sin dejar que tomen color.",
  "Add the garlic only in the last 10 minutes of the sweat or it turns bitter under that much time.":
    "Agregue el ajo solo en los últimos 10 minutos del sudado o amarga con tanto tiempo.",
  "Stir in the aji amarillo and cook it out for 5 minutes so the raw paste flavour disappears.":
    "Incorpore el ají amarillo y cocínelo 5 minutos para que desaparezca el sabor a pasta cruda.",
  "Add the chopped tomato and cook uncovered until the mixture is glossy and no water pools at the edge.":
    "Agregue el tomate picado y cocine destapado hasta que la mezcla brille y no se acumule agua en el borde.",
  "Season and let it sit an hour before service; piperrada is better at the second reheating than the first.":
    "Sazone y déjela reposar una hora antes del servicio; la piperrada está mejor en el segundo recalentado que en el primero.",
  "Make 2 days ahead. It genuinely improves and it frees the hob on the day of the event.":
    "Hágala 2 días antes. De verdad mejora y libera la hornilla el día del evento.",
  "Three hours in a chafing dish without deteriorating. Also serves well at room temperature.":
    "Tres horas en chafing dish sin deteriorarse. También funciona bien a temperatura ambiente.",

  // ---- 127 Marmitako de Bonito ----
  "Break the potatoes rather than cutting them through — the torn face releases starch and thickens the stew.":
    "Chasque las papas en vez de cortarlas de lado a lado — la cara rota suelta almidón y espesa el guiso.",
  "Sweat the onion and pepper slowly in oil for 25 minutes until they are sweet and completely soft.":
    "Sude la cebolla y el pimiento despacio en aceite por 25 minutos hasta que estén dulces y completamente blandos.",
  "Add the pepper paste, cook it out, then add the potatoes and turn them in the fat to coat.":
    "Agregue la pasta de pimiento, cocínela, luego sume las papas y voltéelas en la grasa para cubrirlas.",
  "Pour in stock barely to cover and simmer 25 minutes until the potatoes are done and the broth has body.":
    "Vierta caldo apenas hasta cubrir y cocine a fuego lento 25 minutos hasta que las papas estén listas y el caldo tenga cuerpo.",
  "Take the pot off the heat entirely, then add the bonito and put the lid on.":
    "Retire la olla del fuego por completo, agregue el bonito y tape.",
  "Leave it 8 minutes — the residual heat cooks the fish through, and any direct heat makes it dry and chalky.":
    "Déjelo 8 minutos — el calor residual cocina el pescado, y cualquier fuego directo lo deja seco y harinoso.",
  "Make the potato base the day before. The fish goes in only in the last ten minutes, on site.":
    "Haga la base de papa el día anterior. El pescado entra solo en los últimos diez minutos, en el local.",
  "Ninety minutes held gently. Beyond that the bonito tightens and the point of the dish is lost.":
    "Noventa minutos mantenido con suavidad. Más allá de eso el bonito se endurece y se pierde el sentido del plato.",

  // ---- 128 Txipirones, Aji Limo ----
  "30 portions": "30 porciones",
  "Clean the squid, keep the tentacles whole and score the bodies lightly on the inside face.":
    "Limpie los calamares, deje los tentáculos enteros y marque ligeramente los cuerpos por la cara interior.",
  "Dry every piece on cloths and keep them dry on ice — wet squid steams on the plancha and never colours.":
    "Seque cada pieza sobre paños y manténgalas secas sobre hielo — el calamar húmedo se cocina al vapor en la plancha y nunca dora.",
  "Get the plancha genuinely hot, well past the point where oil shimmers, before anything touches it.":
    "Ponga la plancha realmente caliente, bastante más allá del punto en que el aceite tiembla, antes de que algo la toque.",
  "Lay the squid in a single layer and leave it 45 seconds, then turn and give it 45 seconds more.":
    "Coloque el calamar en una sola capa y déjelo 45 segundos, luego voltee y dele 45 segundos más.",
  "Throw the garlic, aji limo and parsley on in the last 15 seconds so they toast without burning.":
    "Eche el ajo, el ají limo y el perejil en los últimos 15 segundos para que se tuesten sin quemarse.",
  "Lime and flaked salt straight onto the plate, and away — past 2 minutes total this is rubber.":
    "Limón y sal en escamas directo al plato, y afuera — pasados los 2 minutos en total esto es goma.",
  "Clean and portion the squid the morning of. The cooking cannot be brought forward at all.":
    "Limpie y porcione el calamar la misma mañana. La cocción no se puede adelantar en absoluto.",
  "Serve within a minute of leaving the plancha. Cook to order in small batches only.":
    "Sirva dentro del minuto de salir de la plancha. Cocine al momento y solo en tandas chicas.",
  "A 1 m plancha does about 60 portions an hour. More guests means a second plancha, not fuller pans.":
    "Una plancha de 1 m hace unas 60 porciones por hora. Más invitados significa una segunda plancha, no cargarla más.",
};
