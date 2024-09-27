import React from 'react';
import { Link } from 'react-scroll'; // React Scroll 라이브러리 사용

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <Link to="section1" smooth={true} duration={500}>Section 1</Link>
      <Link to="section2" smooth={true} duration={500}>Section 2</Link>
      <Link to="section3" smooth={true} duration={500}>Section 3</Link>
      <Link to="section4" smooth={true} duration={500}>Section 4</Link>
      <Link to="section5" smooth={true} duration={500}>Section 5</Link>
    </div>
  );
};

export default MenuBar;