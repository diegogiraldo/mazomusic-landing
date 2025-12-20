import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
      </main>
      <WhatsAppButton />
      <ContactModal />
    </>
  )
}
