import React from 'react';
import MenuBar from './components/menubar'; // 메뉴바 컴포넌트를 import
import Start from './components/Contact_me';
import Main_text from './components/Main_text'; // 메인 텍스트 컴포넌트를 import
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section4_5 from './components/Section4_5';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section8_9 from './components/Section8_9';
import Section9 from './components/Section9';
import Section10 from './components/Section10';
import Contact from './components/Contact';
import BouncyCircle from './components/BouncyCircle';
import FloatingCircle from './components/FloatingCircle';
import './styles/App.css'; // 스타일을 import
import logo from './styles/fire_with_snow.gif'
const App = () => {
  return (
    <div className="App">
      {/* 고정된 메뉴 바 */}
      return <MenuBar />

      {/* 각 섹션 */}
      <section id="section1" className="section">
        <Main_text />

        {/* <img src={logo} className="first_snow_image" />
        <p>Hello Snowor1d!</p> */}
      </section>
      <div id='guide'> 일반 모니터 화면에서 보시는 것을 권장합니다. <br/>
                    상단 메뉴바를 클릭해서 위치를 이동하실 수 있습니다.</div>
      <section id="section2" className="section">
        <Section2/>
      </section>

      <section id="section3" className="section">
        <Section3/>
        <div className='section3_space'></div>
      </section>

      <section id="section4" className="section">
        <Section4/>
      </section>


      <section id="section4_5" className="section">
        <Section4_5/>
      </section>

      <section id="section5" className="section">
        <Section5/>
      </section>

      <section id="section6" className="section">
        <Section6/>
      </section>

      <section id="section7" className="section">
        <Section7/>
      </section>

      <section id="section8" className="section">
        <Section8/>
      </section>

      <section id="section8_9" className="section">
        <Section8_9/>
      </section>

      <section id="section9" className="section">
        <Section9/>
      </section>

      <section id="section10" className="section">
        <Section10/>
      </section>

      <section id="start" className="section">
        <Start />
      </section>
    </div>
  );
};

export default App;