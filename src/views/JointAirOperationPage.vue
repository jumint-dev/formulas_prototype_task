<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface ServiceModule {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "purple" | "orange";
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
}

const serviceModules: ServiceModule[] = [
  {
    id: "multi-replica",
    title: "多副本数据服务保障",
    shortTitle: "多副本服务",
    icon: "📋",
    color: "primary",
    description: "面向规模对地打击场景，提供多副本数据服务保障功能",
    features: [
      "存储多个副本的作战筹划方案数据",
      "支持筹划方案的快速调阅",
      "副本数据的一致性同步",
      "数据版本管理",
    ],
    stats: [
      { label: "副本数量", value: "3" },
      { label: "方案数据", value: "128" },
      { label: "同步状态", value: "正常" },
    ],
  },
  {
    id: "multi-level-linkage",
    title: "多级联动筹划数据服务保障",
    shortTitle: "多级联动",
    icon: "🔗",
    color: "secondary",
    description: "提供多级联动筹划数据服务保障功能，构建中心化资源池",
    features: [
      "收集各级筹划资源情况",
      "构建中心化兵力资源池",
      "构建中心化弹药资源池",
      "支持数据资源池的实时更新",
      "支持各级别指挥信息系统访问",
    ],
    stats: [
      { label: "联动员", value: "5" },
      { label: "资源池", value: "2" },
      { label: "接入系统", value: "12" },
    ],
  },
  {
    id: "data-bridge",
    title: "数据桥接服务保障",
    shortTitle: "数据桥接",
    icon: "🌉",
    color: "accent",
    description: "提供作战方案计划数据贯通功能，依托中心化数据资源池",
    features: [
      "作战基础数据桥接",
      "航线规划数据桥接",
      "空中任务指令互通",
      "空域控制指令互通",
      "特殊任务指令互通",
      "作战目标信息互通",
      "空域信息互通",
      "计划航线信息互通",
    ],
    stats: [
      { label: "桥接节点", value: "8" },
      { label: "数据类型", value: "16" },
      { label: "传输速率", value: "1GB/s" },
    ],
  },
  {
    id: "data-package-load",
    title: "数据打包推送与加载服务",
    shortTitle: "打包推送",
    icon: "📦",
    color: "orange",
    description: "提供数据资源批量打包备份和加载能力",
    features: [
      "数据批量打包备份",
      "自动关联用户、时间、任务类型",
      "打包数据标记及批次管理",
      "数据格式转换",
      "追加或覆盖导入",
      "动态加载进度条",
      "加载耗时和统计信息",
      "异常数据查询导出",
      "数据加载日志获取",
      "导入加载查询",
    ],
    stats: [
      { label: "备份批次", value: "24" },
      { label: "数据总量", value: "2.4TB" },
      { label: "加载成功", value: "98.5%" },
    ],
  },
];

const selectedModuleId = ref<string>(serviceModules[0]!.id);

const selectedModule = ref<ServiceModule>(serviceModules[0]!);

const selectModule = (module: ServiceModule) => {
  selectedModuleId.value = module.id;
  selectedModule.value = module;
};

const handleBack = () => {
  router.push("/management");
};

// 模拟操作
const handleAction = (action: string) => {
  console.log("Action:", action);
};
</script>

