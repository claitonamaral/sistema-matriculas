const db = require('../db');

class Professor {
  static create({ name }, callback) {
    db.run('INSERT INTO professores (name) VALUES (?)', [name], callback);
  }

  static getAll(callback) {
    db.all('SELECT * FROM professores', callback);
  }

  static get(id, callback) {
    db.all('SELECT name FROM professores WHERE id=?', id, callback);
  }

  static update(id, { name }, callback) {
    db.run('UPDATE professores SET name=? WHERE id=?', [name, id], callback);
  }

  static delete(id, callback) {
    db.run('DELETE FROM professores WHERE id=?', id, callback);
  }
}

module.exports = Professor;
