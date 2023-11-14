const Aluno = require('../models/aluno');

const AlunoController = {
  createAluno: (req, res) => {
    const { name } = req.body;
    Aluno.create({ name }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Aluno created successfully' });
    });
  },

  getAllAlunos: (req, res) => {
    Aluno.getAll((err, Alunos) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ Alunos });
    });
  },

  getAluno: (req, res) => {
    const id = req.params.id;
    Aluno.get(id, (err, Aluno) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ Aluno });
    });
  },

  updateAluno: (req, res) => {
    const { name } = req.body;
    const id = req.params.id;
    Aluno.update(id, { name }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Aluno updated successfully' });
    });
  },

  deleteAluno: (req, res) => {
    const id = req.params.id;
    Aluno.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Aluno deleted successfully' });
    });
  },
};

module.exports = AlunoController;
