import { Project, Education, SkillCategory, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "PAVAN KUMAR K T",
  title: "Computer Science Student",
  subtitle: "Pre-final Year Student",
  email: "pavanraj.kumar2503@gmail.com",
  phone: "+91 87479 45025",
  linkedin: "https://www.linkedin.com/in/pavan-kumar-29a9162b7",
  github: "https://github.com/pavankumar2503-sys",
  summary: "Motivated CS student with strong analytical thinking & a passion for building real-world solutions",
  location: "Mandya, Karnataka, India",
  about: "Hi, I'm PAVAN KUMAR K T. Currently pursuing my Pre-final year Bachelor's in Computer Science at Maharaja Institute of Technology, Mysuru. My passion lies in building software that solves real-world problems and exploring the limitless possibilities of AI and web development.\n\nI have solid programming fundamentals and hands-on project-based experience. From developing deep learning models for medical image analysis to building full-stack web applications with the MERN stack, I'm constantly pushing my boundaries. My strong analytical and logical thinking skills drive me to learn and grow in challenging technical environments."
};

export const ABOUT_STATS = [
  {
    label: "Education",
    value: "B.E. Computer Science",
    subValue: "Maharaja Institute of Technology (2023-2027)"
  },
  {
    label: "Focus",
    value: "Full-Stack & AI Development",
    subValue: "React, MERN Stack, Deep Learning"
  },
  {
    label: "Goal",
    value: "Software Engineer",
    subValue: "Building scalable solutions"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "PNEUMONIA DETECTION SYSTEM",
    date: "NOV 2025 - DEC 2025",
    description: "Developed a pneumonia detection system using deep learning to classify chest X-ray images as pneumonia or normal. Implemented data preprocessing, model training, and evaluation enabling accurate and automated medical image analysis to support early diagnosis.",
    link: "https://github.com/pavankumar2503-sys",
    tech: ["Python", "CNN", "TensorFlow/Keras", "OpenCV", "NumPy", "Pandas"]
  },
  {
    title: "ROLE-BASED ACADEMIC DATABASE MANAGEMENT SYSTEM",
    date: "FEB 2026 - MAR 2026",
    description: "Developed a Role-Based Academic Database Management System using the MERN stack to manage student, faculty, and administrative records efficiently. Implemented secure role-based authentication and authorization to control access for different users.",
    link: "https://github.com/pavankumar2503-sys",
    tech: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    title: "COW DATABASE MANAGEMENT SYSTEM",
    date: "AUG 2025 - SEP 2025",
    description: "Built a web-based Cow Database Management System using the MERN stack to manage cattle records including health, vaccination, and breeding details. Implemented a responsive React frontend, RESTful APIs, and MongoDB for secure and scalable data storage.",
    link: "https://github.com/pavankumar2503-sys",
    tech: ["MongoDB", "Express", "React", "Node.js"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "Maharaja Institute of Technology",
    degree: "Bachelor of Engineering, Computer Science",
    period: "2023 - 2027(Expected)",
    grade: "CGPA: 8.3",
    location: "Mysuru"
  },
  {
    institution: "HDK PU College Besagarahalli",
    degree: "PUC (12th Grade)",
    period: "2021 - 2023",
    grade: "86.66%",
    location: "Mandya"
  },
  {
    institution: "Poorna Prajna Convent Shivapura",
    degree: "SSLC (10th Grade)",
    period: "2021",
    grade: "97.66%",
    location: "Maddur"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Python", "C"]
  },
  {
    category: "AI & Data Science",
    skills: ["TensorFlow/Keras", "CNN", "OpenCV", "NumPy", "Pandas"]
  },
  {
    category: "Tools & Certifications",
    skills: ["Git", "GitHub", "VS Code", "AWS Cloud Practitioner", "Cyber Security"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Adaptability", "Continuous Learning"]
  }
];

export const ACHIEVEMENTS_LIST: Achievement[] = [
  {
    title: "1st Runner-up",
    organization: "MITM XYPHER Hackathon 2026",
    date: "March 2026",
    location: "Mysuru",
    description: "Demonstrated strong analytical thinking, problem-solving, and teamwork skills while building and presenting a functional prototype within a competitive, time-constrained environment."
  },
  {
    title: "1st Runner-up",
    organization: "NMIT Sparklab Designathon 2025",
    date: "October 2025",
    location: "Bengaluru",
    description: "National-Level Designathon Event where we designed an innovative model focused on reducing food waste in society through sustainable and technology-driven solutions."
  }
];
