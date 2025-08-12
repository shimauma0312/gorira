<template>
  <DefaultLayout>
    <PageHeader 
      title="🍃 ゴリラの食生活" 
      theme="green"
    />

    <MainContent>
      <InfoSection title="ゴリラの食事の基本">
        <p>
          ゴリラは主に植物食性の霊長類で、その巨大な体を維持するために
          1日の大部分を食事に費やします。野生のゴリラは1日8時間以上を
          食べ物の採集と摂食に使い、多様な植物を食べています。
        </p>
      </InfoSection>

      <InfoSection title="🥬 食事の構成">
        <div class="diet-chart">
          <FactCard
            v-for="item in dietItems"
            :key="item.title"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
            :details="item.percentage"
            variant="success"
          />
        </div>
      </InfoSection>

      <InfoSection title="🌸 季節による食事の変化">
        <div class="seasons-grid">
          <div v-for="season in seasons" :key="season.title" class="season-card">
            <h3>{{ season.title }}</h3>
            <ul>
              <li v-for="item in season.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="🦍 摂食行動の特徴">
        <div class="behavior-facts">
          <FactCard
            v-for="fact in behaviorFacts"
            :key="fact.title"
            :title="fact.title"
            :description="fact.description"
            :icon="fact.icon"
            variant="primary"
          />
        </div>
      </InfoSection>

      <InfoSection title="🧪 栄養要件">
        <div class="nutrition-grid">
          <FactCard
            v-for="nutrient in nutrients"
            :key="nutrient.title"
            :title="nutrient.title"
            :description="nutrient.description"
            :icon="nutrient.icon"
            :details="nutrient.requirement"
            variant="warning"
          />
        </div>
      </InfoSection>

      <InfoSection title="🌍 保護への示唆">
        <div class="conservation-content">
          <div v-for="implication in conservationImplications" :key="implication.title" class="implication">
            <h3>{{ implication.title }}</h3>
            <p>{{ implication.description }}</p>
          </div>
        </div>
      </InfoSection>
    </MainContent>
  </DefaultLayout>
</template>

<script setup>
useHead({
  title: 'ゴリラの食生活 - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: 'ゴリラの食事、栄養要件、摂食行動について詳しく学ぶ' }
  ]
})

const dietItems = [
  {
    title: '🌿 葉類',
    description: '若葉、成熟した葉、茎など。タンパク質とファイバーの主要源。',
    icon: '🌿',
    percentage: '50%'
  },
  {
    title: '🍎 果実', 
    description: '季節に応じた果実。糖分とビタミンを提供。',
    icon: '🍎',
    percentage: '30%'
  },
  {
    title: '🌱 茎・樹皮',
    description: '若い茎や内樹皮。ファイバーとミネラル源。', 
    icon: '🌱',
    percentage: '15%'
  },
  {
    title: '🐛 その他',
    description: '昆虫、土壌、時々小動物。ミネラル補給。',
    icon: '🐛', 
    percentage: '5%'
  }
]

const seasons = [
  {
    title: '🌸 雨季（3-5月）',
    items: [
      '豊富な若葉と新芽',
      '多様な果実が利用可能', 
      '最も栄養価の高い時期',
      '食物の選択肢が最大'
    ]
  },
  {
    title: '☀️ 乾季（6-8月）',
    items: [
      '果実の減少',
      '葉類への依存増加',
      'より硬い植物部位を摂取',
      '水分含有量の高い植物を好む'
    ]
  },
  {
    title: '🌿 移行期（9-2月）',
    items: [
      '食物の多様性が中程度',
      '樹皮と茎の摂取増加',
      '特定の果実への依存',
      '移動距離の増加'
    ]
  }
]

const behaviorFacts = [
  {
    title: '⏰ 食事時間',
    description: '午前6-10時と午後2-6時に集中的に摂食。昼間は休息が多い。',
    icon: '⏰'
  },
  {
    title: '🍽️ 1日の摂取量',
    description: '成体オスで約18kg、メスで約15kgの植物を毎日摂取。',
    icon: '🍽️'
  },
  {
    title: '🔍 食物選択',
    description: '栄養価、消化しやすさ、味を基準に食物を選択。学習により改善。',
    icon: '🔍'
  },
  {
    title: '👥 社会的摂食',
    description: '群れで食事し、若いゴリラは大人の摂食行動を観察して学習。',
    icon: '👥'
  }
]

const nutrients = [
  {
    title: '💪 タンパク質',
    description: '体重維持と筋肉発達に必要。主に葉類から摂取。',
    icon: '💪',
    requirement: '日必要量: 体重1kgあたり1.5-2.0g'
  },
  {
    title: '⚡ 炭水化物',
    description: 'エネルギー源として重要。果実と若い植物部位から。',
    icon: '⚡',
    requirement: 'エネルギー: 1日約8000-10000kcal'
  },
  {
    title: '🌟 ビタミン',
    description: '特にビタミンCとEが重要。果実と新鮮な葉から摂取。',
    icon: '🌟',
    requirement: 'ビタミンC: 1日約200-300mg'
  },
  {
    title: '⚖️ ミネラル',
    description: 'カルシウム、鉄、ナトリウムなど。土壌摂食で補給。',
    icon: '⚖️',
    requirement: '特殊行動: 塩分補給のための土食'
  }
]

const conservationImplications = [
  {
    title: '🌳 生息地保護',
    description: '多様な植物種が必要なため、大きな連続した森林の保護が重要。食物の季節変動に対応できる広い生息域が必要。'
  },
  {
    title: '🔄 生態系の役割',
    description: 'ゴリラは種子散布者として重要。彼らの食事が森林の再生と多様性維持に大きく貢献している。'
  },
  {
    title: '🏭 人間活動の影響',
    description: '農業拡大や森林伐採により、ゴリラの食物源が減少。代替食物への依存や栄養不足のリスクが増加。'
  }
]
</script>

<style scoped>
.diet-chart {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.seasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.season-card {
  background: #e8f5e8;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #8BC34A;
}

.season-card h3 {
  color: #4CAF50;
  margin-bottom: 15px;
}

.season-card ul {
  list-style: none;
  padding: 0;
}

.season-card li {
  padding: 5px 0;
  border-bottom: 1px solid #d4e5d4;
}

.season-card li:last-child {
  border-bottom: none;
}

.season-card li::before {
  content: '• ';
  color: #8BC34A;
  font-weight: bold;
}

.behavior-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.nutrition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.conservation-content .implication {
  background: #e8f5e8;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-left: 4px solid #8BC34A;
}

.implication h3 {
  color: #4CAF50;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .diet-chart,
  .seasons-grid,
  .behavior-facts,
  .nutrition-grid {
    grid-template-columns: 1fr;
  }
}
</style>