import { Icons } from "@/components/icons";
import { Calendar, Coffee, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  calendarBookingURL: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ROSU3TcMHx55Zy_cZhftIGpAKyTSrOXdfVMeMGdwkTinT41ukSDnM4bwOr00uf2Tntvv6RNSm?gv=true",
  name: "Zander Coffman",
  initials: "DV",
  url: "https://zandercoffman.vercel.app",
  location: "Phoenix, AZ",
  locationLink: "https://www.google.com/maps/place/phoenix",
  description:
    "Aspiring Software Developer with a heart for clean code, growth, and real-world impact. Faith-driven learner and aspiring builder. I love growing in wisdom, mastering new skills, and helping others.",
  summary:
    "I'm Zander, a driven dev from Phoenix passionate about using code to solve problems and make people's lives better. I’m on a path toward Computer Science and exploring areas like web dev, backend systems, and AI. I’ve been growing fast — balancing self-study, certifications, and real-life project ideas. My dream? To build tools that are actually useful — and maybe launch my own projects someday. Until then, I’m all about learning the stack, getting experience, and growing one PR at a time.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TailwindCSS",
    "CSS",
    "HTML",
    "Javascript",
    "Typescript",
    "Node.js",
    "Python",
    "Godot",
    "Java",
    "Web Development",
    "AP Computer Science A",
    "JSON"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/book", icon: Calendar, label: "Book" }
  ],
  contact: {
    email: "zandercoffman34@gmail.com",
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
        url: "www.linkedin.com/in/zander-coffman-127319330",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:zandercoffman34@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      buymeacoffee: {
        name: "Buy Me a Coffee",
        url: "https://buymeacoffee.com/zandercoffman",
        icon: Coffee,
        navbar: true
      },
    },
  },

  work: [
    {
      company: "Desert Vista Computer Science Club",
      href: "https://dvcs.club",
      badges: [],
      location: "Hybrid",
      title: "Club Secretary",
      logoUrl: "/dvcs.png",
      start: "July 2025",
      end: "Present",
      description:
        "Managed club communications, organized meeting agendas, and maintained detailed records of events and initiatives. Coordinated schedules, documented decisions, and ensured smooth collaboration between officers, members, and external partners. Assisted in planning activities, tracking action items, and supporting the club’s overall operations.",
    },
    {
      company: "Tempe Union High School District",
      href: "https://www.tempeunion.org",
      badges: [],
      location: "Hybrid",
      title: "Computer Science Intern",
      logoUrl: "/tuhsd.jpg",
      start: "July 2025",
      end: "Present",
      description:
        "Developing a comprehensive camera inventory system to streamline asset management district-wide, improving efficiency and accountability. Additionally, contributing to the design and development of an innovative flashcard system aimed at enhancing student learning, with potential for district-wide adoption. Collaborating closely with staff and stakeholders to deliver impactful technology solutions that support educational goals.",
    },


  ],
  activites: [
    {
      company: "Desert Vista High School",
      href: "https://desertvista.tempeunion.org/",
      badges: [],
      location: "In Person",
      title: "Peer Tutor",
      logoUrl: "/dv.jpg",
      start: "August 2024",
      end: "May 2026",
      description:
        "Provided one-on-one and small group tutoring to fellow students in computer science and related subjects. Assisted peers in understanding complex concepts, improving coding skills, and preparing for assignments and exams. Fostered a supportive and encouraging learning environment, helping students gain confidence and achieve academic success.",
    },
    {
      company: "Desert Vista Computer Science Club",
      href: "https://dvcs.club",
      badges: [],
      location: "Hybrid",
      title: "Member",
      logoUrl: "/dv.jpg",
      start: "August 2023",
      end: "May 2026",
      description:
        "Actively participated in club meetings, coding challenges, and collaborative projects to expand knowledge in computer science. Engaged with peers to explore new technologies, share ideas, and work on hands-on programming activities. Contributed to a supportive learning community focused on improving technical skills and preparing for future careers in technology.",
    },
    {
      company: "Future Business Leaders of America",
      href: "https://fbla.org",
      badges: [],
      location: "Hybrid",
      title: "Competitor and National Qualifier",
      logoUrl: "/fbla.png",
      start: "August 2023",
      end: "May 2026",
      description:
        "Competed in technology and leadership events at the regional and state level, earning qualification for the FBLA National Leadership Conference. Developed skills in public speaking, critical thinking, and professional presentation. Collaborated with team members to prepare competitive event materials and participated in workshops to expand knowledge in business and entrepreneurship.",
    },

  ],
  education: [
    {
      school: "Desert Vista High School",
      href: "https://desertvista.tempeunion.org",
      degree: "High School Diploma",
      location: "Tempe, AZ",
      logoUrl: "/dv.jpg",
      start: "2022",
      end: "2026",
      description: `Highlighted Classes Taken: AP Calculus AB, AP Calculus BC, AP Computer Science A, AP Spanish Language and Culture, College Composition (ENG101), Honors Biotechnology 2`
    },
    {
      school: "AWS Skill Builder",
      href: "https://skillbuilder.aws",
      degree: "Cloud Computing & AWS Services Training",
      location: "Online",
      logoUrl: "/aws.jpg",
      start: "2024",
      end: "Present",
      description: "Completed hands-on training in AWS cloud services, architecture, and deployment through interactive labs and guided courses. Course List: Machine Learning Terminology and Process"
    },
    
  ],
  certificates: [
    {
      school: "CTE Software and App Design Certificate",
      href: "https://www.linkedin.com/in/zander-coffman-127319330/details/certifications/256341585/multiple-media-viewer/?profileId=ACoAAFNXMm8BOf7-e1zvXluJOv2tfytj1yCeKJM&treasuryMediaId=1752604847083",
      degree: "Certificate",
      location: "Arizona Department of Education",
      logoUrl: "/doe.jpg",
      start: "2023",
      end: "",
    },
    {
      school: "CTE Bioscience Certificate",
      href: "#",
      degree: "Certificate",
      location: "Arizona Department of Education",
      logoUrl: "/doe.jpg",
      start: "to be determined in 2025",
      end: "",
    },
    {
      school: "IT Specialist - Java",
      href: "https://www.credly.com/badges/aa15effd-3d7e-4ea8-a109-0c410424489e",
      degree: "Certificate",
      location: "Certiport - A Pearson VUE Business",
      logoUrl: "/certiport.jpg",
      start: "2023",
      end: "",
    },
    {
      school: "OSHA Certificate - Healthcare",
      href: "#",
      degree: "Certificate",
      location: "CarrerSafe",
      logoUrl: "/carsafe.png",
      start: "to be determined in 2025",
      end: "",
    },
    {
      school: "BACE (Biotechnology Aptitude & Competency Exam)",
      href: "#",
      degree: "Credential",
      location: "Biotility at UF",
      logoUrl: "/BACE.png",
      start: "to be determined in 2025",
      end: "",
    },
  ],
  projects: [
    {
      title: "Flashcard/it",
      href: "https://flashcardit.vercel.app",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description:
        "Flashcard/it is an AI-powered flashcard generator that transforms educational PDFs into interactive flashcards. By leveraging Gemini's capabilities, users can upload documents, and the app intelligently extracts key concepts to create structured flashcards, enhancing the learning experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel AI SDK",
        "Gemini",
        "ChatGPT"
      ],
      links: [
        {
          type: "Website",
          href: "https://flashcardit.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/zandercoffman/flashcardit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flashcardit.png", // Replace with actual image URL
      video: "", // Replace with actual video URL
    },
    {
      title: "Create-a-Curriculum",
      href: "https://create-a-curriculum.vercel.app",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "A web app that helps educators and learners design custom curricula with ease. Users can organize lessons, set learning goals, and export structured course plans, making it simple to create personalized learning paths.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Meta Llama"
      ],
      links: [
        {
          type: "Website",
          href: "https://create-a-curriculum.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/create-a-curriculum.png",
      video: "",
    },
    {
      title: "JavaBrewed",
      href: "https://java-brewed.vercel.app",
      dates: "May 2024 - Present",
      active: true,
      description:
        "An open-source web app designed to teach Java programming through structured lessons tailored for beginners, AP Computer Science A students, and advanced learners. JavaBrewed offers regular, AP, and honors-level courses, along with personalized progress tracking and recommendations.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://java-brewed.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/zandercoffman/java-brewed",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/javab.png", // Replace with actual image URL
      video: "", // Replace with actual video URL
    },
    {
      title: "ReLive It",
      href: "#", // Replace with actual URL if available
      dates: "August 2024 - June 2025",
      active: true,
      description:
        "ReLive It is an immersive American History game that gamifies learning through quizzes, AI interactions, and a unique feature that lets players experience historical events in their actual time periods. The game encourages active engagement and deeper understanding of history by blending education with gameplay.",
      technologies: [
        "Godot",
        "TypeScript",
        "Gemini API",
        "Discord.js",
        "VSCode",
        "Itch.io"
      ],
      links: [
      ],
      image: "/reliveit.jpg", // Add image URL if available
      video: "", // Add video URL if available
    }
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      description: "",
      location: "",
      image: "",
      links: [],
    }
  ],
} as const;
