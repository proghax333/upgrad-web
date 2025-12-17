export class Square {
  constructor(size) {
    this.size = size;
  }

  area() {
    return this.size * this.size;
  }

  perimeter() {
    return this.size * 4;
  }
}

// Task 5: Rectangle

export class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}
