const express = require('express');
const DisciplinaController = require('../controllers/disciplinaController');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const cors = require('cors');

const corsOptions = {
    origin: 'https://api-matricula.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

router.use(cors(corsOptions));
router.use(authenticateToken);

router.post('/', DisciplinaController.createDisciplina);
router.get('/', DisciplinaController.getAllDisciplinas);
router.get('/:id', DisciplinaController.getDisciplina);
router.put('/:id', DisciplinaController.updateDisciplina);
router.delete('/:id', DisciplinaController.deleteDisciplina);

module.exports = router;
