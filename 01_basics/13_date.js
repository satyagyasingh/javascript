let d = Date.now()

console.log(d)  // give miliseconds passes from 1970 jan 1st

let date = new Date("2023-05-16");
// console.log(date)           // 2023-05-16T00:00:00.000Z
// console.log(date.toDateString())        // Tue May 16 2023
// console.log(date.toTimeString())    // 00:00:00 GMT+0530 (India Standard Time)
// console.log(date.toLocaleString())// 5/16/2023, 12:00:00 AM
// console.log(date.getFullYear()) // 2023
// console.log(date.getMonth()) //0 based so gives 4

console.log(date.getSeconds()) // 0

let now = new Date()
console.log(now) // current date and time
console.log(now.toDateString()) // current date in string format