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
const loadDoc=()=> {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.querySelector('p').innerHTML = this.responseText;
      }
      xhttp.open("GET", "data/info.txt");
      xhttp.send();
    
  }

document.querySelector('button').onclick = loadDoc;