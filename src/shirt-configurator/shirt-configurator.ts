/**
 * Marvel Sastrería (MR) — Bespoke Shirt Configurator
 * Pure TypeScript Module (Framework-free, direct DOM manipulation)
 * 
 * Palette:
 *   - Rojo Marvel: #CC0001
 *   - Plata / Cromo: #E6E7EB
 *   - Negro Profundo: #0A0A0A
 */

import {
  StepNumber,
  StepDefinition,
  FabricOption,
  ColorOption,
  FitOption,
  CollarOption,
  CuffOption,
  PocketOption,
  ButtonOption,
  MonogramConfig,
  InsigniaShape,
  ShirtConfig,
  ShirtConfiguratorOptions,
  ShirtConfiguratorInstance,
  StandardSize,
  CustomMeasurements,
} from './types';

// ============================================================================
// DATA & OPTIONS DEFINITIONS
// ============================================================================

export const STEPS: StepDefinition[] = [
  { number: 1, id: 'tejido', title: 'Tejido Noble', subtitle: 'Selecciona la textura y tejido de alta camisería para tu prenda.', zoomTarget: 'full' },
  { number: 2, id: 'color', title: 'Color Base', subtitle: 'Define la tonalidad que servirá de lienzo para tu personalidad.', zoomTarget: 'full' },
  { number: 3, id: 'corte', title: 'Corte Anatómico', subtitle: 'Elige el fit concebido para realzar las líneas de tu anatomía.', zoomTarget: 'full' },
  { number: 4, id: 'cuello', title: 'Estructura de Cuello', subtitle: 'El marco del rostro y sello inconfundible de distinción.', zoomTarget: 'collar' },
  { number: 5, id: 'puno', title: 'Diseño de Puño', subtitle: 'El detalle de muñeca que dialoga con tu reloj o gemelos.', zoomTarget: 'cuff' },
  { number: 6, id: 'bolsillo', title: 'Bolsillo Frontal', subtitle: 'Pureza de líneas minimalista o practicidad sartorial clásica.', zoomTarget: 'pocket' },
  { number: 7, id: 'botones', title: 'Botones & Fornitura', subtitle: 'Botones de nácar natural o metal pulido de alta densidad.', zoomTarget: 'buttons' },
  { number: 8, id: 'bordado', title: 'Sello Personal (Monograma)', subtitle: 'Tu firma de autor bordada artesanalmente en seda.', zoomTarget: 'monogram' },
  { number: 9, id: 'detalles', title: 'Detalles Adicionales', subtitle: 'Parches de ante y emblemas heráldicos opcionales.', zoomTarget: 'elbow' },
  { number: 10, id: 'medidas', title: 'El Ajuste Perfecto', subtitle: 'Medidas anatómicas precisas o equivalencias estándar.', zoomTarget: 'full' },
];

export const FABRICS: FabricOption[] = [
  { id: 'lino-biella', name: 'Lino Italiano Biella', category: 'Lino Puro', patternType: 'solid', primaryColor: '#EBE5D8', description: 'Fibra noble de 160 g/m², caída fresca y natural.' },
  { id: 'popelin-suizo', name: 'Popelín Suizo 140/2', category: 'Alta Densidad', patternType: 'solid', primaryColor: '#FFFFFF', description: 'Hilado fino a dos cabos, textura sedosa impecable.' },
  { id: 'algodon-giza', name: 'Algodón Egipcio Giza 87', category: 'Fibras Extra-Largas', patternType: 'solid', primaryColor: '#F4F4F6', description: 'Brillo sutil natural, máxima suavidad al contacto.' },
  { id: 'oxford-pinpoint', name: 'Oxford Royal Pinpoint', category: 'Canasta Refinada', patternType: 'oxford', primaryColor: '#E2E8F0', secondaryColor: '#94A3B8', description: 'Estructura robusta formal con resistencia al arrugado.' },
  { id: 'twill-imperial', name: 'Twill Retorcido', category: 'Trama Diagonal', patternType: 'solid', primaryColor: '#F8FAFC', description: 'Líneas diagonales sutiles y cuerpo majestuoso.' },
  { id: 'rayas-bengala-azul', name: 'Rayas Bengala Royal', category: 'Estampado Clásico', patternType: 'stripes', primaryColor: '#FFFFFF', secondaryColor: '#1E3A8A', description: 'Rayas verticales de 2mm en azul marino noble.' },
  { id: 'rayas-finas-rojo', name: 'Rayas Finas Marvel', category: 'Línea de Autor', patternType: 'stripes', primaryColor: '#FFFFFF', secondaryColor: '#CC0001', description: 'Microrrayas carmesí sobre fondo blanco seda.' },
  { id: 'rayas-londres-gris', name: 'Milrayas Grafito', category: 'Ejecutivo', patternType: 'stripes', primaryColor: '#FFFFFF', secondaryColor: '#475569', description: 'Trazado sutil ideal para contrastar con trajes oscuros.' },
  { id: 'cuadros-vichy-azul', name: 'Vichy Sartorial Azul', category: 'Cuadro Micro', patternType: 'gingham', primaryColor: '#FFFFFF', secondaryColor: '#2563EB', description: 'Elegancia casual refinada de inspiración mediterránea.' },
  { id: 'cuadros-vichy-negro', name: 'Vichy Ópalo Negro', category: 'Contraste Alto', patternType: 'gingham', primaryColor: '#FFFFFF', secondaryColor: '#111827', description: 'Microcuadros geométricos contemporáneos.' },
  { id: 'tartan-royal-navy', name: 'Tartán Escocés Noche', category: 'Herencia Clásica', patternType: 'tartan', primaryColor: '#0F172A', secondaryColor: '#CC0001', description: 'Trama de cuadros profundos con hilo Rojo Marvel.' },
  { id: 'tartan-plata', name: 'Tartán Plata & Carbón', category: 'Nocturno', patternType: 'tartan', primaryColor: '#18181B', secondaryColor: '#E6E7EB', description: 'Composición sobria con detalles en cromo pulido.' },
  { id: 'oxford-azul-cielo', name: 'Oxford Cielo Suave', category: 'Canasta Refinada', patternType: 'oxford', primaryColor: '#DBEAFE', secondaryColor: '#3B82F6', description: 'Textura tridimensional en azul cielo clásico.' },
  { id: 'seersucker-blanco', name: 'Seersucker Relieve', category: 'Ondulado Ligero', patternType: 'stripes', primaryColor: '#F1F5F9', secondaryColor: '#CBD5E1', description: 'Microondulación que favorece la termorregulación.' }
];

export const COLORS: ColorOption[] = [
  { id: 'blanco-optico', name: 'Blanco Óptico', hex: '#FFFFFF', description: 'El clásico atemporal e imprescindible.' },
  { id: 'marfil-calido', name: 'Blanco Marfil', hex: '#F7F4EB', description: 'Tono marfil cálido de distinción aristocrática.' },
  { id: 'celeste-imperial', name: 'Celeste Imperial', hex: '#BFDBFE', description: 'El tono más versátil para la alta dirección.' },
  { id: 'azul-real', name: 'Azul Real', hex: '#1D4ED8', description: 'Presencia vibrante con carácter decidido.' },
  { id: 'azul-marino', name: 'Azul Marino Noche', hex: '#0F172A', description: 'Profundidad solemne para veladas y eventos.' },
  { id: 'gris-perla', name: 'Gris Perla', hex: '#E2E8F0', description: 'Matiz cromo suave de gran sofisticación.' },
  { id: 'antracita', name: 'Gris Antracita', hex: '#334155', description: 'Tonalidad grafito para estética contemporánea.' },
  { id: 'negro-opalo', name: 'Negro Profundo', hex: '#0A0A0A', description: 'Elegancia absoluta y sobriedad nocturna.' },
  { id: 'rosa-pastel', name: 'Rosa Pálido', hex: '#FCE7F3', description: 'Destello sutil que aporta luz al rostro.' },
  { id: 'verde-salvia', name: 'Verde Salvia', hex: '#D1FAE5', description: 'Frescura orgánica de inspiración toscana.' },
  { id: 'lavanda', name: 'Lavanda Suave', hex: '#EDE9FE', description: 'Matiz noble de orígenes británicos.' },
  { id: 'rojo-marvel', name: 'Rojo Marvel Firma', hex: '#CC0001', description: 'La identidad audaz de Marvel Sastrería.' }
];

export const FITS: FitOption[] = [
  {
    id: 'slim',
    name: 'Slim Fit',
    tagline: 'Definición Escultural',
    description: 'Pinzas traseras que abrazan el torso y afinan la cintura con precisión anatómica.'
  },
  {
    id: 'regular',
    name: 'Regular Fit',
    tagline: 'Equilibrio Sartorial',
    description: 'Caída limpia con holgura estratégica para un porte distinguido y total libertad de movimiento.'
  },
  {
    id: 'clasico',
    name: 'Corte Clásico',
    tagline: 'Amplitud Tradicional',
    description: 'Construcción desahogada con pliegues dorsales para máxima comodidad formal.'
  }
];

