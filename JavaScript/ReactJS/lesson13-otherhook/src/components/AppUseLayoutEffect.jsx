import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [message,setMessage] = useState('hi');
    useLayoutEffect(()=>{
        alert('chnged');
        setMessage('hello')
    },[])
    
  return (
    <div>
        {message}
    </div>
  )
}

export default AppUseLayoutEffect