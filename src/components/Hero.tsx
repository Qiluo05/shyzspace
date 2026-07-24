import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface HeroProps {
  onNavigateProducts: () => void;
  onNavigateContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateProducts, onNavigateContact }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-blue-50/70 via-white to-gray-50/50 pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-[11px] sm:text-sm font-bold border border-blue-200/60 shadow-sm text-center leading-tight">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0" />
            <span>【供需之家】与【你的秘书】两大自研小程序平台</span>
          </span>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2.5xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-snug sm:leading-tight mb-4 sm:mb-6">
            自研小程序生态 · <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              商业撮合与效率新引擎
            </span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-1">
            旗下倾力打造【供需之家】一站式资源对接与社交电商平台，以及【你的秘书】便携工具与短视频/图文高清解析神器，致力于为广大个人与企业用户提供高品质数字体验。
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <button
              onClick={onNavigateProducts}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>浏览两大旗舰小程序</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateContact}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-gray-50 active:scale-[0.98] text-gray-800 font-bold text-sm sm:text-base rounded-2xl border border-gray-200 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
              <span>查看官方联系方式</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm font-semibold text-gray-600 bg-white/60 sm:bg-transparent backdrop-blur-sm p-3 sm:p-0 rounded-2xl border border-gray-100 sm:border-none">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>精准供需撮合 + 社交分销电商</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>全网无水印解析与文案提取</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>多端同步，安全稳定运行</span>
            </div>
          </div>
        </div>

        {/* Company Key Performance Metrics Bar */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 shadow-xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 max-w-5xl mx-auto">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-2.5 sm:p-2 bg-gray-50/50 sm:bg-transparent rounded-xl flex flex-col justify-center items-center">
              <div className="text-[17px] min-[360px]:text-[19px] min-[400px]:text-xl sm:text-3xl lg:text-4xl font-black tracking-tighter sm:tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-0.5 sm:mb-1 whitespace-nowrap">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm text-gray-500 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

