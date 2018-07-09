"use strict";
import Person from "../../src/practice_8/person.js";
export default  class Student extends Person{
    constructor(id,name,age,klass)
    {
        super(id,name,age);
        this.klass = klass;
    }
    introduce() {
        if (this.klass.isLeader(this)) {
            return `${super.introduce()} I am a Student. I am Leader of ${this.klass.getDisplayName()}.`;
        }
        return `${super.introduce()} I am a Student. I am at ${this.klass.getDisplayName()}.`;
    }
    getName(){
        return this.name;
    }
    getClass()
    {
        return this.klass;
    }
    isEqual(student) {
        return student && this.id === student.id;
    }
}





