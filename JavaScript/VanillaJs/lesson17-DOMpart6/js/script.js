
import { users } from "../data/users.js";
const input = document.querySelectorAll('input')
const btn = document.querySelector('button');
const form  = document.querySelector('form')
const formAlert = document.querySelector('#form-alert');



form.onsubmit=(e)=>{
    e.preventDefault()
  if (!input[0].value || !input[1].value) {
    formAlert.innerHTML = 'Plase, fill this input ';
    formAlert.className = 'alert alert-warning'
  }else{
    if (input[0].value === users[0].email && input[1].value === users[0].password) {
        formAlert.innerHTML = 'Login successfull';
        formAlert.className = 'alert alert-success'
       } else{
        formAlert.innerHTML = 'password or email is wrong';
        formAlert.className = 'alert alert-danger'
       }
  }
}

btn.onclick=()=>{
    if (input[1].attributes[0].value === 'password') {
        input[1].attributes[0].value = 'text';
        document.querySelector('i').className = 'fa-solid fa-eye-slash'
    }else{
        input[1].attributes[0].value = 'password';
        document.querySelector('i').className = 'fa-solid fa-eye'
    }
}

