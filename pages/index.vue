<template>
  <DefaultLayout>
    <AppHeader 
      title="🦍 ゴリラの生態学芸サイト" 
      subtitle="ゴリラと人類の関係史を学ぼう"
    />

    <AppNavigation />

    <MainContent>
      <InfoSection title="ようこそ、ゴリラの世界へ">
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
            上のナビゲーションから、ゴリラと人類の興味深い歴史について学んでください。
            それぞれのセクションには、科学的事実と興味深いストーリーが含まれています。
          </p>
        </div>
      </InfoSection>
    </MainContent>
  </DefaultLayout>
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
</style>