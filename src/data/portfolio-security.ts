import type { PortfolioData } from "@/types/portfolio";
import {
  sharedCertifications,
  sharedContact,
  sharedEducation,
  sharedExperience,
} from "./shared";

export const securityPortfolio: PortfolioData = {
  mode: "security",
  modeLabel: "Cyber Security",
  ...sharedContact,
  resumeUrl: "/K_Prabhu_RESUME_Cyber_Security.pdf",
  resumeFileName: "K_Prabhu_RESUME_Cyber_Security.pdf",
  title: "Cyber Security Analyst",
  tagline:
    "Cyber Security Analyst focused on fortifying digital infrastructure and proactively neutralizing threats. I leverage advanced threat intelligence to protect critical networks from evolving cyber risks.",
  roles: [
    "Ethical Hacker",
    "Security Researcher",
    "SOC Analyst",
    "Penetration Tester",
  ],
  about: {
    paragraphs: [
      "I specialize in identifying, analyzing, and mitigating complex security vulnerabilities to protect sensitive data and maintain strict business continuity. My core focus is translating raw threat intelligence into actionable defense strategies and rapid incident response.",
      "I build practical security tools to understand real-world threats—from SQL injection and port scanning to password breach analysis, file integrity monitoring, and packet inspection.",
      "My projects include a password strength analyzer with Have I Been Pwned integration, an interactive SQLi vulnerability lab, a multi-threaded port scanner, a SHA-256 file integrity monitor, and a packet sniffer with traffic visualization—mostly Flask dashboards deployed on Render.",
      "I'm comfortable with Kali Linux, Nmap, Wireshark, Burp Suite, Python, and applying defensive practices learned through Cisco and AWS Academy certifications.",
    ],
  },
  skills: [
    { name: "Linux", icon: "linux" },
    { name: "Python", icon: "python" },
    { name: "Networking", icon: "network" },
    { name: "Wireshark", icon: "wireshark" },
    { name: "Burp Suite", icon: "burp" },
    { name: "Kali Linux", icon: "kali" },
    { name: "Git", icon: "git" },
  ],
  education: [...sharedEducation],
  projects: [
    {
      title: "Password Strength Analyzer",
      description:
        "Matrix-themed password checker & generator with entropy scoring, crack-time estimates, and Have I Been Pwned breach lookup via SHA-1 k-anonymity.",
      tags: ["JavaScript", "HIBP API", "Security", "Netlify"],
      link: "https://prabhu007k-password-strength-analyzer.netlify.app/",
      github: "https://github.com/Prabhu007K/password-strength-analyzer---checker",
      image: "/projects/password-analyzer.jpg",
    },
    {
      title: "Interactive SQLi Vulnerability Lab",
      description:
        "Hands-on SQL injection lab with vulnerable, broken-fix & secure login flows, blind SQLi, payload playbook, missions, attack log, and query highlighting.",
      tags: ["Flask", "SQLite", "OWASP", "Render"],
      link: "https://interactive-sql-injection-sqli.onrender.com/",
      github:
        "https://github.com/Prabhu007K/Interactive-SQL-Injection-SQLi-Vulnerability-Lab",
      image: "/projects/sqli-lab.jpg",
    },
    {
      title: "Port Scanner & Service Detector",
      description:
        "Multi-threaded port scanner with live progress, scan profiles, banner grab, risk hints, UDP DNS demo, heatmap, export, and session history.",
      tags: ["Flask", "Python", "Sockets", "Render"],
      link: "https://prabhu007k-port-scanner.onrender.com/",
      github: "https://github.com/Prabhu007K/port-scanner",
      image: "/projects/port-scanner.jpg",
    },
    {
      title: "File Integrity Monitor",
      description:
        "SHA-256 file integrity monitor with guided demo, live dashboard, integrity score, file tree, hash diff alerts, timestamps, and CSV export.",
      tags: ["Flask", "SHA-256", "FIM", "Render"],
      link: "https://file-integrity-monitor-ejg3.onrender.com/",
      github: "https://github.com/Prabhu007K/File-Integrity--Monitor",
      image: "/projects/file-integrity.jpg",
    },
    {
      title: "Packet Sniffer & Traffic Visualizer",
      description:
        "Flask packet sniffer with guided demo, protocol charts, filters, packet detail panel, session summary, and CSV export. Scapy for local capture.",
      tags: ["Flask", "Scapy", "Networking", "Render"],
      link: "https://network-packet-sniffer-and-traffic-log.onrender.com/",
      github:
        "https://github.com/Prabhu007K/Network-Packet-Sniffer-and-Traffic-Log-Visualizer",
      image: "/projects/packet-sniffer.jpg",
    },
  ],
  experience: [...sharedExperience],
  certifications: [...sharedCertifications],
  aboutStats: [
    { label: "Security Tools", value: "5+ Built" },
    { label: "Focus", value: "Offensive Sec" },
    { label: "CGPA", value: "7.93" },
    { label: "Status", value: "Open to Work" },
  ],
};
