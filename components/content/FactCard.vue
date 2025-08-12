<template>
  <div class="fact-card" :class="cardClass">
    <div v-if="icon" class="fact-icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div v-if="details" class="details">
      <strong>{{ details }}</strong>
    </div>
  </div>
</template>

<script setup>
interface Props {
  title: string
  description: string
  icon?: string
  details?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const cardClass = computed(() => `fact-card--${props.variant}`)
</script>

<style scoped>
.fact-card {
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: var(--card-bg);
  border-top: 4px solid var(--card-border);
}

.fact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px var(--card-shadow);
}

.fact-card--default {
  --card-bg: #f8f9fa;
  --card-border: #6c757d;
  --card-shadow: rgba(108, 117, 125, 0.2);
}

.fact-card--primary {
  --card-bg: #e3f2fd;
  --card-border: #1976D2;
  --card-shadow: rgba(25, 118, 210, 0.2);
}

.fact-card--secondary {
  --card-bg: #fff3e0;
  --card-border: #FF9800;
  --card-shadow: rgba(255, 152, 0, 0.2);
}

.fact-card--success {
  --card-bg: #f1f8e9;
  --card-border: #4CAF50;
  --card-shadow: rgba(76, 175, 80, 0.2);
}

.fact-card--warning {
  --card-bg: #fff8e1;
  --card-border: #FFC107;
  --card-shadow: rgba(255, 193, 7, 0.2);
}

.fact-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.fact-card h3 {
  color: var(--card-border);
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.fact-card p {
  margin-bottom: 15px;
  color: #555;
  line-height: 1.6;
}

.details {
  background: rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  color: var(--card-border);
  font-size: 0.9rem;
}
</style>