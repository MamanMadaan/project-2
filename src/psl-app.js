import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';
import './components/home-page.js';
import './components/schedule-page.js';
import './components/teams-page.js';
import './components/stats-page.js';
import './components/register-page.js';
import './components/championship-page.js';

export class PslApp extends DDDSuper(LitElement) {
  static properties = {
    page: { type: String, reflect: true },
    teams: { type: Array }
  };

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      font-family: var(--ddd-font-primary);
      color: var(--ddd-theme-default-coalyGray);
      background-color: var(--ddd-theme-default-white);
      
      /* Define custom theme colors */
      --ddd-theme-primary: #1e40af;
      --ddd-theme-accent: #3b82f6;
      --ddd-accent-6: #1e3a8a;
      --psl-primary: #1e40af;
      --psl-accent: #3b82f6;
      --psl-success: #10b981;
      --psl-warning: #f59e0b;
      --psl-danger: #dc2626;
    }

    .page-container {
      min-height: 100vh;
    }

    /* Hide pages that aren't active */
    .page:not([active]) {
      display: none !important;
    }
  `;

  constructor() {
    super();
    this.page = 'home';
    this.teams = [];
    this._handlePopState = this._handlePopState.bind(this);
    this._handleTeamRegistration = this._handleTeamRegistration.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('popstate', this._handlePopState);
    this.addEventListener('team-registered', this._handleTeamRegistration);
    this._handleRouting();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this._handlePopState);
  }

  _handlePopState() {
    this._handleRouting();
  }

  _handleRouting() {
    const path = window.location.pathname;
    
    // Map URL paths to page names
    const routes = {
      '/': 'home',
      '/schedule': 'schedule',
      '/teams': 'teams',
      '/stats': 'stats',
      '/register': 'register'
    };

    this.page = routes[path] || 'home';
  }

  navigate(page) {
    // Update URL without reloading page
    const routes = {
      'home': '/',
      'schedule': '/schedule',
      'teams': '/teams',
      'stats': '/stats',
      'register': '/register'
    };

    const url = routes[page] || '/';
    window.history.pushState({}, '', url);
    this.page = page;
  }

  _handleTeamRegistration(event) {
    // Add the new team to the teams array
    this.teams = [...this.teams, event.detail.team];
  }

  render() {
    return html`
      <div class="page-container">
        <home-page 
          class="page" 
          ?active="${this.page === 'home'}"
          @navigate="${(e) => this.navigate(e.detail.page)}">
        </home-page>
        
        <schedule-page 
          class="page" 
          ?active="${this.page === 'schedule'}"
          @navigate="${(e) => this.navigate(e.detail.page)}">
        </schedule-page>
        
        <teams-page 
          class="page" 
          ?active="${this.page === 'teams'}"
          .registeredTeams="${this.teams}"
          @navigate="${(e) => this.navigate(e.detail.page)}">
        </teams-page>
        
        <stats-page 
          class="page" 
          ?active="${this.page === 'stats'}"
          @navigate="${(e) => this.navigate(e.detail.page)}">
        </stats-page>

        <register-page 
          class="page" 
          ?active="${this.page === 'register'}"
          @navigate="${(e) => this.navigate(e.detail.page)}">
        </register-page>
      </div>
    `;
  }
}

customElements.define('psl-app', PslApp);