import React from "react";
import { Link, Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import "./App.css"; // 스타일은 여기서 적용

const App = () => {
  return (
    <div className="app">
      {/* 고정 메뉴 바 */}
      <div className="menu-bar">
        <Link to="section1" smooth={true} duration={500}>
          Section 1
        </Link>
        <Link to="section2" smooth={true} duration={500}>
          Section 2
        </Link>
        <Link to="section3" smooth={true} duration={500}>
          Section 3
        </Link>
        <Link to="section4" smooth={true} duration={500}>
          Section 4
        </Link>
      </div>

      {/* 각 섹션 */}
      <Element name="section1" className="section">
        <Fade bottom>
          <div className="content">
            <h2>Text</h2>
            <div className="picture">Picture</div>
          </div>
        </Fade>
      </Element>

      <Element name="section2" className="section">
        <Fade bottom>
          <div className="content">
            <h2>Text</h2>
            <div className="row">
              <div className="pic">Pic</div>
              <h3>Text</h3>
            </div>
          </div>
        </Fade>
      </Element>

      <Element name="section3" className="section">
        <Fade bottom>
          <div className="content">
            <h2>Text</h2>
            <div className="text-picture-row">
              <div className="text-block">Text</div>
              <div className="pic">Pic</div>
            </div>
          </div>
        </Fade>
      </Element>

      <Element name="section4" className="section">
        <Fade bottom>
          <div className="content">
            <h2>Text</h2>
            <div className="grid">
              <div className="pic">Pic</div>
              <div className="pic">Pic</div>
              <div className="pic">Pic</div>
              <div className="pic">Pic</div>
            </div>
          </div>
        </Fade>
      </Element>
    </div>
  );
};

export default App;