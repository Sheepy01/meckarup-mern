import React from 'react';
import styles from './Testimonials.module.css';
import { School, Business, Work, Science } from '@mui/icons-material';

const TestimonialCard = ({ testimonial, isActive, index }) => {
  const getRoleIcon = (role) => {
    switch(role.toLowerCase()) {
      case 'student':
        return <School fontSize="small" />;
      case 'professional':
        return <Work fontSize="small" />;
      case 'researcher':
        return <Science fontSize="small" />;
      case 'founder':
        return <Business fontSize="small" />;
      default:
        return <School fontSize="small" />;
    }
  };

  return (
    <div 
      className={`${styles.testimonialCard} ${isActive ? styles.active : ''}`}
      data-index={index}
      style={{
        animation: isActive ? 'fadeIn 0.8s ease-out' : 'none'
      }}
    >
      <div className={styles.cardContent}>
        <div className={styles.quoteIcon}>
          <span>❝</span>
        </div>
        
        <p className={styles.quoteText}>
          {testimonial.quote}
        </p>
        
        <div className={styles.personInfo}>
          <div className={styles.avatar}>
            {testimonial.initials}
          </div>
          
          <div className={styles.personDetails}>
            <h4 className={styles.personName}>{testimonial.name}</h4>
            <div className={styles.personRole}>{testimonial.role}</div>
            <div className={styles.personCourse}>
              {getRoleIcon(testimonial.role)}
              <span>{testimonial.courseOrService}</span>
            </div>
          </div>
        </div>
        
        {/* Decorative corner */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.03) 100%)',
          borderRadius: '0 0 0 100%',
          borderTop: '1px solid rgba(59, 130, 246, 0.1)',
          borderLeft: '1px solid rgba(59, 130, 246, 0.1)'
        }}></div>
      </div>
    </div>
  );
};

export default TestimonialCard;