import React from 'react'

const TodoList:React.FC<any> = ({items,ondeleteTodo}) => {
  return (
    <>
     {items.map((fd:any)=>(
        <li key={fd.id}>{fd.text}<button onClick={ondeleteTodo.bind(null,fd.id)}>del</button></li>  
     ))} 
    </>
  )
}

export default TodoList