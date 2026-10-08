import { HazardItem, Language, PPEBodyZone } from '../types/prl';

export const UI_TEXT = {
  ca: {
    unitBadge: 'UT1 FOL',
    unitTitle: 'La Prevenció de Riscos Laborals',
    unitSubtitle: 'Conceptes Bàsics, Mesures, EPIs i Manteniment Naval',
    slideLabel: 'Diapositiva:',
    solutionsBtn: 'Solucions',
    solutionsShowAll: 'Mostrar totes',
    solutionsHideAll: 'Amagar totes',
    downloadPdf: 'Descarregar PDF',
    fullscreen: 'Pantalla completa',
    prev: 'Anterior',
    next: 'Següent',
    keyboardHint: 'Utilitza [←] i [→] del teclat',
    showSolution: 'Mostrar / Amagar Solució',
    solutionTitle: 'Solució / Resposta Didàctica',
    // 7 errors game texts
    gameTitle: 'Estació Pràctica: Els 7 Errors en Manteniment d\'Embarcacions',
    gameSubtitle: 'Averigua quins EPIs i mesures de protecció col·lectiva falten a l\'astiller naval',
    gameInstructions: 'Fes clic sobre les zones de risc a l\'escena o a la llista per identificar els errors. En detectar-los, l\'element protector s\'equiparà automàticament!',
    virtualOperatorName: 'Toni l\'Oficial de Seguretat Naval',
    virtualOperatorRole: 'Tècnic Superior en PRL - Varador del Port',
    revealAllBtn: 'Equipar i Revelar Totes les Mesures',
    resetGameBtn: 'Reiniciar el Joc',
    errorsFound: 'Errors identificats:',
    allCompletedTitle: 'Felicitats! Varador 100% Segur!',
    allCompletedDesc: 'Has identificat correctament els 7 riscos laborals. Tots els operaris estan protegits amb els seus EPIs reglamentaris i les mesures col·lectives funcionen a ple rendiment.',
    filterAll: 'Tots els riscos (7)',
    filterEpi: 'EPIs individuals (3)',
    filterCollective: 'Proteccions col·lectives (4)',
    clickHotspotPrompt: 'Fes clic a qualsevol zona amb advertència ⚠️ per inspeccionar-la',
    itemEquippedNotice: 'Element protector equipat amb èxit a l\'escenari!',
  },
  es: {
    unitBadge: 'UT1 FOL',
    unitTitle: 'La Prevención de Riesgos Laborales',
    unitSubtitle: 'Conceptos Básicos, Medidas, EPIs y Mantenimiento Naval',
    slideLabel: 'Diapositiva:',
    solutionsBtn: 'Soluciones',
    solutionsShowAll: 'Mostrar todas',
    solutionsHideAll: 'Ocultar todas',
    downloadPdf: 'Descargar PDF',
    fullscreen: 'Pantalla completa',
    prev: 'Anterior',
    next: 'Siguiente',
    keyboardHint: 'Utiliza [←] y [→] del teclado',
    showSolution: 'Mostrar / Ocultar Solución',
    solutionTitle: 'Solución / Respuesta Didáctica',
    // 7 errors game texts
    gameTitle: 'Estación Práctica: Los 7 Errores en Mantenimiento de Embarcaciones',
    gameSubtitle: 'Averigua qué EPIs y medidas de protección colectiva faltan en el astillero naval',
    gameInstructions: '¡Haz clic sobre las zonas de riesgo en la escena o en la lista para identificar los errores. Al detectarlos, el elemento protector se equipará automáticamente!',
    virtualOperatorName: 'Toni el Oficial de Seguridad Naval',
    virtualOperatorRole: 'Técnico Superior en PRL - Varadero del Puerto',
    revealAllBtn: 'Equipar y Revelar Todas las Medidas',
    resetGameBtn: 'Reiniciar el Juego',
    errorsFound: 'Errores identificados:',
    allCompletedTitle: '¡Felicidades! ¡Varadero 100% Seguro!',
    allCompletedDesc: 'Has identificado correctamente los 7 riesgos laborales. Todos los operarios están protegidos con sus EPIs reglamentarios y las medidas colectivas funcionan a pleno rendimiento.',
    filterAll: 'Todos los riesgos (7)',
    filterEpi: 'EPIs individuales (3)',
    filterCollective: 'Protecciones colectivas (4)',
    clickHotspotPrompt: 'Haz clic en cualquier zona con advertencia ⚠️ para inspeccionarla',
    itemEquippedNotice: '¡Elemento protector equipado con éxito en el escenario!',
  }
};

