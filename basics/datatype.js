//  7 primitive
// number ,string ,undefined , boolean , null, bigInt , Symbol

// non primitive
 // array ,object , function


let marks = [10,2,3,1,2]

function goHome(){
    console.log("plz go home")
}

let aadmi = {
    name :"Natwarlal",
    age :39,
    vill : "Silicon Valley"
}

console.log(typeof(marks) ,"\n", typeof(goHome),"\n" ,typeof aadmi)

console.log(marks ,"\n", goHome,"\n" ,aadmi)


let id = Symbol('123')
let anotherId = Symbol('123')  // sybol return unique values everytime it is called 

console.log(id, anotherId)
console.log(typeof id ,typeof anotherId)

console.log(id === anotherId)  // ===  operator stops any type conversion and checks if both values are of same types and have same values

