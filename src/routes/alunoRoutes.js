const express = require('express');
const AlunoController = require('../controllers/alunoController');

const router = express.Router();

router.post('/', AlunoController.createAluno);
router.get('/', AlunoController.getAllAlunos);
router.get('/:id', AlunoController.getAluno);
router.put('/:id', AlunoController.updateAluno);
router.delete('/:id', AlunoController.deleteAluno);

module.exports = router;
