//Stack (primitive)   makes copy
//Heap (non -primitive)  gives reference

//object(non-prim)

let userOne = {
    email : "userOne@gmail.com",
    contact :"32900230"
}
let userTwo = userOne;

userTwo.contact = "982337623"

console.log(userOne.contact)
console.log(userTwo.contact)