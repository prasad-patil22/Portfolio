
// import { useState, useEffect } from 'react';
// import { FaBriefcase, FaEye, FaStreetView } from 'react-icons/fa';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [visibleCounts, setVisibleCounts] = useState({
//     "Live Projects": 3,
//     "AI Projects": 3
//   });

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100
//     });
//   }, []);

//   // Demo data with proper IDs and demo links
//   const projectsByCategory = {
//     "Live Projects": [
//       {
//         "id": 1,
//         "name": "Ligand Software Solutions – Official Website",
//         "shortDescription": "Modern company website with a clean UI, dark theme, and fully responsive MERN design.",
//         "fullDescription": "A professionally designed official website for Ligand Software Solutions, built using the MERN stack. The site features a clean, modern interface with a dark theme and fully responsive layouts optimized for both mobile and desktop. It showcases company services, portfolio, team details, and contact sections with smooth navigation and high-performance rendering. Developed with attention to UI/UX, accessibility, and SEO, the website provides a fast, user-friendly experience and serves as the primary digital presence for the organization.",
//         "technologies": [
//           "React",
//           "Node.js",
//           "Express",
//           "MongoDB",
//           "Tailwind CSS",
//           "Framer Motion",
//           "REST APIs"
//         ],
//         "demoLink": "https://ligandsoftware.com",
//         "images": [
//           "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=700&fit=crop",
//           "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=700&fit=crop"
//         ],
//         "category": "Live ",
//         "features": [
//           "Fully responsive modern UI",
//           "Dark theme with clean visual design",
//           "Mobile-first layout",
//           "Smooth animations with Framer Motion",
//           "Service, portfolio, and contact sections",
//           "High-performance MERN architecture"
//         ]
//       },
//       {
//         "id": 2,
//         "name": "Gururaj Foundation – NGO Website",
//         "shortDescription": "Responsive NGO website showcasing mission, activities, and online donation support.",
//         "fullDescription": "A modern and responsive website developed for the Gururaj Foundation, an NGO focused on community welfare, education, and social development. The platform highlights the foundation's mission, ongoing activities, impact stories, and volunteer initiatives. It includes a secure online donation system, allowing visitors to contribute directly to social causes. The site features user-friendly navigation, clean UI, optimized loading performance, and mobile-first responsiveness—ensuring accessibility for all users. Built with the MERN stack, the project provides the foundation with a strong digital presence to engage supporters and donors.",
//         "technologies": [
//           "React",
//           "Node.js",
//           "Express",
//           "MongoDB",
//           "Tailwind CSS",
//           "Nodemailer",
//           "Razorpay / Stripe",
//           "REST APIs"
//         ],
//         "demoLink": "https://gururajfoundation.com",
//         "images": [
//           "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1200&h=700&fit=crop",
//           "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=700&fit=crop"
//         ],
//         "category": "Live ",
//         "features": [
//           "NGO mission & activity showcase",
//           "Photo gallery & impact stories",
//           "Volunteer registration",
//           "Contact & inquiry forms",
//           "Admin panel to update activities and media",
//           "Mobile-first responsive design",
//           "Optimized UI/UX for accessibility"
//         ]
//       },
//       {
//         "id": 3,
//         "name": "Ligand Workspace – Learning Management System",
//         "shortDescription": "Modern MERN LMS for attendance, homework, fees & admin management.",
//         "fullDescription": "Ligand Workspace is an advanced and fully customizable Learning Management System developed for Ligand Software Solutions. The platform includes smart attendance tracking, homework assignment and evaluation, automated fee management, and project grouping for students. It offers a secure, role-based structure for admins, trainers, and students. The LMS also supports online interview preferences where students can choose slots, attend mock interviews, and receive evaluation results. With a responsive UI, optimized dashboards, and scalable backend, it serves as an evolving internal tool for training, management, and performance tracking.",
//         "technologies": [
//           "React",
//           "Node.js",
//           "Express",
//           "MongoDB",
//           "JWT Authentication",
//           "Socket.io",
//           "Tailwind CSS",
//           "Cloud Storage (AWS S3)",
//           "REST APIs"
//         ],
//         "demoLink": "https://workspace.ligandsoftware.com",
//         "images": [
//           "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=700&fit=crop",
//           "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=700&fit=crop"
//         ],
//         "category": "Live ",
//         "features": [
//           "Role-based access for admins, trainers, and students",
//           "Smart attendance tracking with reports",
//           "Homework assignment, submission, and evaluation",
//           "Fee management with receipts & payment tracking",
//           "Student project grouping and team management",
//           "Online interview preference system",
//           "Resource library for notes, PDFs, and videos",
//           "Interactive dashboards for performance tracking",
//           "Responsive UI with clean, mobile-friendly design"
//         ]
//       }
//     ],
//     "AI Projects": [
//       {
//         "id": 4,
//         "name": "AI-Biller – Smart Billing System",
//         "shortDescription": "AI-powered billing system with YOLO-based item detection.",
//         "fullDescription": "AI-Biller is an AI-powered billing system that uses YOLO-based object detection to automatically identify products and update bills in real time. The system improves checkout efficiency by reducing manual entry, minimizing errors, and speeding up the billing process. It integrates camera-based live scanning, item recognition, price mapping, and automatic bill calculation. The dashboard provides billing history, item analytics, and user management, making it suitable for retail and automated checkout environments.",
//         "technologies": [
//           "Python",
//           "YOLO",
//           "OpenCV",
//           "Flask",
//           "MongoDB",
//           "React",
//           "REST API"
//         ],
//         "demoLink": null,
//         "images": [
//           "https://images.unsplash.com/photo-1581091012184-5c06ae8b35bb?w=1200&h=700&fit=crop",
//           "https://images.unsplash.com/photo-1556742400-b5d52c2b4fee?w=1200&h=700&fit=crop"
//         ],
//         "category": "AI / Computer Vision",
//         "features": [
//           "YOLO-based real-time object detection",
//           "Automatic bill calculation",
//           "Camera-based item scanning",
//           "Live price mapping",
//           "Billing dashboard & history",
//           "Error-free automated checkout"
//         ]
//       },
//       {
//         "id": 5,
//         "name": "CRIMSON – AI Criminal Activity Detection",
//         "shortDescription": "Real-time AI system for detecting criminals, weapons, and violent activity.",
//         "fullDescription": "CRIMSON is an AI-powered surveillance and threat-detection system designed to identify criminals, weapons, and violent activities in real time. Using advanced computer vision models, the system continuously monitors video feeds and triggers immediate alerts when suspicious activity is detected. It sends live location alerts to the admin via email and stores all incident data in a secure database. The platform also includes an interactive admin dashboard for viewing alerts, analyzing incident history, and monitoring system performance.",
//         "technologies": [
//           "Python",
//           "YOLO",
//           "OpenCV",
//           "Flask",
//           "MongoDB",
//           "React",
//           "SMTP / Email Alerts"
//         ],
//         "demoLink": null,
//         "images": [
//           "https://images.unsplash.com/photo-1581093806997-124204d9fa9b?w=1200&h=700&fit=crop",
//           "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=1200&h=700&fit=crop"
//         ],
//         "category": "AI / Surveillance",
//         "features": [
//           "Real-time criminal and weapon detection",
//           "Violence recognition using computer vision",
//           "Live location alerts sent via email",
//           "Incident storage with timestamp & evidence",
//           "Interactive admin dashboard",
//           "Video feed monitoring & event logs"
//         ]
//       },
//       {
//         "id": 6,
//         "name": "Edupredict – AI Student Performance Analysis",
//         "shortDescription": "AI-powered academic performance prediction and improvement system.",
//         "fullDescription": "Edupredict is an AI-based academic performance analysis platform built using the MERN stack. Teachers can enter students' marks, attendance, and overall academic performance. The system analyzes patterns and generates an AI-driven improvement summary, study recommendations, and predicted performance levels. Using Gemini API, the system automatically emails each student a personalized feedback report. Students and teachers both have dashboards with detailed performance insights, visual graphs, subject-wise breakdowns, and progress tracking. The platform includes heavy visualization using interactive charts, ensuring clear understanding of strengths, weaknesses, and improvement paths.",
//         "technologies": [
//           "React",
//           "Node.js",
//           "Express",
//           "MongoDB",
//           "Gemini API",
//           "Chart.js / Recharts",
//           "JWT Authentication",
//           "Nodemailer",
//           "REST API"
//         ],
//         "demoLink": null,
//         "images": [
//           "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=700&fit=crop",
//           "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&h=700&fit=crop"
//         ],
//         "category": "AI / EdTech",
//         "features": [
//           "AI-based academic performance analysis",
//           "Teacher portal for entering marks & academic data",
//           "Student portal for viewing reports & progress",
//           "Gemini API–powered improvement summary generation",
//           "Automated email feedback reports for students",
//           "Graphical dashboards with heavy data visualization",
//           "Subject-wise and semester-wise breakdown",
//           "Predictive analytics for scoring and risk detection",
//           "Role-based authentication",
//           "Responsive UI with modern MERN architecture"
//         ]
//       }
//     ]
//   };

