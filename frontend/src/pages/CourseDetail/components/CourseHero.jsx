import React from 'react';
import { FaPython } from 'react-icons/fa';
import { Button, Box, Typography, Chip } from '@mui/material';
import { OnlinePrediction, LocationOn, TrendingUp, Schedule } from '@mui/icons-material';

const CourseHero = ({ course }) => {
  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #1A365D 0%, #1E3A8A 100%)',
      borderRadius: '20px',
      padding: { xs: '2rem 1.5rem', md: '3rem' },
      marginBottom: '3rem',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      
      <Box sx={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '800px'
      }}>
        {/* Course Icon and Category */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box sx={{
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <FaPython size={32} color="white" />
          </Box>
          <Chip 
            label={course.category}
            sx={{ 
              background: 'rgba(255,255,255,0.15)', 
              color: 'white',
              fontWeight: '600',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          />
        </Box>
        
        {/* Course Title */}
        <Typography variant="h1" sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 800,
          mb: 2,
          lineHeight: 1.1
        }}>
          {course.title}
        </Typography>
        
        {/* Tagline */}
        <Typography variant="h5" sx={{
          mb: 3,
          opacity: 0.9,
          fontWeight: 400,
          maxWidth: '600px'
        }}>
          {course.tagline}
        </Typography>
        
        {/* Badges Row */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
          {/* Difficulty Badge */}
          <Chip
            icon={<TrendingUp />}
            label={course.difficulty}
            sx={{
              background: 'rgba(16, 185, 106, 0.2)',
              color: 'white',
              border: '1px solid rgba(16, 185, 106, 0.5)',
              fontWeight: '600'
            }}
          />
          
          {/* Mode Badges */}
          {course.mode.includes('Online') && (
            <Chip
              icon={<OnlinePrediction />}
              label="Online"
              sx={{
                background: 'rgba(59, 130, 246, 0.2)',
                color: 'white',
                border: '1px solid rgba(59, 130, 246, 0.5)',
                fontWeight: '600'
              }}
            />
          )}
          
          {course.mode.includes('Offline') && (
            <Chip
              icon={<LocationOn />}
              label="Offline"
              sx={{
                background: 'rgba(239, 68, 68, 0.2)',
                color: 'white',
                border: '1px solid rgba(239, 68, 68, 0.5)',
                fontWeight: '600'
              }}
            />
          )}
          
          {/* Duration Badge */}
          <Chip
            icon={<Schedule />}
            label={course.duration}
            sx={{
              background: 'rgba(139, 92, 246, 0.2)',
              color: 'white',
              border: '1px solid rgba(139, 92, 246, 0.5)',
              fontWeight: '600'
            }}
          />
        </Box>
        
        {/* CTA Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            href="/enroll"
            sx={{
              background: 'white',
              color: '#1A365D',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: '12px',
              '&:hover': {
                background: '#f3f4f6',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Enroll Now
          </Button>
          
          <Button
            variant="outlined"
            href="#curriculum"
            sx={{
              borderColor: 'rgba(255,255,255,0.4)',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '12px',
              '&:hover': {
                borderColor: 'white',
                background: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            View Curriculum
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseHero;