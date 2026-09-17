import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenCustomBuilder: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleDarkMode,
  onOpenCustomBuilder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/58+584242720943?text=Hola%20Marvel%20Sastrer%C3%ADa,%20deseo%20solicitar%20una%20cita%20bespoke%20para%20crear%20mis%20camisas%20a%20medida.";

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-zinc-800/80 py-3.5'
          : 'bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-sm border-b border-slate-200/50 dark:border-zinc-800/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram Logo "MR" */}
        <a
          id="header-logo-link"
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-md bg-[#09090b] dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700/80 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
            <span className="font-serif font-black text-xl tracking-tighter text-[#E50914]">
              M<span className="text-slate-200 font-light ml-[-2px]">R</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.15em] text-stone-900 dark:text-stone-100 transition-colors uppercase">
              Marvel Sastrería
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#E50914] font-semibold uppercase -mt-0.5">
              Alta Sastrería Bespoke
            </span>
          </div>
        </a>

        {/* Clean Navigation Links: Inicio, La Experiencia, Colección, Contacto */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-stone-700 dark:text-stone-300">
          <a
            id="nav-link-inicio"
            href="#inicio"
            className="hover:text-[#E50914] transition-colors py-1 relative group"
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            id="nav-link-experiencia"
            href="#experiencia"
            className="hover:text-[#E50914] transition-colors py-1 relative group"
          >
            La Experiencia
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            id="nav-link-coleccion"
            href="#coleccion"
            className="hover:text-[#E50914] transition-colors py-1 relative group"
          >
            Colección
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            id="nav-link-contacto"
            href="#contacto"
            className="hover:text-[#E50914] transition-colors py-1 relative group"
          >
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Actions: Bespoke CTA + WhatsApp + Dark/Light Mode Toggle (Icon only) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Direct WhatsApp Concierge */}
          <a
            id="header-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors px-3 py-2"
            title="Asesoría Bespoke por WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden xl:inline">Citas: +58 424 2720943</span>
          </a>

          {/* Bespoke interactive launcher */}
          <button
            id="header-bespoke-builder-btn"
            onClick={onOpenCustomBuilder}
            className="hidden sm:inline-flex items-center justify-center text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded border border-slate-300 dark:border-zinc-700 hover:border-[#E50914] dark:hover:border-[#E50914] hover:text-[#E50914] dark:hover:text-[#E50914] transition-all duration-300 cursor-pointer"
          >
            El Ajuste Perfecto
          </button>

          {/* Toggle Dark Mode / Light Mode: SOLO ICONO (Sol para modo claro, Luna para modo oscuro) */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={onToggleDarkMode}
            aria-label={isDarkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            title={isDarkMode ? "Modo Claro" : "Modo Oscuro"}
            className="w-10 h-10 rounded-full flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-[#E50914] dark:hover:text-[#E50914] bg-stone-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E50914]/40"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded text-stone-700 dark:text-stone-300 hover:text-[#E50914] focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-dropdown-nav"
          className="md:hidden bg-white dark:bg-[#09090b] border-b border-slate-200 dark:border-zinc-800 px-6 py-6 transition-all duration-300"
        >
          <div className="flex flex-col gap-4 text-sm uppercase tracking-widest font-medium text-stone-800 dark:text-stone-200">
            <a
              href="#inicio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 hover:text-[#E50914] transition-colors border-b border-slate-100 dark:border-zinc-900"
            >
              Inicio
            </a>
            <a
              href="#experiencia"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 hover:text-[#E50914] transition-colors border-b border-slate-100 dark:border-zinc-900"
            >
              La Experiencia
            </a>
            <a
              href="#coleccion"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 hover:text-[#E50914] transition-colors border-b border-slate-100 dark:border-zinc-900"
            >
              Colección
            </a>
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 hover:text-[#E50914] transition-colors border-b border-slate-100 dark:border-zinc-900"
            >
              Contacto
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCustomBuilder();
              }}
              className="mt-2 w-full py-3 bg-[#E50914] text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-[#c80812] transition-colors"
            >
              El Ajuste Perfecto (Diseña el tuyo)
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2 text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold"
            >
              Atención Directa WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
