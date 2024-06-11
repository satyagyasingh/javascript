
let user = {
    name : "satyagya",
    salary : 10,
    greet : function (){
        console.log("Hello "+this.name)
    }
}

// user.greet()  //Hello satyagya
// user.name = `John Cena`
// user.greet()    //Hello John Cena
// console.log(user) // { name: 'John Cena', salary: 10, greet: [Function] }

//another way to add function to object
user.greetAgain = function(){
    console.log("Hello again "+this.name)
}
// console.log(user) // { name: 'John Cena', salary: 10, greet: [Function], greetAgain: [Function] }


console.log(this)
function add(a,b){
    console.log(this)
}
// add(10,20) //this gives a lot of things in nodejs but in browser it gives window object 

let addAgain = (a,b)=>{
    console.log(this)
}
// addAgain(10,20) // {}  this gives empty object


//ARROW FUNCTION

let addTwo = (a,b)=>{
    return a+b
}
console.log(addTwo(10,20)) //30
//Or let addTwo = (a,b)=>a+b
// or let addTwo = (a,b)=>{return a+b}


//returning object
let addThree = (a,b)=>({sum : a+b})

console.log(addThree(10,20)) //{ sum: 30 }
//or let addThree = (a,b)=>{return {sum : a+b}}
//not like this let addThree = (a,b)=>{sum : a+b}