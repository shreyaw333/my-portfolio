import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Home, User, Briefcase, FolderOpen, Code2 } from 'lucide-react';

// Custom hook for typewriter effect
const useTypewriter = (texts, speed = 150, delay = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      const currentText = texts[currentIndex];
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, speed / 2);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, speed, delay]);

  return displayText;
};

// Vertical Navigation Component
const VerticalNav = () => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About Me' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'techstack', icon: Code2, label: 'Tech Stack' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-container">
      <div className="nav-buttons">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="nav-button"
            title={item.label}
          >
            <item.icon />
          </button>
        ))}
      </div>
    </nav>
  );
};

// Hero Section Component
const Hero = () => {
  const roles = ['Fullstack Engineer', 'Software Developer', 'AI/ML Engineer', 'Data Engineer'];
  const currentRole = useTypewriter(roles);

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h2 className="hero-greeting">
          Hello! I am
        </h2>
        
        <h1 className="hero-name">
          Shreya
        </h1>
        
        <div className="hero-role">
          <span>
            {currentRole}
            <span className="typewriter-cursor">|</span>
          </span>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "ML Pipeline for Instagram Analytics",
      technologies: ["Apache Airflow", "Spark", "TensorFlow", "Kubernetes"],
      description: "Built fault-tolerant ML pipeline processing Instagram data for sentiment analysis and trend detection. Implemented feature engineering workflows and model versioning system. Designed auto-scaling infrastructure handling variable traffic loads with cost optimization",
      image: "/instagram.jpeg",
      github: "https://github.com/shreyaw333/ml-pipeline-for-sma/",
      demo: ""
    },
    {
      title: "Pinterest Trend Analysis Platform",
      technologies: ["Angular", "Python (FastAPI)", "GraphQL", "Canvas"],
      description: "Built full-stack trend analysis platform extracting Pinterest data, implementing Canvas-based visualization dashboards that compress trend identification from weeks to hours",
      image: "/pinterest-logo.png",
      github: "https://github.com/shreyaw333/pinterest-analytics/",
      demo: ""
    },
    {
      title: "Reddit Analytics Dashboard Pipeline",
      technologies: ["Apache Airflow", "AWS", "QuickSight", "Python"],
      description: "Built production-grade data pipeline using Apache Airflow, AWS, and QuickSight to automate Reddit data extraction, enabling real-time trend detection and sentiment analysis through interactive dashboards",
      image: "/reddit.png",
      github: "https://github.com/shreyaw333/Reddit_Data_Analysis/",
      demo: ""
    },
    {
      title: "LLM-Powered Financial Insights Bot",
      technologies: ["Python", "OpenAI GPT API", "FastAPI", "PostgreSQL", "Redis", "React"],
      description: "Built AI-powered financial analysis assistant integrating GPT-4 with market data APIs and financial databases. Implemented context-aware insights and automated report generation, reducing analyst research time by 50% and improving decision-making accuracy for portfolio managers",
      image: "/financial-insights-bot.png",
      github: "https://github.com/shreyaw333/llm-financial-insights-bot/",
      demo: ""
    },
    {
      title: "ML-Powered Ad Targeting & Revenue Optimization Engine",
      technologies: ["Python", "TensorFlow", "PyTorch", "LangChain", "Apache Kafka", "A/B Testing"],
      description: "Architected an ML system combining user behavior analysis and predictive modeling to optimize ad relevancy and revenue. Implemented real-time feature engineering with collaborative filtering, improving CTR by 35% and revenue per user by 28%",
      image: "/targeting.png",
      github: "https://github.com/shreyaw333/ad-targeting-revenue-optimization/",
      demo: ""
    },
    {
      title: "Smart Outfit Planner Bot",
      technologies: ["React", "Node.js", "OpenAI GPT API", "Canvas"],
      description: "Created AI-enhanced styling assistant with Chrome Extension integration, using LLM-powered recommendations and Canvas visualization to accelerate outfit creation workflows by 80%",
      image: "/smart.jpeg",
      github: "https://github.com/shreyaw333/smart-outfit-planner/",
      demo: ""
    },
    {
      title: "AI-Powered Fashion Trend Prediction System",
      technologies: ["React", "Python", "Machine Learning", "OpenAI GPT API"],
      description: "Developed predictive analytics platform using ML algorithms for fashion forecasting, enabling designers to identify emerging trends",
      image: "/ai-fashion.png",
      github: "https://github.com/shreyaw333/ai-fashion-trends-prediction/",
      demo: ""
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
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section Component Template
const Section = ({ id, title, children, bgClass = "bg-white-light" }) => (
  <section id={id} className={`section ${bgClass}`}>
    <div className="section-content">
      <h2 className="section-title left-aligned">
        {title}
      </h2>
      <div className="section-text">
        {children}
      </div>
    </div>
  </section>
);

// Tech Stack Component
const TechStack = () => {
  const techCategories = [
    {
      category: "Programming Languages",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" }
      ]
    },
    {
      category: "Frontend Development",
      technologies: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
      ]
    },
    {
      category: "AI & Machine Learning",
      technologies: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "OpenAI GPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "LangChain", icon: "https://python.langchain.com/img/brand/wordmark.png" },
        { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" }
      ]
    },
    {
      category: "Data Engineering",
      technologies: [
        { name: "Apache Airflow", icon: "https://airflow.apache.org/docs/apache-airflow/stable/_images/pin_large.png" },
        { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "Snowflake", icon: "https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Symbol.png" },
        { name: "BigQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Apache Spark", icon: "https://spark.apache.org/images/spark-logo-trademark.png" },
        { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      technologies: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ]
    },
    {
      category: "Databases",
      technologies: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" }
      ]
    },
    {
      category: "Analytics & BI Tools",
      technologies: [
        { name: "Tableau", icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" },
        { name: "Power BI", icon: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png" },
        { name: "AWS QuickSight", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Looker", icon: "https://seeklogo.com/images/L/looker-logo-B8A6B93D71-seeklogo.com.png" },
        { name: "Google Data Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
        { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" }
      ]
    }
  ];

  return (
    <section id="techstack" className="section bg-blue-light">
      <div className="section-content">
        <h2 className="section-title left-aligned">
          My Tech Stack
        </h2>
        
        <div className="tech-categories">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="tech-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="tech-grid">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-item">
                    <div className="tech-icon">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
    {
      logo: "/cohap.jpg",
      company: "COHAP Outreach Corporation",
      tag: "(Startup)",
      role: "Lead Backend Engineer",
      duration: "May 2025 - Present",
      points: [
        "Led full-stack development for B2B platform serving 10,000+ users achieving 99.9% uptime",
        "Built high-performing interfaces with Canvas technologies that compressed user workflows by 60%",
        "Enhanced workflows with AI/ML using OpenAI GPT API for automated content management"
      ]
    },
    {
      logo: "/lti.jpeg",
      company: "LTIMindtree",
      tag: "",
      role: "Senior Software & Data Engineer",
      duration: "August 2021 – April 2023",
      points: [
        "Architected enterprise B2B SaaS platforms for ServiceNow clients processing millions of records daily",
        "Led product architecture implementing GraphQL APIs that reduced manual processing effort by 40%",
        "Built scalable user interfaces achieving 50% improvement in response times for complex workflows"
      ]
    },
    {
      logo: "/runshaw.jpeg",
      company: "RunShaw Technologies",
      tag: "(Startup)",
      role: "Software Developer Intern",
      duration: "March 2021 - April 2021",
      points: [
        "Built real-time analytics interfaces using React and Canvas technologies for financial data visualization",
        "Developed Python backend systems with GraphQL APIs for scalable client applications"
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
                <h3 className="company-name">
                  {exp.company} <span className="company-tag">{exp.tag}</span>
                </h3>
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

// About Me Component
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
              I'm a <span className="highlight">Fullstack Engineer</span> with <span className="highlight">4+ years of experience</span> specializing in
              <span className="highlight"> Angular, React, and Python</span>. I love turning ambitious product visions into
              <span className="highlight"> scalable tech platforms</span> that transform entire industries.
            </p>
            
            <p>
              With my <span className="highlight">Master's in Computer Science from Purdue University</span>, 
              I've led full-stack development for <span className="highlight">B2B platforms serving 10,000+ users</span> with
              <span className="highlight"> 99.9% uptime</span>. My expertise spans from enterprise SaaS platforms to
              <span className="highlight"> AI-powered workflow automation</span>.
            </p>
            
            <p>
              I don't just build features—I create the <span className="highlight">foundational systems</span> that give startups 
              their competitive edge in fast-moving markets. My work has compressed complex workflows
              <span className="highlight"> from months to days</span>, helping businesses achieve unprecedented efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shreya-watve-b404171b2/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/shreyaw333', label: 'GitHub' },
    { icon: Mail, href: 'mailto:shreyawatve3@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+12602406412', label: 'Phone' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <social.icon />
            </a>
          ))}
        </div>
        
        <p className="footer-text">
          Created By Shreya Watve | 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
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
        
        /* Updated layout to match sketch */
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
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .project-layout {
          display: flex;
          gap: 1.5rem;
          height: 100%;
        }
        
        .project-image {
          flex-shrink: 0;
          align-self: flex-start;
        }
        
        .project-img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.8);
          padding: 0.75rem;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(37, 99, 235, 0.1);
        }
        
        .project-right-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .project-title {
          font-size: 1.1rem;
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
          font-size: 0.9rem;
          color: #374151;
          line-height: 1.6;
          margin: 0;
          text-align: left;
          flex-grow: 1;
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
          }
          
          .project-layout {
            flex-direction: column;
            gap: 1rem;
          }
          
          .project-image {
            align-self: center;
          }
          
          .project-header {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }
          
          .project-links {
            align-self: flex-start;
          }
          
          .project-img {
            width: 60px;
            height: 60px;
          }
          
          .project-title {
            font-size: 1rem;
          }
          
          .tech-tag {
            font-size: 0.7rem;
            padding: 0.25rem 0.5rem;
          }
          
          .project-description {
            font-size: 0.85rem;
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
      `}</style>
      
      <VerticalNav />
      
      <Hero />
      
      <AboutMe />
      
      <Experience />
      
      <TechStack />
      
      <Projects />
      
      <Footer />
    </div>
  );
};

export default App;