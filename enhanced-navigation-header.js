// Enhanced navigation that can use JSON Outline data
import { OutlineDataService } from './outline-data-service.js';

export class EnhancedNavigationHeader extends HTMLElement {
  constructor() {
    super();
    this.isMenuOpen = false;
    this.navigationData = null;
    this.useOutlineData = this.getAttribute('use-outline') === 'true';
  }

  async connectedCallback() {
    if (this.useOutlineData) {
      await this.loadNavigationData();
    }
    this.render();
  }
  
  async loadNavigationData() {
    try {
      const outline = await OutlineDataService.loadNavigationOutline();
      this.navigationData = OutlineDataService.buildMenuTree(outline);
    } catch (error) {
      console.error('Failed to load navigation data:', error);
      this.navigationData = null;
    }
  }
  
  getMenuItems() {
    if (this.navigationData && this.useOutlineData) {
      // Use JSON Outline data
      return this.navigationData.map(item => ({
        slug: item.slug,
        title: item.title,
        icon: item.icon
      }));
    } else {
      // Fallback to hardcoded menu (your current approach)
      return [
        { slug: 'home', title: 'Home', icon: '' },
        { slug: 'teams', title: 'Teams', icon: '' },
        { slug: 'schedule', title: 'Schedule', icon: '' }
      ];
    }
  }

  render() {
    const logoImage = this.getAttribute('logo-image') || '';
    const hasLogoImage = logoImage !== '';
    const menuItems = this.getMenuItems();
    
    const menuHtml = menuItems.map(item => `
      <a href="#${item.slug}" data-page="${item.slug}" style="
        display: block;
        padding: 15px 20px;
        text-decoration: none;
        color: #1e3a8a;
        border-bottom: 1px solid #e2e8f0;
        transition: background-color 0.3s;
      " onmouseover="this.style.backgroundColor='#f1f5f9'" onmouseout="this.style.backgroundColor='white'">
        ${item.icon} ${item.title}
      </a>
    `).join('');
    
    this.innerHTML = `
      <header style="
        background: ${hasLogoImage ? `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('${logoImage}')` : 'white'};
        background-size: cover;
        background-position: center;
        padding: 20px;
        border-bottom: 2px solid #1e3a8a;
        font-family: Arial, sans-serif;
        position: relative;
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
          <div style="position: relative;">
            <button id="menu-btn" style="
              background: #1e3a8a;
              color: white;
              border: none;
              padding: 12px 20px;
              
              font-size: 18px;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 10px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            ">
              <span style="font-size: 20px;">☰</span> Menu
              ${this.useOutlineData ? '<span style="font-size: 12px; opacity: 0.8;">(JSON)</span>' : ''}
            </button>
            
            <div id="dropdown-menu" style="
              position: absolute;
              top: 100%;
              left: 0;
              background: white;
              border: 2px solid #1e3a8a;
              
              min-width: 200px;
              z-index: 1000;
              display: none;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            ">
              ${menuHtml}
            </div>
          </div>
          
          <div style="text-align: center;">
            <h1 style="
              color: #1e3a8a;
              font-size: 36px;
              margin: 0 0 10px 0;
              text-shadow: ${hasLogoImage ? '2px 2px 4px rgba(255,255,255,0.8)' : 'none'};
            ">PSL</h1>
            <p style="
              color: #374151;
              margin: 0;
              font-size: 16px;
            ">PennState Soccer League</p>
          </div>
          
          <button style="
            background: #1e3a8a;
            color: white;
            border: none;
            padding: 12px 24px;
            
            font-size: 16px;
            cursor: pointer;
          ">Register</button>
        </div>
      </header>
    `;
    
    this.attachEventListeners();
  }
  
  attachEventListeners() {
    setTimeout(() => {
      const menuBtn = this.querySelector('#menu-btn');
      const dropdown = this.querySelector('#dropdown-menu');
      const menuLinks = this.querySelectorAll('[data-page]');
      
      menuBtn?.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen;
        dropdown.style.display = this.isMenuOpen ? 'block' : 'none';
      });
      
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) {
          this.isMenuOpen = false;
          if (dropdown) dropdown.style.display = 'none';
        }
      });
      
      menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = e.target.getAttribute('data-page');
          this.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
          this.isMenuOpen = false;
          if (dropdown) dropdown.style.display = 'none';
        });
      });
    }, 0);
  }
}

customElements.define('enhanced-navigation-header', EnhancedNavigationHeader);
