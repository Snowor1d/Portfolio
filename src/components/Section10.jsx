import React, { useState, useEffect } from 'react';
import my_pic from '../styles/me.jpg';
import my_pic_profile from '../assets/images/me_profile.jpg';
import arrow from "../assets/images/Forward.png";
import './styles/Section10.css';
import mento from '../assets/images/mento.jpg';
import mento2 from '../assets/images/mento2.jpg';
import bongsa1 from '../assets/images/bongsa.jpg';
import bongsa2 from '../assets/images/bongsa2.jpg';
import bongsa3 from '../assets/images/bongsa3.jpg';
import seong from '../assets/images/seong.jpg';
import seong2 from '../assets/images/seong2.webp';


// const Main_text = () => {
//     const [text, setText] = useState('Hello, Snowor1d!');
//     return (
//         <section id="title_1" className="section">
//         <h2>{text}</h2>
//         </section>
//     );
// }


const Section10 = () => {

    return (
        <div id='container10'>
            <div className='Big_name3'>
                Activites
                <div id="subject_intro">
                    그 외 의미있게 했던 활동들입니다. <br/>
                </div> 

            </div>
            <div className='activity_name'>
                그룹홈 미술 멘토링 (23.09 ~ 현재)
            </div>
            <div className='section10_main'>
                <img src ={mento} id='mento' className='mento'></img>
                <img src ={mento2} id='mento2'className='mento2'></img>
            </div>
            <div className='activity_explain'>
                그룹홈에서 초등학생 멘티에게 미술을 가르치는 봉사를 하고 있습니다! 3학기째 하고 있는데 많이 친해졌습니다. 
                <br/> 멘티의 그림 실력도 많이 늘은 것 같아 뿌듯합니다.
            </div>
            <div className='activity_name'>
                그 외
            </div>
            <div className='section10_main'>
                <img src ={bongsa1} id='bongsa' className='mento'></img>
                <img src ={bongsa2} id='bongsa2'className='mento2'></img>
                <img src ={bongsa3} id='bongsa3'className='mento2'></img>
            </div>
            <div className='activity_explain' id='sung_explain'>
                24년 여름방학에는 숭신여고에서 과학체험봉사를 하기도 했습니다.
            </div>
            <div className='section10_main2'>
                <img src ={seong} id='mento' className='mento'></img>
                <img src ={seong2} id='mento2'className='mento2'></img>
            </div>
            <div className='activity_explain'>
                미술동아리 성미회에서 활동한 것도 기억에 남습니다. 전시회에 작품도 전시하고 재밌는 경험이었습니다.
            </div>
        </div>       

    );
}

export default Section10;