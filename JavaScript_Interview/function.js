// Function in JavaScript


//  Q1 - What is function Declaration??
function square(num){
    return num * num;
}

// Q2 - What is function Expression?
// --> When function store in a variable
const square1 = function(num){
    return num * num;
}

//Q3 - What is First Class Function??
// --> When a function is treated like a variable

function displaySquare(fn){
    console.log("Square is " + fn());
}

console.log(displaySquare(square));

// Q4 - What is IIFE(Immediately Invoked Function Expression)
(function square(num){
    return num * num;
})();

// Q5 - IIFE - O/P Based Question

(function (x) {
    return (function (y){
        console.log(x); // ans is 1
    })(2);
})(1);

// Q6 - function scope

var num1 = 20,
    num2 = 3,
    name = "Rajesh Halder";

function multiply(){
    return num1 * num2;
}

console.log(multiply()); // Return 60

// A nested function example

function getScore(){
    var num1 = 3,
        num2 = 2;


    function add(){
        return name + "scored " + (num1 + num2);
    }
    return add();
}
console.log(getScore()); // Returns Rajesh scored 6

//***************************************************************** */

// Q7 - function scope - O/P Based question

for (let i = 0; i < 5; i++) {
   setTimeout(function(){
    console.log(i);
   }, i * 1000);
}

// now for particular this question if there be "var" instead of let then it will print 5 5 5 5 5 but for let it will have a block scope for that reason it will print 0 1 2 3 4

//************************************************************************/

// Q8 - function Hoisting

functionName();
function functionName(){
    console.log("Rajesh Halder");
}
//functionName();                   // function hoisting

console.log(x);                     // variable hoisting

var x = 25;
console.log(x);