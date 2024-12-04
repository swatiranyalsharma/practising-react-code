//write basic express boilerplate code
//with express.json() middleware

const express = require('express')
const { createTodo, updateTodo } = require('./types')
const {todo} = require('./db')
const app = express()
app.use(express.json());
app.get('/todo', (req, res) => {

    res.send('Hello World!')
})
app.post('/todo', (req, res) => {
    const creatBody = req.body;
    const parsedPayload = createTodo.safeParse(creatBody);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you send wrong input"
        })
    }
    res.send('Hello World!')
})
app.put('/todo', (req, res) => {
    const updateBody = req.body;
    const parsedPayload = updateTodo.safeParse(updateBody);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you send wrong input"
        })
    }
    todo.create({
        parsedPayload
    })
    res.send('Hello World!')
})
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})