<div class="chat-message">
  <h3><span class="step-indicator">1</span> Welcome to Week 1 Lab 1A</h3>
  <p>In this lab, you'll implement design tokens and create a dark canvas. Tokens are the foundation of any design system — they enforce consistency and make global changes effortless.</p>

  <p><strong>What you'll build:</strong></p>
  <ul>
    <li>Complete token system (color, spacing, typography, radii)</li>
    <li>Dark canvas with proper contrast</li>
    <li>Rem-based type scale</li>
  </ul>

  <p><strong>Expected time:</strong> 20–30 minutes</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">2</span> Open your editor</h3>
  <p>Switch to the <strong>Editor</strong> tab and select <code>styles.css</code>.</p>

  <p>You should see an empty <code>:root</code> block with comments indicating where tokens will go.</p>

  <p><strong>Pro tip:</strong> The shell app you're using right now demonstrates these exact patterns. Check out how the sidebar uses elevation shadows and the tabs use focus-visible rings.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">3</span> Implement color tokens</h3>
  <p>Add these color tokens inside the <code>:root</code> block. These create a sophisticated dark theme with proper elevation hierarchy.</p>

  <details class="solution-toggle">
    <summary>View Color Tokens</summary>
    <div class="solution-content">
      <pre><code>/* Color Palette — Dark Theme */
--color-bg-base: #0a0a0b;
--color-bg-elevated: #121214;
--color-bg-subtle: #1a1a1d;
--color-bg-hover: #232327;

--color-border-subtle: rgba(255, 255, 255, 0.06);
--color-border-medium: rgba(255, 255, 255, 0.1);

--color-text-primary: rgba(255, 255, 255, 0.95);
--color-text-secondary: rgba(255, 255, 255, 0.65);
--color-text-tertiary: rgba(255, 255, 255, 0.45);

--color-accent-primary: #a78bfa;
--color-accent-glow: rgba(167, 139, 250, 0.15);

--color-success: #52c41a;
--color-warning: #faad14;
--color-danger: #ff4d4f;</code></pre>
    </div>
  </details>

  <p><strong>Why these values?</strong></p>
  <ul>
    <li>Near-black base (<code>#0a0a0b</code>) reduces eye strain vs pure black</li>
    <li>Subtle elevation steps create depth without harsh contrast</li>
    <li>Alpha-based text colors maintain readability across backgrounds</li>
    <li>Purple accent differentiates learner workspace from shell (which uses blue)</li>
  </ul>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">4</span> Add spacing scale</h3>
  <p>Implement a 4px-based spacing system. This creates rhythm and prevents arbitrary gaps.</p>

  <details class="solution-toggle">
    <summary>View Spacing Tokens</summary>
    <div class="solution-content">
      <pre><code>/* Spacing Scale (4px base) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */</code></pre>
    </div>
  </details>

  <p><strong>Usage pattern:</strong> Always use tokens. Instead of <code>padding: 12px</code>, write <code>padding: var(--space-3)</code>.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">5</span> Create type scale</h3>
  <p>Use a 1.125 ratio (major second) for harmonious text sizing.</p>

  <details class="solution-toggle">
    <summary>View Typography Tokens</summary>
    <div class="solution-content">
      <pre><code>/* Type Scale (1.125 ratio — major second) */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.266rem;     /* ~20px */
--text-2xl: 1.424rem;    /* ~23px */
--text-3xl: 1.602rem;    /* ~26px */

/* Font Families */
--font-sans: -apple-system, system-ui, sans-serif;
--font-mono: "SF Mono", "Consolas", monospace;</code></pre>
    </div>
  </details>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">6</span> Add radius tokens</h3>
  <p>Consistent corner radii create visual cohesion.</p>

  <details class="solution-toggle">
    <summary>View Radius Tokens</summary>
    <div class="solution-content">
      <pre><code>/* Border Radii */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;</code></pre>
    </div>
  </details>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">7</span> Apply tokens to body</h3>
  <p>Update the <code>body</code> rule to use your new tokens:</p>

  <details class="solution-toggle">
    <summary>View Body Styles</summary>
    <div class="solution-content">
      <pre><code>body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.6;
  background: var(--color-bg-base);
  color: var(--color-text-primary);
  min-height: 100vh;
  padding: var(--space-6);
}</code></pre>
    </div>
  </details>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">8</span> Run and preview</h3>
  <p>Click the <strong>Run ▶</strong> button in the Editor tab.</p>

  <p><strong>You should see:</strong></p>
  <ul>
    <li>Dark canvas background (<code>#0a0a0b</code>)</li>
    <li>White header text with proper contrast</li>
    <li>Consistent spacing throughout</li>
  </ul>

  <p><strong>Manual checks:</strong></p>
  <ul>
    <li>Background color matches <code>--color-bg-base</code></li>
    <li>Text is readable (high contrast)</li>
    <li>No hard-coded pixel values in body styles</li>
  </ul>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">9</span> Video reference</h3>
  <p>Want to dive deeper into design tokens and systems thinking?</p>

  <p>Check out the <strong>Video</strong> tab and watch:</p>
  <ul>
    <li><strong>Refactoring UI</strong> principles (external link in footer)</li>
    <li><strong>Vercel Design Guidelines</strong> for production token patterns</li>
  </ul>
</div>

<div class="chat-message">
  <h3>✅ Lab 1A Complete!</h3>
  <p>You've built a token-first foundation. In Lab 1B, you'll use these tokens to create a premium card with stacked shadows and gradient borders.</p>

  <p><strong>Key takeaways:</strong></p>
  <ul>
    <li>Tokens enforce consistency and enable global changes</li>
    <li>Near-black backgrounds reduce eye strain</li>
    <li>Mathematical scales (spacing, type) create visual harmony</li>
    <li>Always use <code>var(--token-name)</code>, never hard-coded values</li>
  </ul>

  <p>Ready? Select <strong>Lab 1B: Premium Card</strong> from the sidebar.</p>
</div>
