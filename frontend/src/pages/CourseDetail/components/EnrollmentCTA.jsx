import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Alert,
  Snackbar,
  Chip
} from '@mui/material';
import {
  Send,
  Phone,
  Email,
  WhatsApp,
  CalendarMonth,
  CheckCircle
} from '@mui/icons-material';

const EnrollmentCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Python Programming'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', course: 'Python Programming' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone fontSize="medium" />,
      title: "Call Us",
      details: "+91 98765 43210",
      subtext: "Mon-Sat, 9AM-8PM",
      action: "tel:+919876543210"
    },
    {
      icon: <Email fontSize="medium" />,
      title: "Email Us",
      details: "courses@meckarup.com",
      subtext: "Response within 4 hours",
      action: "mailto:courses@meckarup.com"
    },
    {
      icon: <WhatsApp fontSize="medium" />,
      title: "WhatsApp",
      details: "Chat Now",
      subtext: "Instant response",
      action: "https://wa.me/919876543210?text=Hi%20Meckarup,%20I'm%20interested%20in%20Python%20Programming%20course"
    },
    {
      icon: <CalendarMonth fontSize="medium" />,
      title: "Book Demo",
      details: "Free Demo Class",
      subtext: "30-minutes session",
      action: "/book-demo"
    }
  ];

  const benefits = [
    "Certificate on completion",
    "Placement assistance",
    "Lifetime access to materials",
    "24/7 doubt support",
    "Real-world projects",
    "Interview preparation"
  ];

  return (
    <Box id="enroll" sx={{ 
      background: 'linear-gradient(135deg, #1A365D 0%, #1E3A8A 100%)',
      borderRadius: { xs: '16px', md: '24px' },
      padding: { xs: '2rem 1.5rem', md: '4rem 3rem' },
      marginBottom: '4rem',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Elements */}
      <Box sx={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      
      <Box sx={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Chip 
            label="Limited Seats Available" 
            sx={{ 
              background: 'rgba(255,255,255,0.2)', 
              color: 'white',
              mb: 2,
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          />
          <Typography variant="h2" sx={{ 
            fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
            fontWeight: 800,
            mb: 2,
            lineHeight: 1.1
          }}>
            Start Your Python Journey Today!
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {/* Left Column - Enrollment Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              background: 'rgba(255,255,255,0.95)', 
              borderRadius: '16px',
              padding: { xs: '1.5rem', md: '2.5rem' },
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              height: '100%'
            }}>
              <Typography variant="h3" sx={{ 
                color: '#1A365D', 
                fontWeight: 700, 
                mb: 3,
                fontSize: '1.5rem'
              }}>
                📝 Quick Enrollment Form
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  name="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="medium"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: 'white',
                      borderRadius: '8px'
                    }
                  }}
                />
                
                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="medium"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: 'white',
                      borderRadius: '8px',
                    }
                  }}
                />
                
                <TextField
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="medium"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: 'white',
                      borderRadius: '8px'
                    }
                  }}
                />
                
                <TextField
                  name="course"
                  label="Course"
                  value={formData.course}
                  disabled
                  fullWidth
                  size="medium"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: '#F3F4F6',
                      borderRadius: '8px'
                    }
                  }}
                />
                
                {error && (
                  <Alert severity="error" sx={{ borderRadius: '8px' }}>
                    {error}
                  </Alert>
                )}
                
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  startIcon={loading ? null : <Send />}
                  sx={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                    color: 'white',
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    mt: 1,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {loading ? 'Processing...' : 'Request Enrollment Details'}
                </Button>
                
                <Typography variant="caption" sx={{ color: '#6B7280', textAlign: 'center', mt: 1 }}>
                  By submitting, you agree to receive course details and updates from Meckarup
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          {/* Right Column - Contact Info & Benefits */}
          <Grid item xs={12} md={6}>
            {/* Contact Info */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ 
                color: 'white', 
                fontWeight: 700, 
                mb: 3,
                fontSize: '1.5rem'
              }}>
                📞 Contact Us Directly
              </Typography>
              
              <Grid container spacing={2}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Button
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : '_self'}
                      fullWidth
                      sx={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        color: 'white',
                        textTransform: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': {
                          background: 'rgba(255,255,255,0.2)',
                          borderColor: 'rgba(255,255,255,0.3)'
                        }
                      }}
                    >
                      <Box sx={{ 
                        width: '48px', 
                        height: '48px', 
                        borderRadius: '50%', 
                        background: 'rgba(255,255,255,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {info.icon}
                      </Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                        {info.title}
                      </Typography>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.7rem' }}>
                        {info.details}
                      </Typography>
                      <Typography sx={{ fontSize: '0.8rem', opacity: 0.8 }}>
                        {info.subtext}
                      </Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
            
            {/* Course Benefits */}
            <Box>
              <Typography variant="h4" sx={{ 
                color: 'white', 
                fontWeight: 700, 
                mb: 2,
                fontSize: '1.5rem'
              }}>
                ✅ What You Get
              </Typography>
              
              <Grid container spacing={1}>
                {benefits.map((benefit, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      background: 'rgba(255,255,255,0.05)',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <CheckCircle sx={{ color: '#10b96a', fontSize: '1rem' }} />
                      <Typography sx={{ fontSize: '0.95rem' }}>
                        {benefit}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              
              {/* Pricing Info */}
              <Box sx={{ 
                mt: 3,
                p: 2,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>Online Mode:</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.25rem' }}>₹8,999</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 600 }}>Offline Mode (Patna):</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.25rem' }}>₹12,999</Typography>
                </Box>
                <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.8 }}>
                  *EMI options available • 100% refund within 7 days if not satisfied
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      
      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={5000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          severity="success" 
          sx={{ 
            background: '#10b96a',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            🎉 Thank you! Our team will contact you within 2 hours with complete course details.
          </Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EnrollmentCTA;