const express = require('express');
const AlunoTurmaController = require('../controllers/alunoTurmaController');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const cors = require('cors');

const corsOptions = {
    origin: 'https://api-matricula.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

router.use(cors(corsOptions));
router.use(authenticateToken);

router.post('/', AlunoTurmaController.createAlunoTurma);
router.get('/', AlunoTurmaController.getAllAlunoTurmas);
router.get('/:id', AlunoTurmaController.getAlunoTurma);
router.put('/:id', AlunoTurmaController.updateAlunoTurma);
router.delete('/:id', AlunoTurmaController.deleteAlunoTurma);

module.exports = router;
