// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string;
  name: string;
  initials: string;
  avatar?: {
    asset?: {
      url?: string;
    };
  };
  description?: any[];
  summary?: any[];
  location?: string;
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    resume?: string;
    youtube?: string;
    email?: string;
  };
}

export interface WorkExperience {
  _id: string;
  company: string;
  title: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  location?: string;
  startDate: string;
  endDate?: string;
  description?: any[];
  url?: string;
}

export interface Education {
  _id: string;
  school: string;
  degree: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  startDate: string;
  endDate: string;
  url?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: any[];
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  image?: {
    asset?: {
      url?: string;
    };
  };
  video?: string;
  links?: {
    title: string | null;
    url: string | null;
    type: string | null;
  }[];
}

// Portfolio data
export const AUTHOR: Author = {
  _id: "author-1",
  name: "Shubham Sharma",
  initials: "SS",
  avatar: {
    asset: {
      url: "https://raw.githubusercontent.com/shubh152205/Portfolio/main/public/images/avatar.jpg",
    },
  },
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Software Engineer | Mobile & Backend Developer",
        },
      ],
    },
  ],
  summary: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Results-driven software engineer specialising in mobile app development, systems programming, and backend engineering. Experienced in building security-focused tools, multi-threaded C++ engines, and cross-platform Flutter apps. Passionate about clean architecture, real-world problem solving, and continuous learning.",
        },
      ],
    },
  ],
  location: "Greater Noida, India",
  skills: [
    // Languages
    "Python",
    "Java",
    "Dart",
    "C/C++",
    "SQL",
    "HTML/CSS",
    // Frameworks & Libraries
    "Flutter",
    "Spring Boot",
    "React.js",
    "Pandas",
    "NumPy",
    // Developer Tools
    "Git",
    "GitHub",
    "VS Code",
    "Android Studio",
    "Postman",
    "Kafka",
    "Azure Console",
    // Concepts
    "Data Structures & Algorithms",
    "Mobile Security",
    "REST APIs",
    "OOP",
    "UI/UX Design",
  ],
  social: {
    github: "https://github.com/shubh152205/",
    email: "ask.shubham.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/shubhamsharma0522/",
    resume: "https://drive.google.com/file/d/1BImgcUxBE9SlsdHgVAnCWay4Os2LATWd/view?usp=sharing",
    youtube: "https://www.youtube.com/@ask-shubh",
  },
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    _id: "work-1",
    company: "Self-Employed / YouTube",
    title: "Freelance Content & UI Designer",
    location: "Remote",
    startDate: "Jan 2023",
    endDate: "Present",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: `• Designed visual concepts and UI elements for diverse digital platforms, applying design-thinking principles.\n• Streamlined video production workflows with custom motion graphics and audio enhancements.`,
          },
        ],
      },
    ],
  },
  {
    _id: "work-2",
    company: "JPMorgan Chase & Co. (Forage)",
    title: "Software Engineering Job Simulation",
    location: "Remote",
    startDate: "Feb 2026",
    endDate: "Feb 2026",
    url: "https://www.theforage.com/",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: `• Completed a backend engineering simulation using Java and Spring Boot, developing REST APIs for financial data requests.\n• Implemented Kafka for real-time data processing and integrated an H2 Database for transaction recording.`,
          },
        ],
      },
    ],
  },
  {
    _id: "work-3",
    company: "Mastercard (Forage)",
    title: "Cybersecurity Job Simulation",
    location: "Remote",
    startDate: "Feb 2026",
    endDate: "Feb 2026",
    url: "https://www.theforage.com/",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: `• Designed a phishing simulation and analyzed click-rate metrics to identify vulnerabilities and strengthen defense strategies.`,
          },
        ],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    _id: "edu-1",
    school: "Greater Noida Institute of Technology",
    degree: "Bachelor of Technology in Computer Science Engineering",
    startDate: "2024",
    endDate: "2028",
    url: "https://www.gniotgroup.edu.in/",
  },
];

// Projects
export const PROJECTS: Project[] = [
  {
    _id: "project-1",
    title: "Pocket Analyzer — Deep Packet Inspection Engine",
    startDate: "Feb 2026",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Architected a highly concurrent Deep Packet Inspection (DPI) engine in C++ to parse raw PCAP network traffic and extract Server Name Indication (SNI) data from encrypted TLS handshakes. Engineered a multi-threaded processing pipeline utilising custom Load Balancers, Fast Paths, and thread-safe queues to efficiently scale packet inspection across multiple CPU cores. Implemented stateful flow tracking and a custom rules-based filtering system capable of detecting and dropping specific connections based on IP, domain, and application signatures.",
          },
        ],
      },
    ],
    technologies: ["C++", "Networking", "Multi-threading", "PCAP", "TLS/SNI"],
    image: {
      asset: {
        url: "https://raw.githubusercontent.com/shubh152205/Portfolio/main/public/projects/project-1.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/shubh152205/Pocket_Analyzer",
        type: "code",
      },
    ],
  },
  {
    _id: "project-2",
    title: "Malicious App Analyzer",
    startDate: "Jan 2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developed a cross-platform mobile security tool in Flutter to identify and analyze potentially harmful Android applications. Engineered a scanning engine that detects sensitive permissions and suspicious behaviour patterns to generate detailed security reports.",
          },
        ],
      },
    ],
    technologies: ["Flutter", "Dart", "Mobile Security", "Git", "GitHub"],
    image: {
      asset: {
        url: "https://raw.githubusercontent.com/shubh152205/Portfolio/main/public/projects/project-2.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/shubh152205/FreeMalwareDetection",
        type: "code",
      },
    ],
  },
  {
    _id: "project-3",
    title: "Secure Notes — Local Encryption App",
    startDate: "Oct 2024",
    endDate: "Dec 2024",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Architected an offline-first, privacy-focused note-taking application ensuring complete data sovereignty. Implemented advanced local encryption and biometric authentication to secure data directly on device storage.",
          },
        ],
      },
    ],
    technologies: ["Flutter", "Dart", "Cryptography", "Biometrics", "Hive"],
    image: {
      asset: {
        url: "https://raw.githubusercontent.com/shubh152205/Portfolio/main/public/projects/project-3.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/shubh152205/Secure_Notes",
        type: "code",
      },
    ],
  },
  {
    _id: "project-4",
    title: "YouTube to PDF Converter",
    startDate: "Aug 2024",
    endDate: "Sep 2024",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Built a utility tool that automates the conversion of educational video content into readable PDF documents. Utilised Python for backend processing to accurately extract frames and subtitles for structured study material. Integrated Java and HTML to format the final document output for improved readability.",
          },
        ],
      },
    ],
    technologies: ["Python", "Java", "HTML", "Git", "GitHub"],
    image: {
      asset: {
        url: "https://raw.githubusercontent.com/shubh152205/Portfolio/main/public/projects/project-4.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/shubh152205/Youtube_To_PDF",
        type: "code",
      },
    ],
  },
];
