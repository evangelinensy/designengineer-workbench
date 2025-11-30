<div class="chat-message">
  <h3>🏆 Capstone: ±1px Fidelity Challenge</h3>
  <p>Combine everything you've learned to build a complete landing page that matches design specs within ±1px at 768px and 1200px breakpoints.</p>
  <p><strong>Expected time:</strong> 2–3 hours</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">1</span> Requirements</h3>
  <p>Build a landing page with:</p>
  <ul>
    <li>Hero section (blur reveal from Lab 4A)</li>
    <li>Bento grid (6–8 cards from Lab 2A)</li>
    <li>Premium card showcase (Lab 1B)</li>
    <li>Two-column feature breakdown (Lab 2B)</li>
    <li>Interactive FAQ accordion (Lab 3B)</li>
  </ul>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">2</span> Rubric (100 points)</h3>

  <p><strong>Tokens & Organization (20pts)</strong></p>
  <ul>
    <li>All values use tokens (no hard-coded colors/spacing) — 10pts</li>
    <li>CSS organized: tokens → utilities → components — 10pts</li>
  </ul>

  <p><strong>Layout Precision (25pts)</strong></p>
  <ul>
    <li>Breakpoints at exactly 768px and 1200px — 10pts</li>
    <li>Grid columns match spec (1/2/4 columns) — 10pts</li>
    <li>Spacing consistent (all gaps use tokens) — 5pts</li>
  </ul>

  <p><strong>Elevation & Motion (25pts)</strong></p>
  <ul>
    <li>Stacked shadows on all elevated surfaces — 10pts</li>
    <li>Hover states with smooth transitions (200–300ms) — 10pts</li>
    <li>prefers-reduced-motion fallback present — 5pts</li>
  </ul>

  <p><strong>Accessibility (20pts)</strong></p>
  <ul>
    <li>Focus-visible rings on all interactive elements — 10pts</li>
    <li>Semantic HTML (headings, articles, sections) — 5pts</li>
    <li>Color contrast meets WCAG AA (4.5:1 minimum) — 5pts</li>
  </ul>

  <p><strong>Polish & Craft (10pts)</strong></p>
  <ul>
    <li>Concentric radii on nested elements — 5pts</li>
    <li>Tasteful animation choreography (staggered delays) — 5pts</li>
  </ul>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">3</span> Submission checklist</h3>
  <ul>
    <li>[ ] Screenshot at 360px (mobile)</li>
    <li>[ ] Screenshot at 768px (tablet)</li>
    <li>[ ] Screenshot at 1200px (desktop)</li>
    <li>[ ] DevTools audit: no hard-coded values</li>
    <li>[ ] Lighthouse accessibility score 95+</li>
    <li>[ ] Tab through entire page: all focus rings visible</li>
    <li>[ ] Test with prefers-reduced-motion enabled</li>
  </ul>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">4</span> Starter scaffold</h3>
  <details class="solution-toggle">
    <summary>View Capstone Scaffold</summary>
    <div class="solution-content">
      <pre><code>&lt;div class="landing-page"&gt;
  &lt;!-- Hero (Lab 4A pattern) --&gt;
  &lt;section class="blur-hero"&gt;
    &lt;!-- ... --&gt;
  &lt;/section&gt;

  &lt;!-- Bento Grid (Lab 2A pattern) --&gt;
  &lt;section class="bento-grid"&gt;
    &lt;!-- ... --&gt;
  &lt;/section&gt;

  &lt;!-- Premium Cards (Lab 1B pattern) --&gt;
  &lt;section class="premium-showcase"&gt;
    &lt;!-- ... --&gt;
  &lt;/section&gt;

  &lt;!-- Two-Column Feature (Lab 2B pattern) --&gt;
  &lt;section class="two-column-panel"&gt;
    &lt;!-- ... --&gt;
  &lt;/section&gt;

  &lt;!-- FAQ Accordion (Lab 3B pattern) --&gt;
  &lt;section class="faq-section"&gt;
    &lt;!-- ... --&gt;
  &lt;/section&gt;
&lt;/div&gt;</code></pre>
    </div>
  </details>
  <p>Reuse your lab code! The capstone tests composition, not reinvention.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">5</span> Pixel-perfect workflow</h3>
  <p>Use DevTools to verify measurements:</p>
  <ol>
    <li>Right-click element → Inspect</li>
    <li>Computed tab → Check width, padding, margin</li>
    <li>Compare against spec: within ±1px? ✓</li>
  </ol>
  <p><strong>Common issues:</strong></p>
  <ul>
    <li>Box-sizing not set (always use <code>box-sizing: border-box</code>)</li>
    <li>Margins collapsing unexpectedly</li>
    <li>Line-height adding extra space</li>
  </ul>
</div>

<div class="chat-message">
  <h3>🎉 Capstone Complete!</h3>
  <p>You've mastered:</p>
  <ul>
    <li>Token-first design systems</li>
    <li>Stacked shadow elevation</li>
    <li>CSS Grid and Flexbox mastery</li>
    <li>Accessible interactive states</li>
    <li>SVG filters and CSS animations</li>
    <li>±1px precision at multiple breakpoints</li>
  </ul>

  <p><strong>What's next?</strong></p>
  <ul>
    <li>Explore <a href="https://interfaces.rauno.me" target="_blank">Rauno's interfaces</a> for advanced motion</li>
    <li>Study <a href="https://vercel.com/design/guidelines" target="_blank">Vercel's guidelines</a> for production patterns</li>
    <li>Dive into <a href="https://svg.guide" target="_blank">SVG Guide</a> for complex graphics</li>
  </ul>

  <p>You're now equipped to implement pixel-perfect, accessible, motion-rich interfaces without JavaScript frameworks. Go build something extraordinary.</p>
</div>
