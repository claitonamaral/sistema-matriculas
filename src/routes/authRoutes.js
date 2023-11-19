const { Router } = require('express');
const authRouter = Router();

const authController = require('../controllers/authController');
const alunoRoutes = require('../routes/alunoRoutes');
const alunoTurmaRoutes = require('../routes/alunoTurmaRoutes');
const disciplinaRoutes = require('../routes/disciplinaRoutes');
const professorRoutes = require('../routes/professorRoutes');
const turmaRoutes = require('../routes/turmaRoutes');
const swaggerRouter = require('./swaggerRoutes');

const cors = require('cors');

const corsOptions = {
    origin: 'https://api-matricula.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

// Temporary endpoint to check the received token
authRouter.get('/check-token', authController.checkToken);

authRouter.post('/generate-token', authController.generateToken);
authRouter.use('/swagger-ui', swaggerRouter);
authRouter.use("/aluno", alunoRoutes);
authRouter.use("/alunoTurma", alunoTurmaRoutes);
authRouter.use("/disciplina", disciplinaRoutes);
authRouter.use("/professor", professorRoutes);
authRouter.use("/turma", turmaRoutes);

module.exports = authRouter;
