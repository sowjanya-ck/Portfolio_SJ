import React from 'react';
import {FaGraduationCap } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';

import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>Bachelor of Technology in Computer Science Engineering, PES University 2023 </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>I have done projects on web developement, MERN, and Machine
                Learning</small>
            </article>
          </div>
          <p >Hello, I am B.Tech Computer Science graduating student. I'm skilled in C++ and JavaScript programming language and have experience in
             building Web applications and Machine Learning.
            <br/>Along with that I enjoy reading, making craft works ,listening to music, and travelling.
          I'm always on the lookout for new knowledge and experiences to improve my skills and expand my perspective.
          </p>
          <a href="#contact" className="btn btn-primary">Let's connect</a>
        </div>
      </div>
    </section>
  )
}

export default Intro