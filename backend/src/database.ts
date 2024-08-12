import Database from 'better-sqlite3';

// Conexão com o banco de dados SQLite
const db = new Database('arome.db', { verbose: console.log });

export default db;