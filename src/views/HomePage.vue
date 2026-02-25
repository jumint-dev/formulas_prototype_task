<script setup lang="ts">
import { useRouter } from "vue-router";
import NodeCard from "../components/NodeCard.vue";

interface MainNode {
  id: string;
  title: string;
  icon: string;
  route: string;
  color: "primary" | "secondary" | "accent";
  size: "lg" | "md";
  subtitle?: string;
}

const mainNodes: MainNode[] = [
  {
    id: "software",
    title: "任务数据保障",
    subtitle: "Management",
    icon: "🛡️",
    route: "/management",
    color: "primary",
    size: "lg",
  },
  {
    id: "validation",
    title: "任务数据保障能力流程验证",
    subtitle: "Validation",
    icon: "🔄",
    route: "/validation",
    color: "secondary",
    size: "lg",
  },
  {
    id: "tools",
    title: "任务数据验证工具研制",
    subtitle: "Development",
    icon: "🔧",
    route: "/tools",
    color: "accent",
    size: "lg",
  },
];

const router = useRouter();
</script>

<template>
  <div class="home-page">
    <!-- 背景装饰 -->
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>
    <div class="bg-glow bg-glow-3"></div>

    <!-- 页面标题 -->
    <header class="page-header">
      <div class="header-badge">Mission Data Assurance System</div>
      <h1 class="page-title">任务数据保障系统</h1>
      <p class="page-subtitle">
        <span class="subtitle-item">数据保障</span>
        <span class="subtitle-separator">·</span>
        <span class="subtitle-item">能力验证</span>
        <span class="subtitle-separator">·</span>
        <span class="subtitle-item">工具研制</span>
      </p>
    </header>

    <!-- 主节点区域 -->
    <main class="main-nodes">
      <div class="nodes-grid">
        <div v-for="node in mainNodes" :key="node.id" class="node-col">
          <div
            class="node-icon-wrapper"
            :class="`icon-${node.color}`"
            @click="router.push(node.route)"
          >
            <span class="node-icon">{{ node.icon }}</span>
          </div>
          <NodeCard
            :title="node.title"
            :to="node.route"
            size="lg"
            :glow-color="node.color"
            class="main-node-card"
          />
          <span class="node-subtitle">{{ node.subtitle }}</span>
        </div>
      </div>
    </main>

    <!-- 底部信息栏 -->
    <footer class="page-footer">
      <div class="footer-content">
        <div class="footer-status">
          <span class="status-dot status-online"></span>
          <span class="status-text">系统运行中</span>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-info">
          <span>国防科技</span>
          <span class="info-separator">|</span>
          <span>智能验证</span>
          <span class="info-separator">|</span>
          <span>V1.0</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 60px 80px;
  position: relative;
  overflow: hidden;
}

/* 背景网格 */
.bg-grid {
  position: fixed;
  inset: 0;
  background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.15;
  z-index: 0;
}

/* 背景光晕 */
.bg-glow {
  position: fixed;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.15;
  z-index: 0;
  animation: float 20s ease-in-out infinite;
}

.bg-glow-1 {
  top: -150px;
  left: -150px;
  background: var(--primary);
  animation-delay: 0s;
}

.bg-glow-2 {
  bottom: -150px;
  right: -150px;
  background: var(--secondary);
  animation-delay: -7s;
}

.bg-glow-3 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--accent);
  opacity: 0.08;
  animation-delay: -14s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}

/* 页面头部 */
.page-header {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
}

.header-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  color: var(--text-dim);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: var(--spacing-lg);
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--text-main) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  font-size: 1.1rem;
  color: var(--text-muted);
}

.subtitle-item {
  position: relative;
  padding: 0 var(--spacing-sm);
}

.subtitle-separator {
  color: var(--text-dim);
}

/* 主节点区域 */
.main-nodes {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.nodes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  width: 100%;
  max-width: 1600px;
}

.node-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.node-icon-wrapper {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.icon-primary {
  background: rgba(0, 229, 255, 0.1);
  border: 2px solid rgba(0, 229, 255, 0.3);
}

.icon-secondary {
  background: rgba(124, 58, 237, 0.1);
  border: 2px solid rgba(124, 58, 237, 0.3);
}

.icon-accent {
  background: rgba(16, 185, 129, 0.1);
  border: 2px solid rgba(16, 185, 129, 0.3);
}

.node-col:hover .node-icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 0 40px currentColor;
}

.node-icon {
  font-size: 4rem;
}

.main-node-card {
  width: 100%;
}

.node-subtitle {
  font-size: 1rem;
  color: var(--text-dim);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* 底部信息栏 */
.page-footer {
  margin-top: 80px;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
}

.footer-status {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-online {
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: pulse 2s ease-in-out infinite;
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

.status-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.footer-divider {
  width: 1px;
  height: 16px;
  background: var(--border-color);
}

.footer-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
  color: var(--text-dim);
}

.info-separator {
  color: var(--border-color);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .home-page {
    padding: 40px 40px;
  }

  .nodes-grid {
    gap: 40px;
    max-width: 1000px;
  }

  .node-icon-wrapper {
    width: 100px;
    height: 100px;
  }

  .node-icon {
    font-size: 3rem;
  }
}

@media (max-width: 900px) {
  .home-page {
    padding: 30px 20px;
  }

  .page-header {
    margin-bottom: 40px;
  }

  .nodes-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-content {
    flex-direction: column;
    gap: var(--spacing-sm);
    border-radius: var(--radius-lg);
  }

  .footer-divider {
    width: 80%;
    height: 1px;
  }
}
</style>
