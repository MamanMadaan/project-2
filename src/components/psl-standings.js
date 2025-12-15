import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `psl-standings`
 * League standings page for Penn State Soccer League
 * 
 * @element psl-standings
 */
export class PslStandings extends DDDSuper(LitElement) {

  static get tag() {
    return "psl-standings";
  }

  static get properties() {
    return {
      ...super.properties,
      standings: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .standings-container {
        max-width: var(--ddd-breakpoint-xl);
        margin: 0 auto;
        padding: var(--ddd-spacing-6);
      }

      .standings-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8);
      }

      .standings-title {
        font-size: var(--ddd-font-size-3xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0 0 var(--ddd-spacing-2) 0;
      }

      .standings-subtitle {
        font-size: var(--ddd-font-size-lg);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0;
      }

      .division-tabs {
        display: flex;
        justify-content: center;
        margin-bottom: var(--ddd-spacing-6);
        gap: var(--ddd-spacing-2);
        flex-wrap: wrap;
      }

      .division-tab {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        background: var(--ddd-theme-default-white);
        border: 2px solid var(--ddd-theme-default-slateLight);
        
        font-size: var(--ddd-font-size-sm);
        font-weight: var(--ddd-font-weight-medium);
        color: var(--ddd-theme-default-coalyGray);
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: var(--ddd-font-primary);
      }

      .division-tab:hover {
        border-color: var(--ddd-theme-default-skyBlue);
      }

      .division-tab.active {
        background: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-white);
        border-color: var(--ddd-theme-default-skyBlue);
      }

      .standings-table {
        background: var(--ddd-theme-default-white);
        
        box-shadow: var(--ddd-boxShadow-1);
        border: 1px solid var(--ddd-theme-default-slateLight);
        overflow: hidden;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      .table-header {
        background: var(--ddd-theme-default-coalyGray);
        color: var(--ddd-theme-default-white);
      }

      .table-header th {
        padding: var(--ddd-spacing-4);
        text-align: left;
        font-size: var(--ddd-font-size-sm);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--ddd-theme-default-white);
      }

      .table-header th.center {
        text-align: center;
      }

      .table-header th.right {
        text-align: right;
      }

      tbody tr {
        border-bottom: 1px solid var(--ddd-theme-default-slateLight);
        transition: background-color 0.2s ease;
      }

      tbody tr:hover {
        background: linear-gradient(135deg, rgba(156, 163, 175, 0.6), rgba(156, 163, 175, 0.4));
        color: var(--ddd-theme-default-white);
      }

      tbody tr:hover td {
        color: var(--ddd-theme-default-white);
      }

