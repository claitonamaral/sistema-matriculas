const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const cors = require('cors');

const app = express.Router();
app.use(cors({
    origin: '*'
}));

app.use("/", cors(), swaggerUi.serve);
app.get("/", cors(), swaggerUi.setup(swaggerDocument));

module.exports = app;
