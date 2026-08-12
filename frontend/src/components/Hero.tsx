"use client"
import { usePortfolio } from "@/context/PortfolioContext";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const terminalText = `const developer = {
  name: 'Angelica Ayos',
  role: 'Full-Stack Developer',
  focus: ['Architecture', 'UI/UX'],
  status: function() {
    return 'Building the future.';
  }
};

await developer.initialize();`

export default function Hero() {
  const { heroRef } = usePortfolio()
  const { displayed, done } = useTypewriter(terminalText, 30, 500)

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center px-8 md:px-16 py-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-body tracking-widest text-text-secondary uppercase">System Online</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-primary leading-tight">
            Designed in the front.<br />
            <span className="italic text-primary">Engineered throughout.</span>
          </h1>

          <p className="font-body text-text-secondary leading-relaxed max-w-md">
            Full-stack developer with 5+ years building accessible, performant web applications. 
            Bridging the gap between clean architecture and pixel-perfect interfaces.
          </p>

          <div className="flex flex-row gap-3 flex-wrap">
            <a
              href="#work"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-background text-sm font-medium rounded hover:bg-primary-container transition-colors duration-200"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="https://github.com/jejeayos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary text-sm font-medium rounded hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <FaGithub size={16} /> GitHub
            </a>
          </div>
        </div>

        <div className="hidden md:block bg-surface border border-border rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-auto text-xs text-text-secondary font-body">~/workspace/portfolio</span>
          </div>

          <div className="p-6 font-body text-sm leading-relaxed">
            <pre className="text-text-secondary whitespace-pre-wrap">
              {displayed}
              <span className="cursor-blink">▋</span>
            </pre>
          </div>
        </div>

      </div>
    </section>
  )
}
