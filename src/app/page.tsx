import Image from 'next/image'
import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import Choose from '@/components/Choose'
import LatestArticle from '@/components/LatestArticle'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
        <Navbar />
        <HeroBanner />
        <Choose />
        <LatestArticle />
        <Footer />
    </main>
  )
}
