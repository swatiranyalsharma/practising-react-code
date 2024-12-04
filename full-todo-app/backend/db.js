const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://root:root@cluster0.blhzi.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports ={
    todo
}