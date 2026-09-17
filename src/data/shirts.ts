import { Shirt } from '../types';

export const SHIRTS_DATA: Shirt[] = [
  {
    id: 'mr-01',
    indexNumber: 1,
    name: 'Sabbia di Biella',
    code: 'MR-BESPOKE-01',
    category: 'lino',
    image: 'maniqui_mr_1.png',
    altText: 'Camisa a medida Marvel Sastrería 1',
    description: 'Confeccionada artesanalmente con lino 100% puro hilado en Biella, norte de Italia. Una caída etérea y noble en tono arena natural, con monograma artesanal bordado a mano.',
    fabric: 'Lino Italiano Puro',
    fabricOrigin: 'Biella, Italia',
    collar: 'Italiano (Cutaway)',
    cuff: 'Puño sastre redondeado con monograma bordado',
    monogramDefault: 'M.R.',
    colors: ['Arena Natural', 'Blanco Lino', 'Tabaco Suave'],
    isBestseller: true,
    features: [
      'Patrón trazado desde cero para abrazar tu anatomía',
      'Lino italiano de fibra noble prelavado artesanalmente',
      'Botonadura de madreperla australiana seleccionada',
      'Monograma personal bordado en seda'
    ]
  },
  {
    id: 'mr-02',
    indexNumber: 2,
    name: 'Milano Righe Sartoriali',
    code: 'MR-BESPOKE-02',
    category: 'formal',
    image: 'maniqui_mr_2.png',
    altText: 'Camisa a medida Marvel Sastrería 2',
    description: 'Milrayas clásicas en azul oxford y blanco sobre algodón egipcio Giza 87. Interior de cuello con contraste microestampado y puño doble francés con bordado exclusivo.',
    fabric: 'Algodón Egipcio Giza 87',
    fabricOrigin: 'Delta del Nilo / Hilatura Albini',
    collar: 'Francés Clásico',
    cuff: 'Puño francés almidonado con monograma A.E.W.',
    monogramDefault: 'A.E.W.',
    colors: ['Azul Oxford / Blanco', 'Gris Perla / Blanco'],
    isBestseller: true,
    features: [
      'Costuras de 8 puntadas por centímetro con hilo de alta torsión',
      'Forro interior de cuello en tejido micropunteado en contraste',
      'Puño doble francés para gemelos o botonadura de autor',
      'Canesú anatómico dividido para libertad de movimiento'
    ]
  },
  {
    id: 'mr-03',
    indexNumber: 3,
    name: 'Nero Notte Couture',
    code: 'MR-BESPOKE-03',
    category: 'ceremonia',
    image: 'maniqui_mr_3.png',
    altText: 'Camisa a medida Marvel Sastrería 3',
    description: 'La máxima audacia del esmoquin contemporáneo. Negro profundo de popelín suizo 140/2 enriquecido con vivo interno y entretela en Rojo Marvel para una presencia magnética.',
    fabric: 'Popelín Suizo 140/2',
    fabricOrigin: 'San Galo, Suiza',
    collar: 'Italiano (Cutaway)',
    cuff: 'Puño smoking con vivo interior Rojo Marvel',
    monogramDefault: 'C.H.',
    colors: ['Negro Profundo'],
    isNew: true,
    features: [
      'Vivo interior de cuello y puños en rojo Marvel satinado',
      'Algodón de 140 cabos dobles con brillo sedoso profundo',
      'Tapeta oculta frontal (Fly Front) para gala y etiqueta',
      'Monograma contrastado bordado en puño izquierdo'
    ]
  },
  {
    id: 'mr-04',
    indexNumber: 4,
    name: 'Giza 87 Bianco Reale',
    code: 'MR-BESPOKE-04',
    category: 'formal',
    image: 'maniqui_mr_4.png',
    altText: 'Camisa a medida Marvel Sastrería 4',
    description: 'La piedra angular de todo guardarropa sartorial masculino. Algodón Giza 87 cosechado a mano, cuello abotonado con curvatura perfecta y tacto suave como una segunda piel.',
    fabric: 'Algodón Egipcio Giza 87',
    fabricOrigin: 'Egipto / Tratamiento Suizo',
    collar: 'Button-Down',
    cuff: 'Puño biselado clásico con bordado tonal',
    monogramDefault: 'S.G.',
    colors: ['Blanco Puro Óptico', 'Blanco Marfil'],
    isBestseller: true,
    features: [
      'Fibras extralargas cosechadas manualmente a orillas del Nilo',
      'Curvatura natural impecable en el cuello abotonado',
      'Botones de nácar natural esculpidos con grosor de 3.5mm',
      'Ajuste anatómico que elimina cualquier sobrante bajo el saco'
    ]
  },
  {
    id: 'mr-05',
    indexNumber: 5,
    name: 'Venezia Micro-Geometrie',
    code: 'MR-BESPOKE-05',
    category: 'smart-casual',
    image: 'maniqui_mr_5.png',
    altText: 'Camisa a medida Marvel Sastrería 5',
    description: 'Vanguardia clásica expresada en un microestampado geométrico azul marino sobre fondo plata. Contrastes arquitectónicos en solapas y puños con iniciales en rojo carmesí.',
    fabric: 'Twill de Alta Densidad',
    fabricOrigin: 'Milán, Italia',
    collar: 'Semi-Spread',
    cuff: 'Puño sastre con vuelta en contraste azul marino',
    monogramDefault: 'L.F.',
    colors: ['Micro-Geometría Azul / Plata', 'Micro-Cuadro Grafito'],
    isNew: true,
    features: [
      'Diseño exclusivo de edición limitada tejida en jacquard fino',
      'Contraste azul marino en pie de cuello y vuelta de puño',
      'Monograma bordado en hilo de seda rojo Marvel',
      'Refuerzo triangular pentagonal en faldones laterales'
    ]
  },
  {
    id: 'mr-06',
    indexNumber: 6,
    name: 'Azzurro Riviera',
    code: 'MR-BESPOKE-06',
    category: 'smart-casual',
    image: 'maniqui_mr_6.png',
    altText: 'Camisa a medida Marvel Sastrería 6',
    description: 'El tono azul cielo indispensable, reinventado con cuello cutaway napolitano y detalles rayados en el interior del cuello y puño. Sofisticación sin esfuerzo.',
    fabric: 'Algodón Egipcio 120/2',
    fabricOrigin: 'Delta del Nilo / Italia',
    collar: 'Italiano (Cutaway)',
    cuff: 'Puño redondo con vivo interior rayado',
    monogramDefault: 'M.R.',
    colors: ['Azul Cielo Riviera', 'Azul Real'],
    features: [
      'Tejido twill fluido con caída elástica natural sin elastano',
      'Cuello napolitano abierto perfecto para nudo medio o sin corbata',
      'Acabado mercerizado con sedosidad permanente',
      'Corte anatómico adaptado a hombros y omóplatos'
    ]
  },
  {
    id: 'mr-07',
    indexNumber: 7,
    name: 'Rosa Sfumato Su Misura',
    code: 'MR-BESPOKE-07',
    category: 'lino',
    image: 'maniqui_mr_7.png',
    altText: 'Camisa a medida Marvel Sastrería 7',
    description: 'Tonalidad rosa empolvado en una noble mezcla de lino biellese y algodón peinado. Una pieza que proyecta seguridad, distinción y una sensibilidad estética de alta escuela.',
    fabric: 'Lino & Seda de Biella',
    fabricOrigin: 'Piamonte, Italia',
    collar: 'Italiano (Cutaway)',
    cuff: 'Puño suave con iniciales sutiles en seda rosa pálido',
    monogramDefault: 'J.A.',
    colors: ['Rosa Pastel Empolvado', 'Coral Suave'],
    features: [
      'Mezcla transpirable que reduce las arrugas pronunciadas del lino',
      'Botones de madreperla con refracción irisada natural',
      'Hilado teñido en hilo antes de tejer (Yarn-Dyed)',
      'Construcción ligera sin entretelas pesadas para máxima frescura'
    ]
  },
  {
    id: 'mr-08',
    indexNumber: 8,
    name: 'Oxford Imperial Dettaglio',
    code: 'MR-BESPOKE-08',
    category: 'formal',
    image: 'maniqui_mr_8.png',
    altText: 'Camisa a medida Marvel Sastrería 8',
    description: 'Blanco puro en tejido Oxford Royal con ribete interior en cuadro tartán burdeos y botones cosidos con pata de gallo (punto zampa di gallina) hecho a mano.',
    fabric: 'Oxford Royal 100/2',
    fabricOrigin: 'Guimarães, Portugal',
    collar: 'Francés Clásico',
    cuff: 'Puño inglés con ribete interno artesanal',
    monogramDefault: 'M.R.',
    colors: ['Blanco Imperial'],
    features: [
      'Puntada zampa di gallina en cada botón para mayor flexibilidad',
      'Ribete interior secreto en tartán de sastrería de autor',
      'Tejido con cuerpo sustancial ideal para todo el año',
      'Ojal del botón inferior en posición horizontal para evitar tiranteces'
    ]
  },
  {
    id: 'mr-09',
    indexNumber: 9,
    name: 'Cromo Sartoriale',
    code: 'MR-BESPOKE-09',
    category: 'formal',
    image: 'maniqui_mr_9.png',
    altText: 'Camisa a medida Marvel Sastrería 9',
    description: 'Gris perla con acabado cromo metalizado sutil. La encarnación del lujo contemporáneo para lucir bajo trajes en azul medianoche, carbón o diplomáticos.',
    fabric: 'Seda & Algodón Mercerizado',
    fabricOrigin: 'Como, Italia',
    collar: 'Semi-Spread',
    cuff: 'Puño biselado con bordado E.P. en el pie de cuello',
    monogramDefault: 'E.P.',
    colors: ['Plata Cromo', 'Gris Humo'],
    features: [
      'Brillo metálico cromo conseguido mediante hilatura de seda pura',
      'Monograma sastre bordado discretamente en el cuello',
      'Estructura que resiste la compresión del cuello del saco',
      'Diseñada para eventos de alta visibilidad y liderazgo'
    ]
  },
  {
    id: 'mr-10',
    indexNumber: 10,
    name: 'Principe di Galles Marvel',
    code: 'MR-BESPOKE-10',
    category: 'ceremonia',
    image: 'maniqui_mr_10.png',
    altText: 'Camisa a medida Marvel Sastrería 10',
    description: 'Patrón de microcuadro Príncipe de Gales con forro de cuello en vibrante Rojo Marvel y puños con contrastes geométricos. La firma definitiva de Marvel Sastrería.',
    fabric: 'Lana Fría & Lino Sartorial',
    fabricOrigin: 'Biella & Milán, Italia',
    collar: 'Italiano (Cutaway)',
    cuff: 'Puño francés con interior Rojo Marvel e iniciales K.D.',
    monogramDefault: 'K.D.',
    colors: ['Príncipe de Gales Gris / Rojo Marvel'],
    isNew: true,
    features: [
      'Forro de cuello y tapeta interior en carmesí Rojo Marvel',
      'Tejido termorregulador ultra refinado de tacto aterciopelado',
      'Monograma en contraste en puño derecho e izquierdo',
      'Pieza cumbre del Brand Book de Marvel Sastrería'
    ]
  }
];

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
