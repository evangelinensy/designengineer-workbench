<div class="chat-message">
  <h3><span class="step-indicator">1</span> Welcome to Week 1 Lab 1B</h3>
  <p>Now you'll apply your tokens to build a premium card component with professional elevation. This lab teaches stacked shadows, concentric inner radii, gradient borders, and focus-visible accessibility.</p>

  <p><strong>What you'll build:</strong></p>
  <ul>
    <li>Card with stacked box-shadows for depth</li>
    <li>Gradient border with inner glow</li>
    <li>Concentric border radii (outer 12px, inner 10px)</li>
    <li>Hover lift with smooth transition</li>
    <li>Focus-visible ring for keyboard navigation</li>
  </ul>

  <p><strong>Expected time:</strong> 30–40 minutes</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">2</span> Add shadow tokens</h3>
  <p>Open <code>styles.css</code> and add elevation shadows to your <code>:root</code> block.</p>

  <details class="solution-toggle">
    <summary>View Shadow Tokens</summary>
    <div class="solution-content">
      <pre><code>/* Elevation Shadows — Stacked for depth */
--shadow-sm:
  0 1px 2px rgba(0, 0, 0, 0.24),
  0 0 0 0.5px rgba(255, 255, 255, 0.04);

--shadow-md:
  0 2px 4px rgba(0, 0, 0, 0.32),
  0 8px 16px rgba(0, 0, 0, 0.24),
  0 0 0 0.5px rgba(255, 255, 255, 0.05);

--shadow-lg:
  0 4px 8px rgba(0, 0, 0, 0.36),
  0 12px 24px rgba(0, 0, 0, 0.28),
  0 24px 48px rgba(0, 0, 0, 0.2),
  0 0 0 0.5px rgba(255, 255, 255, 0.06);

--shadow-focus:
  0 0 0 3px var(--color-accent-glow),
  0 0 0 1px var(--color-accent-primary);</code></pre>
    </div>
  </details>

  <p><strong>Why stacked shadows?</strong> Multiple shadows at different blur radii create realistic depth — just like how light scatters in physical space.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">3</span> Add transition tokens</h3>
  <p>Smooth motion requires tuned easing curves. Add these to <code>:root</code>:</p>

  <details class="solution-toggle">
    <summary>View Transition Tokens</summary>
    <div class="solution-content">
      <pre><code>/* Transitions */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--duration-fast: 160ms;
--duration-base: 240ms;
--duration-slow: 320ms;</code></pre>
    </div>
  </details>

  <p><strong>Pro tip:</strong> <code>--ease-smooth</code> is perfect for elevation changes. <code>--ease-bounce</code> adds playfulness to scale transforms.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">4</span> Create card markup</h3>
  <p>Switch to the Editor tab, select <code>index.html</code>, and add this inside <code>.lab-canvas</code>:</p>

  <details class="solution-toggle">
    <summary>View Card HTML</summary>
    <div class="solution-content">
      <pre><code>&lt;article class="premium-card"&gt;
  &lt;div class="card-glow"&gt;&lt;/div&gt;
  &lt;div class="card-content"&gt;
    &lt;h2 class="card-title"&gt;Premium Component&lt;/h2&gt;
    &lt;p class="card-description"&gt;
      Stacked shadows, gradient borders, and concentric radii
      demonstrate elevation hierarchy.
    &lt;/p&gt;
    &lt;button class="card-button"&gt;Learn More&lt;/button&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>
    </div>
  </details>

  <p><strong>Semantic choice:</strong> <code>&lt;article&gt;</code> indicates self-contained content. The <code>.card-glow</code> div is purely decorative (gradient border effect).</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">5</span> Style the card container</h3>
  <p>In <code>styles.css</code>, create the base card with stacked shadows:</p>

  <details class="solution-toggle">
    <summary>View Card Container Styles</summary>
    <div class="solution-content">
      <pre><code>.premium-card {
  position: relative;
  max-width: 420px;
  background: var(--color-bg-elevated);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  transition: all var(--duration-base) var(--ease-smooth);
  cursor: pointer;
}

.premium-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.4),
    0 16px 32px rgba(0, 0, 0, 0.32),
    0 32px 64px rgba(0, 0, 0, 0.24),
    0 0 0 0.5px rgba(255, 255, 255, 0.08);
}

.premium-card:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}</code></pre>
    </div>
  </details>

  <p><strong>What's happening:</strong></p>
  <ul>
    <li><code>position: relative</code> for absolute-positioned glow layer</li>
    <li><code>overflow: hidden</code> clips the gradient border</li>
    <li>Hover lifts the card -4px with enhanced shadows</li>
    <li>Focus-visible uses our accent color for accessibility</li>
  </ul>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">6</span> Add gradient border glow</h3>
  <p>Create the <code>.card-glow</code> pseudo-border effect:</p>

  <details class="solution-toggle">
    <summary>View Glow Styles</summary>
    <div class="solution-content">
      <pre><code>.card-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--color-accent-primary) 0%,
    transparent 50%,
    var(--color-accent-primary) 100%
  );
  opacity: 0.12;
  pointer-events: none;
  transition: opacity var(--duration-base) var(--ease-smooth);
}

