import Database from 'better-sqlite3';

const db = new Database('arome.db', { verbose: console.log });

export default db;