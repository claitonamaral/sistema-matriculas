const express = require('express');
const DisciplinaController = require('../controllers/disciplinaController');

const router = express.Router();

router.post('/Disciplinas', DisciplinaController.createDisciplina);
router.get('/Disciplinas', DisciplinaController.getAllDisciplinas);
router.get('/Disciplinas/:id', DisciplinaController.getDisciplina);
router.put('/Disciplinas/:id', DisciplinaController.updateDisciplina);
router.delete('/Disciplinas/:id', DisciplinaController.deleteDisciplina);

module.exports = router;
