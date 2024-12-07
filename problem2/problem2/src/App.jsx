import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
function PollRequest() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(async (res) => {
        const json =  await res.json();
        // console.log(json);
        setTodos(json);
      })
  }, []);
  return (
    <div>
     {
      // console.log(todos)
    
      JSON.stringify(todos)
     }
    </div>
  )
}

function ToDo({title, description}){
  // const title="first todo" ;
  // const description="first desc";
  return (
    <div style = {{ color: 'blue', border: "2px solid black", marginRight: "1000px"
    }}>
      <h1>Title : {title}</h1><h3>Description : {description}</h3>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)
  // return (<>
  //   <ToDo title={"hey"} description={"hey"}></ToDo>
  // </>)
  return (
  <PollRequest></PollRequest>
  )
}

export default App
