function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("P");
    console.log("A");
    console.log("L");
    console.log("I"); 
}

// sayMyName// refrence
// sayMyName() // execution

function addTwoNo (num1 , num2){// parameters
    // console.log(num1 +   num2);

    // let result = num1 + num2
    // return result

    return num1 + num2
}

// addTwoNo(3, null) // arguments

const result = addTwoNo(3,5)

// console.log("Result : " ,result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a udsername");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("dipali"));

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400 , 500 , 2000));

const user = {
    username : "dipali",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)
handleObject({
    username : "sammy",
    price : 399
})

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));