import toString, { toLowerCase } from "./task1-strings/strings.js";
import { Rectangle, Square } from "./task2-and-5-class/shapes.js";
import { mean } from "./task3-stats/stats.js";
import { formatted, printFormatted } from "./task4-math/math.js";
import { dist, sin } from "./task6-geometry/geometry.js";

// Task 1
{
  const x = [1, 2, 3];
  const result = x.map(toString).map(toLowerCase);

  console.log("Task 1: Strings: ", result);
}

// Task 2
{
  const square = new Square(10);

  console.log("Task 2: Square:");
  console.log("Area =", square.area());
  console.log("Perimeter =", square.perimeter());
}

// Task 3
{
  const nums = [1, 2, 3, 4, 5];

  console.log("Task 3: Stats:");
  console.log("Mean =", mean(nums));
}

// Task 4
{
  const n = 10.1234;
  console.log("Task 4: Math:");

  console.log("Formatted: ", formatted(n, 2));
  printFormatted(n, 2);
}

// Task 5
{
  const rectangle = new Rectangle(10, 20);

  console.log("Task 5: Rectangle:");
  console.log("Area =", rectangle.area());
  console.log("Perimeter =", rectangle.perimeter());
}

// Task 6
{
  const point1 = [0, 0];
  const point2 = [3, 4];

  console.log("Task 6: Geometry");
  console.log(
    "Distance between",
    point1,
    " and",
    point2,
    " = ",
    dist(point1, point2)
  );

  console.log("sin(pi/6)", sin(Math.PI / 6));
}
