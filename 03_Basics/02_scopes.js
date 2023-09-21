let a = 400   /// outside the parenthesis called it Global Scope

if(true){
    let a = 20;
    const b = 30;  /// under this parenthesis called it Block Scope
    var c = 40;
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Rajesh"

    function two(){
        const website = "youtube"
        
    }
    // console.log(website); // under the block scope variable is not accessed in global scope & also child can access parent's variable but parent not.

    two()

}

one()

addOne()
function addOne(num){
    return num + 1
}

// addTwo()
const addTwo = function(num){  // this is callled Hoisting where we cannnot call the function before its declaration
    return num + 2;
}
// console.log(addTwo(4));