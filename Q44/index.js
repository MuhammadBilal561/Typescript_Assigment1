"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.
/// A function that accepts a array of items a person wants on a sandwich
function makeSandwich(...items) {
    // A variable to store the summary of the sandwich
    let summary = "You ordered a sandwich with ";
    // A loop to iterate over the items array
    for (let i = 0; i < items.length; i++) {
        // Add the item to the summary
        summary += items[i];
        // Add a comma or an "and" depending on the position of the item
        if (i < items.length - 2) {
            summary += ", ";
        }
        else if (i == items.length - 2) {
            summary += " and ";
        }
    }
    // Add a period to the end of the summary
    summary += ".";
    // Print the summary
    console.log(summary);
}
makeSandwich("cheese", "ham", "lettuce", "tomato");
makeSandwich("peanut butter", "jam");
makeSandwich("egg");
