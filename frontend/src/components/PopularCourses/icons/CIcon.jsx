import React from 'react';

const CIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
    <path d="M14 9H10V15H14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M10 12H14" stroke={color} strokeWidth="2" />
  </svg>
);

export default CIcon;