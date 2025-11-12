export class NavigationHeader extends HTMLElement {
  constructor() {
    super();
    this.isMenuOpen = false;
  }

  connectedCallback() {
    const logoImage = this.getAttribute('logo-image') || '';
    const hasLogoImage = logoImage !== '';
    
    this.innerHTML = `
      <header style="
        background: ${hasLogoImage ? `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('${logoImage}')` : 'white'};
        background-size: cover;
        background-position: center;
        padding: 20px;
        border-bottom: 2px solid #1e3a8a;
        font-family: Arial, sans-serif;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        ">
          <!-- Left: Hamburger Menu -->
          <div style="position: relative;">
            <button id="menu-btn" style="
              background: #1e3a8a;
              color: white;
              border: none;
              padding: 12px 20px;
              border-radius: 5px;
              font-size: 18px;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 10px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            ">
              <span style="font-size: 20px;">☰</span> Menu
            </button>
            
            <div id="dropdown-menu" style="
              position: absolute;
              top: 100%;
              left: 0;
              background: white;
              border: 2px solid #1e3a8a;
              border-radius: 5px;
              min-width: 200px;
              z-index: 1000;
              display: none;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            ">
              <a href="#home" data-page="home" style="
                display: block;
                padding: 15px 20px;
                text-decoration: none;
                color: #1e3a8a;
                border-bottom: 1px solid #e2e8f0;
                transition: background-color 0.3s;
              " onmouseover="this.style.backgroundColor='#f1f5f9'" onmouseout="this.style.backgroundColor='white'">
                Home
              </a>
              <a href="#teams" data-page="teams" style="
                display: block;
                padding: 15px 20px;
                text-decoration: none;
                color: #1e3a8a;
                border-bottom: 1px solid #e2e8f0;
                transition: background-color 0.3s;
              " onmouseover="this.style.backgroundColor='#f1f5f9'" onmouseout="this.style.backgroundColor='white'">
                Teams
              </a>
              <a href="#schedule" data-page="schedule" style="
                display: block;
                padding: 15px 20px;
                text-decoration: none;
                color: #1e3a8a;
                transition: background-color 0.3s;
              " onmouseover="this.style.backgroundColor='#f1f5f9'" onmouseout="this.style.backgroundColor='white'">
                Schedule
              </a>
            </div>
          </div>
          
          <!-- Center: Logo and Title -->
          <div style="text-align: center;">
            <h1 style="
              color: #1e3a8a;
              font-size: 36px;
              margin: 0 0 10px 0;
              text-shadow: ${hasLogoImage ? '2px 2px 4px rgba(255,255,255,0.8)' : 'none'};
            ">PSL</h1>
            ${hasLogoImage ? '' : `
            <div style="
              width: 80px;
              height: 80px;
              background: #f1f5f9;
              border: 3px dashed #1e3a8a;
              margin: 0 auto 10px auto;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
            ">
              <span style="color: #1e3a8a; font-size: 12px; text-align: center;">Your Logo Here</span>
            </div>
            `}
            <p style="
              color: #374151;
              margin: 0;
              font-size: 16px;
              text-shadow: ${hasLogoImage ? '1px 1px 2px rgba(255,255,255,0.8)' : 'none'};
            ">PennState Soccer League</p>
          </div>
          
          <!-- Right: Register Button -->
          <button style="
            background: #1e3a8a;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          " onmouseover="this.style.backgroundColor='#1e40af'" onmouseout="this.style.backgroundColor='#1e3a8a'">
            Register
          </button>
        </div>
      </header>
    `;
    
    // Add event listeners after innerHTML is set
    setTimeout(() => {
      const menuBtn = this.querySelector('#menu-btn');
      const dropdown = this.querySelector('#dropdown-menu');
      const menuLinks = this.querySelectorAll('[data-page]');
      
      menuBtn.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen;
        dropdown.style.display = this.isMenuOpen ? 'block' : 'none';
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) {
          this.isMenuOpen = false;
          dropdown.style.display = 'none';
        }
      });
      
      // Handle navigation
      menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = e.target.getAttribute('data-page');
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page },
            bubbles: true 
          }));
          this.isMenuOpen = false;
          dropdown.style.display = 'none';
        });
      });
    }, 0);
  }
}

customElements.define('navigation-header', NavigationHeader);