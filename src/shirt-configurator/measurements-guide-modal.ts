// ==============================================================================
// MARVEL SASTRERÍA (MR) — Guía Interactiva de Medición Bespoke
// Basada estrictamente en el "Manual de Medición Bespoke" oficial (10 Medidas)
// ==============================================================================

export interface MeasurementStepData {
  id: string;
  num: string;
  titulo: string;
  subtitulo: string;
  definicion: string;
  pasos: string[];
  correcto: string;
  evita: string;
  svgDiagram: string;
}

export const MEASUREMENT_STEPS: MeasurementStepData[] = [
  {
    id: 'cuello',
    num: '01',
    titulo: 'Cuello',
    subtitulo: 'CONTORNO · BASE DEL CUELLO',
    definicion: 'Mide el contorno exacto donde descansará el cuello de la camisa.',
    pasos: [
      'Coloca la cinta alrededor de la base del cuello, siguiendo la línea natural del cuello de la camisa.',
      'Cierra la cinta al frente y comprueba que quede a la misma altura en todo el recorrido.',
      'Lee la medida justa: la cinta toca el cuello sin comprimirlo.'
    ],
    correcto: 'Cinta plana y nivelada, exactamente en la base del cuello.',
    evita: 'No introduzcas un dedo ni añadas centímetros: la holgura de confort se define después en el patronaje.',
    svgDiagram: `
      <svg viewBox="0 0 240 220" class="mr-guide-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradNeckSkin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#242426"/>
            <stop offset="100%" stop-color="#141416"/>
          </linearGradient>
        </defs>
        <!-- Cabeza y Mandíbula -->
        <path d="M85 45 C85 20, 155 20, 155 45 C155 75, 138 95, 120 95 C102 95, 85 75, 85 45 Z" fill="url(#gradNeckSkin)" stroke="#3A3A3C" stroke-width="1.5"/>
        <!-- Orejas -->
        <path d="M82 48 C80 40, 85 36, 86 46 Z" fill="#242426" stroke="#3A3A3C"/>
        <path d="M158 48 C160 40, 155 36, 154 46 Z" fill="#242426" stroke="#3A3A3C"/>
        <!-- Cuello -->
        <path d="M102 90 L100 135 L60 165 L60 210 L180 210 L180 165 L140 135 L138 90 Z" fill="url(#gradNeckSkin)" stroke="#3A3A3C" stroke-width="1.5"/>
        <!-- Hombros Trapecio -->
        <path d="M60 165 C85 145, 100 138, 120 138 C140 138, 155 145, 180 165" fill="none" stroke="#4A4A4C" stroke-dasharray="3 3"/>
        <!-- Cinta Métrica Base del Cuello -->
        <ellipse cx="120" cy="132" rx="26" ry="9" fill="none" stroke="#CC0001" stroke-width="3.5"/>
        <ellipse cx="120" cy="132" rx="26" ry="9" fill="none" stroke="#E6E7EB" stroke-width="1" stroke-dasharray="2 3"/>
        <!-- Marcador central -->
        <circle cx="120" cy="141" r="3.5" fill="#CC0001"/>
        <text x="120" y="180" fill="#E6E7EB" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Base del cuello</text>
        <text x="120" y="196" fill="#8E8E93" font-size="9" font-family="sans-serif" text-anchor="middle">Cinta al ras sin holgura</text>
      </svg>
    `
  },
  {
    id: 'pecho',
    num: '02',
    titulo: 'Pecho',
    subtitulo: 'CONTORNO · PARTE MÁS AMPLIA',
    definicion: 'Registra el contorno del tórax manteniendo una respiración y postura naturales.',
    pasos: [
      'Pasa la cinta por debajo de las axilas y alrededor de la parte más amplia del pecho.',
      'En la espalda, la cinta debe cruzar los omóplatos sin subir ni bajar.',
      'Baja los brazos, respira normalmente y lee la medida sin apretar.'
    ],
    correcto: 'Cinta perfectamente horizontal y brazos relajados a los lados.',
    evita: 'No infles el pecho, no inhales profundamente y no dejes la cinta floja.',
    svgDiagram: `
      <svg viewBox="0 0 240 220" class="mr-guide-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Torso Silueta Frontal -->
        <path d="M120 35 L108 50 L80 62 L55 95 L68 115 L80 100 L76 195 L164 195 L160 100 L172 115 L185 95 L160 62 L132 50 Z" fill="#1C1C1E" stroke="#3A3A3C" stroke-width="1.5"/>
        <!-- Pectorales sutiles -->
        <path d="M90 98 C105 112, 115 112, 120 106 C125 112, 135 112, 150 98" fill="none" stroke="#2C2C2E" stroke-width="1.5"/>
        <!-- Cinta Métrica en Tórax -->
        <g>
          <line x1="60" y1="102" x2="180" y2="102" stroke="#CC0001" stroke-width="4"/>
          <line x1="60" y1="102" x2="180" y2="102" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="3 3"/>
          <ellipse cx="120" cy="102" rx="4" ry="4" fill="#CC0001"/>
        </g>
        <text x="120" y="86" fill="#E6E7EB" font-size="10" font-family="sans-serif" text-anchor="middle" font-weight="bold">Línea de pezón / Axilas</text>
        <text x="120" y="124" fill="#888888" font-size="9" font-family="sans-serif" text-anchor="middle">Horizontal paralela al suelo</text>
      </svg>
    `
  },
  {
    id: 'cintura',
    num: '03',
    titulo: 'Cintura',
    subtitulo: 'CONTORNO · ALTURA NATURAL',
    definicion: 'Mide el contorno del abdomen en la línea natural de la cintura, a la altura del ombligo.',
    pasos: [
      'Ubica la cinta alrededor de la cintura, aproximadamente a la altura del ombligo.',
      'Revisa de frente y de lado que quede paralela al suelo.',
      'Mantén el abdomen relajado y registra la medida justa.'
    ],
    correcto: 'Postura neutra y respiración habitual en reposo.',
    evita: 'No metas el abdomen, no aprietes la cinta y no midas sobre cinturón o bolsillos con objetos.',
    svgDiagram: `
      <svg viewBox="0 0 240 220" class="mr-guide-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Silueta Torso Medio y Abdomen -->
        <path d="M78 40 L70 90 L75 140 L70 200 L170 200 L165 140 L170 90 L162 40 Z" fill="#1C1C1E" stroke="#3A3A3C" stroke-width="1.5"/>
        <!-- Ombligo -->
        <circle cx="120" cy="140" r="2" fill="#555558"/>
        <!-- Cinta métrica a la altura de la cintura -->
        <g>
          <line x1="68" y1="140" x2="172" y2="140" stroke="#CC0001" stroke-width="4"/>
          <line x1="68" y1="140" x2="172" y2="140" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="3 3"/>
          <circle cx="120" cy="140" r="4.5" fill="#CC0001"/>
        </g>
        <text x="120" y="125" fill="#E6E7EB" font-size="10" font-family="sans-serif" text-anchor="middle" font-weight="bold">Altura del ombligo</text>
        <text x="120" y="162" fill="#888888" font-size="9" font-family="sans-serif" text-anchor="middle">Abdomen suelto, sin comprimir</text>
      </svg>
    `
  },
  {
    id: 'manga',
    num: '04',
    titulo: 'Largo de manga',
    subtitulo: 'LARGO · HOMBRO A BASE DEL PULGAR',
    definicion: 'Mide la manga desde el extremo del hombro hasta el hueso de la base del pulgar.',
    pasos: [
      'Identifica el extremo natural del hombro y fija allí el inicio de la cinta.',
      'Con el brazo recto y relajado, baja la cinta por el exterior del brazo.',
      'Finaliza en el hueso de la base del pulgar y registra la distancia completa.'
    ],
    correcto: 'Brazo recto, cinta continua desde el hombro hasta la base del pulgar.',
    evita: 'No inicies en la nuca y no dobles el codo: el método bespoke mide por el lateral con brazo relajado.',
    svgDiagram: `
      <svg viewBox="0 0 240 220" class="mr-guide-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Hombro, Brazo y Mano Lateral -->
        <path d="M90 35 C115 35, 125 45, 130 55 L138 120 L132 175 L130 195 C129 202, 122 205, 118 198 L114 185 L112 175 L115 120 L110 55 Z" fill="#1C1C1E" stroke="#3A3A3C" stroke-width="1.5"/>
        <!-- Hueso base del pulgar destacado -->
        <circle cx="120" cy="188" r="3" fill="#888888"/>
        <!-- Línea de cota de la cinta métrica -->
        <line x1="140" y1="52" x2="140" y2="188" stroke="#CC0001" stroke-width="3"/>
        <line x1="140" y1="52" x2="140" y2="188" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 3"/>
        <!-- Top y Bottom ticks -->
        <line x1="130" y1="52" x2="152" y2="52" stroke="#CC0001" stroke-width="2"/>
        <line x1="122" y1="188" x2="152" y2="188" stroke="#CC0001" stroke-width="2"/>
        <text x="160" y="55" fill="#E6E7EB" font-size="9" font-family="sans-serif">Extremo del hombro</text>
        <text x="160" y="191" fill="#E6E7EB" font-size="9" font-family="sans-serif">Base del pulgar</text>
        <text x="155" y="120" fill="#CC0001" font-size="10" font-family="sans-serif" font-weight="bold">Brazo recto</text>
      </svg>
    `
  },
  {
    id: 'largoCamisa',
    num: '05',
    titulo: 'Largo de camisa',
    subtitulo: 'LARGO · DEL HOMBRO AL BAJO',
    definicion: 'Define el largo delantero desde el punto alto del hombro hasta el final deseado de la camisa.',
    pasos: [
      'Coloca el inicio de la cinta en el punto alto del hombro, junto a la base del cuello.',
      'Déjala caer por el frente del torso, siguiendo una línea recta natural.',
      'Mide hasta la altura final deseada (aproximadamente a la parte baja de la bragueta para llevar por dentro).'
    ],
    correcto: 'Inicio junto al cuello; final definido sobre el centro delantero.',
    evita: 'No comiences en la nuca ni midas el largo por el centro de la espalda.',
    svgDiagram: `
      <svg viewBox="0 0 240 220" class="mr-guide-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Torso Completo con línea de bragueta -->
        <path d="M120 30 L100 45 L70 58 L62 105 L72 195 L168 195 L178 105 L170 58 L140 45 Z" fill="#1C1C1E" stroke="#3A3A3C" stroke-width="1.5"/>
        <!-- Línea central de botones / bragueta -->
        <line x1="120" y1="45" x2="120" y2="205" stroke="#2E2E32" stroke-width="1.5" stroke-dasharray="4 3"/>
        <!-- Cinta Métrica Vertical desde el Hombro Alto -->
        <line x1="102" y1="44" x2="102" y2="198" stroke="#CC0001" stroke-width="3.5"/>
        <line x1="102" y1="44" x2="102" y2="198" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="3 3"/>
        <!-- Puntos inicial y final -->
        <circle cx="102" cy="44" r="3.5" fill="#CC0001"/>
        <circle cx="102" cy="198" r="3.5" fill="#CC0001"/>
        <line x1="90" y1="44" x2="114" y2="44" stroke="#CC0001" stroke-width="1.5"/>
        <line x1="90" y1="198" x2="114" y2="198" stroke="#CC0001" stroke-width="1.5"/>
        <text x="32" y="47" fill="#E6E7EB" font-size="9" font-family="sans-serif">Punto alto del hombro</text>
        <text x="38" y="201" fill="#E6E7EB" font-size="9" font-family="sans-serif">Bajo deseado</text>
      </svg>
    `
  }
];

