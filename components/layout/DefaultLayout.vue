<template>
  <div class="default-layout">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup>
// This layout provides the basic container styling
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
  background: #f5f5f5;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
</style>