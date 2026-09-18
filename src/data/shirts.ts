import { Shirt } from '../types';

export const SHIRTS_DATA: Shirt[] = [
  {
    id: 'mr-01',
    indexNumber: 1,
    name: 'Camisa Cuadros Azules',
    subtitle: '100% Algodón Italiano. Cortes impecables con opciones de puño francés para gemelos.',
    badge: 'Nueva Colección',
    code: 'MR-01',
    category: 'nueva-coleccion',
    image: '/assets/catalog/camisa-cuadros-azules.webp',
    altText: 'Camisa Cuadros Azules - Marvel Sastrería',
    description: '100% Algodón Italiano. Cortes impecables con opciones de puño francés para gemelos. Confección de alta sastrería con ajuste anatómico individual.',
    fabric: '100% Algodón Italiano',
    fabricOrigin: 'Italia / 100% Algodón',
    collar: 'Italiano (Cutaway)',
    cuff: 'Puño Francés para Gemelos',
    monogramDefault: 'M.R.',
    colors: ['Cuadros Azules / Blanco', 'Azul Real'],
    isNew: true,
    features: [
      '100% Algodón Italiano de hilatura noble',
      'Cortes impecables con opciones de puño francés para gemelos',
      'Patrón trazado individualmente para tu anatomía',
      'Botonadura seleccionada y detalles artesanales'
    ]
  },
  {
    id: 'mr-02',
    indexNumber: 2,
    name: 'Camisa Rayas Marrones',
    subtitle: 'Sastrería a medida. Tela premium con ojales bordados en hilo de contraste.',
    badge: 'Premium',
    code: 'MR-02',
    category: 'formal',
    image: '/assets/catalog/camisa-rayas-marrones.webp',
    altText: 'Camisa Rayas Marrones - Marvel Sastrería',
    description: 'Sastrería a medida. Tela premium con ojales bordados en hilo de contraste. Una pieza de presencia distinguida para eventos formales y dirección.',
    fabric: 'Tela Premium Hilatura Fina',
    fabricOrigin: 'Biella, Italia',
    collar: 'Francés Clásico',
    cuff: 'Puño Sastre con Ojales en Contraste',
    monogramDefault: 'M.R.',
    colors: ['Rayas Marrón / Blanco', 'Tabaco Sartorial'],
    isBestseller: true,
    features: [
      'Ojales bordados minuciosamente en hilo de contraste',
      'Tela premium transpirable de gran estructura',
      'Ajuste a la medida exacto sin pliegues sobrantes',
      'Costuras finas de 8 puntadas por centímetro'
    ]
  },
  {
    id: 'mr-03',
    indexNumber: 3,
    name: 'Camisa Rayas Gruesas Azules (Monograma E.P.M.)',
    subtitle: 'Línea Ejecutiva. Puño clásico y monograma bordado. Transición perfecta entre oficina y fin de semana.',
    badge: 'Ejecutiva',
    code: 'MR-03',
    category: 'ejecutiva',
    image: '/assets/catalog/camisa-rayas-gruesas-azules.webp',
    altText: 'Camisa Rayas Gruesas Azules (Monograma E.P.M.) - Marvel Sastrería',
    description: 'Línea Ejecutiva. Puño clásico y monograma bordado. Transición perfecta entre oficina y fin de semana, con porte elegante y dinamismo.',
    fabric: 'Algodón Doble Retorcido',
    fabricOrigin: 'Línea Ejecutiva / Italia',
    collar: 'Semi-Spread',
    cuff: 'Puño Clásico con Monograma Bordado',
    monogramDefault: 'E.P.M.',
    colors: ['Rayas Gruesas Azul / Blanco'],
    isBestseller: true,
    features: [
      'Monograma artesanal bordado en el puño (E.P.M.)',
      'Patrón ejecutivo versátil para despacho y fin de semana',
      'Tejido con cuerpo que resiste toda la jornada laboral',
      'Cuello reforzado para mantener la verticalidad con o sin corbata'
    ]
  },
  {
    id: 'mr-04',
    indexNumber: 4,
    name: 'Camisa Cuadros Vichy',
    subtitle: 'Patrones atemporales. Cuello semi-italiano estructurado ideal para un look business casual.',
    badge: 'Atemporal',
    code: 'MR-04',
    category: 'cuadros',
    image: '/assets/catalog/camisa-cuadros-vichy.webp',
    altText: 'Camisa Cuadros Vichy - Marvel Sastrería',
    description: 'Patrones atemporales. Cuello semi-italiano estructurado ideal para un look business casual. Clásico indispensable en cualquier guardarropa masculino.',
    fabric: 'Popelín de Cuadro Fino',
    fabricOrigin: 'Patrón Atemporal Suizo',
    collar: 'Semi-Italiano Estructurado',
    cuff: 'Puño Biselado 1 Botón',
    monogramDefault: 'M.R.',
    colors: ['Vichy Azul / Blanco', 'Vichy Marino'],
    features: [
      'Cuello semi-italiano con entretela suiza estructurada',
      'Patrón atemporal que combina con saco sport o cardigan',
      'Algodón mercerizado de caída limpia y suave',
      'Ajuste impecable en hombro, pecho y cintura'
    ]
  },
  {
    id: 'mr-05',
    indexNumber: 5,
    name: 'Camisa Cuadros Finos Azules',
    subtitle: 'Diseño en cuadros pequeños ideal para un look business casual estructurado.',
    badge: 'Business Casual',
    code: 'MR-05',
    category: 'smart-casual',
    image: '/assets/catalog/camisa-cuadros-finos-azules.webp',
    altText: 'Camisa Cuadros Finos Azules - Marvel Sastrería',
    description: 'Diseño en cuadros pequeños ideal para un look business casual estructurado. Sobria, contemporánea y sumamente adaptable.',
    fabric: 'Twill Fino de Algodón',
    fabricOrigin: 'Business Casual / Milán',
    collar: 'Italiano (Cutaway)',
    cuff: 'Puño Sastre Redondeado',
    monogramDefault: 'M.R.',
    colors: ['Microcuadros Azul / Celeste'],
    features: [
      'Microestampado geométrico fino de alta definición',
      'Trama fresca ideal para climas cálidos y templados',
      'Botones cosidos a mano con punto cruzado reforzado',
      'Canesú trasero anatómico para libertad total de movimiento'
    ]
  },
  {
    id: 'mr-06',
    indexNumber: 6,
    name: 'Camisa Blanca Texturizada',
    subtitle: "Línea 'SmartWatch Casual'. Cuello Button-Down y puño clásico para un estilo de vida dinámico.",
    badge: 'SmartWatch Casual',
    code: 'MR-06',
    category: 'smart-casual',
    image: '/assets/catalog/camisa-blanca-texturizada.webp',
    altText: 'Camisa Blanca Texturizada - Marvel Sastrería',
    description: "Línea 'SmartWatch Casual'. Cuello Button-Down y puño clásico para un estilo de vida dinámico. Pureza de blanco con textura táctil diferenciadora.",
    fabric: 'Piqué de Algodón Texturizado',
    fabricOrigin: 'SmartWatch Casual / Egipto',
    collar: 'Button-Down',
    cuff: 'Puño Clásico Dinámico',
    monogramDefault: 'M.R.',
    colors: ['Blanco Puro Óptico', 'Blanco Marfil'],
    features: [
      'Diseñada específicamente para llevar smartwatch sin rozaduras',
      'Cuello Button-Down con curvatura natural elegante',
      'Tejido con textura microestructurada que disimula arrugas',
      'Confección bespoke con comodidad y elasticidad natural'
    ]
  },
  {
    id: 'mr-07',
    indexNumber: 7,
    name: 'Camisa Azul Claro Casual',
    subtitle: 'Elegancia sutil para el día a día. Tela ligera de algodón egipcio.',
    badge: 'SmartWatch Casual',
    code: 'MR-07',
    category: 'smart-casual',
    image: '/assets/catalog/camisa-azul-claro-casual.webp',
    altText: 'Camisa Azul Claro Casual - Marvel Sastrería',
    description: 'Elegancia sutil para el día a día. Tela ligera de algodón egipcio con caída suave y luminosidad natural.',
    fabric: 'Algodón Egipcio Ligero 120/2',
    fabricOrigin: 'Algodón Egipcio / Italia',
    collar: 'Semi-Spread Suave',
    cuff: 'Puño Redondeado Cómodo',
    monogramDefault: 'M.R.',
    colors: ['Azul Claro Cielo', 'Azul Bruma'],
    features: [
      'Algodón egipcio cosechado a mano de fibra ultralarga',
      'Sensación de ligereza permanente como una segunda piel',
      'Puño adaptado para reloj contemporáneo',
      'Caída impecable sin necesidad de almidonado agresivo'
    ]
  },
  {
    id: 'mr-08',
    indexNumber: 8,
    name: 'Camisa Vichy Roja',
    subtitle: 'Patrón de cuadros medianos con un toque distintivo y elegante.',
    badge: 'Nueva Colección',
    code: 'MR-08',
    category: 'nueva-coleccion',
    image: '/assets/catalog/camisa-vichy-roja.webp',
    altText: 'Camisa Vichy Roja - Marvel Sastrería',
    description: 'Patrón de cuadros medianos con un toque distintivo y elegante. Carácter audaz pero sofisticado con el sello carmesí de la casa.',
    fabric: 'Popelín Italiano Teñido en Hilo',
    fabricOrigin: 'Piamonte, Italia',
    collar: 'Semi-Italiano',
    cuff: 'Puño Sastre Redondo',
    monogramDefault: 'M.R.',
    colors: ['Vichy Rojo / Blanco'],
    isNew: true,
    features: [
      'Hilado teñido en hilo (Yarn-Dyed) antes del tejido',
      'Cuadro mediano equilibrado que aporta dinamismo y calidez',
      'Botonadura nacarada con reflejo perlado',
      'Costura de refuerzo lateral pentagonal en el bajo'
    ]
  },
  {
    id: 'mr-09',
    indexNumber: 9,
    name: 'Camisa Azul con Interior Paisley',
    subtitle: 'Diseños Signature. Exteriores sobrios que esconden interiores llamativos. Botones oscuros que rompen la monotonía.',
    badge: 'Signature',
    code: 'MR-09',
    category: 'signature',
    image: '/assets/catalog/camisa-azul-interior-paisley.webp',
    altText: 'Camisa Azul con Interior Paisley - Marvel Sastrería',
    description: 'Diseños Signature. Exteriores sobrios que esconden interiores llamativos. Botones oscuros que rompen la monotonía y elevan el diseño a obra de autor.',
    fabric: 'Oxford Royal con Seda Paisley',
    fabricOrigin: 'Diseños Signature / Como, Italia',
    collar: 'Italiano con Forro Interior Paisley',
    cuff: 'Puño con Vuelta Interior Paisley',
    monogramDefault: 'M.R.',
    colors: ['Azul Marino / Paisley Oculto'],
    isNew: true,
    features: [
      'Detalle oculto en cachemira/paisley en interior de cuello y puños',
      'Botones oscuros contrastados esculpidos en cuerno natural',
      'Exterior sobrio con sorpresa de alta costura al desabotonar',
      'Patrón anatómico bespoke exclusivo de la línea Signature'
    ]
  },
  {
    id: 'mr-10',
    indexNumber: 10,
    name: 'Camisa Blanca Hilo Rojo',
    subtitle: 'Detalles en contraste con hilo rojo. Para quien busca diferenciarse.',
    badge: 'Edición Limitada',
    code: 'MR-10',
    category: 'signature',
    image: '/assets/catalog/camisa-blanca-hilo-rojo.webp',
    altText: 'Camisa Blanca Hilo Rojo - Marvel Sastrería',
    description: 'Detalles en contraste con hilo rojo. Para quien busca diferenciarse con audacia sartorial. Ojales y pespuntes en Rojo Marvel sobre fondo níveo.',
    fabric: 'Popelín Suizo de Alta Densidad',
    fabricOrigin: 'Edición Limitada / San Galo',
    collar: 'Italiano (Cutaway) con Pespunte Rojo',
    cuff: 'Puño Francés con Ojales en Hilo Rojo',
    monogramDefault: 'M.R.',
    colors: ['Blanco Óptico / Hilo Rojo Marvel'],
    isNew: true,
    features: [
      'Puntadas y ojales en hilo de seda Rojo Marvel en contraste',
      'Edición limitada exclusiva para clientes del Atelier',
      'Algodón suizo 140/2 de tacto ultrasuave y lustre noble',
      'Monograma de autor bordado a tono en la posición deseada'
    ]
  }
];

