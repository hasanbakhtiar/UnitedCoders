import React,{useImperativeHandle, forwardRef, useRef, useState} from 'react'

const MyInput =forwardRef((props,ref)=>{
  const [fontSize,setFontSize] = useState(14);
useImperativeHandle(ref,()=>({
  hi:sayHi,
  incFont:()=>{setFontSize(fontSize+2)},
  decFont:()=>{setFontSize(fontSize-2)}
}))
  const sayHi=()=>{
    alert("Hello")
  }
  return(
    <input style={{fontSize}} type="text" />
  )
})


const AppUseImperativeHandleElpachoErnandes = () => {
  const inputRef = useRef();
  const handleClick =()=>{
    inputRef.current.hi()
  }
  
  return (
    <div>
      <h1>AppUseImperativeHandleElpachoErnandes</h1>
      <MyInput ref={inputRef}/><button onClick={handleClick}>add</button>
      <button onClick={()=>{inputRef.current.decFont()}}>-</button>
      <button onClick={()=>{inputRef.current.incFont()}}>+</button>
      
    </div>
  )
}

export default AppUseImperativeHandleElpachoErnandes