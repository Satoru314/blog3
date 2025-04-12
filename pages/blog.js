import Hero from '@/components/hero.js'
import Container from '@/components/container.js'
import PostBody from '@/components/post-body.js'
import Meta from '@/components/meta'

export default function Blog() {
  return(
    <Container>
      <Meta pagetitle="ブログ" pageDesc="ブログの記事一覧"/>
      <Hero title="Blog" subtitle="Recent posts"/>
      <PostBody>
        <p>いつか、素晴らしいブログを</p>
      </PostBody>
    </Container>
  
)
}