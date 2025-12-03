const write = (...args) => document.writeln(...args, "<br>");

class Vehicle {
  brand;
  speed;

  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  start() {
    write("Starting vehicle...");
  }
}

class Car extends Vehicle {
  fuelType;

  constructor(brand, speed, fuelType) {
    super(brand, speed);
    this.fuelType = fuelType;
  }

  start() {
    write(`Starting car (fuel type: ${this.fuelType})`);
  }
}

class Bike extends Vehicle {
  constructor(brand, speed) {
    super(brand, speed);
  }

  start() {
    write("Starting bike...");
  }
}

const vehicle = new Vehicle("Brand 1", 100);
const car1 = new Car("Brand 1", 120, "Petrol");
const bike1 = new Bike("Brand 2", 150);

vehicle.start();
car1.start();
bike1.start();
