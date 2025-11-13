export class SupportPage extends HTMLElement {
  constructor() {
    super();
    this.donationTiers = [
      {
        title: "Bronze Supporter",
        amount: "$25",
        benefits: [
          "PSL Newsletter subscription",
          "Season schedule updates",
          "Recognition on website"
        ],
        color: "#cd7f32"
      },
      {
        title: "Silver Supporter", 
        amount: "$50",
        benefits: [
          "All Bronze benefits",
          "PSL merchandise package",
          "VIP seating at games",
          "End-of-season celebration invite"
        ],
        color: "#c0c0c0"
      },
      {
        title: "Gold Supporter",
        amount: "$100",
        benefits: [
          "All Silver benefits",
          "Team photo with players",
          "Recognition at halftime",
          "Season highlight video"
        ],
        color: "#ffd700"
      },
      {
        title: "Platinum Supporter",
        amount: "$250",
        benefits: [
          "All Gold benefits",
          "Named team sponsor",
          "Private meet & greet",
          "Custom PSL jersey"
        ],
        color: "#e5e4e2"
      }
    ];

    this.sponsorshipOptions = [
      {
        title: "Equipment Sponsorship",
        description: "Provide soccer balls, cones, and training equipment",
        impact: "Helps teams practice effectively",
        commitment: "$500 - $2,000"
      },
      {
        title: "Uniform Sponsorship", 
        description: "Sponsor team jerseys and gear",
        impact: "Professional appearance for all teams",
        commitment: "$1,000 - $5,000"
      },
      {
        title: "Field Maintenance",
        description: "Support field upkeep and improvements",
        impact: "Safe and quality playing surfaces",
        commitment: "$2,000 - $10,000"
      },
      {
        title: "Tournament Sponsorship",
        description: "Sponsor major tournament events",
        impact: "Creates memorable experiences",
        commitment: "$5,000 - $15,000"
      }
    ];
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    const donationTiersHtml = this.donationTiers.map(tier => this.createDonationTier(tier)).join('');
    const sponsorshipHtml = this.sponsorshipOptions.map(option => this.createSponsorshipOption(option)).join('');
    
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

        <!-- Hero Section -->
        <div style="
          max-width: 1200px;
          margin: 0 auto 60px auto;
          text-align: center;
          background: white;
          border-radius: 20px;
          padding: 60px 40px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <h1 style="
            font-size: 48px;
            color: #1e3a8a;
            margin: 0 0 20px 0;
            font-weight: 900;
          ">Support PSL</h1>
          <p style="
            font-size: 22px;
            color: #6b7280;
            margin: 0 0 30px 0;
            line-height: 1.6;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          ">
            Help us continue providing exceptional soccer opportunities for students. 
            Your support makes dreams possible and builds champions on and off the field.
          </p>
          
          <!-- Impact Stats -->
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            max-width: 900px;
            margin: 40px auto 0 auto;
          ">
            <div style="
              background: linear-gradient(135deg, #1e3a8a, #3b82f6);
              color: white;
              padding: 30px;
              border-radius: 15px;
              text-align: center;
            ">
              <div style="font-size: 36px; font-weight: 900; margin-bottom: 8px;">50+</div>
              <div style="font-size: 14px; opacity: 0.9;">Students Served</div>
            </div>
            <div style="
              background: linear-gradient(135deg, #059669, #10b981);
              color: white;
              padding: 30px;
              border-radius: 15px;
              text-align: center;
            ">
              <div style="font-size: 36px; font-weight: 900; margin-bottom: 8px;">$25K</div>
              <div style="font-size: 14px; opacity: 0.9;">Annual Budget</div>
            </div>
            <div style="
              background: linear-gradient(135deg, #f59e0b, #fbbf24);
              color: white;
              padding: 30px;
              border-radius: 15px;
              text-align: center;
            ">
              <div style="font-size: 36px; font-weight: 900; margin-bottom: 8px;">100%</div>
              <div style="font-size: 14px; opacity: 0.9;">Volunteer-Run</div>
            </div>
          </div>
        </div>

        <!-- Donation Tiers -->
        <div style="
          max-width: 1200px;
          margin: 0 auto 60px auto;
        ">
          <h2 style="
            text-align: center;
            color: #1e3a8a;
            font-size: 36px;
            margin-bottom: 40px;
            font-weight: 700;
          ">Donation Levels</h2>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
          ">
            ${donationTiersHtml}
          </div>
        </div>

        <!-- Sponsorship Opportunities -->
        <div style="
          max-width: 1200px;
          margin: 0 auto 60px auto;
        ">
          <h2 style="
            text-align: center;
            color: #1e3a8a;
            font-size: 36px;
            margin-bottom: 40px;
            font-weight: 700;
          ">Sponsorship Opportunities</h2>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
          ">
            ${sponsorshipHtml}
          </div>
        </div>

        <!-- Contact Section -->
        <div style="
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          padding: 50px 40px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <h2 style="
            color: #1e3a8a;
            margin: 0 0 20px 0;
            font-size: 32px;
            font-weight: 700;
          ">Ready to Support?</h2>
          <p style="
            color: #6b7280;
            font-size: 18px;
            line-height: 1.6;
            margin: 0 0 30px 0;
          ">
            Contact us to discuss donation options or set up a sponsorship package 
            that works for your organization.
          </p>
          
          <div style="
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
          ">
            <button id="donate-btn" style="
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
              color: white;
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
              this.style.boxShadow='0 8px 20px rgba(5, 150, 105, 0.3)';
            " onmouseout="
              this.style.transform='translateY(0)';
              this.style.boxShadow='none';
            ">
              Make Donation
            </button>
            
            <button id="sponsor-btn" style="
              background: transparent;
              color: #1e3a8a;
              border: 2px solid #1e3a8a;
              padding: 15px 35px;
              border-radius: 50px;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              text-transform: uppercase;
              letter-spacing: 1px;
            " onmouseover="
              this.style.background='#1e3a8a';
              this.style.color='white';
            " onmouseout="
              this.style.background='transparent';
              this.style.color='#1e3a8a';
            ">
              Become Sponsor
            </button>
          </div>
        </div>
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  createDonationTier(tier) {
    return `
      <div style="
        background: white;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        border: 3px solid transparent;
        text-align: center;
        position: relative;
        overflow: hidden;
      " onmouseover="
        this.style.transform='translateY(-8px)'; 
        this.style.boxShadow='0 15px 35px rgba(0,0,0,0.15)';
        this.style.borderColor='${tier.color}';
      " onmouseout="
        this.style.transform='translateY(0)'; 
        this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)';
        this.style.borderColor='transparent';
      ">
        
        <!-- Tier Header -->
        <div style="
          background: ${tier.color};
          color: white;
          padding: 15px;
          margin: -30px -30px 25px -30px;
          text-align: center;
        ">
          <h3 style="
            font-size: 22px;
            margin: 0 0 8px 0;
            font-weight: 700;
          ">${tier.title}</h3>
          <div style="
            font-size: 32px;
            font-weight: 900;
          ">${tier.amount}</div>
        </div>
        
        <!-- Benefits List -->
        <div style="text-align: left;">
          ${tier.benefits.map(benefit => `
            <div style="
              padding: 12px 0;
              border-bottom: 1px solid #f3f4f6;
              color: #374151;
              display: flex;
              align-items: flex-start;
              gap: 10px;
            ">
              <span style="
                background: ${tier.color};
                width: 6px;
                height: 6px;
                border-radius: 50%;
                margin-top: 8px;
                flex-shrink: 0;
              "></span>
              ${benefit}
            </div>
          `).join('')}
        </div>
        
        <!-- Select Button -->
        <button style="
          background: ${tier.color};
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 25px;
          width: 100%;
          transition: all 0.3s ease;
        " onmouseover="
          this.style.opacity='0.9';
          this.style.transform='scale(1.02)';
        " onmouseout="
          this.style.opacity='1';
          this.style.transform='scale(1)';
        ">
          Select This Level
        </button>
      </div>
    `;
  }
  
  createSponsorshipOption(option) {
    return `
      <div style="
        background: white;
        border-radius: 15px;
        padding: 35px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        border: 2px solid transparent;
      " onmouseover="
        this.style.transform='translateY(-5px)'; 
        this.style.boxShadow='0 15px 35px rgba(0,0,0,0.15)';
        this.style.borderColor='#e5e7eb';
      " onmouseout="
        this.style.transform='translateY(0)'; 
        this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)';
        this.style.borderColor='transparent';
      ">
        
        <h3 style="
          color: #1e3a8a;
          font-size: 24px;
          margin: 0 0 15px 0;
          font-weight: 700;
        ">${option.title}</h3>
        
        <p style="
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 20px 0;
          font-size: 16px;
        ">${option.description}</p>
        
        <div style="
          background: #f8fafc;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        ">
          <div style="
            color: #374151;
            font-weight: 600;
            margin-bottom: 8px;
          ">Impact:</div>
          <div style="
            color: #6b7280;
          ">${option.impact}</div>
        </div>
        
        <div style="
          background: linear-gradient(135deg, #1e3a8a15, #3b82f615);
          padding: 15px 20px;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <span style="
            color: #1e3a8a;
            font-weight: 600;
          ">Investment Range:</span>
          <span style="
            color: #1e3a8a;
            font-weight: 700;
            font-size: 18px;
          ">${option.commitment}</span>
        </div>
      </div>
    `;
  }
  
  attachEventListeners() {
    setTimeout(() => {
      const backBtn = this.querySelector('#back-btn');
      const donateBtn = this.querySelector('#donate-btn');
      const sponsorBtn = this.querySelector('#sponsor-btn');
      
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'home' },
            bubbles: true 
          }));
        });
      }
      
      if (donateBtn) {
        donateBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'contact' },
            bubbles: true 
          }));
        });
      }
      
      if (sponsorBtn) {
        sponsorBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'contact' },
            bubbles: true 
          }));
        });
      }
    }, 0);
  }
}

customElements.define('support-page', SupportPage);