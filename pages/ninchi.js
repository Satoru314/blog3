import Hero from '@/components/hero.js'
import Container from '@/components/container.js'
import PostBody from '@/components/post-body.js'

export default function Blog() {
  return(
    <Container>
      <Hero title="心理学B" subtitle="この授業で扱うのは認知心理学 人が情報を認識・処理するプロセスを考える"/>
      <PostBody>
        <h3>第一回</h3>
        <h2>心理学の分類について</h2>
        <li>8種類くらいある</li>
        <h2>先生の自己紹介</h2>
        <li>うどん野郎</li>
        <li>さを言えない子どもがいる＆初語は破裂音が多い→関連性</li>
        <h2>研究紹介</h2>
        <h1>自閉スペクトラム症</h1>
        <li>空気が読めない、特定の行動に固執する</li>
        <h1>感情調整</h1>
        <li>認知的再評価、表出抑制</li>
        <h1>ヒトモノ</h1>
        <li>モノがヒトをラベリングする（白杖）</li>
        <h1> </h1>
        <h2>教科書と成績評価</h2>
        <li>教科書は必須ではない 教科書：脳医からわかる、発達障害</li>
        <li>日々のレポート3割、期末レポート7割</li>
        <h2>授業予定</h2>
        <li>5月7日は授業なし</li>

        <h2>ICIDH</h2>
        <li>国際的な障害の分類</li>
        <li>機能形態障害→能力障害→社会的不利というプロセスで障害を考える</li>
        <h2>ICF</h2>
        <h1>国際生活機能分類</h1>
        <li>ICIDHの改訂版</li>
        <li>人間の健康を構成要素に分類し、生活機能と環境が相互作用するものとして人間全体を捉える</li>
        <li>障害とは個人に帰属するものではなく、社会的な参加と環境因子が原因である、とする。</li>

      </PostBody>

    </Container>
  
)
}