<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

interface ValidationItem {
  id: string;
  title: string;
  english: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "purple";
  step: number;
  stats: string[];
  status: string;
}

const router = useRouter();

const validationItems: ValidationItem[] = [
  {
    id: "joint-air-validation",
    title: "联合空中作战筹划",
    english: "Joint Air Operation Planning",
    icon: "✈️",
    color: "primary",
    step: 1,
    stats: ["数据完整性", "时效性验证", "一致性检查"],
    status: "能力验证",
  },
  {
    id: "simulation-validation",
    title: "仿真推演",
    english: "Simulation & Deduction",
    icon: "🎯",
    color: "secondary",
    step: 2,
    stats: ["场景验证", "模型准确性", "结果可靠性"],
    status: "能力验证",
  },
  {
    id: "joint-command-validation",
    title: "联合空战指挥",
    english: "Joint Air Combat Command",
    icon: "🎮",
    color: "accent",
    step: 3,
    stats: ["态势准确性", "决策支持度", "协同有效性"],
    status: "能力验证",
  },
  {
    id: "overseas-validation",
    title: "境外空降机动作战",
    english: "Overseas Airborne Operations",
    icon: "🪂",
    color: "purple",
    step: 4,
    stats: ["环境适应性", "规划可行性", "通信可靠性"],
    status: "能力验证",
  },
];

const hoveredCard = ref<string | null>(null);

const handleBack = () => {
  router.push("/");
};

const handleCardClick = (item: ValidationItem) => {
  console.log("Clicked validation:", item.title);
};
</script>

<template>
  <div class="validation-page">
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
      <h1 class="page-title">任务数据保障流程验证管理</h1>
      <div class="header-line"></div>
    </header>

    <!-- 卡片网格 -->
    <main class="main-content">
      <div class="grid-container">
        <div
          v-for="item in validationItems"
          :key="item.id"
          class="validation-card"
          :class="[
            `card-${item.color}`,
            { 'is-hovered': hoveredCard === item.id },
          ]"
          @mouseenter="hoveredCard = item.id"
          @mouseleave="hoveredCard = null"
          @click="handleCardClick(item)"
        >
          <!-- 步骤编号 -->
          <div class="step-badge">
            <span class="step-number">0{{ item.step }}</span>
          </div>

          <!-- 卡片头部 -->
          <div class="card-header">
            <div class="card-icon">
              <span class="icon-emoji">{{ item.icon }}</span>
              <div class="icon-glow"></div>
            </div>
            <div class="header-content">
              <h3 class="card-title">{{ item.title }}能力验证</h3>
              <p class="card-english">流程验证</p>
            </div>
          </div>

          <!-- 卡片描述 -->
          <div class="card-description">
            <span class="desc-tag">{{ item.status }}</span>
          </div>

          <!-- 验证指标 -->
          <div class="card-stats">
            <div v-for="stat in item.stats" :key="stat" class="stat-item">
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
          <span class="stat-label">验证环节</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-box">
          <span class="stat-value">12</span>
          <span class="stat-label">验证指标</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-box">
          <span class="stat-value">100%</span>
          <span class="stat-label">流程覆盖</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.validation-page {
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
  background: var(--secondary);
}

.bg-glow-2 {
  bottom: -100px;
  left: -100px;
  background: var(--primary);
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
  border-color: var(--secondary);
  color: var(--secondary);
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
  background: linear-gradient(
    135deg,
    var(--text-main) 0%,
    var(--secondary) 100%
  );
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
  background: linear-gradient(
    90deg,
    transparent,
    var(--secondary),
    transparent
  );
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
.validation-card {
  position: relative;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 40px;
  cursor: pointer;
  transition: all var(--transition-base);
  overflow: hidden;
}

.validation-card::before {
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

.validation-card:hover::before {
  opacity: 1;
}

.validation-card:hover {
  border-color: var(--border-color-strong);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.validation-card.is-hovered {
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

/* 步骤编号 */
.step-badge {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 2;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--bg-base);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-full);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dim);
  transition: all var(--transition-base);
}

.validation-card:hover .step-number {
  border-color: currentColor;
  color: var(--text-main);
}

.card-primary:hover .step-number {
  border-color: var(--primary);
  color: var(--primary);
  box-shadow: 0 0 16px rgba(0, 229, 255, 0.4);
}

.card-secondary:hover .step-number {
  border-color: var(--secondary);
  color: var(--secondary);
  box-shadow: 0 0 16px rgba(124, 58, 237, 0.4);
}

.card-accent:hover .step-number {
  border-color: var(--accent);
  color: var(--accent);
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.4);
}

.card-purple:hover .step-number {
  border-color: #a855f7;
  color: #a855f7;
  box-shadow: 0 0 16px rgba(168, 85, 247, 0.4);
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

.validation-card:hover .icon-glow {
  opacity: 1;
}

.validation-card:hover .card-icon {
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

/* 验证指标 */
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

.validation-card:hover .card-decoration {
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

.validation-card:hover .corner {
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
  color: var(--secondary);
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
  .validation-page {
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
  .validation-page {
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
