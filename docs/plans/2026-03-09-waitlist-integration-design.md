# Waitlist Integration Design

## Context

The Bebop app has a new gated signup system with invite codes and a waitlist. The marketing site (bebopcms.com) needs to connect to it by adding a waitlist form and updating CTAs to prioritize the hosted platform while keeping GitHub/self-host paths intact.

- **App URL**: `https://app.bebopcms.com`
- **Waitlist API**: `POST https://app.bebopcms.com/api/waitlist` — accepts `{ name, email, reason? }`, returns 201 on success
- **Signup URL**: `https://app.bebopcms.com/sign-up`

## Approach

Approach B: Add a dedicated Waitlist section between Testimonials and GettingStarted. Keep the bottom CTA as-is for community/GitHub.

## Changes

### 1. Hero (`src/components/Hero.astro`)
- Primary button: "Request Access" → `#waitlist` anchor
- Secondary button: "View on GitHub" → `https://github.com/ddri/bebop` (with GitHub icon)
- Keep version badge

### 2. Header (`src/components/Header.astro`)
- Change right-side button from "Star on GitHub" → "Request Access" linking to `#waitlist`
- Keep all nav links unchanged

### 3. New Waitlist section (`src/components/Waitlist.astro`)
- Placed between Testimonials and GettingStarted in `index.astro`
- White background to contrast with dark GettingStarted below
- Heading: "Get Early Access"
- Form: Name (required), Email (required), Reason (optional textarea)
- Client-side `<script>` with `fetch()` POST to `https://app.bebopcms.com/api/waitlist`
- Success: hide form, show thank-you message
- Error: show inline error message
- Basic client-side validation (required fields, email format)

### 4. Bottom CTA (`src/components/CTA.astro`)
- No changes — stays as community/GitHub CTA

### 5. GettingStarted (`src/components/GettingStarted.astro`)
- No changes — stays as self-host developer path

### 6. Footer (`src/components/Footer.astro`)
- Add "Request Access" link under Project column → `#waitlist`

### Unchanged
- Features, Testimonials — no modifications
- All existing GitHub links remain
- Visual design system (colors, textures, typography)
