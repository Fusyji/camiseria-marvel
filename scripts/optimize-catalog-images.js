/**
 * Script de Optimización y Conversión de Imágenes para Marvel Sastrería
 *
 * Convierte imágenes (JPEG, PNG) a formato WebP optimizado (~80% calidad),
 * redimensiona a ancho máximo de 800px manteniendo la proporción original
 * y las guarda en `public/assets/catalog/` en formato kebab-case.
 *
 * USO:
 * 1. Instalar sharp (si aún no lo tienes):
 *    npm install sharp --save-dev
 *
 * 2. Coloca tus fotos en una carpeta temporal (ej. `./raw-photos/`) y nombra
 *    cada una según la clave del producto o usa el mapping configurable abajo.
 *
 * 3. Ejecuta:
 *    node scripts/optimize-catalog-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const INPUT_DIR = path.resolve(__dirname, '../raw-photos');
const OUTPUT_DIR = path.resolve(__dirname, '../public/assets/catalog');
const MAX_WIDTH = 800;
const WEBP_QUALITY = 80;

// Mapeo canónico de los 10 productos del Catálogo de Camisería Premium
const CATALOG_MAPPING = [
  {
    index: 1,
    targetName: 'camisa-cuadros-azules.webp',
    name: 'Camisa Cuadros Azules',
    hints: ['cuadros azules', 'cuadros_azules', 'mr-01', 'mr1', '1'],
    badge: 'Nueva Colección'
  },
  {
    index: 2,
    targetName: 'camisa-rayas-marrones.webp',
    name: 'Camisa Rayas Marrones',
    hints: ['rayas marrones', 'marron', 'mr-02', 'mr2', '2'],
    badge: 'Premium'
  },
  {
    index: 3,
    targetName: 'camisa-rayas-gruesas-azules.webp',
    name: 'Camisa Rayas Gruesas Azules (Monograma E.P.M.)',
    hints: ['epm', 'e.p.m', 'rayas gruesas', 'mr-03', 'mr3', '3'],
    badge: 'Ejecutiva'
  },
  {
    index: 4,
    targetName: 'camisa-cuadros-vichy.webp',
    name: 'Camisa Cuadros Vichy',
    hints: ['cuadros vichy', 'vichy azul', 'mr-04', 'mr4', '4'],
    badge: 'Atemporal'
  },
  {
    index: 5,
    targetName: 'camisa-cuadros-finos-azules.webp',
    name: 'Camisa Cuadros Finos Azules',
    hints: ['cuadros finos', 'microcuadros', 'mr-05', 'mr5', '5'],
    badge: 'Business Casual'
  },
  {
    index: 6,
    targetName: 'camisa-blanca-texturizada.webp',
    name: 'Camisa Blanca Texturizada',
    hints: ['blanca texturizada', 'smartwatch', 'mr-06', 'mr6', '6'],
    badge: 'SmartWatch Casual'
  },
  {
    index: 7,
    targetName: 'camisa-azul-claro-casual.webp',
    name: 'Camisa Azul Claro Casual',
    hints: ['azul claro', 'azul celeste', 'mr-07', 'mr7', '7'],
    badge: 'SmartWatch Casual'
  },
  {
    index: 8,
    targetName: 'camisa-vichy-roja.webp',
    name: 'Camisa Vichy Roja',
    hints: ['vichy roja', 'roja', 'cuadros rojos', 'mr-08', 'mr8', '8'],
    badge: 'Nueva Colección'
  },
  {
    index: 9,
    targetName: 'camisa-azul-interior-paisley.webp',
    name: 'Camisa Azul con Interior Paisley',
    hints: ['paisley', 'interior paisley', 'mr-09', 'mr9', '9'],
    badge: 'Signature'
  },
  {
    index: 10,
    targetName: 'camisa-blanca-hilo-rojo.webp',
    name: 'Camisa Blanca Hilo Rojo',
    hints: ['hilo rojo', 'blanca rojo', 'mr-10', 'mr10', '10'],
    badge: 'Edición Limitada'
  }
];

async function runOptimization() {
  let sharp;
  try {
    const sharpModule = await import('sharp');
    sharp = sharpModule.default;
  } catch (err) {
    console.error('\n❌ ERROR: "sharp" no está instalado.');
    console.log('👉 Ejecuta: npm install sharp --save-dev');
    console.log('Luego vuelve a correr este script.\n');
    process.exit(1);
  }

  if (!fs.existsSync(INPUT_DIR)) {
    fs.mkdirSync(INPUT_DIR, { recursive: true });
    console.log(`\n📁 Carpeta creada: ${INPUT_DIR}`);
    console.log('👉 Coloca aquí las fotos en formato JPEG/PNG y vuelve a ejecutar el script.');
    return;
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(INPUT_DIR).filter(file =>
    /\.(jpe?g|png|tiff?|webp)$/i.test(file)
  );

  if (files.length === 0) {
    console.log(`\n⚠️ No se encontraron imágenes en ${INPUT_DIR}.`);
    console.log('👉 Copia las fotos subidas a esa carpeta para procesarlas.\n');
    return;
  }

  console.log(`\n🧵 Iniciando optimización sartorial (${files.length} archivos detectados)...`);

  for (const item of CATALOG_MAPPING) {
    // Buscar archivo que coincida con el mapping o el nombre final
    const match = files.find(file => {
      const lower = file.toLowerCase();
      return item.hints.some(hint => lower.includes(hint.toLowerCase())) ||
        lower.includes(item.targetName.replace('.webp', ''));
    });

    if (match) {
      const inputPath = path.join(INPUT_DIR, match);
      const outputPath = path.join(OUTPUT_DIR, item.targetName);

      try {
        await sharp(inputPath)
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(outputPath);

        const inSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
        const outSize = (fs.statSync(outputPath).size / 1024).toFixed(1);
        console.log(`✅ [MR-${String(item.index).padStart(2, '0')}] ${item.name}`);
        console.log(`   └─ Convertido: ${match} (${inSize}KB) → /assets/catalog/${item.targetName} (${outSize}KB WebP)`);
      } catch (e) {
        console.error(`❌ Error procesando ${match}:`, e.message);
      }
    } else {
      console.log(`⏳ Pendiente: Imagen para [MR-${String(item.index).padStart(2, '0')}] ${item.name} (${item.targetName})`);
    }
  }

  console.log('\n✨ Proceso finalizado. Las imágenes optimizadas están en /public/assets/catalog/\n');
}

runOptimization();
