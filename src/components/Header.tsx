import React, { useState } from 'react';
import { Phone, Mail, Menu, X, Home, AppWindow, ShieldCheck, Building2, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Company Brand Logo */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg sm:text-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              韵
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                上海韵斋文化
              </div>
              <div className="text-[10px] sm:text-[11px] text-gray-400 font-medium tracking-wider mt-0.5 sm:mt-1">
                YUNZHAI CULTURE
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors cursor-pointer"
            >
              首页
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>自研小程序</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            </button>
            <button
              onClick={() => handleNavClick('advantages')}
              className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors cursor-pointer"
            >
              核心优势
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors cursor-pointer"
            >
              关于韵斋
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors cursor-pointer"
            >
              联系我们
            </button>
          </nav>

          {/* Direct Phone & Email Display Bar (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone.split('/')[0]}`}
              className="flex items-center gap-2.5 px-3.5 py-2 bg-blue-50/80 hover:bg-blue-100/80 rounded-xl border border-blue-100 text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <div>
                <span className="text-gray-400 block text-[10px] leading-tight">服务热线</span>
                <span className="font-extrabold text-blue-700 text-xs">{COMPANY_INFO.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2.5 px-3.5 py-2 bg-amber-50/80 hover:bg-amber-100/80 rounded-xl border border-amber-100 text-xs transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <div>
                <span className="text-gray-400 block text-[10px] leading-tight">官方邮箱</span>
                <span className="font-bold text-gray-800 text-xs">{COMPANY_INFO.email}</span>
              </div>
            </a>
          </div>

          {/* Mobile Phone Quick Call + Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone.split('/')[0]}`}
              className="p-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 active:scale-95 transition-transform flex items-center justify-center"
              title="拨打服务热线"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 rounded-xl border border-gray-100 focus:outline-none"
              aria-label="切换菜单"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200/80 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-xl">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-50 text-gray-800 font-medium text-sm transition-colors"
          >
            <div className="flex items-center gap-3">
              <Home className="w-4 h-4 text-gray-500" />
              <span>首页</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>

          <button
            onClick={() => handleNavClick('products')}
            className="flex items-center justify-between w-full p-3 rounded-xl bg-blue-50/70 text-blue-700 font-bold text-sm transition-colors"
          >
            <div className="flex items-center gap-3">
              <AppWindow className="w-4 h-4 text-blue-600" />
              <span>自研小程序</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-extrabold">旗舰</span>
          </button>

          <button
            onClick={() => handleNavClick('advantages')}
            className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-50 text-gray-800 font-medium text-sm transition-colors"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-gray-500" />
              <span>核心优势</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-50 text-gray-800 font-medium text-sm transition-colors"
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-4 h-4 text-gray-500" />
              <span>关于韵斋文化</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>

          {/* Quick Contact Box on Mobile */}
          <div className="pt-3">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-2xl shadow-md space-y-2.5">
              <div className="text-xs font-bold text-slate-300 border-b border-slate-700/80 pb-2">
                官方客服与咨询通道
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-400">服务热线：</span>
                  <span className="font-bold text-emerald-400">{COMPANY_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="text-slate-400">官方邮箱：</span>
                  <span className="font-semibold text-slate-200">{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};

