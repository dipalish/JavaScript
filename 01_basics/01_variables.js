const accountId = 144556
let accountEmail = "Sharmdipali@gmail.com" // solve scope prblm of var
var accPass = "123456"
accCity = "Jaipur"
let accState;// undefined

//accountId = 2  || not allowed

accountEmail = "Abc@gmail.com"
accPass = "548753"
accCity = "Kolkata"

/*
Prefer not to use var
coz of issue in block scope & functional scope
*/

console.log(accountId)

console.table([accountId, accountEmail, accPass, accCity, accState])