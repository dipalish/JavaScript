// types on the basis of how they are stored in memory and how we're accessing them
// 1. Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// they are called by value 

// objects and browser events   - mastery
//Javascript is a dynamic typing language

// 2. Reference (Non primitive)

// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object 

       */

// *****************************************************************************************************************

// Stack (Primitive ) || Heap (Non Primitive)

let myYouTubeName = "abcSh@gmail.com"
let anotherName = myYouTubeName
anotherName = "chaiaurCode"

console.log(myYouTubeName)
console.log(anotherName)

// here the copy of  myYouTubeName is given not actual value

let oneUser = {
    name01 : "dipali",
    email : "abcSh@gmail.com"
}

let twoUser = oneUser

// here  twoUser pointing to same value

twoUser.email = "qwer@gmail.com"

console.log(oneUser.email)
console.log(twoUser.email)
