// map, filter and reduce

/*************************************************************************************** */
// What is map() ? -> map() is basically used for creating a new array using the existing array by applying function function to each element of the first array



//! Pollyfill for map()

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this));
    }

    return temp;
};

const nums = [1, 2, 3, 4]

const multiplyThree = nums.myMap((num, i, arr) => {
    return num * 3;
})
//console.log(multiplyThree);


/**************************************************************************************/

// What is filter() ? -> It takes each element of the array and applied a particular condition of each element if the element fullfil the condition then it will be executed

//Polyfill for filter()

Array.prototype.myFilter = function(cb){
    let temp =[];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) temp.push(this[i]);

    }
    return temp;
}

const nums1 = [2, 4, 6, 8];

const moreThanTwo = nums1.myFilter((num) => {
    return num > 4;
})

//console.log(moreThanTwo);

/****************************************************************************************** */

// What is reduce() ? -> This method reducees an array values down to just 1 value

//Ployfill for reduce()

//arr.reduce((acc, curr, i, arr) => {}, initialValue)
Array.prototype.myReduce = function(cb, initialValue){
    var accumulator = initialValue;

    for(let i = 0; i < this.length; i++){
        accumulator = accumulator? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}


const nums2 = [1, 2, 3, 4];

const sum = nums2.reduce((acc, curr, i, arr) => {   // accumulator is basically the result of previous computation  , Now if there is no initial value then it take first element of the array as accumulator
    return acc + curr;
}, 0)

//console.log(sum);

/*************************************************************************** */

// Question 1 : map() vs forEach()

const arr = [2, 3, 4, 7]

const mapResult = arr.map((ar) => {
    return ar + 2;     // map create a new array from an existing array
})

const forEachResult = arr.forEach((ar, i) => {
    arr[i] = ar + 3;   // But forEach update the original array
})

//console.log(mapResult, forEachResult, arr);


/*************************************************************************************************** */

// map, filter and reduce - O/P Based Questions

// Question 1 - Return only name of students in Capital
// Question 2 - Return only details of those students who scored greater the 60
// Question 3 - sum of marks of all students

// Question 4 - Return name of the students who secured more than 60 --> (combining map and filter)

// Question 5 - Return total marks for students with marks greater than 60
//      after 20 marks have been added to those who scored less than 60 --> (chaning three method combine)


let students = [
    {name : "Rajesh", rollNumber : 31, marks : 80},
    {name : "Jenny", rollNumber : 15, marks : 69},
    {name : "Kaushal", rollNumber : 34, marks : 78},
    {name : "Dilpreet", rollNumber : 45, marks : 36}
];

//const names = students.map((stu) =>(stu.name.toUpperCase()))      // Q1

//const details = students.filter((stu) => stu.marks > 60);           // Q2

//const sumMarks = students.reduce((acc, curr) => (acc+curr.marks), 0)  // Q3

//const nameDetails = students.filter(stu => stu.marks > 60).map(stu => stu.name);  // Q4

const totalMarks = students.map((stu) => {
    if(stu.marks < 60){
        stu.marks += 20;
    }
    return stu;                 // This add 20 marks whose marks less than 60
})
.filter((stu) => stu.marks > 60)   // return the students whose marks greater than 60
.reduce((acc, curr) => acc + curr.marks, 0);    // finally add student marks


//console.log(names);
//console.log(details);
//console.log(sumMarks);
//console.log(nameDetails);
console.log(totalMarks);