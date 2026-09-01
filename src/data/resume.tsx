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
        url: "https://oguzkaan.carrd.co",
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
      logoUrl: withBasePath("logos/ElfcanTechLogo.png"),
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
      logoUrl: withBasePath("logos/CerebrumTechnologiesLogo.avif"),
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
      title: "Founder",
      logoUrl: "https://www.google.com/s2/favicons?domain=haserkek.com&sz=128",
      start: "2026",
      end: undefined,
      description:
        "Founded and manages an e-commerce business focused on men’s watches, overseeing technical systems, digital marketing, and day-to-day operations.",
    },
    {
      category: "Independent Ventures",
      company: "Slootea",
      href: "https://github.com/Slootea/Slootea",
      badges: ["Co-Founder"],
      location: "Ankara, Turkey",
      title: "Co-Founder",
      logoUrl: withBasePath("logos/SlooteaLogo.png"),
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
      title: "Founder",
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
      title: "Slootea",
      slug: "slootea",
      href: withBasePath("projects/slootea"),
      dates: "Apr 2026",
      active: false,
      logoUrl: withBasePath("logos/SlooteaLogo.png"),
      description:
        "B2B beauty center management system for appointments, clients, and inventory control (Discontinued).",
      details:
        "Slootea is a modern B2B management platform designed specifically for beauty centers, medical spas, and wellness clinics to streamline daily operations. Developed in April 2026, the project has since been discontinued and the live site is down, but the codebase remains accessible.\n\n### Key Capabilities\n- **Smart Scheduling**: Interactive appointment booking system with automated time slot optimization and client reminders.\n- **Client & Inventory Tracking**: Centralized customer CRM alongside real-time stock management and usage analytics.\n- **Business Operations**: Built using Next.js, TypeScript, and PostgreSQL to deliver high reliability and fast response times for multi-staff facilities.",
      technologies: ["Apr 2026", "Next.js", "TypeScript", "PostgreSQL", "Business Ops"],
      links: [
        { type: "Source Code", href: "https://github.com/Slootea/Slootea", icon: <Icons.github className="size-3" /> },
      ],
      image: withBasePath("logos/SlooteaLogo.png"),
      video: "",
    },
    {
      title: "Employcase",
      slug: "employcase",
      href: withBasePath("projects/employcase"),
      dates: "2025",
      active: true,
      logoUrl: withBasePath("logos/Employcase_Logo_side.png"),
      description:
        "Candidate engagement and HR interview platform with custom AI models and simulation-based tooling.",
      details:
        "Employcase is an advanced SaaS candidate engagement and specialized HR interview platform engineered to modernize talent acquisition workflows.\n\n### System Architecture\n- **AI-Assisted Interviews**: Integrated custom AI evaluation models and automated screening pipelines to evaluate technical and soft skills.\n- **Simulation Tooling**: Interactive simulation features that mirror real-world scenario tests for candidate assessment.\n- **Full-Stack SaaS**: Built with Next.js, Node.js, Python, and PostgreSQL with emphasis on candidate experience and HR productivity.",
      technologies: ["2025", "Next.js", "Node.js", "Python", "AI/ML", "PostgreSQL"],
      links: [
        { type: "Website", href: "https://employcase.com", icon: <Icons.globe className="size-3" /> },
      ],
      image: withBasePath("logos/Employcase_Logo_side.png"),
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
      details:
        "Unheil is a single-player horror game project developed with a small independent team from initial concept through production and release.\n\n### Production Highlights\n- **Game Engineering**: Built core gameplay mechanics, atmosphere shaders, player controls, and dynamic interaction systems in Unity3D with C#.\n- **Atmospheric Design**: Focused on sound design, lighting immersion, and environmental storytelling.\n- **Project Execution**: Coordinated cross-disciplinary work including art, level design, and technical integration over a 2-year development cycle.",
      technologies: ["2022 - 2024", "Unity3D", "Game Design", "C#", "Multiplayer Demo"],
      links: [
        { type: "Portfolio", href: "https://www.linkedin.com", icon: <Icons.globe className="size-3" /> },
      ],
      image: withBasePath("photos/UnheilHeader.jpg"),
      video: "",
    },
    {
      title: "CereverseScape",
      slug: "cereverse-scape",
      href: withBasePath("projects/cereverse-scape"),
      dates: "Oct 2022",
      active: true,
      logoUrl: withBasePath("logos/CerebrumTechnologiesLogo.avif"),
      description:
        "A metaverse virtual environment and multiplayer simulation platform created at Cerebrum Technologies.",
      details:
        "Built during my role at Cerebrum Technologies, **CereverseScape** is an interactive metaverse environment and multiplayer simulation platform.\n\n### Overview & Capabilities\n- **Multiplayer Architecture**: Engineered real-time multiplayer systems and networked state synchronization for interactive virtual worlds.\n- **Simulation Mechanics**: Designed scalable 3D physics and simulation loops using Unity3D and C#.\n- **System Capabilities**: Highlights expertise in designing complex, low-latency multiplayer gaming and virtual environment systems from the ground up.",
      technologies: ["2022", "Unity3D", "C#", "Multiplayer", "Metaverse", "Simulations"],
      links: [
        { type: "Source Code", href: "https://github.com/AlfaPigeon/Cereverse_Scape", icon: <Icons.github className="size-3" /> },
      ],
      image: withBasePath("photos/photo1.jpg"),
      video: "",
    },
    {
      title: "Cheat Classification Platform",
      slug: "cheat-classification-platform",
      href: withBasePath("projects/cheat-classification-platform"),
      dates: "Jan 2022",
      active: true,
      description:
        "An academic exam proctoring platform combining Flutter, real-time gaze detection via edge algorithms, and custom YOLO object detection models.",
      details:
        "A university software engineering project designed for automated academic integrity monitoring and suspicious behavior classification during online examinations.\n\n### Core Architecture & Technical Contributions\n- **Gaze & Head Orientation Detection**: Developed gaze-tracking algorithms using facial landmark detection and Canny edge detection to track eye direction and student head position in real time.\n- **YOLO Object Detection**: Trained a custom YOLO model using TensorFlow and transfer learning with custom phone photography datasets to detect unauthorized secondary devices (such as smartphones) during tests.\n- **Cross-Platform & Pipeline Integration**: Built the cross-platform application interface in Flutter and established the connection pipeline bridging real-time computer vision inference scripts with the app frontend (`AlfaPigeon/obj_det_connection`).",
      technologies: ["2022", "Flutter", "Python", "TensorFlow", "YOLO", "Computer Vision", "Edge Detection"],
      links: [],
      image: withBasePath("photos/photo2.jpg"),
      video: "",
    },
    {
      title: "CNN Implementation from Scratch",
      slug: "cnn-implementation",
      href: withBasePath("projects/cnn-implementation"),
      dates: "Jul 2020",
      active: true,
      description:
        "A custom deep learning framework built from mathematical principles using NumPy and Keras to train CNNs for melanoma skin cancer classification.",
      details:
        "Developed in July 2020 (**Pre-LLM Era**), this university project focused on constructing a Convolutional Neural Network (CNN) deep learning framework directly from mathematical foundations.\n\n### Engineering & Implementation\n- **First-Principles AI Math**: Programmed custom forward and backward passes from scratch using NumPy and Keras, implementing gradient descent optimization, max pooling, fully connected layers, and custom convolutional layers.\n- **Activation Function Analysis**: Benchmarked and evaluated performance across multiple activation functions to achieve optimal gradient flow and model convergence.\n- **Melanoma Detection**: Applied the neural network framework to classify dermatoscopic images for melanoma (a malignant form of skin cancer).\n- **Kaggle Competition Benchmark**: Validated the custom model on the [SIIM-ISIC Melanoma Classification Kaggle Competition](https://www.kaggle.com/competitions/siim-isic-melanoma-classification), achieving a **private score of 0.6899** and a **public score of 0.6551**.",
      technologies: ["2020 (Pre-LLM Era)", "Python", "NumPy", "Keras", "Deep Learning", "Melanoma AI"],
      links: [
        { type: "Source Code", href: "https://github.com/Kerem-Arikan/bil_470_project_repo", icon: <Icons.github className="size-3" /> },
        { type: "Kaggle", href: "https://www.kaggle.com/competitions/siim-isic-melanoma-classification", icon: <Icons.globe className="size-3" /> },
      ],
      image: withBasePath("photos/photo6.jpg"),
      video: "",
    },
    {
      title: "Genetic Algorithm Implementation",
      slug: "genetic-algorithm-implementation",
      href: withBasePath("projects/genetic-algorithm-implementation"),
      dates: "Jul 2020",
      active: true,
      description:
        "A heuristic lesson scheduling optimizer that uses a genetic algorithm to satisfy academic constraints and improve timetable quality.",
      details:
        "Developed in July 2020, this project focused on solving a lesson scheduling problem by designing and implementing a genetic algorithm from scratch.\n\n### Problem & Approach\n- **Constraint-Based Scheduling**: Modeled class, instructor, and room constraints as optimization objectives so the algorithm could produce feasible timetable combinations.\n- **Evolutionary Search**: Used a genetic algorithm with fitness evaluation, selection, crossover, and mutation to iteratively improve candidate schedules.\n- **Heuristic Design**: Demonstrated practical problem-solving skills in building custom heuristic logic for a real optimization challenge.\n\nThis work reflects my ability to design and implement heuristic algorithms for complex combinatorial problems beyond straightforward rule-based systems.",
      technologies: ["Jul 2020", "Python", "Genetic Algorithm", "Optimization", "Scheduling", "Heuristics", "University Project"],
      links: [
        { type: "Source Code", href: "https://github.com/AlfaPigeon/Genetic-Algorithm-Lesson-Scheduler", icon: <Icons.github className="size-3" /> },
      ],
      image: withBasePath("photos/photo7.jpg"),
      video: "",
    },
    {
      title: "Suspicious and Toxic Discussion Classification",
      slug: "suspicious-and-toxic-discussion-classification",
      href: withBasePath("projects/suspicious-and-toxic-discussion-classification"),
      dates: "Dec 2020",
      active: true,
      description:
        "A Reddit discussion classification pipeline using TensorFlow, spaCy, Spark, and pseudo-labeling to detect toxic or suspicious content.",
      details:
        "Developed in December 2020, this project focused on building an effective classification workflow for online forum discussions using scraped Reddit data.\n\n### Data & Model Pipeline\n- **Dataset Collection**: Scraped discussion data from Reddit and prepared a labeled corpus for suspicious and toxic content analysis.\n- **Deep Learning with TensorFlow**: Trained a model using TensorFlow and spaCy word embeddings to capture semantic features from discussion text.\n- **Distributed Processing with Spark**: Compared model performance against a Spark-based pipeline to evaluate scaling and processing trade-offs.\n- **Pseudo-Labeling**: Used the model itself to generate labels for unlabeled or partially missing examples, improving training coverage for the dataset.\n\nThis project highlights my work with NLP pipelines, large-scale text processing, and hybrid ML strategies for real-world social data.",
      technologies: ["Dec 2020", "Python", "TensorFlow", "spaCy", "PySpark", "NLP", "Pseudo-labeling", "Classification"],
      links: [
        { type: "Source Code", href: "https://github.com/AlfaPigeon/Suspicious-and-Toxic-Discussion-Classification-on-Online-Forums", icon: <Icons.github className="size-3" /> },
      ],
      image: withBasePath("photos/photo8.jpg"),
      video: "",
    },
    {
      title: "DHMI Plane Game",
      slug: "dhmi-plane-game",
      href: withBasePath("projects/dhmi-plane-game"),
      dates: "May 2025",
      active: true,
      description:
        "A kid-friendly airplane game developed for DHMI technology fairs, designed for public interaction and still actively used at events.",
      details:
        "This project was created in May 2025 for the Turkish General Directorate of State Airports Authority (DHMI). I built a simple airplane game for children to enjoy at technology fairs, and it is still being used in public events.\n\n### Project Scope\n- **Public-Facing Interaction**: Built a lightweight, engaging game experience tailored for children and fair visitors.\n- **Government Deployment**: Designed for use in technology fairs and public engagement activities, with an emphasis on accessibility and easy interaction.\n- **Game Experience Design**: Focused on fun mechanics, clear controls, and high usability for a broad audience.\n\nThe project demonstrates my ability to ship polished, user-friendly interactive experiences for real-world public and institutional use cases.",
      technologies: ["May 2025", "Unity3D", "C#", "Game Development", "Government", "Interactive Experience"],
      links: [],
      image: withBasePath("photos/photo3.jpg"),
      video: "",
    },
    {
      title: "Sidre Beauty Website",
      slug: "sidre-beauty-website",
      href: withBasePath("projects/sidre-beauty-website"),
      dates: "2025",
      active: true,
      description:
        "A commercial beauty brand website designed to present services, offers, and brand identity for Sidre Beauty.",
      details:
        "I designed and built the Sidre Beauty website for a commercial beauty brand. The site presents the brand clearly and professionally while making it easy for visitors to explore services and contact information.\n\n### Implementation Highlights\n- **Commercial Brand Site**: Built a clean, modern web presence aligned with the beauty brand's visual identity.\n- **Responsive Frontend**: Structured the experience to work smoothly across devices and user contexts.\n- **User Experience Focus**: Designed the content and layout to help visitors quickly understand the brand and services.\n\nThis project reflects my ability to build polished commercial websites that balance aesthetics, clarity, and practical conversion-focused design.",
      technologies: ["2025", "Commercial", "Web Development", "Brand Website", "UI/UX"],
      links: [
        { type: "Website", href: "https://sidrebeauty.com/", icon: <Icons.globe className="size-3" /> },
      ],
      image: withBasePath("photos/photo4.jpg"),
      video: "",
    },
    {
      title: "Turkcell Business Model Canvas",
      slug: "turkcell-business-model-canvas",
      href: withBasePath("projects/turkcell-business-model-canvas"),
      dates: "Nov 2019",
      active: true,
      logoUrl: "https://www.google.com/s2/favicons?domain=turkcell.com.tr&sz=128",
      description:
        "An enterprise resource and partner management platform inspired by Strategyzer's Business Model Canvas, featuring a 17-table relational database and 60+ active app sections.",
      details:
        "Developed during an engineering internship at Turkcell in November 2019 (**Pre-LLM Era**) and open-sourced with permission after decommission.\n\n### System Architecture & Technical Highlights\n- **17-Table Relational Database**: Designed and normalized a complex database structure modeling enterprise partners, key activities, resources, channels, and task management workflows based on Strategyzer's Business Model Canvas framework.\n- **Full-Stack Enterprise Build**: Built end-to-end backend business logic in C# alongside server-rendered frontend interfaces in ASP.NET Razor Pages.\n- **Extensive UI & Modules**: Features 10 primary navigation modules, authentication, settings, and over 60 active interactive sections including custom editing suites.\n- **Pre-LLM Systems Mastery**: Demonstrates solid software architecture, relational database modeling, and complex problem-solving crafted entirely prior to the advent of modern AI coding tools.",
      technologies: ["2019 (Pre-LLM Era)", "ASP.NET Razor Pages", "C#", "SQL Server", "Relational DB", "Enterprise"],
      links: [
        { type: "Source Code", href: "https://github.com/AlfaPigeon/TurkcellBussinessModelCanvas", icon: <Icons.github className="size-3" /> },
      ],
      image: withBasePath("logos/TurkcellLogo.jpeg"),
      video: "",
    },
  ],
  hackathons: [],
};
