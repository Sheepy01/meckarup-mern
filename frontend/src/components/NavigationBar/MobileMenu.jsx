import React, { useState } from 'react';
import styles from './NavigationBar.module.css';
import { 
  Home, School, Computer, Info, Work, ContactMail,
  KeyboardArrowDown, KeyboardArrowUp, CheckCircle
} from '@mui/icons-material';

const MobileMenu = ({ isOpen, onClose, activePage }) => {
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (name) => {
    setOpenDropdowns(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  const menuItems = [
    { name: 'Home', icon: <Home />, href: '/' },
    { 
      name: 'Courses', 
      icon: <School />,
      submenu: [
        { 
          title: 'Programming',
          items: ['Python', 'Java', 'C', 'R']
        },
        { 
          title: 'Data and Research',
          items: ['Excel', 'SPSS', 'Data Engineering', 'LaTeX', 'MATLAB', 'Geospatial Analysis/GIS']
        }
      ]
    },
    { 
      name: 'Services', 
      icon: <Computer />,
      submenu: [
        'Software Development',
        'App Development', 
        '3D Modelling',
        'Research Support'
      ]
    },
    { 
      name: 'About', 
      icon: <Info />,
      submenu: [
        'Company',
        'R&D',
        'People'
      ]
    },
    { name: 'Career', icon: <Work />, href: '/career' },
    { name: 'Contact', icon: <ContactMail />, href: '/contact' },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="mobile-menu-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
          animation: 'fadeIn 0.3s ease'
        }}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className="mobile-menu-panel"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '320px',
          maxWidth: '90vw',
          background: 'white',
          zIndex: 1000,
          overflowY: 'auto',
          animation: 'slideInRight 0.3s ease'
        }}
      >
        {/* Header */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>M</div>
            <span className={styles.logoText}>Meckarup</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav style={{ padding: '1rem 0' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {menuItems.map((item, index) => (
              <li key={index} style={{ borderBottom: '1px solid #f3f4f6' }}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        color: activePage === item.name.toLowerCase() ? '#10b96a' : '#1F2937',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      {openDropdowns.includes(item.name) ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </button>
                    
                    {openDropdowns.includes(item.name) && (
                      <div style={{ background: '#f9fafb', padding: '0.5rem 0' }}>
                        {item.submenu.map((sub, subIndex) => (
                          typeof sub === 'string' ? (
                            <a
                              key={subIndex}
                              href={`/${item.name.toLowerCase()}/${sub.toLowerCase().replace(' ', '-')}`}
                              style={{
                                display: 'block',
                                padding: '0.75rem 1.5rem 0.75rem 3rem',
                                color: '#6B7280',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                transition: 'all 0.2s'
                              }}
                              onMouseOver={(e) => e.currentTarget.style.color = '#3B82F6'}
                              onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}
                            >
                              {sub}
                            </a>
                          ) : (
                            <div key={subIndex} style={{ marginBottom: '1rem' }}>
                              <div style={{ 
                                padding: '0.5rem 1.5rem 0.5rem 3rem',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                color: '#10b96a',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                              }}>
                                {sub.title}
                              </div>
                              {sub.items.map((course, courseIndex) => (
                                <a
                                  key={courseIndex}
                                  href={`/courses/${course.toLowerCase().replace(' ', '-')}`}
                                  style={{
                                    display: 'block',
                                    padding: '0.75rem 1.5rem 0.75rem 4rem',
                                    color: '#6B7280',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem'
                                  }}
                                >
                                  {course}
                                </a>
                              ))}
                            </div>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem 1.5rem',
                      color: activePage === item.name.toLowerCase() ? '#10b96a' : '#1F2937',
                      fontWeight: '600',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      position: 'relative'
                    }}
                    onClick={onClose}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {activePage === item.name.toLowerCase() && (
                      <CheckCircle style={{ 
                        marginLeft: 'auto', 
                        color: '#10b96a',
                        fontSize: '1rem'
                      }} />
                    )}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile CTA */}
        <div style={{ padding: '2rem 1.5rem' }}>
          <a 
            href="/enroll"
            className={styles.ctaButton}
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={onClose}
          >
            Enroll Now
          </a>
          
          <div style={{ 
            marginTop: '1.5rem', 
            textAlign: 'center',
            color: '#6B7280',
            fontSize: '0.875rem'
          }}>
            <p>Need help choosing a course?</p>
            <a 
              href="/contact"
              style={{ 
                color: '#3B82F6',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              Talk to our advisor →
            </a>
          </div>
        </div>
      </div>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default MobileMenu;