const express = require('express');
const TurmaController = require('../controllers/turmaController');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();
router.use(authenticateToken);
router.post('/', TurmaController.createTurma);
router.get('/', TurmaController.getAllTurmas);
router.get('/:id', TurmaController.getTurma);
router.put('/:id', TurmaController.updateTurma);
router.delete('/:id', TurmaController.deleteTurma);

module.exports = router;
