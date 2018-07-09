"use strict";
export default class Class{
    constructor(number){
        this.number=number;
        this.leader;
        this.listenJoinFlag = false;
        this.joinListener ;
        this.listenAssignFlag = false;
        this.assignListener ;
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
        if(this.listenAssignFlag)
        {
            if(this.assignListener.klasses.find(item => (item === this)))
            {
                let str = `I am ${this.assignListener.name}. I know ${student.getName()} become Leader of Class ${this.number}.`;
                console.log(str);
            }
        }
       
    }
    registerJoinListener(teacher){
       this.joinListener = teacher;
       this.listenJoinFlag = true;

    }
    registerAssignLeaderListener(teacher) {
      this.assignListener = teacher;
       this.listenAssignFlag = true;
        
}
    appendMember(student) {
        student.klass = this;
        console.log(this.listenFlag === true);
        if(this.listenJoinFlag)
        {
            if(this.joinListener.klasses.find(item => (item === this)))
            {
                let str = `I am ${this.joinListener.name}. I know ${student.getName()} has joined Class ${this.number}.`;
                console.log(str);
            }
        }
    }

 
}

