import React, { useState } from 'react';
import { X, Scissors, Check, Sparkles, MessageCircle, Ruler } from 'lucide-react';
import { CustomShirtConfig } from '../types';

interface CustomBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedFabric?: string;
}

export const CustomBuilderModal: React.FC<CustomBuilderModalProps> = ({
  isOpen,
  onClose,
  preselectedFabric,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [config, setConfig] = useState<CustomShirtConfig>({
    fabric: preselectedFabric || 'Lino Italiano Puro de Biella',
    fabricColor: 'Arena Natural',
    collar: 'Italiano (Cutaway)',
    cuff: 'Puño Redondeado de 1 Botón',
    fit: 'El Ajuste Perfecto (Trazado Anatómico Individual)',
    placket: 'Tapeta Oculta Sartorial (Fly Front)',
    pocket: false,
    monogram: {
      enabled: true,
      initials: 'MR',
      position: 'Puño izquierdo',
      fontStyle: 'Serif Tradicional',
      threadColor: 'Rojo Marvel' as any,
    },
    notes: '',
    clientName: '',
    clientPhone: '',
  });

  const fabricsList = [
    {
      name: 'Lino Italiano Puro de Biella',
      desc: 'Noble, fresco y transpirable. Tejido en el Piamonte italiano.',
      colors: ['Arena Natural', 'Blanco Lino', 'Azul Cielo', 'Tabaco Claro', 'Verde Saboya'],
    },
    {
      name: 'Algodón Egipcio Giza 87 (120/2)',
      desc: 'Hilatura a dos cabos cosechada a mano. Tacto sedoso y brillo natural superior.',
      colors: ['Blanco Puro Óptico', 'Celeste Riviera', 'Milrayas Azul/Blanco', 'Rosa Pálido'],
    },
    {
      name: 'Popelín Suizo 140/2',
      desc: 'Hilatura densa y ligera. Máxima distinción para trajes ejecutivos de gala.',
      colors: ['Blanco Níveo', 'Negro Profundo', 'Azul Noche'],
    },
    {
      name: 'Oxford Royal Pinpoint',
      desc: 'Trama canasta refinada con gran cuerpo estructural y resistencia al arrugado.',
      colors: ['Azul Oxford', 'Blanco Imperial', 'Gris Plata'],
    },
    {
      name: 'Twill de Alta Densidad',
      desc: 'Caída impecable con trama diagonal de sedosidad insuperable.',
      colors: ['Blanco Seda', 'Azul Marino', 'Plata Cromo'],
    },
  ];

  const collars = [
    { name: 'Italiano (Cutaway)', desc: 'Puntas abiertas, ideal para nudos medios o corbata desanudada.' },
    { name: 'Francés Clásico', desc: 'Atura equilibrada tradicional, máxima elegancia formal.' },
    { name: 'Button-Down', desc: 'Con botones ocultos o vistos, curvatura perfecta estilo roll collar.' },
    { name: 'Semi-Spread', desc: 'El cuello más polivalente de la sastrería británica moderna.' },
    { name: 'Cuello Mao', desc: 'Contemporáneo y minimalista, estructura erguida de 3.2 cm.' },
  ];

  const cuffs = [
    { name: 'Doble Francés (Para Gemelos)', desc: 'Formalidad suprema para smoking, ceremonia y directiva.' },
    { name: 'Puño Redondeado de 1 Botón', desc: 'Corte sastre limpio con botón de madreperla.' },
    { name: 'Puño Biselado de 2 Botones', desc: 'Ajuste anatómico a la muñeca con esquinas recortadas.' },
  ];

  const whatsappMessage = encodeURIComponent(
    `Hola Marvel Sastrería (MR), deseo coordinar mi cita para la confección Bespoke de una camisa personalizada con las siguientes especificaciones:\n\n` +
    `• Tejido: ${config.fabric}\n` +
    `• Tono: ${config.fabricColor}\n` +
    `• Cuello: ${config.collar}\n` +
    `• Puño: ${config.cuff}\n` +
    `• Calce: El Ajuste Perfecto (Bespoke Anatómico)\n` +
    `• Tapeta: ${config.placket}\n` +
    `• Monograma: ${config.monogram.enabled ? `"${config.monogram.initials}" (${config.monogram.position}, Hilo ${config.monogram.threadColor})` : 'Sin monograma'}\n` +
    (config.clientName ? `• Cliente: ${config.clientName}\n` : '') +
    (config.clientPhone ? `• Contacto: ${config.clientPhone}\n` : '') +
    (config.notes ? `• Notas de calce: ${config.notes}\n` : '') +
    `\n"No vendemos tallas, creamos prendas únicas." Deseo agendar toma de medidas en el Atelier.`
  );

  const whatsappUrl = `https://wa.me/58+584242720943?text=${whatsappMessage}`;

  return (
    <div
      id="custom-builder-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-white dark:bg-[#0c0c0e] rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-hidden border border-slate-200 dark:border-zinc-800 flex flex-col relative">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between bg-stone-50 dark:bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#09090b] border border-zinc-700 flex items-center justify-center">
              <span className="font-serif font-black text-lg text-[#E50914]">
                M<span className="text-slate-300 font-light">R</span>
              </span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                El Ajuste Perfecto • Asistente Bespoke
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#E50914] font-semibold">
                "No vendemos tallas, creamos prendas únicas"
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar asistente"
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-zinc-800 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step indicator */}
        <div className="px-6 py-3 bg-stone-100 dark:bg-zinc-900/80 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs">
          {[
            { s: 1, label: 'Tejido Noble' },
            { s: 2, label: 'Estructura' },
            { s: 3, label: 'Monograma & Medidas' },
            { s: 4, label: 'Resumen' },
          ].map((item) => (
            <div
              key={item.s}
              className={`flex items-center gap-2 font-medium cursor-pointer ${
                step === item.s
                  ? 'text-[#E50914] font-bold'
                  : step > item.s
                  ? 'text-stone-700 dark:text-stone-300'
                  : 'text-stone-400 dark:text-stone-600'
              }`}
              onClick={() => setStep(item.s as any)}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step === item.s
                    ? 'bg-[#E50914] text-white'
                    : step > item.s
                    ? 'bg-stone-300 dark:bg-zinc-700 text-stone-900 dark:text-stone-100'
                    : 'bg-stone-200 dark:bg-zinc-800 text-stone-500'
                }`}
              >
                {item.s}
              </span>
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: Tejido */}
          {step === 1 && (
            <div className="space-y-5">
              <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                Selecciona la fibra y el tono artesanal
              </h4>
              <div className="space-y-3">
                {fabricsList.map((f) => (
                  <div
                    key={f.name}
                    onClick={() => {
                      setConfig((prev) => ({
                        ...prev,
                        fabric: f.name,
                        fabricColor: f.colors[0],
                      }));
                    }}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      config.fabric === f.name
                        ? 'border-[#E50914] bg-stone-50 dark:bg-zinc-900/90 shadow-sm ring-1 ring-[#E50914]'
                        : 'border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                        {f.name}
                      </span>
                      {config.fabric === f.name && (
                        <Check className="w-4 h-4 text-[#E50914]" />
                      )}
                    </div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light mb-3">
                      {f.desc}
                    </p>

                    {config.fabric === f.name && (
                      <div className="mt-2 pt-2 border-t border-slate-200 dark:border-zinc-800">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-600 dark:text-stone-300 block mb-1.5">
                          Tono Seleccionado:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {f.colors.map((c) => (
                            <button
                              key={c}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setConfig((prev) => ({ ...prev, fabricColor: c }));
                              }}
                              className={`px-3 py-1 rounded text-xs transition-all ${
                                config.fabricColor === c
                                  ? 'bg-[#E50914] text-white font-semibold shadow-xs'
                                  : 'bg-stone-200 dark:bg-zinc-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300'
                              }`}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Estructura */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">
                  Estructura de Cuello
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {collars.map((c) => (
                    <div
                      key={c.name}
                      onClick={() => setConfig((prev) => ({ ...prev, collar: c.name }))}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                        config.collar === c.name
                          ? 'border-[#E50914] bg-stone-50 dark:bg-zinc-900 ring-1 ring-[#E50914]'
                          : 'border-slate-200 dark:border-zinc-800 hover:border-slate-400'
                      }`}
                    >
                      <div className="font-semibold text-xs text-stone-900 dark:text-stone-100 flex items-center justify-between">
                        <span>{c.name}</span>
                        {config.collar === c.name && <Check className="w-3.5 h-3.5 text-[#E50914]" />}
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light mt-1">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">
                  Diseño de Puños
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cuffs.map((cu) => (
                    <div
                      key={cu.name}
                      onClick={() => setConfig((prev) => ({ ...prev, cuff: cu.name }))}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                        config.cuff === cu.name
                          ? 'border-[#E50914] bg-stone-50 dark:bg-zinc-900 ring-1 ring-[#E50914]'
                          : 'border-slate-200 dark:border-zinc-800 hover:border-slate-400'
                      }`}
                    >
                      <div className="font-semibold text-xs text-stone-900 dark:text-stone-100 flex items-center justify-between">
                        <span>{cu.name}</span>
                        {config.cuff === cu.name && <Check className="w-3.5 h-3.5 text-[#E50914]" />}
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light mt-1">
                        {cu.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Monograma & Medidas */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="p-5 rounded-lg bg-stone-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                      Bordado de Iniciales (Monograma MR)
                    </h4>
                    <p className="text-xs text-stone-500 font-light">
                      Firma personal de autor sobre tu camisa bespoke.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.monogram.enabled}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        monogram: { ...prev.monogram, enabled: e.target.checked },
                      }))
                    }
                    className="w-4 h-4 text-[#E50914] rounded focus:ring-[#E50914] cursor-pointer"
                  />
                </div>

                {config.monogram.enabled && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-200 dark:border-zinc-800 text-xs">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 dark:text-stone-300 mb-1">
                        Iniciales (Máx. 4):
                      </label>
                      <input
                        type="text"
                        maxLength={4}
                        value={config.monogram.initials}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            monogram: { ...prev.monogram, initials: e.target.value.toUpperCase() },
                          }))
                        }
                        placeholder="Ej. MR"
                        className="w-full px-3 py-1.5 rounded border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-900 dark:text-stone-100 font-serif font-bold uppercase tracking-widest focus:outline-none focus:border-[#E50914]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 dark:text-stone-300 mb-1">
                        Ubicación:
                      </label>
                      <select
                        value={config.monogram.position}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            monogram: { ...prev.monogram, position: e.target.value as any },
                          }))
                        }
                        className="w-full px-3 py-1.5 rounded border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-900 dark:text-stone-100 text-xs"
                      >
                        <option value="Puño izquierdo">Puño izquierdo</option>
                        <option value="Pecho">Pecho</option>
                        <option value="Costado bajo">Costado bajo (Faldón)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 dark:text-stone-300 mb-1">
                        Color del Hilo:
                      </label>
                      <select
                        value={config.monogram.threadColor}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            monogram: { ...prev.monogram, threadColor: e.target.value as any },
                          }))
                        }
                        className="w-full px-3 py-1.5 rounded border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-900 dark:text-stone-100 text-xs"
                      >
                        <option value="Rojo Marvel">Rojo Marvel (Sartorial)</option>
                        <option value="Plata Cromo">Plata Cromo (Brillante)</option>
                        <option value="Azul Noche">Azul Noche</option>
                        <option value="Tono sobre Tono">Tono sobre Tono</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                  Notas de anatomía o especificaciones (opcional):
                </label>
                <textarea
                  rows={3}
                  value={config.notes}
                  onChange={(e) => setConfig((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="ej. Hombro derecho caído, reloj voluminoso en muñeca izquierda, preferencia de entallado o fechas especiales."
                  className="w-full p-3 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#E50914]"
                ></textarea>
              </div>
            </div>
          )}

          {/* STEP 4: Resumen & Concierge Dispatch */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-stone-50 dark:bg-zinc-900/90 rounded-lg p-5 border border-slate-200 dark:border-zinc-800">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-zinc-800">
                  <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base">
                    Especificación Sartorial a Medida
                  </h4>
                  <span className="text-[10px] uppercase tracking-widest text-[#E50914] font-bold">
                    100% Bespoke
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Tejido:</span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">{config.fabric}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Tono Textil:</span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">{config.fabricColor}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Cuello:</span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">{config.collar}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Puño:</span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">{config.cuff}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Calce:</span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">{config.fit}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Monograma:</span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">
                      {config.monogram.enabled ? `"${config.monogram.initials}" (${config.monogram.threadColor})` : 'Sin monograma'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Client Info inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Tu Nombre Completo:
                  </label>
                  <input
                    type="text"
                    value={config.clientName}
                    placeholder="ej. Santiago Álvarez"
                    onChange={(e) => setConfig((prev) => ({ ...prev, clientName: e.target.value }))}
                    className="w-full px-3 py-2 rounded border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#E50914]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Número de Contacto / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    value={config.clientPhone}
                    placeholder="ej. +58 424 1234567"
                    onChange={(e) => setConfig((prev) => ({ ...prev, clientPhone: e.target.value }))}
                    className="w-full px-3 py-2 rounded border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#E50914]"
                  />
                </div>
              </div>

              {/* Direct dispatch to WhatsApp */}
              <a
                id="btn-enviar-especificaciones-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E50914] hover:bg-[#c80812] text-white font-bold py-4 px-6 rounded text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Especificaciones al Atelier por WhatsApp</span>
              </a>
            </div>
          )}

        </div>

        {/* Footer controls */}
        <div className="bg-stone-50 dark:bg-zinc-950 px-6 py-4 border-t border-slate-200 dark:border-zinc-800 flex justify-between items-center text-xs">
          {step > 1 ? (
            <button
              onClick={() => setStep((prev) => (prev - 1) as any)}
              className="px-4 py-2 rounded border border-slate-300 dark:border-zinc-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-zinc-800 font-medium cursor-pointer"
            >
              Atrás
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={() => setStep((prev) => (prev + 1) as any)}
              className="px-6 py-2.5 rounded bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-[#E50914] dark:hover:bg-[#E50914] dark:hover:text-white font-bold uppercase tracking-wider cursor-pointer transition-colors"
            >
              Continuar al Paso {step + 1}
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded border border-slate-300 dark:border-zinc-700 text-stone-600 dark:text-stone-300 hover:bg-stone-100 cursor-pointer"
            >
              Cerrar Asistente
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
