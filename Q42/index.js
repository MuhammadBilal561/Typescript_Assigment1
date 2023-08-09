"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians
//  by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified
// ex 41....
let magicians = ['Mike', 'steve', 'harry'];
// Write a function called make_great() that modify the array;
function make_great(Magicians) {
    // use for loop
    for (let i = 0; i < magicians.length; i++)
        magicians[i] = magicians[i] + ' The Great';
}
// use function
function show_magicians(magicians) {
    // use for loop
    for (let magician of magicians) {
        console.log(magician);
    }
}
;
// Call the function to modify the array
make_great(magicians);
// Call the function to display the array
show_magicians(magicians);
