// Hero.js
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon';
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon';
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';

export const heroIcons = [
  <InstagramLineIcon key="instagram" />,
  <FacebookCircleLineIcon key="facebook" />,
  <DribbbleLineIcon key="dribbble" />,
  <YoutubeLineIcon key="youtube" />,
  <GithubLineIcon key="github" />
];

// AboutMe.js
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon';
import GroupLineIcon from 'remixicon-react/GroupLineIcon';
import AwardFillIcon from 'remixicon-react/AwardFillIcon';


export const aboutData = [
  {
    title: 'Github Repos',
    amount: 348,
    icon: <GithubFillIcon />,
    
  },
  {
    title: 'Successful Projects',
    amount: 227,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Satisfied Clients',
    amount: 176,
    icon: <GroupLineIcon />,
  },
  {
    title: 'Awards and Recognition',
    amount: 120,
    icon: <AwardFillIcon />,
  }
];
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon';
import ArrowLeftFillIcon from 'remixicon-react/ArrowLeftFillIcon';



export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftFillIcon />;


export const aboutText = "I'm Talha Tariq, a Full Stack Developer specializing in end-to-end web application development. Skilled in JavaScript, HTML, CSS, React.js, Node.js, and MongoDB. Experienced with Next.js, Bootstrap, Tailwind CSS, and Framer Motion for creating modern, responsive applications. Proficient in Python for backend development and SQL for database management. Expertise extends to Generative AI, enabling implementation of innovative AI-driven solutions. Dedicated to building scalable, high-performance, and user-friendly applications through full-stack technology integration";



// Skills Data
export const skillsData = [
  // 🌐 Core Web
  {
    name: "HTML",
    icon: "/html/HTML.svg",
  },
  {
    name: "CSS",
    icon: "/css/CSS.svg",
  },
  {
    name: "JavaScript",
    icon: "/javaScript/JavaScript.svg",
  },
  {
    name: "TypeScript",
    icon: "/typeScript/TypeScript.svg",
  },

  // 🎨 Styling & UI
  {
    name: "Bootstrap",
    icon: "/bootstrap/Bootstrap.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind/TailwindCSS-Light.svg",
  },
  {
    name: "Framer Motion",
    icon: "/framerMotion/framer-motion.svg",
  },

  // ⚛️ Frontend Frameworks
  {
    name: "ReactJS",
    icon: "/react/React-Light.svg",
  },
  {
    name: "NextJS",
    icon: "/next/NextJS-Light.svg",
  },
  {
    name: "VueJS",
    icon: "/vue/VueJS-Light.svg",
  },
  {
    name: "ViteJS",
    icon: "/vite/Vite-Light.svg",
  },

  // 🖥️ Backend & Database
  {
    name: "NodeJS",
    icon: "/node/NodeJS-Light.svg",
  },
  {
    name: "ExpressJS",
    icon: "/express/ExpressJS-Light.svg",
  },
  {
    name: "MongoDB",
    icon: "/mongo/MongoDB.svg",
  },

  // 🔧 Tools
  {
    name: "GitHub",
    icon: "/github/Github-Light.svg",
  },
];


import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'

import StarFillIcon from 'remixicon-react/StarFillIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

export const starIcons = [
  <StarFillIcon key="full" />,
  <StarHalfLineIcon key="half" />
 
]

export const arrowIcons = [
  <ArrowLeftSLineIcon key="left" />,
  <ArrowRightSLineIcon key="right" />
]



export const reviewsData = [

  {
    image: '/profile-pictures/user1.jpg',
    name: 'David K., Marketing Specialist',
    comment:
      "The landing page you built has boosted our lead generation significantly. It’s easy to navigate, responsive on all devices, and looks amazing. I’ve already recommended your services to colleagues!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/profile-pictures/user2.jpg',
    name: 'Emily R., Small Business Owner',
    comment:
      "I’m impressed by how quickly you understood our needs. The final product is functional, elegant, and perfectly aligned with our branding. Thank you for going above and beyond!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/profile-pictures/user3.jpg',
    name: 'James L., Startup Founder',
    comment:
      "Your design turned our vision into reality. The app’s UI is clean, intuitive, and professional. We’ve received great feedback from investors and users alike!",
    stars: [1, 1, 1, 0.5, 0],
  },
  {
    image: '/profile-pictures/user4.jpg',
    name: 'Sophia M., Blogger & Content Creator',
    comment:
      "I absolutely love the website you made for my blog! It’s fast, SEO-friendly, and beautifully laid out. I’ve seen a huge increase in traffic since the launch.",
    stars: [1, 1, 1, 1, 1],
  },

];







export const experienceData = [
  {
    year: 1,
    title: 'Foundation and Basics',
    education: 'High School Diploma: Focus on computer science, mathematics, and art/design courses.',
    experience: [
      'Basic HTML/CSS: Learn through online tutorials and courses.',
      'Personal Projects: Create simple personal websites or blogs.',
    ],
  },
  {
    year: 2,
    title: 'Advanced Learning and Early Experience',
    education: 'Associate\'s Degree in Web Development or Design: Enroll in a 2-year program covering web development and design principles.',
    experience: [
      'Freelance Work: Take on small freelance projects to build a portfolio.',
      'Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.',
    ],
  },
  {
    year: 3,
    title: 'Specialized Education and Real-World Application',
    education: 'Bachelor\'s Degree in Computer Science or a related field: Deepen understanding of software development, algorithms, and systems.',
    experience: [
      'Internships: Participate in tech company internships to gain industry experience.',
      'Open Source Contributions: Contribute to GitHub projects to improve collaboration and coding skills.',
      'Advanced Technologies: Start exploring React, Node.js, and APIs in more depth.',
    ],
  },
];

