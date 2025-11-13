export class TeamsPage extends HTMLElement {
  constructor() {
    super();
    this.selectedTeam = null;
    this.teamsData = [
      {
        id: 1,
        title: "Nittany Lions FC",
        description: "The pride of Penn State soccer! Known for their aggressive offensive play and team unity. Our most successful team with multiple championship titles.",
        color: "#1e3a8a",
        wins: 6,
        losses: 1,
        draws: 1,
        captain: "Marcus Johnson",
        coach: "Coach Sarah Williams",
        homeField: "Beaver Stadium Field A",
        founded: "2019",
        teamImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "2024 PSL Champions",
          "2023 Fair Play Award",
          "Best Offensive Record 2024"
        ],
        roster: [
          { number: 10, name: "Marcus Johnson", position: "Forward", year: "Senior" },
          { number: 7, name: "Jordan Smith", position: "Midfielder", year: "Junior" },
          { number: 1, name: "Alex Turner", position: "Goalkeeper", year: "Sophomore" },
          { number: 5, name: "Emma Rodriguez", position: "Defender", year: "Senior" },
          { number: 11, name: "Chris Davis", position: "Winger", year: "Freshman" }
        ]
      },
      {
        id: 2,
        title: "Penn State United",
        description: "A team built on teamwork and strategic play. Known for their solid defense and quick counter-attacks. Always a tough opponent!",
        color: "#dc2626",
        wins: 5,
        losses: 2,
        draws: 1,
        captain: "Sarah Chen",
        coach: "Coach Mike Thompson",
        homeField: "IM Fields Complex",
        founded: "2020",
        teamImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "2023 Defensive Excellence Award",
          "Most Improved Team 2024",
          "Sportsmanship Champions 2023"
        ],
        roster: [
          { number: 9, name: "Sarah Chen", position: "Striker", year: "Senior" },
          { number: 6, name: "Michael Park", position: "Midfielder", year: "Junior" },
          { number: 3, name: "Lisa Wang", position: "Defender", year: "Sophomore" },
          { number: 12, name: "Tyler Brooks", position: "Forward", year: "Senior" },
          { number: 2, name: "Amanda Foster", position: "Defender", year: "Junior" }
        ]
      },
      {
        id: 3,
        title: "Blue & White SC",
        description: "Representing the classic Penn State colors with pride! A balanced team with strong midfield control and excellent team chemistry.",
        color: "#059669",
        wins: 4,
        losses: 3,
        draws: 1,
        captain: "Alex Rodriguez",
        coach: "Coach Jennifer Martinez",
        homeField: "Recreation Park",
        founded: "2021",
        teamImage: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "Best Newcomer Team 2021",
          "Most Goals Scored in 2023",
          "Team Spirit Award 2024"
        ],
        roster: [
          { number: 8, name: "Alex Rodriguez", position: "Midfielder", year: "Senior" },
          { number: 4, name: "Rachel Green", position: "Defender", year: "Junior" },
          { number: 15, name: "Kevin Liu", position: "Forward", year: "Sophomore" },
          { number: 13, name: "Maya Patel", position: "Midfielder", year: "Freshman" },
          { number: 21, name: "Jake Wilson", position: "Goalkeeper", year: "Junior" }
        ]
      },
      {
        id: 4,
        title: "Happy Valley FC",
        description: "Named after our beloved Happy Valley! This team embodies the fun and competitive spirit of PSL with creative plays and boundless energy.",
        color: "#f59e0b",
        wins: 2,
        losses: 5,
        draws: 1,
        captain: "Taylor Martinez",
        coach: "Coach David Kim",
        homeField: "University Park Fields",
        founded: "2022",
        teamImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "Most Creative Plays 2024",
          "Rising Stars Award 2023",
          "Best Team Celebration 2024"
        ],
        roster: [
          { number: 14, name: "Taylor Martinez", position: "Forward", year: "Junior" },
          { number: 16, name: "Samantha Lee", position: "Midfielder", year: "Sophomore" },
          { number: 17, name: "Carlos Silva", position: "Defender", year: "Senior" },
          { number: 19, name: "Jessica Brown", position: "Winger", year: "Freshman" },
          { number: 20, name: "Ryan Thomas", position: "Goalkeeper", year: "Junior" }
        ]
      }
    ];
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    if (this.selectedTeam) {
      this.renderTeamDetails();
    } else {
      this.renderTeamsOverview();
    }
  }
  
  renderTeamsOverview() {
    const teamsHtml = this.teamsData.map(team => this.createTeamPreviewCard(team)).join('');
    
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
          ">PSL Teams</h1>
          <p style="
            font-size: 18px;
            color: #6b7280;
            margin: 0;
          ">Click on any team to view detailed information</p>
        </div>
        
        <!-- Teams Grid -->
        <div style="
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        ">
          ${teamsHtml}
        </div>
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  renderTeamDetails() {
    const team = this.selectedTeam;
    const achievements = team.achievements.map(achievement => 
      `<li style="margin-bottom: 8px; padding: 8px; background: rgba(255,255,255,0.7); border-radius: 5px;">${achievement}</li>`
    ).join('');
    
    const roster = team.roster.map(player => `
      <div style="
        display: grid;
        grid-template-columns: 60px 1fr auto;
        gap: 15px;
        align-items: center;
        padding: 15px;
        background: white;
        border-radius: 10px;
        margin-bottom: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        transition: all 0.2s ease;
      " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)'" 
         onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.05)'">
        <div style="
          background: ${team.color};
          color: white;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
        ">${player.number}</div>
        <div>
          <h4 style="margin: 0 0 5px 0; color: #1e3a8a; font-size: 16px;">${player.name}</h4>
          <p style="margin: 0; color: #666; font-size: 14px;">${player.position}</p>
        </div>
        <div style="
          background: ${team.color}20;
          color: ${team.color};
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        ">${player.year}</div>
      </div>
    `).join('');

    this.innerHTML = `
      <div style="
        min-height: 100vh;
        background: linear-gradient(135deg, ${team.color}15 0%, #f8fafc 100%);
        padding: 40px 20px;
        font-family: Arial, sans-serif;
      ">
        <!-- Navigation -->
        <div style="
          max-width: 1200px;
          margin: 0 auto 30px auto;
          display: flex;
          gap: 15px;
        ">
          <button id="back-teams-btn" style="
            background: transparent;
            border: 2px solid ${team.color};
            color: ${team.color};
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
            this.style.background='${team.color}'; 
            this.style.color='white';
          " onmouseout="
            this.style.background='transparent'; 
            this.style.color='${team.color}';
          ">
            ← Back to Teams
          </button>
          <button id="back-home-btn" style="
            background: transparent;
            border: 2px solid #6b7280;
            color: #6b7280;
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
            this.style.background='#6b7280'; 
            this.style.color='white';
          " onmouseout="
            this.style.background='transparent'; 
            this.style.color='#6b7280';
          ">
            🏠 Home
          </button>
        </div>

        <!-- Team Header -->
        <div style="
          max-width: 1200px;
          margin: 0 auto 40px auto;
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          background-image: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('${team.teamImage}');
          background-size: cover;
          background-position: center;
        ">
          <div style="text-align: center;">
            <div style="
              background: ${team.color};
              color: white;
              border-radius: 50%;
              width: 80px;
              height: 80px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 36px;
              margin: 0 auto 20px auto;
              box-shadow: 0 4px 15px ${team.color}40;
            ">⚽</div>
            <h1 style="
              font-size: 48px;
              color: ${team.color};
              margin: 0 0 15px 0;
              font-weight: 900;
            ">${team.title}</h1>
            <p style="
              font-size: 20px;
              color: #374151;
              line-height: 1.6;
              margin: 0;
              max-width: 600px;
              margin: 0 auto;
            ">${team.description}</p>
          </div>
        </div>

        <!-- Stats and Info Grid -->
        <div style="
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        ">
          <!-- Team Statistics -->
          <div style="
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          ">
            <h3 style="
              color: ${team.color};
              font-size: 24px;
              margin-bottom: 25px;
              text-align: center;
            ">Team Statistics</h3>
            <div style="
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              margin-bottom: 25px;
            ">
              <div style="text-align: center; padding: 20px; background: ${team.color}10; border-radius: 10px;">
                <div style="font-size: 36px; font-weight: bold; color: #059669;">${team.wins}</div>
                <div style="font-size: 14px; color: #666; font-weight: 600;">WINS</div>
              </div>
              <div style="text-align: center; padding: 20px; background: ${team.color}10; border-radius: 10px;">
                <div style="font-size: 36px; font-weight: bold; color: #dc2626;">${team.losses}</div>
                <div style="font-size: 14px; color: #666; font-weight: 600;">LOSSES</div>
              </div>
              <div style="text-align: center; padding: 20px; background: ${team.color}10; border-radius: 10px;">
                <div style="font-size: 36px; font-weight: bold; color: #f59e0b;">${team.draws}</div>
                <div style="font-size: 14px; color: #666; font-weight: 600;">DRAWS</div>
              </div>
            </div>
            <div style="
              background: ${team.color}10;
              padding: 15px;
              border-radius: 10px;
              text-align: center;
            ">
              <strong style="color: ${team.color}; font-size: 18px;">
                Win Rate: ${Math.round((team.wins / (team.wins + team.losses + team.draws)) * 100)}%
              </strong>
            </div>
          </div>

          <!-- Team Information -->
          <div style="
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          ">
            <h3 style="
              color: ${team.color};
              font-size: 24px;
              margin-bottom: 25px;
              text-align: center;
            ">Team Information</h3>
            <div style="space-y: 15px;">
              <div style="padding: 12px; background: #f8fafc; border-radius: 8px; margin-bottom: 10px;">
                <strong style="color: #374151;">Captain:</strong> ${team.captain}
              </div>
              <div style="padding: 12px; background: #f8fafc; border-radius: 8px; margin-bottom: 10px;">
                <strong style="color: #374151;">Coach:</strong> ${team.coach}
              </div>
              <div style="padding: 12px; background: #f8fafc; border-radius: 8px; margin-bottom: 10px;">
                <strong style="color: #374151;">Home Field:</strong> ${team.homeField}
              </div>
              <div style="padding: 12px; background: #f8fafc; border-radius: 8px; margin-bottom: 10px;">
                <strong style="color: #374151;">Founded:</strong> ${team.founded}
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements and Roster -->
        <div style="
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        ">
          <!-- Achievements -->
          <div style="
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          ">
            <h3 style="
              color: ${team.color};
              font-size: 24px;
              margin-bottom: 25px;
              text-align: center;
            ">🏆 Achievements</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              ${achievements}
            </ul>
          </div>

          <!-- Team Roster -->
          <div style="
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          ">
            <h3 style="
              color: ${team.color};
              font-size: 24px;
              margin-bottom: 25px;
              text-align: center;
            ">👥 Team Roster</h3>
            <div style="max-height: 400px; overflow-y: auto;">
              ${roster}
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.attachDetailEventListeners();
  }
  
  createTeamPreviewCard(team) {
    const totalGames = team.wins + team.losses + team.draws;
    const winPercentage = totalGames > 0 ? Math.round((team.wins / totalGames) * 100) : 0;
    
    return `
      <div 
        class="team-preview-card" 
        data-team-id="${team.id}" 
        style="
          background: white;
          border: 2px solid ${team.color}20;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          text-align: center;
          position: relative;
          overflow: hidden;
        " 
        onmouseover="
          this.style.transform='translateY(-8px)'; 
          this.style.boxShadow='0 8px 25px rgba(0,0,0,0.15)';
          this.style.borderColor='${team.color}';
        " 
        onmouseout="
          this.style.transform='translateY(0)'; 
          this.style.boxShadow='0 4px 15px rgba(0,0,0,0.08)';
          this.style.borderColor='${team.color}20';
        ">
        
        <!-- Team Color Accent -->
        <div style="
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: ${team.color};
        "></div>
        
        <!-- Team Logo/Icon -->
        <div style="
          background: ${team.color};
          color: white;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin: 0 auto 20px auto;
          box-shadow: 0 4px 12px ${team.color}30;
        ">⚽</div>
        
        <h3 style="
          color: ${team.color}; 
          font-size: 22px; 
          margin-bottom: 15px;
          font-weight: 700;
        ">${team.title}</h3>
        
        <!-- Quick Stats -->
        <div style="
          display: flex;
          justify-content: space-around;
          margin: 20px 0;
          padding: 15px;
          background: ${team.color}08;
          border-radius: 10px;
        ">
          <div style="text-align: center;">
            <div style="font-size: 20px; font-weight: bold; color: #059669;">${team.wins}</div>
            <div style="font-size: 11px; color: #666; text-transform: uppercase;">W</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 20px; font-weight: bold; color: #dc2626;">${team.losses}</div>
            <div style="font-size: 11px; color: #666; text-transform: uppercase;">L</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 20px; font-weight: bold; color: #f59e0b;">${team.draws}</div>
            <div style="font-size: 11px; color: #666; text-transform: uppercase;">D</div>
          </div>
        </div>
        
        <!-- Win Percentage -->
        <div style="
          background: #f8fafc;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 15px;
        ">
          <strong style="color: ${team.color};">Win Rate: ${winPercentage}%</strong>
        </div>
        
        <!-- View Details Button -->
        <div style="
          background: ${team.color};
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 15px;
          transition: all 0.2s ease;
        ">
          View Details →
        </div>
      </div>
    `;
  }

  
  
  attachEventListeners() {
    // Add event listener for back button
    setTimeout(() => {
      const backBtn = this.querySelector('#back-btn');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'home' },
            bubbles: true 
          }));
        });
      }
      
      // Add event listeners for team preview cards
      const teamCards = this.querySelectorAll('.team-preview-card');
      teamCards.forEach(card => {
        card.addEventListener('click', (e) => {
          const teamId = parseInt(card.getAttribute('data-team-id'));
          this.selectedTeam = this.teamsData.find(team => team.id === teamId);
          this.render();
        });
      });
    }, 0);
  }
  
  attachDetailEventListeners() {
    setTimeout(() => {
      const backTeamsBtn = this.querySelector('#back-teams-btn');
      const backHomeBtn = this.querySelector('#back-home-btn');
      
      if (backTeamsBtn) {
        backTeamsBtn.addEventListener('click', () => {
          this.selectedTeam = null;
          this.render();
        });
      }
      
      if (backHomeBtn) {
        backHomeBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'home' },
            bubbles: true 
          }));
        });
      }
    }, 0);
  }
}

customElements.define('teams-page', TeamsPage);