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
            <span className="highlight"> scalable backend systems and ML/AI platforms</span>. I turn complex technical challenges into 
            production-ready solutions using <span className="highlight">Python, Node.js, and cloud architectures</span>.
          </p>

          <p>
            Armed with my <span className="highlight">Master's from Purdue</span>, I've built systems serving 
            <span className="highlight">10,000+ users with 99.9% uptime</span>. I love working with 
            <span className="highlight">microservices, APIs, databases, and ML pipelines</span>—basically anything that makes software run fast and scale smoothly.
          </p>

          <p>
            I don't just write code—I build the <span className="highlight">core infrastructure and intelligent systems</span> that power modern apps. 
            Whether it's <span className="highlight">automated ML workflows</span> or <span className="highlight">high-performance data pipelines</span>, 
            I create backend foundations that help businesses scale and leverage AI effectively.
          </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;