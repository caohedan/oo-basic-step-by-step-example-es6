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
    assignLeader(classLeader){
            this.leader = classLeader;
    }
    isEqual(klass) {
        return klass && this.number == klass.number;
    }
    isLeader(student)
    {
            return this.leader && student && student.isEqual(this.leader);
    }
    
}

