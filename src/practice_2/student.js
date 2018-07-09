"use strict";
import Person from "../../src/practice_3/person.js";
class Student extends Person{
    constructor(name,age,klass)
    {
        super(name,age);
        this.klass = klass;
    }

}
Student.prototype.introduce = function() {
    return "I am a Student. I am at Class "+this.klass+".";
  };
exports["default"] = Student;
module.exports = exports["default"];

