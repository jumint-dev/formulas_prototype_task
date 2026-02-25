<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

interface ToolSubItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface ToolItem {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "purple";
  children: ToolSubItem[];
}

const router = useRouter();

const tools: ToolItem[] = [
  {
    id: "validity-coverage",
    title: "数据有效性及覆盖性验证",
    shortTitle: "有效性验证",
    icon: "✓",
    color: "primary",
    children: [
      {
        id: "rule-mgmt",
        title: "数据验证规则管理",
        icon: "⚙️",
        description: "管理数据验证规则的创建、编辑和删除操作",
      },
      {
        id: "rule-composition",
        title: "验证规则组成",
        icon: "🔗",
        description: "配置和组合多个验证规则形成复杂验证逻辑",
      },
      {
        id: "task-build",
        title: "数据验证任务构建",
        icon: "📦",
        description: "创建和配置数据验证任务的参数和范围",
      },
      {
        id: "task-schedule",
        title: "数据验证任务调度",
        icon: "📅",
        description: "管理和调度数据验证任务的执行计划",
      },
    ],
  },
  {
    id: "complex-model",
    title: "复杂模型计算验证",
    shortTitle: "模型计算验证",
    icon: "∑",
    color: "secondary",
    children: [
      {
        id: "model-mgmt",
        title: "任务数据复杂模型管理",
        icon: "📐",
        description: "管理复杂计算模型的定义和参数配置",
      },
      {
        id: "model-calc-validation",
        title: "复杂模型计算验证",
        icon: "🔬",
        description: "执行复杂模型的计算并验证结果准确性",
      },
    ],
  },
  {
    id: "correlation-analysis",
    title: "关联统计分析验证",
    shortTitle: "关联分析验证",
    icon: "📊",
    color: "accent",
    children: [
      {
        id: "analysis-model-build",
        title: "数据关联统计分析模型构建",
        icon: "🏗️",
        description: "构建数据关联和统计分析的计算模型",
      },
      {
        id: "correlation-validation",
        title: "任务数据关联统计分析验证",
        icon: "📈",
        description: "执行关联分析并验证统计结果的可靠性",
      },
    ],
  },
  {
    id: "simulation-validation",
    title: "仿真推演数据验证",
    shortTitle: "仿真推演验证",
    icon: "🎮",
    color: "purple",
    children: [
      {
        id: "data-push",
        title: "仿真推演数据推送",
        icon: "📤",
        description: "将仿真推演数据推送到验证系统进行处理",
      },
      {
        id: "sim-validation",
        title: "仿真推演数据验证",
        icon: "✅",
        description: "对仿真推演数据进行完整性和准确性验证",
      },
    ],
  },
];

const selectedToolId = ref<string>(tools[0]!.id);
const selectedSubId = ref<string>(tools[0]!.children[0]!.id);
const hoveredTool = ref<string | null>(null);
const hoveredSub = ref<string | null>(null);

const selectedTool = computed(() =>
  tools.find((t) => t.id === selectedToolId.value)
);
const selectedSub = computed(() =>
  selectedTool.value?.children.find((c) => c.id === selectedSubId.value)
);

const handleBack = () => {
  router.push("/");
};

const selectTool = (toolId: string) => {
  selectedToolId.value = toolId;
  const tool = tools.find((t) => t.id === toolId);
  if (tool && tool.children.length > 0) {
    selectedSubId.value = tool.children[0]!.id;
  }
};

const selectSub = (toolId: string, subId: string) => {
  selectedToolId.value = toolId;
  selectedSubId.value = subId;
};

const isActiveTool = (toolId: string) => selectedToolId.value === toolId;
const isActiveSub = (subId: string) => selectedSubId.value === subId;
</script>

