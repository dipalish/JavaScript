// Immediately Invoked Function Expressions (IIFE)
// usage - to prevent from the pollution of global scope(sometimes it causes issues)

(function chai() {
    // named iife
    console.log(`DB CONNECTED`);
}
)(); // must  end when we have another function further 

((name) => { // arrow func works too
    // unnamed iffe - no name
    console.log(`DB CONNECTED TWO ${name}`);
})("dipali") 
