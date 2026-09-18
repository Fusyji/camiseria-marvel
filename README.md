# Marvel Sastrería (MR) • Atelier Bespoke

Sitio web oficial, catálogo de alta costura y configurador interactivo a medida (*Bespoke / Su Misura*) de **Marvel Sastrería**. Diseñado para la confección artesanal de camisas personalizadas con tejidos selectos (Lino Italiano de Biella, Algodón Egipcio Giza 87), botones de nácar natural y monogramas bordados a mano.

---

## 🏛️ Arquitectura Tecnológica

- **Frontend:** React 18 + TypeScript + Tailwind CSS compilado con Vite.
- **Configurador Bespoke:** Módulo en TypeScript plano (`src/shirt-configurator/shirt-configurator.ts`) con manipulación directa del DOM y renderizado reactivo del maniquí en SVG.
- **Backend Serverless:** Netlify Functions (`netlify/functions/send-order.ts`) montado en Node.js runtime.
- **Servicio Transaccional:** Resend API para el despacho de correos electrónicos en alta fidelidad con adjuntos binarios (`.png` renderizado del maniquí y `.json` estructurado con la ficha de confección).
- **Despliegue y Hosting:** Netlify (rama `main` con build continuo mediante `netlify.toml`).

---

## 📬 Migración de Resend: De Pruebas a Producción

Actualmente, el sistema está configurado en modo prueba con la cuenta sandbox de Resend asociada al correo de pruebas (`dygondock@gmail.com`). 

Para migrar a la cuenta y dominio oficial de **Marvel Sastrería** (ej. `marvelsastreria.com`), sigue estos pasos:

