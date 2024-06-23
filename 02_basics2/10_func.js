function addCartPrice(num1,num2){
    return num1+num2;
}
// console.log(addCartPrice(100,200))

//but you can not tell how many items are coming to the ffunction so we can use REST OPERATOR
function addCartPriceAgain(...nums){
    console.log(nums)
    let sum  =0;
    for(x in nums){
        sum+=nums[x]
    }
    return sum;
}
function addCartPriceAgain2(item1,item2,...nums){
    console.log(nums)
    let sum  =0;
    for(x in nums){
        sum+=nums[x]
    }
    return sum;
}

// console.log(addCartPriceAgain(100,200,3000,4000))
// console.log(addCartPriceAgain2(100,200,3000,4000))

// PASSING OBEJT TO FUNCTION

function handleObeject(obj){
    let currency ="rupees"
    if(obj.name === "John Cena")currency="Million dollor"
    return `name is ${obj.name} & he earns ${obj.salary +" "+ currency}  per year`
}

let user = {
    name : "John Cena",
    salary : 200
}

console.log(handleObeject(user))
//another method
console.log(handleObeject({
    name : "Satyagya",
    salary : 20
}))
