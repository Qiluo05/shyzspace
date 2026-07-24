import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { Building2, Phone, Mail, Clock, ShieldCheck, Award } from 'lucide-react';

export const CompanyAbout: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50 relative">
      <div id="contact" className="absolute -top-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Company Profile Description */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">
                <Building2 className="w-3.5 h-3.5" />
                <span>走进韵斋文化</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {COMPANY_INFO.name}
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                上海韵斋文化传播有限公司立足于中国经济与科技创新前沿。公司深耕互联网新媒体数字营销、小程序生态研发及数字化工具创新，致力于为企业及个人用户提供高品质的小程序产品与服务。
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                我们自主研发并运营【供需之家】一站式供需资源对接与社交电商平台，以及【你的秘书】多功能工具与无水印解析神器。成立至今，韵斋文化已服务全国众多商业客户与广大小程序用户，提供稳定可靠的数字化产品保障。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                  <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">自研小程序技术</div>
                    <div className="text-xs text-gray-500">毫秒级流畅响应与多端支持</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">企业级安全标准</div>
                    <div className="text-xs text-gray-500">数据加密与高可用服务架构</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Details Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-bold mb-6 text-white pb-4 border-b border-slate-800 flex items-center justify-between">
                <span>官方联系方式</span>
                <span className="text-xs px-2.5 py-1 bg-blue-500/20 text-blue-300 font-normal rounded-md">官方客服</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3.5 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/70">
                  <Phone className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 text-xs block mb-0.5">全国服务咨询热线</span>
                    <span className="font-bold text-emerald-400 text-base sm:text-xl block">{COMPANY_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/70">
                  <Mail className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 text-xs block mb-0.5">官方电子邮箱</span>
                    <span className="font-bold text-slate-100 text-sm sm:text-lg block">{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 px-2 pt-1">
                  <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 text-xs block mb-0.5">工作时间</span>
                    <span className="font-semibold text-slate-200 text-xs">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                <p className="text-xs text-slate-400">
                  上海韵斋文化传播有限公司 · 欢迎电话或邮件联系沟通
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
