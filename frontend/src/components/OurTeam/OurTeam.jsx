import React from 'react';
import { LinkedIn, ArrowForward } from '@mui/icons-material';
import styles from './OurTeam.module.css';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Mousumi Gupta',
      title: 'Founder & CEO, Training Head',
      bio: 'Former data scientist with 12+ years in tech education and software development. Passionate about bridging the gap between academia and industry.',
      fullBio: 'Dr. Mousumi Gupta founded Meckarup in 2015 with a vision to create a comprehensive platform for technology education and solutions. With a Master\'s in Computer Science and extensive industry experience.',
      linkedin: 'https://linkedin.com/in/rahulsharma',
      initials: 'RS'
    },
    {
      id: 2,
      name: 'Mr. Mausam Bahar',
      title: 'Lead Software Developer',
      bio: 'Full-stack developer specializing in enterprise applications and cloud solutions. 10+ years in software architecture.',
      fullBio: 'Mr. Mausam Bahar oversees all software development projects, focusing on scalable solutions and best practices. He mentors junior developers and leads technical training sessions.',
      linkedin: 'https://linkedin.com/in/amitkumar',
      initials: 'AK'
    },
    {
      id: 3,
      name: 'Mr. Arupratan Gupta',
      title: '3D Design Specialist',
      bio: 'Mechanical engineer with expertise in SolidWorks and product design. 7+ years in 3D modelling and simulation.',
      fullBio: 'Mr. Arupratan Gupta manages our 3D design projects, from concept to production. She specializes in complex mechanical designs and FEA analysis for various industries.',
      linkedin: 'https://linkedin.com/in/nehasingh',
      initials: 'NS'
    },
    {
      id: 4,
      name: 'Mr. Snehashish Bhattacharaya',
      title: 'Data Science Instructor',
      bio: 'PhD in Statistics with expertise in R, Python, and machine learning. 6+ years teaching data analysis techniques.',
      fullBio: 'Mr. Snehashish Bhattacharaya develops and delivers our data science curriculum. His research background brings academic rigor to our practical training approach.',
      linkedin: 'https://linkedin.com/in/sanjaypatel',
      initials: 'SP'
    },
  ];

  return (
    <div className={styles.ourTeam}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>
            The People Behind <span className={styles.highlight}>Meckarup</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Meet the experienced professionals who combine technical expertise with passion for education. 
            Our team brings together industry experience and teaching excellence to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamCard}>
                {/* Photo Placeholder */}
                <div className={styles.photoContainer}>
                  <div className={styles.photoPlaceholder}>
                    {member.initials}
                  </div>
                  
                  {/* LinkedIn Icon */}
                  <a 
                    href={member.linkedin}
                    className={styles.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn className={styles.linkedinIcon} />
                  </a>
                </div>

                {/* Member Info */}
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberTitle}>{member.title}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                  
                  {/* Full Bio (Shown on Hover) */}
                  <div className={styles.fullBio}>
                    <p>{member.fullBio}</p>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={styles.hoverOverlay}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Want to Join Our Team?</h2>
            <p className={styles.ctaText}>
              We're always looking for talented individuals who are passionate about technology and education. 
              If you share our vision, we'd love to hear from you.
            </p>
            <div className={styles.ctaButtons}>
              <a 
                href="/career"
                className={styles.ctaButtonPrimary}
              >
                View Open Positions
                <ArrowForward className={styles.ctaIcon} />
              </a>
              <a 
                href="/contact"
                className={styles.ctaButtonSecondary}
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