//   const ProjectModal = ({ project, onClose }) => {
//     if (!project) return null;

//     const nextImage = () => {
//       setActiveImageIndex((prev) =>
//         prev === project.images.length - 1 ? 0 : prev + 1
//       );
//     };

//     const prevImage = () => {
//       setActiveImageIndex((prev) =>
//         prev === 0 ? project.images.length - 1 : prev - 1
//       );
//     };

//     return (
//       <div className="modal-overlay" onClick={onClose}>
//         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//           <button className="close-button" onClick={onClose}>
//             <span className="close-icon">×</span>
//           </button>

//           <div className="modal-header">
//             <h2 className="modal-title">{project.name}</h2>
//             <span className="project-category">{project.category}</span>
//           </div>

//           <div className="modal-body">
//             {/* Image Carousel */}
//             <div className="project-carousel">
//               <div className="carousel-container">
//                 <img
//                   src={project.images[activeImageIndex]}
//                   alt={`${project.name} - Image ${activeImageIndex + 1}`}
//                   className="carousel-image"
//                 />
//                 {project.images.length > 1 && (
//                   <>
//                     <button className="carousel-btn prev" onClick={prevImage}>
//                       ‹
//                     </button>
//                     <button className="carousel-btn next" onClick={nextImage}>
//                       ›
//                     </button>
//                   </>
//                 )}
//                 <div className="carousel-indicators">
//                   {project.images.map((_, index) => (
//                     <button
//                       key={index}
//                       className={`indicator ${index === activeImageIndex ? 'active' : ''}`}
//                       onClick={() => setActiveImageIndex(index)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="project-details">
//               {/* Short Description */}
//               <div className="description-section">
//                 <h3 className="section-title">Overview</h3>
//                 <p className="project-short-description">{project.shortDescription}</p>
//               </div>

