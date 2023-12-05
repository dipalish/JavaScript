//console.log("2" > 1)
// console.log("02" > 1) || so make sure to compare one which are of same data type coz they might cause some issues sometimes

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Here equality check (==) and comparison behaves different . comparison converts null to no. 0 and then compares that's why 1 is F & 3 is T.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// gives F in all scenarios

// NOTE : WE SHOULD AVOID  NULL AND UNDEFINED

// ===   =>  not only it checks value but data type also
