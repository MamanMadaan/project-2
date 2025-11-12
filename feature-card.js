export class FeatureCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Feature';
    const description = this.getAttribute('description') || 'Description';
    const icon = this.getAttribute('icon') || '📄';
    const clickable = this.getAttribute('clickable') === 'true';
    const linkPage = this.getAttribute('link-page');
    const backgroundImage = this.getAttribute('background-image') || '';
    
    const hasBackground = backgroundImage !== '';
    
    this.innerHTML = `
      <div style="
        background: ${hasBackground ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('${backgroundImage}')` : '#f8fafc'};
        background-size: cover;
        background-position: center;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        border: 2px solid ${hasBackground ? 'rgba(255,255,255,0.3)' : '#e2e8f0'};
        font-family: Arial, sans-serif;
        margin: 15px;
        cursor: ${clickable ? 'pointer' : 'default'};
        transition: all 0.3s ease;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        overflow: hidden;
      " ${clickable ? 'onmouseover="this.style.transform=\'scale(1.05)\'; this.style.boxShadow=\'0 8px 25px rgba(0,0,0,0.3)\'" onmouseout="this.style.transform=\'scale(1)\'; this.style.boxShadow=\'0 4px 15px rgba(0,0,0,0.1)\'"' : ''}>
        
        ${hasBackground ? `
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(30,58,138,0.4), rgba(59,130,246,0.3));
            border-radius: 13px;
          "></div>
        ` : ''}
        
        <div style="position: relative; z-index: 2;">
          <h3 style="
            color: ${hasBackground ? 'white' : '#1e3a8a'};
            font-size: 24px;
            margin: 0 0 15px 0;
            text-shadow: ${hasBackground ? '2px 2px 4px rgba(0,0,0,0.7)' : 'none'};
          ">${icon} ${title}</h3>
          <p style="
            font-size: 16px;
            line-height: 1.5;
            margin: 0;
            color: ${hasBackground ? 'rgba(255,255,255,0.95)' : '#374151'};
            text-shadow: ${hasBackground ? '1px 1px 2px rgba(0,0,0,0.7)' : 'none'};
          ">${description}</p>
          ${clickable ? `<div style="margin-top: 15px; color: ${hasBackground ? 'white' : '#1e3a8a'}; font-weight: bold; text-shadow: ${hasBackground ? '1px 1px 2px rgba(0,0,0,0.7)' : 'none'};">Click to view →</div>` : ''}
        </div>
      </div>
    `;
    
    if (clickable && linkPage) {
      setTimeout(() => {
        this.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { page: linkPage },
            bubbles: true 
          }));
        });
      }, 0);
    }
  }
}

customElements.define('feature-card', FeatureCard);