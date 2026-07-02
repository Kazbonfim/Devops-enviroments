import { Database } from 'bun:sqlite';

const sqlite = new Database(process.env.DATABASE_URL || './data/sqlite.db');

export const db = sqlite;

// Create table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  );
`);
