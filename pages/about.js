import Hero from '@/components/hero.js'
import Container from '@/components/container.js'
import PostBody from '@/components/post-body.js'
import Contact from '@/components/contact.js'

import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '@/components/two-column.js'
export default function About() {
  return(
  <Container>
    <Hero title="About" subtitle="About development activities"/>
    <TwoColumn>
      <TwoColumnMain>
        <PostBody>  
          <p>俺はプログラミングが好きだ！</p>
          <p>俺は技術も好きだ！</p>
          <h2>右に行けよ！！！！！</h2>
          <h2>ありがとう！！！！！</h2>
          <h2>ここから、サイト配置のテスト用ダミーテキストです</h2>
    <p>
      Web開発の世界へようこそ！最初は覚えることが多くて圧倒されるかもしれませんが、焦らず一歩ずつ進んでいきましょう。Web開発は、HTML、CSS、JavaScriptという3つの基本的な技術から成り立っています。これらを理解することで、静的なウェブサイトから動的なアプリケーションまで、さまざまなものを作れるようになります。
    </p>
    <p>
       最初に取り組むべきは、HTMLでウェブページの構造を作ることです。HTMLはウェブページの骨組みを作る言語で、見出しや段落、画像、リンクなどを配置するために使います。その次にCSSを学び、ページのデザインやレイアウトを整えます。CSSを使えば、色やフォント、余白、配置などを自由にカスタマイズできます。そして、JavaScriptを使うことで、ページにインタラクティブな動きを加えることができます。例えば、ボタンをクリックしたときに動作を実行したり、フォームの入力内容をチェックしたりすることが可能です。
    </p>
    <p>
      Web開発を学ぶ上で大切なのは、実際に手を動かしてコードを書くことです。小さなプロジェクトを作りながら、少しずつスキルを磨いていきましょう。また、エラーやバグに遭遇することは避けられませんが、それは成長のチャンスです。エラーの原因を調べて解決する過程で、より深い理解が得られます。
    </p>
    <p>
      さらに、Web開発の世界では新しい技術やツールが次々と登場します。ReactやNext.jsのようなフレームワーク、GitやGitHubのようなバージョン管理ツール、そしてデプロイメントのためのプラットフォームなど、学ぶべきことはたくさんあります。しかし、すべてを一度に学ぼうとせず、基礎をしっかり固めてから徐々に進めていくことが大切です。
    </p>
    <p>
      最後に、Web開発は一人で行うものではありません。コミュニティに参加し、他の開発者と交流することで、多くの知識やアイデアを得ることができます。オンラインフォーラムやSNS、勉強会などを活用して、仲間と一緒に成長していきましょう。Web開発の旅は長いですが、その分やりがいも大きいです。楽しみながら学び、素晴らしいウェブ体験を作り出してください！
    </p>
        </PostBody>
      </TwoColumnMain>

      <TwoColumnSidebar>
        <Contact />
      </TwoColumnSidebar>
    </TwoColumn>
  </Container>
)
}