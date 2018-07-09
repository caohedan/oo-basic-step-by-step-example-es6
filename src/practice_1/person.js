"use strict";

function Person(name ,age ){
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function(){
    return "My name is " + this.name + ". I am " + this.age + " years old.";
}
exports["default"] = Person;
module.exports = exports["default"];