<template>
  <div class="tools-page">
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
      <span>返回首页</span>
    </button>

    <!-- 主布局 -->
    <div class="main-layout">
      <!-- 左侧菜单 -->
      <aside class="sidebar">
        <!-- 标题 -->
        <div class="sidebar-header">
          <div class="header-badge">TOOLS DEVELOPMENT</div>
          <h2 class="sidebar-title">验证工具研制</h2>
        </div>

        <!-- 工具菜单 -->
        <nav class="sidebar-nav">
          <div
            v-for="tool in tools"
            :key="tool.id"
            class="tool-group"
            :class="[
              `group-${tool.color}`,
              {
                'is-active': isActiveTool(tool.id),
                'is-hovered': hoveredTool === tool.id,
              },
            ]"
            @mouseenter="hoveredTool = tool.id"
            @mouseleave="hoveredTool = null"
          >
            <!-- 工具主项 -->
            <div
              class="tool-main"
              :class="{ 'is-active': isActiveTool(tool.id) }"
              @click="selectTool(tool.id)"
            >
              <span class="tool-icon">{{ tool.icon }}</span>
              <span class="tool-name">{{ tool.shortTitle }}</span>
            </div>

            <!-- 子菜单 -->
            <div class="tool-subs">
              <div
                v-for="child in tool.children"
                :key="child.id"
                class="sub-item"
                :class="[
                  {
                    'is-active': isActiveSub(child.id) && isActiveTool(tool.id),
                  },
                  { 'is-hovered': hoveredSub === child.id },
                ]"
                @mouseenter="hoveredSub = child.id"
                @mouseleave="hoveredSub = null"
                @click.stop="selectSub(tool.id, child.id)"
              >
                <span class="sub-dot"></span>
                <span class="sub-name">{{ child.title }}</span>
              </div>
            </div>
          </div>
        </nav>

        <!-- 底部装饰 -->
        <div class="sidebar-footer">
          <div class="footer-line"></div>
          <span class="footer-text">4 Tools · 12 Modules</span>
        </div>
      </aside>

      <!-- 右侧内容区 -->
      <main class="content-area" v-if="selectedSub">
        <!-- 内容头部 -->
        <header class="content-header">
          <div class="header-icon" :class="`icon-${selectedTool?.color}`">
            <span class="icon-emoji">{{ selectedSub.icon }}</span>
            <div class="icon-glow"></div>
          </div>
          <div class="header-info">
            <div class="header-breadcrumb">
              <span class="breadcrumb-tool">{{ selectedTool?.title }}</span>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">{{ selectedSub.title }}</span>
            </div>
            <h1 class="content-title">{{ selectedSub.title }}</h1>
            <p class="content-description">{{ selectedSub.description }}</p>
          </div>
        </header>

        <!-- 内容卡片网格 -->
        <div class="content-grid">
          <!-- 功能卡片 -->
          <div class="feature-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 class="card-title">配置管理</h3>
            <p class="card-desc">管理系统配置参数和基础设置</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 12V12.01"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h3 class="card-title">数据处理</h3>
            <p class="card-desc">执行数据验证和处理操作</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 19V13H15V19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 class="card-title">报表统计</h3>
            <p class="card-desc">查看处理结果和统计分析</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 8V4L8 8H12Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 8V16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12H16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 class="card-title">新增任务</h3>
            <p class="card-desc">创建新的验证或处理任务</p>
          </div>
        </div>

        <!-- 状态面板 -->
        <div class="status-panel">
          <h3 class="panel-title">系统状态</h3>
          <div class="status-list">
            <div class="status-item">
              <span class="status-dot status-online"></span>
              <span class="status-label">服务运行中</span>
              <span class="status-value">正常</span>
            </div>
            <div class="status-item">
              <span class="status-dot status-active"></span>
              <span class="status-label">任务队列</span>
              <span class="status-value">3 个待处理</span>
            </div>
            <div class="status-item">
              <span class="status-dot status-warning"></span>
              <span class="status-label">系统负载</span>
              <span class="status-value">42%</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.tools-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* 背景网格 */
.bg-grid {
  position: fixed;
  inset: 0;
  background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  z-index: 0;
}

/* 背景光晕 */
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
  background: var(--accent);
}

