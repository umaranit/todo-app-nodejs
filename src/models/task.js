class Task {
  constructor(title, description, completed, status) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.status = status || 'New'; // Default status is 'New'
  }
}

module.exports = Task;