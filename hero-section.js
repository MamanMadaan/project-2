export class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="hero-section">
        <!-- Animated Background Elements -->
        <div class="hero-section__floating-bg"></div>
        
        <!-- Main Content Container -->
        <div class="hero-section__content">
          
          <!-- Left Column - Text Content -->
          <div class="hero-section__text">
            <!-- Main Title with Enhanced Typography -->
            <h1 class="hero-section__title">PSL Dashboard</h1>
            
            <!-- Subtitle with Better Spacing -->
            <div class="hero-section__badge">
              <p class="hero-section__badge-text">PennState Soccer League</p>
            </div>
            
            <!-- Description with Better Typography -->
            <p class="hero-section__description">Experience competitive soccer excellence at Penn State University.</p>
          </div>

          <!-- Center Column - Stats -->
          <div class="hero-section__stats">
            <div class="hero-section__stat">
              <div class="hero-section__stat-number">4</div>
              <div class="hero-section__stat-label">Teams</div>
            </div>
            
            <div class="hero-section__stat">
              <div class="hero-section__stat-number">50+</div>
              <div class="hero-section__stat-label">Players</div>
            </div>
            
            <div class="hero-section__stat">
              <div class="hero-section__stat-number">25+</div>
              <div class="hero-section__stat-label">Games</div>
            </div>
          </div>

          <!-- Right Column - Action Buttons -->
          <div class="hero-section__actions">
            <button class="hero-section__button hero-section__button--primary"
            onclick="
              this.dispatchEvent(new CustomEvent('navigate', { 
                detail: { page: 'register' },
                bubbles: true 
              }));
            ">
              Register Now
            </button>
            
            <button class="hero-section__button hero-section__button--secondary"
            onclick="
              this.dispatchEvent(new CustomEvent('navigate', { 
                detail: { page: 'teams' },
                bubbles: true 
              }));
            ">
              Learn More
            </button>
          </div>
        </div>
        
        <!-- Decorative Elements -->
        <div class="hero-section__decoration hero-section__decoration--left"></div>
        <div class="hero-section__decoration hero-section__decoration--right"></div>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
