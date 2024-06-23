// string interpolation ie ${}

let name = "satyagya"
let place = "GZB"

// console.log(`hi my name is ${name} this place is ${place}`)

let Str = new String("Satyagya@Singh")

console.log(Str)  //[String: 'Satyagya@Singh']
console.log(Str.toUpperCase()) // SATYAGYA@SINGH

console.log(Str.indexOf('S'))  //0

let anotherString = Str.slice(-10,8)
console.log(anotherString)  //agya

Str = Str.replace("Satyagya@Singh" ,"     Satyagya@singh@gmail   ") 

console.log(Str) // "     Satyagya@singh@gmail   "

Str = Str.trim()
console.log(Str)  //Satyagya@singh@gmail

Str = Str.split('@')
console.log(Str) // [ 'Satyagya', 'singh', 'gmail' ]
