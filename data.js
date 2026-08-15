/* ==============================================================
   PORTFOLIO DATA
   ==============================================================
   This is the ONLY file you need to edit to update your site.

   - To add a project: copy an existing object inside `projects`,
     paste it, and change the values. Order in the array = order
     on the page.
   - To remove something: delete its object from the array.
   - To add a skill category: copy an object inside `skills`.
   - To add a job/experience entry: copy an object inside
     `experience`.
   Nothing else in this file needs to change — index.html and
   app.js read everything from here automatically.
============================================================== */

const PORTFOLIO_DATA = {

  /* -----------------------------------------------------------
     PROFILE — shown in the "about" section
  ----------------------------------------------------------- */
  profile: {
    name: "Benedict",
    role: "Aspiring Full-Stack Developer — Imus, City Cavite",
    tagline: "I build clean, functional web apps end to end — from database to UI.",
    bio: "I work across the stack with HTML, CSS, JavaScript, Node.js/Express, and MySQL, and I'm growing my skills in React, Tailwind, and modern tooling like Vite and Sequelize. I like taking a project from a blank folder to something people can actually use — POS systems, auth flows, trading/escrow platforms, and small games.",
    socials: [
      { label: "GitHub",   url: "https://github.com/benedictlamoglia" },
      { label: "Email",    url: "johnbenedict.la@gmail.com" },
      { label: "Discord",  url: "https://discord.com/users/yourid" }
    ]
  },

  /* -----------------------------------------------------------
     SKILLS — grouped into categories, each with a list of tags
  ----------------------------------------------------------- */
  skills: [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Sequelize", "JWT", "Zod", "Winston"]
    },
    {
      category: "Data & Languages",
      items: ["MySQL", "Java", "Lua"]
    },
    {
      category: "Tools",
      items: ["Git", "Linux / Shell scripting", "Chart.js"]
    }
  ],

  /* -----------------------------------------------------------
     PROJECTS — add new ones here, most recent first
  ----------------------------------------------------------- */
  projects: [
    {
      title: "VOID — Trust & Reputation Site",
      status: "In Progress",
      description: "A trust and reputation site for middleman, buying, and selling services on digital trades. Config-driven architecture, filterable vouch gallery, escrow timeline, and a lightbox for proof media.",
      tags: ["JavaScript", "CSS", "Config-driven"],
      links: [
        { label: "View site", url: "#" },
        { label: "Source",    url: "#" }
      ]
    },
    {
      title: "Software License Management System",
      status: "Completed",
      description: "A full-stack system for issuing, tracking, and validating software licenses. Built with clean architecture and SOLID principles across the whole stack.",
      tags: ["Node.js", "Express", "MySQL", "React", "Sequelize", "JWT"],
      links: [
        { label: "Source", url: "#" }
      ]
    },
    {
      title: "POS Web Application",
      status: "Completed",
      description: "A point-of-sale system with role-based authentication, a cart interface, and a sales dashboard with live charts.",
      tags: ["JavaScript", "Node.js", "Express", "MySQL", "Chart.js"],
      links: [
        { label: "Source", url: "#" }
      ]
    },
    {
      title: "Login & Authentication System",
      status: "Completed",
      description: "A standalone authentication system covering registration, session handling, and access control.",
      tags: ["Node.js", "Express", "MySQL"],
      links: [
        { label: "Source", url: "#" }
      ]
    },
    {
      title: "Rock Paper Scissors",
      status: "Completed",
      description: "A browser game exploring game state, scoring, and simple UI interaction.",
      tags: ["JavaScript", "HTML", "CSS"],
      links: [
        { label: "Play", url: "https://benedictlamoglia.github.io/ROCK-PAPER-SCISSORSGAME/" },
        { label: "Source", url: "#" }
      ]
    }
  ],

  /* -----------------------------------------------------------
     EXPERIENCE — reverse chronological
  ----------------------------------------------------------- */
  experience: [
    {
      period: "Comming Soon",
      title: "-",
      org: "-",
      description: "-"
    },
    
  ],

  /* -----------------------------------------------------------
     CONTACT
  ----------------------------------------------------------- */
  contact: {
    text: "Open to full-stack projects, freelance work, and collaborations. Reach out through any of the channels below."
  }

};  