import React, { useEffect, useRef } from 'react';
import './styles/Section3.css';

const TimelineItem = ({ year, month, title, description, side, img_src }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`timeline-item ${side} M_${year}_${month}`}>
      <div className="content">
        <span className="date">{year}.{month}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
};

const Section3 = () => {
  const timelineData = [
    { year: 2020, month: '02', title: '성균관대학교 입학', description: '', side: 'left', img_src: '../assets/images/me_profile.jpg' },
    { year: 2020, month: '07', title: '20-2 성적우수장학생', description: '', side: 'right'},
    { year: 2020, month: '08', title: 'Data science study', description: '~ 2020.12', side: 'left' },
    { year: 2020, month: '12', title: '2021 AI bookathon', description: '생성형 AI 활용 수필 짓기 대회', side: 'right' },
    { year: 2021, month: '02', title: '대한민국 공군 입대', description: '~ 2022.11.14', side: 'left'},
    { year: 2022, month: '08', title: 'Design / Illustrator Project', description: '~ 2022.10', side: 'left' },
    { year: 2023, month: '01', title: '삼성 샤이닝 스타 2기', description: '', side: 'right' },
    { year: 2023, month: '04', title: '23-1 성적우수장학생', description: '', side: 'right' },
    { year: 2023, month: '04', title: '한국로봇항공기 대회', description: '~ 2023.07', side: 'left' },
    { year: 2023, month: '07', title: '그룹홈 미술 멘토링 봉사', description: ' ~ 현재', side: 'left' },
    { year: 2023, month: '06', title: '대학생자작자동차 대회', description: '~ 2023.08', side: 'right' },
    { year: 2023, month: '08', title: 'AMRL 학부연구생', description: '~ 현재', side: 'right' },
    { year: 2023, month: '10', title: 'UAG-UGV 군중 대피 시스템 연구', description: ' ~ 현재', side: 'left' },
    { year: 2023, month: '10', title: '대학생창작모빌리티 경진대회', description: '', side: 'right' },
    { year: 2023, month: '06', title: '대학생자작자동차 대회', description: '~ 2023.08', side: 'right' },
    { year: 2023, month: '08', title: 'AMRL 학부연구생', description: '~ 현재', side: 'right' },
    { year: 2023, month: '10', title: 'UAG-UGV 군중 대피 시스템 연구', description: ' ~ 현재', side: 'left' },
    { year: 2023, month: '12', title: '스마트카융합설계 대회', description: '', side: 'right' },
    { year: 2024, month: '03', title: '스푼메이트 앱 개발', description: '~ 2024.06', side: 'left' },
    { year: 2024, month: '06', title: '러닝팩토리 앱 개발', description: '', side: 'right' },
    { year: 2024, month: '04', title: 'PET-filament 변환 장치 프로젝트', description: '~ 2024.07', side: 'right' },
    { year: 2024, month: '06', title: 'HL 만도 인턴', description: '~ 2024.08', side: 'left' },
    { year: 2024, month: '08', title: '대통령과학장학생', description: '~ 현재', side: 'right' },
    { year: 2024, month: '09', title: 'SKKU 주차공간 확인 앱', description: '~ 현재', side: 'left' },
    { year: 2024, month: '10', title: '재활보조 로봇의수 프로젝트', description: '~ 현재', side: 'right' }
  ];

  return (

    <div className="timeline-container">
        <div className="timeline-line"></div> {/* 중앙 선 */}
        {timelineData.map((item, index) => (
            <TimelineItem
            key={index}
            year={item.year}
            month={item.month}
            title={item.title}
            description={item.description}
            side={item.side}
            />
        ))}

    </div>

  );
  
};

export default Section3;