import React, { useState, useEffect } from 'react';
import { Product } from './types';
import { PRODUCTS_DATA } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailPage } from './components/ProductDetailPage';
import { Advantages } from './components/Advantages';
import { CompanyAbout } from './components/CompanyAbout';
import { Footer } from './components/Footer';
import { PolicyModal } from './components/PolicyModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductById = (productId: string) => {
    const found = PRODUCTS_DATA.find((p) => p.id === productId);
    if (found) {
      handleSelectProduct(found);
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    if (selectedProduct) {
      setSelectedProduct(null);
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-700">
      
      {/* Top Header */}
      <Header
        onNavigate={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {selectedProduct ? (
          /* Render Detailed Product Page when "了解更多" is clicked */
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => {
              setSelectedProduct(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          /* Render Main Homepage */
          <>
            <Hero
              onNavigateProducts={() => handleNavigateSection('products')}
              onNavigateContact={() => handleNavigateSection('contact')}
            />

            {/* Product Cards Section */}
            <ProductGrid
              products={PRODUCTS_DATA}
              onSelectProduct={handleSelectProduct}
            />

            <Advantages />

            <CompanyAbout />
          </>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigateSection}
        onSelectProductById={handleSelectProductById}
        onOpenPolicy={(type) => setPolicyModalType(type)}
      />

      {/* Policy & Terms Modal */}
      <PolicyModal
        isOpen={!!policyModalType}
        initialType={policyModalType || 'privacy'}
        onClose={() => setPolicyModalType(null)}
      />

      {/* Floating Back-To-Top Button */}
      {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 focus:outline-none cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
