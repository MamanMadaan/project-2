import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class PslHeader extends DDDSuper(LitElement) {
  static properties = {
    title: { type: String },
    subtitle: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .header {
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
      color: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-8, 2rem);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="70" cy="70" r="0.5" fill="rgba(255,255,255,0.1)"/></svg>');
      animation: float 20s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    .header-content {
      position: relative;
      z-index: 1;
    }

    .logo {
      width: 60px;
      height: 60px;
      margin: 0 auto var(--ddd-spacing-4, 1rem);
      background: var(--ddd-theme-default-white, #ffffff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .logo img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }

    h1 {
      margin: 0;
      font-size: var(--ddd-font-size-3xl, 2.25rem);
      font-weight: var(--ddd-font-weight-black, 900);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      letter-spacing: 1px;
    }

    .subtitle {
      margin: var(--ddd-spacing-2, 0.5rem) 0 0;
      font-size: var(--ddd-font-size-lg, 1.125rem);
      opacity: 0.9;
      font-weight: var(--ddd-font-weight-medium, 500);
    }

    @media (max-width: 768px) {
      .header {
        padding: var(--ddd-spacing-6, 1.5rem);
      }
      
      h1 {
        font-size: var(--ddd-font-size-2xl, 1.875rem);
      }
      
      .subtitle {
        font-size: var(--ddd-font-size-base, 1rem);
      }
    }
  `;

  constructor() {
    super();
    this.title = 'Penn State Soccer League';
    this.subtitle = 'PSL';
  }

  render() {
    return html`
      <header class="header">
        <div class="header-content">
          <div class="logo">
            <img src="./src/assets/psl-logo.svg" alt="PSL Logo" />
          </div>
          <h1>${this.title}</h1>
          <p class="subtitle">${this.subtitle}</p>
        </div>
      </header>
    `;
  }
}

customElements.define('psl-header', PslHeader);