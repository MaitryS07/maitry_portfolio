# Maitry Santoshwar — Portfolio Website

A hand-drawn doodle-aesthetic personal portfolio for a Computer Engineering student at VJTI Mumbai. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build system, no external CDN dependencies.

---

## Quick Start (Local Preview)

Double-click `index.html` to open the portfolio directly in any modern browser.

No build step. No server required. Everything is self-contained.

---

## Project Structure

```
site/
├── index.html           Main page (all sections)
├── styles.css           Complete stylesheet (design system + responsive)
├── main.js              All interactions, animations, rendering logic
├── assets/
│   ├── content.js       ← EDIT THIS to update your portfolio
│   ├── resume.pdf       Your downloadable resume (replace with yours)
│   ├── favicon.svg      Browser tab icon
│   ├── og-image.jpg     Social sharing preview image
│   ├── fonts/
│   │   ├── CaveatBrush-Regular.ttf
│   │   ├── Caveat-Bold.ttf
│   │   └── PatrickHand-Regular.ttf
│   ├── images/
│   │   └── portrait.png  Your cartoon illustration
│   └── videos/
│       └── hero.mp4      Hero background video
└── README.md
```

---

## How to Update Your Portfolio

**All personal content lives in `assets/content.js`.** You never need to touch `index.html`, `styles.css`, or `main.js` for content updates.

### Update your introduction
Edit `personal.intro[]` and `personal.tagline` in `content.js`.

### Add or remove a project
Copy one object in the `projects[]` array, fill it in, save. The card renders automatically.

```js
{
  id:           "my-new-project",
  name:         "My New Project",
  emoji:        "🚀",
  problem:      "The problem it solves",
  description:  "What it does",
  contribution: "What you specifically built",
  tech:         ["Python", "Flask"],
  period:       "Jan 2026 – Feb 2026",
  status:       "Completed",   // "Completed" | "In Progress" | "Prototype"
  image:        "assets/images/my-project.png",   // or "" for emoji placeholder
  github:       "https://github.com/MaitryS07/repo",
  demo:         "",
  featured:     true,
  caption:      "Short handwritten-style caption"
}
```

### Replace a project image
1. Save your image to `assets/images/`.
2. Set `"image": "assets/images/your-image.png"` in the project object.
3. An image lightbox opens automatically when visitors click the image.

### Update skills and tools
Edit the `skills[]` and `tools[]` arrays in `content.js`.
- `skills[]` → skill category cards (Section 4)
- `tools[]` → circular tool badges (Section 5)

### Add an achievement to the timeline
Add an object to the `experience[]` array:

```js
{
  type:        "achievement",   // competition | mentorship | certification | achievement | academic | internship
  title:       "My Achievement",
  org:         "Organisation Name",
  location:    "City",
  period:      "2026",
  description: "What it was and why it matters.",
  tags:        ["Tag1", "Tag2"]
}
```

### Change contact details
Edit the `personal{}` object at the top of `content.js`.

### Replace your resume
1. Copy your new PDF to `assets/resume.pdf`.
2. Or update `personal.resumePath` to point to the new filename.

---

## Deployment

### GitHub Pages
1. Push the `site/` folder contents to a GitHub repository.
2. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**.
3. Your site will be live at `https://yourusername.github.io/repo-name/`.

