export class ContactBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="contact-bar">
        <p class="contact-bar__text">
          Contact Us: (814) 555-0123 | 
          <span id="email-link" class="contact-bar__email-link">
            info@pennstatesoccer.edu
          </span>
        </p>
      </div>

      <!-- Email Modal -->
      <div id="email-modal" class="modal">
        <div class="modal__content">
          <!-- Close Button -->
          <button id="close-modal" class="modal__close">
            ×
          </button>

          <!-- Modal Header -->
          <div style="
            text-align: center;
            margin-bottom: 25px;
          ">
            <div style="
              background: var(--psl-primary-blue);
              color: white;
              border-radius: 50%;
              width: 60px;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              margin: 0 auto 15px auto;
            ">📧</div>
            <h2 style="
              color: var(--psl-primary-blue);
              margin: 0 0 5px 0;
              font-size: 24px;
              font-weight: 700;
            ">Send Email</h2>
            <p style="
              color: var(--psl-gray-600);
              margin: 0;
              font-size: 14px;
            ">Send a message to info@pennstatesoccer.edu</p>
          </div>

          <!-- Email Form -->
          <form id="email-form" class="form">
            <div class="form__group">
              <label class="form__label">Your Name *</label>
              <input type="text" id="sender-name" required class="form__input"
              placeholder="Enter your full name">
            </div>

            <div class="form__group">
              <label class="form__label">Your Email *</label>
              <input type="email" id="sender-email" required class="form__input"
              placeholder="your.email@example.com">
            </div>

            <div class="form__group">
              <label class="form__label">Subject *</label>
              <input type="text" id="email-subject" required class="form__input"
              placeholder="What is your message about?">
            </div>

            <div class="form__group">
              <label class="form__label">Message *</label>
              <textarea id="email-message" required rows="6" class="form__textarea"
              placeholder="Type your message here..."></textarea>
            </div>

            <!-- Form Actions -->
            <div style="
              display: flex;
              gap: 15px;
              justify-content: flex-end;
            ">
              <button type="button" id="cancel-email" class="btn btn--secondary">
                Cancel
              </button>
              <button type="submit" class="btn btn--primary">
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
    
    // Add event listeners
    setTimeout(() => {
      const emailLink = this.querySelector('#email-link');
      const modal = this.querySelector('#email-modal');
      const closeModal = this.querySelector('#close-modal');
      const cancelEmail = this.querySelector('#cancel-email');
      const emailForm = this.querySelector('#email-form');
      
      // Open modal when email link is clicked
      if (emailLink) {
        emailLink.addEventListener('click', () => {
          modal.classList.add('modal--active');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
      }
      
      // Close modal functions
      const closeEmailModal = () => {
        modal.classList.remove('modal--active');
        document.body.style.overflow = 'auto'; // Restore scrolling
        emailForm.reset(); // Clear form
      };
      
      if (closeModal) {
        closeModal.addEventListener('click', closeEmailModal);
      }
      
      if (cancelEmail) {
        cancelEmail.addEventListener('click', closeEmailModal);
      }
      
      // Close modal when clicking outside
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            closeEmailModal();
          }
        });
      }
      
      // Handle form submission
      if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          const name = this.querySelector('#sender-name').value;
          const email = this.querySelector('#sender-email').value;
          const subject = this.querySelector('#email-subject').value;
          const message = this.querySelector('#email-message').value;
          
          // Create mailto link with form data
          const mailtoLink = `mailto:info@pennstatesoccer.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
          
          // Open email client
          window.location.href = mailtoLink;
          
          // Show success message
          alert('Opening your email client...');
          
          // Close modal
          closeEmailModal();
        });
      }
    }, 0);
  }
}

customElements.define('contact-bar', ContactBar);