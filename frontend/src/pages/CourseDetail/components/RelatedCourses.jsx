import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton
} from '@mui/material';
import {
  ArrowBack,
  ArrowForward,
  Code,
  DataArray,
  Calculate,
  Functions,
  Description,
  Storage,
  Science,
  Map
} from '@mui/icons-material';
import { FaPython, FaRProject, FaJava } from 'react-icons/fa';
import { SiC, SiLatex } from 'react-icons/si';

const RelatedCourses = ({ currentCourseId = 'python-programming' }) => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const relatedCourses = [
    {
      id: 'r-data-science',
      title: 'R for Data Science',
      description: 'Master statistical computing, data visualization, and advanced analytics using R programming.',
      icon: <FaRProject size={24} color="#276DC3" />,
      category: 'Data Science',
      difficulty: 'Intermediate',
      duration: '6 Weeks',
      mode: 'Online + Offline',
      color: '#276DC3'
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      description: 'Learn ETL pipelines, big data processing, and cloud data solutions.',
      icon: <Storage sx={{ color: '#8B5CF6' }} />,
      category: 'Data Science',
      difficulty: 'Advanced',
      duration: '10 Weeks',
      mode: 'Online + Offline',
      color: '#8B5CF6'
    },
    {
      id: 'java-programming',
      title: 'Java Programming',
      description: 'Master object-oriented programming and enterprise application development.',
      icon: <FaJava size={24} color="#007396" />,
      category: 'Programming',
      difficulty: 'Beginner-Advanced',
      duration: '10 Weeks',
      mode: 'Online + Offline',
      color: '#007396'
    },
    {
      id: 'excel-data-analysis',
      title: 'Excel for Data Analysis',
      description: 'Advanced Excel formulas, pivot tables, and business intelligence tools.',
      icon: <Calculate sx={{ color: '#21A366' }} />,
      category: 'Data Science',
      difficulty: 'Beginner',
      duration: '4 Weeks',
      mode: 'Online + Offline',
      color: '#21A366'
    },
    {
      id: 'spss-statistical-analysis',
      title: 'SPSS Statistical Analysis',
      description: 'Professional statistical analysis and hypothesis testing.',
      icon: <Functions sx={{ color: '#3B82F6' }} />,
      category: 'Data Science',
      difficulty: 'Intermediate',
      duration: '5 Weeks',
      mode: 'Online + Offline',
      color: '#3B82F6'
    },
    {
      id: 'c-programming',
      title: 'C Programming',
      description: 'Core programming concepts and system programming.',
      icon: <SiC size={24} color="#A8B9CC" />,
      category: 'Programming',
      difficulty: 'Beginner-Intermediate',
      duration: '6 Weeks',
      mode: 'Online + Offline',
      color: '#A8B9CC'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newPosition = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setTimeout(() => {
        setScrollPosition(scrollRef.current.scrollLeft);
      }, 300);
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollRef.current ? 
    scrollPosition < (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) : 
    false;

  return (
    <Box sx={{ mb: 6 }}>
      {/* Section Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4
      }}>
        <Box>
          <Typography variant="h2" sx={{ 
            fontSize: '1.75rem', 
            fontWeight: 700, 
            color: '#1A365D',
            mb: 1
          }}>
            Explore Related Courses
          </Typography>
          <Typography sx={{ color: '#6B7280' }}>
            Students who viewed this course also showed interest in these programs
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            sx={{
              background: canScrollLeft ? '#1A365D' : '#E5E7EB',
              color: canScrollLeft ? 'white' : '#9CA3AF',
              '&:hover': {
                background: canScrollLeft ? '#1E3A8A' : '#E5E7EB'
              }
            }}
          >
            <ArrowBack />
          </IconButton>
          
          <IconButton
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            sx={{
              background: canScrollRight ? '#1A365D' : '#E5E7EB',
              color: canScrollRight ? 'white' : '#9CA3AF',
              '&:hover': {
                background: canScrollRight ? '#1E3A8A' : '#E5E7EB'
              }
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
      
      {/* Courses Carousel */}
      <Box sx={{ position: 'relative' }}>
        <Box
          ref={scrollRef}
          onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            pb: 3,
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {relatedCourses
            .filter(course => course.id !== currentCourseId)
            .map((course, index) => (
              <Card
                key={course.id}
                sx={{
                  minWidth: '320px',
                  maxWidth: '350px',
                  flexShrink: 0,
                  borderRadius: '16px',
                  border: '1px solid rgba(229, 231, 235, 0.5)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    borderColor: course.color
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Course Header */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ 
                      width: '56px', 
                      height: '56px', 
                      borderRadius: '12px',
                      background: `${course.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${course.color}30`
                    }}>
                      {course.icon}
                    </Box>
                    
                    <Chip
                      label={course.category}
                      size="small"
                      sx={{
                        background: `${course.color}10`,
                        color: course.color,
                        fontWeight: 600,
                        border: `1px solid ${course.color}30`
                      }}
                    />
                  </Box>
                  
                  {/* Course Title */}
                  <Typography variant="h3" sx={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    color: '#1A365D',
                    mb: 1,
                    lineHeight: 1.3
                  }}>
                    {course.title}
                  </Typography>
                  
                  {/* Course Description */}
                  <Typography sx={{ 
                    color: '#6B7280', 
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    mb: 2,
                    minHeight: '60px'
                  }}>
                    {course.description}
                  </Typography>
                  
                  {/* Course Meta */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid #F3F4F6'
                  }}>
                    <Box>
                      <Chip
                        label={course.difficulty}
                        size="small"
                        sx={{
                          background: course.difficulty === 'Beginner' ? '#10b96a15' : 
                                    course.difficulty === 'Intermediate' ? '#F59E0B15' : 
                                    '#EF444415',
                          color: course.difficulty === 'Beginner' ? '#10b96a' : 
                                course.difficulty === 'Intermediate' ? '#D97706' : 
                                '#DC2626',
                          fontWeight: 600,
                          border: `1px solid ${course.difficulty === 'Beginner' ? '#10b96a30' : 
                                   course.difficulty === 'Intermediate' ? '#F59E0B30' : 
                                   '#EF444430'}`
                        }}
                      />
                    </Box>
                    
                    <Typography sx={{ 
                      color: '#6B7280', 
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}>
                      ⏱️ {course.duration}
                    </Typography>
                  </Box>
                  
                  {/* Mode Badges */}
                  <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                    <Chip
                      label="Online"
                      size="small"
                      sx={{
                        background: '#10b96a10',
                        color: '#10b96a',
                        fontWeight: 600,
                        border: '1px solid #10b96a30'
                      }}
                    />
                    <Chip
                      label="Offline"
                      size="small"
                      sx={{
                        background: '#3B82F610',
                        color: '#3B82F6',
                        fontWeight: 600,
                        border: '1px solid #3B82F630'
                      }}
                    />
                  </Box>
                  
                  {/* View Course Button */}
                  <Button
                    href={`/courses/${course.id}`}
                    fullWidth
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(135deg, #1A365D 0%, #1E3A8A 100%)',
                      color: 'white',
                      py: 1,
                      borderRadius: '8px',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1E3A8A 0%, #1A365D 100%)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    View Course Details
                  </Button>
                </CardContent>
              </Card>
            ))
          }
        </Box>
        
        {/* Gradient Overlays */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, #F9FAFB)',
          pointerEvents: 'none'
        }} />
        
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(90deg, #F9FAFB, transparent)',
          pointerEvents: 'none'
        }} />
      </Box>
      
      {/* View All Courses Link */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          href="/courses"
          variant="outlined"
          sx={{
            borderColor: '#1A365D',
            color: '#1A365D',
            px: 4,
            py: 1.5,
            fontWeight: 600,
            borderRadius: '10px',
            '&:hover': {
              borderColor: '#1A365D',
              background: '#1A365D10'
            }
          }}
        >
          View All 50+ Courses →
        </Button>
      </Box>
      
      {/* Additional Info */}
      <Box sx={{ 
        mt: 4,
        p: 3,
        background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        textAlign: 'center'
      }}>
        <Typography sx={{ fontWeight: 700, color: '#1A365D', mb: 1 }}>
          🎓 Bundle & Save!
        </Typography>
        <Typography sx={{ color: '#4B5563', mb: 2 }}>
          Enroll in any 2 courses and get 15% discount • Enroll in 3+ courses and get 25% discount
        </Typography>
        <Button
          href="/courses#bundles"
          variant="contained"
          size="small"
          sx={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #10b96a 100%)',
            color: 'white',
            fontWeight: 600
          }}
        >
          Explore Course Bundles
        </Button>
      </Box>
    </Box>
  );
};

export default RelatedCourses;