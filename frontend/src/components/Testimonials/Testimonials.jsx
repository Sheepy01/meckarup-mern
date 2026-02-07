import React, { useState, useEffect, useRef } from 'react';
import { ArrowBack, ArrowForward, Refresh, FormatQuote } from '@mui/icons-material';
import styles from './Testimonials.module.css';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const autoRotateRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      initials: 'AP',
      name: 'Amit Prakash',
      role: 'MSc Student',
      courseOrService: 'Python Programming Course',
      quote: 'The Python course at Meckarup transformed my data analysis skills completely. The hands-on projects and real-world examples made complex concepts easy to understand. I went from knowing basic syntax to building complete data pipelines within 3 months!',
      color: '#1A365D'
    },
    {
      id: 2,
      initials: 'PS',
      name: 'Priya Sharma',
      role: 'Data Analyst',
      courseOrService: 'SPSS Statistical Analysis',
      quote: 'As a working professional, I needed a course that fit my schedule while delivering practical skills. The SPSS training was perfectly structured with weekend batches and expert guidance. I immediately applied the advanced statistical methods to my workplace projects with great results.',
      color: '#3B82F6'
    },
    {
      id: 3,
      initials: 'RM',
      name: 'Dr. Rajesh Mehta',
      role: 'Research Scientist',
      courseOrService: 'LaTeX & Publication Support',
      quote: 'Meckarup\'s LaTeX and research publication service was instrumental in getting my paper accepted in a top-tier journal. Their attention to formatting details, bibliography management, and journal-specific requirements exceeded my expectations. Highly recommended for academic writers!',
      color: '#10b96a'
    },
    {
      id: 4,
      initials: 'AK',
      name: 'Ananya Kumar',
      role: 'Startup Founder',
      courseOrService: 'Custom Software Development',
      quote: 'We partnered with Meckarup for developing our inventory management system, and the results were outstanding. Their team understood our unique requirements, delivered ahead of schedule, and provided excellent post-deployment support. Truly a professional and reliable tech partner.',
      color: '#8B5CF6'
    }
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoRotate();
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    resetAutoRotate();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoRotate();
  };

  const resetAutoRotate = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
    
    if (isAutoRotating) {
      autoRotateRef.current = setInterval(goToNext, 5000);
    }
  };

  useEffect(() => {
    if (isAutoRotating) {
      autoRotateRef.current = setInterval(goToNext, 5000);
    }
    
    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [isAutoRotating]);

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
    if (!isAutoRotating) {
      autoRotateRef.current = setInterval(goToNext, 5000);
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    }
  };

  return (
    <section className={styles.testimonialsSection} id="testimonials">
      {/* Decorative Elements */}
      <div className={`${styles.floatingElement} ${styles.float1}`}></div>
      <div className={`${styles.floatingElement} ${styles.float2}`}></div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            <FormatQuote fontSize="small" />
            Success Stories
          </div>
          <h2 className={styles.sectionTitle}>
            What Our <span>Students & Clients</span> Say
          </h2>
          <p className={styles.sectionSubtitle}>
            Join thousands of satisfied learners and businesses who have transformed their skills and operations with Meckarup
          </p>
        </div>

        {/* Carousel Container */}
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === currentIndex}
                index={index}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className={styles.navigation}>
            <button 
              className={styles.navButton}
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <ArrowBack />
            </button>
            
            {/* Dots Indicator */}
            <div className={styles.dotsContainer}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className={styles.navButton}
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ArrowForward />
            </button>
          </div>

          {/* Auto-rotate Toggle */}
          <div className={styles.autoRotateIndicator}>
            <button
              onClick={toggleAutoRotate}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isAutoRotating ? '#3B82F6' : '#6B7280',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem'
              }}
              aria-label={isAutoRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
            >
              <Refresh 
                className={isAutoRotating ? styles.rotateIcon : ''}
                fontSize="small"
              />
              <span>
                {isAutoRotating ? 'Auto-rotating (5s)' : 'Paused - Click to resume'}
              </span>
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{ 
          marginTop: '4rem',
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
            background: 'rgba(26, 54, 93, 0.1)',
            color: '#1A365D',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            <FormatQuote fontSize="small" />
            All testimonials are verified from real students and clients
          </div>
          <p style={{ color: '#6B7280', marginBottom: '1.5rem' }}>
            Want to share your success story? We'd love to hear about your experience!
          </p>
          <a 
            href="/share-testimonial"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: 'linear-gradient(135deg, #1A365D 0%, #3B82F6 100%)',
              color: 'white',
              borderRadius: '12px',
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
            Share Your Experience
            <ArrowForward fontSize="small" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;