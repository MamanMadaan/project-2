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
      standings: { type: Array },
      selectedDivision: { type: String }
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
        max-width: var(--ddd-breakpoint-xl, 1200px);
        margin: 0 auto;
        padding: var(--ddd-spacing-6, 2rem);
      }

      .standings-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8, 3rem);
      }

      .standings-title {
        font-size: var(--ddd-font-size-3xl, 2.25rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        color: var(--ddd-theme-default-coalyGray, #333);
        margin: 0 0 var(--ddd-spacing-2, 0.5rem) 0;
      }

      .standings-subtitle {
        font-size: var(--ddd-font-size-lg, 1.125rem);
        color: var(--ddd-theme-default-slateMaxLight, #666);
        margin: 0;
      }

      .division-tabs {
        display: flex;
        justify-content: center;
        margin-bottom: var(--ddd-spacing-6, 2rem);
        gap: var(--ddd-spacing-2, 0.5rem);
        flex-wrap: wrap;
      }

      .division-tab {
        padding: var(--ddd-spacing-3, 0.75rem) var(--ddd-spacing-6, 2rem);
        background: var(--ddd-theme-default-white, #fff);
        border: 2px solid var(--ddd-theme-default-slateLight, #e2e8f0);
        border-radius: var(--ddd-radius-md, 8px);
        font-size: var(--ddd-font-size-sm, 0.875rem);
        font-weight: var(--ddd-font-weight-medium, 500);
        color: var(--ddd-theme-default-coalyGray, #333);
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: var(--ddd-font-primary);
      }

      .division-tab:hover {
        border-color: var(--ddd-theme-default-skyBlue, #3b82f6);
      }

      .division-tab.active {
        background: var(--ddd-theme-default-skyBlue, #3b82f6);
        color: var(--ddd-theme-default-white, #fff);
        border-color: var(--ddd-theme-default-skyBlue, #3b82f6);
      }

      .standings-table {
        background: var(--ddd-theme-default-white, #fff);
        border-radius: var(--ddd-radius-lg, 12px);
        box-shadow: var(--ddd-boxShadow-1, 0 2px 4px rgba(0,0,0,0.1));
        border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
        overflow: hidden;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      .table-header {
        background: linear-gradient(135deg, var(--ddd-theme-default-skyBlue, #3b82f6), var(--ddd-theme-default-navy, #1e3a8a));
        color: var(--ddd-theme-default-white, #fff);
      }

      .table-header th {
        padding: var(--ddd-spacing-4, 1rem);
        text-align: left;
        font-size: var(--ddd-font-size-sm, 0.875rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .table-header th.center {
        text-align: center;
      }

      .table-header th.right {
        text-align: right;
      }

      tbody tr {
        border-bottom: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
        transition: background-color 0.2s ease;
      }

      tbody tr:hover {
        background: var(--ddd-theme-default-athertonViolet, #f8fafc);
      }

      tbody tr:last-child {
        border-bottom: none;
      }

      tbody td {
        padding: var(--ddd-spacing-4, 1rem);
        font-size: var(--ddd-font-size-sm, 0.875rem);
        color: var(--ddd-theme-default-coalyGray, #333);
      }

      .position {
        font-weight: var(--ddd-font-weight-bold, 700);
        color: var(--ddd-theme-default-skyBlue, #3b82f6);
        text-align: center;
        width: 60px;
      }

      .team-name {
        font-weight: var(--ddd-font-weight-bold, 700);
        min-width: 200px;
      }

      .stats {
        text-align: center;
        width: 60px;
      }

      .points {
        font-weight: var(--ddd-font-weight-bold, 700);
        color: var(--ddd-theme-default-skyBlue, #3b82f6);
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
        border-radius: 50%;
        margin: 0 1px;
        color: var(--ddd-theme-default-white, #fff);
        font-size: var(--ddd-font-size-xs, 0.75rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        line-height: 20px;
        text-align: center;
      }

      .form-indicator.win {
        background: var(--ddd-theme-default-forestGreen, #16a34a);
      }

      .form-indicator.loss {
        background: var(--ddd-theme-default-original87Pink, #dc2626);
      }

      .form-indicator.draw {
        background: var(--ddd-theme-default-slateMaxLight, #666);
      }

      .top-position {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
      }

      .playoff-position {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05));
      }

      @media (max-width: 768px) {
        .standings-container {
          padding: var(--ddd-spacing-4, 1rem);
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
          padding: var(--ddd-spacing-2, 0.5rem);
          font-size: var(--ddd-font-size-xs, 0.75rem);
        }

        .team-name {
          min-width: 150px;
        }
      }
    `];
  }

  constructor() {
    super();
    this.standings = {
      "Elite": [
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
        }
      ],
      "Competitive": [
        {
          position: 1,
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
          position: 2,
          team: "University Wolves",
          gamesPlayed: 10,
          wins: 5,
          draws: 3,
          losses: 2,
          goalsFor: 22,
          goalsAgainst: 16,
          points: 18,
          form: ["D", "W", "W", "D", "L"]
        },
        {
          position: 3,
          team: "Central PA United",
          gamesPlayed: 10,
          wins: 4,
          draws: 4,
          losses: 2,
          goalsFor: 19,
          goalsAgainst: 17,
          points: 16,
          form: ["D", "D", "W", "L", "D"]
        }
      ],
      "Recreational": [
        {
          position: 1,
          team: "Blue & White FC",
          gamesPlayed: 8,
          wins: 5,
          draws: 2,
          losses: 1,
          goalsFor: 22,
          goalsAgainst: 12,
          points: 17,
          form: ["W", "D", "W", "W", "D"]
        },
        {
          position: 2,
          team: "Campus Crusaders",
          gamesPlayed: 8,
          wins: 4,
          draws: 2,
          losses: 2,
          goalsFor: 18,
          goalsAgainst: 15,
          points: 14,
          form: ["L", "W", "D", "W", "W"]
        },
        {
          position: 3,
          team: "Happy Valley Wanderers",
          gamesPlayed: 8,
          wins: 3,
          draws: 3,
          losses: 2,
          goalsFor: 16,
          goalsAgainst: 14,
          points: 12,
          form: ["D", "L", "D", "W", "D"]
        }
      ]
    };
    this.selectedDivision = "Elite";
  }

  _selectDivision(division) {
    this.selectedDivision = division;
  }

  _getRowClass(position, division) {
    if (position === 1) return "top-position";
    if (division === "Elite" && position <= 2) return "playoff-position";
    if (division !== "Elite" && position <= 3) return "playoff-position";
    return "";
  }

  _renderFormIndicators(form) {
    return form.map(result => {
      const className = result === "W" ? "win" : result === "L" ? "loss" : "draw";
      return html`<span class="form-indicator ${className}">${result}</span>`;
    });
  }

  render() {
    const currentStandings = this.standings[this.selectedDivision] || [];

    return html`
      <div class="standings-container">
        <div class="standings-header">
          <h1 class="standings-title">League Standings</h1>
          <p class="standings-subtitle">Current standings for all divisions in the Penn State Soccer League</p>
        </div>

        <div class="division-tabs">
          ${Object.keys(this.standings).map(division => html`
            <button 
              class="division-tab ${division === this.selectedDivision ? 'active' : ''}"
              @click="${() => this._selectDivision(division)}">
              ${division} Division
            </button>
          `)}
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
                <th class="center">Form</th>
              </tr>
            </thead>
            <tbody>
              ${currentStandings.map(team => html`
                <tr class="${this._getRowClass(team.position, this.selectedDivision)}">
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
                  <td class="form">${this._renderFormIndicators(team.form)}</td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PslStandings.tag, PslStandings);