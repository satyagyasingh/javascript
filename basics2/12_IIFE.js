//immediately invoked function expression

//ifee is used to avoid global scope pollution that is to avoid the variables to be used in global scope .
//In other words it is used to avoid the variables to be used outside the block of code.
//it is used in cases like data privacy,avoiding global scope pollution etc.

//()()  first bracket is for function and second bracket is for calling the function

(function(){
    console.log("hi there the function is called immediately");
})()

//passing values to IIFE
let num1 = 10
let num2 = 20
let sum = (function(a,b){
    return a+b
})(num1,num2)

console.log(sum) //30