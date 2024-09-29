import React, { useState, useEffect } from 'react';
import my_pic from '../styles/me.jpg';
import my_pic_profile from '../assets/images/me_profile.jpg';
import arrow from "../assets/images/Forward.png";
import './styles/Section4_5.css';

// const Main_text = () => {
//     const [text, setText] = useState('Hello, Snowor1d!');
//     return (
//         <section id="title_1" className="section">
//         <h2>{text}</h2>
//         </section>
//     );
// }


const Section4_5 = () => {

    return (
        <div className='Big_name'>
            Project List 
            <div id="subject_intro">
                대학생활동안 했던 프로젝트들을 정리했습니다. <br/>
            </div>
        </div>

    );
}

export default Section4_5;