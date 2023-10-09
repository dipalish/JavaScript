let myDate = new Date();
// console.log(myDate );
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(typeof myDate); // asked in interveiw

// let myCreateDate = new Date(2023 , 0 , 23);
// let myCreateDate = new Date(2023 , 0 , 23, 12 , 5);
let myCreateDate = new Date("01-14-2023");
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000)); || asked in interveiw convert into secs 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday : "long",
    //timeZone : ''
})