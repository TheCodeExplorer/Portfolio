export interface NavItem {
  label: string;
  href: string;
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
  grade?: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  purpose: string;
  overview: string;
  features: string[];
  technicalImplementation: {
    framework: string;
    database?: string;
    auth?: string;
    state?: string;
    hardware?: string;
    architecture?: string;
    deployment?: string;
  };
  statusTag?: string;
  chips: string[];
  desktopCols: number; // 6 or 12 for grid
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period?: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  period?: string;
  topics: string[];
  credentialUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    initials: string;
    headline: string;
    statusPill: string;
    heroBio: string;
    location: string;
    email: string;
    resumeUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    allReposUrl: string;
  };
  navigation: NavItem[];
  about: {
    name: string;
    tagline: string;
    paragraphs: string[];
    education: Education[];
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: Experience[];
  certifications: Certification[];
  contact: {
    heading: string;
    subheading: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Venkatesh Talluri",
    initials: "VT",
    headline: "Building software, systems, and practical web applications.",
    statusPill: "Available for opportunities",
    heroBio:
      "Computer Science undergraduate with hands-on experience developing full-stack web applications and microcontroller systems. Eager to contribute to engineering teams and start my professional career.",
    location: "Andhra Pradesh, India",
    email: "venkateshtalluri12@gmail.com",
    resumeUrl: "https://drive.google.com/file/d/1o4a3e0HVPd74ruvdpMcsTKeM00a4Hd1N/view?usp=drive_link",
    githubUrl: "https://github.com/TheCodeExplorer",
    linkedinUrl: "https://linkedin.com/in/venkatesh-talluri-9893a3217",
    allReposUrl: "https://github.com/TheCodeExplorer",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    name: "Venkatesh Talluri",
    tagline: "Computer Science Undergraduate & Builder",
    paragraphs: [
      "I’m a Computer Science undergraduate at QIS College of Engineering and Technology with a CGPA of 8.5/10. I enjoy understanding how things work and learning by building practical projects rather than relying only on theory.",
      "I have hands-on experience with JavaScript, React, Next.js, Node.js, and PostgreSQL, and have built projects such as PRONOVA, a project and task management platform. I also enjoy practicing problem solving and exploring new technologies through personal projects.",
      "I’m looking for opportunities where I can apply what I’ve learned, work with experienced teams, continue developing my skills, and contribute to real-world software projects.",
    ],
    education: [
      {
        degree: "B.Tech, Computer Science Engineering",
        institution: "QIS College of Engineering and Technology, Ongole",
        period: "2023 – 2027",
        grade: "CGPA 8.5 / 10",
        details: "Focus on Data Structures, Algorithms, DBMS, OOP, and Operating Systems.",
      },
      {
        degree: "Intermediate (MPC)",
        institution: "Narayana Junior College, Vijayawada",
        period: "2021 – 2023",
        grade: "87.7%",
        details: "Mathematics, Physics, and Chemistry foundation.",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Bhashyam High School, Chimakurthy",
        period: "2021",
        grade: "93.0%",
        details: "Strong academic foundation in science and mathematics.",
      },
    ],
  },
  projects: [
    {
      id: "pronova",
      title: "PRONOVA",
      statusTag: "Featured Project",
      purpose:
        "A project and task management platform designed to help teams organize projects, manage tasks, and track progress in one workspace.",
      overview:
        "PRONOVA provides a centralized workspace for creating projects, managing tasks, tracking deadlines, and monitoring progress. I built the application with a focus on a clean interface, structured data management, and secure user authentication.",
      features: [
        "Secure user authentication and session management via Clerk",
        "Interactive task and project boards with real-time status transitions",
        "Relational data modeling with Prisma ORM and PostgreSQL",
        "Global client-side state handling with Zustand",
        "Fully responsive interface styled with Tailwind CSS",
      ],
      technicalImplementation: {
        framework: "Next.js (App Router) & React",
        database: "PostgreSQL with Prisma ORM",
        auth: "Clerk Authentication",
        state: "Zustand for client state",
        deployment: "Vercel",
      },
      chips: [
        "Next.js",
        "React",
        "PostgreSQL",
        "Prisma",
        "Zustand",
        "Tailwind CSS",
        "Clerk",
        "TypeScript",
      ],
      desktopCols: 6,
      githubUrl: "https://github.com/TheCodeExplorer/PRONOVA",
    },
    {
      id: "icradle",
      title: "iCradle",
      statusTag: "Hardware & IoT",
      purpose:
        "A smart cradle prototype designed to monitor an infant’s basic conditions and provide automated responses to detected discomfort.",
      overview:
        "iCradle uses sensors to detect crying, temperature, and moisture levels. Based on the detected conditions, the system can trigger automatic rocking and provide alerts when attention is needed.",
      features: [
        "Acoustic cry detection triggering automatic servo-driven rocking motion",
        "TMP36 temperature sensor monitoring ambient and infant temperature",
        "Analog moisture detection for immediate diaper wetness notification",
        "Hardware buzzer and LED alert indicators for critical threshold events",
        "Cross-functional team coordination across 7 student members",
      ],
      technicalImplementation: {
        framework: "Embedded C / C++",
        hardware: "Arduino Uno, Servo Motor, TMP36 Sensor, Sound Sensor, Moisture Sensor",
        architecture: "Interrupt & threshold loop processing",
      },
      chips: ["Arduino", "C++", "IoT", "Embedded Systems", "Sensors", "Hardware"],
      desktopCols: 6,
      githubUrl: "https://github.com/TheCodeExplorer/iCradle",
    },
    {
      id: "medipill-monitor",
      title: "MediPill Monitor",
      statusTag: "In Progress",
      purpose:
        "An IoT-based medicine monitoring system designed to help users take their medicines on time and keep caregivers informed.",
      overview:
        "MediPill Monitor uses a smart medicine container to track medicine usage and provide reminders. It can detect when medicine is taken or missed and send relevant alerts to a caregiver.",
      features: [
        "Scheduled medication alerts with visual and audible signaling",
        "Compartment access verification using embedded sensing",
        "Compliance status logging for patient and caregiver peace of mind",
        "Low-power embedded system design for portable operation",
      ],
      technicalImplementation: {
        framework: "Embedded C / C++",
        hardware: "Microcontroller, Sensor Switches, Alert Buzzers",
        architecture: "Timer interrupt scheduling & sensor verification",
      },
      chips: ["IoT", "C++", "Sensors", "Embedded Systems"],
      desktopCols: 6,
      githubUrl: "https://github.com/khaleedshaik62/Medipill",
    },
    {
      id: "ecas",
      title: "ECAS (Aquaponic System)",
      statusTag: "Automation & Embedded",
      purpose:
        "A microcontroller-based aquaponics system that automates water circulation, aeration, feeding, and temperature monitoring.",
      overview:
        "ECAS automates routine aquaponics tasks using sensors, relays, and programmed control logic. It manages water circulation and aeration, checks temperature conditions, and runs scheduled fish feeding with minimal manual intervention.",
      features: [
        "Automated water circulation and aeration",
        "Temperature monitoring",
        "Scheduled fish feeding",
        "Relay-based device control",
      ],
      technicalImplementation: {
        framework: "Arduino & Embedded C++",
        hardware: "Arduino, Relay Modules, Temperature Probes, Servo Feeders",
        architecture: "Cyclic timing loops & relay actuation",
      },
      chips: ["Arduino", "C++", "Relays", "Embedded Systems", "Automation"],
      desktopCols: 6,
      githubUrl: "https://github.com/TheCodeExplorer/ECAS",
    },
  ],
  skills: [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C++"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Zustand", "HTML5/CSS3"],
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "MongoDB"],
    },
    {
      title: "Developer Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Clerk", "Postman", "Linux/Bash"],
    },
    {
      title: "Embedded & IoT",
      skills: ["Arduino", "Embedded C++", "Microcontrollers", "Sensor Integration"],
    },
    {
      title: "Core CS Fundamentals",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management",
        "Operating Systems",
      ],
    },
  ],
  experience: [
    {
      company: "AICTE – EduSkills",
      role: "Python & MERN Full Stack Virtual Internship",
      period: "Apr – Jun 2026",
      description:
        "Comprehensive technical program covering Python fundamentals, full-stack web development with the MERN stack (MongoDB, Express, React, Node.js), API design, and modern web application workflows.",
    },
    {
      company: "Cardiff University",
      role: "Remote Team Collaborative Project",
      period: "Sep – Oct 2025",
      description:
        "Collaborated in a remote international team environment on technical problem-solving, structured engineering communication, agile collaboration, and milestone delivery.",
    },
    {
      company: "Google / SmartInternz",
      role: "AI/ML Virtual Internship",
      period: "Jul – Sep 2025",
      description:
        "Engaged in hands-on foundational modules on Artificial Intelligence and Machine Learning concepts, data preprocessing pipelines, and practical model exploration using Python.",
    },
  ],
  certifications: [
    {
      title: "NPTEL Online Certification",
      issuer: "NPTEL / SWAYAM",
      period: "2024 – 2025",
      topics: ["Computer Science Fundamentals", "Data Structures", "Programming Principles"],
      credentialUrl: "https://nptel.ac.in",
    },
    {
      title: "Technical Course Specialization",
      issuer: "Coursera",
      period: "2024 – 2025",
      topics: ["Full-Stack Web Development", "Modern JavaScript", "Application Architecture"],
      credentialUrl: "https://coursera.org",
    },
    {
      title: "Python & MERN Full Stack Certification",
      issuer: "AICTE – EduSkills Foundation",
      period: "2026",
      topics: ["Python", "React", "Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "AI / ML Virtual Internship Credential",
      issuer: "Google / SmartInternz",
      period: "2025",
      topics: ["Machine Learning", "Python Data Modeling", "AI Foundations"],
    },
  ],
  contact: {
    heading: "Let's connect.",
    subheading:
      "I am actively seeking software engineering and early-career developer roles. Whether you have an open opportunity or would like to discuss my projects, I'd love to hear from you.",
  },
};
