<template>
  <DefaultLayout>
    <PageHeader 
      title="🏥 ゴリラの研究" 
      theme="blue"
    />

    <MainContent>
      <InfoSection title="ゴリラ研究の歴史と現在">
        <p>
          ゴリラ研究は19世紀末から本格的に始まり、現在では行動学、生態学、
          遺伝学、保護生物学など多分野にわたる包括的な研究が行われています。
          これらの研究は、ゴリラの保護と人類の理解に重要な貢献をしています。
        </p>
      </InfoSection>

      <InfoSection title="🔬 主要な研究分野">
        <div class="research-fields">
          <FactCard
            v-for="field in researchFields"
            :key="field.title"
            :title="field.title"
            :description="field.description"
            :icon="field.icon"
            :details="field.methods"
            variant="primary"
          />
        </div>
      </InfoSection>

      <InfoSection title="👨‍🔬 著名な研究者">
        <div class="researchers">
          <div v-for="researcher in famousResearchers" :key="researcher.name" class="researcher-card">
            <h3>{{ researcher.name }}</h3>
            <div class="period">{{ researcher.period }}</div>
            <p>{{ researcher.contribution }}</p>
            <div class="achievement">{{ researcher.achievement }}</div>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="🏢 主要研究機関">
        <div class="institutions">
          <FactCard
            v-for="institution in researchInstitutions"
            :key="institution.name"
            :title="institution.name"
            :description="institution.description"
            :icon="institution.icon"
            :details="institution.specialization"
            variant="secondary"
          />
        </div>
      </InfoSection>

      <InfoSection title="🔬 現在の研究手法">
        <div class="methods-grid">
          <div v-for="method in researchMethods" :key="method.title" class="method-card">
            <h3>{{ method.title }}</h3>
            <p>{{ method.description }}</p>
            <div class="technologies">
              <span v-for="tech in method.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </InfoSection>
    </MainContent>
  </DefaultLayout>
</template>

<script setup>
useHead({
  title: 'ゴリラの研究 - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: 'ゴリラ研究の歴史、手法、著名な研究者について学ぶ' }
  ]
})

const researchFields = [
  {
    title: '🦍 行動生態学',
    description: 'ゴリラの社会行動、採食行動、繁殖行動の研究',
    icon: '🦍',
    methods: '長期観察、個体識別'
  },
  {
    title: '🧬 遺伝学',
    description: 'ゴリラの遺伝的多様性、系統関係、進化の研究',
    icon: '🧬',
    methods: 'DNA解析、ゲノム研究'
  },
  {
    title: '🧠 認知科学',
    description: 'ゴリラの知能、学習能力、問題解決能力の研究',
    icon: '🧠',
    methods: '認知実験、ツール使用観察'
  },
  {
    title: '🩺 獣医学',
    description: 'ゴリラの健康管理、疾病予防、治療法の研究',
    icon: '🩺',
    methods: '健康診断、病理学的検査'
  }
]

const famousResearchers = [
  {
    name: 'ダイアン・フォッシー',
    period: '1967-1985',
    contribution: 'マウンテンゴリラの長期研究の先駆者。個体識別システムを確立。',
    achievement: '著書「霧の中のゴリラ」で世界的に有名'
  },
  {
    name: 'ジョージ・シャラー',
    period: '1959-1960',
    contribution: '最初の本格的なゴリラ野外研究を実施。ゴリラの温和な性格を証明。',
    achievement: '著書「マウンテンゴリラ」で科学的基盤を構築'
  },
  {
    name: '山極寿一',
    period: '1970年代-現在',
    contribution: '日本のゴリラ研究の第一人者。ゴリラの社会構造を詳細に解明。',
    achievement: '京都大学総長、ゴリラ研究の国際的権威'
  },
  {
    name: 'リチャード・ランガム',
    period: '1980年代-現在',
    contribution: 'チンパンジーとゴリラの比較研究。霊長類の社会進化理論を発展。',
    achievement: 'ハーバード大学教授、多数の影響力ある論文'
  }
]

const researchInstitutions = [
  {
    name: 'カリソケ研究センター',
    description: 'ダイアン・フォッシーが設立したマウンテンゴリラ研究の拠点',
    icon: '🏔️',
    specialization: 'マウンテンゴリラの長期研究'
  },
  {
    name: 'マックス・プランク研究所',
    description: 'ドイツの進化人類学研究の世界的拠点',
    icon: '🧬',
    specialization: '認知科学、遺伝学'
  },
  {
    name: '京都大学霊長類研究所',
    description: '日本の霊長類研究の中心的機関',
    icon: '🏫',
    specialization: '比較認知科学、社会行動'
  },
  {
    name: 'ゴリラ・ドクターズ',
    description: 'ゴリラの獣医学的研究と治療を専門とする国際組織',
    icon: '🩺',
    specialization: '野生ゴリラの医療'
  }
]

const researchMethods = [
  {
    title: '🔍 非侵襲的モニタリング',
    description: '動物にストレスを与えない観察・データ収集手法',
    technologies: ['カメラトラップ', 'ドローン観察', 'GPS首輪', '糞便DNA分析']
  },
  {
    title: '📱 デジタル技術活用',
    description: 'IT技術を活用した効率的なデータ収集と解析',
    technologies: ['スマートフォンアプリ', '機械学習', 'GIS分析', 'リモートセンシング']
  },
  {
    title: '🤝 参加型研究',
    description: '地域コミュニティと協力した研究手法',
    technologies: ['市民科学', '地域住民トレーニング', '参加型マッピング', '伝統知識活用']
  },
  {
    title: '🔬 分子生物学手法',
    description: '遺伝子レベルでの詳細な解析技術',
    technologies: ['ゲノムシーケンス', 'マイクロサテライト解析', 'エピジェネティクス', 'メタゲノム解析']
  }
]
</script>

<style scoped>
.research-fields {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.researchers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.researcher-card {
  background: #e3f2fd;
  padding: 25px;
  border-radius: 8px;
  border-left: 4px solid #1976D2;
}

.researcher-card h3 {
  color: #1976D2;
  margin-bottom: 10px;
}

.period {
  font-weight: bold;
  color: #1565C0;
  margin-bottom: 15px;
}

.achievement {
  background: #bbdefb;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  font-style: italic;
  color: #0d47a1;
}

.institutions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.method-card {
  background: #f3e5f5;
  padding: 25px;
  border-radius: 8px;
  border-left: 4px solid #9c27b0;
}

.method-card h3 {
  color: #9c27b0;
  margin-bottom: 15px;
}

.technologies {
  margin-top: 15px;
}

.tech-tag {
  display: inline-block;
  background: #e1bee7;
  color: #4a148c;
  padding: 5px 10px;
  margin: 3px;
  border-radius: 10px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .research-fields,
  .researchers,
  .institutions,
  .methods-grid {
    grid-template-columns: 1fr;
  }
}
</style>