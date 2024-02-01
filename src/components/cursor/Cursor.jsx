import React, { useState, useEffect } from 'react';
import { Scope } from '../scope/Scope';
import './style.css';

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState({ width: 0, height: 0 });
  const [isMagnetizable, setIsMagnetizable] = useState(false);
  const [magnetCoords, setMagnetCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      const magnetizableElement = document.querySelector('.red:hover');
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
        left: isMagnetizable ? magnetCoords.x : position.x - window.pageXOffset,
        top: isMagnetizable ? magnetCoords.y : position.y - window.pageYOffset ,
        width: isMagnetizable ? cursorSize.width : '',
        height: isMagnetizable ? cursorSize.height : ''
      }}
    >
        <Scope/>
    </div>
  );
};  