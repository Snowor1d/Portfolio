import React, { useState } from 'react';
import echart from '../assets/images/echarts.png';
import './styles/Section9.css';

const Section9 = () => {
    const [showGrades, setShowGrades] = useState(false);

    // Dummy grades for each subject (you can replace them with real data)
    const subjectsWithGrades1 = [
        { name: "미분적분학1", grade: "A+" },
        { name: "일반물리학1", grade: "A+" },
        { name: "일반물리학실험1", grade: "A+" },
        { name: "일반화학1", grade: "A" },
        { name: "영어쓰기", grade: "A+" },
        { name: "고전명저북클럽1", grade: "A+" },
        { name: "공학컴퓨터프로그래밍", grade: "A+" },
        { name: "학술적글쓰기", grade: "A+" },
        { name: "FYE세미나", grade: "P" },
        { name: "미분적분학2", grade: "A+" },
        { name: "선형대수학", grade: "A" },
        { name: "영어발표", grade: "A+" },
        { name: "경제학입문", grade: "A+" },
        { name: "창의적융합디자인", grade: "B+" },
        { name: "프로그래밍기초와실습", grade: "A+" },
        { name: "창의적글쓰기", grade: "B+" },
        { name: "FYE세미나2", grade: "P" },
        { name: "현대민주주의의이해", grade: "A+" },
        { name: "과학영어", grade: "A" },
        { name: "화학과생명현상", grade: "A+" },
        { name: "전산제도", grade: "A+" },
        { name: "유체역학", grade: "A" },
        { name: "동역학", grade: "A" },
        { name: "고체역학", grade: "A+" }

        // Add more subjects and grades here...
    ];

    const subjectsWithGrades2 = [
        { name: "기계재료", grade: "A" },
        { name: "공학기초수학1", grade: "A+" },
        { name: "알고리즘개론", grade: "A+" },
        { name: "공학연구프로젝트1", grade: "A+" },
        { name: "AI기초와활용", grade: "A" },
        { name: "신인류포노사피엔스경험디자인", grade: "A" },
        { name: "자료구조개론", grade: "A+" },
        { name: "오픈소스소프트웨어실습", grade: "A+" },
        { name: "컴퓨터구조개론", grade: "A+" },
        { name: "웹프로그래밍실습", grade: "A+" },
        { name: "열역학", grade: "A+" },
        { name: "고체역학설계실습", grade: "A+" },
        { name: "공학기초수학2", grade: "A+" },
        { name: "모바일앱프로그래밍실습", grade: "A" },
        { name: "소프트웨어공학개론", grade: "A+" },
        { name: "프로그래밍언어", grade: "A" },
        { name: "컴퓨터네트워크개론", grade: "A+" },
        { name: "시스템프로그램", grade: "A+" },
        { name: "진동및동적시스템설계실습", grade: "A" },
        { name: "기계진동학", grade: "수강중" },
        { name: "제어공학", grade: "수강중" },
        { name: "기구학", grade: "수강중" },
        { name: "캡스톤설계프로젝트", grade: "수강중" },
        { name: "운영체제", grade: "수강중" },
        { name: "종합설계실습", grade: "수강중" }

        // Add more subjects and grades here...
    ];

    return (
        <div className='courses'>
            <div id='click_box'>
            <button onClick={() => setShowGrades(!showGrades)} id='grade_button'> 
                {showGrades ? '성적 숨기기' : '성적 보기'}
            </button>

            </div>

            <div id="subjects">
                <div className='each_subject'>
                    {subjectsWithGrades1.map((subject, index) => (
                        <div key={index}>
                            {subject.name} {showGrades && `( ${subject.grade} )`}
                        </div>
                    ))}
                </div>
                <div className='each_subject'>
                    {subjectsWithGrades2.map((subject, index) => (
                        <div key={index}>
                            {subject.name} {showGrades && `( ${subject.grade} )`}
                        </div>
                    ))}
                </div>
            </div>

            <div id="e-charts">
                <img src={echart} id="echart" alt="Echarts" />
            </div>
        </div>
    );
};

export default Section9;