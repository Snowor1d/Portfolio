import React, { useState, useEffect } from 'react';
import my_pic from '../styles/me.jpg';
import my_pic_profile from '../assets/images/me_profile.jpg';
import arrow from "../assets/images/Forward.png";
import './styles/Section2.css';

// const Main_text = () => {
//     const [text, setText] = useState('Hello, Snowor1d!');
//     return (
//         <section id="title_1" className="section">
//         <h2>{text}</h2>
//         </section>
//     );
// }


const Section2 = () => {
    const [text, setText] = useState("안녕하세요 대학생 \n김세헌입니다.");
    const words = ["UX 디자이너", "미래 모빌리티를 연구하는", "로보틱스 엔지니어", "달리기를 잘하는", "겨울산을 잘 타는"];
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
        <div className='main_parent'>
            <div className='child_pic'>
                <img src={contentIndex === 0 ? my_pic : my_pic} className={`${contentIndex === 0 ? 'my_pic' : 'my_pic'}`} alt="profile" />
            </div>
            <div className='section2_main'>
                
                <div className={`section2_title ${contentIndex === 0 ? 'slide-in' : 'slide-out'}`}>
                    <span className='section2_title'>
                        &nbsp;
                        <p className="introduce_me"> 안녕하세요. </p>
                        <span className={`changing_text ${animate ? 'animate' : ''}`}>
                            <p className='job'> {words[currentIndex]} </p>
                        </span>
                        &nbsp;
                        <p className="introduce_me"> 김세헌입니다. </p>
                    </span>
                </div>

                <div className={`section2_title2 ${contentIndex === 1 ? 'slide-in' : 'slide-out'}`}>
                    <p className="Profile"> &nbsp; Profile </p> <br />
                    <p className='profile_description'> - &nbsp; 성균관대학교 6학기 재학 중<br/>
                                                        - &nbsp; 기계공학 (1전공), 소프트웨어 (2전공)<br/> </p>
                    <p className='profile_description2'> <br/><br/> &nbsp; ★ &nbsp; 좋아하는 것 &nbsp; : &nbsp; 해질녘 러닝, 겨울철 등산, 눈 내리는 아주 추운 겨울밤, 러닝하고 먹는 수박,<br/> 
                                                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 보더콜리, 구제 신발 사서 커스텀하기, 디지털 페인팅, 전공 공부하기 (가끔해야 함),
                                                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 가족과 함께하는 토요일 오전, 새로운 영감을 주는 책 보기, 오래된 친구들과 여행가기,
                                                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 담백하게 요리된 해산물 스파게티, 등등 ..
                                                        <br/> </p>

                </div>

                <div className={`section2_title3 ${contentIndex === 2 ? 'slide-in' : 'slide-out'}`}>
                    <p className="explain_head"></p><br />
                    <p className="explain_me"> 세상에는 배울 것이 참 많습니다. <br/><br/>
                                               보다 넓은 세상을 만드는 사람이 되고 싶습니다. 사람들과 끊임없이 영감을 주고 받고 싶습니다. <br/>
                                               <br/>대학을 다니는 지금, 이를 위해 항상 새로운 것에 도전하고 경험하고 있습니다. 아래는 이에 대한 간략한 기록입니다.<br/>
                                               
                    </p>
                </div>        

                <button onClick={toggleContent} className='toggle_button'>
                    <img src={arrow} className={`arrow ${contentIndex !== 4 ? 'shown' : 'hidden'}`} />
                </button>

            </div>
        </div>

    );
}

export default Section2;