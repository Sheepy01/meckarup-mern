import React from 'react';

const GISIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H21V21H3V3Z" fill={color} />
    <path d="M7 7H17V17H7V7Z" fill="white" />
    <circle cx="12" cy="12" r="3" fill={color} />
    <path d="M7 7L12 12L7 17" stroke={color} strokeWidth="2" />
    <path d="M17 7L12 12L17 17" stroke={color} strokeWidth="2" />
  </svg>
);

export default GISIcon;