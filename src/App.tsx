import React, { useState, useEffect } from 'react';
import { SHIRTS_DATA } from './data/shirts';
import { Shirt } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { Catalog } from './components/Catalog';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomBuilderModal } from './components/CustomBuilderModal';

export function App() {
  // Light Mode default as strictly mandated
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [shirts] = useState<Shirt[]>(SHIRTS_DATA);
  const [selectedShirt, setSelectedShirt] = useState<Shirt | null>(null);
  const [isCustomBuilderOpen, setIsCustomBuilderOpen] = useState(false);
  const [preselectedFabricForBuilder, setPreselectedFabricForBuilder] = useState<string | undefined>();

  // Synchronize dark mode class on <html> document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenCustomBuilder = (shirt?: Shirt) => {
    if (shirt) {
      setPreselectedFabricForBuilder(`${shirt.fabric} (${shirt.fabricOrigin})`);
    } else {
      setPreselectedFabricForBuilder(undefined);
    }
    setIsCustomBuilderOpen(true);
  };

  const handleExploreCollection = () => {
    const collectionEl = document.getElementById('coleccion');
    if (collectionEl) {
      collectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#09090b] text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors duration-300">
      {/* Header with MR Logo, Clean Nav, Dark/Light Icon Toggle, WhatsApp */}
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenCustomBuilder={() => handleOpenCustomBuilder()}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenCustomBuilder={() => handleOpenCustomBuilder()}
          onExploreCollection={handleExploreCollection}
        />

        {/* 2. Sección "El Arte del Bespoke" (Valores) */}
        <CraftsmanshipSection />

        {/* 3. Showcase de Camisas (Grid de 10 maniquíes con etiquetas exactas de imagen) */}
        <Catalog
          shirts={shirts}
          onSelectShirt={(shirt) => setSelectedShirt(shirt)}
          onOpenCustomBuilder={(shirt) => handleOpenCustomBuilder(shirt)}
        />

        {/* 4. Sección de Contacto (Netlify Forms) */}
        <ContactSection />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* Bespoke Product Detail Modal */}
      <ProductDetailModal
        shirt={selectedShirt}
        onClose={() => setSelectedShirt(null)}
        onOpenCustomBuilder={(shirt) => handleOpenCustomBuilder(shirt)}
      />

      {/* Bespoke Interactive Builder ("Diseña el tuyo" / "El Ajuste Perfecto") */}
      <CustomBuilderModal
        isOpen={isCustomBuilderOpen}
        onClose={() => setIsCustomBuilderOpen(false)}
        preselectedFabric={preselectedFabricForBuilder}
      />
    </div>
  );
}

export default App;
