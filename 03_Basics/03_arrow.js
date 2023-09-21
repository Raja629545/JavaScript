const user = {
    username: "rajesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "rajesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "rajesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "rajesh"
    console.log(this);
}


// chai()

const addTwo = (num1, num2) => {
    return num1 + num2      // This is called "explicitly return"
}

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )   // This is called "implicitly return"

const addTwo2 = (num1, num2) => ({username: "hitesh"})  // when we return obejct we must rapped into parenthesis


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()