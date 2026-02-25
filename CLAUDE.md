# CLAUDE.md

本项目是一个基于 **Vue 3 + TypeScript + Vite** 的前端开发项目，采用专业的**暗黑系 (Dark Mode)** 视觉风格。

## 项目技术栈

- **核心框架:** Vue 3 (Composition API `<script setup>`)
- **构建工具:** Vite
- **编程语言:** TypeScript (严格模式)
- **路由管理:** Vue Router
- **状态管理:** Pinia
- **样式方案:** CSS Variables + 原生 CSS/SCSS (适配暗黑主题)

## 开发常用命令

- **启动开发服务器:** `npm run dev`
- **项目打包:** `npm run build`
- **代码校验:** `npm run lint`
- **类型检查:** `npm run type-check`

## 🎨 暗黑系视觉规范 (Dark Mode Specs)

AI 在生成 UI 代码时必须严格遵循以下配色与布局逻辑：

### 1. 配色方案 (Color Palette)

- **基础背景 (`--bg-base`):** `#0F172A` (页面最底层)
- **容器背景 (`--bg-surface`):** `#1E293B` (卡片、侧边栏、对话框)
- **悬浮层级 (`--bg-elevated`):** `#334155` (下拉菜单、浮窗)
- **主色调 (`--primary`):** `#38BDF8` (天蓝色，用于按钮和激活态)
- **文字-主 (`--text-main`):** `#F8FAFC` (高对比度正文)
- **文字-次 (`--text-muted`):** `#94A3B8` (低对比度说明文字)
- **边框线 (`--border-color`):** `rgba(255, 255, 255, 0.1)`

### 2. 布局与层级 (Layout & Elevation)

- **间距:** 采用 8px 步进系统 (4px, 8px, 16px, 24px, 32px)。
- **圆角:** 统一使用 `var(--radius-md): 8px` 和 `var(--radius-lg): 12px`。
- **阴影:** 暗黑模式下减少投影，优先使用 1px 的亮色边框 (`--border-color`) 来区分层级。

## 编码规约

- **组件:** 统一 PascalCase 命名，如 `UserDashboard.vue`。
- **样式:** 必须使用 `src/styles/variables.css` 中定义的变量，禁止硬编码颜色值。
- **TS 类型:** 严禁使用 `any`，必须为 Props、Emits 和 API 返回值定义具体的 `interface`。

## 目录结构规划

- `src/assets/`: 静态资源
- `src/styles/`: 存放 `variables.css` (定义上述配色) 及全局样式
- `src/components/`: 可复用 UI 组件
- `src/views/`: 路由页面组件
- `src/router/`: 路由配置
- `src/types/`: 全局 TypeScript 类型声明

---

## 待办事项 (TODO)

- [ ] 创建 `src/styles/variables.css` 并初始化暗黑配色。
- [ ] 配置 Vue Router 基础骨架。
- [ ] 实现基础 Layout 布局（包含 Sidebar 和 Header）。
