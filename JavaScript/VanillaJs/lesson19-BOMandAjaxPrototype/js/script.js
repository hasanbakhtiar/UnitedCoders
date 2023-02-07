// class Car{
//     constructor(brand,model,year){
//         this.ibrand = brand;
//         this.imodel = model;
//         this.iyear = year;
//     }
// }
// Car.prototype.color = 'yellow'
// const myCar = new Car("BMW","X5",2022);

// console.log(myCar.color);

// info()
// // function decleration
// function info(){
//     console.log('hello');
// }

// infoOne()
// // function expression
// const infoOne=function(){
//     console.log('hello1');
// }


"use strict"
// const loadDoc=()=> {
//     const xhttp = new XMLHttpRequest();

//     xhttp.onload = function() {
//         document.querySelector('p').innerHTML = this.responseText;
//       }
//       xhttp.open("GET", "data/info.txt");
//       xhttp.send();
    
//   }

// document.querySelector('button').onclick = loadDoc;

// setTimeout(()=>{},time)

// 1000ms  = 1s 

// const info = ()=>{
//   console.log('setTimeOut running');
// }
// setTimeout(info,1000);

// const info = ()=>{
//   console.log('setInterval running');
// }
// const interval =  setInterval(info,1000);

// document.querySelector('button').onclick=()=>{
//     clearInterval(interval)
// }
// setInterval(()=>{},time)


const preloader = document.querySelector('.preloader');
const wrapper = document.querySelector('.wrapper');
wrapper.style.display = 'none'

setTimeout(()=>{
  wrapper.style.display = 'block';
  preloader.style.display = 'none'
},2000);

setInterval(()=>{
  document.querySelector('.time').innerHTML = new Date();
},1000);
