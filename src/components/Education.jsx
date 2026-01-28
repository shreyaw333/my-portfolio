import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      university: "Purdue University",
      duration: "August 2023 - May 2025",
      gpa: "3.7",
      logo: "/purdue.png",
      coursework: ['Machine Learning Systems', 'Data Analytics', 'Software Engineering', 'Operating Systems'],
      certificateLink: "https://drive.google.com/file/d/1ykl7IL6Ha62MABe3oDMvg1FFZ45_nbkZ/view?usp=sharing"
    },
    {
      degree: "Bachelor of Engineering in Information Science",
      university: "Bangalore Institute of Technology",
      duration: "August 2017 - July 2021",
      gpa: "3.7",
      logo: "/bit.png",
      coursework: ['Data Structures & Algorithms', 'Database Management', 'Computer Networks', 'Object-Oriented Programming', 'AI'],
      certificateLink: "https://drive.google.com/file/d/1gdu6jqx6TNrDtA7hxaDhYmV3pKMhWU4T/view?usp=sharing" 
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="section-content">
        <h2 className="section-title left-aligned">
          Education
        </h2>
        
        <div className="education-container">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <img 
                  src={edu.logo} 
                  alt={`${edu.university} logo`} 
                  className="university-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                <div className="education-info">
                  <div className="header-row">
                    <div>
                      <h3 className="degree-title">
                        {edu.degree}
                      </h3>
                      <div className="university-container">
                        <p className="university-name">
                          {edu.university}
                        </p>
                        <a 
                          href={edu.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="degree-link"
                          title="View Certificate"
                        >
                          Degree
                        </a>
                      </div>
                    </div>
                    
                    <div className="education-details">
                      <p className="duration">{edu.duration}</p>
                      <p className="gpa">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  
                  <div className="coursework-section">
                    <h4 className="coursework-title">Relevant Coursework:</h4>
                    <div className="coursework-tags">
                      {edu.coursework.map((course) => (
                        <span key={course} className="course-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;