export const COLLARS: CollarOption[] = [
  { id: 'italiano', name: 'Cuello Italiano', description: 'Apertura amplia y estilizada, ideal para corbatas de seda o porte desanudado.' },
  { id: 'button-down', name: 'Button-Down Sastre', description: 'Botones discretos con caída en rollo que no pierde su compostura.' },
  { id: 'cutaway', name: 'Cutaway Extremo', description: 'Puntas muy abiertas que revelan el nudo con audacia y modernidad.' },
  { id: 'mao', name: 'Cuello Mao', description: 'Banda erguida de 3.2 cm, minimalismo puro de inspiración cosmopolita.' },
  { id: 'frances', name: 'Francés Clásico', description: 'Proporciones sobrias y simétricas, el pilar de la etiqueta formal.' },
  { id: 'pin-collar', name: 'Pin Collar', description: 'Ojalillos para pasador metálico que eleva el nudo de la corbata.' }
];

export const CUFFS: CuffOption[] = [
  { id: 'redondo-simple', name: 'Redondo Simple', description: 'Esquinas redondeadas con botón de nácar, perfecto para uso diario de lujo.' },
  { id: 'cuadrado-simple', name: 'Cuadrado Simple', description: 'Corte recto y anguloso de impronta limpia y moderna.' },
  { id: 'doble-frances', name: 'Doble para Gemelos', description: 'Doble vuelta de tejido noble diseñada para lucir mancuernas preciosas.' },
  { id: 'redondo-doble', name: 'Redondo 2 Botones', description: 'Ajuste anatómico alargado a la muñeca con dos botones paralelos.' }
];

export const POCKETS: PocketOption[] = [
  { id: 'sin-bolsillo', name: 'Sin Bolsillo', description: 'Línea despejada y pureza formal ininterrumpida.' },
  { id: 'con-bolsillo', name: 'Con Bolsillo de Parche', description: 'Bolsillo sastre en el pecho izquierdo con remate en ángulo.' }
];

export const BUTTONS: ButtonOption[] = [
  { id: 'nacar-blanco', name: 'Nácar Blanco Natural', colorHex: '#F8FAFC', ringHex: '#E2E8F0', description: 'Madreperla pulida con irisaciones brillantes.' },
  { id: 'nacar-crudo', name: 'Nácar Crudo Vintage', colorHex: '#EFE9D9', ringHex: '#D8CEBA', description: 'Tono hueso con carácter orgánico cálido.' },
  { id: 'negro', name: 'Cuerno Negro Ópalo', colorHex: '#18181B', ringHex: '#27272A', description: 'Acabado azabache mate de máxima densidad.' },
  { id: 'plata-cromo', name: 'Plata / Cromo Pulido', colorHex: '#E6E7EB', ringHex: '#CBD5E1', description: 'Botón metálico labrado con brillo acerado.' },
  { id: 'gris', name: 'Nácar Gris Ahumado', colorHex: '#94A3B8', ringHex: '#64748B', description: 'Reflejos platinados para trajes de corte moderno.' },
  { id: 'dorado', name: 'Oro Satinado', colorHex: '#F59E0B', ringHex: '#D97706', description: 'Detalle suntuoso de inspiración heráldica.' }
];

export const THREAD_COLORS = [
  { name: 'Rojo Marvel', hex: '#CC0001' },
  { name: 'Plata Cromo', hex: '#E6E7EB' },
  { name: 'Oro Antiguo', hex: '#D97706' },
  { name: 'Azul Noche', hex: '#1E3A8A' },
  { name: 'Blanco Seda', hex: '#FFFFFF' },
  { name: 'Negro Ópalo', hex: '#18181B' },
  { name: 'Burdeos', hex: '#881337' },
  { name: 'Verde Esmeralda', hex: '#047857' },
  { name: 'Champán', hex: '#FDE68A' },
  { name: 'Grafito', hex: '#4B5563' },
  { name: 'Azul Cielo', hex: '#38BDF8' },
  { name: 'Lavanda', hex: '#A855F7' }
];

export const INSIGNIA_SHAPES: { id: InsigniaShape; name: string }[] = [
  { id: 'escudo', name: 'Escudo Nobiliario' },
  { id: 'circulo', name: 'Sello Circular' },
  { id: 'estrella', name: 'Estrella 8 Puntas' },
  { id: 'ancla', name: 'Ancla Náutica' },
  { id: 'rombo', name: 'Rombo Geométrico' },
  { id: 'cruz', name: 'Cruz Paté' }
];

export const STANDARD_SIZES: { size: StandardSize; neck: number; chest: number; waist: number; sleeve: number; length: number }[] = [
  { size: 'S', neck: 38, chest: 96, waist: 86, sleeve: 63, length: 76 },
  { size: 'M', neck: 40, chest: 104, waist: 94, sleeve: 64, length: 78 },
  { size: 'L', neck: 42, chest: 112, waist: 102, sleeve: 65, length: 80 },
  { size: 'XL', neck: 44, chest: 120, waist: 110, sleeve: 66, length: 82 },
  { size: 'XXL', neck: 46, chest: 128, waist: 118, sleeve: 67, length: 84 },
];

