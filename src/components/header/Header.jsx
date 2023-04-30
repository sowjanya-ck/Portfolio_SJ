import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sowjanya Kumari</h1>
        <h5 className="text-light">A CSE student passionate about coding and web design</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