export const INITIAL_HAZARDS: HazardItem[] = [
  {
    id: 'scaffold_guardrail',
    number: 1,
    title: {
      ca: 'Bastida de pintura sense baranes perimetrals',
      es: 'Andamio de pintura sin barandillas perimetrales'
    },
    category: 'COLLECTIVA',
    categoryLabel: {
      ca: 'Protecció Col·lectiva',
      es: 'Protección Colectiva'
    },
    zoneName: {
      ca: 'Bastida lateral del buc (Obra viva)',
      es: 'Andamio lateral del casco (Obra viva)'
    },
    riskDescription: {
      ca: 'L\'operari està pintant el casc de l\'embarcació a més de 2,5 metres d\'alçada sobre una bastida sense baranes, barra intermèdia ni rodapé.',
      es: 'El operario está pintando el casco de la embarcación a más de 2,5 metros de altura sobre un andamio sin barandillas, barra intermedia ni rodapié.'
    },
    solutionMissing: {
      ca: 'Falta: Sistema complet de baranes reglamentàries (alçada mínima 90 cm amb barra intermèdia i rodapé de 15 cm) i xarxa perimetral.',
      es: 'Falta: Sistema completo de barandillas reglamentarias (altura mínima 90 cm con barra intermedia y rodapié de 15 cm) y red perimetral.'
    },
    detailedPedagogy: {
      ca: 'Prioritat preventiva: La protecció col·lectiva (barana) s\'ha d\'instal·lar sempre abans de dependre únicament d\'equips individuals, protegint a qualsevol treballador que accedeixi a la plataforma de treball.',
      es: 'Prioridad preventiva: La protección colectiva (barandilla) debe instalarse siempre antes de depender únicamente de equipos individuales, protegiendo a cualquier trabajador que acceda a la plataforma.'
    },
    equippedTitle: {
      ca: 'Barana reglamentària i xarxa de seguretat instal·lades a la bastida',
      es: 'Barandilla reglamentaria y red de seguridad instaladas en el andamio'
    },
    isFound: false,
    x: 21,
    y: 46
  },
  {
    id: 'respiratory_mask',
    number: 2,
    title: {
      ca: 'Operari polint/decapant sense màscara respiratòria',
      es: 'Operario lijando/decapando sin mascarilla respiratoria'
    },
    category: 'EPI',
    categoryLabel: {
      ca: 'EPI Individual',
      es: 'EPI Individual'
    },
    zoneName: {
      ca: 'Zona de polit del casc de proa',
      es: 'Zona de lijado del casco de proa'
    },
    riskDescription: {
      ca: 'Un operari està eliminant pintura antifouling i fibra de vidre generant partícules respirables i vapors tòxics sense protecció buconasal.',
      es: 'Un operario está eliminando pintura antifouling y fibra de vidrio generando partículas respirables y vapores tóxicos sin protección buconasal.'
    },
    solutionMissing: {
      ca: 'Falta EPI: Màscara autofiltrant o semimàscara amb filtre mixt P3 contra partícules tòxiques i filtre A per a vapors orgànics.',
      es: 'Falta EPI: Mascarilla autofiltrante o semimáscara con filtro mixto P3 contra partículas tóxicas y filtro A para vapores orgánicos.'
    },
    detailedPedagogy: {
      ca: 'L\'antifouling marí conté biocides i òxids metàl·lics molt nocius per a les vies respiratòries. L\'ús d\'EPI buconasal certificat és indispensable.',
      es: 'El antifouling marino contiene biocidas y óxidos metálicos muy nocivos para las vías respiratorias. El uso de EPI buconasal certificado es indispensable.'
    },
    equippedTitle: {
      ca: 'Màscara respiratòria homologada FFP3 / A2P3 col·locada a l\'operari',
      es: 'Mascarilla respiratoria homologada FFP3 / A2P3 colocada en el operario'
    },
    isFound: false,
    x: 43,
    y: 73
  },
  {
    id: 'harness_lift',
    number: 3,
    title: {
      ca: 'Operari en plataforma elevadora sense arnès de seguretat',
      es: 'Operario en plataforma elevadora sin arnés de seguridad'
    },
    category: 'EPI',
    categoryLabel: {
      ca: 'EPI Individual',
      es: 'EPI Individual'
    },
    zoneName: {
      ca: 'Cistella elevadora de popa (PEMA)',
      es: 'Cesta elevadora de popa (PEMP)'
    },
    riskDescription: {
      ca: 'L\'operari que manipula eines a la cistella elevadora està a 4 metres d\'alçada sense arnès anticaigudes ancorat al punt homologat de la cistella.',
      es: 'El operario que manipula herramientas en la cesta elevadora está a 4 metros de altura sin arnés anticaídas anclado al punto homologado de la cesta.'
    },
    solutionMissing: {
      ca: 'Falta EPI: Arnès anticaigudes complet (UNE-EN 361) amb element d\'amarratge curt i absorbidor d\'energia connectat al punt d\'ancoratge de la PEMP.',
      es: 'Falta EPI: Arnés anticaídas completo (UNE-EN 361) con elemento de amarre corto y absorbedor de energía conectado al anclaje de la PEMP.'
    },
    detailedPedagogy: {
      ca: 'Evita el risc d\'expulsió de la cistella tipus "catapulta" per moviments sobtats o cops accidentals del braç articulat.',
      es: 'Evita el riesgo de eyección de la cesta tipo "catapulta" por movimientos bruscos o golpes accidentales del brazo articulado.'
    },
    equippedTitle: {
      ca: 'Arnès anticaigudes i línia d\'ancoratge connectats a la cistella',
      es: 'Arnés anticaídas y línea de anclaje conectados a la cesta'
    },
    isFound: false,
    x: 77,
    y: 47
  },
  {
    id: 'eye_face_shield',
    number: 4,
    title: {
      ca: 'Operari esmerilant metalls sense pantalla facial ni ulleres',
      es: 'Operario esmerilando metales sin pantalla facial ni gafas'
    },
    category: 'EPI',
    categoryLabel: {
      ca: 'EPI Individual',
      es: 'EPI Individual'
    },
    zoneName: {
      ca: 'Banc de treball de coberta / Hèlix',
      es: 'Banco de trabajo de cubierta / Hélice'
    },
    riskDescription: {
      ca: 'Un operari manipula peces metàl·liques amb una eina que projecta borra i espurnes sense cap protecció ocular ni facial.',
      es: 'Un operario manipula piezas metálicas con una herramienta que proyecta rebabas y chispas sin ninguna protección ocular ni facial.'
    },
    solutionMissing: {
      ca: 'Falta EPI: Pantalla facial abatible de policarbonat (UNE-EN 166) contra impacte de partícules d\'alta velocitat o ulleres de muntura integral.',
      es: 'Falta EPI: Pantalla facial abatible de policarbonato (UNE-EN 166) contra impacto de partículas de alta velocidad o gafas integrales.'
    },
    detailedPedagogy: {
      ca: 'La projecció de ferritja incandescent i partícules metàl·liques pot causar lesions oculars irreversibles i cremades greus a la cara.',
      es: 'La proyección de virutas incandescentes y partículas metálicas puede causar lesiones oculares irreversibles y quemaduras faciales.'
    },
    equippedTitle: {
      ca: 'Pantalla facial de protecció mecànica equipada a l\'operari',
      es: 'Pantalla facial de protección mecánica equipada en el operario'
    },
    isFound: false,
    x: 47,
    y: 53
  },
  {
    id: 'crane_perimeter_marking',
    number: 5,
    title: {
      ca: 'Grua hissant càrrega pesada sense abalisament ni delimitació',
      es: 'Grúa izando carga pesada sin balizamiento ni delimitación'
    },
    category: 'COLLECTIVA',
    categoryLabel: {
      ca: 'Protecció Col·lectiva',
      es: 'Protección Colectiva'
    },
    zoneName: {
      ca: 'Radi d\'acció de la grua mòbil (Zona d\'hissat)',
      es: 'Radio de acción de la grúa móvil (Zona de izado)'
    },
    riskDescription: {
      ca: 'La grua mòbil està maniobrant un engranatge pesat per sobre del vaixell sense cap tanca, cordó de seguretat o senyalització a terra.',
      es: 'La grúa móvil está maniobrando un engranaje pesado sobre el barco sin ninguna valla, cordón de seguridad ni señalización en el suelo.'
    },
    solutionMissing: {
      ca: 'Falta Protecció Col·lectiva: Tancament perimetral amb cadenes d\'abalisament, cons reflectors i senyals de "Prohibit el pas sota càrregues suspeses".',
      es: 'Falta Protección Colectiva: Vallado perimetral con cadenas de balizamiento, conos reflectantes y señales de "Prohibido el paso bajo cargas suspendidas".'
    },
    detailedPedagogy: {
      ca: 'Protegeix a tot el personal del varador impedint que qualsevol treballador transiti inadvertidament per la vertical de la càrrega.',
      es: 'Protege a todo el personal del varadero impidiendo que cualquier trabajador transite inadvertidamente por la vertical de la carga.'
    },
    equippedTitle: {
      ca: 'Zona d\'exclusió abalisada i delimitada amb cons de seguretat',
      es: 'Zona de exclusión balizada y delimitada con conos de seguridad'
    },
    isFound: false,
    x: 48,
    y: 20
  },
  {
    id: 'chemical_spill_tray',
    number: 6,
    title: {
      ca: 'Bidons de dissolvents i pintures sense safata de retenció',
      es: 'Bidones de disolventes y pinturas sin cubeto de retención'
    },
    category: 'COLLECTIVA',
    categoryLabel: {
      ca: 'Protecció Col·lectiva',
      es: 'Protección Colectiva'
    },
    zoneName: {
      ca: 'Magatzem auxiliar de productes químics a terra',
      es: 'Almacén auxiliar de productos químicos en suelo'
    },
    riskDescription: {
      ca: 'Els pots i bidons de dissolvent, resines i pintures es troben directament a terra amb perill de vessament químic, relliscada o incendi.',
      es: 'Los botes y bidones de disolvente, resinas y pinturas se encuentran directamente sobre el suelo con riesgo de derrame químico, resbalón o incendio.'
    },
    solutionMissing: {
      ca: 'Falta Protecció Col·lectiva: Cubeta / safata de retenció estanca amb reixeta metàl·lica per recollir possibles fuites i extintor de pols ABC a mà.',
      es: 'Falta Protección Colectiva: Cubeto / bandeja de retención estanca con rejilla metálica para recoger posibles fugas y extintor de polvo ABC a mano.'
    },
    detailedPedagogy: {
      ca: 'Mesura de protecció ambiental i col·lectiva que evita la contaminació de la dàrsena portuària i l\'acumulació de vapors inflamables a terra.',
      es: 'Medida de protección ambiental y colectiva que evita la contaminación de la dársena portuaria y la acumulación de vapores inflamables en el suelo.'
    },
    equippedTitle: {
      ca: 'Cubeta de retenció ecològica instal·lada sota els bidons químics',
      es: 'Cubeto de retención ecológica instalado bajo los bidones químicos'
    },
    isFound: false,
    x: 13,
    y: 63
  },
  {
    id: 'forced_ventilation',
    number: 7,
    title: {
      ca: 'Manca de ventilació forçada / extracció localitzada en recinte interior',
      es: 'Falta de ventilación forzada / extracción localizada en espacio interior'
    },
    category: 'COLLECTIVA',
    categoryLabel: {
      ca: 'Protecció Col·lectiva',
      es: 'Protección Colectiva'
    },
    zoneName: {
      ca: 'Accés a la cambra de màquines / bodega inferior',
      es: 'Acceso a la sala de máquinas / bodega inferior'
    },
    riskDescription: {
      ca: 'S\'estan realitzant feines de fibra de vidre i soldadura al buc interior sense conducte d\'extracció ni ventilador d\'aire net.',
      es: 'Se están realizando tareas de fibra de vidrio y soldadura en el casco interior sin conducto de extracción ni ventilador de aire limpio.'
    },
    solutionMissing: {
      ca: 'Falta Protecció Col·lectiva: Equip mòbil d\'extracció localitzada de fums i manxa de ventilació forçada per a espais confinats.',
      es: 'Falta Protección Colectiva: Equipo móvil de extracción localizada de humos y manga de ventilación forzada para espacios confinados.'
    },
    detailedPedagogy: {
      ca: 'Renova contínuament l\'atmosfera interior eliminant vapors explosius o asfixiants abans que puguin concentrar-se i afectar els treballadors.',
      es: 'Renueva continuamente la atmósfera interior eliminando vapores explosivos o asfixiantes antes de que puedan concentrarse y afectar a los trabajadores.'
    },
    equippedTitle: {
      ca: 'Sistema de ventilació forçada i mànega d\'extracció en marxa',
      es: 'Sistema de ventilación forzada y manga de extracción en marcha'
    },
    isFound: false,
    x: 65,
    y: 67
  }
];

