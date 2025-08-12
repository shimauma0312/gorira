<template>
  <nav class="app-navigation">
    <ul>
      <li v-for="item in navigationItems" :key="item.path">
        <NuxtLink :to="item.path" class="nav-link">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navigationItems = [
  { path: '/first-contact', title: '人類とゴリラのファーストコンタクト' },
  { path: '/uma-era', title: 'UMAとして恐れられた時代' },
  { path: '/peace-treaty', title: '人類とゴリラの間に結ばれた平和条約' },
  { path: '/after-gorillas', title: 'その後のゴリラ' },
  { path: '/roots', title: 'ゴリラと人類のルーツ' },
  { path: '/gorilla-gorilla-gorilla', title: 'ゴリラゴリラゴリラ' },
  { path: '/gorilla-diet', title: 'ゴリラの食生活' },
  { path: '/gorilla-habitat', title: 'ゴリラの生息地' },
  { path: '/gorilla-conservation', title: 'ゴリラの保護' },
  { path: '/gorilla-behavior', title: 'ゴリラの行動' },
  { path: '/gorilla-evolution', title: 'ゴリラの進化' }
]
</script>

<style scoped>
.app-navigation {
  margin-bottom: 40px;
}

.app-navigation ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.app-navigation li {
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.app-navigation li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.nav-link {
  display: block;
  padding: 20px;
  text-decoration: none;
  color: #2d5a27;
  font-weight: 600;
  border-left: 4px solid #4a7c59;
  transition: border-left-color 0.2s ease;
}

.nav-link:hover {
  border-left-color: #2d5a27;
}

.nav-link.router-link-active {
  background: #e8f5e8;
  border-left-color: #2d5a27;
}

@media (max-width: 768px) {
  .app-navigation ul {
    grid-template-columns: 1fr;
  }
}
</style>