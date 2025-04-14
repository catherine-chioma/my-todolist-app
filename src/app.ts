// src/app.ts

import express from 'express';
import todoRoutes from './routes/todoRoutes'; // Import the routes
import { swaggerUi, swaggerSpec } from './config/swagger'; // Import Swagger setup

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json()); // This will enable req.body to work with JSON data

// Set up Swagger UI to serve the API docs at the /api-docs endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use the todoRoutes for the '/todos' path
app.use('/todos', todoRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Todo API!');
});

export default app; // Export the app so that it can be imported elsewhere
