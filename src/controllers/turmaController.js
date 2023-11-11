const Turma = require('../models/turma');

const TurmaController = {
  createTurma: (req, res) => {
    const { aluno, professor, disciplina } = req.body;
    Turma.create({ aluno, professor, disciplina }, (err) => {
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
    const { aluno, professor, disciplina } = req.body;
    const id = req.params.id;
    Turma.update(id, { aluno, professor, disciplina }, (err) => {
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
