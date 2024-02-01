import React from 'react';
import './style.css'

const Magnet = ({ children }) => {
  const childrenWithProps = React.Children.map(children, child => {
    return React.cloneElement(child);
  });

  return (
    <div className='red'>
      {childrenWithProps}
    </div>
  );
};

export default Magnet;
