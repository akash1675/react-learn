import AppName from "./AppName";
import AppTodo from "./AppTodo";
import TodoItem from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
import "./App.css";


function App() {
  return (
    <center className='todo-container'>
      <AppName />
      <AppTodo />
      <div className="items-container">
        <TodoItem />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App
