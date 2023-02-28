import { useEffect, useState } from 'react'

const AppUseEffect = () => {
    const [data,setData] = useState('Hello');
    const [dataOne,setDataOne] = useState('HelloOne');

    useEffect(()=>{
        console.log('use effect is running!');
    },[data])
    
  return (
    <div>
        {data} <br /><br />
        <button onClick={()=>{
            setData('bye')
        }}>change</button>
        <hr />
        {dataOne} <br /><br />
        <button onClick={()=>{
            setDataOne('byeOne')
        }}>change</button>
    </div>
  )
}

export default AppUseEffect