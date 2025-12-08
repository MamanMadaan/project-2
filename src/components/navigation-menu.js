import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class NavigationMenu extends DDDSuper(LitElement) {
  static properties = {
    activeItem: { type: String },
    vertical: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .nav-menu {
      background: var(--ddd-theme-default-white, #ffffff);
      
      padding: var(--ddd-spacing-4, 1rem);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: var(--ddd-spacing-2, 0.5rem);
    }

    :host([vertical]) .nav-list {
      flex-direction: column;
    }

    .nav-item {
      flex: 1;
    }

    .nav-link {
      display: block;
      padding: var(--ddd-spacing-3, 0.75rem) var(--ddd-spacing-4, 1rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
      text-decoration: none;
      
      transition: all 0.3s ease;
      font-weight: var(--ddd-font-weight-medium, 500);
      text-align: center;
      cursor: pointer;
      border: 2px solid transparent;
    }

    .nav-link:hover {
      background: var(--ddd-theme-default-slateLight, #e2e8f0);
      color: var(--ddd-theme-default-skyBlue, #3b82f6);
      transform: translateY(-1px);
    }

    .nav-link.active {
      background: var(--ddd-theme-default-skyBlue, #3b82f6);
      color: var(--ddd-theme-default-white, #ffffff);
      border-color: var(--ddd-theme-default-skyBlue, #3b82f6);
      font-weight: var(--ddd-font-weight-bold, 600);
    }

    .nav-link.active:hover {
      background: #1e40af;
      border-color: #1e40af;
      transform: translateY(-1px);
    }

    .nav-icon {
      margin-right: var(--ddd-spacing-2, 0.5rem);
      font-size: var(--ddd-font-size-sm, 0.875rem);
    }

    :host([vertical]) .nav-icon {
      margin-right: var(--ddd-spacing-2, 0.5rem);
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .nav-list {
        flex-direction: column;
      }
      
      .nav-link {
        text-align: left;
      }
    }
  `;

  constructor() {
    super();
    this.activeItem = 'home';
    this.vertical = false;
    
    this.menuItems = [
      { key: 'home', label: 'Home', icon: '' },
      { key: 'schedule', label: 'Schedule', icon: '' },
      { key: 'teams', label: 'Teams', icon: '' },
      { key: 'stats', label: 'Stats', icon: '' },
      { key: 'news', label: 'News', icon: '' }
    ];
  }

  _handleNavClick(key) {
    this.activeItem = key;
    this.dispatchEvent(new CustomEvent('nav-change', {
      bubbles: true,
      composed: true,
      detail: { activeItem: key }
    }));
  }

  render() {
    return html`
      <nav class="nav-menu">
        <ul class="nav-list">
          ${this.menuItems.map(item => html`
            <li class="nav-item">
              <a 
                href="#" 
                class="nav-link ${this.activeItem === item.key ? 'active' : ''}"
                @click="${(e) => { e.preventDefault(); this._handleNavClick(item.key); }}">
                <span class="nav-icon">${item.icon}</span>
                ${item.label}
              </a>
            </li>
          `)}
        </ul>
      </nav>
    `;
  }
}

customElements.define('navigation-menu', NavigationMenu);
