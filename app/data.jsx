import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode, FaCss3Alt, FaReact, FaPuzzlePiece } from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { VscGithub } from 'react-icons/vsc'
import { AiFillHtml5 } from 'react-icons/ai'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiNextdotjs } from 'react-icons/si'

import Theme1 from '../public/assets/purple.png';
import Theme2 from '../public/assets/red.png';
import Theme3 from '../public/assets/blueviolet.png';
import Theme4 from '../public/assets/blue.png';
import Theme5 from '../public/assets/goldenrod.png';
import Theme6 from '../public/assets/magenta.png';
import Theme7 from '../public/assets/yellowgreen.png';
import Theme8 from '../public/assets/orange.png';
import Theme9 from '../public/assets/green.png';
import Theme10 from '../public/assets/yellow.png';

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
    description: 'Urdu, English, Hindi',
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
    id: 1,
    img: "../assets/proj1.png",
    title: 'Photo Editing',
    category: "vanilla",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
      {
        icon: '',
        title: '',
        desc: "An online market with login/Reg using localStorage(), Form validation using regex, Toast notifications, Search bar, Filters, Item's data fetched using mock API, Dark/Light theme & a soft neumorphic design",
      },
    ]
  },

  {
    id: 1,
    img: "../assets/project-1.jpeg",
    title: 'Photo Editing',
    category: "vanilla",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
      {
        icon: '',
        title: '',
        desc: "An online market with login/Reg using localStorage(), Form validation using regex, Toast notifications, Search bar, Filters, Item's data fetched using mock API, Dark/Light theme & a soft neumorphic design",
      },
    ]
  },

  {
    id: 2,
    img: "../assets/project-2.jpg",
    title: 'Website Design',
    category: "react",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
      {
        icon: '',
        title: '',
        desc: "An online market with login/Reg using localStorage(), Form validation using regex, Toast notifications, Search bar, Filters, Item's data fetched using mock API, Dark/Light theme & a soft neumorphic design",
      },
    ]
  },

  {
    id: 3,
    img: "../assets/project-3.jpeg",
    title: 'Video Editing',
    category: "next",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
      {
        icon: '',
        title: '',
        desc: "An online market with login/Reg using localStorage(), Form validation using regex, Toast notifications, Search bar, Filters, Item's data fetched using mock API, Dark/Light theme & a soft neumorphic design",
      },
    ]
  },

  {
    id: 4,
    img: "../assets/project-4.jpeg",
    title: 'Video Editing',
    category: "unity",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
      {
        icon: '',
        title: '',
        desc: "An online market with login/Reg using localStorage(), Form validation using regex, Toast notifications, Search bar, Filters, Item's data fetched using mock API, Dark/Light theme & a soft neumorphic design",
      },
    ]
  },

  {
    id: 5,
    img: "../assets/project-5.jpg",
    title: 'Landing Page',
    category: "android",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
      {
        icon: '',
        title: '',
        desc: "An online market with login/Reg using localStorage(), Form validation using regex, Toast notifications, Search bar, Filters, Item's data fetched using mock API, Dark/Light theme & a soft neumorphic design",
      },
    ]
  },

  {
    id: 6,
    img: "../assets/project-6.jpg",
    title: 'Photo Editing',
    category: "photoshop",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
      {
        icon: '',
        title: '',
        desc: "An online market with login/Reg using localStorage(), Form validation using regex, Toast notifications, Search bar, Filters, Item's data fetched using mock API, Dark/Light theme & a soft neumorphic design",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
