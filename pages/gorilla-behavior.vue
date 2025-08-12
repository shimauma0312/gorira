<template>
  <DefaultLayout>
    <PageHeader 
      title="🦍 ゴリラの行動" 
      theme="blue"
    />

    <MainContent>
      <InfoSection title="社会的動物としてのゴリラ">
        <p>
          ゴリラは高度に社会的な動物で、複雑な社会構造と
          豊かなコミュニケーション能力を持っています。
          彼らの行動パターンは、人類の社会行動の理解にも
          重要な洞察を提供しています。
        </p>
      </InfoSection>

      <InfoSection title="🏠 群れの構造">
        <div class="group-structure">
          <FactCard
            title="シルバーバック"
            description="群れのリーダーである成熟した雄。背中の銀色の毛が特徴。"
            icon="👑"
            details="年齢: 15歳以上"
            variant="primary"
          />
          
          <FactCard
            title="成熟雌"
            description="繁殖可能な雌たち。子育てと食物採集を行う。"
            icon="👩"
            details="通常2-3頭"
            variant="secondary"
          />
          
          <FactCard
            title="若いゴリラ"
            description="まだ性的に成熟していない個体。遊びながら学習。"
            icon="👶"
            details="年齢: 8歳未満"
            variant="success"
          />
        </div>
      </InfoSection>

      <InfoSection title="💬 コミュニケーション">
        <div class="communication-methods">
          <div class="method-card">
            <h3>🎵 音声コミュニケーション</h3>
            <ul>
              <li>うなり声（警告や威嚇）</li>
              <li>鼻歌（満足感の表現）</li>
              <li>叫び声（遠距離通信）</li>
              <li>ささやき声（近距離の親密な会話）</li>
            </ul>
          </div>
          
          <div class="method-card">
            <h3>👋 身体的ジェスチャー</h3>
            <ul>
              <li>胸叩き（存在のアピール）</li>
              <li>視線（社会的階層の表現）</li>
              <li>グルーミング（絆の強化）</li>
              <li>身体の位置（服従や支配の表現）</li>
            </ul>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="🎮 遊び行動">
        <div class="play-behaviors">
          <FactCard
            v-for="play in playBehaviors"
            :key="play.title"
            :title="play.title"
            :description="play.description"
            :icon="play.icon"
            variant="warning"
          />
        </div>
      </InfoSection>
    </MainContent>
  </DefaultLayout>
</template>

<script setup>
useHead({
  title: 'ゴリラの行動 - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: 'ゴリラの社会行動、コミュニケーション、遊びについて学ぶ' }
  ]
})

const playBehaviors = [
  {
    title: '🤸 レスリング',
    description: '若いゴリラ同士で行う組み合い遊び。力の調整と社会的順位を学ぶ。',
    icon: '🤸'
  },
  {
    title: '🌳 ブラキエーション',
    description: '枝から枝へと移動する遊び。運動能力と空間認識を発達させる。',
    icon: '🌳'
  },
  {
    title: '👥 追いかけっこ',
    description: 'グループで行う追跡遊び。協調性と運動能力を向上させる。',
    icon: '👥'
  },
  {
    title: '🎭 模倣遊び',
    description: '大人の行動を真似る遊び。生活スキルと社会的行動を学習。',
    icon: '🎭'
  }
]
</script>

<style scoped>
.group-structure {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.communication-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.method-card {
  background: #e3f2fd;
  padding: 25px;
  border-radius: 8px;
  border-left: 4px solid #1976D2;
}

.method-card h3 {
  color: #1976D2;
  margin-bottom: 15px;
}

.method-card ul {
  list-style: none;
  padding: 0;
}

.method-card li {
  padding: 5px 0;
  border-bottom: 1px solid rgba(25, 118, 210, 0.1);
}

.method-card li:last-child {
  border-bottom: none;
}

.method-card li::before {
  content: '• ';
  color: #1976D2;
  font-weight: bold;
}

.play-behaviors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .group-structure,
  .communication-methods,
  .play-behaviors {
    grid-template-columns: 1fr;
  }
}
</style>