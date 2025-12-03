const write = (...args) => document.writeln(...args, "<br>");

class Student {
  name;
  rollNo;
  marks;

  constructor(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }

  getResult() {
    if (this.marks >= 40) {
      return "Pass";
    }

    return "Fail";
  }
}

const s1 = new Student("Jane Doe", "001", 90);
const s2 = new Student("John Doe", "002", 20);
const s3 = new Student("Jason Doe", "003", 50);

write(`${s1.name}'s result: ${s1.getResult()}`);
write(`${s2.name}'s result: ${s2.getResult()}`);
write(`${s3.name}'s result: ${s3.getResult()}`);
