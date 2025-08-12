<template>
  <NuxtLink :to="to" class="back-link">
    {{ text }}
  </NuxtLink>
</template>

<script setup>
interface Props {
  to?: string
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  to: '/',
  text: '← トップページに戻る'
})
</script>

<style scoped>
.back-link {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background: rgba(255,255,255,0.2);
  border-radius: 20px;
  transition: background 0.2s ease;
  display: inline-block;
}

.back-link:hover {
  background: rgba(255,255,255,0.3);
}
</style>