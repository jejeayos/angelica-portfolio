export type Experience = {
    company: string,
    role: string,
    startDate: string,
    endDate: string | "Present",
    description: string[]
}

const experiences: Experience[] = [
  {
    company: "MicroSourcing Philippines Inc.",
    role: "Senior Frontend Developer",
    startDate: "August 2025",
    endDate: "Present",
    description: [
      "Build and optimize user-facing interfaces with React, Redux, Vite, and Material Design, delivering responsive experiences across devices and browsers.",
      "Improve accessibility by aligning components and pages with WCAG standards, lowering barriers for users with disabilities.",
      "Architect modular, scalable front-end structures using CSS/SASS best practices to support long-term maintainability.",
      "Partner with designers and QA analysts to ship pixel-accurate, functionally consistent UI on the first pass.",
      "Lead and contribute to code reviews, championing clean, maintainable, and well-documented code across the team.",
    ]
  },
  {
    company: "HealthcareGPS AI",
    role: "Frontend Developer (Freelance)",
    startDate: "November 2025",
    endDate: "May 2026",
    description: [
      "Built subscription tiering and plan-based access control across two AI-powered healthcare products.",
      "Developed and shipped user-facing features using Vue, Nuxt, and Pinia.",
      "Investigated and resolved bugs across the full stack, working into the Nest.js and Prisma backend.",
      "Iterated on LLM prompts to improve the quality and consistency of AI-generated responses in production features.",
    ]
  },
  {
    company: "Infor PSSC, Inc.",
    role: "Software Engineer",
    startDate: "April 2022",
    endDate: "August 2025",
    description: [
      "Led the development of new product features in ReactJS, driving the team's migration from legacy frameworks to a modern front-end stack.",
      "Mentored junior developers and onboarded new hires through structured code reviews, raising overall code quality and team consistency.",
      "Served as interim Scrum Master, facilitating sprint ceremonies, unblocking the team, and keeping delivery commitments on track.",
      "Maintained and upgraded third-party dependencies to keep applications secure, performant, and free of known vulnerabilities.",
      "Improved cross-browser and cross-device experience, ensuring consistent behavior across all major platforms.",
    ]
  },
  {
    company: "Infor PSSC, Inc.",
    role: "Associate Software Developer",
    startDate: "January 2021",
    endDate: "April 2022",
    description: [
      "Built and maintained core features for an enterprise eCommerce product using MarionetteJS, BackboneJS, Handlebars, and CSS.",
      "Worked side-by-side with UI/UX designers, backend engineers, and project managers to deliver fully integrated features end-to-end.",
      "Contributed to peer code reviews and QA processes, helping uphold a robust, maintainable codebase.",
    ]
  },
  {
    company: "Trends and Technologies, Inc.",
    role: "Software Developer Intern",
    startDate: "June 2018",
    endDate: "July 2018",
    description: [
      "Helped build a Node.js, Express.js, and Firebase web application as part of the team's internship project.",
      "Practiced SCRUM methodology and disciplined Git workflows, contributing to smooth team collaboration.",
    ]
  },
]

export default experiences;