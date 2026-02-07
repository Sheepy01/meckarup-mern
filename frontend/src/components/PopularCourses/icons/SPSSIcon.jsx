import React from 'react';

const SPSSIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" fill={color} />
    <path d="M8 8H16V16H8V8Z" fill="white" />
    <circle cx="12" cy="12" r="2" fill={color} />
    <path d="M12 8L8 12L12 16L16 12L12 8Z" stroke="white" strokeWidth="2" />
  </svg>
);

export default SPSSIcon;