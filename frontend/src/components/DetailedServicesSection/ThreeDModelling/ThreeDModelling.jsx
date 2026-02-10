import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Engineering,
  Build,
  DesignServices,
  Analytics,
  Science,
  Architecture,
  Settings,
  LocalShipping,
  MedicalServices,
  ShoppingCart,
  Flight,
  AutoAwesome,
  ArrowForward
} from '@mui/icons-material';
import {
  SiAutodesk,
  SiAnsys,
} from 'react-icons/si';

const ThreeDModelling = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const capabilities = [
    {
      icon: <DesignServices sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Mechanical Part Design',
      description: 'Detailed 3D modeling of mechanical components with precision engineering.'
    },
    {
      icon: <Build sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Assembly Modelling',
      description: 'Complex assembly designs with proper constraints and motion analysis.'
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Simulation and Analysis (FEA)',
      description: 'Finite Element Analysis for stress, thermal, and fluid dynamics simulations.'
    },
    {
      icon: <Science sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Product Prototyping',
      description: '3D prototyping and virtual testing before physical manufacturing.'
    },
    {
      icon: <Architecture sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Technical Drawings',
      description: 'Detailed engineering drawings with GD&T standards and manufacturing specs.'
    },
    {
      icon: <Settings sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Reverse Engineering',
      description: 'Converting physical objects into 3D CAD models for improvement and analysis.'
    }
  ];

  const specializations = [
    {
        name: 'Honeycomb structures',
        image: '/images/specializations/honeycomb-structure.jpg',
        description: 'Lightweight cellular structures for aerospace and automotive applications'
    },
    {
        name: 'Bellow structures', 
        image: '/images/specializations/bellow-structure.jpg',
        description: 'Flexible sealing systems for thermal expansion and vibration isolation'
    },
    {
        name: 'Tissue culture plates',
        image: '/images/specializations/tissue-culture-plates.jpg',
        description: 'Precision laboratory equipment for biomedical research applications'
    },
    {
        name: 'Tire structures',
        image: '/images/specializations/tire-design.jpg',
        description: 'Advanced tire design including tread patterns and rubber compounds'
    },
    {
        name: 'Chassis design',
        image: '/images/specializations/chassis-design.jpg',
        description: 'Vehicle frame design with stress analysis and weight optimization'
    },
    {
        name: 'Gears and transmission',
        image: '/images/specializations/gear-systems.jpg',
        description: 'Precision gear systems for power transmission and motion control'
    },
    {
        name: 'Actuators and linear motion',
        image: '/images/specializations/linear-actuators.jpg',
        description: 'Linear actuators, slides, and motion control systems'
    },
    {
        name: 'Clamp teeth and fastening',
        image: '/images/specializations/clamp-systems.jpg',
        description: 'Fastening systems including clamps, fixtures, and locking mechanisms'
    },
    {
        name: 'Pressure vessels',
        image: '/images/specializations/pressure-vessels.jpg',
        description: 'Containers designed to hold gases or liquids at high pressures'
    },
    {
        name: 'Heat exchangers',
        image: '/images/specializations/heat-exchangers.jpg',
        description: 'Thermal transfer systems for heating and cooling applications'
    },
    {
        name: 'Piping systems',
        image: '/images/specializations/piping-systems.jpg',
        description: 'Fluid transport systems with fittings, valves, and supports'
    },
    {
        name: 'Custom fixtures and jigs',
        image: '/images/specializations/custom-fixtures.jpg',
        description: 'Manufacturing tools for precision assembly and machining'
    }
    ];


  const software = [
    { name: 'SolidWorks', category: 'Primary CAD', icon: <SiAutodesk size={32} color="#3B82F6" /> },
    { name: 'AutoCAD', category: '2D Drafting', icon: <SiAutodesk size={32} color="#3B82F6" /> },
    { name: 'CATIA', category: 'Advanced CAD', icon: <SiAutodesk size={32} color="#3B82F6" /> },
    { name: 'Fusion 360', category: 'Cloud CAD', icon: <SiAutodesk size={32} color="#3B82F6" /> },
    { name: 'ANSYS', category: 'FEA/CFD', icon: <SiAnsys size={32} color="#3B82F6" /> }
  ];

  const industries = [
    {
      icon: <LocalShipping sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Automotive',
      description: 'Vehicle components, chassis systems, and automotive parts design.'
    },
    {
      icon: <Build sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Manufacturing',
      description: 'Production equipment, machinery, and manufacturing tooling design.'
    },
    {
      icon: <MedicalServices sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Medical Devices',
      description: 'Surgical instruments, medical equipment, and healthcare devices.'
    },
    {
      icon: <ShoppingCart sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Consumer Products',
      description: 'Consumer goods, appliances, and product design optimization.'
    },
    {
      icon: <Flight sx={{ fontSize: 32, color: '#3B82F6' }} />,
      title: 'Aerospace',
      description: 'Aircraft components, satellite systems, and aerospace engineering.'
    }
  ];

  const portfolioProjects = [
    {
      title: 'Automotive Chassis Design',
      description: 'Lightweight chassis design with honeycomb structures for electric vehicle',
      type: 'Mechanical Design',
      software: ['SolidWorks', 'ANSYS'],
      image: '/portfolio/chassis-design.jpg'
    },
    {
      title: 'Medical Device Prototype',
      description: 'Surgical instrument with ergonomic design and precision mechanisms',
      type: 'Medical Equipment',
      software: ['SolidWorks', 'AutoCAD'],
      image: '/portfolio/medical-device.jpg'
    },
    {
      title: 'Industrial Gear System',
      description: 'High-torque gear transmission system for heavy machinery',
      type: 'Mechanical Systems',
      software: ['SolidWorks', 'CATIA'],
      image: '/portfolio/gear-system.jpg'
    },
    {
      title: 'Aerospace Component',
      description: 'Lightweight aircraft component with FEA-optimized structure',
      type: 'Aerospace Engineering',
      software: ['CATIA', 'ANSYS'],
      image: '/portfolio/aerospace-component.jpg'
    },
    {
      title: 'Consumer Product Design',
      description: 'Ergonomic consumer product with aesthetic and functional optimization',
      type: 'Product Design',
      software: ['SolidWorks', 'Fusion 360'],
      image: '/portfolio/consumer-product.jpg'
    },
    {
      title: 'Manufacturing Fixture',
      description: 'Custom manufacturing jig for precision assembly operations',
      type: 'Industrial Tooling',
      software: ['SolidWorks', 'AutoCAD'],
      image: '/portfolio/manufacturing-fixture.jpg'
    }
  ];

  const getSoftwareIcon = (softwareName) => {
    const iconSize = 32;
    const iconColor = '#3B82F6';
    
    switch(softwareName.toLowerCase()) {
      case 'solidworks':
        return <SiSolidworks size={iconSize} color={iconColor} />;
      case 'autocad':
        return <SiAutodesk size={iconSize} color={iconColor} />;
      case 'catia':
        return <SiAutodesk size={iconSize} color={iconColor} />;
      case 'fusion 360':
        return <SiFusion360 size={iconSize} color={iconColor} />;
      case 'ansys':
        return <SiAnsys size={iconSize} color={iconColor} />;
      default:
        return <Engineering sx={{ fontSize: iconSize, color: iconColor }} />;
    }
  };

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh' }}>
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
              paddingTop: '3rem', 
              fontSize: '3.5rem',
              fontWeight: 800,
              marginBottom: '1rem',
              lineHeight: 1.1
            }}>
              3D Modelling &<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Engineering Design
              </span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '2rem',
              maxWidth: '600px',
              lineHeight: 1.6
            }}>
              Precision mechanical design and engineering solutions using industry-leading 
              SolidWorks and CAD software. From concept to production-ready models.
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
                <Engineering />
                Request a Design Quote
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

      {/* Our Capabilities Section */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              Our Capabilities
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Comprehensive 3D modelling and engineering design services for various industries
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {capabilities.map((capability, index) => (
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
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  {capability.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A365D',
                  marginBottom: '0.75rem'
                }}>
                  {capability.title}
                </h3>
                <p style={{ 
                  color: '#6B7280',
                  lineHeight: 1.6
                }}>
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
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
                Technical Specializations
            </h2>
            <p style={{ 
                opacity: 0.9,
                fontSize: '1.125rem',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6
            }}>
                Advanced expertise in complex mechanical structures and engineering systems
            </p>
            </div>

            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
            }}>
            {specializations.map((specialization, index) => (
                <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
                >
                {/* Image Container */}
                <div style={{
                    position: 'relative',
                    height: '180px',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)'
                }}>
                    {/* Image Placeholder with Initials */}
                    <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.3)',
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: '700',
                    fontFamily: 'monospace'
                    }}>
                    {specialization.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                    </div>
                    
                    {/* You would replace the above div with an actual image */}
                    {/* <img 
                    src={specialization.image} 
                    alt={specialization.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                    /> */}
                    
                    {/* Gradient Overlay */}
                    <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'linear-gradient(transparent, rgba(26, 54, 93, 0.8))'
                    }}></div>
                </div>
                
                {/* Content */}
                <div style={{
                    padding: '1.5rem',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <h3 style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    lineHeight: '1.3'
                    }}>
                    {specialization.name}
                    </h3>
                    <p style={{ 
                    fontSize: '0.9rem',
                    opacity: 0.9,
                    lineHeight: '1.5',
                    margin: 0,
                    minHeight: '60px'
                    }}>
                    {specialization.description}
                    </p>
                </div>
                
                {/* Hover Effect Border */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: '2px solid transparent',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none'
                }}></div>
                </div>
            ))}
            </div>

            {/* Enhanced Callout Section */}
            <div data-aos="fade-up" style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
            }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                borderRadius: '50%'
            }}></div>
            
            <h3 style={{ 
                fontSize: '1.75rem',
                fontWeight: 600,
                marginBottom: '1rem',
                opacity: 0.9,
                position: 'relative',
                zIndex: 2
            }}>
                Custom Mechanical Design Solutions
            </h3>
            <p style={{ 
                fontSize: '1.1rem',
                opacity: 0.8,
                lineHeight: '1.6',
                maxWidth: '700px',
                margin: '0 auto 2rem',
                position: 'relative',
                zIndex: 2
            }}>
                Our engineering team combines cutting-edge CAD software with practical manufacturing 
                knowledge to deliver precision mechanical designs that meet your exact specifications.
            </p>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                position: 'relative',
                zIndex: 2
            }}>
                <span style={{
                background: 'rgba(59, 130, 246, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                border: '1px solid rgba(59, 130, 246, 0.3)'
                }}>SolidWorks Certified</span>
                <span style={{
                background: 'rgba(16, 185, 106, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                border: '1px solid rgba(16, 185, 106, 0.3)'
                }}>FEA Analysis</span>
                <span style={{
                background: 'rgba(139, 92, 246, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                border: '1px solid rgba(139, 92, 246, 0.3)'
                }}>GD&T Standards</span>
            </div>
            </div>
        </div>
        </section>

      {/* Software We Use Section */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              Software We Use
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Industry-leading CAD and engineering software for precision design and analysis
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.5rem'
          }}>
            {software.map((softwareItem, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
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
                  width: '64px',
                  height: '64px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {softwareItem.icon}
                </div>
                
                <div>
                  <div style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1A365D',
                    marginBottom: '0.25rem'
                  }}>
                    {softwareItem.name}
                  </div>
                  <div style={{ 
                    fontSize: '0.875rem',
                    color: '#6B7280'
                  }}>
                    {softwareItem.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries We Serve
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Diverse industry expertise in mechanical design and engineering solutions
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
                  width: '60px',
                  height: '60px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {industry.icon}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1A365D',
                    marginBottom: '0.75rem'
                  }}>
                    {industry.title}
                  </h3>
                  <p style={{ 
                    color: '#6B7280',
                    lineHeight: 1.6
                  }}>
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1A365D',
              marginBottom: '1rem'
            }}>
              Design Portfolio
            </h2>
            <p style={{ 
              color: '#6B7280',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Showcasing our expertise in mechanical design and 3D modelling projects
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
              >
                {/* Project Image Placeholder */}
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: 700,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {project.type}
                  </div>
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
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {project.software.map((tech, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#3B82F6',
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
      </section>

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
              Ready to Bring Your Design to Life?
            </h2>
            <p style={{ 
              fontSize: '1.125rem',
              opacity: 0.9,
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Let's discuss your mechanical design requirements and create precision 
              3D models that meet your exact specifications.
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
              <Engineering />
              Request a 3D Design Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeDModelling;
