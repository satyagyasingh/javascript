const arr = [1,2,3,4,5,6]

for(const num of arr){
    // console.log(num);
}

let map = new Map()
map.set('name','satyagya')
map.set('class','giri hui')
map.set('age','32')


// let map2 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ]);
// console.log(map)

for(const key of map){ //this key is an array and contains key and value
    // console.log(key)
}

//rather we can use destructuring to get key and value

for (const [key,value] of map){
    // console.log(key + ' : ' + value)
}


const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        console.log(key + ' : ' + value);
    }
}

//the below code will not work as obj is not iterable
// for (const key of obj) {
//     console.log(key);
// }

//but we can use Object.keys() to get the keys of the object
// for (const key of Object.keys(obj)) {
//     console.log(key);
// }

