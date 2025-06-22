
import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our <span className="text-gradient">Services</span></h2>
          <p>We offer comprehensive tech solutions tailored to your specific needs. From web development to cybersecurity, we've got you covered.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-code" aria-hidden="true"></i>
            </div>
            <div className="service-content">
              <h3>WEB DESIGN & DEVELOPMENT</h3>
              <p>Beautiful, functional websites that drive results and engage your audience.</p>
              <ul>
                <li>STATIC WEBSITES</li>
                <li>DYNAMIC WEB APPS</li>
                <li>E-COMMERCE SOLUTIONS</li>
                <li>CUSTOM WEB DESIGN</li>
              </ul>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shield-alt" aria-hidden="true"></i>
            </div>
            <div className="service-content">
              <h3>CYBERSECURITY SERVICES</h3>
              <p>Protect your digital assets with our comprehensive security solutions.</p>
              <ul>
                <li>PENETRATION TESTING</li>
                <li>BUG HUNTING</li>
                <li>VULNERABILITY ASSESSMENT</li>
                <li>SECURITY REPORTS</li>
              </ul>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-graduation-cap" aria-hidden="true"></i>
            </div>
            <div className="service-content">
              <h3>STUDENT PROJECT ASSISTANCE</h3>
              <p>Affordable help for students to complete projects successfully.</p>
              <ul>
                <li>PROJECT COMPLETION</li>
                <li>SOURCE CODE DELIVERY</li>
                <li>REPORT WRITING</li>
                <li>HOSTING SUPPORT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;