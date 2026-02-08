import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Build, 
  Code, 
  Storage, 
  Cloud, 
  Smartphone, 
  DesktopWindows,
  Api,
  Settings,
  Assessment,
  DesignServices,
  Support,
  ArrowForward
} from '@mui/icons-material';
import { 
  SiPython, 
  SiCplusplus,
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiDjango, 
  SiPostgresql, 
  SiMongodb, 
  SiAmazons3 
} from 'react-icons/si';
import { useLocation } from 'react-router-dom';

const SoftwareDevelopment = () => {
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

  const getTechIcon = (techName) => {
    const iconSize = 24;
    const iconColor = '#3B82F6';
    
    switch(techName.toLowerCase()) {
        case 'python':
        return <SiPython size={iconSize} color={iconColor} />;
        case 'c++':
        return <SiCplusplus size={iconSize} color={iconColor} />;
        case 'javascript':
        return <SiJavascript size={iconSize} color={iconColor} />;
        case 'react':
        return <SiReact size={iconSize} color={iconColor} />;
        case 'node.js':
        return <SiNodedotjs size={iconSize} color={iconColor} />;
        case 'django':
        return <SiDjango size={iconSize} color={iconColor} />;
        case 'postgresql':
        return <SiPostgresql size={iconSize} color={iconColor} />;
        case 'mongodb':
        return <SiMongodb size={iconSize} color={iconColor} />;
        case 'aws':
        return <SiAmazons3 size={iconSize} color={iconColor} />;
        default:
        return <Code sx={{ fontSize: iconSize, color: iconColor }} />;
    }
    };

  const whatWeBuild = [
    {
      icon: <Smartphone sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Web Applications',
      description: 'Responsive, scalable web apps with modern frameworks and intuitive user interfaces.'
    },
    {
      icon: <DesktopWindows sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Desktop Software',
      description: 'Cross-platform desktop applications for Windows, macOS, and Linux environments.'
    },
    {
      icon: <Api sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and security.'
    },
    {
      icon: <Storage sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Database Solutions',
      description: 'Optimized database architecture, migration, and management solutions.'
    },
    {
      icon: <Settings sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Automation Tools',
      description: 'Custom automation scripts and tools to streamline business processes.'
    },
    {
      icon: <Cloud sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Cloud-Based Systems',
      description: 'Cloud-native applications with scalable infrastructure and deployment.'
    }
  ];

  const techStack = [
    { name: 'Python', category: 'Backend' },
    { name: 'C++', category: 'Hardware' },
    { name: 'JavaScript', category: 'Full Stack' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Requirement Analysis',
      description: 'We deeply understand your business needs and technical requirements.',
      icon: <Assessment sx={{ fontSize: 32 }} />
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create detailed architecture plans, UI/UX designs, and system specifications.',
      icon: <DesignServices sx={{ fontSize: 32 }} />
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates and milestone deliveries.',
      icon: <Code sx={{ fontSize: 32 }} />
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Comprehensive testing including unit, integration, and user acceptance testing.',
      icon: <Build sx={{ fontSize: 32 }} />
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing maintenance and support services.',
      icon: <Build sx={{ fontSize: 32 }} />
    }
  ];

  const whyChooseUs = [
    '10+ years of experience in software development',
    'Agile methodology with transparent communication',
    'Dedicated project managers and technical teams',
    'Post-launch support and maintenance packages'
  ];

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
              Custom Software<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Development
              </span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '2rem',
              maxWidth: '600px',
              lineHeight: 1.6
            }}>
              Transform your business ideas into powerful, scalable software solutions. 
              We build custom applications that drive growth and efficiency.
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
                <Build />
                Start Your Project
              </a>
              <a 
                href="#our-process"
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
                Learn More
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

      {/* What We Build Section */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              What We Build
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Comprehensive software solutions tailored to your specific business requirements
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {whatWeBuild.map((item, index) => (
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
                  textAlign: 'center'
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
                <div style={{ marginBottom: '1rem' }}>
                  {item.icon}
                </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Our Tech Stack Section */}
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
                Our Tech Stack
            </h2>
            <p style={{ 
                opacity: 0.9,
                fontSize: '1.125rem',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6
            }}>
                Modern technologies and frameworks we use to build robust applications
            </p>
            </div>

            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
            }}>
            {techStack.map((tech, index) => (
                <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                {/* Tech Icon */}
                <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }}>
                    {getTechIcon(tech.name)}
                </div>
                
                {/* Tech Info */}
                <div style={{ textAlign: 'left', flex: 1 }}>
                    <div style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '0.25rem'
                    }}>
                    {tech.name}
                    </div>
                    <div style={{ 
                    fontSize: '0.875rem',
                    opacity: 0.8
                    }}>
                    {tech.category}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

      {/* Our Process Section */}
      <section id="our-process" style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              Our Development Process
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              A structured approach to ensure quality and timely delivery
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Process Line */}
            <div style={{
              position: 'absolute',
              top: '60px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: 'calc(100% - 120px)',
              background: 'linear-gradient(to bottom, #3B82F6, #10b96a)',
              zIndex: 1
            }}></div>

            {developmentProcess.map((step, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '3rem',
                  position: 'relative',
                  zIndex: 2,
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                <div style={{ 
                  flex: 1,
                  padding: index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem',
                  textAlign: index % 2 === 0 ? 'right' : 'left'
                }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #E5E7EB'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      background: '#3B82F6',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      marginBottom: '1rem'
                    }}>
                      {step.step}
                    </span>
                    <h3 style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#1A365D',
                      marginBottom: '0.75rem'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ 
                      color: '#6B7280',
                      lineHeight: 1.6
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  border: '4px solid #3B82F6',
                  flexShrink: 0
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
      </section>

      {/* Why Choose Us Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
        padding: '5rem 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div data-aos="fade-right">
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1.5rem'
            }}>
              Why Choose Us for Your Software Project
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {whyChooseUs.map((point, index) => (
                <li key={index} style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '1.125rem',
                  color: '#1A365D'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: '#10b96a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      background: 'white', 
                      borderRadius: '50%' 
                    }}></div>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-left" style={{
            background: 'white',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              Ready to Build Something Amazing?
            </h3>
            <p style={{ 
              color: '#6B7280',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Let's discuss your project requirements and create a custom solution that drives your business forward.
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
              <Support />
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
