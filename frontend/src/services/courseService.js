// Service layer for course data - Can be easily switched to API calls later
import { getCourseBySlug, getRelatedCourses, getAllCourses } from '../data/courses';

// For now, using local JSON data
// Later, replace with actual API calls

export const courseService = {
  // Get single course by slug
  getCourse: async (slug) => {
    // For now, return from JSON
    // Later: return await fetch(`/api/courses/${slug}`).then(res => res.json());
    
    const course = getCourseBySlug(slug);
    if (!course) {
      throw new Error(`Course not found: ${slug}`);
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 50));
    
    return course;
  },
  
  // Get all courses
  getAllCourses: async () => {
    // Later: return await fetch('/api/courses').then(res => res.json());
    const courses = getAllCourses();
    await new Promise(resolve => setTimeout(resolve, 50));
    return courses;
  },
  
  // Get related courses
  getRelatedCourses: async (slug, limit = 3) => {
    // Later: return await fetch(`/api/courses/${slug}/related?limit=${limit}`).then(res => res.json());
    const related = getRelatedCourses(slug, limit);
    await new Promise(resolve => setTimeout(resolve, 50));
    return related;
  },
  
  // Search courses
  searchCourses: async (query, filters = {}) => {
    // Later: Implement API search
    const allCourses = getAllCourses();
    
    return allCourses.filter(course => {
      const searchStr = query.toLowerCase();
      return (
        course.title.toLowerCase().includes(searchStr) ||
        course.tagline.toLowerCase().includes(searchStr) ||
        course.category.toLowerCase().includes(searchStr) ||
        course.learningOutcomes.some(outcome => 
          outcome.toLowerCase().includes(searchStr)
        )
      );
    });
  },
  
  // Get courses by category
  getCoursesByCategory: async (category) => {
    const allCourses = getAllCourses();
    return allCourses.filter(course => 
      course.category.toLowerCase() === category.toLowerCase()
    );
  }
};

// For future API integration
export const createApiService = (baseURL = '/api') => {
  return {
    getCourse: (slug) => 
      fetch(`${baseURL}/courses/${slug}`)
        .then(res => {
          if (!res.ok) throw new Error('Course not found');
          return res.json();
        }),
    
    getAllCourses: () => 
      fetch(`${baseURL}/courses`)
        .then(res => res.json()),
    
    enrollInCourse: (courseId, userId) =>
      fetch(`${baseURL}/enrollments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, userId })
      }).then(res => res.json()),
    
    // ... other API methods
  };
};

export default courseService;