// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import RiLinkedinBoxLine from 'remixicon-react/LinkedinBoxLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'


/* eslint-disable react/jsx-key */
export const heroIcons = [
  { 
    id: 'icon-1',  
    icon: <InstagramLineIcon />, 
    link: "https://www.instagram.com/rdaa_ni/" 
  },
  { 
    id: 'icon-3', 
    icon: <RiLinkedinBoxLine />, 
    link: "https://www.linkedin.com/in/maidiridani/" 
  },
  { 
    id: 'icon-5', 
    icon: <GithubLineIcon />, 
    link: "https://github.com/MaidiRidani" 
  },
];

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
  {
    id:"github",
    title: 'Github Repos',
    amount: 348,
    icon: <GithubFillIcon />,
  },
  {
    id:"project",
    title: 'Successful Projects',
    amount: 227,
    icon: <Projector2LineIcon />,
  },
  {
    id:"group",
    title: 'Satisfied clients',
    amount: 176,
    icon: <GroupLineIcon />,
  },
  {
    id:"award",
    title: 'Awards and Recognition',
    amount: 107,
    icon: <AwardFillIcon />,
  },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
  " I build integrated robotics and IoT systems with a focus on functionality, reliability, and real-world application. From mechanical design to embedded control and PCB development, I work on creating complete automation solutions engineered, tested, and optimized. My long-term direction is to develop scalable automation technologies that solve practical industrial problems."
// End of About Me

// Experience
export const experienceData = [
  {
    id: 'exp-1',
    year: 2020,
    title: 'Early Technical Exposure',
    education:
      'Vocational High School (Multimedia): Gained foundational skills in design, digital media, and basic computing.',
    experience: [
      'Internship (Printing Industry): Assisted in production workflows and gained understanding of real-world technical operations.',
      'Explored basic computer systems, design tools, and problem-solving in technical environments.',
    ],
  },
  {
    id: 'exp-2',
    year: 2022,
    title: 'Transition to Networking & Programming',
    education:
      'Bachelor Degree (Internet Engineering Technology) – Politeknik Elektronika Negeri Surabaya.',
    experience: [
      'Started focusing on computer networking and Python programming fundamentals.',
      'Built early simulations using GNS3 and PNETLAB for network configuration practice.',
      'Explored automation and problem-solving using Python in small personal projects.',
    ],
  },
  {
    id: 'exp-3',
    year: 2024,
    title: 'Teaching & Practical Application',
    education:
      'Self-driven learning in Python, Networking, and introductory Machine Learning through online courses and hands-on practice.',
    experience: [
      'Private Tutor (IT & Programming): Taught Python, networking basics, and general IT skills to SMP & SMA students.',
      'Designed structured learning materials including debugging practices and real-world case studies.',
      'Temporary Teacher (SD): Led physical education and teamwork-based activities, strengthening leadership and communication skills.',
    ],
  },
  {
    id: 'exp-4',
    year: 2025,
    title: 'Professional Teaching & System Thinking',
    education:
      'Advanced self-learning in Machine Learning, automation, and system-based problem solving.',
    experience: [
      'Informatics Teacher (SMP): Taught foundational IT concepts, digital literacy, and basic computing using practical approaches.',
      'Developed adaptive teaching strategies for limited lab resources and diverse student levels.',
      'Internship (Digital Company): Worked as Junior Team member, contributing to digital solutions and team-based projects.',
    ],
  },
  {
    id: 'exp-5',
    year: 2025,
    title: 'Specialization in Robotics & Applied Tech',
    education:
      'Focused on applied programming (Arduino, C++, simulation tools) and hands-on system integration.',
    experience: [
      'Robotics Instructor: Designed and delivered structured robotics curriculum using Arduino and sensors.',
      'Guided students in building obstacle-avoidance robots using conditional logic and hardware control.',
      'Implemented simulation-first approach (Tinkercad) before transitioning to real hardware systems.',
    ],
  },
]

