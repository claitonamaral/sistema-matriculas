const { Router } = require('express');
const authRouter = Router();

const authController = require('../controllers/authController');
const alunoRoutes = require('../routes/alunoRoutes');
const swaggerRouter = require('./swaggerRoutes');

authRouter.post('/generate-token', authController.generateToken);
authRouter.use('/swagger-ui', swaggerRouter);
authRouter.use("/aluno", alunoRoutes);

module.exports = authRouter;
