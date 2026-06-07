# PRD — Solaris Innovations (carlosgumucio.dev partner site)

## Purpose

Personal brand site for Carlos Gumucio positioning him as a **dev partner for design agencies in LATAM**.
Tagline: *"Tu diseño. Mi código. A producción."*

The site serves as:
1. Primary pitch asset when outreaching to design agencies on LinkedIn/Instagram
2. Portfolio proof that Carlos can implement pixel-perfect, premium designs from a Figma/visual reference
3. Lead capture via WhatsApp + contact form

---

## Design Reference

Template: **Message** by Framer — https://heymessage.framer.ai/
Implementation: built from scratch in Astro (NOT deployed via Framer)

### Design Tokens

| Token | Value |
|---|---|
| Hero background | Dark teal `#3d5a62` → fades to near-black |
| Section background | Near-black `#0d0e10` |
| Mobile menu background | `#000000` |
| Text | `#ffffff` |
| Font | Host Grotesk (Google Fonts, variable 300–800) |
| CTA button style | Outlined pill, white border + white text |
| Nav style | Transparent, centered logo + links |

### Screenshots
All design references are in `/design/`:
- `hero-desktop.png` — full hero section desktop
- `hero-mobile.png` — full hero section mobile
- `navbar-desktop.png` — nav bar desktop
- `burger-menu-mobile.png` — mobile menu overlay (full black, centered links, X close)
- `value-desktop.png` — features/value section desktop (3 dark cards)
- `value-mobile.png` — features/value section mobile

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 6.4.4 |
| CSS | Tailwind v4 |
| Font | Host Grotesk via Google Fonts |
| Language | Spanish only (EN deferred) |
| Backend | Firebase Functions (contact form) |
| Hosting | Firebase Hosting (`solaris-inovations.web.app`) |
| Email | Nodemailer → cgumucio93@gmail.com |

---

## Sections (in order)

1. **Nav** — logo (✦ + wordmark) + links + WhatsApp CTA button. Transparent over hero. Hamburger on mobile with full-screen black overlay menu.
2. **Hero** — full viewport, atmospheric dark teal bg with landscape image, large centered headline, subtitle, outlined pill CTA, "Scroll to explore" indicator at bottom.
3. **Services** — 5 service cards: Figma-to-code · Headless CMS · Performance (Lighthouse 95+) · White-label · Multilingual
4. **How it works** — 3-step process: (1) Envías el diseño en Figma → (2) Yo construyo → (3) Tú lo entregas a tu cliente
5. **Work samples** — project cards with screenshot + description. Projects TBD (Carlos will provide assets).
6. **Pricing** — per-project tiers + retainer card

   | Tier | Price |
   |---|---|
   | Landing page | $800–1,500 USD |
   | Sitio completo + CMS | $1,500–3,500 USD |
   | Web app | $3,500–8,000 USD |
   | Retainer (15 hrs/mes) | $500–800 USD/mes |

7. **FAQ** — 4–5 common agency questions (accordion)
8. **Contact** — WhatsApp button (primary) + email form (secondary, fires Firebase Function)
9. **Footer** — links + copyright

---

## Contact Form Backend

- Firebase Function: `sendContactEmail`
- Trigger: HTTP POST from contact form
- Action: sends email to `cgumucio93@gmail.com` via Nodemailer + Gmail SMTP
- Form fields: Name, Agency name, Email, Message
- Response: success/error JSON

---

## Atomic Task List

### Setup
- [ ] 1. Install Tailwind v4 + Astro integration (`@astrojs/tailwind` or `tailwindcss` v4 direct)
- [ ] 2. Add Host Grotesk via Google Fonts in `Layout.astro`
- [ ] 3. Set global CSS tokens — dark background, text colors, spacing scale
- [ ] 4. Create `Layout.astro` with `<head>` meta, font, favicon, title
- [ ] 5. Initialize Firebase project + add `firebase.json` + `.firebaserc` for hosting config

### Components
- [ ] 6. `Nav.astro` — logo + links + WhatsApp CTA. Transparent desktop. Hamburger + full-screen black overlay mobile menu.
- [ ] 7. `Hero.astro` — full viewport, atmospheric bg, large headline, subtitle, outlined pill CTA, scroll indicator
- [ ] 8. `Services.astro` — 5 dark service cards
- [ ] 9. `HowItWorks.astro` — 3-step process
- [ ] 10. `WorkSamples.astro` — project cards (placeholder until Carlos provides assets)
- [ ] 11. `Pricing.astro` — 3 project tiers + 1 retainer card
- [ ] 12. `FAQ.astro` — accordion, 4–5 questions
- [ ] 13. `Contact.astro` — WhatsApp button + email form
- [ ] 14. `Footer.astro` — links + copyright

### Backend
- [ ] 15. Firebase Function `sendContactEmail` — receives POST, sends email via Nodemailer
- [ ] 16. Wire contact form to function endpoint + handle loading/error/success states

### Polish
- [ ] 17. Mobile responsiveness pass — all sections
- [ ] 18. Lighthouse audit — target 95+ score
- [ ] 19. `firebase deploy` — site + function live at `solaris-inovations.web.app`

---

## Content (Spanish)

### Hero
- **Headline:** "Tu diseño. Mi código. A producción."
- **Subtitle:** "Implemento diseños Figma con precisión pixel-perfect para agencias de diseño en LATAM. Tú diseñas, yo construyo, tu cliente queda feliz."
- **CTA:** "Trabajemos juntos"

### Nav links
Servicios · Cómo funciona · Proyectos · Precios · FAQ

### CTA nav button
WhatsApp (links to wa.me/[Carlos's number])

---

## Notes

- Work samples section: Carlos will provide real project screenshots + descriptions. Build with placeholder cards initially.
- Domain: `solaris-inovations.web.app` for now. Custom domain (`carlosgumucio.dev`) deferred.
- Motion/animations: deferred to v2. Keep interactions minimal for v1.
- No CMS needed — static content only.
- Package manager: `pnpm` always. Never `npm` or `yarn`.
