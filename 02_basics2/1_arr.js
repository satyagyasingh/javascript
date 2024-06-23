//array

let arr = [0,1,2,3,4,5]

let arr2 = new Array(1,2,3,4)

// arr.push(6)
// console.log("A ",arr)

// arr.pop()
// console.log("B " ,arr)

arr.unshift(-2)
// console.log("C ",arr)

arr.shift()   // removes and return first element
// console.log("D ",arr)

let joint = arr.join() // return string of array elements
// console.log(typeof joint , " ", joint)

console.log(myArr.includes(10))
// slice and splice
//slice return the values in the range provided ,doesn't incliide last element
// splice actually slices or modifies the array and return the values in range included


let newArr = arr.slice(1,4)
console.log(newArr,"   ", arr)

let newArr2 = arr.splice(1,4)

console.log(newArr2,"   ", arr)
