const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const otherNum = 23.8966

//console.log(otherNum.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'))


// ***********************Math **********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(3,5,6,8,1));
// console.log(Math.max(3,4,7,1));

console.log(Math.random()); // 0 -1 range
console.log((Math.random()*10) + 1) ; // 1 adding so even if it return 0 alteast 1 will be the output

console.log(Math.floor((Math.random()*10) + 1)) ;


// for a given range
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+min)