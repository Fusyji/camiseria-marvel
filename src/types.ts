export type ShirtCategory =
  | 'all'
  | 'nueva-coleccion'
  | 'ejecutiva'
  | 'smart-casual'
  | 'cuadros'
  | 'signature'
  | 'formal'
  | 'lino'
  | 'ceremonia';

export type CollarType = string;

export type FabricType = string;

export type FitType = 'El Ajuste Perfecto (Bespoke Anatómico)';

export interface Shirt {
  id: string;
  indexNumber: number; // 1 to 10
  name: string;
  code: string;
  badge: string; // "Nueva Colección", "Premium", "Ejecutiva", "Atemporal", etc.
  category: string;
  image: string; // "./assets/images/[nombre-producto].webp"
  altText: string;
  description: string;
  subtitle?: string;
  fabric: string;
  fabricOrigin: string;
  collar: string;
  cuff: string;
  monogramDefault: string;
  colors: string[];
  features: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}


export interface CustomShirtConfig {
  fabric: string;
  fabricColor: string;
  collar: string;
  cuff: string;
  fit: string;
  placket: string;
  pocket: boolean;
  monogram: {
    enabled: boolean;
    initials: string;
    position: 'Puño izquierdo' | 'Pecho' | 'Costado bajo';
    fontStyle: 'Script Clásico' | 'Serif Tradicional' | 'Bloque Moderno';
    threadColor: 'Azul Marino' | 'Gris Perla' | 'Borgoña' | 'Tono sobre Tono';
  };
  notes: string;
  clientName: string;
  clientPhone: string;
}

