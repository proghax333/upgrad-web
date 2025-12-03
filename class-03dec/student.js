function Student(name, age, grade, subjects) {
  this.name = name;
  this.age = age;
  this.grade = grade ?? "-";
  this.subjects = subjects ?? [];
  this.printInfo = function () {
    console.log(`Name: ${this.name}
Age: ${this.age}
Grade: ${this.grade}
Subjects: ${this.subjects.join(", ")}`);
  };
}

// Student.prototype.printInfo = function () {
//   console.log(`Name: ${this.name}
// Age: ${this.age}
// Grade: ${this.grade}
// Subjects: ${this.subjects.join(", ")}`);
// };

const atmanand = new Student("Atmanand Nagpure", 23, "A", [
  "Mathematics",
  "Theory of Computation",
  "Digital Electronics",
]);

atmanand.printInfo();

const rohan = new Student("Rohan Jadhav", 23, "A", [
  "Web Development",
  "Backend Engineering",
  "Database Systems",
]);

rohan.printInfo();
