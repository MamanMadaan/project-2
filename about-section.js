export class AboutSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="
        background: linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('https://th.bing.com/th/id/R.6dd9f6aa1ef3b073a683539874da5867?rik=qlbyF6mo3E7ApA&riu=http%3a%2f%2fwww.mackbrady.com%2fwp-content%2fuploads%2f2021%2f05%2fimage013.jpg&ehk=HJmpepY%2bVXkGVyEfqSBL6HvDo7vKWMJus%2fgh1qBckJ0%3d&risl=&pid=ImgRaw&r=0');
        background-size: cover;
        background-position: center;
        color: white;
        padding: 60px 20px;
        text-align: center;
        margin: 40px 0;
        font-family: Arial, sans-serif;
      ">
        <div style="max-width: 800px; margin: 0 auto;">
          <h2 style="
            color: white;
            font-size: 36px;
            margin: 0 0 20px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          ">About PSL</h2>
          <p style="
            font-size: 18px;
            line-height: 1.6;
            margin: 0;
            color: white;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
          ">
            The PennState Soccer League has been fostering soccer excellence at Penn State for over two decades. 
            Our league provides students with opportunities to compete at various skill levels while maintaining 
            academic excellence. Whether you're a seasoned player or just starting your soccer journey, PSL welcomes all skill levels!
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('about-section', AboutSection);