
import './App.css';
import Todo from "./components/Todo.jsx"
import TodoTitle from './components/TodoTitle.jsx';



function App() {
  
  return (
    <>
      <TodoTitle/>
      <div>
        <input type="text" onChange={(event)=>{
          console.log(event.target.value)


        }}/>
        <button>Add to do</button>
      </div>
      <Todo task="Learn React"/>
      <Todo task="finish semicon"/>
      <Todo task="intern"/>
      <Todo task= "earn 300$"/>


    </>
  )
}

export default App
