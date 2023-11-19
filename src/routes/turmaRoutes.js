const express = require('express');
const TurmaController = require('../controllers/turmaController');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const cors = require('cors');

const corsOptions = {
    origin: 'https://api-matricula.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

router.use(cors(corsOptions));
router.use(authenticateToken);

router.post('/', TurmaController.createTurma);
router.get('/', TurmaController.getAllTurmas);
router.get('/:id', TurmaController.getTurma);
router.put('/:id', TurmaController.updateTurma);
router.delete('/:id', TurmaController.deleteTurma);

module.exports = router;