export class MeasurementsGuideModal {
  private backdropElement: HTMLDivElement | null = null;
  private currentStepIndex: number = 0;
  private previousActiveElement: HTMLElement | null = null;
  private handleKeyDownBound: (e: KeyboardEvent) => void;

  constructor() {
    this.handleKeyDownBound = this.handleKeyDown.bind(this);
  }

  public open(initialStepIndex: number = 0): void {
    this.currentStepIndex = Math.max(0, Math.min(initialStepIndex, MEASUREMENT_STEPS.length - 1));
    this.previousActiveElement = document.activeElement as HTMLElement | null;

    this.render();
    document.addEventListener('keydown', this.handleKeyDownBound);
    document.body.style.overflow = 'hidden';

    // Foco accesible
    setTimeout(() => {
      const closeBtn = this.backdropElement?.querySelector('.mr-guide-close') as HTMLElement;
      if (closeBtn) closeBtn.focus();
    }, 50);
  }

  public close(): void {
    if (this.backdropElement) {
      this.backdropElement.classList.remove('mr-guide-backdrop--visible');
      setTimeout(() => {
        if (this.backdropElement && this.backdropElement.parentNode) {
          this.backdropElement.parentNode.removeChild(this.backdropElement);
        }
        this.backdropElement = null;
      }, 200);
    }

    document.removeEventListener('keydown', this.handleKeyDownBound);
    document.body.style.overflow = '';

    if (this.previousActiveElement && typeof this.previousActiveElement.focus === 'function') {
      this.previousActiveElement.focus();
    }
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.close();
      return;
    }