//               {/* Full Description */}
//               <div className="description-section">
//                 <h3 className="section-title">Project Details</h3>
//                 <p className="project-full-description">{project.fullDescription}</p>
//               </div>

//               {/* Features */}
//               {project.features && (
//                 <div className="features-section">
//                   <h3 className="section-title">Key Features</h3>
//                   <div className="features-grid">
//                     {project.features.map((feature, index) => (
//                       <div key={index} className="feature-item">
//                         <span className="feature-icon">✓</span>
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Technologies */}
//               <div className="technologies-section">
//                 <h3 className="section-title">Technologies Used</h3>
//                 <div className="technologies-tags">
//                   {project.technologies.map((tech, index) => (
//                     <span key={index} className="technology-tag">{tech}</span>
//                   ))}
//                 </div>
//               </div>

//               {/* Links - Only show if demoLink exists */}
//               {project.demoLink && (
//                 <div className="project-links">
//                   <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
//                     View Live Demo
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           .modal-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0, 0, 0, 0.9);
//             backdrop-filter: blur(5px);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 1000;
//             padding: 20px;
//           }

//           .modal-content {
//             background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             border-radius: 20px;
//             max-width: 1000px;
//             width: 100%;
//             max-height: 95vh;
//             overflow-y: auto;
//             position: relative;
//             box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
//           }

//           .close-button {
//             position: absolute;
//             top: 20px;
//             right: 20px;
//             background: rgba(255, 255, 255, 0.1);
//             border: none;
//             border-radius: 50%;
//             width: 40px;
//             height: 40px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             color: white;
//             font-size: 1.5rem;
//             cursor: pointer;
//             transition: all 0.3s ease;
//             z-index: 10;
//           }

//           .close-button:hover {
//             background: rgba(255, 255, 255, 0.2);
//             transform: scale(1.1);
//           }

//           .modal-header {
//             padding: 40px 40px 20px;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           }

//           .modal-title {
//             color: #f1f5f9;
//             font-size: 2rem;
//             margin-bottom: 10px;
//             font-weight: 700;
//           }

//           .project-category {
//             background: rgba(59, 130, 246, 0.2);
//             color: #3b82f6;
//             padding: 6px 16px;
//             border-radius: 20px;
//             font-size: 0.9rem;
//             font-weight: 600;
//           }

//           .modal-body {
//             padding: 20px 40px 40px;
//           }

//           /* Carousel Styles */
//           .project-carousel {
//             margin-bottom: 30px;
//           }

//           .carousel-container {
//             position: relative;
//             width: 100%;
//             height: 400px;
//             border-radius: 12px;
//             overflow: hidden;
//             background: rgba(15, 23, 42, 0.5);
//           }

//           .carousel-image {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//           }

//           .carousel-btn {
//             position: absolute;
//             top: 50%;
//             transform: translateY(-50%);
//             background: rgba(0, 0, 0, 0.7);
//             border: none;
//             color: white;
//             width: 50px;
//             height: 50px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-size: 1.5rem;
//             cursor: pointer;
//             transition: all 0.3s ease;
//           }

//           .carousel-btn:hover {
//             background: rgba(0, 0, 0, 0.9);
//             transform: translateY(-50%) scale(1.1);
//           }

//           .carousel-btn.prev {
//             left: 20px;
//           }

//           .carousel-btn.next {
//             right: 20px;
//           }

//           .carousel-indicators {
//             position: absolute;
//             bottom: 20px;
//             left: 50%;
//             transform: translateX(-50%);
//             display: flex;
//             gap: 10px;
//           }

//           .indicator {
//             width: 12px;
//             height: 12px;
//             border-radius: 50%;
//             border: 2px solid white;
//             background: transparent;
//             cursor: pointer;
//             transition: all 0.3s ease;
//           }

//           .indicator.active {
//             background: white;
//           }

//           /* Content Sections */
//           .section-title {
//             color: #f1f5f9;
//             font-size: 1.3rem;
//             margin-bottom: 15px;
//             font-weight: 600;
//             border-left: 4px solid #3b82f6;
//             padding-left: 12px;
//           }

//           .description-section {
//             margin-bottom: 30px;
//           }

//           .project-short-description {
//             color: #3b82f6;
//             font-size: 1.1rem;
//             font-weight: 500;
//             line-height: 1.6;
//             margin-bottom: 15px;
//           }

//           .project-full-description {
//             color: #cbd5e1;
//             font-size: 1rem;
//             line-height: 1.7;
//           }

//           .features-section {
//             margin-bottom: 30px;
//           }

//           .features-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//             gap: 12px;
//           }

//           .feature-item {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             color: #cbd5e1;
//             font-size: 0.95rem;
//             padding: 8px 0;
//           }

//           .feature-icon {
//             color: #10b981;
//             font-weight: bold;
//           }

//           .technologies-tags {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 10px;
//           }

//           .technology-tag {
//             background: rgba(59, 130, 246, 0.15);
//             color: #3b82f6;
//             border: 1px solid rgba(59, 130, 246, 0.3);
//             border-radius: 8px;
//             padding: 8px 16px;
//             font-size: 0.9rem;
//             font-weight: 500;
//           }

//           .project-links {
//             display: flex;
//             gap: 15px;
//             margin-top: 30px;
//           }

