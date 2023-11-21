const express = require('express');
const routes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Configurar o middleware CORS
app.use(cors());

// Rota de exemplo
app.use('/api/v1', routes);
app.get('/api/exemplo', (req, res) => {
  res.json({ mensagem: 'Olá, mundo!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