    if (e.key === 'ArrowRight') {
      this.goToNextStep();
    } else if (e.key === 'ArrowLeft') {
      this.goToPrevStep();
    }

    if (e.key === 'Tab' && this.backdropElement) {
      const focusables = this.backdropElement.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  }

  private goToNextStep(): void {
    if (this.currentStepIndex < MEASUREMENT_STEPS.length - 1) {
      this.currentStepIndex++;
      this.updateStepContent();
    } else {
      this.close();
    }
  }

  private goToPrevStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.updateStepContent();
    }
  }

  private render(): void {
    const existing = document.getElementById('mr-measurements-guide-modal');
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }

    const backdrop = document.createElement('div');
    backdrop.id = 'mr-measurements-guide-modal';
    backdrop.className = 'mr-configurator mr-guide-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-labelledby', 'mr-guide-title');

    backdrop.innerHTML = `
      <div class="mr-guide-dialog">
        <!-- Header -->
        <div class="mr-guide-header">
          <div class="mr-guide-brand">
            <span class="mr-guide-badge">MR BESPOKE</span>
            <h3 id="mr-guide-title" class="mr-guide-heading">Manual de Medición Bespoke</h3>
          </div>
          <button type="button" class="mr-guide-close" aria-label="Cerrar instructivo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Banner de Regla Principal del Manual -->
        <div class="mr-guide-rule-banner">
          <strong>Regla principal:</strong> Registra la medida justa en centímetros, sin añadir holgura. La cinta toca el cuerpo pero no lo aprieta ni deja marca. La holgura de confort se define después, durante el patronaje.
        </div>

        <!-- Tabs de los 5 Pasos -->
        <div class="mr-guide-tabs" role="tablist">
          ${MEASUREMENT_STEPS.map((step, idx) => `
            <button type="button" role="tab" class="mr-guide-tab ${idx === this.currentStepIndex ? 'mr-guide-tab--active' : ''}" data-step-idx="${idx}">
              <span class="mr-guide-tab-num">${step.num}</span>
              <span class="mr-guide-tab-name">${step.titulo}</span>
            </button>
          `).join('')}
        </div>

        <!-- Contenido del Paso -->
        <div class="mr-guide-body" id="mr-guide-body-container"></div>

        <!-- Footer -->
        <div class="mr-guide-footer">
          <button type="button" class="mr-guide-btn-footer mr-guide-btn-footer--secondary mr-guide-btn-prev">
            ← Anterior
          </button>
          <div class="mr-guide-step-counter">
            Medida <span id="mr-guide-curr-step">1</span> de ${MEASUREMENT_STEPS.length}
          </div>
          <button type="button" class="mr-guide-btn-footer mr-guide-btn-footer--primary mr-guide-btn-next">
            Siguiente paso →
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);
    this.backdropElement = backdrop;

    // Click backdrop
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        this.close();
      }
    });

    // Close button
    const closeBtn = backdrop.querySelector('.mr-guide-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Prev / Next
    const nextBtn = backdrop.querySelector('.mr-guide-btn-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.goToNextStep());
    }

    const prevBtn = backdrop.querySelector('.mr-guide-btn-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.goToPrevStep());
    }

    // Tabs
    const tabs = backdrop.querySelectorAll('.mr-guide-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const idx = parseInt(target.getAttribute('data-step-idx') || '0', 10);
        this.currentStepIndex = idx;
        this.updateStepContent();
      });
    });

    this.updateStepContent();

    requestAnimationFrame(() => {
      backdrop.classList.add('mr-guide-backdrop--visible');
    });
  }

  private updateStepContent(): void {
    if (!this.backdropElement) return;

    const step = MEASUREMENT_STEPS[this.currentStepIndex];
    const container = this.backdropElement.querySelector('#mr-guide-body-container');
    if (!container) return;

    // Tabs
    const tabs = this.backdropElement.querySelectorAll('.mr-guide-tab');
    tabs.forEach((t, i) => {
      if (i === this.currentStepIndex) {
        t.classList.add('mr-guide-tab--active');
      } else {
        t.classList.remove('mr-guide-tab--active');
      }
    });

    // Footer Counter
    const currStepSpan = this.backdropElement.querySelector('#mr-guide-curr-step');
    if (currStepSpan) {
      currStepSpan.textContent = (this.currentStepIndex + 1).toString();
    }

    const prevBtn = this.backdropElement.querySelector('.mr-guide-btn-prev') as HTMLButtonElement;
    if (prevBtn) {
      prevBtn.disabled = this.currentStepIndex === 0;
      prevBtn.style.opacity = this.currentStepIndex === 0 ? '0.35' : '1';
    }

    const nextBtn = this.backdropElement.querySelector('.mr-guide-btn-next') as HTMLButtonElement;
    if (nextBtn) {
      if (this.currentStepIndex === MEASUREMENT_STEPS.length - 1) {
        nextBtn.textContent = 'Entendido, volver al configurador ✓';
      } else {
        nextBtn.textContent = 'Siguiente medida →';
      }
    }

    container.innerHTML = `
      <div class="mr-guide-grid">
        <!-- Columna Izquierda: Diagrama SVG de la Medida -->
        <div class="mr-guide-diagram-col">
          <div class="mr-guide-diagram-card">
            ${step.svgDiagram}
            <span class="mr-guide-diagram-label">${step.subtitulo}</span>
          </div>
        </div>

        <!-- Columna Derecha: Instrucciones y Tips del Video/Manual -->
        <div class="mr-guide-info-col">
          <div class="mr-guide-info-header">
            <span class="mr-guide-step-tag">${step.num} · ${step.subtitulo}</span>
            <h4 class="mr-guide-step-title">${step.titulo}</h4>
            <p class="mr-guide-definition">${step.definicion}</p>
          </div>

          <div class="mr-guide-steps-list">
            ${step.pasos.map((p, i) => `
              <div class="mr-guide-step-item">
                <span class="mr-guide-step-num-badge">${i + 1}</span>
                <span class="mr-guide-step-text">${p}</span>
              </div>
            `).join('')}
          </div>

          <!-- Bloque Correcto -->
          <div class="mr-guide-box mr-guide-box--correct">
            <div class="mr-guide-box-icon">✓</div>
            <div class="mr-guide-box-content">
              <strong>CORRECTO</strong>
              <p>${step.correcto}</p>
            </div>
          </div>

          <!-- Bloque Evita -->
          <div class="mr-guide-box mr-guide-box--avoid">
            <div class="mr-guide-box-icon">!</div>
            <div class="mr-guide-box-content">
              <strong>EVITA</strong>
              <p>${step.evita}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export const measurementsGuideModal = new MeasurementsGuideModal();
