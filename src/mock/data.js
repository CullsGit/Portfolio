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
  subtitle: `'I'm a keen Software Engineer'`,
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'bwheadshot.jpg',
  paragraphOne: `Whether it be the logistics of a single trip grocery carry or nailing a tricky parallel park, my entire day is rife with problem-solving.`,
  paragraphTwo: `After several years as a chef in a busy cafe, I learned to appreciate how rewarding solving problems can be. I sparked an interest in coding while still working full time. The more I exercised my brain coding, the clearer my passion for the craft became. Much like following a recipe, coding requires actions to happen in a certain way, often following a specific order. It was time to sharpen my blade in a new discipline.`,
  paragraphThree: 'I am motivated by innovative ideas with high impact. I desire to work within an encouraging team that values collaboration. Always keen to build, break, test, solve and learn new things.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'myrecipes.png',
    title: 'Cookbook App',
    info: 'Front-end application, built with react',
    info2: 'Utilises react-bootstrap, react-hook-form, hooks, uuid',
    url: 'https://cookbook-36682.web.app/',
    repo: 'https://github.com/CullsGit/cookbook', // if no repo, the button will not show up
  },
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