export const PPE_BODY_ZONES: PPEBodyZone[] = [
  {
    id: 'head',
    name: { ca: 'Cap', es: 'Cabeza' },
    icon: 'hard-hat',
    items: {
      ca: ['Cascs de seguretat (obra i indústria)', 'Capells i gorres antigolpes', 'Barrets de protecció solar'],
      es: ['Cascos de seguridad (obra e industria)', 'Gorras antigolpe certificadas', 'Sombreros de protección solar']
    },
    purpose: {
      ca: 'Protegeix contra caigudes d\'objectes, càrregues suspeses per grues, impactes contra estructures baixes i contactes elèctrics.',
      es: 'Protege contra caídas de objetos, cargas suspendidas por grúas, impactos contra estructuras bajas y contactos eléctricos.'
    },
    boatApplication: {
      ca: 'Obligatori a tot el varador, especialment sota la grua de pòrtic, al voltant de les bastides i a l\'interior de la cambra de motors.',
      es: 'Obligatorio en todo el varadero, especialmente bajo la grúa de pórtico, alrededor de los andamios y en la cámara de motores.'
    },
    normative: 'UNE-EN 397 (Cascs de protecció)'
  },
  {
    id: 'ears',
    name: { ca: 'Oïda', es: 'Oído' },
    icon: 'headphones',
    items: {
      ca: ['Taps auditius d\'un sol ús o reutilitzables', 'Orelleres de protecció acoblables a casc', 'Orelleres electròniques'],
      es: ['Tapones auditivos desechables o reutilizables', 'Orejeras de protección acoplables a casco', 'Orejeras electrónicas']
    },
    purpose: {
      ca: 'Atenua nivells de pressió sonora superiors a 80 dB(A) per evitar la hipoacúsia laboral o pèrdua d\'audició irreversible.',
      es: 'Atenúa niveles de presión sonora superiores a 80 dB(A) para evitar la hipoacusia laboral o pérdida auditiva irreversible.'
    },
    boatApplication: {
      ca: 'Imprescindible en operacions de poliment del casc amb radials, sorrejat d\'hèlixs, hidrorentat d\'alta pressió i compressors.',
      es: 'Imprescindible en operaciones de lijado del casco con radiales, chorreado de hélices, hidroavado de alta presión y compresores.'
    },
    normative: 'UNE-EN 352 (Protectors auditius)'
  },
  {
    id: 'eyes',
    name: { ca: 'Ulls i Cara', es: 'Ojos y Cara' },
    icon: 'glasses',
    items: {
      ca: ['Ulleres de muntura universal', 'Ulleres de muntura integral (panoràmiques)', 'Pantalles facials per a soldadura i esmerilat'],
      es: ['Gafas de montura universal', 'Gafas de montura integral (panorámicas)', 'Pantallas faciales para soldadura y esmerilado']
    },
    purpose: {
      ca: 'Evita impactes de partícules d\'alta velocitat, esquitxades de reactius químics líquids i radiacions UV/IR de soldadura.',
      es: 'Evita impactos de partículas de alta velocidad, salpicaduras de reactivos químicos líquidos y radiaciones UV/IR de soldadura.'
    },
    boatApplication: {
      ca: 'Treballs de fibra de vidre amb resina de polièster, mescla de pintura antifouling i reparació d\'eixos d\'hèlix amb radial.',
      es: 'Trabajos de fibra de vidrio con resina de poliéster, mezcla de pintura antifouling y reparación de ejes de hélice con radial.'
    },
    normative: 'UNE-EN 166 / UNE-EN 175'
  },
  {
    id: 'respiratory',
    name: { ca: 'Vies Respiratòries', es: 'Vías Respiratorias' },
    icon: 'head-side-mask',
    items: {
      ca: ['Mascaretes autofiltrants FFP2/FFP3 contra pols', 'Semimàscares amb filtres mixtos (Gasos + Partícules)', 'Equips d\'aire assistit'],
      es: ['Mascarillas autofiltrantes FFP2/FFP3 contra polvo', 'Semimáscaras con filtros mixtos (Gases + Partículas)', 'Equipos de aire asistido']
    },
    purpose: {
      ca: 'Filtra pols nociva, vapors orgànics de dissolvents i gasos tòxics abans que arribin als alvèols pulmonars.',
      es: 'Filtra polvo nocivo, vapores orgánicos de disolventes y gases tóxicos antes de que lleguen a los alvéolos pulmonares.'
    },
    boatApplication: {
      ca: 'Decapat químic d\'obra viva, poliment de gelcoat amb fibra de vidre i aplicació de vernissos nàutics en espais tancats.',
      es: 'Decapado químico de obra viva, lijado de gelcoat con fibra de vidrio y aplicación de barnices náuticos en espacios cerrados.'
    },
    normative: 'UNE-EN 149 / UNE-EN 14387'
  },
  {
    id: 'hands',
    name: { ca: 'Mans i Braços', es: 'Manos y Brazos' },
    icon: 'mitten',
    items: {
      ca: ['Guants contra riscos mecànics (talls i abrasió)', 'Guants de nitril/neoprè contra químics', 'Guants dielèctrics per a electricitat'],
      es: ['Guantes contra riesgos mecánicos (cortes y abrasión)', 'Guantes de nitrilo/neopreno contra químicos', 'Guantes dieléctricos']
    },
    purpose: {
      ca: 'Defensa les mans contra talls, cremades per fricció, contacte amb àcids/dissolvents i descàrregues elèctriques.',
      es: 'Defiende las manos contra cortes, quemaduras por fricción, contacto con ácidos/disolventes y descargas eléctricas.'
    },
    boatApplication: {
      ca: 'Maneig de cordams metàl·lics de varador, manipulació de bateries de plom-àcid de l\'embarcació i resines epoxi.',
      es: 'Manejo de cabos y cables metálicos de varadero, manipulación de baterías de plomo-ácido del barco y resinas epoxi.'
    },
    normative: 'UNE-EN 388 (Mecànics) / UNE-EN 374 (Químics)'
  },
  {
    id: 'feet',
    name: { ca: 'Cames i Peus', es: 'Piernas y Pies' },
    icon: 'shoe-prints',
    items: {
      ca: ['Calçat de seguretat S3 amb puntera d\'acer i sola antiperforació', 'Botes d\'aigua de seguretat amb sola antilliscant SRC', 'Calçat aïllant'],
      es: ['Calzado de seguridad S3 con puntera y suela antiperforación', 'Botas de agua de seguridad antideslizantes SRC', 'Calzado aislante']
    },
    purpose: {
      ca: 'Suporta caigudes d\'objectes feixucs sobre els dits, trepitjades de claus o encenalls i evita relliscos en sòls molls o oliosos.',
      es: 'Soporta caídas de objetos pesados sobre los dedos, pisadas de clavos o virutas y evita resbalones en suelos mojados o aceitosos.'
    },
    boatApplication: {
      ca: 'Feines a rampes de varada mullades d\'aigua de mar, manipulació de cadenes d\'àncores i estibació d\'eines.',
      es: 'Labores en rampas de varada mojadas de agua de mar, manipulación de cadenas de anclas y estiba de herramientas.'
    },
    normative: 'UNE-EN ISO 20345'
  },
  {
    id: 'trunk',
    name: { ca: 'Tronc i Abdomen', es: 'Tronco y Abdomen' },
    icon: 'vest',
    items: {
      ca: ['Armilles d\'alta visibilitat retroreflectants', 'Davantals de cuir per a soldadors', 'Faixes de protecció lumbar i armilles salvavides'],
      es: ['Chalecos de alta visibilidad retro-reflectantes', 'Mandiles de cuero para soldadores', 'Fajas lumbares y chalecos salvavidas hinchables']
    },
    purpose: {
      ca: 'Garanteix la visibilitat de l\'operari front a maquinària mòbil, protegeix contra espurnes i evita l\'ofegament a l\'aigua.',
      es: 'Garantiza la visibilidad del operario frente a maquinaria móvil, protege contra chispas y evita el ahogamiento en agua.'
    },
    boatApplication: {
      ca: 'Treballs de coordinació a la dàrsena prop de toros mecànics i grues de viatge (travelifts), o a l\'embarcador exterior.',
      es: 'Trabajos de coordinación en la dársena cerca de carretillas y grúas pórtico (travelifts), o en el embarcadero exterior.'
    },
    normative: 'UNE-EN ISO 20471 (Alta visibilitat)'
  },
  {
    id: 'full_body',
    name: { ca: 'Tot el Cos', es: 'Todo el Cuerpo' },
    icon: 'person-falling-burst',
    items: {
      ca: ['Arnesos anticaigudes complets amb línia de vida', 'Granota de treball de protecció química estanca (tipus 4/5)', 'Trages isotèrmics'],
      es: ['Arneses anticaídas completos con línea de vida', 'Monos de trabajo de protección química estanca (tipo 4/5)', 'Trajes isotérmicos']
    },
    purpose: {
      ca: 'Deté caigudes lliures des d\'alçades sense produir lesions mortals a la columna i aïlla el cos de substàncies tòxiques massives.',
      es: 'Detiene caídas libres desde alturas sin producir lesiones mortales en la columna y aísla el cuerpo de sustancias tóxicas masivas.'
    },
    boatApplication: {
      ca: 'Pujada al pal d\'un veler (arboradura), manteniment de superestructures en iots grans i aplicació de poliuretà projectat.',
      es: 'Subida al mástil de un velero (arboladura), mantenimiento de superestructuras en yates grandes y aplicación de poliuretano.'
    },
    normative: 'UNE-EN 361 (Arnesos anticaigudes)'
  }
];

