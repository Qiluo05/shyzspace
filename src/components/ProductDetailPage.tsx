import React, { useState } from 'react';
import { Product } from '../types';
import { PlatformIcon } from './PlatformIcons';
import { ArrowLeft, CheckCircle2, Phone, Mail, HelpCircle, Layers, AppWindow, ShieldCheck, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'cases' | 'faq'>('overview');

  return (
    <div id="product-detail-view" className="min-h-screen bg-gray-50/80 pt-6 pb-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-200/80 text-gray-700 hover:text-blue-600 hover:border-blue-200 transition-all font-medium text-sm group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>返回官网主页</span>
          </button>

          <div className="text-sm text-gray-500 hidden sm:flex items-center gap-2">
            <span>首页</span>
            <span>/</span>
            <span>自研小程序</span>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{product.title}</span>
          </div>
        </div>

        {/* Hero Card for Product */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -z-0 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <PlatformIcon platform={product.platform} className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0" />
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {product.title}
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {product.badgeText}
                  </span>
                </div>
                <p className="text-lg text-blue-600 font-medium mb-3">
                  {product.subtitle}
                </p>
                <p className="text-gray-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                  {product.fullDesc}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-4 sm:p-5 rounded-2xl border border-blue-100/80 space-y-2 flex-shrink-0 text-xs sm:text-sm">
              <div className="text-xs text-blue-900 font-bold mb-1 flex items-center justify-between">
                <span>官方咨询热线 / 邮箱</span>
                <span className="text-[10px] text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded-full font-bold">1V1沟通</span>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone.split('/')[0]}`}
                className="flex items-center gap-2 text-gray-900 font-bold hover:text-blue-600 transition-colors py-0.5"
              >
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-gray-800 font-semibold hover:text-blue-600 transition-colors py-0.5"
              >
                <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Key Highlights Tags Bar */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 flex flex-wrap gap-2 sm:gap-2.5">
            {product.highlights.map((hl, idx) => (
              <div key={idx} className="bg-gray-50 text-gray-700 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-gray-200/60 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex border-b border-gray-200 mb-6 sm:mb-8 overflow-x-auto no-scrollbar gap-1 sm:gap-0 pb-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 sm:py-4 px-4 sm:px-6 font-bold sm:font-semibold text-sm sm:text-base border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 bg-blue-50/50 sm:bg-transparent rounded-t-xl'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>核心定位与概览</span>
          </button>

          {product.modules && (
            <button
              onClick={() => setActiveTab('modules')}
              className={`py-3 sm:py-4 px-4 sm:px-6 font-bold sm:font-semibold text-sm sm:text-base border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeTab === 'modules'
                  ? 'border-blue-600 text-blue-600 bg-blue-50/50 sm:bg-transparent rounded-t-xl'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              <AppWindow className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span>全套功能模块 ({product.modules.length}大模块)</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('cases')}
            className={`py-3 sm:py-4 px-4 sm:px-6 font-bold sm:font-semibold text-sm sm:text-base border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
              activeTab === 'cases'
                ? 'border-blue-600 text-blue-600 bg-blue-50/50 sm:bg-transparent rounded-t-xl'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>应用场景与案例</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`py-3 sm:py-4 px-4 sm:px-6 font-bold sm:font-semibold text-sm sm:text-base border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
              activeTab === 'faq'
                ? 'border-blue-600 text-blue-600 bg-blue-50/50 sm:bg-transparent rounded-t-xl'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>常见疑问解答</span>
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
            {/* Features Grid */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <span>核心价值与产品优势</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Diagram */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-amber-500" />
                <span>小程序用户交互使用流程</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {product.workflowSteps.map((step) => (
                  <div key={step.step} className="bg-gray-50/80 p-6 rounded-2xl relative flex flex-col justify-between">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                        {step.step}
                      </span>
                      <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Modules */}
        {activeTab === 'modules' && product.modules && (
          <div className="space-y-6">
            <div className="bg-blue-600 text-white p-6 rounded-3xl shadow-md">
              <h2 className="text-2xl font-black mb-2">【{product.title}】完整功能模块架构</h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                微信小程序端体验流畅，覆盖业务全流程，赋能个人与企业高效使用。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.modules.map((mod) => (
                <div key={mod.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-blue-600">
                    {mod.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-4 font-medium">
                    {mod.summary}
                  </p>
                  <ul className="space-y-2 border-t border-gray-100 pt-3">
                    {mod.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Cases */}
        {activeTab === 'cases' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.useCases.map((c, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 mb-3">
                  {c.industry}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{c.title}</h3>
                <div className="text-emerald-600 font-extrabold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>使用效果：{c.result}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: FAQ */}
        {activeTab === 'faq' && (
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <span>常见疑问解答</span>
            </h2>

            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-200/60">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-start gap-2">
                    <span className="text-blue-600 font-black">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold mb-2">欢迎了解与对接【{product.title}】</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              上海韵斋文化传播有限公司官方服务热线与邮箱随时为您解答疑问。
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl space-y-1.5 text-xs sm:text-sm text-white flex-shrink-0">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-300" />
              <span className="font-extrabold">{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-300" />
              <span className="font-semibold">{COMPANY_INFO.email}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


