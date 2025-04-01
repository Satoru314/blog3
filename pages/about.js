import Link from 'next/link'
import Hero from '@/components/hero.js'

export default function About() {
  return <Link href="/blog"> 
  <Hero 
  title="About" 
  subtitle="About development activities"
  />
  </Link>
 
}