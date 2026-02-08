import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import PopularCourses from '../components/PopularCourses/PopularCourses';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../components/Testimonials/Testimonials';
import CTABanner from '../components/CTABanner/CTABanner';
import CourseCatalog from '../components/CourseCatalog';
import DetailedServicesPage from '../components/DetailedServicesSection/DetailedServicesPage';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <CourseCatalog />
      <PopularCourses />
      <DetailedServicesPage />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
      
      {/* Add padding to prevent content from hiding behind fixed navbar */}
      <div style={{ paddingTop: '70px' }}>
        {/* You can add more sections here if needed */}
      </div>
    </div>
  );
};

export default HomePage;