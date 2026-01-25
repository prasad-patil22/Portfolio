// import { useState, useEffect, useRef } from "react";
// import { FaRobot, FaTimes, FaExpand, FaCompress } from "react-icons/fa";

// const API_KEY =process.env.REACT_APP_GROQ_API_KEY;
// console.log("Your key is",API_KEY);
// const API_URL = "https://api.groq.com/openai/v1/chat/completions";

// const Chatbot = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const [isMinimized, setIsMinimized] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);
//     const [showWelcome, setShowWelcome] = useState(true);
//     const messagesEndRef = useRef(null);

//    const RESUME_CONTEXT = `
// Name: Prasad I Patil
// Role: MCA student with hands-on experience as a Full Stack Developer

// Contact:
// Email: patilprasad3808@gmail.com
// Mobile: 8549076433

// Summary:
// BCA graduate currently pursuing MCA. MERN Stack Intern with hands-on experience in C, Java, Python, JavaScript, MERN Stack, Machine Learning, model training, and Flask. Passionate about building scalable web applications and AI-powered solutions.

// Education:
// - MCA (Pursuing), Presidency College, Kempapura Hebbal, Bangalore (2025–2027)
// - BCA, SJPN BCA College, Nidasoshi (2022–2025), CGPA: 8.22
// - PUC, SJPN PU College, Nidasoshi (2020–2022), Percentage: 61.3%
// - High School, Bharatesh PU College High School, Bagewadi (2020), Percentage: 75.68%

// Experience:
// Web Developer Intern — Ligand Software Solutions (Feb 2025 – Present)
// - Working on MERN Stack and AI-based projects using Flask
// - Developed responsive and user-friendly user interfaces
// - Integrated backend services and REST APIs
// - Contributed to live client projects and production-ready applications

// Projects:
// 1) AI-Biller — AI-Based Billing System  
// 2) CRIMSON — AI-Based Criminal Activity Detection  
// 3) Ligand Software Solutions Website (Official Company Website)  
// 4) Gururaj Foundation Website (NGO Website)  
// 5) Ligand Work-Space — Ongoing LMS Project  

// explaintion


// 1) AI-Biller — AI-Based Billing System  
// Developed an AI-powered automated billing system that modernizes the traditional checkout process.

// - Uses YOLO-based object detection to identify products placed in a smart basket
// - Updates the bill in real time without manual barcode scanning
// - MERN stack web application manages authentication, billing, and transactions
// - Automatically generates and emails the bill after payment

// Key Features:
// - Real-time item detection using computer vision
// - No manual barcode scanning
// - Reduced checkout time and queues
// - Automatic bill generation and email delivery

// Tech Stack:
// Python, YOLO, MongoDB, Express.js, React.js, Node.js


// 2) CRIMSON — AI-Based Criminal Activity Detection  
// CRIMSON is an AI-powered criminal activity detection system designed to assist authorities by identifying criminals, weapons, and violent activities in real time.

// Key Features:

// Admin Complaint System:
// - Admin can register complaints by uploading criminal photos with case details
// - Complaint data and images are securely stored in the database

// Face Detection and Identification:
// - Continuous monitoring of video input
// - Real-time face matching with registered criminal images
// - Automatically captures location details and visual proof on detection

// Real-Time Alerts:
// - Sends instant alerts to the admin with detection details and evidence

// Weapon and Violence Detection:
// - Machine learning models trained to detect weapons and violent activities
// - Models trained using public datasets from Kaggle
// - Detects threats even when face recognition is not possible

// Technology Used:
// - Backend: Flask (Python)
// - Machine Learning: Custom-trained models for face recognition, weapon detection, and violence detection
// - Datasets: Kaggle datasets
// - Database: Stores complaints, detection logs, images, location data, and alerts

// Use Case:
// - Surveillance systems for public safety
// - Detection of known criminals
// - Identification of weapons and violent behavior
// - Real-time alerts with proof and location details


// 3) Ligand Software Solutions Website (Official Company Website)  
// Website: https://ligandsoftwares.com

// - Developed the official company website using the MERN stack
// - Modern dark-themed UI with a custom cursor
// - Smooth animations and interactive components
// - Fully dynamic admin panel for content management

// Key Features:
// - Admin can add, update, and manage website content dynamically
// - Real-time database-driven content updates
// - No code changes required for content management

// Technology Stack:
// - Frontend: React.js
// - Backend: Node.js, Express.js
// - Database: MongoDB
// - Architecture: MERN Stack


// 4) Gururaj Foundation Website (NGO Website)  
// Website: https://gururajfoundation.com

// - Designed and developed a responsive NGO website
// - Showcases the organization's mission, activities, and social initiatives

// Key Features:
// - Clean and user-friendly NGO-focused design
// - Fully responsive across mobile, tablet, and desktop devices
// - Easy-to-update content sections
// - Optimized for accessibility and clarity

// Technology Used:
// - Frontend: React.js / HTML, CSS, JavaScript
// - Deployment: Web hosting with optimized performance


// 5) Ligand Work-Space — Ongoing LMS Project  
// Website: https://liganddevelopers.vercel.app

// Ligand Work-Space is an advanced Learning Management System (LMS) currently under development to support training, academic management, and administrative operations.

