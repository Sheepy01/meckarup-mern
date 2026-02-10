import React from 'react';
import { 
  LocationOn, 
  Email, 
  Phone, 
  WhatsApp, 
  Schedule,
  LinkedIn,
  Twitter,
  YouTube,
  Instagram
} from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const courses = [
    { name: 'Python', slug: 'python-programming' },
    { name: 'R Programming', slug: 'r-data-science' },
    { name: 'Excel Data Analysis', slug: 'excel-data-analysis' },
    { name: 'SPSS Statistical Analysis', slug: 'spss-statistical-analysis' },
    { name: 'LaTeX Academic Writing', slug: 'latex-academic-writing' },
    { name: 'Data Engineering', slug: 'data-engineering' },
    { name: 'Java Programming', slug: 'java-programming' },
    { name: 'C Programming', slug: 'c-programming' },
    { name: 'MATLAB Image Processing', slug: 'matlab-image-processing' },
    { name: 'Geospatial Analysis', slug: 'geospatial-analysis-r-gis' }
  ];

  const services = [
    { name: 'Software Development', slug: 'software-development' },
    { name: 'App Development', slug: 'app-development' },
    { name: '3D Modelling', slug: '3d-modelling' },
    { name: 'Research Support', slug: 'research-support' }
  ];

  return (
    <footer style={{ background: '#1A365D', color: 'white' }}>
      {/* Main Footer Content */}
      <div style={{ padding: '4rem 0 2rem' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '3rem'
        }}>
          
          {/* Column 1: Company Info */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              marginBottom: '1.5rem' 
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#10b96a',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.25rem'
              }}>
                M
              </div>
              <div>
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700',
                  lineHeight: '1.2'
                }}>
                  Meckarup
                </div>
                <div style={{ 
                  fontSize: '0.8rem', 
                  opacity: 0.8,
                  marginTop: '0.25rem'
                }}>
                  Tech Education & Solutions
                </div>
              </div>
            </div>

            <p style={{ 
              lineHeight: '1.6', 
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Professional training courses in programming, data science, and engineering tools, 
              combined with custom software development and design services for businesses.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://linkedin.com/company/meckarup" 
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'white',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#0077B5';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <LinkedIn />
              </a>
              
              <a 
                href="https://twitter.com/meckarup" 
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'white',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#000000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Twitter />
              </a>
              
              <a 
                href="https://youtube.com/meckarup" 
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'white',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#FF0000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <YouTube />
              </a>
              
              <a 
                href="https://instagram.com/meckarup" 
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'white',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#93C5FD'
            }}>
              Our Courses
            </h3>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0
            }}>
              {courses.map((course, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a 
                    href={`/courses/${course.slug}`}
                    style={{
                      color: '#93C5FD',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      padding: '0.25rem 0'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#93C5FD';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#93C5FD'
            }}>
              Services
            </h3>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0
            }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a 
                    href={`/services/${service.slug}`}
                    style={{
                      color: '#93C5FD',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      padding: '0.25rem 0'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#93C5FD';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#93C5FD'
            }}>
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <LocationOn sx={{ color: '#93C5FD', fontSize: '20px', marginTop: '0.25rem' }} />
                <div>
                  <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Address</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: '1.4' }}>
                    Bank Road, Patna-1<br />
                    Bihar-800001, India
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Email sx={{ color: '#93C5FD', fontSize: '20px', marginTop: '0.25rem' }} />
                <div>
                  <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Email</div>
                  <a 
                    href="mailto:info@meckarup.com"
                    style={{ 
                      color: '#93C5FD', 
                      textDecoration: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    info@meckarup.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone sx={{ color: '#93C5FD', fontSize: '20px', marginTop: '0.25rem' }} />
                <div>
                  <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Phone</div>
                  <a 
                    href="tel:+919876543210"
                    style={{ 
                      color: '#93C5FD', 
                      textDecoration: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <WhatsApp sx={{ color: '#93C5FD', fontSize: '20px', marginTop: '0.25rem' }} />
                <div>
                  <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>WhatsApp</div>
                  <a 
                    href="https://wa.me/919876543210"
                    style={{ 
                      color: '#93C5FD', 
                      textDecoration: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Schedule sx={{ color: '#93C5FD', fontSize: '20px', marginTop: '0.25rem' }} />
                <div>
                  <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Office Hours</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1.5rem 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Copyright */}
          <div style={{ 
            fontSize: '0.9rem',
            opacity: 0.8
          }}>
            © {currentYear} Meckarup. All rights reserved.
          </div>

          {/* Legal Links */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a 
              href="/privacy-policy"
              style={{
                color: '#93C5FD',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#93C5FD'}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service"
              style={{
                color: '#93C5FD',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#93C5FD'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div:first-child > div {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          div:first-child > div {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          div:first-child > div > div:first-child {
            text-align: center;
          }
          
          div:first-child > div > div:first-child > div:first-child {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          div:last-child > div {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
