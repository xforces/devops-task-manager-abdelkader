const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
 feature/routes-refactor
    res.json({ message: "Welcome from FEATURE branch" });

    res.json({ message: "Welcome from MAIN branch with refactored routes" });
  main
});

app.use('/tasks', tasksRouter);

app.listen(3000, () => console.log("API running on port 3000"));