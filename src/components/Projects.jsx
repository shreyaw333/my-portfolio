import React from 'react';
import { Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Automated ML Pipeline for Instagram Analytics",
      technologies: ["Apache Airflow", "Spark", "TensorFlow", "Kubernetes", "Docker"],
      description: "Built fault-tolerant ML pipeline processing social media data for real-time sentiment analysis and trend detection. Implemented auto-scaling infrastructure with Kubernetes, feature engineering workflows, and live analytics dashboard with 99.5% uptime handling variable traffic loads.",
      image: "/instagram.jpeg",
      github: "https://github.com/shreyaw333/ml-pipeline-for-sma/",
      demo: "https://ml-pipeline-for-sma.vercel.app/",
    },
    {
      title: "ML-Powered Ad Targeting & Revenue Optimization Engine",
      technologies: ["Python", "TensorFlow", "PyTorch", "LangChain", "Apache Kafka", "A/B Testing"],
      description: "Architected an ML system combining user behavior analysis and predictive modeling to optimize ad relevancy and revenue. Implemented real-time feature engineering with collaborative filtering, improving CTR by 35% and revenue per user by 28%.",
      image: "/targeting.png",
      github: "https://github.com/shreyaw333/ad-targeting-revenue-optimization/",
      demo: "https://ad-targeting-revenue-optimization.vercel.app/",
    },
    {
      title: "LLM-Powered Financial Insights Bot",
      technologies: ["Python", "OpenAI GPT API", "FastAPI", "PostgreSQL", "Redis", "React"],
      description: "Built AI-powered financial analysis assistant integrating GPT-4 with market data APIs and financial databases. Implemented context-aware insights and automated report generation, reducing analyst research time by 50% and improving decision-making accuracy for portfolio managers.",
      image: "/financial-insights-bot.png",
      github: "https://github.com/shreyaw333/llm-financial-insights-bot/",
      demo: "https://llm-financial-insights-bot.vercel.app/",
    },
    {
      title: "Real-Time Payment Processing Engine",
      technologies: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "Docker", "AWS"],
      description: "Built end-to-end payment processing system supporting multiple payment methods including credit cards and digital wallets. Implemented transaction validation, real-time status updates, and secure authentication with comprehensive error handling and monitoring systems.",
      image: "/payment.png",
      github: "https://github.com/shreyaw333/realtime-payment-engine",
      demo: "https://realtime-payment-engine.vercel.app/",
    },
    {
      title: "ML for Pinterest Trending Pins Recommender Platform",
      technologies: ["Django", "PostgreSQL", "AWS S3", "AWS SageMaker", "Apache Kafka"],
      description: "Built scalable recommendation engine using collaborative filtering and matrix factorization for personalized content discovery. Implemented real-time ML inference pipeline with optimized feature engineering, achieving 50% improvement in content delivery latency.",
      image: "/pinterest-logo.png",
      github: "https://github.com/shreyaw333/pinterest-analytics/",
      demo: "https://pinterest-analytics.vercel.app/",
    },
    {
      title: "Reddit Analytics Dashboard Pipeline",
      technologies: ["Apache Airflow", "AWS", "QuickSight", "Python"],
      description: "Built production-grade data pipeline using Apache Airflow, AWS, and QuickSight to automate Reddit data extraction, enabling real-time trend detection and sentiment analysis through interactive dashboards.",
      image: "/reddit.png",
      github: "https://github.com/shreyaw333/Reddit_Data_Analysis/",
      demo: "https://reddit-data-analysis.vercel.app/",
    },
    {
      title: "TuneVault",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "React", "Docker", "AWS", "Stripe APIs", "Apache Kafka"],
      description: "Built multi-platform subscription revenue management system for music streaming with automated revenue recognition, artist royalty calculations, and real-time analytics, reducing manual accounting processes by 75%.",
      image: "/tune.jpg",
      github: "https://github.com/shreyaw333/tune-vault",
      demo: "https://tune-vault-tau.vercel.app/",
    }
  ];

  return (
    <section id="projects" className="section bg-white-light">
      <div className="section-content">
        <h2 className="section-title left-aligned">
          Projects
        </h2>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-top-section">
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                
                <div className="project-right-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      {project.github && (
                        <button 
                          className="project-link-btn"
                          onClick={() => window.open(project.github, '_blank')}
                          title="View on GitHub"
                        >
                          <Github size={18} />
                        </button>
                      )}
                      {project.demo && (
                        <button 
                          className="project-link-btn"
                          onClick={() => window.open(project.demo, '_blank')}
                          title="View Live Demo"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;