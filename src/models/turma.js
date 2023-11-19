const db = require('../db');

class Turma {
  static create({ id_professor, id_disciplina, id_turno, id_diaSemana }, callback) {
    db.run('INSERT INTO turmas (id_professor, id_disciplina, id_turno, id_diaSemana) VALUES (?, ?, ?, ?)', [id_professor, id_disciplina, id_turno, id_diaSemana], callback);
  }

  static getAll(callback) {
    db.all('SELECT * FROM turmas', callback);
  }

  static get(id, callback) {
    db.all('SELECT * FROM turmas WHERE id=?', id, callback);
  }

  //quantas turmas o professor pode se matricular
  static getCountProfessor({id_professor}, callback) {
    db.all('SELECT COUNT(*) AS count FROM turmas WHERE id_professor=?', [id_professor], callback);
  }

  //quantas turmas por turno em um dia 
  static getCountTurmaTurno({ id_turno, id_diaSemana }, callback) {
    db.all('SELECT COUNT(*) AS count FROM turmas WHERE id_turno=? AND id_diaSemana=?', [id_turno, id_diaSemana], callback);
  }

  //se ja tem esse professor nessa disciplina nesse turno e dia
  static getCountProfDiscTurmaTurno({ id_disciplina, id_turno, id_diaSemana }, callback) {
    db.all('SELECT COUNT(*) AS count FROM turmas WHERE id_disciplina=? AND id_turno=? AND id_diaSemana=?', [id_disciplina, id_turno, id_diaSemana], callback);
  }

  //quantas turmas serão ofertadas por disciplina
  static getCountDisciplina( id_disciplina , callback) {
    db.all('SELECT COUNT(*) AS count FROM turmas WHERE id_disciplina=?', [id_disciplina], callback);
  }

  static update(id, {id_professor, id_disciplina, id_turno, id_diaSemana}, callback) {
    db.run('UPDATE turmas SET id_professor=?, id_disciplina=?, id_turno=?, id_diaSemana=? WHERE id=?', [id_professor, id_disciplina, id_turno, id_diaSemana, id], callback);
  }

  static delete(id, callback) {
    db.run('DELETE FROM turmas WHERE id=?', id, callback);
  }
}

module.exports = Turma;