// ============================================================================
// SANITIZATION HELPER (Prevents XSS in direct DOM manipulations)
// ============================================================================
function sanitizeText(input: string): string {
  return input.replace(/[<>&"']/g, '');
}

// ============================================================================
// MAIN MODULE EXPORT: mountShirtConfigurator
// ============================================================================
export function mountShirtConfigurator(
  container: HTMLElement,
  options: ShirtConfiguratorOptions = {}
): ShirtConfiguratorInstance {
  // Validate container
  if (!container) {
    throw new Error('mountShirtConfigurator: Un contenedor válido es requerido.');
  }

  // Internal State
  let currentStep: StepNumber = 1;
  const completedSteps = new Set<StepNumber>();
  let isBackView = false;
  let isMobilePreviewOpen = true;

  // Configuration model initialized with defaults
  const config: ShirtConfig = {
    tejido: options.initialConfig?.tejido || FABRICS[0],
    color: options.initialConfig?.color || COLORS[0],
    corte: options.initialConfig?.corte || 'slim',
    cuello: options.initialConfig?.cuello || 'italiano',
    puño: options.initialConfig?.puño || 'redondo-simple',
    bolsillo: options.initialConfig?.bolsillo || 'sin-bolsillo',
    botones: options.initialConfig?.botones || 'nacar-blanco',
    bordado: options.initialConfig?.bordado || {
      texto: 'MR',
      posicion: 'puno',
      fuente: 'serif-clasico',
      colorHilo: '#CC0001' // Rojo Marvel default
    },
    parcheCodo: options.initialConfig?.parcheCodo || {
      activo: false,
      color: '#334155'
    },
    insignia: options.initialConfig?.insignia || null,
    medidas: options.initialConfig?.medidas || {
      tipo: 'estandar',
      tallaEstandar: 'M',
      valoresPersonalizados: {
        cuello: 40,
        pecho: 104,
        cintura: 94,
        manga: 64,
        largoCamisa: 78
      }
    }
  };

  // Root wrapper
  container.innerHTML = '';
  const root = document.createElement('div');
  root.className = 'mr-configurator';
  root.setAttribute('role', 'region');
  root.setAttribute('aria-label', 'Configurador de Camisas Bespoke Marvel Sastrería');
  container.appendChild(root);

  // 1. Build Header
  const headerEl = document.createElement('header');
  headerEl.className = 'mr-configurator__header';
  
  // placeholder: {{LOGO_SRC}} will be replaced by user or options.logoSrc
  const logoSrc = options.logoSrc || '{{LOGO_SRC}}';

  headerEl.innerHTML = `
    <div class="mr-configurator__brand">
      <div class="mr-configurator__logo-box">
        <img src="${logoSrc}" alt="Logo MR" class="mr-configurator__logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <span class="mr-configurator__logo-fallback" style="display: none;">
          <span class="mr-configurator__logo-m">M</span><span class="mr-configurator__logo-r">R</span>
        </span>
      </div>
      <div class="mr-configurator__brand-text">
        <h2 class="mr-configurator__brand-title">Marvel Sastrería</h2>
        <span class="mr-configurator__brand-subtitle">Alta Camisería Bespoke</span>
      </div>
    </div>
    <div class="mr-configurator__tagline">
      "No vendemos tallas, creamos prendas únicas."
    </div>
  `;
  root.appendChild(headerEl);

  // 2. Build Mobile Preview Collapsible Bar
  const mobileToggle = document.createElement('button');
  mobileToggle.className = 'mr-configurator__mobile-preview-toggle';
  mobileToggle.type = 'button';
  mobileToggle.innerHTML = `
    <span>Vista Previa en Vivo</span>
    <span id="mr-mobile-toggle-indicator">▼</span>
  `;
  root.appendChild(mobileToggle);

  // 3. Build 3-Column Body
  const bodyEl = document.createElement('div');
  bodyEl.className = 'mr-configurator__body';
  root.appendChild(bodyEl);

  // Left Sidebar
  const sidebarEl = document.createElement('aside');
  sidebarEl.className = 'mr-configurator__sidebar';
  sidebarEl.setAttribute('aria-label', 'Pasos de configuración');
  sidebarEl.innerHTML = `
    <div class="mr-configurator__sidebar-title">Proceso de Creación</div>
    <ul class="mr-configurator__step-list" role="list"></ul>
  `;
  bodyEl.appendChild(sidebarEl);

  // Center Main
  const mainEl = document.createElement('section');
  mainEl.className = 'mr-configurator__main';
  mainEl.setAttribute('aria-live', 'polite');
  bodyEl.appendChild(mainEl);

  // Right Preview
  const previewColEl = document.createElement('aside');
  previewColEl.className = 'mr-configurator__preview-col';
  previewColEl.setAttribute('aria-label', 'Visualizador de camisa en tiempo real');
  previewColEl.innerHTML = `
    <div class="mr-configurator__preview-header">
      <span class="mr-configurator__preview-title">Maniquí Virtual</span>
      <div class="mr-configurator__view-toggle" role="group" aria-label="Ángulo de vista">
        <button type="button" class="mr-configurator__view-btn" id="mr-view-front" aria-pressed="true">Frente</button>
        <button type="button" class="mr-configurator__view-btn" id="mr-view-back" aria-pressed="false">Espalda</button>
      </div>
    </div>
    <div class="mr-configurator__mannequin-container" id="mr-mannequin-box" data-zoom="full">
      <!-- SVG Mannequin dynamically injected -->
      <div id="mr-svg-wrapper" class="mr-configurator__svg-mannequin"></div>
      <div class="mr-configurator__preview-badge">
        <span class="mr-configurator__preview-badge-dot"></span>
        <span id="mr-preview-status-text">Tiempo Real</span>
      </div>
    </div>
    <div class="mr-configurator__zoom-hint" id="mr-zoom-hint">
      Vista global de proporciones
    </div>
  `;
  bodyEl.appendChild(previewColEl);

  // Handle Mobile Toggle
  mobileToggle.addEventListener('click', () => {
    isMobilePreviewOpen = !isMobilePreviewOpen;
    previewColEl.style.display = isMobilePreviewOpen ? 'flex' : 'none';
    const ind = mobileToggle.querySelector('#mr-mobile-toggle-indicator');
    if (ind) ind.textContent = isMobilePreviewOpen ? '▲' : '▼';
  });

  // Handle Front / Back View Toggle
  const btnFront = previewColEl.querySelector('#mr-view-front') as HTMLButtonElement;
  const btnBack = previewColEl.querySelector('#mr-view-back') as HTMLButtonElement;

  btnFront.addEventListener('click', () => {
    isBackView = false;
    btnFront.setAttribute('aria-pressed', 'true');
    btnBack.setAttribute('aria-pressed', 'false');
    renderMannequin();
  });

  btnBack.addEventListener('click', () => {
    isBackView = true;
    btnFront.setAttribute('aria-pressed', 'false');
    btnBack.setAttribute('aria-pressed', 'true');
    renderMannequin();
  });

  // ==========================================================================
  // RENDER FUNCTIONS
  // ==========================================================================

  function renderSidebar(): void {
    const listEl = sidebarEl.querySelector('.mr-configurator__step-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    STEPS.forEach((step) => {
      const isCurrent = step.number === currentStep;
      const isCompleted = completedSteps.has(step.number);
      const isAllowed = isCompleted || step.number === currentStep || step.number === Math.min(...Array.from(completedSteps).concat([1])) || step.number <= (Math.max(0, ...Array.from(completedSteps)) + 1);

      const li = document.createElement('li');
      li.className = `mr-configurator__step-item ${
        isCurrent ? 'mr-configurator__step-item--active' : ''
      } ${isCompleted ? 'mr-configurator__step-item--completed' : ''}`;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mr-configurator__step-btn';
      btn.disabled = !isAllowed;
      btn.setAttribute('aria-current', isCurrent ? 'step' : 'false');

      btn.innerHTML = `
        <span class="mr-configurator__step-badge">${step.number}</span>
        <div class="mr-configurator__step-text">
          <span class="mr-configurator__step-name">${step.title}</span>
        </div>
        <svg class="mr-configurator__step-status-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
      `;

      btn.addEventListener('click', () => {
        if (isAllowed) {
          goToStep(step.number);
        }
      });

      li.appendChild(btn);
      listEl.appendChild(li);
    });
  }

  function renderStepContent(): void {
    mainEl.innerHTML = '';
    const stepDef = STEPS[currentStep - 1];

    // Zoom setup
    const mannequinBox = previewColEl.querySelector('#mr-mannequin-box') as HTMLElement;
    const zoomHint = previewColEl.querySelector('#mr-zoom-hint') as HTMLElement;
    if (mannequinBox) {
      mannequinBox.setAttribute('data-zoom', stepDef.zoomTarget);
    }
    if (zoomHint) {
      const zoomDescriptions: Record<string, string> = {
        full: 'Vista general de proporciones y silueta',
        collar: 'Detalle de cuello y apertura frontal',
        cuff: 'Ajuste de muñeca y confección de puño',
        pocket: 'Posición anatómica sobre el pecho',
        buttons: 'Fornitura y textura de botones',
        monogram: 'Inspección de bordado en seda',
        elbow: 'Refuerzo de manga y coderas'
      };
      zoomHint.textContent = zoomDescriptions[stepDef.zoomTarget] || 'Vista en tiempo real';
    }

    // Step Header
    const stepHeader = document.createElement('div');
    stepHeader.className = 'mr-configurator__step-header';
    stepHeader.innerHTML = `
      <span class="mr-configurator__step-eyebrow">Paso ${stepDef.number} de 10 • ${stepDef.id.toUpperCase()}</span>
      <h3 class="mr-configurator__step-title">${stepDef.title}</h3>
      <p class="mr-configurator__step-subtitle">${stepDef.subtitle}</p>
    `;
    mainEl.appendChild(stepHeader);

    // Options Container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'mr-configurator__options-area';
    mainEl.appendChild(optionsContainer);

    // Render corresponding step options
    switch (currentStep) {
      case 1: renderFabricStep(optionsContainer); break;
      case 2: renderColorStep(optionsContainer); break;
      case 3: renderFitStep(optionsContainer); break;
      case 4: renderCollarStep(optionsContainer); break;
      case 5: renderCuffStep(optionsContainer); break;
      case 6: renderPocketStep(optionsContainer); break;
      case 7: renderButtonsStep(optionsContainer); break;
      case 8: renderMonogramStep(optionsContainer); break;
      case 9: renderDetailsStep(optionsContainer); break;
      case 10: renderMeasurementsStep(optionsContainer); break;
    }

    // Navigation Buttons (Prev / Next)
    renderNavButtons();
  }

  // ==========================================================================
  // STEP BUILDERS
  // ==========================================================================

  // Step 1: Fabric
  function renderFabricStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'mr-configurator__fabric-grid';
    grid.setAttribute('role', 'radiogroup');
    grid.setAttribute('aria-label', 'Selecciona el tejido');

    FABRICS.forEach((fab) => {
      const isSelected = config.tejido.id === fab.id;
      const card = document.createElement('div');
      card.className = 'mr-configurator__fabric-card';
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.setAttribute('tabindex', isSelected ? '0' : '-1');
      card.setAttribute('data-fabric-id', fab.id);

      // Pattern classes
      let swatchPatternClass = '';
      let styleVars = `--pat-bg: ${fab.primaryColor};`;
      if (fab.patternType === 'stripes') {
        swatchPatternClass = 'mr-pattern-stripes';
        styleVars += ` --pat-fg: ${fab.secondaryColor || '#CC0001'};`;
      } else if (fab.patternType === 'gingham') {
        swatchPatternClass = 'mr-pattern-gingham';
        styleVars += ` --pat-fg: ${fab.secondaryColor || 'rgba(0,0,0,0.3)'};`;
      } else if (fab.patternType === 'tartan') {
        swatchPatternClass = 'mr-pattern-tartan';
      } else if (fab.patternType === 'oxford') {
        swatchPatternClass = 'mr-pattern-oxford';
        styleVars += ` --pat-fg: ${fab.secondaryColor || '#94a3b8'};`;
      } else {
        styleVars += ` background-color: ${fab.primaryColor};`;
      }

      card.innerHTML = `
        <div class="mr-configurator__fabric-swatch ${swatchPatternClass}" style="${styleVars}"></div>
        <span class="mr-configurator__fabric-name">${fab.name}</span>
        <span class="mr-configurator__fabric-category">${fab.category}</span>
      `;

      const selectFabric = () => {
        config.tejido = fab;
        grid.querySelectorAll<HTMLElement>('.mr-configurator__fabric-card').forEach((c) => {
          const active = c.getAttribute('data-fabric-id') === fab.id;
          c.setAttribute('aria-checked', active ? 'true' : 'false');
          c.setAttribute('tabindex', active ? '0' : '-1');
        });
        notifyChange();
        renderMannequin();
      };

      card.addEventListener('click', selectFabric);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectFabric();
        }
      });

      grid.appendChild(card);
    });

    parent.appendChild(grid);
  }

  // Step 2: Color
  function renderColorStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'mr-configurator__color-grid';
    grid.setAttribute('role', 'radiogroup');
    grid.setAttribute('aria-label', 'Selecciona el color base');

    COLORS.forEach((col) => {
      const isSelected = config.color.id === col.id;
      const card = document.createElement('div');
      card.className = 'mr-configurator__color-card';
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.setAttribute('tabindex', isSelected ? '0' : '-1');
      card.setAttribute('data-color-id', col.id);

      card.innerHTML = `
        <div class="mr-configurator__color-dot" style="background-color: ${col.hex};"></div>
        <span class="mr-configurator__color-name">${col.name}</span>
      `;

      const selectColor = () => {
        config.color = col;
        grid.querySelectorAll<HTMLElement>('.mr-configurator__color-card').forEach((c) => {
          const active = c.getAttribute('data-color-id') === col.id;
          c.setAttribute('aria-checked', active ? 'true' : 'false');
          c.setAttribute('tabindex', active ? '0' : '-1');
        });
        notifyChange();
        renderMannequin();
      };

      card.addEventListener('click', selectColor);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectColor();
        }
      });

      grid.appendChild(card);
    });

    parent.appendChild(grid);
  }

  // Step 3: Fit
  function renderFitStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'mr-configurator__fit-grid';
    grid.setAttribute('role', 'radiogroup');
    grid.setAttribute('aria-label', 'Selecciona el corte anatómico');

    FITS.forEach((fit) => {
      const isSelected = config.corte === fit.id;
      const card = document.createElement('div');
      card.className = 'mr-configurator__fit-card';
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.setAttribute('tabindex', isSelected ? '0' : '-1');
      card.setAttribute('data-fit-id', fit.id);

      // SVG silhouette representation of fit
      const waistWidth = fit.id === 'slim' ? 36 : fit.id === 'regular' ? 44 : 52;
      const silhouetteSvg = `
        <svg viewBox="0 0 100 120" class="mr-configurator__fit-silhouette" fill="none" stroke="currentColor">
          <!-- Front silhouette -->
          <path d="M25,20 L38,20 L45,30 L55,30 L62,20 L75,20 L85,42 L72,46 L70,105 L30,105 L28,46 L15,42 Z" stroke="#4B5563" stroke-width="1.5" fill="#18181B" />
          <!-- Torso contour lines -->
          <path class="mr-fit-contour" d="M30,46 Q${50 - waistWidth / 2},75 30,105" stroke="${isSelected ? '#CC0001' : '#E6E7EB'}" stroke-width="2" />
          <path class="mr-fit-contour" d="M70,46 Q${50 + waistWidth / 2},75 70,105" stroke="${isSelected ? '#CC0001' : '#E6E7EB'}" stroke-width="2" />
        </svg>
      `;

      card.innerHTML = `
        ${silhouetteSvg}
        <h4 class="mr-configurator__fit-name">${fit.name}</h4>
        <span class="mr-configurator__fit-tagline">${fit.tagline}</span>
        <p class="mr-configurator__fit-desc">${fit.description}</p>
      `;

      const selectFit = () => {
        config.corte = fit.id;
        grid.querySelectorAll<HTMLElement>('.mr-configurator__fit-card').forEach((c) => {
          const active = c.getAttribute('data-fit-id') === fit.id;
          c.setAttribute('aria-checked', active ? 'true' : 'false');
          c.setAttribute('tabindex', active ? '0' : '-1');
          c.querySelectorAll<SVGPathElement>('.mr-fit-contour').forEach((p) => {
            p.setAttribute('stroke', active ? '#CC0001' : '#E6E7EB');
          });
        });
        notifyChange();
        renderMannequin();
      };

      card.addEventListener('click', selectFit);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectFit();
        }
      });

      grid.appendChild(card);
    });

    parent.appendChild(grid);
  }

  // Step 4: Collar
  function renderCollarStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'mr-configurator__svg-grid';
    grid.setAttribute('role', 'radiogroup');
    grid.setAttribute('aria-label', 'Selecciona el cuello');

    COLLARS.forEach((col) => {
      const isSelected = config.cuello === col.id;
      const card = document.createElement('div');
      card.className = 'mr-configurator__icon-card';
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.setAttribute('tabindex', isSelected ? '0' : '-1');
      card.setAttribute('data-collar-id', col.id);

      // Collar SVG icon generator
      let collarPath = 'M15,45 L35,25 L65,25 L85,45 L60,52 L50,35 L40,52 Z';
      if (col.id === 'cutaway') {
        collarPath = 'M10,40 L35,25 L65,25 L90,40 L65,48 L50,35 L35,48 Z';
      } else if (col.id === 'button-down') {
        collarPath = 'M20,52 L35,25 L65,25 L80,52 L60,50 L50,35 L40,50 Z';
      } else if (col.id === 'mao') {
        collarPath = 'M25,32 L75,32 L75,42 L25,42 Z';
      } else if (col.id === 'frances') {
        collarPath = 'M24,56 L35,25 L65,25 L76,56 L58,48 L50,35 L42,48 Z';
      } else if (col.id === 'pin-collar') {
        collarPath = 'M22,54 L35,25 L65,25 L78,54 L60,48 L50,35 L40,48 Z';
      }

      card.innerHTML = `
        <div class="mr-configurator__icon-svg-wrapper">
          <svg viewBox="0 0 100 80" width="60" height="48" fill="none" stroke="currentColor" stroke-width="2">
            <path d="${collarPath}" stroke-linejoin="round" fill="rgba(230,231,235,0.05)" />
            ${col.id === 'pin-collar' ? '<line x1="38" y1="44" x2="62" y2="44" stroke="#E6E7EB" stroke-width="2.5"/>' : ''}
            ${col.id === 'button-down' ? '<circle cx="34" cy="48" r="1.5" fill="#E6E7EB"/><circle cx="66" cy="48" r="1.5" fill="#E6E7EB"/>' : ''}
          </svg>
        </div>
        <span class="mr-configurator__icon-label">${col.name}</span>
        <span class="mr-configurator__icon-sub">${col.description.substring(0, 48)}...</span>
      `;

      const selectCollar = () => {
        config.cuello = col.id;
        grid.querySelectorAll<HTMLElement>('.mr-configurator__icon-card').forEach((c) => {
          const active = c.getAttribute('data-collar-id') === col.id;
          c.setAttribute('aria-checked', active ? 'true' : 'false');
          c.setAttribute('tabindex', active ? '0' : '-1');
        });
        notifyChange();
        renderMannequin();
      };

      card.addEventListener('click', selectCollar);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectCollar();
        }
      });

      grid.appendChild(card);
    });

    parent.appendChild(grid);
  }

  // Step 5: Cuff
  function renderCuffStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'mr-configurator__svg-grid';
    grid.setAttribute('role', 'radiogroup');
    grid.setAttribute('aria-label', 'Selecciona el puño');

    CUFFS.forEach((cuff) => {
      const isSelected = config.puño === cuff.id;
      const card = document.createElement('div');
      card.className = 'mr-configurator__icon-card';
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.setAttribute('tabindex', isSelected ? '0' : '-1');
      card.setAttribute('data-cuff-id', cuff.id);

      card.innerHTML = `
        <div class="mr-configurator__icon-svg-wrapper">
          <svg viewBox="0 0 100 80" width="60" height="48" fill="none" stroke="currentColor" stroke-width="2">
            ${
              cuff.id === 'doble-frances'
                ? '<rect x="20" y="20" width="60" height="42" rx="2" fill="rgba(230,231,235,0.05)" /><line x1="20" y1="40" x2="80" y2="40" stroke="#CC0001" stroke-dasharray="2 2"/><circle cx="50" cy="50" r="3" fill="#E6E7EB"/>'
                : cuff.id === 'cuadrado-simple'
                ? '<rect x="20" y="25" width="60" height="34" fill="rgba(230,231,235,0.05)"/><circle cx="68" cy="42" r="2.5" fill="#E6E7EB"/>'
                : cuff.id === 'redondo-doble'
                ? '<rect x="20" y="20" width="60" height="44" rx="8" fill="rgba(230,231,235,0.05)"/><circle cx="68" cy="32" r="2.5" fill="#E6E7EB"/><circle cx="68" cy="50" r="2.5" fill="#E6E7EB"/>'
                : '<rect x="20" y="25" width="60" height="34" rx="6" fill="rgba(230,231,235,0.05)"/><circle cx="68" cy="42" r="2.5" fill="#E6E7EB"/>'
            }
          </svg>
        </div>
        <span class="mr-configurator__icon-label">${cuff.name}</span>
        <span class="mr-configurator__icon-sub">${cuff.description.substring(0, 48)}...</span>
      `;

      const selectCuff = () => {
        config.puño = cuff.id;
        grid.querySelectorAll<HTMLElement>('.mr-configurator__icon-card').forEach((c) => {
          const active = c.getAttribute('data-cuff-id') === cuff.id;
          c.setAttribute('aria-checked', active ? 'true' : 'false');
          c.setAttribute('tabindex', active ? '0' : '-1');
        });
        notifyChange();
        renderMannequin();
      };

      card.addEventListener('click', selectCuff);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectCuff();
        }
      });

      grid.appendChild(card);
    });

    parent.appendChild(grid);
  }

  // Step 6: Pocket
  function renderPocketStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'mr-configurator__pocket-grid';
    grid.setAttribute('role', 'radiogroup');
    grid.setAttribute('aria-label', 'Selecciona la opción de bolsillo');

    POCKETS.forEach((pkt) => {
      const isSelected = config.bolsillo === pkt.id;
      const card = document.createElement('div');
      card.className = 'mr-configurator__pocket-card';
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.setAttribute('tabindex', isSelected ? '0' : '-1');
      card.setAttribute('data-pocket-id', pkt.id);

      const isPocket = pkt.id === 'con-bolsillo';
      const previewSvg = `
        <svg viewBox="0 0 100 100" class="mr-configurator__pocket-preview" fill="none" stroke="currentColor">
          <path d="M15,15 L85,15 L85,85 L15,85 Z" fill="#171717" stroke="#333" stroke-width="1.5" />
          ${
            isPocket
              ? '<path d="M30,30 L70,30 L70,62 L50,75 L30,62 Z" fill="#262626" stroke="#CC0001" stroke-width="2"/>'
              : '<line x1="30" y1="50" x2="70" y2="50" stroke="#4B5563" stroke-width="1.5" stroke-dasharray="4 4"/>'
          }
        </svg>
      `;

      card.innerHTML = `
        ${previewSvg}
        <h4 class="mr-configurator__pocket-name">${pkt.name}</h4>
        <p class="mr-configurator__pocket-desc">${pkt.description}</p>
      `;

      const selectPocket = () => {
        config.bolsillo = pkt.id;
        grid.querySelectorAll<HTMLElement>('.mr-configurator__pocket-card').forEach((c) => {
          const active = c.getAttribute('data-pocket-id') === pkt.id;
          c.setAttribute('aria-checked', active ? 'true' : 'false');
          c.setAttribute('tabindex', active ? '0' : '-1');
        });
        notifyChange();
        renderMannequin();
      };

      card.addEventListener('click', selectPocket);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectPocket();
        }
      });

      grid.appendChild(card);
    });

    parent.appendChild(grid);
  }

  // Step 7: Buttons
  function renderButtonsStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'mr-configurator__button-grid';
    grid.setAttribute('role', 'radiogroup');
    grid.setAttribute('aria-label', 'Selecciona la fornitura de botones');

    BUTTONS.forEach((btn) => {
      const isSelected = config.botones === btn.id;
      const card = document.createElement('div');
      card.className = 'mr-configurator__button-card';
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.setAttribute('tabindex', isSelected ? '0' : '-1');
      card.setAttribute('data-btn-id', btn.id);

      card.innerHTML = `
        <div class="mr-configurator__button-disc" style="background: radial-gradient(circle, ${btn.colorHex} 65%, ${btn.ringHex} 100%);">
          <div class="mr-configurator__button-holes">
            <span class="mr-configurator__button-hole"></span>
            <span class="mr-configurator__button-hole"></span>
            <span class="mr-configurator__button-hole"></span>
            <span class="mr-configurator__button-hole"></span>
          </div>
        </div>
        <span class="mr-configurator__button-name">${btn.name}</span>
      `;

      const selectButton = () => {
        config.botones = btn.id;
        grid.querySelectorAll<HTMLElement>('.mr-configurator__button-card').forEach((c) => {
          const active = c.getAttribute('data-btn-id') === btn.id;
          c.setAttribute('aria-checked', active ? 'true' : 'false');
          c.setAttribute('tabindex', active ? '0' : '-1');
        });
        notifyChange();
        renderMannequin();
      };

      card.addEventListener('click', selectButton);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectButton();
        }
      });

      grid.appendChild(card);
    });

    parent.appendChild(grid);
  }

  // Step 8: Monogram / Initials
  function renderMonogramStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'mr-configurator__monogram-section';

    // 1. Text Field (Max 3 chars, auto uppercase, sanitized)
    const textGroup = document.createElement('div');
    textGroup.className = 'mr-configurator__field-group';
    textGroup.innerHTML = `
      <label class="mr-configurator__field-label" for="mr-monogram-input">
        Tus Iniciales de Autor (Máx. 3 Caracteres):
      </label>
    `;
    const input = document.createElement('input');
    input.id = 'mr-monogram-input';
    input.type = 'text';
    input.maxLength = 3;
    input.className = 'mr-configurator__input-text';
    input.value = config.bordado.texto;
    input.placeholder = 'MR';

    input.addEventListener('input', () => {
      const sanitized = sanitizeText(input.value.toUpperCase());
      input.value = sanitized;
      config.bordado.texto = sanitized;
      notifyChange();
      renderMannequin();
    });
    textGroup.appendChild(input);
    container.appendChild(textGroup);

    // 2. Position Selector (Puño / Pecho / Ninguno)
    const posGroup = document.createElement('div');
    posGroup.className = 'mr-configurator__field-group';
    posGroup.innerHTML = `<label class="mr-configurator__field-label">Ubicación del Bordado:</label>`;
    const posSegment = document.createElement('div');
    posSegment.className = 'mr-configurator__segmented-control';
    posSegment.setAttribute('role', 'radiogroup');

    const positions: { id: MonogramConfig['posicion']; label: string }[] = [
      { id: 'puno', label: 'Puño Izquierdo' },
      { id: 'pecho', label: 'Pecho (5º Botón)' },
      { id: 'ninguno', label: 'Sin Bordado' }
    ];

    positions.forEach((pos) => {
      const isSelected = config.bordado.posicion === pos.id;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mr-configurator__segmented-btn';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      btn.setAttribute('data-pos-id', pos.id);
      btn.textContent = pos.label;

      btn.addEventListener('click', () => {
        config.bordado.posicion = pos.id;
        posSegment.querySelectorAll<HTMLButtonElement>('.mr-configurator__segmented-btn').forEach((b) => {
          b.setAttribute('aria-checked', b.getAttribute('data-pos-id') === pos.id ? 'true' : 'false');
        });
        notifyChange();
        renderMannequin();
      });
      posSegment.appendChild(btn);
    });
    posGroup.appendChild(posSegment);
    container.appendChild(posGroup);

    // 3. Font Styles
    const fontGroup = document.createElement('div');
    fontGroup.className = 'mr-configurator__field-group';
    fontGroup.innerHTML = `<label class="mr-configurator__field-label">Estilo Caligráfico:</label>`;
    const fontSegment = document.createElement('div');
    fontSegment.className = 'mr-configurator__segmented-control';

    const fonts: { id: MonogramConfig['fuente']; label: string }[] = [
      { id: 'serif-clasico', label: 'Serif Tradicional' },
      { id: 'script-cursivo', label: 'Script Cursivo' },
      { id: 'bloque-moderno', label: 'Bloque Moderno' },
      { id: 'gotico-ingles', label: 'Gótico Inglés' }
    ];

    fonts.forEach((f) => {
      const isSelected = config.bordado.fuente === f.id;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mr-configurator__segmented-btn';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      btn.setAttribute('data-font-id', f.id);
      btn.textContent = f.label;

      btn.addEventListener('click', () => {
        config.bordado.fuente = f.id;
        fontSegment.querySelectorAll<HTMLButtonElement>('.mr-configurator__segmented-btn').forEach((b) => {
          b.setAttribute('aria-checked', b.getAttribute('data-font-id') === f.id ? 'true' : 'false');
        });
        notifyChange();
        renderMannequin();
      });
      fontSegment.appendChild(btn);
    });
    fontGroup.appendChild(fontSegment);
    container.appendChild(fontGroup);

    // 4. Thread Colors Grid (12 colors)
    const threadGroup = document.createElement('div');
    threadGroup.className = 'mr-configurator__field-group';
    threadGroup.innerHTML = `<label class="mr-configurator__field-label">Color del Hilo de Seda:</label>`;
    const threadGrid = document.createElement('div');
    threadGrid.className = 'mr-configurator__thread-grid';

    THREAD_COLORS.forEach((th) => {
      const isSelected = config.bordado.colorHilo === th.hex;
      const dot = document.createElement('div');
      dot.className = 'mr-configurator__thread-dot';
      dot.style.backgroundColor = th.hex;
      dot.title = th.name;
      dot.setAttribute('role', 'radio');
      dot.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      dot.setAttribute('data-color-hex', th.hex);

      dot.addEventListener('click', () => {
        config.bordado.colorHilo = th.hex;
        threadGrid.querySelectorAll<HTMLElement>('.mr-configurator__thread-dot').forEach((d) => {
          d.setAttribute('aria-checked', d.getAttribute('data-color-hex') === th.hex ? 'true' : 'false');
        });
        notifyChange();
        renderMannequin();
      });
      threadGrid.appendChild(dot);
    });
    threadGroup.appendChild(threadGrid);
    container.appendChild(threadGroup);

    parent.appendChild(container);
  }

  // Step 9: Additional Details
  function renderDetailsStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const box = document.createElement('div');
    box.className = 'mr-configurator__details-box';

    // (a) Parche de codo
    const elbowSection = document.createElement('div');
    elbowSection.innerHTML = `
      <div class="mr-configurator__toggle-row">
        <div>
          <div class="mr-configurator__toggle-label">Parche de Codo (Coderas en Ante)</div>
          <div class="mr-configurator__toggle-desc">Refuerzo deportivo y vintage en el antebrazo.</div>
        </div>
        <label class="mr-configurator__switch">
          <input type="checkbox" id="mr-elbow-toggle" ${config.parcheCodo.activo ? 'checked' : ''}>
          <span class="mr-configurator__slider"></span>
        </label>
      </div>
    `;

    const toggle = elbowSection.querySelector('#mr-elbow-toggle') as HTMLInputElement;
    toggle.addEventListener('change', () => {
      config.parcheCodo.activo = toggle.checked;
      notifyChange();
      renderDetailsStep(parent);
      renderMannequin();
    });

    if (config.parcheCodo.activo) {
      const colorsDiv = document.createElement('div');
      colorsDiv.style.marginTop = '12px';
      colorsDiv.innerHTML = `<span class="mr-configurator__field-label" style="display:block; margin-bottom:8px;">Tonalidad del Ante:</span>`;
      const colorsSegment = document.createElement('div');
      colorsSegment.className = 'mr-configurator__segmented-control';

      const elbowColors = [
        { name: 'Cuero Tabaco', hex: '#78350F' },
        { name: 'Gris Carbón', hex: '#334155' },
        { name: 'Negro Ópalo', hex: '#0F172A' },
        { name: 'Rojo Marvel', hex: '#CC0001' }
      ];

      elbowColors.forEach((ec) => {
        const isSelected = config.parcheCodo.color === ec.hex;
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'mr-configurator__segmented-btn';
        b.setAttribute('aria-checked', isSelected ? 'true' : 'false');
        b.setAttribute('data-elbow-color', ec.hex);
        b.textContent = ec.name;
        b.addEventListener('click', () => {
          config.parcheCodo.color = ec.hex;
          colorsSegment.querySelectorAll<HTMLButtonElement>('.mr-configurator__segmented-btn').forEach((btn) => {
            btn.setAttribute('aria-checked', btn.getAttribute('data-elbow-color') === ec.hex ? 'true' : 'false');
          });
          notifyChange();
          renderMannequin();
        });
        colorsSegment.appendChild(b);
      });
      colorsDiv.appendChild(colorsSegment);
      elbowSection.appendChild(colorsDiv);
    }
    box.appendChild(elbowSection);

    // (b) Insignia opcional
    const insigniaSection = document.createElement('div');
    insigniaSection.innerHTML = `
      <div class="mr-configurator__field-group">
        <label class="mr-configurator__field-label">Emblema o Insignia Bordada (Opcional):</label>
        <p class="mr-configurator__toggle-desc" style="margin-bottom: 12px;">Elige un símbolo heráldico en el bajo faldón o pecho.</p>
      </div>
    `;
    const insGrid = document.createElement('div');
    insGrid.className = 'mr-configurator__insignia-grid';

    // None option
    const noneCard = document.createElement('div');
    noneCard.className = 'mr-configurator__insignia-card';
    noneCard.setAttribute('aria-checked', config.insignia === null ? 'true' : 'false');
    noneCard.setAttribute('data-ins-id', 'none');
    noneCard.innerHTML = `
      <span style="font-size:20px; line-height:30px;">—</span>
      <span style="font-size:10px; font-weight:600; margin-top:4px;">Ninguna</span>
    `;
    noneCard.addEventListener('click', () => {
      config.insignia = null;
      insGrid.querySelectorAll<HTMLElement>('.mr-configurator__insignia-card').forEach((c) => {
        c.setAttribute('aria-checked', c.getAttribute('data-ins-id') === 'none' ? 'true' : 'false');
      });
      notifyChange();
      renderMannequin();
    });
    insGrid.appendChild(noneCard);

    INSIGNIA_SHAPES.forEach((ins) => {
      const isSelected = config.insignia?.forma === ins.id;
      const card = document.createElement('div');
      card.className = 'mr-configurator__insignia-card';
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.setAttribute('data-ins-id', ins.id);

      card.innerHTML = `
        <div style="width:28px; height:28px; display:flex; align-items:center; justify-content:center; color:${isSelected ? '#CC0001' : '#E6E7EB'};">
          ${renderInsigniaSvg(ins.id, 24)}
        </div>
        <span style="font-size:10px; font-weight:600; margin-top:4px; text-align:center;">${ins.name.split(' ')[0]}</span>
      `;

      card.addEventListener('click', () => {
        config.insignia = {
          forma: ins.id,
          color: config.insignia?.color || '#CC0001'
        };
        insGrid.querySelectorAll<HTMLElement>('.mr-configurator__insignia-card').forEach((c) => {
          c.setAttribute('aria-checked', c.getAttribute('data-ins-id') === ins.id ? 'true' : 'false');
        });
        notifyChange();
        renderMannequin();
      });
      insGrid.appendChild(card);
    });
    insigniaSection.appendChild(insGrid);
    box.appendChild(insigniaSection);

    parent.appendChild(box);
  }

  // Helper for insignia SVG icons
  function renderInsigniaSvg(shape: InsigniaShape, size = 20): string {
    switch (shape) {
      case 'escudo':
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
      case 'circulo':
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>`;
      case 'estrella':
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
      case 'ancla':
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="22"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`;
      case 'rombo':
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 12 12 22 2 12 12 2"/></svg>`;
      case 'cruz':
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z"/></svg>`;
    }
  }

  // Step 10: Measurements (Standard vs Custom Tabs + Validation)
  function renderMeasurementsStep(parent: HTMLElement): void {
    parent.innerHTML = '';
    const wrapper = document.createElement('div');

    // Tabs Header
    const tabs = document.createElement('div');
    tabs.className = 'mr-configurator__tabs';
    tabs.setAttribute('role', 'tablist');

    const tabStd = document.createElement('button');
    tabStd.type = 'button';
    tabStd.className = 'mr-configurator__tab-btn';
    tabStd.setAttribute('role', 'tab');
    tabStd.setAttribute('aria-selected', config.medidas.tipo === 'estandar' ? 'true' : 'false');
    tabStd.textContent = 'Talla Estándar Calibrada';

    const tabCustom = document.createElement('button');
    tabCustom.type = 'button';
    tabCustom.className = 'mr-configurator__tab-btn';
    tabCustom.setAttribute('role', 'tab');
    tabCustom.setAttribute('aria-selected', config.medidas.tipo === 'personalizada' ? 'true' : 'false');
    tabCustom.textContent = 'Medidas Anatómicas Personalizadas';

    tabStd.addEventListener('click', () => {
      config.medidas.tipo = 'estandar';
      notifyChange();
      renderMeasurementsStep(parent);
    });

    tabCustom.addEventListener('click', () => {
      config.medidas.tipo = 'personalizada';
      notifyChange();
      renderMeasurementsStep(parent);
    });

    tabs.appendChild(tabStd);
    tabs.appendChild(tabCustom);
    wrapper.appendChild(tabs);

    // Tab 1: Standard Sizes with tooltip / equivalence table
    if (config.medidas.tipo === 'estandar') {
      const stdPanel = document.createElement('div');
      const sizesRow = document.createElement('div');
      sizesRow.className = 'mr-configurator__sizes-row';

      STANDARD_SIZES.forEach((s) => {
        const isSelected = config.medidas.tallaEstandar === s.size;
        const card = document.createElement('div');
        card.className = 'mr-configurator__size-card';
        card.setAttribute('role', 'radio');
        card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
        card.textContent = s.size;

        card.addEventListener('click', () => {
          config.medidas.tallaEstandar = s.size;
          notifyChange();
          renderMeasurementsStep(parent);
        });
        sizesRow.appendChild(card);
      });
      stdPanel.appendChild(sizesRow);

      // Selected size specifications card
      const curr = STANDARD_SIZES.find(s => s.size === (config.medidas.tallaEstandar || 'M'))!;
      const specsTable = document.createElement('div');
      specsTable.className = 'mr-configurator__measure-guide';
      specsTable.innerHTML = `
        <div class="mr-configurator__measure-guide-title">
          <span>Equivalencias en cm para Talla ${curr.size}</span>
        </div>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 10px; margin-top: 8px;">
          <div><strong style="color:#E6E7EB;">Cuello:</strong> ${curr.neck} cm</div>
          <div><strong style="color:#E6E7EB;">Pecho:</strong> ${curr.chest} cm</div>
          <div><strong style="color:#E6E7EB;">Cintura:</strong> ${curr.waist} cm</div>
          <div><strong style="color:#E6E7EB;">Manga:</strong> ${curr.sleeve} cm</div>
          <div><strong style="color:#E6E7EB;">Largo:</strong> ${curr.length} cm</div>
        </div>
        <p style="font-size:11px; margin-top:12px; color:#A8ABB3;">
          * En Marvel Sastrería todas las tallas estándar son ajustadas a mano por nuestro cortador antes de la confección final.
        </p>
      `;
      stdPanel.appendChild(specsTable);
      wrapper.appendChild(stdPanel);
    } else {
      // Tab 2: Custom Measurements with validation
      const customPanel = document.createElement('div');
      const grid = document.createElement('div');
      grid.className = 'mr-configurator__custom-grid';

      const fields: { key: keyof CustomMeasurements; label: string; min: number; max: number; hint: string }[] = [
        { key: 'cuello', label: 'Contorno de Cuello', min: 34, max: 52, hint: 'Alrededor de la base del cuello, dejando espacio para un dedo.' },
        { key: 'pecho', label: 'Contorno de Pecho', min: 80, max: 150, hint: 'Alrededor de la parte más prominente del tórax bajo los brazos.' },
        { key: 'cintura', label: 'Contorno de Cintura', min: 70, max: 145, hint: 'A la altura del ombligo manteniendo postura natural.' },
        { key: 'manga', label: 'Largo de Manga', min: 55, max: 75, hint: 'Desde el hueso del hombro hasta la comisura de la muñeca.' },
        { key: 'largoCamisa', label: 'Largo Total', min: 65, max: 95, hint: 'Desde la base de la nuca hasta el faldón deseado.' }
      ];

      const currentVals = config.medidas.valoresPersonalizados || {
        cuello: 40,
        pecho: 104,
        cintura: 94,
        manga: 64,
        largoCamisa: 78
      };

      fields.forEach((f) => {
        const fieldWrap = document.createElement('div');
        fieldWrap.className = 'mr-configurator__measure-field';

        fieldWrap.innerHTML = `
          <label class="mr-configurator__measure-label" for="mr-meas-${f.key}">
            <span>${f.label}</span>
            <span class="mr-configurator__measure-range">${f.min}-${f.max} cm</span>
          </label>
          <div class="mr-configurator__measure-input-wrap">
            <input 
              id="mr-meas-${f.key}" 
              type="number" 
              class="mr-configurator__measure-input" 
              min="${f.min}" 
              max="${f.max}" 
              value="${currentVals[f.key]}" 
            />
            <span class="mr-configurator__measure-unit">cm</span>
          </div>
          <span class="mr-configurator__measure-hint">${f.hint}</span>
        `;

        const inputEl = fieldWrap.querySelector('input') as HTMLInputElement;
        inputEl.addEventListener('input', () => {
          const val = parseFloat(inputEl.value);
          if (!isNaN(val)) {
            currentVals[f.key] = val;
            config.medidas.valoresPersonalizados = currentVals;
            notifyChange();
          }
        });

        grid.appendChild(fieldWrap);
      });
      customPanel.appendChild(grid);

      // Illustrated guide brief
      const guideBox = document.createElement('div');
      guideBox.className = 'mr-configurator__measure-guide';
      guideBox.innerHTML = `
        <div class="mr-configurator__measure-guide-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span>Guía de Precisión Sartorial</span>
        </div>
        <p style="margin: 0 0 8px 0; font-size:12px; line-height: 1.5;">
          Usa una cinta métrica flexible manteniéndola nivelada sin apretar la piel. Si tienes dudas, nuestro maestro sastre verificará personalmente tus proporciones al recibir el diseño.
        </p>
      `;
      customPanel.appendChild(guideBox);
      wrapper.appendChild(customPanel);
    }

    parent.appendChild(wrapper);
  }

  // ==========================================================================
  // NAVIGATION BAR
  // ==========================================================================
  function renderNavButtons(): void {
    const nav = document.createElement('div');
    nav.className = 'mr-configurator__nav';

    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'mr-configurator__btn mr-configurator__btn--secondary';
    prevBtn.disabled = currentStep === 1;
    prevBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      <span>Anterior</span>
    `;
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        goToStep((currentStep - 1) as StepNumber);
      }
    });

    // Next or Complete Button
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'mr-configurator__btn mr-configurator__btn--primary';

    if (currentStep < 10) {
      nextBtn.innerHTML = `
        <span>Paso Siguiente</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      `;
      nextBtn.addEventListener('click', () => {
        completedSteps.add(currentStep);
        goToStep((currentStep + 1) as StepNumber);
      });
    } else {
      // Step 10: Complete Configuration
      nextBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
        <span>Confirmar Diseño Bespoke</span>
      `;
      nextBtn.addEventListener('click', () => {
        // Validate Step 10 measurements before finishing
        if (config.medidas.tipo === 'personalizada' && config.medidas.valoresPersonalizados) {
          const v = config.medidas.valoresPersonalizados;
          if (v.cuello < 34 || v.cuello > 52 || v.pecho < 80 || v.pecho > 150) {
            alert('Por favor verifica los rangos de contorno de cuello (34-52 cm) y pecho (80-150 cm).');
            return;
          }
        }
        completedSteps.add(10);
        renderSidebar();

        // Dispatch onComplete API
        if (typeof options.onComplete === 'function') {
          options.onComplete({ ...config });
        }
      });
    }

    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    mainEl.appendChild(nav);
  }

  // ==========================================================================
  // MANNEQUIN SVG RENDERER (Live Preview Engine)
  // ==========================================================================
  function renderMannequin(): void {
    const wrapper = previewColEl.querySelector('#mr-svg-wrapper');
    if (!wrapper) return;

    const baseColorHex = config.color.hex;
    const isDarkBase = isColorDark(baseColorHex);
    const fabric = config.tejido;

    // Pattern definitions in SVG
    let patternSvgDef = '';
    let shirtFill = baseColorHex;

    if (fabric.patternType === 'stripes') {
      const stripeColor = fabric.secondaryColor || '#CC0001';
      patternSvgDef = `
        <pattern id="svg-stripe-pat" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
          <rect width="12" height="12" fill="${baseColorHex}"/>
          <line x1="3" y1="0" x2="3" y2="12" stroke="${stripeColor}" stroke-width="2"/>
        </pattern>
      `;
      shirtFill = 'url(#svg-stripe-pat)';
    } else if (fabric.patternType === 'gingham') {
      patternSvgDef = `
        <pattern id="svg-gingham-pat" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="${baseColorHex}"/>
          <rect x="0" y="0" width="8" height="8" fill="rgba(0,50,150,0.3)"/>
          <rect x="8" y="8" width="8" height="8" fill="rgba(0,50,150,0.3)"/>
        </pattern>
      `;
      shirtFill = 'url(#svg-gingham-pat)';
    } else if (fabric.patternType === 'oxford') {
      patternSvgDef = `
        <pattern id="svg-oxford-pat" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="${baseColorHex}"/>
          <circle cx="2" cy="2" r="1" fill="#94A3B8" opacity="0.6"/>
          <circle cx="6" cy="6" r="1" fill="#94A3B8" opacity="0.6"/>
        </pattern>
      `;
      shirtFill = 'url(#svg-oxford-pat)';
    }

    // Collar SVG shape
    let collarSvgFront = '';
    if (config.cuello === 'cutaway') {
      collarSvgFront = `
        <polygon points="120,70 145,55 175,55 200,70 178,78 160,65 142,78" fill="${baseColorHex}" stroke="#262626" stroke-width="1.5" />
      `;
    } else if (config.cuello === 'button-down') {
      collarSvgFront = `
        <polygon points="128,82 145,55 175,55 192,82 174,78 160,65 146,78" fill="${baseColorHex}" stroke="#262626" stroke-width="1.5" />
        <circle cx="134" cy="78" r="2" fill="#E6E7EB" />
        <circle cx="186" cy="78" r="2" fill="#E6E7EB" />
      `;
    } else if (config.cuello === 'mao') {
      collarSvgFront = `
        <path d="M136,60 Q160,66 184,60 L184,72 Q160,78 136,72 Z" fill="${baseColorHex}" stroke="#262626" stroke-width="1.5" />
      `;
    } else {
      // Italiano / Frances standard
      collarSvgFront = `
        <polygon points="124,76 145,55 175,55 196,76 174,78 160,65 146,78" fill="${baseColorHex}" stroke="#262626" stroke-width="1.5" />
      `;
    }

    // Cuff SVG shape
    const cuffColor = baseColorHex;
    const cuffDetail = config.puño === 'doble-frances'
      ? '<rect x="62" y="278" width="30" height="24" rx="2" fill="#1C1917" stroke="#CC0001" stroke-width="1"/><circle cx="77" cy="290" r="3" fill="#E6E7EB"/>'
      : '<rect x="62" y="282" width="30" height="18" rx="3" fill="' + cuffColor + '" stroke="#262626" stroke-width="1.2"/><circle cx="82" cy="291" r="2" fill="#E6E7EB"/>';

    // Buttons configuration
    const buttonHex = BUTTONS.find(b => b.id === config.botones)?.colorHex || '#FFFFFF';
    let placketAndButtons = `
      <!-- Front Placket -->
      <line x1="160" y1="75" x2="160" y2="340" stroke="rgba(0,0,0,0.15)" stroke-width="12" />
      <line x1="154" y1="75" x2="154" y2="340" stroke="rgba(0,0,0,0.2)" stroke-width="0.8" />
      <line x1="166" y1="75" x2="166" y2="340" stroke="rgba(0,0,0,0.2)" stroke-width="0.8" />
    `;
    [90, 130, 170, 210, 250, 290].forEach(y => {
      placketAndButtons += `
        <circle cx="160" cy="${y}" r="3.5" fill="${buttonHex}" stroke="#1E1E1E" stroke-width="0.8" />
        <circle cx="159" cy="${y - 1}" r="0.8" fill="#000" />
        <circle cx="161" cy="${y - 1}" r="0.8" fill="#000" />
        <circle cx="159" cy="${y + 1}" r="0.8" fill="#000" />
        <circle cx="161" cy="${y + 1}" r="0.8" fill="#000" />
      `;
    });

    // Pocket SVG
    const pocketSvg = config.bolsillo === 'con-bolsillo'
      ? `<path d="M112,145 L138,145 L138,175 L125,185 L112,175 Z" fill="${baseColorHex}" stroke="#404040" stroke-width="1.2" />`
      : '';

    // Monogram SVG rendering
    let monogramSvg = '';
    if (config.bordado.posicion !== 'ninguno' && config.bordado.texto) {
      const sanitizedTxt = sanitizeText(config.bordado.texto);
      const fontFam = config.bordado.fuente === 'script-cursivo' ? 'cursive' : config.bordado.fuente === 'gotico-ingles' ? 'serif' : 'sans-serif';
      const mColor = config.bordado.colorHilo;

      if (config.bordado.posicion === 'puno') {
        monogramSvg = `
          <text x="75" y="293" font-family="${fontFam}" font-size="7" font-weight="bold" fill="${mColor}" text-anchor="middle" letter-spacing="1">
            ${sanitizedTxt}
          </text>
        `;
      } else {
        // Pecho (left side chest)
        monogramSvg = `
          <text x="125" y="212" font-family="${fontFam}" font-size="9" font-weight="bold" fill="${mColor}" text-anchor="middle" letter-spacing="1.5">
            ${sanitizedTxt}
          </text>
        `;
      }
    }

    // Elbow Patch SVG (Rendered on Back View or sleeve)
    let elbowPatchSvg = '';
    if (config.parcheCodo.activo) {
      const pColor = config.parcheCodo.color;
      elbowPatchSvg = `
        <ellipse cx="80" cy="220" rx="9" ry="16" transform="rotate(20 80 220)" fill="${pColor}" stroke="#1E1E1E" stroke-width="1" />
        <ellipse cx="240" cy="220" rx="9" ry="16" transform="rotate(-20 240 220)" fill="${pColor}" stroke="#1E1E1E" stroke-width="1" />
      `;
    }

    // Insignia SVG (on bottom hem)
    let insigniaSvg = '';
    if (config.insignia) {
      insigniaSvg = `
        <g transform="translate(195, 305)">
          ${renderInsigniaSvg(config.insignia.forma, 16)}
        </g>
      `;
    }

    // Fit contour variations in SVG body
    const isSlim = config.corte === 'slim';
    const bodyPathFront = isSlim
      ? 'M100,75 L145,55 L175,55 L220,75 L255,140 L235,148 L220,340 L100,340 L85,148 L65,140 Z'
      : 'M98,75 L145,55 L175,55 L222,75 L258,140 L238,148 L226,340 L94,340 L82,148 L62,140 Z';

    // Build complete SVG
    wrapper.innerHTML = `
      <svg viewBox="0 0 320 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          ${patternSvgDef}
          <!-- Torso Mannequin Shadow -->
          <radialGradient id="torsoShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(0,0,0,0)"/>
            <stop offset="100%" stop-color="rgba(0,0,0,0.2)"/>
          </radialGradient>
        </defs>

        <!-- Mannequin Wooden Stand / Neck -->
        <path d="M148,30 L172,30 L170,60 L150,60 Z" fill="#292524" stroke="#44403C" stroke-width="1.5" />
        <ellipse cx="160" cy="30" rx="14" ry="4" fill="#44403C" />

        ${
          !isBackView
            ? `
            <!-- FRONT VIEW -->
            <!-- Sleeves -->
            <path d="M100,75 L65,140 L55,270 L90,270 L85,148 Z" fill="${shirtFill}" stroke="#262626" stroke-width="1.5" />
            <path d="M220,75 L255,140 L265,270 L230,270 L235,148 Z" fill="${shirtFill}" stroke="#262626" stroke-width="1.5" />
            
            <!-- Left Wrist & Cuff -->
            ${cuffDetail}
            
            <!-- Shirt Torso -->
            <path d="${bodyPathFront}" fill="${shirtFill}" stroke="#262626" stroke-width="1.8" />
            <path d="${bodyPathFront}" fill="url(#torsoShadow)" />

            <!-- Placket & Buttons -->
            ${placketAndButtons}

            <!-- Pocket -->
            ${pocketSvg}

            <!-- Collar -->
            ${collarSvgFront}

            <!-- Monogram -->
            ${monogramSvg}

            <!-- Insignia -->
            ${insigniaSvg}
          `
            : `
            <!-- BACK VIEW -->
            <path d="M100,75 L65,140 L55,270 L90,270 L85,148 Z" fill="${shirtFill}" stroke="#262626" stroke-width="1.5" />
            <path d="M220,75 L255,140 L265,270 L230,270 L235,148 Z" fill="${shirtFill}" stroke="#262626" stroke-width="1.5" />
            
            <!-- Torso Back -->
            <path d="${bodyPathFront}" fill="${shirtFill}" stroke="#262626" stroke-width="1.8" />
            
            <!-- Back Yoke -->
            <path d="M100,105 L220,105" stroke="#404040" stroke-width="1.5" stroke-dasharray="3 3"/>
            
            <!-- Back Pleats / Darts -->
            ${
              isSlim
                ? '<path d="M135,120 Q130,230 135,320" stroke="#404040" stroke-width="1.2" fill="none"/><path d="M185,120 Q190,230 185,320" stroke="#404040" stroke-width="1.2" fill="none"/>'
                : '<path d="M160,105 L160,180" stroke="#404040" stroke-width="1.2"/>'
            }

            <!-- Collar Back -->
            <path d="M142,55 L178,55 L174,70 L146,70 Z" fill="${baseColorHex}" stroke="#262626" stroke-width="1.5" />

            <!-- Elbow Patches on Back View -->
            ${elbowPatchSvg}
          `
        }
      </svg>
    `;
  }

  function isColorDark(hex: string): boolean {
    const c = hex.replace('#', '');
    if (c.length !== 6) return false;
    const r = parseInt(c.substr(0, 2), 16);
    const g = parseInt(c.substr(2, 2), 16);
    const b = parseInt(c.substr(4, 2), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) < 130;
  }

  function notifyChange(): void {
    if (typeof options.onChange === 'function') {
      options.onChange({ ...config });
    }
  }

  function goToStep(step: StepNumber): void {
    if (step >= 1 && step <= 10) {
      currentStep = step;
      renderSidebar();
      renderStepContent();
      renderMannequin();
    }
  }

  // Initial render
  renderSidebar();
  renderStepContent();
  renderMannequin();

  // Return public instance
  return {
    getConfig(): Partial<ShirtConfig> {
      return { ...config };
    },
    goToStep(stepNumber: StepNumber) {
      goToStep(stepNumber);
    },
    destroy() {
      container.innerHTML = '';
    }
  };
}
