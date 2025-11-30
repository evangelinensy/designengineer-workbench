<div class="chat-message">
  <h3><span class="step-indicator">1</span> Week 3 Lab 3A — Accessible States</h3>
  <p>Master interactive states: hover, focus-visible, active. Learn when to use each and how to make them accessible for all users.</p>
  <p><strong>Concepts:</strong> :hover vs :focus-visible, press states, transition timing, prefers-reduced-motion</p>
  <p><strong>Expected time:</strong> 35 minutes</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">2</span> Create interactive button</h3>
  <details class="solution-toggle">
    <summary>View Button HTML</summary>
    <div class="solution-content">
      <pre><code>&lt;button class="state-button"&gt;
  Interactive States Demo
&lt;/button&gt;</code></pre>
    </div>
  </details>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">3</span> Implement all states</h3>
  <details class="solution-toggle">
    <summary>View State Styles</summary>
    <div class="solution-content">
      <pre><code>.state-button {
  padding: var(--space-4) var(--space-6);
  background: var(--color-accent-primary);
  color: var(--color-bg-base);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover: Lift + brighten */
.state-button:hover {
  transform: translateY(-2px);
  background: #b794ff;
  box-shadow: var(--shadow-lg);
}

/* Focus-visible: Ring (keyboard navigation) */
.state-button:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}

/* Active: Press down */
.state-button:active {
  transform: translateY(1px);
  box-shadow: var(--shadow-sm);
}

/* Reduced motion fallback */
@media (prefers-reduced-motion: reduce) {
  .state-button {
    transition-duration: 0.01ms !important;
  }

  .state-button:hover,
  .state-button:active {
    transform: none;
  }
}</code></pre>
    </div>
  </details>
  <p><strong>State hierarchy:</strong> Resting → Hover (lift) → Active (press) → Focus-visible (ring). Never combine :focus with :hover; always use :focus-visible.</p>
  <p><strong>Timing:</strong> 200ms feels instant, 300ms+ feels laggy for button presses.</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">4</span> Test keyboard navigation</h3>
  <p>Click Run, then press <kbd>Tab</kbd> to focus the button. You should see a purple ring, not the browser's default blue outline.</p>
  <p>Click the button with your mouse: does it press down 1px? ✓</p>
</div>

<div class="chat-message">
  <h3>✅ Lab 3A Complete!</h3>
  <p><strong>Key takeaways:</strong> :hover is for mice, :focus-visible is for keyboards | :active is momentary press feedback | Durations 160–300ms feel responsive | Always test with Tab navigation</p>
  <p><strong>Next:</strong> Lab 3B — Non-JS Toggles</p>
</div>
