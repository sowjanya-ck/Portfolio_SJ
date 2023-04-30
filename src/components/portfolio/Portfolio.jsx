import React from 'react';
import {SiMysql} from 'react-icons/si';
import {FaJava, FaReact} from 'react-icons/fa'
import {SiApachenetbeanside,SiMongodb, SiExpress} from 'react-icons/si';
import {DiNodejs} from 'react-icons/di';
import {AiOutlineHtml5} from 'react-icons/ai';
import {TbBrandJavascript,TbBrandCss3,TbBrandCpp} from 'react-icons/tb';
import IMG2 from '../../assets/quiz.png';
import IMG4 from '../../assets/weather.png';
import IMG5 from '../../assets/chat.png';
import IMG6 from '../../assets/music.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    
    {
      id: 2,
      title: 'Quiz Application',
      img: IMG2,
      description:
        " It's a multiple choice quiz application built using MERN technologies.The application contains quiz test on different topics and the user can choose any topic they prefer.Once the quiz completes the score is displayed along with the right answers. ",
      technologies:<div className="tec-icons"style={{marginTop: 0}}><FaReact/><SiMongodb/><DiNodejs/><SiExpress/></div>,
      github: 'https://github.com/sowjanya-ck/Quiz-using-MERN.git',
    },
    
    {
      id: 4,
      title: 'Weather Forecast',
      img: IMG4,
      description:
        'It is a fully responsive interactive website built to check the weather of the different location. The user enthers the location as a input  and application fetches the weather details from the weather API. The weather details contains tempearture,humidity, and windspeed.',
      technologies: <div class="tec-icons" style={{marginTop: 0}}><AiOutlineHtml5/><TbBrandCss3/><TbBrandJavascript/></div>,
      github: 'https://github.com/sowjanya-ck/weather-forecast',
    },
    {
      id: 5,
      title: 'ChatterBot',
      img: IMG5,
      description:
        'Programming application when you provide inputs in english text, responds with some meaningfull sentence.It consists of a knowledge base which is composed of keywords and some responses associated to each keywords which is used by chatterbot to respond.',
      technologies: <div className='tec-icons' style={{marginTop: 0}}><TbBrandCpp/></div>,
      github: 'https://github.com/sowjanya-ck/Chatbot',
    },
    {
      id: 6,
      title: 'Music player',
      img: IMG6,
      description:'It is a music app where user can logged into their account once the account is created. The app allows a user to  add a song to the library,select a song, play it and add it to their playlist,delete the song from the playlist as well.Built using swing java framework.',
      technologies: <div className='tec-icons' style={{marginTop: 0}}> <SiMysql /><FaJava/><SiApachenetbeanside/></div> ,
      github: 'https://github.com/spoorthivraju/MusicPlayer-H5',
    },
  ];

  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                GitHub
              </a>
              
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;