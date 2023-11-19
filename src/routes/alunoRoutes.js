const express = require('express');
const cors = require('cors')
const AlunoController = require('../controllers/alunoController');

const router = express.Router();

var corsOptions = {
    origin: 'https://api-matricula.onrender.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post('/', cors(corsOptions), AlunoController.createAluno);
router.get('/', cors(corsOptions), AlunoController.getAllAlunos);
router.get('/:id', cors(corsOptions), AlunoController.getAluno);
router.put('/:id', cors(corsOptions), AlunoController.updateAluno);
router.delete('/:id', cors(corsOptions), AlunoController.deleteAluno);

module.exports = router;
