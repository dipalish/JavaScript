const user = {
    username : "dipali",
    price : 999,

    welcomeMess : function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
    }
}

user.welcomeMess()
user.username = "sam"
user.welcomeMess()

// this - current context

console.log(this); // here it's empty obj coz it's in node whereas if it's in browser it's window

function chai() {

    // console.log(this); - gives a lots of values
    let username = "dipali"
    // console.log(this.username); || undefined 

    // this => not for function
}

// chai()

const chai2 = function () {
    let username = "dipali"
    // console.log(this.username); || undefined 
}

// chai() 
// same here too

const chai3 = () => {
    let username = "dipali"
    console.log(this); // {}
}
// chai3()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
//}

// If {} there should be return

// const addTwo = (num1 , num2) => num1 + num2 
//  Arrow Functions Implicit Return means no need to write return

// const addTwo = (num1 , num2) => (num1 + num2 )
//If () no return 

const addTwo = (num1 , num2) => ({username : "hitesh"}) 
// returning objects need to wrap in  ()
    
console.log(addTwo(2,3));

