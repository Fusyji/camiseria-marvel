import React from 'react';
import { MessageCircle, MapPin, Clock, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const whatsappUrl = "https://wa.me/58+584242720943?text=Hola%20Marvel%20Sastrer%C3%ADa,%20deseo%20reservar%20mi%20cita%20de%20toma%20de%20medidas%20y%20asesor%C3%ADa%20bespoke.";

  return (
    <section
      id="contacto"
      className="py-24 sm:py-32 bg-stone-100/60 dark:bg-[#0c0c0e] border-t border-slate-200/80 dark:border-zinc-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E50914] mb-3">
            Atelier & Reserva
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-tight">
            Reserva tu Cita en el Atelier
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light leading-relaxed">
            Cada cita es una sesión privada de estilismo sartorial, toma de medidas anatómicas
            y selección táctil de los tejidos más exclusivos de Italia y Egipto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Netlify Forms Container */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900/90 rounded-xl p-8 sm:p-10 border border-slate-200 dark:border-zinc-800 shadow-sm">
            <div className="border-b border-slate-100 dark:border-zinc-800 pb-5 mb-8">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E50914] font-bold block mb-1">
                Formulario de Contacto
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                Solicitud de Asesoría Sartorial
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-light mt-1">
                Completa tus requerimientos para que nuestro maestro camisero prepare la muestra textil para tu cita.
              </p>
            </div>

            {/* 
              NETLIFY FORM COMPLIANCE:
              - data-netlify="true"
              - name="contacto_marvel"
              - Inside <form>, exact requested text: [ data del formulario aquí ]
              - Submit button: "Solicitar Asesoría a Medida" in Rojo Marvel
            */}
            <form
              id="form-contacto-marvel"
              name="contacto_marvel"
              method="POST"
              data-netlify="true"
              className="flex flex-col gap-6"
            >
              {/* Hidden input for Netlify form processing */}
              <input type="hidden" name="form-name" value="contacto_marvel" />

              {/* Exact placeholder required by user */}
              <div
                id="netlify-form-body-placeholder"
                className="p-8 rounded-lg bg-stone-50 dark:bg-zinc-950/60 border border-dashed border-slate-300 dark:border-zinc-700/80 text-center font-mono text-sm text-stone-600 dark:text-stone-400 select-all"
              >
                [ data del formulario aquí ]
              </div>

              {/* Submit button in Rojo Marvel */}
              <button
                id="btn-solicitar-asesoria"
                type="submit"
                className="w-full py-4 px-6 rounded bg-[#E50914] hover:bg-[#c80812] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar Asesoría a Medida</span>
              </button>
            </form>
          </div>

          {/* Right Column: Atelier Info & Direct Concierge via WhatsApp */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct WhatsApp Concierge Card */}
            <div
              id="concierge-whatsapp-card"
              className="p-8 rounded-xl bg-stone-950 text-stone-100 border border-zinc-800 shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E50914]/15 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-3 text-emerald-400 mb-4">
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  Canal Concierge Directo
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Atención Inmediata por WhatsApp
              </h4>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                Comunícate directamente con nuestro maestro de corte para resolver dudas,
                coordinar visitas a domicilio o confirmar la disponibilidad de paños exclusivos.
              </p>

              <a
                id="contact-whatsapp-link"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar: +58 424 2720943</span>
              </a>
            </div>

            {/* Atelier Details */}
            <div className="p-8 rounded-xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xs flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-zinc-800 text-[#E50914] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm">
                    Atelier & Sala de Medidas
                  </h5>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-light mt-0.5">
                    Servicio exclusivo de cita previa. Asesoría sartorial a domicilio o en nuestro taller.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-zinc-800 text-[#E50914] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm">
                    Horarios de Atención Sartorial
                  </h5>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-light mt-0.5">
                    Lunes a Sábado: 9:00 - 19:00 (Previa Reserva)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-zinc-800 text-[#E50914] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm">
                    Garantía del Ajuste Perfecto
                  </h5>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-light mt-0.5">
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
