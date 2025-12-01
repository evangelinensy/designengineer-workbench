# Design Engineering Workbench

A self-paced HTML/CSS/SVG course teaching designers to implement pixel-perfect components with tasteful motion — no JavaScript frameworks required.

## 🎯 Course Overview

**Duration:** 4 weeks
**Focus:** HTML/CSS/SVG motion patterns
**Inspired by:** Devouring Details, UI Engineering 101, Rauno's interfaces

### What You'll Learn

- **Week 1: Foundations** — Design tokens, type scales, elevation shadows, concentric radii
- **Week 2: Layout Systems** — CSS Grid Bento layouts, Flexbox panels, responsive breakpoints
- **Week 3: States & Accessibility** — Interactive states, focus-visible, prefers-reduced-motion, non-JS toggles
- **Week 4: Motion & SVG** — Blur filters, masks, choreographed keyframes, ±1px fidelity capstone

## 🚀 Getting Started

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/

2. **Start the server:**
   ```bash
   node server.js
   ```

   This starts a Node.js server that:
   - Serves static files (HTML/CSS/JS)
   - Proxies Gemini API requests (keeps API key secret)
   - Runs on http://localhost:8000

3. **Open workbench in browser:**
   ```
   http://localhost:8000
   ```

3. **Select a lab** from the sidebar (start with Week 1 Lab 1A)

4. **Work through labs:**
   - Read step-by-step instructions in the Chat panel (scroll to read all steps)
   - Write code in the Editor tab (HTML + CSS sub-tabs)
   - Click "Run ▶" to preview your work (auto-switches to Preview tab)
   - Check Video tab for relevant tutorials with timestamp buttons

## 📁 Project Structure

```
designengineer-workbench/
├── index.html              # Shell app (sidebar, chat, editor, preview, video)
├── styles.css              # Shell styling (tokens, elevation, typography)
├── workspace/
│   ├── index.html          # Learner canvas (empty section for labs)
│   └── styles.css          # Learner styles (tokens added in Lab 1A)
├── content/
│   ├── weeks/              # Lab instructions (markdown → HTML in chat)
│   │   ├── week-1-lab-a.md
│   │   ├── week-1-lab-b.md
│   │   ├── week-2-lab-a.md
│   │   ├── week-2-lab-b.md
│   │   ├── week-3-lab-a.md
│   │   ├── week-3-lab-b.md
│   │   ├── week-4-lab-a.md
│   │   └── week-4-capstone.md
│   ├── video-library.md    # YouTube sources + timestamps
│   └── external-links.md   # Reference materials
├── content-agent.md        # Agent for managing course content
├── .env                    # Gemini API key (gitignored)
└── .gitignore
```

## 🎨 Design Philosophy

### Shell App Aesthetic
- **Vercel/Linear-inspired:** Clean, elevated surfaces with stacked shadows
- **Complementary palette:** Cool blue-grays (shell) vs. warm purples (learner workspace)
- **Eat your own dog food:** Shell demonstrates tokens, elevation, and motion taught in labs

### Course Quality Bars
- ✅ Semantic HTML (no div soup)
- ✅ Tokens-first (no hard-coded values)
- ✅ Focus-visible on all interactive elements
- ✅ prefers-reduced-motion fallback
- ✅ ±1px fidelity at breakpoints (768px, 1200px)

## 🎬 Video Library

