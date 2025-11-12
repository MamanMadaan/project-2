export class SchedulePage extends HTMLElement {
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
        ">Game Schedule</h1>
        
        <div style="
          background: white;
          border: 2px solid #1e3a8a;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        ">
          <div style="
            background: #1e3a8a;
            color: white;
            padding: 20px;
            text-align: center;
          ">
            <h2 style="margin: 0; font-size: 24px;">Upcoming Matches</h2>
          </div>
          
          <div style="padding: 0;">
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              gap: 0;
              background: #f8fafc;
              padding: 15px;
              border-bottom: 1px solid #e2e8f0;
              font-weight: bold;
              color: #1e3a8a;
            ">
              <div>Date</div>
              <div>Teams</div>
              <div>Time</div>
              <div>Location</div>
            </div>
            
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              gap: 0;
              padding: 15px;
              border-bottom: 1px solid #e2e8f0;
            ">
              <div>Jan 15</div>
              <div>Blue Lions vs White Hawks</div>
              <div>3:00 PM</div>
              <div>Field A</div>
            </div>
            
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              gap: 0;
              padding: 15px;
              border-bottom: 1px solid #e2e8f0;
            ">
              <div>Jan 18</div>
              <div>Red Rovers vs Green Guardians</div>
              <div>5:30 PM</div>
              <div>Field B</div>
            </div>
            
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              gap: 0;
              padding: 15px;
              border-bottom: 1px solid #e2e8f0;
            ">
              <div>Jan 22</div>
              <div>Blue Lions vs Red Rovers</div>
              <div>2:00 PM</div>
              <div>Main Stadium</div>
            </div>
            
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              gap: 0;
              padding: 15px;
              border-bottom: 1px solid #e2e8f0;
            ">
              <div>Jan 25</div>
              <div>White Hawks vs Green Guardians</div>
              <div>4:00 PM</div>
              <div>Field A</div>
            </div>
            
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              gap: 0;
              padding: 15px;
            ">
              <div>Jan 29</div>
              <div>Championship Final</div>
              <div>7:00 PM</div>
              <div>Main Stadium</div>
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
          <h2 style="color: #1e3a8a; margin-bottom: 20px;">Get Updates</h2>
          <p style="color: #374151; font-size: 18px; margin-bottom: 20px;">
            Never miss a game! Subscribe to our schedule updates.
          </p>
          <button style="
            background: #1e3a8a;
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
            margin-right: 15px;
          " onmouseover="this.style.backgroundColor='#1e40af'" onmouseout="this.style.backgroundColor='#1e3a8a'">
            Subscribe to Updates
          </button>
          <button style="
            background: transparent;
            color: #1e3a8a;
            border: 2px solid #1e3a8a;
            padding: 13px 28px;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
          " onmouseover="this.style.backgroundColor='#1e3a8a'; this.style.color='white'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#1e3a8a'">
            Download Calendar
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('schedule-page', SchedulePage);