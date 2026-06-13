import { useState, useEffect } from 'react';
import { 
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaQuoteaft,
  FaCode,
  FaLaptopCode,
  FaRobot,
  FaMobile,
  FaQuoteLeft
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const quotes = [
    {
      quote: "The best way to predict the future is to invent it. Let's build something amazing together.",
      author: "Full Stack Development",
      icon: <FaCode />
    },
    {
      quote: "Great web experiences are built on clean code and creative solutions. Your project deserves both.",
      author: "Web Development",
      icon: <FaLaptopCode />
    },
    {
      quote: "Innovation happens when vision meets execution. Share your vision, and I'll help bring it to life.",
      author: "AI & Technology",
      icon: <FaRobot />
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 8549076433", 
      link: "tel:+918549076433"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "patilprasad3808@gmail.com",
      link: "mailto:patilprasad3808@gmail.com"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "Message me directly",
      link: "https://wa.me/8549076433"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "A/P: Haragapur tal: Hukkeri Dist: Belagavi, Karnataka, India",
      link: "https://www.google.com/maps/place/Haragapur,+Karnataka/data=!4m2!3m1!1s0x3bc0930bc6a4934f:0x53a95d033bcd0fb?sa=X&ved=1t:242&ictx=111"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prasad-patil-614a6b330/", 
      color: "hover:text-blue-400"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/prasad-patil22",
      color: "hover:text-gray-400"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;
    
    const whatsappMessage = 
`Hello Prasad,
I'm ${name}. I came across your portfolio and wanted to get in touch.

Here's my message:
${message}

You can reach me at ${email}.
Thanks!
`.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918549076433?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const QuoteCard = ({ quote, index }) => (
    <div 
      className="quote-card"
      data-aos="fade-up"
      data-aos-delay={300 + (index * 100)}
    >
      <div className="quote-icon">
        <FaQuoteLeft />
      </div>
      <p className="quote-text">{quote.quote}</p>
      <div className="quote-footer">
        <div className="quote-author-icon">
          {quote.icon}
        </div>
        <span className="quote-author">- {quote.author}</span>
      </div>
    </div>
  );

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <div 
            className="header-icon"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaEnvelope />
          </div>
          <h1 
            className="contact-title"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Get In Touch
          </h1>
          <p 
            className="contact-subtitle"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          
          {/* Left Side - Quotes & Contact Info */}
          <div className="left-side">
            {/* Quotes Section */}
            <div 
              className="quotes-section"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <h2 className="section-title">Why Work With Me?</h2>
              <div className="quotes-grid">
                {quotes.map((quote, index) => (
                  <QuoteCard key={index} quote={quote} index={index} />
                ))}
              </div>
            </div>
         
            {/* Contact Information */}
            <div 
              className="contact-info-section"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <h2 className="section-title">Contact Information</h2>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="contact-info-item"
                    data-aos="fade-down"
                    data-aos-delay={700 + (index * 100)}
                  >
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <span className="contact-title">{info.title}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div 
                className="social-links"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <h3 className="social-title">Connect With Me</h3>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon ${social.color}`}
                      title={social.name}
                      data-aos="zoom-in"
                      data-aos-delay={900 + (index * 100)}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="right-side">
            <div 
              className="contact-form-section"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h2 className="section-title">Send Message</h2>
              <p className="form-subtitle">
                Messages will be sent directly to my WhatsApp for quick response
              </p>

              <form onSubmit={sendToWhatsApp} className="contact-form">
                <div 
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div 
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="650"
                >
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                </div>

                <div 
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div 
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="750"
                >
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Describe your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="button-icon" />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <p 
                  className="form-note"
                  data-aos="fade-up"
                  data-aos-delay="850"
                >
                  <FaPaperPlane className="note-icon" />
                  Your message will be sent directly to my WhatsApp for quick response
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          padding: 80px 5%;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #fff;
        }

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header-icon {
          font-size: 4rem;
          color: #3b82f6;
          margin-bottom: 20px;
        }

        .contact-title {
          font-size: 3.5rem;
          margin-bottom: 15px;
          background: linear-gradient(45deg, #f8fafc, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .contact-subtitle {
          color: #cbd5e1;
          font-size: 1.3rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Left Side Styles */
        .left-side {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .section-title {
          color: #f1f5f9;
          font-size: 1.8rem;
          margin-bottom: 25px;
          font-weight: 600;
          border-left: 4px solid #3b82f6;
          padding-left: 15px;
        }

        /* Quotes Section Styles */
        .quotes-section {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 30px;
        }

        .quotes-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
        }

        .quote-card {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 25px;
          position: relative;
          transition: all 0.3s ease;
        }

        .quote-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .quote-icon {
          color: #3b82f6;
          font-size: 1.5rem;
          margin-bottom: 15px;
          opacity: 0.7;
        }

        .quote-text {
          color: #cbd5e1;
          font-size: 1rem;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 15px;
        }

        .quote-footer {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quote-author-icon {
          color: #3b82f6;
          font-size: 1rem;
          display: flex;
          align-items: center;
        }

        .quote-author {
          color: #94a3b8;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Contact Info Styles */
        .contact-info-section {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 30px;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .contact-info-item:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .contact-icon {
          color: #3b82f6;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
        }

        .contact-title {
          color: #94a3b8;
          font-size: 0.85rem;
          margin-bottom: 4px;
          border: none;
          padding: 0;
        }

        .contact-value {
          color: #f1f5f9;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .social-links {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-title {
          color: #cbd5e1;
          font-size: 1rem;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .social-icon {
          color: #94a3b8;
          font-size: 1.8rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .social-icon:hover {
          transform: translateY(-2px);
        }

        .social-icon:hover:nth-child(1) {
          color: #0077b5; /* LinkedIn blue */
        }

        .social-icon:hover:nth-child(2) {
          color: #f0f6fc; /* GitHub white */
        }

        /* Right Side Styles */
        .right-side {
          position: sticky;
          top: 100px;
        }

        .contact-form-section {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 40px;
        }

        .form-subtitle {
          color: #94a3b8;
          margin-bottom: 30px;
          font-size: 0.95rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          color: #f1f5f9;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .form-input, .form-textarea {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px 16px;
          color: #f1f5f9;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #64748b;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        .submit-button {
          background: linear-gradient(45deg, #25D366, #128C7E);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 15px 30px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .submit-button:hover:not(.submitting) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
        }

        .submit-button.submitting {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .button-icon {
          font-size: 1.1rem;
        }

        .loading-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .form-note {
          color: #94a3b8;
          font-size: 0.85rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 15px;
        }

        .note-icon {
          font-size: 0.8rem;
          color: #3b82f6;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .right-side {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 5%;
          }

          .contact-title {
            font-size: 2.5rem;
          }

          .contact-form-section {
            padding: 30px 25px;
          }

          .quotes-section {
            padding: 25px 20px;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .contact-info-item {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .social-icons {
            gap: 15px;
          }

          .quote-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;