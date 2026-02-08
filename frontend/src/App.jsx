import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import all components
import NavigationBar from './components/NavigationBar/NavigationBar';
import HomePage from './pages/HomePage'; // We'll create this
// import CourseCatalog from './pages/CourseCatalog/CourseCatalog';
// import ServicesPage from './pages/ServicesPage'; // We'll create this
// import AboutPage from './pages/AboutPage'; // We'll create this
// import ContactPage from './pages/ContactPage'; // We'll create this
// import NotFoundPage from './pages/NotFoundPage'; // We'll create this

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