// Skills
export const skillsData = [
  { id: 'skill-1', name: 'Figma', icon: '/skills/figma.png' },
  { id: 'skill-2', name: 'Photoshop', icon: '/skills/photoshop.png' },
  { id: 'skill-3', name: 'Blender', icon: '/skills/blender.png' },
  { id: 'skill-4', name: 'VS Code', icon: '/skills/vscode.png' },
  { id: 'skill-5', name: 'HTML', icon: '/skills/html.png' },
  { id: 'skill-6', name: 'CSS', icon: '/skills/css.png' },
  { id: 'skill-7', name: 'JavaScript', icon: '/skills/js.png' },
  { id: 'skill-8', name: 'TailwindCSS', icon: '/skills/tailwind.png' },
  { id: 'skill-9', name: 'Vite', icon: '/skills/vite.png' },
  { id: 'skill-10', name: 'ReactJS', icon: '/skills/react.png' },
  { id: 'skill-11', name: 'TypeScript', icon: '/skills/ts.png' },
  { id: 'skill-12', name: 'AI', icon: '/skills/ai.png' },
  { id: 'skill-13', name: 'Framer Motion', icon: '/skills/framer.png' },
  { id: 'skill-14', name: 'ThreeJS', icon: '/skills/threejs.png' },
  { id: 'skill-15', name: 'NextJS', icon: '/skills/nextjs.png' },
  { id: 'skill-16', name: 'NodeJS', icon: '/skills/nodejs.png' },
  { id: 'skill-17', name: 'MongoDB', icon: '/skills/mongodb.png' },
  { id: 'skill-18', name: 'Github', icon: '/skills/github.png' },
]

// Reviews
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
  {
    id: 'review-1',
    image: '/reviews/client-1.png',
    name: 'Andi Prasetyo',
    comment:
      "Saya beberapa kali berdiskusi dengan Maidi terkait hal teknis, terutama di area programming dan jaringan. Yang saya lihat, dia punya cara berpikir yang cukup sistematis dan tidak terburu-buru dalam menjelaskan. Hal yang menurut saya cukup menonjol adalah kemampuannya menyederhanakan konsep yang sebenarnya cukup kompleks, tanpa membuatnya kehilangan inti.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    id: 'review-2',
    image: '/reviews/client-2.png',
    name: 'Fajar Ramadhan',
    comment:
      "Awalnya gue bener-bener nggak ngerti soal Python 😅 bahkan buat ngerti logikanya aja susah. Tapi setelah beberapa kali diajarin dan dikasih contoh langsung, mulai kebayang pelan-pelan. Sekarang gue udah bisa ngerjain beberapa latihan sendiri, walaupun masih belajar juga.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    id: 'review-3',
    image: '/reviews/client-3.png',
    name: 'Dewi Lestari',
    comment:
      "Belajarnya terasa lebih ringan dibanding yang saya bayangkan. Penjelasannya cukup jelas dan tidak terburu-buru, jadi bisa diikuti dengan nyaman. Yang paling membantu itu karena langsung ada praktik, jadi tidak hanya teori saja.",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    id: 'review-4',
    image: '/reviews/client-4.png',
    name: 'Rizky Saputra',
    comment:
      "Pernah kerja bareng di beberapa hal kecil, dan dia termasuk orang yang nggak pasif. Kalau ada masalah, langsung dicoba cari solusi, bukan nunggu diarahkan terus.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    id: 'review-5',
    image: '/reviews/client-5.png',
    name: 'Bayu Nugroho',
    comment:
      "Penjelasannya lebih ke praktik, jadi gampang kebayang cara kerjanya.",
    stars: [1, 1, 1, 1, 1],
  },
    {
    id: 'review-6',
    image: '/reviews/client-6.png',
    name: 'Renata Afrilia A.',
    comment:
      "Di ajarin di sekolah sama Kak Dani jadi asik dan enggak ngebosenin banyak praktek. Kak Dani kalau ngajarin gampang dimengerti.",
    stars: [1, 1, 1, 1, 1],
  },
    {
    id: 'review-7',
    image: '/reviews/client-7.png',
    name: 'Defanny',
    comment:
      "Bagus cara ngajarinnya, dari yang awal gatau pelajaran informatika karena baru naik smp, jadi tau. Dan cara ngajarnya juga pelan' ga buru' jadi lebih bikin lebih paham.Top deh.",
    stars: [1, 1, 1, 1, 1],
  },
    {
    id: 'review-8',
    image: '/reviews/client-8.png',
    name: 'Aura',
    comment:
      "Pak Dani cara ngajarnya praktek jadi seru kalo belajar ,ngajar nya juga dibuat mudah karena dia ngajar pelan -pelan tapi pasti.",
    stars: [1, 1, 1, 1],
  },
    {
    id: 'review-9',
    image: '/reviews/client-9.png',
    name: 'ferlita puspita ayumi',
    comment:
      "awal sebelum kak dani masuk di indriasana itu informatika nya belum berjalan kaya belum ada guru yang bener' gtu kak itu kalo ga salah waktu kelas 8, terus sehabis nya kak dani masuk itu informatika nya berjalan kalo di ajari kak dani gtu langsung agak paham pembelajaran informatika apalagi pas di lab itu di ajari komputer cara nya dan juga kak dani orang nya asik apalagi pas di ajari itu pelan' tapi paham.",
    stars: [1, 1, 1, 1, 1],
  },
    {
    id: 'review-7',
    image: '/avatar/client-6.png',
    name: 'Nicolas Azamt',
    comment:
      "Selama aku sekolah, jarang banget ketemu guru kayak Kak Dani, meskipun jarang teori dan lebih ke praktek tapi sangat mudah dipahami. Andai semua guru kayak Kak Dani pasti kita semangat sekolah.",
    stars: [1, 1, 1, 1, 1],
  },
]

