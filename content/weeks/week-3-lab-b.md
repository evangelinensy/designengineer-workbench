<div class="chat-message">
  <h3><span class="step-indicator">1</span> Week 3 Lab 3B — Non-JS Toggles</h3>
  <p>Build interactive UI without JavaScript using semantic HTML: details/summary for accordions and checkbox/label for toggles.</p>
  <p><strong>Concepts:</strong> Progressive enhancement, semantic HTML, CSS-only interactions</p>
  <p><strong>Expected time:</strong> 30 minutes</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">2</span> Create accordion with details/summary</h3>
  <details class="solution-toggle">
    <summary>View Accordion HTML</summary>
    <div class="solution-content">
      <pre><code>&lt;details class="accordion"&gt;
  &lt;summary class="accordion-trigger"&gt;
    What are design tokens?
  &lt;/summary&gt;
  &lt;div class="accordion-content"&gt;
    &lt;p&gt;Design tokens are named variables that store design decisions: colors, spacing, typography, etc. They enable consistency and global changes.&lt;/p&gt;
  &lt;/div&gt;
&lt;/details&gt;</code></pre>
    </div>
  </details>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">3</span> Style accordion</h3>
  <details class="solution-toggle">
    <summary>View Accordion Styles</summary>
    <div class="solution-content">
      <pre><code>.accordion {
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
}

.accordion-trigger {
  padding: var(--space-4);
  background: var(--color-bg-elevated);
  cursor: pointer;
  list-style: none;
  font-weight: 600;
  color: var(--color-text-primary);
  transition: background var(--duration-fast) var(--ease-smooth);
}

.accordion-trigger:hover {
  background: var(--color-bg-hover);
}

.accordion-trigger:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}

.accordion-trigger::marker {
  display: none; /* Hide default arrow */
}

.accordion-content {
  padding: var(--space-4);
  border-top: 1px solid var(--color-border-subtle);
  animation: slideDown 200ms ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}</code></pre>
    </div>
  </details>
  <p><strong>Why this works:</strong> details/summary is native HTML — no JS required. The browser handles open/close state.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">4</span> Create toggle with checkbox hack</h3>
  <details class="solution-toggle">
    <summary>View Toggle HTML</summary>
    <div class="solution-content">
      <pre><code>&lt;div class="toggle-container"&gt;
  &lt;input type="checkbox" id="darkMode" class="toggle-input"&gt;
  &lt;label for="darkMode" class="toggle-label"&gt;
    &lt;span class="toggle-switch"&gt;&lt;/span&gt;
    Dark Mode
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
    </div>
  </details>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">5</span> Style toggle switch</h3>
  <details class="solution-toggle">
    <summary>View Toggle Styles</summary>
    <div class="solution-content">
      <pre><code>.toggle-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
  user-select: none;
}

.toggle-switch {
  position: relative;
  width: 48px;
  height: 24px;
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border-medium);
  border-radius: 24px;
  transition: all var(--duration-base) var(--ease-smooth);
}

.toggle-switch::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background: var(--color-text-secondary);
  border-radius: 50%;
  transition: all var(--duration-base) var(--ease-smooth);
}

.toggle-input:checked + .toggle-label .toggle-switch {
  background: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
}

.toggle-input:checked + .toggle-label .toggle-switch::before {
  left: 26px;
  background: white;
}

.toggle-input:focus-visible + .toggle-label .toggle-switch {
  box-shadow: var(--shadow-focus);
}</code></pre>
    </div>
  </details>
  <p><strong>Accessible pattern:</strong> Hidden checkbox controls state via :checked. Label acts as click target. Focus-visible ring appears on keyboard navigation.</p>
</div>

<div class="chat-message">
  <h3>✅ Lab 3B Complete!</h3>
  <p><strong>Checks:</strong> Accordion opens/closes without JS ✓ | Toggle slides smoothly ✓ | Both focusable via keyboard ✓</p>
  <p><strong>Next:</strong> Week 4 Lab 4A — Blur Reveal Hero (SVG animation)</p>
</div>
