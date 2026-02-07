import React, { useState, useRef, useEffect } from 'react';
import styles from './PopularCourses.module.css';
import { ArrowForward, Laptop } from '@mui/icons-material';

const CourseBadge = ({ 
  icon: Icon, 
  name, 
  description, 
  enrollLink = "#",
  mode = "Online + Offline",
  color = "#3B82F6",
  accentColor = "#10b96a",
  isHovered = false,
  onHover,
  onLeave
}) => {
  const [localIsHovered, setLocalIsHovered] = useState(false);
  const badgeRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLocalIsHovered(true);
    if (onHover) onHover();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setLocalIsHovered(false);
      if (onLeave) onLeave();
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const expanded = isHovered || localIsHovered;

  return (
    <div 
      ref={badgeRef}
      className={`${styles.courseBadge} ${expanded ? styles.expanded : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--course-color': color,
        '--accent-color': accentColor
      }}
    >
      {/* Badge Content */}
      <div className={styles.badgeContent}>
        <div className={styles.iconWrapper}>
          <Icon />
        </div>
        
        <div className={styles.textContent}>
          <h4 className={styles.courseName}>{name}</h4>
          <div className={styles.modeTag}>
            <Laptop fontSize="small" />
            <span>{mode}</span>
          </div>
        </div>
      </div>

      {/* Expanded Content - Only shows on hover */}
      {expanded && (
        <div className={styles.expandedContent}>
          <p className={styles.courseDescription}>{description}</p>
          
          <a 
            href={enrollLink} 
            className={styles.enrollButton}
            onClick={(e) => {
              e.stopPropagation();
              // Add analytics or enrollment logic here
            }}
          >
            <span>Enroll Now</span>
            <ArrowForward className={styles.enrollIcon} />
          </a>
        </div>
      )}

      {/* Progress Indicator (only shows on hover) */}
      <div className={styles.progressIndicator}>
        <div 
          className={styles.progressBar}
          style={{ 
            width: expanded ? '100%' : '0%',
            transition: expanded ? 'width 2s linear' : 'none'
          }}
        ></div>
      </div>
    </div>
  );
};

export default CourseBadge;