// Key Features:
// - Role-based access for Admin, Trainers, and Students
// - Secure authentication and authorization
// - Digital attendance management
// - Homework assignment and evaluation system
// - Fee management and payment tracking
// - Student project grouping and management
// - Centralized admin dashboard for complete system control

// Technology Stack:
// - Frontend: React.js
// - Backend: Node.js, Express.js
// - Database: MongoDB
// - Architecture: MERN Stack
// - Deployment: Vercel (Frontend)

// Project Status:
// - Ongoing development with continuous feature enhancements

// Note:
// - Do NOT share GitHub links for any project.

// Skills:
// React.js, Node.js, Express.js, MongoDB, JavaScript, Python, Java, C, SQL, Git/GitHub, Flask, REST APIs, Deployment, Machine Learning basics

// Languages:
// English, Hindi, Kannada

// Social Profiles:
// - LinkedIn: https://linkedin.com/in/prasad-patil-614a6b330/
// - GitHub: https://github.com/prasad-patil22
// - LeetCode: https://leetcode.com/u/prasad2209/
// - Portfolio: https://prasadpatil2209.vercel.app/

// Personal Details:
// Address: Haragapur, Sankeshwar, Belagavi District, Karnataka
// Date of Birth: 22 September 2004

// Rules:
// Rules:
// 1. Answer STRICTLY using ONLY the information provided in this resume context.
// 2. Do NOT provide information about topics unrelated to this profile such as emotions, love, games, movies, personal opinions, or general knowledge.
//     if ask about this say sorry iam not able to respose plz ask prasad's related quetions
// 3. When the user asks about "projects", "project list", or "what projects", ONLY list the project names without explanations.
// 4. Explain a project ONLY when the user explicitly asks to explain, describe, or give details about a specific project (for example: "Explain AI-Biller" or "Tell me about CRIMSON").
// 5. Do NOT mix explanations of multiple projects unless explicitly requested.
// 6. Do NOT share GitHub links for any project under any circumstance.
// 7. If the requested information is not present in this resume or social profiles, respond with:
//    "Sorry, this information is not available. Please contact Prasad at patilprasad3808@gmail.com or 8549076433."

// `;


//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     const sendMessage = async () => {
//         if (!input.trim()) return;

//         const userMessage = { role: "user", content: input };
//         const updatedMessages = [...messages, userMessage];
//         setMessages(updatedMessages);
//         setInput("");
//         setLoading(true);
//         setShowWelcome(false);

//         try {
//             const res = await fetch(API_URL, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${API_KEY}`,
//                 },
//                 body: JSON.stringify({
//                     model: "llama-3.1-8b-instant",
//                     messages: [
//                         { role: "system", content: RESUME_CONTEXT },
//                         ...updatedMessages,
//                     ],
//                     temperature: 0.2,
//                     max_tokens: 512,
//                 }),
//             });

//             if (!res.ok) {
//                 const err = await res.text();
//                 console.error("Groq Error:", err);
//                 throw new Error("Groq request failed");
//             }

//             const data = await res.json();
//             const botReply = data.choices[0].message.content;

//             setMessages((prev) => [
//                 ...prev,
//                 { role: "assistant", content: botReply },
//             ]);
//         } catch (error) {
//             setMessages((prev) => [
//                 ...prev,
//                 { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
//             ]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             sendMessage();
//         }
//     };

//     const clearChat = () => {
//         setMessages([]);
//         setShowWelcome(true);
//     };

//     if (isMinimized) {
//         return (
//             <div style={styles.minimizedContainer} onClick={() => setIsMinimized(false)}>
//                 <div style={styles.minimizedContent}>
//                     <FaRobot style={styles.minimizedIcon} />
//                     <span style={styles.minimizedText}>Ask me about Prasad</span>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>
//             {/* Floating Avatar */}
//             {!isOpen && (
//                 <div 
//                     style={styles.avatarContainer}
//                     onMouseEnter={() => setIsVisible(true)}
//                     onMouseLeave={() => setIsVisible(false)}
//                     onClick={() => setIsOpen(true)}
//                 >
//                     <div style={styles.avatar}>
//                         <FaRobot style={styles.avatarIcon} />
//                     </div>
//                     {isVisible && (
//                         <div style={styles.speechBubble}>
//                             Hi! Ask me about Prasad's skills, projects, and experience.
//                         </div>
//                     )}
//                 </div>
//             )}

//             {/* Chat Window */}
//             {isOpen && (
//                 <div style={styles.chatContainer}>
//                     <div style={styles.chatHeader}>
//                         <div style={styles.headerLeft}>
//                             <FaRobot style={styles.headerIcon} />
//                             <div>
//                                 <h3 style={styles.headerTitle}>Prasad's AI Assistant</h3>
//                                 <p style={styles.headerSubtitle}>Ask about my skills, projects & experience</p>
//                             </div>
//                         </div>
//                         <div style={styles.headerActions}>
//                             <button 
//                                 onClick={() => setIsMinimized(true)}
//                                 style={styles.iconButton}
//                                 title="Minimize"
//                             >
//                                 <FaCompress />
//                             </button>
//                             <button 
//                                 onClick={clearChat}
//                                 style={styles.iconButton}
//                                 title="Clear Chat"
//                             >
//                                 Clear
//                             </button>
//                             <button 
//                                 onClick={() => setIsOpen(false)}
//                                 style={styles.iconButton}
//                                 title="Close"
//                             >
//                                 <FaTimes />
//                             </button>
//                         </div>
//                     </div>

