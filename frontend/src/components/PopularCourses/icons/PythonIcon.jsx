import React from 'react';

const PythonIcon = ({ size = 24, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.5 2 11 3.5 11 5.5V8H19V11H13V9.5C13 7.5 10.5 6 8.5 6C6.5 6 5 7.5 5 9.5V14.5C5 16.5 6.5 18 8.5 18H11V22H14V19H22V16H16V17.5C16 19.5 18.5 21 20.5 21C22.5 21 24 19.5 24 17.5V12.5C24 10.5 22.5 9 20.5 9H17V5.5C17 3.5 14.5 2 12.5 2H12Z" fill={color} />
    <circle cx="9.5" cy="9.5" r="1.5" fill="white" />
    <circle cx="19.5" cy="17.5" r="1.5" fill="white" />
  </svg>
);

export default PythonIcon;