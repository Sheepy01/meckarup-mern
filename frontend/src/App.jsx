import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import PopularCourses from './components/PopularCourses/PopularCourses';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: '#3B82F6',
    },
    secondary: {
      main: '#10b96a',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow-x: hidden;
        }
        
        a {
          text-decoration: none;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <NavigationBar />
      <HeroSection />
      <ServicesSection />
      <PopularCourses />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
      
      <div style={{ paddingTop: '70px' }}>
        {/* Additional sections can go here */}
      </div>
    </ThemeProvider>
  );
}

export default App;