"use strict";
export default class Class{
    constructor(number){
        this.number=number;
        this.leader;
    }
    getNum(){
        return this.number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }

    equal(klass) {
        return klass && this.number == klass.number;
    }
    isLeader(student){
            return this.leader && student && student.equal(this.leader);
    }
    assignLeader(student) {
        if (student && student.klass.equal(this)) {
            this.leader = student;
        } else {
            console.log("It is not one of us.");
        }
    }

    appendMember(student) {
        student.klass = this;
    }
}

