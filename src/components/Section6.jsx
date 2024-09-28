import React, { useState } from 'react';
import mainImage from '../assets/images/project0_3.png'; // 메인 이미지 경로
import image2 from '../assets/images/project0_1.png'; // 병렬 이미지 1 경로
import image3 from '../assets/images/project0_2.png'; // 병렬 이미지 2 경로
import arrow from "../assets/images/Forward.png";
import mando from "../assets/images/mandotask.png";
import illust from "../assets/images/illusts.png";
import spoon from "../assets/images/spoonmate.png";
import ReactPlayer from 'react-player';
import './styles/Section6.css';

const Section6 = () => {
    const [contentIndex, setContentIndex] = useState(0);

    // 토글 함수: 0과 1 사이에서 순환하도록 설정
    const toggleContent = () => {
        setContentIndex((prevIndex) => (prevIndex + 1) % 2); // 2개의 섹션 순환
    }

    return (
        <div className='wholecontent6'>
            <div className='section6_main'>
                <div className={`section6_title ${contentIndex === 0 ? 'slide-in' : 'slide-out'}`}>
                    {/* <p style={{fontSize:'1vw'}}>Project List 1</p> <br/> */}
                    Project List - <br/>
                    User Experience Design
                </div>

                <div className={`section6_title2 ${contentIndex === 1 ? 'slide-in' : 'slide-out'}`}>
                    전공 외에 제가 관심있는 분야 중 하나는 바로 디자인입니다.<br/>
                    사용자에게 직관적으로 뜻을 드러내고 새로운 경험을 제공하는 것은 <br/>
                    참으로 재밌는 일입니다. UX 관련 프로젝트를 정리했습니다.<br/>
                </div>

                <button onClick={toggleContent} className='toggle_button6'>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
            <div className='project_description6'> 
                <div className ='projectName'>
                    <p className='small_name'>ArtWorks : </p> <br/>
                    디자인 포트폴리오
                </div>
                <div className ='imgContainer6'>                
                    <img src={illust} className='main_image' alt="main_image" />
                </div>

                <div className = 'project_explanation6'>
                    일러스트레이터, 로고 디자인, 캐릭터 디자인 등이 가능합니다.
                </div>

            </div>

            <div className='project_description6_2'> 
                <div className ='projectName'>
                    <p className='small_name'>소프트웨어공학개론 결과물 (24.03 ~ 24.06) : </p> <br/>
                    성균관대학교 밥친구 앱 '스푼 메이트'
                </div>
                <div className ='imgContainer6'>                
                    <img src={spoon} className='main_image' alt="main_image" />
                </div>

                <div className = 'project_explanation6'>
                    성균관대학교 밥약속 앱 '스푼 메이트'를 개발하였습니다. 가까운 상대와 실시간으로 밥 약속을 잡을 수 있고,
                    숟가락 주기 등의 차별화된 기능이 특징입니다. <br/> 기획과 디자인을 담당했습니다. 
                </div>

            </div>

            <div className='project_description6_3'> 
                <div className ='projectName'>
                    <p className='small_name'>모바일앱프로그래밍 실습 Final Project (24.06) : </p> <br/>
                    성균관대학교 러닝팩토리 예약 앱
                </div>
                <div className ='vidContainer6'>                
                    <ReactPlayer className='vid_learning'
                        url = {process.env.PUBLIC_URL + '/videos/learning.mp4'}
                        width = "50vw"
                        height = "40vw"
                        controls = {true}
                        // playing={false}
                        muted ={true}
                        loop = {true}
                    />
                </div>

                <div className = 'project_explanation6'>
                    기존 러닝팩토리 예약 시스템의 문제점 (삭제 불가, 중복 시간대 선택 안됨 등)을 해결하기 위해 개발하였습니다. 
                </div>

            </div>



        </div>
    );
}

export default Section6;
