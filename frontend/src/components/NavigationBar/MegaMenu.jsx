import React from 'react';
import styles from './NavigationBar.module.css';
import { Code, DataObject, Calculate, Functions, Storage, Description, Science, Map } from '@mui/icons-material';

const MegaMenu = () => {
  const programmingCourses = [
    { name: 'Python', icon: <Code />, color: 'programming' },
    { name: 'Java', icon: <Code />, color: 'programming' },
    { name: 'C Programming', icon: <Code />, color: 'programming' },
    { name: 'R Programming', icon: <DataObject />, color: 'programming' },
  ];

  const dataResearchCourses = [
    { name: 'Excel', icon: <Calculate />, color: 'data' },
    { name: 'SPSS', icon: <Functions />, color: 'data' },
    { name: 'Data Engineering', icon: <Storage />, color: 'data' },
    { name: 'LaTeX', icon: <Description />, color: 'research' },
    { name: 'MATLAB', icon: <Science />, color: 'research' },
    { name: 'Geospatial Analysis/GIS', icon: <Map />, color: 'research' },
  ];

  return (
    <div className={styles.megaMenuContainer}>
      <div className={styles.megaMenuGrid}>
        {/* Column 1: Programming */}
        <div className={styles.megaMenuColumn}>
          <h4>Programming</h4>
          <ul className={styles.megaMenuList}>
            {programmingCourses.map((course, index) => (
              <li key={index} className={styles.megaMenuItem}>
                <a href={`/courses/${course.name.toLowerCase().replace(' ', '-')}`} className={styles.megaMenuLink}>
                  <span className={`${styles.courseIcon} ${styles[course.color]}`}>
                    {course.icon}
                  </span>
                  <span>{course.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Data & Research */}
        <div className={styles.megaMenuColumn}>
          <h4>Data and Research</h4>
          <ul className={styles.megaMenuList}>
            {dataResearchCourses.map((course, index) => (
              <li key={index} className={styles.megaMenuItem}>
                <a href={`/courses/${course.name.toLowerCase().replace(' ', '-')}`} className={styles.megaMenuLink}>
                  <span className={`${styles.courseIcon} ${styles[course.color]}`}>
                    {course.icon}
                  </span>
                  <span>{course.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
        <a href="/all-courses" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: '#3B82F6',
          fontWeight: '600',
          textDecoration: 'none',
          fontSize: '0.9rem'
        }}>
          View all 50+ courses →
        </a>
      </div>
    </div>
  );
};

export default MegaMenu;