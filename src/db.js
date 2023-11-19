const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS alunos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS professores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS disciplinas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS turmas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_professor INTEGER, 
      id_disciplina INTEGER, 
      id_turno INTEGER, 
      id_diaSemana INTEGER
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS aluno_turma (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_aluno INTEGER,
      id_turma INTEGER
    )
  `);

});

module.exports = db;
