export type SkillCategory = {
  category: string
  skills: string[]
}

const skills: SkillCategory[] = [
  {
    category: "Built With",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Java", "Spring Boot", "Redis", "AWS", "Terraform", "Docker", "GitHub"]
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SASS/SCSS", "Java"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Redux", "Vue", "Nuxt", "Nest.js", "Next.js", "Spring Boot", "Tailwind CSS", "Prisma", "Vite", "Material UI", "Node.js", "Express.js"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Firebase", "Docker", "AWS", "Terraform", "Redis", "Azure DevOps", "GitLab"],
  },
  {
    category: "Practices",
    skills: ["Responsive Web Design", "WCAG", "Component Architecture", "Code Review", "Agile/Scrum", "Kanban"]
  }
]

export default skills;
