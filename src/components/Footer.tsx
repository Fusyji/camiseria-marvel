import React from 'react';
import { MessageCircle, Shield, ArrowUp, Globe, Share2, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/58+584242720943?text=Hola%20Marvel%20Sastrer%C3%ADa,%20deseo%20más%20información.";

  return (
    <footer
      id="main-footer"
      className="bg-stone-950 text-stone-300 border-t border-zinc-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800">
          
          {/* Col 1: Brand & Essence */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                <span className="font-serif font-black text-xl text-[#E50914]">
                  M<span className="text-slate-200 font-light">R</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest uppercase text-white">
                  Marvel Sastrería
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#E50914] uppercase font-semibold">
                  Moda Masculina Bespoke
                </span>
              </div>
            </div>

            <p className="text-sm font-serif italic text-stone-300 max-w-sm pt-2">
              "No vendemos tallas, creamos prendas únicas."
            </p>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              Confección de alta camisería y sastrería 100% personalizada. Patrones trazados
              exclusivamente para la estructura anatómica del cliente con los tejidos más nobles de Europa.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#E50914] text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-zinc-800"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#E50914] text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-zinc-800"
                aria-label="Instagram"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:contacto@marvelsastreria.com"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#E50914] text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-zinc-800"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-stone-400">
              <li>
                <a href="#inicio" className="hover:text-[#E50914] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#E50914] transition-colors">
                  La Experiencia Bespoke
                </a>
              </li>
              <li>
                <a href="#configurador" className="hover:text-[#E50914] transition-colors">
                  Configurador (10 Pasos)
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#E50914] transition-colors">
                  Reserva de Citas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand Pillars & Bespoke Guarantee */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Criterio de Excelencia
            </h4>
            <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#E50914] font-semibold">
                <Shield className="w-3.5 h-3.5" />
                <span>Garantía de Autor MR</span>
              </div>
              <p className="text-stone-400 font-light leading-relaxed">
                Entendemos que el verdadero lujo reside en lo microscópico: el calibre del hilo,
                el peso del botón de nácar y la precisión del monograma bordado.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar: Legal & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>© 2026 Marvel Sastrería (MR). Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-6">
            <a href="#contacto" className="hover:text-stone-300 transition-colors">
              Términos Sartoriales
            </a>
            <span className="text-zinc-700">•</span>
            <a href="#contacto" className="hover:text-stone-300 transition-colors">
              Privacidad & Confidencialidad
            </a>
            <span className="text-zinc-700">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#E50914] transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
