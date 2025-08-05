<template>
  <div class="container">
    <header class="page-header">
      <h1>🤝 人類とゴリラのファーストコンタクト</h1>
      <NuxtLink to="/" class="back-link">← トップページに戻る</NuxtLink>
    </header>

    <main class="content">
      <section class="introduction">
        <h2>歴史的な出会い</h2>
        <p>
          1847年、アメリカの宣教師トーマス・サベージ博士が、ガボンでゴリラの頭骨を初めて発見しました。
          これが西洋科学におけるゴリラとの「ファーストコンタクト」とされています。
        </p>
      </section>

      <section class="timeline">
        <h2>📅 発見の歴史</h2>
        <div class="timeline-item">
          <div class="year">1847年</div>
          <div class="event">
            <h3>科学的発見</h3>
            <p>トーマス・サベージ博士がゴリラの頭骨を発見し、学名「Troglodytes gorilla」を命名</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="year">1861年</div>
          <div class="event">
            <h3>初の生体確認</h3>
            <p>フランスの探検家ポール・デュ・シャイユが生きているゴリラを西洋人として初めて観察</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="year">1902年</div>
          <div class="event">
            <h3>動物園での展示開始</h3>
            <p>ブロンクス動物園で初めてゴリラが一般公開される</p>
          </div>
        </div>
      </section>

      <section class="cultural-impact">
        <h2>🌍 文化的インパクト</h2>
        <p>
          ゴリラの発見は当時の西洋社会に大きな衝撃を与えました。ダーウィンの進化論と相まって、
          人類の起源に関する議論が活発化し、ゴリラは「野獣」として恐れられる一方で、
          人類の「失われた環」として科学的関心も集めました。
        </p>

        <div class="impact-points">
          <div class="impact-card">
            <h3>🔬 科学への影響</h3>
            <p>霊長類学の発展と進化論の証拠として重要な役割を果たした</p>
          </div>
          
          <div class="impact-card">
            <h3>📚 文学・芸術への影響</h3>
            <p>キングコングなどの創作物に影響を与え、ポップカルチャーの象徴となった</p>
          </div>
          
          <div class="impact-card">
            <h3>🤔 哲学的影響</h3>
            <p>「人間とは何か」という根本的な問いを投げかけた</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: '人類とゴリラのファーストコンタクト - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: '1847年の歴史的発見から始まる人類とゴリラの出会いの物語' }
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
  background: linear-gradient(135deg, #8B4513, #A0522D);
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
  color: #8B4513;
  font-size: 2rem;
  margin-bottom: 20px;
}

.timeline {
  margin-bottom: 40px;
}

.timeline h2 {
  color: #8B4513;
  font-size: 2rem;
  margin-bottom: 30px;
}

.timeline-item {
  display: flex;
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f5f2;
  border-radius: 8px;
  border-left: 4px solid #8B4513;
}

.year {
  font-size: 1.5rem;
  font-weight: bold;
  color: #8B4513;
  min-width: 100px;
  margin-right: 30px;
}

.event h3 {
  color: #A0522D;
  margin-bottom: 10px;
}

.cultural-impact h2 {
  color: #8B4513;
  font-size: 2rem;
  margin-bottom: 20px;
}

.impact-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.impact-card {
  background: #f0ede8;
  padding: 25px;
  border-radius: 8px;
  border-top: 4px solid #8B4513;
}

.impact-card h3 {
  color: #8B4513;
  margin-bottom: 15px;
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
  
  .impact-points {
    grid-template-columns: 1fr;
  }
}
</style>