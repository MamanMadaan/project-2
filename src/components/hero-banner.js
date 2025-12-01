import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class HeroBanner extends DDDSuper(LitElement) {
  static properties = {
    title: { type: String },
    subtitle: { type: String },
    backgroundImage: { type: String },
    ctaText: { type: String },
    ctaLink: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .hero-banner {
      position: relative;
      height: 500px;
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
      border-radius: var(--ddd-radius-lg, 12px);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: var(--ddd-theme-default-white, #ffffff);
      box-shadow: 0 8px 32px rgba(30, 64, 175, 0.3);
      width: 100%;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
      opacity: 0.3;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(59, 130, 246, 0.6) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 700px;
      padding: var(--ddd-spacing-6, 2rem);
      text-align: center;
      width: 100%;
    }

    .hero-title {
      font-size: var(--ddd-font-size-4xl, 3rem);
      font-weight: var(--ddd-font-weight-black, 900);
      margin: 0 0 var(--ddd-spacing-6, 2rem) 0;
      text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      line-height: 1.1;
      letter-spacing: -0.5px;
    }

    .hero-subtitle {
      font-size: var(--ddd-font-size-xl, 1.25rem);
      margin: 0 0 var(--ddd-spacing-8, 3rem) 0;
      opacity: 0.95;
      font-weight: var(--ddd-font-weight-medium, 500);
      line-height: 1.5;
      max-width: 100%;
    }

    .hero-cta {
      background: var(--ddd-theme-default-white, #ffffff);
      color: var(--ddd-theme-default-skyBlue, #3b82f6);
      padding: var(--ddd-spacing-4, 1rem) var(--ddd-spacing-8, 3rem);
      border-radius: var(--ddd-radius-md, 8px);
      border: none;
      font-size: var(--ddd-font-size-lg, 1.125rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .hero-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      background: var(--ddd-theme-default-slateLight, #e2e8f0);
    }

    @media (max-width: 768px) {
      .hero-banner {
        height: 400px;
      }
      
      .hero-title {
        font-size: var(--ddd-font-size-3xl, 2.25rem);
      }
      
      .hero-subtitle {
        font-size: var(--ddd-font-size-lg, 1.125rem);
      }
      
      .hero-content {
        padding: var(--ddd-spacing-6, 2rem);
      }
    }

    @media (max-width: 480px) {
      .hero-banner {
        height: 350px;
      }
      
      .hero-title {
        font-size: var(--ddd-font-size-2xl, 1.875rem);
      }
      
      .hero-cta {
        padding: var(--ddd-spacing-3, 0.75rem) var(--ddd-spacing-6, 2rem);
        font-size: var(--ddd-font-size-base, 1rem);
      }
    }
  `;

  constructor() {
    super();
    this.title = 'Welcome to PSL';
    this.subtitle = 'Experience competitive soccer excellence';
    this.backgroundImage = '';
    this.ctaText = 'Get Started';
    this.ctaLink = '#';
  }

  _handleCtaClick() {
    this.dispatchEvent(new CustomEvent('cta-click', {
      bubbles: true,
      composed: true,
      detail: { link: this.ctaLink }
    }));
  }

  render() {
    return html`
      <div class="hero-banner">
        ${this.backgroundImage ? html`
          <div class="hero-background" style="background-image: ${this.backgroundImage}"></div>
        ` : ''}
        <div class="hero-overlay"></div>
        
        <div class="hero-content">
          <h1 class="hero-title">${this.title}</h1>
          <p class="hero-subtitle">${this.subtitle}</p>
          ${this.ctaText ? html`
            <button class="hero-cta" @click="${this._handleCtaClick}">
              ${this.ctaText}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('hero-banner', HeroBanner);