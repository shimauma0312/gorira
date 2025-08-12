<template>
  <div class="container">
    <header class="page-header">
      <h1>🏡 ゴリラの生息地</h1>
      <NuxtLink to="/" class="back-link">← トップページに戻る</NuxtLink>
    </header>

    <main class="content">
      <section class="introduction">
        <h2>アフリカの森の王</h2>
        <p>
          ゴリラは中央アフリカと東アフリカの熱帯雨林に生息する、
          森林生態系の重要な構成員です。彼らの生息地は、
          地球上で最も生物多様性に富んだ場所の一つであり、
          数千種の植物と動物が共存しています。
        </p>
      </section>

      <section class="habitat-overview">
        <h2>🌍 生息地の概要</h2>
        
        <div class="habitat-map">
          <div class="region western-africa">
            <h3>🌳 西アフリカ</h3>
            <div class="countries">
              <span class="country">カメルーン</span>
              <span class="country">中央アフリカ</span>
              <span class="country">ガボン</span>
              <span class="country">赤道ギニア</span>
              <span class="country">コンゴ共和国</span>
              <span class="country">ナイジェリア南東部</span>
            </div>
            <div class="habitat-type">ニシローランドゴリラとクロスリバーゴリラ</div>
          </div>
          
          <div class="region eastern-africa">
            <h3>🏔️ 東アフリカ</h3>
            <div class="countries">
              <span class="country">コンゴ民主共和国</span>
              <span class="country">ルワンダ</span>
              <span class="country">ウガンダ</span>
            </div>
            <div class="habitat-type">マウンテンゴリラとヒガシローランドゴリラ</div>
          </div>
        </div>
      </section>

      <section class="forest-types">
        <h2>🌲 森林タイプ別の特徴</h2>
        
        <div class="forest-grid">
          <div class="forest-type lowland">
            <h3>🌿 低地熱帯雨林</h3>
            <div class="altitude">標高: 0-800m</div>
            <div class="characteristics">
              <h4>特徴:</h4>
              <ul>
                <li>高温多湿（年間降水量1500-3000mm）</li>
                <li>年中緑の常緑樹が優占</li>
                <li>多層構造の複雑な森林</li>
                <li>豊富な果実と葉類</li>
                <li>高い生物多様性</li>
              </ul>
            </div>
            <div class="gorilla-types">
              <strong>生息するゴリラ:</strong> ニシローランド、ヒガシローランド、クロスリバー
            </div>
          </div>
          
          <div class="forest-type montane">
            <h3>🏔️ 山地森林</h3>
            <div class="altitude">標高: 800-3000m</div>
            <div class="characteristics">
              <h4>特徴:</h4>
              <ul>
                <li>涼しい気候（年平均気温10-15℃）</li>
                <li>霧が多く湿度が高い</li>
                <li>竹林と混交林</li>
                <li>密度の高い地上植生</li>
                <li>季節による温度変化</li>
              </ul>
            </div>
            <div class="gorilla-types">
              <strong>生息するゴリラ:</strong> マウンテンゴリラ
            </div>
          </div>
          
          <div class="forest-type secondary">
            <h3>🌱 二次林</h3>
            <div class="altitude">標高: 変動</div>
            <div class="characteristics">
              <h4>特徴:</h4>
              <ul>
                <li>人間活動後の再生林</li>
                <li>若い樹木と草本が多い</li>
                <li>光環境が良好</li>
                <li>食用植物の密度が高い</li>
                <li>アクセスしやすい場所</li>
              </ul>
            </div>
            <div class="gorilla-types">
              <strong>生息するゴリラ:</strong> 全ての亜種（一時的利用）
            </div>
          </div>
        </div>
      </section>

      <section class="habitat-requirements">
        <h2>🏠 生息地の必要条件</h2>
        
        <div class="requirements-grid">
          <div class="requirement-card">
            <div class="req-icon">🍃</div>
            <h3>食物資源</h3>
            <p>多様な植物種が年間を通じて利用可能であること。特に果実、葉類、茎の豊富さが重要。</p>
            <div class="specifics">
              <strong>必要:</strong> 300-400種の植物種
            </div>
          </div>
          
          <div class="requirement-card">
            <div class="req-icon">💧</div>
            <h3>水資源</h3>
            <p>清潔な水源へのアクセス。飲み水だけでなく、湿度の高い環境維持も重要。</p>
            <div class="specifics">
              <strong>必要:</strong> 1km以内に水源
            </div>
          </div>
          
          <div class="requirement-card">
            <div class="req-icon">🛏️</div>
            <h3>営巣場所</h3>
            <p>毎晩新しい寝床を作るための適切な植物材料と安全な場所。</p>
            <div class="specifics">
              <strong>必要:</strong> 枝や葉の豊富な樹木
            </div>
          </div>
          
          <div class="requirement-card">
            <div class="req-icon">🌐</div>
            <h3>生息域サイズ</h3>
            <p>家族群が移動し、食物を確保するのに十分な広さ。重複のない縄張り。</p>
            <div class="specifics">
              <strong>必要:</strong> 5-30km²（群れサイズによる）
            </div>
          </div>
          
          <div class="requirement-card">
            <div class="req-icon">🔒</div>
            <h3>安全性</h3>
            <p>天敵や人間の脅威から身を隠せる場所。密林や急峻な地形が好まれる。</p>
            <div class="specifics">
              <strong>必要:</strong> 人間活動から離れた場所
            </div>
          </div>
          
          <div class="requirement-card">
            <div class="req-icon">🌡️</div>
            <h3>気候条件</h3>
            <p>適度な温湿度と安定した気候。極端な気候変動を避けられる環境。</p>
            <div class="specifics">
              <strong>適温:</strong> 15-30℃、湿度80%以上
            </div>
          </div>
        </div>
      </section>

      <section class="seasonal-movement">
        <h2>🚶 季節移動と生息地利用</h2>
        
        <div class="movement-patterns">
          <div class="season-movement">
            <h3>🌧️ 雨季の移動パターン</h3>
            <div class="movement-details">
              <p>果実が豊富な低地や河川沿いを優先的に利用。移動距離は短く、同じ地域に長期滞在。</p>
              <div class="stats">
                <span class="stat">📏 日移動距離: 500-1000m</span>
                <span class="stat">⏰ 滞在期間: 2-3日/地点</span>
              </div>
            </div>
          </div>
          
          <div class="season-movement">
            <h3>☀️ 乾季の移動パターン</h3>
            <div class="movement-details">
              <p>水源近くや標高の高い涼しい場所に移動。食物を求めてより広範囲を移動。</p>
              <div class="stats">
                <span class="stat">📏 日移動距離: 1000-2000m</span>
                <span class="stat">⏰ 滞在期間: 1-2日/地点</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ecosystem-role">
        <h2>🌱 生態系での役割</h2>
        
        <div class="roles-grid">
          <div class="role-card">
            <h3>🌰 種子散布者</h3>
            <p>
              ゴリラは大型果実を食べ、移動しながら種子を散布。
              森林の再生と植物の遺伝的多様性維持に重要な役割。
            </p>
            <div class="impact">年間100-200種の植物の種子を散布</div>
          </div>
          
          <div class="role-card">
            <h3>🛤️ 森の道作り</h3>
            <p>
              大型動物として森林内に歩道を作成。他の動物にとっても
              重要な移動ルートとなり、生態系の連結性を高める。
            </p>
            <div class="impact">森林内に網目状の動物道を形成</div>
          </div>
          
          <div class="role-card">
            <h3>🌿 植生管理</h3>
            <p>
              摂食により植物の成長を調整。過度な植生を制御し、
              多様な植物種が生育できる環境を維持。
            </p>
            <div class="impact">1日18kgの植物を摂食・調整</div>
          </div>
          
          <div class="role-card">
            <h3>🔄 栄養循環</h3>
            <p>
              排泄物により土壌に栄養を供給。森林の土壌肥沃度を
              高め、植物の成長を促進する重要な役割。
            </p>
            <div class="impact">1日5-8kgの有機物を土壌に還元</div>
          </div>
        </div>
      </section>

      <section class="threats">
        <h2>⚠️ 生息地への脅威</h2>
        
        <div class="threats-list">
          <div class="threat-item critical">
            <h3>🪓 森林伐採</h3>
            <p>商業伐採と農地拡大により、生息地が急速に失われている。</p>
            <div class="threat-level">脅威レベル: 極めて高い</div>
          </div>
          
          <div class="threat-item high">
            <h3>⛏️ 鉱業開発</h3>
            <p>コルタンやダイヤモンド採掘により、森林が破壊されている。</p>
            <div class="threat-level">脅威レベル: 高い</div>
          </div>
          
          <div class="threat-item high">
            <h3>🏘️ 人間居住区拡大</h3>
            <p>人口増加に伴う居住区拡大により、生息地が分断されている。</p>
            <div class="threat-level">脅威レベル: 高い</div>
          </div>
          
          <div class="threat-item medium">
            <h3>🌡️ 気候変動</h3>
            <p>降水パターンの変化により、森林生態系が変化している。</p>
            <div class="threat-level">脅威レベル: 中程度</div>
          </div>
        </div>
      </section>

      <section class="conservation">
        <h2>🛡️ 保護の取り組み</h2>
        
        <div class="conservation-efforts">
          <div class="effort-category">
            <h3>🏞️ 保護区設立</h3>
            <p>
              各国でゴリラ生息地を含む国立公園や自然保護区が設立されている。
              地域間の連携により、広域保護ネットワークの構築が進んでいる。
            </p>
            <div class="examples">
              <strong>主要保護区:</strong> ビルンガ国立公園、ブワインディ、サンガ・トリナショナル
            </div>
          </div>
          
          <div class="effort-category">
            <h3>🤝 地域コミュニティとの協力</h3>
            <p>
              地元住民との協力により、持続可能な森林利用と
              ゴリラ保護を両立させる取り組みが展開されている。
            </p>
            <div class="examples">
              <strong>取り組み:</strong> エコツーリズム、代替生計手段の提供
            </div>
          </div>
          
          <div class="effort-category">
            <h3>🔬 研究と監視</h3>
            <p>
              継続的な生息地調査と個体群監視により、
              保護戦略の改善と効果的な管理が行われている。
            </p>
            <div class="examples">
              <strong>手法:</strong> 衛星監視、GPSトラッキング、遺伝学的調査
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'ゴリラの生息地 - ゴリラの生態学芸サイト',
  meta: [
    { name: 'description', content: 'ゴリラの生息地、森林タイプ、生態系での役割について詳しく学ぶ' }
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

.introduction h2,
.habitat-overview h2,
.forest-types h2,
.habitat-requirements h2,
.seasonal-movement h2,
.ecosystem-role h2,
.threats h2,
.conservation h2 {
  color: #2E7D32;
  font-size: 2rem;
  margin-bottom: 30px;
}

.habitat-map {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.region {
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.western-africa {
  background: linear-gradient(135deg, #e8f5e8, #f1f8e9);
  border-top: 4px solid #4CAF50;
}

.eastern-africa {
  background: linear-gradient(135deg, #e3f2fd, #e8f4f8);
  border-top: 4px solid #2196F3;
}

.region h3 {
  color: #2E7D32;
  margin-bottom: 15px;
}

.countries {
  margin-bottom: 15px;
}

.country {
  display: inline-block;
  background: rgba(46, 125, 50, 0.1);
  padding: 5px 10px;
  margin: 3px;
  border-radius: 15px;
  font-size: 0.9rem;
}

.habitat-type {
  font-weight: bold;
  color: #2E7D32;
  font-style: italic;
}

.forest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.forest-type {
  background: #f1f8e9;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #4CAF50;
}

.forest-type h3 {
  color: #2E7D32;
  margin-bottom: 10px;
}

.altitude {
  font-weight: bold;
  color: #388E3C;
  margin-bottom: 15px;
}

.characteristics h4 {
  color: #2E7D32;
  margin-bottom: 10px;
}

.characteristics ul {
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
}

.characteristics li {
  padding: 3px 0;
  color: #555;
}

.characteristics li::before {
  content: '🌿 ';
  margin-right: 5px;
}

.gorilla-types {
  background: #dcedc8;
  padding: 10px;
  border-radius: 5px;
  color: #33691e;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.requirement-card {
  background: #f9fbe7;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  border-top: 4px solid #8BC34A;
  transition: transform 0.2s ease;
}

.requirement-card:hover {
  transform: translateY(-3px);
}

.req-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.requirement-card h3 {
  color: #2E7D32;
  margin-bottom: 15px;
}

.specifics {
  background: #dcedc8;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 0.9rem;
  color: #33691e;
}

.movement-patterns {
  margin-bottom: 40px;
}

.season-movement {
  background: #e8f5e8;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
}

.season-movement h3 {
  color: #2E7D32;
  margin-bottom: 15px;
}

.stats {
  margin-top: 15px;
}

.stat {
  display: inline-block;
  background: #dcedc8;
  padding: 5px 10px;
  margin: 3px;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #33691e;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.role-card {
  background: #f1f8e9;
  padding: 25px;
  border-radius: 12px;
  border-top: 4px solid #4CAF50;
}

.role-card h3 {
  color: #2E7D32;
  margin-bottom: 15px;
}

.impact {
  background: #dcedc8;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  font-weight: bold;
  color: #33691e;
  text-align: center;
}

.threats-list {
  margin-bottom: 40px;
}

.threat-item {
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  border-left: 4px solid;
}

.threat-item.critical {
  background: #ffebee;
  border-left-color: #f44336;
}

.threat-item.high {
  background: #fff3e0;
  border-left-color: #ff9800;
}

.threat-item.medium {
  background: #fff8e1;
  border-left-color: #ffc107;
}

.threat-item h3 {
  color: #d32f2f;
  margin-bottom: 10px;
}

.threat-level {
  font-weight: bold;
  margin-top: 10px;
}

.critical .threat-level {
  color: #d32f2f;
}

.high .threat-level {
  color: #f57c00;
}

.medium .threat-level {
  color: #f9a825;
}

.conservation-efforts .effort-category {
  background: #e8f5e8;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
}

.effort-category h3 {
  color: #2E7D32;
  margin-bottom: 15px;
}

.examples {
  background: #dcedc8;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  color: #33691e;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .habitat-map,
  .forest-grid,
  .requirements-grid,
  .roles-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 10px;
  }
}
</style>