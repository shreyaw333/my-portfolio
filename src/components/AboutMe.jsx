import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => (
  <section id="about" className="section bg-blue-light">
    <div className="section-content">
      <h2 className="section-title left-aligned">
        About Me
      </h2>
      
      <div className="about-container">
        <div className="about-photo">
          <img src="/photo123.png" alt="Shreya Watve" className="profile-image" />
        </div>
        
        <div className="about-content">
          <div className="about-text">
          <p>
  I'm a <span className="highlight">Software Engineer</span> with <span className="highlight">4+ years</span> building
  <span className="highlight"> production-grade fullstack systems and GCP cloud infrastructure</span>. I take ownership
  of everything from <span className="highlight">backend APIs and databases</span> to
  <span className="highlight"> cloud architecture and deployment</span>.
</p>

<p>
  Armed with my <span className="highlight">Master's from Purdue</span>, I've architected systems on
  <span className="highlight"> GCP serving 10,000+ users at 99.9% uptime</span>, designing
  <span className="highlight"> object storage, Terraform IaC, Cloud Run, and event-driven pipelines</span> from the ground up.
</p>

<p>
  I don't just write code, I build the <span className="highlight">core infrastructure</span> that powers modern apps.
  Whether it's <span className="highlight">FastAPI and Django backends</span>,
  <span className="highlight"> distributed data pipelines</span>, or
  <span className="highlight"> full GCP environments provisioned with Terraform</span>,
  I create foundations that scale reliably and ship fast.
</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;