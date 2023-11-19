const express = require('express');
const AlunoController = require('../controllers/alunoController');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const cors = require('cors');

const corsOptions = {
    origin: 'https://api-matricula.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

router.use(cors(corsOptions));
router.use(authenticateToken);

router.post('/', AlunoController.createAluno);
router.get('/', AlunoController.getAllAlunos);
router.get('/:id', AlunoController.getAluno);
router.put('/:id', AlunoController.updateAluno);
router.delete('/:id', AlunoController.deleteAluno);

module.exports = router;
