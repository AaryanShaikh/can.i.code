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
    id: 68,
    img: "../assets/proj68.png",
    title: "Aaryan's Memoirs",
    category: "next",
    link: "https://cypher-watchlist.vercel.app/",
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
        desc: "A Personal site which has a list of all anime, series, games or movies i've watched or is watching.",
      },
    ],
  },
  {
    id: 67,
    img: "../assets/proj67.png",
    title: "Sort It",
    category: "next",
    link: "https://aaryanshaikh.github.io/sort.it/",
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
    id: 66,
    img: "../assets/proj66.png",
    title: "Covid Programming Challenge",
    category: "react",
    link: "https://github.com/AaryanShaikh/Aaryan-Market",
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
        desc: "Implemented user authentication with registration and login functionality, including validation checks. Utilized toast notifications for user feedback. Integrated API calls to fetch and display country-wise COVID-19 data, including India's state-wise data on an interactive map. Formatted numerical values for easy readability. Allowed users to select and save favorite countries to the database. Personalized user experience with displayed name and logout option. Streamlined login experience for returning users.",
      },
    ],
  },
  {
    id: 65,
    img: "../assets/proj47.png",
    title: "Vanilla Market",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Aaryan-Market",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "An online market with login/Reg using localStorage(), Form validation using regex, Toast notifications, Search bar, Filters, Item's data fetched using mock API, Dark/Light theme & a soft neumorphic design.",
      },
    ],
  },
  {
    id: 64,
    img: "../assets/proj46.png",
    title: "React Market",
    category: "react",
    link: "https://github.com/AaryanShaikh/mini-project-react-pro-market-shopping-app",
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
        desc: "A market app which fetches fruits & vegetables data from an API & allows the user to select any fruits or vegetable in any quantity & then add it to the cart, which then the user can buy after confirming.",
      },
    ],
  },
  {
    id: 63,
    img: "../assets/proj45.png",
    title: "My Portfolio (2022)",
    category: "react",
    link: "https://github.com/AaryanShaikh/myportfolio",
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
    id: 62,
    img: "../assets/proj44.png",
    title: "React Book Store",
    category: "react",
    link: "https://github.com/AaryanShaikh/react-probooks",
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
        desc: "An online book library which fetches book data from an API & allows users to keep records of the books they have read, liked & disliked. They can also search for the books, build using React.",
      },
    ],
  },
  {
    id: 61,
    img: "../assets/proj43.png",
    title: "React Quiz App",
    category: "react",
    link: "https://github.com/AaryanShaikh/project-Builder-stage-IV-quiz-complete",
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
        desc: "A Quiz web application build using React.",
      },
    ],
  },
  {
    id: 60,
    img: "../assets/proj42.png",
    title: "React Pro-Trips",
    category: "react",
    link: "https://github.com/AaryanShaikh/react-protrips",
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
        desc: "A custom trip planning app which keeps track of all the trips, allows you to add trips and filter through types of trips build using React.",
      },
    ],
  },
  {
    id: 59,
    img: "../assets/proj41.png",
    title: "React Pro-Nutrition",
    category: "react",
    link: "https://github.com/AaryanShaikh/lab-react-pronutrition",
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
        desc: "A nutrition app which tracks the calories of everything you eat build using React.",
      },
    ],
  },
  {
    id: 58,
    img: "../assets/proj40.png",
    title: "React Notepad",
    category: "react",
    link: "https://github.com/AaryanShaikh/project-builder-smartwatch-timer",
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
        desc: "A Custom notepad using React.",
      },
    ],
  },
  {
    id: 57,
    img: "../assets/proj39.png",
    title: "Smart Watch",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/project-builder-smartwatch-timer",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A Smart Watch which shows the current time, messages, media player to play songs and also a stopwatch.",
      },
    ],
  },
  {
    id: 56,
    img: "../assets/proj38.png",
    title: "Movie Mania",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/mini-project-builder-movie-mania",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A movie web app which displays the current playing, popular and the upcoming movies of 5 different languages built using TMDB api.",
      },
    ],
  },
  {
    id: 55,
    img: "../assets/proj37.png",
    title: "Live News",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/lab-js-live-news",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Displays the current live news of India & US using news api.",
      },
    ],
  },
  {
    id: 54,
    img: "../assets/proj36.png",
    title: "Weather Forcast",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/weather-forecast",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Displays the current weather using OpenWeather api.",
      },
    ],
  },
  {
    id: 53,
    img: "../assets/proj35.png",
    title: "Contact Book",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/lab-js-prograd-contacts",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Retrieve all the contacts from the api using Promise.",
      },
    ],
  },
  {
    id: 52,
    img: "../assets/proj34.png",
    title: "Online Expense Tracker",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/lab-js-prograd-expense-tracker",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Keep track of your expenses online with LocalStorage.",
      },
    ],
  },
  {
    id: 51,
    img: "../assets/proj33.png",
    title: "Online Burger Maker",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/lab-brrrgrrr",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Decorate and Design the burger of your choice.",
      },
    ],
  },
  {
    id: 50,
    img: "../assets/proj32.png",
    title: "Snakes and Ladders Game",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Snakes-and-Ladders-game",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Snake and Ladders Game made with pure JS and no HTML.",
      },
    ],
  },
  {
    id: 49,
    img: "../assets/proj31.png",
    title: "Mini Monopoly Game",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Mini-Monopoly-Game",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A minified version of the Monopoly Game.",
      },
    ],
  },
  {
    id: 48,
    img: "../assets/proj30.png",
    title: "Cake World",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/mini-project-builder-cake-world",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A Simple Mini Cake Builder.",
      },
    ],
  },
  {
    id: 47,
    img: "../assets/proj29.png",
    title: "CricPro ScoreBoard",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/CricPro-ScoreBoard",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A Simple Pro Cricket ScoreBoard using HTML, CSS and Javascript.",
      },
    ],
  },
  {
    id: 46,
    img: "../assets/proj28.png",
    title: "UEFA Footbal Penalty Game",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/UEFA-Footbal-Penalty-Game",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A UEFA football penalty game with 4 teams in an Elimination styled match.",
      },
    ],
  },
  {
    id: 45,
    img: "../assets/proj27.png",
    title: "IPL Super Over Game",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Super-Over",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A small game based on IPL Super Over.",
      },
    ],
  },
  {
    id: 44,
    img: "../assets/proj26.png",
    title: "PlayStore Installing Animation",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Play-Store-Installing-animation",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Replication of the Google Play Store Installing Animation.",
      },
    ],
  },
  {
    id: 43,
    img: "../assets/proj25.png",
    title: "Live Workplace",
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Live-Workplace",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A virtual workplace in which the analog clock shows the current time, calendar shows the current day-month-year and mobile whose screen shows the current time in digital format and the battery shows the laptop battery.",
      },
    ],
  },
  {
    id: 42,
    img: "../assets/proj65.png",
    title: "Logo Effect",
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/logo_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "An image logo effect in photoshop.",
      },
    ],
  },
  {
    id: 41,
    img: "../assets/proj64.png",
    title: "Slice Effect",
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/slice_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A sliced text effect in photoshop.",
      },
    ],
  },
  {
    id: 40,
    img: "../assets/proj63.png",
    title: "Two Tone Effect",
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/two_tone_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A two tone image effect in photoshop.",
      },
    ],
  },
  {
    id: 39,
    img: "../assets/proj62.png",
    title: "Photo Mosaic Effect",
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/photo_mosaic_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "An image mosiac made by combining all my images in photoshop.",
      },
    ],
  },
  {
    id: 38,
    img: "../assets/proj24.png",
    title: "The Unknown",
    category: "unity",
    link: "https://drive.google.com/drive/folders/1BD0_eNlIcHKIlXGZbfxLs3UmNcZKlQNs?usp=sharing",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Unity, PlayMaker',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.drive.google.com',
      },
      {
        icon: '',
        title: '',
        desc: "A Third Person Shooter Game which is inspired by WorldWarZ. This is a complete game which consists of start menu, cutscenes,sounds,UI,In-Game Tutorial etc.",
      },
    ],
  },
  {
    id: 37,
    img: "../assets/proj23.png",
    title: "Bullet Time",
    category: "unity",
    link: "https://drive.google.com/drive/folders/1BD0_eNlIcHKIlXGZbfxLs3UmNcZKlQNs?usp=sharing",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Unity, PlayMaker',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.drive.google.com',
      },
      {
        icon: '',
        title: '',
        desc: "A First-person Shooter Game with a unique mechanism in which when the player stops the time stops, bringing a unique experience to the user.",
      },
    ],
  },
  {
    id: 36,
    img: "../assets/proj22.png",
    title: "Cypher in Wonderland",
    category: "unity",
    link: "https://drive.google.com/drive/folders/1BD0_eNlIcHKIlXGZbfxLs3UmNcZKlQNs?usp=sharing",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Unity, PlayMaker',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.drive.google.com',
      },
      {
        icon: '',
        title: '',
        desc: "A short animated video made in Unity.",
      },
    ],
  },
  {
    id: 35,
    img: "../assets/proj21.png",
    title: "Code CS",
    category: "unity",
    link: "https://drive.google.com/drive/folders/1BD0_eNlIcHKIlXGZbfxLs3UmNcZKlQNs?usp=sharing",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Unity, PlayMaker',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.drive.google.com',
      },
      {
        icon: '',
        title: '',
        desc: "A First Person Shooter game with cool area animations,enemy death animation and gun animations.",
      },
    ],
  },
  {
    id: 34,
    img: "../assets/proj20.png",
    title: "Maeda's Run",
    category: "unity",
    link: "https://drive.google.com/drive/folders/1BD0_eNlIcHKIlXGZbfxLs3UmNcZKlQNs?usp=sharing",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Unity, PlayMaker',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.drive.google.com',
      },
      {
        icon: '',
        title: '',
        desc: "A 3D Endless Runner Game with HDR graphics,damage collision and animation mechanism.",
      },
    ],
  },
  {
    id: 33,
    img: "../assets/proj19.png",
    title: "Cypher's Adventure",
    category: "unity",
    link: "https://drive.google.com/drive/folders/1BD0_eNlIcHKIlXGZbfxLs3UmNcZKlQNs?usp=sharing",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Unity, PlayMaker',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.drive.google.com',
      },
      {
        icon: '',
        title: '',
        desc: "A Platformer Game in which we have to defeat the Evil robot and his army of zombies and evil generals.",
      },
    ],
  },
  {
    id: 32,
    img: "../assets/proj61.png",
    title: 'Future Tech Effect',
    category: "unity",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/my_3d_model.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Unity, PlayMaker',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A 3D model of myself made with the help of Headshot plugin & Character Creator 3.",
      },
    ],
  },
  {
    id: 31,
    img: "../assets/proj60.png",
    title: 'Future Tech Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/future_tech_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A future tech effect in photoshop.",
      },
    ],
  },
  {
    id: 30,
    img: "../assets/proj59.png",
    title: 'Chibi Toon Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/chibi_toon_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A chibi toon effect in photoshop.",
      },
    ],
  },
  {
    id: 29,
    img: "../assets/proj58.png",
    title: 'Anime Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/anime_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "An anime charater effect from an image in photoshop.",
      },
    ],
  },
  {
    id: 28,
    img: "../assets/proj18.png",
    title: 'Avatar Creator',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Avatar-Creator",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A custom avatar generator in which you can choose the hair, eyes, mouth, beard, eyebrows, facecut and so on.",
      },
    ],
  },
  {
    id: 27,
    img: "../assets/proj17.png",
    title: 'Image Filter',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Image-Filter",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Allows user to upload image and change its brightness, blur, contrast, grayscale, rotate its hue, invert it, change its opacity and so on. It also has 3 inbuild filters which can be applied.",
      },
    ],
  },
  {
    id: 26,
    img: "../assets/proj16.png",
    title: 'Text Analyzer',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Text-Analyzer",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Analyzes any text and displays the total no vowels, consonants, characters, words, unique words and lines.",
      },
    ],
  },
  {
    id: 25,
    img: "../assets/proj15.png",
    title: 'Tic Tac Toe Game',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Tic-Tac-Toe-Game",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A simulation of Tic Tac Toe Game.",
      },
    ],
  },
  {
    id: 24,
    img: "../assets/proj14.png",
    title: 'Random Color Pallete',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Random-Color-Pallete",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Generates 100 unique random colors with the hex code.",
      },
    ],
  },
  {
    id: 23,
    img: "../assets/proj13.png",
    title: 'Random Password Generator',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Random-Password-Generator",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Strong Password Generator to create secure passwords that are impossible to crack on your device without sending them across the Internet.",
      },
    ],
  },
  {
    id: 22,
    img: "../assets/proj12.png",
    title: 'Instagram Clone',
    category: "android",
    link: "https://github.com/AaryanShaikh/Instagram-Clone",
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
    img: "../assets/proj11.png",
    title: 'Hex Converter App',
    category: "android",
    link: "https://github.com/AaryanShaikh/Hex-Converter",
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
  },
  {
    id: 20,
    img: "../assets/proj10.png",
    title: 'Dhaan',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Dhaan",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Dhaan is a NGO app through which the user can donate anything from anywher to any NGO in Goa.",
      },
    ],
  },
  {
    id: 19,
    img: "../assets/proj9.png",
    title: 'My Portfolio (2021)',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/JustAnAveragePortfolio",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "The most dynamic website that contains all my personal and professional details.",
      },
    ],
  },
  {
    id: 18,
    img: "../assets/proj8.png",
    title: 'Crocs and Cops',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Virtual-Cops",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Focused on providing day to day news updates regarding Policing, Recruitment Drives, etc in the state of Goa.",
      },
    ],
  },
  {
    id: 17,
    img: "../assets/proj7.png",
    title: 'Modern Calculator',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Modern-Calculator",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Exact replica of the day-to-day Modern Calculator, with all functionalities.",
      },
    ],
  },
  {
    id: 16,
    img: "../assets/proj6.png",
    title: 'Tom and Jerry Game',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Tom-and-Jerry-Game",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A small game on Tom and Jerry, where you're play the character of Tom and have to catch Jerry.",
      },
    ],
  },
  {
    id: 15,
    img: "../assets/proj5.png",
    title: 'Computer Speaks',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Computer-Speaks",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A simulation of text-to-speech.",
      },
    ],
  },
  {
    id: 14,
    img: "../assets/proj4.png",
    title: 'Real-Time Face Detection',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Real-Time-Face-Detection",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "Detects the face and the mood using the web cam.",
      },
    ],
  },
  {
    id: 13,
    img: "../assets/proj3.png",
    title: 'Rock Paper Scissor Game',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Rock-Paper-Scissor-Game",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A simulation of Rock paper scissor Game.",
      },
    ],
  },
  {
    id: 12,
    img: "../assets/proj2.png",
    title: 'Sling Shot Game',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Sling-Shot-Game",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A simulation of the famous Angry Birds Game.",
      },
    ],
  },
  {
    id: 11,
    img: "../assets/proj1.png",
    title: 'Designing Imagination',
    category: "vanilla",
    link: "https://github.com/AaryanShaikh/Designing-Imagination",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS & JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A fully animated art gallery with login,registration and auto update gallery using PHP & MySql as the backend.",
      },
    ],
  },
  {
    id: 10,
    img: "../assets/proj57.png",
    title: 'Comic Book Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/comic_book_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A comic book effect created in photoshop.",
      },
    ],
  },
  {
    id: 9,
    img: "../assets/proj56.png",
    title: 'Fantasy Effect 2',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/fantasy_effect_2.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A fantasy image effect of above the clouds created in photoshop.",
      },
    ],
  },
  {
    id: 8,
    img: "../assets/proj55.png",
    title: 'Fantasy Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/fantasy_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A fantasy image effect of cyberpunk city created in photoshop.",
      },
    ],
  },
  {
    id: 7,
    img: "../assets/proj54.png",
    title: 'Painting Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/painting_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A painting of an image effect created in photoshop.",
      },
    ],
  },
  {
    id: 6,
    img: "../assets/proj53.png",
    title: 'Glitch Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/glitch_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A glitched image effect created in photoshop.",
      },
    ],
  },
  {
    id: 5,
    img: "../assets/proj52.png",
    title: 'Crystalized Text Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/text_effect_2.png",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A crystalized text effect created in photoshop.",
      },
    ],
  },
  {
    id: 4,
    img: "../assets/proj51.png",
    title: 'Fish In A Bulb',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/fish_in_a_bulb.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A fish in a bulb effect created in photoshop.",
      },
    ],
  },
  {
    id: 3,
    img: "../assets/proj50.png",
    title: 'Wall Painting Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/wall_painting_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A graffiti on the wall effect created in photoshop.",
      },
    ],
  },
  {
    id: 2,
    img: "../assets/proj49.png",
    title: 'Ancient Text Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/ancient_text_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "An Ancient Text effect created in photoshop.",
      },
    ],
  },
  {
    id: 1,
    img: "../assets/proj48.png",
    title: 'Vector Logo Effect',
    category: "photoshop",
    link: "https://github.com/AaryanShaikh/My-Stock/blob/main/portfolio2023/vector_logo_effect.jpg",
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
      {
        icon: '',
        title: '',
        desc: "A Vector Image effect created by a photo in photoshop.",
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
