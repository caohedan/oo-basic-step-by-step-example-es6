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
    
    assignLeader(student) {
        if (student && student.klass.equal(this)) {
            this.leader = student;
        } 
    }
    equal(klass) {
        return klass && this.number == klass.number;
    }
    isLeader(student){
            return this.leader && student && student.equal(this.leader);
    }
    
}

