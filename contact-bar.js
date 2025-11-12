export class ContactBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="
        background-color: #1e3a8a;
        color: white;
        padding: 15px;
        text-align: center;
        font-family: Arial, sans-serif;
      ">
        <p style="margin: 0; font-size: 16px;">
          Contact Us: (814) 555-0123 | info@pennstatesoccer.edu
        </p>
      </div>
    `;
  }
}

customElements.define('contact-bar', ContactBar);