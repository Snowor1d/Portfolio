import React, { useState } from 'react';
import my_pic from '../styles/me.jpg';
import arrow from "../assets/images/Forward.png";
import './styles/Section4.css';

const Section4 = () => {
    const [contentIndex, setContentIndex] = useState(0);

    // 토글 함수: 0과 1 사이에서 순환하도록 설정
    const toggleContent = () => {
        setContentIndex((prevIndex) => (prevIndex + 1) % 2); // 2개의 섹션 순환
    }

    return (
        <div className='wholecontent'>
        <div className='intro_part'>
            <div className='section4_main'>
                <div className={`section4_title ${contentIndex === 0 ? 'slide-in' : 'slide-out'}`}>
                    Skills & Awards
                </div>

                <div className={`section4_title2 ${contentIndex === 1 ? 'slide-in' : 'slide-out'}`}>
                    위와 같은 경험을 통해 얻은 역량과 수상 / 장학 내역입니다.
                </div>

                <button onClick={toggleContent} className='toggle_button4'>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
        </div>
        <div className='main_4'>
            <div className='Skills'> Skills
                <div className='skill_contents'>
                    <p><br/>Cooperation : github, gitkarken, slack, notion<br/>
                       Hardware Design : Autodesk Inventor<br/>
                       Programming Language : C, C++, Python, JavaScript <br/>
                       Middle OS : ROS(Melodic), ROS(Foxy) <br/>
                       OS : Windows, Linux(Ubuntu 20.04, 22.04) <br/>
                       Simulation : Gazebo, Morai, Simscape <br/>
                       Analysis : MATLAB <br/>
                       Art Design : Adobe Illustrator, Procreate <br/>
                       Used Packages : Pixhawk AutoPilot, Yolov5, LLaMA3                    
                    </p>
                </div>
                
                 </div>
            
            <div className="timeline-line4"></div> {/* 중앙 선 */}
            <div className="Awards"> Awards

            <div className='award_contents'>
            <p><br/>성적우수장학생 (20-1, 20-2)<br/>
                    일주학술문화재단 장학생 (23.06 ~ )<br/>
                    대학생 자작자동차 대회 기술아이디어 부문 동상 (23.08)<br/>
                    스마트카 융합설계 대회 대상 (23.12)<br/>
                    2023-2 Co-deep learning project 대상 (24.01)<br/>
                    창의장학금 장학생 (24.06) <br/>
                    2024-1 Co-deep learning project 대상 (24.09) <br/>
                    대통령과학장학금 장학생 (24.08 ~ )<br/>                
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Section4;