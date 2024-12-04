const express = require('express');
const { createToDo, updateToDo } = require('./types')
const {todo} = require('./db')
const app =express()
app.use(express.json());
app.get('/todo',function(req,res){
    res.status(200).json("get request completed");
})

app.post('/todo',async function (req,res){
    const requestPayload = req.body;
    const parsedPayload = createToDo.safeParse(requestPayload);
    if(!parsedPayload.success){
        res.status(411).json("Wrong input");
    }
    const result = await todo.create({title : requestPayload?.title, desciption: requestPayload.description, completed : requestPayload.completed})
    console.log(result);
    res.status(200).json("todo inserted");
})

app.put('/todo',function(req,res){
    res.status(200).json("put request completed");
})

app.listen(3000);


