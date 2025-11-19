import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class SchedulePage extends DDDSuper(LitElement) {
  static properties = {
    active: { type: Boolean, reflect: true },
    games: { type: Array }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--ddd-font-primary);
    }

    .schedule-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: var(--ddd-spacing-8, 2rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
    }

    .header {
      text-align: center;
      margin-bottom: var(--ddd-spacing-12);
    }

    .back-button {
      position: absolute;
      top: var(--ddd-spacing-8, 2rem);
      left: var(--ddd-spacing-8, 2rem);
      padding: var(--ddd-spacing-2, 0.5rem) var(--ddd-spacing-5, 1.25rem);
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
      color: var(--ddd-theme-default-white, #ffffff);
      border: none;
      border-radius: var(--ddd-radius-rounded, 20px);
      cursor: pointer;
      font-weight: var(--ddd-font-weight-bold, 600);
      transition: all var(--ddd-duration-rapid, 0.3s ease);
      box-shadow: var(--ddd-boxShadow-sm, 0 2px 4px rgba(0,0,0,0.1));
    }

    .back-button:hover {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      transform: translateY(-1px);
      box-shadow: var(--ddd-boxShadow-md, 0 4px 8px rgba(0,0,0,0.15));
    }

    h1 {
      font-size: var(--ddd-font-size-3xl, 2.5rem);
      color: #1e40af;
      margin-bottom: var(--ddd-spacing-2, 0.5rem);
      font-weight: var(--ddd-font-weight-black, 900);
    }

    .subtitle {
      color: #64748b;
      font-size: var(--ddd-font-size-lg, 1.125rem);
    }

    .games-grid {
      max-width: var(--ddd-breakpoint-lg);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--ddd-spacing-6);
    }

    .game-card {
      background: var(--ddd-theme-default-white);
      border-radius: var(--ddd-radius-lg);
      padding: var(--ddd-spacing-6);
      box-shadow: var(--ddd-boxShadow-md);
      transition: all var(--ddd-duration-rapid);
      border: var(--ddd-border-sm) solid var(--ddd-theme-default-slateLight);
    }

    .game-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .game-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--ddd-spacing-4);
    }

    .game-date {
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
      color: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-2, 0.5rem) var(--ddd-spacing-4, 1rem);
      border-radius: var(--ddd-radius-rounded, 20px);
      font-size: var(--ddd-font-size-sm, 0.875rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      box-shadow: 0 2px 4px rgba(30, 64, 175, 0.3);
    }

    .game-time {
      color: #64748b;
      font-weight: var(--ddd-font-weight-medium, 500);
    }

    .teams {
      text-align: center;
      margin: var(--ddd-spacing-4) 0;
    }

    .team-matchup {
      font-size: var(--ddd-font-size-xl, 1.25rem);
      font-weight: var(--ddd-font-weight-black, 700);
      color: #1e40af;
      margin-bottom: var(--ddd-spacing-2, 0.5rem);
    }

    .vs {
      color: #64748b;
      font-weight: var(--ddd-font-weight-normal, 400);
    }

    .game-location {
      text-align: center;
      color: #64748b;
      font-style: italic;
    }

    .footer {
      background: var(--ddd-theme-default-white, #ffffff);
      color: #64748b;
      padding: var(--ddd-spacing-6, 2rem);
      text-align: center;
      border-top: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
      margin-top: var(--ddd-spacing-8, 2rem);
    }

    .footer-content {
      max-width: var(--ddd-breakpoint-md, 800px);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--ddd-spacing-4, 1rem);
      flex-wrap: wrap;
    }

    .footer-logo {
      width: 120px;
      height: 40px;
      background: var(--ddd-theme-default-white, #ffffff);
      border-radius: var(--ddd-radius-sm, 4px);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e2e8f0;
      overflow: hidden;
    }

    .footer-logo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .copyright {
      font-size: var(--ddd-font-size-sm, 0.875rem);
    }
  `;

  constructor() {
    super();
    this.games = [
      {
        id: 1,
        date: 'Nov 22, 2024',
        time: '2:00 PM',
        team1: 'Blue Lions',
        team2: 'Red Hawks',
        location: 'Penn State Field A'
      },
      {
        id: 2,
        date: 'Nov 24, 2024',
        time: '4:00 PM',
        team1: 'Green Eagles',
        team2: 'White Wolves',
        location: 'Penn State Field B'
      },
      {
        id: 3,
        date: 'Nov 26, 2024',
        time: '1:00 PM',
        team1: 'Blue Lions',
        team2: 'Green Eagles',
        location: 'Penn State Field A'
      },
      {
        id: 4,
        date: 'Nov 28, 2024',
        time: '3:00 PM',
        team1: 'Red Hawks',
        team2: 'White Wolves',
        location: 'Penn State Field B'
      }
    ];
  }

  _navigate(page) {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="schedule-container">
        <button class="back-button" @click="${() => this._navigate('home')}">
          ← Back to Home
        </button>

        <div class="header">
          <h1>Game Schedule</h1>
          <p class="subtitle">Penn State Soccer League - Fall 2024</p>
        </div>

        <div class="games-grid">
          ${this.games.map(game => html`
            <div class="game-card">
              <div class="game-header">
                <span class="game-date">${game.date}</span>
                <span class="game-time">${game.time}</span>
              </div>
              <div class="teams">
                <div class="team-matchup">
                  ${game.team1} <span class="vs">vs</span> ${game.team2}
                </div>
              </div>
              <div class="game-location">${game.location}</div>
            </div>
          `)}
        </div>

        <footer class="footer">
          <div class="footer-content">
            <div class="footer-logo">
              <img src="./assets/back-seat-bros-logo.svg" alt="Powered by Back Seat Bros" />
            </div>
            <div class="copyright">© 2025 Penn State Soccer League. All rights reserved.</div>
          </div>
        </footer>
      </div>
    `;
  }
}

customElements.define('schedule-page', SchedulePage);