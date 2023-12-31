const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const routes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Configurar o middleware CORS
app.use(cors());

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
});

// Rota de exemplo
app.use('/api/v1', routes);

// Configurar Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
