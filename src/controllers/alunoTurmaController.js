const AlunoTurma = require('../models/aluno_turma');

const AlunoTurmaController = {  
  createAlunoTurma: (req, res) => {  
    const { id_aluno, id_turma } = req.body;
    AlunoTurma.getCountAlunoTurma({id_aluno, id_turma}, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const { count } = result[0];
      if(count > 0) {  
        return res.status(500).json({ message: `Aluno já está matriculado nesta turma!` });
      } else {
        AlunoTurma.getCountTurma(id_turma, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }    
          const { count } = result[0];
          if(count >= 30) {  
            return res.status(500).json({ message: `Turma já está lotada com ${count} alunos!` });
          } else {
            AlunoTurma.create({ id_turma, id_aluno }, (err) => {
              if (err) {
                return res.status(500).json({ error: err.message });
              }
              res.json({ message: 'AlunoTurma created successfully' });
            });        
          }
        });  
      }
    })    
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

  updateAlunoTurma: (req, res) => {
    const { id_aluno, id_turma } = req.body;
    AlunoTurma.getCountAlunoTurma({id_aluno, id_turma}, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const { count } = result[0];
      if(count > 0) {
        return res.status(500).json({ message: `Aluno já está matriculado nesta turma!` });
      } else {
        AlunoTurma.getCountTurma(id_turma, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          const { count } = result[0];
          if(count >= 30) {  
            return res.status(500).json({ message: `Turma já está lotada com ${count} alunos!` });
          } else {
            AlunoTurma.update({ id_aluno, id_turma }, (err) => {
              if (err) {
                return res.status(500).json({ error: err.message });
              }
              res.json({ message: 'AlunoTurma updated successfully' });
            });        
          }
        });  
      }
    })    
  },

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
