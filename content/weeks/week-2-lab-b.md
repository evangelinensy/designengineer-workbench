<div class="chat-message">
  <h3><span class="step-indicator">1</span> Week 2 Lab 2B — Two-Column Panel</h3>
  <p>Build a dashboard-style layout with a fixed-width navigator rail and flexible content panel. Add severity badges and ensure proper focus styles.</p>
  <p><strong>Concepts:</strong> Flexbox vs Grid, fixed + flexible columns, badge components, contrast ratios</p>
  <p><strong>Expected time:</strong> 40 minutes</p>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">2</span> Create two-column markup</h3>
  <details class="solution-toggle">
    <summary>View Panel HTML</summary>
    <div class="solution-content">
      <pre><code>&lt;div class="two-column-panel"&gt;
  &lt;aside class="navigator-rail"&gt;
    &lt;nav&gt;
      &lt;a href="#" class="nav-link active"&gt;Dashboard&lt;/a&gt;
      &lt;a href="#" class="nav-link"&gt;Alerts &lt;span class="badge badge--danger"&gt;3&lt;/span&gt;&lt;/a&gt;
      &lt;a href="#" class="nav-link"&gt;Settings&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/aside&gt;

  &lt;main class="content-panel"&gt;
    &lt;h2&gt;System Status&lt;/h2&gt;
    &lt;div class="status-grid"&gt;
      &lt;div class="status-card"&gt;
        &lt;span class="badge badge--success"&gt;Healthy&lt;/span&gt;
        &lt;p&gt;API responses within 200ms&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="status-card"&gt;
        &lt;span class="badge badge--warning"&gt;Degraded&lt;/span&gt;
        &lt;p&gt;Database connections at 85%&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/main&gt;
&lt;/div&gt;</code></pre>
    </div>
  </details>
</div>

<div class="chat-message">
  <h3><span class="step-indicator">3</span> Style layout and badges</h3>
  <details class="solution-toggle">
    <summary>View Panel Styles</summary>
    <div class="solution-content">
      <pre><code>.two-column-panel {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 0;
  min-height: 500px;
}

.navigator-rail {
  background: var(--color-bg-subtle);
  border-right: 1px solid var(--color-border-subtle);
  padding: var(--space-5);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3);
  color: var(--color-text-secondary);
  text-decoration: none;
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-2);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.nav-link:hover {
  background: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.nav-link:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}

.nav-link.active {
  background: var(--color-accent-dim);
  color: var(--color-accent-primary);
}

.badge {
  padding: var(--space-1) var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  border-radius: var(--radius-sm);
  line-height: 1;
}

.badge--success {
  background: rgba(82, 196, 26, 0.15);
  color: var(--color-success);
}

.badge--warning {
  background: rgba(250, 173, 20, 0.15);
  color: var(--color-warning);
}

.badge--danger {
  background: rgba(255, 77, 79, 0.15);
  color: var(--color-danger);
}

.content-panel {
  padding: var(--space-8);
}</code></pre>
    </div>
  </details>
  <p><strong>Contrast check:</strong> Badge text must have 4.5:1 ratio minimum. Test in DevTools.</p>
</div>

<div class="chat-message">
  <h3>✅ Lab 2B Complete!</h3>
  <p><strong>Checks:</strong> Navigator rail 240px wide ✓ | Focus-visible styles present ✓ | Badge contrast meets WCAG AA ✓</p>
  <p><strong>Next:</strong> Week 3 Lab 3A — Accessible States</p>
</div>
