import Hero from '@/components/hero.js'
import Container from '@/components/container.js'
import PostBody from '@/components/post-body.js'

export default function Blog() {
  return(
    <Container>
      <Hero title="Blog" subtitle="Recent posts"/>
      <PostBody>
        <p>いつか、素晴らしいブログを</p>
      </PostBody>
    </Container>
  
)
}