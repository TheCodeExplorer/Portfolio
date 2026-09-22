export interface NavItem {
  label: string;
  href: string;
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
  grade?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  statusTag?: string;
  chips: string[];
  desktopCols: number; // 7, 5, or 4
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
}

export interface Certification {
  name: string;
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
    bio: string;
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
    headline: "I build full-stack web apps and IoT systems.",
    statusPill: "Open to internships & entry-level roles",
    heroBio:
      "B.Tech Computer Science student at QIS College of Engineering and Technology, Ongole. I'm looking for software engineering internships at product-based companies.",
    location: "Andhra Pradesh, India",
    // TODO: replace with real email
    email: "venkateshtalluri12@gmail.com",
    resumeUrl: "/Venkatesh_Talluri_Resume.pdf",
    githubUrl: "https://github.com/TheCodeExplorer",
    linkedinUrl: "https://linkedin.com/in/venkatesh-talluri-9893a3217",
    allReposUrl: "https://github.com/TheCodeExplorer",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    bio: "I'm a Computer Science undergraduate who enjoys building things end to end, from database schema and APIs to responsive interfaces and, sometimes, hardware. My work spans full-stack web development and IoT: I built a project management platform with Next.js and PostgreSQL, and led a 7-member team building an Arduino-based smart cradle.",
    education: [
      {
        degree: "B.Tech, Computer Science Engineering",
        institution: "QIS College of Engineering and Technology, Ongole",
        period: "2023-2027",
        grade: "CGPA 8.5/10",
      },
      {
        degree: "Intermediate (MPC)",
        institution: "Narayana Junior College, Vijayawada",
        grade: "87.7%",
      },
      {
        degree: "SSC",
        institution: "Bhashyam High School, Chimakurthy",
        grade: "93%",
      },
    ],
  },
  projects: [
    {
      id: "pronova",
      title: "PRONOVA",
      description: "Full-stack project management platform.",
      chips: [
        "Next.js",
        "React",
        "PostgreSQL",
        "Prisma",
        "Zustand",
        "Tailwind CSS",
        "Clerk",
        "Vercel",
      ],
      desktopCols: 7,
      githubUrl: "https://github.com/TheCodeExplorer/PRONOVA",
    },
    {
      id: "icradle",
      title: "iCradle",
      description:
        "Arduino/C++ IoT smart cradle with cry detection, servo-driven rocking, TMP36 temperature monitoring and moisture sensing. Led a 7-member team.",
      chips: ["Arduino", "C++", "IoT"],
      desktopCols: 5,
      githubUrl: "https://github.com/TheCodeExplorer/iCradle",
    },
    {
      id: "medipill-monitor",
      title: "MediPill Monitor",
      statusTag: "In progress",
      description: "IoT-based medicine tracking and reminder app.",
      chips: ["IoT"],
      desktopCols: 4,
      githubUrl: "https://github.com/khaleedshaik62/Medipill",
    },
    // {
    //   id: "projecthub",
    //   title: "ProjectHub",
    //   description:
    //     "AI-powered project management dashboard with interactive visualizations and PDF status reports.",
    //   chips: ["Python", "ReportLab"],
    //   desktopCols: 4,
    //   githubUrl: "https://github.com/TheCodeExplorer",
    // },
    {
      id: "ecas",
      title: "ECAS",
      description: "Aquaponic system.",
      chips: [],
      desktopCols: 4,
      githubUrl: "https://github.com/TheCodeExplorer/ECAS",
    },
  ],
  skills: [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "C++"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    },
    {
      title: "Backend & Data",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
    },
    {
      title: "Cloud & Tools",
      skills: ["Git", "Vercel", "Clerk"],
    },
    {
      title: "Embedded & IoT",
      skills: ["Arduino", "Embedded systems"],
    },
  ],
  experience: [
    {
      company: "AICTE EduSkills",
      role: "Python / MERN Full Stack Internship",
      period: "Apr-Jun 2026",
    },
    {
      company: "Cardiff University",
      role: "Remote team project",
      period: "Sep-Oct 2025",
    },
    {
      company: "Google",
      role: "AI/ML Virtual Internship",
      period: "Jul-Sep 2025",
    },
  ],
  certifications: [
    {
      name: "NPTEL",
      // credentialUrl: "https://nptel.ac.in", // optional
    },
    {
      name: "Coursera",
      // credentialUrl: "https://coursera.org", // optional
    },
  ],
  contact: {
    heading: "Let's build something.",
    subheading:
      "I'm open to software engineering internships and entry-level roles. Email is the best way to reach me.",
  },
};
