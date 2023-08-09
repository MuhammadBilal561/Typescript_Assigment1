"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// ex 30
let usernames = ['admin', 'eric', 'jhon', 'mike', 'steve'];
// make if test
if (usernames.length == 0) {
    console.log(`We need to find some users!`);
}
else {
    // loop
    for (let username of usernames) {
        // for admin
        if (username == 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        // otherwise print simple message
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
;
// ............
// remove all usernames form array
usernames = [];
// now test again
if (usernames.length == 0) {
    console.log(`We need to find some users!`);
}
else {
    // loop
    for (let username of usernames) {
        // for admin
        if (username == 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        // otherwise print simple message
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
;
