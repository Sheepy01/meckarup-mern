import React, { useRef, useState, useEffect } from 'react';
import { ArrowForward, ArrowBack, KeyboardArrowRight, School } from '@mui/icons-material';
import styles from './PopularCourses.module.css';
import CourseBadge from './CourseBadge';

// Import all icons
import PythonIcon from './icons/PythonIcon';
import RIcon from './icons/RIcon';
import ExcelIcon from './icons/ExcelIcon';
import SPSSIcon from './icons/SPSSIcon';
import LatexIcon from './icons/LatexIcon';
import DataEngineeringIcon from './icons/DataEngineeringIcon';
import JavaIcon from './icons/JavaIcon';
import CIcon from './icons/CIcon';
import MATLABIcon from './icons/MATLABIcon';
import GISIcon from './icons/GISIcon';

const PopularCourses = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const baseCourses = [
    {
      id: 1,
      icon: PythonIcon,
      name: "Python Programming",
      description: "Master Python from basics to advanced data analysis, automation, and machine learning.",
      color: "#3B82F6",
      accentColor: "#10b96a"
    },
    {
      id: 2,
      icon: RIcon,
      name: "R for Data Science",
      description: "Statistical computing, data visualization, and advanced analytics using R programming.",
      color: "#276DC3",
      accentColor: "#EF3B2C"
    },
    {
      id: 3,
      icon: ExcelIcon,
      name: "Excel Mastery",
      description: "Advanced Excel formulas, pivot tables, data analysis, and business intelligence tools.",
      color: "#21A366",
      accentColor: "#185C37"
    },
    {
      id: 4,
      icon: SPSSIcon,
      name: "SPSS Statistical Analysis",
      description: "Professional statistical analysis, hypothesis testing, and research data processing.",
      color: "#3B82F6",
      accentColor: "#10b96a"
    },
    {
      id: 5,
      icon: LatexIcon,
      name: "LaTeX for Academic Writing",
      description: "Professional document preparation for research papers, theses, and academic publications.",
      color: "#008080",
      accentColor: "#006666"
    },
    {
      id: 6,
      icon: DataEngineeringIcon,
      name: "Data Engineering",
      description: "ETL pipelines, big data processing, cloud data solutions, and database management.",
      color: "#8B5CF6",
      accentColor: "#7C3AED"
    },
    {
      id: 7,
      icon: JavaIcon,
      name: "Java Programming",
      description: "Object-oriented programming, enterprise application development, and Spring framework.",
      color: "#007396",
      accentColor: "#ED8B00"
    },
    {
      id: 8,
      icon: CIcon,
      name: "C Programming",
      description: "Core programming concepts, system programming, and embedded systems development.",
      color: "#A8B9CC",
      accentColor: "#555555"
    },
    {
      id: 9,
      icon: MATLABIcon,
      name: "Digital Image Processing (MATLAB)",
      description: "Image analysis, computer vision, and signal processing using MATLAB tools.",
      color: "#0076A8",
      accentColor: "#FF9900"
    },
    {
      id: 10,
      icon: GISIcon,
      name: "Geospatial Analysis (R/GIS)",
      description: "Spatial data analysis, mapping, and GIS applications for environmental and urban planning.",
      color: "#34A853",
      accentColor: "#4285F4"
    }
  ];

  // Duplicate courses for seamless infinite scroll
  const courses = [...baseCourses, ...baseCourses, ...baseCourses];

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollPosition(scrollLeft);
      setMaxScroll(scrollWidth - clientWidth);
      
      // Calculate active dot based on original courses only
      const baseWidth = (280 + 16) * baseCourses.length; // width of one set
      const progress = scrollLeft % baseWidth;
      setActiveDot(Math.floor(progress / baseWidth * 5));
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollState);
      
      // Auto-scroll animation
      let animationId;
      let startTime;
      let progress = 0;
      const speed = 50; // pixels per second
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        if (!isPaused) {
          const elapsed = timestamp - startTime;
          progress = (elapsed / 1000) * speed;
          
          if (scrollContainer) {
            scrollContainer.scrollLeft = progress;
            
            // Reset to beginning when we've scrolled through one full set
            const oneSetWidth = (280 + 16) * baseCourses.length;
            if (progress >= oneSetWidth) {
              startTime = timestamp;
              scrollContainer.scrollLeft = 0;
              progress = 0;
            }
          }
        }
        
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', updateScrollState);
        }
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }
  }, [isPaused, baseCourses.length]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newPosition = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  const scrollToDot = (index) => {
    if (scrollRef.current) {
      const baseWidth = (280 + 16) * baseCourses.length;
      const scrollAmount = (baseWidth / 5) * index;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.popularCourses} id="popular-courses">
      {/* Decorative Elements */}
      <div className={`${styles.floatingElement} ${styles.float1}`}></div>
      <div className={`${styles.floatingElement} ${styles.float2}`}></div>

      <div className={styles.sectionContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerContent}>
            <h2>Most Popular Courses</h2>
            <p>Join thousands of students learning in-demand skills through our comprehensive training programs</p>
          </div>
          <a href="/all-courses" className={styles.viewAllLink}>
            View All Courses
            <KeyboardArrowRight />
          </a>
        </div>

        {/* Scrollable Courses */}
        <div className={styles.scrollContainer}>
          <div 
            ref={scrollRef}
            className={styles.coursesScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {courses.map((course, index) => (
              <CourseBadge
                key={`${course.id}-${index}`}
                icon={course.icon}
                name={course.name}
                description={course.description}
                enrollLink={`/courses/${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                mode="Online + Offline"
                color={course.color}
                accentColor={course.accentColor}
                isHovered={hoveredCard === `${course.id}-${index}`}
                onHover={() => setHoveredCard(`${course.id}-${index}`)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          textAlign: 'center'
        }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            background: 'rgba(16, 185, 106, 0.1)',
            color: '#10b96a',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            <School fontSize="small" />
            All courses include: Certificate • Project Portfolio • Placement Support
          </div>
          <p style={{ color: '#6B7280', marginBottom: '1.5rem' }}>
            Flexible learning options with expert instructors and hands-on projects
          </p>
          <a 
            href="/contact-advisor"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <School />
            Book Free Demo Class
            <ArrowForward />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;