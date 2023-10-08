const name = "dipali"
const repoCount = 50

// string interpolation

//console.log(name + repoCount + " Value"); || not use this

//console.log(`Hello my name is ${name} and my repo is ${repoCount}`) || recommended

const gameName = new String('dipali-sh-abc')

//console.log(gameName[0]);
//console.log(gameName.__proto__); || all methods available are listed here



//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-8,4)
//console.log(anotherString);

//Negative index counts back from the end of the array — if start < 0, start + array.length is used.

//start < -array.length or start is omitted, 0 is used.
// -10 < -6 

const newStringOne = "   dipali    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dipali.com/dipali%32sh"

console.log(url.replace('%32' , '-'));
console.log(url.includes('di'));
console.log(gameName.split('-'));
