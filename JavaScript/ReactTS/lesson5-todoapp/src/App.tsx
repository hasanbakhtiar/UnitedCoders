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
    const todoDeteleHandler =(todoId:string)=>{
      setTodos((prevtodo)=>{
        return prevtodo.filter((t:any)=>t.id !== todoId)
      })
    }
  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} ondeleteTodo={todoDeteleHandler}/>
    </div>
  )
}

export default App