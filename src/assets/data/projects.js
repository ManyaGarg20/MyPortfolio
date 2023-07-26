import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Tic-Tac-Toe',
    desc:
      'A two player game using HTML ,CSS & JS for frontend and PHP and SQL for backend.',
    img: UTrackerImg,
    linkk: '//github.com/ManyaGarg20/tic-tac-toePHP',
  },
  {
    id: uuidv4(),
    name: 'Video_Text_summarizer',
    desc:
      'A Video and Text Summarizer , that takes the link of youtube  videos and converts the audio into summarised text or audio according to the preferences. Uses Django for frontend and  ML and NLP      .',
    img: GreenCtgImg,
    linkk:'//github.com/ManyaGarg20/Summarizer-VideoText',
  },
  {
    id: uuidv4(),
    name: 'Chat_Room',
    desc:
      'Online Chat Room using Nodejs and Socket.io for backend and Html ,Css, Js for frontend',
    img: CoinTrackerImg,
    linkk: '//github.com/ManyaGarg20/ChatRoom',
  },
  {
    id: uuidv4(),
    name: 'My_Portfolio',
    desc:
      'A react.js based responsive portfolio website to understnad me better ',
    img: CavinImg,
    linkk: '//github.com/ManyaGarg20/MyPortfolio',
  },
];

export default projects;
