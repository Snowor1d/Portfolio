import React, { useState, useEffect } from 'react';
import my_pic from '../styles/me.jpg';
import my_pic_profile from '../assets/images/me_profile.jpg';
import arrow from "../assets/images/Forward.png";
import './styles/Section8_9.css';

// const Main_text = () => {
//     const [text, setText] = useState('Hello, Snowor1d!');
//     return (
//         <section id="title_1" className="section">
//         <h2>{text}</h2>
//         </section>
//     );
// }


const Section8_9 = () => {

    return (
        <div className='Big_name2'>
            Courses 
            <div id="subject_intro">
                수강했던 과목들을 정리했습니다. <br/>
            </div>
        </div>

    );
}

export default Section8_9;