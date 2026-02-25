<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  title: string
  description?: string
  icon?: string
  to?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  glowColor?: 'primary' | 'secondary' | 'accent'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  glowColor: 'primary'
})

const router = useRouter()

const handleClick = () => {
  if (props.to) {
    router.push(props.to)
  }
}

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'min-h-[120px] p-6 text-base',
    md: 'min-h-[160px] p-8 text-lg',
    lg: 'min-h-[200px] p-10 text-xl',
    xl: 'min-h-[280px] p-12 text-2xl'
  }
  return sizes[props.size]
})

const glowColorVar = computed(() => {
  const colors = {
    primary: 'rgba(0, 229, 255, 0.3)',
    secondary: 'rgba(124, 58, 237, 0.3)',
    accent: 'rgba(16, 185, 129, 0.3)'
  }
  return colors[props.glowColor]
})
</script>

<template>
  <div
    class="node-card cursor-pointer transition-all duration-300 ease-out"
    :class="[
      sizeClasses,
      to ? 'hover:scale-[1.02]' : ''
    ]"
    @click="handleClick"
  >
    <div class="node-card-inner">
      <!-- 图标区域 -->
      <div v-if="icon" class="node-icon">
        <span class="text-4xl">{{ icon }}</span>
      </div>

      <!-- 标题 -->
      <h3 class="node-title">{{ title }}</h3>

      <!-- 描述 -->
      <p v-if="description" class="node-description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.node-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.node-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    v-bind(glowColorVar) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity var(--transition-base);
}

.node-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-color-strong);
  box-shadow: var(--shadow-lg),
              0 0 24px v-bind(glowColorVar);
}

.node-card:hover::before {
  opacity: 1;
}

.node-card-inner {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--spacing-md);
}

.node-icon {
  opacity: 0.9;
  transition: all var(--transition-base);
}

.node-card:hover .node-icon {
  opacity: 1;
  transform: scale(1.1);
}

.node-title {
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: 0.02em;
}

.node-description {
  color: var(--text-muted);
  font-size: 0.85em;
  max-width: 300px;
  line-height: 1.5;
}
</style>
