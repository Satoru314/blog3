import Link from 'next/link'
import Hero from '@/components/hero.js'


export default function Home() {
  return <Link href="/blog">
  <Hero 
  title="CUBE" 
  subtitle="アウトプットしていくサイト"
  imageOn // true or false to show or hide the image
  />
  </Link>
}