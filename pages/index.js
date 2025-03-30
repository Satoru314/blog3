import Layout from '@/components/layout'
import Hero from '@/components/hero.js'
import EachPost from '@/components/eachpost.js'
export default function Home() {
  return(
<Layout> 
  <EachPost title="スーパーAI" url="https://aistudio.google.com/"/>
  <EachPost title="youtube" url="https://www.youtube.com"></EachPost>
  <Hero/>
</Layout>
  ) 
}