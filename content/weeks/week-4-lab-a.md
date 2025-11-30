<div class="chat-message">
  <h3><span class="step-indicator">1</span> Week 4 Lab 4A — Blur Reveal Hero</h3>
  <p>Combine SVG masks, blur filters, and CSS keyframes to create a sophisticated hero section with a soft reveal animation.</p>
  <p><strong>Concepts:</strong> SVG filters, CSS masks, keyframe choreography, animation-delay</p>
  <p><strong>Expected time:</strong> 60 minutes</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">2</span> Create hero markup with SVG</h3>
  <details class="solution-toggle">
    <summary>View Hero HTML</summary>
    <div class="solution-content">
      <pre><code>&lt;section class="blur-hero"&gt;
  &lt;svg class="blur-mask" width="0" height="0"&gt;
    &lt;defs&gt;
      &lt;filter id="blur-filter"&gt;
        &lt;feGaussianBlur in="SourceGraphic" stdDeviation="20" /&gt;
      &lt;/filter&gt;
    &lt;/defs&gt;
  &lt;/svg&gt;

  &lt;div class="hero-content"&gt;
    &lt;h1 class="hero-title"&gt;Design Engineering&lt;/h1&gt;
    &lt;p class="hero-subtitle"&gt;Where craft meets code&lt;/p&gt;
  &lt;/div&gt;

  &lt;div class="blur-plane"&gt;&lt;/div&gt;
&lt;/section&gt;</code></pre>
    </div>
  </details>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">3</span> Style hero with blur reveal</h3>
  <details class="solution-toggle">
    <summary>View Hero Styles</summary>
    <div class="solution-content">
      <pre><code>.blur-hero {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0b 0%, #1a1a1d 100%);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  animation: fadeInUp 800ms cubic-bezier(0.4, 0, 0.2, 1) both;
}

.hero-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  margin-bottom: var(--space-3);
  background: linear-gradient(135deg, white 0%, var(--color-accent-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  animation: fadeInUp 800ms 200ms cubic-bezier(0.4, 0, 0.2, 1) both;
}

.blur-plane {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    var(--color-accent-primary) 0%,
    transparent 70%
  );
  opacity: 0.2;
  filter: url(#blur-filter);
  animation: blurReveal 1200ms 400ms cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blurReveal {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 0.2;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-content,
  .hero-subtitle,
  .blur-plane {
    animation: none !important;
  }
}</code></pre>
    </div>
  </details>
  <p><strong>Choreography:</strong> Title (0ms) → Subtitle (200ms) → Blur plane (400ms). Staggered delays create flow.</p>
  <p><strong>Video reference:</strong> Watch <strong>Cassie Evans</strong> → Masks & Filters (3:40) and Easing Functions (9:00)</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">4</span> Test and refine timing</h3>
  <p>Run the preview. The hero should:</p>
  <ul>
    <li>Title fades in and rises (0–800ms)</li>
    <li>Subtitle follows 200ms later</li>
    <li>Blur plane emerges at 400ms with soft scale</li>
  </ul>
  <p>Adjust <code>animation-delay</code> values to taste. Sweet spot: 100–300ms between elements.</p>
</div>

<div class="chat-message">
  <h3>✅ Lab 4A Complete!</h3>
  <p><strong>Key takeaways:</strong> SVG filters integrate with CSS | Staggered delays create choreography | Reduced motion disables all animations | Blur + opacity = atmospheric depth</p>
  <p><strong>Next:</strong> Capstone — ±1px Fidelity Challenge</p>
</div>
