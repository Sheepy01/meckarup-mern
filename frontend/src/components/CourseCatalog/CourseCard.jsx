import React from 'react';
import { FaPython, FaRProject, FaJava, FaDatabase, FaFileExcel, FaGlobe } from 'react-icons/fa';
import { SiC, SiLatex, SiArcgis, SiSemanticscholar } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';
import { ArrowForward, OnlinePrediction, LocationOn } from '@mui/icons-material';

const CourseCard = ({ course, index }) => {
  // Map course names to icons
  const getCourseIcon = (name) => {
    const iconSize = 32;
    const iconColor = '#3B82F6';
    
    if (name.includes('Python')) return <FaPython size={iconSize} color={iconColor} />;
    if (name.includes('R')) return <FaRProject size={iconSize} color={iconColor} />;
    if (name.includes('Excel')) return <FaFileExcel size={iconSize} color={iconColor} />;
    if (name.includes('SPSS')) return <MdComputer size={iconSize} color={iconColor} />;
    if (name.includes('LaTeX')) return <SiLatex size={iconSize} color={iconColor} />;
    if (name.includes('Data Engineering')) return <FaDatabase size={iconSize} color={iconColor} />;
    if (name.includes('Java')) return <FaJava size={iconSize} color={iconColor} />;
    if (name.includes('C Programming')) return <SiC size={iconSize} color={iconColor} />;
    if (name.includes('MATLAB')) return <SiSemanticscholar size={iconSize} color="#0076A8" />;
    if (name.includes('Geospatial') || name.includes('GIS')) return <FaGlobe size={iconSize} color="#34A853" />;
    return <MdComputer size={iconSize} color={iconColor} />;
  };

  // Get difficulty color
  const getDifficultyColor = (level) => {
    switch(level) {
      case 'Beginner': return '#10b96a';
      case 'Intermediate': return '#F59E0B';
      case 'Advanced': return '#EF4444';
      case 'Beginner-Intermediate': return '#22C55E';
      case 'Beginner-Advanced': return '#3B82F6';
      case 'Intermediate-Advanced': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  return (
    <div 
      className="course-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      style={{
        background: 'white',
        borderRadius: '16px',
        padding: '1.75rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #E5E7EB',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Decorative corner */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        borderRadius: '0 0 0 100%',
        borderLeft: '1px solid rgba(59, 130, 246, 0.1)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.1)'
      }}></div>
      
      {/* Icon and Category */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '12px',
          background: 'rgba(59, 130, 246, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {getCourseIcon(course.title)}
        </div>
        
        <span style={{
          background: 'rgba(26, 54, 93, 0.1)',
          color: '#1A365D',
          padding: '0.25rem 0.75rem',
          borderRadius: '50px',
          fontSize: '0.75rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {course.category}
        </span>
      </div>
      
      {/* Course Title */}
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#1A365D',
        marginBottom: '0.75rem',
        lineHeight: '1.3',
        flex: '1'
      }}>
        {course.title}
      </h3>
      
      {/* Description */}
      <p style={{
        color: '#6B7280',
        fontSize: '0.95rem',
        lineHeight: '1.5',
        marginBottom: '1.5rem',
        flex: '1'
      }}>
        {course.description}
      </p>
      
      {/* Mode Badges */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1rem',
        flexWrap: 'wrap'
      }}>
        {course.mode.includes('Online') && (
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            background: 'rgba(16, 185, 106, 0.1)',
            color: '#10b96a',
            padding: '0.375rem 0.75rem',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}>
            <OnlinePrediction fontSize="small" />
            Online
          </span>
        )}
        
        {course.mode.includes('Offline') && (
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            background: 'rgba(59, 130, 246, 0.1)',
            color: '#3B82F6',
            padding: '0.375rem 0.75rem',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}>
            <LocationOn fontSize="small" />
            Offline
          </span>
        )}
      </div>
      
      {/* Difficulty and Duration */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        paddingTop: '1rem',
        borderTop: '1px solid #F3F4F6'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: getDifficultyColor(course.difficulty)
          }}></div>
          <span style={{
            fontSize: '0.875rem',
            color: '#6B7280',
            fontWeight: '500'
          }}>
            {course.difficulty}
          </span>
        </div>
        
        <span style={{
          fontSize: '0.875rem',
          color: '#6B7280',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          ⏱️ {course.duration}
        </span>
      </div>
      
      {/* View Details Button */}
      <a 
        href={`/courses/${course.slug}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
          color: 'white',
          borderRadius: '8px',
          fontWeight: '600',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          fontSize: '0.95rem'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.35)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        View Details
        <ArrowForward fontSize="small" />
      </a>
      
      {/* Hover Effect */}
      <style>{`
        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .course-card:hover > div:first-child {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};

export default CourseCard;