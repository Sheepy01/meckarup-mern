import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const LearningOutcomes = ({ outcomes }) => {
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
        What You Will Learn
      </Typography>
      
      <List sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 2
      }}>
        {outcomes.map((outcome, index) => (
          <ListItem 
            key={index} 
            sx={{ 
              alignItems: 'flex-start',
              padding: '0.75rem 0',
              borderBottom: index < outcomes.length - 2 ? '1px solid rgba(229, 231, 235, 0.5)' : 'none'
            }}
          >
            <ListItemIcon sx={{ minWidth: '40px', marginTop: '4px' }}>
              <CheckCircle sx={{ color: '#10b96a' }} />
            </ListItemIcon>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#4B5563' }}>
              {outcome}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LearningOutcomes;