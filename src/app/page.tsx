import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import GettingStarted from "./components/GettingStarted"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <GettingStarted />
      <CTA />
      <Footer />
    </main>
  )
}

