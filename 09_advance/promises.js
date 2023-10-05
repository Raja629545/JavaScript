const promisesOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, networking
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();  // if we did not connect resolve with the "then", it never executed
    }, 1000)
})

promisesOne.then(function(){
    console.log("Task is consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
         console.log("Async Task 2");
         resolve();
    }, 1000)
}).then(function(){
    console.log("Async Task 2 is complete");
})

// Data consumption

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Rajesh", email : "halder@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// another case

const promisesFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username : "Raja", email : "123"});
        }else{
            reject('Error: Something went Wrong');
        }
            
    }, 1000)
})

 promisesFour
 .then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// async way to handle promise
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username : "JavaScript", email : "123"});
        }else{
            reject('Error: JS went Wrong');
        }
            
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const promise = await promiseFive;
        console.log(promise);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/Raja629545')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// About Fetch()

// The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

