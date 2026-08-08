# New Portfolio Section

When adding a new section, follow this pattern:

## Component Template
- File goes in `frontend/src/components/`
- Section must have an `id` attribute for scroll tracking
- Use `min-h-screen flex flex-col items-center justify-center px-6`
- Use `Heading` component with `variant="secondary"`
- Use `Paragraph` component for body text
- Add `scroll-margin-top` in globals.css if needed

## Checklist
- [ ] Add `id` to section element
- [ ] Register section in `page.tsx`
- [ ] Add nav link in `Navbar.tsx`
- [ ] Add to mobile dropdown in `Navbar.tsx`
- [ ] Test scroll behavior and URL hash update
- [ ] Run /wcag-check before marking done
