import React, { useState } from 'react';
import './styles/Main_text.css';
import logo from '../styles/fire_with_snow.gif'

// const Main_text = () => {
//     const [text, setText] = useState('Hello, Snowor1d!');
//     return (
//         <section id="title_1" className="section">
//         <h2>{text}</h2>
//         </section>
//     );
// }



const Contact = () => {
    const [text, setText] = useState("Contact");
    return (
        
        <div className='main_parent'>
            <div className='child_pic'>
                <img src={logo} className="first_snow_image" />
            </div>
            <div className='child_text'>
                <div className='child_text_main'>
                    <text className = 'title_text'>{text}</text>
                </div>
                <div className='child_text_explain'>
                </div>
            </div>
        </div>
    );
}

export default Contact