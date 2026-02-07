import React from 'react';
import { ArrowForward, Chat, School, TrendingUp } from '@mui/icons-material';
import styles from './CTABanner.module.css';

const CTABanner = () => {
  return (
    <section className={styles.ctaBanner}>
      {/* Decorative Background Elements */}
      <div className={`${styles.decorationCircle} ${styles.circle1}`}></div>
      <div className={`${styles.decorationCircle} ${styles.circle2}`}></div>
      <div className={`${styles.floatingElement} ${styles.float1}`}></div>
      <div className={`${styles.floatingElement} ${styles.float2}`}></div>
      
      {/* Animated gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 8s ease infinite',
        zIndex: 1
      }}>
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Headline */}
          <h1 className={styles.headline}>
            Ready to <span className={styles.highlight}>Upskill</span> or{' '}
            <span className={styles.highlight}>Build</span> Something Great?
          </h1>
          
          {/* Subtext */}
          <p className={styles.subtext}>
            Whether you want to learn Python, master data analysis, or build custom software 
            – Meckarup has you covered. Join Patna's leading tech education and solutions provider.
          </p>
          
          {/* Buttons */}
          <div className={styles.buttonsContainer}>
            <a 
              href="/courses" 
              className={styles.primaryButton}
              aria-label="Browse all courses"
            >
              <School className={styles.buttonIcon} />
              Browse Courses
              <ArrowForward className={styles.buttonIcon} />
            </a>
            
            <a 
              href="/contact" 
              className={styles.secondaryButton}
              aria-label="Request a custom quote"
            >
              <Chat className={styles.buttonIcon} />
              Request a Quote
              <ArrowForward className={styles.buttonIcon} />
            </a>
          </div>
          
          {/* Additional Information */}
          <div className={styles.additionalInfo}>
            <TrendingUp className={styles.infoIcon} fontSize="small" />
            <span>Join 1,250+ successful students and 75+ satisfied clients</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>Based in Patna, Bihar • Serving clients nationwide</span>
          </div>
          
          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.875rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: 'white',
                marginBottom: '0.25rem'
              }}>
                50+
              </div>
              <div>Courses Available</div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: 'white',
                marginBottom: '0.25rem'
              }}>
                8+
              </div>
              <div>Years Experience</div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: 'white',
                marginBottom: '0.25rem'
              }}>
                24/7
              </div>
              <div>Learning Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave divider */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100px',
        background: `url("data:image/svg+xml,%3Csvg width='1200' height='100' viewBox='0 0 1200 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100V50C200 0 400 0 600 50C800 100 1000 100 1200 50V100H0Z' fill='white'/%3E%3C/svg%3E")`,
        backgroundSize: '1200px 100px',
        opacity: 0.05
      }}></div>
    </section>
  );
};

export default CTABanner;