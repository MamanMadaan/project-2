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
        wins: 3,
        losses: 0,
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
        wins: 2,
        losses: 0,
        draws: 1,
        captain: "Sarah Martinez",
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
          { number: 9, name: "Sarah Martinez", position: "Striker", year: "Senior" },
          { number: 6, name: "Mike Rodriguez", position: "Midfielder", year: "Junior" },
          { number: 1, name: "Taylor Brooks", position: "Goalkeeper", year: "Freshman" },
          { number: 4, name: "Jessica Lee", position: "Defender", year: "Sophomore" },
          { number: 8, name: "Daniel Kim", position: "Winger", year: "Senior" }
        ]
      },
      {
        id: 3,
        title: "Blue & White SC",
        description: "Athletic and competitive team known for their speed and agility. They bring energy and excitement to every match with their dynamic playstyle.",
        color: "#059669",
        wins: 1,
        losses: 0,
        draws: 1,
        captain: "Alex Rodriguez",
        coach: "Coach Lisa Martinez",
        homeField: "Penn State Practice Fields",
        founded: "2021",
        teamImage: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "Fastest Rising Team 2024",
          "Best Team Spirit Award",
          "Youth Development Champions"
        ],
        roster: [
          { number: 10, name: "Alex Rodriguez", position: "Forward", year: "Junior" },
          { number: 7, name: "Maria Santos", position: "Midfielder", year: "Sophomore" },
          { number: 1, name: "Ryan Mitchell", position: "Goalkeeper", year: "Senior" },
          { number: 3, name: "Ashley Wang", position: "Defender", year: "Junior" },
          { number: 11, name: "Tyler Johnson", position: "Winger", year: "Freshman" }
        ]
      },
      {
        id: 4,
        title: "Happy Valley FC",
        description: "Community-focused team that emphasizes fun and sportsmanship. Despite being newer to the league, they show great potential and team chemistry.",
        color: "#7c3aed",
        wins: 0,
        losses: 2,
        draws: 0,
        captain: "Jamie Foster",
        coach: "Coach David Park",
        homeField: "Happy Valley Community Field",
        founded: "2022",
        teamImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "Community Choice Award 2024",
          "Best Newcomer Team 2023",
          "Fan Favorite Team"
        ],
        roster: [
          { number: 9, name: "Jamie Foster", position: "Striker", year: "Senior" },
          { number: 8, name: "Kevin Liu", position: "Midfielder", year: "Junior" },
          { number: 1, name: "Samantha Gray", position: "Goalkeeper", year: "Sophomore" },
          { number: 2, name: "Brandon Torres", position: "Defender", year: "Freshman" },
          { number: 10, name: "Nicole Adams", position: "Forward", year: "Junior" }
        ]
      },
      {
        id: 5,
        title: "State College FC",
        description: "Technical and disciplined team with excellent ball control and strategic gameplay. Known for their precision and tactical awareness.",
        color: "#ea580c",
        wins: 2,
        losses: 0,
        draws: 0,
        captain: "David Chen",
        coach: "Coach Amanda Rodriguez",
        homeField: "State College Municipal Stadium",
        founded: "2020",
        teamImage: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "Technical Excellence Award 2024",
          "Best Tactical Team 2023",
          "Precision Play Champions"
        ],
        roster: [
          { number: 10, name: "David Chen", position: "Attacking Midfielder", year: "Senior" },
          { number: 6, name: "Isabella Moore", position: "Central Midfielder", year: "Junior" },
          { number: 1, name: "Marcus Thompson", position: "Goalkeeper", year: "Sophomore" },
          { number: 4, name: "Luis Hernandez", position: "Center Back", year: "Senior" },
          { number: 7, name: "Rachel Kim", position: "Winger", year: "Freshman" }
        ]
      },
      {
        id: 6,
        title: "University Park United",
        description: "Young and ambitious team with fresh energy and modern playing style. They bring innovation and creativity to their matches.",
        color: "#0891b2",
        wins: 0,
        losses: 0,
        draws: 1,
        captain: "Taylor Anderson",
        coach: "Coach Robert Kim",
        homeField: "University Park Sports Complex",
        founded: "2023",
        teamImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "Most Creative Team 2024",
          "Innovation in Play Award",
          "Rising Stars Recognition"
        ],
        roster: [
          { number: 11, name: "Taylor Anderson", position: "Forward", year: "Sophomore" },
          { number: 8, name: "Jordan Williams", position: "Midfielder", year: "Freshman" },
          { number: 1, name: "Casey Martinez", position: "Goalkeeper", year: "Junior" },
          { number: 3, name: "Morgan Davis", position: "Defender", year: "Sophomore" },
          { number: 9, name: "Riley Jackson", position: "Striker", year: "Freshman" }
        ]
      },
      {
        id: 7,
        title: "Centre County SC",
        description: "Strong regional team with deep community roots and passionate fanbase. Known for their resilience and never-give-up attitude.",
        color: "#be185d",
        wins: 1,
        losses: 1,
        draws: 0,
        captain: "Jamie Thompson",
        coach: "Coach Patricia Wilson",
        homeField: "Centre County Regional Field",
        founded: "2021",
        teamImage: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "Community Spirit Award 2024",
          "Best Regional Team 2023",
          "Resilience Champions"
        ],
        roster: [
          { number: 10, name: "Jamie Thompson", position: "Attacking Midfielder", year: "Senior" },
          { number: 5, name: "Austin Carter", position: "Defensive Midfielder", year: "Junior" },
          { number: 1, name: "Megan Foster", position: "Goalkeeper", year: "Sophomore" },
          { number: 2, name: "Carlos Ruiz", position: "Fullback", year: "Senior" },
          { number: 7, name: "Sophia Park", position: "Winger", year: "Freshman" }
        ]
      },
      {
        id: 8,
        title: "Mount Nittany FC",
        description: "Mountain-inspired team with strong defensive play and endurance. They're known for their physical fitness and stamina throughout matches.",
        color: "#059669",
        wins: 0,
        losses: 1,
        draws: 0,
        captain: "Alex Mountain",
        coach: "Coach Jennifer Lee",
        homeField: "Mount Nittany Sports Park",
        founded: "2022",
        teamImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "Best Fitness Team 2024",
          "Endurance Champions 2023",
          "Mountain Spirit Award"
        ],
        roster: [
          { number: 6, name: "Alex Mountain", position: "Defensive Midfielder", year: "Senior" },
          { number: 9, name: "Sierra Ridge", position: "Forward", year: "Junior" },
          { number: 1, name: "Peak Goalkeeper", position: "Goalkeeper", year: "Sophomore" },
          { number: 4, name: "Rocky Defense", position: "Center Back", year: "Senior" },
          { number: 11, name: "Valley Sprint", position: "Winger", year: "Freshman" }
        ]
      },
      {
        id: 9,
        title: "Beaver Stadium FC",
        description: "Stadium-based team with strong home field advantage and passionate supporters. They excel in high-pressure situations and big games.",
        color: "#7c2d12",
        wins: 1,
        losses: 1,
        draws: 0,
        captain: "Stadium Captain",
        coach: "Coach Mark Stevens",
        homeField: "Beaver Stadium Practice Field",
        founded: "2020",
        teamImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        achievements: [
          "Home Field Champions 2024",
          "Big Game Specialists 2023",
          "Stadium Spirit Award"
        ],
        roster: [
          { number: 12, name: "Stadium Captain", position: "Captain/Midfielder", year: "Senior" },
          { number: 10, name: "Goal Scorer", position: "Striker", year: "Junior" },
          { number: 1, name: "Net Guardian", position: "Goalkeeper", year: "Sophomore" },
          { number: 3, name: "Wall Defender", position: "Defender", year: "Senior" },
          { number: 7, name: "Speed Runner", position: "Winger", year: "Freshman" }
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
      <div class="page">
        <!-- Back Button -->
        <div class="page__nav">
          <button id="back-btn" class="button button--secondary button--back">
            ← Back to Home
          </button>
        </div>

        <!-- Header -->
        <div class="page__header">
          <h1 class="page__title">PSL Teams</h1>
          <p class="page__description">Click on any team to view detailed information</p>
        </div>
        
        <!-- Teams Grid -->
        <div class="teams-grid">
          ${teamsHtml}
        </div>
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  renderTeamDetails() {
    const team = this.selectedTeam;
    const achievements = team.achievements.map(achievement => 
      `<li class="team-details__achievement">${achievement}</li>`
    ).join('');
    
    const roster = team.roster.map(player => `
      <div class="team-details__player">
        <div class="team-details__player-number" style="background: ${team.color};">${player.number}</div>
        <div class="team-details__player-info">
          <h4 class="team-details__player-name">${player.name}</h4>
          <p class="team-details__player-position">${player.position}</p>
        </div>
        <div class="team-details__player-year" style="background: ${team.color}20; color: ${team.color};">${player.year}</div>
      </div>
    `).join('');

    this.innerHTML = `
      <div class="page page--team-detail" style="background: linear-gradient(135deg, ${team.color}15 0%, #f8fafc 100%);">
        <!-- Navigation -->
        <div class="page__nav">
          <button id="back-teams-btn" class="button button--secondary button--back" style="border-color: ${team.color}; color: ${team.color};">
            ← Back to Teams
          </button>
          <button id="back-home-btn" class="button button--secondary button--back">
            🏠 Home
          </button>
        </div>

        <!-- Team Header -->
        <div class="team-details__header" style="background-image: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('${team.teamImage}');">
          <h1 class="team-details__title" style="color: ${team.color};">${team.title}</h1>
          <p class="team-details__description">${team.description}</p>
        </div>

        <!-- Stats and Info Grid -->
        <div class="team-details__grid">
          <!-- Team Statistics -->
          <div class="team-details__card">
            <h3 class="team-details__card-title" style="color: ${team.color};">Team Statistics</h3>
            <div class="team-details__stats">
              <div class="team-details__stat" style="background: ${team.color}10;">
                <div class="team-details__stat-number team-details__stat-number--wins">${team.wins}</div>
                <div class="team-details__stat-label">WINS</div>
              </div>
              <div class="team-details__stat" style="background: ${team.color}10;">
                <div class="team-details__stat-number team-details__stat-number--losses">${team.losses}</div>
                <div class="team-details__stat-label">LOSSES</div>
              </div>
              <div class="team-details__stat" style="background: ${team.color}10;">
                <div class="team-details__stat-number team-details__stat-number--draws">${team.draws}</div>
                <div class="team-details__stat-label">DRAWS</div>
              </div>
            </div>
            <div class="team-details__win-rate" style="background: ${team.color}10;">
              <strong style="color: ${team.color};">
                Win Rate: ${Math.round((team.wins / (team.wins + team.losses + team.draws)) * 100)}%
              </strong>
            </div>
          </div>

          <!-- Team Information -->
          <div class="team-details__card">
            <h3 class="team-details__card-title" style="color: ${team.color};">Team Information</h3>
            <div class="team-details__info">
              <div class="team-details__info-item">
                <strong>Head Coach:</strong> ${team.coach}
              </div>
              <div class="team-details__info-item">
                <strong>Captain:</strong> ${team.captain}
              </div>
              <div class="team-details__info-item">
                <strong>Home Field:</strong> ${team.homeField}
              </div>
              <div class="team-details__info-item">
                <strong>Founded:</strong> ${team.founded}
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements and Roster -->
        <div class="team-details__grid">
          <!-- Achievements -->
          <div class="team-details__card">
            <h3 class="team-details__card-title" style="color: ${team.color};">🏆 Achievements</h3>
            <ul class="team-details__achievements">
              ${achievements}
            </ul>
          </div>

          <!-- Team Roster -->
          <div class="team-details__card">
            <h3 class="team-details__card-title" style="color: ${team.color};">👥 Team Roster</h3>
            <div class="team-details__roster">
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
        class="team-card" 
        data-team-id="${team.id}" 
        style="border-color: ${team.color}20;">
        
        <!-- Team Color Accent -->
        <div class="team-card__accent" style="background: ${team.color};"></div>
        
        <!-- Team Logo/Icon -->
        <div class="team-card__icon" style="background: ${team.color}; box-shadow: 0 4px 12px ${team.color}30;">⚽</div>
        
        <h3 class="team-card__title" style="color: ${team.color};">${team.title}</h3>
        
        <!-- Quick Stats -->
        <div class="team-card__stats" style="background: ${team.color}08;">
          <div class="team-card__stat">
            <div class="team-card__stat-number team-card__stat-number--wins">${team.wins}</div>
            <div class="team-card__stat-label">W</div>
          </div>
          <div class="team-card__stat">
            <div class="team-card__stat-number team-card__stat-number--losses">${team.losses}</div>
            <div class="team-card__stat-label">L</div>
          </div>
          <div class="team-card__stat">
            <div class="team-card__stat-number team-card__stat-number--draws">${team.draws}</div>
            <div class="team-card__stat-label">D</div>
          </div>
        </div>
        
        <!-- Win Percentage -->
        <div class="team-card__win-rate">
          <strong style="color: ${team.color};">Win Rate: ${winPercentage}%</strong>
        </div>
        
        <!-- View Details Button -->
        <div class="team-card__button" style="background: ${team.color};">
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