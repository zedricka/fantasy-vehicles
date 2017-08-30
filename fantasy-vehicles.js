console.log('test') // returns test

class Vehicle {
  constructor(make, color, type){
    this._make = make;
    this._color = color;
    this._type = type;
  }

  get vehicleDetails(){
    return "Your vehicle is a " + this.type + ", made by " + this.make + " and is " + this.color + ".";
  }

  set vehicleMake(make){
    if(typeof(make) === "string"){
        this._make = "BMW";
    }else{
      throw new TypeError("Not a string baka");
    }
  }

  set vehicleMake(type){
    if(typeof(type) === "string"){
        this._type = "truck";
    }else{
      throw new TypeError("Not a string baka");
    }
  }


  set vehicleColor(color){
    if(typeof(color) === "string"){
        this._color = "White";
    }else{
      throw new TypeError("Not a string baka");
    }
  }

}

class SuperCar extends Vehicle{
  constructor(make, color, type, topSpeed, cost){
    super(make, color, type);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }
  
  get supercarDetails(){
    return "Your vehicle is a " + this._type + ", made by " + this._make + " and is " + this._color + ' with top speed of ' + this._topSpeed + " and a cost of " + this._cost + "."
  }
  
  set bikeSpeed(topSpeed){
    if(typeof(topSpeed) === "string"){
        this._topSpeed = "9001";
    }else{
      throw new TypeError("Not a string baka");
    }
  }


  set bikeCost(cost){
    if(typeof(cost) === "string"){
        this._cost = "420";
    }else{
      throw new TypeError("Not a string baka");
    }
  }

}

// let newVehicle = new Vehicle();
let newSuperCar = new SuperCar("BMW", "Truck", "White", "9001", "420");

console.log (newSuperCar.supercarDetails);