let arr = ["js" , "python" , "java" , "c++" , "ruby" , "php" , "c#"]

arr.forEach((element , index) => {
    // console.log(`Index ${index} : ${element}`)
})
//arr.forEach((element) => {
//   console.log(element)
//})

//or
function printArray(element , index){
    // console.log(`Index ${index} : ${element}`)
}
arr.forEach(printArray)
//printArray is a callback function
//callback function is a function that is passed as an argument to another function


let nums = [1,2,3,4,5,6,7,8,9,10]

let greaterThanFive = nums.filter((element) => {
    return element > 5
    //or if (element > 5) {
    //   return true;
    // }
})
// console.log(greaterThanFive)
let initialValueOfAccumulator = 0
let sum = nums.reduce((accumulator, element) => {
    return accumulator + element
} , initialValueOfAccumulator)
// console.log(sum)
//reduce function takes two arguments
//1. callback function
//2. initial value of accumulator
// and returns the final value of accumulator after applying the callback 
//function to each element of the array


//implementing map function
let square = nums.map((element) => {
    return element * element
})
console.log(square)
//map function takes a callback function and returns a new array with
//the elements that are returned by the callback function

//implementing the accumulator in shopping cart
let shoppingCart = [
    {
        product: 'phone',
        price: 20000,
        quantity: 1
    },
    {
        product: 'shirt',
        price: 500,
        quantity: 3
    },
    {
        product: 'shoes',
        price: 2000,
        quantity: 2
    }
]
let total = shoppingCart.reduce((acc, item) => {
    return acc + item.price * item.quantity
}, 0)
console.log(`Total amount to be paid is ${total}`)