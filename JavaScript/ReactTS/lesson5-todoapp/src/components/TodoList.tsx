import React from 'react'

const TodoList:React.FC<any> = ({items}) => {
  return (
    <>
     {items.map((fd:any)=>(
        <li key={fd.id}>{fd.text}</li>  
     ))} 
    </>
  )
}

export default TodoList