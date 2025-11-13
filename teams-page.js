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
        wins: 12,
        losses: 3,
        draws: 2,
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
        wins: 9,
        losses: 5,
        draws: 3,
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
        wins: 8,
        losses: 6,
        draws: 3,
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
        wins: 6,
        losses: 8,
        draws: 3,
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
    const teamsHtml = this.teamsData.map(team => this.createTeamCard(team)).join('');
    
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
          ">Meet the talented teams competing in the Premier Student League</p>
        </div>
        
        <!-- Teams Grid -->
        <div style="
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        ">
          ${teamsHtml}
        </div>
        
        <!-- Join Section -->
        <div style="
          max-width: 800px;
          margin: 40px auto 0 auto;
          background: white;
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <div style="font-size: 48px; margin-bottom: 20px;">⚽</div>
          <h2 style="
            color: #1e3a8a;
            margin: 0 0 15px 0;
            font-size: 28px;
          ">Join a Team!</h2>
          <p style="
            color: #6b7280;
            font-size: 18px;
            line-height: 1.6;
            margin: 0 0 25px 0;
          ">
            Interested in joining one of our amazing teams? We welcome players of all skill levels and backgrounds. 
            Come be part of the PSL family!
          </p>
          <button id="join-btn" style="
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
          " onmouseover="
            this.style.transform='translateY(-2px)';
            this.style.boxShadow='0 6px 20px rgba(30, 58, 138, 0.4)';
          " onmouseout="
            this.style.transform='translateY(0)';
            this.style.boxShadow='0 4px 15px rgba(30, 58, 138, 0.3)';
          ">
            Register to Join
          </button>
        </div>
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  createTeamCard(team) {
    const achievements = team.achievements.map(achievement => 
      `<li style="margin-bottom: 5px;">${achievement}</li>`
    ).join('');
    
    const totalGames = team.wins + team.losses + team.draws;
    const winPercentage = totalGames > 0 ? Math.round((team.wins / totalGames) * 100) : 0;
    
    return `
      <div style="
        background: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), 
                  ${team.teamImage ? `url('${team.teamImage}')` : '#f8fafc'};
        background-size: cover;
        background-position: center;
        border: 3px solid ${team.color};
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.15)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)'">
        
        <div style="text-align: center;">
          <h3 style="
            color: ${team.color}; 
            font-size: 28px; 
            margin-bottom: 15px;
            text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
          ">${team.title}</h3>
          
          <p style="
            color: #374151; 
            line-height: 1.6; 
            margin-bottom: 20px;
            font-size: 16px;
          ">${team.description}</p>
          
          <!-- Stats Grid -->
          <div style="
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 20px 0;
            padding: 20px;
            background: rgba(255,255,255,0.8);
            border-radius: 10px;
          ">
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: bold; color: ${team.color};">${team.wins}</div>
              <div style="font-size: 12px; color: #666;">Wins</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: bold; color: #dc2626;">${team.losses}</div>
              <div style="font-size: 12px; color: #666;">Losses</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: bold; color: #059669;">${team.draws}</div>
              <div style="font-size: 12px; color: #666;">Draws</div>
            </div>
          </div>
          
          <!-- Team Info -->
          <div style="
            text-align: left;
            background: rgba(248,250,252,0.9);
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
          ">
            <p style="margin: 5px 0;"><strong>Captain:</strong> ${team.captain}</p>
            <p style="margin: 5px 0;"><strong>Coach:</strong> ${team.coach}</p>
            <p style="margin: 5px 0;"><strong>Home Field:</strong> ${team.homeField}</p>
            <p style="margin: 5px 0;"><strong>Founded:</strong> ${team.founded}</p>
            <p style="margin: 5px 0;"><strong>Win Rate:</strong> ${winPercentage}%</p>
          </div>
          
          <!-- Achievements -->
          ${achievements ? `
            <div style="
              text-align: left;
              background: rgba(248,250,252,0.9);
              padding: 15px;
              border-radius: 8px;
              margin: 15px 0;
            ">
              <strong style="color: ${team.color};">Achievements:</strong>
              <ul style="margin: 10px 0; padding-left: 20px;">
                ${achievements}
              </ul>
            </div>
          ` : ''}
          
          <!-- Roster Preview -->
          ${team.roster.length > 0 ? `
            <div style="
              background: rgba(248,250,252,0.9);
              padding: 15px;
              border-radius: 8px;
              margin: 15px 0;
              text-align: left;
            ">
              <strong style="color: ${team.color};">Key Players:</strong>
              <div style="margin-top: 10px;">
                ${team.roster.slice(0, 3).map(player => `
                  <div style="margin: 8px 0; padding: 8px; background: white; border-radius: 5px;">
                    <strong>#${player.number} ${player.name}</strong><br>
                    <small style="color: #666;">${player.position} • ${player.year}</small>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
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
    }, 0);
  }
}

customElements.define('teams-page', TeamsPage);