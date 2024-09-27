import React, { useState, useEffect } from 'react';
import my_pic from '../styles/me.jpg';
import my_pic_profile from '../assets/images/me_profile.jpg';
import arrow from "../assets/images/Forward.png";
import './styles/Section3.css';
import FloatingCircle from './FloatingCircle';

// const Main_text = () => {
//     const [text, setText] = useState('Hello, Snowor1d!');
//     return (
//         <section id="title_1" className="section">
//         <h2>{text}</h2>
//         </section>
//     );
// }


const Section3 = () => {
    const [text, setText] = useState("안녕하세요 대학생 \n김세헌입니다.");
    const words = ["UX 디자이너", "미래 모빌리티 연구자", "로보틱스 엔지니어"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [contentIndex, setContentIndex] = useState(0);

    // 텍스트 변경 주기와 애니메이션 효과 설정
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true); // 애니메이션 시작
            setTimeout(() => {
                setAnimate(false); // 애니메이션 종료
                setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // 단어 변경
            }, 500); // 애니메이션 지속 시간과 일치시킴
        }, 1500); // 2초마다 텍스트 변경

        return () => clearInterval(interval);
    }, []);

    // 텍스트 변경 감지
    useEffect(() => {
        setText(`안녕하세요 ${words[currentIndex]}\n김세헌입니다.`);
    }, [currentIndex]);

    const toggleContent = () => {
        setContentIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through 3 sections
    }


    return (    
        
        <div className='floatingbox'>
            <p>관심분야</p>
                    <FloatingCircle/>
        </div>

    );
}

export default Section3;