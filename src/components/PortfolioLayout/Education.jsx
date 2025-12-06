// import React from "react";
// import { Card, Row, Col } from "antd";
// import { RiGraduationCapLine } from "react-icons/ri";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Education = () => {
//   const educationData = [
//     {
//       year: "Pursuing (2025-2027)",
//       title: "Master of Computer Applications (MCA)",
//       institution: "Presidency College of Autonomous Bangalore",
//       description: "Specializing in Advanced Computer Applications, Software Development, and Emerging Technologies",
//       status: "pursuing",
//       type: "college"
//     },
//     {
//       year: "2022-2025",
//       title: "Bachelor of Computer Applications (BCA)",
//       institution: "Rani Channamma University (RCU)",
//       description: "Specialization in Software Development, Database Management, and Web Technologies",
//       type: "college"
//     },
//     {
//       year: "2020-2022",
//       title: "Pre-University Course (PUC)",
//       institution: "SJPN Trust's PU Science and Commerce College Nidasoshi",
//       description: "Science Stream (PCMCs) - Physics, Chemistry, Mathematics, Computer Science",
//       type: "school"
//     },
//     {
//       year: "2020",
//       title: "Secondary School (10th Standard)",
//       institution: "Karnataka Secondary Education Examination Board",
//       description: "Completed with focus on Mathematics, Science, and Computer Education",
//       type: "school"
//     }
//   ];

//   React.useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100
//     });
//   }, []);

//   return (
//     <div className="education-section">
//       <div className="education-section-header">
//         <div className="education-section-icon" data-aos="fade-up" data-aos-delay="200">
//           <RiGraduationCapLine />
//         </div>
//         <h2
//           className="education-section-title"
//           data-aos="fade-up"
//           data-aos-delay="300"
//         >
//           Education
//         </h2>
//         <p
//           className="education-section-subtitle"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           My academic journey and continuous learning path
//         </p>
//       </div>

//       <div className="education-content">
//         <Row gutter={[40, 40]}>
//           {educationData.map((edu, index) => (
//             <Col xs={24} md={12} key={index}>
//               <div
//                 className={`education-card ${edu.status === 'pursuing' ? 'pursuing' : ''}`}
//                 data-aos="fade-up"
//                 data-aos-delay={500 + (index * 100)}
//               >
//                 <Card className="education-item-card">
//                   <div className="education-header">
//                     <div className="education-year">
//                       <span className="year-badge">{edu.year}</span>
//                       {edu.status === 'pursuing' && (
//                         <span className="pursuing-badge">Pursuing</span>
//                       )}
//                     </div>
//                     <div className="education-type">
//                       {edu.type === 'college' ? 'College' : 'School'}
//                     </div>
//                   </div>
                  
//                   <div className="education-body">
//                     <h3 className="education-title">{edu.title}</h3>
//                     <p className="education-institution">{edu.institution}</p>
//                     <p className="education-description">{edu.description}</p>
                    
//                     {edu.status === 'pursuing' && (
//                       <div className="pursuing-highlight">
//                         <div className="highlight-dot"></div>
//                         <span>Currently pursuing with focus on practical applications</span>
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="education-footer">
//                     {edu.type === 'college' ? (
//                       <span className="education-tag">Higher Education</span>
//                     ) : (
//                       <span className="education-tag school">School Education</span>
//                     )}
//                   </div>
//                 </Card>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </div>

//       <style jsx>{`
//         .education-section {
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
//           color: #fff;
//           padding: 100px 5%;
//           position: relative;
//           overflow: hidden;
//         }
        
//         .education-section-header {
//           text-align: center;
//           margin-bottom: 60px;
//           position: relative;
//           z-index: 1;
//         }
        
//         .education-section-icon {
//           font-size: 3rem;
//           background: linear-gradient(45deg, #3b82f6, #8b5cf6);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           margin-bottom: 20px;
//         }
        
//         .education-section-title {
//           font-size: 3rem;
//           margin-bottom: 15px;
//           background: linear-gradient(45deg, #f8fafc, #94a3b8);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//         }
        
//         .education-section-subtitle {
//           color: #cbd5e1;
//           font-size: 1.2rem;
//           max-width: 600px;
//           margin: 0 auto;
//           font-weight: 300;
//         }
        
//         /* Education Card */
//         .education-card {
//           height: 100%;
//         }
        
//         .education-card.pursuing .education-item-card {
//           border: 2px solid rgba(59, 130, 246, 0.4);
//           background: rgba(30, 41, 59, 0.9);
//           box-shadow: 0 10px 40px rgba(59, 130, 246, 0.15);
//         }
        
//         .education-item-card {
//           background: rgba(30, 41, 59, 0.7);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 20px;
//           backdrop-filter: blur(10px);
//           height: 100%;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }
        
//         .education-item-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 4px;
//           background: linear-gradient(90deg, #3b82f6, #8b5cf6);
//           opacity: 0.8;
//         }
        
//         .education-item-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
//           border-color: rgba(59, 130, 246, 0.2);
//         }
        
