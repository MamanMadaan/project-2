export class ContactPage extends HTMLElement {
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

        <!-- Main Content Container -->
        <div style="
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        ">
          
          <!-- Left Column: Contact Information -->
          <div style="
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            overflow: hidden;
          ">
            <!-- Header -->
            <div style="
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              color: white;
              padding: 30px;
              text-align: center;
            ">
              <h1 style="
                font-size: 28px;
                margin: 0 0 10px 0;
                font-weight: 900;
              ">Contact PSL</h1>
              <p style="
                font-size: 16px;
                margin: 0;
                opacity: 0.95;
              ">Get in touch with our team</p>
            </div>

            <!-- Contact Methods -->
            <div style="padding: 30px;">
              
              <!-- Office Hours -->
              <div style="margin-bottom: 30px;">
                <h3 style="
                  color: #1e3a8a;
                  margin: 0 0 15px 0;
                  font-size: 18px;
                  display: flex;
                  align-items: center;
                  gap: 10px;
                ">
                  🕒 Office Hours
                </h3>
                <div style="
                  background: #f8fafc;
                  padding: 15px;
                  border-radius: 10px;
                  border-left: 4px solid #3b82f6;
                ">
                  <p style="margin: 0 0 8px 0; color: #374151;"><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                  <p style="margin: 0 0 8px 0; color: #374151;"><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                  <p style="margin: 0; color: #374151;"><strong>Sunday:</strong> Closed</p>
                </div>
              </div>

              <!-- Contact Methods -->
              <div style="margin-bottom: 30px;">
                <h3 style="
                  color: #1e3a8a;
                  margin: 0 0 15px 0;
                  font-size: 18px;
                  display: flex;
                  align-items: center;
                  gap: 10px;
                ">
                  📞 Contact Information
                </h3>
                
                <div style="
                  display: flex;
                  flex-direction: column;
                  gap: 15px;
                ">
                  <div style="
                    padding: 15px;
                    background: #f8fafc;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                  ">
                    <div style="
                      width: 40px;
                      height: 40px;
                      background: #3b82f6;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      color: white;
                      font-size: 18px;
                    ">📧</div>
                    <div>
                      <p style="margin: 0; font-weight: 600; color: #1e3a8a;">General Information</p>
                      <p style="margin: 0; color: #6b7280;">info@pslleague.com</p>
                    </div>
                  </div>
                  
                  <div style="
                    padding: 15px;
                    background: #f8fafc;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                  ">
                    <div style="
                      width: 40px;
                      height: 40px;
                      background: #3b82f6;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      color: white;
                      font-size: 18px;
                    ">📋</div>
                    <div>
                      <p style="margin: 0; font-weight: 600; color: #1e3a8a;">Registration Support</p>
                      <p style="margin: 0; color: #6b7280;">register@pslleague.com</p>
                    </div>
                  </div>
                  
                  <div style="
                    padding: 15px;
                    background: #f8fafc;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                  ">
                    <div style="
                      width: 40px;
                      height: 40px;
                      background: #3b82f6;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      color: white;
                      font-size: 18px;
                    ">📞</div>
                    <div>
                      <p style="margin: 0; font-weight: 600; color: #1e3a8a;">Phone Support</p>
                      <p style="margin: 0; color: #6b7280;">(814) 555-PSL1 (7751)</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div>
                <h3 style="
                  color: #1e3a8a;
                  margin: 0 0 15px 0;
                  font-size: 18px;
                  display: flex;
                  align-items: center;
                  gap: 10px;
                ">
                  📍 Location
                </h3>
                <div style="
                  background: #f8fafc;
                  padding: 15px;
                  border-radius: 10px;
                  border-left: 4px solid #3b82f6;
                ">
                  <p style="margin: 0; color: #374151;">Penn State University</p>
                  <p style="margin: 0; color: #374151;">Intramural Building, Room 150</p>
                  <p style="margin: 0; color: #374151;">University Park, PA 16802</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Contact Form & FAQ -->
          <div>
            <!-- Contact Form -->
            <div style="
              background: white;
              border-radius: 20px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
              overflow: hidden;
              margin-bottom: 30px;
            ">
              <!-- Form Header -->
              <div style="
                background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                color: white;
                padding: 25px;
                text-align: center;
              ">
                <h2 style="
                  font-size: 24px;
                  margin: 0;
                  font-weight: 700;
                ">Send Us a Message</h2>
              </div>

              <!-- Form Content -->
              <div style="padding: 30px;">
                <form id="contact-form" style="display: grid; gap: 20px;">
                  
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
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
                  
                  <div>
                    <label style="
                      display: block;
                      margin-bottom: 5px;
                      font-weight: 600;
                      color: #374151;
                    ">Email *</label>
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
                    ">Subject *</label>
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
                      <option value="">Select a subject</option>
                      <option value="registration">Registration Question</option>
                      <option value="schedule">Schedule Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="general">General Question</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label style="
                      display: block;
                      margin-bottom: 5px;
                      font-weight: 600;
                      color: #374151;
                    ">Message *</label>
                    <textarea required rows="5" style="
                      width: 100%;
                      padding: 12px 15px;
                      border: 2px solid #e2e8f0;
                      border-radius: 8px;
                      font-size: 16px;
                      transition: border-color 0.3s ease;
                      box-sizing: border-box;
                      resize: vertical;
                      font-family: Arial, sans-serif;
                    " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'"></textarea>
                  </div>
                  
                  <button type="submit" style="
                    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
                    justify-self: start;
                  " onmouseover="
                    this.style.transform='translateY(-2px)';
                    this.style.boxShadow='0 6px 20px rgba(30, 58, 138, 0.4)';
                  " onmouseout="
                    this.style.transform='translateY(0)';
                    this.style.boxShadow='0 4px 15px rgba(30, 58, 138, 0.3)';
                  ">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <!-- FAQ Section -->
            <div style="
              background: white;
              border-radius: 20px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
              overflow: hidden;
            ">
              <!-- FAQ Header -->
              <div style="
                background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                color: white;
                padding: 25px;
                text-align: center;
              ">
                <h2 style="
                  font-size: 24px;
                  margin: 0;
                  font-weight: 700;
                ">Frequently Asked Questions</h2>
              </div>

              <!-- FAQ Content -->
              <div style="padding: 30px;">
                <div id="faq-container" style="display: grid; gap: 15px;">
                  
                  <div class="faq-item" style="
                    border: 2px solid #e2e8f0;
                    border-radius: 10px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                  ">
                    <button class="faq-question" style="
                      width: 100%;
                      background: #f8fafc;
                      border: none;
                      padding: 15px 20px;
                      text-align: left;
                      font-weight: 600;
                      color: #1e3a8a;
                      cursor: pointer;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      font-size: 16px;
                    ">
                      How do I register for PSL?
                      <span class="faq-toggle" style="font-size: 20px;">+</span>
                    </button>
                    <div class="faq-answer" style="
                      display: none;
                      padding: 20px;
                      background: white;
                      color: #374151;
                      line-height: 1.6;
                    ">
                      Click the "Register" button in the navigation or hero section, fill out the registration form with your student information, and submit. You'll receive a confirmation email with further instructions.
                    </div>
                  </div>

                  <div class="faq-item" style="
                    border: 2px solid #e2e8f0;
                    border-radius: 10px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                  ">
                    <button class="faq-question" style="
                      width: 100%;
                      background: #f8fafc;
                      border: none;
                      padding: 15px 20px;
                      text-align: left;
                      font-weight: 600;
                      color: #1e3a8a;
                      cursor: pointer;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      font-size: 16px;
                    ">
                      What skill level is required?
                      <span class="faq-toggle" style="font-size: 20px;">+</span>
                    </button>
                    <div class="faq-answer" style="
                      display: none;
                      padding: 20px;
                      background: white;
                      color: #374151;
                      line-height: 1.6;
                    ">
                      PSL welcomes all skill levels! We have divisions for beginners, intermediate, and advanced players. Teams are balanced to ensure competitive and fun matches for everyone.
                    </div>
                  </div>

                  <div class="faq-item" style="
                    border: 2px solid #e2e8f0;
                    border-radius: 10px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                  ">
                    <button class="faq-question" style="
                      width: 100%;
                      background: #f8fafc;
                      border: none;
                      padding: 15px 20px;
                      text-align: left;
                      font-weight: 600;
                      color: #1e3a8a;
                      cursor: pointer;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      font-size: 16px;
                    ">
                      When does the season start?
                      <span class="faq-toggle" style="font-size: 20px;">+</span>
                    </button>
                    <div class="faq-answer" style="
                      display: none;
                      padding: 20px;
                      background: white;
                      color: #374151;
                      line-height: 1.6;
                    ">
                      The spring season starts January 15th, 2025. Registration typically opens 3 weeks before the season starts. Check our schedule page for the most current dates.
                    </div>
                  </div>

                  <div class="faq-item" style="
                    border: 2px solid #e2e8f0;
                    border-radius: 10px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                  ">
                    <button class="faq-question" style="
                      width: 100%;
                      background: #f8fafc;
                      border: none;
                      padding: 15px 20px;
                      text-align: left;
                      font-weight: 600;
                      color: #1e3a8a;
                      cursor: pointer;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      font-size: 16px;
                    ">
                      Is there a registration fee?
                      <span class="faq-toggle" style="font-size: 20px;">+</span>
                    </button>
                    <div class="faq-answer" style="
                      display: none;
                      padding: 20px;
                      background: white;
                      color: #374151;
                      line-height: 1.6;
                    ">
                      Yes, there is a $45 registration fee per season that covers field maintenance, referees, and equipment. Financial assistance is available for students who qualify.
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
      const form = this.querySelector('#contact-form');
      const faqQuestions = this.querySelectorAll('.faq-question');
      
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
          this.showSuccessMessage();
        });
      }
      
      // FAQ toggle functionality
      faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
          const answer = question.nextElementSibling;
          const toggle = question.querySelector('.faq-toggle');
          
          if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            toggle.textContent = '−';
            question.parentElement.style.borderColor = '#3b82f6';
          } else {
            answer.style.display = 'none';
            toggle.textContent = '+';
            question.parentElement.style.borderColor = '#e2e8f0';
          }
        });
      });
    }, 0);
  }
  
  showSuccessMessage() {
    // Show success overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;
    
    overlay.innerHTML = `
      <div style="
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 400px;
        margin: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #10b981, #34d399);
          border-radius: 50%;
          margin: 0 auto 20px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
        ">✓</div>
        
        <h3 style="
          color: #1e3a8a;
          font-size: 24px;
          margin: 0 0 15px 0;
        ">Message Sent!</h3>
        
        <p style="
          color: #6b7280;
          margin: 0 0 25px 0;
          line-height: 1.6;
        ">Thank you for contacting PSL! We'll get back to you within 24 hours.</p>
        
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
        ">Close</button>
      </div>
    `;
    
    document.body.appendChild(overlay);
  }
}

customElements.define('contact-page', ContactPage);