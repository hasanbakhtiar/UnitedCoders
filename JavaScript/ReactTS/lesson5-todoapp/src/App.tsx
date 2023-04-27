import { useState } from "react"
import NewTodo from "./components/NewTodo"
import TodoList from "./components/TodoList"
import { Todo } from "./todo.model"

const App:React.FC = () => {
    const [todos,setTodos] = useState<Todo[]>([])
    const todoAddHandler =(todoText:string)=>{
      setTodos((prevTodos)=>[
        ...prevTodos,
        {id:Date.now().toString(),text:todoText}
      ])
    }
    
  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos}/>
    </div>
  )
}

export default App