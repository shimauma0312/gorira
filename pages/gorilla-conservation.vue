<template>
  <div class="container">
    <header class="page-header">
      <h1>🛡️ ゴリラの保護</h1>
      <NuxtLink to="/" class="back-link">← トップページに戻る</NuxtLink>
    </header>

    <main class="content">
      <section class="introduction">
        <h2>緊急事態に直面するゴリラ</h2>
        <p>
          世界のゴリラ個体数は過去数十年で急激に減少しており、
          全ての亜種が絶滅危惧種に指定されています。効果的な保護戦略と
          国際的な協力により、これらの素晴らしい動物を未来に残すことができます。
        </p>
      </section>

      <section class="conservation-status">
        <h2>📊 保護状況</h2>
        
        <div class="status-grid">
          <div class="status-card critical">
            <h3>🌊 クロスリバーゴリラ</h3>
            <div class="population">個体数: 200-300頭</div>
            <div class="status-level">極めて絶滅危惧</div>
            <div class="trend declining">個体数減少中</div>
            <p>最も危機的状況。小さな個体群が分断されている。</p>
          </div>
          
          <div class="status-card endangered">
            <h3>🏔️ マウンテンゴリラ</h3>
            <div class="population">個体数: 約1,000頭</div>
            <div class="status-level">絶滅危惧</div>
            <div class="trend stable">安定</div>
            <p>保護努力により個体数が回復傾向。成功例の一つ。</p>
          </div>
          
          <div class="status-card endangered">
            <h3>🌅 ヒガシローランドゴリラ</h3>
            <div class="population">個体数: 約3,800頭</div>
            <div class="status-level">絶滅危惧</div>
            <div class="trend declining">個体数減少中</div>
            <p>武力紛争と採掘活動により個体数が激減。</p>
          </div>
          
          <div class="status-card vulnerable">
            <h3>🌿 ニシローランドゴリラ</h3>
            <div class="population">個体数: 200,000-300,000頭</div>
            <div class="status-level">絶滅危惧</div>
            <div class="trend declining">個体数減少中</div>
            <p>最も数が多いが、森林伐採により減少が続いている。</p>
          </div>
        </div>
      </section>

      <section class="threats-analysis">
        <h2>⚠️ 主要な脅威</h2>
        
        <div class="threats-overview">
          <div class="threat-category primary">
            <h3>🪓 生息地破壊</h3>
            <div class="severity">脅威度: 最高</div>
            <p>商業伐採、農地拡大、インフラ建設により生息地が急速に失われている。</p>
            <div class="impact-stats">
              <span class="stat">年間森林減少: 2-5%</span>
              <span class="stat">影響: 全亜種</span>
            </div>
          </div>
          
          <div class="threat-category primary">
            <h3>🎯 密猟・狩猟</h3>
            <div class="severity">脅威度: 最高</div>
            <p>ブッシュミート取引と呪術目的の部位売買により個体数が減少。</p>
            <div class="impact-stats">
              <span class="stat">年間被害: 数百頭</span>
              <span class="stat">主要地域: 西・中央アフリカ</span>
            </div>
          </div>
          
          <div class="threat-category secondary">
            <h3>🦠 疾病</h3>
            <div class="severity">脅威度: 高</div>
            <p>人間との接触により、エボラ出血熱や呼吸器感染症が拡散。</p>
            <div class="impact-stats">
              <span class="stat">致死率: 50-95%</span>
              <span class="stat">感染拡大: 群れ全体</span>
            </div>
          </div>
          
          <div class="threat-category secondary">
            <h3>⚔️ 武力紛争</h3>
            <div class="severity">脅威度: 高</div>
            <p>紛争地域では保護活動が困難になり、直接的被害も発生。</p>
            <div class="impact-stats">
              <span class="stat">影響地域: コンゴ民主共和国</span>
              <span class="stat">期間: 20年以上</span>
            </div>
          </div>
        </div>
      </section>

      <section class="conservation-strategies">
        <h2>🎯 保護戦略</h2>
        
        <div class="strategies-grid">
          <div class="strategy-card">
            <h3>🏞️ 保護区管理</h3>
            <div class="approach">
              <h4>アプローチ:</h4>
              <ul>
                <li>国立公園と自然保護区の設立・拡張</li>
                <li>効果的な境界線の設定と管理</li>
                <li>レンジャーの訓練と装備強化</li>
                <li>監視技術の導入（カメラトラップ、ドローン）</li>
              </ul>
            </div>
            <div class="success-examples">
              <h4>成功例:</h4>
              <p>ビルンガ国立公園（マウンテンゴリラ）、ロベケ国立公園（ニシローランドゴリラ）</p>
            </div>
          </div>
          
          <div class="strategy-card">
            <h3>🤝 地域コミュニティ参加</h3>
            <div class="approach">
              <h4>アプローチ:</h4>
              <ul>
                <li>地元住民への利益共有制度</li>
                <li>代替生計手段の提供</li>
                <li>環境教育プログラム</li>
                <li>持続可能な森林利用の指導</li>
              </ul>
            </div>
            <div class="success-examples">
              <h4>成功例:</h4>
              <p>ゴリラエコツーリズム、森林管理協同組合、伝統的保護制度の復活</p>
            </div>
          </div>
          
          <div class="strategy-card">
            <h3>🔬 科学的研究</h3>
            <div class="approach">
              <h4>アプローチ:</h4>
              <ul>
                <li>個体群動態の長期モニタリング</li>
                <li>遺伝的多様性の評価</li>
                <li>行動生態学研究</li>
                <li>疾病予防と治療法開発</li>
              </ul>
            </div>
            <div class="success-examples">
              <h4>成功例:</h4>
              <p>マウンテンゴリラの個体識別システム、遺伝的救済プログラム</p>
            </div>
          </div>
          
          <div class="strategy-card">
            <h3>🌍 国際協力</h3>
            <div class="approach">
              <h4>アプローチ:</h4>
              <ul>
                <li>国際条約の履行強化</li>
                <li>越境保護区の設立</li>
                <li>資金調達と技術支援</li>
                <li>密猟対策の国際連携</li>
              </ul>
            </div>
            <div class="success-examples">
              <h4>成功例:</h4>
              <p>サンガ・トリナショナル保護区、CITES、パートナーシップ・フォー・サバイバル</p>
            </div>
          </div>
        </div>
      </section>

      <section class="success-stories">
        <h2>✅ 成功事例</h2>
        
        <div class="success-timeline">
          <div class="success-item">
            <div class="year">1980年代</div>
            <div class="success-details">
              <h3>🏔️ マウンテンゴリラ保護の開始</h3>
              <p>
                ダイアン・フォッシーの研究と保護活動により、マウンテンゴリラの
                保護プログラムが本格的に開始。国際的な注目を集める。
              </p>
              <div class="impact">個体数: 254頭（1981年）→ 1,000頭以上（現在）</div>
            </div>
          </div>
          
          <div class="success-item">
            <div class="year">1990年代</div>
            <div class="success-details">
              <h3>🌍 国際条約の強化</h3>
              <p>
                CITESによりゴリラが付属書Iに登録。国際取引が厳格に規制され、
                密猟の抑制効果が現れ始める。
              </p>
              <div class="impact">国際的な法的保護の確立</div>
            </div>
          </div>
          
          <div class="success-item">
            <div class="year">2000年代</div>
            <div class="success-details">
              <h3>🚶 ゴリラエコツーリズム</h3>
              <p>
                ルワンダとウガンダでゴリラ観光が本格化。地域経済への貢献により、
                地元住民の保護意識が向上。
              </p>
              <div class="impact">年間観光収入: 数百万ドル</div>
            </div>
          </div>
          
          <div class="success-item">
            <div class="year">2010年代</div>
            <div class="success-details">
              <h3>🔬 獣医学的介入</h3>
              <p>
                ゴリラドクタープロジェクトにより、病気やけがをしたゴリラの
                治療が可能に。個体群の健康状態が改善。
              </p>
              <div class="impact">治療成功率: 80%以上</div>
            </div>
          </div>
        </div>
      </section>

      <section class="current-programs">
        <h2>🚀 現在の保護プログラム</h2>
        
        <div class="programs-grid">
          <div class="program-card">
            <h3>🌿 グレート・エイプ・サバイバル・プロジェクト（GRASP）</h3>
            <div class="organization">主催: UNEP・UNESCO</div>
            <p>アフリカとアジアの類人猿保護を目的とした国際的なパートナーシップ。</p>
            <div class="activities">
              <strong>活動:</strong> 政策立案支援、研究促進、意識向上
            </div>
          </div>
          
          <div class="program-card">
            <h3>🦍 国際ゴリラ保護プログラム（IGCP）</h3>
            <div class="organization">主催: WWF・FFI・AWF</div>
            <p>マウンテンゴリラとヒガシローランドゴリラの保護に特化。</p>
            <div class="activities">
              <strong>活動:</strong> 生息地保護、エコツーリズム、地域開発
            </div>
          </div>
          
          <div class="program-card">
            <h3>🌍 ゴリラ合意書（ゴリラアグリーメント）</h3>
            <div class="organization">主催: CMS</div>
            <p>ゴリラ生息国間の保護協力を促進する国際協定。</p>
            <div class="activities">
              <strong>活動:</strong> 国家行動計画、越境協力、法執行強化
            </div>
          </div>
          
          <div class="program-card">
            <h3>🔬 マックス・プランク進化人類学研究所</h3>
            <div class="organization">主催: ドイツ・マックス・プランク協会</div>
            <p>ゴリラの行動と認知に関する長期研究プロジェクト。</p>
            <div class="activities">
              <strong>活動:</strong> 野外研究、認知実験、保護科学
            </div>
          </div>
        </div>
      </section>

      <section class="how-to-help">
        <h2>🤝 あなたにできること</h2>
        
        <div class="help-categories">
          <div class="help-category">
            <h3>💰 寄付・支援</h3>
            <ul>
              <li>信頼できる保護団体への寄付</li>
              <li>ゴリラ里親プログラムへの参加</li>
              <li>保護区の運営資金支援</li>
              <li>研究プロジェクトへの資金提供</li>
            </ul>
          </div>
          
          <div class="help-category">
            <h3>🌱 持続可能な消費</h3>
            <ul>
              <li>FSC認証材の選択</li>
              <li>パーム油不使用製品の選択</li>
              <li>コンフリクトミネラル回避</li>
              <li>エコツーリズムの選択</li>
            </ul>
          </div>
          
          <div class="help-category">
            <h3>📢 意識向上</h3>
            <ul>
              <li>ゴリラ保護の情報共有</li>
              <li>教育プログラムへの参加</li>
              <li>政策提言への賛同</li>
              <li>次世代への環境教育</li>
            </ul>
          </div>
          
          <div class="help-category">
            <h3>🎓 専門的貢献</h3>
            <ul>
              <li>研究者としての参加</li>
              <li>ボランティアワーク</li>
              <li>専門技術の提供</li>
              <li>国際協力プロジェクト</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="future-outlook">
        <h2>🔮 未来への展望</h2>
        
        <div class="outlook-content">
          <div class="positive-trends">
            <h3>✅ 希望的な兆候</h3>
            <ul>
              <li>マウンテンゴリラの個体数回復</li>
              <li>国際的な保護意識の高まり</li>
              <li>新しい保護技術の発展</li>
              <li>地域コミュニティの積極的参加</li>
              <li>エコツーリズムの成功例増加</li>
            </ul>
          </div>
          
          <div class="challenges">
            <h3>⚠️ 継続する課題</h3>
            <ul>
              <li>森林破壊の加速</li>
              <li>人口増加による圧力</li>
              <li>気候変動の影響</li>
              <li>政治的不安定</li>
              <li>資金不足</li>
            </ul>
          </div>
          
          <div class="action-needed">
            <h3>🎯 必要な行動</h3>
            <p>
              ゴリラの未来は、今後10-20年の行動にかかっています。
              科学技術の進歩、国際協力の強化、そして私たち一人一人の
              意識改革により、これらの素晴らしい動物を未来に残すことができます。
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'ゴリラの保護 - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: 'ゴリラの保護状況、脅威、保護戦略、成功事例について詳しく学ぶ' }
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
  background: linear-gradient(135deg, #1976D2, #42A5F5);
  color: white;
  border-radius: 12px;
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

.content h2 {
  color: #1976D2;
  font-size: 2rem;
  margin-bottom: 30px;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.status-card {
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.status-card:hover {
  transform: translateY(-3px);
}

.status-card.critical {
  background: linear-gradient(135deg, #ffebee, #fce4ec);
  border-top: 4px solid #f44336;
}

.status-card.endangered {
  background: linear-gradient(135deg, #fff3e0, #fce4ec);
  border-top: 4px solid #ff9800;
}

.status-card.vulnerable {
  background: linear-gradient(135deg, #fff8e1, #fffde7);
  border-top: 4px solid #ffc107;
}

.status-card h3 {
  color: #333;
  margin-bottom: 15px;
}

.population {
  font-size: 1.1rem;
  font-weight: bold;
  color: #1976D2;
  margin-bottom: 8px;
}

.status-level {
  font-weight: bold;
  margin-bottom: 8px;
}

.trend {
  font-style: italic;
  margin-bottom: 15px;
}

.trend.declining {
  color: #d32f2f;
}

.trend.stable {
  color: #388e3c;
}

.threats-overview {
  margin-bottom: 40px;
}

.threat-category {
  background: #f5f5f5;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-left: 4px solid;
}

.threat-category.primary {
  border-left-color: #f44336;
  background: #ffebee;
}

.threat-category.secondary {
  border-left-color: #ff9800;
  background: #fff3e0;
}

.threat-category h3 {
  color: #d32f2f;
  margin-bottom: 10px;
}

.severity {
  font-weight: bold;
  color: #d32f2f;
  margin-bottom: 15px;
}

.impact-stats {
  margin-top: 15px;
}

.stat {
  display: inline-block;
  background: rgba(25, 118, 210, 0.1);
  padding: 5px 10px;
  margin: 3px;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #1976D2;
}

.strategies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.strategy-card {
  background: #e3f2fd;
  padding: 25px;
  border-radius: 12px;
  border-top: 4px solid #1976D2;
}

.strategy-card h3 {
  color: #1976D2;
  margin-bottom: 20px;
}

.approach h4,
.success-examples h4 {
  color: #1565C0;
  margin-bottom: 10px;
}

.approach ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.approach li {
  padding: 3px 0;
  color: #555;
}

.approach li::before {
  content: '• ';
  color: #1976D2;
  font-weight: bold;
}

.success-examples {
  background: #bbdefb;
  padding: 15px;
  border-radius: 5px;
}

.success-timeline {
  position: relative;
  padding-left: 30px;
  margin-bottom: 40px;
}

.success-timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #1976D2;
}

.success-item {
  position: relative;
  margin-bottom: 40px;
}

.success-item::before {
  content: '';
  position: absolute;
  left: -23px;
  top: 10px;
  width: 16px;
  height: 16px;
  background: #1976D2;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #1976D2;
}

.year {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1976D2;
  margin-bottom: 10px;
}

.success-details {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #1976D2;
}

.success-details h3 {
  color: #1976D2;
  margin-bottom: 15px;
}

.impact {
  background: #bbdefb;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  font-weight: bold;
  color: #0d47a1;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.program-card {
  background: #f3e5f5;
  padding: 25px;
  border-radius: 12px;
  border-top: 4px solid #9c27b0;
}

.program-card h3 {
  color: #9c27b0;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.organization {
  font-weight: bold;
  color: #7b1fa2;
  margin-bottom: 15px;
}

.activities {
  background: #e1bee7;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  color: #4a148c;
}

.help-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.help-category {
  background: #f1f8e9;
  padding: 25px;
  border-radius: 12px;
  border-top: 4px solid #4caf50;
}

.help-category h3 {
  color: #2e7d32;
  margin-bottom: 15px;
}

.help-category ul {
  list-style: none;
  padding: 0;
}

.help-category li {
  padding: 5px 0;
  color: #555;
}

.help-category li::before {
  content: '✓ ';
  color: #4caf50;
  font-weight: bold;
}

.outlook-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.positive-trends,
.challenges,
.action-needed {
  padding: 25px;
  border-radius: 8px;
}

.positive-trends {
  background: #e8f5e8;
  border-left: 4px solid #4caf50;
}

.challenges {
  background: #fff3e0;
  border-left: 4px solid #ff9800;
}

.action-needed {
  background: #e3f2fd;
  border-left: 4px solid #1976D2;
  grid-column: 1 / -1;
}

.positive-trends h3 {
  color: #2e7d32;
}

.challenges h3 {
  color: #f57c00;
}

.action-needed h3 {
  color: #1976D2;
}

.positive-trends ul,
.challenges ul {
  list-style: none;
  padding: 0;
}

.positive-trends li::before {
  content: '✓ ';
  color: #4caf50;
  font-weight: bold;
}

.challenges li::before {
  content: '⚠ ';
  color: #ff9800;
  font-weight: bold;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .status-grid,
  .strategies-grid,
  .programs-grid,
  .help-categories {
    grid-template-columns: 1fr;
  }
  
  .success-timeline {
    padding-left: 20px;
  }
  
  .success-item::before {
    left: -18px;
  }
  
  .container {
    padding: 10px;
  }
}
</style>