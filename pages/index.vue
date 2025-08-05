<template>
  <div class="container">
    <header class="header">
      <h1>🦍 ゴリラの生態学芸サイト</h1>
      <p>ゴリラと人類の関係史を学ぼう</p>
    </header>

    <nav class="navigation">
      <ul>
        <li><NuxtLink to="/first-contact">人類とゴリラのファーストコンタクト</NuxtLink></li>
        <li><NuxtLink to="/uma-era">UMAとして恐れられた時代</NuxtLink></li>
        <li><NuxtLink to="/peace-treaty">人類とゴリラの間に結ばれた平和条約</NuxtLink></li>
        <li><NuxtLink to="/after-gorillas">その後のゴリラ</NuxtLink></li>
        <li><NuxtLink to="/roots">ゴリラと人類のルーツ</NuxtLink></li>
        <li><NuxtLink to="/gorilla-gorilla-gorilla">ゴリラゴリラゴリラ</NuxtLink></li>
      </ul>
    </nav>

    <main class="main-content">
      <section class="intro">
        <h2>ようこそ、ゴリラの世界へ</h2>
        <p>
          このサイトでは、ゴリラの生態と人類との関係について詳しく学ぶことができます。
          ゴリラは地球上で最も魅力的な霊長類の一つであり、人類と密接な関係を持っています。
        </p>
        
        <div class="gorilla-facts">
          <h3>🌿 ゴリラの基本情報</h3>
          <ul>
            <li>学名: Gorilla gorilla (ニシローランドゴリラ)</li>
            <li>生息地: アフリカ中央部の熱帯雨林</li>
            <li>体重: オス 180-220kg、メス 70-90kg</li>
            <li>食性: 主に草食性（果実、葉、茎を摂取）</li>
            <li>社会構造: 家族単位の群れで生活</li>
          </ul>
        </div>

        <div class="featured-section">
          <h3>🔍 注目のトピック</h3>
          <p>
            左のナビゲーションから、ゴリラと人類の興味深い歴史について学んでください。
            それぞれのセクションには、科学的事実と興味深いストーリーが含まれています。
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// メタデータの設定
useHead({
  title: 'ゴリラの生態学芸サイト - トップページ',
  meta: [
    { name: 'description', content: 'ゴリラの生態と人類との関係について学ぶ学芸サイト' }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
  background: linear-gradient(135deg, #2d5a27, #4a7c59);
  color: white;
  border-radius: 12px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.navigation {
  margin-bottom: 40px;
}

.navigation ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.navigation li {
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.navigation li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.navigation a {
  display: block;
  padding: 20px;
  text-decoration: none;
  color: #2d5a27;
  font-weight: 600;
  border-left: 4px solid #4a7c59;
}

.main-content {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.intro h2 {
  color: #2d5a27;
  font-size: 2rem;
  margin-bottom: 20px;
}

.gorilla-facts {
  background: #e8f5e8;
  padding: 25px;
  border-radius: 8px;
  margin: 30px 0;
}

.gorilla-facts h3 {
  color: #2d5a27;
  margin-bottom: 15px;
}

.gorilla-facts ul {
  list-style-type: none;
  padding: 0;
}

.gorilla-facts li {
  padding: 8px 0;
  border-bottom: 1px solid #d4e5d4;
}

.gorilla-facts li:last-child {
  border-bottom: none;
}

.featured-section {
  background: #f0f8f0;
  padding: 25px;
  border-radius: 8px;
  margin-top: 30px;
}

.featured-section h3 {
  color: #2d5a27;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .navigation ul {
    grid-template-columns: 1fr;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .container {
    padding: 10px;
  }
}
</style>