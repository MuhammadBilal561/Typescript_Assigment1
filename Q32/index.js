"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure 
// that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username.
//  If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive.
//  If 'John' has been used, 'JOHN' should not be accepted.
// ..........................................\\\
// Make a list of five or more usernames called current_users.
let current_users = ['eric', 'alice', 'Bob', 'steve', 'david'];
// • Make another list of five usernames called new_users. 
let new_users = ['Eric', 'bob', 'mike', 'michel', 'jhon'];
// • Loop through the new_users list to see if each new username has already been used.
for (let new_user of new_users) {
    // for case intensitive
    let lower_new_user = new_user.toLowerCase();
    // A flag to indicate if the new username is available or not
    let available = true;
    // Loop through the current_users list and compare with the new username
    for (let current_user of current_users) {
        // case intensitive
        let lower_current_user = current_user.toLowerCase();
        // compare
        if (lower_current_user = lower_new_user) {
            let available = false;
            break;
        }
    }
    //   print  a message based on flag value 
    if (available) {
        console.log(`The username ${new_user} is available.`);
    }
    else {
        console.log(`The username ${new_user} is not available.`);
    }
}
;
