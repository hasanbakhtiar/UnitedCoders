import {useState} from 'react'

const AppUseState = () => {

    const [count,setCount] = useState(0);


    const increment =()=>{
        setCount(count+1)
    }
    
    
  return (
    <div className='mt-5'>
        <button className='btn btn-danger' onClick={()=>{
           if (count>0) {
            setCount(count-1)
           }
        }}>-1</button>
       <span className='mx-3'>{count}</span>
        <button className='btn btn-success' onClick={increment}>+1</button>

    </div>
  )
}

export default AppUseState