//                     <div style={styles.messagesContainer}>
//                         {showWelcome && (
//                             <div style={styles.welcomeMessage}>
//                                 <div style={styles.botMessage}>
//                                     <strong>🤖 AI Assistant:</strong>
//                                     <p>Hello! I'm Prasad's AI assistant. You can ask me about Prasad's:</p>
//                                     <ul style={styles.suggestionList}>
//                                         <li>📚 Education & qualifications</li>
//                                         <li>💼 Work experience & skills</li>
//                                         <li>🚀 Projects </li>
//                                         <li>📞 Contact information</li>
//                                         <li>🔗 Social media Links</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         )}

//                         {messages.map((msg, i) => (
//                             <div 
//                                 key={i} 
//                                 style={msg.role === "user" ? styles.userMessage : styles.botMessage}
//                             >
//                                 <strong>{msg.role === "user" ? "👤 You:" : "🤖 AI Assistant:"}</strong>
//                                 <div style={styles.messageContent}>
//                                     {msg.content.split('\n').map((line, idx) => (
//                                         <p key={idx} style={{ margin: '4px 0' }}>
//                                             {line}
//                                         </p>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
                        
//                         {loading && (
//                             <div style={styles.botMessage}>
//                                 <strong>🤖 AI Assistant:</strong>
//                                 <div style={styles.typingIndicator}>
//                                     <span style={styles.dot}></span>
//                                     <span style={styles.dot}></span>
//                                     <span style={styles.dot}></span>
//                                 </div>
//                             </div>
//                         )}
//                         <div ref={messagesEndRef} />
//                     </div>

//                     <div style={styles.inputContainer}>
//                         <input
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={handleKeyPress}
//                             placeholder="Ask about skills, projects, education..."
//                             style={styles.input}
//                             disabled={loading}
//                         />
//                         <button
//                             onClick={sendMessage}
//                             style={styles.sendButton}
//                             disabled={loading || !input.trim()}
//                         >
//                             {loading ? "..." : "Send"}
//                         </button>
//                     </div>
//                 </div>
//             )}

//             <style jsx>{`
//                 @keyframes bounce {
//                     0%, 100% { transform: translateY(0); }
//                     50% { transform: translateY(-5px); }
//                 }

//                 @keyframes fadeIn {
//                     from { opacity: 0; transform: translateY(10px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }

//                 @keyframes pulse {
//                     0%, 100% { opacity: 1; }
//                     50% { opacity: 0.5; }
//                 }

//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px); }
//                     50% { transform: translateY(-10px); }
//                 }
//             `}</style>
//         </>
//     );
// };

// const styles = {
//     // Floating Avatar
//     avatarContainer: {
//         position: 'fixed',
//         bottom: '20px',
//         right: '20px',
//         zIndex: 9999,
//         cursor: 'pointer',
//         animation: 'float 3s ease-in-out infinite',
//     },
//     avatar: {
//         width: '60px',
//         height: '60px',
//         borderRadius: '50%',
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
//         border: '3px solid white',
//         transition: 'all 0.3s ease',
//     },
//     avatarIcon: {
//         fontSize: '28px',
//         color: 'white',
//     },
//     speechBubble: {
//         position: 'absolute',
//         bottom: '70px',
//         right: '0',
//         background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
//         color: 'white',
//         padding: '10px 14px',
//         borderRadius: '18px 18px 4px 18px',
//         maxWidth: '220px',
//         fontSize: '13px',
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
//         border: '1px solid rgba(255, 255, 255, 0.1)',
//         animation: 'fadeIn 0.3s ease',
//         zIndex: 10000,
//     },

//     // Chat Window
//     chatContainer: {
//         position: 'fixed',
//         top: '80px', // Positioned below navbar (approx height)
//         right: '20px',
//         width: '350px',
//         height: 'calc(100vh - 120px)', // Full height minus navbar and bottom margin
//         background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
//         borderRadius: '16px',
//         boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//         display: 'flex',
//         flexDirection: 'column',
//         border: '1px solid rgba(255, 255, 255, 0.1)',
//         overflow: 'hidden',
//         zIndex: 10000,
//         animation: 'fadeIn 0.3s ease',
//     },
//     chatHeader: {
//         background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
//         color: 'white',
//         padding: '14px 16px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//         flexShrink: 0,
//     },
//     headerLeft: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: '10px',
//     },
//     headerIcon: {
//         fontSize: '22px',
//     },
//     headerTitle: {
//         margin: 0,
//         fontSize: '15px',
//         fontWeight: '600',
//     },
//     headerSubtitle: {
//         margin: 0,
//         fontSize: '11px',
//         opacity: 0.9,
//     },
//     headerActions: {
//         display: 'flex',
//         gap: '6px',
//     },
//     iconButton: {
//         background: 'rgba(255, 255, 255, 0.1)',
//         border: 'none',
//         color: 'white',
//         padding: '5px 10px',
//         borderRadius: '6px',
//         cursor: 'pointer',
//         fontSize: '11px',
//         fontWeight: '500',
//         transition: 'all 0.2s ease',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '4px',
//     },
//     iconButtonHover: {
//         background: 'rgba(255, 255, 255, 0.2)',
//     },

