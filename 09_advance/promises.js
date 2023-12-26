// creation
const promiseOne = new Promise(function(resolve , reject){

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()// now it's connected to then 
    },1000)

})

// consumption

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("async 2 resolved ");
})

const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({username : "Cahi" , email : "chai@example.com"})
        
    },1000)
    
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: " dipali ", password : "4323"})
        }
        else{
            reject('ERROR : Smoething went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((user ) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function (resolve,reject) {
    setTimeout( function(){
        let error = true
        if(!error){
            resolve({username : " javascript" , password : "12345"})
        }
        else{
             reject('ERROR: JS went wrong')
        }
    },1000)
    
})

async function consumePromiseFive(){
    try{

        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
} 

consumePromiseFive()

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch(error){
        console.log("E : " , error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(console.log(error))

//promise.all
// yes this is also available , 