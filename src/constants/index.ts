// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  sigma,
  brainbow,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  freelancer,
  snrt3,
  youtube,
  linkedin,
  twitter,
  github,
  blender,
  photoshop,
  illustrator,
  davinci,
  afterEffects,
  premierpro,
  snrt,
  project7,
  project8,
  project9,
  project10,
  project13,
  project12,
  behance,
  instagram,
  imdb,
  protools,
  flstudio,
  project11,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
 
] as const;

// Services
export const SERVICES = [
  {
    title: "Motion designer",
    icon: web,
  },
  {
    title: "3D artist",
    icon: mobile,
  },
  {
    title: "Colorist",
    icon: backend,
  },
  {
    title: "Editor",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [

  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Premiere Pro",
    icon: premierpro,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "Davinci Resolve",
    icon: davinci,
  },
  {
    name: "After Effects",
    icon: afterEffects,
  },
  {
    name: "html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "Pro Tools",
    icon: protools,
  },
  {
    name: "FL Studio",
    icon: flstudio,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Assistant Editor",
    company_name: "Sigma technologies",
    icon: sigma,
    iconBg: "#383E56",
    date: "Juin 2021 - August 2021",
    points: [
      "Assisted the lead editor in editing various advertisements and promotional videos.",
      "Helped manage the media library and organized files for easy access.",
      "Used Premiere Pro and DaVinci Resolve for editing and color grading",
      "Designed basic visual dressing elements (lower thirds, transitions, logos) to enhance video clarity and branding.",
    ],
  },
  {
    title: "Main Editor",
    company_name: "S.N.R.T",
    icon: snrt3,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Installation and maintenance of audiovisual equipment for various events and conferences.",
      "Setup and troubleshooting of AV systems.",
      "Assistance in the creation and editing of multimedia content for live events.",
      "Adapted to broadcast technical standards and learned to perform under pressure in a professional environment.",
    ],
  },
  {
    title: "Main Editor",
    company_name: "Brainbow agency",
    icon: brainbow,
    iconBg: "#383E56",
    date: "April 2023 - August 2023",
    points: [
      "Edited institutional videos for non-profit organizations.",
      "Collaborated with directors to understand their vision and help bring it to life.",
      "IUsed After Effects to create animations and visual effects.",
      "Adapted content to various formats (social media, YouTube, corporate) based on client needs.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Malt, Fiverr, Upwork",
    icon: freelancer,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Produced promotional and artistic videos as a freelance editor and motion designer for clients across cultural and commercial sectors.",
      "Delivered end-to-end post-production, including editing, sound design, and motion graphics tailored to each project’s visual identity.",
      "Communicated directly with clients and artists to define creative direction and ensure alignment throughout production.",
      "Built a diverse portfolio of short films, music videos, and branded content showcased on Behance, blending 3D, design, and narrative elements.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "L'etranger",
    description:
      "l'etranger is a video clip for one of the biggest and most known rappers, it featured some famous celebrities and actors, and it showcased a mix between the moroccan culture and how it's influenced by foreign cultures",
    tags: [
      {
        name: "After Effects",
        color: "blue-text-gradient",
      },
      {
        name: "Premier Pro",
        color: "green-text-gradient",
      },
      {
        name: "Davinci Resolve",
        color: "pink-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://www.youtube.com/watch?v=Xqd813GoFfQ&list=RDXqd813GoFfQ&start_radio=1",
  },
  {
    name: "FSPCRabat",
    description:
      "The Foundation for the Safeguarding of the Cultural Heritage of Rabat (FSPCrabat) is dedicated to preserving, enhancing, and promoting Rabat's rich cultural heritage. Led by Her Royal Highness Princess Lalla Hasnaa, it works to ensure this heritage is passed on to future generations.",
    tags: [
      {
        name: "After Effects",
        color: "blue-text-gradient",
      },
      {
        name: "Premier Pro",
        color: "purple-text-gradient",
      },
      {
        name: "Photoshop",
        color: "pink-text-gradient",
      },
    ],
    image: project8,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fspcrabat.ma/en/",
  },
  {
    name: "Inwi",
    description:
      "Dir Iddik is a Moroccan online platform created by the telecom operator inwi to connect volunteers with associations. It aims to facilitate volunteer work by linking individuals with various non-profit organizations, allowing them to contribute their time and skills to social and community initiatives..",
    tags: [
      {
        name: "After Effects",
        color: "blue-text-gradient",
      },
      {
        name: "Premier Pro",
        color: "green-text-gradient",
      },
      {
        name: "Photoshop",
        color: "pink-text-gradient",
      },
    ],
    image: project9,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://www.youtube.com/watch?v=sHM7mK0kkjU",
  },
  {
    name: "Space moodboard",
    description:
      " Space Mood Board is one of many personal projects where I explore storytelling through 3D and motion design. Each piece on my Behance reflects a different experiment — from cinematic lighting and product animations to surreal environments. These aren’t just visuals; they’re creative exercises where I push myself to build emotion, atmosphere, and meaning through design..",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project10,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://www.behance.net/moodboard/220694821/Space",
  },
  {
    name: "Enimebenevolat",
    description:
      "Enime Bénévolat is a student-led club and association that provides humanitarian aid through a range of initiatives — from distributing food and essential supplies to renovating small infrastructures like classrooms, homes, and mosques. They've partnered with various artists and companies to fund their efforts, and their impact across Morocco has been both significant and ongoing. We originally joined as part of the filming crew, but eventually found ourselves becoming volunteers too.",
    tags: [
      {
        name: "camera operator",
        color: "blue-text-gradient",
      },
      {
        name: "Premier Pro",
        color: "green-text-gradient",
      },
      {
        name: "Volunteer",
        color: "pink-text-gradient",
      },
    ],
    image: project12,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://www.instagram.com/enimbenevolat/?hl=en",
  },
  {
    name: "Lyautey",
    description:
      "Lyautey Résidence is a prestigious real estate company in Morocco, known for its refined architecture and upscale living spaces. I had the pleasure of working on their promotional video, capturing the elegance and atmosphere of their residences. It was an intense but rewarding project — long days, tight deadlines, and countless retakes — but seeing the final result come to life made every effort worth it.",
    tags: [
      {
        name: "camera operator",
        color: "blue-text-gradient",
      },
      {
        name: "Premier Pro",
        color: "green-text-gradient",
      },
      {
        name: "After Effects",
        color: "pink-text-gradient",
      },
    ],
    image: project13,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://www.instagram.com/lyauteyresidence/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/houidatamer/.",
  },
  {
    name: "IMDB",
    icon: imdb,
    link: "https://www.imdb.com/name/nm13171058/",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/tamer-houida-7565aa16b/",
  },
  {
    name: "Behance",
    icon: behance,
    link: "https://www.behance.net/HICCUP_",
  },
] as const;
