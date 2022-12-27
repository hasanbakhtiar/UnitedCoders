// function info(comingData){
//     let mydata = comingData;
//     return mydata
    
// }
// console.log(info(10));

// function Car(brand,model,year){
    
//     this.infoBrand = brand;
//     this.infoModel = model;
//     this.infoYear = year;


// }
// Car.prototype.color = 'white';
// const infoCar = new Car("BMW","X5",2022);
// console.log(infoCar.color);

import { Car } from "./class/Car.js";
import { Moto } from "./class/Moto.js";

const infoCar = new Car("BMW",'X5',2022);
console.log(infoCar.calculateSpeed(400,5));

const infoMoto = new Moto('Yamaha',"s500",2002);
console.log(infoMoto.calculateSpeed(300,9));
