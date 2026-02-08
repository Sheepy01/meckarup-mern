import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
import { School, Work, Star } from '@mui/icons-material';

const InstructorCard = () => {
  return (
    <Box sx={{ 
      background: 'white',
      borderRadius: '16px',
      padding: '2.5rem',
      marginBottom: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(229, 231, 235, 0.5)'
    }}>
      <Typography variant="h2" sx={{ 
        fontSize: '1.75rem', 
        fontWeight: 700, 
        color: '#1A365D', 
        mb: 3,
        position: 'relative',
        pb: 1,
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '60px',
          height: '4px',
          background: 'linear-gradient(90deg, #3B82F6 0%, #10b96a 100%)',
          borderRadius: '2px'
        }
      }}>
        Meet Your Instructor
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: { md: 'center' } }}>
        <Avatar
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          sx={{ width: 120, height: 120, border: '4px solid #3B82F6' }}
        />
        
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A365D', mb: 1 }}>
            Rohan Sharma
          </Typography>
          <Typography sx={{ color: '#3B82F6', fontWeight: 600, mb: 2 }}>
            Senior Python Developer & Data Scientist
          </Typography>
          
          <Typography paragraph sx={{ color: '#6B7280', mb: 3 }}>
            With 8+ years of experience in Python development and data science, Rohan has worked with 
            leading tech companies and trained over 500 students. He specializes in making complex 
            programming concepts accessible to beginners while providing deep insights for advanced learners.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Chip icon={<School />} label="MTech (IIT Patna)" size="small" />
            <Chip icon={<Work />} label="Ex-Amazon" size="small" />
            <Chip icon={<Star />} label="4.9/5 Rating" size="small" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InstructorCard;