# 上海韵斋文化传播有限公司 · 官方网站

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss" alt="Tailwind CSS 4" />
</p>

## 📋 项目概述

上海韵斋文化传播有限公司官方网站，集中展示旗下两大自研旗舰小程序产品 —— **【供需之家】** 与 **【你的秘书】** 。

网站集产品介绍、核心优势展示、公司信息、在线客服联系及法律协议查阅于一体，为商业客户与个人用户提供清晰的数字化产品与服务对接窗口。

## 🚀 技术栈

| 类别 | 技术 |
|------|------|
| **前端框架** | React 19 + TypeScript |
| **构建工具** | Vite 6 |
| **样式方案** | Tailwind CSS 4（@tailwindcss/vite） |
| **图标库** | lucide-react |
| **动画引擎** | motion（Framer Motion 替代） |
| **后端服务** | Express.js（可选预览/SSR） |
| **包管理器** | npm |

## ✨ 功能模块

### 页面结构

```
首页（Hero）
 ├── 品牌标语与数据仪表盘（累计注册用户 / 日均撮合 / 解析次数 / 运行率）
 ├── 自研小程序产品展示（ProductGrid）
 │    ├── 供需之家 —— 一站式供需资源对接与社交电商平台
 │    └── 你的秘书 —— 多功能工具箱与短视频无水印解析神器
 ├── 核心优势（Advantages）
 │    ├── 自主架构与极速响应
 │    ├── 全链路闭环交易系统
 │    ├── 多维用户体系与裂变
 │    ├── 全网无水印解析算法
 │    ├── 数据合规与隐私安全
 │    └── 专业运维与迭代升级
 ├── 关于韵斋 & 联系方式（CompanyAbout）
 └── 页脚（Footer）
     ├── 产品导航 / 关于与支持 / 联系服务
     ├── 隐私政策 & 用户服务协议模态框
     └── 版权与沪ICP备案信息
```

### 产品详情页

点击「了解更多」进入产品深度详情页，包含：

- **核心定位与概览** — 产品特色、价值主张、用户交互流程
- **全套功能模块** — 完整功能架构（9 大模块 / 6 大模块）
- **应用场景与案例** — 行业场景与使用效果
- **常见疑问解答** — FAQ 在线查阅

## 🧱 项目结构

```
├── index.html                  # 入口 HTML
├── vite.config.ts              # Vite 配置（React + Tailwind + 路径别名）
├── tsconfig.json               # TypeScript 配置
├── metadata.json               # 项目元信息（AI Studio / Gemini API 配置）
├── package.json                # 依赖与脚本
│
├── src/
│   ├── main.tsx                # 应用入口
│   ├── App.tsx                 # 根组件（路由、状态管理）
│   ├── index.css               # Tailwind 入口样式
│   ├── types.ts                # TypeScript 类型定义
│   │
│   ├── data/
│   │   └── products.ts         # 公司信息 & 产品数据源
│   │
│   └── components/
│       ├── Header.tsx           # 顶部导航栏（响应式 + 移动端抽屉）
│       ├── Hero.tsx             # 首页大屏（品牌标语 + 数据指标）
│       ├── ProductGrid.tsx      # 产品卡片网格容器
│       ├── ProductCard.tsx      # 产品卡片组件
│       ├── ProductDetailPage.tsx # 产品深度详情页
│       ├── Advantages.tsx       # 核心优势展示
│       ├── CompanyAbout.tsx     # 公司介绍 & 联系方式
│       ├── Footer.tsx           # 页脚（导航 + 法律协议）
│       ├── PlatformIcons.tsx    # 多平台图标组件（小程序/抖音/快手/小红书等）
│       └── PolicyModal.tsx      # 隐私政策 & 服务协议模态框
│
├── assets/                     # 静态资源
└── dist/                       # 构建产物（.gitignore）
```

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（端口 3000，局域网可访问）
npm run dev

# 生产构建
npm run build

# 预览构建产物
npm run preview

# 类型检查
npm run lint
```

## 🔧 配置说明

- **端口**：默认 `3000`，在 `package.json` 的 `dev` 脚本中修改
- **路径别名**：`@/` 映射到项目根目录，在 `vite.config.ts` 和 `tsconfig.json` 中配置
- **公司信息**：联系方式、统计数据等在 `src/data/products.ts` 的 `COMPANY_INFO` 对象中集中管理

## 📡 部署

```bash
npm run build     # 产出到 dist/
```

将 `dist/` 目录部署至任意静态托管服务（Nginx、Vercel、阿里云 OSS 等）。

## 📄 法律信息

- **隐私政策** — 数据收集、使用与保护声明
- **用户服务协议** — 服务条款、用户行为规范与免责声明
- **备案信息** — 沪ICP备202108899号-1

<!-- ## 🏢 公司信息

- **名称**：上海韵斋文化传播有限公司
- **成立时间**：2021 年
- **地址**：上海市浦东新区张江高科技园区
- **服务热线**：15555488887
- **官方邮箱**：719359399@qq.com
- **工作时间**：周一至周日 09:00 - 21:00

--- -->

<p align="center">
  © 2026 上海韵斋文化传播有限公司 · 版权所有
</p>
