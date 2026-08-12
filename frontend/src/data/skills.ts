export type SkillCategory = {
  category: string
  skills: string[]
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SASS/SCSS", "React", "Redux", "Vue", "Nuxt", "Pinia", "Vite", "Material UI", "MarionetteJS", "BackboneJS", "Handlebars"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "Prisma", "Java", "Spring Boot", "REST APIs"]
  },
  {
    category: "AI & LLM Tools",
    skills: ["Prompt Engineering", "Agentic Workflows", "Cursor", "Claude Code"]
  },
  {
    category: "Database & Platforms",
    skills: ["Firebase", "AWS S3", "Git", "GitHub", "Docker", "Docker Desktop", "DBeaver", "Google Tag Manager", "Google Analytics", "Figma"]
  },
  {
    category: "Practices",
    skills: ["Responsive Web Design", "WCAG Accessibility", "Cross-browser & Cross-device Optimization", "Full Stack Debugging", "Component Architecture", "Code Review", "Mentorship", "Agile / Scrum"]
  }
]

export default skills;
