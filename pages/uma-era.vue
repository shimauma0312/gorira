<template>
  <div class="container">
    <header class="page-header">
      <h1>👹 UMAとして恐れられた時代</h1>
      <NuxtLink to="/" class="back-link">← トップページに戻る</NuxtLink>
    </header>

    <main class="content">
      <section class="introduction">
        <h2>謎の生物として</h2>
        <p>
          ゴリラが科学的に発見される前、アフリカの熱帯雨林に住む巨大な類人猿の存在は、
          地元の人々の間で語り継がれる伝説的な存在でした。西洋世界では「未確認動物（UMA: Unidentified Mysterious Animal）」
          として恐れられ、多くの神話や伝説に登場していました。
        </p>
      </section>

      <section class="legends">
        <h2>🏛️ 古代からの伝説</h2>
        
        <div class="legend-item">
          <h3>📜 古代ギリシャの記録</h3>
          <p>
            紀元前6世紀、カルタゴの航海者ハンノが西アフリカを探検した際の記録に、
            「毛むくじゃらで野蛮な人々」として記述されているのがゴリラの最古の記録とされています。
            ハンノはこれらの生物を「ゴリライ」と呼びました。
          </p>
        </div>

        <div class="legend-item">
          <h3>🌍 アフリカの民話</h3>
          <p>
            中央アフリカの部族の間では、森の奥深くに住む巨大で力強い精霊として語られていました。
            多くの部族がゴリラを森の守護神として崇拝し、同時に恐れていました。
          </p>
        </div>

        <div class="legend-item">
          <h3>🗺️ 中世ヨーロッパの地図</h3>
          <p>
            中世ヨーロッパの地図には、アフリカの未知の土地に「野人」や「怪物」として描かれることがありました。
            これらの描写の中にはゴリラの特徴を持つものも見受けられます。
          </p>
        </div>
      </section>

      <section class="fear-factors">
        <h2>😱 恐怖の要因</h2>
        
        <div class="fear-grid">
          <div class="fear-card">
            <h3>🦍 巨大な体格</h3>
            <p>立ち上がると2メートルを超える巨体と、人間を軽々と持ち上げる怪力</p>
          </div>
          
          <div class="fear-card">
            <h3>🔊 威嚇の咆哮</h3>
            <p>胸を叩く音と大きな咆哮は、森の動物たちを震え上がらせた</p>
          </div>
          
          <div class="fear-card">
            <h3>👥 人間に似た姿</h3>
            <p>人間のような顔立ちと行動は、不気味の谷現象を引き起こした</p>
          </div>
          
          <div class="fear-card">
            <h3>🌲 神秘的な生息地</h3>
            <p>人跡未踏の深い森の奥という、神秘と危険に満ちた環境</p>
          </div>
        </div>
      </section>

      <section class="transformation">
        <h2>🔄 認識の変化</h2>
        <p>
          19世紀後半から20世紀初頭にかけて、科学的研究が進むにつれて、
          ゴリラに対する認識は「恐ろしい怪物」から「知性ある動物」へと徐々に変化していきました。
        </p>

        <div class="transformation-timeline">
          <div class="transform-item">
            <span class="period">19世紀前半</span>
            <span class="description">👹 恐ろしい怪物・UMAとしての認識</span>
          </div>
          
          <div class="transform-item">
            <span class="period">19世紀後半</span>
            <span class="description">🔬 科学的観察の開始</span>
          </div>
          
          <div class="transform-item">
            <span class="period">20世紀初頭</span>
            <span class="description">🦍 野生動物としての理解</span>
          </div>
          
          <div class="transform-item">
            <span class="period">20世紀中期</span>
            <span class="description">🧠 知性ある生物としての認識</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'UMAとして恐れられた時代 - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: 'ゴリラが未確認動物として恐れられていた時代の歴史と伝説' }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
  background: linear-gradient(135deg, #4A0E4E, #8B008B);
  color: white;
  border-radius: 12px;
  position: relative;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.back-link {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background: rgba(255,255,255,0.2);
  border-radius: 20px;
  transition: background 0.2s ease;
}

.back-link:hover {
  background: rgba(255,255,255,0.3);
}

.content {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.introduction {
  margin-bottom: 40px;
}

.introduction h2 {
  color: #4A0E4E;
  font-size: 2rem;
  margin-bottom: 20px;
}

.legends {
  margin-bottom: 40px;
}

.legends h2 {
  color: #4A0E4E;
  font-size: 2rem;
  margin-bottom: 30px;
}

.legend-item {
  background: #f8f4f9;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-left: 4px solid #8B008B;
}

.legend-item h3 {
  color: #4A0E4E;
  margin-bottom: 15px;
}

.fear-factors {
  margin-bottom: 40px;
}

.fear-factors h2 {
  color: #4A0E4E;
  font-size: 2rem;
  margin-bottom: 30px;
}

.fear-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.fear-card {
  background: #f0e6f1;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  border-top: 4px solid #8B008B;
  transition: transform 0.2s ease;
}

.fear-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(139, 0, 139, 0.2);
}

.fear-card h3 {
  color: #4A0E4E;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.transformation {
  margin-bottom: 40px;
}

.transformation h2 {
  color: #4A0E4E;
  font-size: 2rem;
  margin-bottom: 20px;
}

.transformation-timeline {
  margin-top: 30px;
}

.transform-item {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  background: #f8f4f9;
  border-radius: 8px;
  border-left: 4px solid #8B008B;
}

.period {
  font-weight: bold;
  color: #4A0E4E;
  min-width: 150px;
  margin-right: 20px;
}

.description {
  color: #666;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .fear-grid {
    grid-template-columns: 1fr;
  }
  
  .transform-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .period {
    margin-bottom: 10px;
    margin-right: 0;
  }
}
</style>