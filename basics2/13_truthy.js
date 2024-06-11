//Truthy values and falsy values

//false , 0 , '' ,"", null , undefined , NaN , 0n (bigInt), are falsy values
// rest all are truthy values

//some truthy values
// " " , [] , {} , function(){} are all truthy values

//to check weather a array is empty we can use the following code
let arr = []
if(arr.length){
    console.log("array is not empty")
}

//same for an object
let obj = {}
if(Object.keys(obj).length){
    console.log("object is not empty")
}
//or
if(Object.values(obj).length){
    console.log("object is not empty")
}

// and for a function to check if it is empty or not
let func = function(){}

if(func.toString().trim() !== "() => {}"){ 
    console.log("function is not empty")
}


// you can write multiple statements in an if block separated by comma

let a = 10
let b = 20
if(a===10 && b===200)console.log("a is 10"),console.log("b is 20");


// nullish coalescing operator
//it is used to check if a value is null or undefined then it will return the value after the operator

let x = null
let y = 20
let z = x ?? y

// it is used in complex cases like this
let user = {
    name : "satyagya",
    // salary : 10,
    greet : function (){
        console.log("Hello "+this.name)
    }
}

let salary = user.salary ?? 0
console.log(salary) //0