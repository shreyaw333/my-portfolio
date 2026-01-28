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
        
        <button className="download-button">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;