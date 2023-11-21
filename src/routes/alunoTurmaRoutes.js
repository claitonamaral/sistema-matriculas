const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const AlunoTurmaController = require('../controllers/alunoTurmaController');
const router = express.Router();
router.use(authenticateToken);
router.post('/', AlunoTurmaController.createAlunoTurma);
router.get('/', AlunoTurmaController.getAllAlunoTurmas);
router.get('/:id', AlunoTurmaController.getAlunoTurma);
router.put('/:id', AlunoTurmaController.updateAlunoTurma);
router.delete('/:id', AlunoTurmaController.deleteAlunoTurma);

module.exports = router;
