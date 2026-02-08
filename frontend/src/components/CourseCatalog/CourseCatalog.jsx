import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { School, TrendingUp, Timer, People, Code, DataArray, Science, Engineering } from '@mui/icons-material';
import styles from './CourseCatalog.module.css';
import FilterBar from './FilterBar';
import CourseCard from './CourseCard';
import NavigationBar from '../NavigationBar/NavigationBar';

const CourseCatalog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const allCourses = [
    {
      id: 1,
      title: 'Python Programming',
      description: 'Master Python from basics to advanced data analysis, automation, and machine learning applications.',
      category: 'Programming',
      difficulty: 'Beginner-Advanced',
      mode: 'Online + Offline',
      duration: '8 Weeks',
      slug: 'python-programming',
      tags: ['programming', 'python', 'data-analysis']
    },
    {
      id: 2,
      title: 'R for Data Science',
      description: 'Statistical computing, data visualization, and advanced analytics using R programming language.',
      category: 'Data Science',
      difficulty: 'Intermediate',
      mode: 'Online + Offline',
      duration: '6 Weeks',
      slug: 'r-data-science',
      tags: ['data-science', 'r', 'statistics']
    },
    {
      id: 3,
      title: 'Excel for Data Analysis',
      description: 'Advanced Excel formulas, pivot tables, data analysis, and business intelligence tools.',
      category: 'Data Science',
      difficulty: 'Beginner',
      mode: 'Online + Offline',
      duration: '4 Weeks',
      slug: 'excel-data-analysis',
      tags: ['data-science', 'excel', 'business-intelligence']
    },
    {
      id: 4,
      title: 'SPSS Statistical Analysis',
      description: 'Professional statistical analysis, hypothesis testing, and research data processing.',
      category: 'Data Science',
      difficulty: 'Intermediate',
      mode: 'Online + Offline',
      duration: '5 Weeks',
      slug: 'spss-statistical-analysis',
      tags: ['data-science', 'spss', 'research']
    },
    {
      id: 5,
      title: 'LaTeX for Academic Writing',
      description: 'Professional document preparation for research papers, theses, and academic publications.',
      category: 'Research Tools',
      difficulty: 'Beginner',
      mode: 'Online + Offline',
      duration: '4 Weeks',
      slug: 'latex-academic-writing',
      tags: ['research-tools', 'latex', 'academic']
    },
    {
      id: 6,
      title: 'Data Engineering',
      description: 'ETL pipelines, big data processing, cloud data solutions, and database management.',
      category: 'Data Science',
      difficulty: 'Advanced',
      mode: 'Online + Offline',
      duration: '10 Weeks',
      slug: 'data-engineering',
      tags: ['data-science', 'engineering', 'big-data']
    },
    {
      id: 7,
      title: 'Java Programming',
      description: 'Object-oriented programming, enterprise application development, and Spring framework.',
      category: 'Programming',
      difficulty: 'Beginner-Advanced',
      mode: 'Online + Offline',
      duration: '10 Weeks',
      slug: 'java-programming',
      tags: ['programming', 'java', 'enterprise']
    },
    {
      id: 8,
      title: 'C Programming',
      description: 'Core programming concepts, system programming, and embedded systems development.',
      category: 'Programming',
      difficulty: 'Beginner-Intermediate',
      mode: 'Online + Offline',
      duration: '6 Weeks',
      slug: 'c-programming',
      tags: ['programming', 'c', 'systems']
    },
    {
      id: 9,
      title: 'Digital Image Processing with MATLAB',
      description: 'Image analysis, computer vision, and signal processing using MATLAB tools and libraries.',
      category: 'Engineering',
      difficulty: 'Advanced',
      mode: 'Online + Offline',
      duration: '8 Weeks',
      slug: 'matlab-image-processing',
      tags: ['engineering', 'matlab', 'image-processing']
    },
    {
      id: 10,
      title: 'Geospatial Analysis using R/GIS',
      description: 'Spatial data analysis, mapping, and GIS applications for environmental and urban planning.',
      category: 'Data Science',
      difficulty: 'Advanced',
      mode: 'Online + Offline',
      duration: '8 Weeks',
      slug: 'geospatial-analysis-r-gis',
      tags: ['data-science', 'gis', 'spatial-analysis']
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    
    const timer = setTimeout(() => {
      let filtered = allCourses;
      
      if (activeFilter === 'programming') {
        filtered = allCourses.filter(course => 
          course.tags.includes('programming')
        );
      } else if (activeFilter === 'data-science') {
        filtered = allCourses.filter(course => 
          course.tags.includes('data-science')
        );
      } else if (activeFilter === 'research-tools') {
        filtered = allCourses.filter(course => 
          course.tags.includes('research-tools')
        );
      } else if (activeFilter === 'engineering') {
        filtered = allCourses.filter(course => 
          course.tags.includes('engineering')
        );
      }
      
      setFilteredCourses(filtered);
      setIsAnimating(false);
    }, 300); // Animation duration
    
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <div className={styles.courseCatalog}>
      <NavigationBar />
      
      <div className={styles.container}>
        {/* Page Header */}
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            Our <span>Courses</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Hands-on training for students and professionals – available online and in-person
          </p>
          
          {/* Stats Bar */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Total Courses</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1,250+</div>
              <div className={styles.statLabel}>Students Trained</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>8+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Learning Support</div>
            </div>
          </div>
        </header>

        {/* Filter Bar */}
        <section className={styles.filterSection}>
          <FilterBar 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
        </section>

        {/* Courses Grid */}
        <section>
          <div className={`${styles.coursesGrid} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
            {filteredCourses.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <Code fontSize="inherit" />
                </div>
                <h3 className={styles.emptyTitle}>No courses found</h3>
                <p className={styles.emptyText}>
                  Try selecting a different filter category
                </p>
              </div>
            ) : (
              filteredCourses.map((course, index) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  index={index % 3} // Stagger animation
                />
              ))
            )}
          </div>
        </section>

        {/* Footer CTA */}
        <section className={styles.footerCTA}>
          <h2 className={styles.ctaTitle}>Can't Find What You're Looking For?</h2>
          <p className={styles.ctaText}>
            We offer custom training programs and corporate workshops tailored to your specific needs. 
            Contact us to discuss your requirements.
          </p>
          
          <div className={styles.ctaButtons}>
            <a 
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                background: '#1A365D',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(26, 54, 93, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Science />
              Request Custom Training
            </a>
            
            <a 
              href="/download-brochure"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                background: 'transparent',
                color: '#1A365D',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '2px solid #1A365D'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#1A365D';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#1A365D';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <TrendingUp />
              Download Course Catalog
            </a>
          </div>
          
          {/* Additional Info */}
          <div style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #E5E7EB',
            color: '#6B7280',
            fontSize: '0.875rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <School fontSize="small" />
                Certificate on Completion
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <People fontSize="small" />
                Placement Assistance
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Timer fontSize="small" />
                Flexible Scheduling
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseCatalog;