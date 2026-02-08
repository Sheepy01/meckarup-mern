import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Code, 
  Smartphone, 
  Engineering, 
  School,
  ArrowForward,
  Build,
  Palette,
  Cloud,
  DataArray,
  Science
} from '@mui/icons-material';

const DetailedServicesPage = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Custom software solutions including web applications, desktop software, APIs, and enterprise systems.',
      icon: <Code sx={{ fontSize: 48, color: '#3B82F6' }} />,
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
      features: ['Web & Desktop Apps', 'API Development', 'Database Solutions', 'Cloud Systems']
    },
    {
      id: 'app-development',
      title: 'App Development',
      description: 'Mobile and web applications for iOS, Android, and cross-platform solutions.',
      icon: <Smartphone sx={{ fontSize: 48, color: '#10b96a' }} />,
      color: '#10b96a',
      gradient: 'linear-gradient(135deg, #10b96a 0%, #059669 100%)',
      features: ['iOS & Android', 'Cross-Platform', 'Progressive Web Apps', 'UI/UX Design']
    },
    {
      id: '3d-modelling',
      title: '3D Modelling & Design',
      description: 'Mechanical design, product modelling, and engineering solutions using SolidWorks.',
      icon: <Engineering sx={{ fontSize: 48, color: '#F59E0B' }} />,
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      features: ['SolidWorks', 'Product Design', 'Mechanical Engineering', 'Industrial Design']
    },
    {
      id: 'research',
      title: 'Research & Publication',
      description: 'Academic research support, data analysis, publication assistance, and LaTeX services.',
      icon: <Science sx={{ fontSize: 48, color: '#EF4444' }} />,
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
      features: ['Data Analysis', 'Publication Support', 'LaTeX Services', 'Research Guidance']
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      description: 'Technology strategy, digital transformation, and IT infrastructure consulting services.',
      icon: <Cloud sx={{ fontSize: 48, color: '#06B6D4' }} />,
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
      features: ['Digital Strategy', 'IT Infrastructure', 'Cloud Solutions', 'Tech Consulting']
    }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveCard(serviceId);
    // Navigate to the detailed service page
    navigate(`/services/${serviceId}`);
  };

  return (
    <div style={{ paddingTop: '70px', background: '#F9FAFB', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1A365D 0%, #2D4A7A 100%)',
        color: 'white',
        padding: '6rem 0 4rem',
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1.5rem',
          textAlign: 'center'
        }}>
          <div data-aos="fade-up">
            <h1 style={{ 
              fontSize: '3.5rem',
              fontWeight: 800,
              marginBottom: '1rem',
              lineHeight: 1.1
            }}>
              Our <span style={{ 
                background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Services
              </span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: 1.6
            }}>
              Comprehensive technology solutions for businesses, professionals, and researchers. 
              From custom software to professional training and research support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <div 
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleServiceClick(service.id)}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: `1px solid ${service.color}20`,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${service.color}40`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: service.gradient
                }}></div>

                {/* Service Icon */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `${service.color}15`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1A365D',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h3>

                {/* Service Description */}
                <p style={{ 
                  color: '#6B7280',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6
                }}>
                  {service.description}
                </p>

                {/* Features */}
                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2rem'
                }}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} style={{
                      background: `${service.color}10`,
                      color: service.color,
                      padding: '0.375rem 0.75rem',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: service.color,
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}>
                  Learn More
                  <ArrowForward sx={{ fontSize: '1rem', marginLeft: '0.5rem' }} />
                </div>

                {/* Hover Effect Styles */}
                <style>{`
                  div[data-aos="fade-up"]:hover {
                    border-color: ${service.color}40;
                  }
                `}</style>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div data-aos="fade-up" style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, #1A365D 0%, #2D4A7A 100%)',
            borderRadius: '20px',
            color: 'white'
          }}>
            <h3 style={{ 
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Need a Custom Solution?
            </h3>
            <p style={{ 
              opacity: 0.9,
              marginBottom: '2rem',
              fontSize: '1.125rem'
            }}>
              Contact us to discuss your specific requirements and get a tailored solution.
            </p>
            <a 
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: '#3B82F6',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Build />
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedServicesPage;