//         .education-card.pursuing .education-item-card:hover {
//           box-shadow: 0 20px 60px rgba(59, 130, 246, 0.25);
//         }
        
//         .education-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           margin-bottom: 20px;
//           flex-wrap: wrap;
//           gap: 10px;
//         }
        
//         .education-year {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
        
//         .year-badge {
//           background: linear-gradient(45deg, #3b82f6, #8b5cf6);
//           color: white;
//           padding: 6px 16px;
//           border-radius: 20px;
//           font-size: 0.9rem;
//           font-weight: 600;
//           display: inline-block;
//         }
        
//         .pursuing-badge {
//           background: linear-gradient(45deg, #10b981, #059669);
//           color: white;
//           padding: 4px 12px;
//           border-radius: 15px;
//           font-size: 0.8rem;
//           font-weight: 600;
//           animation: pulse 2s infinite;
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }
        
//         .education-type {
//           color: #94a3b8;
//           font-size: 0.9rem;
//           background: rgba(148, 163, 184, 0.1);
//           padding: 4px 12px;
//           border-radius: 12px;
//           border: 1px solid rgba(148, 163, 184, 0.2);
//         }
        
//         .education-body {
//           margin-bottom: 20px;
//         }
        
//         .education-title {
//           color: #f1f5f9;
//           font-size: 1.4rem;
//           font-weight: 700;
//           margin-bottom: 12px;
//           line-height: 1.3;
//         }
        
//         .education-card.pursuing .education-title {
//           background: linear-gradient(45deg, #60a5fa, #3b82f6);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
        
//         .education-institution {
//           color: #3b82f6;
//           font-size: 1.1rem;
//           font-weight: 600;
//           margin-bottom: 15px;
//           padding-bottom: 10px;
//           border-bottom: 1px solid rgba(59, 130, 246, 0.2);
//         }
        
//         .education-description {
//           color: #cbd5e1;
//           line-height: 1.6;
//           margin-bottom: 15px;
//           font-size: 0.95rem;
//         }
        
//         .pursuing-highlight {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-top: 15px;
//           padding: 12px;
//           background: rgba(59, 130, 246, 0.1);
//           border-radius: 10px;
//           border: 1px solid rgba(59, 130, 246, 0.2);
//         }
        
//         .highlight-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: #3b82f6;
//           animation: blink 1.5s infinite;
//         }
        
//         @keyframes blink {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }
        
//         .pursuing-highlight span {
//           color: #60a5fa;
//           font-size: 0.9rem;
//           font-weight: 500;
//         }
        
//         .education-footer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding-top: 15px;
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//         }
        
//         .education-tag {
//           background: rgba(59, 130, 246, 0.15);
//           color: #60a5fa;
//           padding: 6px 12px;
//           border-radius: 10px;
//           font-size: 0.85rem;
//           font-weight: 500;
//         }
        
//         .education-tag.school {
//           background: rgba(139, 92, 246, 0.15);
//           color: #a78bfa;
//         }
        
//         /* Responsive Design */
//         @media (max-width: 992px) {
//           .education-card {
//             margin-bottom: 30px;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .education-section-title {
//             font-size: 2.2rem;
//           }
          
//           .education-item-card {
//             padding: 20px;
//           }
          
//           .education-title {
//             font-size: 1.3rem;
//           }
          
//           .education-institution {
//             font-size: 1rem;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .education-section-title {
//             font-size: 2rem;
//           }
          
//           .education-header {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 10px;
//           }
          
//           .education-year {
//             flex-direction: column;
//             align-items: flex-start;
//           }
          
//           .education-title {
//             font-size: 1.2rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Education;

