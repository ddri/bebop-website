# Copy & Messaging Rewrite Design

## Context

Bebop has shifted from an open-source self-hosted CMS to a hosted content marketing platform with a gated beta. The website copy still says "Developer First", "Self-hosted", and shows `git clone` commands. This rewrite aligns the messaging with the actual product.

## Page Structure

**Before:** Header → Hero → Features → Testimonials → Waitlist → GettingStarted → CTA → Footer
**After:** Header → Hero → Features → HowItWorks → Testimonials → Waitlist → CTA → Footer

- GettingStarted removed entirely
- New HowItWorks section (hosted flow, no code)

## Copy Changes

### Hero
- Headline: "Your content campaigns, one place."
- Subtitle: "Create, schedule, and publish across platforms — from one editor. Bebop is a content marketing platform for creators and teams who publish everywhere."

### Features (4 new cards)
1. Campaign-First (Newspaper icon) — Organize content into campaigns
2. Publish Everywhere (Send icon) — Multi-platform publishing
3. Real-Time Collaboration (Users icon) — Live cursors, role-based access
4. Smart Scheduling (Calendar icon) — Automatic publishing with retry logic

### HowItWorks (new, replaces GettingStarted)
Three steps:
1. Create a campaign
2. Write and collaborate
3. Schedule and publish

### CTA
- Heading: "Built for content people."
- Body: "Bebop is open source and in early access. We're building the platform we wish existed for managing content campaigns."
- Two buttons: Request Access + View on GitHub

### Header
- Nav: Features | How It Works | Documentation | GitHub (remove Community)

## Files
- Delete: `src/components/GettingStarted.astro`
- Create: `src/components/HowItWorks.astro`
- Modify: Hero.astro, Features.astro, Header.astro, CTA.astro, Footer.astro, index.astro