### Paso 1: Configurar el Dominio Corporativo en Resend
1. Inicia sesión en [Resend](https://resend.com) con la cuenta oficial del atelier.
2. En el menú lateral izquierdo, ingresa a **Domains** y haz clic en **Add Domain**.
3. Ingresa tu dominio corporativo (por ejemplo: `marvelsastreria.com`) y selecciona la región geográfica más cercana (ej. `us-east-1`).
4. Resend te proporcionará 3 registros DNS esenciales para garantizar que los correos no caigan en spam:
   - **DKIM (Clave de firma criptográfica):** Registro tipo `TXT` con nombre `resend._domainkey.tudominio.com`.
   - **SPF / MX (Autorización de servidor de correo):** Registro tipo `MX` o `TXT` para el subdominio de envío (ej. `send.tudominio.com`).
   - **DMARC (Política de seguridad):** Registro tipo `TXT` con nombre `_dmarc.tudominio.com` y valor `v=DMARC1; p=none;`.
5. Agrega estos registros en el panel de tu proveedor de dominio (Cloudflare, GoDaddy, Namecheap, etc.).
6. En Resend, haz clic en **Verify DNS Records**. Cuando el estado cambie a **"Verified" (Verde)**, el dominio estará listo.

### Paso 2: Generar la Nueva API Key de Producción
1. En Resend, ve a **API Keys** > **Create API Key**.
2. Asigna un nombre descriptivo (ej. `Marvel Production Netlify`).
3. Asigna permisos **"Full Access"** o **"Sending access"**.
4. Copia la clave generada (empieza por `re_...`).

### Paso 3: Actualizar las Variables de Entorno en Netlify
1. Ingresa a tu panel de [Netlify](https://app.netlify.com).
2. Selecciona el proyecto **camiseria-marvel**.
3. Ve a **Site configuration** > **Environment variables**.
4. Edita las siguientes 3 variables:

| Variable | Valor de Pruebas (Actual) | Valor Oficial de Producción (Nuevo) |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Clave provisional de prueba | Tu nueva clave de producción (`re_...`) |
| `ATELIER_NOTIFICATION_EMAIL` | `dygondock@gmail.com` | Correo corporativo del atelier (ej. `pedidos@marvelsastreria.com`) |
| `EMAIL_FROM` | `Marvel Sastrería <onboarding@resend.dev>` | `Marvel Sastrería <pedidos@marvelsastreria.com>` |

### Paso 4: Re-desplegar en Netlify (Imprescindible)
Las Netlify Functions inyectan las variables durante el build. Por lo tanto, debes forzar un re-despliegue:
1. En el panel de Netlify, ve a la pestaña **Deploys**.
2. Haz clic en **Trigger deploy** > **Deploy site**.
3. Al finalizar, el sistema despachará correos directamente desde tu dominio verificado hacia el atelier y hacia el cliente con máxima entregabilidad.

---

## 🛡️ Seguridad y Validaciones Implementadas

El sistema cuenta con un esquema de protección multicapa:

1. **Sanitización Contra Inyecciones HTML:**
   - Todo campo provisto por el usuario (`nombre`, `email`, `telefono`, `notas`, `monograma`) es procesado con la función `escapeHtml()` en el backend antes de ser incrustado en el cuerpo del correo.
2. **Validación Estricta de Correo Electrónico:**
   - Expresión regular RFC en cliente (`ShirtConfiguratorSection.tsx`) y servidor (`send-order.ts`) para evitar envíos con sintaxis errónea.
3. **Límites de Carga y Payload:**
   - La Netlify Function rechaza cualquier cuerpo de solicitud que supere los **4.5 MB** (`HTTP 413 Payload Too Large`).
   - Longitud acotada por campo (Nombre: max 80 chars, Email: max 100 chars, Teléfono: max 30 chars, Notas: max 500 chars, Monograma: max 12 chars).
4. **Prevención de Envíos Duplicados (Doble Clic):**
   - Estado reactivo `isSubmitting` que desactiva el botón y muestra un spinner de transmisión en la UI.
   - Generación de identificador único de orden `MR-XXXX` por cada sesión.
5. **Aislamiento de Claves:**
   - La clave `RESEND_API_KEY` reside exclusivamente en el entorno serverless de Netlify y jamás se expone en el código cliente de Vite.
6. **No-Disrupción de Formularios Previos:**
   - El formulario de contacto y citas tradicional (`form name="contacto_marvel"`) permanece completamente independiente y funcional.

---

## 📏 Guía Interactiva de Precisión Sartorial (Manual de Medición Bespoke)

El configurador incorpora un módulo interactivo para la toma de medidas corporales anatómicas (`src/shirt-configurator/measurements-guide-modal.ts`), fundamentado rigurosamente en el manual y lineamientos de alta costura de **Marvel Sastrería**:

1. **Principio Fundamental de la Toma de Medidas:**
   - **Medida Justa en Centímetros:** Se enfatiza que la cinta métrica flexible debe registrar el contorno al ras del cuerpo, sin apretar la piel pero sin añadir centímetros de holgura preventiva. La holgura de confort (*ease*) es calibrada con precisión matemática por el maestro cortador durante el trazado del patrón.

2. **Los 5 Pasos Anatómicos con Diagramas Vectoriales Propios (SVG):**
   - **Paso 01 — Cuello:** Base natural del cuello con cinta nivelada.
   - **Paso 02 — Pecho:** Contorno en la parte más amplia del tórax bajo las axilas con brazos relajados a los lados.
   - **Paso 03 — Cintura:** Altura del ombligo manteniendo el abdomen suelto y postura neutra.
   - **Paso 04 — Largo de Manga:** Desde el extremo del hombro por el exterior del brazo recto hasta el hueso de la base del pulgar.
   - **Paso 05 — Largo de Camisa:** Desde el punto alto del hombro (junto al cuello) por el frente hasta la altura deseada (bajo de bragueta para uso por dentro).

3. **Puntos de Acceso Globales:**
   - **Bajo el Maniquí (Visor en Tiempo Real):** Botón permanente `[ Guía de Precisión Sartorial ]` visible en cualquiera de los 10 pasos, permitiendo al cliente consultar las referencias en cualquier momento del diseño.
   - **Cabecera del Configurador:** Botón directo antes de iniciar el formulario (`¿Cómo tomar mis medidas?`).
   - **Paso 10 (Medidas estándar y personalizadas):** Botones destacados en ambas pestañas y accesos individuales `¿Cómo medir?` al lado de cada campo, que abren el modal directamente en el paso correspondiente.

4. **Accesibilidad y Experiencia de Usuario:**
   - Control por teclado completo (`Escape` para cerrar, flechas `←` y `→` para navegar entre pasos, trampa de foco `Tab`).
   - Diseño oscuro de alta gama alineado a la paleta Marvel (`#0A0A0A`, `#CC0001`, `#E6E7EB`), tips de **CORRECTO** y **EVITA**, e ilustraciones SVG vectoriales ultraligeras.

---

## 📁 Estructura del Proyecto

```text
├── netlify.toml                      # Configuración de compilación y functions de Netlify
├── netlify/
│   └── functions/
│       └── send-order.ts             # Handler serverless para procesamiento y envío con Resend
├── src/
│   ├── components/
│   │   ├── Header.tsx                # Navegación y monograma MR
│   │   ├── Hero.tsx                  # Portada editorial de alta costura
│   │   ├── Catalog.tsx               # Catálogo de prendas y fibras
│   │   ├── ShirtConfiguratorSection.tsx # Integración React del configurador y modal de envío
│   │   ├── ContactSection.tsx        # Formulario de citas y atención presencial
│   │   └── Footer.tsx                # Pie de página y enlaces institucionales
│   ├── shirt-configurator/           # Módulo autónomo en TypeScript plano
│   │   ├── index.ts                  # Punto de exportación del módulo
│   │   ├── shirt-configurator.ts     # Lógica de los 10 pasos, cálculo de precios y SVG
│   │   ├── shirt-configurator.css    # Estilos del configurador adaptados a móvil y escritorio
│   │   ├── measurements-guide-modal.ts # Modal interactivo con diagramas vectoriales de medición
│   │   └── types.ts                  # Tipos TypeScript compartidos del configurador
│   ├── utils/
│   │   └── exportSvgToPng.ts         # Conversor offscreen del maniquí SVG a imagen PNG
│   ├── types.ts                      # Definición de tipos de prendas y especificaciones
│   └── main.tsx                      # Punto de entrada de la aplicación
├── .env.example                      # Documentación de variables de entorno requeridas
└── .env.netlify                      # Plantilla de importación directa para Netlify
```

---

## 🚀 Comandos de Trabajo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción
npm run build

# Validar sintaxis y tipos TypeScript
npm run lint
```
