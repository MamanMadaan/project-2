export class FeatureCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Feature';
    const description = this.getAttribute('description') || 'Description';
    const icon = this.getAttribute('icon') || '';
    const clickable = this.getAttribute('clickable') === 'true';
    const linkPage = this.getAttribute('link-page');
    const backgroundImage = this.getAttribute('background-image') || '';
    
    const hasBackground = backgroundImage !== '';
    const cardClass = clickable ? 'feature-card feature-card--clickable' : 'feature-card feature-card--default';
    const titleClass = hasBackground ? 'feature-card__title feature-card__title--overlay' : 'feature-card__title feature-card__title--default';
    const descriptionClass = hasBackground ? 'feature-card__description feature-card__description--overlay' : 'feature-card__description feature-card__description--default';
    const ctaClass = hasBackground ? 'feature-card__cta feature-card__cta--overlay' : 'feature-card__cta feature-card__cta--default';
    
    this.innerHTML = `
      <div class="${cardClass}" style="${hasBackground ? `background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('${backgroundImage}')` : ''}">
        
        ${hasBackground ? `<div class="feature-card__overlay"></div>` : ''}
        
        <div class="feature-card__content">
          <h3 class="${titleClass}">${icon ? `${icon} ` : ''}${title}</h3>
          <p class="${descriptionClass}">${description}</p>
          ${clickable ? `<div class="${ctaClass}">Click to view →</div>` : ''}
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
