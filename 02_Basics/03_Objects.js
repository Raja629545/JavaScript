// singleton
// object.create()

// Obeject literals

const symb = Symbol("key1")
const jsUser = {
    name : "Rajesh",
    "full name" : "Rajesh Halder",
    [symb] : "mykey1",
    age : 22,
    location : "Kolkata",
    email : "rajesh@google.com",
    isLoggedIn : false,

}

// access the object in two ways

// console.log(jsUser.email); // one type to access obejct element
// console.log(jsUser["email"]); // best way to access obejct element

// now to access the full name the 1st type is useless, that's why we use second type

// console.log(jsUser["full name"]);
// console.log(jsUser[symb]);
// console.log( typeof [symb]);

jsUser.email = "halder@google.com";

// this method lock the obejct element, after that no one can change the value of the element
// Object.freeze(jsUser); 

jsUser.email = "halder@gpt.com";
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello js user");
}
jsUser.greetingsTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());