const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const myArr = ["java", "py", "rb", "cpp", "swift"]
for (const key in myArr) {
       console.log(myArr[key]);
}  // for in loop properly not work in array

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
                // for in loop not work in map because it is not iterable
for (const key in map) {
   console.log(map[key]);
}