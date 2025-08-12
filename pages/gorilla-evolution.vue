<template>
  <DefaultLayout>
    <PageHeader 
      title="🧬 ゴリラの進化" 
      theme="purple"
    />

    <MainContent>
      <InfoSection title="霊長類の進化における位置">
        <p>
          ゴリラは約600-700万年前に人類と共通の祖先から分岐しました。
          彼らの進化の軌跡は、私たち人類の起源を理解する上で
          重要な鍵を握っています。
        </p>
      </InfoSection>

      <InfoSection title="🕐 進化の年表">
        <div class="evolution-timeline">
          <div class="timeline-item">
            <div class="time-period">2500万年前</div>
            <div class="event">
              <h3>類人猿の起源</h3>
              <p>アフリカで最初の類人猿が出現。プロコンスルなどの初期類人猿。</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time-period">1500万年前</div>
            <div class="event">
              <h3>大型類人猿の分岐</h3>
              <p>オランウータンの祖先が他の大型類人猿から分岐。</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time-period">700万年前</div>
            <div class="event">
              <h3>ゴリラ・人類の分岐</h3>
              <p>ゴリラの祖先が人類・チンパンジーの共通祖先から分岐。</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time-period">200万年前</div>
            <div class="event">
              <h3>現代ゴリラの出現</h3>
              <p>現在のゴリラに近い形態を持つ種が出現。</p>
            </div>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="🧬 遺伝的特徴">
        <div class="genetic-features">
          <FactCard
            title="DNA類似性"
            description="人類とのDNA類似度は約98.3%。非常に近い遺伝的関係。"
            icon="🧬"
            details="遺伝子数: 約22,000"
            variant="primary"
          />
          
          <FactCard
            title="染色体数"
            description="48本の染色体（人類は46本）。2本の染色体が融合。"
            icon="📊"
            details="2n = 48"
            variant="secondary"
          />
          
          <FactCard
            title="遺伝的多様性"
            description="比較的低い遺伝的多様性。個体群間での差異は小さい。"
            icon="🌐"
            details="亜種間の分岐: 100万年前"
            variant="warning"
          />
        </div>
      </InfoSection>

      <InfoSection title="🏗️ 形態的進化">
        <div class="morphological-evolution">
          <div class="evolution-aspect">
            <h3>🦴 骨格の特徴</h3>
            <ul>
              <li>巨大な頭蓋冠と強靭な顎筋</li>
              <li>長い腕と短い脚（腕歩行適応）</li>
              <li>手の器用さ（道具使用能力）</li>
              <li>直立二足歩行の可能性</li>
            </ul>
          </div>
          
          <div class="evolution-aspect">
            <h3>🧠 脳の発達</h3>
            <ul>
              <li>大きな脳容量（400-500cc）</li>
              <li>複雑な社会行動の基盤</li>
              <li>学習と記憶能力の向上</li>
              <li>感情的知性の発達</li>
            </ul>
          </div>
          
          <div class="evolution-aspect">
            <h3>🦷 歯の進化</h3>
            <ul>
              <li>大きな臼歯（植物食適応）</li>
              <li>犬歯の性的二型</li>
              <li>エナメル質の厚化</li>
              <li>咀嚼効率の向上</li>
            </ul>
          </div>
        </div>
      </InfoSection>
    </MainContent>
  </DefaultLayout>
</template>

<script setup>
useHead({
  title: 'ゴリラの進化 - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: 'ゴリラの進化史、遺伝的特徴、形態的進化について学ぶ' }
  ]
})
</script>

<style scoped>
.evolution-timeline {
  position: relative;
  padding-left: 30px;
  margin-bottom: 40px;
}

.evolution-timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #9C27B0;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -23px;
  top: 10px;
  width: 16px;
  height: 16px;
  background: #9C27B0;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #9C27B0;
}

.time-period {
  font-size: 1.2rem;
  font-weight: bold;
  color: #9C27B0;
  margin-bottom: 10px;
}

.event {
  background: #f3e5f5;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #9C27B0;
}

.event h3 {
  color: #9C27B0;
  margin-bottom: 10px;
}

.genetic-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.morphological-evolution {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.evolution-aspect {
  background: #f3e5f5;
  padding: 25px;
  border-radius: 8px;
  border-left: 4px solid #9C27B0;
}

.evolution-aspect h3 {
  color: #9C27B0;
  margin-bottom: 15px;
}

.evolution-aspect ul {
  list-style: none;
  padding: 0;
}

.evolution-aspect li {
  padding: 5px 0;
  border-bottom: 1px solid rgba(156, 39, 176, 0.1);
}

.evolution-aspect li:last-child {
  border-bottom: none;
}

.evolution-aspect li::before {
  content: '• ';
  color: #9C27B0;
  font-weight: bold;
}

@media (max-width: 768px) {
  .genetic-features,
  .morphological-evolution {
    grid-template-columns: 1fr;
  }
  
  .evolution-timeline {
    padding-left: 20px;
  }
  
  .timeline-item::before {
    left: -18px;
  }
}
</style>