import Link from 'next/link'
import Hero from '@/components/hero.js'

export default function Blog() {
  return <Link href="/blog">
  <Hero
  title="Blog"
  subtitle="Recent posts"
  />
  </Link>
}