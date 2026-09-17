import React from 'react';
import { ArrowRight, Scissors, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenCustomBuilder: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCustomBuilder,
  onExploreCollection,
}) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-stone-50 dark:bg-[#09090b] transition-colors duration-300"
    >
      {/* Background Architectural Canvas with subtle lighting and texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-25 mix-blend-overlay">
        <div className="w-full h-full bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Subtle chrome metallic glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-slate-200/50 dark:from-zinc-800/30 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Luxury Monogram Badge */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-xs mb-8 transition-transform hover:scale-102"
        >
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-700 dark:text-stone-300">
            Marvel Sastrería (MR) • Atelier Bespoke
          </span>
        </div>

        {/* Main Slogan from Brand Book */}
        <h1
          id="hero-slogan"
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 dark:text-stone-50 leading-[1.1] max-w-4xl"
        >
          No vendemos tallas, <br className="hidden sm:inline" />
          <span className="relative inline-block mt-1 sm:mt-0">
            creamos{' '}
            <span className="relative inline-block text-[#E50914] italic font-serif">
              prendas únicas.
            </span>
          </span>
        </h1>

        {/* Supporting Proposition */}
        <p
          id="hero-description"
          className="mt-6 text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-400 font-light max-w-2xl leading-relaxed tracking-wide"
        >
          Experiencia sartorial 100% personalizada donde tu anatomía, gusto e identidad
          son los protagonistas absolutos. Cada patrón se traza desde cero para abrazar
          la complexión irrepetible de quien lo porta.
        </p>

        {/* Key bespoke badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-semibold text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <Scissors className="w-3.5 h-3.5 text-[#E50914]" />
            <span>Patrón Individual</span>
          </div>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
            <span>Lino de Biella & Giza 87</span>
          </div>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E50914]" />
            <span>Ajuste Anatómico Absoluto</span>
          </div>
        </div>

        {/* Calls to Action */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA: Rojo Marvel */}
          <button
            id="hero-cta-custom-builder"
            onClick={onOpenCustomBuilder}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E50914] hover:bg-[#c80812] text-white px-8 py-4 rounded font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Diseña el tuyo (El Ajuste Perfecto)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA: Reserva tu cita / Ver Colección */}
          <a
            id="hero-cta-reserve-appointment"
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded border border-slate-300 dark:border-zinc-700 hover:border-stone-900 dark:hover:border-stone-100 bg-white dark:bg-zinc-900/60 text-stone-900 dark:text-stone-100 font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
          >
            Reserva tu cita
          </a>
        </div>

        {/* Micro-invitation to scroll down */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-stone-400 dark:text-stone-600">
          <span className="text-[10px] uppercase tracking-[0.3em]">Explorar Alta Confección</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#E50914] to-transparent animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
