// Config/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'API documentation for the Blog application',
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1', // adjust the URL/port as needed
      },
    ],
  },
  apis: ['./Routes/*.js'], // path to your API routes with Swagger comments
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
