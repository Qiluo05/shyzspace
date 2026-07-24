import React from 'react';
import { Product } from '../types';
import { PlatformIcon } from './PlatformIcons';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const isMiniProgram = product.type === 'miniprogram';

  return (
    <div
      id={`card-${product.id}`}
      className={`group bg-white rounded-2xl p-6 sm:p-7 transition-all duration-300 border flex flex-col justify-between h-full relative ${
        isMiniProgram
          ? 'shadow-[0_8px_30px_rgba(37,99,235,0.12)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.2)] border-blue-200 ring-1 ring-blue-500/10'
          : 'shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-gray-100'
      }`}
    >
      <div>
        {/* Top Header Row: Platform Icon + Badge + Green Status Dot */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <PlatformIcon platform={product.platform} className="w-16 h-16 sm:w-16 sm:h-16" />
            {isMiniProgram && (
              <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700 border border-blue-200">
                {product.badgeText}
              </span>
            )}
          </div>
          
          {/* Green Online Status Indicator Dot matching screenshot */}
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#22C55E]"></span>
          </div>
        </div>

        {/* Title */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </div>

        {/* Tagline for Mini-programs */}
        {product.tagline && (
          <p className="text-xs font-semibold text-blue-600 mb-2">
            {product.tagline}
          </p>
        )}

        {/* Short Description */}
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5 font-normal">
          {product.shortDesc}
        </p>

        {/* Highlights tag list if mini program */}
        {isMiniProgram && product.modules && (
          <div className="mb-6 flex flex-wrap gap-1.5">
            {product.modules.slice(0, 3).map((mod, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[11px] font-medium">
                {mod.title.split('（')[0]}
              </span>
            ))}
            <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[11px] font-bold">
              +{product.modules.length - 3}大模块
            </span>
          </div>
        )}
      </div>

      {/* Bottom Action: 了解更多 */}
      <div className="pt-3 sm:pt-2 border-t border-gray-100 sm:border-gray-50">
        <button
          onClick={() => onSelectProduct(product)}
          className="w-full sm:w-auto px-4 py-2.5 sm:px-0 sm:py-1 bg-blue-50 sm:bg-transparent hover:bg-blue-100/70 sm:hover:bg-transparent text-[#3B82F6] hover:text-[#1D4ED8] font-bold text-sm sm:text-base inline-flex items-center justify-between sm:justify-start gap-1 group/btn transition-all duration-200 active:scale-[0.98] sm:active:scale-100 rounded-xl sm:rounded-md cursor-pointer"
        >
          <span>了解更多</span>
          <svg
            className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
