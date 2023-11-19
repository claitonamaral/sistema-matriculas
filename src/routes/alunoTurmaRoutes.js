const express = require('express');
const AlunoTurmaController = require('../controllers/alunoTurmaController');

const router = express.Router();

router.post('/alunoTurma', AlunoTurmaController.createAlunoTurma);
router.get('/alunoTurma', AlunoTurmaController.getAllAlunoTurmas);
router.get('/alunoTurma/:id', AlunoTurmaController.getAlunoTurma);
router.put('/alunoTurma/:id', AlunoTurmaController.updateAlunoTurma);
router.delete('/alunoTurma/:id', AlunoTurmaController.deleteAlunoTurma);

module.exports = router;
