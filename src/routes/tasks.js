const express = require('express');
const TasksController = require('../controllers/tasksController');

const router = express.Router();
const tasksController = new TasksController();

// Route for adding a task
router.post('/', (req, res) => {
  try {
    const task = req.body;
    tasksController.addTask(task.title, task.description, task.status);
    res.sendStatus(201);
  } catch (err) {
    console.error('Error adding task:', err);
    res.sendStatus(500);
  }
});


// Route for deleting a task
router.delete('/:taskId', (req, res) => {
  try {
    const taskId = req.params.taskId;
    tasksController.deleteTask(taskId);
    res.sendStatus(204);
  } catch (err) {
    console.error('Error deleting task:', err);
    res.sendStatus(500);
  }
});


// Route for marking a task as complete
router.put('/tasks/:taskId/complete', (req, res) => {
  try {
    const taskId = req.params.taskId;
    tasksController.markTaskAsComplete(taskId);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error marking task as complete:', err);
    res.sendStatus(500);
  }
});

module.exports = router;