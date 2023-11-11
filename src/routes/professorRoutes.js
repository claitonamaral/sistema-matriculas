const express = require('express');
const ProfessorController = require('../controllers/professorController');

const router = express.Router();

router.post('/Professores', ProfessorController.createProfessor);
router.get('/Professores', ProfessorController.getAllProfessores);
router.put('/Professores/:id', ProfessorController.updateProfessor);
router.delete('/Professores/:id', ProfessorController.deleteProfessor);

module.exports = router;
