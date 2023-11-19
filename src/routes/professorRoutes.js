const express = require('express');
const ProfessorController = require('../controllers/professorController');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const cors = require('cors');

const corsOptions = {
    origin: 'https://api-matricula.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

router.use(cors(corsOptions));
router.use(authenticateToken);

router.post('/', ProfessorController.createProfessor);
router.get('/', ProfessorController.getAllProfessores);
router.get('/:id', ProfessorController.getProfessor);
router.put('/:id', ProfessorController.updateProfessor);
router.delete('/:id', ProfessorController.deleteProfessor);

module.exports = router;
