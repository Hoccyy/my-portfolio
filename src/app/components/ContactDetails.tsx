import './ContactDetails.css';

const ContactDetails: React.FC = () => {
  const DRIVE_ID = "1O4cXXNgMqks6eakNn5fM6MG8O5aYEvWb";
  const GITHUB_URL = "https://github.com/hoccyy";
  const LINKEDIN_URL = "https://linkedin.com/in/hoccyy";
  const EMAIL = "hocianw@gmail.com";

  return (
    <section className="contact-details-section">
      {/* Header Section */}
      <div className="portfolio-header">
        <div className="title-area">
          <h2 className="header-title">The Paperwork</h2>
          <p className="subtitle">Grab the latest version of my resume or find me online.</p>
        </div>
        <div className="action-links">
          <a 
            href={`https://drive.google.com/file/d/${DRIVE_ID}/view`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            View
          </a>
          <a 
            href={`https://drive.google.com/uc?export=download&id=${DRIVE_ID}`} 
            className="btn-primary"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Socials & Links Grid */}
      <div className="links-grid">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="link-card">
          <div className="link-content">
            <span className="link-label">GitHub</span>
            <span className="link-sub">My recent builds</span>
          </div>
          <div className="arrow">↗</div>
        </a>

        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="link-card">
          <div className="link-content">
            <span className="link-label">LinkedIn</span>
            <span className="link-sub">Experience & network</span>
          </div>
          <div className="arrow">↗</div>
        </a>

        <a href={`mailto:${EMAIL}`} className="link-card full-width">
          <div className="link-content">
            <span className="link-label">Email</span>
            <span className="link-sub">{EMAIL}</span>
          </div>
          <div className="arrow">↗</div>
        </a>
      </div>
    </section>
  );
};

export default ContactDetails;