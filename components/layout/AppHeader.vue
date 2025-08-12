<template>
  <header class="app-header">
    <h1>{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>

<script setup>
interface Props {
  title: string
  subtitle?: string
  theme?: 'default' | 'green' | 'blue' | 'orange' | 'purple'
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'default'
})
</script>

<style scoped>
.app-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
  color: white;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--header-primary), var(--header-secondary));
  --header-primary: #2d5a27;
  --header-secondary: #4a7c59;
}

.app-header[data-theme="green"] {
  --header-primary: #4CAF50;
  --header-secondary: #8BC34A;
}

.app-header[data-theme="blue"] {
  --header-primary: #1976D2;
  --header-secondary: #42A5F5;
}

.app-header[data-theme="orange"] {
  --header-primary: #E65100;
  --header-secondary: #FF9800;
}

.app-header[data-theme="purple"] {
  --header-primary: #7B1FA2;
  --header-secondary: #9C27B0;
}

.app-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.app-header p {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }
  
  .app-header {
    padding: 30px 20px;
  }
}
</style>