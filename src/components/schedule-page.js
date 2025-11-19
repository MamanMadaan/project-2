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

    .game-completed {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      opacity: 0.8;
    }

    .game-championship {
      border: 2px solid #fbbf24;
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
    }

    .game-type-badge {
      background: #fbbf24;
      color: #92400e;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .score {
      font-weight: var(--ddd-font-weight-bold, 600);
      color: var(--ddd-theme-default-coalyGray, #333333);
      background: rgba(255, 255, 255, 0.8);
      padding: 4px 8px;
      border-radius: 8px;
      margin: 0 8px;
    }

    .game-status {
      margin-top: var(--ddd-spacing-3, 0.75rem);
      font-size: var(--ddd-font-size-xs, 0.75rem);
      font-weight: var(--ddd-font-weight-medium, 500);
      text-align: center;
      padding: 4px;
      border-radius: 4px;
    }

    .game-status.upcoming {
      background: #dbeafe;
      color: #1e40af;
    }

    .game-status:not(.upcoming) {
      background: #dcfce7;
      color: #166534;
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
      // Upcoming Games
      {
        id: 1,
        date: 'Nov 23, 2025',
        time: '2:00 PM',
        team1: 'Nittany Lions FC',
        team2: 'State College FC',
        location: 'Beaver Stadium Field A',
        type: 'championship',
        status: 'upcoming'
      },
      {
        id: 2,
        date: 'Nov 25, 2025',
        time: '4:30 PM',
        team1: 'Penn State United',
        team2: 'Blue & White SC',
        location: 'IM Fields Complex',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 3,
        date: 'Nov 27, 2025',
        time: '1:00 PM',
        team1: 'Happy Valley FC',
        team2: 'University Park United',
        location: 'Penn State Practice Fields',
        type: 'regular',
        status: 'upcoming'
      },
      // Completed Games
      {
        id: 4,
        date: 'Nov 15, 2025',
        time: '3:00 PM',
        team1: 'Nittany Lions FC',
        team2: 'Happy Valley FC',
        location: 'Beaver Stadium Field A',
        type: 'regular',
        status: 'completed',
        score1: 4,
        score2: 1
      },
      {
        id: 5,
        date: 'Nov 17, 2025',
        time: '5:30 PM',
        team1: 'State College FC',
        team2: 'Penn State United',
        location: 'State College Municipal Stadium',
        type: 'regular',
        status: 'completed',
        score1: 2,
        score2: 2
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
            <div class="game-card ${game.status === 'completed' ? 'game-completed' : ''} ${game.type === 'championship' ? 'game-championship' : ''}">
              <div class="game-header">
                <span class="game-date">${game.date}</span>
                <span class="game-time">${game.time}</span>
                ${game.type === 'championship' ? html`<span class="game-type-badge">Championship</span>` : ''}
              </div>
              <div class="teams">
                <div class="team-matchup">
                  ${game.team1} 
                  ${game.status === 'completed' ? 
                    html`<span class="score">${game.score1} - ${game.score2}</span>` : 
                    html`<span class="vs">vs</span>`
                  } 
                  ${game.team2}
                </div>
              </div>
              <div class="game-location">${game.location}</div>
              ${game.status === 'completed' ? 
                html`<div class="game-status">Final</div>` : 
                html`<div class="game-status upcoming">Upcoming</div>`
              }
            </div>
          `)}
        </div>

        <footer class="footer">
          <div class="footer-content">
            <div class="footer-logo">
              <img src="./src/assets/psl-logo.svg" alt="Penn State Soccer League" />
            </div>
            <div class="copyright">© 2025 Penn State Soccer League. All rights reserved.</div>
          </div>
        </footer>
      </div>
    `;
  }
}

customElements.define('schedule-page', SchedulePage);