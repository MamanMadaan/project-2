export class SeasonKickoffPage extends HTMLElement {
  constructor() {
    super();
    this.articleData = {
      title: "PSL 2025 Season Kickoff",
      publishDate: "January 15, 2025",
      author: "PSL Communications Team",
      readTime: "3 min read",
      category: "Season Updates",
      summary: "The Premier Student League kicks off its most exciting season yet with new teams, enhanced facilities, and record registration numbers.",
      content: [
        {
          type: "paragraph",
          text: "The Penn State Premier Student League officially launches its 2025 season this weekend with an exciting kickoff event at Beaver Stadium Complex. This year promises to be our biggest and most competitive season yet, with record-breaking registration numbers and enhanced facilities."
        },
        {
          type: "highlight",
          text: "Over 65 students have registered to participate this season, representing a 30% increase from last year."
        },
        {
          type: "paragraph", 
          text: "The season will feature four competitive teams battling for championship glory across a 16-week schedule. New this year, we've added enhanced training facilities, professional-grade equipment, and expanded tournament opportunities."
        },
        {
          type: "subheading",
          text: "What's New This Season"
        },
        {
          type: "list",
          items: [
            "State-of-the-art training equipment and facilities",
            "Professional coaching staff with D1 experience", 
            "Live streaming of championship games",
            "Enhanced player development programs",
            "Expanded scholarship opportunities"
          ]
        },
        {
          type: "paragraph",
          text: "Registration remains open through January 31st for students interested in joining mid-season or participating in our recreational league. All skill levels are welcome, and no prior experience is required."
        },
        {
          type: "subheading",
          text: "Season Schedule Highlights"
        },
        {
          type: "paragraph",
          text: "The season features several marquee events including the Spring Championship Tournament (March 15-17), the annual Alumni Game (April 12), and the End-of-Season Celebration (May 18). Each event offers unique opportunities for players to showcase their skills and connect with the broader Penn State community."
        },
        {
          type: "quote",
          text: "This season represents everything we've been working toward - competitive excellence, student development, and building lasting friendships through the beautiful game.",
          attribution: "Coach Sarah Martinez, PSL Director"
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
          
          padding: 50px 40px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          text-align: center;
        ">
          <!-- Category Badge -->
          <div style="
            background: linear-gradient(135deg, #059669, #10b981);
            color: white;
            padding: 8px 20px;
            
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
            <div style="display: flex; align-items: center; gap: 5px;">
              <strong>By:</strong> ${this.articleData.author}
            </div>
            <div style="display: flex; align-items: center; gap: 5px;">
              <strong>Published:</strong> ${this.articleData.publishDate}
            </div>
            <div style="display: flex; align-items: center; gap: 5px;">
              <strong>Read time:</strong> ${this.articleData.readTime}
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div style="
          max-width: 800px;
          margin: 0 auto 40px auto;
          background: white;
          
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               style="width: 100%; height: 400px; object-fit: cover; display: block;" 
               alt="Season Kickoff Event">
          <div style="
            padding: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            font-style: italic;
          ">
            Players gather for the official 2025 season kickoff ceremony
          </div>
        </div>

        <!-- Article Content -->
        <div style="
          max-width: 800px;
          margin: 0 auto;
          background: white;
          
          padding: 40px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          line-height: 1.8;
        ">
          ${contentHtml}
          
          <!-- Registration CTA -->
          <div style="
            background: linear-gradient(135deg, #1e3a8a15, #3b82f615);
            padding: 30px;
            
            text-align: center;
            margin-top: 40px;
          ">
            <h3 style="
              color: #1e3a8a;
              margin: 0 0 15px 0;
              font-size: 24px;
              font-weight: 700;
            ">Join the Action!</h3>
            <p style="
              color: #6b7280;
              margin: 0 0 25px 0;
              font-size: 16px;
            ">
              Registration is still open for the 2025 season. Don't miss your chance to be part of PSL!
            </p>
            <button id="register-btn" style="
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              color: white;
              border: none;
              padding: 15px 35px;
              
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              text-transform: uppercase;
              letter-spacing: 1px;
            " onmouseover="
              this.style.transform='translateY(-2px)';
              this.style.boxShadow='0 8px 20px rgba(30, 58, 138, 0.3)';
            " onmouseout="
              this.style.transform='translateY(0)';
              this.style.boxShadow='none';
            ">
              Register Now
            </button>
          </div>
        </div>

        <!-- Related Articles -->
        <div style="
          max-width: 800px;
          margin: 40px auto 0 auto;
        ">
          <h3 style="
            color: #1e3a8a;
            margin-bottom: 25px;
            font-size: 24px;
            font-weight: 700;
            text-align: center;
          ">Related News</h3>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          ">
            <div style="
              background: white;
              
              padding: 25px;
              box-shadow: 0 4px 15px rgba(0,0,0,0.1);
              cursor: pointer;
              transition: all 0.3s ease;
            " onmouseover="
              this.style.transform='translateY(-5px)';
              this.style.boxShadow='0 8px 20px rgba(0,0,0,0.15)';
            " onmouseout="
              this.style.transform='translateY(0)';
              this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)';
            ">
              <h4 style="
                color: #1e3a8a;
                margin: 0 0 10px 0;
                font-size: 16px;
                font-weight: 600;
              ">Championship Results</h4>
              <p style="
                color: #6b7280;
                margin: 0;
                font-size: 14px;
                line-height: 1.5;
              ">See highlights from our championship finals and celebrate our winners.</p>
            </div>
            
            <div style="
              background: white;
              
              padding: 25px;
              box-shadow: 0 4px 15px rgba(0,0,0,0.1);
              cursor: pointer;
              transition: all 0.3s ease;
            " onmouseover="
              this.style.transform='translateY(-5px)';
              this.style.boxShadow='0 8px 20px rgba(0,0,0,0.15)';
            " onmouseout="
              this.style.transform='translateY(0)';
              this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)';
            ">
              <h4 style="
                color: #1e3a8a;
                margin: 0 0 10px 0;
                font-size: 16px;
                font-weight: 600;
              ">Meet Our New Coach</h4>
              <p style="
                color: #6b7280;
                margin: 0;
                font-size: 14px;
                line-height: 1.5;
              ">Learn about Coach Martinez and their vision for PSL's future.</p>
            </div>
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
            background: linear-gradient(135deg, #059669, #10b981);
            color: white;
            padding: 25px;
            
            margin: 30px 0;
            font-size: 18px;
            font-weight: 600;
            text-align: center;
          ">${section.text}</div>
        `;
        
      case 'list':
        return `
          <ul style="
            margin: 20px 0;
            padding-left: 0;
            list-style: none;
          ">
            ${section.items.map(item => `
              <li style="
                padding: 10px 0 10px 25px;
                color: #374151;
                position: relative;
                border-bottom: 1px solid #f3f4f6;
              ">
                <span style="
                  position: absolute;
                  left: 0;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 8px;
                  height: 8px;
                  background: #059669;
                  
                "></span>
                ${item}
              </li>
            `).join('')}
          </ul>
        `;
        
      case 'quote':
        return `
          <blockquote style="
            border-left: 4px solid #1e3a8a;
            padding: 25px 30px;
            margin: 30px 0;
            background: #f8fafc;
            
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

customElements.define('season-kickoff-page', SeasonKickoffPage);
