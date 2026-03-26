import React from 'react';
import './ExperienceTimeline.css';

interface Experience {
  companyName: string;
  jobTitle: string;
  roleLength: string;
  technologies: string[];
  duties: string[];
  jobDesc: string;
  companyLogoSrc: string;
  companyLink: string;
}

const experiences: Experience[] = [
  {
    companyLink: "https://www.cibc.com/en/about-cibc.html",
    jobTitle: "Mainframe Application Developer, Coop 🧑‍💻",
    companyName: "CIBC",
    companyLogoSrc: "/CIBC_logo.png",
    technologies: ["REXX", "DB2", "Cobol", "JCL", "SQL", "SDLC", "IBM Mainframe"],
    duties: ["Mainframe Engineer"],
    jobDesc: "Modernized legacy systems and improved batch processing efficiency for financial data transactions using REXX, JCL, and Cobol.",
    roleLength: "Fall 2025",
  },
  {
    companyLink: "https://www.microsoft.com/en-ca/about",
    jobTitle: "Software Engineer, Intern 🧑‍💻",
    companyName: "Microsoft",
    companyLogoSrc: "/Microsoft_logo.svg",
    technologies: ["JavaScript", "TypeScript", "Azure DevOps", "GraphQL", "React-Relay", "Redux", "Linux", "Jest"],
    duties: ["Software Engineer"],
    jobDesc: "In my recent role at Microsoft, I integrated a social media feature within Microsoft Teams and Viva Engage, enabling users to better customize profiles and strengthen their branding. This involved creating dynamic UI components with TypeScript and React-Relay, and integrating them with GraphQL APIs for efficient data handling. I also utilized Azure DevOps for CI/CD workflows in conjunction with Git, and wrote comprehensive unit tests to ensure the delivery of high-quality, reliable code.", 
    roleLength: "Jun 2025 - Aug 2025",
  },
  {
    companyLink: "https://www.aboutamazon.com/what-we-do/amazon-web-services",
    jobTitle: "Software Engineer, Intern 🧑‍💻",
    companyName: "Amazon Web Services",
    companyLogoSrc: "/amazon_dark.svg",
    technologies: ["Java", "AWS Cloudformation", "AWS CDK", "TypeScript", "React", "Docker", "DynamoDB"],
    duties: ["Software Engineer", "Full-Stack Engineer"],
    jobDesc: "Specialized in Cloud Development and Full-Stack Development, deigning a scalable cloud resource management feature enhancing CodeCatalyst and working on the AWS backend improving performance and metrics, enabling DevOps teams to test software more efficiently.",
    roleLength: "Jun 2023 - Sep 2023",
  }
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-left">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot">
                  <img src={exp.companyLogoSrc} alt={exp.companyName} className="company-icon" />
                </div>
                {index !== experiences.length - 1 && <div className="timeline-connector"></div>}
              </div>
            </div>
            
            <div className="timeline-content-card">
              <div className="card-glow"></div>
              <div className="timeline-header">
                <div>
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="company-link">
                    <h3 className="company-name">{exp.companyName}</h3>
                  </a>
                  <h4 className="role-title">{exp.jobTitle}</h4>
                </div>
                <span className="duration-pill">{exp.roleLength}</span>
              </div>

              <p className="job-description">{exp.jobDesc}</p>

              <div className="tech-stack">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};