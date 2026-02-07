import React from 'react';

const RIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3H12C15.866 3 19 6.134 19 10C19 13.866 15.866 17 12 17H8V21H5V3Z" fill={color} />
    <path d="M8 7H11C12.6569 7 14 8.34315 14 10C14 11.6569 12.6569 13 11 13H8V7Z" fill="white" />
    <path d="M16 14L19 21" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M13 14L16 21" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default RIcon;