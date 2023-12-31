const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const ProfessorController = require('../controllers/professorController');
const router = express.Router();
router.use(authenticateToken);
router.post('/', ProfessorController.createProfessor);
router.get('/', ProfessorController.getAllProfessores);
router.get('/:id', ProfessorController.getProfessor);
router.put('/:id', ProfessorController.updateProfessor);
router.delete('/:id', ProfessorController.deleteProfessor);

module.exports = router;
