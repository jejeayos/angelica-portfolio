export type Project = {
  title: string
  description: string
  tags: string[]
  year: string
  category: string
  image?: string
  link?: string
}


const projects: Project[] = [
  {
    title: "HealthcareGPS AI",
    description: "Built subscription tiering and plan-based access control across two AI-powered healthcare products, enabling differentiated feature access by plan. Developed full-stack features from Vue/Nuxt frontend through Nest.js REST APIs and Prisma ORM to the database layer. Investigated and resolved bugs across the full stack, implementing responsive design fixes to ensure consistent cross-device experiences. Managed AWS S3 storage for production assets and maintained Docker-based local development environments.",
    tags: ["Vue", "Nuxt", "Pinia", "Nest.js", "Prisma", "Docker", "AWS S3"],
    year: "2026",
    category: "HealthTech",
    image: "/images/Healthcaregps.png",
    link: "https://medicarecopilot.ai/",
  },
  {
    title: "Infor Rhythm for Ecommerce",
    description: "Contributed to an enterprise B2B eCommerce platform serving large-scale procurement workflows. Built and shipped key features including edit order, user impersonation, unit of measure selection, and quick order entry enhancements with search capabilities. Led React migration from legacy MarionetteJS/BackboneJS stack, developed Spring Boot backend services, implemented Google Analytics tracking, mentored junior developers, and served as interim Scrum Master.",
    tags: ["React", "Redux", "Spring Boot", "MarionetteJS", "BackboneJS", "Google Analytics"],
    year: "2025",
    category: "Enterprise SaaS",
    image: "/images/RhythmForEcomm.png",
    link: "https://www.infor.com/solutions/service-sales/ecommerce",

  },
]

export default projects