//           .demo-link {
//             background: #3b82f6;
//             color: white;
//             padding: 12px 24px;
//             border-radius: 8px;
//             text-decoration: none;
//             font-weight: 600;
//             transition: all 0.3s ease;
//             display: inline-flex;
//             align-items: center;
//             gap: 8px;
//           }

//           .demo-link:hover {
//             background: #2563eb;
//             transform: translateY(-2px);
//             box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
//           }

//           @media (max-width: 768px) {
//             .modal-content {
//               margin: 10px;
//               max-height: 98vh;
//             }

//             .modal-header {
//               padding: 30px 20px 15px;
//             }

//             .modal-body {
//               padding: 15px 20px 30px;
//             }

//             .modal-title {
//               font-size: 1.5rem;
//             }

//             .carousel-container {
//               height: 250px;
//             }

//             .carousel-btn {
//               width: 40px;
//               height: 40px;
//               font-size: 1.2rem;
//             }

//             .features-grid {
//               grid-template-columns: 1fr;
//             }

//             .project-links {
//               flex-direction: column;
//             }
//           }
//         `}</style>
//       </div>
//     );
//   };

//   const ProjectCategorySection = ({ title, projects }) => {
//     const visibleCount = visibleCounts[title] || 3;
//     const totalProjects = projects.length;
//     const visibleProjects = projects.slice(0, visibleCount);

//     const showMore = () => {
//       setVisibleCounts(prev => ({
//         ...prev,
//         [title]: Math.min(prev[title] + 3, totalProjects)
//       }));
//     };

//     const showLess = () => {
//       setVisibleCounts(prev => ({
//         ...prev,
//         [title]: 3
//       }));
//     };

//     return (
//       <div className="category-section">
//         <div className="category-header">
//           <h3
//             className="category-title"
//             data-aos="fade-right"
//             data-aos-delay="200"
//           >
//             {title}
//           </h3>
//           {totalProjects > 3 && (
//             <div
//               className="category-controls"
//               data-aos="fade-left"
//               data-aos-delay="200"
//             >
//               {visibleCount < totalProjects && (
//                 <button className="control-btn" onClick={showMore}>
//                   View More ({totalProjects - visibleCount} left)
//                 </button>
//               )}
//               {visibleCount > 3 && (
//                 <button className="control-btn" onClick={showLess}>
//                   Show Less
//                 </button>
//               )}
//             </div>
//           )}
//         </div>

//         <div className="category-projects">
//           {visibleProjects.map((project, index) => (
//             <div
//               key={project.id}
//               className="project-card"
//               onClick={() => {
//                 setSelectedProject(project);
//                 setActiveImageIndex(0);
//               }}
//               data-aos="fade-up"
//               data-aos-delay={300 + (index * 100)}
//             >
//               <div className="project-image">
//                 <img src={project.images[0]} alt={project.name} />
//                 <div className="image-overlay">
//                   <span className="view-details-text"><FaEye /> View Details</span>
//                 </div>
//                 {/* Show demo badge if project has demo link */}
//                 {/* {project.demoLink && (
//                   <div className="demo-badge">
//                     <FaBriefcase /> Live Demo
//                   </div>
//                 )} */}
//               </div>

//               <div className="project-card-content">
//                 <div className="project-card-header">
//                   <h4 className="project-name">{project.name}</h4>
//                   <span className="project-category-tag">{project.category}</span>
//                 </div>

//                 <p className="project-short-description">{project.shortDescription}</p>

//                 <div className="project-tech-tags">
//                   {project.technologies.slice(0, 3).map((tech, index) => (
//                     <span key={index} className="tech-tag">{tech}</span>
//                   ))}
//                   {project.technologies.length > 3 && (
//                     <span className="tech-tag-more">+{project.technologies.length - 3} more</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="projects-section">
//       <div className="projects-container">
//         <div className="projects-header">
//           <h2
//             className="projects-section-title"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             My Work
//           </h2>
//           <p
//             className="projects-section-subtitle"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             Building impactful digital solutions across web, AI, and cloud ecosystems.
//           </p>
//         </div>

//         <div className="projects-categories">
//           {Object.entries(projectsByCategory).map(([category, projects]) => (
//             <ProjectCategorySection
//               key={category}
//               title={category}
//               projects={projects}
//             />
//           ))}
//         </div>

//         <div
//           className="projects-cta"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           <p className="cta-text">Interested in collaboration or have a project in mind?</p>
//           <a href="/contact" className="cta-button">Get In Touch</a>
//         </div>
//       </div>

//       <ProjectModal
//         project={selectedProject}
//         onClose={() => setSelectedProject(null)}
//       />

//       <style jsx>{`
//         .projects-section {
//           padding: 100px 5%;
//           background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
//           color: #fff;
//         }

//         .projects-container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .projects-header {
//           text-align: center;
//           margin-bottom: 60px;
//         }

//         .projects-section-title {
//           font-size: 3rem;
//           margin-bottom: 15px;
//           background: linear-gradient(45deg, #f8fafc, #94a3b8);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           font-weight: 700;
//         }

//         .projects-section-subtitle {
//           color: #cbd5e1;
//           font-size: 1.2rem;
//           max-width: 600px;
//           margin: 0 auto;
//           line-height: 1.6;
//         }

//         .projects-categories {
//           display: flex;
//           flex-direction: column;
//           gap: 60px;
//           margin-bottom: 60px;
//         }

//         .category-section {
//           margin-bottom: 40px;
//         }

//         .category-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 30px;
//           flex-wrap: wrap;
//           gap: 15px;
//         }

