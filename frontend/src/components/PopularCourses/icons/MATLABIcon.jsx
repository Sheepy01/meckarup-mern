import React from 'react';

const MATLABIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#0076A8" />
    <path d="M7 7L12 12L7 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7L17 12L12 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="19.5" cy="19.5" r="1.5" fill="#FF9900" />
  </svg>
);

export default MATLABIcon;