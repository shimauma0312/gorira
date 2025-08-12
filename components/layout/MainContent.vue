<template>
  <main class="main-content">
    <slot />
  </main>
</template>

<script setup>
// Main content wrapper with consistent styling
</script>

<style scoped>
.main-content {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .main-content {
    padding: 20px;
  }
}
</style>