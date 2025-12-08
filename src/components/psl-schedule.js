import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./psl-button.js";

/**
 * `psl-schedule`
 * Game schedule page for Penn State Soccer League
 * 
 * @element psl-schedule
 */
export class PslSchedule extends DDDSuper(LitElement) {

  static get tag() {
    return "psl-schedule";
  }

  static get properties() {
    return {
      ...super.properties,
      games: { type: Array },
      selectedWeek: { type: String },
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

      .schedule-container {
        max-width: var(--ddd-breakpoint-xl, 1200px);
        margin: 0 auto;
        padding: var(--ddd-spacing-6, 2rem);
      }

      .schedule-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8, 3rem);
      }

      .schedule-title {
        font-size: var(--ddd-font-size-3xl, 2.25rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        color: var(--ddd-theme-default-coalyGray, #333);
        margin: 0 0 var(--ddd-spacing-2, 0.5rem) 0;
      }

      .schedule-subtitle {
        font-size: var(--ddd-font-size-lg, 1.125rem);
        color: var(--ddd-theme-default-coalyGray, #333);
        margin: 0;
      }

      .schedule-filters {
        display: flex;
        gap: var(--ddd-spacing-4, 1rem);
        margin-bottom: var(--ddd-spacing-6, 2rem);
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      .filter-group {
        display: flex;
        gap: var(--ddd-spacing-3, 0.75rem);
        align-items: center;
      }

      .filter-label {
        font-size: var(--ddd-font-size-sm, 0.875rem);
        font-weight: var(--ddd-font-weight-medium, 500);
        color: var(--ddd-theme-default-coalyGray, #333);
      }

      .filter-select {
        padding: var(--ddd-spacing-3, 0.75rem);
        border: 2px solid var(--ddd-theme-default-slateLight, #e2e8f0);
        
        font-size: var(--ddd-font-size-sm, 0.875rem);
        color: var(--ddd-theme-default-coalyGray, #333);
        font-family: var(--ddd-font-primary);
        min-width: 150px;
      }

      .schedule-grid {
        display: grid;
        gap: var(--ddd-spacing-4, 1rem);
      }

      .week-section {
        background: var(--ddd-theme-default-white, #fff);
        
        border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
        box-shadow: var(--ddd-boxShadow-1, 0 2px 4px rgba(0,0,0,0.1));
        overflow: hidden;
      }

      .week-header {
        background: linear-gradient(135deg, var(--ddd-theme-default-skyBlue, #3b82f6), var(--ddd-theme-default-navy, #1e3a8a));
        color: var(--ddd-theme-default-white, #fff);
        padding: var(--ddd-spacing-4, 1rem);
      }

      .week-title {
        font-size: var(--ddd-font-size-xl, 1.25rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        margin: 0;
      }

      .games-list {
        padding: var(--ddd-spacing-4, 1rem);
      }

      .game-card {
        display: grid;
        grid-template-columns: 1fr auto 1fr auto;
        gap: var(--ddd-spacing-4, 1rem);
        align-items: center;
        padding: var(--ddd-spacing-4, 1rem);
        border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
        margin-bottom: var(--ddd-spacing-3, 0.75rem);
        transition: all 0.3s ease;
      }

      .game-card:last-child {
        margin-bottom: 0;
      }

      .team {
        text-align: center;
      }

      .team-name {
        font-size: var(--ddd-font-size-base, 1rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        color: var(--ddd-theme-default-coalyGray, #333);
        margin: 0 0 var(--ddd-spacing-1, 0.25rem) 0;
      }

      .team-division {
        font-size: var(--ddd-font-size-xs, 0.75rem);
        color: var(--ddd-theme-default-coalyGray, #333);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .vs-divider {
        font-size: var(--ddd-font-size-lg, 1.125rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        color: var(--ddd-theme-default-skyBlue, #3b82f6);
        text-align: center;
      }

      .game-info {
        text-align: right;
        min-width: 120px;
      }

      .game-time {
        font-size: var(--ddd-font-size-sm, 0.875rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        color: var(--ddd-theme-default-coalyGray, #333);
        margin: 0 0 var(--ddd-spacing-1, 0.25rem) 0;
      }

      .game-location {
        font-size: var(--ddd-font-size-xs, 0.75rem);
        color: var(--ddd-theme-default-coalyGray, #333);
      }

      .score {
        font-size: var(--ddd-font-size-xl, 1.25rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        color: var(--ddd-theme-default-skyBlue, #3b82f6);
        text-align: center;
        background: var(--ddd-theme-default-slateLight, #e2e8f0);
        padding: var(--ddd-spacing-2, 0.5rem);
        
      }

      .completed .game-card {
        position: relative;
      }

      .completed-badge {
        position: absolute;
        top: var(--ddd-spacing-2, 0.5rem);
        right: var(--ddd-spacing-2, 0.5rem);
        background: var(--ddd-theme-default-forestGreen, #16a34a);
        color: var(--ddd-theme-default-white, #fff);
        font-size: var(--ddd-font-size-2xs, 0.625rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        padding: var(--ddd-spacing-1, 0.25rem) var(--ddd-spacing-2, 0.5rem);
        
        text-transform: uppercase;
        letter-spacing: 0.25px;
        box-shadow: var(--ddd-boxShadow-1, 0 1px 3px rgba(0,0,0,0.1));
      }

      .upcoming .team-name {
        color: var(--ddd-theme-default-skyBlue, #3b82f6);
      }

      .no-games {
        text-align: center;
        padding: var(--ddd-spacing-8, 3rem);
        color: var(--ddd-theme-default-slateMaxLight, #666);
        font-size: var(--ddd-font-size-lg, 1.125rem);
      }

      @media (max-width: 768px) {
        .schedule-container {
          padding: var(--ddd-spacing-4, 1rem);
        }

        .schedule-filters {
          flex-direction: column;
          align-items: stretch;
        }

        .filter-group {
          justify-content: space-between;
        }

        .game-card {
          grid-template-columns: 1fr;
          gap: var(--ddd-spacing-3, 0.75rem);
          text-align: center;
        }

        .game-info {
          text-align: center;
        }

        .vs-divider {
          order: -1;
        }
      }
    `];
  }

  constructor() {
    super();
    this.games = [
      {
        week: "Week 1",
        date: "March 15, 2024",
        games: [
          {
            homeTeam: "Penn State Lions",
            awayTeam: "Nittany United",
            division: "Elite",
            time: "2:00 PM",
            location: "Beaver Stadium",
            status: "completed",
            homeScore: 3,
            awayScore: 1
          },
          {
            homeTeam: "Blue & White FC",
            awayTeam: "Campus Crusaders", 
            division: "Recreational",
            time: "4:00 PM",
            location: "IM Fields East",
            status: "completed",
            homeScore: 2,
            awayScore: 2
          }
        ]
      },
      {
        week: "Week 2",
        date: "March 22, 2024",
        games: [
          {
            homeTeam: "State College Strikers",
            awayTeam: "Happy Valley Stars",
            division: "Elite",
            time: "1:00 PM",
            location: "Penn State Fields",
            status: "completed",
            homeScore: 4,
            awayScore: 2
          },
          {
            homeTeam: "Nittany United",
            awayTeam: "Blue & White FC",
            division: "Competitive",
            time: "3:30 PM",
            location: "Jeffrey Field",
            status: "completed",
            homeScore: 1,
            awayScore: 0
          }
        ]
      },
      {
        week: "Week 3",
        date: "March 29, 2024",
        games: [
          {
            homeTeam: "Penn State Lions",
            awayTeam: "State College Strikers",
            division: "Elite",
            time: "2:00 PM",
            location: "Beaver Stadium",
            status: "upcoming"
          },
          {
            homeTeam: "Campus Crusaders",
            awayTeam: "Happy Valley Stars",
            division: "Recreational",
            time: "4:00 PM",
            location: "IM Fields West",
            status: "upcoming"
          },
          {
            homeTeam: "Blue & White FC",
            awayTeam: "Nittany United",
            division: "Competitive",
            time: "6:00 PM",
            location: "IM Fields East",
            status: "upcoming"
          }
        ]
      },
      {
        week: "Week 4",
        date: "April 5, 2024",
        games: [
          {
            homeTeam: "Happy Valley Stars",
            awayTeam: "Penn State Lions",
            division: "Elite",
            time: "1:30 PM",
            location: "University Park",
            status: "upcoming"
          },
          {
            homeTeam: "State College Strikers",
            awayTeam: "Nittany United",
            division: "Competitive",
            time: "3:30 PM",
            location: "Penn State Fields",
            status: "upcoming"
          }
        ]
      }
    ];
    this.selectedWeek = "";
    this.selectedDivision = "";
  }

  get filteredGames() {
    return this.games.filter(weekData => {
      if (this.selectedWeek && weekData.week !== this.selectedWeek) {
        return false;
      }
      
      if (this.selectedDivision) {
        return weekData.games.some(game => game.division === this.selectedDivision);
      }
      
      return true;
    }).map(weekData => ({
      ...weekData,
      games: this.selectedDivision 
        ? weekData.games.filter(game => game.division === this.selectedDivision)
        : weekData.games
    }));
  }

  _handleWeekFilter(e) {
    this.selectedWeek = e.target.value;
  }

  _handleDivisionFilter(e) {
    this.selectedDivision = e.target.value;
  }

  _renderGame(game) {
    return html`
      <div class="game-card">
        ${game.status === "completed" ? html`<div class="completed-badge">Completed</div>` : ''}
        <div class="team">
          <div class="team-name">${game.homeTeam}</div>
          <div class="team-division">${game.division}</div>
        </div>
        
        <div class="vs-divider">VS</div>
        
        <div class="team">
          <div class="team-name">${game.awayTeam}</div>
          <div class="team-division">${game.division}</div>
        </div>
        
        <div class="game-info">
          ${game.status === "completed" 
            ? html`<div class="score">${game.homeScore} - ${game.awayScore}</div>`
            : html`
              <div class="game-time">${game.time}</div>
              <div class="game-location">${game.location}</div>
            `
          }
        </div>
      </div>
    `;
  }

  render() {
    const filteredGames = this.filteredGames;

    return html`
      <div class="schedule-container">
        <div class="schedule-header">
          <h1 class="schedule-title">Game Schedule</h1>
          <p class="schedule-subtitle">View all games and results for the Penn State Soccer League</p>
        </div>

        <div class="schedule-filters">
          <div class="filter-group">
            <label class="filter-label" for="week-filter">Week:</label>
            <select 
              id="week-filter" 
              class="filter-select"
              @change="${this._handleWeekFilter}">
              <option value="">All Weeks</option>
              ${this.games.map(weekData => html`
                <option value="${weekData.week}">${weekData.week}</option>
              `)}
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label" for="division-filter">Division:</label>
            <select 
              id="division-filter" 
              class="filter-select"
              @change="${this._handleDivisionFilter}">
              <option value="">All Divisions</option>
              <option value="Elite">Elite</option>
              <option value="Competitive">Competitive</option>
              <option value="Recreational">Recreational</option>
            </select>
          </div>
        </div>

        <div class="schedule-grid">
          ${filteredGames.length > 0 
            ? filteredGames.map(weekData => html`
              <div class="week-section">
                <div class="week-header">
                  <h2 class="week-title">${weekData.week} - ${weekData.date}</h2>
                </div>
                <div class="games-list ${weekData.games[0]?.status}">
                  ${weekData.games.map(game => this._renderGame(game))}
                </div>
              </div>
            `)
            : html`
              <div class="no-games">
                No games found matching your criteria.
              </div>
            `
          }
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PslSchedule.tag, PslSchedule);
