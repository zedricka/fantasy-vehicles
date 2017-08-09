# Fantasy Vehicles

### Objective
  A local exotic car company has asked you to create an easier method for inputing new vehicles into their system. Use your knowledge of object-orientated programming and classes to implement their new entry system. You will only be using ES6 for this project.
  
### Getting Started
- Fork and clone the repo
- Create a new JS file named **fantasy-vehicles.js**. All work will be done here
- Use **node** to test your file & console.logs
  
### Classes and Methods

#### Vehicle Class

##### Constructor
 Should have/declare the following parameters
  - make
  - color
  - type
  
##### Methods
- Should have a method named **vehicleDetails** that returns a string of all the vehicle details. **Ex. Your vehicle is a *type*, made by *make*  and is *color***.
- Should have a method named **vehicleColor** that sets the property **color**.

#### SuperCar Class
  Will be a subclass of Vehicle
  
  ##### Constructor
  Should have/declare the following parameters
  - make
  - color
  - type
  - topSpeed
  - cost
  
  ##### Methods
  - Should have a method named **superCarDetails** that returns a string that concatenates the information from the super class getter method + information about topspeed and cost. **Ex. super class method info + 'with *top speed* of speed and a cost of *cost***.
  - Should have a method named **priceTag** that sets the property **cost**
  
  #### Motorcycle Class
  Will be a subclass of Vehicle
  
  ##### Constructor
  Should have/declare the following parameters
  - make
  - color
  - type
  - topSpeed
  - cost
  
  ##### Methods
  - Should have a method named **bikeDetails** that returns a string with information from the super class getter method + information about topspeed and cost. **Ex. super class method info + 'with top speed of *topSpeed* and a cost of *cost*'**.
  - Should have a method named **bikeSpeed** that sets the property **topSpeed**
  
  ### Testing
   Must show instructor that your classes and methods work before moving on.
  1. Instantiate new instances of each class and provide neccesary data.
  2. Verify your class methods are working by changing values using the each classes setter methods. This should allow you to change values even after instantiation.
  3. Verify your getter methods work and are printing out the data in correct format. Ex.
  ![](http://i.imgur.com/IAX0jIA.png)
  
  
  ### Strecth Goals
  1. Add more parameters to each subclass 
  2. Create more getter & setter methods for each class
