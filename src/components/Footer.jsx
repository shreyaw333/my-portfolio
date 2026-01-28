import React from 'react';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    { icon: Mail, href: 'mailto:shreyawatve3@gmail.com', label: 'shreyawatve3@gmail.com', type: 'email' },
    { icon: Phone, href: 'tel:+12602406412', label: '(260) 240-6412', type: 'phone' },
    { icon: MapPin, href: '#', label: 'United States', type: 'location' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shreya-watve-b404171b2/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/shreyaw333', label: 'GitHub' },
  ];

  const sectionStyle = {
    padding: '6rem 2rem 4rem',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
    color: 'white'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem'
  };

  const contactCardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    textDecoration: 'none',
    color: 'white',
    transition: 'all 0.3s ease'
  };

  const iconContainerStyle = {
    width: '48px',
    height: '48px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  };

  const socialContainerStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem'
  };

  const socialLinkStyle = {
    width: '60px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '2px solid rgba(255, 255, 255, 0.3)'
  };

  const footerTextStyle = {
    textAlign: 'center',
    fontSize: '1rem',
    opacity: '0.8',
    margin: '0'
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          Contact Me
        </h2>
        
        <div style={contentStyle}>
          <div 
            style={contactCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Get In Touch
            </h3>
            
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                style={{
                  ...contactItemStyle,
                  ...(index === contactInfo.length - 1 ? { borderBottom: 'none' } : {})
                }}
                onMouseEnter={(e) => {
                  if (contact.type !== 'location') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderRadius = '12px';
                  }
                }}
                onMouseLeave={(e) => {
                  if (contact.type !== 'location') {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
                onClick={contact.type === 'location' ? (e) => e.preventDefault() : undefined}
                style={{
                  ...contactItemStyle,
                  ...(index === contactInfo.length - 1 ? { borderBottom: 'none' } : {}),
                  ...(contact.type === 'location' ? { cursor: 'default' } : { cursor: 'pointer' })
                }}
              >
                <div style={iconContainerStyle}>
                  <contact.icon size={24} />
                </div>
                <span style={{ fontSize: '1.1rem' }}>{contact.label}</span>
              </a>
            ))}
          </div>
          
          <div style={socialContainerStyle}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
              Let's Connect
            </h3>
            
            <div style={socialLinksStyle}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  title={social.label}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
            
            <p style={{ 
              textAlign: 'center', 
              fontSize: '1rem', 
              lineHeight: '1.6',
              opacity: '0.9' 
            }}>
              I'm always interested in new opportunities and collaborations in Software Engineering. 
              Feel free to reach out!
            </p>
          </div>
        </div>
        
        <p style={footerTextStyle}>
          Created By Shreya Watve | 2025 All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;