import React from 'react';
import { Link } from 'react-scroll'; // React Scroll 라이브러리 사용

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <Link to="section2" smooth={true} duration={500}>Intro</Link>
      <Link to="section3" smooth={true} duration={500}>Timeline</Link>
      <Link to="section4" smooth={true} duration={500}>Skills</Link>
      <Link to="section5" smooth={true} duration={500}>AI</Link>
      <Link to="section6" smooth={true} duration={500}>Design</Link>
      <Link to="section7" smooth={true} duration={500}>Engineering</Link>
      <Link to="section8" smooth={true} duration={500}>Mobility & Robotics</Link>
    </div>
  );
};

export default MenuBar;