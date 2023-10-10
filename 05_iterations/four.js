const myObject = {
    js : 'javascipt',
    cpp : 'C++',
    rb: 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject}`);
}

const programming = ["js" , "rb" , "py" , "java", "cpp"]

for (const key in programming) { // key in array are from 0 , 1 ,2 .....
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);
}// not iteratable 