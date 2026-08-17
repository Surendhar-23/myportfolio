/**
 * Portfolio Data Layer - Single Source of Truth
 * Synchronized with LinkedIn & Projects
 */

export const personalInfo = {
  name: "Surendhar N D",
  firstName: "Surendhar",
  lastName: "N D",
  title: "Software Developer @ ComplianceCow",
  headline: "Software Developer | Full Stack Engineer | Creator of SNDDiffX",
  roles: [
    "Software Developer @ ComplianceCow",
    "Full Stack Developer",
    "Creator of SNDDiffX",
    "React & Node.js Engineer",
    "Neo4j Certified Professional"
  ],
  bioIntro: "Software Developer at ComplianceCow passionate about crafting seamless user experiences, autonomous systems, and high-performance developer tools.",
  bioFull: "I am a Software Developer at ComplianceCow with a strong foundation in modern frontend architectures, backend APIs, graph databases, and cybersecurity compliance automation. Graduated with a B.E. in Computer Science and Engineering (CGPA: 8.49) from K.S.R College of Engineering. Creator of SNDDiffX — a high-performance, 100% private in-browser diff checker and comparison suite.",
  email: "ndsurendhar2004@gmail.com",
  phone: "+91 8248309218",
  phoneFormatted: "+91 82483 09218",
  location: "Chennai / Erode, Tamil Nadu, India",
  dateOfBirth: "March 23, 2004",
  address: "36, Periya Kattu Thottam, Nalligoundanur, Kavindapadi, Erode - 638455",
  availableForHire: true,
  statusText: "Software Developer @ ComplianceCow",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/hero.png",
  aboutImage: "/images/about.png",
  avatarImage: "/images/main1.JPG",
  socialLinks: {
    github: "https://github.com/Surendhar-23",
    linkedin: "https://www.linkedin.com/in/surendharnd/",
    whatsapp: "https://wa.me/918248309218",
    instagram: "https://instagram.com"
  },
  stats: [
    { label: "Experience", value: "1.8+ Yrs", suffix: "", desc: "At ComplianceCow & Industry" },
    { label: "Degree CGPA", value: "8.49", suffix: "", desc: "B.E. CSE (First Class)" },
    { label: "Certifications", value: "21+", suffix: "", desc: "Neo4j, Meta, NPTEL Top 1%" },
    { label: "Code Quality", value: "100%", suffix: "", desc: "Clean, modular standards" }
  ]
};

