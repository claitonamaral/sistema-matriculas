const db = require('../db');

class Aluno {
  static create({ name }, callback) {
    db.run('INSERT INTO Alunos (name) VALUES (?)', [name], callback);
  }

  static getAll(callback) {
    db.all('SELECT * FROM Alunos', callback);
  }

  static get(id, callback) {
    db.all('SELECT name FROM Alunos WHERE id=?', id,  callback);
  }

  static update(id, { name }, callback) {
    db.run('UPDATE Alunos SET name=? WHERE id=?', [name, id], callback);
  }

  static delete(id, callback) {
    db.run('DELETE FROM Alunos WHERE id=?', id, callback);
  }
}

module.exports = Aluno;