export const SLIDE_TITLES = {
  ca: [
    '1. Portada UT1 Prevenció',
    '2. 3.3 La Fatiga Laboral',
    '3. 3.4 La Insatisfacció Laboral',
    '4. 3.5 L\'Envelliment Prematur',
    '5. 4. Mesures Prevenció i Protecció',
    '6. Ordre de Prioritat de Mesures',
    '7. A) Tècniques de Prevenció',
    '8. B) Protecció Col·lectiva',
    '9. C) Equips Protecció Individual (EPI)',
    '10. Catàleg d\'EPIs per Parts del Cos',
    '11. Exemple Pràctic 4 (Luis)',
    '12. Activitat 7 (Belén / Ceràmica)',
    '13. Activitat 8 (Classificació Mesures)',
    '14. Activitat 9 (Tècniques Preventives)',
    '15. Activitat 10 (Isabel / Selecció EPIs)',
    '16. Fonts, Enllaços i Recursos',
    '17. JOC: 7 Errors en Manteniment Naval'
  ],
  es: [
    '1. Portada UT1 Prevención',
    '2. 3.3 La Fatiga Laboral',
    '3. 3.4 La Insatisfacción Laboral',
    '4. 3.5 El Envejecimiento Prematuro',
    '5. 4. Medidas Prevención y Protección',
    '6. Orden de Prioridad de Medidas',
    '7. A) Técnicas de Prevención',
    '8. B) Protección Colectiva',
    '9. C) Equipos Protección Individual (EPI)',
    '10. Catálogo de EPIs por Partes del Cuerpo',
    '11. Ejemplo Práctico 4 (Luis)',
    '12. Actividad 7 (Belén / Cerámica)',
    '13. Actividad 8 (Clasificación Medidas)',
    '14. Actividad 9 (Técnicas Preventivas)',
    '15. Actividad 10 (Isabel / Selección EPIs)',
    '16. Fuentes, Enlaces y Recursos',
    '17. JUEGO: 7 Errores en Mantenimiento Naval'
  ]
};
