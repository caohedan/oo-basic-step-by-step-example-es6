"use strict";
import Person from "../../src/practice_10/person.js";
export default class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = [];
        if (klasses) {
            this.klasses = this.klasses.concat(klasses);
        }
    }

    buildKlassesStr() {
        let Str = "";
        for (let kclass of this.klasses) {
            Str += kclass.getNum();
            if (kclass !== this.klasses[this.klasses.length - 1])
                Str += ", ";
        }
        return Str;
    }
    introduce() {
        if (this.klasses.length === 0)
            return super.introduce() + " I am a Teacher. I teach No Class."
        else
            return super.introduce() + " I am a Teacher. I teach Class " + this.buildKlassesStr() + ".";
    }
    introduceWith(student) {
        if (this.klasses.find(kclass => kclass.equal(student.getClass())))
            return super.introduce() + ` I am a Teacher. I teach ${student.getName()}.`
        else
            return super.introduce() + ` I am a Teacher. I don't teach ${student.getName()}.`
    }
}