### Layout Systems
**Layout Land — Jen Simmons**
- [Channel](https://www.youtube.com/layoutland)
- [Playlist](https://www.youtube.com/playlist?list=PLbSquHt1VCf18lllS0C5quAaOcsuMAC70)
- Topics: CSS Grid, intrinsic layout

### SVG Animation
**Interactive Web Animation with SVG — Cassie Evans**
- [Primary](https://www.youtube.com/watch?v=U2zxeKWkgds)
- [Alternate](https://www.youtube.com/watch?v=tTyKSnzwt-A)
- Topics: Masks, filters, easing

### Accessibility
**prefers-reduced-motion — Kevin Powell**
- [Video](https://www.youtube.com/watch?v=hObPr5IfFVU)
- [Article](https://web.dev/articles/prefers-reduced-motion)

## 📚 External Resources

1. [animations.dev](https://animations.dev)
2. [devouringdetails.com](https://devouringdetails.com)
3. [svg.guide](https://svg.guide)
4. [UI Engineering 101](https://maven.com/pixeljanitor/uiengineering-101-for-designers)
5. [Refactoring UI](https://refactoringui.com)
6. [Vercel Design Guidelines](https://vercel.com/design/guidelines)
7. [Rauno's Interfaces](https://interfaces.rauno.me)

## 🛠 Features

### Workbench Shell
- **Collapsible sidebar** — Lab navigation with week accordion
- **Editor tab** — Dual sub-tabs (index.html / styles.css) with localStorage persistence
- **Preview tab** — Iframe rendering with "Run" button
- **Video tab** — YouTube API integration with timestamp jump controls
- **Chat panel** — Step-by-step instructions with solution snippets

### Persistence
Code auto-saves to `localStorage` per lab:
- Key format: `lab-week-X-lab-Y`
- Switching labs preserves your work
- Reset button clears saved state

## 📝 Content Management

### Adding New Content

The `content-agent.md` defines workflows for updating course material:

**Add Video:**
1. Edit `content/video-library.md`
2. Add timestamps and mapping to labs
3. Update `index.html` videoLibrary array if needed

**Add Lab:**
1. Create `content/weeks/week-X-lab-Y.md`
2. Follow template in `content-agent.md`
3. Update `index.html` sidebar navigation

**Add Resource:**
1. Edit `content/external-links.md`
2. Update `index.html` footer if primary source

### Lab Content Template

Each lab markdown uses this structure:
- Step-by-step instructions with `<span class="step-indicator">N</span>`
- Expected outcomes ("You should see X")
- Manual check criteria
- Solution snippets in `<details class="solution-toggle">`
- Video references with timestamps

## 🔐 Environment Variables

The `.env` file stores the Gemini API key (for future AI-assisted features):

```bash
GEMINI_API_KEY=your_key_here
```

**Security:**
- ✅ .env is gitignored
- ✅ Never commit API keys
- ✅ Key stored locally only

## 🎓 Pedagogy

### Codecademy-Style Instructions
- Direct, concise steps
- Active voice: "Add X" not "X should be added"
- Clear expected outcomes
- Manual check criteria

### Progressive Difficulty
- **Week 1:** Tokens, shadows (foundational)
- **Week 2:** Layout systems (structure)
- **Week 3:** Interactive states (behavior)
- **Week 4:** SVG + motion (polish)

### Quality Feedback Loop
1. Write code in Editor
2. Run preview
3. Check against criteria
4. View solution if stuck
5. Refine until ±1px accurate

## 🧪 Testing Checklist

Before shipping a new lab:
- [ ] Solution code uses tokens (no hard-coded values)
- [ ] Expected outcome is visually clear
- [ ] Manual checks are specific (not vague)
- [ ] Focus-visible styles present
- [ ] prefers-reduced-motion fallback included
- [ ] Video references mapped with timestamps

## 🤝 Contributing

To add course material:
1. Follow `content-agent.md` workflows
2. Match existing tone and structure
3. Test solution code in Preview tab
4. Ensure accessibility standards met

## 📄 License

Educational use only. Course content and shell app built for design engineering education.

---

**Built with:**
HTML, CSS, vanilla JavaScript, YouTube API, localStorage
Inspired by Vercel, Linear, Rauno Freiberg, Jhey Tompkins, Mariana Castilho

**Design tokens:**
Near-black backgrounds, alpha-based text, stacked shadows, concentric radii, tasteful motion (160–320ms)
