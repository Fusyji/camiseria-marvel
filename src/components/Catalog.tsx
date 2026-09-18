import React, { useState } from 'react';
import { Shirt } from '../types';
import { ShoppingBag, Scissors, Eye, MessageCircle } from 'lucide-react';

interface CatalogProps {
  shirts: Shirt[];
  onSelectShirt: (shirt: Shirt) => void;
  onOpenCustomBuilder: (preselectedShirt?: Shirt) => void;
}

export const Catalog: React.FC<CatalogProps> = ({
  shirts,
  onSelectShirt,
  onOpenCustomBuilder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Toda la Colección (10 Piezas)' },
    { id: 'nueva-coleccion', label: 'Nueva Colección' },
    { id: 'ejecutiva', label: 'Línea Ejecutiva' },
    { id: 'smart-casual', label: 'SmartWatch Casual' },
    { id: 'cuadros', label: 'Cuadros & Vichy' },
    { id: 'signature', label: 'Signature & Edición Limitada' },
  ];

  const filteredShirts = shirts.filter((shirt) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      shirt.category === selectedCategory ||
      (selectedCategory === 'signature' && (shirt.category === 'signature' || shirt.badge === 'Edición Limitada')) ||
      (selectedCategory === 'nueva-coleccion' && (shirt.category === 'nueva-coleccion' || shirt.badge === 'Nueva Colección')) ||
      (selectedCategory === 'cuadros' && (shirt.category === 'cuadros' || shirt.badge === 'Atemporal'));
    
    const matchesSearch =
      shirt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (shirt.subtitle && shirt.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (shirt.badge && shirt.badge.toLowerCase().includes(searchQuery.toLowerCase())) ||
      shirt.fabric.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="coleccion"
      className="py-24 sm:py-32 bg-white dark:bg-[#09090b] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-900 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E50914] mb-3">
              Vitrinas Barbadens Luxury
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-tight">
              Showcase de Camisas de Autor
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light max-w-xl">
              10 maniquíes de torso de alta costura que ilustran la pureza de líneas,
              la nobleza de las fibras y el ajuste anatómico personalizado.
            </p>
          </div>

          {/* Slogan micro reminder */}
          <div className="text-right hidden lg:block">
            <span className="text-xs uppercase tracking-widest text-[#E50914] font-semibold block">
              100% Hecho a Medida
            </span>
            <span className="text-sm font-serif italic text-stone-500 dark:text-stone-400">
              "No vendemos tallas, creamos prendas únicas."
            </span>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 mb-12 border-b border-slate-200 dark:border-zinc-800/80">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-xs'
                  : 'bg-stone-100 dark:bg-zinc-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 border border-transparent hover:border-slate-300 dark:hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* The 10 Showcase Grid (5 columns x 2 rows on xl) */}
        <div
          id="mannequin-showcase-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8"
        >
          {filteredShirts.map((shirt) => {
            const whatsappShirtUrl = `https://wa.me/58+584242720943?text=Hola%20Marvel%20Sastrer%C3%ADa,%20deseo%20consultar%20la%20camisa%20bespoke%20modelo%20${encodeURIComponent(shirt.name)}%20(Ref:%20${shirt.code}).`;

            return (
              <div
                key={shirt.id}
                id={`mannequin-card-${shirt.indexNumber}`}
                className="group relative flex flex-col bg-stone-50/50 dark:bg-zinc-900/60 rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Visual Image Container with Clean Background & Subtle Chrome Plaque */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200/60 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center p-3">
                  
                  {/* Image with graceful fallback if the placeholder webp hasn't been uploaded yet */}
                  <img
                    src={shirt.image}
                    alt={shirt.altText}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackApplied) {
                        target.dataset.fallbackApplied = 'true';
                        target.src = `/maniqui_mr_${shirt.indexNumber}.png`;
                      }
                    }}
                    className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Badge: Index Number & Exact Badge Name from Catalog */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                    <span className="px-2 py-0.5 rounded bg-white/90 dark:bg-black/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-[#E50914] border border-slate-200 dark:border-zinc-800 shadow-xs">
                      MR • {shirt.indexNumber < 10 ? `0${shirt.indexNumber}` : shirt.indexNumber}
                    </span>
                    {shirt.badge && (
                      <span className={`px-2 py-0.5 rounded text-white text-[9px] font-bold uppercase tracking-widest shadow-xs ${
                        shirt.badge === 'Nueva Colección' || shirt.badge === 'Edición Limitada'
                          ? 'bg-[#E50914]'
                          : shirt.badge === 'Signature' || shirt.badge === 'Premium'
                          ? 'bg-stone-900 dark:bg-stone-800 border border-zinc-700'
                          : 'bg-zinc-800/95 dark:bg-zinc-800 text-stone-200'
                      }`}>
                        {shirt.badge}
                      </span>
                    )}
                  </div>

                  {/* Subtle Chrome border frame accent */}
                  <div className="absolute inset-2 pointer-events-none rounded-lg border border-slate-300/40 dark:border-zinc-700/40 group-hover:border-[#E50914]/40 transition-colors duration-500"></div>

                  {/* Quick Action Overlay on Hover */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
                    <button
                      type="button"
                      onClick={() => onSelectShirt(shirt)}
                      className="px-3 py-2 rounded bg-white text-stone-950 text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-stone-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Ver Ficha
                    </button>
                    <a
                      href={whatsappShirtUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-[#E50914] text-white hover:bg-[#c80812] transition-colors shadow-lg cursor-pointer"
                      title="Consultar por WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Card Editorial Info */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white dark:bg-zinc-900/90">
                  <div>
                    {/* Origin Tag & Monogram Default */}
                    <div className="flex items-center justify-between text-[11px] text-stone-400 font-medium mb-1.5">
                      <span className="uppercase tracking-wider truncate max-w-[150px]">{shirt.fabricOrigin}</span>
                      <span className="text-[#E50914] font-semibold shrink-0">{shirt.monogramDefault}</span>
                    </div>

                    {/* Shirt Title */}
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#E50914] transition-colors line-clamp-1">
                      {shirt.name}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 font-light line-clamp-2 leading-relaxed">
                      {shirt.subtitle || shirt.description}
                    </p>
                  </div>

                  {/* Action Buttons: COMPRAR & Ver Detalles (Zero Precios) */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex flex-col gap-2">
                    <button
                      type="button"
                      id={`btn-comprar-${shirt.indexNumber}`}
                      onClick={() => onOpenCustomBuilder(shirt)}
                      className="w-full py-2.5 px-3 rounded bg-stone-900 dark:bg-stone-100 hover:bg-[#E50914] dark:hover:bg-[#E50914] text-white dark:text-stone-900 dark:hover:text-white font-semibold text-[11px] uppercase tracking-[0.15em] transition-all duration-300 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>COMPRAR</span>
                    </button>

                    <button
                      type="button"
                      id={`btn-detalles-${shirt.indexNumber}`}
                      onClick={() => onSelectShirt(shirt)}
                      className="w-full py-1.5 text-center text-[10px] uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 transition-colors font-medium cursor-pointer"
                    >
                      El Ajuste Perfecto • Ver Detalles
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Consultation */}
        <div className="mt-16 text-center p-8 rounded-xl bg-stone-100 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              ¿Deseas una configuración sartorial enteramente única?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light mt-1">
              Selecciona tu propio paño, tipo de cuello, puño y bordado de monograma en nuestro configurador bespoke.
            </p>
          </div>
          <button
            onClick={() => onOpenCustomBuilder()}
            className="shrink-0 px-6 py-3.5 rounded bg-[#E50914] hover:bg-[#c80812] text-white text-xs font-semibold uppercase tracking-[0.2em] shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <Scissors className="w-4 h-4" />
            <span>Iniciar Asistente Bespoke</span>
          </button>
        </div>

      </div>
    </section>
  );
};
