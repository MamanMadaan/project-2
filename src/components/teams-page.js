import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class TeamsPage extends DDDSuper(LitElement) {
  static properties = {
    active: { type: Boolean, reflect: true },
    teams: { type: Array },
    registeredTeams: { type: Array }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--ddd-font-primary);
    }

    .teams-container {
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
      color: var(--ddd-theme-default-slateMaxLight);
      font-size: var(--ddd-font-size-lg);
    }

    .teams-grid {
      max-width: var(--ddd-breakpoint-lg);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--ddd-spacing-8);
    }

    .team-card {
      background: var(--ddd-theme-default-white);
      border-radius: var(--ddd-radius-lg);
      padding: var(--ddd-spacing-8);
      box-shadow: var(--ddd-boxShadow-md);
      transition: all var(--ddd-duration-rapid);
      text-align: center;
      border: var(--ddd-border-sm) solid var(--ddd-theme-default-slateLight);
    }

    .team-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .team-logo {
      width: var(--ddd-spacing-20);
      height: var(--ddd-spacing-20);
      border-radius: var(--ddd-radius-circle);
      margin: 0 auto var(--ddd-spacing-4) auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-white);
    }

    .team-name {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-navy80);
      margin-bottom: var(--ddd-spacing-2);
    }

    .team-record {
      color: var(--ddd-theme-default-slateMaxLight, #666666);
      margin-bottom: var(--ddd-spacing-4, 1rem);
    }

    .team-captain, .team-coach, .team-founded {
      color: var(--ddd-theme-default-slateMaxLight, #666666);
      font-size: var(--ddd-font-size-xs, 0.75rem);
      margin-bottom: var(--ddd-spacing-1, 0.25rem);
    }

    .team-achievements {
      margin-top: var(--ddd-spacing-4, 1rem);
      padding-top: var(--ddd-spacing-3, 0.75rem);
      border-top: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
    }

    .team-achievements h4 {
      font-size: var(--ddd-font-size-xs, 0.75rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      margin: 0 0 var(--ddd-spacing-2, 0.5rem) 0;
      color: var(--ddd-theme-default-coalyGray, #333333);
    }

    .team-achievements ul {
      margin: 0;
      padding-left: var(--ddd-spacing-4, 1rem);
      font-size: var(--ddd-font-size-xs, 0.75rem);
      color: var(--ddd-theme-default-slateMaxLight, #666666);
    }

    .team-achievements li {
      margin-bottom: var(--ddd-spacing-1, 0.25rem);
    }

    .team-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--ddd-spacing-4);
      margin-top: var(--ddd-spacing-6);
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-navy80);
    }

    .stat-label {
      font-size: var(--ddd-font-size-xs, 0.75rem);
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: var(--ddd-ls-16-lg, 0.5px);
      font-weight: var(--ddd-font-weight-medium, 500);
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
    this.registeredTeams = [];
    this.teams = [
      {
        id: 1,
        name: 'Nittany Lions FC',
        color: '#1e3a8a',
        record: '3-0-1',
        wins: 3,
        losses: 0,
        goals: 15,
        captain: 'Marcus Johnson',
        coach: 'Coach Sarah Williams',
        founded: '2019',
        achievements: ['2024 PSL Champions', '2023 Fair Play Award', 'Best Offensive Record 2024']
      },
      {
        id: 2,
        name: 'Penn State United',
        color: '#dc2626',
        record: '2-0-1',
        wins: 2,
        losses: 0,
        goals: 8,
        captain: 'Sarah Martinez',
        coach: 'Coach Mike Thompson',
        founded: '2020',
        achievements: ['2023 Defensive Excellence Award', 'Most Improved Team 2024']
      },
      {
        id: 3,
        name: 'Blue & White SC',
        color: '#059669',
        record: '1-0-1',
        wins: 1,
        losses: 0,
        goals: 6,
        captain: 'Alex Rodriguez',
        coach: 'Coach Lisa Martinez',
        founded: '2021',
        achievements: ['Fastest Rising Team 2024', 'Best Team Spirit Award']
      },
      {
        id: 4,
        name: 'Happy Valley FC',
        color: '#7c3aed',
        record: '0-2-0',
        wins: 0,
        losses: 2,
        goals: 4,
        captain: 'Jamie Foster',
        coach: 'Coach David Park',
        founded: '2022',
        achievements: ['Community Choice Award 2024', 'Best Newcomer Team 2023']
      },
      {
        id: 5,
        name: 'State College FC',
        color: '#ea580c',
        record: '2-0-0',
        wins: 2,
        losses: 0,
        goals: 12,
        captain: 'David Chen',
        coach: 'Coach Amanda Rodriguez',
        founded: '2020',
        achievements: ['Technical Excellence Award 2024', 'Best Tactical Team 2023']
      },
      {
        id: 6,
        name: 'University Park United',
        color: '#0891b2',
        record: '1-1-0',
        wins: 1,
        losses: 1,
        goals: 7,
        captain: 'Morgan Taylor',
        coach: 'Coach Jennifer Lee',
        founded: '2021',
        achievements: ['Innovation in Play Award', 'Future Stars Recognition']
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

  _getTeamInitials(teamName) {
    return teamName.split(' ').map(word => word[0]).join('');
  }

  render() {
    return html`
      <div class="teams-container">
        <button class="back-button" @click="${() => this._navigate('home')}">
          ← Back to Home
        </button>

        <div class="header">
          <h1>Teams</h1>
          <p class="subtitle">Penn State Soccer League - Fall 2024</p>
        </div>

        <div class="teams-grid">
          ${[...this.teams, ...this.registeredTeams].map(team => html`
            <div class="team-card">
              <div class="team-logo" style="background-color: ${team.color}">
                ${this._getTeamInitials(team.name)}
              </div>
              <div class="team-name">${team.name}</div>
              <div class="team-record">Record: ${team.record}</div>
              ${team.captain ? html`<div class="team-captain">Captain: ${team.captain}</div>` : ''}
              ${team.coach ? html`<div class="team-coach">Coach: ${team.coach}</div>` : ''}
              ${team.founded ? html`<div class="team-founded">Founded: ${team.founded}</div>` : ''}
              <div class="team-stats">
                <div class="stat">
                  <div class="stat-number">${team.wins}</div>
                  <div class="stat-label">Wins</div>
                </div>
                <div class="stat">
                  <div class="stat-number">${team.losses}</div>
                  <div class="stat-label">Losses</div>
                </div>
                <div class="stat">
                  <div class="stat-number">${team.goals}</div>
                  <div class="stat-label">Goals</div>
                </div>
              </div>
              ${team.achievements && team.achievements.length > 0 ? html`
                <div class="team-achievements">
                  <h4>Achievements:</h4>
                  <ul>
                    ${team.achievements.map(achievement => html`<li>${achievement}</li>`)}
                  </ul>
                </div>
              ` : ''}
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

customElements.define('teams-page', TeamsPage);