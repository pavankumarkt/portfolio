import { Project, Education, SkillCategory, Achievement, Certificate } from './types';

export const PERSONAL_INFO = {
  name: "Pavan Kumar K T",
  title: "CS Student",
  subtitle: "Computer Science Engineering Student",
  email: "pavanraj.kumar2503@gmail.com",
  phone: "+91 87479 45025",
  linkedin: "https://www.linkedin.com/in/pavankumarkt",
  github: "https://github.com/pavankumarkt",
  summary: "Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Data Analytics, and Generative AI. Experienced in developing AI-powered applications, building full-stack web solutions, and analyzing data using Python and SQL.",
  location: "Keremegaladoddi, Mandya district, Karnataka",
  nationality: "Indian",
  about: "Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Data Analytics, and Generative AI. Experienced in developing AI-powered applications, building full-stack web solutions, and analyzing data using Python and SQL.\n\nStrong analytical and problem-solving skills with a commitment to creating impactful, intelligent, and scalable solutions."
};

export const ABOUT_STATS = [
  {
    label: "Education",
    value: "B.E. Computer Science",
    subValue: "Maharaja Institute of Technology, Mysore (CGPA: 8.55)"
  },
  {
    label: "Focus",
    value: "AI & Full-Stack Solutions",
    subValue: "Python, TensorFlow, React, FastAPI, MERN"
  },
  {
    label: "Goal",
    value: "AI & Software Engineer",
    subValue: "Creating impactful & scalable intelligent solutions"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "REAL-TIME ROAD HEALTH MONITORING AND POTHOLE DETECTION",
    date: "06/2026 – PRESENT",
    description: "Developed an AI-powered web application for real-time pothole detection and road damage reporting using image analysis, GPS location extraction, and complaint tracking.",
    link: "https://github.com/pavankumarkt",
    tech: ["React.js", "FastAPI", "TensorFlow", "SQLite", "Python"]
  },
  {
    title: "ROLE-BASED ACADEMIC DATABASE MANAGEMENT SYSTEM",
    date: "02/2026 – 03/2026",
    description: "Developed a Role-Based Academic Database Management System using the MERN stack to manage student, faculty, and administrative records efficiently.",
    link: "https://github.com/pavankumarkt/Academic-DBMS",
    tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    title: "COW DATABASE MANAGEMENT SYSTEM",
    date: "02/2026 – 03/2026",
    description: "Built a web-based cattle management system to maintain health, vaccination, and breeding records with secure data storage and an intuitive user interface.",
    link: "https://github.com/pavankumarkt/Cow-database-management-system",
    tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    title: "PNEUMONIA DETECTION",
    date: "11/2025 – 12/2025",
    description: "Developed a deep learning model to classify chest X-ray images for pneumonia detection using CNN-based image classification and preprocessing techniques.",
    link: "https://github.com/pavankumarkt",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "Maharaja Institute of Technology, Mysore",
    degree: "Bachelor of Engineering [CSE]",
    period: "08/2023 – Present",
    grade: "CGPA: 8.55",
    location: "Mysuru"
  },
  {
    institution: "HDK PU College Besagarahalli",
    degree: "Pre-University Course",
    period: "2021 – 2023",
    grade: "Percentage: 85.66%",
    location: "Besagarahalli"
  },
  {
    institution: "Poorna Prajna Convent",
    degree: "SSLC (10th Grade)",
    period: "2020 – 2021",
    grade: "Percentage: 97.76%",
    location: "Shivapura Maddur"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["C", "Python", "HTML", "CSS", "SQL"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "TensorFlow", "Keras", "OpenCV"]
  },
  {
    category: "Data Analytics & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Data Visualization"]
  },
  {
    category: "Soft Skills",
    skills: ["Analytical Thinking", "Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Continuous Learning"]
  }
];

export const CERTIFICATES_LIST: Certificate[] = [
  { name: "AWS Cloud Practitioner Essentials" },
  { name: "Developing Front-End Apps With React" },
  { name: "Cyber Security Technologies" },
  { name: "Applied Machine Learning in Python" }
];

export const ACHIEVEMENTS_LIST: Achievement[] = [
  {
    title: "1st Runner-up",
    organization: "MITM XYPHER Hackathon 2026",
    date: "27/03/2026 – 28/03/2026",
    location: "Mysore",
    description: "Demonstrated strong analytical thinking, problem-solving, and teamwork skills while building and presenting a functional prototype within a competitive, time-constrained environment."
  },
  {
    title: "1st Runner-up",
    organization: "NMIT Sparklab Designathon 2025",
    date: "23/10/2025 – 24/10/2025",
    location: "Bengaluru",
    description: "National-Level Designathon Event organized by NMIT Sparklab 2K25, where we designed an innovative model focused on reducing food waste in society through sustainable and technology-driven solutions."
  }
];

export const LANGUAGES_LIST: string[] = [
  "English",
  "Kannada",
  "Tamil",
  "Telugu",
  "Hindi"
];

export const INTERESTS_LIST: string[] = [
  "Exploring New Technologies",
  "Problem Solving",
  "Data Analysis",
  "Farming"
];
