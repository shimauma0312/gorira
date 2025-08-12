<template>
  <header class="page-header" :data-theme="theme">
    <h1>{{ title }}</h1>
    <BackLink v-if="showBackLink" :to="backTo" :text="backText" />
  </header>
</template>

<script setup>
interface Props {
  title: string
  theme?: 'default' | 'green' | 'blue' | 'orange' | 'purple'
  showBackLink?: boolean
  backTo?: string
  backText?: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'default',
  showBackLink: true,
  backTo: '/',
  backText: '← トップページに戻る'
})
</script>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
  color: white;
  border-radius: 12px;
  position: relative;
  background: linear-gradient(135deg, var(--header-primary), var(--header-secondary));
  --header-primary: #2d5a27;
  --header-secondary: #4a7c59;
}

.page-header[data-theme="green"] {
  --header-primary: #4CAF50;
  --header-secondary: #8BC34A;
}

.page-header[data-theme="blue"] {
  --header-primary: #1976D2;
  --header-secondary: #42A5F5;
}

.page-header[data-theme="orange"] {
  --header-primary: #E65100;
  --header-secondary: #FF9800;
}

.page-header[data-theme="purple"] {
  --header-primary: #7B1FA2;
  --header-secondary: #9C27B0;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .page-header {
    padding: 30px 20px;
  }
}
</style>