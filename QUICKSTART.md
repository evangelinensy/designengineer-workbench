# Quick Start Guide

## Launch the Workbench

```bash
# Navigate to project folder
cd /Users/evangelineng/designengineer-workbench

# Start local server
python3 -m http.server 8000

# Open in browser
# Visit: http://localhost:8000
```

## First Steps

1. **Welcome Screen** — You'll see a welcome message when you first load
2. **Select Lab 1A** — Click "Week 1: Foundations" in sidebar, then "Lab 1A: Tokens + Canvas"
3. **Read Instructions** — Chat panel shows step-by-step guidance (scroll to see all 9 steps)
4. **Write Code** — Switch to Editor tab:
   - Click `styles.css` sub-tab
   - Add color tokens, spacing scale, type scale, radii
5. **Run Preview** — Click "Run ▶" button (auto-switches to Preview tab)
6. **Check Video** — Video tab has 3 sources with timestamp buttons

## Key Features

### Collapsible Sidebar
- Click "◀ Labs" to collapse/expand
- Accordion weeks (click to expand/collapse)
- Progress indicators (○ = not started)

### Editor
- **HTML tab** — Learner workspace markup
- **CSS tab** — Token definitions and component styles
- **Auto-save** — Code saved to localStorage per lab
- **Reset button** — Clears saved work, loads starter files

### Preview
- Iframe renders your code
- Click "Run ▶" to update (or refresh manually)
- Isolated environment (doesn't affect shell)

### Video
- **Playlist** — 3 core videos (Layout Land, Cassie SVG, Reduced Motion)
- **Timestamp Buttons** — Click to jump to specific topics
- **Active Embed** — One video shown at a time

## Lab Structure

Each lab follows this pattern:
1. **Overview** — What you'll build, time estimate
2. **Steps** — Numbered instructions with solution snippets
3. **Checks** — Manual verification criteria
4. **Video References** — Relevant timestamps to watch

## Tips

- **Use tokens only** — No hard-coded values (#fff, 16px, etc.)
- **Tab navigation** — Test focus-visible styles by pressing Tab
- **Reduced motion** — Test in DevTools → Rendering → Emulate CSS media
- **Breakpoint testing** — Resize browser to 360px / 768px / 1200px
- **DevTools** — Inspect → Computed to verify pixel-perfect values

## Troubleshooting

**Lab content not loading?**
- Check browser console for fetch errors
- Ensure server is running on port 8000
- Markdown files must be in `content/weeks/`

**Preview blank?**
- Click "Run ▶" to update
- Check for HTML/CSS syntax errors in Editor
- Open DevTools console in Preview iframe

**Video not playing?**
- YouTube API requires internet connection
- Check video IDs are valid
- Some videos may be region-restricted

## Next Steps

After completing all 8 labs:
1. Build your own component library
2. Study [Rauno's interfaces](https://interfaces.rauno.me)
3. Explore [Vercel Guidelines](https://vercel.com/design/guidelines)
4. Contribute new labs (see `content-agent.md`)

---

**Support:** See README.md for full documentation
**Source:** Open `index.html` / `styles.css` to study shell implementation
