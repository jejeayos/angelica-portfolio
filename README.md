# Angelica Ayos — Portfolio

Personal portfolio website built to showcase my work and signal my transition from Senior Frontend Developer to Full Stack Developer.

## Features
- Contact form with file attachment support (via Resend)
- Animated background with Framer Motion
- Photo carousel (Off Duty section)
- WCAG compliant
- Always-dark design with warm color palette

## Tech Stack

**Frontend**
- Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion

**Backend**
- Java 21, Spring Boot 3, Maven, Resend SDK

**Infrastructure**
- Docker, Vercel (frontend), Render (backend)

## Running Locally

**Frontend**
```
cd frontend
npm install
npm run dev
```

**Backend**
```
cd backend
./mvnw spring-boot:run
```

**Docker (production)**
```
docker compose up --build
```

**Docker (dev with hot reload)**
```
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

## Environment Variables

**Frontend** — `frontend/.env.local`
```
NEXT_PUBLIC_API_URL=http://localhost:8081
```

**Backend**
```
RESEND_API_KEY=
RESEND_TO_EMAIL=
ALLOWED_ORIGINS=http://localhost:8080
```

## Live

Frontend: [angelica-ayos-portfolio.vercel.app](https://angelica-ayos-portfolio.vercel.app)  
Backend: Render (Docker)
