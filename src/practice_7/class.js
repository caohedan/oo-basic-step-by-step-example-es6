"use strict";
export default class Class{
    constructor(number){
        this.number=number;
    }
    getNum(){
        return this.number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
}
