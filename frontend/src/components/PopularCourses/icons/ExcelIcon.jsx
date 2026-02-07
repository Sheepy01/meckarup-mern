import React from 'react';

const ExcelIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#21A366" />
    <path d="M8 7L11 12L8 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 7L16 12L13 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 7H21V17H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 7H6V17H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default ExcelIcon;