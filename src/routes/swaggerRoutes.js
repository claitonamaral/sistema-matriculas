const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const app = express.Router();
app.use("/", swaggerUi.serve);
app.get("/", swaggerUi.setup(swaggerDocument));

module.exports = app;
