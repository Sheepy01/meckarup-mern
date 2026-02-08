import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Chip
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import * as MuiIcons from '@mui/icons-material';

const CurriculumAccordion = ({ curriculum }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getIconComponent = (iconName) => {
    const IconComponent = MuiIcons[iconName];
    return IconComponent ? <IconComponent /> : <MuiIcons.Code />;
  };

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
        Course Curriculum
      </Typography>
      
      <Typography paragraph sx={{ mb: 4, color: '#6B7280' }}>
        {curriculum.length}-module comprehensive curriculum with practical projects
      </Typography>

      {curriculum.map((module, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            mb: 2,
            borderRadius: '12px !important',
            overflow: 'hidden',
            border: '1px solid rgba(229, 231, 235, 0.5)',
            boxShadow: 'none',
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              background: expanded === `panel${index}` ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
              borderBottom: expanded === `panel${index}` ? '1px solid rgba(59, 130, 246, 0.1)' : 'none',
              padding: '1.5rem'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
              <Box sx={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                {getIconComponent(module.icon)}
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, color: '#1A365D', fontSize: '1.1rem' }}>
                  {module.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                  <Chip label={`${module.duration}`} size="small" sx={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6' }} />
                  <Chip label={`${module.lessons} Lessons`} size="small" sx={{ background: 'rgba(16, 185, 106, 0.1)', color: '#10b96a' }} />
                </Box>
              </Box>
            </Box>
          </AccordionSummary>
          
          <AccordionDetails sx={{ padding: '1.5rem 2rem 2rem' }}>
            <Typography sx={{ fontWeight: 600, mb: 2, color: '#4B5563' }}>
              Topics Covered:
            </Typography>
            <Box component="ul" sx={{ 
              pl: 2, 
              mb: 3,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 1
            }}>
              {module.topics.map((topic, idx) => (
                <Box component="li" key={idx} sx={{ 
                  mb: 1,
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <Box sx={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    background: '#3B82F6',
                    mt: '8px',
                    mr: '10px',
                    flexShrink: 0
                  }} />
                  <Typography sx={{ color: '#6B7280' }}>{topic}</Typography>
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CurriculumAccordion;