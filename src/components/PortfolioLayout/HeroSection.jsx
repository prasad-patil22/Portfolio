
import React, { useState, useEffect } from 'react';
import { FaDownload, FaEye, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './HeroSection.css';
import Project from './Projects';
import Tech from './Tech';
import About from './About';
import Experience from './Experience';
import { SiLeetcode } from 'react-icons/si';
import Contact from './Conatct';
import Education from './Education';

const MemoProject = React.memo(Project);
const MemoTech = React.memo(Tech);
const MemoAbout = React.memo(About);
const MemoEdu = React.memo(Education);
const MemoExperience = React.memo(Experience);
const MemoContact = React.memo(Contact);

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['MERN Stack Developer', 'Flask Developer', 'AI/ML Enthusiast'];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(prev =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
    // NOTE: we intentionally keep the same dependencies as your original code
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <div>
      <section id="home" className="hero" style={{paddingTop:"40px"}}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text-content">
              <h4 className="hero-welcome-text">Hello, I'm</h4>
              <h1 className="hero-name">Prasad</h1>
              <h2 className="hero-role">
                I'm a <span className="hero-typing-text">{text}</span>
                <span className="hero-cursor">|</span>
              </h2>
              <p className="hero-description">
                Passionate about creating innovative web solutions and exploring the possibilities of artificial intelligence and machine learning.
              </p>
              <div className="hero-button-group">
                <a
                  href={encodeURI(publicUrl + '/Prasad CV.pdf')}
                  download="Prasad CV.pdf"
                  className="hero-btn hero-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="hero-btn-icon" />
                  Download Resume
                </a>
                <a href="/contact" className="hero-btn hero-btn-secondary">
                  <FaPaperPlane className="hero-btn-icon" />
                  Contact Me
                </a>
                <a href="/projects" className="hero-btn hero-btn-outline">
                  <FaEye className="hero-btn-icon" />
                  View My Work
                </a>
              </div>
              <div className="hero-social-links">
                <a href="https://github.com/prasad-patil22" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/prasad-patil-614a6b330/" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://leetcode.com/u/prasad2209/" aria-label="LeetCode">
                  <SiLeetcode />
                </a>
              </div>
            </div>

            <div className="hero-image-content">
              <div className="hero-image-wrapper">
                <div className="hero-profile-image">
                  <img
                    src="profile.jpg"
                    alt="Prasad"
                  />
                </div>
                <div className="hero-floating-element hero-element-1"></div>
                <div className="hero-floating-element hero-element-2"></div>
                <div className="hero-floating-element hero-element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <MemoAbout />
      </div>
      <div>
        <MemoEdu />
      </div>
      <div>
        <MemoProject />
      </div>
      <MemoTech />
      
      <div>
        <MemoExperience />
      </div>
      <div>
        <MemoContact />
      </div>
    </div>
  );
};

export default HeroSection;
