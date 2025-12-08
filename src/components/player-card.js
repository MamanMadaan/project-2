import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class PlayerCard extends DDDSuper(LitElement) {
  static properties = {
    name: { type: String },
    position: { type: String },
    number: { type: String },
    team: { type: String },
    goals: { type: Number },
    assists: { type: Number },
    photo: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .player-card {
      background: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-6, 2rem);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
      transition: all 0.3s ease;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .player-photo {
      width: 80px;
      height: 80px;
      
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      margin: 0 auto var(--ddd-spacing-4, 1rem);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ddd-theme-default-white, #ffffff);
      font-size: var(--ddd-font-size-2xl, 1.875rem);
      font-weight: var(--ddd-font-weight-black, 900);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .player-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .player-number {
      position: absolute;
      top: var(--ddd-spacing-4, 1rem);
      right: var(--ddd-spacing-4, 1rem);
      width: 40px;
      height: 40px;
      background: var(--ddd-theme-default-skyBlue, #3b82f6);
      color: var(--ddd-theme-default-white, #ffffff);
      
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: var(--ddd-font-weight-black, 900);
      font-size: var(--ddd-font-size-lg, 1.125rem);
    }

    .player-name {
      font-size: var(--ddd-font-size-xl, 1.25rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      color: var(--ddd-theme-default-coalyGray, #333333);
      margin: 0 0 var(--ddd-spacing-2, 0.5rem) 0;
    }

    .player-position {
      font-size: var(--ddd-font-size-base, 1rem);
      color: var(--ddd-theme-default-skyBlue, #3b82f6);
      font-weight: var(--ddd-font-weight-medium, 500);
      margin-bottom: var(--ddd-spacing-2, 0.5rem);
    }

    .player-team {
      font-size: var(--ddd-font-size-sm, 0.875rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
      margin-bottom: var(--ddd-spacing-4, 1rem);
    }

    .player-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--ddd-spacing-4, 1rem);
      margin-top: var(--ddd-spacing-4, 1rem);
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

    @media (max-width: 600px) {
      .player-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--ddd-spacing-2, 0.5rem);
      }
    }
  `;

  constructor() {
    super();
    this.name = 'Player Name';
    this.position = 'Position';
    this.number = '0';
    this.team = 'Team Name';
    this.goals = 0;
    this.assists = 0;
    this.photo = '';
  }

  _getPlayerInitials() {
    return this.name.split(' ').map(word => word[0]).join('').toUpperCase();
  }

  render() {
    return html`
      <div class="player-card">
        <div class="player-number">#${this.number}</div>
        
        <div class="player-photo">
          ${this.photo ? 
            html`<img src="${this.photo}" alt="${this.name}" />` :
            html`${this._getPlayerInitials()}`
          }
        </div>
        
        <h3 class="player-name">${this.name}</h3>
        <div class="player-position">${this.position}</div>
        <div class="player-team">${this.team}</div>
        
        <div class="player-stats">
          <div class="stat">
            <div class="stat-number">${this.goals}</div>
            <div class="stat-label">Goals</div>
          </div>
          <div class="stat">
            <div class="stat-number">${this.assists || 0}</div>
            <div class="stat-label">Assists</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('player-card', PlayerCard);
