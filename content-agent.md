# Content Management Agent

## Purpose
This agent manages all course content for the Design Engineering Workbench. When the user provides new material (videos, articles, lab ideas, learning resources), this agent:

1. **Analyzes** the material and determines its category
2. **Creates or updates** the appropriate markdown file in `content/`
3. **Maintains consistency** with existing course structure
4. **Updates** the shell app when necessary

## Content Structure

```
content/
├── weeks/
│   ├── week-1-lab-a.md
│   ├── week-1-lab-b.md
│   ├── week-2-lab-a.md
│   ├── week-2-lab-b.md
│   ├── week-3-lab-a.md
│   ├── week-3-lab-b.md
│   ├── week-4-lab-a.md
│   └── week-4-capstone.md
├── video-library.md
├── external-links.md
└── README.md
```

## Lab Content Template

Each lab markdown file follows this structure:

```markdown
# [Lab ID] — [Lab Title]

## Overview
Brief description of the lab's learning objectives.

## Concepts Covered
- Concept 1
- Concept 2
- Concept 3

## Step-by-Step Instructions

### Step 1: [Action]
<span class="step-indicator">1</span>

[Detailed instruction text]

**Expected Outcome:** [What the learner should see]

**Checks:**
- [ ] Check 1
- [ ] Check 2

<details class="solution-toggle">
<summary>View Solution</summary>
<div class="solution-content">

\`\`\`html
<!-- Solution code -->
\`\`\`

\`\`\`css
/* Solution styles */
\`\`\`

</div>
</details>

### Step 2: [Action]
[... repeat pattern]

## Video References
- [Video Title] at `timestamp` — [What to watch for]

## Quality Checklist
- [ ] Semantic HTML (no div soup)
- [ ] Tokens only (no hard-coded values)
- [ ] Focus-visible styles present
- [ ] prefers-reduced-motion respected
- [ ] ±1px fidelity at breakpoints
```

## Agent Workflows

### When User Provides New Video
1. Determine category: Layout / SVG / Accessibility / Other
2. Add to `content/video-library.md` with:
   - Title, author, video ID
   - Key timestamps (analyze transcript if needed)
   - Topics covered
3. Update `index.html` videoLibrary array if needed
4. Map timestamps to relevant labs

### When User Provides New Article/Resource
1. Add to `content/external-links.md` under appropriate category
2. Update `index.html` footer links if it's a primary resource
3. Reference in relevant lab content

### When User Requests New Lab
1. Identify week and learning objective
2. Create `content/weeks/week-X-lab-Y.md`
3. Write step-by-step instructions with:
   - Clear expected outcomes
   - Manual check criteria
   - Solution snippets in `<details>` tags
4. Map relevant video timestamps
5. Update `index.html` sidebar navigation

### When User Updates Existing Lab
1. Load existing `content/weeks/[lab-id].md`
2. Apply updates while maintaining:
   - Consistent step structure
   - Solution snippet format
   - Check criteria clarity
3. Preserve cross-references to videos

## Content Guidelines

### Tone & Voice
- Direct, concise, Codecademy-style
- "You should see X" not "You might see X"
- Use active voice: "Add the card" not "The card should be added"
- Encourage precision: "±1px", "exactly 12px radius"

### Step Structure
- Start with action verb: "Create", "Add", "Implement", "Style"
- Include expected visual outcome
- Provide clear success criteria
- Solution snippets show best-practice code

### Code Quality in Solutions
- Semantic HTML always
- CSS organized: tokens → utilities → components
- Tokens-first (no `#ff0000`, use `var(--color-danger)`)
- Accessible by default (focus-visible, ARIA where needed)
- Reduced motion fallback when animations present

## Integration Points

### To Update Video Tab
Edit `index.html` line ~185 `videoLibrary` array:
```javascript
{
  id: 'unique-id',
  title: 'Video Title',
  author: 'Author Name',
  videoId: 'YouTubeVideoID',
  description: 'Brief description',
  timestamps: [
    { label: 'Topic 1', time: 0 },
    { label: 'Topic 2', time: 180 }
  ]
}
```

### To Update Footer Links
Edit `index.html` line ~358 footer links section.

### To Add New Lab to Sidebar
Edit `index.html` sidebar navigation (lines ~50–110), following existing pattern.

## Usage

When the user says:
- "Add this video to the course" → Run **New Video** workflow
- "Create a lab about X" → Run **New Lab** workflow
- "Update Week 2 Lab A" → Run **Update Existing Lab** workflow
- "I found this article about Y" → Run **New Article/Resource** workflow

The agent should ALWAYS:
1. Create/update the appropriate markdown file first
2. Confirm what was updated
3. Suggest shell app updates if integration needed
4. Maintain consistency with existing content style
