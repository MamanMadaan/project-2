import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class NewsCard extends DDDSuper(LitElement) {
  static properties = {
    headline: { type: String },
    summary: { type: String },
    date: { type: String },
    category: { type: String },
    image: { type: String },
    author: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .news-card {
      background: var(--ddd-theme-default-white, #ffffff);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
      transition: all 0.3s ease;
      overflow: hidden;
      cursor: pointer;
    }

    .news-image {
      width: 100%;
      height: 180px;
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ddd-theme-default-white, #ffffff);
      font-size: 3rem;
      position: relative;
      overflow: hidden;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .category-badge {
      position: absolute;
      top: var(--ddd-spacing-3, 0.75rem);
      left: var(--ddd-spacing-3, 0.75rem);
      background: rgba(0, 0, 0, 0.7);
      color: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-1, 0.25rem) var(--ddd-spacing-3, 0.75rem);
      
      font-size: var(--ddd-font-size-xs, 0.75rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .news-content {
      padding: var(--ddd-spacing-6, 2rem);
    }

    .news-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--ddd-spacing-3, 0.75rem);
      font-size: var(--ddd-font-size-sm, 0.875rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
    }

    .news-date {
      font-weight: var(--ddd-font-weight-medium, 500);
    }

    .news-author {
      font-style: italic;
    }

    .news-headline {
      font-size: var(--ddd-font-size-xl, 1.25rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      color: var(--ddd-theme-default-coalyGray, #333333);
      margin: 0 0 var(--ddd-spacing-3, 0.75rem) 0;
      line-height: 1.3;
    }

    .news-summary {
      font-size: var(--ddd-font-size-base, 1rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
      line-height: 1.5;
      margin: 0 0 var(--ddd-spacing-4, 1rem) 0;
    }

    .read-more {
      display: inline-flex;
      align-items: center;
      color: var(--ddd-theme-default-skyBlue, #3b82f6);
      text-decoration: none;
      font-weight: var(--ddd-font-weight-medium, 500);
      font-size: var(--ddd-font-size-sm, 0.875rem);
      transition: all 0.3s ease;
    }

    .read-more:hover {
      color: #1e40af;
      transform: translateX(2px);
    }

    .read-more::after {
      content: '';
      margin-left: var(--ddd-spacing-2, 0.5rem);
      transition: transform 0.3s ease;
    }

    .read-more:hover::after {
      transform: translateX(2px);
    }

    @media (max-width: 600px) {
      .news-content {
        padding: var(--ddd-spacing-4, 1rem);
      }
      
      .news-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--ddd-spacing-1, 0.25rem);
      }
    }
  `;

  constructor() {
    super();
    this.headline = 'News Headline';
    this.summary = 'News summary or excerpt goes here...';
    this.date = new Date().toLocaleDateString();
    this.category = 'General';
    this.image = '';
    this.author = 'PSL Staff';
  }

  _handleClick() {
    this.dispatchEvent(new CustomEvent('news-click', {
      bubbles: true,
      composed: true,
      detail: {
        headline: this.headline,
        summary: this.summary,
        date: this.date,
        category: this.category
      }
    }));
  }

  render() {
    return html`
      <article class="news-card" @click="${this._handleClick}">
        <div class="news-image">
          ${this.image ? 
            html`<img src="${this.image}" alt="${this.headline}" />` :
            html`<div style="font-size: 2rem; font-weight: bold;">NEWS</div>`
          }
          ${this.category ? html`
            <div class="category-badge">${this.category}</div>
          ` : ''}
        </div>
        
        <div class="news-content">
          <div class="news-meta">
            <span class="news-date">${this.date}</span>
            ${this.author ? html`<span class="news-author">by ${this.author}</span>` : ''}
          </div>
          
          <h3 class="news-headline">${this.headline}</h3>
          <p class="news-summary">${this.summary}</p>
          
          <a href="#" class="read-more" @click="${(e) => e.stopPropagation()}">
            Read More
          </a>
        </div>
      </article>
    `;
  }
}

customElements.define('news-card', NewsCard);
