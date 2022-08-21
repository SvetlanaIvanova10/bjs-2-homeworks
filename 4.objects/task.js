function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((acc, item, index, arr) =>{
    acc+=item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    } else {
      return acc;
    } 
  }, 0);
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}