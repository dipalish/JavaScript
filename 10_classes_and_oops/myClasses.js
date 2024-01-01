class User{
    constructor(username , email , password){// as soon as new is used
        this.username = username;
        this.email  = email;
        this.password = password;

    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai" , "chai@gmail.com" , "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// BTS

function User1(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("tea" , "tea@gmail.com" , "1123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());