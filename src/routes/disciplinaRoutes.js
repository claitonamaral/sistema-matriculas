const express = require('express');
const DisciplinaController = require('../controllers/disciplinaController');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();
router.use(authenticateToken);
router.post('/', DisciplinaController.createDisciplina);
router.get('/', DisciplinaController.getAllDisciplinas);
router.get('/:id', DisciplinaController.getDisciplina);
router.put('/:id', DisciplinaController.updateDisciplina);
router.delete('/:id', DisciplinaController.deleteDisciplina);

module.exports = router;
