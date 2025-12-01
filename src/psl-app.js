import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';
import './components/psl-button.js';
import './components/psl-header.js';
import './components/psl-footer.js';
import './components/game-card.js';
import './components/team-card.js';
import './components/stat-card.js';
import './components/hero-banner.js';
import './components/navigation-menu.js';
import './components/player-card.js';
import './components/news-card.js';
import './components/register-page.js';

export class PslApp extends DDDSuper(LitElement) {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      font-family: var(--ddd-font-primary);
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    }

    .main-container {
      padding: var(--ddd-spacing-8, 2rem);
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-section {
      margin-bottom: var(--ddd-spacing-12, 4rem);
    }

    .hero-section .component-title {
      margin-bottom: var(--ddd-spacing-6, 2rem);
    }

    .components-grid {
      display: flex;
      flex-direction: column;
      gap: var(--ddd-spacing-8, 2.5rem);
      max-width: 800px;
      margin: 0 auto;
    }

    .component-section {
      background: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-6, 2rem);
      border-radius: var(--ddd-radius-lg, 12px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
    }

    .component-title {
      font-size: var(--ddd-font-size-lg, 1.125rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      color: var(--ddd-theme-default-coalyGray, #333333);
      margin-bottom: var(--ddd-spacing-4, 1rem);
      padding-bottom: var(--ddd-spacing-2, 0.5rem);
    }
  `;

  render() {
    return html`
      <div class="main-container">
        <div class="component-section">
          <h2 class="component-title">Header</h2>
          <psl-header></psl-header>
        </div>
        
        <div class="hero-section">
          <h2 class="component-title">Hero Banner</h2>
          <hero-banner 
            title="Penn State Soccer League"
            subtitle="Join our soccer league and play with local teams"
            cta-text="GET STARTED">
          </hero-banner>
        </div>
        
        <div class="components-grid">
          <div class="component-section">
            <h2 class="component-title">PSL Button</h2>
            <psl-button 
              text="View Schedule" 
              type="primary">
            </psl-button>
            <psl-button 
              text="Register Team" 
              type="success">
            </psl-button>
            <psl-button 
              text="Next" 
              type="secondary">
            </psl-button>
            <psl-button 
              text="Previous" 
              type="secondary">
            </psl-button>
            <psl-button 
              text="Join League" 
              type="success">
            </psl-button>
            <psl-button 
              text="Delete" 
              type="danger">
            </psl-button>
            <psl-button 
              text="Save Changes" 
              type="success">
            </psl-button>
            <psl-button 
              text="Cancel" 
              type="secondary">
            </psl-button>
          </div>

          <div class="component-section">
            <h2 class="component-title">Game Card</h2>
            <game-card 
              date="Nov 23, 2025"
              time="2:00 PM"
              team1="Nittany Lions FC"
              team2="State College FC"
              location="IM Field 6"
              status="upcoming">
            </game-card>
          </div>

          <div class="component-section">
            <h2 class="component-title">Team Card</h2>
            <team-card 
              name="Nittany Lions FC"
              color="#1e3a8a"
              record="3-0-1"
              wins="3"
              losses="0"
              ties="1"
              goals="15">
            </team-card>
          </div>

          <div class="component-section">
            <h2 class="component-title">Stat Card</h2>
            <stat-card 
              icon=""
              number="89"
              label="Total Goals"
              color="#3b82f6">
            </stat-card>
          </div>

          <div class="component-section">
            <h2 class="component-title">Navigation Menu</h2>
            <navigation-menu></navigation-menu>
          </div>

          <div class="component-section">
            <h2 class="component-title">Player Card</h2>
            <player-card 
              name="Marcus Johnson"
              position="Forward"
              number="10"
              team="Nittany Lions FC"
              goals="8">
            </player-card>
          </div>

          <div class="component-section">
            <h2 class="component-title">News Card</h2>
            <news-card 
              headline="Championship Game Set for November 23rd"
              summary="Nittany Lions FC will face State College FC in the highly anticipated championship match."
              date="Nov 20, 2025"
              category="Championship">
            </news-card>
          </div>

          <div class="component-section">
            <h2 class="component-title">Register Page</h2>
            <register-page></register-page>
          </div>
        </div>
        
        <div class="component-section">
          <h2 class="component-title">Footer</h2>
          <psl-footer></psl-footer>
        </div>
      </div>
    `;
  }
}

customElements.define('psl-app', PslApp);