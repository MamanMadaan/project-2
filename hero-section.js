export class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="
        position: relative;
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%);
        color: white;
        padding: 40px 20px;
        text-align: left;
        font-family: 'Arial', sans-serif;
        overflow: hidden;
        min-height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <!-- Animated Background Elements -->
        <div style="
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                     radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 1.5px, transparent 1.5px),
                     radial-gradient(circle at 50% 10%, rgba(255,255,255,0.2) 1px, transparent 1px),
                     radial-gradient(circle at 10% 60%, rgba(255,255,255,0.1) 1px, transparent 1px),
                     radial-gradient(circle at 90% 30%, rgba(255,255,255,0.12) 1.5px, transparent 1.5px);
          background-size: 200px 200px;
          animation: float 20s ease-in-out infinite;
        "></div>
        
        <!-- Main Content Container -->
        <div style="
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 40px;
          align-items: center;
          width: 100%;
        ">
          
          <!-- Left Column - Text Content -->
          <div style="text-align: left;">
            <!-- Main Title with Enhanced Typography -->
            <h1 style="
              font-size: clamp(28px, 4vw, 36px);
              margin: 0 0 8px 0;
              font-weight: 900;
              letter-spacing: -1px;
              text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
              background: linear-gradient(45deg, #ffffff, #e0f2fe);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: glow 3s ease-in-out infinite alternate;
            ">PSL Dashboard</h1>
            
            <!-- Subtitle with Better Spacing -->
            <div style="
              background: rgba(255,255,255,0.15);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255,255,255,0.2);
              border-radius: 50px;
              padding: 6px 16px;
              margin: 0 0 12px 0;
              display: inline-block;
              box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            ">
              <p style="
                font-size: 14px;
                margin: 0;
                font-weight: 600;
                letter-spacing: 1px;
              ">PennState Soccer League</p>
            </div>
            
            <!-- Description with Better Typography -->
            <p style="
              font-size: 14px;
              margin: 0;
              line-height: 1.4;
              opacity: 0.95;
              max-width: 400px;
              text-shadow: 1px 1px 4px rgba(0,0,0,0.2);
            ">Experience competitive soccer excellence at Penn State University.</p>
          </div>

          <!-- Center Column - Stats -->
          <div style="
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            text-align: center;
          ">
            <div>
              <div style="
                font-size: 24px;
                font-weight: 900;
                margin-bottom: 4px;
                color: #ffffff;
                text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
              ">4</div>
              <div style="
                font-size: 10px;
                opacity: 0.9;
                text-transform: uppercase;
                letter-spacing: 1px;
              ">Teams</div>
            </div>
            
            <div>
              <div style="
                font-size: 24px;
                font-weight: 900;
                margin-bottom: 4px;
                color: #ffffff;
                text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
              ">50+</div>
              <div style="
                font-size: 10px;
                opacity: 0.9;
                text-transform: uppercase;
                letter-spacing: 1px;
              ">Players</div>
            </div>
            
            <div>
              <div style="
                font-size: 24px;
                font-weight: 900;
                margin-bottom: 4px;
                color: #ffffff;
                text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
              ">25+</div>
              <div style="
                font-size: 10px;
                opacity: 0.9;
                text-transform: uppercase;
                letter-spacing: 1px;
              ">Games</div>
            </div>
          </div>

          <!-- Right Column - Action Buttons -->
          <div style="
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: flex-end;
          ">
            <button style="
              background: linear-gradient(45deg, #ffffff, #f8fafc);
              color: #1e3a8a;
              border: none;
              padding: 10px 24px;
              font-size: 14px;
              font-weight: 700;
              border-radius: 50px;
              cursor: pointer;
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
              transition: all 0.3s ease;
              text-transform: uppercase;
              letter-spacing: 1px;
              white-space: nowrap;
            " 
            onmouseover="
              this.style.transform='translateY(-2px)'; 
              this.style.boxShadow='0 10px 30px rgba(0,0,0,0.2)';
              this.style.background='linear-gradient(45deg, #f8fafc, #e2e8f0)';
            " 
            onmouseout="
              this.style.transform='translateY(0)'; 
              this.style.boxShadow='0 8px 25px rgba(0,0,0,0.15)';
              this.style.background='linear-gradient(45deg, #ffffff, #f8fafc)';
            ">
              Register Now
            </button>
            
            <button style="
              background: transparent;
              color: white;
              border: 2px solid rgba(255,255,255,0.8);
              padding: 8px 22px;
              font-size: 14px;
              font-weight: 600;
              border-radius: 50px;
              cursor: pointer;
              backdrop-filter: blur(10px);
              transition: all 0.3s ease;
              text-transform: uppercase;
              letter-spacing: 1px;
              white-space: nowrap;
            " 
            onmouseover="
              this.style.background='rgba(255,255,255,0.15)'; 
              this.style.borderColor='rgba(255,255,255,1)';
              this.style.transform='translateY(-2px)';
              this.style.boxShadow='0 10px 30px rgba(0,0,0,0.2)';
            " 
            onmouseout="
              this.style.background='transparent'; 
              this.style.borderColor='rgba(255,255,255,0.8)';
              this.style.transform='translateY(0)';
              this.style.boxShadow='none';
            ">
              Learn More
            </button>
          </div>
        </div>
        
        <!-- Decorative Elements -->
        <div style="
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 4s ease-in-out infinite;
        "></div>
        
        <div style="
          position: absolute;
          top: -30px;
          right: -30px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 5s ease-in-out infinite reverse;
        "></div>
      </div>
      
      <style>
        @keyframes glow {
          0% { text-shadow: 2px 2px 8px rgba(0,0,0,0.3); }
          100% { text-shadow: 2px 2px 15px rgba(255,255,255,0.2), 0 0 25px rgba(255,255,255,0.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
      </style>
    `;
  }
}

customElements.define('hero-section', HeroSection);