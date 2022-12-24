// function name(params){
//     // code
// }

// function infoData(){
//     console.log("hello js");
// }

// infoData();

// NaN  = not a number

// function calculate(numbOne = 100, numbTwo = 30) {
//   let totalNumb = numbOne + numbTwo;
//   return totalNumb;
// }

// console.log(calculate(30));

// const infoFunc = function(){
//     console.log('Hello js');
// }

// infoFunc();

// (function info (a) {
//   console.log(a);
// })(5);

// const car = {
//     brand:"BMW",
//     model:'X5',
//     year:2022,
//     calculateSpeed:function(km,hour) {
//         // return this.brand + " " + this.model  + "speed is:" + (km/hour)+ 'km/h';
//         return `${this.brand+this.model} speed is:${km/hour}km/h`;
//     }
// }

// console.log(car.calculateSpeed(400,5));



// function(){}

// Arrow funtion
// ()=>{}

// const infoFunc = (newData)=>{
//             return newData;
// }

// console.log(infoFunc('hello arrow function'));


// let switchData = false;

// const checkData = ()=>{
//     return switchData ? 'switch is true' : 'switch is false'; 
// }
// console.log(checkData());





const infoAccess = true;



const dataInfoOne=(comingData)=>{
    return `comingdata is:${comingData}`;
}

const dataInfoTwo =(dataAccess,fetchNumbOne,fetchNumbTwo)=>{

    let totalData = fetchNumbOne + fetchNumbTwo;

    dataAccess ? console.log(dataInfoOne(totalData)) : console.log(dataInfoOne('empty'));

}

dataInfoTwo(infoAccess,100,200);

