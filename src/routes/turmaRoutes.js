const express = require('express');
const TurmaController = require('../controllers/turmaController');

const router = express.Router();

router.post('/Turmas', TurmaController.createTurma);
router.get('/Turmas', TurmaController.getAllTurmas);
router.put('/Turmas/:id', TurmaController.updateTurma);
router.delete('/Turmas/:id', TurmaController.deleteTurma);

module.exports = router;
