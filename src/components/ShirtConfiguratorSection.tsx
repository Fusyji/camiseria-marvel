import React, { useEffect, useRef, useState } from 'react';
import { mountShirtConfigurator, ShirtConfig } from '../shirt-configurator';
import { CheckCircle2, Sparkles, Send, Loader2, MessageSquare, AlertCircle, RefreshCw, X } from 'lucide-react';
import { convertSvgToPngBase64 } from '../utils/exportSvgToPng';

export const ShirtConfiguratorSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const configuratorInstanceRef = useRef<{ destroy: () => void; reset?: () => void } | null>(null);

  const [completedConfig, setCompletedConfig] = useState<ShirtConfig | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [notas, setNotas] = useState('');

  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Mount pure TypeScript configurator instance
    const instance = mountShirtConfigurator(containerRef.current, {
      logoSrc: '/images/mr-logo-monogram.png',
      onComplete: (config) => {
        setCompletedConfig(config);
        setIsModalOpen(true);
        setSubmitSuccess(false);
        setErrorMessage(null);
      }
    });

    configuratorInstanceRef.current = instance;

    return () => {
      instance.destroy();
    };
  }, []);

  const handleSendOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!completedConfig) return;

    if (!nombre.trim() || !email.trim()) {
      setErrorMessage('Por favor ingresa tu nombre y correo electrónico para registrar tu pedido.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const generatedOrderId = `MR-${Date.now().toString(36).toUpperCase()}`;

    // Obtener vista previa SVG del maniquí y convertirla a PNG
    let previewPngBase64 = '';
    const svgEl = document.querySelector('#mr-svg-wrapper svg') as SVGElement | null;
    if (svgEl) {
      previewPngBase64 = await convertSvgToPngBase64(svgEl);
    }

    const payload = {
      ordenId: generatedOrderId,
      fecha: new Date().toISOString(),
      cliente: {
        nombre: nombre.trim(),
        email: email.trim(),
        telefono: telefono.trim() || 'No proporcionado',
        notas: notas.trim() || 'Ninguna'
      },
      configuracion: completedConfig,
      previewPngBase64
    };

    try {
      const response = await fetch('/.netlify/functions/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setOrderId(generatedOrderId);
        setSubmitSuccess(true);
      } else {
        const errorDetail = data.error || 'Hubo un inconveniente al conectar con el atelier.';
        setErrorMessage(errorDetail);
      }
    } catch {
      setErrorMessage('No se pudo conectar con el servidor de envío. Puedes reintentar o comunicarte directamente por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetConfig = () => {
    setCompletedConfig(null);
    setIsModalOpen(false);
    setSubmitSuccess(false);
    setErrorMessage(null);
    window.location.hash = '#configurador';
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Marvel Sastrería, he completado mi diseño bespoke de camisa (Orden: ${orderId || 'Nueva Orden'}) a nombre de ${nombre || 'Cliente'}. Deseo consultar sobre la confección y cita.`
  );

  return (
    <section id="configurador" className="py-20 bg-[#0A0A0A] text-[#E6E7EB] border-t border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1111] border border-[#CC0001]/30 text-[#CC0001] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Configurador Bespoke 10 Pasos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6E7EB] mb-4">
            Diseña Tu Camisa de Autor
          </h2>
          <p className="text-[#A8ABB3] text-sm sm:text-base leading-relaxed">
            "No vendemos tallas, creamos prendas únicas." Define cada atributo artesanal con visualización anatómica en tiempo real.
          </p>
        </div>

        {/* DOM Mount Target for Plain TypeScript Configurator */}
        <div ref={containerRef} id="mr-shirt-configurator-container" className="w-full">
          {/* Loaded dynamically by mountShirtConfigurator() */}
        </div>

      </div>

      {/* Modal / Dialog de Encomienda y Confirmación de Pedido */}
      {isModalOpen && completedConfig && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl rounded-xl bg-[#141414] border border-[#333] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Header del Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-[#0F0F0F]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CC0001]"></span>
                <span className="font-serif text-sm uppercase tracking-widest text-[#E6E7EB] font-bold">
                  Marvel Sastrería • Atelier Bespoke
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded text-stone-400 hover:text-white transition-colors cursor-pointer"
                title="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 overflow-y-auto">
              {submitSuccess ? (
                /* ESTADO DE ÉXITO */
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-[#CC0001]/15 border-2 border-[#CC0001] flex items-center justify-center mx-auto mb-5 text-[#CC0001] shadow-lg shadow-[#CC0001]/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#E6E7EB] mb-2">
                    ¡Tu pedido ha sido enviado con éxito!
                  </h3>

                  <div className="inline-block px-3 py-1 rounded bg-[#222] border border-[#333] text-xs font-mono text-[#CC0001] font-semibold tracking-wider mb-4">
                    ORDEN: {orderId}
                  </div>

                  <p className="text-stone-300 text-sm leading-relaxed max-w-md mx-auto mb-6">
                    Hemos recibido los requerimientos de tu camisa de autor en nuestro atelier. Te hemos enviado un correo con el desglose artesanal y la reproducción gráfica anatómica. En breve nuestro maestro sastre se pondrá en contacto contigo.
                  </p>

                  <div className="p-4 rounded-lg bg-[#0A0A0A] border border-[#262626] text-left text-xs text-stone-400 space-y-1.5 mb-6 max-w-md mx-auto">
                    <p><strong className="text-stone-200">Cliente:</strong> {nombre}</p>
                    <p><strong className="text-stone-200">Correo:</strong> {email}</p>
                    <p><strong className="text-stone-200">Tejido:</strong> {completedConfig.tejido.name} ({completedConfig.color.name})</p>
                    <p><strong className="text-stone-200">Corte y Cuello:</strong> {completedConfig.corte.toUpperCase()} • {completedConfig.cuello.toUpperCase()}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/584242720943?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Contactar por WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleResetConfig}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#222] hover:bg-[#333] border border-[#444] text-[#E6E7EB] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Diseñar otra prenda</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* FORMULARIO DE ENVÍO AL ATELIER */
                <form onSubmit={handleSendOrder} className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#E6E7EB] mb-1">
                      Finalizar Encargo Bespoke
                    </h3>
                    <p className="text-xs text-stone-400">
                      Ingresa tus datos para registrar la orden en nuestro atelier y enviarte tu lámina de confección.
                    </p>
                  </div>

                  {/* Resumen sutil de la camisa */}
                  <div className="p-3 rounded-md bg-[#0A0A0A] border border-[#262626] text-xs text-stone-300 flex flex-wrap gap-x-4 gap-y-1">
                    <span><strong className="text-stone-400">Tejido:</strong> {completedConfig.tejido.name}</span>
                    <span><strong className="text-stone-400">Color:</strong> {completedConfig.color.name}</span>
                    <span><strong className="text-stone-400">Corte:</strong> {completedConfig.corte.toUpperCase()}</span>
                    <span><strong className="text-stone-400">Cuello:</strong> {completedConfig.cuello.toUpperCase()}</span>
                    {completedConfig.bordado.texto && (
                      <span><strong className="text-stone-400">Monograma:</strong> "{completedConfig.bordado.texto}"</span>
                    )}
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-md bg-red-950/40 border border-red-800/80 text-red-200 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-stone-400 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ej. Alejandro Rossi"
                        className="w-full px-3 py-2 text-sm rounded bg-[#1C1C1C] border border-[#333] text-white focus:outline-none focus:border-[#CC0001] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-stone-400 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@correo.com"
                        className="w-full px-3 py-2 text-sm rounded bg-[#1C1C1C] border border-[#333] text-white focus:outline-none focus:border-[#CC0001] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-stone-400 mb-1">
                      Teléfono / WhatsApp (Opcional para Citas)
                    </label>
                    <input
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="+58 424 000 0000"
                      className="w-full px-3 py-2 text-sm rounded bg-[#1C1C1C] border border-[#333] text-white focus:outline-none focus:border-[#CC0001] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-stone-400 mb-1">
                      Notas Especiales para el Sastre (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={notas}
                      onChange={(e) => setNotas(e.target.value)}
                      placeholder="Preferencias de caída, eventos específicos o indicaciones..."
                      className="w-full px-3 py-2 text-sm rounded bg-[#1C1C1C] border border-[#333] text-white focus:outline-none focus:border-[#CC0001] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#262626]">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                    >
                      Seguir Editando
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#CC0001] hover:bg-[#a80001] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer disabled:opacity-60 shadow-lg shadow-[#CC0001]/30"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitiendo al Atelier...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Pedido al Atelier</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

