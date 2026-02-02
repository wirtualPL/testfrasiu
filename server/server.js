import express from 'express';
import cors from 'cors';
import { sql } from '@vercel/postgres';

const app = express();

app.use(cors());
app.use(express.json());

// --- WAŻNE: Endpoint do jednorazowego utworzenia tabeli ---
// Po wdrożeniu wejdź raz na adres: twoja-strona.vercel.app/api/create-table
app.get('/api/create-table', async (req, res) => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS scores (
        id SERIAL PRIMARY KEY,
        nickname TEXT NOT NULL,
        score INTEGER NOT NULL,
        total INTEGER NOT NULL,
        percentage INTEGER NOT NULL,
        date TEXT NOT NULL,
        settings TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    return res.status(200).json({ message: 'Tabela scores została utworzona' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// GET all scores (sorted by percentage, then by date)
app.get('/api/scores', async (req, res) => {
  try {
    // Vercel Postgres używa składni szablonów (template literals)
    const { rows } = await sql`
      SELECT * FROM scores 
      ORDER BY percentage DESC, created_at DESC 
      LIMIT 100
    `;
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET scores with history
app.get('/api/scores/history', async (req, res) => {
  try {
    const { rows } = await sql`
      SELECT nickname, score, total, percentage, date, settings, created_at 
      FROM scores 
      ORDER BY created_at DESC 
      LIMIT 500
    `;
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET scores for a specific player
app.get('/api/scores/player/:nickname', async (req, res) => {
  const { nickname } = req.params;
  try {
    const { rows } = await sql`
      SELECT * FROM scores 
      WHERE nickname = ${nickname} 
      ORDER BY created_at DESC
    `;
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new score
app.post('/api/scores', async (req, res) => {
  const { nickname, score, total, percentage, settings } = req.body;

  if (!nickname || score === undefined || !total || percentage === undefined || !settings) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const date = new Date().toISOString();
    await sql`
      INSERT INTO scores (nickname, score, total, percentage, date, settings) 
      VALUES (${nickname}, ${score}, ${total}, ${percentage}, ${date}, ${settings})
    `;
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE all scores
app.delete('/api/scores', async (req, res) => {
  try {
    await sql`DELETE FROM scores`;
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Na Vercel NIE używamy app.listen().
// Eksportujemy aplikację, aby Vercel mógł ją obsłużyć jako Serverless Function.
export default app;