"use client"
import { usePortfolio } from "@/context/PortfolioContext"
import { ArrowRight, Database, Pen, Rocket } from "lucide-react"
import { useTypewriter } from "@/hooks/useTypewriter"

const terminalText = `const developer = {
  name: 'Angelica Ayos',
  role: 'Full-Stack Developer',
  focus: ['Architecture', 'UI/UX'],
  status: function() {
    return 'Building the future.';
  }
};

await developer.initialize();`

const specialties = [
  {
    icon: Pen,
    title: "UI Engineering",
    description: "Translating complex design systems into pixel-perfect, accessible components.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Architecting scalable APIs and microservices for high-load applications.",
  },
  {
    icon: Rocket,
    title: "DevOps & Cloud",
    description: "Streamlining deployment pipelines with Docker, AWS, and CI/CD automation.",
  },
]

export default function Hero() {
  const { heroRef } = usePortfolio()
  const { displayed } = useTypewriter(terminalText, 30, 500)

  return (
    <section
      id="home"
      ref={heroRef}
      className="flex flex-col justify-center px-8 md:px-16 py-20 gap-16"
      style={{ minHeight: "calc(100vh - var(--navbar-height) - var(--footer-height))" }}
    >
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
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-background text-sm font-medium rounded hover:bg-aquamarine transition-colors duration-200"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="https://drive.google.com/file/d/1J6rgmaUBRaxIp21saqRWtVY-Ap33WuEN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary text-sm font-medium rounded hover:border-aquamarine hover:text-aquamarine transition-colors duration-200"
            >
              Resume
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

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {specialties.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col gap-3 p-6 bg-surface border border-border rounded-xl">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-surface-high text-primary">
              <Icon size={16} />
            </div>
            <h3 className="font-heading text-base font-bold text-text-primary">{title}</h3>
            <p className="font-body text-xs text-text-secondary leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
