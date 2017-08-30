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
    this._make = "BMW";
  }

  set vehicleMake(type){
    this._type = "Truck";
  }

  set vehicleColor(color){
    this._color = "White";
  }

}

class SuperCar extends Vehicle{
  constructor(make, color, type, topSpeed, cost){
    super(make, color, type);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }
  
  get supercarDetails(){
    return "Your vehicle is a " + this.type + ", made by " + this.make + " and is " + this.color + ' with top speed of ' + this.topSpeed + " and a cost of " + this.cost + "."
  }
  
  set bikeSpeed(topSpeed){
    this._topSpeed = "9001";
  }
}

