const db = require('../db');

class AlunoTurma {
  static create({ id_aluno, id_turma }, callback) {
    db.run('INSERT INTO aluno_turma (id_aluno, id_turma) VALUES (?,?)', [id_aluno, id_turma], callback);
  }

  static getAll(callback) {
    db.all('SELECT * FROM aluno_turma', callback);
  }

  static get(id, callback) {
    db.all('SELECT id_aluno, id_turma FROM aluno_turma WHERE id=?', id,  callback);
  }
  
  /*static update(id, { id_turma, id_aluno }, callback) {
    db.run('UPDATE aluno_turma SET id_turma=?, id_aluno=? WHERE id=?', [id, id_turma, id_aluno ], callback);
  }*/

  static getCountTurma(id_turma, callback) {
    db.all('SELECT COUNT(*) AS count FROM aluno_turma WHERE id_turma=?', id_turma,  callback);
  }

  static deleteAlunoFromTurma(id, callback) {
    db.run('DELETE FROM aluno_turma WHERE id=?', id, callback);
  }
}

module.exports = AlunoTurma;
