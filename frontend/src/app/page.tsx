"use client"
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experiences from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { PortfolioProvider } from "@/context/PortfolioContext";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioProvider>
        <Navbar />
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Contact />
      </PortfolioProvider>
    </main>
  )
}
