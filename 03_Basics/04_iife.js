(function chai(){
    console.log(`DB Connected`); // This type of IIFE called "Named IIFE"
})();  // Here "IIFE is called"

// ()() now in first parenthesis  we write the defination of the function
// and in the second is called for execution

((name) => {
    console.log(`DB Connected Two ${name}`); // This is "Unnamed IIFE"
    // when we write two IIFE we keep in mind to put a semicolon of previous IIFE "
})("Rajesh")

