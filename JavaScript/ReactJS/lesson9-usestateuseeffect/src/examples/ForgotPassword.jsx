import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const userEmail = "info@email.com"
const ForgotPassword = () => {


  const navigate = useNavigate();
  
  
  const [inputEmail,setInputEmail] = useState('');
  const [alertStyle,setAlertStyle] = useState('');
  const [alertText,setAlertText] = useState('');


  const checkForm =e=>{
    e.preventDefault();
    if (!inputEmail) {
      setAlertStyle('warning');
      setAlertText('please, fill input!');
    }else{
        if (inputEmail === userEmail) {
          setAlertStyle('success');
          setAlertText('send email for reset password');
          navigate('/');
        }else{
          setAlertStyle('danger');
          setAlertText('WRONG EMAIL!');
        }
    }
  }
  
  
  return (
    <div className='mt-5'>
       <form onSubmit={checkForm}>
       <p className={`alert alert-${alertStyle} col-3`}>{alertText}</p>
        <input onChange={e=>{setInputEmail(e.target.value)}} type="text" />
        
        <button>send</button>
       </form>
    </div>
  )
}

export default ForgotPassword