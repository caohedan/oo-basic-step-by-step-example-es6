"use strict";
import Person from "../../src/practice_7/person.js";
export default  class Teacher extends Person{
    constructor(name,age,klass)
    {
        super(name,age);
        this.klass = klass;
    }
    introduce () {
        if(!this.klass)
        return super.introduce()+" I am a Teacher. I teach No Class."
        else
        return super.introduce()+" I am a Teacher. I teach Class "+this.klass.getNum()+".";
    }
    introduceWith(student)
    {
        if(student.getClass() === this.klass)
        return super.introduce()+` I am a Teacher. I teach ${student.getName()}.`
        else
        return super.introduce()+` I am a Teacher. I don't teach ${student.getName()}.`
    }
}




