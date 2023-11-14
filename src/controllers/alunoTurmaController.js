const AlunoTurma = require('../models/aluno_turma');

const AlunoTurmaController = {  
    createAlunoTurma: (req, res) => {  
    const { id_turma, id_aluno } = req.body;
    AlunoTurma.getCountTurma(id_turma, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const { count } = result[0];
      if(count < 30) {  //testei com um numero menor e está funcionando
        AlunoTurma.create({ id_turma, id_aluno }, (err) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          res.json({ message: 'AlunoTurma created successfully' });
        });
      } else {
        return res.status(500).json({ message: `Turma já está lotada com ${count} alunos!` });
      }
    });  
  },
 
  getAllAlunoTurmas: (req, res) => {
    AlunoTurma.getAll((err, AlunoTurma) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ AlunoTurma });
    });
  },

  getAlunoTurma: (req, res) => {
    const id = req.params.id;
    Turma.get(id, (err, AlunoTurma) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ AlunoTurma });
    });
  },

  /*updateAlunoTurma: (req, res) => {
    const { id_turma, id_aluno } = req.body;
    const id = req.params.id;
    AlunoTurma.update(id, { id_turma, id_aluno }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'AlunoTurma updated successfully' });
    });
  },*/

  deleteAlunoTurma: (req, res) => {
    const id = req.params.id;
    AlunoTurma.deleteAlunoFromTurma(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'AlunoTurma deleted successfully' });
    });
  },
};

module.exports = AlunoTurmaController;
