import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Zander Coffman",
  initials: "ZC",
  url: "https://zandercoffman.vercel.app",
  location: "Phoenix, Arizona",
  locationLink: "https://maps.app.goo.gl/AXy29hp6zygQ7uZB8",
  description:
    "Aspiring Software Developer with a heart for clean code, growth, and real-world impact. I love learning, building, and leveling up both personally and professionally.",
  summary:
    "I'm Zander, a driven dev from Phoenix passionate about using code to solve problems and make people's lives better. I’m on a path toward Computer Science and exploring areas like web dev, backend systems, and AI. I’ve been growing fast — balancing self-study, certifications, and real-life project ideas. My dream? To build tools that are actually useful — and maybe launch my own projects someday. Until then, I’m all about learning the stack, getting experience, and growing one PR at a time.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Git",
    "PostgreSQL",
    "TailwindCSS",
    "Godot (Game Dev)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zandercoffman",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/zandercoffman",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/zandercoffman",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@zandercoffman",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Camera Inventory System",
      href: "",
      badges: ["Co-owned"],
      location: "Phoenix, AZ",
      title: "Inventory System Manager",
      logoUrl: "/camera.png",
      start: "Mar 2024",
      end: "Present",
      description:
        "I co-manage and develop a custom-built inventory management system for tracking and organizing high school camera equipment. I’m responsible for the full stack: building the app, handling updates, and collaborating with a co-owner to maintain system integrity and performance.",
    },
    {
      company: "Desert Vista CS Club",
      href: "",
      badges: ["Student-led"],
      location: "Phoenix, AZ",
      title: "Club Secretary",
      logoUrl: "/dvcs.png",
      start: "May 2025",
      end: "Present",
      description:
        "Serving as the 2025–2026 secretary of the Desert Vista Computer Science Club. I organize meetings, take notes, and help lead initiatives that promote programming, AI, and software development among high school students. Working with leadership to grow community and technical engagement.",
    },
        
  ],
  education: [
    /*{
      school: "Arizona State University (via Starbucks College Achievement Plan)",
      href: "https://asuonline.asu.edu/starbucks/",
      degree: "BS in Computer Science (in progress)",
      logoUrl: "/asu.png",
      start: "2024",
      end: "TBD",
    },*/
    {
      school: "Self-Taught / Project-Based Learning",
      href: "https://github.com/zandercoffman",
      degree: "Hands-on Coding & Game Dev Projects",
      logoUrl: "/github.png",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Java Brewed",
      href: "https://java-brewed.vercel.app",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Java Brewed is a sleek and responsive café website concept built to showcase a fictional coffee brand. This project blends beautiful design with interactive features like a menu, animated transitions, and dynamic theming, making it perfect for portfolio presentation or small businesses.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
        "Shadcn UI",
        "Lucide Icons",
      ],
      links: [
        {
          type: "Website",
          href: "https://java-brewed.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/java-brewed.mp4",
    },
    {
      title: "Create a Curriculum",
      href: "https://create-a-curriculum.vercel.app",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "Create a Curriculum is a web app that lets users generate custom curriculum outlines for any book. Designed for educators and creators, the app guides users through selecting themes, subjects, and standards, and then generates a structured, shareable curriculum using AI.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "OpenAI API",
        "Shadcn UI",
        "Zod",
        "Lucide Icons",
      ],
      links: [
        {
          type: "Website",
          href: "https://create-a-curriculum.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/create-a-curriculum.mp4",
    },
        
  ],
  hackathons: [],
} as const;
