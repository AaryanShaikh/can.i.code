import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode, FaCss3Alt, FaReact } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { VscGithub } from 'react-icons/vsc'
import { AiFillHtml5 } from 'react-icons/ai'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiNextdotjs } from 'react-icons/si'

let getAge = () => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1999;
  return `${age} Years`;
}

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/projects',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Aaryan',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Shaik',
  },

  {
    id: 3,
    title: 'Age : ',
    description: getAge(),
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Interests : ',
    description: 'Anime, Movies & Series',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'India, Goa',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'aayanshaikh27638@gmail.com',
  },

  {
    id: 8,
    title: 'GitHub : ',
    description: 'AaryanShaikh',
  },

  {
    id: 9,
    title: 'Instagram : ',
    description: 'its.me.cypher',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Hindi, Urdu',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '01/2022 - PRESENT',
    title: 'React Developer <span> Intuio </span>',
    desc: 'In my development work, I was building functional UIs with React, utilizing Socket.io for real-time updates. Redux for effective state management. Implemented various features like dynamic console logs, user detection, resizable components, search highlighting, auto-completion, mapping, Stripe integration, shortcut keys, and multi-tab UI.',
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '12/2021 - 01/2022',
    title: 'React Developer <span> Kamsoft </span>',
    desc: 'Built car listing UI and filters using React functional components. Utilized Ant Design for dashboard forms and tables. Developed PHP APIs for data retrieval from the database. Implemented Redux for efficient state management.',
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '07/2021 - 12/2021',
    title: 'React Developer <span> ProGrad </span>',
    desc: 'Developed multiple projects using React. Integrated covid19india.org API using Axios for a Covid19 dashboard. Implemented hooks and states for projects like mini-cake-builder and quiz app.',
  },
  {
    id: 7,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '08/2019 - 12/2019',
    title: 'Frontend Developer <span> Crocs & Cops  </span>',
    desc: "Utilized HTML, CSS, and Bootstrap to design and develop the entire website's user interface. Employed JavaScript and jQuery to enhance interactivity, such as implementing gallery image functionalities and form validations. Ensured a seamless user experience through responsive and visually appealing designs.",
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'M.C.A <span> Vellore Institute of Technology </span>',
    desc: '90%',
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'B.C.A <span> M.E.S College of Arts and Commerce </span>',
    desc: '89.8%',
  },
  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Computer Technique <span> M.E.S College of Arts and Commerce </span>',
    desc: '67%',
  },
  {
    id: 8,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'School <span> Vidya Mandir Secondary High School </span>',
    desc: '61.3%',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '95',
    iconB: <AiFillHtml5 className='skillsIcoB4' />,
    iconA: <AiFillHtml5 className='skillsIcoAf' />
  },
  {
    id: 2,
    title: 'CSS',
    percentage: '90',
    iconB: <FaCss3Alt className='skillsIcoB4' />,
    iconA: <FaCss3Alt className='skillsIcoAf' />
  },
  {
    id: 3,
    title: 'JAVASCRIPT',
    percentage: '65',
    iconB: <TbBrandJavascript className='skillsIcoB4' />,
    iconA: <TbBrandJavascript className='skillsIcoAf' />
  },
  {
    id: 4,
    title: 'REACT JS',
    percentage: '75',
    iconB: <FaReact className='skillsIcoB4' />,
    iconA: <FaReact className='skillsIcoAf' />
  },
  {
    id: 5,
    title: 'NEXT JS',
    percentage: '55',
    iconB: <SiNextdotjs className='skillsIcoB4' />,
    iconA: <SiNextdotjs className='skillsIcoAf' />
  },
  {
    id: 6,
    title: 'GITHUB',
    percentage: '55',
    iconB: <VscGithub className='skillsIcoB4' />,
    iconA: <VscGithub className='skillsIcoAf' />
  },
];

