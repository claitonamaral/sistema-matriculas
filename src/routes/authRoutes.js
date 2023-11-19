const { Router } = require('express');
const cors = require('cors');
const authRouter = Router();

const corsOptions = {
    origin: 'http://your-allowed-origin.com', // Especifique a origem permitida
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
  };

const authController = require('../controllers/authController');
const alunoRoutes = require('../routes/alunoRoutes');
const swaggerRouter = require('./swaggerRoutes');

authRouter.post('/generate-token', cors(corsOptions), authController.generateToken);
authRouter.use('/swagger-ui', swaggerRouter);
authRouter.use("/aluno", alunoRoutes);

module.exports = authRouter;
