// ************* TASK ***********

let myName = "dipali    "
let myStream = "CS   "

// console.log(myName.trueLength); here we'll be creating a method trueLength

let myHeros = ["hulk" , "spiderman"]

let heroColor = {
    hulk: "green",
    spiderman: "redBlue",

    getSpiderPower : function(){
        console.log(`Spidy color is ${this.spiderman}`);
    }
}

Object.prototype.dipali = function(){
    console.log(`Dipali is present in all objects`);
}

Array.prototype.heyDipali = function(){
    console.log(`Dipali says hello`);
}

// heroColor.dipali()
// myHeros.dipali()
// myHeros.heyDipali()
// // heroColor.heyDipali()

// INHERITANCE

const User = {
    name: "chai",
    email: "chai@ggmail.com"
}

const Teacher = {
    makeVedios: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "Dipali       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"dipali".trueLength()
"Sharma".trueLength()