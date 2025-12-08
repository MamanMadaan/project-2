import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class StatCard extends DDDSuper(LitElement) {
  static properties = {
    icon: { type: String },
    number: { type: String },
    label: { type: String },
    color: { type: String },
    trend: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .stat-card {
      background: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-6, 2rem);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
      transition: all 0.3s ease;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .stat-icon {
      font-size: 3rem;
      margin-bottom: var(--ddd-spacing-3, 0.75rem);
      display: block;
    }

    .stat-number {
      font-size: var(--ddd-font-size-3xl, 2.25rem);
      font-weight: var(--ddd-font-weight-black, 900);
      color: var(--ddd-theme-default-coalyGray, #333333);
      margin: 0;
      line-height: 1;
    }

    .stat-label {
      font-size: var(--ddd-font-size-base, 1rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
      margin: var(--ddd-spacing-2, 0.5rem) 0 0;
      font-weight: var(--ddd-font-weight-medium, 500);
    }

    .trend {
      margin-top: var(--ddd-spacing-3, 0.75rem);
      font-size: var(--ddd-font-size-sm, 0.875rem);
      padding: var(--ddd-spacing-1, 0.25rem) var(--ddd-spacing-3, 0.75rem);
      font-weight: var(--ddd-font-weight-medium, 500);
    }

    .trend-up {
      background: #dcfce7;
      color: #166534;
    }

    .trend-down {
      background: #fee2e2;
      color: #dc2626;
    }

    .trend-stable {
      background: #e2e8f0;
      color: #64748b;
    }
  `;

  constructor() {
    super();
    this.icon = '';
    this.number = '0';
    this.label = 'Statistic';
    this.color = '#3b82f6';
    this.trend = '';
  }

  render() {
    return html`
      <div class="stat-card" style="--card-color: ${this.color}">
        <div class="stat-icon">${this.icon}</div>
        <div class="stat-number">${this.number}</div>
        <div class="stat-label">${this.label}</div>
        ${this.trend ? html`
          <div class="trend trend-${this.trend}">
            ${this.trend === 'up' ? 'Trending Up' :
              this.trend === 'down' ? 'Trending Down' :
              'Stable'}
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('stat-card', StatCard);
