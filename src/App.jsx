import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, Home, User, Briefcase, FolderOpen, Code2 } from 'lucide-react';

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
    <motion.nav 
      className="nav-container"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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
    </motion.nav>
  );
};

// Hero Section Component
const Hero = () => {
  const roles = ['Fullstack Engineer', 'Software Developer', 'AI/ML Engineer', 'Data Engineer'];
  const currentRole = useTypewriter(roles);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume_ShreyaWatve.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      <motion.div 
        className="hero-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="hero-greeting"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hello! I am
        </motion.h2>
        
        <motion.h1 
          className="hero-name"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Shreya
        </motion.h1>
        
        <motion.div 
          className="hero-role"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span>
            {currentRole}
            <span className="typewriter-cursor">|</span>
          </span>
        </motion.div>
        
        <motion.button
          onClick={downloadCV}
          className="download-button"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={20} />
          Download CV
        </motion.button>
      </motion.div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Fashion Trend Prediction System",
      technologies: ["React", "Python", "Machine Learning", "OpenAI GPT API"],
      description: "Developed predictive analytics platform using ML algorithms for fashion forecasting, enabling designers to identify emerging trends",
      image: "/ai-fashion.png"
    },
    {
      title: "Smart Outfit Planner Bot",
      technologies: ["React", "Node.js", "OpenAI GPT API", "Canvas"],
      description: "Created AI-enhanced styling assistant with Chrome Extension integration, using LLM-powered recommendations and Canvas visualization to accelerate outfit creation workflows by 80%",
      image: "/smart.jpeg"
    },
    {
      title: "Pinterest Trend Analysis Platform",
      technologies: ["Angular", "Python (FastAPI)", "GraphQL", "Canvas"],
      description: "Built full-stack trend analysis platform extracting Pinterest data, implementing Canvas-based visualization dashboards that compress trend identification from weeks to hours",
      image: "/pinterest-logo.png"
    },
    {
      title: "Reddit Analytics Dashboard Pipeline",
      technologies: ["Apache Airflow", "AWS", "QuickSight", "Python"],
      description: "Built production-grade data pipeline using Apache Airflow, AWS, and QuickSight to automate Reddit data extraction, enabling real-time trend detection and sentiment analysis through interactive dashboards",
      image: "/reddit.png"
    }
  ];

  return (
    <section id="projects" className="section bg-white-light">
      <div className="section-content">
        <motion.h2 
          className="section-title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="projects-container"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section Component Template
const Section = ({ id, title, children, bgClass = "bg-white-light" }) => (
  <section id={id} className={`section ${bgClass}`}>
    <div className="section-content">
      <motion.h2 
        className="section-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        #{title}
      </motion.h2>
      <motion.div 
        className="section-text"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

// Tech Stack Component
const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Prisma", icon: "https://www.vectorlogo.zone/logos/prismaio/prismaio-icon.svg" }
      ]
    },
    {
      category: "Canvas & Visualization",
      technologies: [
        { name: "HTML5 Canvas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "WebGL", icon: "https://www.vectorlogo.zone/logos/webgl/webgl-icon.svg" },
        { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
        { name: "D3.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Chrome Extension", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" }
      ]
    }
  ];

  return (
    <section id="techstack" className="section bg-blue-light">
      <div className="section-content">
        <motion.h2 
          className="section-title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>
        
        <motion.div 
          className="tech-categories"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="tech-category"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="tech-grid">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="tech-item"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="tech-icon">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
        <motion.h2 
          className="section-title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <motion.div 
          className="experience-grid"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// About Me Component
const AboutMe = () => (
  <section id="about" className="section bg-blue-light">
    <div className="section-content">
      <motion.h2 
        className="section-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      
      <motion.div 
        className="about-container"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="about-photo">
          <img src="/photo123.png" alt="Shreya Watve" className="profile-image" />
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <span className="highlight">Fullstack Engineer</span> with <span className="highlight">4+ years of experience</span> specializing in 
              <span className="highlight"> Angular, React, and Python</span>. I love turning ambitious product visions into 
              <span className="highlight">scalable tech platforms</span> that transform entire industries.
            </p>
            
            <p>
              Currently pursuing my <span className="highlight">Master's in Computer Science at Purdue University</span>, 
              I've led full-stack development for <span className="highlight">B2B platforms serving 10,000+ users</span> with 
              <span className="highlight">99.9% uptime</span>. My expertise spans from enterprise SaaS platforms to 
              <span className="highlight">AI-powered workflow automation</span>.
            </p>
            
            <p>
              I don't just build features—I create the <span className="highlight">foundational systems</span> that give startups 
              their competitive edge in fast-moving markets. My work has compressed complex workflows 
              <span className="highlight">from months to days</span>, helping businesses achieve unprecedented efficiency.
            </p>
          </div>
        </div>
      </motion.div>
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
        <motion.div 
          className="social-links"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.p 
          className="footer-text"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Created By Shreya Watve | 2025 All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
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