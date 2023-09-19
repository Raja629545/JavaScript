//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Rajesh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3 (for details read of datatypes)


/*
Return type of variables in JavaScript :-

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive data Types), Heap (Non-Primitive DataTypes)

let myName = "Rajesh"

let anotherName = myName
anotherName = "Raja"

console.log(anotherName);
console.log(myName);

let userOne = {
    email : "user@email.com",
    upi   : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "rajesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);