import React, { useMemo, useState } from 'react'
import users from '../data/users';
const AppUseMemo = () => {
    const [count,setCount] = useState(0);
    const [userId,setUserId] = useState(null);
    const getUsersRows =()=>{
        console.log('getUsersRows running...');
        return users.map(i=><li onClick={()=>{setUserId(i.id)}}  key={i.id}>{i.name}</li>)
    }
    
    const userRows = useMemo(()=>getUsersRows(),[userId])
    
  return (
    <div className='container my-5'>
        <span>{count}</span>
        <button onClick={()=>{setCount(count+1);
        console.log('qunatity');
        }}>increment</button>

        <hr />
        
        <p>users</p>
        {userId}
        {userRows}
    </div>
  )
}

export default AppUseMemo