require('dotenv').config();
const fs = require('fs');
const express = require('express');
const path = require('path');
const { readFile } = require('fs');

const { signUp, signIn, signOut, getFileContent} = require('./controllers/userController');
const { addTask, removeTask, updateTask, getAllTasks } = require('./controllers/taskController');

const PORT = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', getFileContent);

app.post('/sign-up', signUp);
app.post('/sign-in', signIn);
app.post('/sign-out', signOut);

app.post('/add-task', addTask);
app.delete('/remove-task', removeTask);
app.put('/update-task', updateTask);
app.get('/get-all-tasks', getAllTasks);



app.listen(PORT, () => {console.log(`Server started listening on PORT ${PORT}`)});