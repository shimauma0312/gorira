<template>
  <section class="info-section">
    <h2 v-if="title">{{ title }}</h2>
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script setup>
interface Props {
  title?: string
  theme?: 'default' | 'green' | 'blue' | 'orange' | 'purple'
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'default'
})
</script>

<style scoped>
.info-section {
  margin-bottom: 40px;
}

.info-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--section-color);
}

.info-section[data-theme="default"] {
  --section-color: #2d5a27;
}

.info-section[data-theme="green"] {
  --section-color: #4CAF50;
}

.info-section[data-theme="blue"] {
  --section-color: #1976D2;
}

.info-section[data-theme="orange"] {
  --section-color: #E65100;
}

.info-section[data-theme="purple"] {
  --section-color: #7B1FA2;
}

.content {
  line-height: 1.6;
}

.content :deep(p) {
  margin-bottom: 15px;
}

.content :deep(ul) {
  list-style: none;
  padding: 0;
}

.content :deep(li) {
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.content :deep(li:last-child) {
  border-bottom: none;
}

.content :deep(li::before) {
  content: '• ';
  color: var(--section-color);
  font-weight: bold;
}
</style>