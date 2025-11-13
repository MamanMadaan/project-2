// Import all component files
import './contact-bar.js';
import './navigation-header.js';
import './hero-section.js';
import './feature-card.js';
import './about-section.js';
import './footer-section.js';
import './teams-page.js';
import './schedule-page.js';
import './register-page.js';
import './contact-page.js';
import './stats-page.js';

export class Project2 extends HTMLElement {
  constructor() {
    super();
    this.currentPage = 'home';
  }

  connectedCallback() {
    this.render();
    
    // Listen for navigation events
    this.addEventListener('navigate', (e) => {
      this.currentPage = e.detail.page;
      this.render();
    });
  }
  
  render() {
    if (this.currentPage === 'teams') {
      this.innerHTML = `
        <contact-bar></contact-bar>
        <navigation-header logo-image="https://bloximages.newyork1.vip.townnews.com/psucollegian.com/content/tncms/assets/v3/editorial/4/ac/4acbad8e-60f2-11ef-ad11-3fbf52503df0/66c7eb427b52f.image.jpg?resize=750%2C500"></navigation-header>
        <teams-page></teams-page>
        <footer-section></footer-section>
      `;
    } else if (this.currentPage === 'schedule') {
      this.innerHTML = `
        <contact-bar></contact-bar>
        <navigation-header logo-image="https://bloximages.newyork1.vip.townnews.com/psucollegian.com/content/tncms/assets/v3/editorial/4/ac/4acbad8e-60f2-11ef-ad11-3fbf52503df0/66c7eb427b52f.image.jpg?resize=750%2C500"></navigation-header>
        <schedule-page></schedule-page>
        <footer-section></footer-section>
      `;
    } else if (this.currentPage === 'register') {
      this.innerHTML = `
        <contact-bar></contact-bar>
        <navigation-header logo-image="https://bloximages.newyork1.vip.townnews.com/psucollegian.com/content/tncms/assets/v3/editorial/4/ac/4acbad8e-60f2-11ef-ad11-3fbf52503df0/66c7eb427b52f.image.jpg?resize=750%2C500"></navigation-header>
        <register-page></register-page>
        <footer-section></footer-section>
      `;
    } else if (this.currentPage === 'contact') {
      this.innerHTML = `
        <contact-bar></contact-bar>
        <navigation-header logo-image="https://bloximages.newyork1.vip.townnews.com/psucollegian.com/content/tncms/assets/v3/editorial/4/ac/4acbad8e-60f2-11ef-ad11-3fbf52503df0/66c7eb427b52f.image.jpg?resize=750%2C500"></navigation-header>
        <contact-page></contact-page>
        <footer-section></footer-section>
      `;
    } else if (this.currentPage === 'stats') {
      this.innerHTML = `
        <contact-bar></contact-bar>
        <navigation-header logo-image="https://bloximages.newyork1.vip.townnews.com/psucollegian.com/content/tncms/assets/v3/editorial/4/ac/4acbad8e-60f2-11ef-ad11-3fbf52503df0/66c7eb427b52f.image.jpg?resize=750%2C500"></navigation-header>
        <stats-page></stats-page>
        <footer-section></footer-section>
      `;
    } else {
      // Home page
      this.innerHTML = `
        <contact-bar></contact-bar>
        <navigation-header logo-image="https://bloximages.newyork1.vip.townnews.com/psucollegian.com/content/tncms/assets/v3/editorial/4/ac/4acbad8e-60f2-11ef-ad11-3fbf52503df0/66c7eb427b52f.image.jpg?resize=750%2C500"></navigation-header>
        <hero-section></hero-section>
        
        <!-- Features Grid -->
        <div style="
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
        ">
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 40px 0;
          ">
            <feature-card 
              icon="" 
              title="Schedule" 
              description="View upcoming games and tournaments. Stay up to date with all PSL matches and events throughout the season."
              clickable="true"
              link-page="schedule"
              background-image="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            </feature-card>
            
            <feature-card 
              icon="" 
              title="Tournaments" 
              description="Compete in exciting tournaments. Join competitive events and showcase your skills against other teams."
              background-image="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            </feature-card>
            
            <feature-card 
              icon="" 
              title="Support" 
              description="Support our league and players. Help us continue providing excellent soccer opportunities for students."
              background-image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            </feature-card>
          </div>
        </div>
        
        <about-section></about-section>
        
        <!-- News Section -->
        <div style="
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
        ">
          <h2 style="
            text-align: center;
            color: #1e3a8a;
            font-size: 32px;
            margin-bottom: 30px;
          ">League News</h2>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          ">
                        <feature-card 
              icon="" 
              title="Season Kickoff" 
              description="New season starts January 15th! Registration is now open for all students."
              background-image="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            </feature-card>
            
            <feature-card 
              icon="" 
              title="Championship" 
              description="Congratulations to our championship team! See highlights from this season finals."
              background-image="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            </feature-card>
            
            <feature-card 
              icon="" 
              title="New Coach" 
              description="Welcome Coach Martinez! Our new head coach brings years of experience to PSL."
              background-image="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            </feature-card>
          </div>
        </div>
        
        <footer-section></footer-section>
      `;
    }
  }
}

customElements.define('project-2', Project2);