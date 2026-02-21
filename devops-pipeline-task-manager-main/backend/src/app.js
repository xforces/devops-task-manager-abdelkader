const express = require('express');
const app = express();
const port = 3000;
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
   res.json({ message: "Welcome from MAIN branch" });
});

app.get('/tasks', (req, res) => {
  res.json([{ id: 1, title: "Example Task" }]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
