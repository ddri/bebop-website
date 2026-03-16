# Waitlist Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Connect the Bebop marketing site to the new waitlist/invitation system by adding a signup form and updating CTAs to prioritize hosted access.

**Architecture:** Static Astro site with a new `Waitlist.astro` component containing a client-side form that POSTs to `https://app.bebopcms.com/api/waitlist`. No new dependencies — uses native `fetch()` and DOM manipulation via a `<script>` tag. Existing components are updated to shift primary CTA from GitHub to waitlist.

**Tech Stack:** Astro 4, Tailwind CSS 3, Lucide icons, vanilla JS for form handling

---

### Task 1: Create Waitlist component

**Files:**
- Create: `src/components/Waitlist.astro`

**Step 1: Create the Waitlist component**

This is a new Astro component with a form and client-side submission logic. White background, centered layout matching existing section patterns.

```astro
---
import { Mail, User, MessageSquare } from 'lucide-astro';
---

<section id="waitlist" class="w-full py-20 bg-white">
  <div class="container mx-auto max-w-xl">
    <h2 class="text-3xl font-bold text-center mb-4">Get Early Access</h2>
    <p class="text-center text-gray-600 mb-8">
      Bebop is currently in early access. Join the waitlist and we'll send you an invite when your spot is ready.
    </p>

    <form id="waitlist-form" class="space-y-4">
      <div>
        <label for="waitlist-name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <div class="relative">
          <User class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            id="waitlist-name"
            name="name"
            required
            placeholder="Your name"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label for="waitlist-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <div class="relative">
          <Mail class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="email"
            id="waitlist-email"
            name="email"
            required
            placeholder="you@example.com"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label for="waitlist-reason" class="block text-sm font-medium text-gray-700 mb-1">
          What are you hoping to use Bebop for? <span class="text-gray-400">(optional)</span>
        </label>
        <div class="relative">
          <MessageSquare class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <textarea
            id="waitlist-reason"
            name="reason"
            rows="3"
            placeholder="Tell us about your content workflow..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        id="waitlist-submit"
        class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Join the Waitlist
      </button>

      <p id="waitlist-error" class="text-red-600 text-sm text-center hidden"></p>
    </form>

    <div id="waitlist-success" class="hidden text-center py-8">
      <div class="text-4xl mb-4">&#10003;</div>
      <h3 class="text-xl font-semibold mb-2">You're on the list!</h3>
      <p class="text-gray-600">We'll send you an invite when your spot is ready. Keep an eye on your inbox.</p>
    </div>
  </div>
</section>

<script>
  const form = document.getElementById('waitlist-form') as HTMLFormElement;
  const submitBtn = document.getElementById('waitlist-submit') as HTMLButtonElement;
  const errorEl = document.getElementById('waitlist-error') as HTMLElement;
  const successEl = document.getElementById('waitlist-success') as HTMLElement;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorEl.classList.add('hidden');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const name = (document.getElementById('waitlist-name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('waitlist-email') as HTMLInputElement).value.trim();
    const reason = (document.getElementById('waitlist-reason') as HTMLTextAreaElement).value.trim();

    try {
      const res = await fetch('https://app.bebopcms.com/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, ...(reason && { reason }) }),
      });

      if (res.status === 201) {
        form.classList.add('hidden');
        successEl.classList.remove('hidden');
      } else {
        const data = await res.json().catch(() => null);
        errorEl.textContent = data?.message || 'Something went wrong. Please try again.';
        errorEl.classList.remove('hidden');
      }
    } catch {
      errorEl.textContent = 'Unable to connect. Please try again later.';
      errorEl.classList.remove('hidden');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Join the Waitlist';
    }
  });
</script>
```

**Step 2: Verify it builds**

