import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./components/psl-header.js";
import "./components/psl-home.js";
import "./components/psl-schedule.js";
import "./components/psl-teams.js";
import "./components/psl-register.js";
import "./components/psl-standings.js";
import "./components/psl-schedule.js";
import "./components/psl-teams.js";
import "./components/psl-register.js";
import "./components/psl-standings.js";
import "./components/psl-footer.js";

/**
 * `psl-app`
 * Main Penn State Soccer League application with routing
 * 
 * @demo index.html
 * @element psl-app
 */
export class PslApp extends DDDSuper(LitElement) {

  static get tag() {
    return "psl-app";
  }

  constructor() {
    super();
    this.route = window.location.pathname || "/";
    this.initRouting();
  }

  static get properties() {
    return {
      ...super.properties,
      route: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--ddd-theme-default-white);
        font-family: var(--ddd-font-primary);
      }
      .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      .content {
        flex: 1;
        background: linear-gradient(135deg, var(--ddd-theme-default-slateLight) 0%, var(--ddd-theme-default-slateMaxLight) 100%);
      }
    `];
  }

  initRouting() {
    // Handle initial page load
    this.route = window.location.pathname;
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.route = window.location.pathname;
    });
  }

  handleNavigation(e) {
    if (e.detail && e.detail.path) {
      this.route = e.detail.path;
      window.history.pushState({}, "", e.detail.path);
    }
  }

  renderPage() {
    switch(this.route) {
      case '/schedule':
        return html`<psl-schedule></psl-schedule>`;
      case '/teams':
        return html`<psl-teams></psl-teams>`;
      case '/register':
        return html`<psl-register></psl-register>`;
      case '/standings':
        return html`<psl-standings></psl-standings>`;
      default:
        return html`<psl-home></psl-home>`;
    }
  }

  render() {
    return html`
      <div class="app-container">
        <psl-header 
          .currentRoute="${this.route}"
          @navigate="${this.handleNavigation}">
        </psl-header>
        <div class="content">
          ${this.renderPage()}
        </div>
        <psl-footer></psl-footer>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PslApp.tag, PslApp);