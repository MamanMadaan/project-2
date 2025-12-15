import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `psl-header`
 * Header component with navigation for Penn State Soccer League
 * 
 * @element psl-header
 */

const pslLogo = new URL('./assets/psl-logo.svg', import.meta.url).href;

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

      :host(.psl-header) .header,
      psl-header .header,
      .header {
        background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%) !important;
        color: var(--ddd-theme-default-white) !important;
        padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
        box-shadow: var(--ddd-boxShadow-2);
        position: relative;
      }

      .header-container {
        max-width: var(--ddd-breakpoint-lg);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo-section {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-3);
      }

      .logo {
        width: 80px;
        height: 80px;
        border-radius: var(--ddd-radius-md);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        padding: 0;
        box-shadow: none;
        border: none;
      }

      .logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .site-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        margin: 0;
      }

      .nav {
        display: flex;
        gap: var(--ddd-spacing-2);
      }

      .nav-link {
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        text-decoration: none;
        color: var(--ddd-theme-default-coalyGray);
        
        transition: all 0.3s ease;
        font-weight: var(--ddd-font-weight-medium);
        cursor: pointer;
        border: none;
        background: transparent;
        font-size: var(--ddd-font-size-base);
      }

      .nav-link:hover {
        background: var(--ddd-theme-default-slateLight);
      }

      .nav-link.active {
        background: var(--ddd-theme-default-coalyGray);
        color: var(--ddd-theme-default-white);
      }

      .mobile-menu-toggle {
        display: none;
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid var(--ddd-theme-default-white);
        color: var(--ddd-theme-default-white);
        font-size: var(--ddd-font-size-xl);
        cursor: pointer;
        padding: var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-sm);
        transition: all 0.3s ease;
        min-width: 44px;
        min-height: 44px;
        align-items: center;
        justify-content: center;
      }

      .mobile-menu-toggle:hover {
        background: rgba(255, 255, 255, 0.3);
        border-color: var(--ddd-theme-default-white);
      }

      .mobile-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--ddd-theme-default-white);
        flex-direction: column;
        padding: var(--ddd-spacing-4);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        border-top: 1px solid var(--ddd-theme-default-slateLight);
        margin: 0;
        width: 100%;
        box-sizing: border-box;
      }

      .mobile-nav.open {
        display: flex;
      }

      .mobile-nav .nav-link {
        color: var(--ddd-theme-default-coalyGray);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
        margin: var(--ddd-spacing-1) 0;
        border-radius: var(--ddd-radius-sm);
        text-align: left;
        font-weight: var(--ddd-font-weight-medium);
      }

      .mobile-nav .nav-link:hover {
        background: var(--ddd-theme-default-slateLight);
      }

      .mobile-nav .nav-link.active {
        background: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-white);
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
          font-size: var(--ddd-font-size-base);
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
              <img src="${pslLogo}" alt="PSL Logo" />
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
