const { Router } = require('express');
const cors = require('cors');
const authRouter = Router();

const corsOptions = {
    origin: 'https://api-matricula.onrender.com/', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  };

const authController = require('../controllers/authController');
const alunoRoutes = require('../routes/alunoRoutes');
const swaggerRouter = require('./swaggerRoutes');

authRouter.post('/generate-token', cors(corsOptions), authController.generateToken);
authRouter.use('/swagger-ui', swaggerRouter);
authRouter.use("/aluno", alunoRoutes);

module.exports = authRouter;
