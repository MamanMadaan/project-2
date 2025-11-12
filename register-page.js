export class RegisterPage extends HTMLElement {
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

        <!-- Main Registration Container -->
        <div style="
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
        ">
          
          <!-- Header Section -->
          <div style="
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 40px 40px 30px 40px;
            text-align: center;
          ">
            <h1 style="
              font-size: 32px;
              margin: 0 0 10px 0;
              font-weight: 900;
            ">Join PSL Today!</h1>
            <p style="
              font-size: 18px;
              margin: 0;
              opacity: 0.95;
            ">Register for the Premier Student Soccer League</p>
          </div>

          <!-- Form Section -->
          <div style="
            padding: 40px;
          ">
            <form id="registration-form" style="
              display: grid;
              gap: 25px;
            ">
              
              <!-- Personal Information Section -->
              <div>
                <h3 style="
                  color: #1e3a8a;
                  margin: 0 0 20px 0;
                  font-size: 20px;
                  border-bottom: 2px solid #e2e8f0;
                  padding-bottom: 10px;
                ">Personal Information</h3>
                
                <div style="
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 20px;
                  margin-bottom: 20px;
                ">
                  <div>
                    <label style="
                      display: block;
                      margin-bottom: 5px;
                      font-weight: 600;
                      color: #374151;
                    ">First Name *</label>
                    <input type="text" required style="
                      width: 100%;
                      padding: 12px 15px;
                      border: 2px solid #e2e8f0;
                      border-radius: 8px;
                      font-size: 16px;
                      transition: border-color 0.3s ease;
                      box-sizing: border-box;
                    " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'">
                  </div>
                  
                  <div>
                    <label style="
                      display: block;
                      margin-bottom: 5px;
                      font-weight: 600;
                      color: #374151;
                    ">Last Name *</label>
                    <input type="text" required style="
                      width: 100%;
                      padding: 12px 15px;
                      border: 2px solid #e2e8f0;
                      border-radius: 8px;
                      font-size: 16px;
                      transition: border-color 0.3s ease;
                      box-sizing: border-box;
                    " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'">
                  </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <label style="
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 600;
                    color: #374151;
                  ">Email Address *</label>
                  <input type="email" required style="
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.3s ease;
                    box-sizing: border-box;
                  " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'">
                </div>
                
                <div>
                  <label style="
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 600;
                    color: #374151;
                  ">Phone Number</label>
                  <input type="tel" style="
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.3s ease;
                    box-sizing: border-box;
                  " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'">
                </div>
              </div>

              <!-- Student Information Section -->
              <div>
                <h3 style="
                  color: #1e3a8a;
                  margin: 0 0 20px 0;
                  font-size: 20px;
                  border-bottom: 2px solid #e2e8f0;
                  padding-bottom: 10px;
                ">Student Information</h3>
                
                <div style="
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 20px;
                  margin-bottom: 20px;
                ">
                  <div>
                    <label style="
                      display: block;
                      margin-bottom: 5px;
                      font-weight: 600;
                      color: #374151;
                    ">Student ID *</label>
                    <input type="text" required style="
                      width: 100%;
                      padding: 12px 15px;
                      border: 2px solid #e2e8f0;
                      border-radius: 8px;
                      font-size: 16px;
                      transition: border-color 0.3s ease;
                      box-sizing: border-box;
                    " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'">
                  </div>
                  
                  <div>
                    <label style="
                      display: block;
                      margin-bottom: 5px;
                      font-weight: 600;
                      color: #374151;
                    ">Graduation Year *</label>
                    <select required style="
                      width: 100%;
                      padding: 12px 15px;
                      border: 2px solid #e2e8f0;
                      border-radius: 8px;
                      font-size: 16px;
                      transition: border-color 0.3s ease;
                      box-sizing: border-box;
                      background: white;
                    " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'">
                      <option value="">Select Year</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label style="
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 600;
                    color: #374151;
                  ">Major/Field of Study</label>
                  <input type="text" style="
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.3s ease;
                    box-sizing: border-box;
                  " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'">
                </div>
              </div>

              <!-- Soccer Experience Section -->
              <div>
                <h3 style="
                  color: #1e3a8a;
                  margin: 0 0 20px 0;
                  font-size: 20px;
                  border-bottom: 2px solid #e2e8f0;
                  padding-bottom: 10px;
                ">Soccer Experience</h3>
                
                <div style="margin-bottom: 20px;">
                  <label style="
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 600;
                    color: #374151;
                  ">Experience Level *</label>
                  <select required style="
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.3s ease;
                    box-sizing: border-box;
                    background: white;
                  " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'">
                    <option value="">Select Experience</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="competitive">Competitive/Club Level</option>
                  </select>
                </div>
                
                <div>
                  <label style="
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 600;
                    color: #374151;
                  ">Preferred Position</label>
                  <select style="
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.3s ease;
                    box-sizing: border-box;
                    background: white;
                  " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'">
                    <option value="">Select Position</option>
                    <option value="goalkeeper">Goalkeeper</option>
                    <option value="defender">Defender</option>
                    <option value="midfielder">Midfielder</option>
                    <option value="forward">Forward</option>
                    <option value="any">Any Position</option>
                  </select>
                </div>
              </div>

              <!-- Agreement Section -->
              <div style="
                padding: 20px;
                background: #f8fafc;
                border-radius: 10px;
                border-left: 4px solid #3b82f6;
              ">
                <label style="
                  display: flex;
                  align-items: flex-start;
                  gap: 10px;
                  cursor: pointer;
                ">
                  <input type="checkbox" required style="
                    margin-top: 4px;
                    width: 18px;
                    height: 18px;
                    accent-color: #3b82f6;
                  ">
                  <span style="
                    font-size: 14px;
                    line-height: 1.5;
                    color: #374151;
                  ">I agree to the PSL terms and conditions, and I understand that participation in soccer activities carries inherent risks. I confirm that all information provided is accurate. *</span>
                </label>
              </div>

              <!-- Submit Button -->
              <button type="submit" style="
                background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                color: white;
                border: none;
                padding: 16px 32px;
                border-radius: 50px;
                font-size: 18px;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 1px;
                box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
                justify-self: center;
                min-width: 200px;
              " onmouseover="
                this.style.transform='translateY(-2px)';
                this.style.boxShadow='0 6px 20px rgba(30, 58, 138, 0.4)';
              " onmouseout="
                this.style.transform='translateY(0)';
                this.style.boxShadow='0 4px 15px rgba(30, 58, 138, 0.3)';
              ">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners
    setTimeout(() => {
      const backBtn = this.querySelector('#back-btn');
      const form = this.querySelector('#registration-form');
      
      // Back button functionality
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: 'home' },
            bubbles: true 
          }));
        });
      }
      
      // Form submission
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          
          // Show success message
          this.showSuccessMessage();
        });
      }
    }, 0);
  }
  
  showSuccessMessage() {
    // Replace form with success message
    const container = this.querySelector('div[style*="min-height: 80vh"]');
    if (container) {
      container.innerHTML = `
        <div style="
          max-width: 600px;
          margin: 100px auto;
          text-align: center;
          background: white;
          padding: 60px 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        ">
          <div style="
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #10b981, #34d399);
            border-radius: 50%;
            margin: 0 auto 30px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
          ">✓</div>
          
          <h2 style="
            color: #1e3a8a;
            font-size: 32px;
            margin: 0 0 20px 0;
          ">Registration Successful!</h2>
          
          <p style="
            font-size: 18px;
            color: #6b7280;
            margin: 0 0 30px 0;
            line-height: 1.6;
          ">Thank you for joining PSL! You'll receive a confirmation email shortly with next steps and important information about the upcoming season.</p>
          
          <button onclick="
            this.dispatchEvent(new CustomEvent('navigate', { 
              detail: { page: 'home' },
              bubbles: true 
            }));
          " style="
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          " onmouseover="
            this.style.transform='translateY(-2px)';
          " onmouseout="
            this.style.transform='translateY(0)';
          ">
            Return to Home
          </button>
        </div>
      `;
    }
  }
}

customElements.define('register-page', RegisterPage);