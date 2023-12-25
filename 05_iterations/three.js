// for of 

// ["" , "" , ""]
// [{}, {},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps - store unique values , key - value pair

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "Unites States os America")
map.set('FR' , "France")
map.set('IN' , "India")

// console.log(map);

for (const [key,value] of map) { // destructoring of array 
    // console.log(key , ':-' , value);
}

const myObject = {
    game1 : 'NFA',
    game2 : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
} 

// can't use forof in object coz it's not iterablem