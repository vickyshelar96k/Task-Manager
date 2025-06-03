const pool = require('../db/connect.js');
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Routes
router.get('/', taskController.getAllTasks);
router.post('/', taskController.addTask);
router.delete('/:id', taskController.deleteTask);
router.post('/search', taskController.searchTasks);

router.put('/:id', async (req, res) => {
  const { title, description, status } = req.body;
  const { id } = req.params;

  try {
    const result = await pool.query(
      'UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *',
      [title, description, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;