//         .category-title {
//           font-size: 2rem;
//           color: #f1f5f9;
//           margin: 0;
//           font-weight: 600;
//         }

//         .category-controls {
//           display: flex;
//           gap: 10px;
//         }

//         .control-btn {
//           background: rgba(59, 130, 246, 0.1);
//           color: #3b82f6;
//           border: 1px solid rgba(59, 130, 246, 0.3);
//           border-radius: 8px;
//           padding: 8px 16px;
//           font-size: 0.9rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .control-btn:hover {
//           background: rgba(59, 130, 246, 0.2);
//           transform: translateY(-1px);
//         }

//         .category-projects {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//         }

//         .project-card {
//           background: rgba(30, 41, 59, 0.7);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 16px;
//           overflow: hidden;
//           transition: all 0.3s ease;
//           cursor: pointer;
//           backdrop-filter: blur(10px);
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//         }

//         .project-card:hover {
//           border-color: rgba(255, 255, 255, 0.2);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//           transform: translateY(-5px);
//         }

//         .project-image {
//           position: relative;
//           width: 100%;
//           height: 200px;
//           overflow: hidden;
//         }

//         .project-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }

//         .project-card:hover .project-image img {
//           transform: scale(1.05);
//         }

//         .image-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(15, 23, 42, 0.85);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }

//         .project-card:hover .image-overlay {
//           opacity: 1;
//         }

//         .view-details-text {
//           color: white;
//           font-weight: 600;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .demo-badge {
//           position: absolute;
//           top: 12px;
//           right: 12px;
//           background: rgba(34, 197, 94, 0.9);
//           color: white;
//           padding: 6px 12px;
//           border-radius: 20px;
//           font-size: 0.8rem;
//           font-weight: 600;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           backdrop-filter: blur(10px);
//         }

//         .project-card-content {
//           padding: 25px;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         .project-card-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           margin-bottom: 12px;
//         }

//         .project-name {
//           color: #f1f5f9;
//           font-size: 1.2rem;
//           font-weight: 600;
//           margin: 0;
//           flex: 1;
//         }

//         .project-category-tag {
//           background: rgba(59, 130, 246, 0.1);
//           color: #3b82f6;
//           border: 1px solid rgba(59, 130, 246, 0.3);
//           border-radius: 12px;
//           padding: 4px 8px;
//           font-size: 0.7rem;
//           font-weight: 500;
//           white-space: nowrap;
//           margin-left: 10px;
//         }

//         .project-short-description {
//           color: #94a3b8;
//           line-height: 1.5;
//           margin-bottom: 20px;
//           font-size: 0.9rem;
//           flex: 1;
//         }

//         .project-tech-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
//         }

//         .tech-tag {
//           background: rgba(59, 130, 246, 0.1);
//           color: #3b82f6;
//           border: 1px solid rgba(59, 130, 246, 0.2);
//           border-radius: 6px;
//           padding: 3px 8px;
//           font-size: 0.7rem;
//           font-weight: 500;
//         }

//         .tech-tag-more {
//           background: rgba(255, 255, 255, 0.05);
//           color: #94a3b8;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 6px;
//           padding: 3px 8px;
//           font-size: 0.7rem;
//         }

//         .projects-cta {
//           text-align: center;
//           padding: 40px;
//           background: rgba(30, 41, 59, 0.5);
//           border-radius: 16px;
//           border: 1px solid rgba(255, 255, 255, 0.08);
//         }

//         .cta-text {
//           color: #cbd5e1;
//           font-size: 1.1rem;
//           margin-bottom: 20px;
//         }

//         .cta-button {
//           background: linear-gradient(45deg, #3b82f6, #8b5cf6);
//           color: white;
//           border: none;
//           border-radius: 8px;
//           padding: 12px 30px;
//           font-size: 1rem;
//           font-weight: 600;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           display: inline-block;
//         }

//         .cta-button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
//         }

//         @media (max-width: 1024px) {
//           .category-projects {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 768px) {
//           .projects-section-title {
//             font-size: 2.2rem;
//           }

//           .category-title {
//             font-size: 1.5rem;
//           }

//           .category-header {
//             flex-direction: column;
//             align-items: flex-start;
//           }

//           .category-controls {
//             width: 100%;
//             justify-content: flex-start;
//           }

//           .category-projects {
//             grid-template-columns: 1fr;
//             gap: 20px;
//           }

//           .project-card-content {
//             padding: 20px;
//           }

//           .project-card-header {
//             flex-direction: column;
//             gap: 10px;
//           }

//           .project-name {
//             font-size: 1.2rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .projects-section {
//             padding: 60px 5%;
//           }

//           .projects-section-title {
//             font-size: 2rem;
//           }

//           .projects-section-subtitle {
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;


