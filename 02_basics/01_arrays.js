// array 

const  myArr = [0 , 1 , 2 , 3 , 4 , 5 ] 

//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies). =>  asked in inerveiw

const myHeros = ["shaktiman" , "nagraj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);

// **************Array Methods **************

myArr.push(6)
myArr.push(7)
//console.log(myArr)

myArr.pop()
//console.log(myArr)

myArr.unshift(9)
// console.log(myArr)

myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.includes(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); // get converted into string

// slice , splice || asked in interveiw

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log("C" , myArr);
console.log(myn2);

// in splice the whole section from 1 to 3 absent in myArr whereas in slice it's there . Also it includes the last value whereas in slice it is excluded
