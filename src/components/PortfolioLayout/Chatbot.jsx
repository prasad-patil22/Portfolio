
import { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaCompress } from "react-icons/fa";

const API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const chatContainerRef = useRef(null);

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
Website: https://www.ligand-softwares.vercel.app

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

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        // Handle keyboard appearance on mobile
        const handleResize = () => {
            if (isMobile && isOpen && chatContainerRef.current) {
                setTimeout(() => {
                    if (messagesEndRef.current) {
                        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            }
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile, isOpen]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
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
                scrollToBottom();
            }, 100);
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
            scrollToBottom();
        }, 100);
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
                    data-avatar="true"
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
                    {isVisible && !isMobile && (
                        <div style={styles.speechBubble}>
                            Hi! Ask me about Prasad's skills, projects, and experience.
                        </div>
                    )}
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div 
                    ref={chatContainerRef}
                    style={isMobile ? styles.mobileChatContainer : styles.chatContainer}
                >
                    <div style={styles.chatWrapper}>
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
                                        <div style={styles.messageHeader}>
                                            <strong>🤖 AI Assistant:</strong>
                                        </div>
                                        <div style={styles.messageContent}>
                                            <p>Hello! I'm Prasad's AI assistant. You can ask me about Prasad's:</p>
                                            <ul style={styles.suggestionList}>
                                                <li style={styles.suggestionItem}>📚 Education & qualifications</li>
                                                <li style={styles.suggestionItem}>💼 Work experience & skills</li>
                                                <li style={styles.suggestionItem}>🚀 Projects </li>
                                                <li style={styles.suggestionItem}>📞 Contact information</li>
                                                <li style={styles.suggestionItem}>🔗 Social media Links</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {messages.map((msg, i) => (
                                <div 
                                    key={i} 
                                    style={msg.role === "user" ? styles.userMessage : styles.botMessage}
                                >
                                    <div style={styles.messageHeader}>
                                        <strong>{msg.role === "user" ? "👤 You:" : "🤖 AI Assistant:"}</strong>
                                    </div>
                                    <div style={styles.messageContent}>
                                        {msg.content.split('\n').map((line, idx) => (
                                            <p key={idx} style={styles.messageParagraph}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            
                            {loading && (
                                <div style={styles.botMessage}>
                                    <div style={styles.messageHeader}>
                                        <strong>🤖 AI Assistant:</strong>
                                    </div>
                                    <div style={styles.typingContainer}>
                                        <div style={styles.typingIndicator}>
                                            <span className="dot" style={styles.dot}></span>
                                            <span className="dot" style={styles.dot}></span>
                                            <span className="dot" style={styles.dot}></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} style={styles.bottomSpacer} />
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
                </div>
            )}

            <style jsx>{`
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

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }

                .dot:nth-child(1) { animation-delay: 0s; }
                .dot:nth-child(2) { animation-delay: 0.2s; }
                .dot:nth-child(3) { animation-delay: 0.4s; }

                /* Prevent body scrolling when chat is open on mobile */
                body.chat-open {
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                    height: 100%;
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

    // Desktop Chat Container with full padding
    chatContainer: {
        position: 'fixed',
        top: '80px',
        right: '20px',
        width: '420px', // Increased width for better padding
        height: 'calc(100vh - 120px)',
        maxHeight: '600px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        zIndex: 10000,
        animation: 'fadeIn 0.3s ease',
    },

    // Mobile Chat Container - Bottom sheet with full padding
    mobileChatContainer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '75vh',
        maxHeight: '75vh',
        borderRadius: '20px 20px 0 0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: 'none',
        boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        zIndex: 10001,
        animation: 'fadeIn 0.3s ease',
    },

    // Wrapper for inner content with padding on all sides
    chatWrapper: {
        padding: '16px',
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },

    // Header
    chatHeader: {
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        padding: '16px',
        borderRadius: '14px',
        marginBottom: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        flexShrink: 0,
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.2)',
    },
    headerLeft: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    headerIcon: {
        fontSize: '24px',
    },
    headerTitle: {
        margin: 0,
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '1.3',
    },
    headerSubtitle: {
        margin: '4px 0 0 0',
        fontSize: '12px',
        opacity: 0.95,
        lineHeight: '1.2',
    },
    headerActions: {
        display: 'flex',
        gap: '8px',
    },
    iconButton: {
        background: 'rgba(255, 255, 255, 0.15)',
        border: 'none',
        color: 'white',
        padding: '6px 12px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        minHeight: '34px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },

    // Messages Container
    messagesContainer: {
        flex: 1,
        padding: '8px 4px',
        overflowY: 'auto',
        background: 'rgba(15, 23, 42, 0.3)',
        borderRadius: '12px',
        marginBottom: '16px',
        WebkitOverflowScrolling: 'touch',
        border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    welcomeMessage: {
        marginBottom: '16px',
        animation: 'fadeIn 0.5s ease',
    },
    
    // Message Bubbles
    userMessage: {
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: 'white',
        padding: '14px 16px',
        borderRadius: '18px 18px 4px 18px',
        marginBottom: '12px',
        maxWidth: '85%',
        marginLeft: 'auto',
        animation: 'fadeIn 0.3s ease',
        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    botMessage: {
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.95) 100%)',
        color: '#e2e8f0',
        padding: '14px 16px',
        borderRadius: '18px 18px 18px 4px',
        marginBottom: '12px',
        maxWidth: '85%',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        animation: 'fadeIn 0.3s ease',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
    },
    messageHeader: {
        marginBottom: '8px',
        fontSize: '13px',
        fontWeight: '600',
        opacity: 0.95,
    },
    messageContent: {
        fontSize: '14px',
        lineHeight: '1.5',
    },
    messageParagraph: {
        margin: '6px 0',
        padding: 0,
    },
    suggestionList: {
        margin: '12px 0 0 0',
        paddingLeft: '20px',
        fontSize: '13px',
        lineHeight: '1.6',
    },
    suggestionItem: {
        marginBottom: '8px',
        padding: '2px 0',
    },
    bottomSpacer: {
        height: '8px',
    },

    // Typing Indicator
    typingContainer: {
        marginTop: '10px',
    },
    typingIndicator: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 0',
    },
    dot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#94a3b8',
        animation: 'pulse 1.4s ease-in-out infinite',
    },

    // Input Area
    inputContainer: {
        padding: '0',
        background: 'transparent',
        display: 'flex',
        gap: '12px',
        flexShrink: 0,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: '14px 18px',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        background: 'rgba(30, 41, 59, 0.95)',
        color: 'white',
        fontSize: '15px',
        outline: 'none',
        transition: 'all 0.2s ease',
        minHeight: '48px',
        lineHeight: '1.4',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    inputDisabled: {
        opacity: 0.6,
        cursor: 'not-allowed',
    },
    sendButton: {
        padding: '14px 24px',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '14px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '15px',
        transition: 'all 0.2s ease',
        minWidth: '90px',
        minHeight: '48px',
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
        letterSpacing: '0.3px',
    },
    sendButtonDisabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        boxShadow: 'none',
    },

    // Minimized View
    minimizedContainer: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        padding: '14px 20px',
        borderRadius: '40px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
        zIndex: 9999,
        animation: 'bounce 2s ease-in-out infinite',
        border: '2px solid white',
    },
    minimizedContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    minimizedIcon: {
        fontSize: '22px',
    },
    minimizedText: {
        fontSize: '15px',
        fontWeight: '700',
    },

    // Media Queries for Responsive Design
    '@media (max-width: 768px)': {
        avatarContainer: {
            bottom: '25px',
            right: '25px',
            zIndex: 9999,
        },
        avatar: {
            width: '55px',
            height: '55px',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
            border: '2px solid white',
        },
        avatarIcon: {
            fontSize: '26px',
        },
        speechBubble: {
            display: 'none',
        },
        mobileChatContainer: {
            height: '80vh',
            maxHeight: '80vh',
            borderRadius: '24px 24px 0 0',
            paddingBottom: 'env(safe-area-inset-bottom)',
        },
        chatWrapper: {
            padding: '20px',
        },
        chatHeader: {
            padding: '18px',
            borderRadius: '16px',
            marginBottom: '20px',
        },
        headerLeft: {
            gap: '14px',
        },
        headerIcon: {
            fontSize: '26px',
        },
        headerTitle: {
            fontSize: '17px',
        },
        headerSubtitle: {
            fontSize: '13px',
            marginTop: '5px',
        },
        headerActions: {
            gap: '10px',
        },
        iconButton: {
            padding: '8px 14px',
            fontSize: '13px',
            minHeight: '36px',
        },
        messagesContainer: {
            padding: '12px 8px',
            marginBottom: '20px',
            borderRadius: '14px',
        },
        userMessage: {
            padding: '16px 18px',
            maxWidth: '88%',
            marginBottom: '14px',
        },
        botMessage: {
            padding: '16px 18px',
            maxWidth: '88%',
            marginBottom: '14px',
        },
        messageContent: {
            fontSize: '15px',
        },
        suggestionList: {
            fontSize: '14px',
        },
        input: {
            padding: '16px 20px',
            fontSize: '16px',
            minHeight: '52px',
            borderRadius: '16px',
        },
        sendButton: {
            padding: '16px 28px',
            fontSize: '16px',
            minWidth: '100px',
            minHeight: '52px',
            borderRadius: '16px',
        },
        minimizedContainer: {
            bottom: '25px',
            right: '25px',
            padding: '16px 22px',
        },
        minimizedIcon: {
            fontSize: '24px',
        },
        minimizedText: {
            fontSize: '16px',
        },
    },

    '@media (max-width: 480px)': {
        avatar: {
            width: '50px',
            height: '50px',
        },
        avatarIcon: {
            fontSize: '24px',
        },
        mobileChatContainer: {
            height: '85vh',
            maxHeight: '85vh',
        },
        chatWrapper: {
            padding: '16px',
        },
        chatHeader: {
            padding: '16px',
            marginBottom: '16px',
        },
        headerTitle: {
            fontSize: '16px',
        },
        headerSubtitle: {
            fontSize: '12px',
        },
        iconButton: {
            padding: '7px 12px',
            fontSize: '12px',
        },
        userMessage: {
            padding: '14px 16px',
            maxWidth: '90%',
        },
        botMessage: {
            padding: '14px 16px',
            maxWidth: '90%',
        },
        messageContent: {
            fontSize: '14px',
        },
        input: {
            padding: '14px 16px',
            fontSize: '14px',
        },
        sendButton: {
            padding: '14px 20px',
            fontSize: '14px',
            minWidth: '80px',
        },
    },

    '@media (max-width: 380px)': {
        chatWrapper: {
            padding: '14px',
        },
        chatHeader: {
            padding: '14px',
        },
        headerLeft: {
            gap: '10px',
        },
        headerIcon: {
            fontSize: '22px',
        },
        headerTitle: {
            fontSize: '15px',
        },
        headerSubtitle: {
            fontSize: '11px',
        },
        iconButton: {
            padding: '6px 10px',
            fontSize: '11px',
        },
        input: {
            padding: '12px 14px',
            fontSize: '13px',
        },
        sendButton: {
            padding: '12px 16px',
            fontSize: '13px',
            minWidth: '70px',
        },
    },
};

export default Chatbot;