//     // Messages Container
//     messagesContainer: {
//         flex: 1,
//         padding: '16px',
//         overflowY: 'auto',
//         background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
//     },
//     welcomeMessage: {
//         marginBottom: '16px',
//         animation: 'fadeIn 0.5s ease',
//     },
//     userMessage: {
//         background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
//         color: 'white',
//         padding: '10px 14px',
//         borderRadius: '16px 16px 4px 16px',
//         marginBottom: '10px',
//         maxWidth: '85%',
//         marginLeft: 'auto',
//         animation: 'fadeIn 0.3s ease',
//     },
//     botMessage: {
//         background: 'rgba(30, 41, 59, 0.8)',
//         color: '#e2e8f0',
//         padding: '10px 14px',
//         borderRadius: '16px 16px 16px 4px',
//         marginBottom: '10px',
//         maxWidth: '85%',
//         border: '1px solid rgba(255, 255, 255, 0.05)',
//         animation: 'fadeIn 0.3s ease',
//     },
//     messageContent: {
//         marginTop: '6px',
//         fontSize: '13px',
//         lineHeight: '1.4',
//     },
//     suggestionList: {
//         margin: '8px 0',
//         paddingLeft: '18px',
//         fontSize: '13px',
//     },
//     tipText: {
//         fontSize: '11px',
//         opacity: 0.8,
//         marginTop: '8px',
//         fontStyle: 'italic',
//     },

//     // Typing Indicator
//     typingIndicator: {
//         display: 'flex',
//         alignItems: 'center',
//         marginTop: '8px',
//     },
//     dot: {
//         width: '7px',
//         height: '7px',
//         borderRadius: '50%',
//         backgroundColor: '#94a3b8',
//         margin: '0 2px',
//         animation: 'pulse 1.4s ease-in-out infinite',
//     },

//     // Input Area
//     inputContainer: {
//         padding: '14px',
//         borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//         background: 'rgba(15, 23, 42, 0.9)',
//         display: 'flex',
//         gap: '8px',
//         flexShrink: 0,
//     },
//     input: {
//         flex: 1,
//         padding: '10px 14px',
//         borderRadius: '10px',
//         border: '1px solid rgba(255, 255, 255, 0.1)',
//         background: 'rgba(30, 41, 59, 0.8)',
//         color: 'white',
//         fontSize: '13px',
//         outline: 'none',
//         transition: 'all 0.2s ease',
//     },
//     inputFocus: {
//         borderColor: '#6366f1',
//         boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.2)',
//     },
//     sendButton: {
//         padding: '10px 20px',
//         background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
//         color: 'white',
//         border: 'none',
//         borderRadius: '10px',
//         cursor: 'pointer',
//         fontWeight: '600',
//         fontSize: '13px',
//         transition: 'all 0.2s ease',
//         minWidth: '70px',
//     },
//     sendButtonDisabled: {
//         opacity: 0.5,
//         cursor: 'not-allowed',
//     },

//     // Minimized View
//     minimizedContainer: {
//         position: 'fixed',
//         bottom: '20px',
//         right: '20px',
//         background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
//         color: 'white',
//         padding: '10px 16px',
//         borderRadius: '40px',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '8px',
//         boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
//         zIndex: 9999,
//         animation: 'bounce 2s ease-in-out infinite',
//         border: '2px solid white',
//     },
//     minimizedContent: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: '8px',
//     },
//     minimizedIcon: {
//         fontSize: '18px',
//     },
//     minimizedText: {
//         fontSize: '13px',
//         fontWeight: '500',
//     },

//     // Media Queries for Mobile
//     '@media (max-width: 768px)': {
//         chatContainer: {
//             position: 'fixed',
//             top: '70px',
//             right: '10px',
//             left: '10px',
//             width: 'calc(100% - 20px)',
//             height: 'calc(100vh - 100px)',
//             borderRadius: '12px',
//         },
//         avatarContainer: {
//             bottom: '15px',
//             right: '15px',
//         },
//         avatar: {
//             width: '50px',
//             height: '50px',
//         },
//         avatarIcon: {
//             fontSize: '24px',
//         },
//         speechBubble: {
//             bottom: '60px',
//             right: '0',
//             maxWidth: '180px',
//             fontSize: '12px',
//             padding: '8px 12px',
//         },
//         chatHeader: {
//             padding: '12px 14px',
//         },
//         headerTitle: {
//             fontSize: '14px',
//         },
//         headerSubtitle: {
//             fontSize: '10px',
//         },
//         iconButton: {
//             padding: '4px 8px',
//             fontSize: '10px',
//         },
//         messagesContainer: {
//             padding: '12px',
//         },
//         userMessage: {
//             padding: '8px 12px',
//             fontSize: '12px',
//         },
//         botMessage: {
//             padding: '8px 12px',
//             fontSize: '12px',
//         },
//         suggestionList: {
//             fontSize: '12px',
//             paddingLeft: '16px',
//         },
//         inputContainer: {
//             padding: '12px',
//         },
//         input: {
//             padding: '8px 12px',
//             fontSize: '12px',
//         },
//         sendButton: {
//             padding: '8px 16px',
//             fontSize: '12px',
//             minWidth: '60px',
//         },
//         minimizedContainer: {
//             bottom: '15px',
//             right: '15px',
//             padding: '8px 14px',
//         },
//         minimizedIcon: {
//             fontSize: '16px',
//         },
//         minimizedText: {
//             fontSize: '12px',
//         },
//     },

