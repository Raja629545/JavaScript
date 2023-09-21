function myName(){
    console.log("My name is Rajesh Halder");
}

// myName();

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    let result = number1 + number2;
    return result;
}

const result = addTwoNumber(4, 3);
// console.log("Result: ", result);

function loginUserMessage(username ){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rajesh"))
// console.log(loginUserMessage()) // when we do not pass any parameter it shows "undefined" 

function calculatePrice(...num1){  // ... operator store the value in array which is pass in a function
    return num1;
}

// console.log(calculatePrice(200, 400, 500));

const user = {
    username : "Rajesh",
    price  : 500
}

function handleObject(anyObejct){
    console.log(`username is ${anyObejct.username} and price is ${anyObejct.price}`);
}

// handleObject((user))
handleObject({
    username : "sam",
    price : 399
})

const myNewArr = [200, 400, 500 ,600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArr));