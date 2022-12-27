const info = 5.7;
// console.log((Math.random()*100).toFixed);
// console.log((Math.random()*100).toExponential);
// console.log((Math.random()*100));
// console.log(Math.floor(info));
// console.log(Math.ceil(info));



const allData = [];

function addData(newData){
    allData.push(newData);
}

function delData(){
    allData.pop();
}




addData('new value1')
addData('new value2')
addData('new value3 ')
// delData()

console.log(allData);

