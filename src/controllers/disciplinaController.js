const Disciplina = require('../models/disciplina');

const DisciplinaController = {
  createDisciplina: (req, res) => {
    const { name } = req.body;
    Disciplina.create({ name }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Disciplina created successfully' });
    });
  },

  getAllDisciplinas: (req, res) => {
    Disciplina.getAll((err, Disciplinas) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ Disciplinas });
    });
  },

  updateDisciplina: (req, res) => {
    const { name } = req.body;
    const id = req.params.id;
    Disciplina.update(id, { name }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Disciplina updated successfully' });
    });
  },

  deleteDisciplina: (req, res) => {
    const id = req.params.id;
    Disciplina.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Disciplina deleted successfully' });
    });
  },
};

module.exports = DisciplinaController;
