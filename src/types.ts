export type ShirtCategory = 'all' | 'formal' | 'lino' | 'smart-casual' | 'ceremonia';

export type CollarType = 'Italiano (Cutaway)' | 'Francés Clásico' | 'Cuello Mao' | 'Button-Down' | 'Club Inglés' | 'Semi-Spread';

export type FabricType = 
  | 'Lino Italiano Puro'
  | 'Algodón Egipcio Giza 87'
  | 'Algodón Egipcio 120/2'
  | 'Popelín Suizo 140/2'
  | 'Oxford Royal Pinpoint'
  | 'Oxford Royal 100/2'
  | 'Twill de Alta Densidad'
  | 'Lino & Seda de Biella'
  | 'Seda & Algodón Mercerizado'
  | 'Lana Fría & Lino Sartorial';

export type FitType = 'El Ajuste Perfecto (Bespoke Anatómico)';

export interface Shirt {
  id: string;
  indexNumber: number; // 1 to 10
  name: string;
  code: string;
  category: 'formal' | 'lino' | 'smart-casual' | 'ceremonia';
  image: string; // "maniqui_mr_1.png" etc.
  altText: string; // "Camisa a medida Marvel Sastrería 1" etc.
  description: string;
  fabric: FabricType;
  fabricOrigin: string;
  collar: CollarType;
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

