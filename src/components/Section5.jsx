import React, { useState } from 'react';
import my_pic from '../styles/me.jpg';
import arrow from "../assets/images/Forward.png";
import './styles/Section5.css';

const Section5 = () => {
    const [contentIndex, setContentIndex] = useState(0);

    // 토글 함수: 0과 1 사이에서 순환하도록 설정
    const toggleContent = () => {
        setContentIndex((prevIndex) => (prevIndex + 1) % 2); // 2개의 섹션 순환
    }

    return (
        <div className='wholecontent5'>
            <div className='section5_main'>
                <div className={`section5_title ${contentIndex === 0 ? 'slide-in' : 'slide-out'}`}>
                    Project List : 0 <br/> 
                    AI
                </div>

                <div className={`section5_title2 ${contentIndex === 1 ? 'slide-in' : 'slide-out'}`}>
                    다양한 문제 솔루션에 해결될 수 있다 생각해, <br/>
                    AI는 꾸준히 공부하고 있는 주제 중 하나입니다. <br/> 
                    진행했던 AI 관련 프로젝트를 먼저 모아봤습니다. <br/>
                </div>

                <button onClick={toggleContent} className='toggle_button5'>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>

        <div className='main_5'>
            <div className='Skills5'> Skills

            </div>
            </div>
        </div>
    );
}

export default Section5;