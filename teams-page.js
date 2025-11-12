export class TeamsPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="
        padding: 40px 20px;
        max-width: 1200px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
      ">
        <h1 style="
          text-align: center;
          color: #1e3a8a;
          font-size: 42px;
          margin-bottom: 40px;
        ">PSL Teams</h1>
        
        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 40px 0;
        ">
          <div style="
            background: white;
            border: 2px solid #1e3a8a;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          ">
            <h3 style="color: #1e3a8a; font-size: 24px; margin-bottom: 15px;">Blue Lions</h3>
            <p style="color: #374151; line-height: 1.6;">Our championship team with an impressive track record. Known for their strategic gameplay and teamwork.</p>
            <div style="margin: 20px 0;">
              <strong>Wins:</strong> 15 | <strong>Losses:</strong> 3
            </div>
          </div>
          
          <div style="
            background: white;
            border: 2px solid #1e3a8a;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          ">
            <h3 style="color: #1e3a8a; font-size: 24px; margin-bottom: 15px;">White Hawks</h3>
            <p style="color: #374151; line-height: 1.6;">Rising stars in the league with exceptional speed and agility. A team to watch this season.</p>
            <div style="margin: 20px 0;">
              <strong>Wins:</strong> 12 | <strong>Losses:</strong> 6
            </div>
          </div>
          
          <div style="
            background: white;
            border: 2px solid #1e3a8a;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          ">
            <h3 style="color: #1e3a8a; font-size: 24px; margin-bottom: 15px;">Red Rovers</h3>
            <p style="color: #374151; line-height: 1.6;">Veteran team with years of experience. Known for their defensive strategies and leadership.</p>
            <div style="margin: 20px 0;">
              <strong>Wins:</strong> 10 | <strong>Losses:</strong> 8
            </div>
          </div>
          
          <div style="
            background: white;
            border: 2px solid #1e3a8a;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          ">
            <h3 style="color: #1e3a8a; font-size: 24px; margin-bottom: 15px;">Green Guardians</h3>
            <p style="color: #374151; line-height: 1.6;">New team with fresh talent and innovative playing styles. Quickly making a name in the league.</p>
            <div style="margin: 20px 0;">
              <strong>Wins:</strong> 8 | <strong>Losses:</strong> 10
            </div>
          </div>
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
  }
}

customElements.define('teams-page', TeamsPage);