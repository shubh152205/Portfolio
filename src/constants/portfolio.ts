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
      url: "https://cdn.dribbble.com/userupload/5464833/file/original-7c3852b08e60261f29f0fc3a3776da6f.jpg",
    },
  },
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Software Developer",
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
          text: "Results-driven software engineer focused on mobile app development and user interface design. Known for effective problem-solving and collaborative code reviews, enhancing application quality and efficiency.",
        },
      ],
    },
  ],
  location: "India",
  // All skills from portfolio-8: Frontend (5) + Backend (3) + Tools (4) = 12 skills
  skills: [
    "Mobile app development",
    "Programming",
    "Data structures and algorithms",
    "User interface design",
    "Code debugging",
    "C/C++",
    "Python",
    "HTML",
    "CSS",
    "Research and analysis",
    "Software design",
    "React",
    "JavaScript",
    "Node.js",
    "VS Code",
    "Photoshop",
    "Git",
  ],
  social: {
    github: "https://github.com/shubh152205/",
    email: "ask.shubham.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/shubhamsharma0522/",
    resume: "https://drive.google.com/file/d/1P1Tv3wyAeWJBcNVhBjdKc6XmkBmIxAre/view?usp=sharing",
    youtube: "https://www.youtube.com/@ask-shubh",
  },
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    _id: "work-1",
    company: "Student",
    title: "Android Developer",
    location: "Remote",
    startDate: "2024",
    endDate: "2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: `• Developed user-friendly interfaces for mobile applications. \n
                   • Participated in code reviews to maintain quality standards. \n
                   • Assisted in debugging code to identify and fix errors in applications. \n
                   • Researched new technologies to enhance understanding of software engineering trends.`,
          },
        ],
      },
    ],
  },
  {
    _id: "work-2",
    company: "College Mini Project",
    title: "Flutter Developer",
    location: "Remote",
    startDate: "2025",
    endDate: "2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: `• Developed user interfaces using Flutter for mobile applications. \n
                   • Conducted code reviews to ensure best practices and maintain code quality. \n
                   • Troubleshot and debugged application issues to improve user experience.`,
          },
        ],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  // Add your education details here if needed
];

// Only 4 projects with images from portfolio-8
export const PROJECTS: Project[] = [
  {
    _id: "project-1",
    title: "Analysis and Identification of Malicious Mobile Application",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This mini project focuses on the analysis and identification of malicious mobile applications using a Flutter-based approach. The system examines app behavior patterns, permissions, and activity indicators to help detect potential security threats in mobile applications. By combining a clean Flutter interface with logical analysis techniques, the project demonstrates how mobile security concepts can be applied in a practical, user-focused solution. It highlights an understanding of mobile app development, basic cybersecurity principles, and real-world problem solving.",
          },
        ],
      },
    ],
    technologies: ["Flutter", "Docker", "Git", "GitHub", "VS Code", "Photoshop"],
    image: {
      asset: {
        url: "/portfolio/projects/project-1.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/shubh152205/FreeMalwareDetection",
        type: "Dart",
      },
    ],
  },
  {
    _id: "project-2",
    title: "Youtube link to PDF converter",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This project converts YouTube video links into clean, well-formatted PDF documents using Python and HTML. It extracts key video data such as title, description, and subtitles when available, then structures the content with HTML for readability before generating the final PDF. The tool focuses on simplicity, accuracy, and user experience, making it useful for offline study, documentation, and content archiving.",
          },
        ],
      },
    ],
    technologies: ["Python", "HTML", "Git", "GitHub", "VS Code", "Photoshop"],
    image: {
      asset: {
        url: "/portfolio/projects/project-2.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "#",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "#",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-3",
    title: "Blockchain Voting System",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.",
          },
        ],
      },
    ],
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
    image: {
      asset: {
        url: "/portfolio/projects/project-3.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "#",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "#",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-4",
    title: "Cloud Infrastructure Dashboard",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A comprehensive cloud management platform for monitoring, managing, and optimizing multi-cloud infrastructure. Features real-time metrics, cost analysis, automated scaling, and security compliance monitoring across AWS, Azure, and GCP.",
          },
        ],
      },
    ],
    technologies: ["Go", "Kubernetes", "Grafana", "Prometheus", "Terraform", "React"],
    image: {
      asset: {
        url: "/portfolio/projects/project-4.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "#",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "#",
        type: "demo",
      },
    ],
  },
];

