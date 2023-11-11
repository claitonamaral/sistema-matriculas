const db = require('../db');

class Turma {
  static create({ aluno, professor, disciplina }, callback) {
    db.run('INSERT INTO turmas (aluno, professor, disciplina) VALUES (?, ?, ?)', [aluno, professor, disciplina], callback);
  }

  static getAll(callback) {
    db.all('SELECT * FROM turmas', callback);
  }

  static update(id, { aluno, professor, disciplina }, callback) {
    db.run('UPDATE turmas SET aluno=?, professor=?, disciplina=? WHERE id=?', [aluno, professor, disciplina, id], callback);
  }

  static delete(id, callback) {
    db.run('DELETE FROM turmas WHERE id=?', id, callback);
  }
}

module.exports = Turma;
