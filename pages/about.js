import Hero from '@/components/hero.js'
import Container from '@/components/container.js'
import PostBody from '@/components/post-body.js'

export default function About() {
  return(
  <Container>
    <Hero title="About" subtitle="About development activities"/>
    <PostBody>
  <p>俺はプログラミングが好きだ！</p>
  <p>俺は技術が好きだ！</p>
  </PostBody>
  </Container>
)
}