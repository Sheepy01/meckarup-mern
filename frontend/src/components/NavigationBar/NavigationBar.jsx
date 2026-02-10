import React, { useState, useEffect, useRef } from 'react';
import { KeyboardArrowDown, ArrowForward, Menu } from '@mui/icons-material';
import styles from './NavigationBar.module.css';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import logo from './logo/meckarup_logo.png';
import logoText from './logo/meckarup_text.png';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [isFixed, setIsFixed] = useState(true);
  const navRef = useRef(null);

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

  // Toggle navbar between fixed and absolute so it scrolls away with ServicesSection
  useEffect(() => {
    const navEl = navRef.current;
    const servicesEl = document.getElementById('services-section');
    if (!navEl || !servicesEl) return;

    const navHeight = navEl.offsetHeight || 70;

    const calcThreshold = () => {
      const rect = servicesEl.getBoundingClientRect();
      const servicesTop = rect.top + window.scrollY;
      return servicesTop - navHeight;
    };

    let threshold = calcThreshold();

    const handleResize = () => {
      threshold = calcThreshold();
      // re-evaluate on resize
      setIsFixed(window.scrollY < threshold);
    };

    const checkFixed = () => {
      setIsFixed(window.scrollY < threshold);
    };

    window.addEventListener('scroll', checkFixed);
    window.addEventListener('resize', handleResize);
    // initial check
    checkFixed();

    return () => {
      window.removeEventListener('scroll', checkFixed);
      window.removeEventListener('resize', handleResize);
    };
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
      <nav ref={navRef} className={`${styles.navbar} ${!isFixed ? styles.unfixed : ''} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <a href="/" className={styles.logoContainer}>
            <img src={logo} alt="Meckarup Logo" className={styles.logoIcon} />
            <img src={logoText} alt="Meckarup Text" className={styles.logoText} />
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
          {/* <a href="/enroll" className={`${styles.ctaButton} ${styles.mobileCta}`}>
            Enroll
          </a> */}
        </div>
        {/* Desktop CTA Button */}
        <a href="/enroll" className={styles.ctaButton}>
          Enroll Now
          <ArrowForward fontSize="small" />
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