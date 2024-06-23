let marvelHeros = ["Ironman","thor","flash"]
let dcHeros = ["superman" , "batman"]
let indianHeros = ["shaktiman" , "nagraj"]

// marvelHeros.push(dcHeros) // pushes array inside array but we dont want that

// console.log(marvelHeros ,"\n") // [ 'Ironman', 'thor', 'flash', [ 'superman', 'batman' ] ] 

let bahri_heros = marvelHeros.concat(dcHeros)   // concat joins and returns both the aray

// console.log(bahri_heros)

// to join multiple array we can use spreader

let allHeros = [...marvelHeros,...dcHeros,...indianHeros] // multiple arrays

//  console.log(allHeros)

let myArr = [1,2,3,5,[6,7,[8,9]] , 10,11,[12,13,[14,15,[16]]]]  // array depth is 3


let flatenArr = myArr.flat(2)
// console.log(flatenArr)

flatenArr = myArr.flat(Infinity)
// console.log(flatenArr)

console.log(Array.isArray("cheeta"))
let letters = Array.from("satyagya")
// console.log(letters)

let score1 = 100
let score2 =200
let allScores = [122,300,500]

let scores = Array.of(score1,score2,allScores)
// console.log(scores)


let objArr = Array.from({"name":"satyagya" ,  // it doesn't work as we should also tell to make array of keys or values
    "age":120,
    "weight" :140 // world heavyweight champion
})
// console.log(typeof objArr , "  ", objArr)

//rather we can use
let realObjArr = Object.values({"name":"satyagya" ,  // this methos return object
    "age":120,
    "weight" :140 // world heavyweight champion
})
// console.log(typeof realObjArr , "  ", realObjArr)


