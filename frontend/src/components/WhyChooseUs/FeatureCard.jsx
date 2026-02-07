import React from 'react';
import { ArrowForward } from '@mui/icons-material';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  index 
}) => {
  return (
    <div 
      className="feature-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #E5E7EB',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }}
    >
      {/* Background accent */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          borderRadius: '0 0 0 100%',
          transition: 'all 0.3s ease'
        }}
      ></div>
      
      {/* Icon */}
      <div 
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #1A365D 0%, rgba(26, 54, 93, 0.9) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          color: 'white',
          transition: 'all 0.3s ease'
        }}
      >
        <Icon fontSize="large" />
      </div>
      
      {/* Content */}
      <h3 
        style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: '#1A365D',
          marginBottom: '0.75rem',
          lineHeight: '1.3'
        }}
      >
        {title}
      </h3>
      
      <p 
        style={{
          color: '#6B7280',
          lineHeight: '1.6',
          marginBottom: '1.5rem',
          fontSize: '0.95rem'
        }}
      >
        {description}
      </p>
      
      {/* Learn More Link */}
      <a 
        href="#"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#3B82F6',
          fontWeight: '600',
          textDecoration: 'none',
          fontSize: '0.9rem',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.gap = '0.75rem';
          e.currentTarget.style.transform = 'translateX(4px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.gap = '0.5rem';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        Learn more
        <ArrowForward fontSize="small" />
      </a>
      
      {/* Hover Effect */}
      <style>{`
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .feature-card:hover > div:first-child {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        }
        
        .feature-card:hover > div:nth-child(2) {
          transform: scale(1.05) rotate(5deg);
          background: linear-gradient(135deg, #3B82F6 0%, #1A365D 100%);
        }
      `}</style>
    </div>
  );
};

export default FeatureCard;