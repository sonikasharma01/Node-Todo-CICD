const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded bodies from HTML forms
app.use(express.urlencoded({ extended: true }));

// In-memory array to store todo items
let todos = ['Buy groceries', 'Learn Node.js'];

// Route: View all tasks
app.get('/', (req, res) => {
    res.render('index', { todos: todos });
});

// Route: Add a new task
app.post('/add', (req, res) => {
    const newTodo = req.body.todo;
    if (newTodo && newTodo.trim() !== '') {
        todos.push(newTodo.trim());
    }
    res.redirect('/');
});

// Route: Delete a task by index
app.post('/delete/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
    }
    res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});