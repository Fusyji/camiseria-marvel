const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const shirts = [
  { id: 1, name: 'Sabbia di Biella', baseColor: '#E6DBC6', collarColor: '#DFD2BC', accent: '#A89278', monogram: 'M.R.', fabric: 'Lino Italiano Puro' },
  { id: 2, name: 'Milano Righe Sartoriali', baseColor: '#93C5FD', collarColor: '#BFDBFE', accent: '#1E3A8A', monogram: 'A.E.W.', fabric: 'Oxford Pinpoint' },
  { id: 3, name: 'Nero Notte Couture', baseColor: '#18181B', collarColor: '#27272A', accent: '#E50914', monogram: 'C.H.', fabric: 'Popelín Suizo 140/2' },
  { id: 4, name: 'Giza 87 Bianco Reale', baseColor: '#FFFFFF', collarColor: '#F8FAFC', accent: '#CBD5E1', monogram: 'S.G.', fabric: 'Algodón Egipcio Giza 87' },
  { id: 5, name: 'Venezia Micro-Geometrie', baseColor: '#CBD5E1', collarColor: '#1E293B', accent: '#E50914', monogram: 'L.F.', fabric: 'Twill de Alta Densidad' },
  { id: 6, name: 'Azzurro Riviera', baseColor: '#BAE6FD', collarColor: '#E0F2FE', accent: '#0369A1', monogram: 'M.R.', fabric: 'Algodón Egipcio 120/2' },
  { id: 7, name: 'Rosa Sfumato Su Misura', baseColor: '#FCE7F3', collarColor: '#FDF2F8', accent: '#BE185D', monogram: 'J.A.', fabric: 'Lino & Seta de Biella' },
  { id: 8, name: 'Oxford Imperial Dettaglio', baseColor: '#F8FAFC', collarColor: '#FFFFFF', accent: '#E50914', monogram: 'M.R.', fabric: 'Oxford Royal 100/2' },
  { id: 9, name: 'Cromo Sartoriale', baseColor: '#E2E8F0', collarColor: '#F1F5F9', accent: '#64748B', monogram: 'E.P.', fabric: 'Seda & Algodón Mercerizado' },
  { id: 10, name: 'Principe di Galles Marvel', baseColor: '#E4E4E7', collarColor: '#F4F4F5', accent: '#E50914', monogram: 'K.D.', fabric: 'Lana Fría & Lino Sartorial' }
];

for (const s of shirts) {
  const targetFile = path.join(publicDir, `maniqui_mr_${s.id}.png`);
  
  // Use ImageMagick convert to create refined luxury torso mannequin rendering
  const args = [
    'convert',
    '-size 640x800',
    'xc:none',
    // Card background subtle border and gradient backdrop
    '-fill "#F8FAFC"',
    '-stroke "#E2E8F0"',
    '-strokewidth 1',
    '-draw "roundrectangle 16,16 624,784 14,14"',
    // Wooden finial top
    '-stroke none',
    '-fill "#3F1D11"',
    '-draw "ellipse 320,85 18,22 0,360"',
    '-draw "rectangle 312,100 328,145"',
    // Shoulders and mannequin torso body
    `-fill "${s.baseColor}"`,
    '-stroke "#CBD5E1"',
    '-strokewidth 1',
    '-draw "polygon 160,270 230,165 410,165 480,270 470,550 170,550"',
    // Collar lapels
    `-fill "${s.collarColor}"`,
    '-stroke "#94A3B8"',
    '-strokewidth 1',
    '-draw "polygon 230,165 320,255 250,275 200,215"',
    '-draw "polygon 410,165 320,255 390,275 440,215"',
    // Center placket
    `-fill "${s.accent}"`,
    '-stroke none',
    '-draw "rectangle 316,255 324,550"',
    // Pearl mother-of-pearl buttons
    '-fill "#FEF9C3"',
    '-stroke "#CA8A04"',
    '-strokewidth 0.5',
    '-draw "circle 320,295 320,299"',
    '-draw "circle 320,355 320,359"',
    '-draw "circle 320,415 320,419"',
    '-draw "circle 320,475 320,479"',
    // Monogram embroidery
    '-stroke none',
    `-fill "${s.accent === '#E50914' ? '#E50914' : '#1E293B'}"`,
    `-draw "text 370,440 '${s.monogram}'"`,
    // Wooden base of torso
    '-fill "#451A03"',
    '-draw "roundrectangle 170,545 470,590 8,8"',
    // Chrome brass nameplate
    '-fill "#E2E8F0"',
    '-stroke "#94A3B8"',
    '-strokewidth 1',
    '-draw "roundrectangle 260,560 380,578 3,3"',
    '-stroke none',
    '-fill "#E50914"',
    `-draw "text 305,573 'MR'"`,
    // Stand pole
    '-fill "#94A3B8"',
    '-draw "rectangle 316,590 324,710"',
    // Base pedestal
    '-fill "#1E293B"',
    '-draw "roundrectangle 230,705 410,725 6,6"',
    `"${targetFile}"`
  ];

  try {
    execSync(args.join(' '));
    console.log(`Successfully generated ${targetFile}`);
  } catch (err) {
    console.error(`Error generating ${targetFile}:`, err.message);
  }
}

// Generate MR Monogram logo as well
const logoFile = path.join(publicDir, 'logo_mr.png');
try {
  const logoArgs = [
    'convert',
    '-size 400x400',
    'xc:transparent',
    '-fill "#09090B"',
    '-draw "roundrectangle 20,20 380,380 24,24"',
    '-stroke "#334155"',
    '-strokewidth 2',
    '-draw "roundrectangle 24,24 376,376 20,20"',
    // Red Marvel M
    '-stroke none',
    '-fill "#E50914"',
    '-font "Times-Bold"',
    '-pointsize 150',
    '-draw "text 80,240 \'M\'"',
    // Chrome Silver R
    '-fill "#E2E8F0"',
    '-font "Times-Bold"',
    '-pointsize 150',
    '-draw "text 200,240 \'R\'"',
    // Sastrería caption
    '-fill "#94A3B8"',
    '-font "Helvetica"',
    '-pointsize 24',
    '-draw "text 155,300 \'sastrería\'"',
    `"${logoFile}"`
  ];
  execSync(logoArgs.join(' '));
  console.log(`Generated ${logoFile}`);
} catch (e) {
  console.log('Logo generation error:', e.message);
}
