const db = require('../db');

class Turma {
  static create({ id_professor, id_disciplina }, callback) {
    db.run('INSERT INTO turmas (id_professor, id_disciplina) VALUES (?, ?)', [id_professor, id_disciplina], callback);
  }

  static getAll(callback) {
    db.all('SELECT * FROM turmas', callback);
  }

  static get(id, callback) {
    db.all('SELECT * FROM turmas WHERE id=?', id, callback);
  }

  static getCountProfessor(id_professor, callback) {
    db.all('SELECT COUNT(*) AS count FROM turmas WHERE id_professor=?', id_professor, callback);
  }

  static update(id, {id_disciplina, id_professor}, callback) {
    db.run('UPDATE turmas SET id_professor=?, id_disciplina=? WHERE id=?', [id, id_disciplina, id_professor], callback);
  }

  static delete(id, callback) {
    db.run('DELETE FROM turmas WHERE id=?', id, callback);
  }
}

module.exports = Turma;
