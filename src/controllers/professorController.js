const Professor = require('../models/professor');

const ProfessorController = {
  createProfessor: (req, res) => {
    const { name } = req.body;
    Professor.create({ name }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Professor created successfully' });
    });
  },

  getAllProfessores: (req, res) => {
    Professor.getAll((err, Professores) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ Professores });
    });
  },

  getProfessor: (req, res) => {
    const id = req.params.id;
    Professor.get(id, (err, Professores) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ Professores });
    });
  },

  updateProfessor: (req, res) => {
    const { name } = req.body;
    const id = req.params.id;
    Professor.update(id, { name }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Professor updated successfully' });
    });
  },

  deleteProfessor: (req, res) => {
    const id = req.params.id;
    Professor.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Professor deleted successfully' });
    });
  },
};

module.exports = ProfessorController;
