/**
 * Marvel Sastrería (MR) — Bespoke Shirt Configurator
 * Pure TypeScript Type Definitions (Framework-free)
 */

export type StepNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type StepStatus = 'pending' | 'active' | 'completed';

export interface StepDefinition {
  number: StepNumber;
  id: string;
  title: string;
  subtitle: string;
  zoomTarget: 'full' | 'collar' | 'cuff' | 'pocket' | 'buttons' | 'monogram' | 'elbow';
}

export type FabricPatternType = 'solid' | 'stripes' | 'gingham' | 'tartan' | 'oxford';

export interface FabricOption {
  id: string;
  name: string;
  category: string;
  patternType: FabricPatternType;
  primaryColor: string;
  secondaryColor?: string;
  description: string;
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  description: string;
}

export type FitType = 'slim' | 'regular' | 'clasico';

export interface FitOption {
  id: FitType;
  name: string;
  tagline: string;
  description: string;
}

export type CollarType = 'italiano' | 'button-down' | 'cutaway' | 'mao' | 'frances' | 'pin-collar';

export interface CollarOption {
  id: CollarType;
  name: string;
  description: string;
}

export type CuffType = 'redondo-simple' | 'cuadrado-simple' | 'doble-frances' | 'redondo-doble';

export interface CuffOption {
  id: CuffType;
  name: string;
  description: string;
}

export type PocketType = 'sin-bolsillo' | 'con-bolsillo';

export interface PocketOption {
  id: PocketType;
  name: string;
  description: string;
}

export type ButtonType = 'nacar-blanco' | 'nacar-crudo' | 'negro' | 'plata-cromo' | 'gris' | 'dorado';

export interface ButtonOption {
  id: ButtonType;
  name: string;
  colorHex: string;
  ringHex: string;
  description: string;
}

export type MonogramPosition = 'puno' | 'pecho' | 'ninguno';
export type MonogramFont = 'serif-clasico' | 'script-cursivo' | 'bloque-moderno' | 'gotico-ingles';

export interface MonogramConfig {
  texto: string;
  posicion: MonogramPosition;
  fuente: MonogramFont;
  colorHilo: string;
}

export interface ElbowPatchConfig {
  activo: boolean;
  color: string;
}

export type InsigniaShape = 'escudo' | 'circulo' | 'estrella' | 'ancla' | 'rombo' | 'cruz';

export interface InsigniaConfig {
  forma: InsigniaShape;
  color: string;
}

export type MeasurementType = 'estandar' | 'personalizada';

export type StandardSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface CustomMeasurements {
  cuello: number;     // cm
  pecho: number;      // cm
  cintura: number;    // cm
  manga: number;      // cm
  largoCamisa: number;// cm
}

export interface MeasurementsConfig {
  tipo: MeasurementType;
  tallaEstandar?: StandardSize;
  valoresPersonalizados?: CustomMeasurements;
}

/**
 * The complete output configuration object for Marvel Sastrería (MR)
 */
export interface ShirtConfig {
  tejido: FabricOption;
  color: ColorOption;
  corte: FitType;
  cuello: CollarType;
  puño: CuffType;
  bolsillo: PocketType;
  botones: ButtonType;
  bordado: MonogramConfig;
  parcheCodo: ElbowPatchConfig;
  insignia: InsigniaConfig | null;
  medidas: MeasurementsConfig;
}

export interface ShirtConfiguratorOptions {
  /**
   * Callback invoked whenever a configuration attribute changes
   */
  onChange?: (config: Partial<ShirtConfig>) => void;
  
  /**
   * Callback invoked when Step 10 is validated and completed
   */
  onComplete?: (config: ShirtConfig) => void;
  
  /**
   * Optional custom logo URL. Defaults to '{{LOGO_SRC}}'
   */
  logoSrc?: string;
  
  /**
   * Initial partial configuration if editing or pre-populating
   */
  initialConfig?: Partial<ShirtConfig>;
}

export interface ShirtConfiguratorInstance {
  /**
   * Returns current partial or full state
   */
  getConfig(): Partial<ShirtConfig>;
  
  /**
   * Programmatically jump to a step number (1-10)
   */
  goToStep(stepNumber: StepNumber): void;
  
  /**
   * Dismantles DOM, removes event listeners
   */
  destroy(): void;
}
