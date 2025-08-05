<template>
  <div class="container">
    <header class="page-header">
      <h1>🌿 その後のゴリラ</h1>
      <NuxtLink to="/" class="back-link">← トップページに戻る</NuxtLink>
    </header>

    <main class="content">
      <section class="introduction">
        <h2>現代のゴリラ</h2>
        <p>
          平和条約以降、ゴリラと人類の関係は大きく変化しました。
          科学的理解の深化、保護活動の発展、そして現代的な課題への対応など、
          ゴリラを取り巻く環境は劇的に変わっています。
        </p>
      </section>

      <section class="current-status">
        <h2>📊 現在の状況</h2>
        
        <div class="status-grid">
          <div class="status-card population">
            <h3>🦍 生息数</h3>
            <div class="stat-number">約1,000頭</div>
            <p>マウンテンゴリラ（野生個体数）</p>
            <div class="trend positive">↗️ 増加傾向</div>
          </div>
          
          <div class="status-card habitat">
            <h3>🌍 生息地</h3>
            <div class="stat-number">4カ国</div>
            <p>ルワンダ、ウガンダ、コンゴ民主共和国、中央アフリカ</p>
            <div class="trend neutral">→ 安定</div>
          </div>
          
          <div class="status-card conservation">
            <h3>🏛️ 保護区</h3>
            <div class="stat-number">15箇所</div>
            <p>国立公園・保護区での保護</p>
            <div class="trend positive">↗️ 拡大中</div>
          </div>
          
          <div class="status-card research">
            <h3>🔬 研究施設</h3>
            <div class="stat-number">20箇所</div>
            <p>世界各地の研究・保護センター</p>
            <div class="trend positive">↗️ 増加中</div>
          </div>
        </div>
      </section>

      <section class="achievements">
        <h2>🏆 保護活動の成果</h2>
        
        <div class="achievement-timeline">
          <div class="achievement-item">
            <div class="year">1980年代</div>
            <div class="achievement">
              <h3>🎬 「ゴリラと霧」映画化</h3>
              <p>ダイアン・フォッシーの物語が映画化され、世界的な関心を集める</p>
            </div>
          </div>
          
          <div class="achievement-item">
            <div class="year">1990年代</div>
            <div class="achievement">
              <h3>🌱 エコツーリズムの発展</h3>
              <p>責任ある観光により地域経済と保護活動の両立を実現</p>
            </div>
          </div>
          
          <div class="achievement-item">
            <div class="year">2000年代</div>
            <div class="achievement">
              <h3>🤝 国際協力の強化</h3>
              <p>国境を越えた保護プログラムと研究協力の確立</p>
            </div>
          </div>
          
          <div class="achievement-item">
            <div class="year">2010年代</div>
            <div class="achievement">
              <h3>📱 テクノロジー活用</h3>
              <p>GPS追跡、ドローン監視、DNA分析等の最新技術導入</p>
            </div>
          </div>
          
          <div class="achievement-item">
            <div class="year">2020年代</div>
            <div class="achievement">
              <h3>🌐 デジタル保護活動</h3>
              <p>オンライン教育、VR体験、AI監視システムの活用</p>
            </div>
          </div>
        </div>
      </section>

      <section class="modern-challenges">
        <h2>⚠️ 現代の課題</h2>
        
        <div class="challenges-grid">
          <div class="challenge-card">
            <h3>🌳 森林破壊</h3>
            <p>
              農地拡大、違法伐採により生息地が減少。
              気候変動も生態系に影響を与えている。
            </p>
            <div class="severity high">緊急度: 高</div>
          </div>
          
          <div class="challenge-card">
            <h3>⚔️ 政治的不安定</h3>
            <p>
              一部地域での内戦や政治的混乱が
              保護活動の継続を困難にしている。
            </p>
            <div class="severity medium">緊急度: 中</div>
          </div>
          
          <div class="challenge-card">
            <h3>🦠 感染症</h3>
            <p>
              人間からの病気感染リスクと、
              COVID-19のような新興感染症の影響。
            </p>
            <div class="severity medium">緊急度: 中</div>
          </div>
          
          <div class="challenge-card">
            <h3>💰 密猟・違法取引</h3>
            <p>
              減少したものの依然として存在する
              違法な捕獲と取引。
            </p>
            <div class="severity low">緊急度: 低</div>
          </div>
        </div>
      </section>

      <section class="future-outlook">
        <h2>🔮 未来への展望</h2>
        
        <div class="outlook-cards">
          <div class="outlook-card">
            <h3>🤖 AI技術の活用</h3>
            <p>
              人工知能による行動分析、健康モニタリング、
              密猟者の早期発見システムの発展
            </p>
          </div>
          
          <div class="outlook-card">
            <h3>🧬 遺伝子保護</h3>
            <p>
              遺伝的多様性の保持と、
              将来的な個体数増加のための科学的アプローチ
            </p>
          </div>
          
          <div class="outlook-card">
            <h3>🌱 生息地回復</h3>
            <p>
              森林再生プロジェクトと、
              持続可能な地域開発モデルの確立
            </p>
          </div>
          
          <div class="outlook-card">
            <h3>🎓 次世代教育</h3>
            <p>
              VR・ARを活用した環境教育と、
              グローバルな保護意識の向上
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'その後のゴリラ - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: '平和条約以降の現代ゴリラ保護活動の成果と未来への展望' }
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
  background: linear-gradient(135deg, #1B5E20, #388E3C);
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
  color: #1B5E20;
  font-size: 2rem;
  margin-bottom: 20px;
}

