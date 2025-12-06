
import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="logo-placeholder">PP</div>
            <h2>Prasad Patil</h2>
          </div>
          <p className="footer-description">
            Web Developer, AI Developer, and Flask Developer passionate about creating innovative solutions.
          </p>
          <div className="social-links">
            <a href="https://github.com/prasad-patil22" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prasad-patil-614a6b330/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/prasad2209/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <SiLeetcode />
            </a>
            <a href="mailto:patilprasad3808@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#web-development">Web Development</a></li>
            <li><a href="#ai-development">AI Development</a></li>
            <li><a href="#flask-development">Flask Development</a></li>
            <li><a href="#consulting">Consulting</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <a href="tel:+91 8549076433" className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 8549076433</span>
            </a>
            <a href="mailto:patilprasad3808@gmail.com" className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>patilprasad3808@gmail.com</span>
            </a>
            <a href="https://wa.me/918549076433" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <span>Message me directly</span>
            </a>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>A/P: Haragapur tal: Hukkeri<br />Dist: Belagavi, Karnataka, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Prasad Patil. All Rights Reserved.</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 60px 0 30px;
          color: rgba(255, 255, 255, 0.7);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: 50%;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(#3b82f6, transparent);
          opacity: 0.05;
          filter: blur(30px);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .footer-section h3 {
          color: #ffffff;
          margin-bottom: 20px;
          font-size: 18px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-section h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .logo-placeholder {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          color: white;
          margin-right: 15px;
        }

        .footer-logo h2 {
          font-size: 24px;
          background: linear-gradient(45deg, #f8fafc, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .footer-description {
          line-height: 1.6;
          margin-bottom: 25px;
          max-width: 300px;
          color: #cbd5e1;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(15, 23, 42, 0.5);
          color: #94a3b8;
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-links a:hover {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
          font-size: 0.95rem;
        }

        .footer-links a:hover {
          color: #3b82f6;
        }

        .footer-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }

        .footer-links a:hover::after {
          width: 100%;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .contact-item:hover {
          color: #3b82f6;
        }

        .contact-icon {
          color: #3b82f6;
          font-size: 1rem;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 50px;
          padding-top: 20px;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-bottom-content p {
          color: #94a3b8;
          margin: 0;
          font-size: 0.9rem;
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .legal-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.9rem;
        }

        .legal-links a:hover {
          color: #3b82f6;
        }

        .legal-links span {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 30px;
          }
          
          .footer-section h3::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .footer-logo {
            justify-content: center;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .contact-info {
            align-items: center;
          }

          .contact-item {
            justify-content: center;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 40px 0 20px;
          }

          .footer-content {
            padding: 0 15px;
            gap: 25px;
          }

          .footer-section h3 {
            font-size: 1.1rem;
          }

          .footer-logo h2 {
            font-size: 1.3rem;
          }

          .logo-placeholder {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;