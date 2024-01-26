import React, { useState, useEffect } from 'react';
import './style.css';

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {

  const mouseX = e.pageX - 14;
  const mouseY = e.pageY - 14; // хуета решение
  
    setPosition({ x: mouseX, y: mouseY});
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: position.x, top: position.y }}></div>
  );
};
