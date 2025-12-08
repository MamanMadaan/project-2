import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class StatsPage extends DDDSuper(LitElement) {
  static properties = {
    active: { type: Boolean, reflect: true },
    stats: { type: Object }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--ddd-font-primary);
    }

    .stats-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: var(--ddd-spacing-8, 2rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
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
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(30, 64, 175, 0.3);
    }

    .back-button:hover {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(30, 64, 175, 0.4);
    }

    .header {
      text-align: center;
      margin-bottom: var(--ddd-spacing-12);
    }

    h1 {
      font-size: var(--ddd-font-size-3xl);
      color: var(--ddd-theme-default-navy80);
      margin-bottom: var(--ddd-spacing-2);
      font-weight: var(--ddd-font-weight-black);
    }

    .subtitle {
      color: var(--ddd-theme-default-coalyGray, #333333);
      font-size: var(--ddd-font-size-lg);
    }

    .stats-grid {
      max-width: var(--ddd-breakpoint-lg);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--ddd-spacing-8);
    }

    .stat-card {
      background: var(--ddd-theme-default-white);
      border-radius: var(--ddd-radius-lg);
      padding: var(--ddd-spacing-8);
      box-shadow: var(--ddd-boxShadow-md);
      transition: all var(--ddd-duration-rapid);
      text-align: center;
      border: var(--ddd-border-sm) solid var(--ddd-theme-default-slateLight);
    }

    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .stat-icon {
      width: var(--ddd-spacing-15);
      height: var(--ddd-spacing-15);
      border-radius: var(--ddd-radius-circle);
      margin: 0 auto var(--ddd-spacing-4) auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--ddd-font-size-xl);
      color: var(--ddd-theme-default-white);
    }

    .stat-number {
      font-size: var(--ddd-font-size-3xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-navy80);
      margin-bottom: var(--ddd-spacing-2);
    }

    .stat-label {
      color: var(--ddd-theme-default-coalyGray, #333333);
      font-size: var(--ddd-font-size-lg);
      font-weight: var(--ddd-font-weight-bold);
      text-transform: uppercase;
      letter-spacing: var(--ddd-ls-16-lg);
    }

    .leaderboard {
      max-width: var(--ddd-breakpoint-md);
      margin: var(--ddd-spacing-12) auto 0;
      background: var(--ddd-theme-default-white);
      border-radius: var(--ddd-radius-lg);
      padding: var(--ddd-spacing-8);
      box-shadow: var(--ddd-boxShadow-md);
      border: var(--ddd-border-sm) solid var(--ddd-theme-default-slateLight);
    }

    .leaderboard h2 {
      text-align: center;
      color: var(--ddd-theme-default-navy80);
      margin-bottom: var(--ddd-spacing-8);
      font-weight: var(--ddd-font-weight-black);
      font-size: var(--ddd-font-size-2xl);
    }

    .leaderboard-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--ddd-spacing-4);
      border-bottom: var(--ddd-border-sm) solid var(--ddd-theme-default-slateLight);
    }

    .leaderboard-item:last-child {
      border-bottom: none;
    }

    .rank {
      font-weight: var(--ddd-font-weight-black);
      font-size: var(--ddd-font-size-lg);
      color: var(--ddd-theme-default-navy80);
      min-width: var(--ddd-spacing-10);
    }

    .team-name {
      flex: 1;
      font-weight: var(--ddd-font-weight-bold);
      margin-left: var(--ddd-spacing-4);
      color: var(--ddd-theme-default-coalyGray, #333333);
    }

    .team-record {
      color: var(--ddd-theme-default-slateGray, #4a5568);
      font-size: var(--ddd-font-size-sm, 0.875rem);
      margin-right: var(--ddd-spacing-4, 1rem);
    }

    .points {
      font-weight: var(--ddd-font-weight-black, 700);
      color: #10b981;
    }

    .footer {
      background: var(--ddd-theme-default-white, #ffffff);
      color: var(--ddd-theme-default-slateGray, #4a5568);
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
    this.stats = {
      totalGames: 19,
      totalGoals: 89,
      totalTeams: 6,
      avgGoalsPerGame: 4.68,
      activePlayers: 108,
      leaderboard: [
        { rank: 1, team: 'Nittany Lions FC', points: 10, record: '3-0-1' },
        { rank: 2, team: 'State College FC', points: 6, record: '2-0-0' },
        { rank: 3, team: 'Penn State United', points: 6, record: '2-0-1' },
        { rank: 4, team: 'Blue & White SC', points: 4, record: '1-0-1' },
        { rank: 5, team: 'University Park United', points: 3, record: '1-1-0' },
        { rank: 6, team: 'Happy Valley FC', points: 0, record: '0-2-0' }
      ]
    };
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
      <div class="stats-container">
        <button class="back-button" @click="${() => this._navigate('home')}">
          ← Back to Home
        </button>

        <div class="header">
          <h1>League Statistics</h1>
          <p class="subtitle">Penn State Soccer League - Fall 2024</p>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon" style="background-color: #3b82f6;">⚽</div>
            <div class="stat-number">${this.stats.totalGames}</div>
            <div class="stat-label">Total Games</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="background-color: #10b981;">🥅</div>
            <div class="stat-number">${this.stats.totalGoals}</div>
            <div class="stat-label">Total Goals</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="background-color: #dc2626;">👥</div>
            <div class="stat-number">${this.stats.totalTeams}</div>
            <div class="stat-label">Teams</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="background-color: #f59e0b;">📊</div>
            <div class="stat-number">${this.stats.avgGoalsPerGame}</div>
            <div class="stat-label">Avg Goals/Game</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="background-color: #8b5cf6;">👥</div>
            <div class="stat-number">${this.stats.activePlayers}</div>
            <div class="stat-label">Active Players</div>
          </div>
        </div>

        <div class="leaderboard">
          <h2>Team Standings</h2>
          ${this.stats.leaderboard.map(item => html`
            <div class="leaderboard-item">
              <span class="rank">#${item.rank}</span>
              <span class="team-name">${item.team}</span>
              <span class="team-record">${item.record}</span>
              <span class="points">${item.points} pts</span>
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

customElements.define('stats-page', StatsPage);