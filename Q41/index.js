"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
// make array
let magicians = ['Mike', 'steve', 'harry'];
// use function
function show_magicians(magicians) {
    // use for loop
    for (let magician of magicians) {
        console.log(magician);
    }
}
;
// Call the function with the array as an argument
show_magicians(magicians);
