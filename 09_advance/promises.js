const promiseOne = new Promise(function(resolve , reject){

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()// now it's connected to then 
    },1000)

})

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
            reject('ERROR : Smoething wnet wrong')
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

async