# AGENTS.md

## 项目概览
SQH (sqh3c.com) - 外贸企业展示型官网，电脑配件行业，深色科技风主题。

## 技术栈
- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI**: shadcn/ui + Tailwind CSS 4
- **Styling**: 自定义深色科技风 (globals.css)

## 目录结构
```
src/
├── app/
│   ├── layout.tsx          # 根布局（I18n Provider + Navbar + Footer + LiveChat + Particles）
│   ├── globals.css         # 全局样式 + 科技风主题变量 + 动画
│   ├── page.tsx            # 首页（Hero + 数据统计 + 精选产品 + CTA）
│   ├── products/page.tsx   # 产品目录页（分类筛选 + 产品卡片 + 规格展开）
│   ├── about/page.tsx      # 关于我们（公司简介 + 时间轴 + 认证 + 工厂）
│   ├── news/page.tsx       # 新闻/博客页
│   └── contact/page.tsx    # 联系/询盘页（表单验证 + 联系方式 + 地图）
├── components/
│   ├── Navbar.tsx          # 导航栏（毛玻璃 + 语言切换 + 响应式）
│   ├── Footer.tsx          # 页脚（链接 + 社媒 + 版权）
│   ├── LiveChat.tsx        # 在线客服浮动组件
│   ├── ParticleBackground.tsx  # Canvas 粒子动效背景
│   ├── CountUp.tsx         # 数字滚动动画组件
│   └── ui/                 # shadcn/ui 组件库
└── lib/
    ├── i18n.tsx            # 多语言系统（en/zh/ja/es/ar）
    ├── data.ts             # 模拟数据（产品、新闻、时间轴、认证）
    └── utils.ts            # 通用工具函数
```

## 关键功能
- **多语言**: 5种语言切换 (en/zh/ja/es/ar)，通过 React Context 实现
- **粒子背景**: Canvas 实现的科技风粒子连线动效
- **产品目录**: 12个产品，9个分类，支持筛选和规格展开
- **询盘表单**: 带验证的表单，提交后显示成功动画
- **在线客服**: 右下角浮动聊天窗口，带自动回复
- **响应式**: 适配桌面/平板/手机

## 设计系统
- 主色: #0a0e27 (深空蓝), #00d4ff (霓虹青), #6c5ce7 (紫色)
- 字体: Orbitron (标题), Inter (正文), Noto Sans SC (中文)
- 特效: Glassmorphism, 发光边框, 渐变光晕, 粒子动效

## 构建命令
- 开发: `pnpm dev`
- 构建: `pnpm build`
- 启动: `pnpm start`
- 类型检查: `pnpm ts-check`
- Lint: `pnpm lint`
