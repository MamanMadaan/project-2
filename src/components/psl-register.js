import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./psl-button.js";

/**
 * `psl-register`
 * Team registration page for Penn State Soccer League
 * 
 * @element psl-register
 */
export class PslRegister extends DDDSuper(LitElement) {

  static get tag() {
    return "psl-register";
  }

  static get properties() {
    return {
      ...super.properties,
      formData: { type: Object }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .register-container {
        max-width: var(--ddd-breakpoint-md, 800px);
        margin: 0 auto;
        padding: var(--ddd-spacing-6, 2rem);
      }

      .register-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8, 3rem);
      }

      .register-title {
        font-size: var(--ddd-font-size-3xl, 2.25rem);
        font-weight: var(--ddd-font-weight-bold, 700);
        color: var(--ddd-theme-default-coalyGray, #333);
        margin: 0 0 var(--ddd-spacing-2, 0.5rem) 0;
      }

      .register-subtitle {
        font-size: var(--ddd-font-size-lg, 1.125rem);
        color: var(--ddd-theme-default-slateMaxLight, #666);
        margin: 0;
      }

      .form-container {
        background: var(--ddd-theme-default-white, #fff);
        border-radius: var(--ddd-radius-lg, 12px);
        padding: var(--ddd-spacing-8, 3rem);
        box-shadow: var(--ddd-boxShadow-1, 0 2px 4px rgba(0,0,0,0.1));
        border: 1px solid var(--ddd-theme-default-slateLight, #e2e8f0);
      }

      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--ddd-spacing-6, 2rem);
        margin-bottom: var(--ddd-spacing-6, 2rem);
      }

      .form-group {
        display: flex;
        flex-direction: column;
      }

      .form-group.full-width {
        grid-column: 1 / -1;
      }

      .form-label {
        font-size: var(--ddd-font-size-sm, 0.875rem);
        font-weight: var(--ddd-font-weight-medium, 500);
        color: var(--ddd-theme-default-coalyGray, #333);
        margin-bottom: var(--ddd-spacing-2, 0.5rem);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .form-input,
      .form-select,
      .form-textarea {
        padding: var(--ddd-spacing-3, 0.75rem);
        border: 2px solid var(--ddd-theme-default-slateLight, #e2e8f0);
        border-radius: var(--ddd-radius-md, 8px);
        font-size: var(--ddd-font-size-base, 1rem);
        color: var(--ddd-theme-default-coalyGray, #333);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        font-family: var(--ddd-font-primary);
      }

      .form-input:focus,
      .form-select:focus,
      .form-textarea:focus {
        outline: none;
        border-color: var(--ddd-theme-default-skyBlue, #3b82f6);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }

      .form-textarea {
        resize: vertical;
        min-height: 100px;
      }

      .checkbox-group {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2, 0.5rem);
        margin: var(--ddd-spacing-4, 1rem) 0;
      }

      .checkbox-input {
        width: 18px;
        height: 18px;
        accent-color: var(--ddd-theme-default-skyBlue, #3b82f6);
      }

      .checkbox-label {
        font-size: var(--ddd-font-size-sm, 0.875rem);
        color: var(--ddd-theme-default-coalyGray, #333);
      }

      .form-actions {
        display: flex;
        gap: var(--ddd-spacing-4, 1rem);
        justify-content: center;
        margin-top: var(--ddd-spacing-6, 2rem);
      }

      @media (max-width: 768px) {
        .register-container {
          padding: var(--ddd-spacing-4, 1rem);
        }
        
        .form-container {
          padding: var(--ddd-spacing-6, 2rem);
        }
        
        .form-grid {
          grid-template-columns: 1fr;
          gap: var(--ddd-spacing-4, 1rem);
        }

        .form-actions {
          flex-direction: column;
        }
      }
    `];
  }

  constructor() {
    super();
    this.formData = {
      teamName: '',
      captainName: '',
      email: '',
      phone: '',
      division: '',
      experience: '',
      comments: '',
      agreeTerms: false
    };
  }

  _handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    this.formData = {
      ...this.formData,
      [name]: type === 'checkbox' ? checked : value
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    
    // Basic validation
    if (!this.formData.teamName || !this.formData.captainName || !this.formData.email || !this.formData.agreeTerms) {
      alert('Please fill in all required fields and agree to the terms.');
      return;
    }

    // Success message
    alert(`Thank you! ${this.formData.teamName} has been successfully registered for the Penn State Soccer League.`);
    
    // Reset form
    this._handleReset();
  }

  _handleReset() {
    this.formData = {
      teamName: '',
      captainName: '',
      email: '',
      phone: '',
      division: '',
      experience: '',
      comments: '',
      agreeTerms: false
    };
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="register-container">
        <div class="register-header">
          <h1 class="register-title">Register Your Team</h1>
          <p class="register-subtitle">Join the Penn State Soccer League and compete with teams from across the region</p>
        </div>

        <div class="form-container">
          <form @submit="${this._handleSubmit}">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label" for="teamName">Team Name *</label>
                <input 
                  type="text" 
                  id="teamName" 
                  name="teamName" 
                  class="form-input"
                  .value="${this.formData.teamName}"
                  @input="${this._handleInputChange}"
                  required
                  placeholder="Enter your team name">
              </div>

              <div class="form-group">
                <label class="form-label" for="captainName">Team Captain *</label>
                <input 
                  type="text" 
                  id="captainName" 
                  name="captainName" 
                  class="form-input"
                  .value="${this.formData.captainName}"
                  @input="${this._handleInputChange}"
                  required
                  placeholder="Captain's full name">
              </div>

              <div class="form-group">
                <label class="form-label" for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  class="form-input"
                  .value="${this.formData.email}"
                  @input="${this._handleInputChange}"
                  required
                  placeholder="captain@email.com">
              </div>

              <div class="form-group">
                <label class="form-label" for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  class="form-input"
                  .value="${this.formData.phone}"
                  @input="${this._handleInputChange}"
                  placeholder="(555) 123-4567">
              </div>

              <div class="form-group">
                <label class="form-label" for="division">Preferred Division</label>
                <select 
                  id="division" 
                  name="division" 
                  class="form-select"
                  .value="${this.formData.division}"
                  @change="${this._handleInputChange}">
                  <option value="">Select Division</option>
                  <option value="recreational">Recreational</option>
                  <option value="competitive">Competitive</option>
                  <option value="elite">Elite</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="experience">Team Experience Level</label>
                <select 
                  id="experience" 
                  name="experience" 
                  class="form-select"
                  .value="${this.formData.experience}"
                  @change="${this._handleInputChange}">
                  <option value="">Select Experience</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (2-4 years)</option>
                  <option value="advanced">Advanced (5+ years)</option>
                </select>
              </div>

              <div class="form-group full-width">
                <label class="form-label" for="comments">Additional Comments</label>
                <textarea 
                  id="comments" 
                  name="comments" 
                  class="form-textarea"
                  .value="${this.formData.comments}"
                  @input="${this._handleInputChange}"
                  placeholder="Tell us about your team, special requirements, or any questions..."></textarea>
              </div>
            </div>

            <div class="checkbox-group">
              <input 
                type="checkbox" 
                id="agreeTerms" 
                name="agreeTerms" 
                class="checkbox-input"
                .checked="${this.formData.agreeTerms}"
                @change="${this._handleInputChange}"
                required>
              <label class="checkbox-label" for="agreeTerms">
                I agree to the Penn State Soccer League terms and conditions *
              </label>
            </div>

            <div class="form-actions">
              <psl-button 
                text="Register Team" 
                type="primary"
                @click="${this._handleSubmit}">
              </psl-button>
              <psl-button 
                text="Clear Form" 
                type="secondary"
                @click="${this._handleReset}">
              </psl-button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PslRegister.tag, PslRegister);