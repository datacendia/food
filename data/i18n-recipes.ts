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
    "Arme dentro de 30 minutos. Vegetariano, y de los pocos canapés de la carta que lo son."
};
