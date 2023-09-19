const name = "Rajesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); we use this in old days

// modern days rule to concatinate strings in js

// This is called String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String(`Rajesh`)
console.log(gameName[0]);
// console.log(gameName.___proto__)

// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 2);
console.log(anotherString);

const newStringOne = "   Rajesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rajesh.com/rajesh%halder"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));