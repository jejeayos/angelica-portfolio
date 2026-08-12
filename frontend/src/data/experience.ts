export type Experience = {
    company: string,
    role: string,
    startDate: string,
    endDate: string,
    description: string[]
}

const experiences: Experience[] = [
  {
    company: "MicroSourcing Philippines Inc.",
    role: "Senior Frontend Developer",
    startDate: "August 2025",
    endDate: "June 2026",
    description: [
      "Build and optimize user-facing interfaces with React, Redux, Vite, and Material Design, delivering responsive experiences across devices and browsers.",
      "Improve accessibility by aligning components and pages with WCAG standards, lowering barriers for users with disabilities.",
      "Architect modular, scalable front-end structures using CSS/SASS best practices to support long-term maintainability.",
      "Partner with designers and QA analysts to ship pixel-accurate, functionally consistent UI on the first pass.",
      "Reviewed Figma mockups and wireframes in close collaboration with designers, ensuring implemented UI accurately reflected design intent.",
      "Lead and contribute to code reviews, championing clean, maintainable, and well-documented code across the team.",
    ]
  },
  {
    company: "HealthcareGPS AI",
    role: "Full Stack Developer (Freelance)",
    startDate: "November 2025",
    endDate: "May 2026",
    description: [
      "Built subscription tiering and plan-based access control across two AI-powered healthcare products, enabling differentiated feature access by plan.",
      "Developed user-facing features using Vue, Nuxt, and Pinia across both web applications.",
      "Investigated and resolved bugs across the full stack, from Vue/Nuxt frontend through Nest.js REST APIs and Prisma ORM to the database layer.",
      "Worked directly in the Nest.js and Prisma backend to implement access control logic and data models.",
      "Reviewed and maintained Dockerfiles and Docker Compose configurations using Docker Desktop.",
      "Navigated and managed AWS S3 storage, handling file path configurations and bucket access for production assets.",
      "Used Cursor and Claude Code as daily development tools, integrating AI-assisted coding into the standard workflow.",
    ]
  },
  {
    company: "Infor PSSC, Inc.",
    role: "Software Engineer",
    startDate: "April 2022",
    endDate: "August 2025",
    description: [
      "Led development of new product features in ReactJS, driving the team's migration from legacy MarionetteJS/BackboneJS frameworks to a modern React stack.",
      "Contributed across the stack on an enterprise SaaS product, collaborating with backend engineers on API integration and data flows.",
      "Developed Spring Boot controllers and services for a user impersonation feature, implementing backend logic to allow authorized users to act on behalf of others.",
      "Mentored junior developers and onboarded new hires through structured code reviews, raising overall code quality and team consistency.",
      "Served as interim Scrum Master, facilitating sprint ceremonies, unblocking the team, and keeping delivery commitments on track.",
      "Maintained and upgraded third-party dependencies to keep applications secure, performant, and free of known vulnerabilities.",
      "Implemented Google Tag Manager and Google Analytics to track user behavior, including page navigation patterns and most viewed or added-to-cart product items.",
      "Used Figma to review design mockups and wireframes, bridging the gap between design and implementation.",
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
      "Built a web application using Node.js, Express.js, and Firebase, covering both server-side logic and frontend integration.",
      "Practiced SCRUM methodology and disciplined Git workflows, contributing to smooth team collaboration.",
    ]
  },
]

export default experiences;
