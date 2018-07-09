"use strict";
import Person from "../../src/practice_3/person.js";
class Worker extends Person{
    constructor(name,age)
    {
        super(name,age);
    }

}
Worker.prototype.introduce = function() {
    return "I am a Worker. I have a job.";
  };
exports["default"] = Worker;
module.exports = exports["default"];


