export const sharedContact = {
  name: "K Prabhu",
  shortName: "Prabhu",
  email: "prabhuku004@gmail.com",
  phone: "+91 7995966630",
  phoneTel: "+917995966630",
  location: "Chittoor, India",
  social: {
    github: "https://github.com/Prabhu007K",
    linkedin: "https://www.linkedin.com/in/prabhu-kumareshan-230949359",
  },
  navLinks: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export const sharedEducation = [
  {
    degree: "B.Tech",
    field: "Computer Science (Specialization in Cybersecurity)",
    institution: "VIT-AP University, Amaravati",
    period: "Sep 2022 – May 2026",
    detail: "CGPA: 7.93",
  },
  {
    degree: "Intermediate (Higher Secondary)",
    institution: "Sunbeam High School, Katpadi",
    period: "2020 – 2022",
    detail: "76.8%",
  },
  {
    degree: "SSC (10th Standard)",
    institution: "B V Reddy Senior Secondary School, Chittoor",
    period: "2019 – 2020",
    detail: "89.4%",
  },
] as const;

export const sharedExperience = [
  {
    company: "Ethnus Virtual",
    role: "MERN Full Stack Developer",
    period: "Jun 2024 – Aug 2024",
    description:
      "Built a full-stack job portal using the MERN stack with secure authentication and RESTful APIs. Improved system responsiveness by 30% and platform engagement by 20%. Designed a responsive, accessible UI and strengthened data integrity with MongoDB and JWT-based authentication.",
  },
] as const;

export const sharedCertifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2025",
    viewLink: "/certificates/cisco-cybersecurity.pdf",
    image: "/certificates/cisco-cybersecurity.jpg",
  },
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "AWS Academy",
    date: "Jun 2025",
    viewLink: "/certificates/aws-cloud-architecting.pdf",
    image: "/certificates/aws-architecting.jpg",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "Jun 2025",
    viewLink: "/certificates/aws-cloud-foundations.pdf",
    image: "/certificates/aws-foundations.jpg",
  },
  {
    title: "MERN Full Stack Certification",
    issuer: "Ethnus",
    date: "Aug 2024",
    viewLink: "/certificates/mern-full-stack.pdf",
    image: "/certificates/mern-fullstack.jpg",
  },
  {
    title: "C Programming",
    issuer: "Global Institute of Computer Technology, Chittoor, A.P.",
    date: "Nov 2025",
    viewLink: "/certificates/c-programming.pdf",
    image: "/certificates/c-programming.jpg",
  },
] as const;
