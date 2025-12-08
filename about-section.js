export class AboutSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="about-section" style="background-image: linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('https://th.bing.com/th/id/R.6dd9f6aa1ef3b073a683539874da5867?rik=qlbyF6mo3E7ApA&riu=http%3a%2f%2fwww.mackbrady.com%2fwp-content%2fuploads%2f2021%2f05%2fimage013.jpg&ehk=HJmpepY%2bVXkGVyEfqSBL6HvDo7vKWMJus%2fgh1qBckJ0%3d&risl=&pid=ImgRaw&r=0');">
        <div class="about-section__content">
          <h2 class="about-section__title">About PSL</h2>
          <p class="about-section__description">
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
