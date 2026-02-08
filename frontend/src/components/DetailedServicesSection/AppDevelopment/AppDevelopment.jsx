import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Smartphone,
  Language,
  Apple,
  Android,
  Code,
  DesignServices,
  Business,
  LocalHospital,
  ShoppingCart,
  LocalShipping,
  AccountBalance,
  Agriculture,
  Checklist,
  Palette,
  BugReport,
  RocketLaunch,
  Support,
  ArrowForward
} from '@mui/icons-material';
import { 
  SiFlutter,
  SiReact,
  SiKotlin,
  SiSwift,
  SiFirebase,
} from 'react-icons/si';
import { useLocation } from 'react-router-dom';

const AppDevelopment = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const whatWeDevelop = [
    {
      icon: <Android sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Android Apps',
      description: 'Native Android applications using Kotlin and Java with Material Design principles.'
    },
    {
      icon: <Apple sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'iOS Apps',
      description: 'Native iOS apps built with Swift and SwiftUI for seamless Apple ecosystem integration.'
    },
    {
      icon: <Code sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Cross-Platform Apps',
      description: 'Single codebase solutions using Flutter and React Native for both iOS and Android.'
    },
    {
      icon: <Language sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Progressive Web Apps',
      description: 'Web applications that function like native apps with offline capabilities.'
    }
  ];

  const industries = [
    {
      icon: <Business sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Education',
      description: 'Learning management systems, student portals, and educational tools.'
    },
    {
      icon: <LocalHospital sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Healthcare',
      description: 'Telemedicine apps, patient portals, and healthcare management systems.'
    },
    {
      icon: <ShoppingCart sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'E-commerce',
      description: 'Mobile shopping apps, inventory management, and payment solutions.'
    },
    {
      icon: <LocalShipping sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Logistics',
      description: 'Delivery tracking, fleet management, and supply chain optimization apps.'
    },
    {
      icon: <AccountBalance sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Finance',
      description: 'Banking apps, investment platforms, and financial management tools.'
    },
    {
      icon: <Agriculture sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Agriculture',
      description: 'Farm management, crop monitoring, and agricultural analytics apps.'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Requirements gathering, market research, and project roadmap creation.',
      icon: <Checklist sx={{ fontSize: 28 }} />
    },
    {
      step: '02',
      title: 'Wireframing',
      description: 'Creating app structure, user flows, and initial screen layouts.',
      icon: <DesignServices sx={{ fontSize: 28 }} />
    },
    {
      step: '03',
      title: 'UI/UX Design',
      description: 'Crafting intuitive interfaces with focus on user experience and aesthetics.',
      icon: <Palette sx={{ fontSize: 28 }} />
    },
    {
      step: '04',
      title: 'Development',
      description: 'Agile development with regular sprints and feature implementation.',
      icon: <Code sx={{ fontSize: 28 }} />
    },
    {
      step: '05',
      title: 'QA Testing',
      description: 'Comprehensive testing across devices and platforms for quality assurance.',
      icon: <BugReport sx={{ fontSize: 28 }} />
    },
    {
      step: '06',
      title: 'Launch',
      description: 'App store deployment, marketing, and initial user onboarding.',
      icon: <RocketLaunch sx={{ fontSize: 28 }} />
    },
    {
      step: '07',
      title: 'Post-Launch Support',
      description: 'Maintenance, updates, and continuous improvement based on user feedback.',
      icon: <Support sx={{ fontSize: 28 }} />
    }
  ];

  const technologies = [
    { name: 'Flutter', category: 'Cross-Platform' },
    { name: 'React Native', category: 'Cross-Platform' },
    { name: 'Kotlin', category: 'Android' },
    { name: 'Swift', category: 'iOS' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'REST APIs', category: 'Integration' }
  ];

  const portfolioProjects = [
    {
      title: 'EduLearn Mobile App',
      description: 'Educational platform with interactive courses and progress tracking',
      image: '/portfolio/edulearn-app.jpg',
      platforms: ['iOS', 'Android'],
      tech: ['Flutter', 'Firebase']
    },
    {
      title: 'HealthTrack Pro',
      description: 'Healthcare app for patient monitoring and appointment scheduling',
      image: '/portfolio/healthtrack-app.jpg',
      platforms: ['iOS'],
      tech: ['Swift', 'REST APIs']
    },
    {
      title: 'ShopEasy E-commerce',
      description: 'Mobile shopping app with AR features and secure payments',
      image: '/portfolio/shopeasy-app.jpg',
      platforms: ['Android', 'PWA'],
      tech: ['React Native', 'Firebase']
    }
  ];

  const getTechIcon = (techName) => {
  const iconSize = 24;
  const iconColor = '#3B82F6';
    
  switch(techName.toLowerCase()) {
    // App Development Technologies
    case 'flutter':
      return <SiFlutter size={iconSize} color={iconColor} />;
    case 'react native':
      return <SiReact size={iconSize} color={iconColor} />;
    case 'kotlin':
      return <SiKotlin size={iconSize} color={iconColor} />;
    case 'swift':
      return <SiSwift size={iconSize} color={iconColor} />;
    case 'firebase':
      return <SiFirebase size={iconSize} color={iconColor} />;
    case 'rest apis':
      return <Code sx={{ fontSize: iconSize, color: iconColor }} />;
    
    default:
      return <Code sx={{ fontSize: iconSize, color: iconColor }} />;
  }
};

  return (
    <div style={{ paddingTop: '70px', background: '#F9FAFB', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1A365D 0%, #2D4A7A 100%)',
        color: 'white',
        padding: '6rem 0 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 2
        }}>
          <div data-aos="fade-up">
            <h1 style={{ 
              fontSize: '3.5rem',
              fontWeight: 800,
              marginBottom: '1rem',
              lineHeight: 1.1
            }}>
              Mobile and Web<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                App Development
              </span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '2rem',
              maxWidth: '600px',
              lineHeight: 1.6
            }}>
              Transform your ideas into powerful mobile and web applications that engage users and drive business growth.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 2rem',
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
                <Smartphone />
                Get Free Consultation
              </a>
              <a 
                href="#portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          opacity: 0.5
        }}></div>
      </section>

      {/* What We Develop Section */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              What We Develop
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Comprehensive app solutions across all major platforms and technologies
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            {whatWeDevelop.map((item, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1A365D',
                    marginBottom: '0.75rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: '#6B7280',
                    lineHeight: 1.6
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section style={{ 
        background: '#1A365D',
        color: 'white',
        padding: '5rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Industries We Serve
            </h2>
            <p style={{ 
              opacity: 0.9,
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Tailored app solutions for diverse industry needs and challenges
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {industries.map((industry, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  {industry.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem'
                }}>
                  {industry.title}
                </h3>
                <p style={{ 
                  opacity: 0.9,
                  lineHeight: 1.6
                }}>
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              Our Development Approach
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              A proven 7-step process to ensure your app's success from concept to launch
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: 'calc(100% - 80px)',
              background: 'linear-gradient(to bottom, #3B82F6, #10b96a)',
              zIndex: 1
            }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {developmentProcess.map((step, index) => (
                <div 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    position: 'relative',
                    zIndex: 2,
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: '2rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #E5E7EB'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1rem'
                      }}>
                        <span style={{
                          background: '#3B82F6',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '50px',
                          fontSize: '0.875rem',
                          fontWeight: 600
                        }}>
                          {step.step}
                        </span>
                        <h3 style={{ 
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: '#1A365D',
                          margin: 0
                        }}>
                          {step.title}
                        </h3>
                      </div>
                      <p style={{ 
                        color: '#6B7280',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    border: '4px solid #3B82F6',
                    flexShrink: 0,
                    zIndex: 3
                  }}>
                    <div style={{ color: '#3B82F6' }}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <div style={{ flex: 1 }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
        padding: '5rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              Our Technologies
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Modern frameworks and tools we use to build high-performance applications
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            {technologies.map((tech, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {getTechIcon(tech.name)}
                </div>
                
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <div style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1A365D',
                    marginBottom: '0.25rem'
                  }}>
                    {tech.name}
                  </div>
                  <div style={{ 
                    fontSize: '0.875rem',
                    color: '#6B7280'
                  }}>
                    {tech.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section id="portfolio" style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              Our App Portfolio
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Featured projects showcasing our expertise in mobile and web app development
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {portfolioProjects.map((project, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
              > */}
                {/* Project Image Placeholder */}
                {/* <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '3rem',
                  fontWeight: 700
                }}>
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1A365D',
                    marginBottom: '0.75rem'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    color: '#6B7280',
                    marginBottom: '1rem',
                    lineHeight: 1.5
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    marginBottom: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    {project.platforms.map((platform, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#3B82F6',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        {platform}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {project.tech.map((tech, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(16, 185, 106, 0.1)',
                        color: '#10b96a',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontWeight: 600
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1A365D 0%, #2D4A7A 100%)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up">
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Ready to Build Your App?
            </h2>
            <p style={{ 
              fontSize: '1.125rem',
              opacity: 0.9,
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Let's discuss your app idea and create a solution that exceeds your expectations. 
              Get a free consultation with our app development experts.
            </p>
            <a 
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.5rem',
                background: '#3B82F6',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '1.125rem'
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
              <Smartphone />
              Get a Free App Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
