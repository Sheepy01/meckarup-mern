export const instructors = {
  'instructor_001': {
    id: 'instructor_001',
    name: 'Rohan Sharma',
    title: 'Senior Python Developer & Data Scientist',
    bio: 'With 8+ years of experience in Python development and data science, Rohan has worked with leading tech companies and trained over 500 students. He specializes in making complex programming concepts accessible to beginners while providing deep insights for advanced learners.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    qualifications: ['MTech (IIT Patna)', 'Ex-Amazon', 'AWS Certified'],
    rating: 4.9,
    studentsTaught: 500,
    expertise: ['Python', 'Data Science', 'Machine Learning', 'Web Development'],
    social: {
      linkedin: 'https://linkedin.com/in/rohansharma',
      github: 'https://github.com/rohansharma',
      twitter: 'https://twitter.com/rohansharma'
    }
  },
  'instructor_002': {
    id: 'instructor_002',
    name: 'Priya Verma',
    title: 'Data Science Lead & R Expert',
    bio: 'Priya has 6+ years of experience in statistical analysis and data visualization using R. She has published multiple research papers and worked with healthcare and financial institutions.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    qualifications: ['PhD in Statistics', 'MSc Data Science', 'RStudio Certified'],
    rating: 4.8,
    studentsTaught: 350,
    expertise: ['R Programming', 'Statistical Analysis', 'Data Visualization', 'Machine Learning']
  }
  // Add more instructors as needed
};

export const getInstructor = (id) => {
  return instructors[id] || null;
};

export default instructors;