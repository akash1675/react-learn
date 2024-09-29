import AppName from "./AppName";
import AppTodo from "./AppTodo";
import TodoItem from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
import "./App.css";


function App() {
  return (<center class='todo-container'>
    <AppName />
    <AppTodo />
    <TodoItem />
    <TodoItem2/>
  </center>
  );
}

export default App
