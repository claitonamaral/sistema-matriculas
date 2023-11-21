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
const app = Router();
app.use(cors({
    origin: '*'
}));

authRouter.get('/check-token', authController.checkToken);

authRouter.post('/generate-token', cors(), authController.generateToken);
authRouter.use('/swagger-ui', swaggerRouter);
authRouter.use("/aluno", alunoRoutes);
authRouter.use("/alunoTurma", alunoTurmaRoutes);
authRouter.use("/disciplina", disciplinaRoutes);
authRouter.use("/professor", professorRoutes);
authRouter.use("/turma", turmaRoutes);

module.exports = authRouter;
