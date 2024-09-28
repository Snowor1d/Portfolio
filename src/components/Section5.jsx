import React, { useState } from 'react';
import mainImage from '../assets/images/project0_3.png'; // 메인 이미지 경로
import image2 from '../assets/images/project0_1.png'; // 병렬 이미지 1 경로
import image3 from '../assets/images/project0_2.png'; // 병렬 이미지 2 경로
import arrow from "../assets/images/Forward.png";
import mando from "../assets/images/mandotask.png";
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
                    Project List- <br/>
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
            <div className='project_description'> 
                <div className ='projectName'>
                    <p className='small_name'>대학생 자작자동차 대회 기술아이디어 부문 (23.06 ~ 23.08) : </p> <br/>
                    차량하부 밑 동적객체인식 시스템 개발
                </div>
                <div className ='imgContainer5'>                
                    <img src={mainImage} className='main_image' alt="main_image" />
                </div>

                <div className = 'project_explanation'>
                    차량 출발시 하부에 있는 동적 객체를 인식하여 부저를 울리는 시스템을 개발하였습니다. <br/>
                    랙앤 피니언 구조의 감지부가 차량 밑을 스캔하며, 임베딩된 YOLOv5을 통해 알람을 울려야 하는 위험
                    객체가 있는지 판단합니다. <br/>
                    딥러닝 비전 모델을 이용하는 첫 프로젝트였으며, 임베디드 시스템또한 새롭게 경험할 수 있었습니다.
                    <br/>해당 기술이 탑재된 차량으로 2023년 대회에서 기술아이디어 부문 동상을 수상하였습니다. 
                </div>

            </div>

            <div className='project_description2'> 
                <div className ='projectName'>
                    <p className='small_name'>HL 만도 하계 인턴 (24.06 ~ 24.08) : </p> <br/>
                    EMC 테스트 문서 자동 분류 및 query 프로그램 개발
                </div>
                <div className ='imgContainer5'>                
                    <img src={mando} className='main_image' alt="main_image" />
                </div>

                <div className = 'project_explanation'>
                    HL 만도에서는 EMC 테스트 문서를 자동으로 분류하고 query에 맞게 응답하는 프로그램을 개발하였습니다. <br/>
                    기존에 만도에서는 수작업으로 문서에 있는 테스트를 분류하고, 일일이 키워드를 찾아 정리해야 했습니다. 
                    이에 해당 문제를 해결하는 <br/> 개인 과제를 맡아 진행했습니다.
                    Rake 알고리즘을 사용해 테스트 문서에서 키워드를 추출했고, cosine similiarity 비교를 통해 <br/> 각 문서의 항목을 분류하였습니다.
                    또한 LLM 모델인 LLaMA3를 사용하여 분류된 문서를 기반으로 이를 분석하도록 했습니다.
                </div>

            </div>



        </div>
    );
}

export default Section5;
