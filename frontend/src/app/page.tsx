"use client"
import Hero from "@/components/Hero"
import Work from "@/components/Work"
import Navbar from "@/components/Navbar"
import TechStack from "@/components/TechStack"
import Contact from "@/components/Contact"
import { PortfolioProvider } from "@/context/PortfolioContext"
import Background from "@/components/Background"
import Footer from "@/components/Footer"
import OffDutyModal from "@/components/OffDutyModal"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <div className="relative z-10">
        <PortfolioProvider>
          <OffDutyModal />
          <Navbar />
          <Hero />
          <Work />
          <TechStack />
          <Contact />
          <Footer />
        </PortfolioProvider>
      </div>
    </main>
  )
}
