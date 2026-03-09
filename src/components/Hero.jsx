import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <h2 className="hero-greeting">
            Hello! I am
          </h2>
          
          <h1 className="hero-name">
            Shreya Watve
          </h1>
        </div>
        
        <div className="hero-roles">
          <span className="role-item">Software Engineer</span>
          <span className="role-separator">|</span>
          <span className="role-item">Backend Engineer</span>
          <span className="role-separator">|</span>
          <span className="role-item">ML Engineer</span>
          <span className="role-separator">|</span>
          <span className="role-item">Fintech Developer</span>
        </div>
        
        
      </div>
    </section>
  );
};

export default Hero;