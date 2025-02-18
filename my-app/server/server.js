import express from 'express';
import cors from 'cors'; // cross-origin-resource-sharing
import jwt from 'jsonwebtoken'; // Missing jwt import
import User from './models/user.js'; // Assuming User model is located here
import connectDB from './database/db.js';
import authRoutes from './routes/authRoutes.js';
import { configDotenv } from 'dotenv';
configDotenv();

const app = express();

// Middleware API 
app.use(cors({ origin: "http://localhost:3000" })); // CORS for cross server access
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);










// Assign PORT and Hostname to the Server
const PORT = process.env.PORT || 4000;
const hostname = process.env.HOST_NAME || 'localhost';

app.listen(PORT, hostname, (error) => {
  if (!error) {
    console.log(`Server running successfully at http://${hostname}:${PORT}`);
    // Connect to MongoDB
    connectDB();
  } else {
    console.log(`Server failed to start!`);
  }
});
