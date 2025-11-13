export class StatsPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="
        min-height: 80vh;
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
          margin: 0 auto 40px auto;
          text-align: center;
        ">
          <h1 style="
            font-size: 36px;
            color: #1e3a8a;
            margin: 0 0 10px 0;
            font-weight: 900;
          ">League Statistics</h1>
          <p style="
            font-size: 18px;
            color: #6b7280;
            margin: 0;
          ">Current season standings, top performers, and team statistics</p>
        </div>

        <!-- Main Content Grid -->
        <div style="
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          gap: 30px;
        ">
          
          <!-- Top Stats Cards -->
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          ">
            
            <div style="
              background: linear-gradient(135deg, #1e3a8a, #3b82f6);
              color: white;
              padding: 25px;
              border-radius: 15px;
              text-align: center;
              box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
            ">
              <div style="font-size: 32px; margin-bottom: 10px;">⚽</div>
              <div style="font-size: 36px; font-weight: 900; margin-bottom: 5px;">127</div>
              <div style="font-size: 14px; opacity: 0.9;">Total Goals Scored</div>
            </div>
            
            <div style="
              background: linear-gradient(135deg, #10b981, #34d399);
              color: white;
              padding: 25px;
              border-radius: 15px;
              text-align: center;
              box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
            ">
              <div style="font-size: 32px; margin-bottom: 10px;">🏆</div>
              <div style="font-size: 36px; font-weight: 900; margin-bottom: 5px;">32</div>
              <div style="font-size: 14px; opacity: 0.9;">Games Played</div>
            </div>
            
            <div style="
              background: linear-gradient(135deg, #f59e0b, #fbbf24);
              color: white;
              padding: 25px;
              border-radius: 15px;
              text-align: center;
              box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
            ">
              <div style="font-size: 32px; margin-bottom: 10px;">👥</div>
              <div style="font-size: 36px; font-weight: 900; margin-bottom: 5px;">54</div>
              <div style="font-size: 14px; opacity: 0.9;">Active Players</div>
            </div>
            
            <div style="
              background: linear-gradient(135deg, #8b5cf6, #a78bfa);
              color: white;
              padding: 25px;
              border-radius: 15px;
              text-align: center;
              box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
            ">
              <div style="font-size: 32px; margin-bottom: 10px;">📊</div>
              <div style="font-size: 36px; font-weight: 900; margin-bottom: 5px;">3.97</div>
              <div style="font-size: 14px; opacity: 0.9;">Avg Goals/Game</div>
            </div>
          </div>

          <!-- Main Content Area -->
          <div style="
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 30px;
            align-items: start;
          ">
            
            <!-- League Standings -->
            <div style="
              background: white;
              border-radius: 15px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              overflow: hidden;
            ">
              <div style="
                background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                color: white;
                padding: 20px;
                text-align: center;
              ">
                <h2 style="margin: 0; font-size: 24px; font-weight: 700;">League Standings</h2>
              </div>
              
              <div style="overflow-x: auto;">
                <table style="
                  width: 100%;
                  border-collapse: collapse;
                  font-size: 14px;
                ">
                  <thead>
                    <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                      <th style="padding: 15px 10px; text-align: left; font-weight: 700; color: #374151;">Rank</th>
                      <th style="padding: 15px 10px; text-align: left; font-weight: 700; color: #374151;">Team</th>
                      <th style="padding: 15px 10px; text-align: center; font-weight: 700; color: #374151;">GP</th>
                      <th style="padding: 15px 10px; text-align: center; font-weight: 700; color: #374151;">W</th>
                      <th style="padding: 15px 10px; text-align: center; font-weight: 700; color: #374151;">L</th>
                      <th style="padding: 15px 10px; text-align: center; font-weight: 700; color: #374151;">D</th>
                      <th style="padding: 15px 10px; text-align: center; font-weight: 700; color: #374151;">GF</th>
                      <th style="padding: 15px 10px; text-align: center; font-weight: 700; color: #374151;">GA</th>
                      <th style="padding: 15px 10px; text-align: center; font-weight: 700; color: #374151;">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: linear-gradient(90deg, rgba(16, 185, 129, 0.1), transparent);">
                      <td style="padding: 15px 10px; font-weight: 700; color: #10b981;">1</td>
                      <td style="padding: 15px 10px; font-weight: 600; color: #1e3a8a;">Nittany Lions FC</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">8</td>
                      <td style="padding: 15px 10px; text-align: center; color: #10b981; font-weight: 600;">6</td>
                      <td style="padding: 15px 10px; text-align: center; color: #ef4444;">1</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">1</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">18</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">7</td>
                      <td style="padding: 15px 10px; text-align: center; font-weight: 700; color: #1e3a8a;">19</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 15px 10px; font-weight: 700; color: #6b7280;">2</td>
                      <td style="padding: 15px 10px; font-weight: 600; color: #1e3a8a;">Penn State United</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">8</td>
                      <td style="padding: 15px 10px; text-align: center; color: #10b981; font-weight: 600;">5</td>
                      <td style="padding: 15px 10px; text-align: center; color: #ef4444;">2</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">1</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">16</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">9</td>
                      <td style="padding: 15px 10px; text-align: center; font-weight: 700; color: #1e3a8a;">16</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 15px 10px; font-weight: 700; color: #6b7280;">3</td>
                      <td style="padding: 15px 10px; font-weight: 600; color: #1e3a8a;">Blue & White SC</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">8</td>
                      <td style="padding: 15px 10px; text-align: center; color: #10b981; font-weight: 600;">4</td>
                      <td style="padding: 15px 10px; text-align: center; color: #ef4444;">3</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">1</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">14</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">11</td>
                      <td style="padding: 15px 10px; text-align: center; font-weight: 700; color: #1e3a8a;">13</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 15px 10px; font-weight: 700; color: #6b7280;">4</td>
                      <td style="padding: 15px 10px; font-weight: 600; color: #1e3a8a;">Happy Valley FC</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">8</td>
                      <td style="padding: 15px 10px; text-align: center; color: #10b981; font-weight: 600;">2</td>
                      <td style="padding: 15px 10px; text-align: center; color: #ef4444;">5</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">1</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">8</td>
                      <td style="padding: 15px 10px; text-align: center; color: #6b7280;">16</td>
                      <td style="padding: 15px 10px; text-align: center; font-weight: 700; color: #1e3a8a;">7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Top Scorers & Team Stats -->
            <div style="display: grid; gap: 20px;">
              
              <!-- Top Scorers -->
              <div style="
                background: white;
                border-radius: 15px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                overflow: hidden;
              ">
                <div style="
                  background: linear-gradient(135deg, #f59e0b, #fbbf24);
                  color: white;
                  padding: 15px;
                  text-align: center;
                ">
                  <h3 style="margin: 0; font-size: 18px; font-weight: 700;">⚽ Top Scorers</h3>
                </div>
                
                <div style="padding: 20px;">
                  <div style="display: grid; gap: 12px;">
                    
                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      padding: 10px;
                      background: linear-gradient(90deg, rgba(245, 158, 11, 0.1), transparent);
                      border-radius: 8px;
                    ">
                      <div>
                        <div style="font-weight: 600; color: #1e3a8a; font-size: 14px;">Marcus Johnson</div>
                        <div style="font-size: 12px; color: #6b7280;">Nittany Lions FC</div>
                      </div>
                      <div style="
                        background: #f59e0b;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 14px;
                      ">12</div>
                    </div>

                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      padding: 10px;
                      background: #f8fafc;
                      border-radius: 8px;
                    ">
                      <div>
                        <div style="font-weight: 600; color: #1e3a8a; font-size: 14px;">Sarah Chen</div>
                        <div style="font-size: 12px; color: #6b7280;">Penn State United</div>
                      </div>
                      <div style="
                        background: #6b7280;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 14px;
                      ">9</div>
                    </div>

                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      padding: 10px;
                      background: #f8fafc;
                      border-radius: 8px;
                    ">
                      <div>
                        <div style="font-weight: 600; color: #1e3a8a; font-size: 14px;">Alex Rodriguez</div>
                        <div style="font-size: 12px; color: #6b7280;">Blue & White SC</div>
                      </div>
                      <div style="
                        background: #6b7280;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 14px;
                      ">8</div>
                    </div>

                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      padding: 10px;
                      background: #f8fafc;
                      border-radius: 8px;
                    ">
                      <div>
                        <div style="font-weight: 600; color: #1e3a8a; font-size: 14px;">Jordan Smith</div>
                        <div style="font-size: 12px; color: #6b7280;">Nittany Lions FC</div>
                      </div>
                      <div style="
                        background: #6b7280;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 14px;
                      ">7</div>
                    </div>

                  </div>
                </div>
              </div>

              <!-- Team Performance -->
              <div style="
                background: white;
                border-radius: 15px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                overflow: hidden;
              ">
                <div style="
                  background: linear-gradient(135deg, #8b5cf6, #a78bfa);
                  color: white;
                  padding: 15px;
                  text-align: center;
                ">
                  <h3 style="margin: 0; font-size: 18px; font-weight: 700;">📊 Performance</h3>
                </div>
                
                <div style="padding: 20px;">
                  <div style="display: grid; gap: 15px;">
                    
                    <div>
                      <div style="
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 5px;
                      ">
                        <span style="font-size: 14px; color: #6b7280;">Goals per Game</span>
                        <span style="font-size: 14px; font-weight: 600; color: #1e3a8a;">3.97</span>
                      </div>
                      <div style="
                        width: 100%;
                        height: 8px;
                        background: #e2e8f0;
                        border-radius: 4px;
                        overflow: hidden;
                      ">
                        <div style="
                          width: 79%;
                          height: 100%;
                          background: linear-gradient(90deg, #8b5cf6, #a78bfa);
                        "></div>
                      </div>
                    </div>

                    <div>
                      <div style="
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 5px;
                      ">
                        <span style="font-size: 14px; color: #6b7280;">Average Attendance</span>
                        <span style="font-size: 14px; font-weight: 600; color: #1e3a8a;">142</span>
                      </div>
                      <div style="
                        width: 100%;
                        height: 8px;
                        background: #e2e8f0;
                        border-radius: 4px;
                        overflow: hidden;
                      ">
                        <div style="
                          width: 71%;
                          height: 100%;
                          background: linear-gradient(90deg, #10b981, #34d399);
                        "></div>
                      </div>
                    </div>

                    <div>
                      <div style="
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 5px;
                      ">
                        <span style="font-size: 14px; color: #6b7280;">Fair Play Score</span>
                        <span style="font-size: 14px; font-weight: 600; color: #1e3a8a;">8.4/10</span>
                      </div>
                      <div style="
                        width: 100%;
                        height: 8px;
                        background: #e2e8f0;
                        border-radius: 4px;
                        overflow: hidden;
                      ">
                        <div style="
                          width: 84%;
                          height: 100%;
                          background: linear-gradient(90deg, #f59e0b, #fbbf24);
                        "></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    `;
    
    // Add event listeners
    setTimeout(() => {
      const backBtn = this.querySelector('#back-btn');
      
      // Back button functionality
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

customElements.define('stats-page', StatsPage);