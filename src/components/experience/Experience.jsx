import React from 'react';
import {BsShieldFillCheck} from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article> 
            
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          
            
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>Mysql</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>SQL</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>Flask</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>Node</h4>
            </article>
          </div>
        </div>
        <div className="experience__Computer">
          <h3>Programming Languegs & Concepts</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>C++</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>CN</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>OOPS</h4>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <h4>DBMS</h4>
            </article> 
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience