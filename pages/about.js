import Hero from '@/components/hero.js'
import Container from '@/components/container.js'

export default function About() {
  return(
  <Container>
<Hero 
  title="About" 
  subtitle="About development activities"
  />
  <p>俺の名前はさとる！</p>
  <p>俺はプログラミングが好きだ！</p>
  <p>俺は技術が好きだ！</p>
  </Container>
)
}