export const shirtsData = SHIRTS_DATA;


export const BRAND_VALUES = [
  {
    id: 'exclusividad',
    title: 'Exclusividad',
    subtitle: 'Pieza de autor irrepetible',
    description: 'Cada camisa es una obra única diseñada exclusivamente para un solo hombre. No producimos en masa, creamos legados atemporales.',
    iconName: 'Crown'
  },
  {
    id: 'maestria',
    title: 'Maestría Artesanal',
    subtitle: 'El pulso de la tradición',
    description: 'Dedicación meticulosa en cada puntada, ojal y corte manual. Nuestras manos expertas transforman las mejores telas del mundo en segundas pieles.',
    iconName: 'Scissors'
  },
  {
    id: 'vanguardia',
    title: 'Vanguardia Clásica',
    subtitle: 'Tradición con audacia',
    description: 'Respetamos profundamente la milenaria tradición sartorial, inyectándole un lujo contemporáneo, audaz y relevante para el hombre contemporáneo.',
    iconName: 'Shield'
  },
  {
    id: 'detalle',
    title: 'Atención al Detalle',
    subtitle: 'El lujo en lo microscópico',
    description: 'Entendemos que el verdadero lujo reside en lo microscópico: el calibre del hilo, el peso del botón de nácar, la milimétrica precisión de la inicial bordada.',
    iconName: 'Sparkles'
  }
];

export const BESPOKE_PILLARS = [
  {
    title: 'El Ajuste Perfecto',
    description: 'Nos alejamos por completo del prêt-à-porter y de las medidas estándar. Cada patrón se traza de manera individual sobre papel para abrazar la complexión única de quien lo porta.'
  },
  {
    title: 'Personalización Extrema',
    description: 'Desde la selección de hilos hasta el bordado preciso de iniciales en seda. Cada detalle estético responde a tu identidad y código personal.'
  },
  {
    title: 'Construcción Estructural',
    description: 'Selección meticulosa de cuellos, entretelas suizas, puños franceses y contrastes internos en Rojo Marvel que firman la obra de arte.'
  }
];
