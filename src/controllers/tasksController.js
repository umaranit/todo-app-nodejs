const Task = require('../models/task');
const fs = require('fs');

class TasksController {
  constructor() {
    this.tasks = [];
    this.loadTasks();
  }

  loadTasks() {
    try {
      const data = fs.readFileSync('./src/data/tasks.json', 'utf8');
      const tasks = JSON.parse(data);
      this.tasks = Array.isArray(tasks) ? tasks : [];
    } catch (err) {
      console.error('Error reading tasks data:', err);
    }
  }

  saveTasks() {
    try {
      fs.writeFileSync('./src/data/tasks.json', JSON.stringify(this.tasks));
    } catch (err) {
      console.error('Error saving tasks data:', err);
    }
  }

  getAllTasks() {
    return this.tasks;
  }

  addTask(title, description, status) {
    try {
      const task = new Task(title, description, false, status);
      this.tasks.push(task);
      this.saveTasks();
    } catch (err) {
      console.error('Error adding task:', err);
      throw err;
    }
  }

  deleteTask(index) {
    try {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
        this.saveTasks();
      } else {
        throw new Error('Invalid task index');
      }
    } catch (err) {
      console.error('Error deleting task:', err);
      throw err;
    }
  }


  markTaskComplete(index) {
    try {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].complete = true;
        this.saveTasks();
      } else {
        throw new Error('Invalid task index');
      }
    } catch (err) {
      console.error('Error marking task as complete:', err);
      throw err;
    }
  }
}

module.exports = TasksController;