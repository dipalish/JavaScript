function SetUserName(username){

    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username , email, password){
    SetUserName.call(this , username) // call is used to hold the reference and this means the this of createUser will be used

    this.email = email
    this.password = password
}

const chai = new createUser("chai" , "chai@fb.com" , "12345")

console.log(chai);