<template>
  <div class="joint-air-page">
    <!-- 背景装饰 -->
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>

    <!-- 返回按钮 -->
    <button class="back-button" @click="handleBack">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L8 8H16V10H8L12 14V4Z" fill="currentColor" />
        <path d="M3 10H17V12H3V10Z" fill="currentColor" opacity="0.5" />
      </svg>
      <span>返回管理</span>
    </button>

    <!-- 主布局 -->
    <div class="main-layout">
      <!-- 左侧模块菜单 -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="header-badge">JOINT AIR OPERATION</div>
          <h2 class="sidebar-title">联合空中作战筹划</h2>
        </div>

        <nav class="sidebar-nav">
          <div
            v-for="module in serviceModules"
            :key="module.id"
            class="module-item"
            :class="[
              `module-${module.color}`,
              { 'is-active': selectedModuleId === module.id },
            ]"
            @click="selectModule(module)"
          >
            <span class="module-icon">{{ module.icon }}</span>
            <span class="module-name">{{ module.shortTitle }}</span>
          </div>
        </nav>

        <div class="sidebar-footer">
          <div class="footer-line"></div>
          <span class="footer-text">4 服务模块</span>
        </div>
      </aside>

      <!-- 右侧内容区 -->
      <main class="content-area">
        <!-- 模块标题 -->
        <header class="module-header">
          <div
            class="module-icon-large"
            :class="`icon-${selectedModule.color}`"
          >
            <span class="icon-emoji">{{ selectedModule.icon }}</span>
            <div class="icon-glow"></div>
          </div>
          <div class="module-info">
            <h1 class="module-title">{{ selectedModule.title }}</h1>
            <p class="module-description">{{ selectedModule.description }}</p>
          </div>
        </header>

        <!-- 功能列表 -->
        <section class="features-section">
          <h3 class="section-title">服务功能</h3>
          <div class="features-list">
            <div
              v-for="(feature, index) in selectedModule.features"
              :key="index"
              class="feature-item"
            >
              <span class="feature-number">{{
                String(index + 1).padStart(2, "0")
              }}</span>
              <span class="feature-text">{{ feature }}</span>
              <span class="feature-status">已启用</span>
            </div>
          </div>
        </section>

        <!-- 数据统计 -->
        <section class="stats-section">
          <h3 class="section-title">服务状态</h3>
          <div class="stats-grid">
            <div
              v-for="stat in selectedModule.stats"
              :key="stat.label"
              class="stat-card"
            >
              <span class="stat-label">{{ stat.label }}</span>
              <span
                class="stat-value"
                :class="`text-${selectedModule.color}`"
                >{{ stat.value }}</span
              >
            </div>
          </div>
        </section>

        <!-- 操作面板 -->
        <section class="actions-section">
          <h3 class="section-title">快捷操作</h3>
          <div class="actions-grid">
            <button class="action-btn primary" @click="handleAction('view')">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 12V2M10 12C10 12 14 12 14 16C14 20 6 20 6 16C6 12 10 12 10 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
              <span>查看详情</span>
            </button>
            <button
              class="action-btn secondary"
              @click="handleAction('config')"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="3"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M10 2V4M10 16V18M18 10H16M4 10H2M15.66 15.66L14.24 14.24M5.76 5.76L4.34 4.34M15.66 4.34L14.24 5.76M5.76 14.24L4.34 15.66"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <span>配置管理</span>
            </button>
            <button class="action-btn accent" @click="handleAction('monitor')">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M2 10C2 10 4 4 10 4C16 4 18 10 18 10"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="3"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M10 13V16M10 16L8 14M10 16L12 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>监控面板</span>
            </button>
            <button class="action-btn outline" @click="handleAction('export')">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L10 14M10 14L6 10M10 14L14 10"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 10V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V10"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <span>导出报告</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.joint-air-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* 背景装饰 */
.bg-grid {
  position: fixed;
  inset: 0;
  background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  z-index: 0;
}

.bg-glow {
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.12;
  z-index: 0;
}

.bg-glow-1 {
  top: -100px;
  right: -100px;
  background: var(--primary);
}

.bg-glow-2 {
  bottom: -100px;
  left: -100px;
  background: var(--accent);
}

/* 返回按钮 */
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-muted);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-base);
  z-index: 10;
}

.back-button:hover {
  background: var(--bg-elevated);
  border-color: var(--primary);
  color: var(--primary);
  box-shadow: var(--glow-md);
}

/* 主布局 */
.main-layout {
  display: flex;
  flex: 1;
  position: relative;
  z-index: 1;
}

/* 左侧边栏 */
.sidebar {
  background: var(--bg-surface);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  padding: 80px 0 20px;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 0 20px 30px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 20px;
}

.header-badge {
  font-size: 0.55rem;
  color: var(--text-dim);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.sidebar-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.4;
  background: linear-gradient(135deg, var(--text-main) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 0 12px;
}

.module-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  border-left: 2px solid transparent;
}

.module-item:hover {
  background: var(--bg-elevated);
}

.module-item.is-active {
  background: var(--bg-base);
}

.module-icon {
  font-size: 1.2rem;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.module-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color var(--transition-base);
}

