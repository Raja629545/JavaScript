const coding = ["java", "python", "ruby", "cpp", "js","swift"]

// type-1 --->  
coding.forEach(function (val){
    // console.log(val);
})

// type-2 ------->
coding.forEach((item) => {
    // console.log(item);
})

// type-3 ----------->
function printme(val){
    console.log(val);
}
// coding.forEach(printme)

coding.forEach((item, index, arr) => {
//    console.log(item, index, arr);
})

// +++++++++++++++++++++ fetch the obejct in an array ++++++++++++++++++++++++++        

const myCoding = [
    {
        languageName : "JavaScript",
        fileName    : "JS"
    },
    {
        languageName : "java",
        fileName    : "java"
    },
    {
        languageName : "python",
        fileName    : "py"
    },
    {
        languageName : "Ruby",
        fileName : "rb"
    }
]

myCoding.forEach((value) => {
    console.log(value.languageName);
})