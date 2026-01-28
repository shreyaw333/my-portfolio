import React from 'react';
import { Home, User, Briefcase, FolderOpen, Code2, GraduationCap, Award, Mail } from 'lucide-react';

const VerticalNav = () => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About Me' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'techstack', icon: Code2, label: 'Tech Stack' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
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

export default VerticalNav;