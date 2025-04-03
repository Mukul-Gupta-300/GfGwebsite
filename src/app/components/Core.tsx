"use client";

import React, { useState, useEffect } from 'react';
import { Code, Target } from 'lucide-react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div 
      className="fixed z-50 pointer-events-none"
      style={{
        left: `${position.x}px`, 
        top: `${position.y}px`, 
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div 
        className={`
          relative transition-all duration-200 ease-out
          ${isHovering ? 'scale-150' : 'scale-100'}
        `}
      >
        {/* Main Cursor */}
        <div 
          className="
            w-4 h-4 bg-green-400 rounded-full 
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            opacity-70 backdrop-blur-sm
            border-2 border-blue-500
          "
        />

        {/* Tech-Themed Overlay */}
        <div 
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            ${isHovering ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-300
          `}
        >
          <Code 
            className="text-blue-600" 
            size={24} 
            strokeWidth={2} 
          />
        </div>

        {/* Outer Glow Ring */}
        <div 
          className={`
            w-12 h-12 rounded-full absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2
            border-2 border-green-300 animate-ping
            ${isHovering ? 'opacity-30' : 'opacity-0'}
            transition-opacity duration-300
          `}
        />
      </div>
    </div>
  );
};

export default CustomCursor;