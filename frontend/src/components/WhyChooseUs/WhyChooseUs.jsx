import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { School, LibraryBooks, Engineering, EmojiEvents } from '@mui/icons-material';
import { People, MenuBook, Build, AccessTime } from '@mui/icons-material';
import styles from './WhyChooseUs.module.css';
import CounterStat, { counterStyles } from './CounterStat';
import FeatureCard from './FeatureCard';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
    
    // Add CounterStat styles to document
    const styleSheet = document.createElement('style');
    styleSheet.textContent = counterStyles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const stats = [
    {
      end: 1250,
      suffix: "+",
      label: "Students Trained",
      icon: People,
      color: "#1A365D"
    },
    {
      end: 50,
      suffix: "+",
      label: "Courses Offered",
      icon: MenuBook,
      color: "#3B82F6"
    },
    {
      end: 75,
      suffix: "+",
      label: "Projects Delivered",
      icon: Build,
      color: "#10b96a"
    },
    {
      end: 8,
      suffix: "+",
      label: "Years Experience",
      icon: AccessTime,
      color: "#8B5CF6"
    }
  ];

  const features = [
    {
      icon: School,
      title: "Online + Offline Classes",
      description: "Flexible learning options to suit your schedule. Join live online sessions or attend in-person classes at our Patna center with state-of-the-art facilities."
    },
    {
      icon: LibraryBooks,
      title: "Industry Expert Instructors",
      description: "Learn from professionals with real-world experience. Our instructors bring practical insights from working in tech companies and research institutions."
    },
    {
      icon: Engineering,
      title: "Hands-on Projects",
      description: "Build a professional portfolio with real projects. Apply concepts immediately through practical assignments, case studies, and capstone projects."
    },
    {
      icon: EmojiEvents,
      title: "Certificate on Completion",
      description: "Earn recognized certificates that boost your resume. All courses include verifiable certificates showcasing your newly acquired skills to employers."
    }
  ];

  return (
    <section className={styles.whyChooseUs} id="why-choose-us">
      {/* Decorative Elements */}
      <div className={`${styles.floatingElement} ${styles.float1}`}></div>
      <div className={`${styles.floatingElement} ${styles.float2}`}></div>
      <div className={`${styles.accentShape} ${styles.shape1}`}></div>
      <div className={`${styles.accentShape} ${styles.shape2}`}></div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader} data-aos="fade-up">
          <div className={styles.sectionBadge}>
            <School fontSize="small" />
            Why Choose Meckarup
          </div>
          <h2 className={styles.sectionTitle}>
            Patna's Premier <span>Tech Education & Solutions</span> Partner
          </h2>
        </div>

        {/* Introduction Paragraph */}
        <div className={styles.introParagraph} data-aos="fade-up" data-aos-delay="200">
          At Meckarup, we bridge the gap between theoretical knowledge and practical application. 
          Our <span className={styles.highlight}>hands-on training approach</span> ensures you gain 
          real skills that matter in today's competitive tech landscape. With an 
          <span className={styles.highlight}> industry-relevant curriculum</span> developed in 
          collaboration with professionals and <span className={styles.highlight}>real-world project 
          experience</span> that builds your portfolio, we prepare you for success in both corporate 
          and entrepreneurial ventures. Based in Patna, Bihar, we're committed to empowering Eastern 
          India's tech ecosystem with quality education and innovative solutions.
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
          <h3 
            style={{
              textAlign: 'center',
              fontSize: '1.875rem',
              fontWeight: '700',
              color: '#1A365D',
              marginBottom: '1rem'
            }}
            data-aos="fade-up"
          >
            Our Learning Experience
          </h3>
          <p 
            style={{
              textAlign: 'center',
              color: '#6B7280',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              fontSize: '1.125rem'
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We provide a comprehensive learning environment designed for your success
          </p>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          style={{ 
            marginTop: '6rem',
            textAlign: 'center'
          }}
          data-aos="fade-up"
        >
          <div style={{
            background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
            padding: '3rem',
            borderRadius: '20px',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative corner */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #1A365D 0%, transparent 70%)',
              borderRadius: '0 0 0 100%',
              opacity: 0.1
            }}></div>
            
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              Ready to Transform Your Career?
            </h3>
            
            <p style={{
              color: '#6B7280',
              marginBottom: '2rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Join thousands of successful students who have advanced their careers with Meckarup
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="/courses"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  background: 'linear-gradient(135deg, #1A365D 0%, rgba(26, 54, 93, 0.9) 100%)',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '2px solid #1A365D'
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
                Explore All Courses
              </a>
              
              <a 
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  background: 'transparent',
                  color: '#1A365D',
                  borderRadius: '12px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '2px solid #1A365D'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#1A365D';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#1A365D';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Talk to an Advisor
              </a>
            </div>
            
            <div style={{
              marginTop: '1.5rem',
              fontSize: '0.875rem',
              color: '#9CA3AF'
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📍 Based in Patna, Bihar • Serving students across India and globally
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;