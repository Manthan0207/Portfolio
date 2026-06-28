project = [
    {
        title: "VestureAI",
        shortDescription: "An AI-powered virtual try-on and personalized fashion e-commerce platform.",
        description: "Vesture AI is a full-stack e-commerce platform that tackles the two biggest problems in online clothes shopping: uncertainty about fit/appearance and the paradox of too much choice. It lets buyers upload a photo to virtually try on clothing before purchasing, and pairs that with a personal-stylist recommendation engine that factors in skintone, body type, age, and style preference. Sellers get a dedicated dashboard with inventory management and sales analytics. 👗",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "Python", "FastAPI", "Tailwind CSS", "Zustand"],
        links: {
            github: "https://github.com/Manthan0207/VestureAI",
        },
        functionality: [
            "AI Virtual Try-On from a User Photo",
            "Personalized Stylist Recommendation Engine",
            "Dual-Backend Architecture (Node.js Commerce + FastAPI AI Service)",
            "Full Authentication with Email Verification",
            "Guided AI-Powered Onboarding for Style Profile",
            "Cart, Checkout, Order Tracking & Reviews",
            "Wishlist",
            "Seller Dashboard with Inventory & Sales Analytics",
        ],
    },




    {
        title: "Expense Tracker MCP Server",
        shortDescription: "An MCP server that lets AI assistants manage your expenses and balance.",
        description: "A Model Context Protocol (MCP) server built with FastMCP that turns expense tracking into a set of tools any MCP-compatible AI assistant can call directly. It maintains a running balance, lets the assistant log and categorize expenses, summarize spending by category and date range, and add or withdraw money, all backed by SQLite with async access. 💰",
        techStack: ["Python", "FastMCP", "SQLite", "aiosqlite"],
        links: {
            github: "https://github.com/Manthan0207/expense-tracker-mcp-server",
        },
        functionality: [
            "Add, List & Delete Expenses",
            "Automatic Balance Deduction & Refund on Delete",
            "Spending Summaries by Category & Date Range",
            "Add Money / Withdraw Money from Balance",
            "Category Resource Exposed via MCP",
            "Async SQLite Persistence",
        ],
    },




    {
        title: "Video Insight AI",
        shortDescription: "A full-stack RAG chatbot that lets you chat with any YouTube video.",
        description: "Video Insight AI is a full-stack RAG chatbot for YouTube content. Paste a video link, and the backend fetches its transcript, chunks and embeds it into Pinecone, then lets you ask questions that are answered strictly from the video's own content. Conversation memory is handled by LangGraph with a SQLite checkpointer, and conversations are automatically summarized after 20 messages to manage context length. 🎬",
        techStack: ["FastAPI", "LangGraph", "LangChain", "Pinecone", "Next.js", "TypeScript", "Tailwind CSS", "SQLite"],
        links: {
            github: "https://github.com/Manthan0207/yt-rag-chatbot",
        },
        functionality: [
            "YouTube Transcript Ingestion with Background Processing",
            "RAG-Based Chat Grounded in Video Transcript",
            "JWT Authentication with Cookie-Based Sessions",
            "Auth Guard via Next.js Middleware",
            "Conversation Summarization to Manage Context Window",
            "Persistent Thread History Across Sessions",
            "Video Processing Status Polling",
        ],
    },




    {
        title: "Blog Writing Agent",
        shortDescription: "A LangGraph agent that researches and writes technical blog posts with images.",
        description: "An autonomous blog-writing agent built with LangGraph. Given a topic, it decides whether to rely on its own knowledge, research the web, or use a hybrid of both, then builds a structured outline, writes each section in parallel using LangGraph workers, merges everything into clean markdown, and generates accompanying images with Gemini before saving the final post. ✍️",
        techStack: ["Python", "LangGraph", "LangChain", "OpenAI", "Tavily", "Gemini"],
        links: {
            github: "https://github.com/Manthan0207/blog-writing-agent",
        },
        functionality: [
            "Topic Routing: Closed-Book / Hybrid / Open-Book",
            "Web Research via Tavily When Needed",
            "Structured Blog Plan Generation",
            "Parallel Section Writing with LangGraph Workers",
            "Automatic Markdown Merge with Image Placeholders",
            "AI-Generated Images via Gemini",
            "Graceful Fallback if Image Generation Fails",
        ],
    },




    {
        title: "RAGBase",
        shortDescription: "A reusable, production-style scaffold for building RAG chatbots.",
        description: "RAGBase is a clonable starting point for building real RAG chatbots without starting from scratch. It comes with a working chat UI with streaming responses, persistent per-user thread history, long-term memory in SQLite, and a FAISS-backed knowledge base — all wired together so you only need to swap in your own documents and prompts to turn it into a fully custom assistant. 📚",
        techStack: ["FastAPI", "LangGraph", "FAISS", "SQLite", "Next.js"],
        links: {
            github: "https://github.com/Manthan0207/RAGBase",
        },
        functionality: [
            "Streaming Chat UI via Server-Sent Events",
            "Per-Thread Chat History Persisted in SQLite",
            "Thread Reload on Refresh Using Thread ID",
            "Long-Term Memory Storage",
            "FAISS-Backed Knowledge Base Retrieval",
            "Modular Design for Swapping in Custom Documents & Prompts",
        ],
    },




    {
        title: "MarketPulse Stock Picker",
        shortDescription: "A multi-agent CrewAI system that researches stocks and picks the best one.",
        description: "MarketPulse Stock Picker is a CrewAI-based multi-agent system that automates a slice of investment research. It finds trending companies in a target sector, runs financial research on each candidate, picks the single best investment opportunity with a written rationale, and pushes the final decision straight to your phone as a notification. 📈",
        techStack: ["Python", "CrewAI", "Pushover API"],
        links: {
            github: "https://github.com/Manthan0207/marketpulse-stock-picker",
        },
        functionality: [
            "Trending Company Discovery in a Target Sector",
            "Automated Financial Research per Candidate",
            "Best-Candidate Selection with Written Reasoning",
            "Push Notification Delivery via Pushover",
            "Structured JSON & Markdown Output Files",
        ],
    },




    {
        title: "Deep Research Agent",
        shortDescription: "An async multi-agent assistant that turns a query into a full research report.",
        description: "Deep Research Agent is an asynchronous multi-agent research assistant. From a single user query, it plans a set of web searches, runs them in parallel, synthesizes the findings into a detailed long-form markdown report, and can optionally email that report as HTML — all through a simple Gradio interface. 🔍",
        techStack: ["Python", "OpenAI Agents SDK", "Gradio", "SendGrid"],
        links: {
            github: "https://github.com/Manthan0207/deep-research-agent",
        },
        functionality: [
            "Query-Driven Search Plan Generation",
            "Parallel Web Search Execution",
            "Long-Form Markdown Report Writing",
            "Optional HTML Email Delivery via SendGrid",
            "Simple Gradio UI Front End",
        ],
    },




    {
        title: 'SnapNest',
        shortDescription: 'A social media website.',
        description: 'SnapNest is a visually captivating social media platform where users can share discover,and organize stunning images effortlessly. With a sleek design and intuitive features, it brings creativity and inspiration to your fingertips. 🚀',
        images: [
            {
                imageTitle: 'Homepage Overview',
                imageURL: '/images/snapnest_home.png',
                imageDesc: 'A sleek and intuitive homepage that allows users to explore and discover inspiring content effortlessly.'
            },
            {
                imageTitle: 'Real-Time Notifications',
                imageURL: '/images/snapnest_notification.png',
                imageDesc: 'Stay updated with real-time notifications for interactions, messages, and updates from your network.'
            },
            {
                imageTitle: 'Personalized User Profile',
                imageURL: '/images/snapnest_userprofile.png',
                imageDesc: 'A well-structured user profile showcasing uploaded, saved, and liked posts for easy content management.'
            },
            {
                imageTitle: 'Saved Collections',
                imageURL: '/images/snapnest_user_saved.png',
                imageDesc: 'Users can effortlessly save and organize content, creating personalized collections for future reference.'
            },
            {
                imageTitle: 'Exploring Other Profiles',
                imageURL: '/images/snapnest_otheruser_profile.png',
                imageDesc: 'Get insights into other users’ profiles, exploring their uploaded content and creative inspirations.'
            },
            {
                imageTitle: 'Seamless Content Upload',
                imageURL: '/images/snapnest_upload.png',
                imageDesc: 'An intuitive upload interface that allows users to share high-quality content with ease.'
            },
            {
                imageTitle: 'Image Preview & Editing',
                imageURL: '/images/snapnest_img_preview.png',
                imageDesc: 'A dedicated preview page enabling users to review and fine-tune their uploads before publishing.'
            }
        ],
        techStack: ['Django', 'HTML', 'CSS', 'JS', 'Bootstrap5'],

        links: {
            github: 'https://github.com/Manthan0207/pin-11',
        },

        functionality: [
            "User Authentication",
            "Image Upload & Management",
            "Like, Save & Comment",
            "Real-Time Notifications",
            "Profile Customization",
            "Follow & Explore Users",
            "Responsive Design",
            "Search & Discovery",
        ],

    },




    {
        title: "MyAMTS",
        shortDescription: "A web application for Ahmedabad's public transport system.",
        description: "MyAMTS Web is a user-friendly platform designed to provide real-time information about Ahmedabad's AMTS bus services. It helps commuters plan their routes efficiently with an intuitive UI and seamless navigation. 🚌",
        images: [
            {
                "imageTitle": "Home Page",
                "imageURL": "/images/amts_home.png",
                "imageDesc": "The main dashboard displaying key features and navigation options."
            },
            {
                "imageTitle": "Extended Home Page",
                "imageURL": "/images/amts_recent.png",
                "imageDesc": "Users can view recent searches, nearby bus stops, and find routes by bus number."
            },
            {
                "imageTitle": "Search Bus Page",
                "imageURL": "/images/amts_search.png",
                "imageDesc": "Search for buses based on source and destination."
            },
            {
                "imageTitle": "Available Buses",
                "imageURL": "/images/amts_avail_buses.png",
                "imageDesc": "Shows all available buses, including interchange options if needed."
            },
            {
                "imageTitle": "Bus Route on Map",
                "imageURL": "/images/amts_show_route_on_map.png",
                "imageDesc": "Displays the selected bus route directly on the map."
            },
            {
                "imageTitle": "Bus Arrival Status",
                "imageURL": "/images/amts_delay.png",
                "imageDesc": "Indicates whether a bus is on time or delayed."
            },
            {
                "imageTitle": "Live Bus Tracking",
                "imageURL": "/images/amts_live_tracking.png",
                "imageDesc": "Provides real-time tracking of the bus location."
            },
            {
                "imageTitle": "Ticket Booking & QR Code",
                "imageURL": "/images/amts_qr.png",
                "imageDesc": "Generates a QR code after booking, containing trip details."
            },
            {
                "imageTitle": "Booking History",
                "imageURL": "/images/amts_bookings.png",
                "imageDesc": "Users can view their previous ticket bookings."
            }

        ],
        techStack: ["Django", "Python", "HTML", "CSS", "JavaScript", "Bootstrap"],
        textOfImages: [],
        links: {
            github: "https://github.com/Manthan0207/My-Amts"
        },
        functionality: [
            "Real-Time Bus Tracking",
            "Search & Filter Buses by Route",
            "Live Estimated Arrival Time",
            "Interactive Map for Bus Routes",
            "QR-Based Ticket Booking System",
            "View & Manage Past Bookings",
            "Alerts for Delayed Buses",
            "User-Friendly Interface with Responsive Design"
        ],

    },





    {
        title: "QuizQuest",
        shortDescription: "An interactive quiz game.",
        description: "QuizQuest is a fun and engaging quiz game designed to test knowledge across various topics. With an intuitive UI, real-time score tracking, and a smooth user experience, it makes learning enjoyable and competitive. 🎯",
        images: [
            {
                "imageTitle": "User Authentication Page",
                "imageURL": "/images/quiz_home (1).png",
                "imageDesc": "Login or register to access the quiz platform securely."
            },
            {
                "imageTitle": "Home Page",
                "imageURL": "/images/quiz_homw2.png",
                "imageDesc": "The main dashboard featuring three different quiz categories."
            },
            {
                "imageTitle": "Quiz Page",
                "imageURL": "/images/quiz_quiz.png",
                "imageDesc": "Displays questions and answer options. (Note: Due to an expired Supabase database, questions and answers are not currently visible.)"
            },
        ],
        techStack: ['Java', 'Java Swing', 'Supabase'],
        links: {
            github: "https://github.com/Manthan0207/QuizQuest-using-Java-Swing",
        },
        functionality: [
            "User Authentication & Login System",
            "Multiple Quiz Categories",
            "Instant Feedback on Correct & Incorrect Answers",
            "User-Friendly Quiz Interface",
        ],
    },





    {
        title: "Klondike Solitaire",
        shortDescription: "A classic Klondike Solitaire game.",
        description: "Klondike Solitaire is a digital version of the timeless card game. Built with smooth animations and an intuitive interface, it provides an enjoyable solitaire experience for all players. 🃏",
        images: [
            {
                "imageTitle": "User Authentication",
                "imageURL": "/images/card_1.png",
                "imageDesc": "Secure login system for players to access the game."
            },
            {
                "imageTitle": "Game Panel",
                "imageURL": "/images/card_2.png",
                "imageDesc": "Play the game, track score and moves, view leaderboards, statistics, and utilize undo/reset options."
            }
        ],
        techStack: ["Java", "Java Swing", "Supabase"],

        links: {
            github: "https://github.com/Satyam-Maru/Klondike-Solitaire",
        },
        functionality: [
            "User Authentication & Secure Login",
            "Interactive Gameplay with Score Tracking",
            "Move History & Undo/Reset Functionality",
            "Real-Time Leaderboard",
            "Detailed Game Statistics",
        ],
    },






    {
        title: "Real-Time Chat App",
        shortDescription: "A simple real-time chat application.",
        description: "Real-Time Chat App allows users to send and receive messages instantly using WebSockets. With a clean UI and responsive design, it provides a seamless chatting experience. 📩",
        images: [
            {
                "imageTitle": "User Name Input",
                "imageURL": "/images/chatapp_entername.png",
                "imageDesc": "Users are prompted to enter their name before joining the chat.",
                "functionality": "Ensures unique user identification in the chat room."
            },
            {
                "imageTitle": "Live Chat Demo",
                "imageURL": "/images/chatapp_demo.png",
                "imageDesc": "A real-time conversation between multiple users.",
                "functionality": "Messages are broadcast instantly using WebSockets."
            },
        ],
        techStack: ["Node.js", "Socket.io", "HTML", "CSS", "JavaScript"],
        textOfImages: [],
        links: {
            github: "https://github.com/Manthan0207/Real-Time-Talk",
        },
        functionality: [
            "Real-Time Message Broadcasting",
            "Join & Leave Notifications",
            "Instant Message Delivery",
            "Audio Alerts for New Messages",
            "Simple Name-Based Identification",
            "Minimalistic & Responsive UI",
            "Easy-to-Use Chat Interface",
            "No Authentication Required"
        ]
    }


]

module.exports = project