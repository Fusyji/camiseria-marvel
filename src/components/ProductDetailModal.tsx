import React, { useState } from 'react';
import { Shirt } from '../types';
import { X, Check, MessageCircle, Scissors, Sparkles, ShieldCheck } from 'lucide-react';

interface ProductDetailModalProps {
  shirt: Shirt | null;
  onClose: () => void;
  onOpenCustomBuilder: (shirt: Shirt) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  shirt,
  onClose,
  onOpenCustomBuilder,
}) => {
  if (!shirt) return null;

  const [selectedColor, setSelectedColor] = useState(shirt.colors[0] || 'Tono Original');
  const [monogramInitials, setMonogramInitials] = useState(shirt.monogramDefault || 'MR');

  const whatsappMessage = encodeURIComponent(
    `Hola Marvel Sastrería (MR), deseo solicitar asesoría para la camisa Bespoke: *${shirt.name}* (Ref: ${shirt.code}, Maniquí 0${shirt.indexNumber}).\n\n` +
    `• Tejido: ${shirt.fabric} (${shirt.fabricOrigin})\n` +
    `• Cuello: ${shirt.collar}\n` +
    `• Puño: ${shirt.cuff}\n` +
    `• Color/Acabado: ${selectedColor}\n` +
    `• Iniciales para monograma: ${monogramInitials}\n\n` +
    `Deseo concertar una cita para toma de medidas y calce anatómico (El Ajuste Perfecto).`
  );

  const whatsappUrl = `https://wa.me/58+584242720943?text=${whatsappMessage}`;

  return (
    <div
      id="product-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-white dark:bg-[#0c0c0e] rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana de detalles"
          className="absolute top-4 right-4 z-20 bg-stone-100 hover:bg-stone-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-stone-700 dark:text-stone-300 p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Side: Mannequin Showcase */}
        <div className="md:w-1/2 bg-stone-100 dark:bg-zinc-950 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-zinc-800/80 relative">
          <div className="aspect-[3/4] w-full max-w-sm rounded-lg overflow-hidden relative flex items-center justify-center">
            {/* Exact required image tag */}
            <img
              src={shirt.image}
              alt={shirt.altText}
              className="w-full h-full object-contain"
            />
            <div className="absolute top-2 left-2 bg-[#09090b]/90 border border-zinc-700 backdrop-blur-sm text-[#E50914] text-[10px] font-bold px-2.5 py-1 rounded">
              MR • 0{shirt.indexNumber}
            </div>
            <div className="absolute bottom-2 right-2 bg-white/90 dark:bg-zinc-900/90 text-stone-700 dark:text-stone-300 text-[10px] font-mono px-2.5 py-1 rounded border border-slate-200 dark:border-zinc-800">
              {shirt.code}
            </div>
          </div>
          <p className="mt-3 text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-widest font-medium">
            Maniquí Torso • Confección Su Misura
          </p>
        </div>

        {/* Bespoke Information & Action Side */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-[#E50914] mb-2">
              <span>{shirt.fabricOrigin}</span>
              <span>•</span>
              <span>100% Bespoke</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
              {shirt.name}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              {shirt.description}
            </p>

            {/* Bespoke Specs Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-md bg-stone-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block">
                  Tejido Noble
                </span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">
                  {shirt.fabric}
                </span>
              </div>
              <div className="p-3 rounded-md bg-stone-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block">
                  Estructura de Cuello
                </span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">
                  {shirt.collar}
                </span>
              </div>
            </div>

            {/* Colors / Tonos Sartoriales */}
            <div className="mt-5">
              <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 block mb-2">
                Gama Textil Disponible:
              </label>
              <div className="flex flex-wrap gap-2">
                {shirt.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                      selectedColor === color
                        ? 'bg-[#E50914] text-white shadow-xs'
                        : 'bg-stone-100 dark:bg-zinc-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Monogram Personalization Input */}
            <div className="mt-5 p-3 rounded-lg bg-stone-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
              <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 flex items-center justify-between mb-1.5">
                <span>Bordado de Iniciales (Monograma)</span>
                <span className="text-[#E50914] text-[10px]">Sin Costo Adicional</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  maxLength={4}
                  value={monogramInitials}
                  onChange={(e) => setMonogramInitials(e.target.value.toUpperCase())}
                  placeholder="Ej: M.R."
                  className="px-3 py-1.5 text-xs font-serif font-bold uppercase tracking-widest rounded bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 text-stone-900 dark:text-stone-100 w-28 focus:outline-none focus:border-[#E50914]"
                />
                <span className="text-[11px] text-stone-500 font-light">
                  Bordado artesanal en seda en puño o faldón.
                </span>
              </div>
            </div>

            {/* Sartorial Promise */}
            <div className="mt-5 space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
              {shirt.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#E50914] shrink-0 mt-0.5" />
                  <span className="font-light">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row gap-3">
            <a
              id="modal-whatsapp-consult-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-4 rounded bg-[#E50914] hover:bg-[#c80812] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Cita para esta Prenda</span>
            </a>

            <button
              id="modal-open-builder-btn"
              type="button"
              onClick={() => {
                onClose();
                onOpenCustomBuilder(shirt);
              }}
              className="py-3.5 px-4 rounded border border-slate-300 dark:border-zinc-700 hover:border-stone-900 dark:hover:border-stone-100 text-stone-800 dark:text-stone-200 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Scissors className="w-4 h-4 text-[#E50914]" />
              <span>Diseña el tuyo</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
