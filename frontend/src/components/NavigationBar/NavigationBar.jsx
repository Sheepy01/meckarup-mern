import React, { useState, useEffect } from 'react';
import { KeyboardArrowDown, ArrowForward, Menu } from '@mui/icons-material';
import styles from './NavigationBar.module.css';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Set active page based on current URL
    const path = window.location.pathname;
    const page = path === '/' ? 'home' : path.split('/')[1].toLowerCase();
    setActivePage(page);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Courses', 
      href: '/courses',
      hasDropdown: true,
      megaMenu: true
    },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        'Software Development',
        'App Development',
        '3D Modelling',
        'Research Support'
      ]
    },
    { 
      name: 'About', 
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        'Company',
        'R&D',
        'People'
      ]
    },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <a href="/" className={styles.logoContainer}>
            <div className={styles.logoIcon}>M</div>
            <span className={styles.logoText}>Meckarup</span>
            <span className={styles.logoTagline}>Tech Education & Solutions</span>
          </a>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <ul className={styles.navList}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <a 
                    href={item.href}
                    className={`${styles.navLink} ${activePage === item.name.toLowerCase() ? styles.active : ''}`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <KeyboardArrowDown className={styles.dropdownIcon} />
                    )}
                  </a>

                  {/* Mega Menu for Courses */}
                  {item.megaMenu && <MegaMenu />}

                  {/* Regular Dropdown for other items */}
                  {item.dropdownItems && (
                    <div className={styles.dropdownContainer}>
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <a 
                          key={idx}
                          href={`${item.href}/${dropdownItem.toLowerCase().replace(' ', '-')}`}
                          className={styles.dropdownItem}
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button */}
            <a href="/enroll" className={styles.ctaButton}>
              Enroll Now
              <ArrowForward fontSize="small" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Mobile CTA Button */}
          <a href="/enroll" className={`${styles.ctaButton} ${styles.mobileCta}`}>
            Enroll
          </a>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activePage={activePage}
      />
    </>
  );
};

export default NavigationBar;