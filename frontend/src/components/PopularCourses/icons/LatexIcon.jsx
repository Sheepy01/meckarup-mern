import React from 'react';

const LatexIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3H19V21H5V3Z" fill={color} />
    <path d="M8 7L12 11L16 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 17L12 13L16 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7V17" stroke="white" strokeWidth="2" />
  </svg>
);

export default LatexIcon;