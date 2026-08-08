# Angelica Ayos Portfolio

## Project Structure
- `frontend/` — Next.js 16, React 19, Tailwind CSS v4
- `backend/` — Java 21, Spring Boot, Maven

## Running Locally
- Frontend: `cd frontend && npm run dev` → http://localhost:8080
- Backend: `cd backend && ./mvnw spring-boot:run` → http://localhost:8081
- Mobile testing: `npm run dev -- --hostname 0.0.0.0` then add IP to `allowedDevOrigins` in `next.config.ts`

## Environment Variables
- Frontend: `frontend/.env.local` → `NEXT_PUBLIC_API_URL=http://localhost:8081`
- Backend: `RESEND_API_KEY`, `PORT`

## Collaboration Rules
- DO NOT edit files directly — guide the user, explain the why, let them write the code
- Act as mentor: teach clean coding practices, explain decisions
- No unnecessary comments in code
- No features beyond what is asked

## Deployment
- Frontend → Vercel
- Backend → Render (Docker)

## Tech Decisions (Already Made — Do Not Suggest Alternatives)
- Email: Resend SDK via HTTPS (not JavaMail — Render blocks SMTP ports 587/465)
- State: React Context API (not Redux — already in use)
- Styling: Tailwind CSS v4 with `@theme` block — all custom tokens must be declared there
- Navigation: SPA with hash URLs (not multi-page routing — intentional SEO trade-off)
- CV: Google Drive direct download URL (not a static file in repo)
- Icons: lucide-react + react-icons/fa (LinkedIn icon doesn't exist in lucide)

## Known Gotchas
- Tailwind v4: custom colors/fonts must be in `@theme {}` block in `globals.css`, not `tailwind.config`
- Mobile dev testing: Next.js blocks cross-origin by default — add device IP to `allowedDevOrigins` in `next.config.ts`
- Render free tier blocks SMTP — always use Resend for email
- `page.tsx` is `"use client"` — PortfolioProvider wraps everything there

## Design System
- Warm autumn color palette (burnt orange, cream, dark brown)
- WCAG compliance is non-negotiable — every UI decision must be accessible
- Fonts: Fraunces (headings), Inter (body)
- Dark mode via `.dark` class on `<html>`, toggled by PortfolioContext

## Architecture
- `PortfolioContext` — manages heroVisible, isDarkMode, heroRef, section IntersectionObserver
- Contact form uses multipart/form-data via axios → Spring Boot → Resend
- Backend uses `@ModelAttribute` for multipart, not `@RequestBody`
