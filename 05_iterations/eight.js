const myNum = [1, 2, 3, 4]

// const myTotal = myNum.reduce(function (acc, currVal) {
//     console.log(`acc is ${acc} and currval is ${currVal}`);
//     return acc + currVal;
// }, 7)

const myTotal = myNum.reduce((acc, currval) => ( acc + currval), 0)

// acc --> Accumulator    
// currval --> Current Value 

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);