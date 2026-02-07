import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './ServicesSection.module.css';
import ServiceCard from './ServiceCard';
import GraduationIcon from './icons/GraduationIcon';
import CodeIcon from './icons/CodeIcon';
import Cube3dIcon from './icons/Cube3dIcon';
import { School, Computer, Engineering } from '@mui/icons-material';

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      icon: GraduationIcon,
      title: "Training and Courses",
      description: "Professional courses in R, Python, Java, Excel, SPSS, LaTeX, MATLAB, C, Data Engineering, and Geospatial Analysis. Available online and offline for students and professionals.",
      buttonText: "View All Courses",
      buttonLink: "/courses"
    },
    {
      icon: CodeIcon,
      title: "Software and App Development",
      description: "Custom software solutions, web applications, and mobile app development tailored to your business needs. From concept to deployment with modern technologies.",
      buttonText: "Explore Services",
      buttonLink: "/services/development"
    },
    {
      icon: Cube3dIcon,
      title: "3D Modelling and Design",
      description: "3D modelling, mechanical engineering design using Solidworks, and industrial prototyping services. Perfect for product development and engineering solutions.",
      buttonText: "See Our Work",
      buttonLink: "/services/3d-design"
    }
  ];

  return (
    <section className={styles.servicesSection} id="services">
      {/* Decorative Background Elements */}
      <div className={`${styles.decorationCircle} ${styles.circle1}`}></div>
      <div className={`${styles.decorationCircle} ${styles.circle2}`}></div>
      
      <div className={styles.sectionContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader} data-aos="fade-up">
          <div className={styles.sectionBadge}>
            <School fontSize="small" />
            Our Core Services
          </div>
          <h2 className={styles.sectionTitle}>
            Transform Your <span>Skills & Business</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive technology solutions combining expert training with professional development services. 
            Serving students, professionals, and businesses across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              buttonLink={service.buttonLink}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className={styles.textCenter} style={{ marginTop: '4rem' }} data-aos="fade-up">
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 106, 0.05) 100%)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Computer fontSize="large" style={{ color: '#3B82F6' }} />
              <Engineering fontSize="large" style={{ color: '#10b96a' }} />
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600', 
              color: '#1A365D',
              marginBottom: '0.5rem'
            }}>
              Need a Custom Solution?
            </h3>
            <p style={{ color: '#4B5563', marginBottom: '1.5rem' }}>
              We offer tailored programs and enterprise solutions for organizations and institutions.
            </p>
            <a 
              href="/contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#3B82F6',
                border: '2px solid #3B82F6',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#3B82F6';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#3B82F6';
              }}
            >
              Get a Consultation
              <ArrowForward fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add ArrowForward import at the top if not already
import { ArrowForward } from '@mui/icons-material';

export default ServicesSection;