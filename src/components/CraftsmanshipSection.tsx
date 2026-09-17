import React from 'react';
import { Crown, Scissors, Shield, Sparkles, CheckCircle2, Ruler, Award, Eye } from 'lucide-react';
import { BRAND_VALUES, BESPOKE_PILLARS } from '../data/shirts';

export const CraftsmanshipSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#E50914]" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-[#E50914]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#E50914]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#E50914]" />;
    }
  };

  return (
    <section
      id="experiencia"
      className="py-24 sm:py-32 bg-stone-100/70 dark:bg-[#0c0c0e] border-y border-slate-200/80 dark:border-zinc-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E50914] mb-4">
            El Arte del Bespoke
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-tight">
            La Maestría de Crear para una Sola Anatomía
          </h2>
          <p className="mt-5 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light leading-relaxed">
            En Marvel Sastrería (MR), desterramos el concepto de producción en masa.
            Cada camisa nace de un pliego de papel en blanco donde se plasman tus medidas,
            tu postura corporal y tu identidad sartorial.
          </p>
        </div>

        {/* 4 Brand Book Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {BRAND_VALUES.map((val) => (
            <div
              key={val.id}
              id={`value-card-${val.id}`}
              className="bg-white dark:bg-zinc-900/90 rounded-lg p-7 border border-slate-200 dark:border-zinc-800/80 hover:border-slate-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-stone-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  {getIcon(val.iconName)}
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#E50914] transition-colors">
                  {val.title}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E50914] mt-1 mb-3">
                  {val.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-stone-400 font-medium">
                <span>Marvel Sastrería</span>
                <span className="text-[#E50914] font-serif font-bold">MR</span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Statement Quote Callout */}
        <div
          id="brand-quote-banner"
          className="relative overflow-hidden rounded-xl bg-stone-950 text-stone-100 p-8 sm:p-12 md:p-16 border border-zinc-800 shadow-xl mb-24"
        >
          {/* Subtle red accent bar */}
          <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-[#E50914]"></div>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#E50914] font-bold">
                Manifiesto de Marca
              </span>
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide italic text-stone-100 leading-tight">
                "El verdadero lujo reside en lo microscópico."
              </blockquote>
              <p className="text-xs sm:text-sm text-stone-400 tracking-wider uppercase font-medium">
                Marvel Sastrería (MR) • Confección Su Misura
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-4">
              <div className="w-16 h-16 rounded-md bg-zinc-900 border border-zinc-700/80 flex items-center justify-center">
                <span className="font-serif text-2xl font-black text-[#E50914]">
                  M<span className="text-slate-300 font-light">R</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Our 3 Pillars & Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BESPOKE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              id={`pillar-card-${idx + 1}`}
              className="relative p-8 rounded-lg bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-light text-[#E50914] mb-3 block">
                  0{idx + 1}
                </span>
                <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Garantía de Autor MR</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