.module-item:hover .module-name {
  color: var(--text-main);
}

.module-item.is-active .module-name {
  color: var(--text-main);
  font-weight: 600;
}

/* 颜色指示器 */
.module-primary.is-active {
  border-left-color: var(--primary);
}

.module-secondary.is-active {
  border-left-color: var(--secondary);
}

.module-accent.is-active {
  border-left-color: var(--accent);
}

.module-purple.is-active {
  border-left-color: #a855f7;
}

.module-orange.is-active {
  border-left-color: #f59e0b;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.footer-line {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  margin: 0 auto 12px;
  border-radius: var(--radius-full);
}

.footer-text {
  font-size: 0.7rem;
  color: var(--text-dim);
  letter-spacing: 0.05em;
}

/* 右侧内容区 */
.content-area {
  flex: 1;
  padding: 80px 60px 40px;
  overflow-y: auto;
}

/* 模块头部 */
.module-header {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 40px;
}

.module-icon-large {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-surface);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-lg);
  flex-shrink: 0;
  position: relative;
  transition: all var(--transition-base);
}

.icon-emoji {
  font-size: 2.5rem;
  z-index: 1;
}

.icon-glow {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.icon-primary .icon-glow {
  background: rgba(0, 229, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
}

.icon-secondary .icon-glow {
  background: rgba(124, 58, 237, 0.2);
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
}

.icon-accent .icon-glow {
  background: rgba(16, 185, 129, 0.2);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

.icon-purple .icon-glow {
  background: rgba(168, 85, 247, 0.2);
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
}

.icon-orange .icon-glow {
  background: rgba(245, 158, 11, 0.2);
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
}

.module-icon-large:hover .icon-glow {
  opacity: 1;
}

.module-icon-large:hover {
  transform: scale(1.05);
}

.module-info {
  flex: 1;
}

.module-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 12px;
}

.module-description {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* 内容区块 */
.features-section,
.stats-section,
.actions-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-main);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

/* 功能列表 */
.features-list {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid var(--divider-color);
  transition: all var(--transition-fast);
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-item:hover {
  background: var(--bg-elevated);
}

.feature-number {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-dim);
  font-family: "Courier New", monospace;
  min-width: 24px;
}

.feature-text {
  flex: 1;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.feature-item:hover .feature-text {
  color: var(--text-main);
}

.feature-status {
  font-size: 0.75rem;
  color: var(--accent);
  padding: 4px 10px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-full);
}

/* 统计网格 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 20px;
  text-align: center;
  transition: all var(--transition-base);
}

.stat-card:hover {
  border-color: var(--border-color-strong);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.stat-label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-dim);
  margin-bottom: 8px;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.text-secondary {
  color: var(--secondary) !important;
}

.text-accent {
  color: var(--accent) !important;
}

.text-purple {
  color: #a855f7 !important;
}

.text-orange {
  color: #f59e0b !important;
}

/* 操作按钮网格 */
.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px;
  border-radius: var(--radius-lg);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-base);
  border: none;
}

.action-btn.primary {
  background: var(--primary);
  color: #000;
}

.action-btn.primary:hover {
  background: var(--primary-hover);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
}

.action-btn.secondary {
  background: var(--secondary);
  color: #fff;
}

.action-btn.secondary:hover {
  background: var(--secondary-hover);
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
}

.action-btn.accent {
  background: var(--accent);
  color: #000;
}

.action-btn.accent:hover {
  background: #059669;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
}

.action-btn.outline {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-muted);
}

.action-btn.outline:hover {
  border-color: var(--text-muted);
  color: var(--text-main);
  background: var(--bg-elevated);
}

/* 滚动条样式 */
.sidebar-nav::-webkit-scrollbar,
.content-area::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track,
.content-area::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb,
.content-area::-webkit-scrollbar-thumb {
  background: var(--bg-elevated);
  border-radius: var(--radius-full);
}

.sidebar-nav::-webkit-scrollbar-thumb:hover,
.content-area::-webkit-scrollbar-thumb:hover {
  background: var(--text-dim);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .content-area {
    padding: 80px 40px 40px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .sidebar {
    width: 160px;
  }

  .content-area {
    padding: 80px 30px 30px;
  }

  .actions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
