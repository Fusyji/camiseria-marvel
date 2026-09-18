import React, { useEffect, useRef, useState } from 'react';
import { mountShirtConfigurator, ShirtConfig } from '../shirt-configurator';
import { CheckCircle2, Copy, Sparkles } from 'lucide-react';

export const ShirtConfiguratorSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [completedConfig, setCompletedConfig] = useState<ShirtConfig | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Mount pure TypeScript configurator instance
    const instance = mountShirtConfigurator(containerRef.current, {
      logoSrc: '/images/mr-logo-monogram.png',
      onComplete: (config) => {
        setCompletedConfig(config);
        const alertBox = document.getElementById('config-success-banner');
        if (alertBox) {
          alertBox.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    return () => {
      instance.destroy();
    };
  }, []);

  const handleCopyJson = () => {
    if (!completedConfig) return;
    navigator.clipboard.writeText(JSON.stringify(completedConfig, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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

        {/* Success Banner when step 10 is confirmed */}
        {completedConfig && (
          <div
            id="config-success-banner"
            className="mb-8 p-6 rounded-xl bg-[#141414] border border-[#CC0001] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#CC0001]/20 border border-[#CC0001] flex items-center justify-center flex-shrink-0 text-[#CC0001]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#E6E7EB]">
                  Configuración Bespoke Finalizada con Éxito
                </h4>
                <p className="text-xs text-[#A8ABB3] mt-1">
                  Objeto de configuración generado: {completedConfig.tejido.name} • {completedConfig.color.name} • Corte {completedConfig.corte.toUpperCase()} • Cuello {completedConfig.cuello.toUpperCase()} • Iniciales "{completedConfig.bordado.texto || 'N/A'}".
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyJson}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#222] hover:bg-[#333] border border-[#444] text-xs font-semibold uppercase tracking-wider text-[#E6E7EB] transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copiado al portapapeles' : 'Copiar Config (JSON)'}</span>
            </button>
          </div>
        )}

        {/* DOM Mount Target for Plain TypeScript Configurator */}
        <div ref={containerRef} id="mr-shirt-configurator-container" className="w-full">
          {/* Loaded dynamically by mountShirtConfigurator() */}
        </div>

      </div>
    </section>
  );
};
