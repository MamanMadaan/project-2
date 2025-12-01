import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class PslFooter extends DDDSuper(LitElement) {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .footer {
      background: var(--ddd-theme-default-coalyGray, #333333);
      color: var(--ddd-theme-default-white, #ffffff);
      padding: var(--ddd-spacing-8, 2rem) var(--ddd-spacing-6, 2rem) var(--ddd-spacing-6, 2rem);
      margin-top: var(--ddd-spacing-8, 2rem);
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--ddd-spacing-8, 2rem);
    }

    .footer-section h3 {
      margin: 0 0 var(--ddd-spacing-4, 1rem) 0;
      font-size: var(--ddd-font-size-lg, 1.125rem);
      font-weight: var(--ddd-font-weight-bold, 600);
      color: var(--ddd-theme-default-skyBlue, #3b82f6);
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: var(--ddd-spacing-2, 0.5rem);
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: var(--ddd-theme-default-skyBlue, #3b82f6);
    }

    .social-links {
      display: flex;
      gap: var(--ddd-spacing-4, 1rem);
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ddd-theme-default-white, #ffffff);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--ddd-theme-default-skyBlue, #3b82f6);
      transform: translateY(-2px);
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: var(--ddd-spacing-6, 2rem);
      padding-top: var(--ddd-spacing-6, 2rem);
      font-size: var(--ddd-font-size-sm, 0.875rem);
      opacity: 0.8;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--ddd-spacing-4, 1rem);
    }

    .footer-bottom-content p {
      margin: 0;
    }

    .powered-by {
      display: flex;
      align-items: center;
      gap: var(--ddd-spacing-2, 0.5rem);
      font-size: var(--ddd-font-size-xs, 0.75rem);
      opacity: 0.7;
    }

    .powered-logo {
      width: 40px;
      height: 40px;
      background: var(--ddd-theme-default-white, #ffffff);
      border-radius: var(--ddd-radius-sm, 4px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
    }

    .powered-logo img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .logo-footer {
      width: 40px;
      height: 40px;
      margin: 0 auto var(--ddd-spacing-4, 1rem);
      background: var(--ddd-theme-default-white, #ffffff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-footer img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--ddd-spacing-6, 2rem);
      }
      
      .social-links {
        justify-content: center;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: var(--ddd-spacing-2, 0.5rem);
      }
    }
  `;

  render() {
    return html`
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <div class="logo-footer">
              <img src="./src/assets/psl-logo.svg" alt="PSL Logo" />
            </div>
            <h3>Penn State Soccer League</h3>
            <p>Experience competitive soccer excellence at Penn State University. Building community through sport.</p>
          </div>

          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#teams">Teams</a></li>
              <li><a href="#stats">Statistics</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Information</h3>
            <ul class="footer-links">
              <li><a href="#rules">League Rules</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#about">About PSL</a></li>
              <li><a href="#news">Latest News</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; 2025 Penn State Soccer League. All rights reserved.</p>
            <div class="powered-by">
              <span>Powered by</span>
              <div class="powered-logo">
                <img src="./src/assets/back-seat-bros-logo.svg" alt="Back Seat Bros" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('psl-footer', PslFooter);