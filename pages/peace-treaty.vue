<template>
  <div class="container">
    <header class="page-header">
      <h1>🤝 人類とゴリラの間に結ばれた平和条約</h1>
      <NuxtLink to="/" class="back-link">← トップページに戻る</NuxtLink>
    </header>

    <main class="content">
      <section class="introduction">
        <h2>歴史的な平和協定</h2>
        <p>
          1962年、ダイアン・フォッシー博士の先駆的な研究により、ゴリラが実は平和的で知性的な生物であることが明らかになりました。
          この発見を機に、象徴的な意味での「人類とゴリラの平和条約」が結ばれたとされています。
          これは科学的理解に基づく相互尊重の始まりでした。
        </p>
      </section>

      <section class="treaty-background">
        <h2>📋 条約成立の背景</h2>
        
        <div class="background-timeline">
          <div class="timeline-item">
            <div class="year">1959年</div>
            <div class="event">
              <h3>🔬 ルイス・リーキーの支援</h3>
              <p>古人類学者ルイス・リーキーがダイアン・フォッシーをゴリラ研究に招聘</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="year">1967年</div>
            <div class="event">
              <h3>🏔️ カリソケ研究センター設立</h3>
              <p>ルワンダの火山国立公園にゴリラ研究の拠点を設立</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="year">1970年</div>
            <div class="event">
              <h3>🤲 初の物理的接触</h3>
              <p>野生のゴリラ「パナッツ」がフォッシー博士の手に触れる歴史的瞬間</p>
            </div>
          </div>
        </div>
      </section>

      <section class="treaty-principles">
        <h2>📜 平和条約の原則</h2>
        
        <div class="principles-grid">
          <div class="principle-card">
            <h3>🌱 相互尊重</h3>
            <p>
              ゴリラの生息地と生活様式を尊重し、人間の都合で彼らの環境を
              破壊しないことを約束する
            </p>
          </div>
          
          <div class="principle-card">
            <h3>🛡️ 保護の誓い</h3>
            <p>
              ゴリラの種族保存のため、密猟や違法な取引から彼らを
              守ることを人類が誓約する
            </p>
          </div>
          
          <div class="principle-card">
            <h3>🧠 知的交流</h3>
            <p>
              科学的研究を通じてゴリラの知性と感情を理解し、
              相互の学習機会を創出する
            </p>
          </div>
          
          <div class="principle-card">
            <h3>🌍 共存の模索</h3>
            <p>
              地球という共通の家で、持続可能な方法で
              共存していく道を探求する
            </p>
          </div>
        </div>
      </section>

      <section class="key-figures">
        <h2>👥 平和条約の立役者たち</h2>
        
        <div class="figure-card">
          <h3>🎓 ダイアン・フォッシー (1932-1985)</h3>
          <p>
            「ゴリラと霧」の著者として知られる動物行動学者。18年間ルワンダでゴリラと共に暮らし、
            彼らの社会構造と平和的な性格を世界に知らしめた。ゴリラ保護運動の先駆者。
          </p>
        </div>
        
        <div class="figure-card">
          <h3>🦍 マウンテンゴリラ「ディジット」</h3>
          <p>
            フォッシー博士が研究したゴリラの中でも特に有名な個体。人間との友好的な関係を
            築き上げ、種族間の理解の象徴となった。1977年に密猟者により殺害される。
          </p>
        </div>
        
        <div class="figure-card">
          <h3>🎗️ ゴリラ保護団体</h3>
          <p>
            世界各地で設立されたゴリラ保護団体が、この「平和条約」の精神を
            実際の保護活動として具現化している。
          </p>
        </div>
      </section>

      <section class="modern-impact">
        <h2>🌟 現代への影響</h2>
        
        <div class="impact-list">
          <div class="impact-item">
            <h3>📚 環境教育</h3>
            <p>ゴリラとの平和条約は、野生動物保護の重要性を教育する象徴的な事例となっている</p>
          </div>
          
          <div class="impact-item">
            <h3>🎬 文化的影響</h3>
            <p>映画やドキュメンタリーを通じて、ゴリラの真の姿が広く一般に知られるようになった</p>
          </div>
          
          <div class="impact-item">
            <h3>🏞️ エコツーリズム</h3>
            <p>責任ある観光を通じて、地域経済とゴリラ保護の両立を図る取り組みが発展</p>
          </div>
          
          <div class="impact-item">
            <h3>🔬 継続的研究</h3>
            <p>現在も世界中の研究者がゴリラの行動と保護に関する研究を続けている</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: '人類とゴリラの間に結ばれた平和条約 - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: 'ダイアン・フォッシー博士の研究から始まった人類とゴリラの相互理解と平和共存の物語' }
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
  background: linear-gradient(135deg, #2E7D32, #4CAF50);
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
  color: #2E7D32;
  font-size: 2rem;
  margin-bottom: 20px;
}

.treaty-background {
  margin-bottom: 40px;
}

.treaty-background h2 {
  color: #2E7D32;
  font-size: 2rem;
  margin-bottom: 30px;
}

.background-timeline {
  margin-top: 30px;
}

.timeline-item {
  display: flex;
  margin-bottom: 30px;
  padding: 20px;
  background: #f1f8e9;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
}

.year {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2E7D32;
  min-width: 100px;
  margin-right: 30px;
}

.event h3 {
  color: #4CAF50;
  margin-bottom: 10px;
}

.treaty-principles {
  margin-bottom: 40px;
}

.treaty-principles h2 {
  color: #2E7D32;
  font-size: 2rem;
  margin-bottom: 30px;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.principle-card {
  background: #e8f5e8;
  padding: 25px;
  border-radius: 8px;
  border-top: 4px solid #4CAF50;
  transition: transform 0.2s ease;
}

.principle-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
}

.principle-card h3 {
  color: #2E7D32;
  margin-bottom: 15px;
}

.key-figures {
  margin-bottom: 40px;
}

.key-figures h2 {
  color: #2E7D32;
  font-size: 2rem;
  margin-bottom: 30px;
}

.figure-card {
  background: #f1f8e9;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
}

.figure-card h3 {
  color: #2E7D32;
  margin-bottom: 15px;
}

.modern-impact h2 {
  color: #2E7D32;
  font-size: 2rem;
  margin-bottom: 30px;
}

.impact-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.impact-item {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
}

.impact-item h3 {
  color: #2E7D32;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column;
  }
  
  .year {
    margin-bottom: 10px;
    margin-right: 0;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .principles-grid,
  .impact-list {
    grid-template-columns: 1fr;
  }
}
</style>