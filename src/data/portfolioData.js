/* ============================================================================
   PORTFOLIO CONTENT
   This file is the single source of truth for everything on the site.
   Edit wording, links, skills, projects, and experience here — no need to
   touch the components.
   ========================================================================== */

export const CLOUDINARY = {
  // 🔧 Optional. Only needed if you add project demo videos.
  // Replace "demo" with YOUR Cloudinary cloud name (Dashboard → Account Details).
  cloudName: "demo",
};

// Builds a Cloudinary delivery URL for a video public_id.
export const cldVideo = (publicId, opts = "f_auto,q_auto") =>
  `https://res.cloudinary.com/${CLOUDINARY.cloudName}/video/upload/${opts}/${publicId}.mp4`;

// 🖼️  Paste a link to your photo here (ideally background-removed, PNG/WEBP),
// or a base64 data URL. Leave "" and the hero still looks intentional (name + disc).
export const PORTRAIT = "https://res.cloudinary.com/dsypqpuci/image/upload/e_background_removal/v1783762466/grok-image-aae2ea17-c6e2-4083-9271-e9325f1c8498_kmdcsz.png";

export const DATA = {
  name: "Nathasha Perera",
  initials: "NP",
  role: "Full-Stack & Mobile Developer",
  location: "Chilaw, Sri Lanka",
  available: true,
  availableFrom: "2026",
  year: "2026",
  // headline skills spread across the top like a movie's cast row:
  credits: ["React", "Node.js", "Flutter", "Spring Boot"],
  heroTags: ["Frontend", "Backend", "Mobile"],
  quote: "Own it end-to-end — from the database schema to the last hover state.",
  tagline:
    "I build web and mobile applications end-to-end — from REST APIs and databases to responsive interfaces — with React, Node.js, Spring Boot and Flutter.",
  email: "shashininathasha42@gmail.com",
  resumeUrl: "/Nathasha_Perera_CV.pdf", // lives in /public, so it deploys with the site
  socials: {
    github: "https://github.com/Nathashaperera42",
    linkedin: "https://www.linkedin.com/in/nathasha-perera-959024300/",
  },

  about:
    "I'm a Software Engineering undergraduate (BSc Hons, Kingston University via ESOFT) who loves turning ideas into working products. My work spans full-stack web apps with the MERN stack and Spring Boot, and cross-platform mobile apps in Flutter and Kotlin. Alongside my studies I work as a Team Lead at FluentMe and take on freelance builds, so I'm used to shipping under real deadlines, communicating clearly, and owning a project from first commit to delivery.",

  education: {
    degree: "BSc (Hons) Software Engineering",
    institution: "Kingston University, via ESOFT",
  },

  stats: [
    { value: "10+", label: "Projects built" },
    { value: "3", label: "Stacks (MERN · Spring · Flutter)" },
    { value: "2", label: "Languages · Si / En" },
    { value: "1", label: "Team-lead role" },
  ],

  stack: [
    { icon: "frontend", title: "Frontend", items: ["React", "Next.js", "Angular", "HTML5", "CSS3", "Bootstrap"] },
    { icon: "backend", title: "Backend", items: ["Node.js", "Express", "Spring Boot", "REST APIs"] },
    { icon: "database", title: "Databases", items: ["MySQL", "MongoDB", "Firebase"] },
    { icon: "mobile", title: "Mobile & Tools", items: ["Flutter", "Dart", "Kotlin", "Git", "Postman"] },
  ],

  marquee: ["React", "Node.js", "Spring Boot", "Flutter", "MongoDB", "MySQL", "Kotlin", "REST", "Firebase", "Next.js", "Express", "Dart"],

  projects: [
    {
      title: "WasteToTaste",
      subtitle: "Food Waste Management Platform",
      year: "2025",
      blurb:
        "A full-stack platform connecting food outlets with customers through surplus-food listings to cut waste. Role-based access, location-based search, and a gamified “Spin” feature for surprise meals.",
      tags: ["React", "Node.js", "Spring Boot", "MongoDB", "REST"],
      video: "https://res.cloudinary.com/dsypqpuci/video/upload/v1783767970/video_m8iih6.mp4", 
      accent: ["#FF2E4D", "#7A0E20"],
      live: "https://waste2-taste-mu.vercel.app",
      code: "https://github.com/Nathashaperera42/Waste2Taste.git",
    },
    {
      title: "Uni Management",
      subtitle: "University Operations Portal",
      year: "2025",
      blurb:
        "A responsive MERN app for managing university events, resources, attendance and user roles — built to improve operational efficiency and campus engagement.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      video: "https://res.cloudinary.com/dsypqpuci/video/upload/v1783804665/Smart_Uni_System_localhost_5173_-_Smart-Uni-Front-End_-_Visual_Studio_Code_2026-07-12_02-43-41_pmi4dq.mp4",
      accent: ["#3B82F6", "#0B2A57"],
      live: "#",
      code: "https://github.com/Nathashaperera42/Hardware_inventory_frontend.git",
    },
    {
      title: "MiniInventory Management system",
      subtitle: "Hardware Inventory Management System",
      year: "2026",
      blurb:
        "Use ASP.NET Core and Flutter to build a hardware inventory management system with a responsive UI, role-based access control, and RESTful APIs for efficient resource tracking.",
      tags: ["ASP.NET", "Flutter", "MySQL", "REST", "Postman"],
      video: "https://res.cloudinary.com/dsypqpuci/video/upload/v1783808561/video_3_gahoj2.mp4",
      accent: ["#10B981", "#063D2C"],
      live: "https://hardware-inventory-frontend-ten.vercel.app",
      code: "https://github.com/Nathashaperera",
    },
    {
      title: "HealthMate",
      subtitle: "Health Tracking App",
      year: "2025",
      blurb:
        "A mobile app that helps users track daily activities and build healthier habits, with a clean, responsive UI following modern mobile practices.",
      tags: ["Flutter", "Dart", "MongoDB"],
      video: "https://res.cloudinary.com/dsypqpuci/video/upload/v1783805694/video_1_shqfe3.mp4",
      accent: ["#E8944A", "#5A3410"],
      live: "#",
      code: "https://github.com/Nathashaperera",
    },
    {
      title: "Weather Pro",
      subtitle: "Cross-Platform Weather App",
      year: "2025",
      blurb:
        "A cross-platform weather app delivering real-time forecasts, using Provider state management for efficient UI updates and a responsive Android-optimized layout.",
      tags: ["Flutter", "Dart", "Weather API"],
      video: "https://res.cloudinary.com/dsypqpuci/video/upload/v1783806135/video_2_x8p75h.mp4",
      accent: ["#4FB6A4", "#0E3B34"],
      live: "#",
      code: "https://github.com/Nathashaperera",
    },
    {
      title: "Governess College Portal",
      subtitle: "A one of my client project",
      year: "2026",
      blurb:
        "A web portal for Governess College, designed to streamline administrative tasks and enhance communication between staff and students.",
      tags: ["Flutter", "Node.js", "MongoDB"],
      video: "https://res.cloudinary.com/dsypqpuci/video/upload/v1783808223/Governess_College_of_English_and_18_more_pages_-_Personal_-_Microsoft_Edge_2026-07-12_03-40-16_whfv06.mp4",
      accent: ["#8B5CF6", "#2E1065"],
      live: "https://cambridecollege.vercel.app",
      code: "https://github.com/Nathashaperera42/cambride-college.git",
    },
  ],

  // 🎨 Figma / UI design work. Paste a screenshot/export URL for `image`
  // (e.g. drag the frame out of Figma onto Cloudinary, or export a PNG and
  // host it anywhere) and your Figma "Share" link for `link`.
  designs: [
    {
      title: "HealthMate figma",
      subtitle: "Mobile App UI",
      image: "https://res.cloudinary.com/dsypqpuci/image/upload/v1783806622/1779186273800_d2yjek.jpg",
      link: "https://lnkd.in/gcvcd6WP",
      tags: ["Figma", "UI/UX"],
    },
     {
      title: "HealthMate figma",
      subtitle: "Mobile App UI",
      image: "https://res.cloudinary.com/dsypqpuci/image/upload/v1783806622/1779186273800_d2yjek.jpg",
      link: "https://lnkd.in/gcvcd6WP",
      tags: ["Figma", "UI/UX"],
    },
  ],

  experience: [
    {
      role: "Team Lead / Software Intern",
      company: "FluentMe (Pvt) Ltd",
      period: "6 months — Present",
      points: [
        "Act as the key liaison between students, instructors and management, gathering needs and resolving issues.",
        "Coordinate project and operational activities, tracking tasks and timelines to keep delivery on schedule.",
        "Support system administration and platform management for the organization's online learning platform.",
      ],
    },
    {
      role: "Freelance Developer",
      company: "Self-employed",
      period: "2025 — Present",
      points: [
        "Built Loan Ledger, a client mobile app for tracking loans, repayments and running balances.",
        "Delivered web projects for Governess College. [Edit: add the specifics — what you built + the tech.]",
      ],
    },
    // ➕ Add your two LinkedIn roles here in the same shape once you have the details.
  ],
};
