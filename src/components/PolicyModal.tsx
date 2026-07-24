import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface PolicyModalProps {
  isOpen: boolean;
  initialType?: 'privacy' | 'terms';
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  initialType = 'privacy',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialType);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[85vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white p-5 sm:p-6 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300">
              {activeTab === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl leading-tight">
                {activeTab === 'privacy' ? '隐私政策与数据保护声明' : '用户服务协议与使用条款'}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                {COMPANY_INFO.name} 官方法律文件
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
            aria-label="关闭"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gray-200 bg-gray-50/80 px-6 pt-3 flex-shrink-0 gap-2">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-blue-600 text-blue-600 bg-white rounded-t-xl'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>隐私政策</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'terms'
                ? 'border-blue-600 text-blue-600 bg-white rounded-t-xl'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>用户服务协议</span>
          </button>
        </div>

        {/* Policy Document Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-gray-700 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'privacy' ? (
            <>
              <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 text-blue-900 text-xs font-medium">
                更新日期：2026年1月1日 | 生效日期：2026年1月1日<br />
                {COMPANY_INFO.name}（以下简称“我们”）非常重视用户的个人隐私和数据安全。本《隐私政策》旨在帮助您了解我们如何收集、使用和保护您的个人信息。
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">1. 我们如何收集信息</h4>
                <p>
                  为了向您提供【供需之家】、【你的秘书】及其相关产品服务，我们可能会收集您在使用服务过程中主动提供或授权的信息，包括但不限于账号注册手机号、公开头像与昵称、供需信息发布内容等。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">2. 信息的使用规范</h4>
                <p>
                  我们严格恪守法律法规，收集的信息仅用于：撮合商业供需、处理短视频合规解析与文本提取请求、保障网络与平台交易安全、提升产品功能体验。未经您的明确授权，我们绝不向任何第三方售卖或公开您的隐私数据。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">3. 数据存储与安全保障</h4>
                <p>
                  我们使用加密传输（TLS/HTTPS）和高强度存储加密技术，确保数据在传输与静止状态下的安全。所有服务器均部署在符合国家信息安全等级保护标准的云计算中心。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">4. 您的权利与联系通道</h4>
                <p>
                  您随时有权查询、更正或注销您在平台注册的账号与数据。如对隐私政策有任何疑问，可通过官方邮箱 {COMPANY_INFO.email} 或客服电话 {COMPANY_INFO.phone} 与我们的合规团队联系。
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-100 text-amber-900 text-xs font-medium">
                更新日期：2026年1月1日 | 生效日期：2026年1月1日<br />
                欢迎使用 {COMPANY_INFO.name} 旗下的【供需之家】与【你的秘书】等小程序服务。在使用前，请仔细阅读本《用户服务协议》。
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">1. 服务条款的接受</h4>
                <p>
                  当您访问或使用我们的官方网站及各类小程序产品时，即表示您已阅读、理解并同意接受本协议的所有条款与约定。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">2. 用户行为规范</h4>
                <p>
                  用户承诺在使用供需发布、资源对接及新媒体解析工具时，严格遵守国家法律法规。严禁发布虚假欺诈信息、涉黄涉暴或侵犯他人知识产权的内容。违反规定者，平台有权采取封禁账号及追究法律责任的措施。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">3. 知识产权与声明</h4>
                <p>
                  上海韵斋文化传播有限公司拥有本网站及旗下自研小程序的所有软件著作权、商标与设计专利。未经书面授权，任何单位或个人不得非法克隆、镜像或逆向工程。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">4. 免责声明与协议修改</h4>
                <p>
                  因不可抗力或电信运营商原因导致的网络中断，平台将全力抢修但免于承担间接损失。平台保留视业务发展依法修改本协议的权利，更新后的协议将在产品内公告公布。
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer Action */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
          <div className="text-xs text-gray-500 hidden sm:block">
            如有疑问，请联系: {COMPANY_INFO.phone}
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 ml-auto"
          >
            <Check className="w-4 h-4" />
            <span>我已阅读并同意</span>
          </button>
        </div>
      </div>
    </div>
  );
};
