import React, { useState } from 'react';
import './styles/Start.css';
import logo from '../styles/fire_with_snow.gif'

// const Main_text = () => {
//     const [text, setText] = useState('Hello, Snowor1d!');
//     return (
//         <section id="title_1" className="section">
//         <h2>{text}</h2>
//         </section>
//     );
// }



const Contact_me = () => {
    const [text, setText] = useState("Contact");
    return (
        
        <div className="start">
            <div className="final_greeting">
                Contact<br/><br/>
            </div>
            <div className="contact">
                Github : https://github.com/Snowor1d/ <br/>
                Mail : 437snowcap@g.skku.edu <br/>
                Insta : @Snowor1d 
            </div>
        </div>
    );
}

export default Contact_me