// Projects
export const projectsData = [
{
  id: "smartcar-avoidance",
  name: "Robotics Mentorship Program",
  desc: "An autonomous car that detects and avoids obstacles using ultrasonic sensors.",
  url: "/projects/smartcar.jpg",
  tech: [  "Arduino",
  "C/C++",
  "Embedded Systems",
  "Sensor Integration",
  "Control Systems",
  "Robotics Education"],
},
  // {
  //   id: "tech-trekker",
  //   name: "TechTrekker.net",
  //   desc: "A technology news and review site covering the latest gadgets, software updates, and trends in the tech industry.",
  //   url: "/projects/image-2.jpg",
  //   tech: ["Figma", "Photoshop"],
  // },
  // {
  //   id: "cozy-nest-homes",
  //   name: "CozyNestHomes.org",
  //   desc: "A resource for homeowners and renters alike, offering tips on interior design, home improvement projects, and sustainable living practices.",
  //   url: "/projects/image-3.jpg",
  //   tech: ["HTML", "CSS", "JavaScript"],
  // },
  // {
  //   id: "wander-luxe-travels",
  //   name: "WanderLuxeTravels.co",
  //   desc: "A travel website that provides luxury travel guides, destination reviews, and tips for planning unforgettable vacations.",
  //   url: "/projects/image-4.jpg",
  //   tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  // },
  // {
  //   id: "byte-boosters",
  //   name: "ByteBoosters.io",
  //   desc: "A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.",
  //   url: "/projects/image-5.jpg",
  //   tech: ["Figma", "ReactJS", "TailwindCSS", "CSS"],
  // },
  // {
  //   id: "green-leaf-gardens",
  //   name: "GreenLeafGardens.biz",
  //   desc: "An online store and community hub for gardening enthusiasts, featuring a wide range of plants, gardening tools, and expert advice.",
  //   url: "/projects/image-6.jpg",
  //   tech: ["ReactJS", "TailwindCSS", "CSS", "FramerMotion"],
  // },
  // {
  //   id: "pixel-perfect-designs",
  //   name: "PixelPerfectDesigns.info",
  //   desc: "A graphic design portfolio showcasing the work of a freelance designer, including branding, web design, and illustration projects.",
  //   url: "/projects/image-7.jpg",
  //   tech: ["NextJS", "FramerMotion"],
  // },
  // {
  //   id: "harmony-health-hub",
  //   name: "HarmonyHealthHub.com",
  //   desc: "A wellness website focused on holistic health, offering articles on nutrition, fitness, mental health, and alternative therapies.",
  //   url: "/projects/image-8.jpg",
  //   tech: ["NextJS", "ReactJS", "FramerMotion"],
  // },
  // {
  //   id: "stellar-skies-astronomy",
  //   name: "StellarSkiesAstronomy.org",
  //   desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
  //   url: "/projects/image-9.jpg",
  //   tech: ["ReactJS", "JavaScript", "ThreeJS"],
  // },
  // {
  //   id: "urban-eats-delights",
  //   name: "UrbanEatsDelights.com",
  //   desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
  //   url: "/projects/image-10.jpg",
  //   tech: ["NextJS", "ThreeJS"],
  // },
];



