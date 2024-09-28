import React, { useState } from 'react';
import mainImage from '../assets/images/project0_3.png'; // 메인 이미지 경로
import image2 from '../assets/images/project0_1.png'; // 병렬 이미지 1 경로
import image3 from '../assets/images/project0_2.png'; // 병렬 이미지 2 경로
import arrow from "../assets/images/Forward.png";
import mando from "../assets/images/mandotask.png";
import ba from "../assets/images/BABAM.png";
import './styles/Section7.css';

const Section7 = () => {
    const [contentIndex, setContentIndex] = useState(0);

    // 토글 함수: 0과 1 사이에서 순환하도록 설정
    const toggleContent = () => {
        setContentIndex((prevIndex) => (prevIndex + 1) % 2); // 2개의 섹션 순환
    }

    return (
        <div className='wholecontent7'>
            <div className='section7_main'>
                <div className={`section7_title ${contentIndex === 0 ? 'slide-in' : 'slide-out'}`}>
                    Project List- <br/>
                    Engineering & Society
                </div>

                <div className={`section7_title2 ${contentIndex === 1 ? 'slide-in' : 'slide-out'}`}>
                    공학은 결국 사람에 대한 것이라 생각합니다. <br/>
                    사회문제 해결에 공학적으로 접근한 프로젝트입니다. <br/>
                </div>

                <button onClick={toggleContent} className='toggle_button5'>
                    <img src={arrow} className="arrow" alt="arrow" />
                </button>
            </div>
            <div className='project_description7'> 
                <div className ='projectName'>
                    <p className='small_name'>2024-1 Co-deep Learning Projcet (24.04 ~ 24.07)</p> <br/>
                    PET-filament 장치 제작 및 이를 활용한 교내 PET 쓰레기 업사이클
                </div>
                <div className ='imgContainer7'>                
                    <img src={ba} className='ba_image' alt="main_image" />
                </div>

                <div className = 'project_explanation7'>
                    오픈소스 Recreator 3D를 기반으로, 폐 3D 프린터를 개조하여 PET병을 3D 프린터에 쓰이는 필라멘트로 바꾸는 장치인 PET-Filament 장치를 제작했습니다. <br/>
                    dying part나 filament welder등의 커스텀 기능을 추가하였고, 이를 활용하여 교내 PET 쓰레기로 해양생물 모형의 3D 프린터물을 출력, 전시하여<br/>
                    플라스틱 쓰레기의 심각성을 알리고자 하였습니다. <br/>
                    2024-1학기 Co-deep Learning Project에서 21개 팀 중 1등상을 수상하였습니다.  
                </div>

            </div>



        </div>
    );
}

export default Section7;
