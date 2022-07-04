const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/tasks', (req, res) => {
    const TASK_QUERY = "SELECT * FROM todo_manager.tasks";
    connection.query(TASK_QUERY, (err, response) => {
        if(err) console.log(err)
        else res.send(response)
    })
})

app.post('/addTasks', (req, res) => {
    const ADD_QUERY = `insert into todo_manager.tasks(task) values ("${req.body.task}")`;
    connection.query(ADD_QUERY, (err) => {
        if(err) console.log(err)
        else res.send('task has been added')
    })
})

app.delete('/deleteTask/:id', (req, res) => {
    const DELETE_QUERY = `DELETE FROM todo_manager.tasks where(taskId=${req.params.id})`;
    connection.query(DELETE_QUERY, (err,res) => {
        if(err) console.log(err)
        // else res.send('task has been deleted')
    })
})

app.listen(5000, () => {
    console.log('running on port 5000')
})