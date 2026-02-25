<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { DataBaseIcon } from "tdesign-icons-vue-next";

interface TopicItem {
  id: string;
  title: string;
  english: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "purple";
  stats: string[];
  description: string;
}

const router = useRouter();

const topics: TopicItem[] = [
  {
    id: "joint-air-operation",
    title: "联合空中作战筹划",
    english: "Joint Air Operation Planning",
    icon: "🗄️",
    color: "primary",
    stats: ["数据接入", "实时同步", "质量监控"],
    description: "主题数据保障",
  },
  {
    id: "simulation",
    title: "仿真推演",
    english: "Simulation & Deduction",
    icon: "🗄️",
    color: "secondary",
    stats: ["场景构建", "模型验证", "结果分析"],
    description: "主题数据保障",
  },
  {
    id: "joint-command",
    title: "联合空战指挥",
    english: "Joint Air Combat Command",
    icon: "🗄️",
    color: "accent",
    stats: ["态势汇聚", "决策支持", "协同保障"],
    description: "专题态势支撑",
  },
  {
    id: "overseas-operation",
    title: "境外空降机动作战",
    english: "Overseas Airborne Operations",
    icon: "🗄️",
    color: "purple",
    stats: ["环境数据", "任务规划", "通信保障"],
    description: "主题数据保障",
  },
];

const hoveredCard = ref<string | null>(null);

const handleBack = () => {
  router.push("/");
};

const handleCardClick = (topic: TopicItem) => {
  if (topic.id === "joint-air-operation") {
    router.push("/management/joint-air-operation");
  } else {
    console.log("Clicked topic:", topic.title);
  }
};
</script>

<template>
  <div class="management-page">
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

    <!-- 页面标题 -->
    <header class="page-header">
      <h1 class="page-title">任务数据保障管理</h1>
      <div class="header-line"></div>
    </header>

    <!-- 卡片网格 -->
    <main class="main-content">
      <div class="grid-container">
        <div
          v-for="topic in topics"
          :key="topic.id"
          class="topic-card"
          :class="[
            `card-${topic.color}`,
            { 'is-hovered': hoveredCard === topic.id },
          ]"
          @mouseenter="hoveredCard = topic.id"
          @mouseleave="hoveredCard = null"
          @click="handleCardClick(topic)"
        >
          <!-- 卡片头部 -->
          <div class="card-header">
            <div class="card-icon">
              <span class="icon-emoji"><DataBaseIcon /></span>
              <div class="icon-glow"></div>
            </div>
            <div class="header-content">
              <h3 class="card-title">{{ topic.title }}主题数据</h3>
              <p class="card-english">主题数据</p>
            </div>
          </div>

          <!-- 卡片描述 -->
          <div class="card-description">
            <span class="desc-tag">{{ topic.description }}</span>
          </div>

          <!-- 统计数据 -->
          <div class="card-stats">
            <div v-for="stat in topic.stats" :key="stat" class="stat-item">
              <span class="stat-dot"></span>
              <span class="stat-text">{{ stat }}</span>
            </div>
          </div>

          <!-- 卡片装饰线 -->
          <div class="card-decoration">
            <div class="deco-line deco-line-1"></div>
            <div class="deco-line deco-line-2"></div>
            <div class="deco-line deco-line-3"></div>
          </div>

          <!-- 卡片角落装饰 -->
          <div class="corner corner-tl"></div>
          <div class="corner corner-tr"></div>
          <div class="corner corner-bl"></div>
          <div class="corner corner-br"></div>
        </div>
      </div>
    </main>

    <!-- 底部信息 -->
    <footer class="page-footer">
      <div class="footer-stats">
        <div class="stat-box">
          <span class="stat-value">4</span>
          <span class="stat-label">保障主题</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-box">
          <span class="stat-value">12</span>
          <span class="stat-label">功能模块</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-box">
          <span class="stat-value">100%</span>
          <span class="stat-label">覆盖率</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.management-page {
  min-height: 100vh;
  padding: 60px 80px;
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
  background: var(--primary);
}

.bg-glow-2 {
  bottom: -100px;
  left: -100px;
  background: var(--secondary);
}

/* 返回按钮 */
.back-button {
  position: absolute;
  top: 60px;
  left: 80px;
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

/* 页面头部 */
.page-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.header-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  color: var(--text-dim);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: var(--spacing-lg);
}

.page-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(135deg, var(--text-main) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-lg);
}

.header-line {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  margin: 0 auto;
  border-radius: var(--radius-full);
}

/* 主内容区 */
.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1400px;
  width: 100%;
}

