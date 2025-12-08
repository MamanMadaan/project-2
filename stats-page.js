export class StatsPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="page">
        <!-- Back Button -->
        <div class="page__nav">
          <button id="back-btn" class="button button--secondary button--back">
            ← Back to Home
          </button>
        </div>

        <!-- Header -->
        <div class="page__header">
          <h1 class="page__title">League Statistics</h1>
          <p class="page__description">Current season standings, top performers, and team statistics</p>
        </div>

        <!-- Main Content Grid -->
        <div class="stats-container">
          
          <!-- Top Stats Cards -->
          <div class="stats-cards">
            
            <div class="stats-card stats-card--primary">
              <div class="stats-card__icon">⚽</div>
              <div class="stats-card__number">89</div>
              <div class="stats-card__label">Total Goals Scored</div>
            </div>
            
            <div class="stats-card stats-card--success">
              <div class="stats-card__icon">🏆</div>
              <div class="stats-card__number">19</div>
              <div class="stats-card__label">Games Played</div>
            </div>
            
            <div class="stats-card stats-card--warning">
              <div class="stats-card__icon">👥</div>
              <div class="stats-card__number">108</div>
              <div class="stats-card__label">Active Players</div>
            </div>
            
            <div class="stats-card stats-card--purple">
              <div class="stats-card__icon">📊</div>
              <div class="stats-card__number">4.68</div>
              <div class="stats-card__label">Avg Goals/Game</div>
            </div>
          </div>

          <!-- Main Content Area -->
          <div class="stats-content">
            
            <!-- League Standings -->
            <div class="standings-table">
              <div class="standings-table__header">
                <h2 class="standings-table__title">League Standings</h2>
              </div>
              
              <div class="table-container">
                <table class="table">
                  <thead class="table__head">
                    <tr class="table__row table__row--header">
                      <th class="table__header">Rank</th>
                      <th class="table__header">Team</th>
                      <th class="table__header table__header--center">GP</th>
                      <th class="table__header table__header--center">W</th>
                      <th class="table__header table__header--center">L</th>
                      <th class="table__header table__header--center">D</th>
                      <th class="table__header table__header--center">GF</th>
                      <th class="table__header table__header--center">GA</th>
                      <th class="table__header table__header--center">Pts</th>
                    </tr>
                  </thead>
                  <tbody class="table__body">
                    <tr class="table__row table__row--first-place">
                      <td class="table__cell table__cell--rank table__cell--first">1</td>
                      <td class="table__cell table__cell--team">Nittany Lions FC</td>
                      <td class="table__cell table__cell--center">4</td>
                      <td class="table__cell table__cell--center table__cell--wins">3</td>
                      <td class="table__cell table__cell--center table__cell--losses">0</td>
                      <td class="table__cell table__cell--center">1</td>
                      <td class="table__cell table__cell--center">12</td>
                      <td class="table__cell table__cell--center">4</td>
                      <td class="table__cell table__cell--center table__cell--points">10</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--rank">2</td>
                      <td class="table__cell table__cell--team">Penn State United</td>
                      <td class="table__cell table__cell--center">3</td>
                      <td class="table__cell table__cell--center table__cell--wins">2</td>
                      <td class="table__cell table__cell--center table__cell--losses">0</td>
                      <td class="table__cell table__cell--center">1</td>
                      <td class="table__cell table__cell--center">9</td>
                      <td class="table__cell table__cell--center">3</td>
                      <td class="table__cell table__cell--center table__cell--points">7</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--rank">3</td>
                      <td class="table__cell table__cell--team">State College FC</td>
                      <td class="table__cell table__cell--center">2</td>
                      <td class="table__cell table__cell--center table__cell--wins">2</td>
                      <td class="table__cell table__cell--center table__cell--losses">0</td>
                      <td class="table__cell table__cell--center">0</td>
                      <td class="table__cell table__cell--center">8</td>
                      <td class="table__cell table__cell--center">2</td>
                      <td class="table__cell table__cell--center table__cell--points">6</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--rank">4</td>
                      <td class="table__cell table__cell--team">Blue & White SC</td>
                      <td class="table__cell table__cell--center">2</td>
                      <td class="table__cell table__cell--center table__cell--wins">1</td>
                      <td class="table__cell table__cell--center table__cell--losses">0</td>
                      <td class="table__cell table__cell--center">1</td>
                      <td class="table__cell table__cell--center">6</td>
                      <td class="table__cell table__cell--center">3</td>
                      <td class="table__cell table__cell--center table__cell--points">4</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--rank">5</td>
                      <td class="table__cell table__cell--team">Centre County SC</td>
                      <td class="table__cell table__cell--center">2</td>
                      <td class="table__cell table__cell--center table__cell--wins">1</td>
                      <td class="table__cell table__cell--center table__cell--losses">1</td>
                      <td class="table__cell table__cell--center">0</td>
                      <td class="table__cell table__cell--center">5</td>
                      <td class="table__cell table__cell--center">4</td>
                      <td class="table__cell table__cell--center table__cell--points">3</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--rank">6</td>
                      <td class="table__cell table__cell--team">Beaver Stadium FC</td>
                      <td class="table__cell table__cell--center">2</td>
                      <td class="table__cell table__cell--center table__cell--wins">1</td>
                      <td class="table__cell table__cell--center table__cell--losses">1</td>
                      <td class="table__cell table__cell--center">0</td>
                      <td class="table__cell table__cell--center">4</td>
                      <td class="table__cell table__cell--center">5</td>
                      <td class="table__cell table__cell--center table__cell--points">3</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--rank">7</td>
                      <td class="table__cell table__cell--team">University Park United</td>
                      <td class="table__cell table__cell--center">1</td>
                      <td class="table__cell table__cell--center table__cell--wins">0</td>
                      <td class="table__cell table__cell--center table__cell--losses">0</td>
                      <td class="table__cell table__cell--center">1</td>
                      <td class="table__cell table__cell--center">3</td>
                      <td class="table__cell table__cell--center">3</td>
                      <td class="table__cell table__cell--center table__cell--points">1</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--rank">8</td>
                      <td class="table__cell table__cell--team">Mount Nittany FC</td>
                      <td class="table__cell table__cell--center">1</td>
                      <td class="table__cell table__cell--center table__cell--wins">0</td>
                      <td class="table__cell table__cell--center table__cell--losses">1</td>
                      <td class="table__cell table__cell--center">0</td>
                      <td class="table__cell table__cell--center">2</td>
                      <td class="table__cell table__cell--center">4</td>
                      <td class="table__cell table__cell--center table__cell--points">0</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--rank">9</td>
                      <td class="table__cell table__cell--team">Happy Valley FC</td>
                      <td class="table__cell table__cell--center">2</td>
                      <td class="table__cell table__cell--center table__cell--wins">0</td>
                      <td class="table__cell table__cell--center table__cell--losses">2</td>
                      <td class="table__cell table__cell--center">0</td>
                      <td class="table__cell table__cell--center">1</td>
                      <td class="table__cell table__cell--center">7</td>
                      <td class="table__cell table__cell--center table__cell--points">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Top Scorers & Team Stats -->
            <div class="stats-sidebar">
              
              <!-- Top Scorers -->
              <div class="top-scorers">
                <div class="top-scorers__header">
                  <h3 class="top-scorers__title">⚽ Top Scorers</h3>
                </div>
                
                <div class="top-scorers__content">
                  <div class="top-scorers__list">
                    
                    <div class="top-scorer top-scorer--first">
                      <div class="top-scorer__info">
                        <div class="top-scorer__name">Marcus Johnson</div>
                        <div class="top-scorer__team">Nittany Lions FC</div>
                      </div>
                      <div class="top-scorer__goals top-scorer__goals--first">8</div>
                    </div>

                    <div class="top-scorer">
                      <div class="top-scorer__info">
                        <div class="top-scorer__name">David Chen</div>
                        <div class="top-scorer__team">State College FC</div>
                      </div>
                      <div class="top-scorer__goals">6</div>
                    </div>

                    <div class="top-scorer">
                      <div class="top-scorer__info">
                        <div class="top-scorer__name">Sarah Martinez</div>
                        <div class="top-scorer__team">Penn State United</div>
                      </div>
                      <div class="top-scorer__goals">5</div>
                    </div>

                    <div class="top-scorer">
                      <div class="top-scorer__info">
                        <div class="top-scorer__name">Alex Rodriguez</div>
                        <div class="top-scorer__team">Blue & White SC</div>
                      </div>
                      <div class="top-scorer__goals">4</div>
                    </div>

                    <div class="top-scorer">
                      <div class="top-scorer__info">
                        <div class="top-scorer__name">Jamie Thompson</div>
                        <div class="top-scorer__team">Centre County SC</div>
                      </div>
                      <div class="top-scorer__goals">4</div>
                    </div>

                  </div>
                </div>
              </div>

              <!-- Team Performance -->
              <div class="performance-metrics">
                <div class="performance-metrics__header">
                  <h3 class="performance-metrics__title">📊 Performance</h3>
                </div>
                
                <div class="performance-metrics__content">
                  <div class="performance-metrics__list">
                    
                    <div class="performance-metric">
                      <div class="performance-metric__header">
                        <span class="performance-metric__label">Goals per Game</span>
                        <span class="performance-metric__value">4.68</span>
                      </div>
                      <div class="progress-bar">
                        <div class="progress-bar__fill progress-bar__fill--purple" style="width: 94%;"></div>
                      </div>
                    </div>

                    <div class="performance-metric">
                      <div class="performance-metric__header">
                        <span class="performance-metric__label">Fair Play Score</span>
                        <span class="performance-metric__value">8.7/10</span>
                      </div>
                      <div class="progress-bar">
                        <div class="progress-bar__fill progress-bar__fill--warning" style="width: 87%;"></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    `;
    
    // Add event listeners
    setTimeout(() => {
      const backBtn = this.querySelector('#back-btn');
      
      // Back button functionality
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'home' },
            bubbles: true 
          }));
        });
      }
    }, 0);
  }
}

customElements.define('stats-page', StatsPage);
