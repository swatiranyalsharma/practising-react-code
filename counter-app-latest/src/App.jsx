import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setToDos] = useState([
    {
      title: 'Go to Gym',
      description : 'Go to gym at 7',
      completed : 'false',
    },
    {
      title: 'Do coding',
      description : 'Do coding at night',
      completed : 'false',
    }
  ])
  return (
  <div>
    <input type='text' placeholder='title'></input>
    <input type='text' placeholder='description'></input>
    <input type='checkbox' placeholder='completed'></input>
    <button onClick={addToDo}>Add To Do</button>
    {
      todos.map(function(todo){
        return <ToDo title={todo.title} description={todo.description} completed={todo.completed} />
      })
    }
  </div>
  )

  function addToDo(){
    setToDos([...todos,{
      title :'New to',
      description: 'New desc',
      completed: 'true',
    }])
  }
}

function ToDo(props){
  return <div style={{border:10}}>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h3>{props.completed}</h3>
  </div>
}

export default App
