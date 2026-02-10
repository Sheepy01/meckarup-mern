import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import PopularCourses from '../components/PopularCourses/PopularCourses';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../components/Testimonials/Testimonials';
import CTABanner from '../components/CTABanner/CTABanner';
import CourseCatalog from '../components/CourseCatalog';
import DetailedServicesPage from '../components/DetailedServicesSection/DetailedServicesPage';
import Footer from '../components/Footer/Footer';
import OurTeam from '../components/OurTeam';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div id="services-section">
        <ServicesSection />
      </div>
      <DetailedServicesPage />
      <CourseCatalog />
      <PopularCourses />
      <WhyChooseUs />
      <Testimonials />
      <OurTeam />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default HomePage;