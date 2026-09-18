import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const whatsappUrl = "https://wa.me/58+584242720943?text=Hola%20Marvel%20Sastrer%C3%ADa,%20deseo%20reservar%20mi%20cita%20de%20toma%20de%20medidas%20y%20asesor%C3%ADa%20bespoke.";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Si estamos en un entorno donde Netlify maneja el envío nativo, se procesa por POST.
    // Proporcionamos feedback visual al usuario en cliente mientras se despacha.
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contacto"
      className="py-24 sm:py-32 bg-[#0A0A0A] text-[#E6E7EB] border-t border-[#E6E7EB]/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#CC0001]/30 bg-[#CC0001]/10 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#CC0001] mb-4">
            Atelier &amp; Contacto
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Solicitud de Asesoría Sartorial
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E6E7EB]/70 font-light leading-relaxed">
            Ponte en contacto con nuestro taller para coordinar tu cita privada de toma de medidas,
            selección de paños exclusivos o resolver cualquier consulta de confección.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Formulario de Contacto */}
          <div className="lg:col-span-7 bg-[#0A0A0A] rounded-2xl p-8 sm:p-10 border border-[#E6E7EB]/20 shadow-2xl relative overflow-hidden">
            <div className="border-b border-[#E6E7EB]/10 pb-6 mb-8">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#CC0001] font-bold block mb-1">
                Formulario de Contacto
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Envíanos tu mensaje
              </h3>
              <p className="text-xs text-[#E6E7EB]/60 font-light mt-1.5">
                Los campos marcados con (<span className="text-[#CC0001] font-bold">*</span>) son requeridos para procesar tu solicitud.
              </p>
            </div>

            {submitted ? (
              <div
                id="form-success-banner"
                className="py-12 px-6 text-center flex flex-col items-center justify-center rounded-xl bg-white/[0.02] border border-[#E6E7EB]/15"
              >
                <div className="w-14 h-14 rounded-full bg-[#CC0001]/10 border border-[#CC0001]/30 flex items-center justify-center text-[#CC0001] mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white mb-2">
                  Mensaje Recibido
                </h4>
                <p className="text-sm text-[#E6E7EB]/70 max-w-md leading-relaxed font-light">
                  Gracias por escribirnos. Nuestro maestro de corte o asesor sartorial responderá a la brevedad posible.
                </p>
              </div>
            ) : (
              <form
                id="form-contacto-marvel"
                name="contacto_marvel"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Inputs ocultos requeridos por Netlify y Anti-Spam Honeypot */}
                <input type="hidden" name="form-name" value="contacto_marvel" />
                <p className="hidden">
                  <label htmlFor="bot-field">
                    No llenar este campo si eres humano:{' '}
                    <input id="bot-field" name="bot-field" />
                  </label>
                </p>

                {/* 1. Nombre completo */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nombre-completo"
                    className="text-xs uppercase tracking-wider text-[#E6E7EB]/90 font-medium flex items-center gap-1"
                  >
                    Nombre completo <span className="text-[#CC0001] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre-completo"
                    name="nombre_completo"
                    required
                    maxLength={80}
                    autoComplete="name"
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-4 py-3.5 rounded-lg bg-black/50 text-white placeholder-[#E6E7EB]/30 border border-[#E6E7EB]/20 focus:border-[#CC0001] focus:ring-1 focus:ring-[#CC0001] focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Grid 2 Columnas: Correo y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 2. Correo electrónico */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="correo-electronico"
                      className="text-xs uppercase tracking-wider text-[#E6E7EB]/90 font-medium flex items-center gap-1"
                    >
                      Correo electrónico <span className="text-[#CC0001] font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      id="correo-electronico"
                      name="email"
                      required
                      maxLength={100}
                      autoComplete="email"
                      placeholder="nombre@ejemplo.com"
                      className="w-full px-4 py-3.5 rounded-lg bg-black/50 text-white placeholder-[#E6E7EB]/30 border border-[#E6E7EB]/20 focus:border-[#CC0001] focus:ring-1 focus:ring-[#CC0001] focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  {/* 3. Teléfono (opcional) */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="telefono"
                      className="text-xs uppercase tracking-wider text-[#E6E7EB]/90 font-medium flex items-center justify-between"
                    >
                      <span>Teléfono</span>
                      <span className="text-[10px] text-[#E6E7EB]/40 lowercase tracking-normal font-light">opcional</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      maxLength={30}
                      autoComplete="tel"
                      placeholder="+58 412 0000000"
                      className="w-full px-4 py-3.5 rounded-lg bg-black/50 text-white placeholder-[#E6E7EB]/30 border border-[#E6E7EB]/20 focus:border-[#CC0001] focus:ring-1 focus:ring-[#CC0001] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* 4. Asunto (opcional) */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="asunto"
                    className="text-xs uppercase tracking-wider text-[#E6E7EB]/90 font-medium flex items-center justify-between"
                  >
                    <span>Asunto</span>
                    <span className="text-[10px] text-[#E6E7EB]/40 lowercase tracking-normal font-light">opcional</span>
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    maxLength={120}
                    placeholder="Ej. Cita para toma de medidas / Confección a medida"
                    className="w-full px-4 py-3.5 rounded-lg bg-black/50 text-white placeholder-[#E6E7EB]/30 border border-[#E6E7EB]/20 focus:border-[#CC0001] focus:ring-1 focus:ring-[#CC0001] focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* 5. Mensaje */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="mensaje"
                    className="text-xs uppercase tracking-wider text-[#E6E7EB]/90 font-medium flex items-center gap-1"
                  >
                    Mensaje <span className="text-[#CC0001] font-bold">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    maxLength={500}
                    rows={5}
                    placeholder="Describe los detalles de tu consulta, fecha preferida o requerimiento sartorial..."
                    className="w-full px-4 py-3.5 rounded-lg bg-black/50 text-white placeholder-[#E6E7EB]/30 border border-[#E6E7EB]/20 focus:border-[#CC0001] focus:ring-1 focus:ring-[#CC0001] focus:outline-none transition-colors text-sm resize-none"
                  />
                  <span className="text-[11px] text-[#E6E7EB]/40 text-right">
                    Máximo 500 caracteres
                  </span>
                </div>

                {/* 6. Checkbox de política de privacidad */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="politica-privacidad"
                    name="politica_privacidad"
                    required
                    className="mt-1 w-4 h-4 rounded border-[#E6E7EB]/30 bg-black/50 text-[#CC0001] focus:ring-[#CC0001] focus:ring-offset-0 focus:outline-none cursor-pointer accent-[#CC0001]"
                  />
                  <label
                    htmlFor="politica-privacidad"
                    className="text-xs text-[#E6E7EB]/80 leading-relaxed select-none cursor-pointer"
                  >
                    Acepto la política de privacidad y el tratamiento confidencial de mis datos para la gestión de citas y asesoría sartorial personalizada <span className="text-[#CC0001] font-bold">*</span>
                  </label>
                </div>

                {/* 7. Botón de envío con texto exacto "Enviar mensaje" */}
                <div className="pt-4">
                  <button
                    type="submit"
                    id="btn-enviar-mensaje"
                    className="w-full py-4 px-8 rounded-lg bg-[#CC0001] hover:bg-[#b30001] active:bg-[#990001] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-200 shadow-lg shadow-[#CC0001]/20 hover:shadow-[#CC0001]/35 focus:outline-none focus:ring-2 focus:ring-[#CC0001] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar mensaje</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Información y Canales del Atelier */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct WhatsApp Concierge Card */}
            <div
              id="concierge-whatsapp-card"
              className="p-8 rounded-2xl bg-black border border-[#E6E7EB]/20 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0001]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center gap-3 text-emerald-400 mb-4">
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  Canal Concierge Directo
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Atención Inmediata por WhatsApp
              </h4>

              <p className="text-xs sm:text-sm text-[#E6E7EB]/70 font-light leading-relaxed mb-6">
                Comunícate directamente con nuestro maestro de corte para resolver dudas,
                coordinar visitas a domicilio o consultar sobre disponibilidad de telas.
              </p>

              <a
                id="contact-whatsapp-link"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar: +58 424 2720943</span>
              </a>
            </div>

            {/* Atelier Info Cards */}
            <div className="p-8 rounded-2xl bg-black/60 border border-[#E6E7EB]/15 shadow-sm flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#CC0001]/10 border border-[#CC0001]/20 text-[#CC0001] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-white text-sm">
                    Atelier &amp; Sala de Medidas
                  </h5>
                  <p className="text-xs text-[#E6E7EB]/60 font-light mt-0.5">
                    Servicio exclusivo de cita previa. Asesoría sartorial a domicilio o en nuestro taller.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#CC0001]/10 border border-[#CC0001]/20 text-[#CC0001] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-white text-sm">
                    Horarios de Atención
                  </h5>
                  <p className="text-xs text-[#E6E7EB]/60 font-light mt-0.5">
                    Lunes a Sábado: 9:00 - 19:00 (Previa Reserva)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#CC0001]/10 border border-[#CC0001]/20 text-[#CC0001] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-white text-sm">
                    Garantía del Ajuste Perfecto
                  </h5>
                  <p className="text-xs text-[#E6E7EB]/60 font-light mt-0.5">
                    Cada prenda incluye prueba intermedia de calce hasta lograr una caída anatómica impecable.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
