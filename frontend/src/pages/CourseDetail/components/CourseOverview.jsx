import React from 'react';
import { Box, Typography } from '@mui/material';
import { Code, DataArray, AutoGraph, Cloud } from '@mui/icons-material';

const CourseOverview = ({ overview, stats }) => {
  return (
    <Box sx={{ 
      background: 'white',
      borderRadius: '16px',
      padding: { xs: '1.5rem', md: '2.5rem' },
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
        Course Overview
      </Typography>
      
      {overview.map((paragraph, index) => (
        <Typography key={index} paragraph sx={{ 
          mb: 2, 
          fontSize: '1.1rem', 
          lineHeight: 1.8,
          color: '#4B5563'
        }}>
          {paragraph}
        </Typography>
      ))}
      
      {/* Quick Highlights */}
      {stats && (
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 2, 
          mt: 3,
          p: 3,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 106, 0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(59, 130, 246, 0.1)'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: '200px' }}>
            <Code sx={{ color: '#3B82F6' }} />
            <Typography fontWeight={600}>{stats.hours}+ Hours of Content</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: '200px' }}>
            <DataArray sx={{ color: '#10b96a' }} />
            <Typography fontWeight={600}>{stats.projects} Real-world Projects</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: '200px' }}>
            <AutoGraph sx={{ color: '#8B5CF6' }} />
            <Typography fontWeight={600}>Industry Case Studies</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: '200px' }}>
            <Cloud sx={{ color: '#F59E0B' }} />
            <Typography fontWeight={600}>Lifetime Access</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CourseOverview;