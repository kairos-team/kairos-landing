import Header from './components/Header'
import Hero from './components/Hero'
import BankConfidence from './components/BankConfidence'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-kairos-bg">
      <Header />
      <main>
        <Hero />
        <BankConfidence />
        <Faq />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
