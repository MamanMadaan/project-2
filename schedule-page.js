export class SchedulePage extends HTMLElement {
  constructor() {
    super();
    this.scheduleData = [
      {
        id: 1,
        date: '2025-01-15',
        team1: 'Nittany Lions FC',
        team2: 'Penn State United',
        time: '3:00 PM',
        location: 'Field A',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 2,
        date: '2025-01-18',
        team1: 'Blue & White SC',
        team2: 'Happy Valley FC',
        time: '5:30 PM',
        location: 'Field B',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 3,
        date: '2025-01-22',
        team1: 'Nittany Lions FC',
        team2: 'Blue & White SC',
        time: '2:00 PM',
        location: 'Main Stadium',
        type: 'playoff',
        status: 'upcoming'
      },
      {
        id: 4,
        date: '2025-01-25',
        team1: 'Penn State United',
        team2: 'Happy Valley FC',
        time: '4:00 PM',
        location: 'Field A',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 5,
        date: '2025-01-29',
        team1: 'TBD',
        team2: 'TBD',
        time: '7:00 PM',
        location: 'Main Stadium',
        type: 'final',
        status: 'upcoming'
      },
      {
        id: 6,
        date: '2025-01-08',
        team1: 'Nittany Lions FC',
        team2: 'Happy Valley FC',
        time: '3:00 PM',
        location: 'Field A',
        type: 'regular',
        status: 'completed'
      },
      {
        id: 7,
        date: '2025-01-12',
        team1: 'Penn State United',
        team2: 'Blue & White SC',
        time: '5:30 PM',
        location: 'Field B',
        type: 'regular',
        status: 'completed'
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

    tableBody.innerHTML = this.filteredData.map(game => `
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
              border-radius: 4px;
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
            border-radius: 12px;
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
      <div style="
        min-height: 80vh;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        padding: 40px 20px;
        font-family: Arial, sans-serif;
      ">
        <!-- Back Button -->
        <div style="
          max-width: 1200px;
          margin: 0 auto 20px auto;
        ">
          <button id="back-btn" style="
            background: transparent;
            border: 2px solid #1e3a8a;
            color: #1e3a8a;
            padding: 10px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
          " onmouseover="
            this.style.background='#1e3a8a'; 
            this.style.color='white';
          " onmouseout="
            this.style.background='transparent'; 
            this.style.color='#1e3a8a';
          ">
            ← Back to Home
          </button>
        </div>

        <!-- Header -->
        <div style="
          max-width: 1200px;
          margin: 0 auto 40px auto;
          text-align: center;
        ">
          <h1 style="
            font-size: 36px;
            color: #1e3a8a;
            margin: 0 0 10px 0;
            font-weight: 900;
          ">Game Schedule</h1>
          <p style="
            font-size: 18px;
            color: #6b7280;
            margin: 0;
          ">View all PSL matches, filter by team, and never miss a game</p>
        </div>

        <!-- Filters Section -->
        <div style="
          max-width: 1200px;
          margin: 0 auto 30px auto;
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <h3 style="
            margin: 0 0 20px 0;
            color: #1e3a8a;
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 10px;
          ">
            🔍 Filter & Search
          </h3>
          
          <div style="
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 15px;
            align-items: end;
          ">
            
            <!-- Search Input -->
            <div>
              <label style="
                display: block;
                margin-bottom: 5px;
                font-weight: 600;
                color: #374151;
                font-size: 14px;
              ">Search Teams or Venues</label>
              <input 
                type="text" 
                id="search-input"
                placeholder="Enter team name or location..."
                style="
                  width: 100%;
                  padding: 12px 15px;
                  border: 2px solid #e2e8f0;
                  border-radius: 8px;
                  font-size: 16px;
                  transition: border-color 0.3s ease;
                  box-sizing: border-box;
                " 
                onfocus="this.style.borderColor='#3b82f6'" 
                onblur="this.style.borderColor='#e2e8f0'">
            </div>
            
            <!-- Team Filter -->
            <div>
              <label style="
                display: block;
                margin-bottom: 5px;
                font-weight: 600;
                color: #374151;
                font-size: 14px;
              ">Team</label>
              <select 
                id="team-filter"
                style="
                  width: 100%;
                  padding: 12px 15px;
                  border: 2px solid #e2e8f0;
                  border-radius: 8px;
                  font-size: 16px;
                  transition: border-color 0.3s ease;
                  box-sizing: border-box;
                  background: white;
                " 
                onfocus="this.style.borderColor='#3b82f6'" 
                onblur="this.style.borderColor='#e2e8f0'">
                <option value="">All Teams</option>
                <option value="Nittany Lions FC">Nittany Lions FC</option>
                <option value="Penn State United">Penn State United</option>
                <option value="Blue & White SC">Blue & White SC</option>
                <option value="Happy Valley FC">Happy Valley FC</option>
              </select>
            </div>
            
            <!-- Type Filter -->
            <div>
              <label style="
                display: block;
                margin-bottom: 5px;
                font-weight: 600;
                color: #374151;
                font-size: 14px;
              ">Match Type</label>
              <select 
                id="type-filter"
                style="
                  width: 100%;
                  padding: 12px 15px;
                  border: 2px solid #e2e8f0;
                  border-radius: 8px;
                  font-size: 16px;
                  transition: border-color 0.3s ease;
                  box-sizing: border-box;
                  background: white;
                " 
                onfocus="this.style.borderColor='#3b82f6'" 
                onblur="this.style.borderColor='#e2e8f0'">
                <option value="">All Types</option>
                <option value="regular">Regular Season</option>
                <option value="playoff">Playoffs</option>
                <option value="final">Finals</option>
              </select>
            </div>
            
            <!-- Status Filter -->
            <div>
              <label style="
                display: block;
                margin-bottom: 5px;
                font-weight: 600;
                color: #374151;
                font-size: 14px;
              ">Status</label>
              <select 
                id="status-filter"
                style="
                  width: 100%;
                  padding: 12px 15px;
                  border: 2px solid #e2e8f0;
                  border-radius: 8px;
                  font-size: 16px;
                  transition: border-color 0.3s ease;
                  box-sizing: border-box;
                  background: white;
                " 
                onfocus="this.style.borderColor='#3b82f6'" 
                onblur="this.style.borderColor='#e2e8f0'">
                <option value="">All Games</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          
          <!-- Clear Filters Button -->
          <div style="margin-top: 20px; text-align: right;">
            <button id="clear-filters" style="
              background: transparent;
              border: 2px solid #6b7280;
              color: #6b7280;
              padding: 8px 20px;
              border-radius: 20px;
              cursor: pointer;
              font-size: 14px;
              transition: all 0.3s ease;
            " onmouseover="
              this.style.backgroundColor='#6b7280';
              this.style.color='white';
            " onmouseout="
              this.style.backgroundColor='transparent';
              this.style.color='#6b7280';
            ">
              Clear All Filters
            </button>
          </div>
        </div>

        <!-- Schedule Table -->
        <div style="
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          overflow: hidden;
        ">
          <!-- Table Header -->
          <div style="
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 25px;
            text-align: center;
          ">
            <h2 style="
              margin: 0;
              font-size: 24px;
              font-weight: 700;
            ">Match Schedule</h2>
          </div>
          
          <!-- Table Content -->
          <div style="overflow-x: auto;">
            <table style="
              width: 100%;
              border-collapse: collapse;
            ">
              <thead>
                <tr style="
                  background: #f8fafc;
                  border-bottom: 2px solid #e2e8f0;
                ">
                  <th style="
                    padding: 15px;
                    text-align: left;
                    font-weight: 700;
                    color: #374151;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                  ">Date</th>
                  <th style="
                    padding: 15px;
                    text-align: left;
                    font-weight: 700;
                    color: #374151;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                  ">Match</th>
                  <th style="
                    padding: 15px;
                    text-align: left;
                    font-weight: 700;
                    color: #374151;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                  ">Time</th>
                  <th style="
                    padding: 15px;
                    text-align: left;
                    font-weight: 700;
                    color: #374151;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                  ">Venue</th>
                  <th style="
                    padding: 15px;
                    text-align: center;
                    font-weight: 700;
                    color: #374151;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                  ">Type</th>
                </tr>
              </thead>
              <tbody id="schedule-table-body">
                <!-- Content will be dynamically populated -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- Quick Actions -->
        <div style="
          max-width: 1200px;
          margin: 40px auto 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        ">
          
          <div style="
            background: white;
            border-radius: 15px;
            padding: 25px;
            text-align: center;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          ">
            <div style="font-size: 32px; margin-bottom: 15px;">📅</div>
            <h3 style="
              color: #1e3a8a;
              margin: 0 0 10px 0;
              font-size: 18px;
            ">Add to Calendar</h3>
            <p style="
              color: #6b7280;
              margin: 0 0 20px 0;
              font-size: 14px;
            ">Never miss a game! Add PSL schedule to your calendar.</p>
            <button style="
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 25px;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
            " onmouseover="
              this.style.transform='translateY(-2px)';
              this.style.boxShadow='0 6px 20px rgba(30, 58, 138, 0.4)';
            " onmouseout="
              this.style.transform='translateY(0)';
              this.style.boxShadow='none';
            ">
              Download Calendar
            </button>
          </div>

          <div style="
            background: white;
            border-radius: 15px;
            padding: 25px;
            text-align: center;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          ">
            <div style="font-size: 32px; margin-bottom: 15px;">🔔</div>
            <h3 style="
              color: #1e3a8a;
              margin: 0 0 10px 0;
              font-size: 18px;
            ">Game Notifications</h3>
            <p style="
              color: #6b7280;
              margin: 0 0 20px 0;
              font-size: 14px;
            ">Get notified about schedule changes and game updates.</p>
            <button style="
              background: transparent;
              color: #1e3a8a;
              border: 2px solid #1e3a8a;
              padding: 10px 22px;
              border-radius: 25px;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
            " onmouseover="
              this.style.backgroundColor='#1e3a8a';
              this.style.color='white';
            " onmouseout="
              this.style.backgroundColor='transparent';
              this.style.color='#1e3a8a';
            ">
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