//     '@media (max-width: 480px)': {
//         chatContainer: {
//             top: '60px',
//             right: '8px',
//             left: '8px',
//             width: 'calc(100% - 16px)',
//             height: 'calc(100vh - 90px)',
//         },
//         avatarContainer: {
//             bottom: '10px',
//             right: '10px',
//         },
//         avatar: {
//             width: '45px',
//             height: '45px',
//         },
//         avatarIcon: {
//             fontSize: '22px',
//         },
//     },
// };

// export default Chatbot;


import { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaCompress } from "react-icons/fa";

const API_KEY = process.env.REACT_APP_GROQ_API_KEY;
console.log("Your key is", API_KEY);
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const RESUME_CONTEXT = `
Name: Prasad I Patil
Role: MCA student with hands-on experience as a Full Stack Developer

Contact:
Email: patilprasad3808@gmail.com
Mobile: 8549076433

Summary:
BCA graduate currently pursuing MCA. MERN Stack Intern with hands-on experience in C, Java, Python, JavaScript, MERN Stack, Machine Learning, model training, and Flask. Passionate about building scalable web applications and AI-powered solutions.

Education:
- MCA (Pursuing), Presidency College, Kempapura Hebbal, Bangalore (2025–2027)
- BCA, SJPN BCA College, Nidasoshi (2022–2025), CGPA: 8.22
- PUC, SJPN PU College, Nidasoshi (2020–2022), Percentage: 61.3%
- High School, Bharatesh PU College High School, Bagewadi (2020), Percentage: 75.68%

Experience:
Web Developer Intern — Ligand Software Solutions (Feb 2025 – Present)
- Working on MERN Stack and AI-based projects using Flask
- Developed responsive and user-friendly user interfaces
- Integrated backend services and REST APIs
- Contributed to live client projects and production-ready applications

Projects:
1) AI-Biller — AI-Based Billing System  
2) CRIMSON — AI-Based Criminal Activity Detection  
3) Ligand Software Solutions Website (Official Company Website)  
4) Gururaj Foundation Website (NGO Website)  
5) Ligand Work-Space — Ongoing LMS Project  

explaintion


1) AI-Biller — AI-Based Billing System  
Developed an AI-powered automated billing system that modernizes the traditional checkout process.

- Uses YOLO-based object detection to identify products placed in a smart basket
- Updates the bill in real time without manual barcode scanning
- MERN stack web application manages authentication, billing, and transactions
- Automatically generates and emails the bill after payment

Key Features:
- Real-time item detection using computer vision
- No manual barcode scanning
- Reduced checkout time and queues
- Automatic bill generation and email delivery

Tech Stack:
Python, YOLO, MongoDB, Express.js, React.js, Node.js


2) CRIMSON — AI-Based Criminal Activity Detection  
CRIMSON is an AI-powered criminal activity detection system designed to assist authorities by identifying criminals, weapons, and violent activities in real time.

Key Features:

Admin Complaint System:
- Admin can register complaints by uploading criminal photos with case details
- Complaint data and images are securely stored in the database

Face Detection and Identification:
- Continuous monitoring of video input
- Real-time face matching with registered criminal images
- Automatically captures location details and visual proof on detection

Real-Time Alerts:
- Sends instant alerts to the admin with detection details and evidence

Weapon and Violence Detection:
- Machine learning models trained to detect weapons and violent activities
- Models trained using public datasets from Kaggle
- Detects threats even when face recognition is not possible

Technology Used:
- Backend: Flask (Python)
- Machine Learning: Custom-trained models for face recognition, weapon detection, and violence detection
- Datasets: Kaggle datasets
- Database: Stores complaints, detection logs, images, location data, and alerts

Use Case:
- Surveillance systems for public safety
- Detection of known criminals
- Identification of weapons and violent behavior
- Real-time alerts with proof and location details


3) Ligand Software Solutions Website (Official Company Website)  
Website: https://ligandsoftwares.com

- Developed the official company website using the MERN stack
- Modern dark-themed UI with a custom cursor
- Smooth animations and interactive components
- Fully dynamic admin panel for content management

Key Features:
- Admin can add, update, and manage website content dynamically
- Real-time database-driven content updates
- No code changes required for content management

Technology Stack:
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Architecture: MERN Stack


4) Gururaj Foundation Website (NGO Website)  
Website: https://gururajfoundation.com

- Designed and developed a responsive NGO website
- Showcases the organization's mission, activities, and social initiatives

Key Features:
- Clean and user-friendly NGO-focused design
- Fully responsive across mobile, tablet, and desktop devices
- Easy-to-update content sections
- Optimized for accessibility and clarity

Technology Used:
- Frontend: React.js / HTML, CSS, JavaScript
- Deployment: Web hosting with optimized performance


5) Ligand Work-Space — Ongoing LMS Project  
Website: https://liganddevelopers.vercel.app

Ligand Work-Space is an advanced Learning Management System (LMS) currently under development to support training, academic management, and administrative operations.

Key Features:
- Role-based access for Admin, Trainers, and Students
- Secure authentication and authorization
- Digital attendance management
- Homework assignment and evaluation system
- Fee management and payment tracking
- Student project grouping and management
- Centralized admin dashboard for complete system control

Technology Stack:
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Architecture: MERN Stack
- Deployment: Vercel (Frontend)

Project Status:
- Ongoing development with continuous feature enhancements

Note:
- Do NOT share GitHub links for any project.

Skills:
React.js, Node.js, Express.js, MongoDB, JavaScript, Python, Java, C, SQL, Git/GitHub, Flask, REST APIs, Deployment, Machine Learning basics

Languages:
English, Hindi, Kannada

Social Profiles:
- LinkedIn: https://linkedin.com/in/prasad-patil-614a6b330/
- GitHub: https://github.com/prasad-patil22
- LeetCode: https://leetcode.com/u/prasad2209/
- Portfolio: https://prasadpatil2209.vercel.app/

Personal Details:
Address: Haragapur, Sankeshwar, Belagavi District, Karnataka
Date of Birth: 22 September 2004

Rules:
Rules:
1. Answer STRICTLY using ONLY the information provided in this resume context.
2. Do NOT provide information about topics unrelated to this profile such as emotions, love, games, movies, personal opinions, or general knowledge.
    if ask about this say sorry iam not able to respose plz ask prasad's related quetions
3. When the user asks about "projects", "project list", or "what projects", ONLY list the project names without explanations.
4. Explain a project ONLY when the user explicitly asks to explain, describe, or give details about a specific project (for example: "Explain AI-Biller" or "Tell me about CRIMSON").
5. Do NOT mix explanations of multiple projects unless explicitly requested.
6. Do NOT share GitHub links for any project under any circumstance.
7. If the requested information is not present in this resume or social profiles, respond with:
   "Sorry, this information is not available. Please contact Prasad at patilprasad3808@gmail.com or 8549076433."

`;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && !isMinimized && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen, isMinimized]);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setLoading(true);
        setShowWelcome(false);

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        { role: "system", content: RESUME_CONTEXT },
                        ...updatedMessages,
                    ],
                    temperature: 0.2,
                    max_tokens: 512,
                }),
            });

            if (!res.ok) {
                const err = await res.text();
                console.error("Groq Error:", err);
                throw new Error("Groq request failed");
            }

            const data = await res.json();
            const botReply = data.choices[0].message.content;

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: botReply },
            ]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                { 
                    role: "assistant", 
                    content: "Sorry, I encountered an error. Please try again or check your internet connection." 
                },
            ]);
        } finally {
            setLoading(false);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 50);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey && !loading) {
            e.preventDefault();
            sendMessage();
        }
    };

    const clearChat = () => {
        setMessages([]);
        setShowWelcome(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 50);
    };

    if (isMinimized) {
        return (
            <div style={styles.minimizedContainer} onClick={() => setIsMinimized(false)}>
                <div style={styles.minimizedContent}>
                    <FaRobot style={styles.minimizedIcon} />
                    <span style={styles.minimizedText}>Ask about Prasad</span>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Floating Avatar */}
            {!isOpen && (
                <div 
                    style={styles.avatarContainer}
                    onMouseEnter={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                    onClick={() => {
                        setIsOpen(true);
                        setTimeout(() => {
                            inputRef.current?.focus();
                        }, 200);
                    }}
                >
                    <div style={styles.avatar}>
                        <FaRobot style={styles.avatarIcon} />
                    </div>
                    {isVisible && (
                        <div style={styles.speechBubble}>
                            Hi! Ask me about Prasad's skills, projects, and experience.
                        </div>
                    )}
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div style={styles.chatContainer}>
                    <div style={styles.chatHeader}>
                        <div style={styles.headerLeft}>
                            <FaRobot style={styles.headerIcon} />
                            <div>
                                <h3 style={styles.headerTitle}>Prasad's AI Assistant</h3>
                                <p style={styles.headerSubtitle}>Ask about my skills, projects & experience</p>
                            </div>
                        </div>
                        <div style={styles.headerActions}>
                            <button 
                                onClick={() => setIsMinimized(true)}
                                style={styles.iconButton}
                                title="Minimize"
                                disabled={loading}
                            >
                                <FaCompress />
                            </button>
                            <button 
                                onClick={clearChat}
                                style={styles.iconButton}
                                title="Clear Chat"
                                disabled={loading}
                            >
                                Clear
                            </button>
                            <button 
                                onClick={() => setIsOpen(false)}
                                style={styles.iconButton}
                                title="Close"
                                disabled={loading}
                            >
                                <FaTimes />
                            </button>
                        </div>
                    </div>

                    <div style={styles.messagesContainer}>
                        {showWelcome && (
                            <div style={styles.welcomeMessage}>
                                <div style={styles.botMessage}>
                                    <strong>🤖 AI Assistant:</strong>
                                    <p>Hello! I'm Prasad's AI assistant. You can ask me about Prasad's:</p>
                                    <ul style={styles.suggestionList}>
                                        <li>📚 Education & qualifications</li>
                                        <li>💼 Work experience & skills</li>
                                        <li>🚀 Projects </li>
                                        <li>📞 Contact information</li>
                                        <li>🔗 Social media Links</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {messages.map((msg, i) => (
                            <div 
                                key={i} 
                                style={msg.role === "user" ? styles.userMessage : styles.botMessage}
                            >
                                <strong>{msg.role === "user" ? "👤 You:" : "🤖 AI Assistant:"}</strong>
                                <div style={styles.messageContent}>
                                    {msg.content.split('\n').map((line, idx) => (
                                        <p key={idx} style={{ margin: '4px 0' }}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                        
                        {loading && (
                            <div style={styles.botMessage}>
                                <strong>🤖 AI Assistant:</strong>
                                <div style={styles.typingIndicator}>
                                    <span style={styles.dot}></span>
                                    <span style={styles.dot}></span>
                                    <span style={styles.dot}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={styles.inputContainer}>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about skills, projects, education..."
                            style={{
                                ...styles.input,
                                ...(loading && styles.inputDisabled)
                            }}
                            disabled={loading}
                        />
                        <button
                            onClick={sendMessage}
                            style={{
                                ...styles.sendButton,
                                ...((loading || !input.trim()) && styles.sendButtonDisabled)
                            }}
                            disabled={loading || !input.trim()}
                        >
                            {loading ? "..." : "Send"}
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                /* Mobile-specific media queries */
                @media (max-width: 768px) {
                    /* Ensure chat container doesn't overlap with navbar */
                    .chat-container-mobile {
                        top: 60px !important;
                        height: calc(100vh - 80px) !important;
                        width: calc(100% - 20px) !important;
                        left: 10px !important;
                        right: 10px !important;
                    }
                    
                    /* Ensure avatar is properly positioned */
                    .avatar-mobile {
                        bottom: 15px !important;
                        right: 15px !important;
                    }
                    
                    /* Adjust header for mobile */
                    .chat-header-mobile {
                        padding: 10px 12px !important;
                    }
                    
                    /* Adjust message padding for mobile */
                    .message-mobile {
                        padding: 8px 10px !important;
                        max-width: 90% !important;
                    }
                    
                    /* Make input area more compact */
                    .input-container-mobile {
                        padding: 10px !important;
                    }
                    
                    .input-mobile {
                        padding: 8px 10px !important;
                        font-size: 14px !important;
                    }
                    
                    .send-button-mobile {
                        padding: 8px 15px !important;
                        min-width: 60px !important;
                        font-size: 14px !important;
                    }
                }

                @media (max-width: 480px) {
                    .chat-container-mobile {
                        top: 50px !important;
                        height: calc(100vh - 70px) !important;
                    }
                    
                    .header-title-mobile {
                        font-size: 14px !important;
                    }
                    
                    .header-subtitle-mobile {
                        font-size: 10px !important;
                    }
                    
                    .icon-button-mobile {
                        padding: 4px 6px !important;
                        font-size: 10px !important;
                    }
                }
            `}</style>
        </>
    );
};

const styles = {
    // Floating Avatar
    avatarContainer: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        cursor: 'pointer',
        animation: 'float 3s ease-in-out infinite',
    },
    avatar: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
        border: '3px solid white',
        transition: 'all 0.3s ease',
    },
    avatarIcon: {
        fontSize: '28px',
        color: 'white',
    },
    speechBubble: {
        position: 'absolute',
        bottom: '70px',
        right: '0',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white',
        padding: '10px 14px',
        borderRadius: '18px 18px 4px 18px',
        maxWidth: '220px',
        fontSize: '13px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        animation: 'fadeIn 0.3s ease',
        zIndex: 10000,
    },

    // Chat Window - DESKTOP
    chatContainer: {
        position: 'fixed',
        top: '80px',
        right: '20px',
        width: '350px',
        height: 'calc(100vh - 120px)',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        zIndex: 10000,
        animation: 'fadeIn 0.3s ease',
    },
    chatHeader: {
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        padding: '14px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        flexShrink: 0,
    },
    headerLeft: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    headerIcon: {
        fontSize: '22px',
    },
    headerTitle: {
        margin: 0,
        fontSize: '15px',
        fontWeight: '600',
    },
    headerSubtitle: {
        margin: 0,
        fontSize: '11px',
        opacity: 0.9,
    },
    headerActions: {
        display: 'flex',
        gap: '6px',
    },
    iconButton: {
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'none',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '11px',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },

    // Messages Container
    messagesContainer: {
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
    },
    welcomeMessage: {
        marginBottom: '16px',
        animation: 'fadeIn 0.5s ease',
    },
    userMessage: {
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: 'white',
        padding: '10px 14px',
        borderRadius: '16px 16px 4px 16px',
        marginBottom: '10px',
        maxWidth: '85%',
        marginLeft: 'auto',
        animation: 'fadeIn 0.3s ease',
    },
    botMessage: {
        background: 'rgba(30, 41, 59, 0.8)',
        color: '#e2e8f0',
        padding: '10px 14px',
        borderRadius: '16px 16px 16px 4px',
        marginBottom: '10px',
        maxWidth: '85%',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        animation: 'fadeIn 0.3s ease',
    },
    messageContent: {
        marginTop: '6px',
        fontSize: '13px',
        lineHeight: '1.4',
    },
    suggestionList: {
        margin: '8px 0',
        paddingLeft: '18px',
        fontSize: '13px',
    },

    // Typing Indicator
    typingIndicator: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '8px',
    },
    dot: {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        backgroundColor: '#94a3b8',
        margin: '0 2px',
        animation: 'pulse 1.4s ease-in-out infinite',
    },

    // Input Area
    inputContainer: {
        padding: '14px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(15, 23, 42, 0.9)',
        display: 'flex',
        gap: '8px',
        flexShrink: 0,
    },
    input: {
        flex: 1,
        padding: '10px 14px',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(30, 41, 59, 0.8)',
        color: 'white',
        fontSize: '13px',
        outline: 'none',
        transition: 'all 0.2s ease',
    },
    inputDisabled: {
        opacity: 0.6,
        cursor: 'not-allowed',
    },
    sendButton: {
        padding: '10px 20px',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '13px',
        transition: 'all 0.2s ease',
        minWidth: '70px',
    },
    sendButtonDisabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
    },

    // Minimized View
    minimizedContainer: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        padding: '10px 16px',
        borderRadius: '40px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
        zIndex: 9999,
        animation: 'bounce 2s ease-in-out infinite',
        border: '2px solid white',
    },
    minimizedContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    minimizedIcon: {
        fontSize: '18px',
    },
    minimizedText: {
        fontSize: '13px',
        fontWeight: '500',
    },

    // MOBILE STYLES - Using different approach
    '@media (max-width: 768px)': {
        avatarContainer: {
            position: 'fixed',
            bottom: '15px',
            right: '15px',
            zIndex: 9999,
            cursor: 'pointer',
            animation: 'float 3s ease-in-out infinite',
        },
        avatar: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
            border: '2px solid white',
        },
        avatarIcon: {
            fontSize: '24px',
            color: 'white',
        },
        speechBubble: {
            position: 'absolute',
            bottom: '60px',
            right: '0',
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '16px 16px 4px 16px',
            maxWidth: '180px',
            fontSize: '12px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'fadeIn 0.3s ease',
            zIndex: 10000,
        },
        chatContainer: {
            position: 'fixed',
            top: '60px',
            right: '10px',
            left: '10px',
            width: 'calc(100% - 20px)',
            height: 'calc(100vh - 80px)',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '12px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            zIndex: 10000,
            animation: 'fadeIn 0.3s ease',
        },
        chatHeader: {
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: 'white',
            padding: '10px 12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            flexShrink: 0,
        },
        headerLeft: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
        },
        headerIcon: {
            fontSize: '20px',
        },
        headerTitle: {
            margin: 0,
            fontSize: '14px',
            fontWeight: '600',
        },
        headerSubtitle: {
            margin: 0,
            fontSize: '10px',
            opacity: 0.9,
        },
        headerActions: {
            display: 'flex',
            gap: '4px',
        },
        iconButton: {
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: 'white',
            padding: '4px 6px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '10px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
        },
        messagesContainer: {
            flex: 1,
            padding: '12px',
            overflowY: 'auto',
            background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        },
        welcomeMessage: {
            marginBottom: '12px',
            animation: 'fadeIn 0.5s ease',
        },
        userMessage: {
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: 'white',
            padding: '8px 10px',
            borderRadius: '14px 14px 4px 14px',
            marginBottom: '8px',
            maxWidth: '90%',
            marginLeft: 'auto',
            animation: 'fadeIn 0.3s ease',
        },
        botMessage: {
            background: 'rgba(30, 41, 59, 0.8)',
            color: '#e2e8f0',
            padding: '8px 10px',
            borderRadius: '14px 14px 14px 4px',
            marginBottom: '8px',
            maxWidth: '90%',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            animation: 'fadeIn 0.3s ease',
        },
        messageContent: {
            marginTop: '4px',
            fontSize: '12px',
            lineHeight: '1.4',
        },
        suggestionList: {
            margin: '6px 0',
            paddingLeft: '16px',
            fontSize: '12px',
        },
        inputContainer: {
            padding: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(15, 23, 42, 0.9)',
            display: 'flex',
            gap: '6px',
            flexShrink: 0,
        },
        input: {
            flex: 1,
            padding: '8px 10px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(30, 41, 59, 0.8)',
            color: 'white',
            fontSize: '12px',
            outline: 'none',
            transition: 'all 0.2s ease',
        },
        sendButton: {
            padding: '8px 15px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '12px',
            transition: 'all 0.2s ease',
            minWidth: '60px',
        },
        minimizedContainer: {
            position: 'fixed',
            bottom: '15px',
            right: '15px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '30px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
            zIndex: 9999,
            animation: 'bounce 2s ease-in-out infinite',
            border: '2px solid white',
        },
        minimizedIcon: {
            fontSize: '16px',
        },
        minimizedText: {
            fontSize: '12px',
            fontWeight: '500',
        },
    },

    '@media (max-width: 480px)': {
        chatContainer: {
            top: '50px',
            height: 'calc(100vh - 70px)',
            right: '8px',
            left: '8px',
            width: 'calc(100% - 16px)',
        },
        avatarContainer: {
            bottom: '10px',
            right: '10px',
        },
        avatar: {
            width: '45px',
            height: '45px',
        },
        avatarIcon: {
            fontSize: '22px',
        },
        headerTitle: {
            fontSize: '13px',
        },
        headerSubtitle: {
            fontSize: '9px',
        },
        iconButton: {
            padding: '3px 5px',
            fontSize: '9px',
        },
    },
};

export default Chatbot;