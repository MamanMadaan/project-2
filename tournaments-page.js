export class TournamentsPage extends HTMLElement {
  constructor() {
    super();
    this.tournamentsData = [
      {
        id: 1,
        title: "PSL Spring Championship",
        status: "Upcoming",
        date: "March 15-17, 2025",
        location: "Beaver Stadium Complex",
        teams: 8,
        prize: "$2,500 Winner's Prize",
        description: "The premier tournament of the season featuring our top 8 teams competing for the championship title.",
        format: "Single Elimination",
        registrationDeadline: "March 1, 2025",
        entryFee: "$150 per team"
      },
      {
        id: 2,
        title: "Fall Invitational",
        status: "Registration Open",
        date: "October 20-22, 2025",
        location: "IM Fields Complex",
        teams: 12,
        prize: "$1,500 Winner's Prize",
        description: "Open tournament welcoming teams from across Pennsylvania universities.",
        format: "Group Stage + Knockout",
        registrationDeadline: "October 5, 2025",
        entryFee: "$100 per team"
      },
      {
        id: 3,
        title: "Winter Indoor Cup",
        status: "Planning",
        date: "January 10-12, 2026",
        location: "Indoor Sports Complex",
        teams: 6,
        prize: "$1,000 Winner's Prize",
        description: "Fast-paced indoor tournament during the winter break.",
        format: "Round Robin",
        registrationDeadline: "December 20, 2025",
        entryFee: "$75 per team"
      }
    ];
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    const tournamentsHtml = this.tournamentsData.map(tournament => this.createTournamentCard(tournament)).join('');
    
    this.innerHTML = `
      <div style="
        min-height: 100vh;
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
          margin: 0 auto 50px auto;
          text-align: center;
        ">
          <h1 style="
            font-size: 48px;
            color: #1e3a8a;
            margin: 0 0 15px 0;
            font-weight: 900;
          ">PSL Tournaments</h1>
          <p style="
            font-size: 20px;
            color: #6b7280;
            margin: 0 0 30px 0;
            line-height: 1.6;
          ">Compete at the highest level in our premier soccer tournaments</p>
          
          <!-- Tournament Stats -->
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px;
            max-width: 800px;
            margin: 0 auto;
          ">
            <div style="
              background: linear-gradient(135deg, #1e3a8a, #3b82f6);
              color: white;
              padding: 25px;
              border-radius: 15px;
              text-align: center;
            ">
              <div style="font-size: 32px; font-weight: 900; margin-bottom: 8px;">3</div>
              <div style="font-size: 14px; opacity: 0.9;">Annual Tournaments</div>
            </div>
            <div style="
              background: linear-gradient(135deg, #059669, #10b981);
              color: white;
              padding: 25px;
              border-radius: 15px;
              text-align: center;
            ">
              <div style="font-size: 32px; font-weight: 900; margin-bottom: 8px;">$5,000</div>
              <div style="font-size: 14px; opacity: 0.9;">Total Prize Money</div>
            </div>
            <div style="
              background: linear-gradient(135deg, #dc2626, #ef4444);
              color: white;
              padding: 25px;
              border-radius: 15px;
              text-align: center;
            ">
              <div style="font-size: 32px; font-weight: 900; margin-bottom: 8px;">26</div>
              <div style="font-size: 14px; opacity: 0.9;">Teams Participating</div>
            </div>
          </div>
        </div>
        
        <!-- Tournaments Grid -->
        <div style="
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        ">
          ${tournamentsHtml}
        </div>
        
        <!-- Registration Section -->
        <div style="
          max-width: 800px;
          margin: 50px auto 0 auto;
          background: white;
          border-radius: 20px;
          padding: 50px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <h2 style="
            color: #1e3a8a;
            margin: 0 0 20px 0;
            font-size: 32px;
            font-weight: 700;
          ">Register Your Team</h2>
          <p style="
            color: #6b7280;
            font-size: 18px;
            line-height: 1.6;
            margin: 0 0 30px 0;
          ">
            Ready to compete? Register your team for upcoming tournaments and showcase your skills 
            against the best teams in the league.
          </p>
          <button id="register-btn" style="
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            border: none;
            padding: 18px 45px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
          " onmouseover="
            this.style.transform='translateY(-3px)';
            this.style.boxShadow='0 8px 25px rgba(30, 58, 138, 0.4)';
          " onmouseout="
            this.style.transform='translateY(0)';
            this.style.boxShadow='0 4px 15px rgba(30, 58, 138, 0.3)';
          ">
            Register Team
          </button>
        </div>
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  createTournamentCard(tournament) {
    const statusColors = {
      'Upcoming': { bg: '#10b981', text: 'white' },
      'Registration Open': { bg: '#3b82f6', text: 'white' },
      'Planning': { bg: '#6b7280', text: 'white' }
    };
    
    const statusColor = statusColors[tournament.status] || { bg: '#6b7280', text: 'white' };
    
    return `
      <div style="
        background: white;
        border-radius: 20px;
        padding: 35px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        border: 2px solid transparent;
      " onmouseover="
        this.style.transform='translateY(-8px)'; 
        this.style.boxShadow='0 15px 35px rgba(0,0,0,0.15)';
        this.style.borderColor='#e5e7eb';
      " onmouseout="
        this.style.transform='translateY(0)'; 
        this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)';
        this.style.borderColor='transparent';
      ">
        
        <!-- Status Badge -->
        <div style="
          background: ${statusColor.bg};
          color: ${statusColor.text};
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          margin-bottom: 20px;
        ">${tournament.status}</div>
        
        <!-- Tournament Title -->
        <h3 style="
          color: #1e3a8a;
          font-size: 28px;
          margin: 0 0 15px 0;
          font-weight: 700;
        ">${tournament.title}</h3>
        
        <!-- Description -->
        <p style="
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 25px 0;
          font-size: 16px;
        ">${tournament.description}</p>
        
        <!-- Tournament Details Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        ">
          <div style="
            background: #f8fafc;
            padding: 15px;
            border-radius: 10px;
          ">
            <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">DATE</div>
            <div style="color: #1e3a8a; font-weight: 600;">${tournament.date}</div>
          </div>
          
          <div style="
            background: #f8fafc;
            padding: 15px;
            border-radius: 10px;
          ">
            <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">LOCATION</div>
            <div style="color: #1e3a8a; font-weight: 600;">${tournament.location}</div>
          </div>
          
          <div style="
            background: #f8fafc;
            padding: 15px;
            border-radius: 10px;
          ">
            <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">TEAMS</div>
            <div style="color: #1e3a8a; font-weight: 600;">${tournament.teams} Teams</div>
          </div>
          
          <div style="
            background: #f8fafc;
            padding: 15px;
            border-radius: 10px;
          ">
            <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">FORMAT</div>
            <div style="color: #1e3a8a; font-weight: 600;">${tournament.format}</div>
          </div>
        </div>
        
        <!-- Prize and Entry Fee -->
        <div style="
          background: linear-gradient(135deg, #f59e0b10, #fbbf2410);
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        ">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="color: #f59e0b; font-size: 12px; font-weight: 600;">WINNER'S PRIZE</div>
              <div style="color: #1e3a8a; font-weight: 700; font-size: 18px;">${tournament.prize}</div>
            </div>
            <div style="text-align: right;">
              <div style="color: #f59e0b; font-size: 12px; font-weight: 600;">ENTRY FEE</div>
              <div style="color: #1e3a8a; font-weight: 700; font-size: 18px;">${tournament.entryFee}</div>
            </div>
          </div>
        </div>
        
        <!-- Registration Deadline -->
        <div style="
          background: #dc262615;
          padding: 15px;
          border-radius: 10px;
          text-align: center;
        ">
          <div style="color: #dc2626; font-size: 12px; font-weight: 600; margin-bottom: 5px;">REGISTRATION DEADLINE</div>
          <div style="color: #1e3a8a; font-weight: 700;">${tournament.registrationDeadline}</div>
        </div>
      </div>
    `;
  }
  
  attachEventListeners() {
    setTimeout(() => {
      const backBtn = this.querySelector('#back-btn');
      const registerBtn = this.querySelector('#register-btn');
      
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'home' },
            bubbles: true 
          }));
        });
      }
      
      if (registerBtn) {
        registerBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'register' },
            bubbles: true 
          }));
        });
      }
    }, 0);
  }
}

customElements.define('tournaments-page', TournamentsPage);