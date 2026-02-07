import React from 'react';

const Cube3dIcon = ({ size = 64, color = "#3B82F6" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M32 12L12 24V44L32 56L52 44V24L32 12Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinejoin="round"
    />
    <path 
      d="M32 12V56" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 24L32 32L52 24" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 44L32 52L52 44" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M32 32V52" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle 
      cx="32" 
      cy="32" 
      r="3" 
      fill={color}
    />
    <circle 
      cx="22" 
      cy="38" 
      r="2" 
      fill={color}
    />
    <circle 
      cx="42" 
      cy="38" 
      r="2" 
      fill={color}
    />
    <circle 
      cx="22" 
      cy="26" 
      r="2" 
      fill={color}
    />
    <circle 
      cx="42" 
      cy="26" 
      r="2" 
      fill={color}
    />
  </svg>
);

export default Cube3dIcon;