import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon } from '@mui/material';
import { School, Work, Science, Engineering } from '@mui/icons-material';

const TargetAudience = () => {
  const audiences = [
    {
      icon: <School />,
      title: "Students & Graduates",
      description: "B.Tech, MCA, BCA, B.Sc. students looking to build programming skills for placements and higher studies."
    },
    {
      icon: <Work />,
      title: "Working Professionals",
      description: "Professionals seeking to transition into tech roles, enhance automation skills, or move into data analysis."
    },
    {
      icon: <Science />,
      title: "Researchers & Analysts",
      description: "Academic researchers and data analysts who need Python for data processing, visualization, and analysis."
    },
    {
      icon: <Engineering />,
      title: "Career Changers & Entrepreneurs",
      description: "Individuals looking to switch careers to tech or entrepreneurs needing to build MVP applications."
    }
  ];

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
        Who Is This Course For?
      </Typography>
      
      <Typography paragraph sx={{ mb: 4, color: '#6B7280' }}>
        This course is designed for anyone who wants to master Python programming, regardless of their background. No prior programming experience is required, though basic computer literacy is recommended.
      </Typography>
      
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 3
      }}>
        {audiences.map((audience, index) => (
          <Box 
            key={index}
            sx={{ 
              display: 'flex',
              gap: 2,
              p: 3,
              background: 'rgba(59, 130, 246, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(59, 130, 246, 0.1)',
              transition: 'all 0.3s',
              '&:hover': {
                background: 'rgba(59, 130, 246, 0.08)',
                transform: 'translateY(-4px)'
              }
            }}
          >
            <Box sx={{ 
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexShrink: 0
            }}>
              {audience.icon}
            </Box>
            
            <Box>
              <Typography sx={{ 
                fontWeight: 700, 
                color: '#1A365D',
                mb: 1,
                fontSize: '1.1rem'
              }}>
                {audience.title}
              </Typography>
              <Typography sx={{ color: '#6B7280', fontSize: '0.95rem' }}>
                {audience.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      
      {/* Prerequisites Section */}
      <Box sx={{ 
        mt: 4,
        p: 3,
        background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(59, 130, 246, 0.1)'
      }}>
        <Typography sx={{ fontWeight: 700, color: '#1A365D', mb: 2 }}>
          📋 Prerequisites:
        </Typography>
        <Typography sx={{ color: '#4B5563' }}>
          • Basic computer literacy • No prior programming experience required • Internet connection for online classes • 
          Laptop/computer with minimum 4GB RAM • Willingness to learn and practice regularly
        </Typography>
      </Box>
    </Box>
  );
};

export default TargetAudience;