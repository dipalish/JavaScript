// singleton - when it's made by  constructor
// Object.create

// object literals - not singleton

const mySum = Symbol("Key1")

const JsUser = {
    name : "Dipali", // name is string here
    "full name" : "Hitesh Choudhary",
    [mySum] : "mykey1", // asked in interveiw
    age : 18,
    location : "Kolkata",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySum]);

JsUser.email = "dfssggdf@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "gffdsfgf@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}

console.log(JsUser.greeting); // only ref is given
console.log(JsUser.greeting()); // now executed
console.log(JsUser.greetingTwo());