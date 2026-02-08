// Course data importer - This allows us to easily switch between JSON and API later
import pythonData from './python-programming.json';
import rData from './r-data-science.json';
import threeDData from './three-d-modelling.json';
import excelData from './excel-data-analysis.json';
import spssData from './spss-statistical-analysis.json';
import latexData from './latex-academic-writing.json';
import dataEngineeringData from './data-engineering.json';
import javaData from './java-programming.json';
import cData from './c-programming.json';
import matlabData from './matlab-image-processing.json';
import gisData from './geospatial-analysis.json';

const courses = {
  'python-programming': pythonData,
  'r-data-science': rData,
  'three-d-modelling': threeDData,
  'excel-data-analysis': excelData,
  'spss-statistical-analysis': spssData,
  'latex-academic-writing': latexData,
  'data-engineering': dataEngineeringData,
  'java-programming': javaData,
  'c-programming': cData,
  'matlab-image-processing': matlabData,
  'geospatial-analysis': gisData
};

// Helper function to get course by slug
export const getCourseBySlug = (slug) => {
  console.log(courses[slug] || '');
  return courses[slug] || null;
};

// Get all courses for listing
export const getAllCourses = () => {
  return Object.values(courses);
};

// Get related courses (excluding current)
export const getRelatedCourses = (currentSlug, limit = 3) => {
  const allCourses = getAllCourses();
  return allCourses
    .filter(course => course.slug !== currentSlug)
    .slice(0, limit);
};

export default courses;