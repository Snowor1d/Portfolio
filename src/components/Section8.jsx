import React, { useState } from 'react';
import mainImage from '../assets/images/project0_3.png'; // 메인 이미지 경로
import image2 from '../assets/images/project0_1.png'; // 병렬 이미지 1 경로
import image3 from '../assets/images/project0_2.png'; // 병렬 이미지 2 경로
import arrow from "../assets/images/Forward.png";
import mando from "../assets/images/mandotask.png";
import illust from "../assets/images/illusts.png";
import spoon from "../assets/images/spoonmate.png";
import soar from "../assets/images/soar.jpg";
import missions from "../assets/images/missions.png";
import flight1 from "../assets/images/realflight1.jpg";
import flight2 from "../assets/images/realflight2.jpg";
import ha from "../assets/images/has.jpg"
import smartcar from "../assets/images/smartcar.jpg"
import adds from "../assets/images/adds_intro.png"
import adds_robot from "../assets/images/adds_robot.png"
import graph from "../assets/images/graph.png"
import simulation_modeling from "../assets/images/simulation_modeling.png"
import ReactPlayer from 'react-player';
import './styles/Section8.css';

const Section8 = () => {
    const [contentIndex, setContentIndex] = useState(0);

    // 토글 함수: 0과 1 사이에서 순환하도록 설정
    const toggleContent = () => {
        setContentIndex((prevIndex) => (prevIndex + 1) % 2); // 2개의 섹션 순환
    }

    return (
        <div className='wholecontent8'>
            <div className='section8_main'>
                <div className={`section8_title ${contentIndex === 0 ? 'slide-in' : 'slide-out'}`}>
                    {/* <p style={{fontSize:'1vw'}}>Project List 1</p> <br/> */}
                    Project List - <br/>
                    Mobility & Robotics
                </div>

                <div className={`section8_title2 ${contentIndex === 1 ? 'slide-in' : 'slide-out'}`}>
                    저의 주 전공 분야입니다. 미래 모빌리티, 그리고 로봇에<br/>
                    흥미를 느끼고 1년 넘게 관련 분야를 공부 중입니다.  <br/>
                    세상에 새로운 자유를 불어넣는 모빌리티 개발자가 되고자 합니다. <br/>
                </div>

                <button onClick={toggleContent} className='toggle_button6'>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
            <div className='project_description8'> 
                <div className ='projectName'>
                    <p className='small_name'>2023 한국로봇항공기 경연대회 (23.04 ~ 23.07) </p> <br/>
                    자율미션수행 드론 개발
                </div>
                    {/* 상단 비디오 및 사진 */}
                    <div className="top-section">
                        <div className="video" id="drone-video">                    
                            <ReactPlayer className='vid_learning'
                            url = {process.env.PUBLIC_URL + '/videos/drone.mp4'}
                            width = "50vw"
                            height = "29vw"
                            controls = {true}
                            // playing={false}
                            muted ={true}
                            loop = {true}
                    /></div>
                        <div className="photo2"><img src={soar} className='soar_image'></img></div>
                    </div>

                    {/* 텍스트 */}
                    <div className="text-section" id="drone_ex">2023 한국로봇항공기 대회는 
                        자율미션수행 드론 개발 대회로, 장애물을 회피해서 베란다 3층에 피자박스를 배달하고 
                        복귀하는 것이 미션이었습니다. <br/>성균관대학교에서는 팀 SOAR가 이 대회에 출전하였고
                        저는 여기서 경로계획 알고리즘 개발을 담당하였습니다.
                    </div>

                    {/* 중간 큰 사진 */}
                    <div className="middle-photo"><img src={missions} className='mission'></img></div>

                    {/* 텍스트 */}
                    <div className="text-section">전체 미션 경로 계획, 장애물 회피를 위한 SE 알고리즘, K-means 알고리즘을 활용한 장애물 위치 추정, 드론의 high-level 제어기
                        등을 <br/> 직접 개발/구현하였습니다.                    </div>
                        
                    {/* 가로로 나열된 2개의 사진 */}
                    <div className="photo-row">
                        <div className="photo1"> <img src={flight1} className='flight1'></img></div>
                        <div className="photo2"> <img src={flight2} className='flight2'></img></div>
                    </div>

                    {/* 텍스트 */}
                    <div className="text-section2">ROS 시스템, 경로계획 알고리즘, 시뮬레이션, 센서 정보 처리 그리고 팀워크와 협력의 중요성을 
                        배웠던 아주 재밌고 값진 시간이었습니다 !  </div>

            </div>

            <div className='project_description8_2'> 
                <div className ='projectName'>
                    <p className='small_name'>대학생 창작모빌리티 대회 : 미래 모빌리티 부문 (23.07 ~ 23.10) </p> <br/>
                    화성 시범도로 자율주행 미션 수행
                </div>
                <div className="top-section">
                        <div className="" id="hwua_vid">                    
                            <ReactPlayer className='vid_learning' id="auto_video"
                            url = {process.env.PUBLIC_URL + '/videos/auto.mp4'}
                            width = "56vw"
                            height = "32vw"
                            controls = {true}
                            // playing={false}
                            muted ={true}
                            loop = {true}
                    /></div>
                        <div className="photo2" id="ha_photo_box"><img src={ha} className='ha_photo'></img></div>
                    </div>
                <div className = 'project_explanation8'>
                    대학생 창작모빌리티 대회에 참가했습니다. Navigation Stack을 이용해서 자율주행을 구현하고, 시뮬레이션에서 검증했습니다. <br/> 
                    정상 자율주행기능 구현에는 결국 실패했지만, ROS, Navigation Stack, Morai 시뮬레이션과 초기 방향 설정의 중요성을
                    배울 수 있었습니다. 
                </div>

            </div>

            <div className='project_description8_3'> 
            <div className ='projectName'>
                    <p className='small_name'>스마트카 융합설계 대회 (23.12) </p> <br/>
                    스마트카 자율미션 알고리즘 코딩
                </div>
                <div className="top-section">
                        <div className="" id="smartcar_vid">                    
                            <ReactPlayer className='vid_learning' id="auto_video2"
                            url = {process.env.PUBLIC_URL + '/videos/smartcar.mp4'}
                            width = "53vw"
                            height = "32vw"
                            controls = {true}
                            // playing={false}
                            muted ={true}
                            loop = {true}
                    /></div>
                        <div className="photo2" id="smartcar_photo_box"><img src={smartcar} className='ha_photo2'></img></div>
                    </div>
                <div className = 'project_explanation8'>
                    스마트카 융합설계 대회에 참가했습니다. 평행주차, 직각주차, 장애물 회피 등의 미션을 성공적으로 수행해서 1등상을 수상하였습니다.
                </div>

            </div>


            <div className='project_description8_adds'> 
                <div className ='projectName'>
                    <p className='small_name'> 연구 (23.09 ~ 현재) </p> <br/>
                    군중 대피 유도를 위한 UAV-UGV 시스템 연구
                </div>
                    {/* 상단 비디오 및 사진 */}
                    <div className="top-section">
                        <div className="video" id="adds-video">                    
                            <ReactPlayer className='vid_learning'
                            url = {process.env.PUBLIC_URL + '/videos/adds.mp4'}
                            width = "30vw"
                            height = "30vw"
                            controls = {true}
                            // playing={false}
                            muted ={true}
                            loop = {true}
                    /></div>
                        <div className="photo3"><img src={adds} className='adds_image'></img></div>
                    </div>

                    {/* 텍스트 */}
                    <div className="text-section" id="drone_ex"> AMRL 연구실에서 군중 대피 유도를 위한 UAV-UGV 시스템을 연구 중입니다. 
                        23년 9월부터 시작했으며, 저희 연구팀에서 직접 제의한 주제라 애정을 가지고 연구하고 있습니다. 연구팀에서는 제가 팀장을 맡고 있습니다.
                        현재는 강화학습을 이용해 알고리즘을 최적화 하는 것에 집중 중입니다.
                    </div>

                    {/* 중간 큰 사진 */}
                    <div className="photo-row">
                        <div className="photo1"> <img src={simulation_modeling} className='flight1'></img></div>
                        <div className="photo2"> <img src={adds_robot} className='flight2'></img></div>
                    </div>

                    {/* 텍스트 */}
                    <div className="text-section"> Advanced Social Force modeling 기법을 활용한
                        군중 시뮬레이션을 직접 개발하였고, 강화 학습에는 Approximate-Q learning 기법을 사용하였습니다.   
                        현재는 Actor-critic 을 활용해 로봇의 continuous action space 를 구현하고자 합니다.        
                    </div>
                    <div className="middle-photo"><img src={graph} id='adds_graph'></img></div>

                    {/* 텍스트 */}
                    <div className="text-section3"> Approximate Q-learning 으로 학습된 저희 연구팀의 모델이 효과적임을 입증하였습니다. 
                        중간 연구 성과로 2023-2학기 Co-deep Learning 1등상을 수상하였습니다. 군중 시뮬레이션 및 알고리즘을 보완해서,
                        현실에서의 검증을 최종 목표로 하고있습니다. 강화학습과 시뮬레이션같은 지식적인 부분 뿐만 아니라 연구 방법과 태도를 
                        배우는 좋은 경험이 되고 있습니다. </div>

            </div>



        </div>
    );
}

export default Section8;