export const experienceHighlights = [
  {
    role: "Software Developer",
    company: "ComplianceCow",
    period: "Jul 2025 - Present",
    type: "Full-time",
    location: "Chennai, Tamil Nadu, India · Hybrid",
    description: "Developing core software features, automated Governance, Risk, and Compliance (GRC) controls, and autonomous cybersecurity trust workflows.",
    deliverables: [
      "Building high-performance web interfaces and automation tooling to streamline complex compliance controls.",
      "Engineering full-stack microservices, API integrations, and graph data queries with Neo4j.",
      "Collaborating on open-source and proprietary security tooling reducing manual audit toil."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "ComplianceCow",
    period: "Jan 2025 - Jun 2025",
    type: "Internship (6 mos)",
    location: "Chennai, Tamil Nadu, India",
    description: "Contributed to front-end development, backend RESTful endpoints, and automated testing pipelines for enterprise cybersecurity compliance.",
    deliverables: [
      "Engineered reusable UI components with responsive glassmorphism and modern state management.",
      "Optimized client-side load performance and integrated backend endpoints with robust error handling."
    ]
  },
  {
    role: "Salesforce Developer Virtual Intern",
    company: "SmartBridge / SmartInternz (NEAT Cell - AICTE)",
    period: "Nov 2023 - Jan 2024",
    type: "Virtual Internship (8 weeks)",
    location: "Remote",
    description: "Hands-on Salesforce development training covering Apex programming, Lightning Web Components, and Trailhead real-world scenarios.",
    deliverables: [
      "Completed intensive modules on Salesforce architecture, data modeling, and workflow automation."
    ]
  }
];

export const certificationsData = [
  {
    title: "Neo4j Certified Professional",
    issuer: "Neo4j",
    date: "Jun 2025",
    credentialId: "7097cf28-afc1-41c0-b1d3-5f1544d304dc",
    url: "https://graphacademy.neo4j.com/c/7097cf28-afc1-41c0-b1d3-5f1544d304dc/",
    badge: "Graph DB Expert"
  },
  {
    title: "Cloud Computing - Elite (Top 1%)",
    issuer: "NPTEL & IIT Kharagpur",
    date: "2024",
    credentialId: "Consolidated 90% (Top 1% of 11,454 candidates)",
    url: "https://www.linkedin.com/in/surendharnd/",
    badge: "Top 1% Ranker"
  },
  {
    title: "React Basics",
    issuer: "Meta / Coursera",
    date: "Mar 2025",
    credentialId: "W8288SA5WQUK",
    url: "https://www.coursera.org/account/accomplishments/records/W8288SA5WQUK",
    badge: "Meta Certified"
  },
  {
    title: "Ethical Hacking - Elite Certification (75%)",
    issuer: "NPTEL & IIT Kharagpur",
    date: "2024",
    credentialId: "12-Week Rigorous IIT Program",
    url: "https://www.linkedin.com/in/surendharnd/",
    badge: "Elite 75%"
  },
  {
    title: "Industry 4.0 & Industrial IoT (IIoT) - Elite",
    issuer: "NPTEL & IIT Kharagpur",
    date: "2024",
    credentialId: "Consolidated 64%",
    url: "https://www.linkedin.com/in/surendharnd/",
    badge: "Elite"
  },
  {
    title: "Introduction to MongoDB for Students",
    issuer: "MongoDB University",
    date: "2024",
    credentialId: "MongoDB Student Certification",
    url: "https://www.linkedin.com/in/surendharnd/",
    badge: "NoSQL DB"
  }
];

export const skillsData = [
  {
    category: "Frontend Engineering",
    icon: "Layout",
    description: "Building blazing-fast, fluid, and responsive user interfaces with modern web standards.",
    skills: [
      { name: "React.js (Meta Certified)", level: 92, icon: "Atom", tag: "Advanced" },
      { name: "JavaScript (ES6+)", level: 94, icon: "FileCode", tag: "Advanced" },
      { name: "HTML5 / Semantic Web", level: 95, icon: "Code", tag: "Expert" },
      { name: "CSS3 / Modern UI", level: 92, icon: "Palette", tag: "Advanced" },
      { name: "Vite & Tooling", level: 90, icon: "Zap", tag: "Advanced" },
      { name: "Responsive & Mobile First UI", level: 95, icon: "Smartphone", tag: "Expert" }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    description: "Architecting reliable server-side services, RESTful endpoints, and backend workflows.",
    skills: [
      { name: "Node.js & Express.js", level: 88, icon: "Server", tag: "Advanced" },
      { name: "RESTful API Design", level: 90, icon: "Network", tag: "Advanced" },
      { name: "Java & OOP", level: 85, icon: "Coffee", tag: "Proficient" },
      { name: "Operating Systems", level: 88, icon: "Cpu", tag: "Advanced" },
      { name: "Cybersecurity & GRC Automation", level: 85, icon: "ShieldCheck", tag: "Proficient" }
    ]
  },
  {
    category: "Databases & Graph",
    icon: "Database",
    description: "Graph databases, relational schemas, NoSQL document modeling, and query optimization.",
    skills: [
      { name: "Neo4j Graph Database (Certified)", level: 90, icon: "Network", tag: "Certified" },
      { name: "MongoDB (Certified)", level: 88, icon: "Layers", tag: "Certified" },
      { name: "SQL / MySQL", level: 85, icon: "Database", tag: "Proficient" },
      { name: "Git & GitHub Version Control", level: 92, icon: "GitBranch", tag: "Advanced" }
    ]
  },
  {
    category: "Core CS & Cloud",
    icon: "Terminal",
    description: "Computer science fundamentals, software engineering best practices, and cloud architecture.",
    skills: [
      { name: "Cloud Computing (NPTEL Top 1%)", level: 92, icon: "Cloud", tag: "Top 1%" },
      { name: "Data Structures & Algorithms", level: 88, icon: "Binary", tag: "Advanced" },
      { name: "Problem Solving", level: 90, icon: "Boxes", tag: "Advanced" },
      { name: "Component-Driven Architecture", level: 94, icon: "Component", tag: "Expert" }
    ]
  }
];

export const educationData = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science & Engineering",
    institution: "K.S.R College Of Engineering (Autonomous)",
    duration: "Nov 2021 – Jun 2025",
    location: "Tiruchengode, Tamil Nadu",
    grade: "CGPA: 8.49",
    status: "First Class / Graduated",
    description: "Rigorous curriculum focused on Data Structures, Algorithms, Operating Systems, Database Systems, Computer Networks, and Full-Stack Engineering.",
    highlights: [
      "Graduated with distinction: CGPA 8.49 in Computer Science and Engineering",
      "Specialized in Operating Systems, Problem Solving, and Distributed Web Architectures",
      "Active participant in OneYes Grand Hackathon and technical symposiums"
    ]
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC - 12th Std)",
    field: "Physics, Chemistry, Mathematics & Computer Science",
    institution: "Saraswathi Vidhyashram Matric. Hr. Sec. School",
    duration: "Jun 2020 – Mar 2021",
    location: "Kavindapadi - 638455",
    grade: "88.6%",
    status: "Completed with Distinction",
    description: "Strong academic foundation in analytical mathematics, physics, and foundational computer programming.",
    highlights: [
      "Secured 88.6% in 12th Standard Board Exams",
      "Activities: School Athlete (100m, 200m, Long Jump), Cricket & Badminton player"
    ]
  },
  {
    id: "edu-3",
    degree: "Diploma in Computer Application (DCA)",
    field: "Computer Applications (Course VC620)",
    institution: "Recognized Computer Academy",
    duration: "2019 - 2020",
    location: "Tamil Nadu",
    grade: "Completed",
    status: "Completed",
    description: "Practical certification covering computer systems, Office tools, and digital workflows.",
    highlights: [
      "Awarded DCA Certification with high proficiency"
    ]
  }
];

