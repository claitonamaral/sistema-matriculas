const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const exemploRoutes = require('./routes/exemploRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Configurar o middleware CORS
app.use(cors());

// Middleware de exemplo
app.use((req, res, next) => {
  console.log('Middleware de exemplo');
  next();
});

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo à API!');
});

// Rotas de exemplo
app.use('/api/v1', routes);

// Configurar Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
