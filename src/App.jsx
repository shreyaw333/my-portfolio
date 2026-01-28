import React from 'react';
import VerticalNav from './components/VerticalNav';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <style jsx>{`
        .hero-name {
          font-size: 4.5rem;
        }
        
        .left-aligned {
          text-align: left;
        }
        
        /* Updated layout with better grid handling */
        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          align-items: start;
        }
        
        .project-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .project-top-section {
          display: flex;
          gap: 1.5rem;
          align-items: stretch;
        }
        
        .project-image {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        
        .project-img {
          width: 120px;
          height: 120px;
          object-fit: contain;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.8);
          padding: 1rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(37, 99, 235, 0.1);
        }
        
        .project-right-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .project-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #1e3a8a;
          margin: 0;
          line-height: 1.3;
          flex-grow: 1;
          text-align: left;
        }
        
        .project-links {
          display: flex;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        
        .project-link-btn {
          width: 36px;
          height: 36px;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #2563eb;
        }
        
        .project-link-btn:hover:not(:disabled) {
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
        
        .project-link-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: flex-start;
        }
        
        .tech-tag {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          padding: 0.3rem 0.6rem;
          border-radius: 16px;
          font-size: 0.75rem;
          font-weight: 500;
          box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
          transition: all 0.2s ease;
        }
        
        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(37, 99, 235, 0.4);
        }
        
        .project-description {
          font-size: 0.95rem;
          color: #374151;
          line-height: 1.6;
          margin: 0;
          text-align: left;
          width: 100%;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .projects-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .project-card {
            padding: 1.5rem;
            gap: 1rem;
          }
          
          .project-top-section {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          
          .project-image {
            align-self: center;
          }
          
          .project-img {
            width: 100px;
            height: 100px;
          }
          
          .project-header {
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
          
          .project-links {
            align-self: center;
          }
          
          .project-title {
            font-size: 1.1rem;
            text-align: center;
          }
          
          .project-technologies {
            justify-content: center;
          }
          
          .tech-tag {
            font-size: 0.7rem;
            padding: 0.25rem 0.5rem;
          }
          
          .project-description {
            font-size: 0.85rem;
            text-align: center;
          }
        }
        
        @media (min-width: 768px) {
          .hero-name {
            font-size: 5.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .hero-name {
            font-size: 6.5rem;
          }
        }
        
        .company-link-btn {
          width: 28px;
          height: 28px;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.2);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #2563eb;
          flex-shrink: 0;
        }
        
        .company-link-btn:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
      `}</style>
      
      <VerticalNav />
      <Hero />
      <AboutMe />
      <Experience />
      <TechStack />
      <Projects />
      <Certifications />
      <Education/>
      <Footer />
    </div>
  );
};

export default App;