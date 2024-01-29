import React, { useState, useEffect } from 'react';
import './style.css';
import {topRight} from '../../assets/123'

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState({ width: 0, height: 0 });
  const [isMagnetizable, setIsMagnetizable] = useState(false);
  const [magnetCoords, setMagnetCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      const magnetizableElement = document.querySelector('.magnetizable:hover');
      if (magnetizableElement) {
        const { width, height, x, y } = magnetizableElement.getBoundingClientRect();
        setCursorSize({ width, height });
        setMagnetCoords({ x, y });
        setIsMagnetizable(true);
      } else {
        setIsMagnetizable(false);
      }
      setPosition({ x: event.pageX, y: event.pageY });
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isMagnetizable ? 'magnetizable' : ''}`}
      style={{
        left: isMagnetizable ? magnetCoords.x : position.x,
        top: isMagnetizable ? magnetCoords.y : position.y,
        width: isMagnetizable ? cursorSize.width : '',
        height: isMagnetizable ? cursorSize.height + 5 : ''
      }}
    >
    <div className="top-left" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="corner-svg">
        <path d="M15.6992 1H0.999219V15.7" stroke="white" strokeWidth="3"/>
      </svg></div>
<div className="top-right" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="corner-svg">
        <path d="M15.6992 1H0.999219V15.7" stroke="white" strokeWidth="3" transform="rotate(90, 8, 8)"/>
      </svg></div>
<div className="bottom-left" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="corner-svg">
        <path d="M15.6992 1H0.999219V15.7" stroke="white" strokeWidth="3" transform="rotate(270, 8, 8)"/>
      </svg></div>
<div className="bottom-right" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="corner-svg">
        <path d="M15.6992 1H0.999219V15.7" stroke="white" strokeWidth="3" transform="rotate(180, 8, 8)"/>
      </svg></div>
    </div>
  );
};  