### Netlify
1. Drag and drop the `site/` folder onto [netlify.com/drop](https://app.netlify.com/drop).
2. Or connect your GitHub repo and set the **Publish directory** to `site`.

### Vercel
1. Import the GitHub repository at [vercel.com](https://vercel.com).
2. Set the **Root Directory** to `site/`.
3. No framework preset needed (static site).

---

## HCI Principles Applied

| Principle | Implementation |
|---|---|
| **Consistency** | Unified color palette (#141414, #F26A1F, #FFFFFF, #FFE9DC), three handwritten fonts, consistent border/shadow system, uniform button styles |
| **Visibility of System Status** | Scroll-progress bar with pencil indicator, navbar scrolled state, active nav link underline, button hover/pressed states, mobile menu open/close, lightbox open/close |
| **Affordances & Signifiers** | Buttons with hard offset shadows look pressable, links have hover underlines, project images show pointer cursor and scale on hover, social links include icon + label |
| **User Control & Freedom** | Escape closes lightbox and mobile menu, back-to-top button, browser navigation unblocked, smooth scroll anchors, resume downloadable any time |
| **Recognition Over Recall** | Descriptive section headings, named nav links, emoji + text labels, recognizable project status badges, no hidden or unlabelled controls |
| **Accessibility** | Semantic HTML5 landmarks and headings, keyboard navigation (Tab/Enter/Space/Escape), visible :focus-visible outlines, meaningful alt text on all images, ARIA labels on icons/buttons/roles, 72px minimum touch targets |
| **Responsive Design** | 7 tested breakpoints (360px–1920px), mobile-first single column below 900px, hidden peripheral doodles below 600px, hamburger menu on mobile |
| **Error Prevention** | No nonfunctional links, mailto used for email (no fake form), project GitHub buttons hidden when URL is empty, lightbox only opens when image exists |
| **Performance** | IntersectionObserver for scroll reveals, video pauses when off-screen, local fonts (no CDN), no heavy dependencies, reduced-motion respected |

---

## Functional Test Results

### Tested Manually

| Test | Result |
|---|---|
| Navigation links scroll to correct sections | ✅ Pass |
| 72px scroll offset prevents headings hiding behind navbar | ✅ Pass |
| Mobile hamburger opens and closes correctly | ✅ Pass |
| Escape key closes mobile menu | ✅ Pass |
| Escape key closes lightbox | ✅ Pass |
| Back-to-top button appears after scrolling 400px | ✅ Pass |
| Social links open in new tab | ✅ Pass |
| Resume download link uses `download` attribute | ✅ Pass (requires resume.pdf to be placed in assets/) |
| Scroll-progress bar updates correctly | ✅ Pass |
| Active nav link updates as user scrolls | ✅ Pass |
| Navbar gains white background after scrolling | ✅ Pass |
| Squiggle underlines animate on section entry | ✅ Pass |
| Cards reveal on scroll with staggered delays | ✅ Pass |
| Hero video plays and holds last frame | ✅ Pass |
| Hero video pauses when scrolled out of view | ✅ Pass |
| Lightbox opens only when project has an image | ✅ Pass |
| Content renders from content.js correctly | ✅ Pass |
| No console errors on page load | ✅ Pass |

### Responsive Viewports Inspected

| Viewport | Status |
|---|---|
| 360px | ✅ Single column, no overflow |
| 390px | ✅ Single column, no overflow |
| 768px | ✅ Single column, no overflow |
| 1024px | ✅ Two column, desktop nav |
| 1280px | ✅ Full layout |
| 1440px | ✅ Full layout |
| 1920px | ✅ Max-width container contained |

---

## Usability Test Plan

### Tasks

| Task | How to Test |
|---|---|
| T1. Find educational background | Scroll to About section → check fact cards; or open Experience section |
| T2. Locate technical skills | Click "Skills" in navbar |
| T3. Open a project's GitHub link | Scroll to Projects → click "View Code" on any project with a GitHub URL |
| T4. Download resume | Click "Download Resume" in Hero or Contact section |
| T5. Find contact info on mobile (390px) | Resize to 390px → scroll to Contact section |

### Manual Evaluation Checklist

- [x] All navigation links functional
- [x] Resume download attribute present
- [x] Contact email uses `mailto:`
- [x] Mobile menu functional and keyboard-operable
- [x] Focus indicators visible on all interactive elements
- [x] No images with missing or empty alt text
- [x] Timeline alternates correctly on desktop
- [x] Timeline collapses to single column on mobile
- [x] Footer copyright year is dynamic
- [ ] User testing with real participants — **not yet completed** (requires scheduling and participants)

---

## Known Limitations and Pending Items

| Item | Status |
|---|---|
| `assets/resume.pdf` | **Needs to be added** — place your PDF here and update `personal.resumePath` if different |
| `assets/og-image.jpg` | **Needs to be added** — create a 1200×630 social preview image |
| Project screenshots | **Not provided** — emoji placeholders shown; add images to `assets/images/` and update `content.js` |
| GitHub links for projects | **Not yet added** — update each project's `github` field in `content.js` |
| Formal user testing | **Not completed** — requires human participants; testing plan is documented above |
| FFmpeg optimization | Video not re-encoded; original `hero.mp4` used as-is |

---

## Color Reference

| Token | Hex | Use |
|---|---|---|
| Black | `#141414` | Text, outlines, shadows |
| Orange | `#F26A1F` | Accents, buttons, highlights |
| White | `#FFFFFF` | Backgrounds, card fills |
| Pale Orange | `#FFE9DC` | Decorative fills, subtle backgrounds |

---

*Built with curiosity — Maitry Santoshwar, VJTI Mumbai, 2026*
