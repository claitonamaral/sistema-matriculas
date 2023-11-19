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
  
  static update(id, { id_aluno, id_turma }, callback) {
    db.run('UPDATE aluno_turma SET id_aluno=?, id_turma=? WHERE id=?', [id_aluno, id_turma, id], callback);
  }

  //quantos alunos por turma
  static getCountTurma(id_turma, callback) {
    db.all('SELECT COUNT(*) AS count FROM aluno_turma WHERE id_turma=?', id_turma,  callback);
  }

  //se ja tem esse aluno na turma
  static getCountAlunoTurma({id_aluno, id_turma}, callback) {
    db.all('SELECT COUNT(*) AS count FROM aluno_turma WHERE id_aluno=? AND id_turma=?', [id_aluno, id_turma],  callback);
  }

  static deleteAlunoFromTurma(id, callback) {
    db.run('DELETE FROM aluno_turma WHERE id=?', id, callback);
  }
}

module.exports = AlunoTurma;
