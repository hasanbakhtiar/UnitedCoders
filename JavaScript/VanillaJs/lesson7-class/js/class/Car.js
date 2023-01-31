
class Car {
    constructor(brand,model,year){
        this.ibrand = brand;
        this.imodel = model;
        this.iyear = year;
    }

    calculateSpeed(km,hour){
        return `${this.ibrand} ${this.imodel} speed is: ${(km/hour).toFixed(0)} km/h`;
    }   
}

export {Car}