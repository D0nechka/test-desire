import React, { useState, useEffect } from 'react';
// import './Magnet.css'; // Подключаем стили для компонента Magnet

const Magnet = ({ children }) => {
  const [cursorSize, setCursorSize] = useState({ width: 50, height: 50 });
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const targetElement = document.elementFromPoint(e.clientX, e.clientY);

      if (targetElement && targetElement.classList.contains('magnetizable')) {
        const { width, height, top, left } = targetElement.getBoundingClientRect();
        setCursorSize({ width, height });
        setHoveredElement({ top, left });
      } else {
        setHoveredElement(null);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {hoveredElement && (
        <div
          className="custom-cursor"
          style={{
            width: cursorSize.width + 'px',
            height: cursorSize.height + 'px',
            top: hoveredElement.top + 'px',
            left: hoveredElement.left + 'px',
          }}
        />
      )}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { className: 'magnetizable' });
      })}
    </>
  );
};

export default Magnet;