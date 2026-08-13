"use client"
import { motion } from "framer-motion";
import { Monitor, Server, Sparkles, Cloud, CheckSquare } from "lucide-react";
import skills from "@/data/skills";
import experiences from "@/data/experience";
import Image from "next/image";

const categoryIcons = {
  "Frontend": Monitor,
  "Backend": Server,
  "AI & LLM Tools": Sparkles,
  "Database & Platforms": Cloud,
  "Practices": CheckSquare,
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Creative Engineer &<br />
              <span className="italic text-primary">Full Stack Developer.</span>
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              With over 5 years of dedicated engineering experience, I specialize in building accessible,
              pixel-perfect web applications across the full stack. My approach merges clean architecture
              with thoughtful UI engineering to deliver products that are both powerful and delightful to use.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video bg-surface-high border border-border">
            <Image
                src="/images/coffee_work.JPG"
                alt="Workspace"
                fill
                className="object-cover"
                style={{ objectPosition: "center 75%" }}
            />

            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255, 177, 195, 0.08), transparent 80%)" }}
            />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1.5 text-xs font-body tracking-widest uppercase border border-border bg-background/60 backdrop-blur-sm text-text-secondary rounded">
                Est. 2018
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
            <h2 className="font-heading text-3xl font-bold text-text-primary">Technical Arsenal</h2>
            <div className="flex flex-col gap-6 bg-surface border border-border rounded-xl p-6">
                {skills.map((category, i) => {
                const Icon = categoryIcons[category.category as keyof typeof categoryIcons]
                return (
                    <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                    className="flex flex-col gap-3"
                    >
                    <div className="flex items-center gap-2">
                        {Icon && <Icon size={13} className="text-primary" />}
                        <span className="text-xs font-body tracking-widest text-text-secondary uppercase">{category.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 text-xs font-body text-text-secondary border border-border rounded-full">
                            {skill}
                        </span>
                        ))}
                    </div>
                    </motion.div>
                )
                })}
            </div>
        </div>


        <div className="flex flex-col gap-8">
          <h2 className="font-heading text-3xl font-bold text-text-primary">Experience Log</h2>
          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className="relative flex gap-6 pb-10"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-primary bg-background mt-1 flex-shrink-0 z-10" />
                  {i < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-1" />
                  )}
                </div>

                <div className="flex flex-col gap-3 flex-1 pb-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-text-primary">{exp.role}</h3>
                      <p className="font-body text-xs tracking-widest uppercase text-text-secondary">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-body text-text-secondary border border-border rounded bg-surface self-start md:self-auto whitespace-nowrap">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <div className="p-4 bg-surface border border-border rounded-lg">
                    <ul className="flex flex-col gap-2">
                      {exp.description.map((bullet, j) => (
                        <li key={j} className="font-body text-xs text-text-secondary leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
