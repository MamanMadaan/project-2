export class FooterSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer style="
        background-color: #1e3a8a;
        color: white;
        padding: 40px 20px;
        text-align: center;
        font-family: Arial, sans-serif;
        margin-top: 60px;
      "><div style="
          max-width: 1200px;
          margin: 0 auto;">
          <h3 style="
            font-size: 24px;
            margin: 0 0 20px 0;
            color: white;
          ">Follow PSL</h3>
          
          <div style="
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 20px 0;
            flex-wrap: wrap;
          ">
            <a href="https://www.instagram.com" 
               target="_blank" 
               style="
                 color: white;
                 text-decoration: none;
                 display: flex;
                 align-items: center;
                 gap: 10px;
                 padding: 15px 20px;
                 background-color: rgba(255, 255, 255, 0.1);
                 border-radius: 10px;
                 transition: background-color 0.3s ease;
               "
               onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.2)'"
               onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span style="font-size: 18px; font-weight: bold;">Instagram</span>
            </a>
            
            <a href="https://www.facebook.com" 
               target="_blank" 
               style="
                 color: white;
                 text-decoration: none;
                 display: flex;
                 align-items: center;
                 gap: 10px;
                 padding: 15px 20px;
                 background-color: rgba(255, 255, 255, 0.1);
                 border-radius: 10px;
                 transition: background-color 0.3s ease;
               "
               onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.2)'"
               onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span style="font-size: 18px; font-weight: bold;">Facebook</span>
            </a>
            
            <button id="about-btn" style="
              color: white;
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 10px;
              padding: 15px 20px;
              background-color: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
              transition: background-color 0.3s ease;
              border: none;
              cursor: pointer;
              font-size: 18px;
              font-weight: bold;
            " onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.2)'"
               onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'">
              <span>About Us</span>
            </button>
          </div>
          
          <!-- Powered By Section -->
          <div style="
            margin: 30px 0 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
          ">
            <div style="
              background: white;
              padding: 8px 15px;
              border-radius: 8px;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
            ">
              <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="20" width="80" height="60" rx="15" stroke="#000" stroke-width="3" fill="white"/>
                <rect x="25" y="35" width="15" height="20" rx="3" stroke="#000" stroke-width="2" fill="white"/>
                <rect x="45" y="35" width="15" height="20" rx="3" stroke="#000" stroke-width="2" fill="white"/>
                <rect x="20" y="55" width="60" height="8" rx="4" stroke="#000" stroke-width="2" fill="white"/>
              </svg>
              <span style="
                color: #000; 
                font-size: 11px; 
                font-weight: bold;
                text-align: left;
                line-height: 1.1;
              ">POWERED BY<br>BACK SEAT<br>BROS</span>
            </div>
          </div>
          
          <div style="
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
          ">
            <p style="
              margin: 0;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.8);
            ">
              © 2025 PennState Soccer League. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    `;
    
    // Add scroll functionality for About Us button
    setTimeout(() => {
      const aboutBtn = this.querySelector('#about-btn');
      if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
          const aboutSection = document.querySelector('about-section');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }, 0);
  }
}

customElements.define('footer-section', FooterSection);