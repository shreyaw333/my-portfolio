import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      logo: "/cohap.jpg",
      company: "COHAP Outreach Corporation",
      tag: "(Startup)",
      role: "Lead Fullstack Engineer",
      duration: "May 2025 - Present",
      link: "",
      points: [
        "Architected backend services for multi-agent AI assistant handling 50K+ daily API requests with 99.9% availability using Python, FastAPI, and microservices",
        "Built production-grade infrastructure processing 100K+ requests daily with sub-100ms P95 latency through optimized caching and distributed systems",
        "Implemented CI/CD pipelines with automated testing, reducing release cycles by 60% while maintaining security standards"
      ]
    },
    {
      logo: "/lti.jpeg",
      company: "LTIMindtree",
      tag: "",
      role: "Senior Data Engineer",
      duration: "August 2021 – April 2023",
      link: "https://www.youtube.com/watch?v=FbZRROb-e4w",
      points: [
        "Executed enterprise SAP HANA to Snowflake migration at petabyte-scale, designing migration strategies and validation frameworks ensuring 100% data integrity",
        "Built enterprise-scale backend systems processing millions of records daily using Python and Java with RESTful APIs and microservices architecture",
        "Architected infrastructure using Kafka for streaming, Redis for caching, and PostgreSQL improving query performance by 50%"
      ]
    },
    {
      logo: "/runshaw.jpeg",
      company: "RunShaw Technologies",
      tag: "(Startup)",
      role: "Fullstack Developer Intern",
      duration: "March 2021 - April 2021",
      link: "",
      points: [
        "Built backend services and data processing applications using Python and Java with database optimization improving efficiency by 25%",
        "Implemented CI/CD pipelines and automated testing frameworks ensuring code quality and deployment reliability"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-white-light">
      <div className="section-content">
        <h2 className="section-title left-aligned">
          Experience
        </h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="company-logo">
                <img src={exp.logo} alt={exp.company} className="logo-image" />
              </div>
              
              <div className="company-info">
                <div className="company-name-row">
                  <h3 className="company-name">
                    {exp.company}
                    {exp.tag && <span className="company-tag">{exp.tag}</span>}
                  </h3>
                  {exp.link && (
                    <button 
                      className="company-link-btn"
                      onClick={() => window.open(exp.link, '_blank')}
                      title="View More"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </button>
                  )}
                </div>
                <h4 className="role-title">{exp.role}</h4>
                <p className="duration">{exp.duration}</p>
              </div>
              
              <div className="experience-points">
                {exp.points.map((point, pointIndex) => (
                  <p key={pointIndex} className="point">
                    • {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;