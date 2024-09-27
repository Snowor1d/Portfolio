import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const FloatingCircle = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const props = useSpring({
    left: mousePos.x,
    top: mousePos.y,
    config: { tension: 40, friction: 40 },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current){
        const rect = containerRef.current.getBoundingClientRect(); // 부모 요소의 경계값 가져오기
        const x = e.clientX - rect.left; // 부모 요소 기준으로 마우스 X 좌표
        const y = e.clientY - rect.top;  // 부모 요소 기준으로 마우스 Y 좌표
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mouseover', handleMouseMove);
    return () => {
      window.removeEventListener('mouseover', handleMouseMove);
    };
  }, []);

  return (
    <animated.div
      style={{
        ...props,
        position: 'relative',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: '#007BFF',
      }}
    />
  );
};

export default FloatingCircle;