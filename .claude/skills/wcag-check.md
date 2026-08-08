# WCAG Accessibility Checklist

Run through this before marking any UI component done:

## Color & Contrast
- [ ] Text meets 4.5:1 contrast ratio against background (normal text)
- [ ] Large text meets 3:1 contrast ratio
- [ ] Interactive elements (buttons, links) meet 3:1 against surroundings
- [ ] Don't rely on color alone to convey meaning

## Keyboard Navigation
- [ ] All interactive elements reachable via Tab key
- [ ] Focus order is logical (top to bottom, left to right)
- [ ] Focus ring visible (`focus-visible` styles applied)
- [ ] No keyboard traps

## Semantic HTML
- [ ] Buttons use `<button>`, links use `<a href>`
- [ ] Headings follow hierarchy (h1 → h2 → h3, no skipping)
- [ ] Forms have `<label>` for every input
- [ ] Images have `alt` text, decorative images have `alt=""`

## ARIA
- [ ] Icon-only buttons have `aria-label`
- [ ] `aria-hidden="true"` on decorative icons
- [ ] Expandable elements have `aria-expanded`
- [ ] `aria-controls` points to the controlled element

## Mobile
- [ ] Touch targets are at least 44x44px
- [ ] `touch-action: manipulation` on buttons and links
