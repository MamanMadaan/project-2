import { OutlineDataService } from './outline-data-service.js';

export class TeamsPage extends HTMLElement {
  constructor() {
    super();
    this.teamsData = null;
  }

  async connectedCallback() {
    await this.loadTeamsData();
    this.render();
  }
  
  async loadTeamsData() {
    try {
      const outline = await OutlineDataService.loadTeamsOutline();
      this.teamsData = OutlineDataService.getTeamsData(outline);
    } catch (error) {
      console.error('Failed to load teams data:', error);
      this.teamsData = [];
    }
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="
        padding: 40px 20px;
        max-width: 1200px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
      ">
        <!-- Back Button -->
        <div style="margin-bottom: 30px;">
          <button id="back-btn" style="
            background: transparent;
            color: #1e3a8a;
            border: 2px solid #1e3a8a;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;
          " onmouseover="this.style.backgroundColor='#1e3a8a'; this.style.color='white'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#1e3a8a'">
            ← Back to Home
          </button>
        </div>
        
        <h1 style="
          text-align: center;
          color: #1e3a8a;
          font-size: 42px;
          margin-bottom: 40px;
        ">PSL Teams</h1>
        
        <div id="teams-container" style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin: 40px 0;
        ">
          <!-- Teams will be loaded here -->
        </div>
        </div>
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  render() {
    if (!this.teamsData || this.teamsData.length === 0) {
      this.innerHTML = '<div style="text-align: center; padding: 40px;">Loading teams...</div>';
      return;
    }
    
    // Create teams container HTML
    const teamsHtml = this.teamsData.map(team => this.createTeamCard(team)).join('');
    
    this.innerHTML = `
      <div style="
        padding: 40px 20px;
        max-width: 1200px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
      ">
        <!-- Back Button -->
        <div style="margin-bottom: 30px;">
          <button id="back-btn" style="
            background: transparent;
            color: #1e3a8a;
            border: 2px solid #1e3a8a;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;
          " onmouseover="this.style.backgroundColor='#1e3a8a'; this.style.color='white'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#1e3a8a'">
            ← Back to Home
          </button>
        </div>
        
        <h1 style="
          text-align: center;
          color: #1e3a8a;
          font-size: 42px;
          margin-bottom: 40px;
        ">PSL Teams</h1>
        
        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin: 40px 0;
        ">
          ${teamsHtml}
        </div>
        
        <div style="
          background: #f1f5f9;
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          margin-top: 40px;
        ">
          <h2 style="color: #1e3a8a; margin-bottom: 20px;">Join a Team!</h2>
          <p style="color: #374151; font-size: 18px; line-height: 1.6; margin-bottom: 20px;">
            Interested in joining one of our teams? We welcome players of all skill levels!
          </p>
          <button style="
            background: #1e3a8a;
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
          " onmouseover="this.style.backgroundColor='#1e40af'" onmouseout="this.style.backgroundColor='#1e3a8a'">
            Apply to Join
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