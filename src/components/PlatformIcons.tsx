import React from 'react';

interface PlatformIconProps {
  platform: 'gongxu' | 'mishu' | 'douyin' | 'kuaishou' | 'xiaohongshu' | 'shipinhao' | 'duanxin' | 'browser';
  className?: string;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({ platform, className = "w-16 h-16" }) => {
  switch (platform) {
    case 'gongxu':
      return (
        <div className={`${className} bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-2xl flex flex-col items-center justify-center shadow-lg text-white group-hover:scale-105 transition-transform duration-300 p-1`}>
          <span className="text-xl sm:text-2xl font-black tracking-tight leading-none">供需</span>
          <span className="text-[10px] font-bold tracking-widest opacity-90 mt-0.5">之家</span>
        </div>
      );

    case 'mishu':
      return (
        <div className={`${className} bg-gradient-to-br from-purple-600 via-indigo-600 to-fuchsia-600 rounded-2xl flex flex-col items-center justify-center shadow-lg text-white group-hover:scale-105 transition-transform duration-300 p-1`}>
          <span className="text-xl sm:text-2xl font-black tracking-tight leading-none">你的</span>
          <span className="text-[10px] font-bold tracking-widest opacity-90 mt-0.5">秘书</span>
        </div>
      );

    case 'douyin':
      return (
        <div className={`${className} bg-black rounded-2xl flex items-center justify-center shadow-md relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
          {/* Douyin Note Icon */}
          <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cyan layer */}
            <path
              d="M68 22 C68 28 72 34 80 36 V48 C74 48 68 45 64 42 V68 C64 80 54 88 40 88 C28 88 18 78 18 64 C18 50 28 40 40 40 C43 40 46 41 48 42 V54 C46 53 43 52 40 52 C34 52 29 57 29 64 C29 71 34 76 40 76 C46 76 52 71 52 64 V22 H68 Z"
              fill="#24F6F0"
              transform="translate(-2, -2)"
            />
            {/* Magenta layer */}
            <path
              d="M68 22 C68 28 72 34 80 36 V48 C74 48 68 45 64 42 V68 C64 80 54 88 40 88 C28 88 18 78 18 64 C18 50 28 40 40 40 C43 40 46 41 48 42 V54 C46 53 43 52 40 52 C34 52 29 57 29 64 C29 71 34 76 40 76 C46 76 52 71 52 64 V22 H68 Z"
              fill="#FE2C55"
              transform="translate(2, 2)"
            />
            {/* White top layer */}
            <path
              d="M68 22 C68 28 72 34 80 36 V48 C74 48 68 45 64 42 V68 C64 80 54 88 40 88 C28 88 18 78 18 64 C18 50 28 40 40 40 C43 40 46 41 48 42 V54 C46 53 43 52 40 52 C34 52 29 57 29 64 C29 71 34 76 40 76 C46 76 52 71 52 64 V22 H68 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );

    case 'kuaishou':
      return (
        <div className={`${className} bg-gradient-to-br from-[#FF6B00] to-[#FF3D00] rounded-2xl flex items-center justify-center shadow-md text-white font-bold group-hover:scale-105 transition-transform duration-300`}>
          {/* Kuaishou Camera shape */}
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 1.91.76 3.64 2 4.93V18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4.07c1.24-1.29 2-3.02 2-4.93 0-3.87-3.13-7-7-7zm-2.5 5.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S8 9.83 8 9s.67-1.5 1.5-1.5zm5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 16c-1.66 0-3-1.34-3-3 0-.35.07-.69.18-1h5.64c.11.31.18.65.18 1 0 1.66-1.34 3-3 3z" />
          </svg>
        </div>
      );

    case 'xiaohongshu':
      return (
        <div className={`${className} bg-[#FF2442] rounded-2xl flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform duration-300 p-1`}>
          {/* Xiaohongshu badge */}
          <span className="font-extrabold tracking-tighter text-sm sm:text-base leading-none text-center select-none">
            小红书
          </span>
        </div>
      );

    case 'shipinhao':
      return (
        <div className={`${className} bg-gradient-to-br from-[#FA9D3B] to-[#F77203] rounded-2xl flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform duration-300`}>
          {/* WeChat Channels infinity loop icon */}
          <svg className="w-10 h-10 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.356-8-5.096 0-5.096 8 0 8 5.223 0 7.261-8 12.356-8Z" />
          </svg>
        </div>
      );

    case 'duanxin':
      return (
        <div className={`${className} bg-[#2CD240] rounded-2xl flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform duration-300`}>
          {/* Green chat bubble with 3 dots */}
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
          </svg>
        </div>
      );

    case 'browser':
      return (
        <div className={`${className} bg-gradient-to-tr from-[#0078D4] via-[#00B4FF] to-[#00D8B6] rounded-2xl flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform duration-300`}>
          {/* Browser / Edge wave icon */}
          <svg className="w-10 h-10 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
