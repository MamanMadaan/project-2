import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class PslButton extends DDDSuper(LitElement) {
  static properties = {
    text: { type: String },
    type: { type: String },
    disabled: { type: Boolean }
  };

  static styles = css`
    :host {
      display: inline-block;
      margin: var(--ddd-spacing-2, 0.5rem);
    }

    .btn {
      padding: var(--ddd-spacing-3, 0.75rem) var(--ddd-spacing-6, 2rem);
      font-family: var(--ddd-font-primary);
      font-size: var(--ddd-font-size-base, 1rem);
      font-weight: var(--ddd-font-weight-medium, 500);
      
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    .btn:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
    }

    .btn-primary {
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
      color: var(--ddd-theme-default-white, #ffffff);
    }

    .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    }

    .btn-success {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: var(--ddd-theme-default-white, #ffffff);
    }

    .btn-success:hover:not(:disabled) {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
    }

    .btn-secondary {
      background: var(--ddd-theme-default-slateLight, #e2e8f0);
      color: var(--ddd-theme-default-coalyGray, #333333);
      border: 2px solid var(--ddd-theme-default-slateGray, #64748b);
    }

    .btn-secondary:hover:not(:disabled) {
      background: var(--ddd-theme-default-slateGray, #64748b);
      color: var(--ddd-theme-default-white, #ffffff);
    }

    .btn-warning {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: var(--ddd-theme-default-white, #ffffff);
    }

    .btn-warning:hover:not(:disabled) {
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
    }

    .btn-danger {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
      color: var(--ddd-theme-default-white, #ffffff);
    }

    .btn-danger:hover:not(:disabled) {
      background: linear-gradient(135deg, #b91c1c 0%, #991b1b 100%);
    }
  `;

  constructor() {
    super();
    this.text = 'Button';
    this.type = 'primary';
    this.disabled = false;
  }

  _handleClick() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('click', {
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html`
      <button 
        class="btn btn-${this.type}" 
        ?disabled="${this.disabled}"
        @click="${this._handleClick}">
        ${this.text}
      </button>
    `;
  }
}

customElements.define('psl-button', PslButton);
