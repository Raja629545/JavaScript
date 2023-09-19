let score = "33bac";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33 (String to Number)
// "33abc" => NaN (Not a Number)
// "true" => 1; "false" => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => "true" ; 0 => "false"
// " " => "false"
// "Rajesh" => "true"

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);