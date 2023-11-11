const db = require('../db');

class Turma {
  static create({ horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis }, callback) {
    db.run('INSERT INTO turmas (horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis) VALUES (?, ?, ?,?, ?, ?,?)', [horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis], callback);
  }

  static getAll(callback) {
    db.all('SELECT * FROM turmas', callback);
  }

  static update(id, { horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis }, callback) {
    db.run('UPDATE turmas SET horario=?, dia_semana=?, turno=?, professor_id=?, disciplina_id=?, aluno_id=?, vagas_disponiveis=? WHERE id=?', [horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis, id], callback);
  }

  static delete(id, callback) {
    db.run('DELETE FROM turmas WHERE id=?', id, callback);
  }

  static createTurma(horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis) {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO turmas (horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [horario, dia_semana, turno, professor_id, disciplina_id, aluno_id, vagas_disponiveis],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this.lastID);
          }
        }
      );
    });
  }

  static obterTodasTurmas() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM turmas', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

}

module.exports = Turma;