Run: `npm run build`
Expected: Build succeeds (the component isn't used yet, but import will be checked in next task)

**Step 3: Commit**

```bash
git add src/components/Waitlist.astro
git commit -m "feat: add Waitlist component with form and API submission"
```

---

### Task 2: Add Waitlist to page layout

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Import and place Waitlist between Testimonials and GettingStarted**

Add import at top (after existing imports):
```
import Waitlist from '../components/Waitlist.astro';
```

In the template, insert `<Waitlist />` between `<Testimonials />` and `<GettingStarted />`:
```astro
    <Testimonials />
    <Waitlist />
    <GettingStarted />
```

**Step 2: Verify it builds and renders**

Run: `npm run build`
Expected: Build succeeds, `dist/index.html` contains the waitlist form

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add Waitlist section to homepage between Testimonials and GettingStarted"
```

---

### Task 3: Update Hero CTA buttons

**Files:**
- Modify: `src/components/Hero.astro`

**Step 1: Replace the single GitHub button with two buttons**

Replace the existing `<div class="flex gap-4 justify-center">` block (lines 43-50) with:

```astro
    <div class="flex gap-4 justify-center">
      <a href="#waitlist">
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-dark-grey text-white hover:bg-dark-grey/90">
          Request Access
        </button>
      </a>
      <a href="https://github.com/ddri/bebop">
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 gap-2 border border-dark-grey/30 text-dark-grey hover:bg-dark-grey/10">
          <Github class="h-5 w-5" />
          View on GitHub
        </button>
      </a>
    </div>
```

The primary "Request Access" button is solid dark grey. The secondary "View on GitHub" has an outlined style.

**Step 2: Verify it builds**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: update Hero with Request Access primary CTA and GitHub secondary"
```

---

### Task 4: Update Header button

**Files:**
- Modify: `src/components/Header.astro`

**Step 1: Replace "Star on GitHub" with "Request Access"**

Replace the entire `<a href="https://github.com/ddri/bebop" class="flex items-center gap-2">` block (lines 24-29) with:

```astro
    <a href="#waitlist">
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Request Access
      </button>
    </a>
```

**Step 2: Remove unused Github import**

The `Github` icon import from lucide-astro is no longer used in this component. Remove the frontmatter:

```diff
- ---
- import { Github } from 'lucide-astro';
- ---
+ ---
+ ---
```

Actually, keep the frontmatter fences (they're required by Astro), just remove the import line so it's empty fences.

**Step 3: Verify it builds**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: update Header CTA from Star on GitHub to Request Access"
```

---

### Task 5: Update Footer with Request Access link

**Files:**
- Modify: `src/components/Footer.astro`

**Step 1: Add Request Access link to the Project column**

In the Project `<ul>` (after the existing list items around line 23), add a new `<li>`:

```astro
          <li>
            <a href="#waitlist">Request Access</a>
          </li>
```

Place it as the first item in the Project list (before GitHub) since it's the primary path now.

**Step 2: Verify it builds**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: add Request Access link to Footer"
```

---

### Task 6: Visual QA in dev server

**Step 1: Start dev server**

Run: `npm run dev`

**Step 2: Verify all changes visually**

Check the following in browser at `http://localhost:4321`:
- [ ] Header shows "Request Access" button (no GitHub icon)
- [ ] Hero shows "Request Access" (primary) and "View on GitHub" (secondary outline) buttons
- [ ] Version badge still present in Hero
- [ ] Waitlist section appears between Testimonials and GettingStarted
- [ ] Form fields render correctly with icons (Name, Email, Reason)
- [ ] Form validates required fields (try submitting empty)
- [ ] Clicking "Request Access" in Header/Hero scrolls to waitlist section
- [ ] GettingStarted section unchanged (self-host path)
- [ ] Bottom CTA section unchanged (community/GitHub)
- [ ] Footer shows "Request Access" link in Project column
- [ ] All existing nav links still work

**Step 3: Test form submission error handling**

The API endpoint won't be available locally. Submitting the form should show the "Unable to connect" error message, which confirms the error path works.

**Step 4: Final build check**

Run: `npm run build`
Expected: Build succeeds with no warnings

**Step 5: Commit any fixes if needed, then final commit**

```bash
git add -A
git commit -m "chore: visual QA fixes"
```

(Skip this commit if no fixes were needed.)
