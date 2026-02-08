import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import all components
import NavigationBar from './components/NavigationBar/NavigationBar';
import HomePage from './pages/HomePage';
import CourseDetail from './pages/CourseDetail';
import SoftwareDevelopment from './components/DetailedServicesSection/SoftwareDevelopment';
import DetailedServicesPage from './components/DetailedServicesSection/DetailedServicesPage';
import AppDevelopment from './components/DetailedServicesSection/AppDevelopment';
import ThreeDModelling from './components/DetailedServicesSection/ThreeDModelling';

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
      
      <Router>
        <NavigationBar />
        
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:courseSlug" element={<CourseDetail />} />
          <Route path="/services" element={<DetailedServicesPage />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/3d-modelling" element={<ThreeDModelling />} />
          {/* <Route path="/services/research" element={<ResearchServices />} /> */}
          {/* <Route path="/courses/:courseId" element={<CourseDetail />} /> */}
          
          {/* Course Catalog Page */}
          {/* <Route path="/courses" element={<CourseCatalog />} /> */}
          
          {/* Services Page */}
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          
          {/* About Page */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          
          {/* Contact Page */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          
          {/* Course Details Page (Optional) */}
          {/* <Route path="/courses/:courseId" element={<CourseCatalog />} /> */}
          
          {/* 404 Page */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;