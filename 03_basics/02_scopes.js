// var c = 300 || to slove the problem of var let was intoduced 
if(true){
    let a = 10 
    const b = 20

    // console.log("INNER " , a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(params) {
    const username = "dipali"

    function two(params) {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
}

one()


if(true){
    const username = "dipali"
    if(username == "dipali"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(website);

// +++++++++++++++++++++ intresting +++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num + 1
}

addTwo(5) // can't acees before decl. in this case
const addTwo = function (num) {
    return num + 2
}

// note := object { } are not scope otherwise all { } are in scope