import { Icons } from "@/components/icons";
import { BrainCircuit, BrainCircuitIcon, Calendar, CaseSensitive, Coffee, HomeIcon, NotebookIcon, PenLine, UsersRound } from "lucide-react";

/**
 * Writing Template
 * 
 * {
      title: "Title",
      summary: "",
      extendedSummary: "",
      dateStarted: "",
      dateFinished: "",
      category: "Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      type: "idea",
      Icon: CaseSensitive,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
    }
 */

export const DATA = {
  calendarBookingURL: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ROSU3TcMHx55Zy_cZhftIGpAKyTSrOXdfVMeMGdwkTinT41ukSDnM4bwOr00uf2Tntvv6RNSm?gv=true",
  name: "Zander Coffman",
  initials: "ZC",
  url: "https://zandercoffman.vercel.app",
  location: "Phoenix, AZ",
  locationLink: "https://www.google.com/maps/place/phoenix",
  description:
    "Aspiring software developer who turns ideas into working solutions and loves growing alongside a team. Faith-driven, always learning, and passionate about writing and sharing what I’ve been blessed to learn.",
  summary:
    "I’m Zander, a developer who loves learning, building, and using tech to help people. I’m all about growing my skills, tackling real problems, and sharing what I’ve been blessed to learn with others. Whether it’s design, code, or community work, my goal is simple: create things that make life easier, support others on their journey, and keep growing as a builder every day.",
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
    "JSON",
    "Cross-Functional Team Leadership",
    "Agile Project Coordination",
    "Strategic Problem Solving",
    "Creative Process Optimization",
    "Data-Driven Decision Making",
    "Technical Mentorship",
    "Innovation Facilitation",
    "Client-Focused Communication",
    "Product Lifecycle Oversight",
    "Collaborative Brainstorming",
    "Stakeholder Engagement",
    "Adaptive Workflow Management"
  ],  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/writings", icon: PenLine, label: "Papers Written" }
  ],
  writings: [
    {
      title: "The Future of Work: Adapting and Thriving in the 21st Century's Job Market",
      summary: "This paper looks at how AI is changing the way we work and get hired, showing that while it can make jobs and applications more automated, people who learn to use AI smartly can stand out and succeed in today’s job market.",
      extendedSummary: "",
      dateStarted: "November 11th, 2025",
      dateFinished: "",
      type: "idea",
      category: "Research Paper",
      wordCount: 1000,
      coverImage: "",
      link: "",
      Icon: BrainCircuit,
      badges: ["AI", "Workplace", "Research", "Economics"],
      tableOfContents: {
        "Abstract": {
          page: 3,
          subsections: {
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.": 0
          }
        },
        "Background": {
          page: 4,
          subsections: {
            "Introduction": 4,
            "History Of AI In The Workplace": {
              page: 4,
              subsections: {
                "Past": "1950s - 1999",
                "Present": "2000s - 2025"
              }
            },

          }
        },
        "The World Today": {
          page: 5,
          subsections: {
            "What Are White Collar Jobs And How Are They Affected?": 5,
            "What Is Happening To Jobs?": 6,
            "What AI Influences And Controls During Hiring": 7,
            "The Current State Of The Job Market": 8,
            "Experience With No Experience": 8,
            "Reliance On Self Taught Education": 11
          }
        },
        "Job Searching": {
          page: 11,
          subsections: {
            "How Has AI Influenced Getting Hired?": 11,
            "How Potential Candidates Use AI": 11,
            "How Recruiting Managers Use AI": 11,
            "Using Social Media To Enhance Employability": 11
          }
        },
        "Thesis": {
          page: 11,
          subsections: {
            "The Problem": 11,
          }
        },
        "Adapting To The 21st Century's Job Market": {
          page: 11,
          subsections: {
            "Introduction And Prediction": 11,
            "Experimental Designs": 11,
            "Materials Used And Purpose": 11,
            "Procedures": 11,
            "Results": 11,
            "Analysis": 11
          }
        },
        "Thriving In The 21st Century's Job Market": {
          page: 11,
          subsections: {
            "Introduction And Prediction": 11,
            "Experimental Designs": 11,
            "Materials Used And Purpose": 11,
            "Procedures": 11,
            "Results": 11,
            "Analysis": 11
          }
        },
        "Conclusion": {
          page: 12,
          subsections: {
            "Key Points": 12,
            "The Resolution": 12,
            "Takeaways": 12
          }
        },
        "References": 12
      },
    },
    {
      title: "How To Get Members Into A New Club (And Actually Keep Them There)",
      summary: "This essay outlines a five-step “SMART” system to help new club leaders recruit members and build a strong club. It shows how using structure, outreach, and planning leads to long-term success. This essay is an essay I made for College Composition (ENG101) and earned a 98/105 (93%) for this writing.",
      extendedSummary: "This essay explains how new or inexperienced club leaders can successfully recruit and retain members by using the five-step “SMART” process: Setting the Foundation, Marketing, Attracting Members, Reaching Out and Retaining, and Taking the Club to the Next Level. It argues that by following these structured steps—supported by research, real examples, and proven strategies—any student can build a thriving, long-lasting club. This essay is an essay I made for College Composition (ENG101) and earned a 98/105 (93%) for this writing.",
      dateStarted: "August 25th, 2025",
      dateFinished: "September 21st, 2025",
      category: "Process Analysis Paper",
      wordCount: 2824,
      type: "written",
      coverImage: "/writing/membersclub.png",
      link: "https://zenodo.org/records/17652670?token=eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjM4YjgwZjMyLTUyODItNDVhNS05ODRiLTc3Yzc1MDY1OGMyYyIsImRhdGEiOnt9LCJyYW5kb20iOiIwZjhkNDJiNzYyZDdhMDYwN2JhOThmZjAyNWZkY2ZkZiJ9.cJ-rh_SeLbQYupLDjSpTUNUHDAWCtpeXgwGzzt2_Nj9oBUXRStgJBMZqi8E1pW74xnZaMYZkez5gX1qH2U0F3g",
      Icon: UsersRound,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: {
        "Introduction/Overview": 1,
        "Special Terms": 2,
        "Sequence Of Steps": {
          page: 2,
          subsections: {
            "'S' - Setting The Foundation": 2,
            "'M' - Marketing": 3,
            "'A' - Attracting Members": 5,
            "'R' - Reaching Out and Retaining": 5,
            "'T' - Taking the Club to the Next Level": 6
          }          
        },
        "Examples/Results": 7,
        "Conclusion": 9,
        "Works Cited": 10
      },
    },
    {
      title: "Rebuild, Reinvent, Repeat: A Scientific Analysis of the Psychological Principles Behind @julienhimself’s Coaching",
      summary: "This essay explores how @julienhimself guides his audience through a cycle of rebuilding, reinventing, and repeating personal transformation by blending mindset shifts, emotional processing, and confidence-building across all his content.",
      extendedSummary: "",
      dateStarted: "December 1st, 2025",
      dateFinished: "",
      category: "Psychological Analysis / Applied Psychology Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      Icon: BrainCircuitIcon,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
      type: "written"
    },
    {
      title: "Meta’s Smart Glasses: How a Simple Vision Turned Controversial",
      summary: "This paper examines how Meta’s smart glasses, initially a simple technological vision, became controversial due to privacy concerns, design flaws, and public reception.",
      extendedSummary: "",
      dateStarted: "",
      dateFinished: "",
      category: "Analytical / Case Study Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      Icon: CaseSensitive,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
      type: "Idea"
    },
    {
      title: "The Parables of Jesus Christ",
      summary: "This paper explores the parables of Jesus Christ, analyzing their meanings, cultural context, and moral lessons for both historical and modern audiences.",
      extendedSummary: "",
      dateStarted: "",
      dateFinished: "",
      category: "Expository / Theological Analysis Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      Icon: CaseSensitive,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
      type: "Idea"
    },
    {
      title: "The Cost of Discipleship in a Comfort-Driven Culture",
      summary: "This paper examines how modern comfort-driven lifestyles challenge the commitment required for true discipleship, arguing that following Christ often demands sacrifice and intentionality.",
      extendedSummary: "",
      dateStarted: "",
      dateFinished: "",
      category: "Persuasive / Theological Reflection Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      Icon: CaseSensitive,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
      type: "Idea"
    },
    {
      title: "How To Be A Man",
      summary: "This paper explores the qualities, responsibilities, and cultural expectations associated with being a man, offering insights on character, integrity, and personal growth.",
      extendedSummary: "",
      dateStarted: "",
      dateFinished: "",
      category: "Expository / Social Commentary Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      Icon: CaseSensitive,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
      type: "Idea"
    },
    {
      title: "If Such a God Is Loving, Why Do I Suffer?",
      summary: "This paper explores the problem of suffering in the context of a loving God, examining why pain exists and how faith can provide understanding and comfort.",
      extendedSummary: "",
      dateStarted: "",
      dateFinished: "",
      category: "Reflective / Theological Inquiry Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      Icon: CaseSensitive,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
      type: "Idea"
    },
    {
      title: "How To Land A Job Interview",
      summary: "This paper provides strategies and actionable tips for securing a job interview, including resume optimization, networking, and effective application techniques.",
      extendedSummary: "",
      dateStarted: "",
      dateFinished: "",
      category: "Process Analysis Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      Icon: CaseSensitive,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
      type: "Idea"
    },
    {
      title: "How To Succeed In A Job Interview",
      summary: "This paper offers strategies for excelling in a job interview, covering preparation, communication skills, and techniques to leave a strong impression on employers.",
      extendedSummary: "",
      dateStarted: "",
      dateFinished: "",
      category: "Process Analysis Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      Icon: CaseSensitive,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
      type: "Idea"
    },
    {
      title: "How To Write A Quality Resume",
      summary: "This paper synthesizes multiple sources and expert advice to explain how to craft a high-quality resume that effectively highlights skills, experience, and accomplishments.",
      extendedSummary: "",
      dateStarted: "",
      dateFinished: "",
      category: "Synthesis / How-To Guide Paper",
      wordCount: 0,
      coverImage: "",
      link: "",
      Icon: CaseSensitive,
      badges: ["Leadership", "Club Growth", "Recruitment", "Strategy"]      ,
      tableOfContents: { },
      type: "Idea"
    },
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
      company: "UIsy Design",
      href: "https://uisy-design.netlify.app",
      badges: [
        "My Business"
      ],
      location: "Online",
      title: "Owner & Entrepreneur",
      logoUrl: "/UIsyLogo.jpeg",
      start: "November 2025",
      end: "Present",
      skills: [
        "UI/UX Design",
        "Front-End Development",
        "Design System Creation",
        "Client Communication",
        "Prototyping & Wireframing",
        "Debugging and Pacing"
      ],          
      description:
        "UIsy Design makes custom, intuitive, and fun user interfaces for businesses and anyone who needs a clean, polished look. On top of that, we offer a modular UI library so developers can build front-ends faster without sacrificing style. Basically, we want design to feel easy, enjoyable, and just work for everyone.",
    },
    {
      company: "Code Ninjas",
      href: "https://www.codeninjas.com",
      badges: [],
      location: "Hybrid",
      title: "Code Sensei",
      logoUrl: "/cn.png",
      start: "September 2025",
      end: "Present",
      skills: [
        "Teaching & Mentorship",
        "Explaining Technical Concepts Clearly",
        "Python Programming",
        "Curriculum Development",
        "Debugging & Problem-Solving",
        "Classroom Management"
      ],
      description:
        "As a Code Sensei at Code Ninjas, I teach and support students as they learn to code through hands-on, game-driven lessons. ",
    },
    {
      company: "Desert Vista Computer Science Club",
      href: "https://dvcs.club",
      badges: [],
      location: "Hybrid",
      title: "Club Secretary",
      logoUrl: "/dvcs.png",
      start: "July 2025",
      end: "Present",
      skills: [
        "Organizational Management",
        "Professional Communication",
        "Team Collaboration",
        "Scheduling & Coordination",
        "Record Keeping & Documentation",
        "Time Management"
      ],         
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
      skills: [
        "Problem-Solving in Real Environments",
        "Full-Stack Development",
        "Database Design & Management",
        "API Integration",
        "Project Management",
        "Version Control (Git)"
      ],       
      description:
        "Developing a comprehensive camera inventory system to streamline asset management district-wide, improving efficiency and accountability. Additionally, contributing to the design and development of an innovative flashcard system aimed at enhancing student learning, with potential for district-wide adoption. Collaborating closely with staff and stakeholders to deliver impactful technology solutions that support educational goals.",
    },


  ],
  activites: [
    {
      company: "Desert Vista High School",
      href: "https://desertvista.tempeunion.org",
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
      logoUrl: "/dvcs.png",
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
      description: `Highlighted Classes Taken: AP Calculus AB, AP Calculus BC, AP English: Language and Composition, AP Computer Science A, AP Spanish: Language and Culture, College Composition (ENG101), Honors Biotechnology 2`
    },
    {
      school: "Massachusetts Institute of Technology",
      href: "https://ocw.mit.edu",
      degree: "Numerous Studies",
      location: "Online",
      logoUrl: "/mit.png",
      start: "2025",
      end: "Present",
      description: "Highlighted Courses Currently Taken: 18.06: Linear Algebra, 6.005: Elements of Software Construction, 9.00: Introduction to Psychology, 15.390 — New Enterprises, 15.S21 — Nuts and Bolts of Business Plans, 15.351 — Managing Innovation and Entrepreneurship, 15.821 Listening to the Customer, 15.822 Strategic Marketing Measurement, 15.280 — Communication for Managers, 21G.232 — Advanced Speaking & Critical Listening Skills, 15‑279 — Management Communication (Strategic Interviewing)"
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
      school: "OSHA Certificate - 10 Hour Healthcare",
      href: "#",
      degree: "Certificate",
      location: "CareerSafe",
      logoUrl: "/carsafe.png",
      start: "08/01/2025",
      end: "10/16/2025",
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