      tbody tr:nth-child(1):hover {
        background: linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(34, 197, 94, 0.6)) !important;
        color: var(--ddd-theme-default-white);
      }

      tbody tr:nth-child(1):hover td {
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-bold);
      }

      tbody tr:nth-child(2):hover {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.6)) !important;
        color: var(--ddd-theme-default-white);
      }

      tbody tr:nth-child(2):hover td {
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-bold);
      }

      tbody tr:nth-child(3):hover {
        background: linear-gradient(135deg, rgba(251, 146, 60, 0.8), rgba(251, 146, 60, 0.6)) !important;
        color: var(--ddd-theme-default-white);
      }

      tbody tr:nth-child(3):hover td {
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-bold);
      }

      tbody tr:last-child {
        border-bottom: none;
      }

      tbody td {
        padding: var(--ddd-spacing-4);
        font-size: var(--ddd-font-size-sm);
        color: var(--ddd-theme-default-coalyGray);
      }

      .position {
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-skyBlue);
        text-align: center;
        width: 60px;
      }

      .team-name {
        font-weight: var(--ddd-font-weight-bold);
        min-width: 200px;
      }

      .stats {
        text-align: center;
        width: 60px;
      }

      .points {
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-skyBlue);
        text-align: center;
        width: 80px;
      }

      .form {
        text-align: center;
        width: 100px;
      }

      .form-indicator {
        display: inline-block;
        width: 20px;
        height: 20px;
        
        margin: 0 1px;
        color: var(--ddd-theme-default-white);
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        line-height: 20px;
        text-align: center;
      }

      .form-indicator.win {
        background: var(--ddd-theme-default-forestGreen);
      }

      .form-indicator.loss {
        background: var(--ddd-theme-default-original87Pink);
      }

      .form-indicator.draw {
        background: var(--ddd-theme-default-slateMaxLight);
      }

      .top-position {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
      }

      .playoff-position {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05));
      }

      .glossary {
        background: linear-gradient(135deg, var(--ddd-theme-default-white), rgba(59, 130, 246, 0.02));
        border: 1px solid var(--ddd-theme-default-slateLight);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-6);
        margin-top: var(--ddd-spacing-6);
        box-shadow: var(--ddd-boxShadow-2);
      }

      .glossary-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0 0 var(--ddd-spacing-5) 0;
        text-align: center;
        position: relative;
      }

      .glossary-title::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(135deg, var(--ddd-theme-default-skyBlue), var(--ddd-theme-default-navy));
        border-radius: var(--ddd-radius-sm);
      }

      .glossary-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
        gap: var(--ddd-spacing-2);
      }

      .glossary-item {
        text-align: center;
        padding: var(--ddd-spacing-2);
        background: var(--ddd-theme-default-white);
        border: 2px solid var(--ddd-theme-default-slateLight);
        border-radius: var(--ddd-radius-sm);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .glossary-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(135deg, var(--ddd-theme-default-skyBlue), var(--ddd-theme-default-navy));
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }

      .glossary-item:hover {
        transform: translateY(-2px);
        box-shadow: var(--ddd-boxShadow-2);
        border-color: var(--ddd-theme-default-skyBlue);
      }

      .glossary-item:hover::before {
        transform: translateX(0);
      }

      .glossary-abbr {
        font-size: var(--ddd-font-size-base);
        font-weight: var(--ddd-font-weight-black);
        color: var(--ddd-theme-default-skyBlue);
        display: block;
        margin-bottom: var(--ddd-spacing-1);
        text-shadow: 1px 1px 2px rgba(59, 130, 246, 0.1);
      }

      .glossary-desc {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-coalyGray);
        line-height: 1.3;
        font-weight: var(--ddd-font-weight-medium);
      }

      @media (max-width: 768px) {
        .standings-container {
          padding: var(--ddd-spacing-4);
        }

        .division-tabs {
          flex-direction: column;
          align-items: stretch;
        }

        .standings-table {
          overflow-x: auto;
        }

        table {
          min-width: 600px;
        }

        .table-header th,
        tbody td {
          padding: var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xs);
        }

        .team-name {
          min-width: 150px;
        }
      }
    `];
  }

  constructor() {
    super();
    this.standings = [
      {
        position: 1,
        team: "State College Strikers",
        gamesPlayed: 10,
        wins: 9,
        draws: 1,
        losses: 0,
        goalsFor: 42,
        goalsAgainst: 8,
        points: 28,
        form: ["W", "W", "W", "D", "W"]
      },
      {
        position: 2,
        team: "Penn State Lions",
        gamesPlayed: 10,
        wins: 8,
        draws: 0,
        losses: 2,
        goalsFor: 34,
        goalsAgainst: 12,
        points: 24,
        form: ["W", "L", "W", "W", "W"]
      },
      {
        position: 3,
        team: "Happy Valley Stars",
        gamesPlayed: 10,
        wins: 7,
        draws: 1,
        losses: 2,
        goalsFor: 31,
        goalsAgainst: 15,
        points: 22,
        form: ["W", "D", "L", "W", "W"]
      },
      {
        position: 4,
        team: "Nittany United",
        gamesPlayed: 10,
        wins: 6,
        draws: 2,
        losses: 2,
        goalsFor: 28,
        goalsAgainst: 18,
        points: 20,
        form: ["W", "W", "D", "L", "W"]
      },
      {
        position: 5,
        team: "Blue & White FC",
        gamesPlayed: 10,
        wins: 5,
        draws: 2,
        losses: 3,
        goalsFor: 22,
        goalsAgainst: 18,
        points: 17,
        form: ["W", "D", "W", "L", "D"]
      },
      {
        position: 6,
        team: "Campus Crusaders",
        gamesPlayed: 10,
        wins: 4,
        draws: 2,
        losses: 4,
        goalsFor: 18,
        goalsAgainst: 20,
        points: 14,
        form: ["L", "W", "D", "W", "L"]
      }
    ];
  }

  _getRowClass(position) {
    if (position === 1) return "top-position";
    if (position <= 3) return "playoff-position";
    return "";
  }

  _renderFormIndicators(form) {
    return form.map(result => {
      const className = result === "W" ? "win" : result === "L" ? "loss" : "draw";
      return html`<span class="form-indicator ${className}">${result}</span>`;
    });
  }

  render() {
    return html`
      <div class="standings-container">
        <div class="standings-header">
          <h1 class="standings-title">League Standings</h1>
          <p class="standings-subtitle">Current standings for the Penn State Soccer League</p>
        </div>

        <div class="standings-table">
          <table>
            <thead class="table-header">
              <tr>
                <th class="center">Pos</th>
                <th>Team</th>
                <th class="center">GP</th>
                <th class="center">W</th>
                <th class="center">D</th>
                <th class="center">L</th>
                <th class="center">GF</th>
                <th class="center">GA</th>
                <th class="center">GD</th>
                <th class="center">Pts</th>
              </tr>
            </thead>
            <tbody>
              ${this.standings.map(team => html`
                <tr class="${this._getRowClass(team.position)}">
                  <td class="position">${team.position}</td>
                  <td class="team-name">${team.team}</td>
                  <td class="stats">${team.gamesPlayed}</td>
                  <td class="stats">${team.wins}</td>
                  <td class="stats">${team.draws}</td>
                  <td class="stats">${team.losses}</td>
                  <td class="stats">${team.goalsFor}</td>
                  <td class="stats">${team.goalsAgainst}</td>
                  <td class="stats">${team.goalsFor - team.goalsAgainst >= 0 ? '+' : ''}${team.goalsFor - team.goalsAgainst}</td>
                  <td class="points">${team.points}</td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
        
        <div class="glossary">
          <h3 class="glossary-title">Standings Key</h3>
          <div class="glossary-grid">
            <div class="glossary-item">
              <span class="glossary-abbr">GP</span>
              <span class="glossary-desc">Games Played</span>
            </div>
            <div class="glossary-item">
              <span class="glossary-abbr">W</span>
              <span class="glossary-desc">Wins</span>
            </div>
            <div class="glossary-item">
              <span class="glossary-abbr">D</span>
              <span class="glossary-desc">Draws</span>
            </div>
            <div class="glossary-item">
              <span class="glossary-abbr">L</span>
              <span class="glossary-desc">Losses</span>
            </div>
            <div class="glossary-item">
              <span class="glossary-abbr">GF</span>
              <span class="glossary-desc">Goals For</span>
            </div>
            <div class="glossary-item">
              <span class="glossary-abbr">GA</span>
              <span class="glossary-desc">Goals Against</span>
            </div>
            <div class="glossary-item">
              <span class="glossary-abbr">GD</span>
              <span class="glossary-desc">Goal Difference</span>
            </div>
            <div class="glossary-item">
              <span class="glossary-abbr">Pts</span>
              <span class="glossary-desc">Points</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PslStandings.tag, PslStandings);
