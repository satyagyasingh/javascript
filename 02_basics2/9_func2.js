function loginMessage(username){
    if(!username){       //if(username === unddefined || username === "") both are same
        //empty string is considered as false so is undefined
        return "please enter username"
    }
    return `${username}  just logged in`
}

console.log(loginMessage("satyagya"))
console.log(loginMessage(""))
console.log(loginMessage())