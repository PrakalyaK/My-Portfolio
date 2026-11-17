export const portfolioData = {
  personal: {
    name: "Prakalya K",
    role: "Full-Stack Developer | Problem Solver",
    tagline: "Building scalable web architectures, resilient backends, and intelligent distributed systems.",
    location: "Chennai / Coimbatore, Tamil Nadu, India",
    phone: "(+91) 9342733351",
    email: "prakalyakr2020@gmail.com",
    github: "https://github.com/PrakalyaK",
    linkedin: "https://www.linkedin.com/in/prakalyak/",
    leetcode: "https://leetcode.com/u/PrakalyaK/",
    resumeUrl: "/Prakalya_K_Resume.pdf",
    avatarUrl: "/profile-photo.jpg",
    stats: {
      leetcode: "350+",
      hackathons: "8+",
      projects: "5+",
      cgpa: "9.1"
    },
    bio: [
      "I am an Information Technology undergraduate at Sri Krishna College of Engineering and Technology (SKCET) with an academic record of 9.1 CGPA, and a high-school foundation of 91% from Velankanni Public School, Chennai.",
      "As a full-stack engineer, GSSoC 2026 Open Source Contributor, and competitive problem solver with 350+ LeetCode challenges solved, 8+ hackathons competed, and 5+ major full-stack systems built, I specialize in designing robust web applications and distributed architectures using React.js, Node.js, Express, PostgreSQL, and cloud deployments."
    ]
  },

  skills: {
    languages: [
      { name: "C++", level: "Advanced", category: "Core DSA & Algorithmic Optimization" },
      { name: "Java", level: "Proficient", category: "OOP & Enterprise Foundations" },
      { name: "Python", level: "Proficient", category: "Scripting, AI & Data Processing" },
      { name: "JavaScript (ES6+)", level: "Advanced", category: "Asynchronous, Web APIs & Full-Stack" }
    ],
    development: [
      { name: "React.js", description: "SPA Architecture, Hooks, Custom State, Responsive UI" },
      { name: "Node.js", description: "Event-driven runtime, Non-blocking I/O, REST APIs" },
      { name: "Express.js", description: "Middleware Pipelines, Authentication, Routing" },
      { name: "PostgreSQL", description: "Relational Modeling, Indexing, Transactions, PostGIS" },
      { name: "TypeScript", description: "Static Typing, Interface Contracts, Scalability" },
      { name: "MongoDB", description: "NoSQL, Document Schemas, Aggregation Pipelines" }
    ],
    coreCS: [
      { name: "Data Structures & Algorithms", description: "Time & Space Complexity, Trees, Graphs, DP" },
      { name: "Object-Oriented Programming (OOP)", description: "Encapsulation, Polymorphism, Design Patterns" },
      { name: "Database Management Systems (DBMS)", description: "ACID Properties, Normalization, Query Optimization" },
      { name: "Operating Systems", description: "Process Scheduling, Memory Management, Concurrency" }
    ],
    tools: [
      { name: "Git", description: "Version control, branching models, rebasing" },
      { name: "GitHub", description: "Pull requests, code review, workflow automation" },
      { name: "VS Code", description: "Debugging, extensions, environment configuration" }
    ]
  },

  projects: [
    {
      id: "uniserv-cooperative-gig",
      title: "UniServ — Cooperative Gig Services Platform",
      subtitle: "Smart India Hackathon (SIH) 2026 • Internal Hackathon",
      shortDescription: "A cooperative gig-services platform connecting households and communities with local service providers, featuring skill-based service discovery and cooperative workforce management.",
      featured: true,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      tags: ["React Native", "Expo", "Node.js", "PostgreSQL", "PostGIS", "Redis"],
      githubUrl: "https://github.com/PrakalyaK",
      liveUrl: "",
      metrics: "Cooperative management & dual OTP verification",
      details: {
        problemStatement: "Finding reliable, verified workers for everyday household and community services is challenging, while local service providers struggle with unequal access to work opportunities.",
        architecture: "Integrated ecosystem uniting service discovery, worker management, and booking into one platform. Uses a mobile client with backend geospatial matching via PostgreSQL/PostGIS and Redis caching.",
        keyFeatures: [
          "Worker registration and verified profile management with skill categorization",
          "Skill-based service discovery and localized community booking",
          "Service booking and coordination with dual OTP verification",
          "Worker verification, authentic client ratings, and cooperative workforce management"
        ],
        challengesSolved: [
          "Architected fair job distribution to balance opportunity access across registered providers.",
          "Secured kickoff and completion with two-way cryptographic verification."
        ]
      }
    },
    {
      id: "ecommerce-platform",
      title: "Full-Stack E-Commerce Web Platform",
      subtitle: "Scalable Online Marketplace with Payment Integration",
      shortDescription: "A modern, full-stack e-commerce web platform engineered with React, Node.js, and relational database modeling, featuring real-time cart state, faceted search, and secure checkout.",
      featured: true,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "JWT Auth"],
      githubUrl: "https://github.com/PrakalyaK",
      liveUrl: "",
      metrics: "Sub-100ms catalog filtering & persistent multi-item cart",
      details: {
        problemStatement: "E-commerce stores often suffer from sluggish catalog search, state desynchronization between cart and inventory stock, and vulnerable checkout workflows.",
        architecture: "Decoupled full-stack architecture with a responsive React client utilizing Context API for cart state, backed by an Express REST API with JWT authentication and PostgreSQL storing normalized product schemas, user profiles, and order ledgers.",
        keyFeatures: [
          "Dynamic faceted product search with category, price range, and rating filtering",
          "Persistent client-side shopping cart synchronized with backend inventory levels",
          "Secure user authentication (JWT) with protected routes for order histories",
          "Admin portal for product catalog updates, stock quantity changes, and order fulfillment status"
        ],
        challengesSolved: [
          "Eliminated inventory race conditions during high-volume item purchases using atomic database transactions.",
          "Optimized relational database queries using B-Tree indexing on price, category, and SKU columns."
        ]
      }
    },
    {
      id: "ai-health-supply-chain-hub",
      title: "AI-Powered Healthcare Supply Chain Management System",
      subtitle: "Build with AI – Code for Developers • Team Leader (Hack to Skill)",
      shortDescription: "A full-stack healthcare supply chain management solution incorporating Google's Gemini API to improve healthcare resource and medical supply visibility.",
      featured: true,
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "Vite", "Node.js", "PostgreSQL", "Drizzle ORM", "Gemini API", "Google Cloud Run"],
      githubUrl: "https://github.com/PrakalyaK",
      liveUrl: "",
      metrics: "Gemini AI predictive analysis & Cloud Run deployment",
      details: {
        problemStatement: "Healthcare supply chains require efficient coordination and visibility of medical resources. Poor inventory visibility and supply management can severely compromise the availability of essential life-saving products.",
        architecture: "Full-stack application combining React and Vite frontend with a Node.js backend, PostgreSQL database with Drizzle ORM, Google Gemini API for predictive analysis, containerized and deployed on Google Cloud Run.",
        keyFeatures: [
          "Real-time inventory coordination and visibility across healthcare facilities",
          "Gemini-based AI resource allocation and predictive consumption analytics",
          "Inter-hospital critical medicine transfer routing and dispatch tracking",
          "Type-safe schema and query execution powered by Drizzle ORM with PostgreSQL"
        ],
        challengesSolved: [
          "As Team Leader, orchestrated full-stack architecture planning, schema design, and sprint task delegation.",
          "Engineered atomic transactions to guarantee consistency during concurrent medical supply transfers."
        ]
      }
    },
    {
      id: "react-ai-chatbot",
      title: "React AI Conversational Assistant",
      subtitle: "Context-Aware AI Chatbot with Token Streaming",
      shortDescription: "A modern, context-aware AI chatbot interface delivering real-time natural language query resolution with token streaming and conversational session retention.",
      featured: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      tags: ["React.js", "JavaScript", "Node.js", "Gemini API", "REST APIs", "CSS3"],
      githubUrl: "https://github.com/PrakalyaK",
      liveUrl: "",
      metrics: "Real-time token streaming & persistent conversation sessions",
      details: {
        problemStatement: "Traditional chat assistants frequently freeze during long completions, offer poor markdown rendering, and lack conversational session caching.",
        architecture: "Client-side React application interfacing with AI conversational APIs via a secure backend proxy. Features an optimistic UI with markdown rendering and session-based chat history caching.",
        keyFeatures: [
          "Real-time streaming text rendering for conversational interaction",
          "Persistent session storage retaining active chat history across page reloads",
          "Markdown and code syntax formatting within assistant responses",
          "Responsive, thumb-friendly mobile layout with rapid clearing and copy-to-clipboard actions"
        ],
        challengesSolved: [
          "Handled asynchronous stream decoding cleanly in React without causing excessive UI re-renders.",
          "Implemented robust error boundaries and automatic retry policies when encountering API rate limits."
        ]
      }
    },
    {
      id: "sahaaya-grid",
      title: "Sahaaya Grid — Emergency Response & Coordination",
      subtitle: "HACK-KERALA / TECHAVAM 2026",
      shortDescription: "An emergency response and volunteer coordination platform designed for crowded environments (festivals, concerts, stadiums) with spatiotemporal clustering and low-bandwidth support.",
      featured: true,
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=80",
      tags: ["JavaScript", "Node.js", "REST APIs", "Spatiotemporal", "Low-Bandwidth", "QR Code"],
      githubUrl: "https://github.com/PrakalyaK",
      liveUrl: "",
      metrics: "Crowded-environment coordination & automated escalation",
      details: {
        problemStatement: "During emergencies in crowded environments (festivals, concerts, stadiums, gatherings), identifying incidents and locating nearby responders is difficult, especially when cellular networks are congested or unreliable.",
        architecture: "Intelligent incident coordination engine using lightweight REST APIs with spatiotemporal clustering algorithms, low-bandwidth data payloads, and automatic responder escalation timers.",
        keyFeatures: [
          "Spatiotemporal clustering to detect and group nearby emergency incidents and available volunteers",
          "Volunteer availability tracking and smart incident dispatch across crowds",
          "Automated escalation and responder reassignment if a volunteer doesn't respond within a specified window",
          "Multilingual accessibility and ultra-low-bandwidth payload design for congested networks"
        ],
        challengesSolved: [
          "Engineered robust client-server synchronization capable of gracefully degrading on intermittent 2G/3G connectivity.",
          "Implemented automated failover timers to reassign unanswered emergency tickets seamlessly."
        ]
      }
    },
    {
      id: "eldercare-connect",
      title: "Elder-care Connect",
      subtitle: "CATALYST – Solo AI Hackathon • Individual Participation",
      shortDescription: "An elder-care technology platform developed solo to explore how technology and AI can help elderly individuals access timely support and stay connected with caregivers.",
      featured: false,
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
      tags: ["React.js", "Node.js", "AI Integration", "Accessibility", "CSS3"],
      githubUrl: "https://github.com/PrakalyaK",
      liveUrl: "",
      metrics: "Solo build • Accessibility-first design",
      details: {
        problemStatement: "Elderly individuals face hurdles in accessing timely assistance, maintaining continuous communication with distant caregivers, and managing daily support needs.",
        architecture: "Individual hackathon build focusing on high-contrast accessibility standards, schedule event triggers in Node.js, and AI-assisted care workflows.",
        keyFeatures: [
          "Elder-care accessibility: simplified high-contrast UI designed for seniors",
          "Technology-assisted support and automated caregiver updates",
          "AI-driven possibilities for assistance prioritization and routine checks",
          "Direct channel connecting elderly individuals with appropriate support personnel"
        ],
        challengesSolved: [
          "Delivered a complete, working prototype individually within the hackathon timeframe.",
          "Focused heavily on intuitive, zero-learning-curve UX for senior citizens."
        ]
      }
    }
  ],

  problemSolving: {
    leetcode: {
      url: "https://leetcode.com/u/PrakalyaK/",
      solvedCount: "350+",
      mediumCount: "150+ Medium & Hard",
      rating: "Active Problem Solver",
      summary: "Consistent algorithmic practice on LeetCode with 350+ problems solved, emphasizing time and space complexity optimization across advanced patterns.",
      primaryTopics: [
        { name: "Data Structures", count: "120+" },
        { name: "Medium & Hard", count: "150+" },
        { name: "Trees & Graphs", count: "70+" },
        { name: "Dynamic Programming", count: "45+" },
        { name: "Binary Search & Pointers", count: "60+" },
        { name: "Recursion & Backtracking", count: "40+" }
      ]
    },
    github: {
      url: "https://github.com/PrakalyaK",
      summary: "Active commits and full-stack repository development across open-source initiatives, hackathons, and personal software builds."
    }
  },

  experience: [
    {
      type: "Achievement",
      role: "Smart India Hackathon (SIH) 2026 — Internal Hackathon",
      organization: "Project: UniServ (Cooperative Gig Platform)",
      period: "2026",
      description: "Designed and pitched UniServ to connect households and communities with local service providers while empowering verified gig workers through cooperative workforce management.",
      highlights: [
        "Worker registration and verified profile management with skill categorization.",
        "Skill-based service discovery, service booking, and cooperative workforce coordination.",
        "Dual OTP verification to authenticate service kickoff and secure job completion."
      ]
    },
    {
      type: "Hackathon",
      role: "HACK-KERALA / TECHAVAM 2026",
      organization: "Project: Sahaaya Grid (Emergency Response & Coordination)",
      period: "2026",
      description: "Architected an emergency response and volunteer coordination platform optimized for crowded environments such as festivals, concerts, stadiums, and public gatherings.",
      highlights: [
        "Spatiotemporal clustering for identifying nearby incidents and responders under crowd density.",
        "Automated escalation when a volunteer doesn't respond within the specified window, plus responder reassignment.",
        "Engineered with multilingual accessibility and designed to operate reliably over low-bandwidth connectivity."
      ]
    },
    {
      type: "Leadership",
      role: "Build with AI – Code for Developers",
      organization: "Team Leader / Technical Team Lead • Powered by Hack to Skill",
      period: "2025",
      description: "Led technical planning and full-stack development of the AI-Powered Healthcare Supply Chain Management System integrating Google's Gemini API.",
      highlights: [
        "Combines React and Vite frontend with Node.js, PostgreSQL, and Drizzle ORM, deployed on Google Cloud Run.",
        "Incorporates Gemini API for predictive inventory visibility and supply demand forecasting.",
        "Served as Team Leader, guiding system architecture decisions and cross-functional feature planning."
      ]
    },
    {
      type: "Hackathon",
      role: "CATALYST – Solo AI Hackathon",
      organization: "Individual Participation • Project: Elder-care Connect",
      period: "2025",
      description: "Competed individually to develop Elder-care Connect, exploring how technology and AI can help elderly individuals access timely support and stay connected with caregivers.",
      highlights: [
        "Focused on elder-care accessibility, high-contrast usability, and technology-assisted caregiving.",
        "Explored AI-driven possibilities for assistance scheduling, medication tracking, and rapid emergency contact.",
        "Successfully planned, designed, and developed the complete prototype as a solo participant."
      ]
    },
    {
      type: "Open Source",
      role: "GirlScript Summer of Code (GSSoC) 2026 Contributor",
      organization: "GirlScript Foundation",
      period: "2026",
      description: "Contributing to open-source software ecosystems, resolving real-world issues, and authoring pull requests across production repositories during GSSoC 2026.",
      highlights: [
        "Actively collaborating with project maintainers to diagnose defects and implement modern web features.",
        "Adhering to rigorous Git branching workflows, peer code reviews, and documentation standards."
      ]
    },
    {
      type: "Community",
      role: "Google Developer Groups (GDG) Member",
      organization: "Google Developer Community",
      period: "Ongoing",
      description: "Active member of the developer community, regularly engaging in technical learning, developer summits, and community initiatives.",
      highlights: [
        "Participated in deep-dive workshops on Cloud computing, modern Web standards, and AI integration.",
        "Collaborated with fellow engineers on practical developer challenges and open technology."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Sri Krishna College of Engineering and Technology (SKCET)",
      location: "Coimbatore, Tamil Nadu",
      period: "Aug '25 – Aug '29",
      cgpa: "9.1 / 10.0",
      description: "Undergraduate degree focusing on core Computer Science foundations, scalable software architecture, and modern full-stack development.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Web Architecture & Cloud Services"
      ]
    },
    {
      degree: "Class XII (CBSE) — Senior Secondary",
      institution: "Velankanni Public School",
      location: "Chennai, Tamil Nadu",
      period: "Completed 2025",
      cgpa: "91%",
      description: "Comprehensive scientific curriculum with academic distinction in Mathematics, Computer Science, and Physics.",
      coursework: [
        "Computer Science",
        "Mathematics",
        "Physics",
        "Chemistry"
      ]
    }
  ],

  contactConfig: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_v8wtj4n",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_cvpe12y",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "8WGGCnuN3uHOZxVx9",
    recipientEmail: "prakalyakr2020@gmail.com",
    phone: "(+91) 9342733351"
  }
};
