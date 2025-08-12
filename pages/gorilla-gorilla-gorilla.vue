<template>
  <DefaultLayout>
    <PageHeader 
      title="🦍 ゴリラゴリラゴリラ" 
      theme="orange"
    />

    <MainContent>
      <InfoSection title="学名の由来">
        <p>
          「Gorilla gorilla gorilla」- この印象的な三重の名前は、ニシローランドゴリラの
          正式な学名です。生物の分類学では、属名・種名・亜種名の三段階で表記されるため、
          同じ名前が三回繰り返されるこの珍しい現象が起こりました。
          この名前には、ゴリラ発見の歴史と分類学の発展が込められています。
        </p>
      </InfoSection>

      <InfoSection title="📚 命名の歴史">
        <div class="naming-timeline">
          <div v-for="event in namingHistory" :key="event.year" class="naming-step">
            <div class="year">{{ event.year }}</div>
            <div class="naming-event">
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="🌍 ゴリラの亜種">
        <div class="subspecies-grid">
          <FactCard
            v-for="subspecies in gorillaSubspecies"
            :key="subspecies.name"
            :title="subspecies.name"
            :description="subspecies.description"
            :icon="subspecies.icon"
            :details="`個体数: ${subspecies.population}`"
            :variant="subspecies.variant"
          />
        </div>
      </InfoSection>

      <InfoSection title="🤔 興味深い事実">
        <div class="facts-grid">
          <FactCard
            v-for="fact in interestingFacts"
            :key="fact.title"
            :title="fact.title"
            :description="fact.description"
            :icon="fact.icon"
            variant="warning"
          />
        </div>
      </InfoSection>

      <InfoSection title="📱 現代での使用">
        <div class="usage-examples">
          <div v-for="usage in modernUsage" :key="usage.title" class="usage-category">
            <h3>{{ usage.title }}</h3>
            <p>{{ usage.description }}</p>
          </div>
        </div>
      </InfoSection>
    </MainContent>
  </DefaultLayout>
</template>

<script setup>
useHead({
  title: 'ゴリラゴリラゴリラ - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: 'ゴリラの正式な学名「Gorilla gorilla gorilla」の由来と分類学的意義について学ぶ' }
  ]
})

const namingHistory = [
  {
    year: '1847年',
    title: '🔤 最初の命名',
    description: 'トーマス・サベージ博士が最初に「Troglodytes gorilla」と命名。当時はチンパンジーと同じ属だと考えられていた。'
  },
  {
    year: '1852年',
    title: '🦍 独立した属の確立',
    description: 'イシドール・ジョフロワ・サン＝イレールが「Gorilla」を独立した属として確立。「Gorilla gorilla」となる。'
  },
  {
    year: '1929年',
    title: '🏷️ 亜種の分類',
    description: 'ニシローランドゴリラが基準標本として指定され、「Gorilla gorilla gorilla」の三重名が成立。'
  }
]

const gorillaSubspecies = [
  {
    name: '🦍 ニシローランドゴリラ',
    description: '基準亜種として指定された最も研究が進んでいる亜種。茶褐色の毛色と果実を好む食性が特徴。',
    icon: '🦍',
    population: '200,000-300,000頭',
    variant: 'success'
  },
  {
    name: '🌊 クロスリバーゴリラ',
    description: '最も希少な亜種。ナイジェリア・カメルーン国境の山地森林に生息し、極めて絶滅危惧。',
    icon: '🌊',
    population: '200-300頭',
    variant: 'warning'
  },
  {
    name: '🏔️ マウンテンゴリラ',
    description: '最も大型で長く密な毛を持つ。ダイアン・フォッシーの研究で有名になった高地適応種。',
    icon: '🏔️',
    population: '約1,000頭',
    variant: 'primary'
  },
  {
    name: '🌅 ヒガシローランドゴリラ',
    description: '中間的な体格を持ち、コンゴ民主共和国東部の低地森林に生息。研究が最も困難な亜種。',
    icon: '🌅',
    population: '約3,800頭',
    variant: 'secondary'
  }
]

const interestingFacts = [
  {
    title: '三重命名の珍しさ',
    description: '動物界で同じ名前が3回繰り返される例は比較的珍しく、ゴリラ以外では「Bison bison bison」（アメリカバイソン）などがある',
    icon: '🎯'
  },
  {
    title: '名前の語源',
    description: '「ゴリラ」という名前は、古代カルタゴの航海者ハンノが紀元前6世紀に西アフリカで出会った毛深い人々を「ゴリライ」と呼んだことに由来する',
    icon: '🗣️'
  },
  {
    title: '発音の謎',
    description: '学名の正しい発音は「ゴリッラ ゴリッラ ゴリッラ」であり、日本語の「ゴリラ」とは微妙に異なる。ラテン語では「r」を巻き舌で発音する',
    icon: '🔍'
  },
  {
    title: '表記のルール',
    description: '学名は斜体で書かれ、属名の最初の文字のみ大文字。しかし口語では「western lowland gorilla」と英語で表記されることが多い',
    icon: '📝'
  },
  {
    title: '国際的認知',
    description: 'この三重の名前は世界中の動物園や研究機関で使用され、ゴリラ保護の象徴的な存在として認識されている',
    icon: '🌐'
  },
  {
    title: 'ポップカルチャー',
    description: '「ゴリラゴリラゴリラ」という響きの面白さから、日本では様々なメディアやキャラクターの名前として親しまれている',
    icon: '🎭'
  }
]

const modernUsage = [
  {
    title: '🎓 学術研究',
    description: '論文や学術書では正式な学名「Gorilla gorilla gorilla」が使用され、研究の対象種を明確に特定するために重要な役割を果たしています。'
  },
  {
    title: '🏛️ 動物園・水族館',
    description: '世界中の動物園では、この学名を用いて来園者に正確な情報を提供し、教育プログラムでゴリラの分類について教えています。'
  },
  {
    title: '🌿 保護活動',
    description: '国際的な保護団体では、各亜種を区別して保護戦略を立てるため、正確な学名の使用が重要になっています。'
  },
  {
    title: '📚 教育現場',
    description: '生物の授業では、分類学の例として「ゴリラゴリラゴリラ」がしばしば紹介され、学名の仕組みを理解するのに役立っています。'
  }
]
</script>

<style scoped>
.naming-timeline {
  position: relative;
  padding-left: 30px;
  margin-bottom: 40px;
}

.naming-timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #FF9800;
}

.naming-step {
  position: relative;
  margin-bottom: 40px;
}

.naming-step::before {
  content: '';
  position: absolute;
  left: -23px;
  top: 10px;
  width: 16px;
  height: 16px;
  background: #E65100;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #FF9800;
}

.year {
  font-size: 1.2rem;
  font-weight: bold;
  color: #E65100;
  margin-bottom: 10px;
}

.naming-event {
  background: #fff3e0;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #FF9800;
}

.naming-event h3 {
  color: #E65100;
  margin-bottom: 10px;
}

.subspecies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.usage-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.usage-category {
  background: #fff3e0;
  padding: 25px;
  border-radius: 8px;
  border-left: 4px solid #FF9800;
}

.usage-category h3 {
  color: #E65100;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .subspecies-grid,
  .facts-grid,
  .usage-examples {
    grid-template-columns: 1fr;
  }
  
  .naming-timeline {
    padding-left: 20px;
  }
  
  .naming-step::before {
    left: -18px;
  }
}
</style>