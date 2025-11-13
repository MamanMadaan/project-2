export class ChampionshipPage extends HTMLElement {
  constructor() {
    super();
    this.articleData = {
      title: "Nittany Lions FC Claims 2024 PSL Championship",
      publishDate: "December 8, 2024",
      author: "PSL Sports Desk",
      readTime: "4 min read",
      category: "Championship",
      summary: "In a thrilling final match, Nittany Lions FC defeated Penn State United 3-2 to capture their second consecutive PSL championship title.",
      finalScore: {
        winner: "Nittany Lions FC",
        winnerScore: 3,
        runnerUp: "Penn State United", 
        runnerUpScore: 2
      },
      matchStats: {
        attendance: 245,
        venue: "Beaver Stadium Field A",
        weather: "Clear, 52°F",
        duration: "95 minutes"
      },
      mvp: {
        name: "Marcus Johnson",
        team: "Nittany Lions FC",
        stats: "2 goals, 1 assist"
      },
      content: [
        {
          type: "paragraph",
          text: "Under perfect December weather conditions, Nittany Lions FC secured their second consecutive Premier Student League championship in dramatic fashion, defeating Penn State United 3-2 in a match that had everything - early goals, stunning saves, and a comeback that will be remembered for years."
        },
        {
          type: "highlight", 
          text: "With this victory, Nittany Lions FC becomes only the second team in PSL history to win back-to-back championships."
        },
        {
          type: "paragraph",
          text: "The match started at a blistering pace with Penn State United taking an early 2-0 lead through goals from Sarah Chen and Tyler Brooks in the 12th and 18th minutes. The large crowd of 245 spectators at Beaver Stadium Field A witnessed what appeared to be an upset in the making."
        },
        {
          type: "subheading",
          text: "The Comeback Begins"
        },
        {
          type: "paragraph",
          text: "However, Nittany Lions FC showed the championship mentality that has defined their season. Marcus Johnson pulled one back just before halftime with a spectacular 25-yard strike that left goalkeeper Jake Wilson with no chance. The momentum had shifted."
        },
        {
          type: "paragraph",
          text: "The second half belonged entirely to the Lions. Jordan Smith leveled the score in the 67th minute with a close-range header from Emma Rodriguez's perfectly weighted cross. The stadium erupted as the defending champions had fought their way back into the contest."
        },
        {
          type: "subheading",
          text: "Championship-Winning Moment"
        },
        {
          type: "paragraph",
          text: "The decisive moment came in the 82nd minute when Marcus Johnson completed his brace and the comeback. A quick counter-attack led by Chris Davis found Johnson in space, and the senior forward made no mistake with a composed finish into the bottom corner."
        },
        {
          type: "quote",
          text: "The team showed incredible character today. Being 2-0 down in a championship final would break most teams, but these players have something special. They never stopped believing.",
          attribution: "Coach Sarah Williams, Nittany Lions FC"
        },
        {
          type: "subheading", 
          text: "Post-Match Celebrations"
        },
        {
          type: "paragraph",
          text: "The celebrations began immediately at the final whistle, with players and fans alike singing traditional Penn State songs. Captain Marcus Johnson was presented with the Championship MVP award, recognizing his two-goal performance and leadership throughout the season."
        },
        {
          type: "paragraph",
          text: "Penn State United, despite the heartbreak of defeat, was praised for their outstanding season and sportsmanship. Captain Sarah Chen graciously congratulated the winners and promised her team would be back stronger next year."
        }
      ]
    };
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    const contentHtml = this.articleData.content.map(section => this.renderContentSection(section)).join('');
    
    this.innerHTML = `
      <div style="
        min-height: 100vh;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        padding: 40px 20px;
        font-family: Arial, sans-serif;
      ">
        <!-- Back Button -->
        <div style="
          max-width: 800px;
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

        <!-- Article Header -->
        <div style="
          max-width: 800px;
          margin: 0 auto 40px auto;
          background: white;
          border-radius: 20px;
          padding: 50px 40px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          text-align: center;
        ">
          <!-- Category Badge -->
          <div style="
            background: linear-gradient(135deg, #f59e0b, #fbbf24);
            color: white;
            padding: 8px 20px;
            border-radius: 25px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: inline-block;
            margin-bottom: 25px;
          ">${this.articleData.category}</div>
          
          <!-- Title -->
          <h1 style="
            font-size: 42px;
            color: #1e3a8a;
            margin: 0 0 20px 0;
            font-weight: 900;
            line-height: 1.2;
          ">${this.articleData.title}</h1>
          
          <!-- Summary -->
          <p style="
            font-size: 20px;
            color: #6b7280;
            line-height: 1.6;
            margin: 0 0 30px 0;
            font-weight: 400;
          ">${this.articleData.summary}</p>
          
          <!-- Meta Information -->
          <div style="
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 25px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
          ">
            <div><strong>By:</strong> ${this.articleData.author}</div>
            <div><strong>Published:</strong> ${this.articleData.publishDate}</div>
            <div><strong>Read time:</strong> ${this.articleData.readTime}</div>
          </div>
        </div>

        <!-- Match Result Card -->
        <div style="
          max-width: 800px;
          margin: 0 auto 40px auto;
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <h2 style="
            color: #1e3a8a;
            text-align: center;
            margin: 0 0 30px 0;
            font-size: 28px;
            font-weight: 700;
          ">Final Result</h2>
          
          <!-- Score Display -->
          <div style="
            background: linear-gradient(135deg, #f59e0b, #fbbf24);
            color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            margin-bottom: 30px;
          ">
            <div style="
              display: grid;
              grid-template-columns: 2fr auto 2fr;
              gap: 20px;
              align-items: center;
              max-width: 500px;
              margin: 0 auto;
            ">
              <div>
                <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">${this.articleData.finalScore.winner}</div>
                <div style="font-size: 14px; opacity: 0.9;">Champions</div>
              </div>
              
              <div style="
                font-size: 48px;
                font-weight: 900;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
              ">${this.articleData.finalScore.winnerScore} - ${this.articleData.finalScore.runnerUpScore}</div>
              
              <div>
                <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">${this.articleData.finalScore.runnerUp}</div>
                <div style="font-size: 14px; opacity: 0.9;">Runners-up</div>
              </div>
            </div>
          </div>
          
          <!-- Match Stats -->
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
          ">
            <div style="
              background: #f8fafc;
              padding: 20px;
              border-radius: 10px;
              text-align: center;
            ">
              <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">VENUE</div>
              <div style="color: #1e3a8a; font-weight: 700;">${this.articleData.matchStats.venue}</div>
            </div>
            
            <div style="
              background: #f8fafc;
              padding: 20px;
              border-radius: 10px;
              text-align: center;
            ">
              <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">ATTENDANCE</div>
              <div style="color: #1e3a8a; font-weight: 700;">${this.articleData.matchStats.attendance}</div>
            </div>
            
            <div style="
              background: #f8fafc;
              padding: 20px;
              border-radius: 10px;
              text-align: center;
            ">
              <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">WEATHER</div>
              <div style="color: #1e3a8a; font-weight: 700;">${this.articleData.matchStats.weather}</div>
            </div>
            
            <div style="
              background: #f8fafc;
              padding: 20px;
              border-radius: 10px;
              text-align: center;
            ">
              <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">DURATION</div>
              <div style="color: #1e3a8a; font-weight: 700;">${this.articleData.matchStats.duration}</div>
            </div>
          </div>
          
          <!-- MVP Section -->
          <div style="
            background: linear-gradient(135deg, #1e3a8a15, #3b82f615);
            padding: 25px;
            border-radius: 15px;
            text-align: center;
          ">
            <h3 style="
              color: #1e3a8a;
              margin: 0 0 15px 0;
              font-size: 20px;
              font-weight: 700;
            ">Championship MVP</h3>
            <div style="
              color: #1e3a8a;
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 8px;
            ">${this.articleData.mvp.name}</div>
            <div style="
              color: #6b7280;
              font-size: 16px;
              margin-bottom: 5px;
            ">${this.articleData.mvp.team}</div>
            <div style="
              color: #6b7280;
              font-size: 14px;
              font-weight: 600;
            ">${this.articleData.mvp.stats}</div>
          </div>
        </div>

        <!-- Championship Photo -->
        <div style="
          max-width: 800px;
          margin: 0 auto 40px auto;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               style="width: 100%; height: 400px; object-fit: cover; display: block;" 
               alt="Championship Celebration">
          <div style="
            padding: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            font-style: italic;
          ">
            Nittany Lions FC celebrates their championship victory at Beaver Stadium
          </div>
        </div>

        <!-- Article Content -->
        <div style="
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          line-height: 1.8;
        ">
          ${contentHtml}
          
          <!-- Next Season CTA -->
          <div style="
            background: linear-gradient(135deg, #059669, #10b981);
            color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            margin-top: 40px;
          ">
            <h3 style="
              margin: 0 0 15px 0;
              font-size: 24px;
              font-weight: 700;
            ">Join Next Season!</h3>
            <p style="
              margin: 0 0 25px 0;
              font-size: 16px;
              opacity: 0.95;
            ">
              Registration for the 2025 season opens January 1st. Be part of the next championship story!
            </p>
            <button id="register-btn" style="
              background: white;
              color: #059669;
              border: none;
              padding: 15px 35px;
              border-radius: 50px;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              text-transform: uppercase;
              letter-spacing: 1px;
            " onmouseover="
              this.style.transform='translateY(-2px)';
              this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)';
            " onmouseout="
              this.style.transform='translateY(0)';
              this.style.boxShadow='none';
            ">
              Register Interest
            </button>
          </div>
        </div>
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  renderContentSection(section) {
    switch(section.type) {
      case 'paragraph':
        return `
          <p style="
            color: #374151;
            margin-bottom: 20px;
            font-size: 16px;
          ">${section.text}</p>
        `;
        
      case 'subheading':
        return `
          <h2 style="
            color: #1e3a8a;
            margin: 40px 0 20px 0;
            font-size: 28px;
            font-weight: 700;
          ">${section.text}</h2>
        `;
        
      case 'highlight':
        return `
          <div style="
            background: linear-gradient(135deg, #f59e0b, #fbbf24);
            color: white;
            padding: 25px;
            border-radius: 10px;
            margin: 30px 0;
            font-size: 18px;
            font-weight: 600;
            text-align: center;
          ">${section.text}</div>
        `;
        
      case 'quote':
        return `
          <blockquote style="
            border-left: 4px solid #1e3a8a;
            padding: 25px 30px;
            margin: 30px 0;
            background: #f8fafc;
            border-radius: 0 10px 10px 0;
            font-style: italic;
            color: #374151;
            font-size: 18px;
          ">
            "${section.text}"
            <cite style="
              display: block;
              margin-top: 15px;
              font-style: normal;
              font-weight: 600;
              color: #1e3a8a;
              font-size: 14px;
            ">— ${section.attribution}</cite>
          </blockquote>
        `;
        
      default:
        return '';
    }
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

customElements.define('championship-page', ChampionshipPage);