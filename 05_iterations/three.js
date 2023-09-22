
// [{},{},{}]  -- in array there will bw object

// more loops

// for of loops

const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    // console.log(i);
}

const greetings = " hello world"
for (const i of greetings) {
    // console.log(`Each chracter is ${i}`);
}

// Map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);  

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1' : "spiderman",
    'game2' : "NFS"
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);   // we see that for of ioop in not iterable for object
}