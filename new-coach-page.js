export class NewCoachPage extends HTMLElement {
  constructor() {
    super();
    this.coachData = {
      name: "Coach Elena Martinez",
      title: "PSL Head Coach & Director",
      startDate: "January 2025",
      previousRole: "Assistant Coach, Penn State Women's Soccer",
      education: "Master's in Sports Management, Penn State University",
      certifications: ["UEFA B License", "USSF National C License", "Sports Psychology Certification"],
      experience: {
        years: 8,
        highlights: [
          "5 years coaching collegiate soccer",
          "3 years professional youth development", 
          "2 NCAA tournament appearances as assistant coach",
          "Developed 15+ student-athletes who earned athletic scholarships"
        ]
      },
      philosophy: "Soccer is more than a game - it's a platform for personal growth, teamwork, and building lifelong friendships. Every player deserves the opportunity to reach their potential both on and off the field.",
      goals: [
        "Expand PSL participation by 40% within two years",
        "Implement comprehensive player development programs",
        "Establish partnerships with local youth soccer organizations",
        "Create pathways for advanced players to compete at higher levels",
        "Build a sustainable, inclusive soccer community at Penn State"
      ],
      personalInfo: {
        hometown: "Madrid, Spain",
        languages: ["English", "Spanish", "Portuguese"],
        hobbies: ["Photography", "Travel", "Cooking", "Hiking"],
        favoritePlayers: ["Alexia Putellas", "Pedri", "Vinícius Jr."]
      }
    };
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    this.innerHTML = `
      <div style="
        min-height: 100vh;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        padding: 40px 20px;
        font-family: Arial, sans-serif;
      ">
        <!-- Back Button -->
        <div style="
          max-width: 1000px;
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

        <!-- Hero Section -->
        <div style="
          max-width: 1000px;
          margin: 0 auto 50px auto;
          background: white;
          
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <div style="
            background: linear-gradient(135deg, #1e3a8a, #3b82f6);
            color: white;
            padding: 50px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
          ">
            <!-- Background Pattern -->
            <div style="
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px);
              background-size: 50px 50px;
              opacity: 0.5;
            "></div>
            
            <!-- Content -->
            <div style="position: relative; z-index: 2;">
              <!-- Coach Photo Placeholder -->
              <div style="
                width: 150px;
                height: 150px;
                background: rgba(255,255,255,0.2);
                
                margin: 0 auto 25px auto;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 60px;
                border: 4px solid rgba(255,255,255,0.3);
                box-shadow: 0 8px 25px rgba(0,0,0,0.2);
              ">👩‍🏫</div>
              
              <h1 style="
                font-size: 42px;
                margin: 0 0 15px 0;
                font-weight: 900;
              ">${this.coachData.name}</h1>
              
              <div style="
                font-size: 20px;
                margin: 0 0 10px 0;
                opacity: 0.95;
                font-weight: 600;
              ">${this.coachData.title}</div>
              
              <div style="
                background: rgba(255,255,255,0.2);
                padding: 8px 20px;
                
                display: inline-block;
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 1px;
                text-transform: uppercase;
              ">Joining ${this.coachData.startDate}</div>
            </div>
          </div>
        </div>

        <!-- Main Content Grid -->
        <div style="
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        ">
          
          <!-- Left Column -->
          <div style="display: grid; gap: 30px;">
            
            <!-- About Section -->
            <div style="
              background: white;
              
              padding: 35px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            ">
              <h2 style="
                color: #1e3a8a;
                margin: 0 0 25px 0;
                font-size: 28px;
                font-weight: 700;
              ">About Coach Martinez</h2>
              
              <p style="
                color: #374151;
                line-height: 1.8;
                margin: 0 0 25px 0;
                font-size: 16px;
              ">
                We are thrilled to welcome Elena Martinez as our new Head Coach and Director. 
                Coach Martinez brings a wealth of experience from collegiate and professional soccer, 
                combined with a passionate commitment to student-athlete development.
              </p>
              
              <!-- Background Info -->
              <div style="
                background: #f8fafc;
                padding: 25px;
                
                margin-bottom: 25px;
              ">
                <h3 style="
                  color: #1e3a8a;
                  margin: 0 0 15px 0;
                  font-size: 18px;
                  font-weight: 600;
                ">Professional Background</h3>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151;">Previous Role:</strong>
                  <span style="color: #6b7280; margin-left: 8px;">${this.coachData.previousRole}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151;">Education:</strong>
                  <span style="color: #6b7280; margin-left: 8px;">${this.coachData.education}</span>
                </div>
                
                <div>
                  <strong style="color: #374151;">Experience:</strong>
                  <span style="color: #6b7280; margin-left: 8px;">${this.coachData.experience.years} years in coaching</span>
                </div>
              </div>
              
              <!-- Philosophy -->
              <div style="
                border-left: 4px solid #1e3a8a;
                padding: 20px 25px;
                background: #f8fafc;
                
              ">
                <h3 style="
                  color: #1e3a8a;
                  margin: 0 0 15px 0;
                  font-size: 18px;
                  font-weight: 600;
                ">Coaching Philosophy</h3>
                <p style="
                  color: #374151;
                  margin: 0;
                  font-style: italic;
                  line-height: 1.6;
                ">"${this.coachData.philosophy}"</p>
              </div>
            </div>
            
            <!-- Goals & Vision -->
            <div style="
              background: white;
              
              padding: 35px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            ">
              <h2 style="
                color: #1e3a8a;
                margin: 0 0 25px 0;
                font-size: 28px;
                font-weight: 700;
              ">Vision for PSL</h2>
              
              <p style="
                color: #374151;
                line-height: 1.6;
                margin: 0 0 25px 0;
              ">
                Coach Martinez has outlined ambitious goals for the Premier Student League's future:
              </p>
              
              <div style="display: grid; gap: 15px;">
                ${this.coachData.goals.map(goal => `
                  <div style="
                    background: #f8fafc;
                    padding: 20px;
                    
                    border-left: 4px solid #059669;
                    transition: all 0.3s ease;
                  " onmouseover="
                    this.style.background='#f0fdf4';
                    this.style.transform='translateX(5px)';
                  " onmouseout="
                    this.style.background='#f8fafc';
                    this.style.transform='translateX(0)';
                  ">
                    <div style="
                      color: #374151;
                      display: flex;
                      align-items: flex-start;
                      gap: 12px;
                    ">
                      <span style="
                        background: #059669;
                        color: white;
                        width: 20px;
                        height: 20px;
                        
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        font-weight: bold;
                        margin-top: 2px;
                        flex-shrink: 0;
                      ">✓</span>
                      ${goal}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <!-- Right Column -->
          <div style="display: grid; gap: 30px;">
            
            <!-- Certifications -->
            <div style="
              background: white;
              
              padding: 30px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            ">
              <h3 style="
                color: #1e3a8a;
                margin: 0 0 20px 0;
                font-size: 22px;
                font-weight: 700;
              ">Certifications</h3>
              
              <div style="display: grid; gap: 12px;">
                ${this.coachData.certifications.map(cert => `
                  <div style="
                    background: #f8fafc;
                    padding: 15px;
                    
                    color: #374151;
                    font-weight: 600;
                    border-left: 3px solid #3b82f6;
                  ">${cert}</div>
                `).join('')}
              </div>
            </div>
            
            <!-- Experience Highlights -->
            <div style="
              background: white;
              
              padding: 30px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            ">
              <h3 style="
                color: #1e3a8a;
                margin: 0 0 20px 0;
                font-size: 22px;
                font-weight: 700;
              ">Experience Highlights</h3>
              
              <div style="display: grid; gap: 12px;">
                ${this.coachData.experience.highlights.map(highlight => `
                  <div style="
                    color: #374151;
                    padding: 12px 0;
                    border-bottom: 1px solid #f3f4f6;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                  ">
                    <span style="
                      background: #059669;
                      width: 6px;
                      height: 6px;
                      
                      flex-shrink: 0;
                    "></span>
                    ${highlight}
                  </div>
                `).join('')}
              </div>
            </div>
            
            <!-- Personal Info -->
            <div style="
              background: white;
              
              padding: 30px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            ">
              <h3 style="
                color: #1e3a8a;
                margin: 0 0 20px 0;
                font-size: 22px;
                font-weight: 700;
              ">Get to Know Coach Martinez</h3>
              
              <div style="display: grid; gap: 15px;">
                <div>
                  <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">HOMETOWN</div>
                  <div style="color: #374151; font-weight: 600;">${this.coachData.personalInfo.hometown}</div>
                </div>
                
                <div>
                  <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">LANGUAGES</div>
                  <div style="color: #374151; font-weight: 600;">${this.coachData.personalInfo.languages.join(', ')}</div>
                </div>
                
                <div>
                  <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 8px;">HOBBIES</div>
                  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${this.coachData.personalInfo.hobbies.map(hobby => `
                      <span style="
                        background: #e5e7eb;
                        color: #374151;
                        padding: 4px 12px;
                        
                        font-size: 12px;
                        font-weight: 600;
                      ">${hobby}</span>
                    `).join('')}
                  </div>
                </div>
                
                <div>
                  <div style="color: #6b7280; font-size: 12px; font-weight: 600; margin-bottom: 5px;">FAVORITE PLAYERS</div>
                  <div style="color: #374151; font-weight: 600; font-size: 14px;">${this.coachData.personalInfo.favoritePlayers.join(', ')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div style="
          max-width: 1000px;
          margin: 50px auto 0 auto;
          background: white;
          
          padding: 40px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        ">
          <h2 style="
            color: #1e3a8a;
            margin: 0 0 20px 0;
            font-size: 28px;
            font-weight: 700;
          ">Welcome Coach Martinez!</h2>
          <p style="
            color: #6b7280;
            font-size: 18px;
            line-height: 1.6;
            margin: 0 0 30px 0;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 30px;
          ">
            We're excited to have Coach Martinez lead PSL into its next chapter. 
            Students interested in learning more about the program can reach out anytime.
          </p>
          
          <button id="contact-btn" style="
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
            margin-right: 15px;
          " onmouseover="
            this.style.transform='translateY(-2px)';
            this.style.boxShadow='0 8px 20px rgba(30, 58, 138, 0.3)';
          " onmouseout="
            this.style.transform='translateY(0)';
            this.style.boxShadow='none';
          ">
            Contact Coach Martinez
          </button>
          
          <button id="register-btn" style="
            background: transparent;
            color: #1e3a8a;
            border: 2px solid #1e3a8a;
            padding: 15px 35px;
            
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
            Join PSL
          </button>
        </div>
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  attachEventListeners() {
    setTimeout(() => {
      const backBtn = this.querySelector('#back-btn');
      const contactBtn = this.querySelector('#contact-btn');
      const registerBtn = this.querySelector('#register-btn');
      
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'home' },
            bubbles: true 
          }));
        });
      }
      
      if (contactBtn) {
        contactBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'contact' },
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

customElements.define('new-coach-page', NewCoachPage);
