import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class GameCard extends DDDSuper(LitElement) {
  static properties = {
    date: { type: String },
    time: { type: String },
    team1: { type: String },
    team2: { type: String },
    location: { type: String },
    status: { type: String },
    score1: { type: Number },
    score2: { type: Number }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .game-card {
      background: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-6, 2rem);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
      transition: all 0.3s ease;
    }

    .game-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--ddd-spacing-4, 1rem);
    }

    .game-date {
      font-weight: var(--ddd-font-weight-medium, 500);
      color: var(--ddd-theme-default-coalyGray, #333333);
      font-size: var(--ddd-font-size-base, 1rem);
    }

    .game-time {
      background: var(--ddd-theme-default-skyBlue, #3b82f6);
      color: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-1, 0.25rem) var(--ddd-spacing-3, 0.75rem);
      
      font-size: var(--ddd-font-size-sm, 0.875rem);
      font-weight: var(--ddd-font-weight-medium, 500);
    }

    .teams-matchup {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: var(--ddd-spacing-4, 1rem) 0;
      padding: var(--ddd-spacing-5, 1.5rem) var(--ddd-spacing-4, 1rem);
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      
    }

    .team {
      font-weight: var(--ddd-font-weight-medium, 500);
      font-size: var(--ddd-font-size-base, 1rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
    }

    .vs {
      background: linear-gradient(135deg, var(--ddd-theme-default-skyBlue, #3b82f6) 0%, var(--ddd-theme-default-navy, #1e40af) 100%);
      color: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-3, 0.75rem);
      
      font-size: var(--ddd-font-size-xs, 0.75rem);
      font-weight: var(--ddd-font-weight-bold, 700);
      letter-spacing: 1px;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      border: 2px solid var(--ddd-theme-default-white, #ffffff);
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
    }

    .score {
      background: var(--ddd-theme-default-skyBlue, #3b82f6);
      color: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-2, 0.5rem) var(--ddd-spacing-4, 1rem);
      
      font-size: var(--ddd-font-size-lg, 1.125rem);
      font-weight: var(--ddd-font-weight-bold, 600);
    }

    .game-location {
      display: flex;
      align-items: center;
      gap: var(--ddd-spacing-2, 0.5rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
      font-size: var(--ddd-font-size-sm, 0.875rem);
      margin-top: var(--ddd-spacing-3, 0.75rem);
      opacity: 0.8;
      font-style: italic;
    }

    .status-badge {
      display: inline-block;
      padding: var(--ddd-spacing-1, 0.25rem) var(--ddd-spacing-3, 0.75rem);
      
      font-size: var(--ddd-font-size-xs, 0.75rem);
      font-weight: var(--ddd-font-weight-medium, 500);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: var(--ddd-spacing-3, 0.75rem);
    }

    .status-upcoming {
      background: #dbeafe;
      color: #1e40af;
    }

    .status-completed {
      background: #dcfce7;
      color: #166534;
    }

    .status-live {
      background: #fee2e2;
      color: #dc2626;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    @media (max-width: 600px) {
      .game-header {
        flex-direction: column;
        gap: var(--ddd-spacing-2, 0.5rem);
      }
      
      .teams-matchup {
        flex-direction: column;
        gap: var(--ddd-spacing-3, 0.75rem);
      }
    }
  `;

  constructor() {
    super();
    this.date = 'TBD';
    this.time = 'TBD';
    this.team1 = 'Team A';
    this.team2 = 'Team B';
    this.location = 'TBD';
    this.status = 'upcoming';
    this.score1 = 0;
    this.score2 = 0;
  }

  render() {
    return html`
      <div class="game-card">
        <div class="game-header">
          <div class="game-date">${this.date}</div>
          <div class="game-time">${this.time}</div>
        </div>
        
        <div class="teams-matchup">
          <div class="team">${this.team1}</div>
          ${this.status === 'completed' ? 
            html`<div class="score">${this.score1} - ${this.score2}</div>` : 
            html`<div class="vs">VS</div>`
          }
          <div class="team">${this.team2}</div>
        </div>
        
        <div class="game-location">
          Location: ${this.location}
        </div>
        
        <div class="status-badge status-${this.status}">
          ${this.status === 'upcoming' ? 'Upcoming' : 
            this.status === 'completed' ? 'Final' : 
            this.status === 'live' ? 'Live' : this.status}
        </div>
      </div>
    `;
  }
}

customElements.define('game-card', GameCard);