export const projectsButton = [
  'All',
  "Arduino",
  "Embedded Systems",
  "Sensor Integration",
  "Control Systems",
  "Robotics Education",
  'ReactJS',
  'NextJS',
  'FramerMotion',
  'ThreeJS',
]

// Pricing Plans
export const pricingPlans = [
  {
    id: 'plan-basic',
    title: 'Starter',
    pricing: '$20 - $50',
    features: [
      'Basic IT & Programming mentoring',
      'Introduction to Python / Networking',
      'Guided exercises & simple tasks',
      'Q&A support',
      '1–2 sessions',
    ],
    recommended: 'Beginner students who want to start learning technology',
  },
  {
    id: 'plan-standard',
    title: 'Learning Package',
    pricing: '$60 - $120',
    features: [
      'Structured learning (Python / Networking)',
      'Hands-on practice & mini projects',
      'Debugging guidance',
      'Basic project assistance',
      '4–6 sessions',
    ],
    recommended: 'Students who want to build real understanding and practice',
  },
  {
    id: 'plan-premium',
    title: 'Project & Mentoring',
    pricing: '$150 - $300',
    features: [
      'Personal mentoring (custom learning path)',
      'Project-based learning (Python / IoT / basic web)',
      'Step-by-step guidance until project completion',
      'Problem-solving & system thinking approach',
      'Priority support & consultation',
    ],
    recommended: 'Students who want to build real projects and deeper skills',
  },
]

import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Q & A
export const questions = [
  {
    question: 'What can I learn here?',
    answer:
      'The main focus is on programming fundamentals (Python), computer networking, and basic technology concepts. You can also learn to build simple projects such as automation scripts, network simulations, or basic IoT.',
  },
  {
    question: 'Is this suitable for beginners?',
    answer:
      'Yes. Most of the material is designed for beginners. Everything is explained step by step and adjusted to your current level.',
  },
  {
    question: 'How does the learning process work?',
    answer:
      'The learning process is structured and practical. It usually starts with a short explanation, followed by hands-on exercises or small projects to help you understand better.',
  },
  {
    question: 'Do I need prior coding experience?',
    answer:
      'No. Many students start from zero. As long as you are willing to learn and practice consistently, you will be able to follow along.',
  },
  {
    question: 'How long until I can build my own project?',
    answer:
      'It depends on your learning pace, but usually within a few sessions you can already start building simple projects with guidance.',
  },
  {
    question: 'Will I get help if I get stuck?',
    answer:
      'Yes. You will be guided during the learning process and when working on exercises. The goal is not just to solve the problem, but to understand how to approach it.',
  },
  {
    question: 'Can I request specific topics?',
    answer:
      'Yes. The material can be adjusted based on your goals, whether you want to focus on Python, networking, or a specific project.',
  },
  {
    question: 'Is it mostly theory or practice?',
    answer:
      'The focus is on practice. Every concept is followed by hands-on implementation so you can clearly understand how it works.',
  },
  {
    question: 'How do we communicate during the sessions?',
    answer:
      'Communication is usually done through chat or online meetings. You can also ask questions outside the session if needed.',
  },
  {
    question: 'What is the main goal of the learning?',
    answer:
      'The goal is to help you understand concepts and gradually build your own projects, not just follow tutorials without real results.',
  },
]
import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import PriceTag3LineIcon from 'remixicon-react/PriceTag3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'reviews',
    name: 'Reviews',
    icon: <UserStarLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'pricing',
    name: 'Pricing',
    icon: <PriceTag3LineIcon />,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: 'questions',
    name: 'Questions',
    icon: <QuestionAnswerLineIcon />,
  },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
