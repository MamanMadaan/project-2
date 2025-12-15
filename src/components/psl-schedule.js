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
      selectedWeek: { type: String }
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
        max-width: var(--ddd-breakpoint-xl);
        margin: 0 auto;
        padding: var(--ddd-spacing-6);
      }

      .schedule-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8);
      }

      .schedule-title {
        font-size: var(--ddd-font-size-3xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0 0 var(--ddd-spacing-2) 0;
      }

      .schedule-subtitle {
        font-size: var(--ddd-font-size-lg);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0;
      }

      .schedule-filters {
        display: flex;
        gap: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-6);
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      .filter-group {
        display: flex;
        gap: var(--ddd-spacing-3);
        align-items: center;
      }

      .filter-label {
        font-size: var(--ddd-font-size-sm);
        font-weight: var(--ddd-font-weight-medium);
        color: var(--ddd-theme-default-coalyGray);
      }

      .filter-select {
        padding: var(--ddd-spacing-3);
        border: 2px solid var(--ddd-theme-default-slateLight);
        
        font-size: var(--ddd-font-size-sm);
        color: var(--ddd-theme-default-coalyGray);
        font-family: var(--ddd-font-primary);
        min-width: 150px;
      }

      .schedule-grid {
        display: grid;
        gap: var(--ddd-spacing-4);
      }

      .week-section {
        background: var(--ddd-theme-default-white);
        
        border: 1px solid var(--ddd-theme-default-slateLight);
        box-shadow: var(--ddd-boxShadow-1);
        overflow: hidden;
      }

      .week-header {
        background: linear-gradient(135deg, var(--ddd-theme-default-skyBlue), var(--ddd-theme-default-navy));
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-4);
      }

      .week-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        margin: 0;
        color: var(--ddd-theme-default-coalyGray) !important;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
      }

      .games-list {
        padding: var(--ddd-spacing-4);
      }

      .game-card {
        display: grid;
        grid-template-columns: 1fr auto 1fr auto;
        gap: var(--ddd-spacing-4);
        align-items: center;
        padding: var(--ddd-spacing-4);
        border: 1px solid var(--ddd-theme-default-slateLight);
        margin-bottom: var(--ddd-spacing-3);
        transition: all 0.3s ease;
      }

      .game-card:last-child {
        margin-bottom: 0;
      }

      .team {
        text-align: center;
      }

      .team-name {
        font-size: var(--ddd-font-size-base);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0 0 var(--ddd-spacing-1) 0;
      }

      .team-division {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-coalyGray);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .vs-divider {
        font-size: var(--ddd-font-size-lg);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        text-align: center;
      }

      .game-info {
        text-align: right;
        min-width: 120px;
      }

      .game-time {
        font-size: var(--ddd-font-size-sm);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0 0 var(--ddd-spacing-1) 0;
      }

      .game-location {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-coalyGray);
      }

      .score {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        text-align: center;
        background: var(--ddd-theme-default-slateLight);
        padding: var(--ddd-spacing-2);
        
      }

      .completed .game-card {
        position: relative;
      }

      .completed-badge {
        position: absolute;
        top: var(--ddd-spacing-2);
        right: var(--ddd-spacing-2);
        background: var(--ddd-theme-default-forestGreen);
        color: var(--ddd-theme-default-white);
        font-size: var(--ddd-font-size-2xs);
        font-weight: var(--ddd-font-weight-bold);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        
        text-transform: uppercase;
        letter-spacing: 0.25px;
        box-shadow: var(--ddd-boxShadow-1);
      }

      .upcoming .team-name {
        color: var(--ddd-theme-default-skyBlue);
      }

      .no-games {
        text-align: center;
        padding: var(--ddd-spacing-8);
        color: var(--ddd-theme-default-slateMaxLight);
        font-size: var(--ddd-font-size-lg);
      }

      @media (max-width: 768px) {
        .schedule-container {
          padding: var(--ddd-spacing-2);
        }

        .schedule-title {
          font-size: var(--ddd-font-size-xl);
        }

        .schedule-filters {
          flex-direction: column;
          align-items: stretch;
          gap: var(--ddd-spacing-2);
        }

        .filter-group {
          justify-content: space-between;
        }

        .filter-select {
          min-width: unset;
          width: 100%;
          padding: var(--ddd-spacing-2);
        }

        .games-list {
          padding: var(--ddd-spacing-2);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--ddd-spacing-2);
        }

        .game-card {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-1);
          text-align: center;
          padding: var(--ddd-spacing-2);
          margin-bottom: 0;
        }

        .team {
          margin: var(--ddd-spacing-1) 0;
        }

        .team-name {
          font-size: var(--ddd-font-size-sm);
          color: var(--ddd-theme-default-skyBlue) !important;
          font-weight: var(--ddd-font-weight-bold) !important;
          line-height: 1.2;
        }

        .team-division {
          font-size: var(--ddd-font-size-xs);
          margin-top: var(--ddd-spacing-0);
        }

        .vs-divider {
          font-size: var(--ddd-font-size-sm);
          font-weight: var(--ddd-font-weight-bold) !important;
          color: var(--ddd-theme-default-coalyGray) !important;
          margin: var(--ddd-spacing-1) 0;
        }

        .game-info {
          text-align: center;
          min-width: unset;
          margin-top: var(--ddd-spacing-1);
          padding: var(--ddd-spacing-2);
          background: var(--ddd-theme-default-slateLight);
          border-radius: var(--ddd-radius-sm);
        }

        .game-time {
          font-size: var(--ddd-font-size-sm);
          font-weight: var(--ddd-font-weight-bold) !important;
          color: var(--ddd-theme-default-coalyGray) !important;
          line-height: 1.2;
        }

        .game-location {
          font-size: var(--ddd-font-size-xs);
          margin-top: var(--ddd-spacing-0);
        }

        .score {
          font-size: var(--ddd-font-size-lg);
          margin: var(--ddd-spacing-1) 0;
          padding: var(--ddd-spacing-1);
        }

        .completed-badge {
          position: static;
          display: inline-block;
          margin-top: var(--ddd-spacing-1);
          font-size: var(--ddd-font-size-3xs);
          padding: 2px var(--ddd-spacing-1);
        }

        .week-header {
          padding: var(--ddd-spacing-3);
        }

        .week-title {
          font-size: var(--ddd-font-size-lg);
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
            division: "Premier League",
            time: "2:00 PM",
            location: "Beaver Stadium",
            status: "completed",
            homeScore: 3,
            awayScore: 1
          },
          {
            homeTeam: "Blue & White FC",
            awayTeam: "Campus Crusaders", 
            division: "Premier League",
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
            division: "Premier League",
            time: "1:00 PM",
            location: "Penn State Fields",
            status: "completed",
            homeScore: 4,
            awayScore: 2
          },
          {
            homeTeam: "Nittany United",
            awayTeam: "Blue & White FC",
            division: "Premier League",
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
            division: "Premier League",
            time: "2:00 PM",
            location: "Beaver Stadium",
            status: "upcoming"
          },
          {
            homeTeam: "Campus Crusaders",
            awayTeam: "Happy Valley Stars",
            division: "Premier League",
            time: "4:00 PM",
            location: "IM Fields West",
            status: "upcoming"
          },
          {
            homeTeam: "Blue & White FC",
            awayTeam: "Nittany United",
            division: "Premier League",
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
            division: "Premier League",
            time: "1:30 PM",
            location: "University Park",
            status: "upcoming"
          },
          {
            homeTeam: "State College Strikers",
            awayTeam: "Nittany United",
            division: "Premier League",
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

  _renderGame(game) {
    return html`
      <div class="game-card">
        ${game.status === "completed" ? html`<div class="completed-badge">Completed</div>` : ''}
        <div class="team">
          <div class="team-name">${game.homeTeam}</div>
        </div>
        
        <div class="vs-divider">VS</div>
        
        <div class="team">
          <div class="team-name">${game.awayTeam}</div>
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
