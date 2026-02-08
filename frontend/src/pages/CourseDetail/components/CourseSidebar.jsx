import React from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip
} from '@mui/material';
import {
  Schedule,
  Language,
  School,
  WorkspacePremium,
  LocationOn,
  TrendingUp,
  OnlinePrediction,
  AccessTime
} from '@mui/icons-material';
import { FaWhatsapp } from 'react-icons/fa';

const CourseSidebar = () => {
  const courseDetails = [
    { icon: <Schedule />, label: 'Duration', value: '8 Weeks (120+ Hours)' },
    { icon: <TrendingUp />, label: 'Level', value: 'Beginner to Advanced' },
    { icon: <OnlinePrediction />, label: 'Mode', value: 'Online + Offline' },
    { icon: <School />, label: 'Prerequisites', value: 'No prior experience required' },
    { icon: <WorkspacePremium />, label: 'Certificate', value: 'Yes (Industry recognized)' },
    { icon: <Language />, label: 'Language', value: 'English (Hindi support available)' },
    { icon: <LocationOn />, label: 'Offline Location', value: 'Patna, Bihar' },
    { icon: <AccessTime />, label: 'Batch Start', value: '15th of every month' }
  ];

  const pricing = {
    online: '₹8,999',
    offline: '₹12,999',
    combo: '₹10,999'
  };

  return (
    <Box sx={{ 
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(229, 231, 235, 0.5)',
      overflow: 'hidden',
      position: 'sticky',
      top: '90px'
    }}>
      {/* Pricing Header */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #1A365D 0%, #1E3A8A 100%)',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <Typography variant="h3" sx={{ 
          fontSize: '2rem', 
          fontWeight: 800, 
          color: 'white', 
          mb: 1 
        }}>
          ₹8,999
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
          Starting price for online mode
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 2 }}>
          <Chip 
            label={`Online: ${pricing.online}`} 
            size="small" 
            sx={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
          />
          <Chip 
            label={`Offline: ${pricing.offline}`} 
            size="small" 
            sx={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
          />
        </Box>
      </Box>

      {/* Course Details */}
      <Box sx={{ padding: '1.5rem' }}>
        <Typography variant="h6" sx={{ 
          fontWeight: 700, 
          color: '#1A365D', 
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          📋 Course Details
        </Typography>
        
        <List sx={{ mb: 2 }}>
          {courseDetails.map((detail, index) => (
            <ListItem 
              key={index}
              sx={{ 
                padding: '0.75rem 0',
                borderBottom: index < courseDetails.length - 1 ? '1px solid rgba(229, 231, 235, 0.5)' : 'none'
              }}
            >
              <ListItemIcon sx={{ minWidth: '40px', color: '#3B82F6' }}>
                {detail.icon}
              </ListItemIcon>
              <ListItemText 
                primary={detail.label}
                secondary={detail.value}
                primaryTypographyProps={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: 500 }}
                secondaryTypographyProps={{ fontSize: '0.95rem', color: '#1A365D', fontWeight: 600 }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Inclusions */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A365D', mb: 1 }}>
            ✅ What's Included:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {['Lifetime course access', '5+ real-world projects', 'Certificate of completion', 
              '24/7 doubt support', 'Placement assistance', 'Interview preparation'].map((item, idx) => (
              <Box component="li" key={idx} sx={{ color: '#6B7280', mb: 0.5, fontSize: '0.9rem' }}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA Buttons */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button
            variant="contained"
            fullWidth
            href="/enroll"
            sx={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 700,
              borderRadius: '10px',
              '&:hover': {
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Enroll Now
          </Button>
          
          <Button
            variant="outlined"
            fullWidth
            href="https://wa.me/919876543210?text=Hi%20Meckarup,%20I'm%20interested%20in%20Python%20Programming%20course"
            target="_blank"
            sx={{
              borderColor: '#10b96a',
              color: '#10b96a',
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '10px',
              '&:hover': {
                borderColor: '#10b96a',
                background: 'rgba(16, 185, 106, 0.05)'
              }
            }}
          >
            <FaWhatsapp style={{ marginRight: '8px', fontSize: '1.2rem' }} />
            Chat on WhatsApp
          </Button>
          
          <Button
            variant="outlined"
            fullWidth
            href="/request-demo"
            sx={{
              borderColor: '#1A365D',
              color: '#1A365D',
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '10px',
              '&:hover': {
                borderColor: '#1A365D',
                background: 'rgba(26, 54, 93, 0.05)'
              }
            }}
          >
            Book Free Demo Class
          </Button>
        </Box>

        {/* Additional Info */}
        <Box sx={{ 
          mt: 3,
          p: 2,
          background: 'rgba(16, 185, 106, 0.05)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <Typography sx={{ fontSize: '0.875rem', color: '#10b96a', fontWeight: 600 }}>
            🎯 Limited Seats Available
          </Typography>
          <Typography sx={{ fontSize: '0.8rem', color: '#6B7280', mt: 0.5 }}>
            Next batch starts: 15th March 2024
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseSidebar;