"use client"
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion"
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experiences from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { PortfolioProvider } from "@/context/PortfolioContext";
import OffDuty from "@/components/OffDuty";
import Background from "@/components/Background";

export default function Home() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const background = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 177, 195, 0.07), transparent 70%)`
  )

  return (
    <main
      className="min-h-screen relative"
      onMouseMove={(e) => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      }}
    >
      <Background />
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background }}
      />
      <div className="relative z-10">
        <PortfolioProvider>
          <Navbar />
          <Hero />
          <About />
          <Experiences />
          <Skills />
          <Contact />
          <OffDuty />
        </PortfolioProvider>
      </div>
    </main>
  )
}
