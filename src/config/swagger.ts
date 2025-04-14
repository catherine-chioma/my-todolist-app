// src/config/swagger.ts
// Swagger configuration file or API documentation file (e.g., app.ts or api-docs.ts)
const swaggerJSDoc = require('swagger-jsdoc'); // Use require for these specific imports
const swaggerUi = require('swagger-ui-express');

// Swagger Definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Todo API',
    version: '1.0.0',
    description: 'A simple API to manage Todos',
    contact: {
      name: 'Your Name',
      email: 'your.email@example.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3001', // Your API base URL
    },
  ],
};

// Options for SwaggerJSDoc
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Path to your API routes files for automatic doc generation
};

// Generate Swagger Spec
const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