.current-status {
  margin-bottom: 40px;
}

.current-status h2 {
  color: #1B5E20;
  font-size: 2rem;
  margin-bottom: 30px;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.status-card {
  background: #e8f5e8;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  border-top: 4px solid #388E3C;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1B5E20;
  margin: 15px 0;
}

.trend {
  margin-top: 15px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 15px;
  display: inline-block;
}

.trend.positive {
  background: #c8e6c9;
  color: #2e7d32;
}

.trend.neutral {
  background: #fff3e0;
  color: #f57c00;
}

.achievements {
  margin-bottom: 40px;
}

.achievements h2 {
  color: #1B5E20;
  font-size: 2rem;
  margin-bottom: 30px;
}

.achievement-timeline {
  margin-top: 30px;
}

.achievement-item {
  display: flex;
  margin-bottom: 30px;
  padding: 20px;
  background: #f1f8e9;
  border-radius: 8px;
  border-left: 4px solid #388E3C;
}

.achievement-item .year {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1B5E20;
  min-width: 120px;
  margin-right: 30px;
}

.achievement h3 {
  color: #388E3C;
  margin-bottom: 10px;
}

.modern-challenges {
  margin-bottom: 40px;
}

.modern-challenges h2 {
  color: #1B5E20;
  font-size: 2rem;
  margin-bottom: 30px;
}

.challenges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.challenge-card {
  background: #fff3e0;
  padding: 25px;
  border-radius: 8px;
  border-top: 4px solid #ff9800;
}

.challenge-card h3 {
  color: #e65100;
  margin-bottom: 15px;
}

.severity {
  margin-top: 15px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 15px;
  display: inline-block;
  font-size: 0.9rem;
}

.severity.high {
  background: #ffcdd2;
  color: #c62828;
}

.severity.medium {
  background: #fff3e0;
  color: #ef6c00;
}

.severity.low {
  background: #c8e6c9;
  color: #2e7d32;
}

.future-outlook h2 {
  color: #1B5E20;
  font-size: 2rem;
  margin-bottom: 30px;
}

.outlook-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.outlook-card {
  background: #e3f2fd;
  padding: 25px;
  border-radius: 8px;
  border-top: 4px solid #1976d2;
  transition: transform 0.2s ease;
}

.outlook-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(25, 118, 210, 0.2);
}

.outlook-card h3 {
  color: #0d47a1;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .achievement-item {
    flex-direction: column;
  }
  
  .achievement-item .year {
    margin-bottom: 10px;
    margin-right: 0;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .status-grid,
  .challenges-grid,
  .outlook-cards {
    grid-template-columns: 1fr;
  }
}
</style>