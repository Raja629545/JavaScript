// var vs let vs const
// scope
// let and const cannot declare in the same scope but var can be declare in the same scope


function test(){
    let a = "Hello";
    let

    if(true){
        let a = "Hi";
        console.log(a);   // This is called variable shadowing where a is printed 2 value {Hi, Hello}
    }
    console.log(a);
}

//test();

function test1(){
    var a = "Hello";
    let b = "Bye";

    if (true) {
       let a = "Hi";
     //  var b = "GoodBye";     //! This is called "Illegal Shadowing" because when we declare under let  then  we did not declare that variable under "var"
       console.log(a);
       console.log(b);
    }

    console.log(a);
    console.log(b);
}

//test1();

//Declaration without initialization
    var a;      // now if we declare var in this way it is fine
    let b;      // same with the let
    const c = 5;    // but in the const we must initialize the value of the const variable otherwise it give an error

    // Important note : Var and let can be re-initialized but const can never been initialized

function test2(){
    let a = 56;
    function test(){
        var b = 23;
        let a = 34;

        console.log(a);
    }
    console.log(a);

}

//test2();

//! Hoisting in JavaScript

//? Temporaral dead zone - Time between declaration and initialization of let and const variable
//! It is the term to describe the state where variable are in the scope but they are not declare yet

function abc(){
    console.log(a, b, c);

    const c = 30;
    let b = 20;
    var a = 10;  // for this a is undefined
}
abc();