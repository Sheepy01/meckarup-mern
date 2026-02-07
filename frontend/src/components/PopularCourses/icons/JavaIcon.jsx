import React from 'react';

const JavaIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C7 2 4 5 4 9C4 13 7 16 12 16C17 16 20 13 20 9C20 5 17 2 12 2Z" fill={color} />
    <path d="M8 9L12 13L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9V20" stroke="white" strokeWidth="2" />
    <circle cx="12" cy="22" r="2" fill={color} />
  </svg>
);

export default JavaIcon;