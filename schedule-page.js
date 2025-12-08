export class SchedulePage extends HTMLElement {
  constructor() {
    super();
    this.scheduleData = [
      // Completed Games (Past dates)
      {
        id: 6,
        date: '2025-11-01',
        team1: 'Nittany Lions FC',
        team2: 'Happy Valley FC',
        time: '3:00 PM',
        location: 'Field A',
        type: 'regular',
        status: 'completed'
      },
      {
        id: 7,
        date: '2025-11-03',
        team1: 'Penn State United',
        team2: 'Blue & White SC',
        time: '5:30 PM',
        location: 'Field B',
        type: 'regular',
        status: 'completed'
      },
      {
        id: 8,
        date: '2025-11-05',
        team1: 'State College FC',
        team2: 'University Park United',
        time: '2:00 PM',
        location: 'Field C',
        type: 'regular',
        status: 'completed'
      },
      {
        id: 9,
        date: '2025-11-08',
        team1: 'Centre County SC',
        team2: 'Mount Nittany FC',
        time: '4:30 PM',
        location: 'Field A',
        type: 'regular',
        status: 'completed'
      },
      {
        id: 10,
        date: '2025-11-10',
        team1: 'Beaver Stadium FC',
        team2: 'Happy Valley FC',
        time: '1:00 PM',
        location: 'Field B',
        type: 'regular',
        status: 'completed'
      },
      {
        id: 11,
        date: '2025-11-12',
        team1: 'Nittany Lions FC',
        team2: 'Centre County SC',
        time: '6:00 PM',
        location: 'Main Stadium',
        type: 'regular',
        status: 'completed'
      },
      {
        id: 12,
        date: '2025-11-15',
        team1: 'Penn State United',
        team2: 'Beaver Stadium FC',
        time: '3:30 PM',
        location: 'Field C',
        type: 'regular',
        status: 'completed'
      },
      // Upcoming Regular Season Games
      {
        id: 1,
        date: '2025-11-20',
        team1: 'Nittany Lions FC',
        team2: 'Penn State United',
        time: '3:00 PM',
        location: 'Field A',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 2,
        date: '2025-11-22',
        team1: 'Blue & White SC',
        team2: 'State College FC',
        time: '5:30 PM',
        location: 'Field B',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 13,
        date: '2025-11-23',
        team1: 'University Park United',
        team2: 'Mount Nittany FC',
        time: '2:30 PM',
        location: 'Field C',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 14,
        date: '2025-11-25',
        team1: 'Centre County SC',
        team2: 'Beaver Stadium FC',
        time: '4:00 PM',
        location: 'Field A',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 4,
        date: '2025-11-27',
        team1: 'Penn State United',
        team2: 'Happy Valley FC',
        time: '4:00 PM',
        location: 'Field A',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 15,
        date: '2025-11-29',
        team1: 'Blue & White SC',
        team2: 'University Park United',
        time: '1:30 PM',
        location: 'Field B',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 16,
        date: '2025-12-01',
        team1: 'State College FC',
        team2: 'Mount Nittany FC',
        time: '3:00 PM',
        location: 'Field C',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 17,
        date: '2025-12-03',
        team1: 'Nittany Lions FC',
        team2: 'Beaver Stadium FC',
        time: '5:00 PM',
        location: 'Main Stadium',
        type: 'regular',
        status: 'upcoming'
      },
      // Playoff Games (After regular season)
      {
        id: 3,
        date: '2025-12-08',
        team1: 'Nittany Lions FC',
        team2: 'Blue & White SC',
        time: '2:00 PM',
        location: 'Main Stadium',
        type: 'playoff',
        status: 'upcoming'
      },
      {
        id: 18,
        date: '2025-12-08',
        team1: 'Penn State United',
        team2: 'State College FC',
        time: '5:00 PM',
        location: 'Main Stadium',
        type: 'playoff',
        status: 'upcoming'
      },
      // Final Game (After playoffs)
      {
        id: 5,
        date: '2025-12-15',
        team1: 'TBD',
        team2: 'TBD',
        time: '7:00 PM',
        location: 'Main Stadium',
        type: 'final',
        status: 'upcoming'
      }
    ];
    this.filteredData = this.scheduleData;
  }

  connectedCallback() {
    this.render();
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  filterSchedule() {
    const searchTerm = this.querySelector('#search-input').value.toLowerCase();
    const teamFilter = this.querySelector('#team-filter').value;
    const typeFilter = this.querySelector('#type-filter').value;
    const statusFilter = this.querySelector('#status-filter').value;

    this.filteredData = this.scheduleData.filter(game => {
      const matchesSearch = !searchTerm || 
        game.team1.toLowerCase().includes(searchTerm) ||
        game.team2.toLowerCase().includes(searchTerm) ||
        game.location.toLowerCase().includes(searchTerm);
      
      const matchesTeam = !teamFilter || 
        game.team1 === teamFilter || 
        game.team2 === teamFilter;
      
      const matchesType = !typeFilter || game.type === typeFilter;
      const matchesStatus = !statusFilter || game.status === statusFilter;

      return matchesSearch && matchesTeam && matchesType && matchesStatus;
    });

    this.renderScheduleTable();
  }

  renderScheduleTable() {
    const tableBody = this.querySelector('#schedule-table-body');
    if (!tableBody) return;

    if (this.filteredData.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="5" style="
            padding: 40px;
            text-align: center;
            color: #6b7280;
            font-style: italic;
          ">No matches found matching your criteria</td>
        </tr>
      `;
      return;
    }

    // Sort games by date (closest first)
    const sortedData = [...this.filteredData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });

    tableBody.innerHTML = sortedData.map(game => `
      <tr style="
        border-bottom: 1px solid #e2e8f0;
        transition: background-color 0.3s ease;
      " onmouseover="this.style.backgroundColor='#f8fafc'" onmouseout="this.style.backgroundColor='white'">
        <td style="
          padding: 15px;
          font-weight: 600;
          color: #1e3a8a;
        ">${this.formatDate(game.date)}</td>
        <td style="
          padding: 15px;
          color: #374151;
        ">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span>${game.team1}</span>
            <span style="
              background: #e2e8f0;
              padding: 2px 8px;
              
              font-size: 12px;
              color: #6b7280;
              font-weight: 600;
            ">vs</span>
            <span>${game.team2}</span>
          </div>
        </td>
        <td style="
          padding: 15px;
          color: #374151;
          font-weight: 500;
        ">${game.time}</td>
        <td style="
          padding: 15px;
          color: #374151;
        ">${game.location}</td>
        <td style="
          padding: 15px;
          text-align: center;
        ">
          <span style="
            padding: 4px 12px;
            
            font-size: 12px;
            font-weight: 600;
            background: ${game.type === 'final' ? '#fef3c7' : game.type === 'playoff' ? '#ddd6fe' : '#e0f2fe'};
            color: ${game.type === 'final' ? '#92400e' : game.type === 'playoff' ? '#5b21b6' : '#0369a1'};
          ">${game.type.charAt(0).toUpperCase() + game.type.slice(1)}</span>
        </td>
      </tr>
    `).join('');
  }

  render() {
    this.innerHTML = `
      <div class="page">
        <!-- Back Button -->
        <div class="page__nav">
          <button id="back-btn" class="button button--secondary button--back">
            ← Back to Home
          </button>
        </div>

        

        <!-- Filters Section -->
        <div class="schedule-filters">
          <h3 class="schedule-filters__title">
            🔍 Filter & Search
          </h3>
          
          <div class="schedule-filters__grid">
            
            <!-- Search Input -->
            <div class="form-group">
              <label class="form-group__label">Search Teams or Venues</label>
              <input 
                type="text" 
                id="search-input"
                placeholder="Enter team name or location..."
                class="form-group__input">
            </div>
            
            <!-- Team Filter -->
            <div class="form-group">
              <label class="form-group__label">Team</label>
              <select id="team-filter" class="form-group__select">
                <option value="">All Teams</option>
                <option value="Nittany Lions FC">Nittany Lions FC</option>
                <option value="Penn State United">Penn State United</option>
                <option value="Blue & White SC">Blue & White SC</option>
                <option value="Happy Valley FC">Happy Valley FC</option>
                <option value="State College FC">State College FC</option>
                <option value="University Park United">University Park United</option>
                <option value="Centre County SC">Centre County SC</option>
                <option value="Mount Nittany FC">Mount Nittany FC</option>
                <option value="Beaver Stadium FC">Beaver Stadium FC</option>
              </select>
            </div>
            
            <!-- Type Filter -->
            <div class="form-group">
              <label class="form-group__label">Match Type</label>
              <select id="type-filter" class="form-group__select">
                <option value="">All Types</option>
                <option value="regular">Regular Season</option>
                <option value="playoff">Playoffs</option>
                <option value="final">Finals</option>
              </select>
            </div>
            
            <!-- Status Filter -->
            <div class="form-group">
              <label class="form-group__label">Status</label>
              <select id="status-filter" class="form-group__select">
                <option value="">All Games</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          
          <!-- Clear Filters Button -->
          <div class="schedule-filters__actions">
            <button id="clear-filters" class="button button--secondary button--small">
              Clear All Filters
            </button>
          </div>
        </div>

        <!-- Schedule Table -->
        <div class="schedule-table">
          <!-- Table Header -->
          <div class="schedule-table__header">
            <h2 class="schedule-table__title">Match Schedule</h2>
          </div>
          
          <!-- Table Content -->
          <div class="table-container">
            <table class="table">
              <thead class="table__head">
                <tr class="table__row table__row--header">
                  <th class="table__header">Date</th>
                  <th class="table__header">Match</th>
                  <th class="table__header">Time</th>
                  <th class="table__header">Venue</th>
                  <th class="table__header table__header--center">Type</th>
                </tr>
              </thead>
              <tbody id="schedule-table-body" class="table__body">
                <!-- Content will be dynamically populated -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="schedule-actions">
          
          <div class="schedule-actions__card">
            <div class="schedule-actions__icon">📅</div>
            <h3 class="schedule-actions__title">Add to Calendar</h3>
            <p class="schedule-actions__description">Never miss a game! Add PSL schedule to your calendar.</p>
            <button class="button button--primary">
              Download Calendar
            </button>
          </div>

          <div class="schedule-actions__card">
            <div class="schedule-actions__icon">🔔</div>
            <h3 class="schedule-actions__title">Game Notifications</h3>
            <p class="schedule-actions__description">Get notified about schedule changes and game updates.</p>
            <button class="button button--secondary">
              Enable Notifications
            </button>
          </div>

        </div>
      </div>
    `;
    
    // Add event listeners after render
    setTimeout(() => {
      const backBtn = this.querySelector('#back-btn');
      const searchInput = this.querySelector('#search-input');
      const teamFilter = this.querySelector('#team-filter');
      const typeFilter = this.querySelector('#type-filter');
      const statusFilter = this.querySelector('#status-filter');
      const clearFilters = this.querySelector('#clear-filters');
      
      // Back button functionality
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'home' },
            bubbles: true 
          }));
        });
      }
      
      // Filter functionality
      const updateFilters = () => this.filterSchedule();
      
      if (searchInput) searchInput.addEventListener('input', updateFilters);
      if (teamFilter) teamFilter.addEventListener('change', updateFilters);
      if (typeFilter) typeFilter.addEventListener('change', updateFilters);
      if (statusFilter) statusFilter.addEventListener('change', updateFilters);
      
      // Clear filters
      if (clearFilters) {
        clearFilters.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          if (teamFilter) teamFilter.value = '';
          if (typeFilter) typeFilter.value = '';
          if (statusFilter) statusFilter.value = '';
          this.filterSchedule();
        });
      }
      
      // Initial render of table
      this.renderScheduleTable();
    }, 0);
  }
}

customElements.define('schedule-page', SchedulePage);
