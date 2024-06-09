// function fun(){
//     console.log("System hai bhai")
// } neeche wala code bhi same hai
// var fun = function(){
//     console.log("System hai bhai")

// }
function father(){
    return "pappa"
}

function greet(name){
    console.log(typeof name)
    console.log(`kaise ho ${name()}`)
}
greet(father)