import React from "react";
import { Card, Row, Col } from "antd";
import { 
  RiGraduationCapLine, 
  RiCalendarLine,
  RiBookOpenLine,
  RiSchoolLine
} from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Masters of Computer Applications (MCA)",
      institution: "Presidency College Of Autonomous Bengaluru , Karnataka",
      duration: "2025-2027",
      icon: <FaUniversity />,
      color: "#3B82F6",
      status: "Pursuing"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "SJPN  Trust's Degree College, Nidasoshi Belagavi , Karnataka",
      duration: "2022-2025",
      icon: <RiGraduationCapLine />,
      color: "#8B5CF6",
      status: "Completed"
    },
    {
      id: 3,
      degree: "Pre-University (PU) - Science",
      institution: "SJPN  Trust's PU College, Nidasoshi Belagavi , Karnataka",
      duration: "2020-2022",
      icon: <RiSchoolLine />,
      color: "#10B981",
      status: "Completed"
    }
  ];

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="education-section">
      <div className="education-section-header">
        <div className="header-icon" data-aos="fade-up">
          <RiBookOpenLine />
        </div>
        <h2 className="education-title" data-aos="fade-up" data-aos-delay="100">
          Education
        </h2>
        <p className="education-subtitle" data-aos="fade-up" data-aos-delay="200">
          My academic journey and qualifications
        </p>
      </div>

      <div className="education-content">
        <Row gutter={[30, 30]} justify="center">
          {educationData.map((item, index) => (
            <Col xs={24} md={12} lg={8} key={item.id}>
              <div 
                className="education-card-wrapper"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
              >
                <Card className={`education-card ${item.status === 'Pursuing' ? 'pursuing' : ''}`}>
                  {/* Header with Icon and Degree */}
                  <div className="card-header">
                    <div className="degree-icon" style={{ background: item.color }}>
                      {item.icon}
                    </div>
                    <div className="degree-info">
                      <div className="status-badge">
                        {item.status}
                      </div>
                      <h3 className="degree-title">{item.degree}</h3>
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="institution-container">
                    <p className="institution">{item.institution}</p>
                  </div>

                  {/* Duration */}
                  <div className="duration-container">
                    <div className="duration-item">
                      <div className="duration-label">
                        <RiCalendarLine className="duration-icon" />
                        <span>DURATION</span>
                      </div>
                      <div className="duration-value">{item.duration}</div>
                    </div>
                    
                    {/* Progress Indicator for Pursuing */}
                    {/* {item.status === 'Pursuing' && (
                      <div className="progress-indicator">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ background: item.color }}
                          ></div>
                        </div>
                        <span className="progress-text">In Progress</span>
                      </div>
                    )} */}
                  </div>

                  {/* Key Focus Area */}
                  
                    
                  
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <style jsx>{`
        .education-section {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          color: #fff;
          padding: 80px 5%;
          position: relative;
          overflow: hidden;
        }

        .education-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(59, 130, 246, 0.3), 
            transparent
          );
        }

        .education-section-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .header-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .education-title {
          font-size: 2.8rem;
          margin-bottom: 15px;
          background: linear-gradient(45deg, #F8FAFC, #94A3B8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .education-subtitle {
          color: #CBD5E1;
          font-size: 1.1rem;
          max-width: 400px;
          margin: 0 auto;
          font-weight: 300;
        }

        /* Education Card */
        .education-card-wrapper {
          height: 100%;
        }

        .education-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          height: 100%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3B82F6, #8B5CF6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .education-card:hover::before {
          opacity: 1;
        }

        .education-card.pursuing {
          border: 1px solid rgba(59, 130, 246, 0.4);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }

        /* Card Header */
        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .degree-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .education-card:hover .degree-icon {
          transform: scale(1.05);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
        }

        .degree-info {
          flex: 1;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 10px;
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .education-card.pursuing .status-badge {
          background: rgba(59, 130, 246, 0.15);
          color: #3B82F6;
          border-color: rgba(59, 130, 246, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .degree-title {
          color: #F1F5F9;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.4;
        }

        /* Institution */
        .institution-container {
          margin-bottom: 25px;
          padding: 20px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .education-card:hover .institution-container {
          background: rgba(15, 23, 42, 0.7);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .institution {
          color: #E2E8F0;
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
          line-height: 1.6;
        }

        /* Duration Container */
        .duration-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 25px;
        }

        .duration-item {
          padding: 18px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .education-card:hover .duration-item {
          background: rgba(15, 23, 42, 0.7);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .duration-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: #94A3B8;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .duration-icon {
          font-size: 1.1rem;
          color: #3B82F6;
        }

        .duration-value {
          color: #F1F5F9;
          font-size: 1.1rem;
          font-weight: 700;
          text-align: center;
          padding: 8px 0;
          background: rgba(30, 41, 59, 0.5);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Progress Indicator */
        .progress-indicator {
          padding: 18px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .progress-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .progress-fill {
          height: 100%;
          width: 40%;
          border-radius: 3px;
          animation: loading 2s ease-in-out infinite;
        }

        @keyframes loading {
          0%, 100% { width: 40%; }
          50% { width: 60%; }
        }

        .progress-text {
          color: #3B82F6;
          font-size: 0.85rem;
          font-weight: 600;
          display: block;
          text-align: center;
        }

        /* Focus Area */
        .focus-area {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 15px;
          background: rgba(15, 23, 42, 0.3);
          border-radius: 15px;
          border: 1px dashed rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .education-card:hover .focus-area {
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(15, 23, 42, 0.5);
        }

        .focus-icon {
          font-size: 1.2rem;
        }

        .focus-text {
          color: #CBD5E1;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .education-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .education-section {
            padding: 60px 5%;
          }

          .education-title {
            font-size: 2.2rem;
          }

          .header-icon {
            font-size: 2.5rem;
          }

          .card-header {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .degree-icon {
            width: 70px;
            height: 70px;
            font-size: 2rem;
          }

          .degree-title {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 480px) {
          .education-title {
            font-size: 2rem;
          }

          .education-subtitle {
            font-size: 1rem;
          }

          .degree-icon {
            width: 60px;
            height: 60px;
            font-size: 1.8rem;
          }

          .degree-title {
            font-size: 1.2rem;
          }

          .duration-container {
            gap: 15px;
          }

          .duration-item,
          .progress-indicator {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Education;