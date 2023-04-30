import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Sowjanya ❄️ </a>
 <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sowjanya-kulal-741911223/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/sowjanya-ck" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://leetcode.com/sowjanya_2293/" target="_blank" rel="noreferrer" ><SiLeetcode /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; {getYear()} ಸೌಜನ್ಯ. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
