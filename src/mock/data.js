import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hugo | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Hugo Cullinan',
  subtitle: 'I\'m a keen Software Engineer',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'bwheadshot.jpg',
  paragraphOne: 'I have recently discontinued in the hospitality industry as a chef, and have decided to exercise my mind in the field of software engineering. It became evident that my desire to learn new things, and my constant curiosity of how and why things work was a big factor in working my way up through the ranks at my previous job.',
  paragraphTwo: 'I chose software engineering as I find the problem solving aspect extremely gratifying, and I believe the soft skills I have acquired will be pertinent in such a collaborative field. I am extremely excited to begin my career in the industry and get stuck into some inspiring ideas.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'funfacts.png',
    title: 'Fun Facts Blog',
    info: 'Blog style app for posting interesting facts',
    info2: 'Includes user registration',
    url: 'https://subject-blog-app.herokuapp.com/',
    repo: 'https://github.com/CullsGit/project1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gamesarcade.png',
    title: 'Games Arcade',
    info: 'Collaborative project built with three other course mates',
    info2: 'Learnt the importance of effective communication and pair programming',
    url: 'https://cullsgit.github.io/games/',
    repo: 'https://github.com/CullsGit/games', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tictactoe.png',
    title: 'Swords and Shields',
    info: 'Vanilla JavaScript animations',
    info2: 'Utilises CSS flex design',
    url: 'https://cullsgit.github.io/project0/',
    repo: 'https://github.com/CullsGit/project0', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I would love to chat about all things programming!',
  btn: 'Hit me up!',
  email: 'hugo.cullinan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hugo-cullinan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/CullsGit',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
