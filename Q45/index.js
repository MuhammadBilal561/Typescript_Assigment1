"use strict";
// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs,
//  such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
// Define a function that takes a manufacturer, a model name, and optional keyword arguments
function makeCar(manufacturer, model, ...args) {
    // Create a car object with the required properties
    let car = { manufacturer, model };
    // Loop through the optional arguments and add them to the car object
    for (let [key, value] of args) {
        car[key] = value;
    }
    // Return the car object
    return car;
}
// Call the function with the required information and two other name-value pairs
let myCar = makeCar("Toyota", "Corolla", ["color", "silver"], ["feature", "sunroof"]);
// Print the object that's returned
console.log(myCar);
