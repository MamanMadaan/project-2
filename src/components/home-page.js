import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class HomePage extends DDDSuper(LitElement) {
  static properties = {
    active: { type: Boolean, reflect: true }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--ddd-font-primary);
    }

    .home-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%);
      color: var(--ddd-theme-default-white, #ffffff);
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .home-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 1.5px, transparent 1.5px);
      background-size: 50px 50px, 40px 40px;
      animation: float 20s infinite linear;
      pointer-events: none;
    }

    @keyframes float {
      0% { transform: translate(0, 0); }
      100% { transform: translate(-50px, -40px); }
    }

    .hero-section {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: var(--ddd-spacing-10, 2.5rem);
      position: relative;
      z-index: 1;
    }

    .hero-content {
      max-width: var(--ddd-breakpoint-md, 800px);
      position: relative;
      z-index: 2;
    }

    h1 {
      font-size: var(--ddd-font-size-4xl, 3rem);
      margin-bottom: var(--ddd-spacing-4, 1rem);
      font-weight: var(--ddd-font-weight-black, 900);
      line-height: var(--ddd-lh-120, 1.2);
      color: var(--ddd-theme-default-white, #ffffff);
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .subtitle {
      font-size: var(--ddd-font-size-xl, 1.25rem);
      margin-bottom: var(--ddd-spacing-8, 2rem);
      opacity: 0.95;
      line-height: var(--ddd-lh-140, 1.4);
      color: var(--ddd-theme-default-white, #ffffff);
    }

    .buttons {
      display: flex;
      gap: var(--ddd-spacing-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
      border: none;
      border-radius: var(--ddd-radius-rounded);
      font-size: var(--ddd-font-size-base);
      font-weight: var(--ddd-font-weight-bold);
      cursor: pointer;
      transition: all var(--ddd-duration-rapid);
      text-transform: uppercase;
      letter-spacing: var(--ddd-ls-16-lg);
      box-shadow: var(--ddd-boxShadow-sm);
    }

    .btn-primary {
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
      color: var(--ddd-theme-default-white, #ffffff);
      border: 2px solid transparent;
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, #e55a2b 0%, #ff6b35 100%);
      box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.15);
      color: var(--ddd-theme-default-white, #ffffff);
      border: var(--ddd-border-sm, 2px) solid rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.6);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .navigation {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: var(--ddd-spacing-4, 1rem) var(--ddd-spacing-8, 2rem);
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }

    .logo {
      font-size: var(--ddd-font-size-xl, 1.25rem);
      font-weight: var(--ddd-font-weight-black, 900);
      color: var(--ddd-theme-default-white, #ffffff);
    }

    .nav-links {
      display: flex;
      gap: var(--ddd-spacing-8, 2rem);
    }

    .nav-link {
      color: var(--ddd-theme-default-white, #ffffff);
      text-decoration: none;
      font-weight: var(--ddd-font-weight-medium, 500);
      transition: all 0.3s ease;
      padding: var(--ddd-spacing-2, 0.5rem) var(--ddd-spacing-3, 0.75rem);
      border-radius: var(--ddd-radius-sm, 4px);
      border: 2px solid transparent;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      font-size: inherit;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      opacity: 1;
    }
  `;

  _navigate(page, event) {
    if (event) {
      event.preventDefault();
    }
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="home-container">
        <nav class="navigation">
          <div class="logo">PSL</div>
          <div class="nav-links">
            <button class="nav-link" @click="${(e) => this._navigate('home', e)}">Home</button>
            <button class="nav-link" @click="${(e) => this._navigate('schedule', e)}">Schedule</button>
            <button class="nav-link" @click="${(e) => this._navigate('teams', e)}">Teams</button>
            <button class="nav-link" @click="${(e) => this._navigate('stats', e)}">Stats</button>
          </div>
        </nav>

        <div class="hero-section">
          <div class="hero-content">
            <h1>Penn State Soccer League</h1>
            <p class="subtitle">Experience competitive soccer excellence at Penn State University</p>
            <div class="buttons">
              <button class="btn btn-primary" @click="${(e) => this._navigate('schedule', e)}">
                View Schedule
              </button>
              <button class="btn btn-secondary" @click="${(e) => this._navigate('teams', e)}">
                Explore Teams
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);