/* 卡片样式 */
.topic-card {
  position: relative;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 40px;
  cursor: pointer;
  transition: all var(--transition-base);
  overflow: hidden;
}

.topic-card::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: 0;
}

.card-primary::before {
  background: radial-gradient(
    circle at top right,
    rgba(0, 229, 255, 0.1),
    transparent 60%
  );
}

.card-secondary::before {
  background: radial-gradient(
    circle at top right,
    rgba(124, 58, 237, 0.1),
    transparent 60%
  );
}

.card-accent::before {
  background: radial-gradient(
    circle at top right,
    rgba(16, 185, 129, 0.1),
    transparent 60%
  );
}

.card-purple::before {
  background: radial-gradient(
    circle at top right,
    rgba(168, 85, 247, 0.1),
    transparent 60%
  );
}

.topic-card:hover::before {
  opacity: 1;
}

.topic-card:hover {
  border-color: var(--border-color-strong);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.topic-card.is-hovered {
  border-color: currentColor;
}

.card-primary.is-hovered {
  border-color: var(--primary);
}

.card-secondary.is-hovered {
  border-color: var(--secondary);
}

.card-accent.is-hovered {
  border-color: var(--accent);
}

.card-purple.is-hovered {
  border-color: #a855f7;
}

/* 卡片头部 */
.card-header {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.card-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-base);
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

.card-primary .icon-glow {
  background: rgba(0, 229, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
}

.card-secondary .icon-glow {
  background: rgba(124, 58, 237, 0.2);
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
}

.card-accent .icon-glow {
  background: rgba(16, 185, 129, 0.2);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

.card-purple .icon-glow {
  background: rgba(168, 85, 247, 0.2);
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
}

.topic-card:hover .icon-glow {
  opacity: 1;
}

.topic-card:hover .card-icon {
  transform: scale(1.05);
}

.header-content {
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: var(--spacing-xs);
}

.card-english {
  font-size: 0.85rem;
  color: var(--text-dim);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* 卡片描述 */
.card-description {
  margin-bottom: var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.desc-tag {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-base);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* 统计数据 */
.card-stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  position: relative;
  z-index: 1;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.stat-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-dim);
  transition: all var(--transition-base);
}

.card-primary:hover .stat-dot {
  background: var(--primary);
  box-shadow: 0 0 8px var(--primary);
}

.card-secondary:hover .stat-dot {
  background: var(--secondary);
  box-shadow: 0 0 8px var(--secondary);
}

.card-accent:hover .stat-dot {
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
}

.card-purple:hover .stat-dot {
  background: #a855f7;
  box-shadow: 0 0 8px #a855f7;
}

.stat-text {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* 卡片装饰线 */
.card-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.topic-card:hover .card-decoration {
  opacity: 1;
}

.deco-line {
  position: absolute;
  background: currentColor;
}

.deco-line-1 {
  top: 0;
  left: 0;
  width: 60px;
  height: 2px;
}

.deco-line-2 {
  top: 0;
  left: 0;
  width: 2px;
  height: 60px;
}

.deco-line-3 {
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 1px;
  opacity: 0.5;
}

.card-primary .deco-line {
  background: var(--primary);
}
.card-secondary .deco-line {
  background: var(--secondary);
}
.card-accent .deco-line {
  background: var(--accent);
}
.card-purple .deco-line {
  background: #a855f7;
}

/* 角落装饰 */
.corner {
  position: absolute;
  width: 8px;
  height: 8px;
  border: 1px solid var(--border-color);
  opacity: 0;
  transition: all var(--transition-base);
}

.topic-card:hover .corner {
  opacity: 1;
}

.corner-tl {
  top: 12px;
  left: 12px;
  border-right: none;
  border-bottom: none;
}
.corner-tr {
  top: 12px;
  right: 12px;
  border-left: none;
  border-bottom: none;
}
.corner-bl {
  bottom: 12px;
  left: 12px;
  border-right: none;
  border-top: none;
}
.corner-br {
  bottom: 12px;
  right: 12px;
  border-left: none;
  border-top: none;
}

/* 底部信息 */
.page-footer {
  margin-top: 60px;
  position: relative;
  z-index: 1;
}

.footer-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xl);
  padding: var(--spacing-lg) var(--spacing-xl);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
}

.stat-box {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-dim);
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: var(--border-color);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .management-page {
    padding: 40px 40px;
  }

  .back-button {
    top: 40px;
    left: 40px;
  }

  .grid-container {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .management-page {
    padding: 30px 20px;
  }

  .back-button {
    top: 20px;
    left: 20px;
  }

  .grid-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer-stats {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .stat-divider {
    width: 80%;
    height: 1px;
  }
}
</style>
