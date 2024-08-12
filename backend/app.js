import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './users/routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