export const portfolio = [
  {
    id: 71,
    img: "../assets/proj71.webp",
    title: "Memory Flip Game",
    category: "next",
    link: "https://memory-flip-game-five.vercel.app/",
    type:"website • nextjs • game",
    desc: "My Next.js Memory Flip Game is an interactive and engaging game built using Next.js. Players flip cards to match pairs, testing their memory and concentration. With smooth animations and a user-friendly interface, the game offers a fun and responsive experience on any device, making it both challenging and entertaining.",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.vercel.com',
      },
      {
        icon: '',
        title: '',
        desc: "My Next.js Memory Flip Game!",
      },
    ],
  },
  {
    id: 70,
    img: "../assets/proj70.webp",
    title: "Memory Game",
    category: "next",
    link: "https://memory-game-phi-murex.vercel.app/",
    type:"website • nextjs • game",
    desc: "My Next.js Memory Game is a fun, interactive game built with Next.js. It challenges players to match pairs of cards by flipping them over, testing their memory and concentration. The game features smooth animations, dynamic gameplay, and a responsive design, providing an engaging experience across all devices.",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.vercel.com',
      },
      {
        icon: '',
        title: '',
        desc: "My Next.js Memory Game!",
      },
    ],
  },
  {
    id: 69,
    img: "../assets/proj69.webp",
    title: "My Portfolio (2023)",
    category: "next",
    link: "https://can-i-code.vercel.app/",
    type:"website • nextjs • portfolio",
    desc: "My 2023 portfolio showcase is built using Next.js, Redux, and Framer Motion. It highlights my work and skills with a modern, dynamic design, featuring smooth animations and seamless user interactions. The portfolio is optimized for performance, utilizing Next.js for fast rendering, Redux for state management, and Framer Motion for engaging transitions.",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'bit.ly/CanAaryanCode',
      },
      {
        icon: '',
        title: '',
        desc: "My 2023 portfolio showcase build in Next.js, Redux & Framer Motion.",
      },
    ],
  },
  {
    id: 68,
    img: "../assets/proj68.webp",
    title: "Aaryan's Memoirs",
    category: "next",
    link: "https://cypher-watchlist.vercel.app/",
    type:"website • nextjs • gallery",
    desc: "My personal site features a comprehensive list of all the anime, series, games, and movies I’ve watched or am currently watching. It serves as a curated collection, allowing visitors to explore my entertainment preferences. The site offers detailed information, including ratings, reviews, and progress updates for each title.",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'bit.ly/AaryanMemoirs',
      },
      {
        icon: '',
        title: '',
        desc: "A Personal site which has a list of all anime, series, games or movies i've watched or is watching.",
      },
    ],
  },
  {
    id: 67,
    img: "../assets/proj67.webp",
    title: "Sort It",
    category: "next",
    link: "https://aaryanshaikh.github.io/sort.it/",
    type:"website • nextjs • algorithm",
    desc:"An animated bars sorter is a visual tool that demonstrates sorting algorithms through animation. It displays bars of varying heights, each representing a data element. As the algorithm runs, the bars move and rearrange in real-time, providing an interactive and engaging way to understand how different sorting methods work.",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "An animated bars sorter.",
      },
    ],
  },
  {
    id: 63,
    img: "../assets/proj45.webp",
    title: "My Portfolio (2022)",
    category: "next",
    link: "https://github.com/AaryanShaikh/myportfolio",
    type:"website • react • portfolio",
    desc: "My portfolio is a fully responsive and interactive website built using React. It is designed to adapt seamlessly across various devices and screen sizes, offering an engaging user experience. The portfolio showcases my skills, projects, and accomplishments, with dynamic features that highlight my expertise in web development using React.",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "My Portfolio fully responsive and interactive build using React.",
      },
    ],
  },
  {
    id: 22,
    img: "../assets/proj12.webp",
    title: 'Instagram Clone',
    category: "android",
    link: "https://github.com/AaryanShaikh/Instagram-Clone",
    type:"app • java • social",
    desc: "An Instagram clone is a social media app solution designed to help entrepreneurs build an app similar to Instagram. It offers a comprehensive blueprint, showcasing the features and functionalities that the app will include, allowing businesses to create a platform for sharing photos, videos, and social interactions just like Instagram.",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Android Studio',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Instagram clone is a social media app software solution to build an app similar to Instagram. It gives an idea to the entrepreneurs as to the nature of the application they will be getting.",
      },
    ],
  },
  {
    id: 21,
    img: "../assets/proj11.webp",
    title: 'Hex Converter App',
    category: "android",
    link: "https://github.com/AaryanShaikh/Hex-Converter",
    type:"app • java • personal",
    desc: "This app allows users to easily convert Red, Green, and Blue (RGB) values into their corresponding Hexadecimal color code. By simply inputting the RGB values, the app generates the precise hex code, making it a useful tool for designers, developers, and anyone working with colors in digital formats.",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Android Studio',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "An App to convert Red,Green and Blue values to their corresponding Hexadecimal Number.",
      },
    ],
  }
];

export const themes = [
  {
    id: 1,
    img: "../assets/purple.png",
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: "../assets/red.png",
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: "../assets/blueviolet.png",
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: "../assets/blue.png",
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: "../assets/goldenrod.png",
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: "../assets/magenta.png",
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: "../assets/yellowgreen.png",
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: "../assets/orange.png",
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: "../assets/green.png",
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: "../assets/yellow.png",
    color: 'hsl(42, 100%, 50%)',
  },
];