.premium-card:hover .card-glow {
  opacity: 0.24;
}</code></pre>
    </div>
  </details>

  <p><strong>Technique:</strong> Full-size gradient overlay with low opacity creates a subtle border glow. <code>pointer-events: none</code> ensures clicks pass through to the card.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">7</span> Style card content with concentric radii</h3>
  <p>The inner content area should have slightly smaller radii to create a concentric effect:</p>

  <details class="solution-toggle">
    <summary>View Content Styles</summary>
    <div class="solution-content">
      <pre><code>.card-content {
  position: relative;
  z-index: 1;
  padding: var(--space-6);
  background: var(--color-bg-elevated);
  border-radius: calc(var(--radius-lg) - 2px); /* 10px inner */
}

.card-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--space-3);
  color: var(--color-text-primary);
}

.card-description {
  font-size: var(--text-sm);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-5);
}

.card-button {
  padding: var(--space-3) var(--space-5);
  background: var(--color-accent-primary);
  color: var(--color-bg-base);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.card-button:hover {
  background: #b794ff;
  transform: scale(1.02);
}

.card-button:active {
  transform: scale(0.98);
}

.card-button:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}</code></pre>
    </div>
  </details>

  <p><strong>Concentric radii math:</strong> Outer radius 12px, inner <code>calc(12px - 2px)</code> = 10px. This creates a consistent 2px visual gap.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">8</span> Add reduced motion fallback</h3>
  <p>Respect user accessibility preferences by disabling animations for those sensitive to motion:</p>

  <details class="solution-toggle">
    <summary>View Reduced Motion Query</summary>
    <div class="solution-content">
      <pre><code>@media (prefers-reduced-motion: reduce) {
  .premium-card,
  .card-glow,
  .card-button {
    transition-duration: 0.01ms !important;
  }

  .premium-card:hover {
    transform: none;
  }
}</code></pre>
    </div>
  </details>

  <p><strong>Why this matters:</strong> Users with vestibular disorders can experience nausea from motion. This is a WCAG Level AAA requirement.</p>

  <p><strong>Video reference:</strong> Watch the <strong>Reduced Motion</strong> video in the Video tab to see practical examples.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">9</span> Run and check</h3>
  <p>Click <strong>Run ▶</strong> and switch to the Preview tab.</p>

  <p><strong>You should see:</strong></p>
  <ul>
    <li>Card with deep stacked shadow</li>
    <li>Subtle purple gradient glow around edges</li>
    <li>Inner content area with 10px radii (2px smaller than outer)</li>
    <li>Smooth lift on hover (-4px translate)</li>
    <li>Glow intensifies on hover</li>
  </ul>

  <p><strong>Manual checks:</strong></p>
  <ul>
    <li>Card uses <code>var(--shadow-lg)</code>, not hard-coded values</li>
    <li>Hover shadow is visibly deeper than resting state</li>
    <li>Gradient border visible but subtle (not overwhelming)</li>
    <li>Button has focus-visible ring when tabbed to</li>
    <li>Tab to button: does purple ring appear? ✓</li>
  </ul>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">10</span> Fidelity check</h3>
  <p>Open your browser DevTools (F12). Inspect the card:</p>

  <ul>
    <li><strong>Outer radius:</strong> Should be exactly <code>12px</code></li>
    <li><strong>Inner content radius:</strong> Should be exactly <code>10px</code></li>
    <li><strong>Shadow count:</strong> Resting state = 4 shadows, hover = 4 enhanced shadows</li>
    <li><strong>Transition duration:</strong> Should be <code>240ms</code> (var(--duration-base))</li>
  </ul>

  <p>This is ±1px precision in action.</p>
</div>

<div class="chat-message">
  <h3>✅ Lab 1B Complete!</h3>
  <p>You've mastered elevation craft: stacked shadows, gradient borders, concentric radii, tasteful motion, and accessibility.</p>

  <p><strong>Key takeaways:</strong></p>
  <ul>
    <li>Multiple shadows create realistic depth (not just one blur)</li>
    <li>Concentric radii add sophistication (outer - 2px = inner)</li>
    <li>Gradient overlays with low opacity = subtle border glow</li>
    <li>Hover lifts + shadow enhancement = perceived elevation change</li>
    <li>Always include <code>prefers-reduced-motion</code> fallback</li>
    <li>Focus-visible rings are non-negotiable for accessibility</li>
  </ul>

  <p><strong>Up next:</strong> Week 2 Lab 2A — Bento Grid. You'll arrange 6–8 cards in a responsive grid system with proper breakpoints.</p>

  <p>Ready? Select <strong>Lab 2A: Bento Grid</strong> from the sidebar.</p>
</div>
