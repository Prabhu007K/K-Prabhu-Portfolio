import type { PortfolioData } from "@/types/portfolio";
import {
  sharedCertifications,
  sharedContact,
  sharedEducation,
  sharedExperience,
} from "./shared";

export const developerPortfolio: PortfolioData = {
  mode: "developer",
  modeLabel: "Web Developer",
  ...sharedContact,
  resumeUrl: "/K_Prabhu_RESUME_Web_Developer.pdf",
  resumeFileName: "K_Prabhu_RESUME_Web_Developer.pdf",
  title: "Full Stack Developer",
  tagline:
    "Full-stack developer crafting high-performance web applications. I build scalable, user-centric solutions from end to end using the MERN stack and Java.",
  roles: [
    "Full Stack Developer",
    "Web Developer",
    "MERN Developer",
    "Problem Solver",
  ],
  about: {
    paragraphs: [
      "During my MERN Full Stack internship at Ethnus Virtual, I built a job portal with JWT authentication, RESTful APIs, and MongoDB—improving responsiveness by 30% and engagement by 20%.",
      "I've deployed 5+ projects including Chittoor Travels (map-based booking), Achar House & PageTurn e-commerce stores, a Kanban task dashboard, and an OPG dental X-ray detection app on Hugging Face using YOLOv8, Flask, and Streamlit-style workflows.",
      "I work with HTML, CSS, JavaScript, React, Next.js, Node.js, Flask, and deploy to Netlify, Render, Hugging Face, and Vercel.",
    ],
  },
  skills: [
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Git", icon: "git" },
  ],
  education: [...sharedEducation],
  projects: [
    {
      title: "Chittoor Travels Booking",
      description:
        "Private travels booking site for Chittoor — map pickup/drop across service cities, distance-based fare with GST, vehicle photos, 3-step booking, printable invoice, and admin panel for fleet & bookings.",
      tags: ["HTML", "CSS", "JavaScript", "Leaflet", "Netlify"],
      link: "https://prabhu007k-chittoor-travels-2026.netlify.app/",
      github: "https://github.com/Prabhu007K/chittoor-travels-2026",
      image: "/projects/chittoor-travels.jpg",
    },
    {
      title: "Achar House Pickle Store",
      description:
        "Homemade pickle e-commerce with size-based pricing (250g–1kg), shopping cart, checkout, and a client admin panel to manage products, stock, and orders.",
      tags: ["HTML", "CSS", "JavaScript", "localStorage", "Netlify"],
      link: "https://prabhu007k-achar-house.netlify.app/",
      github: "https://github.com/Prabhu007K/achar-house-pickle-website",
      image: "/projects/achar-house.jpg",
    },
    {
      title: "PageTurn Stationary Store",
      description:
        "E-commerce storefront for a stationery shop with product search, variant options, cart, checkout, user login, purchase history, and owner admin panel for catalog and stock.",
      tags: ["HTML", "CSS", "JavaScript", "localStorage", "Netlify"],
      link: "https://prabhu007k-pageturnstationary.netlify.app/",
      github: "https://github.com/Prabhu007K/PageTurnStationary",
      image: "/projects/pageturn.jpg",
    },
    {
      title: "Kanban Task Dashboard",
      description:
        "Drag-and-drop Kanban board (To Do, In Progress, Completed) with priority labels, color-coded columns, and localStorage persistence — no backend required.",
      tags: ["HTML", "CSS", "JavaScript", "Kanban", "Netlify"],
      link: "https://prabhu007-kanban-dashboard.netlify.app/",
      github: "https://github.com/Prabhu007K/Kanban-Task-Management-Dashboard",
      image: "/projects/kanban.jpg",
    },
    {
      title: "OPG Faulty Tooth Detection",
      description:
        "YOLOv8-powered dental X-ray analysis that marks suspect teeth on panoramic OPG images. Flask dashboard with upload, detection overlay, and confidence scores — live demo on Hugging Face Spaces.",
      tags: ["Python", "YOLOv8", "Flask", "Hugging Face"],
      link: "https://huggingface.co/spaces/Prabhu007K/opg-faulty-tooth-detection",
      github: "https://github.com/Prabhu007K/OPG-faulty-tooth-detection-dashboard",
      image: "/projects/opg-tooth-detection.jpg",
    },
  ],
  experience: [...sharedExperience],
  certifications: [...sharedCertifications],
  aboutStats: [
    { label: "Projects", value: "5+ Deployed" },
    { label: "Internship", value: "Ethnus MERN" },
    { label: "CGPA", value: "7.93" },
    { label: "Status", value: "Open to Work" },
  ],
};
