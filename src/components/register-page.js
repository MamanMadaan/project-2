import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class RegisterPage extends DDDSuper(LitElement) {
  static properties = {
    active: { type: Boolean, reflect: true }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--ddd-font-primary);
    }

    .register-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: var(--ddd-spacing-8, 2rem);
      color: var(--ddd-theme-default-coalyGray, #333333);
    }

    .header {
      text-align: center;
      margin-bottom: var(--ddd-spacing-8, 2rem);
    }

    h1 {
      font-size: var(--ddd-font-size-3xl, 2.5rem);
      color: #1e40af;
      margin-bottom: var(--ddd-spacing-2, 0.5rem);
      font-weight: var(--ddd-font-weight-black, 900);
    }

    .subtitle {
      color: #64748b;
      font-size: var(--ddd-font-size-lg, 1.125rem);
    }

    .form-container {
      max-width: 600px;
      margin: 0 auto;
      background: var(--ddd-theme-default-white, #ffffff);
      
      padding: var(--ddd-spacing-8, 2rem);
      box-shadow: var(--ddd-boxShadow-md, 0 4px 8px rgba(0,0,0,0.1));
      border: 1px solid #e2e8f0;
    }

    .form-group {
      margin-bottom: var(--ddd-spacing-6, 1.5rem);
    }

    .form-label {
      display: block;
      margin-bottom: var(--ddd-spacing-2, 0.5rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      color: #374151;
      font-size: var(--ddd-font-size-sm, 0.875rem);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .form-input {
      width: 100%;
      padding: var(--ddd-spacing-3, 0.75rem);
      border: 2px solid #e2e8f0;
      
      font-size: var(--ddd-font-size-base, 16px);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .form-input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .form-select {
      width: 100%;
      padding: var(--ddd-spacing-3, 0.75rem);
      border: 2px solid #e2e8f0;
      font-size: var(--ddd-font-size-base, 16px);
      background-color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .form-select:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .color-preview {
      width: 40px;
      height: 40px;
      border: 2px solid #e2e8f0;
      margin-top: var(--ddd-spacing-2, 0.5rem);
      transition: all 0.3s ease;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--ddd-spacing-4, 1rem);
    }

    .submit-button {
      width: 100%;
      padding: var(--ddd-spacing-4, 1rem) var(--ddd-spacing-6, 1.5rem);
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: var(--ddd-theme-default-white, #ffffff);
      border: none;
      
      font-size: var(--ddd-font-size-lg, 1.125rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: var(--ddd-spacing-4, 1rem);
    }

    .submit-button:hover {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
    }
  `;

  _navigate(page) {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page },
      bubbles: true,
      composed: true
    }));
  }

  _handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const newTeam = {
      id: Date.now(), // Simple ID generation
      name: formData.get('teamName'),
      color: formData.get('teamColor'),
      record: '0-0-0', // New team starts with no games
      wins: 0,
      losses: 0,
      goals: 0
    };

    // Dispatch custom event with new team data
    this.dispatchEvent(new CustomEvent('team-registered', {
      detail: { team: newTeam },
      bubbles: true,
      composed: true
    }));

    // Navigate to teams page
    this._navigate('teams');
  }

  _updateColorPreview(event) {
    const colorPreview = this.shadowRoot.querySelector('.color-preview');
    colorPreview.style.backgroundColor = event.target.value;
  }

  render() {
    return html`
      <div class="register-container">
        <div class="header">
          <h1>Register Your Team</h1>
          <p class="subtitle">Join the Penn State Soccer League</p>
        </div>

        <div class="form-container">
          <form @submit="${this._handleSubmit}">
            <div class="form-group">
              <label class="form-label" for="teamName">Team Name *</label>
              <input 
                type="text" 
                id="teamName" 
                name="teamName" 
                class="form-input" 
                placeholder="Enter your team name"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="teamColor">Team Color *</label>
              <input 
                type="color" 
                id="teamColor" 
                name="teamColor" 
                class="form-select" 
                value="#3b82f6"
                @input="${this._updateColorPreview}"
                required
              />
              <div class="color-preview" style="background-color: #3b82f6;"></div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="captainName">Captain Name *</label>
                <input 
                  type="text" 
                  id="captainName" 
                  name="captainName" 
                  class="form-input" 
                  placeholder="Team captain"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="captainEmail">Captain Email *</label>
                <input 
                  type="email" 
                  id="captainEmail" 
                  name="captainEmail" 
                  class="form-input" 
                  placeholder="captain@email.com"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="playerCount">Number of Players</label>
              <select 
                id="playerCount" 
                name="playerCount" 
                class="form-select"
              >
                <option value="8">8 Players</option>
                <option value="9">9 Players</option>
                <option value="10">10 Players</option>
                <option value="11" selected>11 Players</option>
                <option value="12">12 Players</option>
                <option value="13">13 Players</option>
                <option value="14">14 Players</option>
                <option value="15">15 Players</option>
              </select>
            </div>

            <button type="submit" class="submit-button">
              Register Team
            </button>
          </form>
        </div>
      </div>
    `;
  }
}

customElements.define('register-page', RegisterPage);