export const projectsData = [
  {
    id: "snddiffx",
    title: "SNDDiffX",
    subtitle: "Free Online Diff Checker & Text Comparison Suite",
    category: "Developer Tool",
    filterCategory: "tool",
    featured: true,
    shortDesc: "High-performance, 100% private in-browser diff checker & code comparison suite with side-by-side & unified views, semantic JSON diffing, and sub-line word accuracy.",
    longDesc: "SNDDiffX is a modern, high-speed code, text, and JSON comparison platform built for developers, code reviewers, and engineers. It runs 100% client-side in the web browser for total data privacy, featuring synchronized side-by-side dual pane scrolling, unified inline views, character-level diffing, recursive JSON key sorting, and Git patch (.patch) / HTML report export capabilities.",
    image: "/images/projects/project-snddiffx.png",
    tags: ["React", "JavaScript", "Diff Algorithms", "JSON Semantic Parser", "Vite", "Myers Diff Engine", "Git Patch Export", "100% Private"],
    liveUrl: "http://diff.surendhar.space/",
    githubUrl: "https://github.com/Surendhar-23",
    highlights: [
      "Split side-by-side view with synchronized dual-pane scrolling",
      "Unified inline diff view with line number tracking and change collapsing",
      "Sub-line word and character-level difference highlighting with Myers algorithm",
      "Semantic JSON comparison mode with automatic recursive key sorting",
      "Git patch (.patch) and standalone HTML report exports for GitHub PRs and code reviews",
      "100% client-side privacy — zero external server uploads or data retention",
      "Comparison history with offline local storage caching and drag-and-drop file upload"
    ],
    architecture: "Engineered with client-side reactive state machines, Myers diffing algorithms, and in-browser file stream parsers for sub-millisecond execution."
  }
];

export const projectCategories = [
  { id: "all", label: "Featured Work" }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education & Exp", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
