import React from 'react';
import styles from './ServicesSection.module.css';
import { ArrowForward } from '@mui/icons-material';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  buttonLink = "#",
  index 
}) => {
  return (
    <div 
      className={styles.serviceCard}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className={styles.iconContainer}>
        <Icon size={72} />
      </div>
      
      <h3 className={styles.cardTitle}>{title}</h3>
      
      <p className={styles.cardDescription}>{description}</p>
      
      <a 
        href={buttonLink} 
        className={styles.cardButton}
        aria-label={`Learn more about ${title}`}
      >
        {buttonText}
        <ArrowForward className={styles.buttonIcon} />
      </a>
      
      {/* Decorative background element */}
      <div className={styles.cardBackground}></div>
    </div>
  );
};

export default ServiceCard;