import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

const backSeatBrosLogo = new URL('../assets/back-seat-bros-logo.svg', import.meta.url).href;

export class PslFooter extends DDDSuper(LitElement) {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .footer {
      background: #1f2937;
      color: #ffffff;
      padding: 48px 24px 24px;
      margin-top: 48px;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 48px;
    }

    .footer-brand {
      color: #ffffff;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 24px;
    }

    .logo {
      width: 80px;
      height: 80px;
      background: #ffffff;
      border-radius: 8px;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .footer-title {
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
      margin: 0 0 12px 0;
    }

    .footer-description {
      font-size: 16px;
      color: #ffffff;
      line-height: 1.5;
      margin: 0;
    }

    .footer-section {
      color: #ffffff;
    }

    .footer-heading {
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
      margin: 0 0 24px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .footer-nav {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-nav li {
      margin-bottom: 12px;
    }

    .footer-link {
      color: #ffffff;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s ease;
    }

    .footer-link:hover {
      color: #3b82f6;
    }

    .social-icons {
      display: flex;
      gap: 16px;
      margin-top: 12px;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      background: #3b82f6;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      margin-top: 36px;
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .powered-by {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #ffffff;
    }

    .powered-by-logo {
      width: 40px;
      height: 40px;
      background: #ffffff;
      border-radius: 4px;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .powered-by-logo img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .copyright {
      font-size: 14px;
      color: #ffffff;
      margin: 0;
    }

    @media (max-width: 768px) {
      .footer-container {
        grid-template-columns: 1fr;
        gap: 32px;
        text-align: center;
      }

      .footer-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
      }

      .footer-nav li {
        margin-bottom: 0;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }

      .logo-section {
        justify-content: center;
      }

      .social-icons {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .logo-section {
        flex-direction: column;
        gap: 16px;
      }

      .logo {
        width: 60px;
        height: 60px;
      }
    }
  `;

  render() {
    return html`
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-brand">
            <h2 class="footer-title">Penn State Soccer League</h2>
            <p class="footer-description">Building community through competitive soccer excellence at Penn State University.</p>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-nav">
              <li><a href="/" class="footer-link">Home</a></li>
              <li><a href="/schedule" class="footer-link">Schedule</a></li>
              <li><a href="/teams" class="footer-link">Teams</a></li>
              <li><a href="/standings" class="footer-link">Standings</a></li>
              <li><a href="/register" class="footer-link">Register</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Follow Us</h3>
            <div class="social-icons">
              <a href="#" class="social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="copyright">&copy; 2025 Penn State Soccer League. All rights reserved.</p>
          <div class="powered-by">
            <span>Powered by</span>
            <div class="powered-by-logo">
              <img src="${backSeatBrosLogo}" alt="Back Seat Bros" />
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('psl-footer', PslFooter);

