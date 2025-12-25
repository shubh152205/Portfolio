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
    twitter?: string;
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
      url: "/portfolio/images/avatar.jpg",
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
            text: `• Developed user-friendly interfaces for mobile applications.
                   • Participated in code reviews to maintain quality standards.
                   • Assisted in debugging code to identify and fix errors in applications.
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
    startDate: "09/2025",
    endDate: "12/2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: `• Developed user interfaces using Flutter for mobile applications.
                   • Conducted code reviews to ensure best practices and maintain code quality.
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
    title: "AI-Powered Code Review Assistant",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "An intelligent code review platform that uses machine learning to analyze pull requests, detect bugs, suggest optimizations, and enforce coding standards. Features real-time collaboration, automated testing integration, and comprehensive security scanning.",
          },
        ],
      },
    ],
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker"],
    image: {
      asset: {
        url: "/portfolio/projects/project-1.webp",
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
    _id: "project-2",
    title: "Real-time Collaborative Whiteboard",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A next-generation collaborative whiteboard platform with infinite canvas, real-time synchronization, and advanced drawing tools. Supports video conferencing, screen sharing, and export to multiple formats. Built for remote teams and educators.",
          },
        ],
      },
    ],
    technologies: ["TypeScript", "WebRTC", "Socket.io", "Canvas API", "Node.js", "Redis"],
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

