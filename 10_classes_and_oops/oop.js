const user = {
    username : "dipali",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user deatils from database");

        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails);      // reference
// console.log(user.getUserDetails());    // execution
// console.log(this);

function User(username,loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("dipali " , 22 , true)
const userTwo = new User("ChaiAurCode" , 22 , false)

// here new is used as without it the values will be override

console.log(userOne.constructor);
console.log(userTwo);