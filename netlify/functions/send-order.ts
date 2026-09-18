import { Resend } from 'resend';

interface HandlerEvent {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string | undefined>;
}

interface HandlerResponse {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}

function escapeHtml(str: string | null | undefined): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Método no permitido. Solo POST.' })
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Body de solicitud vacío' })
      };
    }

    // Prevención de ataques por payload desmedido (límite 4.5 MB)
    if (event.body.length > 4.5 * 1024 * 1024) {
      return {
        statusCode: 413,
        headers,
        body: JSON.stringify({ error: 'El tamaño de la solicitud excede el límite permitido.' })
      };
    }

    let payload: any;
    try {
      payload = JSON.parse(event.body);
    } catch {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'JSON malformado en la solicitud.' })
      };
    }

    const { ordenId, cliente, configuracion, previewPngBase64 } = payload;

    if (!configuracion) {
      return {
        statusCode: 422,
        headers,
        body: JSON.stringify({ error: 'Faltan los datos de configuración de la prenda.' })
      };
    }

    // Validación y sanitización estricta de datos del cliente
    const rawNombre = typeof cliente?.nombre === 'string' ? cliente.nombre.trim() : '';
    const rawEmail = typeof cliente?.email === 'string' ? cliente.email.trim() : '';
    const rawTelefono = typeof cliente?.telefono === 'string' ? cliente.telefono.trim() : '';
    const rawNotas = typeof cliente?.notas === 'string' ? cliente.notas.trim() : '';

    if (!rawNombre || rawNombre.length < 2) {
      return {
        statusCode: 422,
        headers,
        body: JSON.stringify({ error: 'El nombre es obligatorio y debe tener al menos 2 caracteres.' })
      };
    }

    if (!rawEmail || !EMAIL_REGEX.test(rawEmail)) {
      return {
        statusCode: 422,
        headers,
        body: JSON.stringify({ error: 'El correo electrónico proporcionado no tiene un formato válido.' })
      };
    }

    // Sanitización contra inyecciones HTML en el template de email
    const clienteNombre = escapeHtml(rawNombre.slice(0, 80));
    const clienteEmail = escapeHtml(rawEmail.slice(0, 100));
    const clienteTel = escapeHtml((rawTelefono || 'No proporcionado').slice(0, 30));
    const clienteNotas = escapeHtml((rawNotas || 'Ninguna').slice(0, 500));
    const sanitizedOrderId = escapeHtml(String(ordenId || 'MR-BESPOKE').slice(0, 30));

    // Sanitización de monograma bordado
    const rawBordado = configuracion.bordado?.texto;
    const bordadoSanitizado = rawBordado ? escapeHtml(String(rawBordado).slice(0, 12)) : '';

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[send-order] RESEND_API_KEY no está configurada.');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Servicio de correo no configurado (falta RESEND_API_KEY en Netlify).' })
      };
    }

    const resend = new Resend(apiKey);

    const atelierEmail = process.env.ATELIER_NOTIFICATION_EMAIL || 'dygondock@gmail.com';
    const fromAddress = process.env.EMAIL_FROM || 'Marvel Sastrería <onboarding@resend.dev>';

    // Garantizar que atelierEmail reciba siempre el pedido
    const toRecipients: string[] = [atelierEmail];
    
    // Si no es el sandbox onboarding@resend.dev y el cliente puso su email, se incluye también
    const isSandbox = fromAddress.includes('resend.dev');
    if (!isSandbox && rawEmail && rawEmail !== atelierEmail) {
      toRecipients.push(rawEmail);
    }

    // Adjuntos: PNG Maniquí y JSON técnico
    const attachments: Array<{ filename: string; content: Buffer }> = [];
    if (previewPngBase64 && typeof previewPngBase64 === 'string' && previewPngBase64.length < 3.5 * 1024 * 1024) {
      const cleanBase64 = previewPngBase64.replace(/^data:image\/[a-z]+;base64,/, '');
      attachments.push({
        filename: `Marvel_Sastreria_${sanitizedOrderId}_Maniqui.png`,
        content: Buffer.from(cleanBase64, 'base64')
      });
    }

    const jsonStr = JSON.stringify(payload, null, 2);
    attachments.push({
      filename: `Ficha_Tecnica_${sanitizedOrderId}.json`,
      content: Buffer.from(jsonStr, 'utf-8')
    });

    const medidasTexto = configuracion.medidas?.tipo === 'estandar'
      ? `Talla Estándar ${escapeHtml(configuracion.medidas?.tallaEstandar || 'M')}`
      : `Personalizada: Cuello ${escapeHtml(String(configuracion.medidas?.valoresPersonalizados?.cuello || '-'))}cm, Pecho ${escapeHtml(String(configuracion.medidas?.valoresPersonalizados?.pecho || '-'))}cm, Cintura ${escapeHtml(String(configuracion.medidas?.valoresPersonalizados?.cintura || '-'))}cm, Manga ${escapeHtml(String(configuracion.medidas?.valoresPersonalizados?.manga || '-'))}cm, Largo ${escapeHtml(String(configuracion.medidas?.valoresPersonalizados?.largoCamisa || '-'))}cm`;

    const htmlBody = `
      <div style="font-family: 'Georgia', serif, -apple-system, sans-serif; max-width: 620px; margin: 0 auto; background: #0A0A0A; color: #E6E7EB; border: 1px solid #262626; border-radius: 8px; overflow: hidden;">
        <div style="background: #121212; padding: 28px 24px; text-align: center; border-bottom: 2px solid #CC0001;">
          <h1 style="margin: 0; font-size: 22px; letter-spacing: 0.2em; text-transform: uppercase; color: #FFFFFF;">MARVEL SASTRERÍA</h1>
          <p style="margin: 6px 0 0; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #CC0001; font-weight: bold;">Atelier Bespoke • Nueva Orden</p>
        </div>
        
        <div style="padding: 24px;">
          <p style="font-size: 15px; color: #CCCCCC; line-height: 1.5; margin-top: 0;">
            Se ha recibido un nuevo encargo a medida desde el Configurador Bespoke.
          </p>

          <div style="background: #18181B; border: 1px solid #27272A; border-radius: 6px; padding: 16px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: #CC0001;">Datos del Cliente</h3>
            <p style="margin: 4px 0; font-size: 13px; color: #E4E4E7;"><strong>Nombre:</strong> ${clienteNombre}</p>
            <p style="margin: 4px 0; font-size: 13px; color: #E4E4E7;"><strong>Email:</strong> ${clienteEmail}</p>
            <p style="margin: 4px 0; font-size: 13px; color: #E4E4E7;"><strong>Teléfono / WhatsApp:</strong> ${clienteTel}</p>
            ${clienteNotas !== 'Ninguna' ? `<p style="margin: 4px 0; font-size: 13px; color: #E4E4E7;"><strong>Notas especiales:</strong> ${clienteNotas}</p>` : ''}
          </div>

          <div style="background: #18181B; border: 1px solid #27272A; border-radius: 6px; padding: 16px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: #CC0001;">Especificaciones de Confección</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Orden:</td><td style="padding: 6px 0; color: #FFFFFF; font-weight: bold;">${sanitizedOrderId}</td></tr>
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Tejido:</td><td style="padding: 6px 0; color: #FFFFFF;">${escapeHtml(configuracion.tejido?.name || configuracion.tejido?.nombre || '-')}</td></tr>
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Color / Tono:</td><td style="padding: 6px 0; color: #FFFFFF;">${escapeHtml(configuracion.color?.name || configuracion.color?.nombre || '-')} (${escapeHtml(configuracion.color?.hex || '')})</td></tr>
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Corte:</td><td style="padding: 6px 0; color: #FFFFFF; text-transform: uppercase;">${escapeHtml(configuracion.corte)}</td></tr>
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Cuello:</td><td style="padding: 6px 0; color: #FFFFFF; text-transform: uppercase;">${escapeHtml(configuracion.cuello)}</td></tr>
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Puño:</td><td style="padding: 6px 0; color: #FFFFFF; text-transform: uppercase;">${escapeHtml(configuracion.puno)}</td></tr>
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Bolsillo:</td><td style="padding: 6px 0; color: #FFFFFF; text-transform: uppercase;">${escapeHtml(configuracion.bolsillo)}</td></tr>
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Botones:</td><td style="padding: 6px 0; color: #FFFFFF;">${escapeHtml(configuracion.botones?.name || configuracion.botones || '-')}</td></tr>
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Monograma:</td><td style="padding: 6px 0; color: #FFFFFF;">${bordadoSanitizado ? `"${bordadoSanitizado}" (${escapeHtml(configuracion.bordado?.posicion || '')}, fuente ${escapeHtml(configuracion.bordado?.fuente || '')})` : 'Sin iniciales'}</td></tr>
              <tr style="border-bottom: 1px solid #27272A;"><td style="padding: 6px 0; color: #A1A1AA;">Insignia:</td><td style="padding: 6px 0; color: #FFFFFF;">${configuracion.insignia ? escapeHtml(configuracion.insignia.forma) : 'Ninguna'}</td></tr>
              <tr><td style="padding: 6px 0; color: #A1A1AA;">Medidas:</td><td style="padding: 6px 0; color: #FFFFFF;">${medidasTexto}</td></tr>
            </table>
          </div>

          <p style="font-size: 12px; color: #71717A; line-height: 1.4; text-align: center;">
            Los archivos adjuntos contienen la lámina gráfica del maniquí en alta resolución y la ficha técnica en formato JSON.
          </p>
        </div>

        <div style="background: #121212; padding: 14px; text-align: center; font-size: 11px; color: #71717A; border-top: 1px solid #262626;">
          Marvel Sastrería • "No vendemos tallas, creamos prendas únicas" • Caracas, Venezuela
        </div>
      </div>
    `;

    console.log('[send-order] Enviando email vía Resend a:', toRecipients);

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: toRecipients,
      subject: `Nueva Orden Bespoke ${sanitizedOrderId} — ${clienteNombre}`,
      html: htmlBody,
      attachments
    });

    if (error) {
      console.error('[send-order] Resend devolvió error:', error);
      return {
        statusCode: error.name === 'validation_error' ? 400 : 500,
        headers,
        body: JSON.stringify({ error: error.message || 'Error al despachar el correo con Resend' })
      };
    }

    console.log('[send-order] Email despachado exitosamente. Message ID:', data?.id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        ordenId: sanitizedOrderId,
        messageId: data?.id
      })
    };
  } catch (err: any) {
    console.error('[send-order] Error inesperado:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || 'Error interno del servidor' })
    };
  }
};
