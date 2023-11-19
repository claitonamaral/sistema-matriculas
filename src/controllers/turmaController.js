const Turma = require('../models/turma');

const TurmaController = {
  createTurma: (req, res) => {
    const { id_disciplina, id_professor, id_turno, id_diaSemana } = req.body;
    Turma.getCountProfDiscTurmaTurno({id_disciplina, id_turno, id_diaSemana}, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const { count } = result[0];
      if(count > 0) {
        return res.status(500).json({ message: `Já existe um professor matriculado nesta disciplina nesse turno e dia!` });
      } else {
        Turma.getCountDisciplina(id_disciplina, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          const { count } = result[0];
          if(count >= 3) {
            return res.status(500).json({ message: `Já existem ${count} turmas desta disciplina!` });
          } else {
            Turma.getCountTurmaTurno({id_turno, id_diaSemana}, (err, result) => {
              if (err) {
                return res.status(500).json({ error: err.message });
              }
              const { count } = result[0];
              if(count >= 3) {
                return res.status(500).json({ message: `Já existem ${count} turmas nesse turno!` });
              } else {
                Turma.getCountProfessor({id_professor}, (err, result) => {
                  if (err) {
                    return res.status(500).json({ error: err.message });
                  }
                  const { count } = result[0];
                  if(count >= 2) {        
                    return res.status(500).json({ message: `Professor já está vinculado à ${count} turmas!` });
                  } else {
                    Turma.create({ id_disciplina, id_professor, id_turno, id_diaSemana }, (err) => {
                      if (err) {
                        return res.status(500).json({ error: err.message });
                      }
                      res.json({ message: 'Turma created successfully' });
                    });        
                  }
                });
              }
            })     
          }
        })
      }
    })             
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

  updateTurma: (req, res) => { 
    const { id_disciplina, id_professor, id_turno, id_diaSemana } = req.body;
    const id = req.params.id;
    Turma.getCountProfDiscTurmaTurno({id_disciplina, id_turno, id_diaSemana}, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const { count } = result[0];
      if(count > 0) {
        return res.status(500).json({ message: `Já existe um professor matriculado nesta disciplina nesse turno e dia!` });
      } else {
        Turma.getCountDisciplina(id_disciplina, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          const { count } = result[0];
          if(count >= 3) {
            return res.status(500).json({ message: `Já existem ${count} turmas desta disciplina!` });
          } else {
            Turma.getCountTurmaTurno({id_turno, id_diaSemana}, (err, result) => {
              if (err) {
                return res.status(500).json({ error: err.message });
              }
              const { count } = result[0];
              if(count >= 3) {
                return res.status(500).json({ message: `Já existem ${count} turmas nesse turno!` });
              } else {
                Turma.getCountProfessor({id_professor}, (err, result) => {
                  if (err) {
                    return res.status(500).json({ error: err.message });
                  }
                  const { count } = result[0];
                  if(count >= 2) {        
                    return res.status(500).json({ message: `Professor já está vinculado à ${count} turmas!` });
                  } else {
                    Turma.update(id, { id_disciplina, id_professor, id_turno, id_diaSemana }, (err) => {
                      if (err) {
                        return res.status(500).json({ error: err.message });
                      }
                      res.json({ message: 'Turma updated successfully' });
                    });        
                  }
                });
              }
            })
          }
        })
      }
    })            
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
