import React from 'react';
import { ShieldCheck, Zap, Users, BarChart3, Lock, RefreshCw } from 'lucide-react';

export const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            WHY CHOOSE YUNZHAI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            为什么选择上海韵斋自研产品？
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            全栈自主研发、稳定高效的数字化小程序与效率工具解决方案
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">自主架构与极速响应</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              小程序前端极致性能优化，秒级加载与操作顺滑体验，支撑高并发大流量商业场景。
            </p>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">全链路闭环交易系统</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              支持订单管理、O2O线下核销、物流追踪与售后退款，提供顺畅且安全的社交电商体验。
            </p>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">多维用户体系与裂变</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              完善的会员成长机制、积分勋章、邀请裂变与社交圈子互动，显著提升用户留存与转化。
            </p>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">全网无水印解析算法</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              独家自研音视频解析与文案提取算法，秒级智能清扫水印，专为新媒体运营创作者打造。
            </p>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">数据合规与隐私安全</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              严格遵循国家信息安全与个人隐私保护规范，数据传输高强度加密，保障系统合规稳健。
            </p>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">专业运维与迭代升级</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              上海韵斋文化技术团队全天候保障服务可用性，持续对小程序功能进行版本优化与更新。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

