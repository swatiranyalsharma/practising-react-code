import { useEffect, useState } from 'react'
import  axios  from 'axios';
function App() {
  const [id, setId] = useState(1);
 
  return (
    <>
    <button onClick={() => { setId(1)}}>1</button>
    <button onClick={() => { setId(2)}}>2</button>
    <button onClick={() => { setId(3)}}>3</button>
    <button onClick={() => { setId(4)}}>4</button>
    <ToDo id={id}  ></ToDo>
    </>
  )
}
function ToDo({id}){
  console.log('ToDo is called');
  const [todo, setTodo] = useState({});
  useEffect(() => {
    axios.get("https://dummyjson.com/todos/"+id).then((response) =>{
      setTodo(response.data);
    });
   },[id]);
  return (
    <div style={{border : "1px solid black"}}>
      <h1>
        {todo.id}
      </h1>
      <h3>
        {todo.todo}
      </h3>
    </div>
  )
}

export default App
