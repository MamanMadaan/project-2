import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `psl-header`
 * Header component with navigation for Penn State Soccer League
 * 
 * @element psl-header
 */
export class PslHeader extends DDDSuper(LitElement) {
  static get tag() {
    return "psl-header";
  }

  static get properties() {
    return {
      ...super.properties,
      currentRoute: { type: String },
      mobileMenuOpen: { type: Boolean }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .header {
        background: linear-gradient(135deg, var(--ddd-theme-default-navy, #1e40af) 0%, var(--ddd-theme-default-skyBlue, #3b82f6) 100%);
        color: var(--ddd-theme-default-white, #ffffff);
        padding: var(--ddd-spacing-4, 1rem) var(--ddd-spacing-6, 2rem);
        box-shadow: var(--ddd-boxShadow-2, 0 4px 8px rgba(0,0,0,0.15));
      }

      .header-container {
        max-width: var(--ddd-breakpoint-lg, 1200px);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo-section {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-3, 0.75rem);
      }

      .logo {
        width: 50px;
        height: 50px;
        
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--ddd-theme-default-white, #ffffff);
        padding: var(--ddd-spacing-1, 0.25rem);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .site-title {
        font-size: var(--ddd-font-size-xl, 1.25rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        margin: 0;
      }

      .nav {
        display: flex;
        gap: var(--ddd-spacing-2, 0.5rem);
      }

      .nav-link {
        padding: var(--ddd-spacing-2, 0.5rem) var(--ddd-spacing-4, 1rem);
        text-decoration: none;
        color: var(--ddd-theme-default-white, #ffffff);
        
        transition: all 0.3s ease;
        font-weight: var(--ddd-font-weight-medium, 500);
        cursor: pointer;
        border: none;
        background: transparent;
        font-size: var(--ddd-font-size-base, 1rem);
      }

      .nav-link:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .nav-link.active {
        background: var(--ddd-theme-default-white, #ffffff);
        color: var(--ddd-theme-default-navy, #1e40af);
      }

      .mobile-menu-toggle {
        display: none;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: var(--ddd-theme-default-white, #ffffff);
        font-size: var(--ddd-font-size-xl, 1.25rem);
        cursor: pointer;
        padding: var(--ddd-spacing-3, 0.75rem);
        transition: all 0.3s ease;
        min-width: 44px;
        min-height: 44px;
        align-items: center;
        justify-content: center;
      }

      .mobile-menu-toggle:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
      }

      .mobile-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--ddd-theme-default-navy, #1e40af);
        flex-direction: column;
        padding: var(--ddd-spacing-4, 1rem);
        box-shadow: var(--ddd-boxShadow-2, 0 4px 8px rgba(0,0,0,0.15));
      }

      .mobile-nav.open {
        display: flex;
      }

      @media (max-width: 768px) {
        .header-container {
          position: relative;
        }
        
        .nav {
          display: none;
        }
        
        .mobile-menu-toggle {
          display: flex;
        }
        
        .site-title {
          font-size: var(--ddd-font-size-base, 1rem);
        }
      }
    `];
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.mobileMenuOpen = false;
  }

  _handleNavClick(path) {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { path },
      bubbles: true,
      composed: true
    }));
    this.mobileMenuOpen = false;
    this.requestUpdate();
  }

  _toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.requestUpdate();
  }

  _isActiveRoute(route) {
    return this.currentRoute === route || 
           (route === "/" && this.currentRoute === "/");
  }

  render() {
    const navItems = [
      { path: "/", label: "Home" },
      { path: "/schedule", label: "Schedule" },
      { path: "/teams", label: "Teams" },
      { path: "/standings", label: "Standings" },
      { path: "/register", label: "Register" }
    ];

    return html`
      <header class="header">
        <div class="header-container">
          <div class="logo-section">
            <div class="logo">
              <img src="${new URL('./assets/psl-logo.svg', import.meta.url).href}" alt="PSL Logo" />
            </div>
            <h1 class="site-title">Penn State Soccer League</h1>
          </div>
          
          <nav class="nav">
            ${navItems.map(item => html`
              <button 
                class="nav-link ${this._isActiveRoute(item.path) ? 'active' : ''}"
                @click="${() => this._handleNavClick(item.path)}">
                ${item.label}
              </button>
            `)}
          </nav>

          <button class="mobile-menu-toggle" @click="${this._toggleMobileMenu}">
            ☰
          </button>
        </div>

        <nav class="mobile-nav ${this.mobileMenuOpen ? 'open' : ''}">
          ${navItems.map(item => html`
            <button 
              class="nav-link ${this._isActiveRoute(item.path) ? 'active' : ''}"
              @click="${() => this._handleNavClick(item.path)}">
              ${item.label}
            </button>
          `)}
        </nav>
      </header>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PslHeader.tag, PslHeader);
