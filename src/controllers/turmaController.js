const Turma = require('../models/turma');

const TurmaController = {
  createTurma: (req, res) => {
    const { id_disciplina, id_professor } = req.body;
    Turma.getCountProfessor(id_professor, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const { count } = result[0];
      if(count < 2) {        
        Turma.create({ id_disciplina, id_professor }, (err) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          res.json({ message: 'Turma created successfully' });
        });
      } else {
        return res.status(500).json({ message: `Professor já está matriculado em ${count} disciplinas!` });
      }
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

  getTurma: (req, res) => {
    const id = req.params.id;
    Turma.get(id, (err, Turmas) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ Turmas });
    });
  },

  /*precisa de mais validações {
    1)não permitir o update caso quebre a regra do duas disciplinas por prof
    2)permitir mais de um professor por disciplina?
    3)quantas turmas de cada disciplina serão ofertadas?*/
  updateTurma: (req, res) => { 
    const { id_disciplina, id_professor } = req.body;
    const id = req.params.id;
    Turma.update(id, { id_disciplina, id_professor }, (err) => {
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
