import React,{useImperativeHandle, forwardRef, useRef, useState} from 'react'

const MyInput =forwardRef((props,ref)=>{
  const [fontSize,setFontSize] = useState(14);
  const [styleName,setStyleName] = useState('danger');
  const [value,setValue] = useState('');
useImperativeHandle(ref,()=>({
  hi:sayHi,
  incFont:()=>{setFontSize(fontSize+2)},
  decFont:()=>{setFontSize(fontSize-2)},
  changeColor:newColor
  
}))
  const sayHi=()=>{
    alert("Hello")
  }

  const newColor =()=>{
    setValue(styleName);
  }
  return(
   <>
    <h1 className={`text-${value}`}>AppUseImperativeHandleElpachoErnandes</h1>
    <input onChange={e=>{setStyleName(e.target.value)}} style={{fontSize}} type="text" />
   </>
   
  )
})


const AppUseImperativeHandleElpachoErnandes = () => {
  const inputRef = useRef();
  const handleClick =()=>{
    // inputRef.current.hi()
    inputRef.current.changeColor();
  }
  
  return (
    <div>
      <MyInput ref={inputRef}/><button onClick={handleClick}>add</button>
      <button onClick={()=>{inputRef.current.decFont()}}>-</button>
      <button onClick={()=>{inputRef.current.incFont()}}>+</button>
      
    </div>
  )
}

export default AppUseImperativeHandleElpachoErnandes