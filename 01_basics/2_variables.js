const name = "satya"
let age 

console.log(typeof age)
age = '7saal'

let nulltype =  null
// dont use ""var"" as they do not have funcctionality if scope
let netWorth = 0
console.log()
console.table([name,typeof age])

console.log(typeof nulltype)// object type while undefined is of type undefined


// typecasting
console.log(typeof netWorth,netWorth)

netWorth = String(netWorth)

console.log(typeof netWorth,netWorth)

netWorth = "23rp"

netWorth = Number(netWorth) 

console.log(typeof netWorth , netWorth) //all characters inside netWorth string are not numbers so value will NaN  (not a number)
console.log(typeof NaN)  // wow this is of type number great!
netWorth = 23
console.log(netWorth , "rupya")


let zero = Boolean("haha")
console.log(zero)
