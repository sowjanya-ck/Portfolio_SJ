import React from 'react';
import {SiFlask,SiPostgresql,SiPython,SiJupyter,SiPandas,SiNumpy,SiScikitlearn} from 'react-icons/si';
import {AiOutlineHtml5} from 'react-icons/ai';
import {TbBrandCss3} from 'react-icons/tb';
import {DiDjango,DiBootstrap} from 'react-icons/di'
import IMG1 from '../../assets/coureir.png';
import IMG2 from '../../assets/elearn.png';
import IMG3 from '../../assets/fnews.png';

import './portfolio1.css';

const Portfolio1 = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Courier Service Management',
      img: IMG1,
      description:
        'Developed an Web application to maintain and keep track of the courier packages using dbms.The accountant section holds sender,reciever, tax and package details and  in the coureier section can update the status of package. The tax on the package is calculated using the range of weights of the package.' ,
      technologies: <div className='tec-icons' style={{marginTop: 0}}><SiFlask/><SiPostgresql/><TbBrandCss3/><SiPython/><AiOutlineHtml5/></div>,
      github: '',
    },
    {
      id: 2,
      title: 'E-Learning Application',
      img: IMG2,
      description:
        'The platform consists of features such as creating the classroom, conducting the online class,sharing the study material, taking the attendence,carreer guidence and online programming compiler. Teachers can create the classroom and students can join the classroom using the class id.' ,
      technologies: <div className='tec-icons' style={{marginTop: 0}}><DiDjango/><AiOutlineHtml5/><TbBrandCss3/><DiBootstrap/></div>,
      github: '',
    },
    {      
      id: 3,
      title: 'Fake News Detection Using ML',
      img: IMG3,
      description: 
        'Classifies the news article as real or fake based on the different textual features by using ML models. Scraped the news article text data and extended the ISOT dataset and extracted around 25 different textual features. The model is trained using alogithms such as random forest, lightGBM and SVM.                                                                               ',
      technologies: <div className='tec-icons' style={{marginTop: 0}}><SiJupyter/><SiPython/><SiPandas/><SiNumpy/><SiScikitlearn/></div>,
      github: '',
    } 
  ];

  return (
    <section id="portfolio1">
      <h2>Projects</h2>

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
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio1;
