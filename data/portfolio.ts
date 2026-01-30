export const personalInfo = {
  name: "Naphat Chartwanchai",
  shortName: "NC",
  title: "Computer Engineering Student",
  university: "Chulalongkorn University",
  location: "Nonthaburi, Thailand",
  gpax: "3.31/4.00",
  tagline: "Passionate about Software Engineering, Data Science, and AI",
  about: [
    "I am a Computer Engineering student based in Nonthaburi, Thailand.",
    "I have hands-on experience in building enterprise-grade applications and AI-powered solutions using modern tech stacks like Next.js, Spring Boot, and Azure.",
  ],
  interests: ["Investing", "Artificial Intelligence", "Sport"],
  languages: [
    { language: "Thai", proficiency: "Native" },
    { language: "English", proficiency: "Working Proficiency" },
  ],
  techBadges: ["React", "Python", "Azure", "SQL"],
};

export const contact = {
  email: "nchartwanchai@gmail.com",
  phone: "+66 61-993-5011",
  github: {
    username: "LDZA01",
    url: "https://github.com/LDZA01",
  },
  resume: "/Resume_Naphat Chartwanchai_Chulalongkorn University.pdf",
};

export const experiences = [
  {
    id: 1,
    title: "Sales AI Chatbot (Project)",
    company: "Panel Plus (Mitr Phol Group)",
    type: "project",
    period: "Sep 2025 - Present",
    location: "Thailand",
    description: [
      "Built an enterprise-grade AI assistant on Azure using OpenAI and RAG",
      "Enabled real-time sales analytics, reducing manual reporting workload by 90%",
      "Engineered Azure/PostgreSQL infrastructure and implemented security guardrails",
    ],
    technologies: ["Azure", "OpenAI", "PostgreSQL", "RAG", "Python"],
    highlight: true,
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "Relearn Solution",
    type: "internship",
    period: "May 2025 - July 2025",
    location: "Bangkok, Thailand",
    description: [
      'Developed "SSO850" (Social Security Office) enterprise system',
      "Resolved 10+ Jira tickets (Full-stack bug fixes & features) in an Agile environment",
      "Worked with Spring Boot, ReactJS, and Oracle PL/SQL",
    ],
    technologies: ["Spring Boot", "ReactJS", "Oracle PL/SQL", "Jira", "Agile"],
    highlight: false,
  },
  {
    id: 3,
    title: "Software Development Intern",
    company: "Soft Square",
    type: "internship",
    period: "May 2024 - July 2024",
    location: "Bangkok, Thailand",
    description: [
      "Developed 'Internal Data Management Module'",
      "Designed database schemas and managed sprint planning via ClickUp",
      "Built features using Angular, .NET Core, and SQL",
    ],
    technologies: ["Angular", ".NET Core", "SQL", "ClickUp"],
    highlight: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "Sales AI Chatbot",
    subtitle: "Enterprise Grade",
    description: "AI Assistant for sales analytics with RAG technology",
    longDescription: [
      "Built an enterprise-grade AI assistant on Azure using OpenAI and RAG",
      "Enabled real-time sales analytics, reducing manual reporting workload by 90%",
      "Engineered Azure/PostgreSQL infrastructure and implemented security guardrails",
    ],
    technologies: ["Azure", "OpenAI", "PostgreSQL", "RAG", "Python"],
    category: "AI/ML",
    highlight: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: 2,
    title: "FIU",
    subtitle: "Sandbox Hackathon 2024 - Honorable Mention",
    description: "AI-powered career discovery platform",
    longDescription: [
      "Designed System Flow & UI/UX for AI-powered career discovery",
      "Received Honorable Mention at Sandbox Hackathon 2024",
      "Collaborated with team to deliver innovative solution",
    ],
    technologies: ["AI/ML", "UI/UX Design", "System Design"],
    category: "AI/ML",
    highlight: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

export const skills = {
  "Languages & Web": [
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "ASP.NET Core",
    "Spring Boot",
  ],
  "Data & AI": [
    "SQL",
    "PostgreSQL",
    "Oracle PL/SQL",
    "Pandas",
    "Azure",
    "OpenAI",
    "Prefect",
    "FAISS/RAG",
  ],
  "DevOps & Tools": [
    "Git",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Jira",
    "ClickUp",
  ],
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
