import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { getInstructor } from '../../data/instructors';
import CourseHero from './components/CourseHero';
import CourseOverview from './components/CourseOverview';
import LearningOutcomes from './components/LearningOutcomes';
import CurriculumAccordion from './components/CurriculumAccordion';
import TargetAudience from './components/TargetAudience';
import CourseSidebar from './components/CourseSidebar';
import InstructorCard from './components/InstructorCard';
import EnrollmentCTA from './components/EnrollmentCTA';
import RelatedCourses from './components/RelatedCourses';
import { CircularProgress, Alert, Box, Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import courseService from '../../services/CourseService';

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        setLoading(true);
        const courseData = await courseService.getCourse(courseSlug);
        console.log(`Load Course: ${courseData}`);
        setCourse(courseData);
        
        // Load instructor data
        if (courseData.instructorId) {
          const instructorData = getInstructor(courseData.instructorId);
          setInstructor(instructorData);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error loading course:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [courseSlug]);

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        pt: 10 
      }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error || !course) {
    return (
      <Box sx={{ pt: 10, px: 3, textAlign: 'center' }}>
        <NavigationBar />
        <Alert 
          severity="error" 
          sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}
          action={
            <Button color="inherit" size="small" onClick={() => navigate('/courses')}>
              Back to Courses
            </Button>
          }
        >
          {error || 'Course not found'}
        </Alert>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/courses')}
          variant="outlined"
        >
          Browse All Courses
        </Button>
      </Box>
    );
  }

  return (
    <div style={{ paddingTop: '70px', background: '#F9FAFB', minHeight: '100vh' }}>
      <NavigationBar />
      
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 3 }, py: 3 }}>
        {/* Back button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/courses')}
          sx={{ mb: 3 }}
        >
          Back to Courses
        </Button>

        {/* Course Hero */}
        <CourseHero course={course} />
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', lg: '1fr 350px' }, 
          gap: 4,
          mb: 6 
        }}>
          {/* Main Content */}
          <Box>
            <CourseOverview 
              overview={course.overview}
              stats={course.stats}
            />
            
            <LearningOutcomes outcomes={course.learningOutcomes} />
            
            <CurriculumAccordion curriculum={course.curriculum} />
            
            <TargetAudience 
              targetAudience={course.targetAudience}
              prerequisites={course.prerequisites}
            />
            
            {instructor && <InstructorCard instructor={instructor} />}
            
            <EnrollmentCTA course={course} />
          </Box>
          
          {/* Sidebar */}
          <Box sx={{ position: 'sticky', top: '90px', height: 'fit-content' }}>
            <CourseSidebar 
              course={course}
              instructor={instructor}
            />
          </Box>
        </Box>
        
        {/* Related Courses */}
        <RelatedCourses currentCourseId={course.slug} />
      </Box>
    </div>
  );
};

export default CourseDetail;