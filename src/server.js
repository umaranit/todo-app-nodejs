const express = require('express');
const path = require('path');
const tasksRouter = require('./routes/tasks');

const app = express();
const port = 3000;

// Serve static files from the "views" directory
app.use(express.static(path.join(__dirname, '../views'), (err) => {
  if (err) console.error('Error serving static files:', err);
}));


app.use(express.json());
app.use('/tasks', tasksRouter);

// Add this route handler for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'), (err) => {
    if (err) console.error('Error sending file:', err);
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});