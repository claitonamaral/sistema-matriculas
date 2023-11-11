// api.js
const express = require('express');
const router = express.Router();
const { Turma } = require('../models/turma');

router.post('/ofertas', async (req, res) => {
  try {
    const { horario, dia_semana, turno, professor_id, disciplina_id, vagas_disponiveis } = req.body;
    const turmaId = await Turma.createTurma(horario, dia_semana, turno, professor_id, disciplina_id, vagas_disponiveis);
    res.json({ success: true, turmaId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/ofertas', async (req, res) => {
  try {
    const turmas = await Turma.obterTodasTurmas();
    res.json({ success: true, turmas });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
