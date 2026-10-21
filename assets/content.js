/**
 * ============================================================
 *  MAITRY SANTOSHWAR — PORTFOLIO CONTENT
 *  Edit this file to update your portfolio without touching
 *  any animation or layout code.
 * ============================================================
 *
 *  HOW TO UPDATE YOUR PORTFOLIO
 *  ─────────────────────────────────────────────────────────
 *  ➤ Update your introduction   → Edit personal.intro[]
 *  ➤ Add / remove projects      → Add / remove objects in projects[]
 *  ➤ Replace project images     → Change the "image" path in each project
 *  ➤ Update skills & tools      → Edit the skills[] and tools[] arrays
 *  ➤ Add achievements           → Add objects to experience[] array
 *  ➤ Change contact details     → Edit the personal{} object below
 *  ➤ Replace your resume        → Change personal.resumePath
 *
 *  All paths are relative to index.html (inside the site/ folder).
 * ============================================================
 */

const PORTFOLIO = {

  /* ──────────────────────────────────────────────
     PERSONAL INFO
  ────────────────────────────────────────────── */
  personal: {
    name:        "Maitry Santoshwar",
    firstName:   "Maitry",               // Used in nav logo
    tagline:     "Building Intelligent Solutions, One Line at a Time",
    email:       "maitrysantoshwar07@gmail.com",
    phone:       "8668612334",
    github:      "https://github.com/MaitryS07",
    linkedin:    "https://www.linkedin.com/in/maitry-santoshwar-6aa45437a",
    location:    "Mumbai, Maharashtra, India",
    resumePath:  "https://drive.google.com/file/d/1ZPIY56BzpNd3E8UaJNg1R3-MoAXg8h8F/view?usp=drive_link",
    portraitAlt: "Cartoon portrait of Maitry Santoshwar — a Computer Engineering student at VJTI Mumbai",

    // 2–3 sentence hero introduction
    intro: [
      "Hi, I'm a third-year Computer Engineering student at VJTI Mumbai with a passion for building technology that solves real-world problems.",
      "I work across full-stack development, AI/ML, and NLP — turning ideas into functional, impactful applications.",
      "Currently exploring intelligent systems, open-source communities, and opportunities to learn by doing."
    ]
  },

  /* ──────────────────────────────────────────────
     EDUCATION
  ────────────────────────────────────────────── */
  education: [
    {
      institution: "Veermata Jijabai Technological Institute (VJTI)",
      degree:      "B.Tech in Computer Engineering",
      location:    "Matunga, Mumbai",
      period:      "Aug 2024 – Present",
      highlight:   true
    },
    {
      institution: "Decent Junior College",
      degree:      "MHT-CET 99.96 Percentile",
      location:    "Nagpur, Maharashtra",
      period:      "Aug 2022 – May 2024",
      highlight:   false
    },
    {
      institution: "St. Anna's Public School",
      degree:      "SSC — 92.14%",
      location:    "Mul, Maharashtra",
      period:      "July 2021 – May 2022",
      highlight:   false
    }
  ],

  /* ──────────────────────────────────────────────
     ABOUT — FACT CARDS  (max 3)
  ────────────────────────────────────────────── */
  factCards: [
    { emoji: "🎓", label: "Degree",   value: "B.Tech CSE",  sub: "VJTI Mumbai" },
    { emoji: "📅", label: "Year",     value: "3rd Year",    sub: "2024 – 2028" },
    { emoji: "🏆", label: "MHT-CET", value: "99.96%ile",   sub: "2024 Batch"  }
  ],

  /* ──────────────────────────────────────────────
     ABOUT — PARAGRAPHS
  ────────────────────────────────────────────── */
  about: [
    "I'm Maitry — a Computer Engineering student at VJTI Mumbai who loves building things that actually matter. Whether it's an AI-powered safety app, a multilingual chatbot for farmers, or an interview readiness platform, I gravitate towards projects where technology meets human need.",
    "My technical toolkit spans Python, Flask, NLP, and Machine Learning, but what excites me most is the intersection of AI and real-world impact. I'm a firm believer in learning by building, and most of my best lessons have come from shipping something, breaking it, and fixing it.",
    "Outside of coding, you'll find me exploring open-source communities, sketching out new project ideas, or getting lost in a good book. I'm always looking for the next problem worth solving."
  ],

  /* ──────────────────────────────────────────────
     HOBBIES (About section chips)
  ────────────────────────────────────────────── */
  hobbies: [
    "🤖 AI & ML Tinkering",
    "📖 Reading",
    "🌱 Open Source",
    "🎨 Sketching",
    "🎵 Music",
    "💡 Problem Solving",
    "🌍 Social Impact Tech",
    "✈️ Travelling"
  ],

  /* ──────────────────────────────────────────────
     TECHNICAL SKILLS (Section 4)
     Each card = one capability category
  ────────────────────────────────────────────── */
  skills: [
    {
      category: "Programming Languages",
      icon: "code",
      items: ["Python", "C++", "JavaScript", "HTML / CSS", "SQL"]
    },
    {
      category: "Web & Full-Stack Dev",
      icon: "globe",
      items: ["Flask", "Django", "React", "SpringBoot", "REST APIs", "HTML5 / CSS3"]
    },
    {
      category: "AI & Machine Learning",
      icon: "brain",
      items: ["NLP", "scikit-learn", "Machine Learning", "AI Model Integration", "Chatbot Development"]
    },
    {
      category: "Data & Databases",
      icon: "database",
      items: ["SQLite", "MySQL", "pandas", "NumPy", "Matplotlib"]
    },
    {
      category: "Developer Tools",
      icon: "tools",
      items: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"]
    },
    {
      category: "CS Fundamentals",
      icon: "cpu",
      items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS", "Software Engineering", "Linux / Unix"]
    }
  ],

  /* ──────────────────────────────────────────────
     TOOLS & TECHNOLOGIES (Section 5 — badges)
     Just a flat list of tools you've actually used
  ────────────────────────────────────────────── */
  tools: [
    { label: "Python",      abbr: "Py"  },
    { label: "Flask",       abbr: "Fl"  },
    { label: "React",       abbr: "Re"  },
    { label: "Django",      abbr: "Dj"  },
    { label: "Git",         abbr: "Git" },
    { label: "GitHub",      abbr: "GH"  },
    { label: "VS Code",     abbr: "VSC" },
    { label: "SQLite",      abbr: "SQ"  },
    { label: "MySQL",       abbr: "My"  },
    { label: "pandas",      abbr: "Pd"  },
    { label: "NumPy",       abbr: "Np"  },
    { label: "scikit-learn",abbr: "SK"  },
    { label: "Jupyter",     abbr: "Jp"  },
    { label: "Colab",       abbr: "Co"  },
    { label: "Android",     abbr: "An"  },
    { label: "Matplotlib",  abbr: "Mt"  },
    { label: "NLP",         abbr: "NLP" },
    { label: "REST APIs",   abbr: "API" },
    { label: "Linux",       abbr: "Lx"  },
    { label: "SpringBoot",  abbr: "SB"  }
  ],

  /* ──────────────────────────────────────────────
     PROJECTS (Section 6)
     To add a project: copy one object and fill it in.
     image: path relative to index.html, e.g. "assets/images/project-raksha.png"
            Set to "" if no image is available.
     github / demo: set to "" to hide the button.
     status: "Completed" | "In Progress" | "Prototype"
  ────────────────────────────────────────────── */
  projects: [
    {
      id:           "raksha",
      name:         "Raksha: SafeHer",
      emoji:        "🛡️",
      problem:      "Women in distress lack quick, discreet ways to alert trusted contacts and emergency services.",
      description:  "An AI-driven women's safety application built under VJTI's Inheritance Mentorship Program. Uses NLP and ML to detect emergency intent from distress messages and voice inputs, then triggers real-time SOS alerts.",
      contribution: "Designed the NLP/ML pipeline for emergency intent detection, built the Flask REST API backend, and integrated Google Maps API for live location tracking and emergency contact notifications.",
      tech:         ["Python", "Flask", "NLP", "ML", "Android", "SQLite", "Google Maps API"],
      period:       "Nov 2025 – Jan 2026",
      status:       "In Progress",
      image:        "assets/images/project-raksha.png",
      github:       "",
      demo:         "",
      featured:     true,
      caption:      "AI safety meets real-world impact ✨"
    },
    {
      id:           "krushisarthi",
      name:         "KrushiSarthi – Farmer Awareness Portal",
      emoji:        "🌾",
      problem:      "Farmers in rural India lack accessible information on MSP rates, government schemes, and agricultural loans.",
      description:  "A multilingual farmer awareness portal with an AI-powered chatbot that answers farmers' queries and recommends relevant government schemes. Supports multiple languages to reach farmers across regions.",
      contribution: "Built the multilingual Flask backend, integrated the NLP-powered chatbot, designed the SQLite database schema, and implemented the government scheme recommendation logic.",
      tech:         ["Python", "Flask", "SQLite", "HTML/CSS", "NLP", "Chatbot"],
      period:       "Jan 2026 – Mar 2026",
      status:       "Completed",
      image:        "assets/images/project-krushi.png",
      github:       "",
      demo:         "",
      featured:     true,
      caption:      "Making agri-info accessible for all 🌱"
    },
    {
      id:           "ai-interview",
      name:         "AI Interview Readiness Analyzer",
      emoji:        "🤖",
      problem:      "Job seekers struggle to objectively assess their interview readiness and identify real skill gaps.",
      description:  "An AI platform where users upload their resume and take role-specific technical assessments. Compares resume claims with assessment performance to generate honest, personalized feedback on readiness and gaps.",
      contribution: "Developed the resume parsing pipeline, designed the assessment engine, and built the feedback generation system using NLP techniques.",
      tech:         ["Python", "Flask", "NLP", "SQLite"],
      period:       "Feb 2026 – Mar 2026",
      status:       "Completed",
      image:        "assets/images/project-interview.png",
      github:       "",
      demo:         "",
      featured:     true,
      caption:      "Honest feedback > generic encouragement 🎯"
    },
    {
      id:           "neighborhood-safety",
      name:         "Neighborhood Safety Management",
      emoji:        "🏘️",
      problem:      "Communities lack a structured platform to report local incidents and track their resolution.",
      description:  "A full-stack web application for reporting and monitoring neighborhood incidents. Features separate dashboards for citizens and administrators, with status tracking and community alert notifications.",
      contribution: "Built the full-stack application — Flask backend, SQLite database with user authentication, citizen and admin dashboards, and the incident reporting and tracking interface.",
      tech:         ["Python", "Flask", "SQLite", "HTML", "CSS"],
      period:       "Oct 2025 – Nov 2025",
      status:       "Completed",
      image:        "assets/images/project-neighborhood.png",
      github:       "",
      demo:         "",
      featured:     false,
      caption:      "Safer communities through tech 🏘️"
    }
  ],

  /* ──────────────────────────────────────────────
     EXPERIENCE & ACHIEVEMENTS TIMELINE (Section 7)
     type: "internship" | "mentorship" | "achievement" | "competition" | "certification" | "academic"
  ────────────────────────────────────────────── */
  experience: [
    {
      type:         "competition",
      title:        "VJTI AI Hackathon Winner",
      org:          "Veermata Jijabai Technological Institute",
      location:     "Mumbai",
      period:       "2026",
      description:  "Won the VJTI AI Hackathon 2026, competing against teams across the institute to build innovative AI-powered solutions under time constraints.",
      tags:         ["AI", "Hackathon", "Winner"]
    },
    {
      type:         "mentorship",
      title:        "Mentee — Inheritance Mentorship Program",
      org:          "VJTI Inheritance",
      location:     "Mumbai",
      period:       "Nov 2025 – Jan 2026",
      description:  "Selected for VJTI's prestigious Inheritance Mentorship Program. Developed Raksha: SafeHer — an AI-driven women's safety application — under the guidance of senior student mentors.",
      tags:         ["Mentorship", "AI/ML", "Flask", "Android"]
    },
    {
      type:         "certification",
      title:        "Lenovo LEAP NextGen AI Internship Program",
      org:          "Lenovo (AICTE-Recognized)",
      location:     "Remote",
      period:       "2025",
      description:  "Successfully completed the AICTE-recognized Lenovo LEAP NextGen AI Internship Program. Earned certification in AI and emerging technologies through hands-on learning.",
      tags:         ["AI", "Internship", "AICTE", "Certification"]
    },
    {
      type:         "achievement",
      title:        "Hacktoberfest Super Contributor",
      org:          "DigitalOcean / Hacktoberfest",
      location:     "Open Source",
      period:       "October 2025",
      description:  "Recognized as a Super Contributor at Hacktoberfest 2025 for active and impactful open-source participation — contributing meaningful pull requests across multiple repositories.",
      tags:         ["Open Source", "GitHub", "Hacktoberfest"]
    },
    {
      type:         "academic",
      title:        "MHT-CET — 99.96 Percentile",
      org:          "Maharashtra State Board",
      location:     "Maharashtra",
      period:       "2024",
      description:  "Achieved 99.96 percentile in the Maharashtra Common Entrance Test (MHT-CET) 2024, securing admission to VJTI Mumbai — one of Maharashtra's top engineering institutes.",
      tags:         ["Academic", "Entrance Exam", "Top Rank"]
    }
  ],

  /* ──────────────────────────────────────────────
     PERSONAL INTERESTS (Section 8)
  ────────────────────────────────────────────── */
  interests: [
    {
      icon:        "📚",
      title:       "Reading",
      description: "From science fiction to self-development — books are my favourite way to explore ideas outside my field."
    },
    {
      icon:        "🌱",
      title:       "Open Source",
      description: "Contributing to open-source projects is how I give back, sharpen my skills, and meet builders I admire."
    },
    {
      icon:        "🤖",
      title:       "AI Experiments",
      description: "When I'm not working on a project, I'm exploring new models, datasets, or building small AI experiments just for fun."
    },
    {
      icon:        "🎨",
      title:       "Sketching & Doodling",
      description: "I sketch when I'm thinking through ideas. It's the closest thing I have to a whiteboard that fits in a backpack."
    },
    {
      icon:        "🎵",
      title:       "Music",
      description: "Good playlists make long coding sessions feel short. Music is the background track to almost everything I do."
    },
    {
      icon:        "🌍",
      title:       "Social Impact Tech",
      description: "I'm drawn to projects where the user is someone who genuinely needs help — safety apps, farmer platforms, community tools."
    }
  ],

  /* ──────────────────────────────────────────────
     RELEVANT COURSEWORK (used in About / Skills)
  ────────────────────────────────────────────── */
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering",
    "Operating Systems",
    "Computer Organisation & Architecture",
    "AI & Machine Learning"
  ]

}; // end PORTFOLIO

// Make available globally
window.PORTFOLIO = PORTFOLIO;
