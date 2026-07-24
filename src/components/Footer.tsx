import React from 'react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/products';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectProductById: (productId: string) => void;
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectProductById, onOpenPolicy }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-xl">
                韵
              </div>
              <div className="text-white font-extrabold text-xl tracking-tight">
                上海韵斋文化传播有限公司
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              专注数字营销与小程序产品创新研发，旗下【供需之家】与【你的秘书】为用户提供稳定高效的商业撮合与效率工具。
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-slate-200 font-bold text-sm mb-4">自研小程序产品</h4>
            <ul className="space-y-2.5 text-xs">
              {PRODUCTS_DATA.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectProductById(p.id)}
                    className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-slate-200 font-bold text-sm mb-4">关于与支持</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  公司首页
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('advantages')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  自研优势
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  关于韵斋文化
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  联系我们
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-slate-200 font-bold text-sm mb-4">官方联系服务</h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-400">服务热线：</p>
              <p className="text-emerald-400 font-extrabold text-sm leading-tight">{COMPANY_INFO.phone}</p>
              <p className="text-slate-400 pt-2">官方邮箱：</p>
              <p className="text-slate-200 font-semibold">{COMPANY_INFO.email}</p>
              <p className="text-slate-500 pt-1">服务时间：{COMPANY_INFO.workingHours}</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & filing info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 上海韵斋文化传播有限公司 版权所有
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400">沪ICP备202108899号-1</span>
            <span>|</span>
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              隐私政策
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              服务协议
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