.bg-glow-2 {
  bottom: -100px;
  left: -100px;
  background: var(--primary);
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
  border-color: var(--accent);
  color: var(--accent);
  box-shadow: var(--glow-md);
}

/* 主布局 */
.main-layout {
  display: flex;
  flex: 1;
  position: relative;
  z-index: 1;
}

/* 左侧菜单 */
.sidebar {
  background: var(--bg-surface);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  padding: 80px 0 20px;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 0 20px;
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
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.4;
  background: linear-gradient(135deg, var(--text-main) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 0 12px;
}

/* 工具组 */
.tool-group {
  margin-bottom: 8px;
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-base);
}

.tool-main {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.tool-main:hover {
  background: var(--bg-elevated);
}

.tool-main.is-active {
  background: var(--bg-base);
}

.tool-icon {
  font-size: 1.2rem;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tool-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color var(--transition-base);
}

.tool-main:hover .tool-name {
  color: var(--text-main);
}

.tool-main.is-active .tool-name {
  color: var(--text-main);
}

/* 颜色指示器 */
.group-primary .tool-main.is-active {
  border-left: 2px solid var(--primary);
}

.group-secondary .tool-main.is-active {
  border-left: 2px solid var(--secondary);
}

.group-accent .tool-main.is-active {
  border-left: 2px solid var(--accent);
}

.group-purple .tool-main.is-active {
  border-left: 2px solid #a855f7;
}

/* 子菜单 */
.tool-subs {
  padding: 0 0 8px 44px;
}

.sub-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.sub-item:hover {
  background: var(--bg-elevated);
}

.sub-item.is-active {
  background: var(--bg-elevated);
}

.sub-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-dim);
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.sub-item:hover .sub-dot {
  background: var(--text-muted);
}

.sub-item.is-active .sub-dot {
  background: var(--accent);
  box-shadow: 0 0 6px var(--accent);
}

.group-primary .sub-item.is-active .sub-dot {
  background: var(--primary);
  box-shadow: 0 0 6px var(--primary);
}

.group-secondary .sub-item.is-active .sub-dot {
  background: var(--secondary);
  box-shadow: 0 0 6px var(--secondary);
}

.group-purple .sub-item.is-active .sub-dot {
  background: #a855f7;
  box-shadow: 0 0 6px #a855f7;
}

.sub-name {
  font-size: 0.9rem;
  color: var(--text-dim);
  transition: color var(--transition-fast);
}

.sub-item:hover .sub-name {
  color: var(--text-muted);
}

.sub-item.is-active .sub-name {
  color: var(--text-main);
  font-weight: 500;
}

/* 侧边栏底部 */
.sidebar-footer {
  padding: 20px;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.footer-line {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
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

.content-header {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 40px;
}

.header-icon {
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
  font-size: 2rem;
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

.header-icon:hover .icon-glow {
  opacity: 1;
}

.header-icon:hover {
  transform: scale(1.05);
}

.header-info {
  flex: 1;
}

.header-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.breadcrumb-tool {
  font-size: 0.85rem;
  color: var(--text-dim);
}

.breadcrumb-separator {
  color: var(--text-dim);
}

.breadcrumb-current {
  font-size: 0.85rem;
  color: var(--accent);
}

.content-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 12px;
}

.content-description {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* 功能卡片网格 */
.content-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

.feature-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  cursor: pointer;
  transition: all var(--transition-base);
}

.feature-card:hover {
  border-color: var(--border-color-strong);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-base);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--accent);
  margin-bottom: 16px;
}

.feature-card:hover .card-icon {
  border-color: var(--accent);
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 8px;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* 状态面板 */
.status-panel {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.panel-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-online {
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: pulse 2s ease-in-out infinite;
}

.status-active {
  background: var(--primary);
  box-shadow: 0 0 8px var(--primary);
}

.status-warning {
  background: #f59e0b;
  box-shadow: 0 0 8px #f59e0b;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.status-label {
  flex: 1;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.status-value {
  font-size: 0.875rem;
  color: var(--text-main);
  font-weight: 500;
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
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
