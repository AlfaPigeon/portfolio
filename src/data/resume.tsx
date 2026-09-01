import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";
import { Csharp } from "@/components/ui/svgs/csharp";

type PortfolioLink = {
  type?: string;
  title?: string;
  icon?: React.ReactNode;
  href: string;
};

const BASE_PATH = import.meta.env.BASE_URL || "/";
const withBasePath = (path = "") => {
  const base = BASE_PATH.endsWith("/") ? BASE_PATH : `${BASE_PATH}/`;
  const cleanPath = path.replace(/^\/+/, "");

  return `${base}${cleanPath}`;
};

export const DATA = {
  name: "Oğuz Kaan Özsoy",
  initials: "OÖ",
  url: "https://alfapigeon.github.io/portfolio",
  location: "Ankara, Turkey",
  locationLink: "https://maps.google.com/?q=Ankara,Turkey",
  description: "Engineer & Tech Entrepreneur.",
  summary:
    "I enjoy generating new ideas, developing products, and creating technological solutions to real-world problems.",
  avatarUrl: withBasePath("profile-image.jpeg"),
  ogImage: withBasePath("og_image.png"),
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Projects",
      heading: "Selected builds",
      text: "I build products, AI systems, and game experiences with a focus on solving real problems.",
    },
    hackathons: {
      order: 7,
      enabled: true,
      label: "Builds",
      heading: "I like shipping",
      text: "From AI products to game prototypes, I enjoy turning ideas into working systems quickly.",
    },
    photos: {
      order: 6,
      enabled: true,
      heading: "Moments",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Let’s build something useful",
      text: "Open to technical leadership, product building, and ambitious digital ideas.",
    },
  },
  photos: [
    { src: withBasePath("photos/photo1.jpg"), alt: "Photo 1" },
    { src: withBasePath("photos/photo2.jpg"), alt: "Photo 2" },
    { src: withBasePath("photos/photo3.jpg"), alt: "Photo 3" },
    { src: withBasePath("photos/photo4.jpg"), alt: "Photo 4" },
    { src: withBasePath("photos/photo5.jpg"), alt: "Photo 5" },
    { src: withBasePath("photos/photo6.jpg"), alt: "Photo 6" },
    { src: withBasePath("photos/photo7.jpg"), alt: "Photo 7" },
    { src: withBasePath("photos/photo8.jpg"), alt: "Photo 8" },
    { src: withBasePath("photos/photo9.jpg"), alt: "Photo 9" },
  ],
  skills: [
    { name: "Node.js", icon: Nodejs },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "C#", icon: Csharp },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Unity3D", icon: Astro },
    { name: "AI/ML", icon: NextjsIconDark },
    { name: "Docker", icon: Docker },
    { name: "DevOps", icon: Kubernetes },
  ],
  navbar: [
    { href: withBasePath(), icon: House, label: "Home" },
    { href: withBasePath("blog"), icon: Library, label: "Blog" },
  ],
  contact: {
    email: "oguz@beysco.com",
    tel: "+90 535 559 50 19",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AlfaPigeon",
        icon: Icons.github,
        navbar: true,
      },
      Linktree: {
        name: "Linktree",
        url: "https://linktr.ee/oguzkaanozsoy",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:oguz@beysco.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      category: "Professional Experience",
      company: "BEYSCO",
      href: "https://beysco.com",
      badges: ["CTO"],
      location: "Ankara, Turkey",
      title: "Chief Technology Officer",
      logoUrl: "https://www.google.com/s2/favicons?domain=beysco.com&sz=128",
      start: "2026",
      end: undefined,
      description:
        "Leading the technology vision, product strategy, and engineering execution across the company’s product and platform roadmap.",
    },
    {
      category: "Professional Experience",
      company: "Elfcan Tech",
      href: "https://elfcan.com",
      badges: ["AI Architecture"],
      location: "Ankara, Turkey",
      title: "Lead AI & Software Architect",
      logoUrl: "https://www.google.com/s2/favicons?domain=elfcan.com&sz=128",
      start: "2025",
      end: undefined,
      description:
        "Built the digital infrastructure for the National Library project, created scalable backend systems, and led a team shipping AI-driven services and DevOps pipelines.",
    },
    {
      category: "Professional Experience",
      company: "Cerebrum Technologies",
      href: "https://www.linkedin.com",
      badges: ["PsyStorm Games", "Game Dev"],
      location: "Ankara, Turkey",
      title: "Project Lead & Senior Game Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128",
      start: "2022",
      end: "2024",
      description:
        "Founded and led the internal PsyStorm Games studio, built mid-core casual adventure games, mentored developers, and managed product and marketing experiments.",
    },
    {
      category: "Independent Ventures",
      company: "Has Erkek",
      href: "https://haserkek.com",
      badges: ["Founder"],
      location: "Ankara, Turkey",
      title: "Founder & Operations Lead",
      logoUrl: "https://www.google.com/s2/favicons?domain=haserkek.com&sz=128",
      start: "2026",
      end: undefined,
      description:
        "Founded and manages an e-commerce business focused on men’s watches, overseeing technical systems, digital marketing, and day-to-day operations.",
    },
    {
      category: "Independent Ventures",
      company: "Slootea",
      href: "https://slootea.com",
      badges: ["Co-Founder"],
      location: "Ankara, Turkey",
      title: "Co-Founder & Technical Lead",
      logoUrl: "https://www.google.com/s2/favicons?domain=slootea.com&sz=128",
      start: "2026",
      end: "2026",
      description:
        "Built a B2B beauty center management platform for scheduling, client tracking, and inventory operations, while handling product development and sales.",
    },
    {
      category: "Independent Ventures",
      company: "Employcase",
      href: "https://employcase.com",
      badges: ["Founder"],
      location: "Ankara, Turkey",
      title: "Founder & Lead Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=employcase.com&sz=128",
      start: "2025",
      end: "2025",
      description:
        "Architected a custom SaaS platform for candidate engagement and specialized HR interview tooling, including AI-assisted interviews and simulation features.",
    },
    {
      category: "Internships",
      company: "PRODAFT",
      href: "https://www.prodaft.com",
      badges: ["Cyber Security"],
      location: "Ankara, Turkey",
      title: "Cyber Security Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=prodaft.com&sz=128",
      start: "2021",
      end: "2021",
      description:
        "Conducted threat assessments and gained hands-on experience in system and web vulnerability analysis.",
    },
    {
      category: "Internships",
      company: "Turkcell",
      href: "https://www.turkcell.com.tr",
      badges: ["Software Development"],
      location: "Ankara, Turkey",
      title: "Software Developer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=turkcell.com.tr&sz=128",
      start: "2019",
      end: "2019",
      description:
        "Built full-stack web applications with ASP.NET and PostgreSQL while learning enterprise networking and cloud systems.",
    },
  ],
  education: [
    {
      school: "TOBB ETÜ University",
      href: "https://etu.edu.tr",
      degree: "B.S. in Computer Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=etu.edu.tr&sz=128",
      start: "2017",
      end: "2023",
    },
    {
      school: "International High School of Naples",
      href: "https://www.istitutoitaliano.it/naples/en/",
      degree: "High School Diploma",
      logoUrl: "https://www.google.com/s2/favicons?domain=istitutoitaliano.it&sz=128",
      start: "2010",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Employcase",
      slug: "employcase",
      href: withBasePath("projects/employcase"),
      dates: "2025",
      active: true,
      description:
        "Candidate engagement and HR interview platform with custom AI models and simulation-based tooling.",
      technologies: ["Next.js", "Node.js", "Python", "AI/ML", "PostgreSQL"],
      links: [
        { type: "Website", href: "https://employcase.com", icon: <Icons.globe className="size-3" /> },
      ],
      image: withBasePath("photos/photo3.jpg"),
      video: "",
    },
    {
      title: "Slootea",
      slug: "slootea",
      href: withBasePath("projects/slootea"),
      dates: "2026",
      active: true,
      description:
        "B2B beauty center management system for appointments, clients, and inventory control.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Business Ops"],
      links: [
        { type: "Website", href: "https://slootea.com", icon: <Icons.globe className="size-3" /> },
      ],
      image: withBasePath("photos/photo4.jpg"),
      video: "",
    },
    {
      title: "Unheil",
      slug: "unheil",
      href: withBasePath("projects/unheil"),
      dates: "2022 - 2024",
      active: true,
      description:
        "Single-player horror game developed with a small team from concept to release.",
      technologies: ["Unity3D", "Game Design", "C#", "Multiplayer Demo"],
      links: [
        { type: "Portfolio", href: "https://www.linkedin.com", icon: <Icons.globe className="size-3" /> },
      ],
      image: withBasePath("photos/photo5.jpg"),
      video: "",
    },
  ],
  hackathons: [],
};
