import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class NavigationHeader extends DDDSuper(LitElement) {
  static properties = {
    activePage: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      font-family: var(--ddd-font-primary);
    }

    .nav-container {
      background: rgba(0, 63, 127, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--ddd-spacing-3, 0.75rem) var(--ddd-spacing-6, 2rem);
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: var(--ddd-spacing-3, 0.75rem);
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .logo-section:hover {
      transform: scale(1.05);
    }

    .logo {
      width: 40px;
      height: 40px;
      
      background: var(--ddd-theme-default-white, #ffffff);
      padding: 4px;
    }

    .logo img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .brand-text {
      color: var(--ddd-theme-default-white, #ffffff);
      font-size: var(--ddd-font-size-lg, 1.125rem);
      font-weight: var(--ddd-font-weight-black, 900);
      letter-spacing: 0.5px;
    }

    .nav-links {
      display: flex;
      gap: var(--ddd-spacing-6, 2rem);
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-weight: var(--ddd-font-weight-medium, 500);
      font-size: var(--ddd-font-size-sm, 0.875rem);
      padding: var(--ddd-spacing-2, 0.5rem) var(--ddd-spacing-3, 0.75rem);
      
      transition: all 0.3s ease;
      position: relative;
      cursor: pointer;
    }

    .nav-link:hover {
      color: var(--ddd-theme-default-white, #ffffff);
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }

    .nav-link.active {
      color: var(--ddd-theme-default-white, #ffffff);
      background: rgba(255, 255, 255, 0.2);
      font-weight: var(--ddd-font-weight-bold, 600);
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: #fbbf24;
      
    }

    .mobile-menu-button {
      display: none;
      background: none;
      border: none;
      color: var(--ddd-theme-default-white, #ffffff);
      font-size: 1.5rem;
      cursor: pointer;
      padding: var(--ddd-spacing-2, 0.5rem);
      
      transition: background 0.3s ease;
    }

    .mobile-menu-button:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .mobile-nav {
      display: none;
      background: #003F7F;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: var(--ddd-spacing-4, 1rem);
    }

    .mobile-nav.open {
      display: block;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      gap: var(--ddd-spacing-3, 0.75rem);
    }

    .mobile-nav-link {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-weight: var(--ddd-font-weight-medium, 500);
      padding: var(--ddd-spacing-3, 0.75rem);
      
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .mobile-nav-link:hover,
    .mobile-nav-link.active {
      color: var(--ddd-theme-default-white, #ffffff);
      background: rgba(255, 255, 255, 0.1);
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .nav-content {
        padding: var(--ddd-spacing-3, 0.75rem) var(--ddd-spacing-4, 1rem);
      }

      .nav-links {
        display: none;
      }

      .mobile-menu-button {
        display: block;
      }

      .brand-text {
        font-size: var(--ddd-font-size-base, 1rem);
      }
    }

    @media (max-width: 480px) {
      .logo {
        width: 32px;
        height: 32px;
      }

      .brand-text {
        font-size: var(--ddd-font-size-sm, 0.875rem);
      }
    }
  `;

  constructor() {
    super();
    this.activePage = 'home';
    this.mobileMenuOpen = false;
  }

  _navigate(page, event) {
    event?.preventDefault();
    this.mobileMenuOpen = false;
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page },
      bubbles: true,
      composed: true
    }));
  }

  _toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.requestUpdate();
  }

  render() {
    const navItems = [
      { key: 'home', label: 'Home' },
      { key: 'schedule', label: 'Schedule' },
      { key: 'teams', label: 'Teams' },
      { key: 'stats', label: 'Stats' },
      { key: 'championship', label: 'Championship' },
      { key: 'register', label: 'Register' }
    ];

    return html`
      <div class="nav-container">
        <div class="nav-content">
          <div class="logo-section" @click="${(e) => this._navigate('home', e)}">
            <div class="logo">
              <img src="./src/assets/psl-logo.svg" alt="PSL Logo" />
            </div>
            <div class="brand-text">PSL</div>
          </div>

          <nav class="nav-links">
            ${navItems.map(item => html`
              <a 
                href="#" 
                class="nav-link ${this.activePage === item.key ? 'active' : ''}"
                @click="${(e) => this._navigate(item.key, e)}">
                ${item.label}
              </a>
            `)}
          </nav>

          <button class="mobile-menu-button" @click="${this._toggleMobileMenu}">
            ☰
          </button>
        </div>

        <div class="mobile-nav ${this.mobileMenuOpen ? 'open' : ''}">
          <div class="mobile-nav-links">
            ${navItems.map(item => html`
              <a 
                href="#" 
                class="mobile-nav-link ${this.activePage === item.key ? 'active' : ''}"
                @click="${(e) => this._navigate(item.key, e)}">
                ${item.label}
              </a>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('navigation-header', NavigationHeader);
