export type PortfolioMode = "developer" | "security";

export type Skill = { name: string; icon: string };

export type PortfolioData = {
  mode: PortfolioMode;
  modeLabel: string;
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  phoneTel: string;
  location: string;
  resumeUrl: string;
  resumeFileName: string;
  social: { github: string; linkedin: string };
  roles: readonly string[];
  skills: readonly Skill[];
  about: {
    paragraphs: readonly string[];
  };
  education: readonly {
    degree: string;
    field?: string;
    institution: string;
    period: string;
    detail: string;
  }[];
  projects: readonly {
    title: string;
    description: string;
    tags: readonly string[];
    link: string;
    github: string;
    image: string;
  }[];
  experience: readonly {
    company: string;
    role: string;
    period: string;
    description: string;
  }[];
  certifications: readonly {
    title: string;
    issuer: string;
    date: string;
    viewLink: string;
    image?: string;
  }[];
  navLinks: readonly { id: string; label: string }[];
  aboutStats: readonly { label: string; value: string }[];
};
