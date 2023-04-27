import React, { useRef } from 'react'

type NewTodoProps = {
    onAddTodo:(todoText:string)=>void
}


const NewTodo:React.FC<NewTodoProps> = ({onAddTodo}) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    
const todoSubmitHandler =(e:React.FormEvent)=>{
    e.preventDefault();
    const enterText = textInputRef.current!.value;
    console.log(enterText);
    if (!enterText) {
        alert('fill input');
    }else{
        onAddTodo(enterText);
        textInputRef.current!.value = "";
    }
     
}
  return (
    <form onSubmit={todoSubmitHandler}>
        <input  type="text" ref={textInputRef}/><button>add</button>
    </form>
  )
}

export default NewTodo