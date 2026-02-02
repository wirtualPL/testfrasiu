import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const db = new sqlite3.Database(`${__dirname}/quiz.db`);

app.use(cors());
app.use(express.json());

// Initialize database
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nickname TEXT NOT NULL,
      score INTEGER NOT NULL,
      total INTEGER NOT NULL,
      percentage INTEGER NOT NULL,
      date TEXT NOT NULL,
      settings TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// GET all scores (sorted by percentage, then by date)
app.get('/api/scores', (req, res) => {
  db.all(
    `SELECT * FROM scores ORDER BY percentage DESC, created_at DESC LIMIT 100`,
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows || []);
    }
  );
});

// GET scores with history (all attempts by all players)
app.get('/api/scores/history', (req, res) => {
  db.all(
    `SELECT nickname, score, total, percentage, date, settings, created_at 
     FROM scores 
     ORDER BY created_at DESC 
     LIMIT 500`,
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows || []);
    }
  );
});

// GET scores for a specific player
app.get('/api/scores/player/:nickname', (req, res) => {
  db.all(
    `SELECT * FROM scores WHERE nickname = ? ORDER BY created_at DESC`,
    [req.params.nickname],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows || []);
    }
  );
});

// POST new score
app.post('/api/scores', (req, res) => {
  const { nickname, score, total, percentage, settings } = req.body;

  if (!nickname || score === undefined || !total || percentage === undefined || !settings) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  db.run(
    `INSERT INTO scores (nickname, score, total, percentage, date, settings) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [nickname, score, total, percentage, new Date().toISOString(), settings],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ success: true });
    }
  );
});

// DELETE all scores (admin only - in production add auth)
app.delete('/api/scores', (req, res) => {
  db.run(`DELETE FROM scores`, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/scores`);
});
