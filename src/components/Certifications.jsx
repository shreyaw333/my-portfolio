import React, { useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';
import '../styles/Certifications.css';

const Certifications = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-content">
        <h2 className="section-title left-aligned">
          Certifications
        </h2>
        
        <div className="certification-container">
          <div className="certification-card">
            <div 
              className="certification-image"
              onClick={() => setShowModal(true)}
              title="Click to view full certificate"
            >
              <img 
                src="/certificate.png" 
                alt="AWS Cloud Practitioner Certificate" 
                className="cert-img"
              />
              <div className="view-certificate-overlay">
                <span>Click to View</span>
              </div>
            </div>
            
            <div className="certification-info">
              <div className="certification-header">
                <div>
                  <h3 className="certification-title">
                    AWS Certified Cloud Practitioner (CLF-C02)
                  </h3>
                  <p className="certification-date">February 2025</p>
                </div>
                
                <a 
                  href="https://www.credly.com/badges/53ccbb2a-dd86-4637-a0e8-0874db9ee34c/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credly-link"
                  title="View on Credly"
                >
                  <ExternalLink size={16} />
                  Verify on Credly
                </a>
              </div>
              
              <div className="verified-badge">
                <Award size={18} />
                <span>Verified Digital Badge</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full certificate view */}
      {showModal && (
        <div className="certificate-modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            <img 
              src="/certificate.png" 
              alt="AWS Cloud Practitioner Certificate - Full View" 
              className="modal-certificate-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;