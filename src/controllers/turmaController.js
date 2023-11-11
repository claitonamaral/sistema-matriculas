const Turma = require('../models/turma');

const TurmaController = {
  createTurma: (req, res) => {
    const { horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis } = req.body;
    Turma.create({ horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Turma created successfully' });
    });    
  },

  getAllTurmas: (req, res) => {
    Turma.getAll((err, Turmas) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ Turmas });
    });
  },

  updateTurma: (req, res) => {
    const { horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis } = req.body;
    const id = req.params.id;
    Turma.update(id, { horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Turma updated successfully' });
    });
  },

  deleteTurma: (req, res) => {
    const id = req.params.id;
    Turma.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Turma deleted successfully' });
    });
  },
};

module.exports = TurmaController;
