
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('feb-jun-2025');

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const experienceData = {
    company: "Ligand Software Solution",
    overallDuration: "February 2025- Present",
    
    timeline: [
      {
        id: 'feb-jun-2025',
        period: "February 2025- June 2025",
        title: "Final Year Internship",
        role: "MERN Stack Developer Intern",
        type: "Full-time Internship",
        location: "On-site",
        status: "Completed",
        description: "Completed my final year BCA internship, working on diverse technology stacks and gaining hands-on experience in real-world projects.",
        technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Python", "Flask", "Git & GitHub"],
        achievements: [
          "Worked on multiple client projects simultaneously",
          "Learned industry best practices and coding standards",
          "Gained experience in both frontend and backend development",
          "Participated in team meetings and project planning"
        ],
        projects: [
          {
            name: "Company Internal Tools",
            // type: "Internal Project",
            description: "Developed internal management tools for project tracking and team collaboration"
          }
        ]
      },
      {
        id: 'jun-oct-2025',
        period: "June 2025- October 2025",
        title: "Extended Internship",
        role: "MERN Stack Developer",
        type: "Full-time Internship",
        location: "On-site",
        status: "Completed",
        description: "Continued working as an intern after completing BCA, taking on more responsibilities and working on advanced projects including AI/ML and Blockchain.",
        technologies: ["Next.js", "TypeScript", "TensorFlow", "Blockchain", "IoT", "AWS", "Docker"],
        achievements: [
          "Worked on AI/ML projects including computer vision applications",
          "Gained experience in Blockchain and IoT development",
          "Improved existing projects with new features and optimizations",
          "Mentored new interns and participated in code reviews"
        ],
        projects: [
          {
            name: "AI-Powered Analytics Dashboard",
            type: "Client Project",
            description: "Built analytics dashboard with machine learning predictions"
          }
        ]
      },
      {
        id: 'oct-present',
        period: "October 2025- Present",
        title: "Hybrid Work Period",
        role: "MERN Stack Developer",
        type: "Part-time Employment",
        location: "Hybrid",
        status: "Currently Working",
        description: "Continuing with the company while pursuing MCA studies. Working in hybrid model with flexible hours, contributing to ongoing projects and maintenance.",
        technologies: ["React.js", "Node.js", "MongoDB", "REST APIs", "Cloud Deployment"],
        achievements: [
          "Successfully balancing work and MCA studies",
          "Maintaining and updating existing projects",
          "Working on new feature development",
          "Remote collaboration with team members"
        ],
        projects: [
          {
            name: "Project Maintenance & Updates",
            type: "Maintenance",
            description: "Regular updates and feature additions to existing projects"
          }
        ]
      }
    ],

    hostedProjects: [
      {
        name: "Ligand Software Official Website",
        url: "https://www.ligand-softwares.vercel.app",
        description: "Company's official website built with modern technologies",
        technologies: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
        status: "Live ",
        image: "/Projects/ligand-website.png"
      },
      {
        name: "Guraj Foundation NGO",
        url: "https://www.gururajfoundation.com",
        description: "NGO website with donation system and event management",
        technologies: ["MERN Stack", "Payment Gateway", "Cloud Storage"],
        status: "Live ",
        image: "/Projects/Gururaj-Foundation-website.png"
      }
    ]
  };

  const currentExperience = experienceData.timeline.find(item => item.id === selectedPeriod);

  return (
    <section className="experience-section">
      <div className="experience-container">
        
        {/* Header */}
        <div className="experience-header">
          <h1 
            className="experience-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Work Experience
          </h1>
          <div 
            className="company-overview"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="company-name">{experienceData.company}</h2>
            <p className="overview-duration">{experienceData.overallDuration}</p>
          </div>
        </div>

        <div className="experience-content">
          
          {/* Left Side - Timeline & Details */}
          <div className="left-side">
            
            {/* Timeline Navigation */}
            <div 
              className="timeline-nav"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {experienceData.timeline.map((period, index) => (
                <div key={period.id} className="timeline-item">
                  <div className="timeline-connector">
                    <div className="timeline-dot"></div>
                    {index < experienceData.timeline.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                  <button
                    className={`period-button ${selectedPeriod === period.id ? 'active' : ''}`}
                    onClick={() => setSelectedPeriod(period.id)}
                    data-aos="fade-up"
                    data-aos-delay={500 + (index * 100)}
                  >
                    <span className="period-title">{period.title}</span>
                    <span className="period-duration">{period.period}</span>
                    <span className={`period-status ${period.status.toLowerCase().replace(' ', '-')}`}>
                      {period.status}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Experience Details */}
            {currentExperience && (
              <div 
                className="experience-details"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="details-header">
                  <h3 className="details-role">{currentExperience.role}</h3>
                  <div className="details-meta">
                    <span className="meta-type">{currentExperience.type}</span>
                    <span className="meta-location">{currentExperience.location}</span>
                  </div>
                </div>

                <p className="details-description">{currentExperience.description}</p>

                {/* Technologies */}
                <div className="technologies-section">
                  <h4>Technologies Used</h4>
                  <div className="technologies-grid">
                    {currentExperience.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="tech-tag"
                        data-aos="zoom-in"
                        data-aos-delay={700 + (index * 50)}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="achievements-section">
                  <h4>Key Achievements</h4>
                  <ul className="achievements-list">
                    {currentExperience.achievements.map((achievement, index) => (
                      <li 
                        key={index} 
                        className="achievement-item"
                        data-aos="fade-up"
                        data-aos-delay={800 + (index * 100)}
                      >
                        <span className="achievement-icon">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects during this period */}
                <div className="period-projects">
                  <h4>Projects Worked On</h4>
                  <div className="projects-list">
                    {currentExperience.projects.map((project, index) => (
                      <div 
                        key={index} 
                        className="project-item"
                        data-aos="fade-up"
                        data-aos-delay={900 + (index * 100)}
                      >
                        <span className="project-name">{project.name}</span>
                        {/* <span className="project-type">{project.type}</span> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Hosted Projects */}
          <div className="right-side">
            <div 
              className="hosted-projects"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="projects-title">Live Hosted Projects</h3>
              <p className="projects-subtitle">Projects I've developed and deployed</p>
              
              <div className="projects-grid">
                {experienceData.hostedProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="project-card"
                    data-aos="zoom-in"
                    data-aos-delay={500 + (index * 200)}
                  >
                    <div className="project-image">
                      <img src={project.image} alt={project.name} />
                    </div>
                    <div className="project-content">
                      <div className="project-header">
                        <h4 className="project-name">{project.name}</h4>
                        <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="tech-tag-small"
                            data-aos="zoom-in"
                            data-aos-delay={600 + (techIndex * 50)}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div 
                className="more-projects"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <p>View more projects in my portfolio section</p>
                <a href="/projects" className="view-more-btn">View All Projects</a>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        .experience-section {
          min-height: 100vh;
          padding: 80px 5%;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #fff;
        }

        .experience-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .experience-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header-icon {
          font-size: 4rem;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }

        .experience-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #f8fafc, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .company-overview {
          margin-top: 20px;
        }

        .company-name {
          font-size: 2rem;
          color: #f1f5f9;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .overview-duration {
          color: #3b82f6;
          font-size: 1.2rem;
          font-weight: 500;
        }

        .experience-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 60px;
          align-items: start;
        }

        /* Left Side Styles */
        .left-side {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .timeline-item {
          display: flex;
          align-items: stretch;
        }

        .timeline-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 20px;
          position: relative;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #374151;
          border: 3px solid #1e293b;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .timeline-line {
          flex: 1;
          width: 2px;
          background: #374151;
          margin: 2px 0;
        }

        .period-button {
          flex: 1;
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .period-button:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .period-button.active {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .period-button.active .timeline-dot {
          background: #3b82f6;
          transform: scale(1.2);
        }

        .period-title {
          color: #f1f5f9;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .period-duration {
          color: #3b82f6;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .period-status {
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          align-self: flex-start;
        }

        .period-status.completed {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .period-status.currently-working {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        /* Experience Details */
        .experience-details {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 30px;
        }

        .details-header {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .details-role {
          color: #f1f5f9;
          font-size: 1.5rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .details-meta {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .meta-type, .meta-location {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .details-description {
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1rem;
        }

        .technologies-section,
        .achievements-section,
        .period-projects {
          margin-bottom: 25px;
        }

        .technologies-section h4,
        .achievements-section h4,
        .period-projects h4 {
          color: #f1f5f9;
          font-size: 1.1rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .technologies-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 6px;
          padding: 6px 12px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
        }

        .achievement-item {
          color: #cbd5e1;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.5;
        }

        .achievement-icon {
          color: #22c55e;
          font-weight: bold;
          flex-shrink: 0;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .project-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .project-name {
          color: #f1f5f9;
          font-weight: 500;
        }

        .project-type {
          background: rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.8rem;
        }

        /* Right Side Styles */
        .right-side {
          position: sticky;
          top: 100px;
        }

        .hosted-projects {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 30px;
        }

        .projects-title {
          color: #f1f5f9;
          font-size: 1.5rem;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .projects-subtitle {
          color: #94a3b8;
          margin-bottom: 25px;
          font-size: 0.9rem;
        }

        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 25px;
        }

        .project-card {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 150px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-content {
          padding: 20px;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
          gap: 10px;
        }

        .project-name {
          color: #f1f5f9;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .project-status {
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .project-status.live-&-maintained {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .project-description {
          color: #cbd5e1;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 15px;
        }

        .tech-tag-small {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 4px;
          padding: 3px 8px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .project-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          color: #60a5fa;
        }

        .more-projects {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .more-projects p {
          color: #94a3b8;
          margin-bottom: 15px;
          font-size: 0.9rem;
        }

        .view-more-btn {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          padding: 8px 16px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .view-more-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-1px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .experience-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .right-side {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .experience-section {
            padding: 60px 5%;
          }

          .experience-title {
            font-size: 2.5rem;
          }

          .company-name {
            font-size: 1.5rem;
          }

          .timeline-item {
            flex-direction: column;
          }

          .timeline-connector {
            flex-direction: row;
            margin-right: 0;
            margin-bottom: 10px;
            align-items: center;
          }

          .timeline-line {
            width: 100%;
            height: 2px;
            margin: 0 5px;
          }

          .period-button {
            margin-bottom: 15px;
          }
        }

        @media (max-width: 480px) {
          .experience-title {
            font-size: 2rem;
          }

          .details-meta {
            flex-direction: column;
            gap: 8px;
          }

          .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;