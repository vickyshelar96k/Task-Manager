const pool = require('../db/connect');
const { getEmbedding } = require('../utils/embedding');

exports.getAllTasks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addTask = async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const fullText = `${title} ${description}`;
    const embedding = await getEmbedding(fullText);

    // Convert array to pgvector format: [-0.12, 0.34, ...]
    const embeddingVector = `[${embedding.join(', ')}]`;

    const result = await pool.query(
      'INSERT INTO tasks (title, description, status, embedding) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, status, embeddingVector]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding task:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchTasks = async (req, res) => {
  const { query } = req.body;
  try {
    const embedding = await getEmbedding(query);
    const result = await pool.query(
      `SELECT id, title, description, status FROM tasks ORDER BY embedding <-> $1 LIMIT 3`,
      [embedding]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
