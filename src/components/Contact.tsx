import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In <span className="text-gradient">Touch</span></h2>
          <p>Have a project in mind or questions about our services? We'd love to hear from you.</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>We'd love to hear from you! Please reach out to us directly using the phone number or email address listed below, or connect with us on Instagram or LinkedIn for any inquiries or project discussions.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p> Mackkinaickenpatti (Post), Udumalai Road, Pollachi-642003, Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p><a href="mailto:divcreator07@gmail.com" style={{ color: 'var(--gray)', textDecoration: 'none' }}>divcreator07@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p><a href="tel:+917548835268" style={{ color: 'var(--gray)', textDecoration: 'none' }}>+91 7548835268</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="contact-text">
                  <h4>Instagram</h4>
                  <p><a href="https://www.instagram.com/div_creator?igsh=bnZ1bWVmcnF6dHRm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gray)', textDecoration: 'none' }}>Follow us on Instagram</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <p><a href="https://www.linkedin.com/in/div-creator-572821370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gray)', textDecoration: 'none' }}>Connect on LinkedIn</a></p>
                </div>
              </div>
            </div>
          </div>
          {/* The contact form section is intentionally left out as per previous request. */}
        </div>
      </div>
    </section>
  );
};

export default Contact;