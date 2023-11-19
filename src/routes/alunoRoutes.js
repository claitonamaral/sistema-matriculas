const express = require('express');
const cors = require('cors');
const AlunoController = require('../controllers/alunoController');
const authenticateToken = require('../middleware/authenticateToken'); 

const router = express.Router();

router.post('/', AlunoController.createAluno);
router.get('/', cors(), AlunoController.getAllAlunos);
router.get('/:id', AlunoController.getAluno);
router.put('/:id', AlunoController.updateAluno);
router.delete('/:id', AlunoController.deleteAluno);

module.exports = router;
