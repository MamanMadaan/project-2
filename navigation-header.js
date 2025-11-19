export class NavigationHeader extends HTMLElement {
  constructor() {
    super();
    this.isMenuOpen = false;
  }

  connectedCallback() {
    const logoImage = this.getAttribute('logo-image') || '';
    const hasLogoImage = logoImage !== '';
    
    this.innerHTML = `
      <header class="navigation-header" style="${hasLogoImage ? `background-image: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('${logoImage}')` : ''}">
        <div class="navigation-header__container">
          <!-- Left: Hamburger Menu -->
          <div class="navigation-header__menu-wrapper">
            <button id="menu-btn" class="navigation-header__menu-button">
              <span class="navigation-header__menu-icon">☰</span> Menu
            </button>
            
            <div id="dropdown-menu" class="navigation-header__dropdown">
              <a href="#home" data-page="home" class="navigation-header__dropdown-link">
                Home
              </a>
              <a href="#teams" data-page="teams" class="navigation-header__dropdown-link">
                Teams
              </a>
              <a href="#schedule" data-page="schedule" class="navigation-header__dropdown-link">
                Schedule
              </a>
              <a href="#stats" data-page="stats" class="navigation-header__dropdown-link">
                Statistics
              </a>
              <a href="#contact" data-page="contact" class="navigation-header__dropdown-link navigation-header__dropdown-link--last">
                Contact
              </a>
            </div>
          </div>
          
          <!-- Center: Logo and Title -->
          <div class="navigation-header__brand">
            <h1 class="navigation-header__title ${hasLogoImage ? 'navigation-header__title--with-bg' : ''}">PSL</h1>
            ${hasLogoImage ? '' : `
            <div class="navigation-header__placeholder-logo">
              <span class="navigation-header__placeholder-text">Your Logo Here</span>
            </div>
            `}
            <p class="navigation-header__subtitle ${hasLogoImage ? 'navigation-header__subtitle--with-bg' : ''}">PennState Soccer League</p>
          </div>
          
          <!-- Right: Register Button -->
          <button class="navigation-header__register-button"
          onclick="
            this.dispatchEvent(new CustomEvent('navigate', { 
              detail: { page: 'register' },
              bubbles: true 
            }));
          ">
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