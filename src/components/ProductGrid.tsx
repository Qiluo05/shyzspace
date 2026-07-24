import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, Layers } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onSelectProduct }) => {
  return (
    <section id="products" className="py-16 sm:py-24 bg-gray-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-3 border border-blue-100">
            <Layers className="w-3.5 h-3.5" />
            <span>上海韵斋文化 · 核心自研小程序</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            旗下两大旗舰小程序产品
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg font-normal">
            倾力打造【供需之家】与【你的秘书】两款自研爆款小程序，覆盖资源撮合、社交分销与新媒体创作者效率工具。
          </p>
        </div>

        {/* Product Cards Grid - Side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>点击卡片【了解更多】即可查看详细功能模块与应用场景</span>
        </div>

      </div>
    </section>
  );
};

