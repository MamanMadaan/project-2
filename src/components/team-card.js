import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class TeamCard extends DDDSuper(LitElement) {
  static properties = {
    name: { type: String },
    color: { type: String },
    record: { type: String },
    wins: { type: Number },
    losses: { type: Number },
    ties: { type: Number },
    goals: { type: Number },
    captain: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .team-card {
      background: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-6, 2rem);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
      transition: all 0.3s ease;
      text-align: center;
    }

    .team-logo {
      width: 80px;
      height: 80px;
      
      margin: 0 auto var(--ddd-spacing-4, 1rem);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--ddd-font-size-2xl, 1.875rem);
      font-weight: var(--ddd-font-weight-black, 900);
      color: var(--ddd-theme-default-white, #ffffff);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .team-name {
      font-size: var(--ddd-font-size-xl, 1.25rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      color: var(--ddd-theme-default-coalyGray, #333333);
      margin: 0 0 var(--ddd-spacing-2, 0.5rem) 0;
    }

    .team-record {
      font-size: var(--ddd-font-size-base, 1rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
      margin-bottom: var(--ddd-spacing-4, 1rem);
      font-weight: var(--ddd-font-weight-medium, 500);
    }

    .team-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--ddd-spacing-4, 1rem);
      margin: var(--ddd-spacing-4, 1rem) 0;
      padding: var(--ddd-spacing-4, 1rem);
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      font-size: var(--ddd-font-size-xl, 1.25rem);
      font-weight: var(--ddd-font-weight-black, 900);
      color: var(--ddd-theme-default-coalyGray, #333333);
      margin-bottom: var(--ddd-spacing-1, 0.25rem);
    }

    .stat-label {
      font-size: var(--ddd-font-size-xs, 0.75rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: var(--ddd-font-weight-medium, 500);
    }

    .team-captain {
      margin-top: var(--ddd-spacing-4, 1rem);
      padding: var(--ddd-spacing-3, 0.75rem);
      background: var(--ddd-theme-default-skyBlue, #3b82f6);
      color: var(--ddd-theme-default-white, #ffffff);
      
      font-size: var(--ddd-font-size-sm, 0.875rem);
      font-weight: var(--ddd-font-weight-medium, 500);
    }

    .captain-label {
      display: block;
      font-size: var(--ddd-font-size-xs, 0.75rem);
      opacity: 0.8;
      margin-bottom: var(--ddd-spacing-1, 0.25rem);
    }

    @media (max-width: 600px) {
      .team-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--ddd-spacing-2, 0.5rem);
      }
    }
  `;

  constructor() {
    super();
    this.name = 'Team Name';
    this.color = '#3b82f6';
    this.record = '0-0-0';
    this.wins = 0;
    this.losses = 0;
    this.ties = 0;
    this.goals = 0;
    this.captain = '';
  }

  _getTeamInitials() {
    return this.name.split(' ').map(word => word[0]).join('').toUpperCase();
  }

  render() {
    return html`
      <div class="team-card">
        <div class="team-logo" style="background-color: ${this.color}">
          ${this._getTeamInitials()}
        </div>
        
        <h3 class="team-name">${this.name}</h3>
        <div class="team-record">Record: ${this.record}</div>
        
        <div class="team-stats">
          <div class="stat">
            <div class="stat-number">${this.wins}</div>
            <div class="stat-label">Wins</div>
          </div>
          <div class="stat">
            <div class="stat-number">${this.losses}</div>
            <div class="stat-label">Losses</div>
          </div>
          <div class="stat">
            <div class="stat-number">${this.ties}</div>
            <div class="stat-label">Ties</div>
          </div>
          <div class="stat">
            <div class="stat-number">${this.goals}</div>
            <div class="stat-label">Goals</div>
          </div>
        </div>
        
        ${this.captain ? html`
          <div class="team-captain">
            <span class="captain-label">Team Captain</span>
            ${this.captain}
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('team-card', TeamCard);
