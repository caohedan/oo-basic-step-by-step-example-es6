"use strict";
import Person from "../../src/practice_4/person.js";
export default class Worker extends Person{
    constructor(name,age)
    {
        super(name,age);
    }
    introduce () {
        return super.introduce()+" I am a Teacher. I have a job.";
      }
}





