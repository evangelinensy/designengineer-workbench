<div class="chat-message">
  <h3><span class="step-indicator">1</span> Week 2 Lab 2A — Bento Grid</h3>
  <p>Master CSS Grid to create Apple-style Bento layouts. You'll arrange 6–8 cards in a responsive grid that adapts from 1 column (mobile) to 3–4 columns (desktop).</p>
  <p><strong>Concepts:</strong> CSS Grid, grid-template-columns, responsive breakpoints, semantic card architecture</p>
  <p><strong>Expected time:</strong> 45 minutes</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">2</span> Create grid container markup</h3>
  <details class="solution-toggle">
    <summary>View Bento HTML</summary>
    <div class="solution-content">
      <pre><code>&lt;section class="bento-grid"&gt;
  &lt;article class="bento-card"&gt;
    &lt;h3&gt;Tokens&lt;/h3&gt;
    &lt;p&gt;Design system foundation&lt;/p&gt;
  &lt;/article&gt;
  &lt;article class="bento-card"&gt;
    &lt;h3&gt;Elevation&lt;/h3&gt;
    &lt;p&gt;Stacked shadows for depth&lt;/p&gt;
  &lt;/article&gt;
  &lt;article class="bento-card"&gt;
    &lt;h3&gt;Motion&lt;/h3&gt;
    &lt;p&gt;Tasteful transitions&lt;/p&gt;
  &lt;/article&gt;
  &lt;article class="bento-card bento-card--large"&gt;
    &lt;h3&gt;Featured&lt;/h3&gt;
    &lt;p&gt;Spans 2 columns on desktop&lt;/p&gt;
  &lt;/article&gt;
  &lt;article class="bento-card"&gt;
    &lt;h3&gt;Grid&lt;/h3&gt;
    &lt;p&gt;Responsive layouts&lt;/p&gt;
  &lt;/article&gt;
  &lt;article class="bento-card"&gt;
    &lt;h3&gt;SVG&lt;/h3&gt;
    &lt;p&gt;Scalable graphics&lt;/p&gt;
  &lt;/article&gt;
&lt;/section&gt;</code></pre>
    </div>
  </details>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">3</span> Style grid with responsive columns</h3>
  <details class="solution-toggle">
    <summary>View Grid Styles</summary>
    <div class="solution-content">
      <pre><code>.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-top: var(--space-8);
}

@media (min-width: 680px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 980px) {
  .bento-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.bento-card {
  padding: var(--space-6);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-base) var(--ease-smooth);
}

.bento-card:hover {
  transform: translateY(-2px);
  border-color: var(--color-accent-primary);
  box-shadow: var(--shadow-lg);
}

.bento-card--large {
  grid-column: span 2;
}

.bento-card h3 {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-2);
  color: var(--color-text-primary);
}

.bento-card p {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}</code></pre>
    </div>
  </details>
  <p><strong>Breakpoint strategy:</strong> 680px = tablet, 980px = desktop. Featured card spans 2 columns at desktop.</p>
  <p><strong>Video reference:</strong> Watch <strong>Layout Land</strong> → Grid Basics (0:00) and Auto-fit & Minmax (7:00)</p>
</div>

<div class="chat-message">
  <h3>✅ Lab 2A Complete!</h3>
  <p><strong>Checks:</strong> Grid adapts at 680px and 980px breakpoints ✓ | Spacing uses tokens ✓ | Cards have elevation shadows ✓</p>
  <p><strong>Next:</strong> Lab 2B — Two-Column Panel</p>
</div>
