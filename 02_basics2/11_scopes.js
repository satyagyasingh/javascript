var a=1000
var a = 233
if(true){
    var a = 30
    console.log("inside scope of if a : ",+a)
}
    
console.log("outide scope a : ",+a)

let c =2000
if(true){
    let c = 20;
console.log("inside scope of if c : ",c)
}
    
console.log("outide scope c : ",c)