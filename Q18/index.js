"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
// Declare an array of places to visit
let places = ["mounteverst", "k2 mountain", "Istanbul", "Tokyo", "Paris"];
// Print the array in its original order
console.log("Original order:", places);
// Sort the array in alphabetical order and store it in a new variable
let sortedPlaces = places.slice().sort();
// Print the sorted array without modifying the original array
console.log("Alphabetical order:", sortedPlaces);
// array is still in its original order
console.log('original order:', places);
// reverse order
let reverseorderPlaces = places.slice().reverse();
console.log('Reverse Order: ', reverseorderPlaces);
// stiil original order
console.log('original order:', places);
//  now reverse the order of list
places.reverse();
console.log('reverse order:', places);
// again reverse the order
places.reverse();
console.log('again reverse:', places);
// sort the array
places.reverse();
console.log('sorted order in alphabetical:', places);
// again sort the array
places.reverse();
console.log("sorted order in reverse alphabetical:", places);
