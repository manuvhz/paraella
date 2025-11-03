
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const dotStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
  };

  const outlineStyle = {
    transform: `translate3d(calc(${position.x}px - 16px), calc(${position.y}px - 16px), 0) scale(${isPointer ? 1.5 : 1})`,
  };

  return (
    <>
      <div 
        className="cursor-outline fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out"
        style={outlineStyle} 
      />
      <div
        className="cursor-dot fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-50"
        style={dotStyle}
      />
    </>
  );
};

export default CustomCursor;