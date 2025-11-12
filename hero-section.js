export class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="
        background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        color: white;
        padding: 80px 20px;
        text-align: center;
        font-family: Arial, sans-serif;
      ">
        <h1 style="
          font-size: 48px;
          margin: 0 0 20px 0;
          font-weight: bold;
        ">PSL</h1>
        <p style="
          font-size: 24px;
          margin: 0 0 15px 0;
        ">PennState Soccer League</p>
        <p style="
          font-size: 18px;
          margin: 0;
        ">Experience competitive soccer at Penn State University</p>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);