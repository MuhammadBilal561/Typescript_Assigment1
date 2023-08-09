"use strict";
// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged,
//  return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.
// ex 42
let magicians = ['Mike', 'steve', 'harry'];
// Write a function called make_great() that modify the array;
function make_great(names) {
    // Create a copy of the original array
    let great_names = [...names];
    // Loop through the copy and modify each name
    for (let i = 0; i < great_names.length; i++) {
        great_names[i] = great_names[i] + " the Great";
    }
    // Return the new array
    return great_names;
}
// use function
function show_magicians(magicians) {
    // use for loop
    for (let magician of magicians) {
        console.log(magician);
    }
}
;
// Call the function make_great with a copy of the array of magicians' names
let great_magicians = make_great(magicians);
// Call show_magicians with each array to show the results
console.log("Original names:");
show_magicians(magicians);
console.log("Modified names:");
show_magicians(great_magicians);
