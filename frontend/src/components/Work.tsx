"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import projects from "@/data/project"

export default function Work() {
  return (
    <section id="work" className="px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-body tracking-widest text-text-secondary uppercase">Selected Projects</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Building Accessible,<br />
            <span className="italic text-primary">Performant Web Applications.</span>
          </h2>
          <p className="font-body text-text-secondary text-sm leading-relaxed max-w-xl">
            A showcase of full-stack solutions spanning HealthTech and Enterprise SaaS, from AI-powered platforms to large-scale B2B eCommerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="flex flex-col bg-surface border border-border rounded-xl overflow-hidden group"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"

                  />
                )}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 50%, var(--surface) 100%)" }}
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-body rounded bg-background/60 backdrop-blur-sm text-text-secondary border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 p-6">
                <h3 className="font-heading text-xl font-bold text-text-primary">{project.title}</h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-body text-text-secondary">{project.year}</span>
                    <span className="text-xs font-body text-text-secondary">·</span>
                    <span className="text-xs font-body tracking-wider text-text-secondary uppercase">{project.category}</span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-body text-primary hover:text-aquamarine uppercase tracking-wider transition-colors duration-200"
                    >
                      View Product →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
