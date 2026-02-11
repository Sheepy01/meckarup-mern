import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setIsMegaMenuOpen(false);
  };

  const handleDropdownToggle = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
      setIsMegaMenuOpen(false);
    }
  };

  const handleMegaMenuToggle = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <div className={styles.heroContainer}>
      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Your destination for science and technology
          </h1>
          <p className={styles.heroSubtitle}>
            Custom software development, app development, and 3D modelling. <br/> 
            Plus Professional training in Python, R, MATLAB, Java, Data Engineering and more.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/services" className={styles.primaryBtn}>Explore Services</a>
            <a href="/courses" className={styles.secondaryBtn}>Our Courses</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;