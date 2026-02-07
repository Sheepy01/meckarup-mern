const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Initialize Express
const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Meckarup API',
    version: process.env.API_VERSION || 'v1',
    status: 'operational',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    services: [
      'Professional Training',
      'Software Development',
      '3D Modeling & Design',
      'Research Support'
    ],
    endpoints: {
      health: '/api/health',
      test: '/api/test',
      docs: 'Coming soon'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState;
  const statusMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };
  
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: {
      state: statusMap[dbStatus] || 'unknown',
      readyState: dbStatus
    },
    memory: process.memoryUsage(),
    nodeVersion: process.version
  });
});

// Test endpoint for frontend connection
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Backend is successfully connected!',
    databaseConnected: mongoose.connection.readyState === 1,
    data: {
      company: 'Meckarup',
      location: 'Patna, Bihar, India',
      services: [
        'R, Excel, SPSS Training',
        'Python & Data Engineering',
        'Software Development',
        '3D Modeling with Solidworks',
        'LaTeX & Research Support',
        'Digital Image Processing via MATLAB',
        'Geospatial Analysis using R/GIS',
        'Java & C Programming'
      ],
      contact: {
        email: 'info@meckarup.com',
        website: 'https://meckarup.com'
      }
    }
  });
});

// Database connection - Modern MongoDB v6+ syntax
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/meckarup_db';

const connectDB = async () => {
  try {
    console.log(`Connecting to MongoDB at: ${MONGODB_URI}`);
    
    // Remove deprecated options for MongoDB v6+
    await mongoose.connect(MONGODB_URI);
    
    console.log('✅ MongoDB connected successfully');
    console.log(`📁 Database: ${mongoose.connection.db?.databaseName || 'meckarup_db'}`);
    
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('\n⚠️  Troubleshooting steps:');
    console.log('1. Make sure MongoDB service is running:');
    console.log('   - Run as Admin: net start MongoDB');
    console.log('   - Or manually: mongod --dbpath="C:\\data\\db"');
    console.log('2. Check if MongoDB is installed');
    console.log('3. Try using 127.0.0.1 instead of localhost');
    console.log('4. Create database directory if needed:');
    console.log('   md C:\\data\\db');
    console.log('\n⚠️  Continuing without database connection for testing...');
  }
};

// Start server first, then connect to DB (better UX)
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
  console.log(`📊 API Base URL: http://localhost:${PORT}`);
  console.log('🗄️  Attempting MongoDB connection...');
  
  await connectDB();
});

// Connection events
mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB event: connected');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB event: error', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB event: disconnected');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// 404 handler - MUST BE AFTER ALL ROUTES
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    message: `Cannot ${req.method} ${req.originalUrl}`,
    timestamp: new Date().toISOString(),
    availableEndpoints: [
      'GET /',
      'GET /api/health',
      'GET /api/test'
    ]
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Closing server...');
  server.close(() => {
    console.log('Server closed');
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
});