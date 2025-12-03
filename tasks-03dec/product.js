/*
Write a JavaScript program to demonstrate polymorphism using method overriding. Create a class Product with the properties name and price. Define a method getPrice() that returns the base price. Create two derived classes: DigitalProduct PhysicalProduct Override the getPrice() method in both classes: Digital product should return the base price. Physical product should return the base price plus a delivery charge of 50. Create objects of both types and display the final prices.
*/

const write = (...args) => document.writeln(...args, "<br>");

class Product {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class DigitalProduct extends Product {
  getPrice() {
    return super.getPrice();
  }
}

class PhysicalProduct extends Product {
  getPrice() {
    const newPrice = super.getPrice() + 50;
    return newPrice;
  }
}

const product1 = new DigitalProduct("Digital Book 1", 100);
write(`Product: ${product1.name} | Price: ${product1.getPrice()}`);

const product2 = new DigitalProduct("Earphones 1", 200);
write(`Product: ${product2.name} | Price: ${product2.getPrice()}`);
