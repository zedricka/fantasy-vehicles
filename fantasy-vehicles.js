console.log('test') // returns test

class Vehicle {
  constructor(make, color, type){
    this._make = make;
    this._color = color;
    this._type = type;
  }

  get make(){
    return this._make;
  }
  get color(){
    return this._color;
  }

  set make( make ){
    if (typeof(make) === 'string'){
      this._make = make;
    }else{
      throw new TypeError('Vehicle.make must be a string');
    }
  }

  set color( color ){
    if (typeof(color) === 'string'){
      this._color = color;
    }else{
      throw new TypeError('Vehicle.make must be a string');
    }
  }
}

console.log("Your vehicle is a ")