import React, { useEffect, useRef } from 'react';
import { School, Code, KeyboardArrowRight, TrendingUp, People, LocationOn } from '@mui/icons-material';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className={styles.heroContainer}>
      {/* Animated Background Elements */}
      <div className={styles.floatingCircle1}></div>
      <div className={styles.floatingCircle2}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          {/* Badge */}
          <div className={styles.badge}>
            <School fontSize="small" />
            <span>Patna's Premier Tech Education & Development Hub</span>
          </div>

          {/* Main Headline */}
          <h1 className={styles.headline}>
            Learn. <span className={styles.gradientText}>Build.</span> Innovate.
          </h1>

          {/* Subheading */}
          <p className={styles.subheading}>
            Professional training in <span className={styles.highlight}>Python, R, MATLAB, Java, Data Engineering</span> and more. 
            Plus custom <span className={styles.highlight}>software development, app development, and 3D modelling</span> - 
            delivered online and offline to students and professionals across India.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaContainer}>
            <a href="#courses" className={styles.primaryButton}>
              <Code /> Explore Courses
              <KeyboardArrowRight />
            </a>
            <a href="#services" className={styles.secondaryButton}>
              <TrendingUp /> Our Services
              <KeyboardArrowRight />
            </a>
          </div>

          {/* Stats */}
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Courses</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Students Trained</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                <LocationOn fontSize="small" /> Patna
              </div>
              <div className={styles.statLabel}>Based in Bihar</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
};

export default HeroSection;