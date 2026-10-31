import {
  About,
  Advantages,
  Areas,
  Contact,
  FAQ,
  FloatingWhatsApp,
  Footer,
  Gallery,
  Header,
  Hero,
  Services,
  Testimonials,
} from '@/components/beduda-site'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Gallery />
        <Testimonials />
        <Areas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
