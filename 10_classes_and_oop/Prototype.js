let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Rajesh = function(){
    console.log("Rajesh is present in all subjects");
}

Array.prototype.heyRajesh = function(){
    console.log("Rajesh say Hello");
}

// heroPower.Rajesh();
// myHeros.Rajesh()

myHeros.heyRajesh();    
// heroPower.heyRajesh();      // we gave the access in array for that heroPower has no access

// Inheriteance

const User = {
    user : "Raja",
    email : "raja@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "JS asssignment",
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "RajeshHalder     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Raajesh".trueLength()
"iceTea".trueLength()