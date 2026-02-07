import React from 'react';

const DataEngineeringIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3H19V7H5V3Z" fill={color} />
    <path d="M5 9H19V13H5V9Z" fill={color} />
    <path d="M5 15H19V19H5V15Z" fill={color} />
    <path d="M3 21H21" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="7" cy="5" r="1" fill="white" />
    <circle cx="7" cy="11" r="1" fill="white" />
    <circle cx="7" cy="17" r="1" fill="white" />
    <path d="M11 5H17" stroke="white" strokeWidth="2" />
    <path d="M11 11H17" stroke="white" strokeWidth="2" />
    <path d="M11 17H17" stroke="white" strokeWidth="2" />
  </svg>
);

export default DataEngineeringIcon;