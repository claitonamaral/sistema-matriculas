const db = require('../db');

class Disciplina {
  static create({ name }, callback) {
    db.run('INSERT INTO disciplinas (name) VALUES (?)', [name], callback);
  }

  static getAll(callback) {
    db.all('SELECT * FROM disciplinas', callback);
  }

  static update(id, { name }, callback) {
    db.run('UPDATE disciplinas SET name=? WHERE id=?', [name, id], callback);
  }

  static delete(id, callback) {
    db.run('DELETE FROM disciplinas WHERE id=?', id, callback);
  }
}

module.exports = Disciplina;