import { useState, useEffect } from 'react';
import { FaBriefcase, FaEye, FaStreetView } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [visibleCounts, setVisibleCounts] = useState({
    "Live Projects": 3,
    "AI Projects": 3
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  // Demo data with proper IDs and demo links
  const projectsByCategory = {
    "Live Projects": [
      {
        "id": 1,
        "name": "Ligand Software Solutions – Official Website",
        "shortDescription": "Modern company website with a clean UI, dark theme, and fully responsive MERN design.",
        "fullDescription": "A professionally designed official website for Ligand Software Solutions, built using the MERN stack. The site features a clean, modern interface with a dark theme and fully responsive layouts optimized for both mobile and desktop. It showcases company services, portfolio, team details, and contact sections with smooth navigation and high-performance rendering. Developed with attention to UI/UX, accessibility, and SEO, the website provides a fast, user-friendly experience and serves as the primary digital presence for the organization.",
        "technologies": [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "Framer Motion",
          "REST APIs"
        ],
        "demoLink": "https://ligand-softwares.vercel.app/",
        "images": [
          "/Projects/ligand-website.png",
          "/Projects/ligand-website2.png",
          "/Projects/ligand-website3.jpg"
        ],
        "category": "Live ",
        "features": [
          "Fully responsive modern UI",
          "Dark theme with clean visual design",
          "Mobile-first layout",
          "Smooth animations with Framer Motion",
          "Service, portfolio, and contact sections",
          "High-performance MERN architecture"
        ]
      },
      {
        "id": 2,
        "name": "Gururaj Foundation – NGO Website",
        "shortDescription": "Responsive NGO website showcasing mission, activities, and online donation support.",
        "fullDescription": "A modern and responsive website developed for the Gururaj Foundation, an NGO focused on community welfare, education, and social development. The platform highlights the foundation's mission, ongoing activities, impact stories, and volunteer initiatives. It includes a secure online donation system, allowing visitors to contribute directly to social causes. The site features user-friendly navigation, clean UI, optimized loading performance, and mobile-first responsiveness—ensuring accessibility for all users. Built with the MERN stack, the project provides the foundation with a strong digital presence to engage supporters and donors.",
        "technologies": [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "Nodemailer",
          "Razorpay / Stripe",
          "REST APIs"
        ],
        "demoLink": "https://gururajfoundation.com",
        "images": [
          "/Projects/Gururaj-Foundation-website.png",
          "/Projects/Gururaj-Foundation-website2.png",
          "/Projects/Gururaj-Foundation-website3.png"
        ],
        "category": "Live ",
        "features": [
          "NGO mission & activity showcase",
          "Photo gallery & impact stories",
          "Volunteer registration",
          "Contact & inquiry forms",
          "Admin panel to update activities and media",
          "Mobile-first responsive design",
          "Optimized UI/UX for accessibility"
        ]
      },
      {
        "id": 3,
        "name": "Ligand Workspace – Learning Management System",
        "shortDescription": "Modern MERN LMS for attendance, homework, fees & admin management.",
        "fullDescription": "Ligand Workspace is an advanced and fully customizable Learning Management System developed for Ligand Software Solutions. The platform includes smart attendance tracking, homework assignment and evaluation, automated fee management, and project grouping for students. It offers a secure, role-based structure for admins, trainers, and students. The LMS also supports online interview preferences where students can choose slots, attend mock interviews, and receive evaluation results. With a responsive UI, optimized dashboards, and scalable backend, it serves as an evolving internal tool for training, management, and performance tracking.",
        "technologies": [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JWT Authentication",
          "Socket.io",
          "Tailwind CSS",
          "Cloud Storage (AWS S3)",
          "REST APIs"
        ],

        "images": [

          "/Projects/ligand-workspace.png",

        ],
        "category": "Ongoing ",
        "features": [
          "Role-based access for admins, trainers, and students",
          "Smart attendance tracking with reports",
          "Homework assignment, submission, and evaluation",
          "Fee management with receipts & payment tracking",
          "Student project grouping and team management",
          "Online interview preference system",
          "Resource library for notes, PDFs, and videos",
          "Interactive dashboards for performance tracking",
          "Responsive UI with clean, mobile-friendly design"
        ]
      }
    ],
    "AI Projects": [
      {
        "id": 4,
        "name": "AI-Biller – Smart Billing System",
        "shortDescription": "AI-powered billing system with YOLO-based item detection.",
        "fullDescription": "AI-Biller is an AI-powered billing system that uses YOLO-based object detection to automatically identify products and update bills in real time. The system improves checkout efficiency by reducing manual entry, minimizing errors, and speeding up the billing process. It integrates camera-based live scanning, item recognition, price mapping, and automatic bill calculation. The dashboard provides billing history, item analytics, and user management, making it suitable for retail and automated checkout environments.",
        "technologies": [
          "Python",
          "YOLO",
          "OpenCV",
          "Flask",
          "MongoDB",
          "React",
          "REST API"
        ],
        "demoLink": null,
        "images": [
          "/Projects/AI-Biller.png",
          "/Projects/AI-Biller2.png",
          "/Projects/AI-Biller3.png",
          "/Projects/AI-Biller4.png"
        ],
        "category": "AI / Computer Vision",
        "features": [
          "YOLO-based real-time object detection",
          "Automatic bill calculation",
          "Camera-based item scanning",
          "Live price mapping",
          "Billing dashboard & history",
          "Error-free automated checkout"
        ]
      },
      {
        "id": 5,
        "name": "AI-Pothole Detection ",
        "shortDescription": "Real-time AI system for detecting road potholes and sending automated alerts.",
        "fullDescription": "An AI-powered pothole detection and alert system designed to enhance road safety and infrastructure monitoring. The system uses computer vision and machine learning to analyze live camera feeds and detect potholes in real time. When the detected pothole count exceeds a predefined threshold (10+), the system automatically sends an alert to the admin with live image proof and real-time GPS location. All detected data is securely stored and visualized through an admin dashboard, enabling efficient road maintenance planning and tracking.",
        "technologies": [
          "Python",
          "Machine Learning",
          "Computer Vision",
          "OpenCV",
          "Flask",
          "Google Colab",
          "Kaggle Dataset",
          "GPS Integration",
          "Database"
        ],
        "demoLink": null,
        "images": [
          
          "/Projects/pothole1.png",
          "/Projects/pothole2.png",
          "/Projects/pothole3.png"
        ],
        "category": "AI / Smart Infrastructure",
        "features": [
          "Real-time pothole detection using camera feed",
          "Threshold-based automated alerts",
          "Live image proof with GPS location",
          "Centralized database for detected potholes",
          "Admin dashboard for monitoring and analytics",
          "Supports road safety and maintenance planning"
        ]
      },

      {
        "id": 6,
        "name": "Edupredict – AI Student Performance Analysis",
        "shortDescription": "AI-powered academic performance prediction and improvement system.",
        "fullDescription": "Edupredict is an AI-based academic performance analysis platform built using the MERN stack. Teachers can enter students' marks, attendance, and overall academic performance. The system analyzes patterns and generates an AI-driven improvement summary, study recommendations, and predicted performance levels. Using Gemini API, the system automatically emails each student a personalized feedback report. Students and teachers both have dashboards with detailed performance insights, visual graphs, subject-wise breakdowns, and progress tracking. The platform includes heavy visualization using interactive charts, ensuring clear understanding of strengths, weaknesses, and improvement paths.",
        "technologies": [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Gemini API",
          "Chart.js / Recharts",
          "JWT Authentication",
          "Nodemailer",
          "REST API"
        ],
        "demoLink": null,
        "images": [
          "/Projects/EduPredict.png",
          "/Projects/EduPredict2.png"
        ],
        "category": "AI / EdTech",
        "features": [
          "AI-based academic performance analysis",
          "Teacher portal for entering marks & academic data",
          "Student portal for viewing reports & progress",
          "Gemini API–powered improvement summary generation",
          "Automated email feedback reports for students",
          "Graphical dashboards with heavy data visualization",
          "Subject-wise and semester-wise breakdown",
          "Predictive analytics for scoring and risk detection",
          "Role-based authentication",
          "Responsive UI with modern MERN architecture"
        ]
      }
    ]
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const nextImage = () => {
      setActiveImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      setActiveImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    };

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>
            <span className="close-icon">×</span>
          </button>

          <div className="modal-header">
            <h2 className="modal-title">{project.name}</h2>
            <span className="project-category">{project.category}</span>
          </div>

          <div className="modal-body">
            {/* Image Carousel */}
            <div className="project-carousel">
              <div className="carousel-container">
                <img
                  src={project.images[activeImageIndex]}
                  alt={`${project.name} - Image ${activeImageIndex + 1}`}
                  className="carousel-image"
                />
                {project.images.length > 1 && (
                  <>
                    <button className="carousel-btn prev" onClick={prevImage}>
                      ‹
                    </button>
                    <button className="carousel-btn next" onClick={nextImage}>
                      ›
                    </button>
                  </>
                )}
                <div className="carousel-indicators">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === activeImageIndex ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="project-details">
              {/* Short Description */}
              <div className="description-section">
                <h3 className="section-title">Overview</h3>
                <p className="project-short-description">{project.shortDescription}</p>
              </div>

              {/* Full Description */}
              <div className="description-section">
                <h3 className="section-title">Project Details</h3>
                <p className="project-full-description">{project.fullDescription}</p>
              </div>

              {/* Features */}
              {project.features && (
                <div className="features-section">
                  <h3 className="section-title">Key Features</h3>
                  <div className="features-grid">
                    {project.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-icon">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="technologies-section">
                <h3 className="section-title">Technologies Used</h3>
                <div className="technologies-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links - Only show if demoLink exists */}
              {project.demoLink && (
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
                    View Live Demo
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
          }

          .modal-content {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            max-width: 1000px;
            width: 100%;
            max-height: 95vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          }

          .close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 10;
          }

          .close-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
          }

          .modal-header {
            padding: 40px 40px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .modal-title {
            color: #f1f5f9;
            font-size: 2rem;
            margin-bottom: 10px;
            font-weight: 700;
          }

          .project-category {
            background: rgba(59, 130, 246, 0.2);
            color: #3b82f6;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
          }

          .modal-body {
            padding: 20px 40px 40px;
          }

          /* Carousel Styles */
          .project-carousel {
            margin-bottom: 30px;
          }

          .carousel-container {
            position: relative;
            width: 100%;
            height: 400px;
            border-radius: 12px;
            overflow: hidden;
            background: rgba(15, 23, 42, 0.5);
          }

          .carousel-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .carousel-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.7);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .carousel-btn:hover {
            background: rgba(0, 0, 0, 0.9);
            transform: translateY(-50%) scale(1.1);
          }

          .carousel-btn.prev {
            left: 20px;
          }

          .carousel-btn.next {
            right: 20px;
          }

          .carousel-indicators {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
          }

          .indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid white;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .indicator.active {
            background: white;
          }

          /* Content Sections */
          .section-title {
            color: #f1f5f9;
            font-size: 1.3rem;
            margin-bottom: 15px;
            font-weight: 600;
            border-left: 4px solid #3b82f6;
            padding-left: 12px;
          }

          .description-section {
            margin-bottom: 30px;
          }

          .project-short-description {
            color: #3b82f6;
            font-size: 1.1rem;
            font-weight: 500;
            line-height: 1.6;
            margin-bottom: 15px;
          }

          .project-full-description {
            color: #cbd5e1;
            font-size: 1rem;
            line-height: 1.7;
          }

          .features-section {
            margin-bottom: 30px;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 12px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #cbd5e1;
            font-size: 0.95rem;
            padding: 8px 0;
          }

          .feature-icon {
            color: #10b981;
            font-weight: bold;
          }

          .technologies-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .technology-tag {
            background: rgba(59, 130, 246, 0.15);
            color: #3b82f6;
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 8px;
            padding: 8px 16px;
            font-size: 0.9rem;
            font-weight: 500;
          }

          .project-links {
            display: flex;
            gap: 15px;
            margin-top: 30px;
          }

          .demo-link {
            background: #3b82f6;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .demo-link:hover {
            background: #2563eb;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
          }

          @media (max-width: 768px) {
            .modal-content {
              margin: 10px;
              max-height: 98vh;
            }

            .modal-header {
              padding: 30px 20px 15px;
            }

            .modal-body {
              padding: 15px 20px 30px;
            }

            .modal-title {
              font-size: 1.5rem;
            }

            .carousel-container {
              height: 250px;
            }

            .carousel-btn {
              width: 40px;
              height: 40px;
              font-size: 1.2rem;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }

            .project-links {
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    );
  };

  const ProjectCategorySection = ({ title, projects }) => {
    const visibleCount = visibleCounts[title] || 3;
    const totalProjects = projects.length;
    const visibleProjects = projects.slice(0, visibleCount);

    const showMore = () => {
      setVisibleCounts(prev => ({
        ...prev,
        [title]: Math.min(prev[title] + 3, totalProjects)
      }));
    };

    const showLess = () => {
      setVisibleCounts(prev => ({
        ...prev,
        [title]: 3
      }));
    };

    return (
      <div className="category-section">
        <div className="category-header">
          <h3
            className="category-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {title}
          </h3>
          {totalProjects > 3 && (
            <div
              className="category-controls"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {visibleCount < totalProjects && (
                <button className="control-btn" onClick={showMore}>
                  View More ({totalProjects - visibleCount} left)
                </button>
              )}
              {visibleCount > 3 && (
                <button className="control-btn" onClick={showLess}>
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>

        <div className="category-projects">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => {
                setSelectedProject(project);
                setActiveImageIndex(0);
              }}
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              <div className="project-image">
                <img src={project.images[0]} alt={project.name} />
                <div className="image-overlay">
                  <span className="view-details-text"><FaEye /> View Details</span>
                </div>
              </div>

              <div className="project-card-content">
                <div className="project-card-header">
                  <h4 className="project-name">{project.name}</h4>
                  <span className="project-category-tag">{project.category}</span>
                </div>

                <p className="project-short-description">{project.shortDescription}</p>

                <div className="project-tech-tags">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag-more">+{project.technologies.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2
            className="projects-section-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            My Work
          </h2>
          <p
            className="projects-section-subtitle"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Building impactful digital solutions across web, AI, and cloud ecosystems.
          </p>
        </div>

        <div className="projects-categories">
          {Object.entries(projectsByCategory).map(([category, projects]) => (
            <ProjectCategorySection
              key={category}
              title={category}
              projects={projects}
            />
          ))}
        </div>

        <div
          className="projects-cta"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="cta-text">Interested in collaboration or have a project in mind?</p>
          <a href="/contact" className="cta-button">Get In Touch</a>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style jsx>{`
        .projects-section {
          padding: 100px 5%;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #fff;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .projects-section-title {
          font-size: 3rem;
          margin-bottom: 15px;
          background: linear-gradient(45deg, #f8fafc, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .projects-section-subtitle {
          color: #cbd5e1;
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-categories {
          display: flex;
          flex-direction: column;
          gap: 60px;
          margin-bottom: 60px;
        }

        .category-section {
          margin-bottom: 40px;
        }

        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .category-title {
          font-size: 2rem;
          color: #f1f5f9;
          margin: 0;
          font-weight: 600;
        }

        .category-controls {
          display: flex;
          gap: 10px;
        }

        .control-btn {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-1px);
        }

        .category-projects {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .project-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transform: translateY(-5px);
        }

        .project-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .image-overlay {
          opacity: 1;
        }

        .view-details-text {
          color: white;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-card-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .project-name {
          color: #f1f5f9;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
          flex: 1;
        }

        .project-category-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 4px 8px;
          font-size: 0.7rem;
          font-weight: 500;
          white-space: nowrap;
          margin-left: 10px;
        }

        .project-short-description {
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 20px;
          font-size: 0.9rem;
          flex: 1;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 6px;
          padding: 3px 8px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .tech-tag-more {
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 3px 8px;
          font-size: 0.7rem;
        }

        .projects-cta {
          text-align: center;
          padding: 40px;
          background: rgba(30, 41, 59, 0.5);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cta-text {
          color: #cbd5e1;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }

        .cta-button {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px 30px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 1024px) {
          .category-projects {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-section-title {
            font-size: 2.2rem;
          }

          .category-title {
            font-size: 1.5rem;
          }

          .category-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .category-controls {
            width: 100%;
            justify-content: flex-start;
          }

          .category-projects {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-card-content {
            padding: 20px;
          }

          .project-card-header {
            flex-direction: column;
            gap: 10px;
          }

          .project-name {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 60px 5%;
          }

          .projects-section-title {
            font-size: 2rem;
          }

          .projects-section-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;