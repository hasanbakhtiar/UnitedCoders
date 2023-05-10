import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from './store';
import { add } from './features/todoSlice';

const App:React.FC = () => {
    const [title,setTitle] = useState<string>("");
    const dispatch = useAppDispatch();
    const selectTodo = useAppSelector(state=>state.todos);
    const formSubmit = (e:React.FormEvent)=>{
            e.preventDefault();
            dispatch(add(title));
            setTitle("");

    }
  return (
    <div>
        <form onSubmit={formSubmit}>
            <input type="text" onChange={(e:any)=>setTitle(e.target.value)} value={title}/>
            <button type='submit'>add</button>
        </form>
        <ol>
            {selectTodo.map((i:any)=>{
                return <li key={i.id}>{i.title}</li> 
            })}
        </ol>
    </div>
  )
}

export default App