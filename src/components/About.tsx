
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Our Team at Div Creater working collaboratively" />
          </div>
          <div className="about-content">
            <h2>About <span className="text-gradient">Us</span></h2>
            <p>Div Creater is a student-powered tech innovation agency offering web development, cybersecurity services, and academic project solutions — all at affordable, student-friendly pricing. We blend creative energy, technical expertise, and real-world problem-solving to build impactful digital experiences.</p>
            <p>Founded in 2025, Div Creater began as a collaboration among young technologists with a vision: to make high-quality digital services accessible to everyone — from startups to students. Today, we proudly operate as a full-service tech partner, delivering professional results without the premium price tag.</p>
            <div className="about-stats">
              
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
