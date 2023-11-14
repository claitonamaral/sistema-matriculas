const express = require('express');
const AlunoController = require('../controllers/alunoController');

const router = express.Router();

router.post('/Alunos', AlunoController.createAluno);
router.get('/Alunos', AlunoController.getAllAlunos);
router.get('/Alunos/:id', AlunoController.getAluno);
router.put('/Alunos/:id', AlunoController.updateAluno);
router.delete('/Alunos/:id', AlunoController.deleteAluno);

module.exports = router;
